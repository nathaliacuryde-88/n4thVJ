import * as THREE from 'three';
import { HandData, AudioData } from '../../App';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DISTORTED CAMERA RENDERER
 * ═══════════════════════════════════════════════════════════════════════════
 * Three.js camera feed with gesture-controlled chromatic distortion
 * - Webcam texture mapped to full-screen plane
 * - Abstract heat-map style coloring based on user palette
 * - High-frequency "zig-zag" wave distortion (Vertical/Up-Down)
 * - Heavy blur and Grain/Dot noise for texture
 * 
 * CONTROLS:
 * - Hand Position X: Controls Wave Frequency (Thinner/Wider waves)
 * - Hand Position Y: Controls Wave Amplitude (Higher/Lower waves)
 * - Pinch: Dampens the effect
 * - Clap: Max distortion + vibration
 * ══════════════════════════════════════════════════════════════════════════��
 */

export class DistortedCameraRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  
  // Three.js components (Offscreen)
  private threeCanvas: HTMLCanvasElement;
  private scene: THREE.Scene;
  private camera: THREE.OrthographicCamera;
  private renderer: THREE.WebGLRenderer;
  
  private videoTexture: THREE.VideoTexture | null = null;
  private videoElement: HTMLVideoElement | null = null;
  private plane: THREE.Mesh | null = null;
  private time: number = 0;
  
  // Shader uniforms
  private uniforms: {
    uTime: { value: number };
    uTexture: { value: THREE.Texture | null };
    uAmplitude: { value: number };
    uFrequency: { value: number };
    uColorIntensity: { value: number };
    uColor1: { value: THREE.Color };
    uColor2: { value: THREE.Color };
    uColor3: { value: THREE.Color };
    uColor4: { value: THREE.Color };
    uColor5: { value: THREE.Color };
  };

  // Gesture control state
  private targetAmplitude: number = 0.3; 
  private targetFrequency: number = 100.0; 
  private currentAmplitude: number = 0.3;
  private currentFrequency: number = 100.0;
  private clapVibration: number = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    // Create offscreen Three.js canvas
    this.threeCanvas = document.createElement('canvas');
    this.threeCanvas.width = canvas.width;
    this.threeCanvas.height = canvas.height;
    
    // Create Three.js scene
    this.scene = new THREE.Scene();
    
    // Orthographic camera for flat plane
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    // WebGL renderer using offscreen canvas
    this.renderer = new THREE.WebGLRenderer({ 
      canvas: this.threeCanvas,
      alpha: false,
      antialias: false
    });
    this.renderer.setSize(this.canvas.width, this.canvas.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create a placeholder black texture
    const placeholderTexture = new THREE.DataTexture(
      new Uint8Array([0, 0, 0, 255]), 
      1, 1, 
      THREE.RGBAFormat
    );
    placeholderTexture.needsUpdate = true;

    // Shader uniforms with default palette
    this.uniforms = {
      uTime: { value: 0 },
      uTexture: { value: placeholderTexture },
      uAmplitude: { value: 0.3 },
      uFrequency: { value: 100.0 },
      uColorIntensity: { value: 0.8 },
      uColor1: { value: new THREE.Color('#6366f1') },
      uColor2: { value: new THREE.Color('#8b5cf6') },
      uColor3: { value: new THREE.Color('#d946ef') },
      uColor4: { value: new THREE.Color('#ec4899') },
      uColor5: { value: new THREE.Color('#f43f5e') }
    };

    // Create shader material and plane immediately
    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: this.getVertexShader(),
      fragmentShader: this.getFragmentShader()
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    this.plane = new THREE.Mesh(geometry, material);
    this.scene.add(this.plane);

    console.log('🎥 DistortedCameraRenderer initialized');
  }

  // Called by VJCanvas to provide the video element
  setVideoElement(video: HTMLVideoElement | null) {
    if (!video) {
      console.warn('DistortedCameraRenderer: No video element provided');
      return;
    }

    if (this.videoElement === video && this.videoTexture) {
      return;
    }

    this.videoElement = video;

    if (this.videoTexture) {
      this.videoTexture.dispose();
    }

    this.videoTexture = new THREE.VideoTexture(video);
    this.videoTexture.minFilter = THREE.LinearFilter;
    this.videoTexture.magFilter = THREE.LinearFilter;
    this.videoTexture.format = THREE.RGBAFormat;
    
    this.uniforms.uTexture.value = this.videoTexture;

    console.log('✅ DistortedCameraRenderer: Video texture created');
  }

  private getVertexShader(): string {
    return `
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
  }

  private getFragmentShader(): string {
    return `
      uniform sampler2D uTexture;
      uniform float uTime;
      uniform float uAmplitude;
      uniform float uFrequency;
      
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;
      uniform vec3 uColor4;
      uniform vec3 uColor5;
      
      varying vec2 vUv;
      
      // Function to interpolate between 5 colors based on a 0-1 factor
      vec3 getColorRamp(float t) {
        if (t < 0.25) return mix(uColor1, uColor2, t * 4.0);
        if (t < 0.5) return mix(uColor2, uColor3, (t - 0.25) * 4.0);
        if (t < 0.75) return mix(uColor3, uColor4, (t - 0.5) * 4.0);
        return mix(uColor4, uColor5, (t - 0.75) * 4.0);
      }
      
      // Random noise function
      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }
      
      void main() {
        // Mirror horizontally
        vec2 mirroredUv = vec2(1.0 - vUv.x, vUv.y);
        
        // --- 1. WAVE DISTORTION (Zig-Zag) ---
        // Vertical waves (Up/Down distortion based on X position)
        float wave = sin(mirroredUv.x * uFrequency + uTime * 3.0) * uAmplitude * 0.05; 
        
        // Apply distortion to Y coordinate (Vertical shift)
        vec2 distortedUv = vec2(mirroredUv.x, mirroredUv.y + wave);
        
        // Clamp to avoid edge artifacts
        distortedUv = clamp(distortedUv, 0.001, 0.999);
        
        // --- 2. BLUR SAMPLING ---
        // Heavy blur for abstraction
        vec4 sum = vec4(0.0);
        float blurSize = 0.012; // INCREASED BLUR
        
        // 9-tap gaussian-ish blur
        sum += texture2D(uTexture, distortedUv);
        sum += texture2D(uTexture, distortedUv + vec2(blurSize, 0.0));
        sum += texture2D(uTexture, distortedUv + vec2(-blurSize, 0.0));
        sum += texture2D(uTexture, distortedUv + vec2(0.0, blurSize));
        sum += texture2D(uTexture, distortedUv + vec2(0.0, -blurSize));
        // Diagonals
        sum += texture2D(uTexture, distortedUv + vec2(blurSize, blurSize));
        sum += texture2D(uTexture, distortedUv + vec2(-blurSize, -blurSize));
        sum += texture2D(uTexture, distortedUv + vec2(blurSize, -blurSize));
        sum += texture2D(uTexture, distortedUv + vec2(-blurSize, blurSize));
        
        vec4 blurredColor = sum / 9.0;
        
        // --- 3. HEAT MAP COLORING ---
        // Convert to grayscale luminance
        float lum = dot(blurredColor.rgb, vec3(0.299, 0.587, 0.114));
        
        // Boost contrast for more dramatic heat map
        float contrastLum = pow(lum, 1.2); 
        
        // Map luminance to our custom color palette
        vec3 finalColor = getColorRamp(contrastLum);
        
        // --- 4. NOISE / DOT EFFECT ---
        // Add static noise
        float noise = random(distortedUv + uTime * 0.1);
        
        // Add dot grid effect
        float dotGrid = sin(gl_FragCoord.x * 0.5) * sin(gl_FragCoord.y * 0.5);
        float grain = mix(noise, dotGrid, 0.3); // Mix noise and dots
        
        // Blend noise into final color (overlay mode-ish)
        finalColor = mix(finalColor, finalColor * (0.8 + grain * 0.4), 0.3);
        
        // Add a bit of the original luminance back but very subtle
        finalColor = mix(finalColor, vec3(1.0), contrastLum * 0.1);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    if (!this.plane) return;

    // Resize handling
    if (this.canvas.width !== this.threeCanvas.width || this.canvas.height !== this.threeCanvas.height) {
      this.threeCanvas.width = this.canvas.width;
      this.threeCanvas.height = this.canvas.height;
      this.renderer.setSize(this.canvas.width, this.canvas.height);
    }

    this.time += 0.016;
    this.uniforms.uTime.value = this.time;

    // Update color uniforms from palette
    if (colors && colors.length > 0) {
      this.uniforms.uColor1.value.set(colors[0]);
      this.uniforms.uColor2.value.set(colors[1] || colors[0]);
      this.uniforms.uColor3.value.set(colors[2] || colors[0]);
      this.uniforms.uColor4.value.set(colors[3] || colors[0]);
      this.uniforms.uColor5.value.set(colors[4] || colors[0]);
    }

    // Process hand gestures
    const leftHand = handData.left;
    const rightHand = handData.right;
    
    if (leftHand || rightHand) {
      if (handData.clapping) {
        // CLAP: Maximum chaos
        this.targetAmplitude = 2.0;
        this.targetFrequency = 300.0;
        this.clapVibration = 1.0;
      } else {
        const activeHand = leftHand || rightHand;
        
        if (activeHand) {
          // X = Frequency (Thinness)
          // range: 50 (thin) to 400 (very thin/thread-like)
          const x = Math.max(0, Math.min(1, activeHand.position.x));
          const baseFreq = 50.0 + (x * 350.0);
          
          // Y = Amplitude (Height)
          // range: 0 (flat) to 1.5 (very high distortion)
          // Invert Y: Top of screen = High Amplitude
          const y = Math.max(0, Math.min(1, 1.0 - activeHand.position.y));
          const baseAmp = y * 1.5;

          // Modifiers
          const fingerCount = activeHand.fingerCount || 0;
          
          if (activeHand.gesture === 'pinch' || fingerCount <= 1) {
            // PINCH: Calm down
            this.targetAmplitude = baseAmp * 0.2;
            this.targetFrequency = baseFreq * 0.5;
          } else {
            // OPEN HAND: Full power
            this.targetAmplitude = baseAmp;
            this.targetFrequency = baseFreq;
          }
        }
      }
    } else {
      // Default idle state - high freq for "thin" look
      this.targetAmplitude = 0.5;
      this.targetFrequency = 150.0;
    }

    // Smooth physics
    this.currentAmplitude += (this.targetAmplitude - this.currentAmplitude) * 0.1;
    this.currentFrequency += (this.targetFrequency - this.currentFrequency) * 0.1;
    this.clapVibration *= 0.95;

    // Add vibration
    const totalAmp = this.currentAmplitude + this.clapVibration * Math.sin(this.time * 50.0) * 0.5;

    this.uniforms.uAmplitude.value = totalAmp;
    this.uniforms.uFrequency.value = this.currentFrequency;

    // Render Three.js scene
    this.renderer.render(this.scene, this.camera);

    // Draw to main canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.threeCanvas, 0, 0, this.canvas.width, this.canvas.height);
  }

  destroy() {
    if (this.videoTexture) {
      this.videoTexture.dispose();
    }
    if (this.plane) {
      this.plane.geometry.dispose();
      if (this.plane.material instanceof THREE.Material) {
        this.plane.material.dispose();
      }
    }
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    console.log('🎥 DistortedCameraRenderer destroyed');
  }
}
