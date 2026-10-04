import * as THREE from 'three';
import { InflatedLook, Shared } from '../inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SKIES
 * ═══════════════════════════════════════════════════════════════════════════
 * Two soft, full-frame backgrounds for the nature family, each one shader
 * drawn over the whole frame:
 *
 *   Aurora      curtains of light folding over a night sky, rays running up
 *               them, the colour green at the hem to violet at the top
 *   Watercolour washes of pigment on paper, their edges darker where the
 *               paint pooled as it dried, granulated, with fresh drops
 *               blooming open on the kick
 *
 * A sky is a mesh rather than a renderer, so the same sky can stand alone as
 * a visual (AuroraRenderer, WatercolourRenderer) or sit at the back of Nature
 * World's 3D scene, drawn first and behind everything, in the same pass.
 * The watercolour takes its pigments from the family's palettes, so a sky
 * behind the flowers is painted in the flowers' colours.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const AURORA = 0;
export const WATERCOLOUR = 1;

/** The most paint drops blooming at once. */
export const DROPS = 6;

const VERT = /* glsl */ `
void main() {
  // A triangle past every edge of the frame, at the very back.
  gl_Position = vec4(position.xy, 1.0, 1.0);
}`;

const COMMON = /* glsl */ `
precision highp float;
uniform vec2 uRes;
uniform float uTime;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + 17.1; a *= 0.5; }
  return v;
}
vec3 hueTurn(vec3 c, float degrees) {
  float a = radians(degrees);
  vec3 k = vec3(0.57735);
  return c * cos(a) + cross(k, c) * sin(a) + k * dot(k, c) * (1.0 - cos(a));
}
`;

const AURORA_FRAG = /* glsl */ `
${COMMON}
uniform float uHue, uHeight, uBright, uShimmer, uNight, uCurtains, uFlare;
uniform vec3 uHand;   // x, y in frame units, and how present

vec3 curtainColour(float h) {
  vec3 green = vec3(0.25, 1.0, 0.55);
  vec3 teal = vec3(0.2, 0.85, 0.95);
  vec3 violet = vec3(0.7, 0.32, 1.0);
  vec3 c = mix(green, teal, smoothstep(0.05, 0.45, h));
  c = mix(c, violet, smoothstep(0.4, 1.0, h));
  return hueTurn(c, uHue);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * aspect, uv.y);

  // The night: deep blue overhead, a little warmer toward the horizon, and
  // a scatter of stars that twinkle.
  vec3 night = mix(vec3(0.035, 0.03, 0.09), vec3(0.005, 0.012, 0.04), uv.y);
  vec2 cell = floor(gl_FragCoord.xy / 3.0);
  float star = step(0.9965, hash(cell)) * (0.5 + 0.5 * sin(uTime * 2.0 + hash(cell + 3.1) * 40.0));
  night += vec3(0.75, 0.8, 1.0) * star * smoothstep(0.15, 0.6, uv.y);

  vec3 light = vec3(0.0);
  for (int k = 0; k < 4; k++) {
    float fk = float(k);
    if (fk >= uCurtains) break;
    // Each curtain hangs along a slowly folding line across the sky.
    float xs = p.x * (0.8 + 0.15 * fk) + fk * 1.7;
    float fold = fbm(vec2(xs * 0.55 + uTime * 0.04 * (1.0 + 0.3 * fk), fk * 3.1));
    float hem = 0.3 + fk * 0.1 + 0.45 * (fold - 0.5) + 0.07 * sin(xs * 2.3 + uTime * 0.3 + fk);
    // Near a hand the curtain lifts toward it and burns brighter.
    float near = uHand.z * exp(-pow((p.x - uHand.x) * 1.6, 2.0));
    hem += near * (uHand.y - hem) * 0.25;
    float d = p.y - hem;
    float tall = (0.24 + 0.36 * uHeight) * (0.55 + 0.9 * noise(vec2(xs * 1.7, uTime * 0.1 + fk)));
    float lower = smoothstep(-0.02, 0.012, d);
    float upper = exp(-max(d, 0.0) / tall * 2.4);
    // The rays: fine vertical streaks running up the curtain, shivering with the hats.
    float rays = noise(vec2(xs * 26.0 + fold * 6.0, uTime * (0.25 + uShimmer * 0.8) + fk * 7.0));
    rays = 0.35 + 0.65 * pow(rays, 1.6);
    float body = 0.55 + 0.45 * fbm(vec2(xs * 3.0 - uTime * 0.12, d * 3.0 + fk));
    float glow = lower * upper * rays * body * (1.0 + near * 1.2);
    // A brighter fringe right at the hem, as real aurora has.
    glow += lower * exp(-max(d, 0.0) / 0.018) * 0.45 * rays;
    float h = clamp(d / tall, 0.0, 1.0);
    // The violet tops are faint in the sky but there; lift them a little.
    light += curtainColour(h) * glow * (1.0 + 0.9 * smoothstep(0.25, 0.9, h)) * (1.0 - 0.18 * fk);
  }
  light *= uBright * (1.0 + uFlare * 1.5);
  vec3 col = night * uNight + light;
  col = 1.0 - exp(-col * 1.35);
  col += (hash(gl_FragCoord.xy + uTime) - 0.5) / 255.0 * 2.0;
  gl_FragColor = vec4(col, 1.0);
}`;

const WATERCOLOUR_FRAG = /* glsl */ `
${COMMON}
uniform sampler2D uPalA;
uniform sampler2D uPalB;
uniform float uPalMix, uT, uOff;
uniform vec2 uWind;
uniform vec3 uHand;
uniform float uWet, uSwell, uPaper, uWashes;
uniform vec4 uDrops[${DROPS}];

vec3 palette(float c) {
  vec2 at = vec2(fract(c), 0.5);
  return mix(texture(uPalA, at).rgb, texture(uPalB, at).rgb, uPalMix);
}
/* A pigment, from the family's palette, thinned as watercolour is. */
vec3 pigment(float c) {
  vec3 col = palette(c);
  return 1.0 - (1.0 - col) * 0.62;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * aspect, uv.y);
  vec2 fc = gl_FragCoord.xy / (uRes.y / 720.0);

  // The paper: warm white, a soft tooth to it.
  float tooth = noise(fc * 0.45) * 0.6 + noise(fc * 0.13) * 0.4;
  vec3 paper = vec3(0.97, 0.955, 0.925) * (0.965 + 0.05 * tooth);

  // The hand pushes the washes aside as if blowing on wet paint.
  vec2 toHand = p - uHand.xy;
  vec2 push = uHand.z * toHand * exp(-dot(toHand, toHand) * 6.0) * 0.35;

  vec3 col = paper;
  vec3 glow = vec3(0.0);
  float soft = 0.03 + 0.09 * uWet;
  for (int k = 0; k < 3; k++) {
    float fk = float(k);
    if (fk >= uWashes) break;
    vec2 q = (p - push) * (1.1 + 0.35 * fk) + uWind * (0.7 + 0.3 * fk) + vec2(fk * 5.3, fk * 2.1);
    vec2 warp = vec2(fbm(q + vec2(0.0, uTime * 0.025)), fbm(q + vec2(5.2, 1.3) - uTime * 0.02));
    float f = fbm(q + 1.7 * warp);
    float thr = 0.5 + fk * 0.035 - uSwell * 0.06;
    float wash = smoothstep(thr - soft, thr + soft, f);
    // Where the wash ends, the paint pooled as it dried: a darker line.
    float edge = exp(-pow((f - thr - soft * 0.6) / (soft * 0.55), 2.0));
    // Granulation: pigment settling into the paper's tooth.
    float gran = 0.75 + 0.5 * noise(fc * (0.6 + 0.2 * fk) + fk * 9.0);
    float amount = wash * (0.42 + 0.3 * edge) * gran * (0.8 - 0.12 * fk);
    vec3 pig = pigment(uOff + uT + fk * 0.21 + 0.08 * (f - 0.5));
    // Glazed: each layer multiplies over what is under it, as watercolour does.
    col *= mix(vec3(1.0), pig, clamp(amount, 0.0, 1.0));
    glow += palette(uOff + uT + fk * 0.21) * amount * 0.55;
  }

  // Fresh drops, blooming open from where they landed.
  for (int i = 0; i < ${DROPS}; i++) {
    vec4 drop = uDrops[i];
    if (drop.z < 0.0) continue;
    float age = drop.z;
    float r = 0.06 + 0.24 * (1.0 - exp(-age * 1.2));
    vec2 dp = p - drop.xy;
    float wob = (noise(dp * 9.0 + drop.w * 13.0) - 0.5) * 0.06 * r / 0.3;
    float dist = length(dp) + wob;
    float inside = smoothstep(r, r - 0.025, dist);
    float rim = exp(-pow((dist - r + 0.008) / 0.012, 2.0));
    float fade = exp(-age * 0.12);
    float amount = (inside * 0.32 + rim * 0.45) * fade;
    vec3 pig = pigment(uOff + uT + drop.w);
    col *= mix(vec3(1.0), pig, clamp(amount, 0.0, 1.0));
    glow += palette(uOff + uT + drop.w) * amount * 0.6;
  }

  // Paper 0 swaps the paper for black, the paint glowing on it instead —
  // a sky that stacks over other layers rather than covering them.
  vec3 dark = 1.0 - exp(-glow * 1.6);
  vec3 outc = mix(dark, col, uPaper);
  outc += (hash(gl_FragCoord.xy) - 0.5) / 255.0 * 2.0;
  gl_FragColor = vec4(outc, 1.0);
}`;

export interface Drop { x: number; y: number; age: number; seed: number }

/**
 * One sky: a mesh behind everything, and the uniforms it reads. Whoever owns
 * it writes the uniforms each frame and draws it in whatever scene it is in.
 */
export class SkyLayer {
  readonly mesh: THREE.Mesh;
  readonly uniforms: Record<string, { value: unknown }>;
  private readonly palette: Shared | null;
  private readonly drops: THREE.Vector4[];

  constructor(readonly kind: number, look: InflatedLook | null) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
    this.drops = Array.from({ length: DROPS }, () => new THREE.Vector4(0, 0, -1, 0));
    this.palette = look ? look.shared() : null;
    this.uniforms = {
      uRes: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      // Aurora
      uHue: { value: 0 },
      uHeight: { value: 0.5 },
      uBright: { value: 1 },
      uShimmer: { value: 0 },
      uNight: { value: 1 },
      uCurtains: { value: 3 },
      uFlare: { value: 0 },
      uHand: { value: new THREE.Vector3() },
      // Watercolour
      uWind: { value: new THREE.Vector2() },
      uWet: { value: 0.5 },
      uSwell: { value: 0 },
      uPaper: { value: 1 },
      uWashes: { value: 3 },
      uDrops: { value: this.drops },
      ...(this.palette ?? {}),
    };
    const material = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: kind === AURORA ? AURORA_FRAG : WATERCOLOUR_FRAG,
      uniforms: this.uniforms as Record<string, THREE.IUniform>,
      depthTest: false,
      depthWrite: false,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = -1000;
  }

  /** The palette and its flow, for the watercolour. */
  colour(look: InflatedLook, t: number, offset: number) {
    if (!this.palette) return;
    look.apply(this.palette, 0, 0);
    this.palette.uT.value = t;
    this.palette.uOff.value = offset;
  }

  /** The drops blooming now. */
  setDrops(drops: Drop[]) {
    for (let i = 0; i < DROPS; i++) {
      const d = drops[i];
      if (d) this.drops[i].set(d.x, d.y, d.age, d.seed);
      else this.drops[i].set(0, 0, -1, 0);
    }
  }

  set(name: string, value: number) {
    this.uniforms[name].value = value;
  }

  dispose() {
    this.mesh.geometry.dispose();
    (this.mesh.material as THREE.Material).dispose();
  }
}
