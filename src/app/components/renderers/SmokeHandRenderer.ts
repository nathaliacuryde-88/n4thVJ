import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import type { HandData, AudioData } from '../../App';

export class SmokeHandRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private threeCanvas: HTMLCanvasElement; // Separate canvas for Three.js
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private composer: EffectComposer;
  
  private handGroup: THREE.Group | null = null;
  private backgroundParticles: THREE.Points | null = null;
  
  private pinchStrength = 0;
  private baseScale = 1.0;
  
  private currentModel: 'torus' | 'hand' = 'torus';
  private cachedHandGeometry: THREE.BufferGeometry | null = null;
  private isLoadingHand = false;
  
  private static readonly HAND_MODEL_URL = 'https://raw.githubusercontent.com/NPC-88/3dfiles/195a81cd4607a3176f231766b5bd2dd4b4d216fb/16834_hand_v1_NEW.obj';
  
  private uniforms = {
    uTime: { value: 0 },
    uPinch: { value: 0 },
    uColor: { value: new THREE.Vector3(0.0, 0.53, 1.0) } // Electric blue
  };
  
  private bgUniforms = {
    uTime: { value: 0 },
    uColor: { value: new THREE.Vector3(0.5, 0.7, 1.0) }
  };

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    // Create a separate canvas for Three.js WebGL rendering
    this.threeCanvas = document.createElement('canvas');
    this.threeCanvas.style.position = 'absolute';
    this.threeCanvas.style.top = '0';
    this.threeCanvas.style.left = '0';
    this.threeCanvas.style.width = '100%';
    this.threeCanvas.style.height = '100%';
    this.threeCanvas.style.pointerEvents = 'none';
    this.threeCanvas.style.zIndex = '10'; // Above base canvas (z-0) but behind UI (z-50)
    this.threeCanvas.width = canvas.width;
    this.threeCanvas.height = canvas.height;
    
    // Append to the same parent as the base canvas (the main app container)
    if (canvas.parentElement) {
      canvas.parentElement.appendChild(this.threeCanvas);
    }
    
    // Initialize Three.js
    this.scene = new THREE.Scene();
    const aspect = this.threeCanvas.width / this.threeCanvas.height;
    this.camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 100);
    this.camera.position.z = 10;
    
    // Create WebGL renderer using the separate Three.js canvas
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.threeCanvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(this.threeCanvas.width, this.threeCanvas.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Post-processing with bloom
    const renderScene = new RenderPass(this.scene, this.camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(this.threeCanvas.width, this.threeCanvas.height),
      3.0, // strength
      1.0, // radius
      0    // threshold
    );
    
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(renderScene);
    this.composer.addPass(bloomPass);
    
    // Create background dust particles
    this.createBackgroundDust();
    
    // Create default torus knot particle system
    this.createTorusGeometry();
    
    console.log('💨 SmokeHandRenderer initialized');
  }

  private createBackgroundDust() {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = -5 - Math.random() * 20;

      randoms[i * 3] = Math.random();
      randoms[i * 3 + 1] = Math.random();
      randoms[i * 3 + 2] = Math.random();
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 3));

    const material = new THREE.ShaderMaterial({
      uniforms: this.bgUniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        uniform float uTime;
        attribute vec3 aRandom;
        varying float vAlpha;
        void main() {
          vec3 pos = position;
          pos.y += sin(uTime * 0.5 + aRandom.x * 10.0) * 0.5;
          pos.x += cos(uTime * 0.3 + aRandom.y * 10.0) * 0.5;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = (20.0 * aRandom.z + 5.0) * (1.0 / -gl_Position.z);
          vAlpha = 0.3 + 0.3 * sin(uTime * 2.0 + aRandom.z * 20.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
          vec2 xy = gl_PointCoord.xy - 0.5;
          float r = length(xy);
          if (r > 0.5) discard;
          float glow = 1.0 - (r * 2.0);
          glow = pow(glow, 2.0);
          gl_FragColor = vec4(uColor, glow * vAlpha);
        }
      `
    });

    this.backgroundParticles = new THREE.Points(geometry, material);
    this.scene.add(this.backgroundParticles);
  }

  private createTorusGeometry() {
    // High-density torus knot for "shiny" smoke effect
    const geometry = new THREE.TorusKnotGeometry(1.5, 0.45, 900, 150);
    this.createParticleSystem(geometry);
  }

  private createParticleSystem(geometry: THREE.BufferGeometry) {
    if (this.handGroup) {
      this.scene.remove(this.handGroup);
    }
    this.handGroup = new THREE.Group();

    const count = geometry.getAttribute('position').count;
    const originalPositions = geometry.getAttribute('position').array as Float32Array;

    const pos = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = originalPositions[i * 3];
      pos[i * 3 + 1] = originalPositions[i * 3 + 1];
      pos[i * 3 + 2] = originalPositions[i * 3 + 2];

      randoms[i * 3] = Math.random();
      randoms[i * 3 + 1] = Math.random();
      randoms[i * 3 + 2] = Math.random();
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    particleGeo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 3));
    particleGeo.setAttribute('aOriginalPos', new THREE.BufferAttribute(originalPositions, 3));

    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        uniform float uTime;
        uniform float uPinch;
        attribute vec3 aRandom;
        attribute vec3 aOriginalPos;
        varying float vAlpha;
        
        vec3 curlNoise(vec3 p) {
          return vec3(
            sin(p.y * 3.0 + uTime) * 0.2 + sin(p.z * 5.0 + uTime * 2.0) * 0.1,
            sin(p.z * 3.0 + uTime) * 0.2 + sin(p.x * 5.0 + uTime * 2.0) * 0.1,
            sin(p.x * 3.0 + uTime) * 0.2 + sin(p.y * 5.0 + uTime * 2.0) * 0.1
          );
        }

        void main() {
          vec3 pos = aOriginalPos;
          
          // Turbulence
          vec3 turbulence = curlNoise(pos * 0.8 + uTime * 0.2);
          float breath = sin(uTime * 2.0 + pos.y) * 0.05;
          vec3 smokePos = pos + turbulence * 0.3 + (normalize(pos) * breath);

          // Expansion based on open hand
          vec3 dir = normalize(pos);
          float explodeRand = 1.0 + aRandom.x * 0.5;
          smokePos += dir * uPinch * 2.0 * explodeRand;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(smokePos, 1.0);
          
          // Dynamic Size
          float size = 15.0 + (uPinch * 45.0);
          size *= (0.8 + 0.4 * sin(uTime * 10.0 + aRandom.y * 10.0));
          gl_PointSize = size * (1.0 / -gl_Position.z);
          
          // Alpha / Flicker
          vAlpha = 0.3 + 0.7 * sin(uTime * 3.0 + aRandom.z * 6.0);
          vAlpha += uPinch * 0.5;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vAlpha;

        void main() {
          vec2 xy = gl_PointCoord.xy - 0.5;
          float r = length(xy);
          if (r > 0.5) discard;
          
          float glow = pow(1.0 - r * 2.0, 2.0);
          vec3 finalColor = mix(uColor, vec3(1.0), glow * 0.5);
          gl_FragColor = vec4(finalColor, glow * vAlpha);
        }
      `
    });

    const points = new THREE.Points(particleGeo, material);

    points.geometry.computeBoundingSphere();
    if (points.geometry.boundingSphere) {
      const center = points.geometry.boundingSphere.center;
      points.position.sub(center);

      const r = points.geometry.boundingSphere.radius;
      this.baseScale = 2.5 / r;
      this.handGroup.scale.set(this.baseScale, this.baseScale, this.baseScale);
    }

    this.handGroup.add(points);
    this.scene.add(this.handGroup);
  }

  public render(handData: HandData, colors: string[], audioData?: AudioData) {
    // Update time
    const t = performance.now() * 0.001;
    this.uniforms.uTime.value = t;
    this.bgUniforms.uTime.value = t;

    // Update color from color controller
    const color = new THREE.Color(colors[0] || '#0088ff');
    this.uniforms.uColor.value.set(color.r, color.g, color.b);
    
    // Secondary color for background
    const bgColor = new THREE.Color(colors[1] || colors[0] || '#5588ff');
    this.bgUniforms.uColor.value.set(bgColor.r * 0.5, bgColor.g * 0.7, bgColor.b);

    // Idle animation pulse
    const basePulse = Math.sin(t * 2.0) * 0.1;
    let targetExpansion = 0;

    // Hand tracking logic
    if (handData.right && handData.right.gesture === 'open' && handData.right.landmarks) {
      const hand = handData.right;
      const indexTip = hand.landmarks[8];
      const thumbTip = hand.landmarks[4];

      // Map hand position to 3D space
      const ndcX = indexTip.x * 2 - 1;
      const ndcY = -(indexTip.y * 2 - 1);

      const vector = new THREE.Vector3(ndcX, ndcY, 0.5);
      vector.unproject(this.camera);
      const dir = vector.sub(this.camera.position).normalize();
      const distance = (0 - this.camera.position.z) / dir.z;
      const targetPos = this.camera.position.clone().add(dir.multiplyScalar(distance));

      if (this.handGroup) {
        this.handGroup.position.lerp(targetPos, 0.15);
        this.handGroup.rotation.y = ndcX * 0.8;
        this.handGroup.rotation.x = -ndcY * 0.8;
      }

      // Calculate expansion based on thumb-index distance
      const dx = indexTip.x - thumbTip.x;
      const dy = indexTip.y - thumbTip.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Map distance to expansion (open hand = expand, pinch = reset)
      targetExpansion = THREE.MathUtils.mapLinear(dist, 0.02, 0.15, 0.0, 1.0);
      targetExpansion = THREE.MathUtils.clamp(targetExpansion, 0.0, 1.0);
    } else if (handData.left && handData.left.gesture === 'open' && handData.left.landmarks) {
      // Support left hand too
      const hand = handData.left;
      const indexTip = hand.landmarks[8];
      const thumbTip = hand.landmarks[4];

      const ndcX = indexTip.x * 2 - 1;
      const ndcY = -(indexTip.y * 2 - 1);

      const vector = new THREE.Vector3(ndcX, ndcY, 0.5);
      vector.unproject(this.camera);
      const dir = vector.sub(this.camera.position).normalize();
      const distance = (0 - this.camera.position.z) / dir.z;
      const targetPos = this.camera.position.clone().add(dir.multiplyScalar(distance));

      if (this.handGroup) {
        this.handGroup.position.lerp(targetPos, 0.15);
        this.handGroup.rotation.y = ndcX * 0.8;
        this.handGroup.rotation.x = -ndcY * 0.8;
      }

      const dx = indexTip.x - thumbTip.x;
      const dy = indexTip.y - thumbTip.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      targetExpansion = THREE.MathUtils.mapLinear(dist, 0.02, 0.15, 0.0, 1.0);
      targetExpansion = THREE.MathUtils.clamp(targetExpansion, 0.0, 1.0);
    } else {
      // Idle rotation when no hand detected
      if (this.handGroup) {
        this.handGroup.rotation.y += 0.005;
        this.handGroup.rotation.z = Math.sin(t * 0.5) * 0.1;
        this.handGroup.position.lerp(new THREE.Vector3(0, 0, 0), 0.05);
      }
    }

    // Smooth transition
    this.pinchStrength = THREE.MathUtils.lerp(this.pinchStrength, targetExpansion, 0.1);
    this.uniforms.uPinch.value = this.pinchStrength;

    // Scale based on expansion (grow when hand is open)
    if (this.handGroup) {
      const targetScale = this.baseScale * (1.0 + this.pinchStrength * 0.5);
      const currentScale = this.handGroup.scale.x;
      const newScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.1);
      this.handGroup.scale.set(newScale, newScale, newScale);
    }

    // Render with bloom
    this.composer.render();
  }

  public resize(width: number, height: number) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.composer.setSize(width, height);
    this.threeCanvas.width = width;
    this.threeCanvas.height = height;
  }

  public setSmokeHandModel(model: 'torus' | 'hand') {
    if (this.currentModel === model) return;
    
    console.log(`💨 Switching smoke hand model from ${this.currentModel} to ${model}`);
    this.currentModel = model;
    
    if (model === 'torus') {
      this.createTorusGeometry();
    } else if (model === 'hand') {
      // Check if hand geometry is cached
      if (this.cachedHandGeometry) {
        console.log('💨 Using cached hand geometry');
        this.createParticleSystem(this.cachedHandGeometry);
      } else {
        // Load hand model from GitHub
        this.loadHandModel();
      }
    }
  }
  
  private loadHandModel() {
    if (this.isLoadingHand) return;
    
    this.isLoadingHand = true;
    console.log('💨 Loading hand model from GitHub...');
    
    const loader = new OBJLoader();
    loader.load(
      SmokeHandRenderer.HAND_MODEL_URL,
      (object) => {
        // Find the mesh in the loaded OBJ
        let mesh: THREE.Mesh | null = null;
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            mesh = child;
          }
        });
        
        if (mesh && mesh.geometry) {
          console.log('✅ Hand model loaded successfully');
          this.cachedHandGeometry = mesh.geometry;
          this.createParticleSystem(mesh.geometry);
        } else {
          console.error('❌ No mesh found in hand model');
        }
        
        this.isLoadingHand = false;
      },
      (xhr) => {
        if (xhr.lengthComputable) {
          const percent = Math.round((xhr.loaded / xhr.total) * 100);
          console.log(`💨 Loading hand model: ${percent}%`);
        }
      },
      (error) => {
        console.error('❌ Failed to load hand model:', error);
        this.isLoadingHand = false;
        // Fall back to torus
        this.currentModel = 'torus';
        this.createTorusGeometry();
      }
    );
  }

  public destroy() {
    if (this.handGroup) {
      this.scene.remove(this.handGroup);
    }
    if (this.backgroundParticles) {
      this.scene.remove(this.backgroundParticles);
    }
    this.renderer.dispose();
    this.composer.dispose();
    
    // Remove the Three.js canvas element
    if (this.threeCanvas && this.threeCanvas.parentElement) {
      this.threeCanvas.parentElement.removeChild(this.threeCanvas);
    }
    
    console.log('💨 SmokeHandRenderer destroyed');
  }
}