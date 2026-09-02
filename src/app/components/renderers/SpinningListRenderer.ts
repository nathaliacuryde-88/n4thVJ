import { HandData } from '../../App';

interface ListItem {
  text: string;
  offset: number; // Vertical offset from center
}

export class SpinningListRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private scrollPosition: number = 0;
  private targetScrollSpeed: number = 0;
  private currentScrollSpeed: number = 0;
  private items: string[] = [];
  private vibrationTimer: number = 0;
  private time: number = 0; // For animated code background

  // Code background settings (similar to HolographicBlobRenderer)
  private readonly CODE_FONT_SIZE = 14;
  private readonly CODE_LINE_HEIGHT = 18;
  private readonly CODE_CHAR_WIDTH = 10;
  private readonly CODE_OPACITY = 0.2;
  private readonly CODE_ANIMATION_SPEED = 0.1;
  private readonly CODE_CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789{}[]()<>=+-*/;:,.@#$%&|';

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    // Initialize list items (matching the reference animation style)
    this.items = [
      'B',
      'Bl',
      'Bli',
      'Blis',
      'Blist',
      'Bliste',
      'Blister',
      'Blisteri',
      'Blisterin',
      'Blistering',
      'Blisteringo'
    ];
  }

  render(handData: HandData, colors: string[]) {
    if (this.canvas.width === 0 || this.canvas.height === 0) return;

    // Increment time for animated code background
    this.time += 0.016;

    // Black background (no fade trail, instant clear)
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw moving code background
    this.drawCodeBackground();

    // Calculate scroll speed based on hand gestures
    let speedMultiplier = 0;
    let hasHand = false;
    
    // Check left hand
    if (handData.left && handData.left.landmarks) {
      hasHand = true;
      let leftFingers = this.countFingers(handData.left.landmarks, 'left');
      
      // PINCH GESTURE = Almost frozen (0.003x speed)
      if (handData.left.gesture === 'pinch') {
        leftFingers = 1;
        speedMultiplier = 0.003;
      } 
      // 2 fingers = 0.5x slow
      else if (leftFingers === 2) {
        speedMultiplier = 0.5;
      }
      // 5 fingers = 2.0x fast
      else if (leftFingers >= 5) {
        speedMultiplier = 2.0;
      }
      // 3-4 fingers = 1.0x normal
      else {
        speedMultiplier = 1.0;
      }
    }

    // Check right hand (use max speed if both hands present)
    if (handData.right && handData.right.landmarks) {
      hasHand = true;
      let rightFingers = this.countFingers(handData.right.landmarks, 'right');
      
      let rightSpeed = 0;
      
      // PINCH GESTURE = Almost frozen (0.003x speed)
      if (handData.right.gesture === 'pinch') {
        rightFingers = 1;
        rightSpeed = 0.003;
      } 
      // 2 fingers = 0.5x slow
      else if (rightFingers === 2) {
        rightSpeed = 0.5;
      }
      // 5 fingers = 2.0x fast
      else if (rightFingers >= 5) {
        rightSpeed = 2.0;
      }
      // 3-4 fingers = 1.0x normal
      else {
        rightSpeed = 1.0;
      }
      
      speedMultiplier = Math.max(speedMultiplier, rightSpeed);
    }

    // Handle clapping - explosion effect with speed burst
    let vibrationIntensity = 0;
    if (handData.clapping) {
      this.vibrationTimer = 1.0;
      // Clap causes rapid scroll burst
      this.currentScrollSpeed += 50;
    }
    
    if (this.vibrationTimer > 0) {
      this.vibrationTimer -= 0.016;
      vibrationIntensity = Math.max(0, this.vibrationTimer);
    }

    // Set target scroll speed
    if (hasHand) {
      // Base scroll speed (pixels per frame)
      const baseSpeed = 2;
      this.targetScrollSpeed = baseSpeed * speedMultiplier;
    } else {
      // Slowly decelerate when no hand detected
      this.targetScrollSpeed = 0;
    }

    // Smooth interpolation to target speed
    const acceleration = 0.05;
    this.currentScrollSpeed += (this.targetScrollSpeed - this.currentScrollSpeed) * acceleration;

    // Update scroll position
    this.scrollPosition += this.currentScrollSpeed;
    
    // Add vibration chaos
    if (vibrationIntensity > 0) {
      this.scrollPosition += (Math.random() - 0.5) * vibrationIntensity * 20;
    }

    // Wrap scroll position (loop infinitely)
    const itemSpacing = 180; // Vertical spacing between items
    const totalHeight = this.items.length * itemSpacing;
    while (this.scrollPosition >= totalHeight) {
      this.scrollPosition -= totalHeight;
    }
    while (this.scrollPosition < 0) {
      this.scrollPosition += totalHeight;
    }

    // Calculate center position
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;

    // Draw each list item
    for (let i = 0; i < this.items.length; i++) {
      // Calculate position for this item
      const itemY = (i * itemSpacing) - this.scrollPosition;
      
      // Distance from center (normalized -1 to 1)
      const distanceFromCenter = (itemY - centerY + this.canvas.height / 2) / (this.canvas.height / 2);
      
      // Calculate opacity and scale based on distance from center
      // Item at center = full opacity and scale
      // Items far from center = transparent and small
      const absDist = Math.abs(distanceFromCenter);
      let scale = Math.max(0.3, 1 - absDist * 0.5);
      
      // Blur amount increases with distance from center - MORE BLUR for non-focused
      const blurAmount = absDist * 25; // Increased from 15 to 25 for more blur
      
      // Determine if this is the focused item (closest to center)
      const isFocused = absDist < 0.15;
      
      // Opacity: Focused item is ALWAYS 100% opacity, others have LESS opacity
      // Reduced opacity for non-focused items (was: scale, now: scale * 0.6)
      let opacity = isFocused ? 1.0 : scale * 0.6;
      
      // Only draw if visible
      if (opacity > 0.01) {
        this.ctx.save();
        this.ctx.translate(centerX, centerY + itemY);

        // Add vibration jitter
        if (vibrationIntensity > 0) {
          const jitterX = (Math.random() - 0.5) * vibrationIntensity * 30;
          const jitterY = (Math.random() - 0.5) * vibrationIntensity * 30;
          this.ctx.translate(jitterX, jitterY);
        }

        // Set font size based on scale and focus
        const baseFontSize = isFocused ? 120 : 80;
        const fontSize = baseFontSize * scale;
        // Use Sixtyfour font from Google Fonts
        this.ctx.font = `${fontSize}px "Sixtyfour", monospace`;
        this.ctx.textAlign = 'left'; // All texts left-aligned
        this.ctx.textBaseline = 'middle';

        // Use color palette - default to white if no colors provided
        const baseColor = colors && colors.length > 0 ? colors[0] : '#FFFFFF';

        // Apply blur effect for non-focused items (NO blur for focused)
        if (!isFocused) {
          this.ctx.filter = `blur(${blurAmount}px)`;
        } else {
          // Explicitly no blur for focused item
          this.ctx.filter = 'none';
        }

        // Calculate the width needed for arrow + spacing
        const arrowWidth = isFocused ? 100 : 0;
        
        // Calculate left edge position to center the whole group
        // Measure text width to center the block
        this.ctx.font = `${fontSize}px "Sixtyfour", monospace`;
        const metrics = this.ctx.measureText(this.items[i]);
        const textWidth = metrics.width;
        const totalWidth = textWidth + arrowWidth;
        const leftEdge = -totalWidth / 2;

        // Draw arrow for focused item (to the left of text)
        if (isFocused) {
          this.ctx.globalAlpha = 1.0; // Arrow always 100% opacity
          this.ctx.fillStyle = '#FFFFFF';
          this.ctx.fillText('→', leftEdge, 0);
        }

        // Draw text with appropriate opacity
        this.ctx.globalAlpha = opacity;
        this.ctx.shadowBlur = isFocused ? 30 : 10;
        this.ctx.shadowColor = baseColor;
        this.ctx.fillStyle = baseColor;
        this.ctx.fillText(this.items[i], leftEdge + arrowWidth, 0);

        this.ctx.filter = 'none';
        this.ctx.restore();
      }
    }

    // Draw speed indicator in corner
    this.drawSpeedIndicator(speedMultiplier, hasHand, colors[0] || '#FFFFFF');
  }

  private drawSpeedIndicator(speed: number, active: boolean, color: string) {
    const x = 50;
    const y = this.canvas.height - 50;
    const barWidth = 200;
    const barHeight = 20;

    this.ctx.save();
    
    // Background bar
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    this.ctx.fillRect(x, y, barWidth, barHeight);
    
    // Speed bar
    if (active) {
      const fillWidth = barWidth * Math.min(speed / 2.0, 1);
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x, y, fillWidth, barHeight);
    }
    
    // Border
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(x, y, barWidth, barHeight);
    
    // Speed label
    this.ctx.font = 'bold 14px "Courier New", monospace';
    this.ctx.fillStyle = color;
    this.ctx.textAlign = 'left';
    this.ctx.textBaseline = 'bottom';
    this.ctx.fillText(`SPEED: ${speed.toFixed(3)}x`, x, y - 5);
    
    this.ctx.restore();
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

  private drawCodeBackground() {
    // Set monospaced font and style
    this.ctx.font = `${this.CODE_FONT_SIZE}px 'Courier New', 'Consolas', monospace`;
    this.ctx.fillStyle = `rgba(255, 255, 255, ${this.CODE_OPACITY})`;
    this.ctx.textBaseline = 'top';

    // Calculate grid dimensions
    const cols = Math.ceil(this.canvas.width / this.CODE_CHAR_WIDTH) + 1;
    const rows = Math.ceil(this.canvas.height / this.CODE_LINE_HEIGHT) + 1;

    // Draw grid of random code characters
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * this.CODE_CHAR_WIDTH;
        const y = row * this.CODE_LINE_HEIGHT;
        
        // Pick random character from code character set
        // The time-based animation makes characters change
        const char = this.CODE_CHARS[Math.floor((Math.random() + this.time * this.CODE_ANIMATION_SPEED + row * 0.3 + col * 0.7) * this.CODE_CHARS.length) % this.CODE_CHARS.length];
        
        this.ctx.fillText(char, x, y);
      }
    }
  }
}