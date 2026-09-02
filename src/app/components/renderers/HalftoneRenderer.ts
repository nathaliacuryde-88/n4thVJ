import { HandData } from '../../App';

interface Dot {
  x: number;
  y: number;
  baseSize: number;
  currentSize: number;
  targetSize: number;
}

export class HalftoneRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private dots: Dot[] = [];
  private gridSpacing = 8;
  private vibrationTimer = 0;
  private isExploding = false; // ⭐ CRITICAL FIX: Prevent infinite explosions!

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.initializeDots();
  }

  private initializeDots() {
    this.dots = [];
    const cols = Math.ceil(this.canvas.width / this.gridSpacing);
    const rows = Math.ceil(this.canvas.height / this.gridSpacing);
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        this.dots.push({
          x: col * this.gridSpacing,
          y: row * this.gridSpacing,
          baseSize: 1,
          currentSize: 1,
          targetSize: 1,
        });
      }
    }
  }

  render(handData: HandData, colors: string[]) {
    if (this.canvas.width === 0 || this.canvas.height === 0) return;

    // Background with dynamic color
    this.ctx.fillStyle = colors[3] || '#000000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Handle clapping
    let vibrationIntensity = 0;
    if (handData.clapping && !this.isExploding) {
      this.createExplosion();
      this.vibrationTimer = 1.0;
      this.isExploding = true; // ⭐ CRITICAL FIX: Prevent infinite explosions!
    }
    
    // ⭐ CRITICAL FIX: Reset explosion flag when NOT clapping
    if (!handData.clapping) {
      this.isExploding = false;
    }
    
    if (this.vibrationTimer > 0) {
      this.vibrationTimer -= 0.016;
      vibrationIntensity = Math.max(0, this.vibrationTimer);
    }

    // Get hand data
    let handX: number | null = null;
    let handY: number | null = null;
    let fingerCount = 2;
    let hasHand = false;

    if (handData.left && handData.left.landmarks) {
      let leftFingers = this.countFingers(handData.left.landmarks, 'left');
      // PINCH GESTURE = Treat as 1 finger (slow)
      if (handData.left.gesture === 'pinch') {
        leftFingers = 1;
      }
      if (leftFingers >= 1) {
        hasHand = true;
        handX = handData.left.position.x * this.canvas.width;
        handY = handData.left.position.y * this.canvas.height;
        fingerCount = leftFingers;
      }
    }

    if (handData.right && handData.right.landmarks) {
      let rightFingers = this.countFingers(handData.right.landmarks, 'right');
      // PINCH GESTURE = Treat as 1 finger (slow)
      if (handData.right.gesture === 'pinch') {
        rightFingers = 1;
      }
      if (rightFingers >= 1) {
        hasHand = true;
        const rightX = handData.right.position.x * this.canvas.width;
        const rightY = handData.right.position.y * this.canvas.height;
        
        if (handX !== null) {
          handX = (handX + rightX) / 2;
          handY = ((handY || 0) + rightY) / 2;
          fingerCount = Math.max(fingerCount, rightFingers);
        } else {
          handX = rightX;
          handY = rightY;
          fingerCount = rightFingers;
        }
      }
    }

    // Update dot sizes based on hand proximity
    let influenceRadius = 200;
    let maxSize = 4;
    
    if (fingerCount === 1) {
      influenceRadius = 100;
      maxSize = 2;
    } else if (fingerCount >= 5) {
      influenceRadius = 350;
      maxSize = 6;
    }

    this.dots.forEach(dot => {
      dot.targetSize = dot.baseSize;
      
      if (hasHand && handX !== null && handY !== null) {
        const dx = dot.x - handX;
        const dy = dot.y - handY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < influenceRadius) {
          const influence = 1 - dist / influenceRadius;
          dot.targetSize = dot.baseSize + influence * maxSize;
        }
      }
      
      // Smooth transition
      dot.currentSize += (dot.targetSize - dot.currentSize) * 0.2;
      
      // Add vibration
      if (vibrationIntensity > 0) {
        dot.currentSize += Math.random() * vibrationIntensity * 3;
      }
    });

    // Render dots
    this.ctx.fillStyle = '#FFFFFF';
    this.dots.forEach(dot => {
      if (dot.currentSize > 0.5) {
        this.ctx.beginPath();
        this.ctx.arc(dot.x, dot.y, dot.currentSize, 0, Math.PI * 2);
        this.ctx.fill();
      }
    });
  }

  private countFingers(landmarks: Array<{ x: number; y: number; z: number }>, hand: 'left' | 'right'): number {
    if (!landmarks || landmarks.length < 21) return 0;
    
    const palm = landmarks[9]; // Middle of palm
    
    // Thumb: Check if tip is farther from palm than IP joint
    const thumbTip = landmarks[4];
    const thumbIP = landmarks[3];
    
    const thumbTipDist = Math.sqrt(
      Math.pow(thumbTip.x - palm.x, 2) + 
      Math.pow(thumbTip.y - palm.y, 2) + 
      Math.pow(thumbTip.z - palm.z, 2)
    );
    const thumbIPDist = Math.sqrt(
      Math.pow(thumbIP.x - palm.x, 2) + 
      Math.pow(thumbIP.y - palm.y, 2) + 
      Math.pow(thumbIP.z - palm.z, 2)
    );
    
    let count = thumbTipDist > thumbIPDist ? 1 : 0;
    
    // Other fingers - check if tip is farther from palm than PIP joint
    const fingerTips = [8, 12, 16, 20]; // Index, Middle, Ring, Pinky tips
    const fingerPIPs = [6, 10, 14, 18]; // PIP joints (middle joints)
    
    for (let i = 0; i < 4; i++) {
      const tipDist = Math.sqrt(
        Math.pow(landmarks[fingerTips[i]].x - palm.x, 2) + 
        Math.pow(landmarks[fingerTips[i]].y - palm.y, 2) + 
        Math.pow(landmarks[fingerTips[i]].z - palm.z, 2)
      );
      const pipDist = Math.sqrt(
        Math.pow(landmarks[fingerPIPs[i]].x - palm.x, 2) + 
        Math.pow(landmarks[fingerPIPs[i]].y - palm.y, 2) + 
        Math.pow(landmarks[fingerPIPs[i]].z - palm.z, 2)
      );
      
      if (tipDist > pipDist * 1.1) {
        count++;
      }
    }

    return count;
  }

  private createExplosion() {
    if (this.isExploding) return; // ⭐ CRITICAL FIX: Prevent infinite explosions!
    this.isExploding = true;
    
    // Create expanding wave from center
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    
    this.dots.forEach(dot => {
      const dx = dot.x - centerX;
      const dy = dot.y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Pulse outward
      const delay = dist / 10;
      setTimeout(() => {
        dot.targetSize = 8;
      }, delay);
    });
    
    // Reset explosion flag after a short delay
    setTimeout(() => {
      this.isExploding = false;
    }, 1000);
  }
}