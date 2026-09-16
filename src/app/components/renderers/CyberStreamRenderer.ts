import { HandData } from '../../App';
import { timeScale } from '../../motion/clock';

interface DataPacket {
  x: number;
  y: number;
  z: number; // depth (0 = far, 1 = close)
  width: number;
  height: number;
  rotation: number;
  rotationSpeed: number;
  streamIndex: number;
  age: number;
  hue: number;
  shimmerPhase: number; // For holographic shimmer
  panelType: 'rect' | 'hex' | 'diamond'; // Different panel shapes
  // Quantum field properties
  waveAmplitude: number;
  waveFrequency: number;
  quantumPhase: number;
  particleCloud: { dx: number; dy: number; life: number }[];
}

interface DataStream {
  angle: number; // Direction from vanishing point
  speed: number;
  packets: DataPacket[];
  branchLevel: number; // 0 = main, 1+ = fractal branches
  parentAngle?: number;
}

export class CyberStreamRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private streams: DataStream[] = [];
  private vanishingPoint = { x: 0, y: 0 };
  private targetVanishingPoint = { x: 0, y: 0 };
  // Add second vanishing point for right hand
  private vanishingPointRight = { x: 0, y: 0 };
  private targetVanishingPointRight = { x: 0, y: 0 };
  private scanLineOffset = 0;
  private clapAccumulation = 0; // Accumulates with each clap
  private shakeIntensity = 0;
  private time = 0;
  private lastFingerCount = 5;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    // Initialize vanishing points
    this.vanishingPoint.x = canvas.width * 0.3;
    this.vanishingPoint.y = canvas.height / 2;
    this.targetVanishingPoint.x = this.vanishingPoint.x;
    this.targetVanishingPoint.y = this.vanishingPoint.y;
    
    this.vanishingPointRight.x = canvas.width * 0.7;
    this.vanishingPointRight.y = canvas.height / 2;
    this.targetVanishingPointRight.x = this.vanishingPointRight.x;
    this.targetVanishingPointRight.y = this.vanishingPointRight.y;
    
    // Create initial main streams (6 main arteries)
    for (let i = 0; i < 6; i++) {
      this.streams.push({
        angle: (i / 6) * Math.PI * 2,
        speed: 1,
        packets: [],
        branchLevel: 0,
      });
    }
  }

  render(handData: HandData, colors: string[]) {
    const { width, height } = this.canvas;
    this.time += (0.016) * timeScale();

    // Get gesture data
    const leftHand = handData.left;
    const rightHand = handData.right;
    const isClapping = handData.clapping || false;
    const clapIntensity = handData.clapIntensity || 0;
    
    // Determine speed multiplier from finger count (average if both hands present)
    let speedMultiplier = 1.0;
    let densityMultiplier = 1.0;
    
    let fingerCount = 5;
    if (leftHand && rightHand) {
      // Both hands - average finger count
      fingerCount = Math.floor(((leftHand.fingerCount || 5) + (rightHand.fingerCount || 5)) / 2);
    } else if (leftHand || rightHand) {
      const activeHand = leftHand || rightHand;
      fingerCount = activeHand!.fingerCount || 5;
    }
    
    this.lastFingerCount = fingerCount;
    
    if (fingerCount === 1) {
      // Pinch - almost frozen, meditative
      speedMultiplier = 0.003;
      densityMultiplier = 0.3;
    } else if (fingerCount === 2) {
      // Two fingers - slow (changed from 1.0 to 0.5)
      speedMultiplier = 0.5;
      densityMultiplier = 0.7;
    } else {
      // 5 fingers - chaotic and fast
      speedMultiplier = 2.0;
      densityMultiplier = 2.5;
    }

    // Handle clapping - accumulate intensity and spawn fractal branches
    if (isClapping) {
      this.clapAccumulation = Math.min(10, this.clapAccumulation + clapIntensity * 2);
      this.shakeIntensity = this.clapAccumulation * 3;
      
      // Spawn new fractal branches on claps
      if (this.clapAccumulation > 2 && Math.random() < 0.3) {
        this.spawnFractalBranch();
      }
    } else {
      // Decay accumulation slowly
      this.clapAccumulation *= 0.98;
      this.shakeIntensity *= 0.9;
    }

    // Update vanishing point based on hand position
    if (leftHand) {
      this.targetVanishingPoint.x = leftHand.position.x * width;
      this.targetVanishingPoint.y = leftHand.position.y * height;
    } else {
      // Return to left side when no left hand
      this.targetVanishingPoint.x = width * 0.3;
      this.targetVanishingPoint.y = height / 2;
    }
    
    if (rightHand) {
      this.targetVanishingPointRight.x = rightHand.position.x * width;
      this.targetVanishingPointRight.y = rightHand.position.y * height;
    } else {
      // Return to right side when no right hand
      this.targetVanishingPointRight.x = width * 0.7;
      this.targetVanishingPointRight.y = height / 2;
    }

    // Smooth vanishing point movement for both
    this.vanishingPoint.x += (this.targetVanishingPoint.x - this.vanishingPoint.x) * 0.05;
    this.vanishingPoint.y += (this.targetVanishingPoint.y - this.vanishingPoint.y) * 0.05;
    
    this.vanishingPointRight.x += (this.targetVanishingPointRight.x - this.vanishingPointRight.x) * 0.05;
    this.vanishingPointRight.y += (this.targetVanishingPointRight.y - this.vanishingPointRight.y) * 0.05;

    // Apply screen shake
    let shakeX = 0;
    let shakeY = 0;
    if (this.shakeIntensity > 0.5) {
      shakeX = (Math.random() - 0.5) * this.shakeIntensity;
      shakeY = (Math.random() - 0.5) * this.shakeIntensity;
    }

    // Clear with fade for motion blur effect
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    this.ctx.fillRect(0, 0, width, height);

    this.ctx.save();
    this.ctx.translate(shakeX, shakeY);

    // Update and render streams
    this.streams.forEach((stream, index) => {
      // Spawn new packets along each stream
      const spawnRate = 0.05 * densityMultiplier * (stream.branchLevel === 0 ? 1 : 0.5);
      if (Math.random() < spawnRate) {
        const panelTypes: ('rect' | 'hex' | 'diamond')[] = ['rect', 'hex', 'diamond'];
        stream.packets.push({
          x: this.vanishingPoint.x,
          y: this.vanishingPoint.y,
          z: 0, // Start at far distance
          width: 4 + Math.random() * 8,
          height: 20 + Math.random() * 40,
          rotation: stream.angle + (Math.random() - 0.5) * 0.3,
          rotationSpeed: (Math.random() - 0.5) * 0.02 * speedMultiplier,
          streamIndex: index,
          age: 0,
          hue: Math.random() * 360,
          shimmerPhase: Math.random() * Math.PI * 2,
          panelType: panelTypes[Math.floor(Math.random() * 3)],
          // Quantum field properties
          waveAmplitude: Math.random() * 10,
          waveFrequency: Math.random() * 2 + 1,
          quantumPhase: Math.random() * Math.PI * 2,
          particleCloud: [],
        });
      }

      // Update packets
      stream.packets = stream.packets.filter(packet => {
        packet.age += 0.016 * speedMultiplier;
        packet.z += 0.01 * speedMultiplier * (1 + stream.branchLevel * 0.2);
        packet.rotation += packet.rotationSpeed;

        // Calculate position based on depth
        const flowSpeed = 200 * packet.z;
        const organicWave = Math.sin(packet.age * 2 + index) * 30 * packet.z;
        
        packet.x = this.vanishingPoint.x + Math.cos(stream.angle) * flowSpeed + Math.sin(packet.age * 3) * organicWave;
        packet.y = this.vanishingPoint.y + Math.sin(stream.angle) * flowSpeed + Math.cos(packet.age * 2.5) * organicWave;

        // Remove packets that are too far or off screen
        return packet.z < 1 && 
               packet.x > -100 && packet.x < width + 100 &&
               packet.y > -100 && packet.y < height + 100;
      });
    });

    // Render packets (back to front for proper depth)
    const allPackets = this.streams.flatMap(s => s.packets);
    allPackets.sort((a, b) => a.z - b.z);

    allPackets.forEach(packet => {
      const scale = 0.2 + packet.z * 0.8; // Perspective scaling
      const alpha = 0.3 + packet.z * 0.7; // Fade in as it approaches
      
      // Quantum fluctuations (Heisenberg uncertainty)
      const quantumUncertainty = Math.sin(this.time * 10 + packet.quantumPhase) * 3 * (1 - packet.z);
      const uncertaintyX = Math.cos(packet.age * packet.waveFrequency) * quantumUncertainty;
      const uncertaintyY = Math.sin(packet.age * packet.waveFrequency) * quantumUncertainty;

      this.ctx.save();
      this.ctx.translate(packet.x + uncertaintyX, packet.y + uncertaintyY);

      // Get color from palette
      const colorIndex = Math.floor(packet.streamIndex % colors.length);
      const baseColor = colors[colorIndex];

      const w = packet.width * scale;
      const h = packet.height * scale;

      // === QUANTUM FIELD VISUALIZATION ===
      
      // Generate/update particle cloud (probability cloud)
      if (packet.particleCloud.length < 20 && Math.random() < 0.3) {
        packet.particleCloud.push({
          dx: (Math.random() - 0.5) * w * 2,
          dy: (Math.random() - 0.5) * h * 2,
          life: 1,
        });
      }
      
      // Update and render probability cloud particles
      packet.particleCloud = packet.particleCloud.filter(p => {
        p.life -= 0.02;
        
        if (p.life > 0) {
          // Wave function collapse visualization
          const waveCollapse = Math.sin(this.time * 5 + p.dx + p.dy) * 0.5 + 0.5;
          this.ctx.globalAlpha = alpha * p.life * 0.4 * waveCollapse;
          this.ctx.fillStyle = baseColor;
          this.ctx.beginPath();
          this.ctx.arc(p.dx, p.dy, 1.5 * scale, 0, Math.PI * 2);
          this.ctx.fill();
          
          return true;
        }
        return false;
      });

      // Core energy center (wave-particle duality)
      this.ctx.globalAlpha = alpha * 0.8;
      
      // Energy glow (field strength)
      const energyGradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(w, h));
      energyGradient.addColorStop(0, this.addAlpha(baseColor, 0.8));
      energyGradient.addColorStop(0.3, this.addAlpha(baseColor, 0.4));
      energyGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      this.ctx.fillStyle = energyGradient;
      this.ctx.beginPath();
      this.ctx.arc(0, 0, Math.max(w, h), 0, Math.PI * 2);
      this.ctx.fill();

      // Electromagnetic wave visualization (sine wave emanating)
      this.ctx.globalAlpha = alpha * 0.6;
      this.ctx.strokeStyle = baseColor;
      this.ctx.lineWidth = 1.5 * scale;
      
      for (let wave = 0; wave < 3; wave++) {
        this.ctx.beginPath();
        const waveOffset = wave * Math.PI * 0.66;
        const waveRadius = (this.time * 50 + packet.age * 30 + waveOffset * 20) % (Math.max(w, h) * 2);
        
        // Draw expanding wave ring
        if (waveRadius > 0) {
          this.ctx.globalAlpha = alpha * (1 - waveRadius / (Math.max(w, h) * 2)) * 0.5;
          this.ctx.arc(0, 0, waveRadius, 0, Math.PI * 2);
          this.ctx.stroke();
        }
      }

      // Field lines (magnetic/electric field visualization)
      this.ctx.globalAlpha = alpha * 0.4;
      this.ctx.strokeStyle = baseColor;
      this.ctx.lineWidth = 0.8 * scale;
      
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 + this.time * 0.5;
        const fieldLength = (Math.sin(this.time * 2 + i) * 0.5 + 1) * h * 0.8;
        
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        
        // Curved field line
        const cpx = Math.cos(angle + 0.3) * fieldLength * 0.6;
        const cpy = Math.sin(angle + 0.3) * fieldLength * 0.6;
        const endx = Math.cos(angle) * fieldLength;
        const endy = Math.sin(angle) * fieldLength;
        
        this.ctx.quadraticCurveTo(cpx, cpy, endx, endy);
        this.ctx.stroke();
        
        // Field line particle at end
        this.ctx.globalAlpha = alpha * 0.8;
        this.ctx.fillStyle = baseColor;
        this.ctx.beginPath();
        this.ctx.arc(endx, endy, 2 * scale, 0, Math.PI * 2);
        this.ctx.fill();
      }

      // Central quantum node (bright energy core)
      this.ctx.shadowBlur = 20 * scale;
      this.ctx.shadowColor = baseColor;
      this.ctx.globalAlpha = alpha;
      this.ctx.fillStyle = baseColor;
      this.ctx.beginPath();
      this.ctx.arc(0, 0, 3 * scale, 0, Math.PI * 2);
      this.ctx.fill();
      
      // White hot center
      this.ctx.shadowBlur = 0;
      this.ctx.globalAlpha = alpha * 0.9;
      this.ctx.fillStyle = 'white';
      this.ctx.beginPath();
      this.ctx.arc(0, 0, 1.5 * scale, 0, Math.PI * 2);
      this.ctx.fill();

      // Energy discharge sparks (quantum jumps)
      if (Math.random() < 0.05) {
        const sparkAngle = Math.random() * Math.PI * 2;
        const sparkDist = Math.random() * Math.max(w, h) * 1.5;
        
        this.ctx.globalAlpha = alpha * 0.6;
        this.ctx.strokeStyle = baseColor;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(
          Math.cos(sparkAngle) * sparkDist,
          Math.sin(sparkAngle) * sparkDist
        );
        this.ctx.stroke();
      }

      this.ctx.restore();
    });

    // Draw quantum field lines (electromagnetic grid)
    this.ctx.globalAlpha = 0.05;
    
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const dist = Math.max(width, height);
      
      // Wave-like field lines
      this.ctx.strokeStyle = colors[i % colors.length] || '#00ffff';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(this.vanishingPoint.x, this.vanishingPoint.y);
      
      // Draw curved field line with quantum fluctuations
      const segments = 50;
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const r = dist * t;
        const waveOffset = Math.sin(t * 10 + this.time * 2) * 20;
        const x = this.vanishingPoint.x + Math.cos(angle) * r + Math.cos(angle + Math.PI / 2) * waveOffset;
        const y = this.vanishingPoint.y + Math.sin(angle) * r + Math.sin(angle + Math.PI / 2) * waveOffset;
        
        if (j === 0) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      }
      this.ctx.stroke();
    }

    // Quantum field potential rings (energy levels)
    for (let r = 50; r < Math.max(width, height); r += 80) {
      const energyLevel = r / 100;
      const oscillation = Math.sin(this.time * 2 + energyLevel) * 5;
      
      this.ctx.globalAlpha = 0.04;
      this.ctx.strokeStyle = colors[Math.floor(energyLevel) % colors.length] || '#00ffff';
      this.ctx.lineWidth = 1;
      
      // Draw wavy energy level ring
      this.ctx.beginPath();
      const segments = 60;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const radius = r + Math.sin(theta * 6 + this.time * 3) * oscillation;
        const x = this.vanishingPoint.x + Math.cos(theta) * radius;
        const y = this.vanishingPoint.y + Math.sin(theta) * radius;
        
        if (i === 0) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      }
      this.ctx.closePath();
      this.ctx.stroke();
    }

    this.ctx.restore();

    // Quantum foam/vacuum fluctuations (background noise)
    this.ctx.globalAlpha = 0.02;
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const flicker = Math.sin(this.time * 20 + i) * 0.5 + 0.5;
      
      if (flicker > 0.7) {
        this.ctx.fillStyle = colors[i % colors.length] || '#00ffff';
        this.ctx.beginPath();
        this.ctx.arc(x, y, 1, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }

    // Energy field distortion on shake (quantum decoherence)
    if (this.shakeIntensity > 5) {
      this.ctx.globalCompositeOperation = 'screen';
      
      // Multiple wave interference patterns
      for (let i = 0; i < 3; i++) {
        this.ctx.globalAlpha = 0.05;
        
        const waveGradient = this.ctx.createRadialGradient(
          this.vanishingPoint.x,
          this.vanishingPoint.y,
          0,
          this.vanishingPoint.x,
          this.vanishingPoint.y,
          Math.max(width, height) * (0.3 + i * 0.2)
        );
        
        const hue = (this.time * 100 + i * 120) % 360;
        waveGradient.addColorStop(0, `hsla(${hue}, 100%, 50%, 0.3)`);
        waveGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        this.ctx.fillStyle = waveGradient;
        this.ctx.fillRect(0, 0, width, height);
      }
      
      this.ctx.globalCompositeOperation = 'source-over';
    }

    // Helper function to render a singularity at a given position
    const renderSingularity = (
      x: number, 
      y: number, 
      colorIndex: number, 
      isActive: boolean,
      label: string
    ) => {
      const coreSize = 5 + Math.sin(this.time * 4) * 3;
      const singularityColor = colors[colorIndex] || '#00ffff';
      
      // Rotating energy shell
      for (let shell = 0; shell < 3; shell++) {
        const shellRadius = coreSize * (2 + shell);
        const shellAlpha = 0.3 - shell * 0.1;
        
        this.ctx.globalAlpha = shellAlpha;
        this.ctx.strokeStyle = singularityColor;
        this.ctx.lineWidth = 2;
        
        this.ctx.beginPath();
        this.ctx.arc(
          x,
          y,
          shellRadius,
          this.time * (1 + shell * 0.5),
          this.time * (1 + shell * 0.5) + Math.PI * 1.5
        );
        this.ctx.stroke();
      }
      
      // Core singularity glow
      const singularityGradient = this.ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        coreSize * 4
      );
      singularityGradient.addColorStop(0, this.addAlpha(singularityColor, 0.9));
      singularityGradient.addColorStop(0.5, this.addAlpha(singularityColor, 0.5));
      singularityGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      this.ctx.globalAlpha = 0.9;
      this.ctx.fillStyle = singularityGradient;
      this.ctx.beginPath();
      this.ctx.arc(x, y, coreSize * 4, 0, Math.PI * 2);
      this.ctx.fill();
      
      // White hot center
      this.ctx.globalAlpha = 1;
      this.ctx.fillStyle = 'white';
      this.ctx.shadowBlur = 15;
      this.ctx.shadowColor = singularityColor;
      this.ctx.beginPath();
      this.ctx.arc(x, y, coreSize, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.shadowBlur = 0;

      // Accumulation effects (quantum energy buildup) - ONLY if there's accumulated energy
      if (this.clapAccumulation > 0.5) {
        const energyIntensity = this.clapAccumulation / 10;
        
        // Expanding energy waves
        for (let i = 0; i < 5; i++) {
          const wavePhase = (this.time * 3 + i * 0.5) % 2;
          const waveRadius = 20 + wavePhase * 100 + this.clapAccumulation * 20;
          const waveAlpha = (1 - wavePhase / 2) * energyIntensity;
          
          this.ctx.globalAlpha = waveAlpha * 0.5;
          this.ctx.strokeStyle = colors[i % colors.length] || '#00ffff';
          this.ctx.lineWidth = 3;
          this.ctx.beginPath();
          this.ctx.arc(
            x,
            y,
            waveRadius,
            0,
            Math.PI * 2
          );
          this.ctx.stroke();
        }
        
        // Particle explosion (quantum tunneling)
        for (let i = 0; i < Math.floor(this.clapAccumulation * 5); i++) {
          const particleAngle = (i / (this.clapAccumulation * 5)) * Math.PI * 2;
          const particleDist = 30 + Math.sin(this.time * 5 + i) * 20;
          const px = x + Math.cos(particleAngle + this.time * 2) * particleDist;
          const py = y + Math.sin(particleAngle + this.time * 2) * particleDist;
          
          this.ctx.globalAlpha = energyIntensity * 0.7;
          this.ctx.fillStyle = colors[i % colors.length] || '#00ffff';
          this.ctx.beginPath();
          this.ctx.arc(px, py, 2, 0, Math.PI * 2);
          this.ctx.fill();
        }
      }

      // Data typography overlay in the center (only if active)
      if (isActive) {
        this.ctx.globalAlpha = 1;
        this.ctx.fillStyle = 'white';
        this.ctx.font = '12px monospace';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
        
        // Line 1: X - Y coordinates
        const coordText = `X:${Math.floor(x)} Y:${Math.floor(y)}`;
        this.ctx.fillText(coordText, x, y - 8);
        
        // Line 2: Date - Time
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        const timeStr = now.toLocaleTimeString('en-US', { hour12: false });
        const dateTimeText = `${dateStr} - ${timeStr}`;
        this.ctx.fillText(dateTimeText, x, y + 8);
        
        this.ctx.shadowBlur = 0;
      }
    };

    // Render LEFT HAND singularity
    renderSingularity(
      this.vanishingPoint.x,
      this.vanishingPoint.y,
      0,
      !!leftHand,
      'L'
    );

    // Render RIGHT HAND singularity (only if right hand exists)
    if (rightHand) {
      renderSingularity(
        this.vanishingPointRight.x,
        this.vanishingPointRight.y,
        1,
        true,
        'R'
      );
    }
  }

  private spawnFractalBranch() {
    // Create new branch streams between existing ones
    if (this.streams.length > 30) return; // Limit total streams

    const baseStream = this.streams[Math.floor(Math.random() * Math.min(6, this.streams.length))];
    const branchAngle = baseStream.angle + (Math.random() - 0.5) * 0.8;
    
    this.streams.push({
      angle: branchAngle,
      speed: 1.2,
      packets: [],
      branchLevel: (baseStream.branchLevel || 0) + 1,
      parentAngle: baseStream.angle,
    });
  }

  private drawHexagon(x: number, y: number, size: number) {
    this.ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const hx = x + size * Math.cos(angle);
      const hy = y + size * Math.sin(angle);
      if (i === 0) {
        this.ctx.moveTo(hx, hy);
      } else {
        this.ctx.lineTo(hx, hy);
      }
    }
    this.ctx.closePath();
  }

  private addAlpha(color: string, alpha: number): string {
    // Simple color to rgba converter
    if (color.startsWith('#')) {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return color;
  }
}