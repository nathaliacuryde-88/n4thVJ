import { HandData } from '../../App';
import * as THREE from 'three';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * MORPHING SPHERE RENDERER (Key M)
 * ═══════════════════════════════════════════════════════════════════════════
 * 3D wireframe icosphere using Three.js that rotates with hand movement 
 * and distorts with chaotic noise patterns on pinch.
 * 
 * INTERACTIONS:
 * - Hand Position: Rotates the sphere in 3D space
 * - Pinch Gesture: Distorts vertices with noise-based displacement
 * - Color shifts dynamically based on distortion intensity
 * 
 * QUICK TWEAKS:
 * - Line 41: Sphere radius
 * - Line 42: Icosphere detail level (higher = more triangles)
 * - Line 43: Chaos multiplier for distortion
 * ═══════════════════════════════════════════════════════════════════════════
 */

export class MorphingSphereRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  
  // Three.js components
  private threeCanvas: HTMLCanvasElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private sphere: THREE.Mesh;
  private particleMesh: THREE.Points;
  private pointLight: THREE.PointLight;
  private pointLight2: THREE.PointLight;
  private originalPositions: THREE.Vector3[] = [];
  
  // State
  private time = 0;
  private handX = 0.5; // Center of screen
  private handY = 0.5; // Center of screen
  private pinchDistance = 1.0;
  
  // ═════════════════════════════════════════════════════════════════════════
  // CONFIGURATION
  // ═════════════════════════════════════════════════════════════════════════
  private readonly SPHERE_RADIUS = 1.5; // TWEAK: 1-5 (reduced to fit screen better)
  private readonly DETAIL = 4; // TWEAK: 2-6 (detail level of icosphere)
  private readonly CHAOS_MULTIPLIER = 1.5; // TWEAK: 0.5-3.0

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    // Suppress Three.js multiple instances warning (harmless in this context)
    const originalWarn = console.warn;
    console.warn = (...args) => {
      if (typeof args[0] === 'string' && args[0].includes('Multiple instances of Three')) {
        return; // Suppress this specific warning
      }
      originalWarn.apply(console, args);
    };
    
    // Create offscreen Three.js canvas with proper size
    this.threeCanvas = document.createElement('canvas');
    this.threeCanvas.width = canvas.width;
    this.threeCanvas.height = canvas.height;
    
    this.initThreeJS();
    console.log('🌐 MorphingSphereRenderer initialized with Three.js');
    
    // Restore original console.warn
    console.warn = originalWarn;
  }

  private initThreeJS() {
    // Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x000000, 0.05);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.canvas.width / this.canvas.height,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 5); // Position camera
    this.camera.lookAt(0, 0, 0); // Look at center

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.threeCanvas,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(this.canvas.width, this.canvas.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    this.scene.add(ambientLight);

    this.pointLight = new THREE.PointLight(0x00ffcc, 2, 50);
    this.pointLight.position.set(5, 5, 5);
    this.scene.add(this.pointLight);

    this.pointLight2 = new THREE.PointLight(0x3300ff, 2, 50);
    this.pointLight2.position.set(-5, -5, 5);
    this.scene.add(this.pointLight2);

    // Wireframe Sphere
    const geometry = new THREE.IcosahedronGeometry(this.SPHERE_RADIUS, this.DETAIL);
    
    // Save original positions
    const posAttribute = geometry.attributes.position;
    for (let i = 0; i < posAttribute.count; i++) {
      this.originalPositions.push(
        new THREE.Vector3(
          posAttribute.getX(i),
          posAttribute.getY(i),
          posAttribute.getZ(i)
        )
      );
    }

    const material = new THREE.MeshStandardMaterial({
      color: 0x111111,
      wireframe: true,
      emissive: 0x3300ff,
      emissiveIntensity: 0.5,
      roughness: 0.4,
      metalness: 0.8
    });

    this.sphere = new THREE.Mesh(geometry, material);
    this.scene.add(this.sphere);

    // Particle Field
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
      transparent: true,
      opacity: 0.5
    });
    
    this.particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particleMesh);
  }

  // Simple noise function (matches original)
  private noise(x: number, y: number, z: number): number {
    return Math.sin(x) * Math.cos(y) * Math.sin(z);
  }

  private calculatePinch(hand: HandData['left'] | HandData['right']): number {
    if (!hand || !hand.landmarks) return 1.0; // Open hand
    
    const thumb = hand.landmarks[4];
    const index = hand.landmarks[8];
    const distance = Math.sqrt(
      Math.pow(thumb.x - index.x, 2) + 
      Math.pow(thumb.y - index.y, 2)
    );
    
    // Normalize distance: 0.02 is close (0), 0.2 is far (1)
    return Math.min(Math.max((distance - 0.02) * 5, 0), 1);
  }

  private updateState(handData: HandData) {
    const leftHand = handData.left;
    const rightHand = handData.right;
    
    // Calculate pinch from either hand
    const leftPinch = this.calculatePinch(leftHand);
    const rightPinch = this.calculatePinch(rightHand);
    const pinch = Math.min(leftPinch, rightPinch);
    
    // Smooth pinch value
    const targetPinch = pinch;
    this.pinchDistance += (targetPinch - this.pinchDistance) * 0.1;
    
    // Update hand position
    let targetX = 0.5;
    let targetY = 0.5;
    
    if (leftHand && leftHand.position) {
      targetX = leftHand.position.x;
      targetY = leftHand.position.y;
    } else if (rightHand && rightHand.position) {
      targetX = rightHand.position.x;
      targetY = rightHand.position.y;
    }
    
    // Smooth hand position
    this.handX += (targetX - this.handX) * 0.1;
    this.handY += (targetY - this.handY) * 0.1;
    
    // If no hands, drift back to center
    if (!leftHand && !rightHand) {
      this.handX += (0.5 - this.handX) * 0.05;
      this.handY += (0.5 - this.handY) * 0.05;
      this.pinchDistance += (1.0 - this.pinchDistance) * 0.05;
    }
  }

  render(handData: HandData, colors: string[]) {
    this.time += 0.02;
    
    // Update state from hand data
    this.updateState(handData);
    
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
    
    // Clear renderer
    this.renderer.clear();
    
    // ═════════════════════════════════════════════════════════════════════════
    // 1. ROTATE SPHERE BASED ON HAND POSITION
    // ═════════════════════════════════════════════════════════════════════════
    // Move sphere to follow hand position in screen space (reduced range for better sensitivity)
    const targetX = (this.handX - 0.5) * 4; // Map 0-1 to -2 to +2 (REDUCED from 6)
    const targetY = (0.5 - this.handY) * 3; // Map 0-1 to -1.5 to +1.5 (REDUCED from 4, flip Y)
    
    this.sphere.position.x += (targetX - this.sphere.position.x) * 0.15; // Faster response
    this.sphere.position.y += (targetY - this.sphere.position.y) * 0.15; // Faster response
    
    // Rotate based on hand position too
    const targetRotX = (this.handY - 0.5) * 2;
    const targetRotY = (this.handX - 0.5) * 2;
    
    this.sphere.rotation.x += (targetRotX - this.sphere.rotation.x) * 0.05;
    this.sphere.rotation.y += (targetRotY - this.sphere.rotation.y) * 0.05;
    
    // Continuous idle rotation
    this.sphere.rotation.z += 0.005;
    
    // ═════════════════════════════════════════════════════════════════════════
    // 2. MORPH GEOMETRY (VERTEX DISPLACEMENT)
    // ═════════════════════════════════════════════════════════════════════════
    const positions = this.sphere.geometry.attributes.position;
    
    // Chaos level: 1 = Open (Calm), 0 = Pinched (Chaos)
    const chaosLevel = (1.0 - this.pinchDistance) * this.CHAOS_MULTIPLIER;
    const basePulse = Math.sin(this.time) * 0.1;
    
    for (let i = 0; i < positions.count; i++) {
      const orig = this.originalPositions[i];
      
      // Create moving noise pattern
      const n = this.noise(
        orig.x * 2 + this.time,
        orig.y * 2 + this.time,
        orig.z * 2
      );
      
      // Displacement factor: base + pulse + (noise * chaos)
      const displacement = 1 + basePulse + (n * chaosLevel);
      
      positions.setXYZ(
        i,
        orig.x * displacement,
        orig.y * displacement,
        orig.z * displacement
      );
    }
    positions.needsUpdate = true;
    
    // ════════════════════════════════════════════════════════════════════════
    // 3. UPDATE COLORS BASED ON CHAOS
    // ═════════════════════════════════════════════════════════════════════════
    const material = this.sphere.material as THREE.MeshStandardMaterial;
    
    // Use color palette instead of HSL cycling
    if (colors && colors.length > 0) {
      try {
        const mainColor = new THREE.Color(colors[0]);
        const emissiveColor = new THREE.Color(colors[0]);
        
        // Apply colors to sphere material
        material.color = mainColor;
        material.emissive = emissiveColor.multiplyScalar(0.3 + (chaosLevel * 0.4));
        
        // Update point light colors based on palette
        const color1 = new THREE.Color(colors[0]);
        const color2 = colors.length > 1 ? new THREE.Color(colors[1]) : new THREE.Color(colors[0]);
        this.pointLight.color = color1;
        this.pointLight2.color = color2;
      } catch (e) {
        // Fallback to default colors if parsing fails
        material.color.setHex(0x00ffcc);
        material.emissive.setHex(0x003333);
        this.pointLight.color.setHex(0x00ffcc);
        this.pointLight2.color.setHex(0x3300ff);
      }
    } else {
      // Fallback when no colors provided
      material.color.setHex(0x00ffcc);
      material.emissive.setHex(0x003333);
      this.pointLight.color.setHex(0x00ffcc);
      this.pointLight2.color.setHex(0x3300ff);
    }
    
    // Light follows hand
    this.pointLight.position.x = (this.handX - 0.5) * 10;
    this.pointLight.position.y = (0.5 - this.handY) * 10;
    
    // ═════════════════════════════════════════════════════════════════════════
    // 4. ANIMATE PARTICLES
    // ═════════════════════════════════════════════════════════════════════════
    this.particleMesh.rotation.y = -this.time * 0.1;
    
    // ═════════════════════════════════════════════════════════════════════════
    // 5. RENDER THREE.JS SCENE
    // ═════════════════════════════════════════════════════════════════════════
    this.renderer.render(this.scene, this.camera);
    
    // ═════════════════════════════════════════════════════════════════════════
    // 6. COPY TO 2D CANVAS
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
}