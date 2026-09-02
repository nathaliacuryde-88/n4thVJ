import { Hand, HandData } from '../../App';

interface Line {
  x: number;
  y: number;
  length: number;
  currentAngle: number;
  targetAngle: number;
  spinVelocity: number;
}

export class ThickLineRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private lines: Line[] = [];
  private gridSpacing = 30; // Tighter grid for denser field
  private lineLength = 22;  // Shorter lines to look more like blocks
  private isClapping = false;
  private clappingIntensity = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.initializeGrid();
    console.log('✅ ThickLineRenderer initialized');
  }

  private initializeGrid() {
    this.lines = [];
    const cols = Math.ceil(this.canvas.width / this.gridSpacing) + 1;
    const rows = Math.ceil(this.canvas.height / this.gridSpacing) + 1;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        this.lines.push({
          x: col * this.gridSpacing,
          y: row * this.gridSpacing,
          length: this.lineLength,
          currentAngle: 0, // Start horizontal
          targetAngle: 0,
          spinVelocity: 0
        });
      }
    }
  }

  render(handData: HandData, colors: string[]) {
    // Background - always black for 1C mode (when color array has white as second element)
    const is1CMode = colors[1] && (colors[1].toLowerCase() === '#ffffff' || colors[1].toLowerCase() === '#fff');
    
    if (is1CMode) {
      this.ctx.fillStyle = '#000000';
    } else {
      this.ctx.fillStyle = colors[3] || '#000000';
    }
    
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Handle canvas resize
    if (this.lines.length === 0 || 
        this.lines[0].x > this.canvas.width || 
        this.lines[0].y > this.canvas.height) {
      this.initializeGrid();
    }

    // Calculate rotation speed based on finger count
    let rotationSpeed = 0.12;
    let maxFingerCount = 0;

    const hands: Hand[] = [];
    if (handData.left) hands.push(handData.left);
    if (handData.right) hands.push(handData.right);

    hands.forEach(hand => {
      let fingerCount = hand.fingerCount || 2;
      if (hand.gesture === 'pinch') {
        fingerCount = 1;
      }
      maxFingerCount = Math.max(maxFingerCount, fingerCount);
    });

    // Adjust speed based on fingers
    if (maxFingerCount === 1) rotationSpeed = 0.03;
    else if (maxFingerCount >= 4) rotationSpeed = 0.25;

    // Clapping effect
    if (handData.clapping) {
      if (!this.isClapping) {
        this.isClapping = true;
        this.clappingIntensity = 1;
      }
    } else {
      this.isClapping = false;
    }

    if (this.clappingIntensity > 0) {
      this.clappingIntensity *= 0.95;
      if (this.clappingIntensity < 0.01) {
        this.clappingIntensity = 0;
      }
    }

    // Use primary color for all blocks
    const blockColor = colors[0] || '#ffffff';

    // Draw lines
    this.lines.forEach(line => {
      // 1. Calculate Angle
      if (hands.length > 0) {
        let totalWeight = 0;
        let weightedAngleX = 0;
        let weightedAngleY = 0;

        hands.forEach(hand => {
          const handX = (hand.position?.x || 0.5) * this.canvas.width;
          const handY = (hand.position?.y || 0.5) * this.canvas.height;

          const dx = handX - line.x;
          const dy = handY - line.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Weight by inverse distance - stronger falloff for tighter control
          const weight = 1 / (1 + distance * 0.005);
          const angle = Math.atan2(dy, dx);
          
          weightedAngleX += Math.cos(angle) * weight;
          weightedAngleY += Math.sin(angle) * weight;
          totalWeight += weight;
        });

        if (totalWeight > 0) {
          line.targetAngle = Math.atan2(weightedAngleY, weightedAngleX);
        }
      } else {
        // Return to horizontal if no hands
        line.targetAngle = 0;
      }

      // Apply rotation
      if (this.clappingIntensity > 0) {
        line.spinVelocity += this.clappingIntensity * 0.8;
        line.currentAngle += line.spinVelocity;
        line.spinVelocity *= 0.9;
      } else {
        let angleDiff = line.targetAngle - line.currentAngle;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        line.currentAngle += angleDiff * rotationSpeed;
        line.spinVelocity = 0;
      }

      // 2. Calculate Thickness based on proximity
      // Default thin state (when no hands or far away)
      let thickness = 2; 
      
      if (hands.length > 0) {
        let minDistance = Infinity;
        hands.forEach(hand => {
          const handX = (hand.position?.x || 0.5) * this.canvas.width;
          const handY = (hand.position?.y || 0.5) * this.canvas.height;
          const dist = Math.hypot(handX - line.x, handY - line.y);
          if (dist < minDistance) minDistance = dist;
        });

        // Proximity Logic: 
        // Very close (< 100px) -> Very thick (up to 35px)
        // Medium distance (100-500px) -> Scaling down
        // Far (> 600px) -> Base thickness (2px)
        const maxThickness = 35; // Very thick blocks when close
        const minThick = 2;      // Thin lines when far
        const radius = 600;      // Influence radius
        
        if (minDistance < radius) {
          // Non-linear falloff (power of 3) makes the "hotspot" tighter and more dramatic
          const factor = Math.pow(1 - (minDistance / radius), 3); 
          thickness = minThick + (maxThickness - minThick) * factor;
        }
      }

      // 3. Draw Rectangle (Thick Line)
      this.ctx.save();
      this.ctx.translate(line.x, line.y);
      this.ctx.rotate(line.currentAngle);
      
      this.ctx.fillStyle = blockColor;
      
      // Draw centered rectangle
      // x, y, width, height
      // Note: we use line.length for the "width" of the block (along rotation axis)
      // and thickness for the "height" (perpendicular to rotation axis)
      this.ctx.fillRect(-line.length / 2, -thickness / 2, line.length, thickness);
      
      this.ctx.restore();
    });
  }
}
