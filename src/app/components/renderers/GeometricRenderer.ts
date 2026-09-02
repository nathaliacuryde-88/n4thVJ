import { HandData } from '../../App';
import { GeometricConfig } from '../../config/GeometricRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * GEOMETRIC RENDERER (Key 1)
 * ═══════════════════════════════════════════════════════════════════════════
 * Creates rotating geometric polygons that follow hand movements.
 * Finger count controls speed and polygon complexity.
 * 
 * ALL PARAMETERS NOW IN: /config/GeometricRendererConfig.ts
 * ═══════════════════════════════════════════════════════════════════════════
 */
export class GeometricRenderer {
  /** Live copy of GeometricConfig, with any slider overrides applied. */
  private cfg = GeometricConfig;

  setParams(values: ParamValues) {
    this.cfg = withOverrides(GeometricConfig, values);
  }

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private time = 0; // Animation timer
  private vibrationTimer = 0; // Clap vibration timer

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  render(handData: HandData, colors: string[]) {
    this.time += 0.016; // Animation speed (60 FPS)

    // ═════════════════════════════════════════════════════════════════════════
    // BACKGROUND FADE - Creates motion trails
    // ═════════════════════════════════════════════════════════════════════════
    this.ctx.fillStyle = `rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // ═════════════════════════════════════════════════════════════════════════
    // CLAPPING VIBRATION + WHITE FLASH
    // ═════════════════════════════════════════════════════════════════════════
    let vibrationIntensity = 0;
    if (handData.clapping) {
      this.ctx.fillStyle = '#FFFFFFCC'; // White flash
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.vibrationTimer = this.cfg.vibration.flashDuration;
    }
    
    if (this.vibrationTimer > 0) {
      this.vibrationTimer -= 0.016;
      vibrationIntensity = Math.max(0, this.vibrationTimer);
    }

    // ═════════════════════════════════════════════════════════════════════════
    // FINGER COUNT CONTROLS
    // ═════════════════════════════════════════════════════════════════════════
    let rotationSpeed = 1;
    let complexity = this.cfg.complexity.baseSides;
    let strokeWidthMultiplier = 1; // New: stroke width based on finger count

    if (handData.left && handData.left.gesture === 'open') {
      const fingerCount = handData.left.fingerCount || 2;
      if (fingerCount === 1) {
        rotationSpeed = this.cfg.fingerCountSpeed.oneFinger;
        strokeWidthMultiplier = this.cfg.fingerCountStrokeWidth.oneFinger;
      } else if (fingerCount === 2) {
        rotationSpeed = this.cfg.fingerCountSpeed.normalFingers;
        strokeWidthMultiplier = this.cfg.fingerCountStrokeWidth.twoFingers;
      } else if (fingerCount === 5) {
        rotationSpeed = this.cfg.fingerCountSpeed.fiveFingers;
        strokeWidthMultiplier = this.cfg.fingerCountStrokeWidth.fiveFingers;
      } else {
        rotationSpeed = this.cfg.fingerCountSpeed.normalFingers;
        strokeWidthMultiplier = this.cfg.fingerCountStrokeWidth.normalFingers;
      }
      complexity = Math.floor(
        this.cfg.complexity.baseSides + 
        fingerCount * this.cfg.complexity.leftHandMultiplier
      );
    }
    
    // PINCH GESTURE = SLOW (same as 1 finger before)
    if (handData.left && handData.left.gesture === 'pinch') {
      rotationSpeed = this.cfg.fingerCountSpeed.oneFinger;
      strokeWidthMultiplier = this.cfg.fingerCountStrokeWidth.oneFinger;
      complexity = Math.floor(
        this.cfg.complexity.baseSides + 
        1 * this.cfg.complexity.leftHandMultiplier
      );
    }

    if (handData.right && handData.right.gesture === 'open') {
      const fingerCount = handData.right.fingerCount || 2;
      let rightSpeed;
      let rightStrokeMultiplier;
      if (fingerCount === 1) {
        rightSpeed = this.cfg.fingerCountSpeed.oneFinger;
        rightStrokeMultiplier = this.cfg.fingerCountStrokeWidth.oneFinger;
      } else if (fingerCount === 2) {
        rightSpeed = this.cfg.fingerCountSpeed.normalFingers;
        rightStrokeMultiplier = this.cfg.fingerCountStrokeWidth.twoFingers;
      } else if (fingerCount === 5) {
        rightSpeed = this.cfg.fingerCountSpeed.fiveFingers;
        rightStrokeMultiplier = this.cfg.fingerCountStrokeWidth.fiveFingers;
      } else {
        rightSpeed = this.cfg.fingerCountSpeed.normalFingers;
        rightStrokeMultiplier = this.cfg.fingerCountStrokeWidth.normalFingers;
      }
      rotationSpeed *= rightSpeed; // Multiply speeds together
      strokeWidthMultiplier = Math.max(strokeWidthMultiplier, rightStrokeMultiplier); // Use max stroke width
      complexity += Math.floor(fingerCount * this.cfg.complexity.rightHandMultiplier);
    }
    
    // PINCH GESTURE = SLOW (same as 1 finger before)
    if (handData.right && handData.right.gesture === 'pinch') {
      rotationSpeed *= this.cfg.fingerCountSpeed.oneFinger;
      strokeWidthMultiplier = Math.max(strokeWidthMultiplier, this.cfg.fingerCountStrokeWidth.oneFinger);
      complexity += Math.floor(1 * this.cfg.complexity.rightHandMultiplier);
    }

    const rotation = this.time * rotationSpeed * this.cfg.animation.baseRotationMultiplier;

    // ═════════════════════════════════════════════════════════════════════════
    // VIBRATION SHAKE
    // ═════════════════════════════════════════════════════════════════════════
    const vibX = vibrationIntensity > 0 ? 
      (Math.random() - 0.5) * this.cfg.vibration.shakeAmountX * vibrationIntensity : 0;
    const vibY = vibrationIntensity > 0 ? 
      (Math.random() - 0.5) * this.cfg.vibration.shakeAmountY * vibrationIntensity : 0;

    // Draw motion trails
    this.drawGestureTrails(handData, colors);

    // ═════════════════════════════════════════════════════════════════════════
    // HAND POSITIONS
    // ═════════════════════════════════════════════════════════════════════════
    const centerX = handData.left?.position.x 
      ? handData.left.position.x * this.canvas.width + vibX
      : this.canvas.width / 2;
    const centerY = handData.left?.position.y 
      ? handData.left.position.y * this.canvas.height + vibY
      : this.canvas.height / 2;

    const centerX2 = handData.right?.position.x 
      ? handData.right.position.x * this.canvas.width + vibX
      : this.canvas.width / 2 + 100;
    const centerY2 = handData.right?.position.y 
      ? handData.right.position.y * this.canvas.height + vibY
      : this.canvas.height / 2;

    // ═════════════════════════════════════════════════════════════════════════
    // POLYGON SIZE
    // ═════════════════════════════════════════════════════════════════════════
    const size = this.cfg.polygon.baseSize * (1 + vibrationIntensity);

    // ═════════════════════════════════════════════════════════════════════════
    // DRAW LAYERED POLYGONS
    // ═════════════════════════════════════════════════════════════════════════
    for (let layer = 0; layer < this.cfg.layers.count; layer++) {
      const layerScale = size * (1 + layer * this.cfg.layers.sizeGrowth);
      const layerRotation = rotation + layer * this.cfg.layers.rotationOffset;
      
      if (handData.left && handData.left.gesture === 'open') {
        this.drawPolygon(
          centerX,
          centerY,
          Math.max(
            this.cfg.complexity.minSides, 
            Math.min(this.cfg.complexity.maxSides, complexity + layer)
          ),
          50 * layerScale + layer * 30, // Radius calculation
          layerRotation,
          colors[layer % colors.length],
          this.cfg.layers.baseOpacity - layer * this.cfg.layers.opacityFade,
          strokeWidthMultiplier
        );
      }

      if (handData.right && handData.right.gesture === 'open') {
        this.drawPolygon(
          centerX2,
          centerY2,
          Math.max(
            this.cfg.complexity.minSides,
            Math.min(this.cfg.complexity.maxSides, complexity + layer)
          ),
          50 * layerScale + layer * 30,
          -layerRotation, // Rotate opposite direction
          colors[(layer + 2) % colors.length],
          this.cfg.layers.baseOpacity - layer * this.cfg.layers.opacityFade,
          strokeWidthMultiplier
        );
      }
    }

    // ═════════════════════════════════════════════════════════════════════════
    // BRIDGE BETWEEN HANDS
    // ════════════════════════════════════════════════════════════════════════
    if (handData.left && handData.right && 
        handData.left.gesture === 'open' && handData.right.gesture === 'open') {
      this.drawBridge(
        centerX, centerY,
        centerX2, centerY2,
        colors,
        size,
        complexity
      );
    }
  }

  private drawGestureTrails(handData: HandData, colors: string[]) {
    if (!handData.gestureTrail || handData.gestureTrail.length < 2) return;
    
    const trail = handData.gestureTrail;
    
    for (let i = 1; i < trail.length; i++) {
      const prev = trail[i - 1];
      const curr = trail[i];
      
      const alpha = i / trail.length; // Fade along trail
      const color = curr.hand === 'left' ? colors[0] : colors[2];
      
      this.ctx.strokeStyle = color + Math.floor(alpha * 100).toString(16).padStart(2, '0');
      this.ctx.lineWidth = this.cfg.trail.lineThickness * alpha;
      this.ctx.lineCap = 'round';
      
      this.ctx.beginPath();
      this.ctx.moveTo(prev.x * this.canvas.width, prev.y * this.canvas.height);
      this.ctx.lineTo(curr.x * this.canvas.width, curr.y * this.canvas.height);
      this.ctx.stroke();
    }
  }

  private drawPolygon(
    x: number,
    y: number,
    sides: number,
    radius: number,
    rotation: number,
    color: string,
    alpha: number,
    strokeWidthMultiplier: number
  ) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(rotation);

    this.ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
      const angle = (i / sides) * Math.PI * 2;
      const px = Math.cos(angle) * radius;
      const py = Math.sin(angle) * radius;
      
      if (i === 0) {
        this.ctx.moveTo(px, py);
      } else {
        this.ctx.lineTo(px, py);
      }
    }
    this.ctx.closePath();

    // Radial gradient fill
    const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
    gradient.addColorStop(0, color + Math.floor(alpha * 255).toString(16).padStart(2, '0'));
    gradient.addColorStop(1, color + '00'); // Fade to transparent at edge

    this.ctx.fillStyle = gradient;
    this.ctx.fill();

    this.ctx.strokeStyle = color + Math.floor(alpha * 200).toString(16).padStart(2, '0');
    this.ctx.lineWidth = this.cfg.polygon.strokeWidth * strokeWidthMultiplier;
    this.ctx.stroke();

    this.ctx.restore();
  }

  private drawBridge(
    x1: number, y1: number,
    x2: number, y2: number,
    colors: string[],
    scale: number,
    segments: number
  ) {
    const gradient = this.ctx.createLinearGradient(x1, y1, x2, y2);
    colors.forEach((color, i) => {
      gradient.addColorStop(i / (colors.length - 1), color + '80');
    });

    this.ctx.strokeStyle = gradient;
    this.ctx.lineWidth = this.cfg.bridge.thickness * scale;
    this.ctx.lineCap = 'round';

    this.ctx.beginPath();
    
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = x1 + (x2 - x1) * t;
      const y = y1 + (y2 - y1) * t;
      
      // Wavy bridge effect
      const offset = Math.sin(t * Math.PI * 4 + this.time * 2) * this.cfg.bridge.waveAmplitude * scale;
      const perpX = -(y2 - y1) / Math.hypot(x2 - x1, y2 - y1);
      const perpY = (x2 - x1) / Math.hypot(x2 - x1, y2 - y1);
      
      if (i === 0) {
        this.ctx.moveTo(x + perpX * offset, y + perpY * offset);
      } else {
        this.ctx.lineTo(x + perpX * offset, y + perpY * offset);
      }
    }
    
    this.ctx.stroke();
  }
}