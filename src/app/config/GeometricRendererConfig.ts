/**
 * ═══════════════════════════════════════════════════════════════════════════
 * GEOMETRIC RENDERER CONFIGURATION (Key 1)
 * ═══════════════════════════════════════════════════════════════════════════
 * Complete configuration file for all geometric polygon parameters.
 * Edit values here, then import into GeometricRenderer.ts
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const GeometricConfig = {
  
  // ═══════════════════════════════════════════════════════════════════════════
  // TRAIL EFFECT
  // ═══════════════════════════════════════════════════════════════════════════
  trail: {
    /**
     * Background fade alpha (creates motion trails)
     * 0.05 = long trails (slow fade)
     * 0.1 = medium trails
     * 0.3 = short trails (fast fade)
     * 1.0 = NO trails (instant clear)
     * 
     * Current: 0.1
     */
    fadeAlpha: 0.1,
    
    /**
     * Trail line thickness (for gesture trails)
     * 1-5 pixels
     * Current: 2
     */
    lineThickness: 2,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FINGER COUNT SPEED CONTROL
  // ═══════════════════════════════════════════════════════════════════════════
  fingerCountSpeed: {
    /**
     * 1 finger = almost frozen (very slow motion)
     * Range: 0.001 - 0.1
     * Current: 0.003x rotation speed (VERY SLOW for clear differentiation)
     */
    oneFinger: 0.003,
    
    /**
     * 2-4 fingers = normal speed
     * Range: 0.5 - 2.0
     * Current: 1.0x rotation speed
     */
    normalFingers: 1.0,
    
    /**
     * 5 fingers = fastest (full speed)
     * Range: 1.5 - 5.0
     * Current: 2.0x rotation speed
     */
    fiveFingers: 2.0,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FINGER COUNT STROKE WIDTH CONTROL
  // ═══════════════════════════════════════════════════════════════════════════
  fingerCountStrokeWidth: {
    /**
     * 1 finger = thin lines (subtle)
     * Range: 0.5 - 2.0
     * Current: 1.0x stroke width
     */
    oneFinger: 1.0,
    
    /**
     * 2 fingers = WAY THICKER lines (medium-thick)
     * Range: 1.0 - 4.0
     * Current: 4.5x stroke width (VERY THICK - between pinch and 5-finger)
     */
    twoFingers: 4.5,
    
    /**
     * 3-4 fingers = normal thickness
     * Range: 1.0 - 3.0
     * Current: 1.5x stroke width
     */
    normalFingers: 1.5,
    
    /**
     * 5 fingers = thick bold lines (maximum)
     * Range: 2.0 - 5.0
     * Current: 6.0x stroke width (HUGE - user confirmed this is perfect)
     */
    fiveFingers: 6.0,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // POLYGON COMPLEXITY (SIDES)
  // ═══════════════════════════════════════════════════════════════════════════
  complexity: {
    /**
     * Base number of polygon sides (minimum)
     * Range: 3-8
     * Current: 3
     */
    baseSides: 3,
    
    /**
     * ⭐ LEFT HAND - Multiplier for finger count to polygon sides
     * Formula: baseSides + (fingerCount * leftHandMultiplier)
     * 
     * 0.5 = subtle complexity increase
     * 1.0 = moderate (1 finger = 4 sides, 5 fingers = 8 sides)
     * 2.0 = dramatic (1 finger = 5 sides, 5 fingers = 13 sides)
     * 
     * Current: 1.0
     */
    leftHandMultiplier: 1.0,
    
    /**
     * ⭐ RIGHT HAND - Additional complexity contribution
     * Adds to total complexity when right hand is also open
     * 
     * 0.3 = minimal addition
     * 0.5 = moderate addition
     * 1.0 = full addition
     * 
     * Current: 0.5
     */
    rightHandMultiplier: 0.5,
    
    /**
     * Maximum polygon sides (cap)
     * Range: 8-20
     * Current: 12
     */
    maxSides: 12,
    
    /**
     * Minimum polygon sides (floor)
     * Range: 3-6
     * Current: 3
     */
    minSides: 3,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CLAPPING VIBRATION / EXPLOSION
  // ═══════════════════════════════════════════════════════════════════════════
  vibration: {
    /**
     * Flash duration in seconds when hands clap
     * 0.5 = quick flash
     * 0.8 = medium flash
     * 2.0 = long flash
     * 
     * Current: 0.8
     */
    flashDuration: 0.8,
    
    /**
     * Horizontal shake intensity
     * 20 = subtle shake
     * 40 = medium shake
     * 100 = violent shake
     * 
     * Current: 40
     */
    shakeAmountX: 40,
    
    /**
     * Vertical shake intensity
     * 20 = subtle shake
     * 40 = medium shake
     * 100 = violent shake
     * 
     * Current: 40
     */
    shakeAmountY: 40,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // POLYGON SIZE & APPEARANCE
  // ═══════════════════════════════════════════════════════════════════════════
  polygon: {
    /**
     * Base polygon size
     * 50 = small
     * 100 = medium
     * 300 = large
     * 
     * Current: 100
     */
    baseSize: 100,
    
    /**
     * Outline stroke thickness
     * 1 = thin
     * 2 = medium
     * 5 = thick
     * 
     * Current: 2
     */
    strokeWidth: 2,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LAYERING (MULTIPLE POLYGONS)
  // ═══════════════════════════════════════════════════════════════════════════
  layers: {
    /**
     * Number of polygon layers per hand
     * 3 = minimal
     * 5 = medium
     * 10 = dense/complex
     * 
     * Current: 5
     */
    count: 5,
    
    /**
     * Size growth per layer
     * 0.1 = tight/compact layers
     * 0.3 = medium spacing
     * 0.5 = wide spacing
     * 
     * Current: 0.3
     */
    sizeGrowth: 0.3,
    
    /**
     * Rotation offset between layers
     * 0.1 = minimal rotation difference
     * 0.5 = medium rotation difference
     * 1.0 = large rotation difference
     * 
     * Current: 0.5
     */
    rotationOffset: 0.5,
    
    /**
     * Base opacity per layer
     * 0.1 = very transparent
     * 0.3 = medium transparency
     * 0.8 = mostly opaque
     * 
     * Current: 0.3
     */
    baseOpacity: 0.3,
    
    /**
     * Opacity reduction per layer
     * 0.02 = slow fade
     * 0.05 = medium fade
     * 0.1 = fast fade
     * 
     * Current: 0.05
     */
    opacityFade: 0.05,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BRIDGE BETWEEN HANDS
  // ═══════════════════════════════════════════════════════════════════════════
  bridge: {
    /**
     * Bridge line thickness
     * 1 = thin
     * 5 = medium
     * 10 = thick
     * 
     * Current: 5
     */
    thickness: 5,
    
    /**
     * Wave amplitude (wavy bridge effect)
     * 10 = subtle wave
     * 30 = medium wave
     * 50 = dramatic wave
     * 
     * Current: 30
     */
    waveAmplitude: 30,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ANIMATION TIMING
  // ═══════════════════════════════════════════════════════════════════════════
  animation: {
    /**
     * Base rotation speed multiplier
     * Applied on top of finger count speed
     * 0.01 = very slow base rotation
     * 0.05 = medium base rotation
     * 0.1 = fast base rotation
     * 
     * Current: 0.01
     */
    baseRotationMultiplier: 0.01,
  },
};

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FINGER COUNT TRIGGER SUMMARY
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * ROTATION SPEED:
 * - 1 finger = 0.003x speed (almost frozen, very slow rotation)
 * - 2-4 fingers = 1.0x speed (normal rotation)
 * - 5 fingers = 2.0x speed (fast rotation)
 * 
 * POLYGON COMPLEXITY (NUMBER OF SIDES):
 * - Formula: 3 + (fingerCount * 1.0)
 * - 1 finger = 4 sides (square-ish)
 * - 2 fingers = 5 sides (pentagon)
 * - 3 fingers = 6 sides (hexagon)
 * - 4 fingers = 7 sides (heptagon)
 * - 5 fingers = 8 sides (octagon)
 * 
 * RIGHT HAND BONUS:
 * - When both hands are open, right hand adds more complexity
 * - Right hand contribution: fingerCount * 0.5 additional sides
 * - Example: Left 5 fingers + Right 5 fingers = 8 + 2.5 = 10-11 sides
 * 
 * BOTH HANDS TOGETHER = SPEED MULTIPLICATION:
 * - Left hand speed × Right hand speed
 * - Example: Left 5 fingers (2.0x) × Right 5 fingers (2.0x) = 4.0x total speed!
 * 
 * CLAPPING (HANDS TOGETHER):
 * - White flash effect
 * - Screen shake/vibration (±40 pixels horizontal/vertical)
 * - Flash lasts 0.8 seconds
 * - Polygon size increases during flash
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * PARAMETER ADJUSTMENT GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * For SLOWER overall animation:
 * - Decrease baseRotationMultiplier (0.01 → 0.005)
 * - Decrease all fingerCountSpeed values
 * 
 * For MORE COMPLEX polygons:
 * - Increase leftHandMultiplier (1.0 → 2.0)
 * - Increase maxSides (12 → 20)
 * 
 * For CLEANER visuals (less trail):
 * - Increase fadeAlpha (0.1 → 0.3 or 1.0)
 * - Reduce layers.count (5 → 3)
 * - Reduce layers.baseOpacity (0.3 → 0.15)
 * 
 * For MORE DRAMATIC effects:
 * - Increase vibration shake amounts (40 → 100)
 * - Increase bridge.waveAmplitude (30 → 50)
 * - Increase polygon.baseSize (100 → 200)
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */