import { HandData } from '../../App';
import * as THREE from 'three';
import { disposeThree } from './disposeThree';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CUBE WALL RENDERER (Key W)
 * ═══════════════════════════════════════════════════════════════════════════
 * 3D grid wall of cubes using Three.js InstancedMesh for performance.
 * Cubes displace in waves based on hand proximity.
 * 
 * INTERACTIONS:
 * - Hand Position: Creates displacement waves around hand(s)
 * - Finger Count: Controls wave speed/intensity (pinch=frozen, 5 fingers=fast)
 * - Hands Together: Intense ripple explosion effect
 * - Color modes: Responds to 3-mode ColorController
 * 
 * QUICK TWEAKS:
 * - Line 50: Grid dimensions (width x height)
 * - Line 51: Cube spacing
 * - Line 52: Wave amplitude (displacement strength)
 * ═══════════════════════════════════════════════════════════════════════════
 */

export class CubeWallRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  
  // Three.js components
  private threeCanvas: HTMLCanvasElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private instancedMesh: THREE.InstancedMesh;
  private gridWidth: number;
  private gridHeight: number;
  private cubePositions: THREE.Vector3[] = [];
  
  // State
  private time = 0;
  private hands: Array<{ x: number; y: number; intensity: number; fingerCount: number }> = [];
  private speedMultiplier = 1.0;
  private handsTogetherBoost = 1.0;
  private currentFingerMode: 'pinch' | 'slow' | 'fast' = 'slow'; // Track current mode for visual effects
  
  // ═════════════════════════════════════════════════════════════════════════
  // CONFIGURATION
  // ═════════════════════════════════════════════════════════════════════════
  private readonly GRID_WIDTH = 120; // TWEAK: Increased from 80 to fill entire screen
  private readonly GRID_HEIGHT = 90; // TWEAK: Increased from 60 to fill entire screen
  private readonly SPACING = 0.12; // TWEAK: 0.1-0.3 (space between cubes) - INCREASED for more spacing
  private readonly WAVE_AMPLITUDE = 2.5; // TWEAK: 1.0-5.0 (displacement strength)
  private readonly CUBE_SIZE = 0.03; // TWEAK: 0.05-0.15 (size of each cube) - REDUCED for smaller cubes

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    // Suppress Three.js multiple instances warning
    const originalWarn = console.warn;
    console.warn = (...args) => {
      if (typeof args[0] === 'string' && args[0].includes('Multiple instances of Three')) {
        return;
      }
      originalWarn.apply(console, args);
    };
    
    // Create offscreen Three.js canvas
    this.threeCanvas = document.createElement('canvas');
    this.threeCanvas.width = canvas.width;
    this.threeCanvas.height = canvas.height;
    
    this.gridWidth = this.GRID_WIDTH;
    this.gridHeight = this.GRID_HEIGHT;
    
    this.initThreeJS();
    console.log('🧊 CubeWallRenderer initialized with Three.js');
    
    console.warn = originalWarn;
  }

  private initThreeJS() {
    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    // Camera - positioned to look at the grid
    this.camera = new THREE.PerspectiveCamera(
      60,
      this.canvas.width / this.canvas.height,
      0.1,
      100
    );
    this.camera.position.set(0, 0, 4.5); // Moved closer (was 6) to fill screen edges with larger grid
    this.camera.lookAt(0, 0, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.threeCanvas,
      antialias: true,
      alpha: false
    });
    this.renderer.setSize(this.canvas.width, this.canvas.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lighting - Enhanced for better face definition
    const ambientLight = new THREE.AmbientLight(0x202020, 0.3); // Reduced ambient for more contrast
    this.scene.add(ambientLight);

    // Key light (front-top)
    const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
    keyLight.position.set(3, 5, 8);
    this.scene.add(keyLight);

    // Fill light (opposite side)
    const fillLight = new THREE.DirectionalLight(0x4444ff, 0.4);
    fillLight.position.set(-5, -3, 5);
    this.scene.add(fillLight);

    // Accent light (colored highlights)
    const accentLight = new THREE.PointLight(0x00ffcc, 0.6, 50);
    accentLight.position.set(5, 5, 5);
    this.scene.add(accentLight);

    // Create instanced mesh for efficiency
    const geometry = new THREE.BoxGeometry(this.CUBE_SIZE, this.CUBE_SIZE, this.CUBE_SIZE);
    
    // Use Standard material for better PBR shading and face definition
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
      emissive: 0x002222,
      emissiveIntensity: 0.2,
      metalness: 0.6,
      roughness: 0.4,
      flatShading: true // This makes faces distinct with sharp edges!
    });

    const count = this.gridWidth * this.gridHeight;
    this.instancedMesh = new THREE.InstancedMesh(geometry, material, count);
    this.scene.add(this.instancedMesh);

    // Initialize cube positions in grid
    const dummy = new THREE.Object3D();
    let index = 0;
    
    for (let y = 0; y < this.gridHeight; y++) {
      for (let x = 0; x < this.gridWidth; x++) {
        const posX = (x - this.gridWidth / 2) * this.SPACING;
        const posY = (y - this.gridHeight / 2) * this.SPACING;
        const posZ = 0;
        
        this.cubePositions.push(new THREE.Vector3(posX, posY, posZ));
        
        dummy.position.set(posX, posY, posZ);
        dummy.updateMatrix();
        this.instancedMesh.setMatrixAt(index, dummy.matrix);
        index++;
      }
    }
    
    this.instancedMesh.instanceMatrix.needsUpdate = true;
  }

  private getFingerSpeedMultiplier(hand: HandData['left'] | HandData['right']): number {
    if (!hand || !hand.fingerCount) return 0.0; // No hand = no movement
    
    const fingers = hand.fingerCount;
    
    // ═══════════════════════════════════════════════════════════════════════
    // 4 COMMANDS SYSTEM - DRAMATICALLY DIFFERENT SPEEDS:
    // ═══════════════════════════════════════════════════════════════════════
    // PINCH (1 finger) = 0.05x (VERY SLOW - almost frozen)
    if (fingers <= 1) return 0.05;
    
    // 2 FINGERS = 0.3x (SLOW - noticeable but gentle)
    if (fingers === 2) return 0.3;
    
    // 5 FINGERS (open hand) = 1.5x (FAST - obvious rapid movement)
    if (fingers >= 5) return 1.5;
    
    // 3-4 fingers = interpolate between slow (0.3) and fast (1.5)
    return 0.3 + ((fingers - 2) / 3) * 1.2;
  }

  private updateHandData(handData: HandData) {
    this.hands = [];
    
    // Get speed multiplier from finger count
    let maxSpeed = 1.0;
    
    if (handData.left) {
      const leftSpeed = this.getFingerSpeedMultiplier(handData.left);
      maxSpeed = Math.max(maxSpeed, leftSpeed);
      
      this.hands.push({
        x: handData.left.position.x,
        y: 1.0 - handData.left.position.y, // Flip Y
        intensity: 1.0,
        fingerCount: handData.left.fingerCount || 0
      });
    }
    
    if (handData.right) {
      const rightSpeed = this.getFingerSpeedMultiplier(handData.right);
      maxSpeed = Math.max(maxSpeed, rightSpeed);
      
      this.hands.push({
        x: handData.right.position.x,
        y: 1.0 - handData.right.position.y, // Flip Y
        intensity: 1.0,
        fingerCount: handData.right.fingerCount || 0
      });
    }
    
    // Smooth speed transition
    this.speedMultiplier += (maxSpeed - this.speedMultiplier) * 0.1;
    
    // Hands together = boost effect
    const targetBoost = (handData.clapping || handData.distanceBetweenHands && handData.distanceBetweenHands < 0.15) ? 3.0 : 1.0;
    this.handsTogetherBoost += (targetBoost - this.handsTogetherBoost) * 0.15;
    
    // Update current finger mode for visual effects
    if (this.hands.length > 0) {
      const totalFingers = this.hands.reduce((sum, hand) => sum + hand.fingerCount, 0);
      if (totalFingers <= 1) {
        this.currentFingerMode = 'pinch';
      } else if (totalFingers >= 5) {
        this.currentFingerMode = 'fast';
      } else {
        this.currentFingerMode = 'slow';
      }
    }
  }

  private calculateDisplacement(x: number, y: number): number {
    let displacement = 0;
    
    // Base wave animation (subtle)
    const baseWave = Math.sin(x * 8 + this.time) * Math.cos(y * 8 + this.time) * 0.05;
    displacement += baseWave;
    
    // Hand proximity waves
    for (const hand of this.hands) {
      // Convert hand position (0-1) to grid coordinates with better mapping
      const handX = (hand.x - 0.5) * this.gridWidth * this.SPACING * 0.8; // REDUCED multiplier for tighter range
      const handY = (hand.y - 0.5) * this.gridHeight * this.SPACING * 0.8; // REDUCED multiplier
      
      // Distance from cube to hand
      const dx = x - handX;
      const dy = y - handY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Create ripple effect with better falloff
      const ripple = Math.sin(distance * 6 - this.time * 4) / (distance * 0.5 + 0.5); // Better visibility
      displacement += ripple * hand.intensity * this.WAVE_AMPLITUDE;
    }
    
    // Apply speed and boost multipliers
    displacement *= this.speedMultiplier * this.handsTogetherBoost;
    
    return displacement;
  }

  render(handData: HandData, colors: string[]) {
    this.time += 0.016 * this.speedMultiplier; // ~60fps base
    
    // Update hand tracking state
    this.updateHandData(handData);
    
    // Update canvas size if needed
    const pixelRatio = this.renderer.getPixelRatio();
    const expectedWidth = Math.floor(this.canvas.width * pixelRatio);
    const expectedHeight = Math.floor(this.canvas.height * pixelRatio);

    // Check against expected physical size, not logical size
    if (this.threeCanvas.width !== expectedWidth || this.threeCanvas.height !== expectedHeight) {
      
      // Update the size using logical units (Three.js will apply the ratio internally)
      this.renderer.setSize(this.canvas.width, this.canvas.height);
      
      // Update manual canvas dimension sync (important if setSize doesn't update style)
      this.threeCanvas.width = expectedWidth;
      this.threeCanvas.height = expectedHeight;
      
      this.camera.aspect = this.canvas.width / this.canvas.height;
      this.camera.updateProjectionMatrix();
    }
    
    // ═════════════════════════════════════════════════════════════════════════
    // UPDATE CUBE POSITIONS
    // ═════════════════════════════════════════════════════════════════════════
    const dummy = new THREE.Object3D();
    let index = 0;
    
    // ═══════════════════════════════════════════════════════════════════════
    // MODE-SPECIFIC VISUAL EFFECTS
    // ═══════════════════════════════════════════════════════════════════════
    let rotationMultiplier = 0.5;
    let scaleMultiplier = 0.2;
    
    if (this.currentFingerMode === 'pinch') {
      // PINCH MODE: Very subtle, almost frozen
      rotationMultiplier = 0.02; // Extremely subtle rotation
      scaleMultiplier = 0.01; // Barely perceptible scale change
    } else if (this.currentFingerMode === 'slow') {
      // SLOW MODE (2 fingers): Medium rotation, noticeable scale
      rotationMultiplier = 0.5; // Moderate rotation
      scaleMultiplier = 0.25; // Clear scale changes
    } else if (this.currentFingerMode === 'fast') {
      // FAST MODE (5 fingers): Smooth and fast but not chaotic
      rotationMultiplier = 0.9; // Smooth spinning
      scaleMultiplier = 0.4; // Noticeable but controlled scale
    }
    
    for (let y = 0; y < this.gridHeight; y++) {
      for (let x = 0; x < this.gridWidth; x++) {
        const basePos = this.cubePositions[index];
        const displacement = this.calculateDisplacement(basePos.x, basePos.y);
        
        dummy.position.set(
          basePos.x,
          basePos.y,
          basePos.z + displacement
        );
        
        // MODE-DEPENDENT ROTATION - changes dramatically per mode
        dummy.rotation.x = displacement * rotationMultiplier;
        dummy.rotation.y = displacement * rotationMultiplier * 0.7;
        dummy.rotation.z = displacement * rotationMultiplier * 0.4;
        
        // MODE-DEPENDENT SCALE - changes dramatically per mode
        const scale = 1.0 + Math.abs(displacement) * scaleMultiplier;
        dummy.scale.set(scale, scale, scale);
        
        dummy.updateMatrix();
        this.instancedMesh.setMatrixAt(index, dummy.matrix);
        index++;
      }
    }
    
    this.instancedMesh.instanceMatrix.needsUpdate = true;
    
    // ═════════════════════════════════════════════════════════════════════════
    // UPDATE COLORS
    // ═════════════════════════════════════════════════════════════════════════
    if (colors && colors.length > 0) {
      try {
        const material = this.instancedMesh.material as THREE.MeshStandardMaterial;
        const mainColor = new THREE.Color(colors[0]);
        material.color = mainColor;
        material.emissive = new THREE.Color(colors[0]).multiplyScalar(0.3);
        
        // If we have multiple colors, update the lights to use them
        if (colors.length > 1) {
          const fillLight = this.scene.children.find(child => 
            child instanceof THREE.DirectionalLight && child.position.x < 0
          ) as THREE.DirectionalLight;
          const accentLight = this.scene.children.find(child => 
            child instanceof THREE.PointLight
          ) as THREE.PointLight;
          
          if (fillLight) {
            fillLight.color = new THREE.Color(colors[1]);
          }
          if (accentLight) {
            accentLight.color = new THREE.Color(colors.length > 2 ? colors[2] : colors[1]);
          }
        }
      } catch (e) {
        // Fallback colors
        const material = this.instancedMesh.material as THREE.MeshStandardMaterial;
        material.color.setHex(0x00ffff);
        material.emissive.setHex(0x003333);
      }
    }
    
    // ═════════════════════════════════════════════════════════════════════════
    // RENDER THREE.JS SCENE
    // ═════════════════════════════════════════════════════════════════════════
    this.renderer.render(this.scene, this.camera);
    
    // ═════════════════════════════════════════════════════════════════════════
    // COPY TO 2D CANVAS
    // ═════════════════════════════════════════════════════════════════════════
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // Explicitly set width and height to fit the destination canvas (fixes High DPI scaling)
    this.ctx.drawImage(
      this.threeCanvas, 
      0, 
      0, 
      this.canvas.width, 
      this.canvas.height
    );
  }

  destroy() {
    disposeThree(this.scene, this.renderer);
  }
}
