import { HandData } from '../../App';

interface GridBlock {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  colorIndex: number; // Index into the colors array
  targetColorIndex: number;
  hasGrid: boolean;
  gridSize: number;
  glitchTimer: number;
  colorChangeTimer: number; // Timer for automatic color changes
}

export class MatrixGridRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private blocks: GridBlock[] = [];
  private baseBlockSize = 40;
  private vibrationTimer = 0;
  private currentBlockSize = 40;
  private isExploding = false;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.initializeGrid();
  }

  private initializeGrid() {
    this.blocks = [];
    const cols = Math.ceil(this.canvas.width / this.baseBlockSize);
    const rows = Math.ceil(this.canvas.height / this.baseBlockSize);
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const colorIndex = Math.floor(Math.random() * 3);
        this.blocks.push({
          x: col * this.baseBlockSize,
          y: row * this.baseBlockSize,
          targetX: col * this.baseBlockSize,
          targetY: row * this.baseBlockSize,
          size: this.baseBlockSize,
          colorIndex,
          targetColorIndex: colorIndex,
          hasGrid: Math.random() > 0.7,
          gridSize: Math.floor(Math.random() * 3) + 2,
          glitchTimer: 0,
          colorChangeTimer: Math.random() * 5, // Random initial color change timer
        });
      }
    }
  }

  render(handData: HandData, colors: string[]) {
    if (this.canvas.width === 0 || this.canvas.height === 0) return;

    // Background - detect 1C mode and force black background
    const is1CMode = colors[1] && (colors[1].toLowerCase() === '#ffffff' || colors[1].toLowerCase() === '#fff');
    
    if (is1CMode) {
      this.ctx.fillStyle = '#000000'; // Force pure black background in 1C mode
    } else {
      this.ctx.fillStyle = colors[3] || '#000000';
    }
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Handle clapping - makes squares tiny, fast, and blinky
    let clapIntensity = 0;
    if (handData.clapping && !this.isExploding) {
      this.createExplosion();
      this.vibrationTimer = 1.0;
      this.isExploding = true;
    }
    
    if (!handData.clapping) {
      this.isExploding = false;
    }
    
    if (this.vibrationTimer > 0) {
      this.vibrationTimer -= 0.016;
      clapIntensity = Math.max(0, this.vibrationTimer); // Rename to clapIntensity
    }

    // Get hand data
    let fingerCount = 0;
    let hasHand = false;

    if (handData.left) {
      let leftFingers = handData.left.fingerCount || 0;
      // PINCH GESTURE = Treat as 1 finger (slowest)
      if (handData.left.gesture === 'pinch') {
        leftFingers = 1;
      }
      hasHand = true;
      fingerCount = leftFingers;
    }

    if (handData.right) {
      let rightFingers = handData.right.fingerCount || 0;
      // PINCH GESTURE = Treat as 1 finger (slowest)
      if (handData.right.gesture === 'pinch') {
        rightFingers = 1;
      }
      hasHand = true;
      fingerCount = Math.max(fingerCount, rightFingers);
    }

    // Determine block size and color change speed based on finger count
    let targetBlockSize = this.currentBlockSize;
    let colorChangeSpeed = 1.0; // Base speed multiplier
    
    // Only change when hand is detected
    if (hasHand) {
      if (fingerCount === 1) {
        targetBlockSize = 100; // Large squares for 1 finger
        colorChangeSpeed = 0.4; // Faster color changes (was 0.1, now 2.5x faster)
      } else if (fingerCount === 2) {
        targetBlockSize = 60; // Medium-large squares for 2 fingers
        colorChangeSpeed = 0.5; // Slow color changes
      } else if (fingerCount === 3) {
        targetBlockSize = 45; // Medium squares for 3 fingers
        colorChangeSpeed = 1.0; // Normal speed
      } else if (fingerCount === 4) {
        targetBlockSize = 35; // Smaller for 4 fingers
        colorChangeSpeed = 1.5; // Faster
      } else if (fingerCount >= 5) {
        targetBlockSize = 25; // Small squares for 5 fingers
        colorChangeSpeed = 3.0; // Very fast color changes (3x faster)
      }
    }

    // Resize grid if block size changed
    if (Math.abs(this.currentBlockSize - targetBlockSize) > 1) {
      this.currentBlockSize = targetBlockSize;
      this.baseBlockSize = targetBlockSize;
      this.initializeGrid();
    }

    // Update all block sizes to current size
    this.blocks.forEach(block => {
      block.size = this.currentBlockSize;
    });

    // Update block colors (automatic color changes controlled by finger count)
    // CLAP BOOST: During clap, color changes happen 10x faster!
    const clapSpeedBoost = clapIntensity > 0 ? 10.0 : 1.0;
    
    this.blocks.forEach(block => {
      // Automatic color change timer (speed controlled by finger count + clap boost)
      if (block.colorChangeTimer > 0) {
        block.colorChangeTimer -= 0.016 * colorChangeSpeed * clapSpeedBoost;
      } else {
        // Time to change color
        const newColorIndex = Math.floor(Math.random() * 3);
        if (newColorIndex !== block.colorIndex) {
          block.targetColorIndex = newColorIndex;
          block.glitchTimer = 0.3;
        }
        block.colorChangeTimer = 2 + Math.random() * 3; // Reset timer (2-5 seconds base)
      }
      
      // Apply color change
      if (block.colorIndex !== block.targetColorIndex) {
        block.colorIndex = block.targetColorIndex;
      }
      
      if (block.glitchTimer > 0) {
        block.glitchTimer -= 0.016;
      }
    });

    // Render blocks
    this.blocks.forEach(block => {
      // NO VIBRATION DISPLACEMENT - blocks stay in place
      const x = block.x;
      const y = block.y;
      
      // CLAP EFFECT: Shrink squares during clap (down to 30% size)
      const sizeMultiplier = clapIntensity > 0 ? (0.3 + (1 - clapIntensity) * 0.7) : 1.0;
      const renderSize = block.size * sizeMultiplier;
      
      // Center the shrunken square in its grid cell
      const offsetX = (block.size - renderSize) / 2;
      const offsetY = (block.size - renderSize) / 2;
      
      // Draw main block with color from palette
      // In 1C mode, all squares blink between the main color (colors[0]) and black
      let blockColor;
      if (is1CMode) {
        blockColor = block.colorIndex % 2 === 0 ? colors[0] : '#000000';
      } else {
        blockColor = colors[block.colorIndex] || '#FFFFFF';
      }
      this.ctx.fillStyle = blockColor;
      this.ctx.fillRect(x + offsetX, y + offsetY, renderSize, renderSize);
      
      // Draw grid overlay on some blocks (only if not too small)
      if (block.hasGrid && renderSize > 15) {
        this.ctx.strokeStyle = colors[3] || '#000000';
        this.ctx.lineWidth = 1;
        
        const cellSize = renderSize / block.gridSize;
        for (let i = 0; i <= block.gridSize; i++) {
          // Vertical lines
          this.ctx.beginPath();
          this.ctx.moveTo(x + offsetX + i * cellSize, y + offsetY);
          this.ctx.lineTo(x + offsetX + i * cellSize, y + offsetY + renderSize);
          this.ctx.stroke();
          
          // Horizontal lines
          this.ctx.beginPath();
          this.ctx.moveTo(x + offsetX, y + offsetY + i * cellSize);
          this.ctx.lineTo(x + offsetX + renderSize, y + offsetY + i * cellSize);
          this.ctx.stroke();
        }
      }
      
      // Glitch effect border when color changes (INTENSIFIED during clap)
      if (block.glitchTimer > 0 || clapIntensity > 0.5) {
        let borderColor;
        if (is1CMode) {
          borderColor = block.colorIndex % 2 === 0 ? '#000000' : colors[0];
        } else {
          borderColor = colors[(block.colorIndex + 1) % 3] || '#FFFFFF';
        }
        this.ctx.strokeStyle = borderColor;
        this.ctx.lineWidth = clapIntensity > 0 ? 4 : 3;
        this.ctx.strokeRect(x + offsetX, y + offsetY, renderSize, renderSize);
      }
    });

    // Draw subtle grid lines between blocks
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    this.ctx.lineWidth = 1;
    
    const cols = Math.ceil(this.canvas.width / this.baseBlockSize);
    const rows = Math.ceil(this.canvas.height / this.baseBlockSize);
    
    for (let i = 0; i <= cols; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(i * this.baseBlockSize, 0);
      this.ctx.lineTo(i * this.baseBlockSize, this.canvas.height);
      this.ctx.stroke();
    }
    
    for (let i = 0; i <= rows; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, i * this.baseBlockSize);
      this.ctx.lineTo(this.canvas.width, i * this.baseBlockSize);
      this.ctx.stroke();
    }
  }

  private createExplosion() {
    if (this.isExploding) return; // ⭐ CRITICAL FIX: Prevent infinite explosions!
    this.isExploding = true;
    // Randomize entire grid
    this.blocks.forEach(block => {
      block.targetColorIndex = Math.floor(Math.random() * 3);
      block.colorIndex = block.targetColorIndex;
      block.glitchTimer = 1.0;
    });
    setTimeout(() => this.isExploding = false, 1000); // ⭐ CRITICAL FIX: Reset explosion flag after 1 second
  }
}