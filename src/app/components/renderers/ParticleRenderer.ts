import { AudioData, HandData } from '../../App';
import { alphaHex } from './alpha';
import { ParticleConfig } from '../../config/ParticleRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { timeScale } from '../../motion/clock';

type ParticleCfg = typeof ParticleConfig;

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PARTICLE RENDERER (Key 3)
 * ═══════════════════════════════════════════════════════════════════════════
 * Creates massive soft particles that grow/shrink with hand open/close.
 * Finger count controls speed. Clapping triggers explosive burst.
 * 
 * ALL PARAMETERS NOW IN: /config/ParticleRendererConfig.ts
 * ═══════════════════════════════════════════════════════════════════════════
 */

class Particle {
  x: number;
  y: number;
  vx: number; // Velocity X
  vy: number; // Velocity Y
  size: number;
  color: string;
  baseSize: number;
  targetSize: number;
  alpha: number = 1; // Opacity

  constructor(x: number, y: number, color: string, scale: number, cfg: ParticleCfg) {
    this.x = x;
    this.y = y;
    const velocityRange = cfg.physics.initialVelocity;
    this.vx = (Math.random() - 0.5) * velocityRange;
    this.vy = (Math.random() - 0.5) * velocityRange;
    
    // Particle size from config
    const [minSize, maxSize] = cfg.size.baseRange;
    this.baseSize = (minSize + Math.random() * (maxSize - minSize)) * scale;
    this.size = this.baseSize;
    this.targetSize = this.baseSize;
    this.color = color;
  }

  /** Seconds it has been alive: it thins away at the end of its life rather than all at once. */
  age = 0;

  /**
   * One step. `open` is how open the hand is, 0 a fist to 1 wide open; `to`
   * is the hand it follows, if any.
   */
  update(
    open: number,
    to: { x: number; y: number } | null,
    vibrationIntensity: number,
    speedMultiplier: number,
    cfg: ParticleCfg,
  ) {
    this.age += 0.016 * speedMultiplier;
    // Open: full and large. Closed: small and quiet, but still there.
    this.targetSize = this.baseSize * (cfg.size.shrinkMultiplier + (cfg.size.growthMultiplier - cfg.size.shrinkMultiplier) * open);
    // A few seconds each, so an open hand never fills the frame solid.
    const life = Math.max(0, 1 - Math.max(0, this.age - 2.2) / 1.8);
    const want = cfg.controls.openOpacity * (0.45 + 0.55 * open) * life;
    this.alpha += (want - this.alpha) * 0.08;

    if (vibrationIntensity > 0) {
      this.vx += (Math.random() - 0.5) * vibrationIntensity * cfg.explosion.forceMultiplier * speedMultiplier;
      this.vy += (Math.random() - 0.5) * vibrationIntensity * cfg.explosion.forceMultiplier * speedMultiplier;
      this.targetSize = this.baseSize * (1.2 + vibrationIntensity * cfg.explosion.growthFactor);
    }

    // The open hand draws them after it, swirling round it; a fist lets them settle.
    if (to && open > 0.05) {
      const dx = to.x - this.x;
      const dy = to.y - this.y;
      const d = Math.hypot(dx, dy) + 1;
      const pull = 0.035 * open * cfg.controls.follow;
      this.vx += (dx / d) * pull * Math.min(d, 400) * 0.05 - (dy / d) * pull * 2.2;
      this.vy += (dy / d) * pull * Math.min(d, 400) * 0.05 + (dx / d) * pull * 2.2;
    }

    this.size += (this.targetSize - this.size) * cfg.size.transitionSpeed;

    this.x += this.vx * speedMultiplier;
    this.y += this.vy * speedMultiplier;

    // Calmer with a fist: they slow right down.
    const damping = cfg.physics.damping - (1 - open) * 0.06;
    this.vx *= damping;
    this.vy *= damping;
  }
}

export class ParticleRenderer {
  /** Live copy of ParticleConfig, with any slider overrides applied. */
  private cfg = ParticleConfig;

  setParams(values: ParamValues) {
    this.cfg = withOverrides(ParticleConfig, values);
  }

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private time = 0;
  private vibrationTimer = 0;
  private isExploding = false; // Prevent multiple explosions
  /** How open the hands are, eased: 0 a fist, 1 wide open. */
  private open = 0.6;
  private lastKick = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    this.time += (0.016) * timeScale();

    // BACKGROUND FADE - Creates motion trails
    this.ctx.fillStyle = `rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // CLAPPING EXPLOSION
    let vibrationIntensity = 0;
    if (handData.clapping && !this.isExploding) {
      // The music's own beats come in as claps when no hand is in view: they
      // burst, but only her real clap flashes the screen.
      this.createExplosionParticles(colors, handData.synthetic ? 0 : this.cfg.explosion.flash);
      this.isExploding = true; // ⭐ CRITICAL FIX: Prevent infinite explosions!
    }
    
    // ⭐ CRITICAL FIX: Reset explosion flag when NOT clapping
    if (!handData.clapping) {
      this.isExploding = false;
    }
    
    // Vibration decay
    if (this.vibrationTimer > 0) {
      this.vibrationTimer -= 0.004;
      vibrationIntensity = Math.max(0, this.vibrationTimer);
    }

    // FINGER COUNT SPEED CONTROL
    // ═════════════════════════════════════════════════════════════════════════
    // The shared clock's tempo (the finger count) sets the speed, as on every visual.
    const speedMultiplier = Math.max(0.2, Math.min(3, timeScale()));
    const W = this.canvas.width;
    const H = this.canvas.height;
    const hands = [handData.left, handData.right].filter((h): h is NonNullable<typeof h> => !!h);
    const openOf = (h: NonNullable<HandData['left']>) =>
      h.openness ?? (h.gesture === 'fist' ? 0 : h.gesture === 'open' ? 1 : 0.6);
    let open = 0.6;
    if (hands.length) open = Math.max(...hands.map(openOf));
    this.open += (open - this.open) * 0.12;

    // Each hand gives off particles where it is: many when open, a few when closed.
    for (const hand of hands) {
      const o = openOf(hand);
      const rate = this.cfg.emission.closedHandRate + (this.cfg.emission.openHandRate - this.cfg.emission.closedHandRate) * o;
      if (Math.random() < rate) {
        this.particles.push(new Particle(
          hand.position.x * W,
          hand.position.y * H,
          colors[Math.floor(Math.random() * colors.length)],
          1,
          this.cfg,
        ));
      }
    }
    // No hand in view: a point drifts slowly about the frame and gives them
    // off, so the visual lives on its own; each kick of the music lets a few go.
    const wanderX = (0.5 + 0.32 * Math.sin(this.time * 0.37) + 0.08 * Math.sin(this.time * 1.1)) * W;
    const wanderY = (0.5 + 0.25 * Math.sin(this.time * 0.29 + 1.3)) * H;
    if (!hands.length) {
      const rate = 0.12 + (this.cfg.emission.closedHandRate + this.cfg.emission.openHandRate) * 0.25;
      if (Math.random() < rate) {
        this.particles.push(new Particle(wanderX, wanderY, colors[Math.floor(Math.random() * colors.length)], 1, this.cfg));
      }
    }
    const kick = audioData?.live ? Math.max(audioData.kick ?? 0, audioData.beat ? audioData.beatIntensity || 1 : 0) : 0;
    if (kick > 0.5 && this.lastKick <= 0.5) {
      const from = hands[0] ? { x: hands[0].position.x * W, y: hands[0].position.y * H } : { x: wanderX, y: wanderY };
      for (let k = 0; k < 3; k++) this.particles.push(new Particle(from.x, from.y, colors[Math.floor(Math.random() * colors.length)], 0.8, this.cfg));
    }
    this.lastKick = kick;
    const nearest = (x: number, y: number) => {
      let best: { x: number; y: number } | null = null;
      let bestD = Infinity;
      for (const h of hands) {
        const hx = h.position.x * W;
        const hy = h.position.y * H;
        const d = (hx - x) * (hx - x) + (hy - y) * (hy - y);
        if (d < bestD) { bestD = d; best = { x: hx, y: hy }; }
      }
      // With no hand, they drift after the wandering point instead.
      return best ?? { x: wanderX, y: wanderY };
    };

    this.particles = this.particles.filter(particle => {
      particle.update(this.open, nearest(particle.x, particle.y), vibrationIntensity, speedMultiplier, this.cfg);
      
      // Remove particles that are too faded
      if (particle.alpha < 0.01 && particle.age > 1) return false;
      
      this.ctx.save();
      this.ctx.globalAlpha = particle.alpha;
      
      // MULTI-LAYER GLOW - Creates soft, massive look
      for (let layer = 0; layer < this.cfg.glow.layers; layer++) {
        const layerSize = particle.size * (1 + layer * this.cfg.glow.expansion);
        const gradient = this.ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, layerSize
        );
        
        const opacity = (1 - layer * this.cfg.glow.layerFade) * particle.alpha;
        gradient.addColorStop(0, particle.color + alphaHex(opacity * 255));
        gradient.addColorStop(0.5, particle.color + alphaHex(opacity * 150));
        gradient.addColorStop(1, particle.color + '00'); // Transparent edge

        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, layerSize, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();
      return true; // Keep particle
    });

    // PARTICLE LIMIT - Prevent slowdown
    if (this.particles.length > this.cfg.limits.maxParticles) {
      this.particles = this.particles.slice(-this.cfg.limits.maxParticles);
    }
  }

  private createExplosionParticles(colors: string[], flash: number) {
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    
    // MASSIVE BURST
    for (let i = 0; i < this.cfg.explosion.particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const [minSpeed, maxSpeed] = this.cfg.explosion.speedRange;
      const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
      
      const particle = new Particle(
        centerX, centerY,
        colors[Math.floor(Math.random() * colors.length)],
        this.cfg.explosion.sizeMultiplier,
        this.cfg,
      );
      particle.vx = Math.cos(angle) * speed;
      particle.vy = Math.sin(angle) * speed;
      
      this.particles.push(particle);
    }
    
    // FLASH EFFECTS, as strong as the Flash slider says.
    if (flash > 0.005) {
      this.ctx.fillStyle = '#FFFFFF' + alphaHex(Math.min(1, flash) * 221); // White flash
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      setTimeout(() => {
        this.ctx.fillStyle = colors[0] + alphaHex(Math.min(1, flash) * 128); // Color flash
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }, this.cfg.explosion.flashDelay);
    }
    
    this.vibrationTimer = this.cfg.explosion.vibrationDuration;
    
    // Prevent rapid re-triggering
    this.isExploding = true;
    setTimeout(() => {
      this.isExploding = false;
    }, this.cfg.explosion.cooldown);
  }
}