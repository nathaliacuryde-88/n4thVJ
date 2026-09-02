import { HandData, AudioData } from '../../App';

interface Rectangle {
  id: number;
  
  // Base dimensions (reference state)
  baseX: number;
  baseY: number;
  baseW: number;
  baseH: number;
  
  // Current animated dimensions
  currentX: number;
  currentY: number;
  currentW: number;
  currentH: number;
  
  // Visual properties
  gradientDirection: 'vertical' | 'horizontal' | 'vertical-reverse';
  rotation: number;
  borderRadius: number;
  opacity: number;
}

export class LottieInspiredRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private rectangles: Rectangle[] = [];
  private baseWidth = 1920;
  private baseHeight = 1080;
  private time = 0;
  
  // Flexible grid with varied sizes
  private gridStructure: {
    x: number;
    y: number;
    w: number;
    h: number;
    targetW: number;
    targetH: number;
  }[] = [];

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    // Create varied rectangle layout that perfectly tiles
    this.createVariedLayout();
  }
  
  private createVariedLayout() {
    // Create a composition with varied rectangle sizes that tile perfectly
    // Using a mix of large, medium, and small rectangles
    
    const layouts = [
      // Large block top-left
      { x: 0, y: 0, w: 480, h: 360 },
      
      // Medium horizontal strips top
      { x: 480, y: 0, w: 320, h: 180 },
      { x: 800, y: 0, w: 320, h: 180 },
      { x: 1120, y: 0, w: 400, h: 180 },
      { x: 1520, y: 0, w: 400, h: 180 },
      
      // Second row varied
      { x: 480, y: 180, w: 240, h: 180 },
      { x: 720, y: 180, w: 240, h: 180 },
      { x: 960, y: 180, w: 160, h: 180 },
      { x: 1120, y: 180, w: 240, h: 180 },
      { x: 1360, y: 180, w: 280, h: 180 },
      { x: 1640, y: 180, w: 280, h: 180 },
      
      // Third row - left side vertical strips
      { x: 0, y: 360, w: 120, h: 360 },
      { x: 120, y: 360, w: 120, h: 360 },
      { x: 240, y: 360, w: 120, h: 360 },
      { x: 360, y: 360, w: 120, h: 360 },
      
      // Third row - medium blocks
      { x: 480, y: 360, w: 320, h: 360 },
      { x: 800, y: 360, w: 320, h: 360 },
      
      // Third row - right side
      { x: 1120, y: 360, w: 200, h: 180 },
      { x: 1320, y: 360, w: 200, h: 180 },
      { x: 1520, y: 360, w: 200, h: 180 },
      { x: 1720, y: 360, w: 200, h: 180 },
      
      // Fourth row - right side
      { x: 1120, y: 540, w: 160, h: 180 },
      { x: 1280, y: 540, w: 160, h: 180 },
      { x: 1440, y: 540, w: 240, h: 180 },
      { x: 1680, y: 540, w: 240, h: 180 },
      
      // Bottom section - varied horizontal strips
      { x: 0, y: 720, w: 160, h: 360 },
      { x: 160, y: 720, w: 160, h: 360 },
      { x: 320, y: 720, w: 160, h: 360 },
      { x: 480, y: 720, w: 240, h: 360 },
      { x: 720, y: 720, w: 240, h: 360 },
      { x: 960, y: 720, w: 160, h: 360 },
      
      // Bottom right large block
      { x: 1120, y: 720, w: 400, h: 360 },
      { x: 1520, y: 720, w: 400, h: 360 },
    ];
    
    layouts.forEach((layout, index) => {
      // Alternate gradient directions for visual variety
      let gradientDir: 'vertical' | 'horizontal' | 'vertical-reverse';
      const mod = index % 3;
      if (mod === 0) gradientDir = 'vertical';
      else if (mod === 1) gradientDir = 'horizontal';
      else gradientDir = 'vertical-reverse';
      
      this.rectangles.push({
        id: index,
        baseX: layout.x,
        baseY: layout.y,
        baseW: layout.w,
        baseH: layout.h,
        currentX: layout.x,
        currentY: layout.y,
        currentW: layout.w,
        currentH: layout.h,
        gradientDirection: gradientDir,
        rotation: 0,
        borderRadius: 0,
        opacity: 1.0
      });
      
      this.gridStructure.push({
        x: layout.x,
        y: layout.y,
        w: layout.w,
        h: layout.h,
        targetW: layout.w,
        targetH: layout.h
      });
    });
  }

  render(handData: HandData, colors: string[], audioData?: AudioData, colorMode?: 'black' | 'contrast' | 'grayscale') {
    this.time += 0.016;
    
    // Handle Color Modes
    const isContrastMode = colorMode === 'contrast';
    const isGrayscale = colorMode === 'grayscale';
    
    // Resolve Colors based on Mode
    let c1 = colors[0] || '#1a00ff';
    let c2 = colors[1] || '#8b5cf6';
    let c3 = colors[2] || '#d9d9d9';
    
    if (isGrayscale) {
        c1 = '#333333'; // Dark Grey
        c2 = '#888888'; // Mid Grey
        c3 = '#ffffff'; // White
    }

    // Background
    if (isContrastMode) {
      this.ctx.fillStyle = '#000000';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    } else {
      const bgGradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
      // In Grayscale, nice fade from White to Light Grey
      if (isGrayscale) {
          bgGradient.addColorStop(0, '#ffffff');
          bgGradient.addColorStop(1, '#cccccc');
      } else {
          bgGradient.addColorStop(0, c3);
          bgGradient.addColorStop(1, c1);
      }
      this.ctx.fillStyle = bgGradient;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // Interaction Logic
    let animationSpeed = 0.1;
    let activeMode = 'idle'; // idle, pinch, 2fingers, 3fingers, 4fingers, open
    let targetBorderRadius = 0;
    let targetRotation = 0;
    let targetOpacity = 1.0;
    
    // Audio Influence
    const bass = audioData ? audioData.bass : 0;
    const mid = audioData ? audioData.mid : 0;
    const high = audioData ? audioData.high : 0;
    const isBeat = audioData ? audioData.beat : false;
    
    // Base pulse from audio
    const audioPulse = 1.0 + (bass * 0.3);

    if (handData.left || handData.right) {
      const hands = [];
      if (handData.left) hands.push(handData.left);
      if (handData.right) hands.push(handData.right);
      
      // Determine highest finger count/gesture
      let maxFingerCount = 0;
      let isPinching = false;
      
      hands.forEach(hand => {
        if (hand.gesture === 'pinch') {
          isPinching = true;
        }
        const count = hand.fingerCount !== undefined ? hand.fingerCount : 5;
        maxFingerCount = Math.max(maxFingerCount, count);
      });
      
      if (isPinching) maxFingerCount = 0; // Override for pinch logic

      // ═════════════════════════════════════════════════════════════════════
      // MODE SELECTION
      // ═════════════════════════════════════════════════════════════════════
      
      if (isPinching) {
        // PINCH: Slow wave ripple (like 2 fingers but slower)
        activeMode = 'pinch';
        animationSpeed = 0.05; // Slower than 2fingers (0.2)
        targetRotation = 0; 
        targetBorderRadius = 20; // Same as 2 fingers
      } else if (maxFingerCount <= 2) {
        // 2 FINGERS: Ripple / Wave
        activeMode = '2fingers';
        animationSpeed = 0.2;
        targetBorderRadius = 20;
      } else if (maxFingerCount <= 4) {
        // 3-4 FINGERS: Shape Morphing (Circle)
        activeMode = 'morph';
        animationSpeed = 0.1;
        targetBorderRadius = 100; // Turn to circles/pills
      } else {
        // 5 FINGERS: Chaos / Jitter
        activeMode = 'chaos';
        animationSpeed = 0.4;
        targetBorderRadius = 0;
      }

      // ═════════════════════════════════════════════════════════════════════
      // GRID DISTORTION
      // ═════════════════════════════════════════════════════════════════════
      
      // Reset targets
      this.rectangles.forEach((rect, index) => {
        this.gridStructure[index].targetW = rect.baseW;
        this.gridStructure[index].targetH = rect.baseH;
      });
      
      hands.forEach(hand => {
        const handX = (hand.position?.x || 0.5) * this.baseWidth;
        const handY = (hand.position?.y || 0.5) * this.baseHeight;
        
        this.rectangles.forEach((rect, index) => {
          const rectCenterX = rect.baseX + rect.baseW / 2;
          const rectCenterY = rect.baseY + rect.baseH / 2;
          const dx = handX - rectCenterX;
          const dy = handY - rectCenterY;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          // Mode specific distortion
          if (activeMode === 'pinch') {
            // Pinch uses slow wave ripple (same logic as 2fingers but slow speed set above)
            const wave = Math.sin(dist * 0.05 - this.time * 5);
            const factor = 1 + (wave * 0.2 * (1 - Math.min(dist/800, 1)));
            this.gridStructure[index].targetW = rect.baseW * factor;
            this.gridStructure[index].targetH = rect.baseH * factor;
          } else if (activeMode === '2fingers') {
            // Wave ripple
            const wave = Math.sin(dist * 0.05 - this.time * 5);
            const factor = 1 + (wave * 0.2 * (1 - Math.min(dist/800, 1)));
            this.gridStructure[index].targetW = rect.baseW * factor;
            this.gridStructure[index].targetH = rect.baseH * factor;
          } else if (activeMode === 'morph') {
             // Just expand near hand
             if (dist < 500) {
                const push = (1 - dist/500) * 0.5;
                this.gridStructure[index].targetW = rect.baseW * (1 + push);
                this.gridStructure[index].targetH = rect.baseH * (1 + push);
             }
          } else if (activeMode === 'chaos') {
            // Random jitter near hand
            if (dist < 600) {
               const jitter = Math.random() * 0.5;
               this.gridStructure[index].targetW = rect.baseW * (0.8 + jitter);
               this.gridStructure[index].targetH = rect.baseH * (0.8 + jitter);
            }
          }
        });
      });
      
    } else {
      // No hands - Reset
      this.rectangles.forEach((rect, index) => {
        this.gridStructure[index].targetW = rect.baseW;
        this.gridStructure[index].targetH = rect.baseH;
      });
      
      // Idle animation - gentle breathing
      if (audioData) {
          // Pump with beat
          if (isBeat) targetBorderRadius = 10;
      }
    }

    // Apply Audio Pulse to Grid Targets
    if (audioData) {
        this.gridStructure.forEach(grid => {
            grid.targetW *= (1 + bass * 0.2);
            grid.targetH *= (1 + bass * 0.2);
        });
        
        // High freq affects opacity flickering in chaos mode
        if (activeMode === 'chaos') {
            targetOpacity = 0.5 + high * 0.5;
        }
    }

    // ═════════════════════════════════════════════════════════════════════
    // ANIMATION UPDATE
    // ═════════════════════════════════════════════════════════════════════
    
    // Update Grid
    this.gridStructure.forEach((grid, index) => {
      grid.w += (grid.targetW - grid.w) * animationSpeed;
      grid.h += (grid.targetH - grid.h) * animationSpeed;
    });
    
    // Normalize to prevent gaps
    this.normalizeGridPerfectly();
    
    // Update Rectangle Properties
    this.rectangles.forEach((rect, index) => {
      rect.currentX = this.gridStructure[index].x;
      rect.currentY = this.gridStructure[index].y;
      rect.currentW = this.gridStructure[index].w;
      rect.currentH = this.gridStructure[index].h;
      
      // Interpolate visual props
      rect.borderRadius += (targetBorderRadius - rect.borderRadius) * 0.1;
      
      // Rotation logic
      if (activeMode === 'chaos') {
           rect.rotation += (Math.random() * 0.2 - 0.1);
      } else {
           rect.rotation += (0 - rect.rotation) * 0.1;
      }
      
      rect.opacity += (targetOpacity - rect.opacity) * 0.1;
    });

    // ═════════════════════════════════════════════════════════════════════
    // RENDER
    // ═════════════════════════════════════════════════════════════════════
    
    const scaleX = this.canvas.width / this.baseWidth;
    const scaleY = this.canvas.height / this.baseHeight;

    // Pass resolved colors to draw
    const effectiveColors = [c1, c2, c3];

    this.rectangles.forEach((rect, index) => {
      this.drawRectangle(rect, scaleX, scaleY, effectiveColors, isContrastMode, index, audioData);
    });
  }
  
  private normalizeGridPerfectly() {
    // Group rectangles into rows based on their base Y position
    const rowMap = new Map<number, number[]>();
    
    this.rectangles.forEach((rect, index) => {
      const rowKey = Math.round(rect.baseY / 10) * 10;
      if (!rowMap.has(rowKey)) rowMap.set(rowKey, []);
      rowMap.get(rowKey)!.push(index);
    });
    
    const rows = Array.from(rowMap.entries())
      .sort((a, b) => a[0] - b[0])
      .map(entry => entry[1]);
    
    // Normalize Widths
    rows.forEach(rowIndices => {
      rowIndices.sort((a, b) => this.rectangles[a].baseX - this.rectangles[b].baseX);
      const totalCurrentWidth = rowIndices.reduce((sum, idx) => sum + this.gridStructure[idx].w, 0);
      const widthScale = this.baseWidth / totalCurrentWidth;
      
      let currentX = 0;
      rowIndices.forEach(idx => {
        this.gridStructure[idx].w *= widthScale;
        this.gridStructure[idx].x = currentX;
        currentX += this.gridStructure[idx].w;
      });
    });
    
    // Normalize Heights
    let currentY = 0;
    rows.forEach(rowIndices => {
      const rowHeight = Math.max(...rowIndices.map(idx => this.gridStructure[idx].h));
      rowIndices.forEach(idx => {
        this.gridStructure[idx].y = currentY;
        this.gridStructure[idx].h = rowHeight;
      });
      currentY += rowHeight;
    });
    
    // Fit to Screen Height
    const totalHeight = currentY;
    const heightScale = this.baseHeight / totalHeight;
    
    currentY = 0;
    rows.forEach(rowIndices => {
      const rowHeight = this.gridStructure[rowIndices[0]].h * heightScale;
      rowIndices.forEach(idx => {
        this.gridStructure[idx].y = currentY;
        this.gridStructure[idx].h = rowHeight;
      });
      currentY += rowHeight;
    });
  }

  private drawRectangle(
    rect: Rectangle, 
    scaleX: number, 
    scaleY: number, 
    colors: string[], 
    isContrastMode: boolean,
    index: number,
    audioData?: AudioData
  ) {
    this.ctx.save();

    const x = rect.currentX * scaleX;
    const y = rect.currentY * scaleY;
    const w = rect.currentW * scaleX;
    const h = rect.currentH * scaleY;
    
    // Apply Rotation (Center Pivot)
    if (Math.abs(rect.rotation) > 0.01) {
        const cx = x + w/2;
        const cy = y + h/2;
        this.ctx.translate(cx, cy);
        this.ctx.rotate(rect.rotation);
        this.ctx.translate(-cx, -cy);
    }
    
    // Opacity
    this.ctx.globalAlpha = rect.opacity;

    // Gradient Creation
    let gradient;
    const color1 = colors[0];
    const color2 = colors[1];
    const color3 = colors[2];
    
    // In contrast mode, use Black + Color
    // 2C Mode Requirement: "Only black + one more color"
    // So we disable alternating colors and just use color1 (Main Color)
    const primaryColor = isContrastMode 
        ? color1 
        : (index % 2 === 0 ? color1 : color2);
    
    const secondaryColor = isContrastMode 
        ? '#000000' 
        : color3;

    // Audio Beat Flash
    const beatFlash = (audioData?.beat && Math.random() > 0.7) ? '#FFFFFF' : null;

    if (rect.gradientDirection === 'vertical') {
      gradient = this.ctx.createLinearGradient(x, y, x, y + h);
      gradient.addColorStop(0, beatFlash || secondaryColor);
      gradient.addColorStop(1, primaryColor);
    } else if (rect.gradientDirection === 'vertical-reverse') {
      gradient = this.ctx.createLinearGradient(x, y, x, y + h);
      gradient.addColorStop(0, primaryColor);
      gradient.addColorStop(1, beatFlash || secondaryColor);
    } else { 
      gradient = this.ctx.createLinearGradient(x, y, x + w, y);
      gradient.addColorStop(0, beatFlash || secondaryColor);
      gradient.addColorStop(1, primaryColor);
    }
    
    this.ctx.fillStyle = gradient;
    
    // Draw with rounded corners
    // REMOVED MARGINS: Use full w/h instead of w-2/h-2 or w-4/h-4
    if (rect.borderRadius > 0) {
        this.ctx.beginPath();
        this.ctx.roundRect(x, y, w, h, rect.borderRadius); 
        this.ctx.fill();
    } else {
        this.ctx.fillRect(x, y, w, h);
    }

    this.ctx.restore();
  }
}
