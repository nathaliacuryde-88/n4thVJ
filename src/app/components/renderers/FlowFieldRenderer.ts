import { Hand, HandData, AudioData } from '../../App';

interface FlowElement {
  x: number;
  y: number;
  angle: number;
  velocity: number;
  targetAngle: number;
}

export class FlowFieldRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private elements: FlowElement[] = [];
  private gridSpacing = 20; // High density
  private elementLength = 12; 
  private elementWidth = 3;
  private time = 0;
  private isClapping = false;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.initializeField();
    console.log('✅ FlowFieldRenderer initialized');
  }

  private initializeField() {
    this.elements = [];
    const cols = Math.ceil(this.canvas.width / this.gridSpacing) + 1;
    const rows = Math.ceil(this.canvas.height / this.gridSpacing) + 1;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        this.elements.push({
          x: col * this.gridSpacing,
          y: row * this.gridSpacing,
          angle: Math.random() * Math.PI * 2,
          velocity: 0,
          targetAngle: 0
        });
      }
    }
  }

  // Simple pseudo-random noise function
  private noise(x: number, y: number, z: number): number {
    return Math.sin(x * 0.01 + z) + Math.sin(y * 0.01 + z) + Math.sin((x + y) * 0.01 + z);
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    // Audio-driven time speed
    const speed = 0.01 + (audioData ? audioData.mid * 0.05 : 0);
    this.time += speed;
    
    // Background - Deep Blue/Dark
    const bgColor = colors[4] ? colors[4] + '40' : '#000022'; 
    
    // Flash background on clap
    if (handData.clapping) {
        this.ctx.fillStyle = '#222222'; // Flash dark grey
    } else {
        this.ctx.fillStyle = '#000510'; // Deep dark blue background
    }
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Handle resize
    if (this.elements.length === 0 || this.elements[0].x > this.canvas.width) {
      this.initializeField();
    }

    const hands: Hand[] = [];
    if (handData.left) hands.push(handData.left);
    if (handData.right) hands.push(handData.right);

    // Audio influence on dimensions
    const audioBass = audioData ? audioData.bass : 0;
    const audioHigh = audioData ? audioData.high : 0;
    const isBeat = audioData ? audioData.beat : false;
    
    const currentLength = this.elementLength * (1 + audioBass * 1.5);
    const currentWidth = this.elementWidth * (1 + audioBass * 0.5);

    this.ctx.save();

    this.elements.forEach((el, i) => {
      // 1. Base Flow (Noise)
      const noiseVal = this.noise(el.x, el.y, this.time);
      let targetAngle = noiseVal * Math.PI;
      let colorOverride = null;

      // Audio High Frequency Jitter
      if (audioHigh > 0.2) {
          targetAngle += (Math.random() - 0.5) * audioHigh;
      }

      // 2. Hand Influence
      if (hands.length > 0) {
        let minDist = Infinity;
        let influenceAngle = 0;
        let influenceStrength = 0;
        let activeMode = 'none';

        hands.forEach(hand => {
          const handX = (hand.position?.x || 0.5) * this.canvas.width;
          const handY = (hand.position?.y || 0.5) * this.canvas.height;
          const dx = handX - el.x;
          const dy = handY - el.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < minDist) minDist = dist;

          // Calculate angle towards/around hand
          const angleToHand = Math.atan2(dy, dx);
          
          // Closer = Stronger influence
          // Increased range for better visibility
          const maxDist = 800; 
          const weight = Math.max(0, 1 - (dist / maxDist)); 
          
          if (weight > influenceStrength) {
            influenceStrength = weight;
            
            const fingerCount = hand.fingerCount ?? 5;
            
            if (hand.gesture === 'pinch') {
              // PINCH: Implosion (point to hand) - "Vacuum"
              influenceAngle = angleToHand;
              activeMode = 'pinch';
            } else if (fingerCount <= 2) {
               // 2 FINGERS: Swirl / Vortex
               influenceAngle = angleToHand + Math.PI / 2;
               activeMode = '2fingers';
            } else {
               // 5 FINGERS / OPEN: Repulsion (Push away)
               influenceAngle = angleToHand + Math.PI; 
               activeMode = '5fingers';
            }
          }
        });

        // Apply Hand Influence
        if (influenceStrength > 0.1) {
           let diff = influenceAngle - targetAngle;
           while (diff > Math.PI) diff -= Math.PI * 2;
           while (diff < -Math.PI) diff += Math.PI * 2;
           
           // Apply stronger influence based on proximity
           targetAngle += diff * (influenceStrength * 0.95);
           
           // Visual Feedback: Color Changes based on Mode
           if (influenceStrength > 0.3) {
             if (activeMode === 'pinch') {
                colorOverride = colors[1] || '#ff00ff'; // Secondary Color
             } else if (activeMode === '5fingers') {
                colorOverride = colors[2] || '#00ffff'; // Tertiary Color
             } else if (activeMode === '2fingers') {
                colorOverride = colors[0] || '#ffffff'; // Primary Color
             }
           }
        }
      }

      // 3. Clap / Beat Explosion (Global repulsion from center)
      if (handData.clapping || isBeat) {
          const centerX = this.canvas.width / 2;
          const centerY = this.canvas.height / 2;
          const dx = el.x - centerX;
          const dy = el.y - centerY;
          const angleFromCenter = Math.atan2(dy, dx);
          
          const explosionStrength = (handData.clapping ? 0.9 : 0) + (isBeat ? 0.4 : 0);
          if (explosionStrength > 0) {
            // Blend towards explosion angle
            let diff = angleFromCenter - targetAngle;
            while (diff > Math.PI) diff -= Math.PI * 2;
            while (diff < -Math.PI) diff += Math.PI * 2;
            targetAngle += diff * explosionStrength;
            
            // Flash color
            if (handData.clapping) colorOverride = '#ffffff';
          }
      }

      // Smooth rotation
      let angleDiff = targetAngle - el.angle;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
      // Faster reaction time for crisper feel
      el.angle += angleDiff * 0.25;

      // Draw
      this.ctx.translate(el.x, el.y);
      this.ctx.rotate(el.angle);

      // Color logic
      if (colorOverride) {
          this.ctx.fillStyle = colorOverride;
      } else {
          // Default behavior
          this.ctx.fillStyle = isBeat && Math.random() > 0.7 
              ? '#ffffff' 
              : (colors[0] || '#ffffff');
      }
      
      this.ctx.fillRect(-currentLength/2, -currentWidth/2, currentLength, currentWidth);

      // Reset transform
      this.ctx.rotate(-el.angle);
      this.ctx.translate(-el.x, -el.y);
    });

    this.ctx.restore();
  }
}
