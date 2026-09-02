import { HandData } from '../../App';
import { ParticleConfig } from '../../config/ParticleRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';

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

  update(
    handIsOpen: boolean,
    vibrationIntensity: number,
    speedMultiplier: number,
    cfg: ParticleCfg,
  ) {
    // ═════════════════════════════════════════════════════════════════════════
    // HAND OPEN = GROW & APPEAR, HAND CLOSED = SHRINK & FADE OUT
    // ═════════════════════════════════════════════════════════════════════════
    if (handIsOpen) {
      this.targetSize = this.baseSize * cfg.size.growthMultiplier;
      this.alpha = cfg.controls.openOpacity;
      
      // CLAP VIBRATION - Explosive movement
      if (vibrationIntensity > 0) {
        this.vx += (Math.random() - 0.5) * vibrationIntensity * cfg.explosion.forceMultiplier * speedMultiplier;
        this.vy += (Math.random() - 0.5) * vibrationIntensity * cfg.explosion.forceMultiplier * speedMultiplier;
        this.targetSize = this.baseSize * (1.2 + vibrationIntensity * cfg.explosion.growthFactor);
      }
    } else {
      // Hand closed - particles shrink AND fade out quickly
      this.targetSize = this.baseSize * cfg.size.shrinkMultiplier;
      // Fade out quickly when hand closes
      this.alpha = Math.max(0, this.alpha - cfg.controls.fadeOutRate);
    }

    // SMOOTH SIZE TRANSITIONS
    this.size += (this.targetSize - this.size) * cfg.size.transitionSpeed;

    // Move particle
    this.x += this.vx * speedMultiplier;
    this.y += this.vy * speedMultiplier;

    // Damping - slow down over time
    this.vx *= cfg.physics.damping;
    this.vy *= cfg.physics.damping;
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

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  render(handData: HandData, colors: string[]) {
    this.time += 0.016;

    // BACKGROUND FADE - Creates motion trails
    this.ctx.fillStyle = `rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // CLAPPING EXPLOSION
    let vibrationIntensity = 0;
    if (handData.clapping && !this.isExploding) {
      this.createExplosionParticles(colors);
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
    let speedMultiplier = this.cfg.controls.fingerCountSpeed.twoFingers; // Default medium speed
    let leftHandOpen = false;
    let rightHandOpen = false;
    let leftFingerCount = 0;
    let rightFingerCount = 0;

    if (handData.left) {
      leftHandOpen = handData.left.gesture === 'open';
      leftFingerCount = handData.left.fingerCount || 0;
      // PINCH GESTURE = Treat as 1 finger (slow)
      if (handData.left.gesture === 'pinch') {
        leftFingerCount = 1;
      }
    }

    if (handData.right) {
      rightHandOpen = handData.right.gesture === 'open';
      rightFingerCount = handData.right.fingerCount || 0;
      // PINCH GESTURE = Treat as 1 finger (slow)
      if (handData.right.gesture === 'pinch') {
        rightFingerCount = 1;
      }
    }

    const anyHandOpen = leftHandOpen || rightHandOpen;
    
    // Use the higher finger count from either hand to determine speed
    const maxFingerCount = Math.max(leftFingerCount, rightFingerCount);
    
    // Map finger count to speed multiplier
    if (maxFingerCount === 1) {
      speedMultiplier = this.cfg.controls.fingerCountSpeed.oneFinger;
    } else if (maxFingerCount === 2) {
      speedMultiplier = this.cfg.controls.fingerCountSpeed.twoFingers;
    } else if (maxFingerCount === 3) {
      speedMultiplier = this.cfg.controls.fingerCountSpeed.threeFingers;
    } else if (maxFingerCount === 4) {
      speedMultiplier = this.cfg.controls.fingerCountSpeed.fourFingers;
    } else if (maxFingerCount >= 5) {
      speedMultiplier = this.cfg.controls.fingerCountSpeed.fiveFingers;
    }

    // EMIT NEW PARTICLES FROM HANDS
    if (handData.left) {
      const isOpen = handData.left.gesture === 'open';
      
      const emissionRate = isOpen ? this.cfg.emission.openHandRate : this.cfg.emission.closedHandRate;
      
      if (Math.random() < emissionRate) {
        this.particles.push(new Particle(
          handData.left.position.x * this.canvas.width,
          handData.left.position.y * this.canvas.height,
          colors[Math.floor(Math.random() * colors.length)],
          1,
          this.cfg,
        ));
      }
    }

    if (handData.right) {
      const isOpen = handData.right.gesture === 'open';
      
      const emissionRate = isOpen ? this.cfg.emission.openHandRate : this.cfg.emission.closedHandRate;
      
      if (Math.random() < emissionRate) {
        this.particles.push(new Particle(
          handData.right.position.x * this.canvas.width,
          handData.right.position.y * this.canvas.height,
          colors[Math.floor(Math.random() * colors.length)],
          1,
          this.cfg,
        ));
      }
    }

    // UPDATE AND DRAW ALL PARTICLES
    this.particles = this.particles.filter(particle => {
      particle.update(anyHandOpen, vibrationIntensity, speedMultiplier, this.cfg);
      
      // Remove particles that are too faded
      if (particle.alpha < 0.01) return false;
      
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
        gradient.addColorStop(0, particle.color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(0.5, particle.color + Math.floor(opacity * 150).toString(16).padStart(2, '0'));
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

  private createExplosionParticles(colors: string[]) {
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
    
    // FLASH EFFECTS
    this.ctx.fillStyle = '#FFFFFFDD'; // White flash
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    setTimeout(() => {
      this.ctx.fillStyle = colors[0] + '80'; // Color flash
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }, this.cfg.explosion.flashDelay);
    
    this.vibrationTimer = this.cfg.explosion.vibrationDuration;
    
    // Prevent rapid re-triggering
    this.isExploding = true;
    setTimeout(() => {
      this.isExploding = false;
    }, this.cfg.explosion.cooldown);
  }
}