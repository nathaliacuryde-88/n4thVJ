import { HandData } from '../../App';
import { ParticleConfig } from '../../config/ParticleRendererConfig';

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

  constructor(x: number, y: number, color: string, scale: number = 1) {
    this.x = x;
    this.y = y;
    const velocityRange = ParticleConfig.physics.initialVelocity;
    this.vx = (Math.random() - 0.5) * velocityRange;
    this.vy = (Math.random() - 0.5) * velocityRange;
    
    // Particle size from config
    const [minSize, maxSize] = ParticleConfig.size.baseRange;
    this.baseSize = (minSize + Math.random() * (maxSize - minSize)) * scale;
    this.size = this.baseSize;
    this.targetSize = this.baseSize;
    this.color = color;
  }

  update(handIsOpen: boolean, vibrationIntensity: number = 0, speedMultiplier: number = 1) {
    // ═════════════════════════════════════════════════════════════════════════
    // HAND OPEN = GROW & APPEAR, HAND CLOSED = SHRINK & FADE OUT
    // ═════════════════════════════════════════════════════════════════════════
    if (handIsOpen) {
      this.targetSize = this.baseSize * ParticleConfig.size.growthMultiplier;
      this.alpha = ParticleConfig.controls.openOpacity;
      
      // CLAP VIBRATION - Explosive movement
      if (vibrationIntensity > 0) {
        this.vx += (Math.random() - 0.5) * vibrationIntensity * ParticleConfig.explosion.forceMultiplier * speedMultiplier;
        this.vy += (Math.random() - 0.5) * vibrationIntensity * ParticleConfig.explosion.forceMultiplier * speedMultiplier;
        this.targetSize = this.baseSize * (1.2 + vibrationIntensity * ParticleConfig.explosion.growthFactor);
      }
    } else {
      // Hand closed - particles shrink AND fade out quickly
      this.targetSize = this.baseSize * ParticleConfig.size.shrinkMultiplier;
      // Fade out quickly when hand closes
      this.alpha = Math.max(0, this.alpha - ParticleConfig.controls.fadeOutRate);
    }

    // SMOOTH SIZE TRANSITIONS
    this.size += (this.targetSize - this.size) * ParticleConfig.size.transitionSpeed;

    // Move particle
    this.x += this.vx * speedMultiplier;
    this.y += this.vy * speedMultiplier;

    // Damping - slow down over time
    this.vx *= ParticleConfig.physics.damping;
    this.vy *= ParticleConfig.physics.damping;
  }
}

export class ParticleRenderer {
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
    this.ctx.fillStyle = `rgba(0, 0, 0, ${ParticleConfig.trail.fadeAlpha})`;
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
    let speedMultiplier = ParticleConfig.controls.fingerCountSpeed.twoFingers; // Default medium speed
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
      speedMultiplier = ParticleConfig.controls.fingerCountSpeed.oneFinger;
    } else if (maxFingerCount === 2) {
      speedMultiplier = ParticleConfig.controls.fingerCountSpeed.twoFingers;
    } else if (maxFingerCount === 3) {
      speedMultiplier = ParticleConfig.controls.fingerCountSpeed.threeFingers;
    } else if (maxFingerCount === 4) {
      speedMultiplier = ParticleConfig.controls.fingerCountSpeed.fourFingers;
    } else if (maxFingerCount >= 5) {
      speedMultiplier = ParticleConfig.controls.fingerCountSpeed.fiveFingers;
    }

    // EMIT NEW PARTICLES FROM HANDS
    if (handData.left) {
      const isOpen = handData.left.gesture === 'open';
      
      const emissionRate = isOpen ? ParticleConfig.emission.openHandRate : ParticleConfig.emission.closedHandRate;
      
      if (Math.random() < emissionRate) {
        this.particles.push(new Particle(
          handData.left.position.x * this.canvas.width,
          handData.left.position.y * this.canvas.height,
          colors[Math.floor(Math.random() * colors.length)],
          1
        ));
      }
    }

    if (handData.right) {
      const isOpen = handData.right.gesture === 'open';
      
      const emissionRate = isOpen ? ParticleConfig.emission.openHandRate : ParticleConfig.emission.closedHandRate;
      
      if (Math.random() < emissionRate) {
        this.particles.push(new Particle(
          handData.right.position.x * this.canvas.width,
          handData.right.position.y * this.canvas.height,
          colors[Math.floor(Math.random() * colors.length)],
          1
        ));
      }
    }

    // UPDATE AND DRAW ALL PARTICLES
    this.particles = this.particles.filter(particle => {
      particle.update(anyHandOpen, vibrationIntensity, speedMultiplier);
      
      // Remove particles that are too faded
      if (particle.alpha < 0.01) return false;
      
      this.ctx.save();
      this.ctx.globalAlpha = particle.alpha;
      
      // MULTI-LAYER GLOW - Creates soft, massive look
      for (let layer = 0; layer < ParticleConfig.glow.layers; layer++) {
        const layerSize = particle.size * (1 + layer * ParticleConfig.glow.expansion);
        const gradient = this.ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, layerSize
        );
        
        const opacity = (1 - layer * ParticleConfig.glow.layerFade) * particle.alpha;
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
    if (this.particles.length > ParticleConfig.limits.maxParticles) {
      this.particles = this.particles.slice(-ParticleConfig.limits.maxParticles);
    }
  }

  private createExplosionParticles(colors: string[]) {
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    
    // MASSIVE BURST
    for (let i = 0; i < ParticleConfig.explosion.particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const [minSpeed, maxSpeed] = ParticleConfig.explosion.speedRange;
      const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
      
      const particle = new Particle(
        centerX, centerY,
        colors[Math.floor(Math.random() * colors.length)],
        ParticleConfig.explosion.sizeMultiplier
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
    }, ParticleConfig.explosion.flashDelay);
    
    this.vibrationTimer = ParticleConfig.explosion.vibrationDuration;
    
    // Prevent rapid re-triggering
    this.isExploding = true;
    setTimeout(() => {
      this.isExploding = false;
    }, ParticleConfig.explosion.cooldown);
  }
}