import { HandData, AudioData } from '../../App';
import * as THREE from 'three';
import { disposeThree } from './disposeThree';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ELASTIC NET RENDERER (Key 0 in 3D)
 * ═══════════════════════════════════════════════════════════════════════════
 * 3D elastic net simulation using Three.js.
 * Inspired by thread art/neural networks.
 * 
 * INTERACTIONS:
 * - Hand Position: Pushes/Pulls the net (Repulsion/Attraction)
 * - Pinch: "Freezes" or "Tensions" the net, making it rigid (Black Hole effect)
 * - 5 Fingers: Expands the net
 * - Audio: Pulses the nodes and vibrates the connections
 * ═══════════════════════════════════════════════════════════════════════════
 */

export class ElasticNetRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  
  // Three.js components
  private threeCanvas: HTMLCanvasElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private mesh: THREE.Mesh;
  private points: THREE.Points;
  
  // Geometry State
  private originalPositions: Float32Array;
  private currentPositions: Float32Array;
  private velocities: Float32Array;
  
  // State
  private time = 0;
  private handX = 0.5;
  private handY = 0.5;
  private isHandPresent = false;
  private pinchStrength = 0; // 0 to 1
  
  // Configuration
  private readonly ROWS = 30;
  private readonly COLS = 30;
  private readonly SIZE = 12;
  
  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    // Suppress Three.js warnings
    const originalWarn = console.warn;
    console.warn = (...args) => {
      if (typeof args[0] === 'string' && args[0].includes('Multiple instances')) return;
      originalWarn.apply(console, args);
    };
    
    // Create offscreen Three.js canvas
    this.threeCanvas = document.createElement('canvas');
    this.threeCanvas.width = canvas.width;
    this.threeCanvas.height = canvas.height;
    
    this.initThreeJS();
    console.log('🕸️ ElasticNetRenderer initialized');
    
    console.warn = originalWarn;
  }

  private initThreeJS() {
    this.scene = new THREE.Scene();
    // Dark fog for depth
    this.scene.fog = new THREE.FogExp2(0x000000, 0.08);

    this.camera = new THREE.PerspectiveCamera(75, this.canvas.width / this.canvas.height, 0.1, 1000);
    this.camera.position.z = 8;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.threeCanvas,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(this.canvas.width, this.canvas.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create the Net (Plane Geometry)
    // We use a PlaneGeometry because it provides a nice grid structure
    const geometry = new THREE.PlaneGeometry(this.SIZE, this.SIZE, this.COLS, this.ROWS);
    
    // Store original positions for spring physics
    const posAttribute = geometry.attributes.position;
    const count = posAttribute.count;
    
    this.originalPositions = new Float32Array(count * 3);
    this.currentPositions = new Float32Array(count * 3);
    this.velocities = new Float32Array(count * 3); // For physics
    
    for (let i = 0; i < count * 3; i++) {
      this.originalPositions[i] = posAttribute.array[i];
      this.currentPositions[i] = posAttribute.array[i];
      this.velocities[i] = 0;
    }

    // Material for the connections (Wireframe)
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    // Create Nodes (Points) at vertices
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15,
      transparent: true,
      opacity: 0.8
    });
    
    this.points = new THREE.Points(geometry, pointsMaterial);
    this.scene.add(this.points);
  }

  private updatePhysics(handData: HandData, audioData?: AudioData) {
    const positions = this.mesh.geometry.attributes.position;
    const count = positions.count;
    
    // Audio values
    const bass = audioData ? audioData.bass : 0;
    const high = audioData ? audioData.high : 0;
    const mid = audioData ? audioData.mid : 0;
    
    // Hand Interaction
    let targetX = 0;
    let targetY = 0;
    let force = 0;
    
    const hand = handData.left || handData.right;
    if (hand) {
      this.isHandPresent = true;
      // Map screen coords (0-1) to world coords approx (-6 to 6)
      targetX = (hand.position.x - 0.5) * 12; 
      targetY = -(hand.position.y - 0.5) * 10; // Invert Y
      
      // Gesture Logic
      if (hand.gesture === 'pinch') {
        // Pinch: Tension / Pull tight
        this.pinchStrength += (1 - this.pinchStrength) * 0.1;
        force = -25; // Strong Attraction (implosion)
      } else if ((hand.fingerCount || 5) >= 5) {
        // Open Hand: Repulsion / Expand
        this.pinchStrength += (0 - this.pinchStrength) * 0.1;
        force = 15; // Repulsion
      } else {
        // Normal: Gentle flow
        this.pinchStrength += (0 - this.pinchStrength) * 0.1;
        force = 5;
      }
    } else {
      this.isHandPresent = false;
      this.pinchStrength += (0 - this.pinchStrength) * 0.1;
    }

    // Audio Force
    const audioForce = bass * 2.0; // Bass pushes grid out
    const jitter = high * 0.05; // Highs shake grid

    // Physics Loop
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;
      
      const ox = this.originalPositions[ix];
      const oy = this.originalPositions[iy];
      const oz = this.originalPositions[iz]; // Usually 0 for plane
      
      let cx = this.currentPositions[ix];
      let cy = this.currentPositions[iy];
      let cz = this.currentPositions[iz];
      
      // 1. Spring force back to original position
      // Stiffness increases with pinch (tension)
      const k = 0.05 + (this.pinchStrength * 0.2); 
      const ax = (ox - cx) * k;
      const ay = (oy - cy) * k;
      const az = (oz - cz) * k;
      
      this.velocities[ix] += ax;
      this.velocities[iy] += ay;
      this.velocities[iz] += az;
      
      // 2. Hand Interaction Force
      if (this.isHandPresent) {
        const dx = cx - targetX;
        const dy = cy - targetY;
        const dz = cz; // Camera is at Z=8, Hand is approx Z=0 plane
        
        const distSq = dx*dx + dy*dy + dz*dz;
        const dist = Math.sqrt(distSq);
        
        // Interaction Radius
        const radius = 4.0 + (bass * 2); // Audio expands radius
        
        if (dist < radius) {
          // Calculate falloff
          const falloff = (1 - dist / radius);
          
          // Direction vector
          const dirX = dx / dist;
          const dirY = dy / dist;
          const dirZ = dz / dist;
          
          // Apply force
          const totalForce = force * falloff * 0.2;
          
          this.velocities[ix] += dirX * totalForce;
          this.velocities[iy] += dirY * totalForce;
          this.velocities[iz] += dirZ * totalForce;
        }
      }
      
      // 3. Noise / Drift
      const time = this.time * (1 + mid); // Mid freq speeds up time
      const noiseX = Math.sin(iy * 0.1 + time) * 0.02;
      const noiseY = Math.cos(ix * 0.1 + time) * 0.02;
      const noiseZ = Math.sin(ix * 0.1 + iy * 0.1 + time) * 0.02;
      
      this.velocities[ix] += noiseX;
      this.velocities[iy] += noiseY;
      this.velocities[iz] += noiseZ;

      // 4. Audio Jitter (Highs)
      if (high > 0.1) {
        this.velocities[ix] += (Math.random() - 0.5) * jitter;
        this.velocities[iy] += (Math.random() - 0.5) * jitter;
        this.velocities[iz] += (Math.random() - 0.5) * jitter;
      }

      // 5. Damping (Friction)
      // Less friction when pinched (more vibration)
      const damping = 0.9 - (this.pinchStrength * 0.05);
      this.velocities[ix] *= damping;
      this.velocities[iy] *= damping;
      this.velocities[iz] *= damping;
      
      // Update positions
      this.currentPositions[ix] += this.velocities[ix];
      this.currentPositions[iy] += this.velocities[iy];
      this.currentPositions[iz] += this.velocities[iz];
      
      // Apply to Geometry
      positions.setXYZ(i, this.currentPositions[ix], this.currentPositions[iy], this.currentPositions[iz]);
    }
    
    positions.needsUpdate = true;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    this.time += 0.01;
    
    // Resize handling
    const pixelRatio = this.renderer.getPixelRatio();
    const expectedWidth = Math.floor(this.canvas.width * pixelRatio);
    const expectedHeight = Math.floor(this.canvas.height * pixelRatio);

    if (this.threeCanvas.width !== expectedWidth || this.threeCanvas.height !== expectedHeight) {
      this.renderer.setSize(this.canvas.width, this.canvas.height);
      this.threeCanvas.width = expectedWidth;
      this.threeCanvas.height = expectedHeight;
      this.camera.aspect = this.canvas.width / this.canvas.height;
      this.camera.updateProjectionMatrix();
    }

    // Update Physics
    this.updatePhysics(handData, audioData);
    
    // Visual Updates (Colors)
    const primaryColor = new THREE.Color(colors[0] || '#00ffff');
    const secondaryColor = new THREE.Color(colors[1] || '#ff00ff');
    
    // Mesh Material Update
    const meshMat = this.mesh.material as THREE.MeshBasicMaterial;
    meshMat.color.lerp(primaryColor, 0.1);
    meshMat.opacity = 0.2 + (audioData?.bass || 0) * 0.3; // Pulse opacity with bass
    
    // Points Material Update
    const pointsMat = this.points.material as THREE.PointsMaterial;
    pointsMat.color.lerp(secondaryColor, 0.1);
    // Points get bigger with high frequencies
    pointsMat.size = 0.1 + (audioData?.high || 0) * 0.2;

    // Camera gentle movement
    this.camera.position.x = Math.sin(this.time * 0.2) * 0.5;
    this.camera.position.y = Math.cos(this.time * 0.2) * 0.5;
    this.camera.lookAt(0,0,0);

    // Render Three.js
    this.renderer.render(this.scene, this.camera);
    
    // Copy to main canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(
      this.threeCanvas, 
      0, 0, 
      this.canvas.width, this.canvas.height
    );
  }

  destroy() {
    disposeThree(this.scene, this.renderer);
  }
}
