import { HandData } from '../../App';

interface Fragment {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  rotation: number;
  rotationSpeed: number;
}

interface Heart {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  rotation: number;
  rotationSpeed: number;
}

export class TechnicalHandRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private fragments: Fragment[] = [];
  private hearts: Heart[] = [];
  private glitchIntensity = 0;
  private lastHandsTouching = false;
  private handsTouchingTime = 0; // Track how long hands have been touching
  private gracePeriod = 0; // Grace period to prevent flickering resets

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  render(handData: HandData, colors: string[]) {
    // Dark background
    this.ctx.fillStyle = colors[3] || '#000000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Check if hands are touching
    const handsTouching = this.checkHandsTouching(handData);
    
    // Use grace period to prevent flickering resets
    if (handsTouching) {
      this.handsTouchingTime += 1; // Increment time hands have been touching
      this.gracePeriod = 30; // Longer grace period (30 frames = 0.5 seconds)
      this.spawnHearts(handData); // Only spawn when actually touching
    } else {
      // Don't reset immediately - use grace period
      if (this.gracePeriod > 0) {
        this.gracePeriod -= 1;
        // Keep the counter alive during grace period, but DON'T spawn hearts
        this.handsTouchingTime += 1;
      } else {
        // Grace period expired, reset touch time
        this.handsTouchingTime = 0;
      }
    }
    
    this.lastHandsTouching = handsTouching;

    // Update and render hearts
    this.updateHearts();
    this.renderHearts();

    // Decay glitch intensity
    this.glitchIntensity *= 0.95;

    // Render hands using actual landmarks
    if (handData.left && handData.left.landmarks) {
      this.renderHandFromLandmarks(handData.left.landmarks, 'left');
    }
    if (handData.right && handData.right.landmarks) {
      this.renderHandFromLandmarks(handData.right.landmarks, 'right');
    }

    // Apply static/noise overlay
    this.applyNoiseOverlay();

    // Apply glitch effects
    if (this.glitchIntensity > 0.1 || Math.random() < 0.05) {
      this.applyGlitchEffect();
    }
  }

  private renderHandFromLandmarks(landmarks: Array<{ x: number; y: number; z: number }>, side: 'left' | 'right') {
    // Convert normalized landmarks to canvas coordinates with scaling for larger hands
    const scale = 1.8; // Enlarge hands to fill screen better
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    
    const points = landmarks.map(lm => ({
      x: centerX + (lm.x * this.canvas.width - centerX) * scale,
      y: centerY + (lm.y * this.canvas.height - centerY) * scale,
      z: lm.z
    }));

    // MediaPipe hand landmark indices:
    // 0: wrist
    // 1-4: thumb (1=CMC, 2=MCP, 3=IP, 4=TIP)
    // 5-8: index (5=MCP, 6=PIP, 7=DIP, 8=TIP)
    // 9-12: middle
    // 13-16: ring
    // 17-20: pinky

    const wrist = points[0];
    
    // Add arm extension below wrist
    const armLength = 180 * scale;
    const armBottom = { x: wrist.x, y: wrist.y + armLength, z: wrist.z };

    // Draw filled hand using tiny dots
    this.fillHandWithDots(points, wrist, armBottom);

    // Draw skeleton lines (connecting landmarks)
    this.drawHandSkeleton(points);

    // Draw technical UI
    this.drawTechnicalMarkers(wrist.x, wrist.y);
  }

  private fillHandWithDots(
    points: Array<{ x: number; y: number; z: number }>,
    wrist: { x: number; y: number; z: number },
    armBottom: { x: number; y: number; z: number }
  ) {
    const dotSize = 1.5;
    const dotSpacing = 7; // Much less dense

    // Calculate bounding box
    const xs = points.map(p => p.x);
    const ys = points.map(p => p.y);
    const minX = Math.min(...xs, armBottom.x) - 50;
    const maxX = Math.max(...xs, armBottom.x) + 50;
    const minY = Math.min(...ys) - 50;
    const maxY = Math.max(...ys, armBottom.y) + 50;

    // Fill with dots
    for (let y = minY; y < maxY; y += dotSpacing) {
      for (let x = minX; x < maxX; x += dotSpacing) {
        // Check if point is inside hand shape
        const distInfo = this.getDistanceToHandSkeleton(x, y, points, wrist, armBottom);
        
        if (distInfo.inside) {
          // Calculate 3D volumetric depth
          const dist = distInfo.distance;
          const maxRadius = 45; // Maximum distance from skeleton
          
          // Create rounded/cylindrical appearance
          // Center of volume (close to skeleton) = bright
          // Edge of volume (far from skeleton) = dark
          const volumeDepth = 1.0 - (dist / maxRadius);
          const cylindricalShading = Math.pow(volumeDepth, 1.5); // Power curve for roundness
          
          // Interpolate z-depth from nearby landmarks
          const zDepth = distInfo.zDepth;
          
          // Combine geometric depth with Z-depth from camera
          const combinedDepth = cylindricalShading * (0.7 + zDepth * 0.3);
          
          // Skip very dark areas to create realistic volume
          if (combinedDepth < 0.15) continue;
          
          // Black and white only - brightness based on depth
          const brightness = Math.floor(combinedDepth * 255);
          const alpha = Math.max(0.3, Math.min(1.0, combinedDepth * 1.2));
          
          // Add glitch offset
          const glitchX = (Math.random() - 0.5) * 8 * this.glitchIntensity;
          const glitchY = (Math.random() - 0.5) * 8 * this.glitchIntensity;
          
          // Random variation for organic look
          const variation = 0.8 + Math.random() * 0.2;
          
          // White dots with varying brightness
          this.ctx.fillStyle = `rgba(${brightness}, ${brightness}, ${brightness}, ${alpha * variation})`;
          
          // Draw dot
          this.ctx.beginPath();
          this.ctx.arc(x + glitchX, y + glitchY, dotSize, 0, Math.PI * 2);
          this.ctx.fill();
          
          // Extra bright highlight dots in highest depth areas
          if (combinedDepth > 0.8 && Math.random() < 0.15) {
            this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 1.3})`;
            this.ctx.beginPath();
            this.ctx.arc(x + glitchX, y + glitchY, dotSize * 1.2, 0, Math.PI * 2);
            this.ctx.fill();
          }
        }
      }
    }
  }

  private getDistanceToHandSkeleton(
    x: number,
    y: number,
    points: Array<{ x: number; y: number; z: number }>,
    wrist: { x: number; y: number; z: number },
    armBottom: { x: number; y: number; z: number }
  ): { inside: boolean; distance: number; zDepth: number } {
    // Define hand skeleton segments
    const segments: Array<[number, number]> = [
      // Thumb
      [0, 1], [1, 2], [2, 3], [3, 4],
      // Index
      [0, 5], [5, 6], [6, 7], [7, 8],
      // Middle
      [0, 9], [9, 10], [10, 11], [11, 12],
      // Ring
      [0, 13], [13, 14], [14, 15], [15, 16],
      // Pinky
      [0, 17], [17, 18], [18, 19], [19, 20],
      // Palm connections
      [5, 9], [9, 13], [13, 17]
    ];

    // Find minimum distance to any segment
    let minDist = Infinity;
    let zDepth = 0;

    // Check distance to all finger segments
    for (const [i1, i2] of segments) {
      const p1 = points[i1];
      const p2 = points[i2];
      const dist = this.distanceToSegment(x, y, p1.x, p1.y, p2.x, p2.y);
      minDist = Math.min(minDist, dist);
      zDepth = (p1.z + p2.z) / 2;
    }

    // Check distance to arm
    const armDist = this.distanceToSegment(x, y, wrist.x, wrist.y, armBottom.x, armBottom.y);
    minDist = Math.min(minDist, armDist);
    zDepth = (wrist.z + armBottom.z) / 2;

    // Determine if inside (with threshold)
    const threshold = 45; // Width of hand/arm in pixels
    const inside = minDist < threshold;

    return { inside, distance: minDist, zDepth };
  }

  private distanceToSegment(
    px: number, py: number,
    x1: number, y1: number,
    x2: number, y2: number
  ): number {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const lengthSq = dx * dx + dy * dy;
    
    if (lengthSq === 0) {
      return Math.sqrt((px - x1) * (px - x1) + (py - y1) * (py - y1));
    }
    
    let t = ((px - x1) * dx + (py - y1) * dy) / lengthSq;
    t = Math.max(0, Math.min(1, t));
    
    const nearestX = x1 + t * dx;
    const nearestY = y1 + t * dy;
    
    return Math.sqrt((px - nearestX) * (px - nearestX) + (py - nearestY) * (py - nearestY));
  }

  private drawHandSkeleton(points: Array<{ x: number; y: number; z: number }>) {
    // Draw connecting lines with dashed style in white
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([4, 4]);

    // Define connections
    const connections: Array<[number, number]> = [
      // Thumb
      [0, 1], [1, 2], [2, 3], [3, 4],
      // Index
      [0, 5], [5, 6], [6, 7], [7, 8],
      // Middle
      [0, 9], [9, 10], [10, 11], [11, 12],
      // Ring
      [0, 13], [13, 14], [14, 15], [15, 16],
      // Pinky
      [0, 17], [17, 18], [18, 19], [19, 20],
      // Palm
      [5, 9], [9, 13], [13, 17], [17, 5]
    ];

    // Draw lines
    this.ctx.beginPath();
    for (const [i1, i2] of connections) {
      const p1 = points[i1];
      const p2 = points[i2];
      
      // Add glitch jitter
      const glitchX1 = (Math.random() - 0.5) * 5 * this.glitchIntensity;
      const glitchY1 = (Math.random() - 0.5) * 5 * this.glitchIntensity;
      const glitchX2 = (Math.random() - 0.5) * 5 * this.glitchIntensity;
      const glitchY2 = (Math.random() - 0.5) * 5 * this.glitchIntensity;
      
      this.ctx.moveTo(p1.x + glitchX1, p1.y + glitchY1);
      this.ctx.lineTo(p2.x + glitchX2, p2.y + glitchY2);
    }
    this.ctx.stroke();

    this.ctx.setLineDash([]);

    // Draw landmark points in white
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    points.forEach(p => {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  private drawTechnicalMarkers(x: number, y: number) {
    // Corner brackets in white
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    this.ctx.lineWidth = 1;
    
    const bracketSize = 15;
    const offset = 80;
    const positions = [
      [x - offset, y - offset],
      [x + offset, y - offset],
      [x - offset, y + offset],
      [x + offset, y + offset]
    ];
    
    positions.forEach(([px, py]) => {
      this.ctx.beginPath();
      this.ctx.moveTo(px, py);
      this.ctx.lineTo(px + (px < x ? bracketSize : -bracketSize), py);
      this.ctx.moveTo(px, py);
      this.ctx.lineTo(px, py + (py < y ? bracketSize : -bracketSize));
      this.ctx.stroke();
    });
    
    // Center crosshair in white
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(x - 12, y);
    this.ctx.lineTo(x + 12, y);
    this.ctx.moveTo(x, y - 12);
    this.ctx.lineTo(x, y + 12);
    this.ctx.stroke();
    
    this.ctx.beginPath();
    this.ctx.arc(x, y, 3, 0, Math.PI * 2);
    this.ctx.stroke();
    
    // Coordinates in white
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    this.ctx.font = '11px monospace';
    const coords = `[${Math.floor(x)},${Math.floor(y)}]`;
    this.ctx.fillText(coords, x + offset + 15, y);
    
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    this.ctx.font = '9px monospace';
    this.ctx.fillText('TRACKING', x + offset + 15, y + 15);
  }

  private applyNoiseOverlay() {
    const noiseIntensity = 0.03 + this.glitchIntensity * 0.04;
    const pixelSize = 2;
    const density = 0.15;
    
    for (let x = 0; x < this.canvas.width; x += pixelSize * 2) {
      for (let y = 0; y < this.canvas.height; y += pixelSize * 2) {
        if (Math.random() < density) {
          const brightness = Math.floor(Math.random() * 255);
          const alpha = Math.random() * noiseIntensity;
          this.ctx.fillStyle = `rgba(${brightness}, ${brightness}, ${brightness}, ${alpha})`;
          this.ctx.fillRect(x, y, pixelSize, pixelSize);
        }
      }
    }
  }

  private applyGlitchEffect() {
    const intensity = Math.max(this.glitchIntensity, Math.random() * 0.3);
    
    // Horizontal scan line displacement
    const sliceHeight = 15 + Math.random() * 15;
    const numSlices = Math.floor(this.canvas.height / sliceHeight);
    
    for (let i = 0; i < numSlices; i++) {
      if (Math.random() < intensity * 0.3) {
        const y = i * sliceHeight;
        const offset = (Math.random() - 0.5) * 60 * intensity;
        
        try {
          const imageData = this.ctx.getImageData(
            0, y,
            this.canvas.width, Math.min(sliceHeight, this.canvas.height - y)
          );
          
          this.ctx.putImageData(imageData, offset, y);
        } catch (e) {
          // Ignore
        }
      }
    }
    
    // Random glitch blocks in white
    if (Math.random() < intensity * 0.5) {
      for (let i = 0; i < 8; i++) {
        const x = Math.random() * this.canvas.width;
        const y = Math.random() * this.canvas.height;
        const w = Math.random() * 40 + 10;
        const h = Math.random() * 15 + 5;
        
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        this.ctx.fillRect(x, y, w, h);
      }
    }
  }

  private checkHandsTouching(handData: HandData): boolean {
    if (!handData.left || !handData.right) return false;
    if (!handData.left.landmarks || !handData.right.landmarks) return false;
    
    // Check multiple points - not just wrists but also fingertips
    const leftPoints = [
      handData.left.landmarks[0],  // wrist
      handData.left.landmarks[8],  // index tip
      handData.left.landmarks[12], // middle tip
      handData.left.landmarks[4],  // thumb tip
    ];
    
    const rightPoints = [
      handData.right.landmarks[0],  // wrist
      handData.right.landmarks[8],  // index tip
      handData.right.landmarks[12], // middle tip
      handData.right.landmarks[4],  // thumb tip
    ];
    
    // Check if any left point is close to any right point
    for (const leftPoint of leftPoints) {
      for (const rightPoint of rightPoints) {
        const distance = Math.sqrt(
          Math.pow(leftPoint.x - rightPoint.x, 2) +
          Math.pow(leftPoint.y - rightPoint.y, 2)
        );
        
        // Very strict threshold - 0.08 in normalized coordinates (hands must be actually touching/overlapping)
        if (distance < 0.08) {
          console.log('✋ Hands touching! Distance:', distance.toFixed(3));
          return true;
        }
      }
    }
    
    return false;
  }

  private spawnHearts(handData: HandData) {
    // Spawn instantly when hands touch - no delay!
    
    // Spawn frequently - 80% chance each frame when hands are touching
    if (Math.random() > 0.8) return;
    
    console.log('Spawning hearts! Current count:', this.hearts.length);
    
    // Try to spawn a few hearts at random screen positions
    for (let i = 0; i < 3; i++) {
      const maxAttempts = 20;
      let placed = false;
      
      for (let attempt = 0; attempt < maxAttempts && !placed; attempt++) {
        // Random position on screen
        const x = Math.random() * this.canvas.width;
        const y = Math.random() * this.canvas.height;
        const size = 20 + Math.random() * 30;
        
        // Check if this position overlaps with existing hearts
        const minDistance = size * 1.5; // Hearts need to be at least 1.5x their size apart
        let overlaps = false;
        
        for (const existingHeart of this.hearts) {
          const dx = x - existingHeart.x;
          const dy = y - existingHeart.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < minDistance + existingHeart.size * 0.75) {
            overlaps = true;
            break;
          }
        }
        
        if (!overlaps) {
          // Place heart at this position (no rotation - vertically positioned)
          this.hearts.push({
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            size: size,
            life: 1.0,
            rotation: 0, // Always vertical
            rotationSpeed: 0
          });
          placed = true;
          console.log('Heart placed at:', x, y, 'size:', size);
        }
      }
    }
  }

  private updateHearts() {
    this.hearts = this.hearts.filter(heart => {
      // Hearts stay static, only fade out slowly
      heart.life -= 0.008; // Slower fade
      
      return heart.life > 0;
    });
  }

  private renderHearts() {
    // Use time for synchronized beat animation
    const time = Date.now() / 1000;
    
    this.hearts.forEach(heart => {
      this.ctx.save();
      this.ctx.translate(heart.x, heart.y);
      
      // Beat animation - pulsing scale effect (like a heartbeat)
      // Creates a "ba-dum" rhythm: quick expansion, contraction, pause
      const beatSpeed = 2.5; // Beats per second
      const beatCycle = (time * beatSpeed) % 1; // 0 to 1 cycle
      
      let scale = 1.0;
      if (beatCycle < 0.15) {
        // First beat (quick)
        scale = 1.0 + Math.sin(beatCycle / 0.15 * Math.PI) * 0.2;
      } else if (beatCycle >= 0.2 && beatCycle < 0.3) {
        // Second beat (quick)
        scale = 1.0 + Math.sin((beatCycle - 0.2) / 0.1 * Math.PI) * 0.15;
      } else {
        // Resting state
        scale = 1.0;
      }
      
      this.ctx.scale(scale, scale);
      
      // Draw pixelated heart using a pixel pattern
      const pixelSize = Math.max(2, heart.size / 8);
      const opacity = heart.life * 0.9;
      
      // Define heart pixel pattern (8x8 grid)
      const heartPattern = [
        [0, 1, 1, 0, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ];
      
      // Draw each pixel of the heart
      const offsetX = -4 * pixelSize;
      const offsetY = -4 * pixelSize;
      
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
          if (heartPattern[row][col] === 1) {
            this.ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            this.ctx.fillRect(
              offsetX + col * pixelSize,
              offsetY + row * pixelSize,
              pixelSize,
              pixelSize
            );
            
            // Outline for each pixel
            this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
            this.ctx.lineWidth = 0.5;
            this.ctx.strokeRect(
              offsetX + col * pixelSize,
              offsetY + row * pixelSize,
              pixelSize,
              pixelSize
            );
          }
        }
      }
      
      this.ctx.restore();
    });
  }
}