import { HandData } from '../../App';
import { timeScale } from '../../motion/clock';

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
}

export class LottieClassicRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private rectangles: Rectangle[] = [];
  private baseWidth = 1920;
  private baseHeight = 1080;
  
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
        gradientDirection: gradientDir
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

  render(handData: HandData, colors: string[]) {
    // Gradient background using dynamic colors
    const bgGradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
    bgGradient.addColorStop(0, colors[2] || '#d9d9d9');
    bgGradient.addColorStop(1, colors[0] || '#1a00ff');
    this.ctx.fillStyle = bgGradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Calculate animation speed based on finger count
    let animationSpeed = 0.15; // Default medium speed
    
    if (handData.left || handData.right) {
      const hands = [];
      if (handData.left) hands.push(handData.left);
      if (handData.right) hands.push(handData.right);
      
      // Use the highest finger count for speed
      let maxFingerCount = 0;
      hands.forEach(hand => {
        let fingerCount = hand.fingerCount || 2;
        // PINCH GESTURE = Treat as 1 finger (slow)
        if (hand.gesture === 'pinch') {
          fingerCount = 1;
        }
        maxFingerCount = Math.max(maxFingerCount, fingerCount);
      });
      
      // Speed: 1 finger = 0.02x (very slow), 2 fingers = 0.15x (medium), 5 fingers = 0.5x (fast)
      if (maxFingerCount === 1) {
        animationSpeed = 0.02; // Very slow
      } else if (maxFingerCount === 2) {
        animationSpeed = 0.15; // Medium
      } else if (maxFingerCount === 3) {
        animationSpeed = 0.25;
      } else if (maxFingerCount === 4) {
        animationSpeed = 0.35;
      } else if (maxFingerCount >= 5) {
        animationSpeed = 0.5; // Fast
      }
      
      // Reset all targets to base size first
      this.rectangles.forEach((rect, index) => {
        this.gridStructure[index].targetW = rect.baseW;
        this.gridStructure[index].targetH = rect.baseH;
      });
      
      // Calculate target sizes based on hand proximity AND direction
      hands.forEach(hand => {
        const handX = (hand.position?.x || 0.5) * this.baseWidth;
        const handY = (hand.position?.y || 0.5) * this.baseHeight;
        const velocity = hand.velocity || 0;
        
        // Apply distortion to rectangles based on proximity and movement direction
        this.rectangles.forEach((rect, index) => {
          const rectCenterX = rect.baseX + rect.baseW / 2;
          const rectCenterY = rect.baseY + rect.baseH / 2;
          
          const dx = handX - rectCenterX;
          const dy = handY - rectCenterY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Influence falls off with distance (0-700px range)
          const maxInfluenceDistance = 700;
          const influence = Math.max(0, 1 - distance / maxInfluenceDistance);
          
          if (influence > 0.1) {
            // Calculate direction from hand to rectangle
            const angle = Math.atan2(dy, dx);
            
            // Rectangles near hand push away based on hand movement
            // Base distortion + velocity-based directional distortion
            const baseDistortion = 1 + influence * 0.6; // Base growth
            const velocityMultiplier = Math.min(velocity * 0.5, 0.4); // Cap at 0.4
            
            // Direction-based distortion: perpendicular to hand movement gets compressed
            const horizontalDistortion = baseDistortion + Math.abs(Math.cos(angle)) * velocityMultiplier;
            const verticalDistortion = baseDistortion + Math.abs(Math.sin(angle)) * velocityMultiplier;
            
            this.gridStructure[index].targetW = rect.baseW * horizontalDistortion;
            this.gridStructure[index].targetH = rect.baseH * verticalDistortion;
          }
        });
      });
    } else {
      // No hands - return all rectangles to base size
      this.rectangles.forEach((rect, index) => {
        this.gridStructure[index].targetW = rect.baseW;
        this.gridStructure[index].targetH = rect.baseH;
      });
    }
    
    /*
     * Eased rather than clocked, like Halftone — so the tempo has to act on
     * the rate of approach, and be clamped short of 1 or the cells overshoot
     * and ring rather than settling.
     */
    const eased = Math.min(0.95, animationSpeed * timeScale());
    this.gridStructure.forEach((grid) => {
      grid.w += (grid.targetW - grid.w) * eased;
      grid.h += (grid.targetH - grid.h) * eased;
    });
    
    // CRITICAL: Normalize grid to maintain perfect tiling without gaps/overlaps
    this.normalizeGridPerfectly();
    
    // Update rectangle dimensions
    this.rectangles.forEach((rect, index) => {
      rect.currentX = this.gridStructure[index].x;
      rect.currentY = this.gridStructure[index].y;
      rect.currentW = this.gridStructure[index].w;
      rect.currentH = this.gridStructure[index].h;
    });

    // Calculate scale factors for responsive canvas
    const scaleX = this.canvas.width / this.baseWidth;
    const scaleY = this.canvas.height / this.baseHeight;

    // Render all rectangles
    this.rectangles.forEach(rect => {
      this.drawRectangle(rect, scaleX, scaleY, colors);
    });
  }
  
  private normalizeGridPerfectly() {
    // Group rectangles into rows based on their base Y position
    const rowMap = new Map<number, number[]>();
    
    this.rectangles.forEach((rect, index) => {
      const rowKey = Math.round(rect.baseY / 10) * 10; // Group by approximate Y
      if (!rowMap.has(rowKey)) {
        rowMap.set(rowKey, []);
      }
      rowMap.get(rowKey)!.push(index);
    });
    
    // Convert to array and sort by Y position
    const rows = Array.from(rowMap.entries())
      .sort((a, b) => a[0] - b[0])
      .map(entry => entry[1]);
    
    // Normalize each row to fit exactly baseWidth
    rows.forEach(rowIndices => {
      // Sort by X position
      rowIndices.sort((a, b) => this.rectangles[a].baseX - this.rectangles[b].baseX);
      
      // Calculate total current width
      const totalCurrentWidth = rowIndices.reduce((sum, idx) => sum + this.gridStructure[idx].w, 0);
      
      // Scale all widths proportionally to fit baseWidth
      const widthScale = this.baseWidth / totalCurrentWidth;
      rowIndices.forEach(idx => {
        this.gridStructure[idx].w *= widthScale;
      });
      
      // Position rectangles sequentially with no gaps
      let currentX = 0;
      rowIndices.forEach(idx => {
        this.gridStructure[idx].x = currentX;
        currentX += this.gridStructure[idx].w;
      });
    });
    
    // Normalize heights to fit exactly baseHeight
    let currentY = 0;
    rows.forEach(rowIndices => {
      // Find max height in this row
      const rowHeight = Math.max(...rowIndices.map(idx => this.gridStructure[idx].h));
      
      // Set all rectangles in row to same height and Y position
      rowIndices.forEach(idx => {
        this.gridStructure[idx].y = currentY;
        this.gridStructure[idx].h = rowHeight;
      });
      
      currentY += rowHeight;
    });
    
    // Final vertical normalization to fit baseHeight exactly
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

  private drawRectangle(rect: Rectangle, scaleX: number, scaleY: number, colors: string[]) {
    this.ctx.save();

    // Scale coordinates to canvas size
    const x = rect.currentX * scaleX;
    const y = rect.currentY * scaleY;
    const w = rect.currentW * scaleX;
    const h = rect.currentH * scaleY;

    // Create gradient based on direction
    let gradient;
    
    if (rect.gradientDirection === 'vertical') {
      gradient = this.ctx.createLinearGradient(x, y, x, y + h);
      gradient.addColorStop(0, colors[2] || '#d9d9d9');
      gradient.addColorStop(1, colors[0] || '#1a00ff');
    } else if (rect.gradientDirection === 'vertical-reverse') {
      gradient = this.ctx.createLinearGradient(x, y, x, y + h);
      gradient.addColorStop(0, colors[0] || '#1a00ff');
      gradient.addColorStop(1, colors[2] || '#d9d9d9');
    } else { // horizontal
      gradient = this.ctx.createLinearGradient(x, y, x + w, y);
      gradient.addColorStop(0, colors[2] || '#d9d9d9');
      gradient.addColorStop(1, colors[0] || '#1a00ff');
    }
    
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(x, y, w, h);

    this.ctx.restore();
  }
}
