import { HandData } from '../../App';
import { timeScale } from '../../motion/clock';

interface GlowObject {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  life: number;
  hue: number;
  decay: number; // Decay rate based on finger count
}

export class ChromaticRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private glowObjects: GlowObject[] = [];
  private time = 0;
  private vibrationTimer = 0;
  private glitchIntensity = 0;
  private isExploding = false; // ⭐ CRITICAL FIX: Prevent infinite explosions!

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  render(handData: HandData, colors: string[]) {
    if (this.canvas.width === 0 || this.canvas.height === 0) return;

    // Dark fade for trails - softer fade for more cloud-like persistence
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Handle clapping explosion
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

    // Spawn shapes at hand position - More continuous smoke emission
    if (hasHand && handX !== null && handY !== null) {
      this.time += (1) * timeScale();
      
      let spawnRate = 4; // Base spawning rate
      let shapeSize = 100; // Medium size for 2-4 fingers
      let shapeCount = 2; // Particles per spawn
      let spread = 60; // Medium spread
      
      // 1 finger / PINCH = Small, tight clouds
      if (fingerCount === 1) {
        spawnRate = 8;
        shapeSize = 60; // Small clouds
        shapeCount = 1;
        spread = 30; // Tight spread
      } 
      // 2 fingers = Medium clouds
      else if (fingerCount === 2) {
        spawnRate = 5;
        shapeSize = 100; // Medium clouds
        shapeCount = 2;
        spread = 60;
      }
      // 3-4 fingers = Medium-large clouds
      else if (fingerCount === 3 || fingerCount === 4) {
        spawnRate = 4;
        shapeSize = 130;
        shapeCount = 2;
        spread = 80;
      }
      // 5 fingers = Large, expansive clouds
      else if (fingerCount >= 5) {
        spawnRate = 2;
        shapeSize = 180; // Large clouds
        shapeCount = 3;
        spread = 120; // Wide spread
      }

      if (this.time >= spawnRate) {
        this.time = 0;
        
        for (let i = 0; i < shapeCount; i++) {
          this.glowObjects.push({
            x: handX + (Math.random() - 0.5) * spread,
            y: handY + (Math.random() - 0.5) * spread,
            size: shapeSize + Math.random() * (shapeSize * 0.4), // Variable size based on base
            vx: (Math.random() - 0.5) * 1.5, // Slower drift for smoke
            vy: (Math.random() - 0.5) * 1.5 - 0.5, // Slight upward drift
            life: 1.0,
            hue: Math.random() * 360,
            decay: 0.002 + (fingerCount / 10) * 0.002, // Decay rate based on finger count
          });
        }
      }
    }

    // Update shapes - Smoother, slower movement
    this.glowObjects = this.glowObjects.filter(shape => {
      shape.x += shape.vx;
      shape.y += shape.vy;
      shape.vx *= 0.99; // Less friction for smooth flow
      shape.vy *= 0.99;
      shape.life -= shape.decay; // Slower fade for longer smoke trails
      
      if (vibrationIntensity > 0) {
        shape.x += (Math.random() - 0.5) * vibrationIntensity * 10;
        shape.y += (Math.random() - 0.5) * vibrationIntensity * 10;
      }
      
      return shape.life > 0;
    });

    // Limit shapes - More particles for denser smoke
    if (this.glowObjects.length > 120) {
      this.glowObjects = this.glowObjects.slice(-120);
    }

    // Render with RGB chromatic aberration
    this.glowObjects.forEach(shape => {
      this.renderChromaticShape(shape, vibrationIntensity, colors);
    });

    // REMOVED: Hand visualization overlay - now pure smoke/cloud/gradient aesthetic
    // The tracking still works, but no skeleton hand is drawn

    // Apply subtle noise overlay
    this.applyNoiseOverlay();

    // Apply glitch effects when clapping (but no hand skeleton)
    if (this.glitchIntensity > 0.1) {
      this.applyGlitchEffect();
    }
  }

  private renderChromaticShape(shape: GlowObject, vibration: number, colors: string[]) {
    const offset = 8 + vibration * 20; // Larger chromatic aberration for dreamier effect
    const alpha = shape.life * 0.4; // Softer, more transparent
    
    this.ctx.globalCompositeOperation = 'screen'; // Keep screen blend mode
    
    // Red channel (left) - Softer, multi-layer gradient
    const gradientR = this.ctx.createRadialGradient(
      shape.x - offset, shape.y, 0,
      shape.x - offset, shape.y, shape.size * 1.2
    );
    gradientR.addColorStop(0, colors[0] + 'FF');
    gradientR.addColorStop(0.3, colors[0] + '99');
    gradientR.addColorStop(0.6, colors[0] + '44');
    gradientR.addColorStop(1, 'transparent');
    
    this.ctx.fillStyle = gradientR;
    this.ctx.beginPath();
    this.ctx.arc(shape.x - offset, shape.y, shape.size * 1.2, 0, Math.PI * 2);
    this.ctx.fill();
    
    // Green channel (center) - Brightest layer
    const gradientG = this.ctx.createRadialGradient(
      shape.x, shape.y, 0,
      shape.x, shape.y, shape.size * 1.2
    );
    gradientG.addColorStop(0, colors[1] + 'FF');
    gradientG.addColorStop(0.3, colors[1] + 'BB');
    gradientG.addColorStop(0.6, colors[1] + '66');
    gradientG.addColorStop(1, 'transparent');
    
    this.ctx.fillStyle = gradientG;
    this.ctx.beginPath();
    this.ctx.arc(shape.x, shape.y, shape.size * 1.2, 0, Math.PI * 2);
    this.ctx.fill();
    
    // Blue channel (right) - Softer outer layer
    const gradientB = this.ctx.createRadialGradient(
      shape.x + offset, shape.y, 0,
      shape.x + offset, shape.y, shape.size * 1.2
    );
    gradientB.addColorStop(0, colors[2] + 'FF');
    gradientB.addColorStop(0.3, colors[2] + '99');
    gradientB.addColorStop(0.6, colors[2] + '44');
    gradientB.addColorStop(1, 'transparent');
    
    this.ctx.fillStyle = gradientB;
    this.ctx.beginPath();
    this.ctx.arc(shape.x + offset, shape.y, shape.size * 1.2, 0, Math.PI * 2);
    this.ctx.fill();
    
    this.ctx.globalCompositeOperation = 'source-over'; // Reset blend mode
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
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    
    for (let i = 0; i < 40; i++) {
      const angle = (Math.PI * 2 * i) / 40;
      const speed = 10 + Math.random() * 20;
      
      this.glowObjects.push({
        x: centerX,
        y: centerY,
        size: 80 + Math.random() * 100,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1.0,
        hue: Math.random() * 360,
        decay: 0.003, // Medium decay for explosion particles
      });
    }
  }

  private applyNoiseOverlay() {
    this.ctx.save();
    this.ctx.globalAlpha = 0.05;
    this.ctx.fillStyle = 'white';

    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * this.canvas.width;
      const y = Math.random() * this.canvas.height;
      const size = Math.random() * 2;
      this.ctx.fillRect(x, y, size, size);
    }

    this.ctx.restore();
  }

  private applyGlitchEffect() {
    this.ctx.save();
    this.ctx.globalAlpha = this.glitchIntensity * 0.5;
    this.ctx.fillStyle = 'white';

    // Vertical lines
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * this.canvas.width;
      const y = Math.random() * this.canvas.height;
      const size = Math.random() * 10;
      this.ctx.fillRect(x, y, size, this.canvas.height);
    }

    // Horizontal lines
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * this.canvas.width;
      const y = Math.random() * this.canvas.height;
      const size = Math.random() * 10;
      this.ctx.fillRect(x, y, this.canvas.width, size);
    }

    this.ctx.restore();
  }
}