import { HandData } from '../../App';
import * as THREE from 'three';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LIQUID CHROME RENDERER (Key L)
 * ═══════════════════════════════════════════════════════════════════════════
 * A full-screen GLSL shader effect that simulates iridescent, liquid metal.
 * It uses domain warping FBM noise for the fluid motion and chromatic 
 * aberration for the glassy/spectral look.
 * 
 * INTERACTIONS:
 * - Hand Movement: Distorts the fluid locally (pushing it)
 * - Pinch: Sharp, small, concentrated distortion (Radius 0.15, Strength 2.5)
 * - 2 Fingers: Medium soft distortion (Radius 0.3, Strength 1.5)
 * - 5 Fingers (Open): Wide, gentle flow (Radius 0.6, Strength 1.0)
 * - Clap: Huge full-screen explosion (Radius 1.5, Strength 3.0)
 * - Colors: Modulates the base iridescence
 * ═════════════════════════════════════════════════��═════════════════════════
 */

export class LiquidChromeRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  
  // Three.js components
  private threeCanvas: HTMLCanvasElement;
  private scene: THREE.Scene;
  private camera: THREE.OrthographicCamera;
  private renderer: THREE.WebGLRenderer;
  private material: THREE.ShaderMaterial;
  
  // State
  private time = 0;
  private hand1 = new THREE.Vector2(0.5, 0.5);
  private hand2 = new THREE.Vector2(0.5, 0.5);
  
  // Hand 1 Params
  private h1Radius = 0.3;
  private h1Strength = 0.0;
  
  // Hand 2 Params
  private h2Radius = 0.3;
  private h2Strength = 0.0;

  // Shader Code
  private vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  private fragmentShader = `
    uniform float uTime;
    uniform vec2 uResolution;
    
    uniform vec2 uHand1Pos;
    uniform float uHand1Radius;
    uniform float uHand1Strength;
    
    uniform vec2 uHand2Pos;
    uniform float uHand2Radius;
    uniform float uHand2Strength;
    
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    
    varying vec2 vUv;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    // Domain warping for liquid effect
    float fbm(vec2 p) {
        float f = 0.0;
        float w = 0.5;
        float t = uTime * 0.2;
        for (int i = 0; i < 3; i++) {
            f += w * snoise(p);
            p = p * 2.0 + vec2(t * 0.5, -t * 0.3); 
            w *= 0.5;
        }
        return f;
    }

    float pattern(vec2 p, out vec2 q, out vec2 r) {
        // Hand interaction - distort the coordinate space
        float d1 = distance(p, uHand1Pos);
        float d2 = distance(p, uHand2Pos);
        float influence = 0.0;
        
        if (uHand1Strength > 0.01) {
             influence += smoothstep(uHand1Radius, 0.0, d1) * uHand1Strength;
        }
        if (uHand2Strength > 0.01) {
             influence += smoothstep(uHand2Radius, 0.0, d2) * uHand2Strength;
        }
        
        // Domain warping with interaction
        // The influence distorts the domain, creating the "push"
        q.x = fbm(p + vec2(0.0, 0.0) + influence * 0.2);
        q.y = fbm(p + vec2(5.2, 1.3) - influence * 0.2);

        r.x = fbm(p + 4.0*q + vec2(1.7, 9.2));
        r.y = fbm(p + 4.0*q + vec2(8.3, 2.8));

        return fbm(p + 4.0*r);
    }

    void main() {
        vec2 uv = vUv;
        // Correct aspect ratio
        uv.x *= uResolution.x / uResolution.y;
        
        // Zoom out slightly
        uv *= 0.8;

        vec2 q, r;
        float noiseVal = pattern(uv, q, r);

        // Calculate normal-like vector from noise derivatives (fake)
        vec3 normal = normalize(vec3(q, 1.0)); // Using the warp vector as normal

        // Lighting / Chrome effect
        vec3 lightDir = normalize(vec3(-1.0, 1.0, 1.0));
        float diffuse = max(0.0, dot(normal, lightDir));
        float specular = pow(max(0.0, dot(normal, lightDir)), 20.0); // Sharp highlights

        // Chromatic Aberration / Iridescence
        // We sample the pattern with slight offsets for R, G, B
        vec3 col;
        
        // Base metallic colors mixed with user colors
        // Mix between dark liquid and the noise value
        vec3 base = mix(vec3(0.05), uColor1, noiseVal * 0.5);
        
        // Add the "oil slick" rainbow effect
        // Cosine palette based on noise and time
        vec3 rainbow = 0.5 + 0.5 * cos(uTime * 0.5 + noiseVal * 6.0 + vec3(0.0, 2.0, 4.0));
        
        // Final composite
        col = base;
        col += rainbow * 0.3 * length(q); // Add rainbow at edges of flow
        col += specular * 0.8; // Add white highlights
        
        // Add grain
        float grain = fract(sin(dot(vUv, vec2(12.9898, 78.233) * uTime)) * 43758.5453);
        col += (grain - 0.5) * 0.15;

        gl_FragColor = vec4(col, 1.0);
    }
  `;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;

    // Suppress Three.js warnings
    const originalWarn = console.warn;
    console.warn = (...args) => {
      if (typeof args[0] === 'string' && args[0].includes('Multiple instances')) return;
      originalWarn.apply(console, args);
    };

    // Create offscreen canvas
    this.threeCanvas = document.createElement('canvas');
    this.threeCanvas.width = canvas.width;
    this.threeCanvas.height = canvas.height;

    this.initThreeJS();
    console.log('💧 LiquidChromeRenderer initialized');
    
    console.warn = originalWarn;
  }

  private initThreeJS() {
    this.scene = new THREE.Scene();
    
    // Orthographic camera for full screen 2D-like effect
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.threeCanvas,
      antialias: false, // Shader handles AA style smoothness
      alpha: true
    });
    this.renderer.setSize(this.canvas.width, this.canvas.height);

    // Create full screen plane
    const geometry = new THREE.PlaneGeometry(2, 2);
    
    this.material = new THREE.ShaderMaterial({
      vertexShader: this.vertexShader,
      fragmentShader: this.fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(this.canvas.width, this.canvas.height) },
        
        uHand1Pos: { value: new THREE.Vector2(0.5, 0.5) },
        uHand1Radius: { value: 0.3 },
        uHand1Strength: { value: 0.0 },
        
        uHand2Pos: { value: new THREE.Vector2(0.5, 0.5) },
        uHand2Radius: { value: 0.3 },
        uHand2Strength: { value: 0.0 },
        
        uColor1: { value: new THREE.Color(0x6366f1) }, // Primary
        uColor2: { value: new THREE.Color(0x8b5cf6) }, // Secondary
        uColor3: { value: new THREE.Color(0xd946ef) }  // Accent
      }
    });

    const mesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(mesh);
  }

  private getHandParams(hand: HandData['left']): { radius: number, strength: number } {
    if (!hand) return { radius: 0.3, strength: 0 };
    
    // 1. Pinch = Small radius, High Strength (Concentrated)
    if (hand.gesture === 'pinch') {
      return { radius: 0.15, strength: 2.5 };
    }
    
    // 2. Finger Count Logic
    const fingers = hand.fingerCount !== undefined ? hand.fingerCount : 5;
    
    if (fingers <= 2) {
      // 2 Fingers = Medium
      return { radius: 0.3, strength: 1.5 };
    } else {
      // 5 Fingers / Open = Large, Gentler
      return { radius: 0.6, strength: 1.0 };
    }
  }

  render(handData: HandData, colors: string[]) {
    this.time += 0.01;

    // Handle Resize
    if (this.threeCanvas.width !== this.canvas.width || this.threeCanvas.height !== this.canvas.height) {
      this.renderer.setSize(this.canvas.width, this.canvas.height);
      this.threeCanvas.width = this.canvas.width;
      this.threeCanvas.height = this.canvas.height;
      this.material.uniforms.uResolution.value.set(this.canvas.width, this.canvas.height);
    }

    // Update Time
    this.material.uniforms.uTime.value = this.time;

    // Aspect ratio for position correction
    const aspect = this.canvas.width / this.canvas.height;
    
    // Global Clap Override
    if (handData.clapping) {
        // Explosion Effect
        const explosionRadius = 1.5; // Covers almost full screen
        const explosionStrength = 3.0 + Math.sin(this.time * 20) * 0.5; // Pulsing
        
        this.h1Radius += (explosionRadius - this.h1Radius) * 0.1;
        this.h1Strength += (explosionStrength - this.h1Strength) * 0.1;
        this.h2Radius += (explosionRadius - this.h2Radius) * 0.1;
        this.h2Strength += (explosionStrength - this.h2Strength) * 0.1;
    } else {
        // Individual Hand Logic
        
        // --- LEFT HAND ---
        if (handData.left) {
            const target = this.getHandParams(handData.left);
            
            // Smoothly interpolate
            this.h1Radius += (target.radius - this.h1Radius) * 0.1;
            this.h1Strength += (target.strength - this.h1Strength) * 0.1;
            
            // Update Position
            const x = (handData.left.position.x) * aspect * 0.8;
            const y = (1.0 - handData.left.position.y) * 0.8;
            
            this.material.uniforms.uHand1Pos.value.set(x, y);
        } else {
            // Fade out if hand lost
            this.h1Strength *= 0.9;
        }
        
        // --- RIGHT HAND ---
        if (handData.right) {
             const target = this.getHandParams(handData.right);
            
            // Smoothly interpolate
            this.h2Radius += (target.radius - this.h2Radius) * 0.1;
            this.h2Strength += (target.strength - this.h2Strength) * 0.1;
            
            // Update Position
            const x = (handData.right.position.x) * aspect * 0.8;
            const y = (1.0 - handData.right.position.y) * 0.8;
            
            this.material.uniforms.uHand2Pos.value.set(x, y);
        } else {
            // Fade out if hand lost
            this.h2Strength *= 0.9;
        }
    }
    
    // Apply values to uniforms
    this.material.uniforms.uHand1Radius.value = this.h1Radius;
    this.material.uniforms.uHand1Strength.value = this.h1Strength;
    this.material.uniforms.uHand2Radius.value = this.h2Radius;
    this.material.uniforms.uHand2Strength.value = this.h2Strength;

    // Update Colors
    if (colors && colors.length >= 3) {
        this.material.uniforms.uColor1.value.set(colors[0]);
        this.material.uniforms.uColor2.value.set(colors[1]);
        this.material.uniforms.uColor3.value.set(colors[2]);
    }

    // Render Three.js
    this.renderer.render(this.scene, this.camera);

    // Draw to 2D Canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.threeCanvas, 0, 0);
  }
  
  destroy() {
      this.renderer.dispose();
      this.material.dispose();
  }
}
