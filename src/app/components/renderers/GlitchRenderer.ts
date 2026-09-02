import { HandData } from '../../App';
import { alphaHex } from './alpha';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * GLITCH NETWORK RENDERER (Key 5)
 * ═══════════════════════════════════════════════════════════════════════════
 * Network of nodes with waveforms that orbit around hands. Glitch effects.
 * Finger count controls speed. Clapping triggers explosion & screen glitch.
 * 
 * QUICK TWEAKS:
 * - Line 40: Node count (20-80)
 * - Line 74: Connection distance (100-400)
 * - Line 162-167: Orbit radius around hands (50-200)
 * - Line 422: Explosion glitch block count (20-100)
 * - Line 440-450: Screen glitch intensity
 * ═══════════════════════════════════════════════════════════════════════════
 */

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  size: number;
  connections: number[];
  waveform: number[];
  attractedToHand: 'left' | 'right' | null;
}

interface GlitchBlock {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  life: number;
}

export class GlitchRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private time = 0;
  private nodes: Node[] = [];
  private glitchBlocks: GlitchBlock[] = [];
  private pixelSize = 20;
  private vibrationTimer = 0;
  private glitchIntensity = 0;
  private isExploding = false; // ⭐ CRITICAL FIX: Prevent infinite explosions!

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    // Initialize more nodes for better coverage
    const nodeCount = 40;
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      
      const node: Node = {
        x,
        y,
        targetX: x,
        targetY: y,
        vx: 0,
        vy: 0,
        size: 4 + Math.random() * 8,
        connections: [],
        waveform: Array.from({ length: 50 }, () => Math.random() * 2 - 1),
        attractedToHand: null
      };
      
      this.nodes.push(node);
    }
    
    // Create initial connections
    this.updateConnections();
  }

  private updateConnections() {
    // Clear all connections
    this.nodes.forEach(node => node.connections = []);
    
    // Connect nearby nodes
    this.nodes.forEach((node, i) => {
      this.nodes.forEach((other, j) => {
        if (i !== j) {
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          if (dist < 200 && node.connections.length < 4) {
            node.connections.push(j);
          }
        }
      });
    });
  }

  render(handData: HandData, colors: string[]) {
    this.time += 0.016;

    // Fade previous frame with glitch effect
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // CLAPPING EXPLOSION
    let vibrationIntensity = 0;
    if (handData.clapping && !this.isExploding) {
      this.vibrationTimer = 1.0;
      this.glitchIntensity = 1.0;
      this.createGlitchExplosion(colors);
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
    
    if (this.glitchIntensity > 0) {
      this.glitchIntensity -= 0.01;
    }

    // Speed: 1 finger = 0.01x (VERY SLOW), 2 fingers = 1.0x, 5 fingers = 2.0x
    let speedMultiplier = 1;
    let hasHandInteraction = false;
    let leftHandX = 0, leftHandY = 0;
    let rightHandX = 0, rightHandY = 0;
    let leftHandActive = false, rightHandActive = false;
    let leftFingerCount = 2, rightFingerCount = 2;

    if (handData.left && handData.left.gesture === 'open') {
      hasHandInteraction = true;
      leftHandActive = true;
      const fingerCount = handData.left.fingerCount || 2;
      leftFingerCount = fingerCount;
      
      if (fingerCount === 1) {
        speedMultiplier = 0.01; // EXTREMELY SLOW
      } else if (fingerCount === 5) {
        speedMultiplier = 2.0;
      } else {
        speedMultiplier = 1.0;
      }
      
      leftHandX = handData.left.position.x * this.canvas.width;
      leftHandY = handData.left.position.y * this.canvas.height;
    }
    
    // PINCH GESTURE = SLOW (same as 1 finger before)
    if (handData.left && handData.left.gesture === 'pinch') {
      hasHandInteraction = true;
      leftHandActive = true;
      leftFingerCount = 1;
      speedMultiplier = 0.01; // EXTREMELY SLOW
      leftHandX = handData.left.position.x * this.canvas.width;
      leftHandY = handData.left.position.y * this.canvas.height;
    }

    if (handData.right && handData.right.gesture === 'open') {
      hasHandInteraction = true;
      rightHandActive = true;
      const fingerCount = handData.right.fingerCount || 2;
      rightFingerCount = fingerCount;
      
      let rightSpeed;
      if (fingerCount === 1) {
        rightSpeed = 0.01;
      } else if (fingerCount === 5) {
        rightSpeed = 2.0;
      } else {
        rightSpeed = 1.0;
      }
      speedMultiplier *= rightSpeed;
      
      rightHandX = handData.right.position.x * this.canvas.width;
      rightHandY = handData.right.position.y * this.canvas.height;
    }
    
    // PINCH GESTURE = SLOW (same as 1 finger before)
    if (handData.right && handData.right.gesture === 'pinch') {
      hasHandInteraction = true;
      rightHandActive = true;
      rightFingerCount = 1;
      speedMultiplier *= 0.01;
      rightHandX = handData.right.position.x * this.canvas.width;
      rightHandY = handData.right.position.y * this.canvas.height;
    }

    // Update nodes - DIRECTLY FOLLOW hands
    this.nodes.forEach((node, index) => {
      if (hasHandInteraction) {
        // Assign each node to nearest hand
        if (leftHandActive && rightHandActive) {
          const distToLeft = Math.hypot(node.x - leftHandX, node.y - leftHandY);
          const distToRight = Math.hypot(node.x - rightHandX, node.y - rightHandY);
          
          if (distToLeft < distToRight) {
            node.attractedToHand = 'left';
            node.targetX = leftHandX + (Math.cos(index * 0.5 + this.time * speedMultiplier) * 100);
            node.targetY = leftHandY + (Math.sin(index * 0.5 + this.time * speedMultiplier) * 100);
          } else {
            node.attractedToHand = 'right';
            node.targetX = rightHandX + (Math.cos(index * 0.5 + this.time * speedMultiplier) * 100);
            node.targetY = rightHandY + (Math.sin(index * 0.5 + this.time * speedMultiplier) * 100);
          }
        } else if (leftHandActive) {
          node.attractedToHand = 'left';
          // Orbit around hand
          const angle = (index / this.nodes.length) * Math.PI * 2 + this.time * speedMultiplier;
          const dist = 50 + (index % 3) * 60;
          node.targetX = leftHandX + Math.cos(angle) * dist;
          node.targetY = leftHandY + Math.sin(angle) * dist;
        } else if (rightHandActive) {
          node.attractedToHand = 'right';
          const angle = (index / this.nodes.length) * Math.PI * 2 + this.time * speedMultiplier;
          const dist = 50 + (index % 3) * 60;
          node.targetX = rightHandX + Math.cos(angle) * dist;
          node.targetY = rightHandY + Math.sin(angle) * dist;
        }

        // Move toward target with speed multiplier
        const dx = node.targetX - node.x;
        const dy = node.targetY - node.y;
        node.vx += dx * 0.05 * speedMultiplier;
        node.vy += dy * 0.05 * speedMultiplier;
      } else {
        // Drift randomly when no hands
        node.targetX += (Math.random() - 0.5) * 2;
        node.targetY += (Math.random() - 0.5) * 2;
        
        const dx = node.targetX - node.x;
        const dy = node.targetY - node.y;
        node.vx += dx * 0.01;
        node.vy += dy * 0.01;
      }

      // Add vibration jitter
      if (vibrationIntensity > 0) {
        node.vx += (Math.random() - 0.5) * vibrationIntensity * 40;
        node.vy += (Math.random() - 0.5) * vibrationIntensity * 40;
      }

      // Apply velocity with damping
      node.vx *= 0.85;
      node.vy *= 0.85;
      node.x += node.vx;
      node.y += node.vy;

      // Keep nodes on screen
      if (node.x < 0) node.x = this.canvas.width;
      if (node.x > this.canvas.width) node.x = 0;
      if (node.y < 0) node.y = this.canvas.height;
      if (node.y > this.canvas.height) node.y = 0;

      // Update waveform
      node.waveform.shift();
      node.waveform.push(Math.sin(this.time * speedMultiplier * 2 + node.x * 0.01) * (hasHandInteraction ? 2 : 0.5));
    });

    // Update connections dynamically
    if (this.time % 0.5 < 0.016) {
      this.updateConnections();
    }

    // Draw connections POINTING toward hands
    this.drawNodeConnections(colors, vibrationIntensity, leftHandActive, rightHandActive, leftHandX, leftHandY, rightHandX, rightHandY);

    // Draw nodes
    this.drawNodes(colors, vibrationIntensity);

    // Draw waveforms at nodes
    this.drawWaveforms(colors, speedMultiplier);

    // Draw hand position indicators
    this.drawHandIndicators(handData, colors, leftFingerCount, rightFingerCount);

    // Draw glitch blocks
    this.drawGlitchBlocks(colors);

    // Add screen glitch effects
    if (this.glitchIntensity > 0.3) {
      this.drawScreenGlitch();
    }

    // Spawn glitch blocks based on finger count
    if (hasHandInteraction && Math.random() < 0.03 * speedMultiplier) {
      this.spawnGlitchBlock(colors);
    }
  }

  private drawNodeConnections(
    colors: string[], 
    vibrationIntensity: number,
    leftHandActive: boolean,
    rightHandActive: boolean,
    leftHandX: number,
    leftHandY: number,
    rightHandX: number,
    rightHandY: number
  ) {
    this.nodes.forEach((node, i) => {
      // Draw lines from node to hand it's attracted to
      if (node.attractedToHand === 'left' && leftHandActive) {
        this.ctx.beginPath();
        this.ctx.moveTo(node.x, node.y);
        this.ctx.lineTo(leftHandX, leftHandY);
        
        const gradient = this.ctx.createLinearGradient(node.x, node.y, leftHandX, leftHandY);
        gradient.addColorStop(0, colors[0] + '80');
        gradient.addColorStop(1, colors[1] + 'FF');
        
        this.ctx.strokeStyle = gradient;
        this.ctx.lineWidth = 2 + vibrationIntensity * 3;
        this.ctx.stroke();
      }
      
      if (node.attractedToHand === 'right' && rightHandActive) {
        this.ctx.beginPath();
        this.ctx.moveTo(node.x, node.y);
        this.ctx.lineTo(rightHandX, rightHandY);
        
        const gradient = this.ctx.createLinearGradient(node.x, node.y, rightHandX, rightHandY);
        gradient.addColorStop(0, colors[2] + '80');
        gradient.addColorStop(1, colors[3] + 'FF');
        
        this.ctx.strokeStyle = gradient;
        this.ctx.lineWidth = 2 + vibrationIntensity * 3;
        this.ctx.stroke();
      }

      // Draw connections between nodes
      node.connections.forEach(j => {
        const other = this.nodes[j];
        if (!other) return;
        
        this.ctx.beginPath();
        this.ctx.moveTo(node.x, node.y);
        this.ctx.lineTo(other.x, other.y);
        
        const colorIndex = Math.floor((i / this.nodes.length) * colors.length);
        this.ctx.strokeStyle = colors[colorIndex] + '40';
        this.ctx.lineWidth = 1 + vibrationIntensity * 2;
        this.ctx.stroke();
      });
    });
  }

  private drawNodes(colors: string[], vibrationIntensity: number) {
    this.nodes.forEach((node, i) => {
      const colorIndex = Math.floor((i / this.nodes.length) * colors.length);
      const size = node.size * (1 + vibrationIntensity * 0.5);
      
      const gradient = this.ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, size
      );
      gradient.addColorStop(0, colors[colorIndex] + 'FF');
      gradient.addColorStop(0.5, colors[(colorIndex + 1) % colors.length] + 'AA');
      gradient.addColorStop(1, colors[colorIndex] + '00');
      
      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Inner glow
      this.ctx.fillStyle = '#FFFFFF80';
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, size * 0.3, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  private drawWaveforms(colors: string[], speedMultiplier: number) {
    this.nodes.forEach((node, i) => {
      const colorIndex = Math.floor((i / this.nodes.length) * colors.length);
      
      this.ctx.beginPath();
      this.ctx.strokeStyle = colors[colorIndex] + '60';
      this.ctx.lineWidth = 2;
      
      for (let j = 0; j < node.waveform.length - 1; j++) {
        const x = node.x + j - node.waveform.length / 2;
        const y = node.y + node.waveform[j] * 20;
        
        if (j === 0) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      }
      
      this.ctx.stroke();
    });
  }

  private drawHandIndicators(handData: HandData, colors: string[], leftFingerCount: number, rightFingerCount: number) {
    if (handData.left && handData.left.gesture === 'open') {
      const x = handData.left.position.x * this.canvas.width;
      const y = handData.left.position.y * this.canvas.height;
      
      // Pulsing ring
      const ringSize = 30 + Math.sin(this.time * 3) * 10;
      this.ctx.strokeStyle = colors[0] + 'AA';
      this.ctx.lineWidth = 3;
      this.ctx.beginPath();
      this.ctx.arc(x, y, ringSize, 0, Math.PI * 2);
      this.ctx.stroke();
      
      // Finger count indicator
      this.ctx.fillStyle = colors[0];
      this.ctx.font = '20px monospace';
      this.ctx.fillText(`${leftFingerCount}`, x - 10, y + 5);
    }
    
    if (handData.right && handData.right.gesture === 'open') {
      const x = handData.right.position.x * this.canvas.width;
      const y = handData.right.position.y * this.canvas.height;
      
      const ringSize = 30 + Math.sin(this.time * 3) * 10;
      this.ctx.strokeStyle = colors[2] + 'AA';
      this.ctx.lineWidth = 3;
      this.ctx.beginPath();
      this.ctx.arc(x, y, ringSize, 0, Math.PI * 2);
      this.ctx.stroke();
      
      this.ctx.fillStyle = colors[2];
      this.ctx.font = '20px monospace';
      this.ctx.fillText(`${rightFingerCount}`, x - 10, y + 5);
    }
  }

  private drawGlitchBlocks(colors: string[]) {
    this.glitchBlocks = this.glitchBlocks.filter(block => {
      block.life -= 0.016;
      
      if (block.life > 0) {
        this.ctx.fillStyle = block.color + alphaHex(block.life * 255);
        this.ctx.fillRect(block.x, block.y, block.width, block.height);
        return true;
      }
      return false;
    });
  }

  private spawnGlitchBlock(colors: string[]) {
    this.glitchBlocks.push({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      width: 20 + Math.random() * 100,
      height: 10 + Math.random() * 50,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0.5 + Math.random() * 0.5
    });
  }

  private createGlitchExplosion(colors: string[]) {
    // Spawn many glitch blocks
    for (let i = 0; i < 50; i++) {
      this.spawnGlitchBlock(colors);
    }
    
    // Flash
    this.ctx.fillStyle = '#FFFFFF60';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Scatter all nodes
    this.nodes.forEach(node => {
      node.vx = (Math.random() - 0.5) * 50;
      node.vy = (Math.random() - 0.5) * 50;
    });
  }

  private drawScreenGlitch() {
    // Random color channel shifts
    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const shift = Math.floor(Math.random() * 20) - 10;
    
    this.ctx.putImageData(imageData, shift, 0);
    
    // Random horizontal slices
    for (let i = 0; i < 5; i++) {
      const y = Math.random() * this.canvas.height;
      const height = 5 + Math.random() * 20;
      const sliceData = this.ctx.getImageData(0, y, this.canvas.width, height);
      const offset = (Math.random() - 0.5) * 100;
      this.ctx.putImageData(sliceData, offset, y);
    }
  }
}