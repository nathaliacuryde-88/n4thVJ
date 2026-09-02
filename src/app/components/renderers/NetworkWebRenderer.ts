import { HandData, AudioData } from '../../App';
import * as THREE from 'three';
import { disposeThree } from './disposeThree';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * NETWORK CUBE RENDERER (Key 9 or N)
 * ═══════════════════════════════════════════════════════════════════════════
 * 3D sparse cubic constellation using Three.js.
 * 
 * INTERACTIONS:
 * - Gesture Gradient: Pinch -> 2 Fingers -> 5 Fingers -> Clap
 * - Controls: Amount of Nodes, Perspective/Rotation, Size
 * 
 * MAPPING:
 * - Pinch (0-20%): Small, tight cube, few nodes (skeleton).
 * - 2 Fingers (20-80%): Medium cube, partial fill.
 * - 5 Fingers (80-100%): Large expanded cube, dense network.
 * - Clap: Explosion (Max size, Max nodes).
 * 
 * - Hand Position: Rotates the cube view.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export class NetworkWebRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  
  // Three.js components
  private threeCanvas: HTMLCanvasElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private linesMesh: THREE.LineSegments;
  private pointsMesh: THREE.Points;
  
  // Geometry Data
  private gridPoints: Float32Array; // Master positions
  private edges: Int32Array; // Pairs of indices [a, b, a, b...]
  private originalToSortedMap: Int32Array; // Maps original grid index to current sorted index
  
  // State
  private time = 0;
  private interactionLevel = 0.5; 
  private handX = 0.5;
  private handY = 0.5;
  
  // Configuration
  private readonly GRID_SIZE = 10; // 10x10x10 = 1000 points
  private readonly SPACING = 1.5;
  private readonly TOTAL_POINTS = 1000;
  
  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    const originalWarn = console.warn;
    console.warn = (...args) => {
      if (typeof args[0] === 'string' && args[0].includes('Multiple instances')) return;
      originalWarn.apply(console, args);
    };
    
    this.threeCanvas = document.createElement('canvas');
    this.threeCanvas.width = canvas.width;
    this.threeCanvas.height = canvas.height;
    
    this.initThreeJS();
    console.log('🕸️ NetworkCubeRenderer initialized');
    
    console.warn = originalWarn;
  }

  private initThreeJS() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x000000, 0.06);

    this.camera = new THREE.PerspectiveCamera(75, this.canvas.width / this.canvas.height, 0.1, 1000);
    this.camera.position.z = 20;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.threeCanvas,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(this.canvas.width, this.canvas.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 1. Generate Grid Points & Edges
    const count = this.GRID_SIZE * this.GRID_SIZE * this.GRID_SIZE;
    this.gridPoints = new Float32Array(count * 3);
    
    const tempEdges: number[] = [];
    const offset = (this.GRID_SIZE - 1) * this.SPACING * 0.5;
    
    // Helper to get index
    const getIdx = (x: number, y: number, z: number) => x + y * this.GRID_SIZE + z * this.GRID_SIZE * this.GRID_SIZE;
    
    let ptr = 0;
    for (let z = 0; z < this.GRID_SIZE; z++) {
      for (let y = 0; y < this.GRID_SIZE; y++) {
        for (let x = 0; x < this.GRID_SIZE; x++) {
          // Position
          const jitter = 0.3;
          this.gridPoints[ptr++] = (x * this.SPACING - offset) + (Math.random() - 0.5) * jitter;
          this.gridPoints[ptr++] = (y * this.SPACING - offset) + (Math.random() - 0.5) * jitter;
          this.gridPoints[ptr++] = (z * this.SPACING - offset) + (Math.random() - 0.5) * jitter;
          
          const current = getIdx(x,y,z);
          
          // Connections (Forward only to avoid duplicates)
          // Connect to X+1
          if (x < this.GRID_SIZE - 1) tempEdges.push(current, getIdx(x+1, y, z));
          // Connect to Y+1
          if (y < this.GRID_SIZE - 1) tempEdges.push(current, getIdx(x, y+1, z));
          // Connect to Z+1
          if (z < this.GRID_SIZE - 1) tempEdges.push(current, getIdx(x, y, z+1));
          
          // Optional: Diagonals for "Complex Web" feel (randomly)
          if (Math.random() > 0.8) {
             if (x < this.GRID_SIZE - 1 && y < this.GRID_SIZE - 1) 
               tempEdges.push(current, getIdx(x+1, y+1, z));
          }
        }
      }
    }
    
    this.edges = new Int32Array(tempEdges);

    // 2. Shuffle Logic for "Gradual Fill"
    // We create a random permutation of indices
    const indices = new Int32Array(count);
    for(let i=0; i<count; i++) indices[i] = i;
    
    // Shuffle
    for(let i=count-1; i>0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    
    // Build the sorted buffer and the map
    const sortedPositions = new Float32Array(count * 3);
    this.originalToSortedMap = new Int32Array(count);
    
    for(let i=0; i<count; i++) {
      const originalIdx = indices[i];
      this.originalToSortedMap[originalIdx] = i; // Original ID maps to slot 'i'
      
      sortedPositions[i*3] = this.gridPoints[originalIdx*3];
      sortedPositions[i*3+1] = this.gridPoints[originalIdx*3+1];
      sortedPositions[i*3+2] = this.gridPoints[originalIdx*3+2];
    }

    // 3. Create Points Mesh
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(sortedPositions, 3));
    
    const pointsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true
    });
    this.pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    this.scene.add(this.pointsMesh);

    // 4. Create Lines Mesh
    const linesGeo = new THREE.BufferGeometry();
    // Buffer for maximum possible lines
    const maxLinesPts = this.edges.length * 3; // 3 coords per point
    const linesPos = new Float32Array(maxLinesPts);
    linesGeo.setAttribute('position', new THREE.BufferAttribute(linesPos, 3));
    
    const linesMat = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending
    });
    
    this.linesMesh = new THREE.LineSegments(linesGeo, linesMat);
    this.linesMesh.frustumCulled = false;
    this.scene.add(this.linesMesh);
  }

  private updateLogic(handData: HandData, audioData?: AudioData) {
    // 1. Determine Interaction Level
    let target = 0.0;
    
    const hand = handData.left || handData.right;
    if (hand) {
      
      // Hand Position -> Rotation
      this.handX += (hand.position.x - this.handX) * 0.1;
      this.handY += (hand.position.y - this.handY) * 0.1;

      if (handData.clapping) {
        target = 1.2; // Overdrive
      } else if (hand.gesture === 'pinch') {
        target = 0.05; // Minimal (Pinch)
      } else {
        // Fingers 0-5 mapped to 0.2 - 1.0
        const fingers = hand.fingerCount || 0;
        target = 0.2 + (fingers / 5) * 0.8;
      }
    } else {
      // Idle
      this.handX += (0.5 - this.handX) * 0.05;
      this.handY += (0.5 - this.handY) * 0.05;
      target = 0.3 + Math.sin(this.time * 0.5) * 0.1;
    }

    this.interactionLevel += (target - this.interactionLevel) * 0.08;
    
    // Audio Modifiers
    const bass = audioData ? audioData.bass : 0;
    const high = audioData ? audioData.high : 0;
    
    const effectiveLevel = Math.max(0, Math.min(1.5, this.interactionLevel + bass * 0.3));

    // 2. Calculate Active Nodes
    const totalPoints = this.pointsMesh.geometry.attributes.position.count;
    // Map 0-1 to 50-Total
    const minPoints = 50;
    const activeCount = Math.floor(minPoints + (effectiveLevel * (totalPoints - minPoints)));
    
    // Set Points Range
    this.pointsMesh.geometry.setDrawRange(0, activeCount);
    
    // 3. Rebuild Lines
    // We only show edges where BOTH connected points are active
    // This maintains the cubic structure as it fills in
    const linePositions = (this.linesMesh.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
    let linePtr = 0;
    
    // Traverse all potential edges
    for (let i = 0; i < this.edges.length; i+=2) {
      const idxA = this.edges[i];
      const idxB = this.edges[i+1];
      
      const sortedA = this.originalToSortedMap[idxA];
      const sortedB = this.originalToSortedMap[idxB];
      
      // Both points must be active
      if (sortedA < activeCount && sortedB < activeCount) {
        const pA = idxA * 3; // Coordinates in original grid
        const pB = idxB * 3;
        
        linePositions[linePtr++] = this.gridPoints[pA];
        linePositions[linePtr++] = this.gridPoints[pA+1];
        linePositions[linePtr++] = this.gridPoints[pA+2];
        
        linePositions[linePtr++] = this.gridPoints[pB];
        linePositions[linePtr++] = this.gridPoints[pB+1];
        linePositions[linePtr++] = this.gridPoints[pB+2];
      }
    }
    
    this.linesMesh.geometry.setDrawRange(0, linePtr / 3);
    this.linesMesh.geometry.attributes.position.needsUpdate = true;
    
    // 4. Scale & Perspective
    // Pinch = Small, Open = Big
    const scale = 0.6 + effectiveLevel * 0.8;
    
    this.scene.rotation.y += 0.002 + (effectiveLevel * 0.005);
    
    // Hand Tilt
    const tiltX = (this.handY - 0.5) * 1.5;
    const tiltZ = (this.handX - 0.5) * 1.5;
    
    this.scene.rotation.x += (tiltX - this.scene.rotation.x) * 0.1;
    this.scene.rotation.z += (tiltZ - this.scene.rotation.z) * 0.1;
    
    // Scale group
    this.pointsMesh.scale.setScalar(scale);
    this.linesMesh.scale.setScalar(scale);
    
    // High freq jitter (Modify point size)
    const pointsMat = this.pointsMesh.material as THREE.PointsMaterial;
    pointsMat.size = 0.15 + high * 0.1;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    this.time += 0.02;
    
    // Resize
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

    this.updateLogic(handData, audioData);
    
    // Colors
    const primary = new THREE.Color(colors[0] || '#ffffff');
    const secondary = new THREE.Color(colors[1] || '#888888');
    
    (this.pointsMesh.material as THREE.PointsMaterial).color.lerp(primary, 0.1);
    (this.linesMesh.material as THREE.LineBasicMaterial).color.lerp(secondary, 0.1);

    this.renderer.render(this.scene, this.camera);
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.threeCanvas, 0, 0, this.canvas.width, this.canvas.height);
  }

  destroy() {
    disposeThree(this.scene, this.renderer);
  }
}
