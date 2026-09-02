import { HandData } from '../../App';
import { WaveConfig } from '../../config/WaveRendererConfig';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * WAVE RENDERER (Key 3)
 * ═══════════════════════════════════════════════════════════════════════════
 * Creates flowing sine waves influenced by hand positions and movements.
 * Finger count controls speed. Hand velocity affects amplitude.
 * 
 * ALL PARAMETERS NOW IN: /config/WaveRendererConfig.ts
 * ═══════════════════════════════════════════════════════════════════════════
 */
export class WaveRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private time = 0;
  
  // ⭐ PERFORMANCE: Reuse gradient objects instead of creating new ones each frame
  private bgGradient: CanvasGradient | null = null;
  private needsGradientUpdate = true;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  render(handData: HandData, colors: string[]) {
    this.time += 0.016;
    
    // ⭐ CRITICAL FIX: Wrap time to prevent floating point precision loss
    // Sine waves repeat every 2π, so we can safely wrap time
    // This prevents time from growing to 1000+ which causes calculation slowdown
    if (this.time > 1000) {
      this.time = this.time % 1000;
    }

    // ═══════════════════════════════════════════════════════════════════════
    // GRADIENT BACKGROUND
    // ═════════════════════════════════════════════════════════════════════════
    if (this.needsGradientUpdate) {
      this.bgGradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
      this.bgGradient.addColorStop(0, '#000000');
      this.bgGradient.addColorStop(1, colors[0] + WaveConfig.visual.backgroundTint);
      this.needsGradientUpdate = false;
    }
    this.ctx.fillStyle = this.bgGradient!;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // ═════════════════════════════════════════════════════════════════════════
    // CLAPPING FLASH - DISABLED
    // ═════════════════════════════════════════════════════════════════════════
    // Clapping effect disabled for Wave Renderer - amplitude control via finger count instead

    // ═════════════════════════════════════════════════════════════════════════
    // WAVE PARAMETERS
    // ═════════════════════════════════════════════════════════════════════════
    let amplitude = WaveConfig.wave.baseAmplitude;
    let frequency = WaveConfig.wave.baseFrequency;
    let scale = 1;
    let intensityMultiplier = 1;
    let speedMultiplier = 1;
    let yOffsetShift = 0; // ⭐ NEW: Vertical shift for pinch gesture

    // ═════════════════════════════════════════════════════════════════════════
    // LEFT HAND CONTROLS
    // ═════════════════════════════════════════════════════════════════════════
    if (handData.left) {
      // ⭐ CRITICAL: Clamp position to screen bounds (0-1)
      const posX = Math.max(0, Math.min(1, handData.left.position.x || 0.5));
      const posY = Math.max(0, Math.min(1, handData.left.position.y || 0.5));
      
      const velocity = handData.left.velocity || 0;
      // ⭐ CAP VELOCITY to prevent explosion: max 1.0 (was causing freeze when hand moves off-screen!)
      const cappedVelocity = Math.max(0, Math.min(velocity, 1.0));
      intensityMultiplier *= (1 + cappedVelocity * WaveConfig.velocity.intensityMultiplier);
      
      let fingerCount = handData.left.fingerCount || 0;
      // PINCH GESTURE = Treat as 1 finger (slow)
      if (handData.left.gesture === 'pinch') {
        fingerCount = 1;
      }
      
      // ⭐ FINGER COUNT SPEED & AMPLITUDE CONTROL
      if (fingerCount === 1) {
        speedMultiplier = WaveConfig.fingerCountSpeed.oneFinger;
        amplitude *= WaveConfig.fingerAmplitude.oneFingerMultiplier;
      } else if (fingerCount === 2) {
        speedMultiplier = WaveConfig.fingerCountSpeed.normalFingers;
        amplitude *= WaveConfig.fingerAmplitude.twoFingersMultiplier;
      } else if (fingerCount === 3) {
        speedMultiplier = WaveConfig.fingerCountSpeed.normalFingers;
        amplitude *= WaveConfig.fingerAmplitude.threeFingersMultiplier;
      } else if (fingerCount === 4) {
        speedMultiplier = WaveConfig.fingerCountSpeed.normalFingers;
        amplitude *= WaveConfig.fingerAmplitude.fourFingersMultiplier;
      } else if (fingerCount >= 5) {
        speedMultiplier = WaveConfig.fingerCountSpeed.fiveFingers;
        amplitude *= WaveConfig.fingerAmplitude.fiveFingersMultiplier;
      }
      
      // Long hold = bigger waves
      const holdDuration = handData.left.holdDuration || 0;
      if (holdDuration > WaveConfig.hold.durationThreshold) {
        amplitude *= WaveConfig.hold.amplitudeBoost;
      }
      
      // Gesture-based amplitude
      if (handData.left.gesture === 'open') {
        amplitude *= WaveConfig.gesture.leftOpenHandBoost * intensityMultiplier;
      } else if (handData.left.gesture === 'fist') {
        amplitude = WaveConfig.gesture.leftFistAmplitude;
      } else if (handData.left.gesture === 'pinch') {
        frequency = WaveConfig.gesture.pinchBaseFrequency + 
                    (handData.left.pinchDistance || 0) * WaveConfig.gesture.pinchLeftMultiplier;
        yOffsetShift = (handData.left.pinchDistance || 0) * WaveConfig.gesture.pinchLeftYOffsetMultiplier; // ⭐ NEW: Vertical shift for pinch gesture
      }
    }

    // ═════════════════════════════════════════════════════════════════════════
    // RIGHT HAND CONTROLS (Similar logic)
    // ════════════════════════════════════════════════════════════════════════
    if (handData.right) {
      // ⭐ CRITICAL: Clamp position to screen bounds (0-1)
      const posX = Math.max(0, Math.min(1, handData.right.position.x || 0.5));
      const posY = Math.max(0, Math.min(1, handData.right.position.y || 0.5));
      
      const velocity = handData.right.velocity || 0;
      // ⭐ CAP VELOCITY to prevent explosion: max 1.0 (was causing freeze when hand moves off-screen!)
      const cappedVelocity = Math.max(0, Math.min(velocity, 1.0));
      intensityMultiplier *= (1 + cappedVelocity * WaveConfig.velocity.intensityMultiplier);
      
      let fingerCount = handData.right.fingerCount || 0;
      // PINCH GESTURE = Treat as 1 finger (slow)
      if (handData.right.gesture === 'pinch') {
        fingerCount = 1;
      }
      
      let rightSpeed;
      if (fingerCount === 1) {
        rightSpeed = WaveConfig.fingerCountSpeed.oneFinger;
        amplitude *= WaveConfig.fingerAmplitude.oneFingerMultiplier;
      } else if (fingerCount === 2) {
        rightSpeed = WaveConfig.fingerCountSpeed.normalFingers;
        amplitude *= WaveConfig.fingerAmplitude.twoFingersMultiplier;
      } else if (fingerCount === 3) {
        rightSpeed = WaveConfig.fingerCountSpeed.normalFingers;
        amplitude *= WaveConfig.fingerAmplitude.threeFingersMultiplier;
      } else if (fingerCount === 4) {
        rightSpeed = WaveConfig.fingerCountSpeed.normalFingers;
        amplitude *= WaveConfig.fingerAmplitude.fourFingersMultiplier;
      } else if (fingerCount >= 5) {
        rightSpeed = WaveConfig.fingerCountSpeed.fiveFingers;
        amplitude *= WaveConfig.fingerAmplitude.fiveFingersMultiplier;
      }
      speedMultiplier *= rightSpeed; // Multiply both hands
      
      const holdDuration = handData.right.holdDuration || 0;
      if (holdDuration > WaveConfig.hold.durationThreshold) {
        amplitude *= WaveConfig.hold.amplitudeBoost;
      }
      
      if (handData.right.gesture === 'open') {
        amplitude *= WaveConfig.gesture.rightOpenHandBoost * intensityMultiplier;
      } else if (handData.right.gesture === 'fist') {
        amplitude *= WaveConfig.gesture.rightFistReduction;
      } else if (handData.right.gesture === 'pinch') {
        frequency += (handData.right.pinchDistance || 0) * WaveConfig.gesture.pinchRightMultiplier;
        yOffsetShift = (handData.right.pinchDistance || 0) * WaveConfig.gesture.pinchRightYOffsetMultiplier; // ⭐ NEW: Vertical shift for pinch gesture
      }
    }
    
    // ⭐ CRITICAL: Cap intensity multiplier to prevent exponential growth
    intensityMultiplier = Math.min(intensityMultiplier, 3.0);

    // ⭐ CRITICAL: CAP SPEED TO PREVENT FREEZING
    speedMultiplier = Math.min(speedMultiplier, WaveConfig.fingerCountSpeed.maxSpeed);

    // ⭐ CRITICAL: CAP AMPLITUDE TO PREVENT OVERFLOW/FREEZING
    amplitude = Math.min(amplitude, WaveConfig.wave.maxAmplitude);
    
    // ⭐ CRITICAL: CAP FREQUENCY TO PREVENT OVERFLOW
    frequency = Math.min(frequency, WaveConfig.wave.maxFrequency);
    
    // ⭐ SAFETY: Check for NaN or Infinity
    if (!isFinite(amplitude)) amplitude = WaveConfig.wave.baseAmplitude;
    if (!isFinite(frequency)) frequency = WaveConfig.wave.baseFrequency;
    if (!isFinite(speedMultiplier)) speedMultiplier = 1;

    // ════════════════════════════════════════════════════════════════════════
    // HAND DISTANCE AFFECTS SCALE
    // ═════════════════════════════════════════════════════════════════════════
    if (handData.distanceBetweenHands) {
      scale = 0.5 + handData.distanceBetweenHands * WaveConfig.distance.scaleMultiplier;
    }

    // ═════════════════════════════════════════════════════════════════════════
    // WAVE COUNT
    // ═════════════════════════════════════════════════════════════════════════
    const waveCount = handData.left || handData.right ? 
      WaveConfig.waveCount.active : WaveConfig.waveCount.idle;

    // ⭐ PERFORMANCE FIX: Reduce calculation complexity with high finger counts
    // With 4-5 fingers, reduce segments to prevent gradual slowdown
    const leftFingers = handData.left?.fingerCount || 0;
    const rightFingers = handData.right?.fingerCount || 0;
    const maxFingers = Math.max(leftFingers, rightFingers);
    
    let segmentReduction = 1;
    if (maxFingers >= 4) {
      segmentReduction = 0.6; // Use 60% of segments (200 -> 120)
    }

    // ═════════════════════════════════════════════════════════════════════════
    // DRAW HORIZONTAL WAVES
    // ═════════════════════════════════════════════════════════════════════════
    for (let i = 0; i < waveCount; i++) {
      const yOffset = (this.canvas.height / (waveCount + 1)) * (i + 1) + yOffsetShift; // ⭐ NEW: Add vertical shift for pinch gesture
      const phase = (i / waveCount) * Math.PI * 2; // Phase shift per wave
      
      // ⭐ CRITICAL: Clamp hand positions to prevent off-screen calculations
      const leftXRaw = handData.left?.position.x ?? 0;
      const rightXRaw = handData.right?.position.x ?? 1;
      const leftX = Math.max(0, Math.min(1, leftXRaw)) * this.canvas.width;
      const rightX = Math.max(0, Math.min(1, rightXRaw)) * this.canvas.width;
      
      this.drawWave(
        yOffset,
        amplitude * scale,
        frequency,
        this.time * speedMultiplier + phase,
        colors[i % colors.length],
        leftX,
        rightX,
        i / waveCount,
        segmentReduction
      );
    }

    // ═════════════════════════════════════════════════════════════════════════
    // FOCAL POINTS AT HAND POSITIONS
    // ════════════════════════════════════════════════════════════════════════
    if (handData.left) {
      // ⭐ CRITICAL: Clamp positions before drawing focal points
      const clampedX = Math.max(0, Math.min(1, handData.left.position.x || 0.5));
      const clampedY = Math.max(0, Math.min(1, handData.left.position.y || 0.5));
      this.drawFocalPoint(
        clampedX * this.canvas.width,
        clampedY * this.canvas.height,
        colors[0],
        scale,
        amplitude
      );
    }

    if (handData.right) {
      // ⭐ CRITICAL: Clamp positions before drawing focal points
      const clampedX = Math.max(0, Math.min(1, handData.right.position.x || 0.5));
      const clampedY = Math.max(0, Math.min(1, handData.right.position.y || 0.5));
      this.drawFocalPoint(
        clampedX * this.canvas.width,
        clampedY * this.canvas.height,
        colors[2 % colors.length],
        scale,
        amplitude
      );
    }
  }

  private drawWave(
    yOffset: number,
    amplitude: number,
    frequency: number,
    time: number,
    color: string,
    leftX: number,
    rightX: number,
    alpha: number,
    segmentReduction: number
  ) {
    this.ctx.beginPath();
    
    // ⭐ FIX: Ensure segments is an INTEGER
    const segments = Math.floor(WaveConfig.wave.segments * segmentReduction);
    
    // ⭐ CRITICAL: Reduce amplitude cap even more to prevent waves reaching screen edges
    amplitude = Math.min(amplitude, 150);
    
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * this.canvas.width;
      
      // ═══════════════════════════════════════════════════════════════════════
      // LAYERED SINE WAVES for complexity
      // ═══════════════════════════════════════════════════════════════════════
      const wave1 = Math.sin(x * frequency + time * WaveConfig.layers.primarySpeed) * amplitude;
      const wave2 = Math.sin(x * frequency * 2 + time * WaveConfig.layers.secondarySpeed) * 
                    (amplitude * WaveConfig.layers.secondaryAmplitude);
      const wave3 = Math.sin(x * frequency * 0.5 + time * WaveConfig.layers.tertiarySpeed) * 
                    (amplitude * WaveConfig.layers.tertiaryAmplitude);
      
      // ═══════════════════════════════════════════════════════════════════════
      // HAND INFLUENCE - Waves bend toward hands (SIMPLIFIED)
      // ═══════════════════════════════════════════════════════════════════════
      let handInfluence = 0;
      const distToLeft = Math.abs(x - leftX);
      const distToRight = Math.abs(x - rightX);
      
      // ⭐ CRITICAL FIX: Cap exponential calculations to prevent overflow
      const leftInfluenceRaw = -distToLeft / WaveConfig.handInfluence.radius;
      const rightInfluenceRaw = -distToRight / WaveConfig.handInfluence.radius;
      
      // Only calculate if within reasonable range (prevent Math.exp overflow)
      if (leftInfluenceRaw > -10) {
        handInfluence += amplitude * WaveConfig.handInfluence.strength * Math.exp(leftInfluenceRaw);
      }
      if (rightInfluenceRaw > -10) {
        handInfluence += amplitude * WaveConfig.handInfluence.strength * Math.exp(rightInfluenceRaw);
      }
      
      // ⭐ SAFETY: Cap hand influence
      handInfluence = Math.min(handInfluence, 80);
      
      let y = yOffset + wave1 + wave2 + wave3 + handInfluence;
      
      // ⭐ CRITICAL FIX: Clamp Y to screen bounds with padding!
      // This prevents waves from going off-screen which causes freezing!
      y = Math.max(-50, Math.min(this.canvas.height + 50, y));
      
      // ⭐ SAFETY: Check for valid y coordinate
      if (!isFinite(y)) continue;
      
      if (i === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
    }

    // ═════════════════════════════════════════════════════════════════════════
    // GRADIENT STROKE
    // ═════════════════════════════════════════════════════════════════════════
    // ⭐ SAFETY: Ensure alpha is clamped to valid range (0-1)
    const safeAlpha = Math.max(0, Math.min(1, alpha));
    
    const gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, 0);
    gradient.addColorStop(0, color + Math.floor(safeAlpha * 100).toString(16).padStart(2, '0'));
    gradient.addColorStop(0.5, color + Math.floor(safeAlpha * 255).toString(16).padStart(2, '0'));
    gradient.addColorStop(1, color + Math.floor(safeAlpha * 100).toString(16).padStart(2, '0'));

    this.ctx.strokeStyle = gradient;
    this.ctx.lineWidth = WaveConfig.wave.lineThickness;
    this.ctx.stroke();

    // ═════════════════════════════════════════════════════════════════════════
    // FILL AREA BELOW WAVE
    // ═════════════════════════════════════════════════════════════════════════
    this.ctx.lineTo(this.canvas.width, this.canvas.height);
    this.ctx.lineTo(0, this.canvas.height);
    this.ctx.closePath();

    const fillGradient = this.ctx.createLinearGradient(0, yOffset, 0, this.canvas.height);
    fillGradient.addColorStop(0, color + Math.floor(safeAlpha * WaveConfig.visual.fillOpacity).toString(16).padStart(2, '0'));
    fillGradient.addColorStop(1, color + '00');

    this.ctx.fillStyle = fillGradient;
    this.ctx.fill();
  }

  private drawFocalPoint(
    x: number,
    y: number,
    color: string,
    scale: number,
    pulse: number
  ) {
    // Calculate intended size
    const rawSize = WaveConfig.focalPoint.baseSize * scale + 
                    Math.sin(this.time * WaveConfig.focalPoint.pulseSpeed) * 
                    pulse * WaveConfig.focalPoint.pulseAmount;
    
    // ⭐ CRITICAL FIX: Prevent negative radius crash!
    // Ensure size is at least 0.1 (0 causes issues in some browsers too)
    const size = Math.max(0.1, rawSize);
    
    // Multi-layer glow
    for (let i = 0; i < WaveConfig.focalPoint.glowLayers; i++) {
      const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, size * (i + 1));
      gradient.addColorStop(0, color + 'AA');
      gradient.addColorStop(1, color + '00');

      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(x, y, size * (i + 1), 0, Math.PI * 2);
      this.ctx.fill();
    }
  }
}