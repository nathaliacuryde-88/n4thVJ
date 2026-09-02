/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FIX APPLIED - FREEZING ISSUE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PROBLEM #1 - EXCESSIVE SPEED:
 * - 5 fingers was set to 2.0x speed
 * - With 2 hands: 2.0 × 2.0 = 4.0x
 * - Inside wave calculations: 4.0x × 2-3x = 8-12x total speed
 * - Result: Waves moved so fast they appeared frozen/stuttering
 * 
 * PROBLEM #2 - AMPLITUDE EXPLOSION (MAIN CAUSE):
 * - With 4-5 fingers + both hands + gestures + velocity + hold duration:
 * - Example: 50 × 1.7 × 1.7 × 3 × 1.5 × 2 × 2 = 5,000-10,000+ amplitude!
 * - This caused calculations to overflow and browser rendering to freeze ❌
 * 
 * PROBLEM #3 - TIME VARIABLE GROWING INFINITELY:
 * - this.time kept growing: 60s = 102, 10min = 1020+
 * - Large numbers cause floating point precision loss
 * - Math.sin() calculations become unstable/slow
 * - Gradual performance degradation over time
 * 
 * PROBLEM #4 - MEMORY LEAKS:
 * - Creating new gradient objects every frame (200+ per frame!)
 * - No gradient reuse = memory accumulation
 * - Browser rendering engine gradually slows down
 * 
 * PROBLEM #5 - CALCULATION OVERLOAD:
 * - 200 segments × 7 waves = 1,400 calculations per frame
 * - 3 layered sine waves + exponential decay per point
 * - At high finger counts, too many calculations
 * 
 * PROBLEM #6 - OFF-SCREEN HAND POSITIONS:
 * - When hand leaves screen: position = -0.5 or 1.5
 * - leftX becomes -960px or 3000px (way off-screen!)
 * - Distance calculations create massive numbers
 * - Velocity spikes to Infinity as hand disappears
 * - Result: HARD FREEZE! ❌
 * 
 * PROBLEM #7 - WAVE Y-COORDINATES GOING OFF-SCREEN (CRITICAL!):
 * - When amplitude gets too high, y = yOffset + waves + influence
 * - Y becomes -500 or canvas.height + 1000 (way off-screen!)
 * - Canvas tries to draw extreme coordinates = FREEZE! ❌
 * - THIS WAS THE MAIN CAUSE OF FREEZING WITH MOVEMENT! ⭐
 * 
 * SOLUTION:
 * ✅ Reduced fiveFingers speed from 2.0x → 1.5x
 * ✅ Added maxSpeed cap at 2.0x
 * ✅ Added maxAmplitude cap at 250 (CRITICAL - prevents overflow!)
 * ✅ Added maxFrequency cap at 0.05 (prevents overflow)
 * ✅ Added NaN/Infinity safety checks
 * ✅ Time wrapping at 1000 (prevents precision loss) - Line 33 in WaveRenderer
 * ✅ Gradient reuse (background gradient cached) - Line 19-20 in WaveRenderer
 * ✅ Segment reduction at 4+ fingers: 200 → 120 (40% less calculations) - Line 189 in WaveRenderer
 * ✅ Clamp velocity 0-1 (prevents explosion) - Lines 73, 115 in WaveRenderer
 * ✅ Clamp hand positions 0-1 (prevents off-screen) - Lines 70-71, 112-113 in WaveRenderer
 * ✅ Clamp leftX/rightX 0-1 (prevents off-screen calculations) - Lines 195-198 in WaveRenderer
 * ✅ Clamp focal point positions (prevents off-screen drawing) - Lines 208-210, 217-219 in WaveRenderer
 * ✅ Reduced local amplitude cap from 200 → 150 - Line 243 in WaveRenderer ⭐
 * ✅ Clamp Y coordinates to screen bounds with ±50px padding - Line 280 in WaveRenderer ⭐⭐⭐
 * ✅ Reduced handInfluence cap from 100 → 80 - Line 274 in WaveRenderer
 * 
 * RESULT:
 * - Speed: 1.5 × 1.5 = 2.25x → capped at 2.0x ✅
 * - Amplitude: No matter what, can't exceed 150 locally ✅
 * - Frequency: Can't exceed 0.05 ✅
 * - Time: Wraps at 1000, prevents precision loss ✅
 * - Memory: Gradients reused, no leaks ✅
 * - Performance: 40% fewer calculations with 4+ fingers ✅
 * - Positions: All clamped to 0-1, no off-screen coordinates ✅
 * - Y-coordinates: Clamped to -50 to canvas.height+50 ✅⭐⭐⭐
 * - Now works smoothly with all finger counts and fast movements! 🚀
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const WaveConfig = {
  
  // ═══════════════════════════════════════════════════════════════════════════
  // FINGER COUNT SPEED CONTROL
  // ═══════════════════════════════════════════════════════════════════════════
  fingerCountSpeed: {
    /**
     * 1 finger = very slow motion (frozen effect)
     * Range: 0.01 - 0.2
     * Current: 0.05x wave speed
     */
    oneFinger: 0.05,
    
    /**
     * 2-4 fingers = normal speed
     * Range: 0.5 - 1.5
     * Current: 1.0x wave speed
     */
    normalFingers: 1.0,
    
    /**
     * ⭐ 5 fingers = fast (ADJUSTED from 2.0 to prevent freezing)
     * Range: 1.2 - 2.0
     * Current: 1.5x wave speed (was 2.0x - caused freezing)
     * 
     * NOTE: With 2 hands at 5 fingers: 1.5 × 1.5 = 2.25x (capped at maxSpeed)
     */
    fiveFingers: 1.5,
    
    /**
     * ⭐ MAXIMUM SPEED CAP (prevents freezing/stuttering)
     * No matter how many hands/fingers, speed won't exceed this
     * Range: 1.5 - 3.0
     * Current: 2.0x max speed
     */
    maxSpeed: 2.0,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WAVE BASE PARAMETERS
  // ═══════════════════════════════════════════════════════════════════════════
  wave: {
    /**
     * Base wave height (amplitude)
     * 20 = low waves
     * 50 = medium waves
     * 200 = tall waves
     * 
     * Current: 50
     */
    baseAmplitude: 50,
    
    /**
     * ⭐ MAXIMUM AMPLITUDE CAP (prevents overflow/freezing)
     * No matter how many multipliers, amplitude won't exceed this
     * Range: 150 - 400
     * Current: 250
     * 
     * CRITICAL: Without this cap, amplitude can reach 5000-10000+ and freeze!
     */
    maxAmplitude: 250,
    
    /**
     * Wave frequency (tightness)
     * 0.005 = very loose/wide waves
     * 0.01 = medium waves
     * 0.05 = very tight waves
     * 
     * Current: 0.01
     */
    baseFrequency: 0.01,
    
    /**
     * ⭐ MAXIMUM FREQUENCY CAP (prevents overflow)
     * Range: 0.02 - 0.1
     * Current: 0.05
     */
    maxFrequency: 0.05,
    
    /**
     * Number of wave segments (smoothness)
     * 100 = choppy (faster performance)
     * 200 = smooth (balanced)
     * 400 = very smooth (slower performance)
     * 
     * Current: 200
     */
    segments: 200,
    
    /**
     * Wave line thickness
     * 1-8 pixels
     * Current: 3
     */
    lineThickness: 3,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FINGER COUNT AMPLITUDE CONTROL
  // ═══════════════════════════════════════════════════════════════════════════
  fingerAmplitude: {
    /**
     * ⭐ PRECISE FINGER COUNT AMPLITUDE MAPPING
     * Each finger count has its own amplitude multiplier for precise control
     */
    
    /**
     * 1 finger amplitude - TINY waves
     * Range: 0.1 - 0.5
     * Current: 0.1x (MORE DRAMATIC)
     */
    oneFingerMultiplier: 0.1,
    
    /**
     * 2 fingers amplitude - small waves
     * Range: 0.5 - 1.2
     * Current: 0.6x (MORE DRAMATIC)
     */
    twoFingersMultiplier: 0.6,
    
    /**
     * 3 fingers amplitude - medium waves
     * Range: 1.0 - 1.8
     * Current: 1.2x (MORE DRAMATIC)
     */
    threeFingersMultiplier: 1.2,
    
    /**
     * 4 fingers amplitude - LARGE waves
     * Range: 1.5 - 2.5
     * Current: 2.5x (MORE DRAMATIC)
     */
    fourFingersMultiplier: 2.5,
    
    /**
     * 5 fingers amplitude - HUGE waves
     * Range: 2.0 - 4.0
     * Current: 4.0x (MORE DRAMATIC)
     */
    fiveFingersMultiplier: 4.0,
    
    /**
     * DEPRECATED: Old formula-based multiplier (kept for reference)
     * Formula: 0.5 + fingerCount * multiplier
     */
    normalFingersMultiplier: 0.3,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GESTURE CONTROLS
  // ═══════════════════════════════════════════════════════════════════════════
  gesture: {
    /**
     * OPEN HAND - Left hand amplitude boost
     * 2 = double waves
     * 3 = triple waves
     * 5 = 5x waves
     * 
     * Current: 3x (multiplied by intensity from velocity)
     */
    leftOpenHandBoost: 3,
    
    /**
     * OPEN HAND - Right hand amplitude boost
     * 1.0 = normal
     * 1.5 = 1.5x boost
     * 3.0 = triple boost
     * 
     * Current: 1.5x (multiplied by intensity from velocity)
     */
    rightOpenHandBoost: 1.5,
    
    /**
     * FIST - Left hand sets fixed amplitude
     * 10 = very small
     * 20 = small
     * 40 = medium
     * 
     * Current: 20
     */
    leftFistAmplitude: 20,
    
    /**
     * FIST - Right hand amplitude reduction
     * 0.3 = reduce to 30%
     * 0.5 = reduce to 50%
     * 0.8 = reduce to 80%
     * 
     * Current: 0.5x
     */
    rightFistReduction: 0.5,
    
    /**
     * PINCH - Base frequency for left hand
     * 0.005 = very loose
     * 0.01 = normal
     * 0.02 = tight
     * 
     * Current: 0.005
     */
    pinchBaseFrequency: 0.005,
    
    /**
     * PINCH - Distance multiplier for frequency
     * 0.05 = subtle change
     * 0.1 = moderate change
     * 0.2 = strong change
     * 
     * Current: Left = 0.1, Right = 0.05
     */
    pinchLeftMultiplier: 0.1,
    pinchRightMultiplier: 0.05,
    
    /**
     * PINCH - Y-offset shift for vertical movement
     * Negative values move waves UP (higher on screen)
     * -100 = move waves up by 100px
     * -200 = move waves up by 200px
     * 
     * Current: Left = -150, Right = -150
     */
    pinchLeftYOffsetMultiplier: -150,
    pinchRightYOffsetMultiplier: -150,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // VELOCITY & INTENSITY
  // ═══════════════════════════════════════════════════════════════════════════
  velocity: {
    /**
     * Hand movement velocity influence on intensity
     * Formula: 1 + velocity * multiplier
     * 
     * 1 = minimal influence
     * 2 = moderate influence
     * 5 = strong influence
     * 
     * Current: 2
     */
    intensityMultiplier: 2,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HOLD DURATION
  // ═══════════════════════════════════════════════════════════════════════════
  hold: {
    /**
     * How many seconds to hold before amplitude boost
     * 1 = quick trigger
     * 2 = medium wait
     * 5 = long wait
     * 
     * Current: 2 seconds
     */
    durationThreshold: 2,
    
    /**
     * Amplitude multiplier when hold threshold is reached
     * 1.5 = 1.5x boost
     * 2.0 = double boost
     * 3.0 = triple boost
     * 
     * Current: 2x
     */
    amplitudeBoost: 2,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // HAND DISTANCE SCALING
  // ═══════════════════════════════════════════════════════════════════════════
  distance: {
    /**
     * How hand distance affects overall scale
     * Formula: 0.5 + distance * multiplier
     * 
     * 1 = subtle scaling
     * 2 = moderate scaling
     * 5 = dramatic scaling
     * 
     * Current: 2
     */
    scaleMultiplier: 2,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WAVE COUNT
  // ═══════════════════════════════════════════════════════════════════════════
  waveCount: {
    /**
     * Number of waves when hands are active
     * 3 = minimal
     * 7 = moderate
     * 15 = dense
     * 
     * Current: 7
     */
    active: 7,
    
    /**
     * Number of waves when idle (no hands)
     * 1 = minimal
     * 3 = moderate
     * 5 = dense
     * 
     * Current: 3
     */
    idle: 3,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LAYERED WAVE COMPLEXITY
  // ═══════════════════════════════════════════════════════════════════════════
  layers: {
    /**
     * Primary wave speed multiplier (wave1)
     * Applied to: Math.sin(x * frequency + time * primarySpeed)
     * 
     * 1-5 range
     * Current: 2
     */
    primarySpeed: 2,
    
    /**
     * Secondary wave speed multiplier (wave2)
     * Applied to: Math.sin(x * frequency * 2 + time * secondarySpeed)
     * 
     * 1-5 range
     * Current: 3
     */
    secondarySpeed: 3,
    
    /**
     * Tertiary wave speed multiplier (wave3)
     * Applied to: Math.sin(x * frequency * 0.5 + time * tertiarySpeed)
     * 
     * 0.5-3 range
     * Current: 1
     */
    tertiarySpeed: 1,
    
    /**
     * Secondary wave amplitude reduction
     * 0.3 = 30% of primary
     * 0.5 = 50% of primary
     * 0.7 = 70% of primary
     * 
     * Current: 0.5
     */
    secondaryAmplitude: 0.5,
    
    /**
     * Tertiary wave amplitude reduction
     * 0.2 = 20% of primary
     * 0.3 = 30% of primary
     * 0.5 = 50% of primary
     * 
     * Current: 0.3
     */
    tertiaryAmplitude: 0.3,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HAND INFLUENCE (WAVE BENDING)
  // ═══════════════════════════════════════════════════════════════════════════
  handInfluence: {
    /**
     * How much waves bend toward hands
     * 0.3 = subtle bend
     * 0.5 = moderate bend
     * 1.0 = strong bend
     * 
     * Current: 0.5
     */
    strength: 0.5,
    
    /**
     * Distance radius for hand influence (exponential decay)
     * 100 = very localized
     * 200 = moderate spread
     * 500 = wide spread
     * 
     * Current: 200
     */
    radius: 200,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FOCAL POINT GLOW
  // ═══════════════════════════════════════════════════════════════════════════
  focalPoint: {
    /**
     * Base glow size at hand position
     * 10 = small
     * 20 = medium
     * 50 = large
     * 
     * Current: 20
     */
    baseSize: 20,
    
    /**
     * Pulse speed (sine wave oscillation)
     * 3 = slow pulse
     * 5 = medium pulse
     * 10 = fast pulse
     * 
     * Current: 5
     */
    pulseSpeed: 5,
    
    /**
     * Pulse amplitude multiplier
     * 0.05 = subtle pulse
     * 0.1 = moderate pulse
     * 0.2 = strong pulse
     * 
     * Current: 0.1
     */
    pulseAmount: 0.1,
    
    /**
     * Number of glow layers
     * 2 = minimal glow
     * 3 = moderate glow
     * 5 = intense glow
     * 
     * Current: 3
     */
    glowLayers: 3,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // VISUAL EFFECTS
  // ═══════════════════════════════════════════════════════════════════════════
  visual: {
    /**
     * Background gradient tint opacity
     * 10 = very subtle
     * 20 = subtle
     * 50 = strong
     * 
     * Current: 20 (hex: '20')
     */
    backgroundTint: '20',
    
    /**
     * Clapping flash opacity
     * 20 = subtle flash
     * 30 = moderate flash
     * 80 = intense flash
     * 
     * Current: 30 (hex: '30')
     */
    clapFlashOpacity: '30',
    
    /**
     * Wave fill gradient opacity
     * 30 = very transparent
     * 50 = moderate transparency
     * 100 = mostly opaque
     * 
     * Current: 50
     */
    fillOpacity: 50,
  },
};

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FINGER COUNT TRIGGER SUMMARY
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * WAVE SPEED:
 * - 1 finger = 0.05x speed (almost frozen, very slow waves)
 * - 2-4 fingers = 1.0x speed (normal flow)
 * - 5 fingers = 1.5x speed (fast flow) ⭐ ADJUSTED from 2.0x to prevent freezing
 * - MAX SPEED CAP = 2.0x (prevents stuttering/freezing)
 * 
 * WAVE AMPLITUDE (HEIGHT):
 * - 1 finger = 0.3x amplitude (small waves)
 * - 2 fingers = 0.8x amplitude
 * - 3 fingers = 1.4x amplitude
 * - 4 fingers = 2.0x amplitude
 * - 5 fingers = 2.8x amplitude (tall waves)
 * 
 * BOTH HANDS TOGETHER:
 * - Speed MULTIPLIES: Left 1.5x × Right 1.5x = 2.25x → CAPPED at 2.0x ✅
 * - Amplitude MULTIPLIES: Both hands boost amplitude independently
 * 
 * GESTURES:
 * - OPEN HAND (left): 3x amplitude boost (+ velocity intensity)
 * - OPEN HAND (right): 1.5x amplitude boost (+ velocity intensity)
 * - FIST (left): Sets amplitude to fixed 20 (minimal waves)
 * - FIST (right): Reduces amplitude to 50%
 * - PINCH: Controls wave frequency based on pinch distance
 * 
 * VELOCITY:
 * - Faster hand movement = bigger amplitude (1 + velocity × 2)
 * 
 * HOLD DURATION:
 * - Hold for 2+ seconds = 2x amplitude boost
 * 
 * CLAPPING:
 * - Random color flash across screen
 * 
 * HAND DISTANCE:
 * - Further apart = larger scale (0.5 + distance × 2)
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * FIX APPLIED - FREEZING ISSUE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PROBLEM:
 * - 5 fingers was set to 2.0x speed
 * - With 2 hands: 2.0 × 2.0 = 4.0x
 * - Inside wave calculations: 4.0x × 2-3x = 8-12x total speed
 * - Result: Waves moved so fast they appeared frozen/stuttering
 * 
 * SOLUTION:
 * - Reduced fiveFingers from 2.0x → 1.5x
 * - Added maxSpeed cap at 2.0x
 * - Now: 1.5 × 1.5 = 2.25x → capped at 2.0x ✅
 * - Maximum total speed: 2.0x × 3x (secondary wave) = 6x (acceptable)
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */