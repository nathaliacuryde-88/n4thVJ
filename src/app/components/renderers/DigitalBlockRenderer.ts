import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import type { HandData, AudioData } from '../../App';
import { HorizonConfig } from '../../config/HorizonRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';

export class DigitalBlockRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private threeCanvas: HTMLCanvasElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private composer: EffectComposer;
  
  private material: THREE.ShaderMaterial;
  private plane: THREE.Mesh;
  
  private chaosLevel = 0;
  
  private cfg: typeof HorizonConfig = HorizonConfig;

  private uniforms = {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Vector3(0.5, 0.0, 1.0) }, // Purple
    uColor2: { value: new THREE.Vector3(0.0, 0.0, 0.0) }, // Black
    uColor3: { value: new THREE.Vector3(0.8, 0.9, 1.0) }, // White/Blueish
    uChaos: { value: 0 },
    uStrips: { value: 10 },
    uStripsChaos: { value: 20 },
    uBlocks: { value: 5 },
    uBlocksChaos: { value: 15 },
    uSpeedBase: { value: 0.05 },
    uSpeedVar: { value: 0.1 },
    uSpeedChaos: { value: 0.35 },
    uAudioLow: { value: 0 },
    uAudioMid: { value: 0 },
    uAudioHigh: { value: 0 }
  };

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    // Create Three.js canvas
    this.threeCanvas = document.createElement('canvas');
    this.threeCanvas.width = canvas.width;
    this.threeCanvas.height = canvas.height;
    
    
    // Three.js Init
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 100);
    this.camera.position.z = 2;
    
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.threeCanvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(canvas.width, canvas.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Shader Material simulating the "Digital Glitch Blocks"
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform float uChaos;
        uniform float uStrips;
        uniform float uStripsChaos;
        uniform float uBlocks;
        uniform float uBlocksChaos;
        uniform float uSpeedBase;
        uniform float uSpeedVar;
        uniform float uSpeedChaos;
        uniform float uAudioLow;
        uniform float uAudioHigh;
        
        varying vec2 vUv;

        // Random function
        float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        float noise(vec2 st) {
            vec2 i = floor(st);
            vec2 f = fract(st);
            float a = random(i);
            float b = random(i + vec2(1.0, 0.0));
            float c = random(i + vec2(0.0, 1.0));
            float d = random(i + vec2(1.0, 1.0));
            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }

        void main() {
            vec2 uv = vUv; // Back to standard vertical orientation
            
            // 1. Create Vertical Columns (Strips)
            float numStrips = uStrips + (uChaos * uStripsChaos);
            float stripIdx = floor(uv.x * numStrips);
            
            // 2. Vertical Movement per strip
            // SIGNIFICANTLY REDUCED SPEEDS
            float baseSpeed = uSpeedBase + random(vec2(stripIdx, 1.0)) * uSpeedVar;
            float speed = baseSpeed + uChaos * uSpeedChaos;
            
            float yOffset = uTime * speed;
            
            // Audio reactivity - bass jumps the strips
            if (random(vec2(stripIdx, 2.0)) > 0.5) {
                yOffset += uAudioLow * 0.2; 
            } else {
                yOffset -= uAudioLow * 0.2;
            }

            // 3. Blocky distortion
            float numBlocks = uBlocks + uChaos * uBlocksChaos;
            float blockY = floor((uv.y + yOffset) * numBlocks);
            
            // 4. Determine Color / Noise
            float n = noise(vec2(stripIdx, blockY));
            
            // 5. Color Mixing
            vec3 finalColor = uColor2; 
            
            float intensity = n;
            
            // Horizontal Scanline effect (Standard TV style)
            float scanline = sin(uv.y * 120.0 + uTime * 2.0) * 0.05;
            intensity += scanline;

            if (intensity > 0.4) {
                finalColor = mix(uColor2, uColor1, (intensity - 0.4) * 2.0);
            }
            if (intensity > 0.7) {
                finalColor = mix(finalColor, uColor3, (intensity - 0.7) * 3.0);
            }
            
            // Chromatic Aberration - Toned down
            if (uChaos > 0.2 || uAudioHigh > 0.6) {
                float rOff = 0.005 * (uChaos + uAudioHigh); // Reduced offset
                float nR = noise(vec2(stripIdx, blockY + rOff));
                float nB = noise(vec2(stripIdx, blockY - rOff));
                
                if (nR > 0.6) finalColor.r += 0.2;
                if (nB > 0.6) finalColor.b += 0.2;
            }
            
            // VHS Grain / Noise
            float grain = random(vUv * uTime * 10.0);
            finalColor += (grain - 0.5) * 0.12; 
            
            // Vignette
            float dist = distance(uv, vec2(0.5));
            finalColor *= (1.2 - dist * 0.8);

            gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
      side: THREE.DoubleSide
    });
    
    const geometry = new THREE.PlaneGeometry(20, 12); 
    this.plane = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.plane);
    
    // Bloom Effect
    const renderScene = new RenderPass(this.scene, this.camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(canvas.width, canvas.height),
      1.5, // strength
      0.4, // radius
      0.85 // threshold
    );
    
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(renderScene);
    this.composer.addPass(bloomPass);
    
    console.log('📼 DigitalBlockRenderer initialized');
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(HorizonConfig, values);
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    // This renderer draws into its own stacked canvas rather than blitting into
    // the 2D one, so nothing resizes it for us: without this, resizing the
    // window just stretches the last frame via CSS.
    if (
      this.threeCanvas.width !== this.canvas.width ||
      this.threeCanvas.height !== this.canvas.height
    ) {
      this.threeCanvas.width = this.canvas.width;
      this.threeCanvas.height = this.canvas.height;
      this.camera.aspect = this.canvas.width / this.canvas.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.canvas.width, this.canvas.height, false);
      this.composer.setSize(this.canvas.width, this.canvas.height);
    }

    const time = performance.now() * 0.001;
    this.uniforms.uTime.value = time;
    
    // --- Audio Analysis ---
    const bass = audioData ? audioData.bass : 0;
    const mid = audioData ? audioData.mid : 0;
    const high = audioData ? audioData.high : 0;
    
    this.uniforms.uAudioLow.value = THREE.MathUtils.lerp(this.uniforms.uAudioLow.value, bass, 0.2);
    this.uniforms.uAudioMid.value = mid;
    this.uniforms.uAudioHigh.value = high;

    // --- Hand Gestures (Chaos Control) ---
    // Nothing = Slower (0.0) - Almost static/drifting
    // Pinch = Slow (0.2)
    // 2 fingers = Medium (0.4)
    // 5 finger = Fast (0.7)
    // Clap = Faster (1.0)
    
    /*
     * Chaos, read continuously.
     *
     * It used to snap to a level per gesture, and 'open' — which is what the
     * idle drive reports and what most tracked hands read as — went almost to
     * the top. The result ran flat out nearly always, and stepped hard whenever
     * tracking flickered between states. Now openness and hand speed each add
     * their share of a ceiling that is well under 1, and the whole thing eases
     * in slowly.
     */
    const cfg = this.cfg.chaos;
    const hand = handData.right ?? handData.left;
    let targetC = cfg.idle;

    if (hand) {
      const fingers = hand.fingerCount ?? (hand.gesture === 'open' ? 5 : 0);
      const openness = Math.min(1, Math.max(0, fingers / 5));
      const speed = Math.min(1, Math.max(0, hand.velocity ?? 0));
      targetC = cfg.idle + (openness * cfg.openness + speed * cfg.velocity) * cfg.range;
    } else if (bass > 0.6) {
      targetC = cfg.idle + bass * cfg.audio;
    }
    if (handData.clapping) targetC += cfg.clap * (handData.clapIntensity ?? 1);
    targetC = Math.min(cfg.range, targetC);

    this.chaosLevel = THREE.MathUtils.lerp(this.chaosLevel, targetC, cfg.ease);
    this.uniforms.uChaos.value = this.chaosLevel;

    const strips = this.cfg.strips;
    const speedCfg = this.cfg.speed;
    this.uniforms.uStrips.value = strips.base;
    this.uniforms.uStripsChaos.value = strips.chaos;
    this.uniforms.uBlocks.value = strips.blocks;
    this.uniforms.uBlocksChaos.value = strips.blocksChaos;
    this.uniforms.uSpeedBase.value = speedCfg.base;
    this.uniforms.uSpeedVar.value = speedCfg.variation;
    this.uniforms.uSpeedChaos.value = speedCfg.chaos;

    // --- Colors ---
    if (colors && colors.length >= 3) {
        const c1 = new THREE.Color(colors[0]); // Primary
        const c2 = new THREE.Color(colors[3] || '#000000'); // Background (Dark)
        const c3 = new THREE.Color(colors[1]); // Highlight
        
        this.uniforms.uColor1.value.lerp(new THREE.Vector3(c1.r, c1.g, c1.b), 0.1);
        this.uniforms.uColor2.value.lerp(new THREE.Vector3(c2.r, c2.g, c2.b), 0.1);
        this.uniforms.uColor3.value.lerp(new THREE.Vector3(c3.r, c3.g, c3.b), 0.1);
    }
    
    // Render
    this.composer.render();

    // Into the shared 2D canvas, not the DOM: the post pipeline reads that one.
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.threeCanvas, 0, 0, this.canvas.width, this.canvas.height);
  }
  
  destroy() {
    this.composer.dispose();
    this.geometry?.dispose();
    this.material.dispose();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    console.log('📼 DigitalBlockRenderer destroyed');
  }
  
  // Helper for cleanup
  private geometry = new THREE.PlaneGeometry(20, 12);
}
