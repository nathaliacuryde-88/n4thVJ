import { HandData } from '../../App';

interface Particle {
  originX: number;
  originY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  intensity: number;
  size: number;
  currentSize: number;
}

export class FaceCloudRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  
  // Configuration
  private config = {
    baseSize: 1.5,
    gridSpacing: 8,
    distortionRadius: 200,
    distortionStrength: 0,
    friction: 0.9,
    ease: 0.1,
  };
  
  // Simplified face data (x, y, brightness_intensity)
  private faceData: [number, number, number][] = [
    [60,100,1],[70,100,1],[50,110,1],[60,110,1],[70,110,1],[80,110,1],[40,120,1],[50,120,2],[60,120,1],[70,120,1],[80,120,2],[90,120,1],[40,130,2],[50,130,3],[60,130,1],[70,130,1],[80,130,3],[90,130,2],[30,140,2],[40,140,3],[50,140,4],[60,140,1],[70,140,1],[80,140,4],[90,140,3],[100,140,2],[20,150,2],[30,150,3],[40,150,3],[50,150,3],[60,150,1],[70,150,1],[80,150,3],[90,150,3],[100,150,3],[110,150,2],[30,160,2],[40,160,3],[50,160,2],[80,160,2],[90,160,3],[100,160,2],[40,170,2],[50,170,2],[80,170,2],[90,170,2],[40,180,1],[50,180,1],[80,180,1],[90,180,1],[40,190,1],[50,190,2],[80,190,2],[90,190,1],[50,200,2],[80,200,2],[50,210,1],[60,210,1],[70,210,1],[80,210,1],[50,220,1],[60,220,2],[70,220,2],[80,220,1],[60,230,3],[70,230,3],[60,240,4],[70,240,4],[60,250,3],[70,250,3],[60,260,2],[70,260,2]
  ];

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.createParticles();
  }

  private createParticles() {
    this.particles = [];
    
    // Create uniform circular grid - all squares same size, no touching
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    const radius = 275; // 10% larger than 250
    
    // Uniform spacing to prevent touching
    const spacing = 14; // Increased from 12 to prevent touching
    
    // Uniform size for all squares (medium size)
    const uniformIntensity = 1.2;
    const uniformSize = this.config.baseSize * uniformIntensity;

    for (let y = centerY - radius; y < centerY + radius; y += spacing) {
      for (let x = centerX - radius; x < centerX + radius; x += spacing) {
        const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
        
        // Only add if within circle radius
        if (dist < radius) {
          this.particles.push({
            originX: x,
            originY: y,
            x,
            y,
            vx: 0,
            vy: 0,
            intensity: uniformIntensity,
            size: uniformSize,
            currentSize: uniformSize,
          });
        }
      }
    }
  }

  render(handData: HandData, colors: string[]) {
    // Background - detect 1C mode and force black background
    // 1C mode: colors[1] is white (#FFFFFF)
    const is1CMode = colors[1] && (colors[1].toLowerCase() === '#ffffff' || colors[1].toLowerCase() === '#fff');
    
    if (is1CMode) {
      this.ctx.fillStyle = '#000000'; // Force pure black background in 1C mode
    } else {
      this.ctx.fillStyle = colors[3] || '#000000'; // Use colors[3] for other modes
    }
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Get primary hand for distortion
    const primaryHand = handData.left || handData.right;
    
    if (primaryHand) {
      const handX = (primaryHand.position?.x || 0.5) * this.canvas.width;
      const handY = (primaryHand.position?.y || 0.5) * this.canvas.height;

      // Calculate distortion strength based on finger count
      let targetDistortion = 0;
      const fingerCount = primaryHand.fingerCount || 2;
      
      if (primaryHand.gesture === 'pinch' || fingerCount === 1) {
        // Pinch = 0.003x = minimal distortion (almost frozen)
        targetDistortion = 5;
      } else if (fingerCount === 2) {
        // 2 fingers = 0.5x = medium distortion
        targetDistortion = 20;
      } else if (fingerCount >= 5) {
        // 5 fingers = 2.0x = fast/maximum distortion
        targetDistortion = 50;
      } else {
        // 3-4 fingers = intermediate
        targetDistortion = 15 + (fingerCount - 2) * 10;
      }

      // Smooth transition to target distortion
      this.config.distortionStrength += (targetDistortion - this.config.distortionStrength) * 0.1;

      // Update all particles
      this.particles.forEach(particle => {
        const dx = handX - particle.x;
        const dy = handY - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Magnifying glass / Fish eye effect
        if (dist < this.config.distortionRadius) {
          const force = (this.config.distortionRadius - dist) / this.config.distortionRadius;
          const angle = Math.atan2(dy, dx);
          
          // Push particles away from hand
          const pushX = Math.cos(angle) * force * this.config.distortionStrength;
          const pushY = Math.sin(angle) * force * this.config.distortionStrength;

          particle.vx -= pushX;
          particle.vy -= pushY;
          
          // Bulge effect: particles get larger when distorted
          particle.currentSize = particle.size + (force * 4 * Math.abs(this.config.distortionStrength / 10));
        } else {
          particle.currentSize = particle.size;
        }

        // Spring physics - return to origin
        const homeDx = particle.originX - particle.x;
        const homeDy = particle.originY - particle.y;
        
        particle.vx += homeDx * this.config.ease;
        particle.vy += homeDy * this.config.ease;
        
        particle.vx *= this.config.friction;
        particle.vy *= this.config.friction;

        particle.x += particle.vx;
        particle.y += particle.vy;
      });
    } else {
      // No hand detected - smoothly return distortion to 0
      this.config.distortionStrength *= 0.9;
      
      // Return particles to origin
      this.particles.forEach(particle => {
        const homeDx = particle.originX - particle.x;
        const homeDy = particle.originY - particle.y;
        
        particle.vx += homeDx * this.config.ease;
        particle.vy += homeDy * this.config.ease;
        
        particle.vx *= this.config.friction;
        particle.vy *= this.config.friction;

        particle.x += particle.vx;
        particle.y += particle.vy;
        
        particle.currentSize = particle.size;
      });
    }

    // Clapping effect - scatter particles
    if (handData.clapping) {
      const centerX = this.canvas.width / 2;
      const centerY = this.canvas.height / 2;
      
      this.particles.forEach(particle => {
        const dx = particle.x - centerX;
        const dy = particle.y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        const explosionForce = 30;
        particle.vx += (dx / (dist + 1)) * explosionForce;
        particle.vy += (dy / (dist + 1)) * explosionForce;
      });
    }

    // Draw all particles as squares (Op-Art style) with dynamic colors
    // Use primary color from color system
    const primaryColor = colors[0] || '#FFFFFF';
    
    this.particles.forEach(particle => {
      // Use primary color with high opacity
      this.ctx.fillStyle = primaryColor;
      this.ctx.globalAlpha = 0.85;
      
      const s = Math.max(0.5, particle.currentSize);
      this.ctx.fillRect(particle.x - s / 2, particle.y - s / 2, s, s);
    });
    
    // Reset global alpha
    this.ctx.globalAlpha = 1.0;
  }
}