import { HandData } from '../../App';
import { timeScale } from '../../motion/clock';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * HOLOGRAPHIC BLOB RENDERER (Key H)
 * ═══════════════════════════════════════════════════════════════════════════
 * Live heat map camera background with reactive illustration overlay.
 * Illustration reacts to hand movements with magnetic hover and pinch explosion.
 * 
 * QUICK TWEAKS:
 * - Line 43: Blur amount
 * - Line 44: Noise intensity  
 * - Line 45: Pixelation factor
 * - Line 51: Illustration particle size
 * - Line 52: Magnetic hover range
 * - Line 53: Explosion force
 * ═══════════════════════════════════════════════════════════════════════════
 */

interface IllustrationParticle {
  x: number;
  y: number;
  initialX: number;
  initialY: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  scale: number;
}

export class HolographicBlobRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private time = 0;
  private videoElement: HTMLVideoElement | null = null;
  private ghostCanvas: HTMLCanvasElement | null = null;
  private ghostCtx: CanvasRenderingContext2D | null = null;

  // ═════════════════════════════════════════════════════════════════════════
  // HEAT MAP VIDEO BACKGROUND SETTINGS
  // ═════════════════════════════════════════════════════════════════════════
  private readonly BLUR_AMOUNT = 60; // TWEAK: 30-80
  private readonly NOISE_INTENSITY = 60; // TWEAK: 20-100
  private readonly PIXELATION_FACTOR = 6; // TWEAK: 2-12
  private readonly GHOSTING_AMOUNT = 0.25; // TWEAK: 0.1-0.5

  // ═════════════════════════════════════════════════════════════════════════
  // ILLUSTRATION OVERLAY SETTINGS
  // ═════════════════════════════════════════════════════════════════════════
  private readonly PARTICLE_SIZE = 2; // TWEAK: 1-6
  private readonly MAGNETIC_RANGE = 200; // TWEAK: 100-400
  private readonly EXPLOSION_FORCE = 12; // TWEAK: 5-20
  private readonly RETURN_SPRING = 0.02; // TWEAK: 0.01-0.1 (how fast particles return home)
  private particles: IllustrationParticle[] = [];
  private pinchStateLeft = 0;
  private pinchStateRight = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    console.log('🔮 HolographicBlobRenderer initialized');
  }

  setVideoElement(video: HTMLVideoElement | null) {
    this.videoElement = video;
  }

  private hexToRgb(hex: string): { r: number; g: number; b: number } {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
  }

  private getColorForIntensity(intensity: number, colors: string[]): { r: number; g: number; b: number } {
    if (!colors || colors.length === 0) {
      if (intensity < 0.25) {
        return { r: intensity * 4 * 128, g: 0, b: intensity * 4 * 255 };
      } else if (intensity < 0.5) {
        return { r: 128 + (intensity - 0.25) * 4 * 127, g: 0, b: 255 - (intensity - 0.25) * 4 * 255 };
      } else if (intensity < 0.75) {
        return { r: 255, g: (intensity - 0.5) * 4 * 255, b: 0 };
      } else {
        return { r: 255, g: 255, b: (intensity - 0.75) * 4 * 255 };
      }
    }

    if (colors.length === 1) {
      const color = this.hexToRgb(colors[0]);
      return { r: color.r * intensity, g: color.g * intensity, b: color.b * intensity };
    } else if (colors.length === 2) {
      const color1 = this.hexToRgb(colors[0]);
      const color2 = this.hexToRgb(colors[1]);
      return {
        r: color1.r + (color2.r - color1.r) * intensity,
        g: color1.g + (color2.g - color1.g) * intensity,
        b: color1.b + (color2.b - color1.b) * intensity
      };
    } else {
      const segment = intensity * (colors.length - 1);
      const index = Math.floor(segment);
      const t = segment - index;
      const color1 = this.hexToRgb(colors[Math.min(index, colors.length - 1)]);
      const color2 = this.hexToRgb(colors[Math.min(index + 1, colors.length - 1)]);
      return {
        r: color1.r + (color2.r - color1.r) * t,
        g: color1.g + (color2.g - color1.g) * t,
        b: color1.b + (color2.b - color1.b) * t
      };
    }
  }

  private drawHeatMapVideoBackground(colors: string[]) {
    if (!this.videoElement || this.videoElement.readyState < this.videoElement.HAVE_CURRENT_DATA) {
      this.ctx.fillStyle = '#000000';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      return;
    }

    if (!this.ghostCanvas) {
      this.ghostCanvas = document.createElement('canvas');
      this.ghostCanvas.width = this.canvas.width;
      this.ghostCanvas.height = this.canvas.height;
      this.ghostCtx = this.ghostCanvas.getContext('2d');
    }

    if (this.ghostCanvas.width !== this.canvas.width || this.ghostCanvas.height !== this.canvas.height) {
      this.ghostCanvas.width = this.canvas.width;
      this.ghostCanvas.height = this.canvas.height;
    }

    if (!this.ghostCtx) return;

    const video = this.videoElement;
    const pixelatedWidth = Math.floor(this.canvas.width / this.PIXELATION_FACTOR);
    const pixelatedHeight = Math.floor(this.canvas.height / this.PIXELATION_FACTOR);
    
    const videoAspect = video.videoWidth / video.videoHeight;
    const canvasAspect = pixelatedWidth / pixelatedHeight;
    
    let drawWidth, drawHeight, offsetX, offsetY;
    
    if (canvasAspect > videoAspect) {
      drawWidth = pixelatedWidth;
      drawHeight = drawWidth / videoAspect;
      offsetX = 0;
      offsetY = (pixelatedHeight - drawHeight) / 2;
    } else {
      drawHeight = pixelatedHeight;
      drawWidth = drawHeight * videoAspect;
      offsetX = (pixelatedWidth - drawWidth) / 2;
      offsetY = 0;
    }

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = pixelatedWidth;
    tempCanvas.height = pixelatedHeight;
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    tempCtx.save();
    tempCtx.imageSmoothingEnabled = false;
    tempCtx.translate(pixelatedWidth, 0);
    tempCtx.scale(-1, 1);
    tempCtx.drawImage(video, pixelatedWidth - offsetX - drawWidth, offsetY, drawWidth, drawHeight);
    tempCtx.restore();

    const pixelatedImageData = tempCtx.getImageData(0, 0, pixelatedWidth, pixelatedHeight);
    const pixelData = pixelatedImageData.data;

    for (let i = 0; i < pixelData.length; i += 4) {
      const r = pixelData[i];
      const g = pixelData[i + 1];
      const b = pixelData[i + 2];
      const gray = 0.299 * r + 0.587 * g + 0.114 * b;
      const noise = (Math.random() - 0.5) * this.NOISE_INTENSITY;
      const noisyGray = Math.max(0, Math.min(255, gray + noise));
      const intensity = noisyGray / 255;
      const color = this.getColorForIntensity(intensity, colors);
      pixelData[i] = color.r;
      pixelData[i + 1] = color.g;
      pixelData[i + 2] = color.b;
    }

    tempCtx.putImageData(pixelatedImageData, 0, 0);

    const blurredCanvas = document.createElement('canvas');
    blurredCanvas.width = this.canvas.width;
    blurredCanvas.height = this.canvas.height;
    const blurredCtx = blurredCanvas.getContext('2d');
    if (!blurredCtx) return;
    
    blurredCtx.filter = `blur(${this.BLUR_AMOUNT}px)`;
    blurredCtx.imageSmoothingEnabled = true;
    blurredCtx.imageSmoothingQuality = 'high';
    blurredCtx.drawImage(tempCanvas, 0, 0, pixelatedWidth, pixelatedHeight, 0, 0, this.canvas.width, this.canvas.height);
    
    this.ctx.globalAlpha = 1 - this.GHOSTING_AMOUNT;
    this.ctx.drawImage(this.ghostCanvas, 0, 0);
    
    this.ctx.globalAlpha = this.GHOSTING_AMOUNT;
    this.ctx.drawImage(blurredCanvas, 0, 0);
    
    this.ghostCtx.clearRect(0, 0, this.ghostCanvas.width, this.ghostCanvas.height);
    this.ghostCtx.drawImage(this.canvas, 0, 0);
    
    this.ctx.globalAlpha = 1;
  }

  private initializeParticles() {
    // Sample 200 points from illustration for performance
    const points = [
      [402,121],[399,99],[368,92],[494,468],[464,405],[84,54],[496,262],[479,449],
      [501,272],[470,457],[381,130],[375,141],[366,141],[460,469],[244,27],[455,393],
      [548,500],[473,657],[356,149],[496,259],[441,468],[369,243],[469,653],[517,335],
      [475,650],[450,355],[426,652],[483,199],[447,396],[490,267],[51,70],[494,230],
      [351,236],[464,270],[27,13],[482,468],[394,124],[484,220],[448,643],[472,644],
      [328,154],[397,115],[239,22],[576,552],[373,71],[44,4],[499,683],[428,467],
      [470,820],[316,144],[466,473],[317,150],[479,192],[474,192],[425,471],[488,237],
      [19,57],[473,487],[304,162],[353,678],[398,529],[449,637],[513,497],[530,534],
      [404,521],[505,289],[506,502],[483,496],[431,205],[463,279],[436,810],[457,306],
      [528,464],[501,284],[492,259],[311,169],[398,400],[470,494],[433,788],[459,153],
      [448,139],[530,551],[497,512],[474,822],[467,659],[329,605],[358,155],[371,584],
      [373,614],[392,398],[440,501],[386,142],[54,4],[369,400],[442,418],[446,347],
      [491,235],[502,404],[546,496],[423,785],[401,505],[471,499],[410,475],[234,20],
      [300,176],[363,371],[482,511],[437,781],[344,219],[361,681],[393,475],[420,628],
      [337,264],[428,502],[467,290],[483,770],[200,25],[460,768],[400,765],[378,681],
      [339,198],[461,760],[386,325],[445,134],[57,11],[468,825],[453,627],[391,139],
      [493,429],[489,299],[429,251],[324,298],[421,383],[426,206],[378,668],[452,400],
      [428,200],[506,299],[576,541],[533,555],[485,783],[408,365],[307,103],[270,615],
      [382,151],[332,199],[330,99],[424,616],[337,169],[425,646],[452,668],[459,404],
      [435,179],[182,58],[370,694],[350,146],[473,195],[511,540],[514,589],[169,6],
      [447,416],[335,436],[379,421],[175,18],[508,488],[418,469],[440,635],[296,168],
      [475,496],[462,187],[307,309],[232,26],[480,202],[366,80],[485,643],[27,29],
      [474,664],[481,408],[295,162],[510,478],[429,360],[485,799],[394,751],[518,331]
    ];
    
    const scaleX = this.canvas.width / 600; // Original design was ~600px wide
    const scaleY = this.canvas.height / 840; // Original design was ~840px tall
    
    for (const [x, y] of points) {
      const scaledX = x * scaleX;
      const scaledY = y * scaleY;
      this.particles.push({
        x: scaledX,
        y: scaledY,
        initialX: scaledX,
        initialY: scaledY,
        vx: 0,
        vy: 0,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
        scale: 1
      });
    }
  }

  private calculatePinch(hand: HandData['left'] | HandData['right']): number {
    if (!hand || !hand.landmarks) return 0;
    
    const thumb = hand.landmarks[4];
    const index = hand.landmarks[8];
    const distance = Math.sqrt(
      Math.pow(thumb.x - index.x, 2) + 
      Math.pow(thumb.y - index.y, 2)
    );
    
    // Map distance: 0.02 is pinch (1.0), 0.15 is open (0.0)
    return 1.0 - Math.min(Math.max((distance - 0.02) * 7, 0), 1);
  }

  private updateParticles(handData: HandData) {
    const leftHand = handData.left;
    const rightHand = handData.right;

    // Calculate pinch states for both hands
    const leftPinch = this.calculatePinch(leftHand);
    const rightPinch = this.calculatePinch(rightHand);
    
    // Smooth pinch values
    this.pinchStateLeft = this.pinchStateLeft * 0.8 + leftPinch * 0.2;
    this.pinchStateRight = this.pinchStateRight * 0.8 + rightPinch * 0.2;

    for (const particle of this.particles) {
      // Reset forces
      let forceX = 0;
      let forceY = 0;

      // Left hand interaction
      if (leftHand && leftHand.position) {
        const handX = leftHand.position.x * this.canvas.width;
        const handY = leftHand.position.y * this.canvas.height;
        const dx = handX - particle.x;
        const dy = handY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.MAGNETIC_RANGE) {
          const force = (this.MAGNETIC_RANGE - distance) / this.MAGNETIC_RANGE;
          
          // Magnetic attraction (pull toward hand)
          forceX += dx * force * 0.015;
          forceY += dy * force * 0.015;
          
          // Pinch explosion (push away)
          if (this.pinchStateLeft > 0.3) {
            forceX -= dx * this.pinchStateLeft * this.EXPLOSION_FORCE * 0.01;
            forceY -= dy * this.pinchStateLeft * this.EXPLOSION_FORCE * 0.01;
          }
          
          // Scale up particles near hand
          particle.scale = 1 + force * 2;
          particle.rotationSpeed = force * 0.2;
        }
      }

      // Right hand interaction
      if (rightHand && rightHand.position) {
        const handX = rightHand.position.x * this.canvas.width;
        const handY = rightHand.position.y * this.canvas.height;
        const dx = handX - particle.x;
        const dy = handY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.MAGNETIC_RANGE) {
          const force = (this.MAGNETIC_RANGE - distance) / this.MAGNETIC_RANGE;
          
          forceX += dx * force * 0.015;
          forceY += dy * force * 0.015;
          
          if (this.pinchStateRight > 0.3) {
            forceX -= dx * this.pinchStateRight * this.EXPLOSION_FORCE * 0.01;
            forceY -= dy * this.pinchStateRight * this.EXPLOSION_FORCE * 0.01;
          }
          
          particle.scale = Math.max(particle.scale, 1 + force * 2);
          particle.rotationSpeed = Math.max(particle.rotationSpeed, force * 0.2);
        }
      }

      // Spring force to return to original position
      const springX = (particle.initialX - particle.x) * this.RETURN_SPRING;
      const springY = (particle.initialY - particle.y) * this.RETURN_SPRING;
      forceX += springX;
      forceY += springY;

      // Apply forces
      particle.vx += forceX;
      particle.vy += forceY;

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Damping
      particle.vx *= 0.92;
      particle.vy *= 0.92;

      // Rotation
      particle.rotation += particle.rotationSpeed;
      particle.rotationSpeed *= 0.95;

      // Scale decay
      particle.scale += (1 - particle.scale) * 0.1;
    }
  }

  private drawParticles(colors: string[]) {
    // Use first color from palette, or white
    const color = colors && colors.length > 0 ? colors[0] : '#ffffff';
    
    for (const particle of this.particles) {
      this.ctx.save();
      this.ctx.translate(particle.x, particle.y);
      this.ctx.rotate(particle.rotation);
      this.ctx.scale(particle.scale, particle.scale);
      
      // Draw diamond/star shape (4-pointed)
      this.ctx.fillStyle = color;
      this.ctx.beginPath();
      this.ctx.moveTo(0, -this.PARTICLE_SIZE);
      this.ctx.lineTo(this.PARTICLE_SIZE * 0.5, 0);
      this.ctx.lineTo(0, this.PARTICLE_SIZE);
      this.ctx.lineTo(-this.PARTICLE_SIZE * 0.5, 0);
      this.ctx.closePath();
      this.ctx.fill();
      
      // Glow effect
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = color;
      this.ctx.fill();
      
      this.ctx.restore();
    }
  }

  render(handData: HandData, colors: string[]) {
    this.time += (0.016) * timeScale();

    // Initialize particles if needed
    if (this.particles.length === 0) {
      this.initializeParticles();
    }

    // ════════════════════════════════════════════════════════════════════════
    // BACKGROUND - Heat Map Video (Live Camera Feed)
    // ═════════════════════════════════════════════════════════════════════════
    this.drawHeatMapVideoBackground(colors);

    // ════════════════════════════════════════════════════════════════════════
    // ILLUSTRATION OVERLAY - Reactive Particles
    // ═════════════════════════════════════════════════════════════════════════
    this.updateParticles(handData);
    this.drawParticles(colors);

    this.ctx.globalAlpha = 1;
  }
}
