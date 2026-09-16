import { HandData } from '../../App';
import * as THREE from 'three';
import { timeScale } from '../../motion/clock';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PARAMETRIC BLOOM RENDERER (Key 6 in 3D mode)
 * ═══════════════════════════════════════════════════════════════════════════
 * 3D flower models that grow and bloom using procedural botanical geometry.
 * Creates organic, blooming forms with layered petals and stems.
 * 
 * INTERACTIONS:
 * - Pinch (1 finger): Buds close into tight forms, slow growth
 * - 2 Fingers: Gentle blooming, petals unfold gracefully
 * - 5 Fingers (Open): Explosive blooming, flowers expand rapidly
 * - Hand Position: Flowers lean/grow toward hands
 * - Hands Together (Clap): All flowers burst open then reset to buds
 * 
 * FLOWER TYPES:
 * - Rose: Layered spiral petals (rose curve)
 * - Daisy: Radial petals from center
 * - Lily: Curved elongated petals
 * 
 * QUICK TWEAKS:
 * - Line 105: Number of flower objects
 * - Line 106: Growth speed
 * - Line 107: Bloom scale multiplier
 * ════════════���══════════════════════════════════════════════════════════════
 */

interface FlowerObject {
  mesh: THREE.Group;
  type: 'rose' | 'daisy' | 'lily';
  bloomPhase: number; // 0 (closed bud) to 1 (full bloom)
  targetBloom: number;
  rotationSpeed: THREE.Vector3;
  growthOffset: number; // Random offset for varied timing
  basePosition: THREE.Vector3;
}

export class ParametricBloomRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  
  // Three.js components
  private threeCanvas: HTMLCanvasElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private flowers: FlowerObject[] = [];
  private ambientLight: THREE.AmbientLight;
  private pointLight1: THREE.PointLight;
  private pointLight2: THREE.PointLight;
  private directionalLight: THREE.DirectionalLight;
  
  // State
  private time = 0;
  private clapEffect = 0;
  
  // Color management
  private currentColors: string[] = [];
  
  // ═════════════════════════════════════════════════════════════════════════
  // CONFIGURATION
  // ═════════════════════════════════════════════════════════════════════════
  private readonly FLOWER_COUNT = 8; // TWEAK: 4-15
  private readonly GROWTH_SPEED = 0.015; // TWEAK: 0.005-0.03
  private readonly BLOOM_SCALE = 1.5; // TWEAK: 1.0-3.0

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
    
    this.initThreeJS();
    console.log('🌸 ParametricBloomRenderer initialized');
    
    console.warn = originalWarn;
  }

  private initThreeJS() {
    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    this.scene.fog = new THREE.Fog(0x000000, 5, 20);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      50,
      this.canvas.width / this.canvas.height,
      0.1,
      100
    );
    this.camera.position.set(0, 2, 10);
    this.camera.lookAt(0, 0, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.threeCanvas,
      antialias: true,
      alpha: false
    });
    this.renderer.setSize(this.canvas.width, this.canvas.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights - soft botanical lighting
    this.ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    this.scene.add(this.ambientLight);

    this.pointLight1 = new THREE.PointLight(0xffffff, 1.5, 30);
    this.pointLight1.position.set(5, 8, 5);
    this.scene.add(this.pointLight1);

    this.pointLight2 = new THREE.PointLight(0xffffff, 1, 25);
    this.pointLight2.position.set(-5, 3, -3);
    this.scene.add(this.pointLight2);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    this.directionalLight.position.set(0, 10, 5);
    this.scene.add(this.directionalLight);

    // Create parametric flowers
    this.createFlowers();
  }

  private createFlowers() {
    const types: ('rose' | 'daisy' | 'lily')[] = ['rose', 'daisy', 'lily'];
    
    for (let i = 0; i < this.FLOWER_COUNT; i++) {
      const type = types[i % types.length];
      let mesh: THREE.Group;
      
      // Create geometry based on type
      switch (type) {
        case 'rose':
          mesh = this.createRoseGeometry();
          break;
        case 'daisy':
          mesh = this.createDaisyGeometry();
          break;
        case 'lily':
          mesh = this.createLilyGeometry();
          break;
      }
      
      this.addFlowerToScene(mesh, type, i);
    }
  }

  /**
   * Create a rose with layered spiral petals
   */
  private createRoseGeometry(): THREE.Group {
    const group = new THREE.Group();
    
    // Stem
    const stemGeometry = new THREE.CylinderGeometry(0.05, 0.08, 2, 8);
    const stemMaterial = new THREE.MeshPhongMaterial({
      color: 0x2d5016,
      shininess: 10
    });
    const stem = new THREE.Mesh(stemGeometry, stemMaterial);
    stem.position.y = -1;
    group.add(stem);
    
    // Petals in spiral layers (rose-like)
    const layers = 4;
    const petalsPerLayer = [5, 8, 12, 15];
    
    for (let layer = 0; layer < layers; layer++) {
      const petalCount = petalsPerLayer[layer];
      const layerRadius = 0.3 + layer * 0.2;
      const layerHeight = layer * 0.15;
      const petalCurl = layer * 0.1;
      
      for (let p = 0; p < petalCount; p++) {
        // Create a petal shape using ellipse
        const petalShape = new THREE.Shape();
        petalShape.moveTo(0, 0);
        petalShape.quadraticCurveTo(0.2, 0.4, 0, 0.8);
        petalShape.quadraticCurveTo(-0.2, 0.4, 0, 0);
        
        const extrudeSettings = {
          steps: 1,
          depth: 0.02,
          bevelEnabled: true,
          bevelThickness: 0.01,
          bevelSize: 0.01,
          bevelSegments: 3
        };
        
        const petalGeometry = new THREE.ExtrudeGeometry(petalShape, extrudeSettings);
        const petalMaterial = new THREE.MeshPhongMaterial({
          color: 0xff69b4,
          shininess: 30,
          side: THREE.DoubleSide
        });
        
        const petal = new THREE.Mesh(petalGeometry, petalMaterial);
        
        // Position and rotate petal
        const angle = (p / petalCount) * Math.PI * 2 + layer * 0.2;
        petal.position.x = Math.cos(angle) * layerRadius;
        petal.position.z = Math.sin(angle) * layerRadius;
        petal.position.y = layerHeight;
        
        petal.rotation.y = angle;
        petal.rotation.x = -Math.PI / 4 - petalCurl;
        
        petal.scale.set(0.4, 0.4, 0.4);
        
        group.add(petal);
      }
    }
    
    // Center
    const centerGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const centerMaterial = new THREE.MeshPhongMaterial({
      color: 0xffeb3b,
      shininess: 50
    });
    const center = new THREE.Mesh(centerGeometry, centerMaterial);
    center.position.y = 0.5;
    group.add(center);
    
    return group;
  }

  /**
   * Create a daisy with radial petals
   */
  private createDaisyGeometry(): THREE.Group {
    const group = new THREE.Group();
    
    // Stem
    const stemGeometry = new THREE.CylinderGeometry(0.05, 0.08, 2, 8);
    const stemMaterial = new THREE.MeshPhongMaterial({
      color: 0x2d5016,
      shininess: 10
    });
    const stem = new THREE.Mesh(stemGeometry, stemMaterial);
    stem.position.y = -1;
    group.add(stem);
    
    // Petals radiating from center
    const petalCount = 12;
    
    for (let p = 0; p < petalCount; p++) {
      // Create elongated ellipse petal
      const petalShape = new THREE.Shape();
      petalShape.moveTo(0, 0);
      petalShape.quadraticCurveTo(0.15, 0.3, 0, 0.9);
      petalShape.quadraticCurveTo(-0.15, 0.3, 0, 0);
      
      const extrudeSettings = {
        steps: 1,
        depth: 0.03,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.02,
        bevelSegments: 2
      };
      
      const petalGeometry = new THREE.ExtrudeGeometry(petalShape, extrudeSettings);
      const petalMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        shininess: 40,
        side: THREE.DoubleSide
      });
      
      const petal = new THREE.Mesh(petalGeometry, petalMaterial);
      
      // Position and rotate petal
      const angle = (p / petalCount) * Math.PI * 2;
      petal.position.x = Math.cos(angle) * 0.3;
      petal.position.z = Math.sin(angle) * 0.3;
      petal.position.y = 0;
      
      petal.rotation.y = angle;
      petal.rotation.x = -Math.PI / 6;
      
      petal.scale.set(0.5, 0.5, 0.5);
      
      group.add(petal);
    }
    
    // Center disk
    const centerGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 32);
    const centerMaterial = new THREE.MeshPhongMaterial({
      color: 0xffeb3b,
      shininess: 30
    });
    const center = new THREE.Mesh(centerGeometry, centerMaterial);
    center.position.y = 0.05;
    group.add(center);
    
    return group;
  }

  /**
   * Create a lily with curved elongated petals
   */
  private createLilyGeometry(): THREE.Group {
    const group = new THREE.Group();
    
    // Stem
    const stemGeometry = new THREE.CylinderGeometry(0.06, 0.09, 2.5, 8);
    const stemMaterial = new THREE.MeshPhongMaterial({
      color: 0x2d5016,
      shininess: 10
    });
    const stem = new THREE.Mesh(stemGeometry, stemMaterial);
    stem.position.y = -1.25;
    group.add(stem);
    
    // Petals - elongated and curved
    const petalCount = 6;
    
    for (let p = 0; p < petalCount; p++) {
      // Create long curved petal
      const petalShape = new THREE.Shape();
      petalShape.moveTo(0, 0);
      petalShape.bezierCurveTo(0.2, 0.5, 0.15, 1.0, 0, 1.3);
      petalShape.bezierCurveTo(-0.15, 1.0, -0.2, 0.5, 0, 0);
      
      const extrudeSettings = {
        steps: 2,
        depth: 0.04,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.03,
        bevelSegments: 3
      };
      
      const petalGeometry = new THREE.ExtrudeGeometry(petalShape, extrudeSettings);
      const petalMaterial = new THREE.MeshPhongMaterial({
        color: 0xff69b4,
        shininess: 50,
        side: THREE.DoubleSide
      });
      
      const petal = new THREE.Mesh(petalGeometry, petalMaterial);
      
      // Position and rotate petal
      const angle = (p / petalCount) * Math.PI * 2;
      const layer = p < 3 ? 0 : 1;
      const radius = layer === 0 ? 0.2 : 0.4;
      
      petal.position.x = Math.cos(angle + layer * 0.5) * radius;
      petal.position.z = Math.sin(angle + layer * 0.5) * radius;
      petal.position.y = 0;
      
      petal.rotation.y = angle + layer * 0.5;
      petal.rotation.x = -Math.PI / 3 - layer * 0.2;
      
      petal.scale.set(0.5, 0.5, 0.5);
      
      group.add(petal);
    }
    
    // Stamen (center)
    const stamenCount = 5;
    for (let s = 0; s < stamenCount; s++) {
      const stamenGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.6, 4);
      const stamenMaterial = new THREE.MeshPhongMaterial({
        color: 0xffeb3b,
        shininess: 60
      });
      const stamen = new THREE.Mesh(stamenGeometry, stamenMaterial);
      
      const angle = (s / stamenCount) * Math.PI * 2;
      stamen.position.x = Math.cos(angle) * 0.1;
      stamen.position.z = Math.sin(angle) * 0.1;
      stamen.position.y = 0.3;
      stamen.rotation.z = Math.sin(angle) * 0.2;
      stamen.rotation.x = Math.cos(angle) * 0.2;
      
      group.add(stamen);
      
      // Anther (tip)
      const antherGeometry = new THREE.SphereGeometry(0.04, 8, 8);
      const antherMaterial = new THREE.MeshPhongMaterial({
        color: 0xff6b35,
        shininess: 70
      });
      const anther = new THREE.Mesh(antherGeometry, antherMaterial);
      anther.position.copy(stamen.position);
      anther.position.y += 0.35;
      group.add(anther);
    }
    
    return group;
  }

  private addFlowerToScene(mesh: THREE.Group, type: 'rose' | 'daisy' | 'lily', i: number) {
    // Create material with color (will be updated later)
    const material = new THREE.MeshPhongMaterial({
      color: 0xff69b4,
      shininess: 30,
      specular: 0x444444,
      side: THREE.DoubleSide,
      flatShading: false,
      wireframe: false
    });
    
    // Apply material to all meshes in the group
    mesh.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = material;
      }
    });
    
    // Position in a circle
    const angle = (i / this.FLOWER_COUNT) * Math.PI * 2;
    const radius = 3;
    const basePosition = new THREE.Vector3(
      Math.cos(angle) * radius,
      -1,
      Math.sin(angle) * radius
    );
    
    mesh.position.copy(basePosition);
    
    // Start as small bud
    mesh.scale.set(0.3, 0.3, 0.3);
    
    // Random rotation
    mesh.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
    
    this.scene.add(mesh);
    
    this.flowers.push({
      mesh,
      type,
      bloomPhase: 0.2, // Start as small bud
      targetBloom: 0.2,
      rotationSpeed: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ),
      growthOffset: Math.random() * Math.PI * 2,
      basePosition: basePosition.clone()
    });
  }

  private updateColors(colors: string[]) {
    // Only update if colors changed
    if (JSON.stringify(colors) === JSON.stringify(this.currentColors)) {
      return;
    }
    
    this.currentColors = [...colors];
    
    // Update light colors
    if (colors.length > 0) {
      this.pointLight1.color = new THREE.Color(colors[0]);
      if (colors.length > 1) {
        this.pointLight2.color = new THREE.Color(colors[1]);
      }
      if (colors.length > 2) {
        this.directionalLight.color = new THREE.Color(colors[2] || colors[0]);
      }
    }
    
    // Update flower colors
    this.flowers.forEach((flower, i) => {
      const colorIndex = i % colors.length;
      const color = new THREE.Color(colors[colorIndex]);
      flower.mesh.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          (child.material as THREE.MeshPhongMaterial).color = color;
        }
      });
    });
  }

  private getGestureIntensity(hand: HandData['left'] | HandData['right']): number {
    if (!hand || !hand.fingerCount) return 0.5;
    
    // Map finger count to bloom intensity
    // 1 finger (pinch) = 0.01 (tight bud)
    // 2 fingers = 0.2 (gentle bloom)
    // 5 fingers (open) = 0.8 (full bloom)
    const fingerCount = hand.fingerCount;
    if (fingerCount === 1) return 0.01;
    if (fingerCount === 2) return 0.2;
    if (fingerCount === 3) return 0.4;
    if (fingerCount === 4) return 0.6;
    return 0.8;
  }

  private updateFlowers(handData: HandData) {
    const leftHand = handData.left;
    const rightHand = handData.right;
    
    // Get gesture intensities
    const leftIntensity = this.getGestureIntensity(leftHand);
    const rightIntensity = this.getGestureIntensity(rightHand);
    const avgIntensity = (leftIntensity + rightIntensity) / 2;
    
    // Convert hand positions to 3D world space
    const leftPos = leftHand ? new THREE.Vector3(
      (leftHand.position.x - 0.5) * 12,
      (0.5 - leftHand.position.y) * 8,
      0
    ) : null;
    
    const rightPos = rightHand ? new THREE.Vector3(
      (rightHand.position.x - 0.5) * 12,
      (0.5 - rightHand.position.y) * 8,
      0
    ) : null;
    
    // Handle clap effect - burst bloom
    if (handData.clapping && handData.clapIntensity) {
      this.clapEffect = handData.clapIntensity * 2;
    }
    
    // Update each flower
    this.flowers.forEach((flower, i) => {
      // ═══════════════════════════════════════════════════════════════════════
      // BLOOM PHASE - Control flower opening
      // ═══════════════════════════════════════════════════════════════════════
      
      if (this.clapEffect > 0.5) {
        // Clap: Burst open
        flower.targetBloom = 1.5;
      } else if (this.clapEffect > 0.1) {
        // After burst: Close back to bud
        flower.targetBloom = 0.1;
      } else {
        // Normal: Bloom based on gesture intensity
        const wavePhase = Math.sin(this.time * 0.5 + flower.growthOffset) * 0.2;
        flower.targetBloom = 0.3 + avgIntensity * 0.7 + wavePhase;
      }
      
      // Smooth bloom transition
      flower.bloomPhase += (flower.targetBloom - flower.bloomPhase) * this.GROWTH_SPEED * 2;
      flower.bloomPhase = Math.max(0.1, Math.min(2, flower.bloomPhase));
      
      // Apply bloom to scale
      const bloomScale = flower.bloomPhase * this.BLOOM_SCALE;
      flower.mesh.scale.set(bloomScale, bloomScale, bloomScale);
      
      // ═══════════════════════════════════════════════════════════════════════
      // LEAN TOWARD HANDS - Flowers grow toward interaction
      // ═══════════════════════════════════════════════════════════════════════
      const targetPos = flower.basePosition.clone();
      
      if (leftPos) {
        const toLeft = new THREE.Vector3().subVectors(leftPos, flower.mesh.position);
        const distance = toLeft.length();
        
        if (distance < 6) {
          const lean = toLeft.normalize().multiplyScalar(leftIntensity * 0.3);
          targetPos.add(lean);
        }
      }
      
      if (rightPos) {
        const toRight = new THREE.Vector3().subVectors(rightPos, flower.mesh.position);
        const distance = toRight.length();
        
        if (distance < 6) {
          const lean = toRight.normalize().multiplyScalar(rightIntensity * 0.3);
          targetPos.add(lean);
        }
      }
      
      // Smooth position transition
      flower.mesh.position.lerp(targetPos, 0.05);
      
      // ═══════════════════════════════════════════════════════════════════════
      // ROTATION - Gentle spinning growth
      // ═══════════════════════════════════════════════════════════════════════
      const rotationMultiplier = 1 + avgIntensity * 2;
      flower.mesh.rotation.x += flower.rotationSpeed.x * rotationMultiplier;
      flower.mesh.rotation.y += flower.rotationSpeed.y * rotationMultiplier;
      flower.mesh.rotation.z += flower.rotationSpeed.z * rotationMultiplier;
      
      // ═══════════════════════════════════════════════════════════════════════
      // MATERIAL EFFECTS - Shimmer based on bloom
      // ═══════════════════════════════════════════════════════════════════════
      flower.mesh.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const material = child.material as THREE.MeshPhongMaterial;
          material.shininess = 10 + flower.bloomPhase * 40;
          material.emissiveIntensity = flower.bloomPhase * 0.2;
          material.emissive = material.color.clone().multiplyScalar(0.3);
        }
      });
    });
    
    // Decay clap effect
    this.clapEffect *= 0.92;
  }

  render(handData: HandData, colors: string[]) {
    this.time += (0.016) * timeScale(); // ~60fps
    
    // Update colors
    this.updateColors(colors);
    
    // Update flowers based on hand data
    this.updateFlowers(handData);
    
    // Update canvas size if needed
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
    
    // Gentle camera movement
    this.camera.position.x = Math.sin(this.time * 0.1) * 1;
    this.camera.position.y = 2 + Math.cos(this.time * 0.08) * 0.5;
    this.camera.lookAt(0, 0, 0);
    
    // Render Three.js scene
    this.renderer.render(this.scene, this.camera);
    
    // Copy to main canvas
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
    // Dispose of Three.js resources
    this.flowers.forEach(flower => {
      // flower.mesh is a Group: the geometry lives on the meshes inside it.
      flower.mesh.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          (child.material as THREE.Material).dispose();
        }
      });
    });
    this.renderer.dispose();
    this.renderer.forceContextLoss();
  }
}