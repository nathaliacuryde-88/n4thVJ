import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import type { HandData, AudioData } from '../../App';

export class RoseRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private threeCanvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private rose: THREE.Group | null = null;
  private loader: OBJLoader;
  private isLoading = false;
  
  // Custom Shader Material
  private material: THREE.ShaderMaterial;
  private uniforms: any;

  private readonly OBJ_URL = 'https://raw.githubusercontent.com/NPC-88/3dfiles/1ddf51329eb792e38a631e1cfe8f32c6dea10ea4/plants1.obj';

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;

    // Create offscreen Three.js canvas
    this.threeCanvas = document.createElement('canvas');
    this.threeCanvas.width = canvas.width;
    this.threeCanvas.height = canvas.height;

    // Initialize Three.js
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.threeCanvas,
      alpha: true,
      antialias: true, // Antialias helps with the hatching lines
    });
    this.renderer.setSize(canvas.width, canvas.height);
    this.renderer.setClearColor(0x000000, 0);

    // Setup scene
    this.scene = new THREE.Scene();

    // Setup camera
    this.camera = new THREE.PerspectiveCamera(60, canvas.width / canvas.height, 0.1, 1000);
    this.camera.position.set(0, 0, 6);
    this.camera.lookAt(0, 0, 0);

    // Shader Uniforms
    this.uniforms = {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(0xffffff) },
      uResolution: { value: new THREE.Vector2(canvas.width, canvas.height) },
      uVoxelSize: { value: 0.0 }, // 0 = smooth, higher = blocky
      uNoiseStrength: { value: 0.0 },
      uScanLine: { value: 0.0 },
    };

    // Custom Shader Material mimicking the "Digital Schematics" look
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: `
        uniform float uTime;
        uniform float uVoxelSize;
        uniform float uNoiseStrength;
        
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec3 vWorldPos;
        varying float vRandom;

        // Psuedo-random
        float random(vec3 scale, float seed) {
          return fract(sin(dot(gl_Position.xyz + seed, scale)) * 43758.5453 + seed);
        }

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          
          vec3 pos = position;
          
          // 1. Voxelization / Quantization
          // Snap vertices to a grid if uVoxelSize > 0
          if (uVoxelSize > 0.01) {
             float size = uVoxelSize;
             pos = floor(pos / size) * size;
          }
          
          // 2. Glitch Noise
          // Displace vertices randomly based on noise strength
          if (uNoiseStrength > 0.01) {
             float r = sin(uTime * 10.0 + pos.y * 5.0) * uNoiseStrength;
             pos.x += r * 0.5;
             pos.z += r * 0.5;
          }

          vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
          vWorldPos = worldPosition.xyz;
          
          vec4 mvPosition = viewMatrix * worldPosition;
          vViewPosition = -mvPosition.xyz;
          
          gl_Position = projectionMatrix * mvPosition;
          
          // Pass a random value for the fragment shader to use for "digital noise"
          vRandom = fract(sin(dot(pos.xy, vec2(12.9898,78.233))) * 43758.5453);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uTime;
        uniform vec2 uResolution;
        
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec3 vWorldPos;
        varying float vRandom;

        void main() {
          // Flat shading setup
          vec3 fdx = dFdx(vViewPosition);
          vec3 fdy = dFdy(vViewPosition);
          vec3 normal = normalize(cross(fdx, fdy));
          
          vec3 viewDir = normalize(vViewPosition);
          float dotProduct = dot(normal, vec3(0.0, 0.0, 1.0)); // Light from camera
          
          // --- Styles from the reference image ---
          
          // 1. Outline (Edge Detection)
          // Using dot product with view direction. 
          // If surface is perpendicular to view (dot ~ 0), it's an edge.
          float edge = smoothstep(0.2, 0.3, abs(dot(normal, viewDir)));
          
          // 2. Hatching Pattern
          // Diagonal lines in screen space
          vec2 coord = gl_FragCoord.xy;
          float p = coord.x + coord.y; // Diagonal
          float hatch1 = mod(p, 10.0); // Spacing
          float hatchLines = step(5.0, hatch1); // Line width
          
          // 3. Grid / Dot Pattern (Techno look)
          vec2 gridUv = vWorldPos.xy * 10.0; // World space grid
          vec2 gridId = floor(gridUv);
          vec2 gridSt = fract(gridUv);
          float dotPattern = step(0.3, length(gridSt - 0.5)); // Circles in grid
          
          // 4. Combine based on lighting/depth
          vec3 finalColor = uColor;
          
          // Darken edges
          if (edge < 0.1) {
             finalColor = vec3(0.0); // Black outlines
          } else {
             // Main fill logic
             
             // Shadows get cross-hatching
             if (dotProduct < 0.0) {
                if (mod(p - coord.x * 2.0, 8.0) < 2.0) finalColor = vec3(0.0);
             }
             
             // Mid-tones get simple hatching
             if (dotProduct < 0.5) {
                if (hatchLines < 1.0) finalColor = vec3(0.0);
             }
             
             // Highlights get the "Dot/Grid" pattern sometimes
             if (vRandom > 0.8) {
                if (dotPattern < 0.1) finalColor = vec3(0.0);
             }
          }
          
          // 5. "Digital Decay" / Void effect
          // Randomly discard pixels to look like missing data
          if (vRandom > 0.95 && sin(uTime * 20.0 + vWorldPos.y) > 0.0) {
             discard;
          }

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
      side: THREE.DoubleSide,
      transparent: true
    });

    this.loader = new OBJLoader();
    this.loadRose();
  }

  private async loadRose() {
    if (this.isLoading) return;
    this.isLoading = true;

    try {
      const response = await fetch(this.OBJ_URL);
      if (!response.ok) throw new Error(`Failed to load OBJ: ${response.status}`);
      const objData = await response.text();
      const object = this.loader.parse(objData);
      
      object.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = this.material; // Apply custom shader
        }
      });

      object.scale.set(0.3, 0.3, 0.3);
      // Tilt to see from top angle (leaves visible)
      object.rotation.x = -Math.PI / 2.5; 
      object.position.set(0, -0.5, 0); // Lower it slightly to center the mass

      this.rose = object;
      this.scene.add(this.rose);
      this.isLoading = false;
    } catch (error) {
      console.error('❌ Failed to load rose.obj:', error);
      this.isLoading = false;
    }
  }

  public render(handData: HandData, colors: string[], audioData?: AudioData) {
    if (!this.rose) return;

    const time = performance.now() * 0.001;
    this.uniforms.uTime.value = time;
    this.uniforms.uResolution.value.set(this.canvas.width, this.canvas.height);

    // --- Interaction Logic ---
    // Gestures control the Voxel/Glitch intensity
    
    let targetVoxelSize = 0.0;
    let targetNoise = 0.0;
    
    // Audio Reactivity
    const bass = audioData ? audioData.bass : 0;
    const mid = audioData ? audioData.mid : 0;
    const high = audioData ? audioData.high : 0;
    
    // Hand Gestures
    const hand = handData.left || handData.right;
    if (hand) {
        
        // 5 Fingers = Maximum breakdown (Large voxels, high noise)
        if (hand.fingerCount === 5 || hand.gesture === 'open') {
            targetVoxelSize = 0.8; 
            targetNoise = 0.3;
        } 
        // 2 Fingers = Medium breakdown
        else if (hand.fingerCount === 2) {
            targetVoxelSize = 0.3;
            targetNoise = 0.1;
        }
        // Pinch = Subtle glitch
        else if (hand.gesture === 'pinch') {
            targetVoxelSize = 0.05;
            targetNoise = 0.02;
        }
    }
    
    // Beat Hit = Flash of high voxelization
    if (audioData?.beat) {
        targetVoxelSize += 0.5;
        targetNoise += 0.2;
    }
    
    // Smoothly interpolate uniforms
    this.uniforms.uVoxelSize.value = THREE.MathUtils.lerp(this.uniforms.uVoxelSize.value, targetVoxelSize, 0.1);
    this.uniforms.uNoiseStrength.value = THREE.MathUtils.lerp(this.uniforms.uNoiseStrength.value, targetNoise, 0.1);
    
    // Color update
    if (colors && colors.length > 0) {
        const c = new THREE.Color(colors[0]);
        this.uniforms.uColor.value.lerp(c, 0.1);
    }
    
    // Rotation
    this.rose.rotation.y = time * 0.2;
    this.rose.rotation.x = -Math.PI / 2.5; // Maintain the top-down tilt
    
    // Render
    this.renderer.render(this.scene, this.camera);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.threeCanvas, 0, 0);
  }

  public resize(width: number, height: number) {
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.threeCanvas.width = width;
    this.threeCanvas.height = height;
    this.uniforms.uResolution.value.set(width, height);
  }

  public destroy() {
    this.scene.clear();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    this.material.dispose();
    this.threeCanvas.remove();
  }
}
