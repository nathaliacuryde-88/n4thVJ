import { Hand, HandData } from '../../App';

interface Line {
  x: number;
  y: number;
  length: number;
  currentAngle: number;
  targetAngle: number;
  spinVelocity: number;
}

export class LineFieldRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private lines: Line[] = [];
  private gridSpacing = 40; // Distance between lines
  private lineLength = 30; // Length of each line
  private isClapping = false;
  private clappingIntensity = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.initializeGrid();
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
          currentAngle: 0,
          targetAngle: 0,
          spinVelocity: 0
        });
      }
    }
  }

  render(handData: HandData, colors: string[]) {
    // Background - always black for 1C mode (when color array has white as second element)
    // Detect 1C mode: colors[1] is white (#FFFFFF or #ffffff)
    const is1CMode = colors[1] && (colors[1].toLowerCase() === '#ffffff' || colors[1].toLowerCase() === '#fff');
    
    if (is1CMode) {
      this.ctx.fillStyle = '#000000'; // Force black background in 1C mode
    } else {
      this.ctx.fillStyle = colors[3] || '#000000'; // Use color[3] for other modes
    }
    
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Handle canvas resize
    if (this.lines.length === 0 || 
        this.lines[0].x > this.canvas.width || 
        this.lines[0].y > this.canvas.height) {
      this.initializeGrid();
    }

    // Calculate rotation speed based on finger count
    let rotationSpeed = 0.1; // Default medium speed
    let maxFingerCount = 0;

    const hands: Hand[] = [];
    if (handData.left) hands.push(handData.left);
    if (handData.right) hands.push(handData.right);

    hands.forEach(hand => {
      let fingerCount = hand.fingerCount || 2;
      // PINCH GESTURE = Treat as 1 finger (slow)
      if (hand.gesture === 'pinch') {
        fingerCount = 1;
      }
      maxFingerCount = Math.max(maxFingerCount, fingerCount);
    });

    // Speed: 1 finger = 0.02x (very slow), 2 fingers = 0.1x (medium), 5 fingers = 0.3x (fast)
    if (maxFingerCount === 1) {
      rotationSpeed = 0.02;
    } else if (maxFingerCount === 2) {
      rotationSpeed = 0.1;
    } else if (maxFingerCount === 3) {
      rotationSpeed = 0.15;
    } else if (maxFingerCount === 4) {
      rotationSpeed = 0.2;
    } else if (maxFingerCount >= 5) {
      rotationSpeed = 0.3;
    }

    // Clapping effect - rapid spin
    if (handData.clapping) {
      if (!this.isClapping) {
        this.isClapping = true;
        this.clappingIntensity = 1;
      }
    } else {
      this.isClapping = false;
    }

    // Decay clapping intensity
    if (this.clappingIntensity > 0) {
      this.clappingIntensity *= 0.95;
      if (this.clappingIntensity < 0.01) {
        this.clappingIntensity = 0;
      }
    }

    // Update each line
    this.lines.forEach(line => {
      if (hands.length > 0) {
        // Calculate blended target angle from all hands
        let totalWeight = 0;
        let weightedAngleX = 0;
        let weightedAngleY = 0;

        hands.forEach(hand => {
          const handX = (hand.position?.x || 0.5) * this.canvas.width;
          const handY = (hand.position?.y || 0.5) * this.canvas.height;

          const dx = handX - line.x;
          const dy = handY - line.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Weight by inverse distance (closer hands have more influence)
          const weight = 1 / (1 + distance * 0.001);
          
          // Calculate angle toward hand
          const angle = Math.atan2(dy, dx);
          
          // Accumulate weighted angles using vector components
          weightedAngleX += Math.cos(angle) * weight;
          weightedAngleY += Math.sin(angle) * weight;
          totalWeight += weight;
        });

        // Calculate blended angle
        if (totalWeight > 0) {
          line.targetAngle = Math.atan2(weightedAngleY, weightedAngleX);
        }
      } else {
        // No hands - gradually return to horizontal
        line.targetAngle = 0;
      }

      // Apply clapping spin
      if (this.clappingIntensity > 0) {
        line.spinVelocity += this.clappingIntensity * 0.5;
        line.currentAngle += line.spinVelocity;
        line.spinVelocity *= 0.9; // Decay spin
      } else {
        // Normal rotation toward target
        let angleDiff = line.targetAngle - line.currentAngle;
        
        // Normalize angle difference to [-PI, PI]
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        
        line.currentAngle += angleDiff * rotationSpeed;
        line.spinVelocity = 0;
      }
    });

    // Draw all lines with dynamic color
    this.ctx.strokeStyle = colors[0] || '#00ff00';
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = 'round';

    this.lines.forEach(line => {
      const halfLen = line.length / 2;
      const x1 = line.x - Math.cos(line.currentAngle) * halfLen;
      const y1 = line.y - Math.sin(line.currentAngle) * halfLen;
      const x2 = line.x + Math.cos(line.currentAngle) * halfLen;
      const y2 = line.y + Math.sin(line.currentAngle) * halfLen;

      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
    });
  }
}