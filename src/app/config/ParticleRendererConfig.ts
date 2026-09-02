/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PARTICLE RENDERER CONFIGURATION (Key 2)
 * ═══════════════════════════════════════════════════════════════════════════
 * Complete configuration file for all particle system parameters.
 * Edit values here, then import into ParticleRenderer.ts
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const ParticleConfig = {
  
  // ═══════════════════════════════════════════════════════════════════════════
  // PARTICLE PHYSICS & MOVEMENT
  // ═══════════════════════════════════════════════════════════════════════════
  physics: {
    /**
     * Initial velocity range when particle spawns
     * Range: -2 to +2 (slower) | -8 to +8 (faster)
     * Current: -2 to +2
     */
    initialVelocity: 4,
    
    /**
     * How quickly particles slow down over time
     * 0.95 = slow down fast | 0.99 = float longer
     * Current: 0.98 (steady, slow damping)
     */
    damping: 0.98,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PARTICLE SIZE & APPEARANCE
  // ═══════════════════════════════════════════════════════════════════════════
  size: {
    /**
     * Base particle size range
     * Format: [min, max]
     * Current: 100-300 pixels
     */
    baseRange: [100, 200],
    
    /**
     * How much particles grow when hand is OPEN
     * 1.2-3.0 (subtle to dramatic growth)
     * Current: 1.5x
     */
    growthMultiplier: 1.5,
    
    /**
     * How much particles shrink when hand is CLOSED
     * 0.1-0.5 (tiny to half size)
     * Current: 0.25x
     */
    shrinkMultiplier: 0.2,
    
    /**
     * Speed of size transitions (open/close response)
     * 0.02 = very smooth/slow | 0.3 = instant/snappy
     * Current: 0.3
     */
    transitionSpeed: 0.3,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GLOW & VISUAL LAYERS
  // ═══════════════════════════════════════════════════════════════════════════
  glow: {
    /**
     * Number of glow layers around each particle
     * 1-5 layers (more = softer, performance cost)
     * Current: 3
     */
    layers: 2,
    
    /**
     * How much each glow layer expands
     * 0.1 = tight glow | 0.5 = wide diffuse glow
     * Current: 0.2
     */
    expansion: 0.4,
    
    /**
     * How fast each layer fades
     * 0.2 = gradual fade | 0.5 = rapid fade
     * Current: 0.3
     */
    layerFade: 0.3,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EMISSION RATES
  // ═══════════════════════════════════════════════════════════════════════════
  emission: {
    /**
     * Particle spawn rate when hand is OPEN
     * 0.5 = sparse | 3.0 = dense
     * Current: 1.5
     */
    openHandRate: 0.5,
    
    /**
     * Particle spawn rate when hand is CLOSED
     * 0.05 = barely any | 0.3 = trickle
     * Current: 0.15
     */
    closedHandRate: 0.05,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TRAIL EFFECT ⚠️ ADJUST THESE TO CONTROL TRAIL SPEED & LENGTH
  // ═══════════════════════════════════════════════════════════════════════════
  trail: {
    /**
     * ⭐ MAIN TRAIL CONTROL - Background fade alpha (creates motion trails)
     * 0.001 = very long trails (slow fade, lots of ghosting)
     * 0.3 = short trails (medium fade)
     * 0.6 = minimal trails (fast fade)
     * 1.0 = NO trails (instant clear, no ghosting)
     * 
     * Current: 0.3 (medium)
     * 
     * 💡 TIP: Increase to 0.6 or higher for faster trail clearing
     */
    fadeAlpha: 0.3,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PARTICLE LIMITS
  // ═══════════════════════════════════════════════════════════════════════════
  limits: {
    /**
     * Maximum number of particles on screen
     * 50-300 (higher = denser but slower performance)
     * Current: 50
     */
    maxParticles: 50,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLAPPING EXPLOSION TRIGGER
  // ═══════════════════════════════════════════════════════════════════════════
  explosion: {
    /**
     * Number of particles spawned in explosion
     * 20-100 particles
     * Current: 50
     */
    particleCount: 50,
    
    /**
     * Explosion particle speed range
     * Format: [min, max]
     * 3-30 (slow to very fast)
     * Current: 5-20
     */
    speedRange: [5, 20],
    
    /**
     * Size multiplier for explosion particles
     * 1.0 = normal | 3.0 = huge
     * Current: 1.5
     */
    sizeMultiplier: 1.5,
    
    /**
     * Explosive force applied to existing particles
     * 10-50 (subtle push to violent blast)
     * Current: 10
     */
    forceMultiplier: 10,
    
    /**
     * How much particles grow during explosion
     * 0.5 = minimal | 2.0 = dramatic
     * Current: 0.8
     */
    growthFactor: 0.8,
    
    /**
     * How long vibration effect lasts (seconds)
     * 0.5-2.0 seconds
     * Current: 0.25
     */
    vibrationDuration: 0.25,
    
    /**
     * Cooldown time before next explosion (milliseconds)
     * 500-2000ms
     * Current: 1000ms (1 second)
     */
    cooldown: 1000,
    
    /**
     * Flash effect timing (milliseconds)
     * 30-100ms delay for color flash
     * Current: 20ms
     */
    flashDelay: 20,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HAND GESTURE CONTROLS
  // ═══════════════════════════════════════════════════════════════════════════
  controls: {
    /**
     * FINGER COUNT SPEED CONTROL
     * Maps number of extended fingers to animation speed multiplier
     * These control how fast particles move, emit, and animate
     */
    fingerCountSpeed: {
      /**
       * 1 finger = almost frozen (very slow motion)
       * Range: 0.001 - 0.05
       * Current: 0.01x speed
       */
      oneFinger: 0.01,
      
      /**
       * 2 fingers = medium/normal speed
       * Range: 0.5 - 1.5
       * Current: 1.0x speed
       */
      twoFingers: 1.0,
      
      /**
       * 3 fingers = between medium and fast
       * Range: 1.0 - 1.8
       * Current: 1.4x speed
       */
      threeFingers: 1.4,
      
      /**
       * 4 fingers = faster
       * Range: 1.5 - 2.0
       * Current: 1.7x speed
       */
      fourFingers: 1.7,
      
      /**
       * 5 fingers = fastest (full speed)
       * Range: 1.5 - 3.0
       * Current: 2.0x speed
       */
      fiveFingers: 2.0,
    },
    
    /**
     * Opacity when hand is open vs closed
     * Keep at 1.0 to prevent flicker
     */
    openOpacity: 1.0,
    closedOpacity: 1.0,
    
    /**
     * ⭐ PARTICLE FADE OUT SPEED - How fast particles disappear when hand closes
     * 0.01 = very slow fade (particles linger)
     * 0.08 = medium fade
     * 0.15 = instant disappear (no lingering)
     * 
     * Current: 0.08 (rapid fade)
     * 
     * 💡 TIP: Increase to 0.15 or higher for instant particle removal
     */
    fadeOutRate: 0.08,
  },
};

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * TRIGGER SUMMARY
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * OPEN HAND:
 * - Particles emit at normal rate (1.5 per frame chance)
 * - Particles grow to 1.5x their base size
 * - Full opacity (1.0)
 * 
 * CLOSED HAND:
 * - Particles emit slowly (0.15 per frame chance)
 * - Particles shrink to 0.25x their base size
 * - Particles fade out rapidly (0.08 alpha decrease per frame)
 * 
 * CLAPPING (HANDS TOGETHER):
 * - Spawns 50 explosion particles from screen center
 * - Existing particles get violent random velocity boost
 * - White flash + color flash effect
 * - Vibration effect lasts 0.25 seconds
 * - 1 second cooldown before next explosion
 * 
 * FINGER COUNT SPEED CONTROL:
 * - 1 finger = 0.01x speed (almost frozen, very slow motion)
 * - 2 fingers = 1.0x speed (normal/medium speed)
 * - 3 fingers = 1.4x speed (faster)
 * - 4 fingers = 1.7x speed (very fast)
 * - 5 fingers = 2.0x speed (maximum speed)
 * 
 * Speed affects:
 * - Particle movement velocity
 * - Animation speed
 * - Everything feels slower or faster based on finger count
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * TRAIL & GHOSTING CONTROLS
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * To REDUCE TRAIL / GHOSTING:
 * 1. Increase fadeAlpha (line 122): 0.3 → 0.6 or 1.0 (faster background clear)
 * 2. Increase fadeOutRate (line 283): 0.08 → 0.15 (faster particle disappearance)
 * 3. Reduce maxParticles (line 137): Fewer particles = less trail buildup
 * 
 * To INCREASE TRAIL (longer ghosting):
 * 1. Decrease fadeAlpha (line 122): 0.3 → 0.1 or 0.001
 * 2. Decrease fadeOutRate (line 283): 0.08 → 0.02
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */
