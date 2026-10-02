import * as THREE from 'three';
import { AudioData, HandData } from '../../../App';
import { generateColors } from '../../../config/palette';
import { vjTime } from '../../../motion/clock';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE INFLATED STYLE
 * ═══════════════════════════════════════════════════════════════════════════
 * What Bloom Field, Butterflies and every later motif in this family share:
 * the palettes, the one shader, the studio backdrop, the camera, and how the
 * hands and the music are read.
 *
 * It lives in one place so the motifs stay one world. Built separately, they
 * would drift — a slightly different shadow walk here, a different camera
 * there — and the moment two were stacked the seam would show. With one
 * source, a butterfly crossing a flower field is lit, coloured and framed
 * exactly as the flowers are, because it is the same code doing it.
 *
 * The shader has no lights. Shading does not darken: it moves the colour
 * FORWARD through a cyclic palette, so a red surface's shadow is not dark red
 * but navy and then blue. That is what gives the inflated, balloon-like look.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** Seconds. Every periodic motion in the family loops in this. */
export const LOOP = 12;
export const TAU = Math.PI * 2;

type Stop = [number, string];

/**
 * The palettes, each a loop: the last stop is the first, so the colour can run
 * round without a join. They share the reel's shape — light, saturated, a deep
 * dark, saturated again, pale — because the shading walks forward through them
 * and that walk is the whole look. A palette without its dark would come out
 * flat whatever its colours.
 */
const PALETTES: Stop[][] = [
  // The reel: green, cream, pink, red, navy, blue, pale, cream, green.
  [
    [0.00, '#5ea733'], [0.10, '#a9c97a'], [0.17, '#efe6c6'], [0.26, '#f2b2c5'],
    [0.36, '#df4a67'], [0.45, '#b81f3d'], [0.53, '#1a0d33'], [0.61, '#2e44d8'],
    [0.70, '#5f78f0'], [0.79, '#dfe4f4'], [0.87, '#eee6c4'], [0.94, '#9cc46c'],
    [1.00, '#5ea733'],
  ],
  // Ember: gold, cream, coral, vermilion, oxblood, burnt orange, peach.
  [
    [0.00, '#e0a82e'], [0.10, '#f0cd7a'], [0.17, '#f6ead0'], [0.26, '#f6b49a'],
    [0.36, '#e8573a'], [0.45, '#b52a1c'], [0.53, '#2a0a0c'], [0.61, '#a8401c'],
    [0.70, '#e8823e'], [0.79, '#f7dcc4'], [0.87, '#f4e8c8'], [0.94, '#e9c060'],
    [1.00, '#e0a82e'],
  ],
  // Lagoon: teal, mint, cream, aqua, cyan, deep sea, violet, lilac.
  [
    [0.00, '#1f9a8a'], [0.10, '#86d1bf'], [0.17, '#eaf2e2'], [0.26, '#9fe3e8'],
    [0.36, '#25b5d4'], [0.45, '#13708f'], [0.53, '#0b1430'], [0.61, '#5a35c8'],
    [0.70, '#9a7cf0'], [0.79, '#e6e0f6'], [0.87, '#e4f2ea'], [0.94, '#5cc2a6'],
    [1.00, '#1f9a8a'],
  ],
  // Ink: porcelain and navy, almost a monochrome.
  [
    [0.00, '#2b3f8f'], [0.10, '#7d8fd0'], [0.17, '#eef0f6'], [0.26, '#c9d0ea'],
    [0.36, '#5266b8'], [0.45, '#22307a'], [0.53, '#070a1c'], [0.61, '#26357e'],
    [0.70, '#6a7cc6'], [0.79, '#e8ebf5'], [0.87, '#f4f3ee'], [0.94, '#8a9ad6'],
    [1.00, '#2b3f8f'],
  ],
];

/** Names for the palette slider, in the same order. */
export const PALETTE_NAMES = ['Reel', 'Ember', 'Lagoon', 'Ink'];

const VERT = /* glsl */ `
varying vec3 vN;
varying vec3 vPos;
varying vec3 vW;
varying vec2 vUv;
varying float vRad;
void main() {
  vUv = uv;
  vRad = position.z * 0.5 + 0.5;
  vW = (modelMatrix * vec4(position, 1.0)).xyz;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vPos = mv.xyz;
  vN = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * mv;
}`;

const FRAG = /* glsl */ `
precision highp float;
varying vec3 vN;
varying vec3 vPos;
varying vec3 vW;
varying vec2 vUv;
varying float vRad;
uniform sampler2D uPalA;
uniform sampler2D uPalB;
uniform float uPalMix;
uniform int uMode;            // 0 lobe (petal, wing), 1 tube (stem), 2 core (body, stamens)
uniform float uT, uOff, uAng, uWA, uWB, uWC, uWS, uDepth, uSpec;
uniform vec3 uCenter;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

vec3 palette(float c) {
  vec2 at = vec2(fract(c), 0.5);
  return mix(texture2D(uPalA, at).rgb, texture2D(uPalB, at).rgb, uPalMix);
}

void main() {
  vec3 N = normalize(vN);
  if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(-vPos);
  vec3 L = normalize(vec3(0.3, 0.35, 0.9));
  float wrap = clamp(dot(N, L) * 0.5 + 0.5, 0.0, 1.0);
  float rim = 1.0 - clamp(dot(N, V), 0.0, 1.0);

  float c = uOff + uT;
  float ao = 1.0;
  if (uMode == 0) {
    ao = smoothstep(0.15, 1.2, length(vPos - uCenter));
    c += uWA * 0.5 * (1.0 + cos(uAng)) * 0.55   // sweeps round the fan of lobes
       + uWB * vW.y * 0.22                       // horizontal bands
       + uWC * vRad * 0.45;                      // rings out along each lobe
  } else if (uMode == 1) {
    c += vUv.x * 0.85 * uWS;                     // bands flowing along the tube
  } else {
    c += 0.42;
  }

  // Shading travels forward through the palette: lit surfaces sit on the
  // lighter stops, shadowed ones slide on into the deeper ones.
  c += uDepth * (1.0 - wrap) + 0.12 * smoothstep(0.55, 1.0, rim) + 0.18 * (1.0 - ao);

  vec3 col = palette(c);
  col *= 0.82 + 0.28 * wrap;
  col *= mix(0.55, 1.0, ao);
  col += vec3(1.0) * pow(max(dot(reflect(-L, N), V), 0.0), 16.0) * uSpec * ao;
  col = mix(col, col * col * 0.6, smoothstep(0.85, 1.0, rim) * 0.6);
  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0 * 2.0;
  gl_FragColor = vec4(max(col, 0.0), 1.0);
}`;

/** Which part of the shader a surface takes. */
export const LOBE = 0;
export const TUBE = 1;
export const CORE = 2;

// ── colour ───────────────────────────────────────────────────────────────────

export function hexToHsl(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const r = (parseInt(full.slice(0, 2), 16) || 0) / 255;
  const g = (parseInt(full.slice(2, 4), 16) || 0) / 255;
  const b = (parseInt(full.slice(4, 6), 16) || 0) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let hue: number;
  if (max === r) hue = ((g - b) / d + (g < b ? 6 : 0)) * 60;
  else if (max === g) hue = ((b - r) / d + 2) * 60;
  else hue = ((r - g) / d + 4) * 60;
  return [hue, s, l];
}

function hslCss(h: number, s: number, l: number): string {
  return `hsl(${((h % 360) + 360) % 360} ${Math.max(0, Math.min(1, s)) * 100}% ${l * 100}%)`;
}

/**
 * The layer's colour panel, read as a turn of the palette.
 *
 * The palette's colours are the point of this style, so the panel does not
 * replace them: it rotates every stop round the colour wheel by however far
 * the chosen hue is from the default, and scales their saturation the same
 * way. Untouched, the panel leaves the palette exactly as it is; turned, the
 * whole thing shifts together and keeps its light-to-dark shape, which is what
 * the shading depends on. Grayscale takes the saturation out entirely.
 */
const REFERENCE = hexToHsl(generateColors(245, 100, 'contrast')[0]);

export function turnFrom(colors: string[]): { hue: number; sat: number } {
  const [h, s] = hexToHsl(colors[0] ?? '#000000');
  if (s === 0) return { hue: 0, sat: 0 };
  return { hue: h - REFERENCE[0], sat: s / (REFERENCE[1] || 1) };
}

function paletteTexture(stops: Stop[], turn: { hue: number; sat: number }): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 1;
  const g = canvas.getContext('2d')!;
  const gradient = g.createLinearGradient(0, 0, 512, 0);
  for (const [at, hex] of stops) {
    const [h, s, l] = hexToHsl(hex);
    gradient.addColorStop(at, hslCss(h + turn.hue, s * turn.sat, l));
  }
  g.fillStyle = gradient;
  g.fillRect(0, 0, 512, 1);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  return texture;
}

// ── materials ────────────────────────────────────────────────────────────────

/**
 * Uniforms one object writes once per frame and all its surfaces read: a
 * flower's head and petals, a butterfly's wings and body.
 */
export interface Shared {
  uPalA: { value: THREE.Texture };
  uPalB: { value: THREE.Texture };
  uPalMix: { value: number };
  uT: { value: number };
  uOff: { value: number };
  uWA: { value: number };
  uWB: { value: number };
  uWC: { value: number };
  uDepth: { value: number };
  uSpec: { value: number };
  uCenter: { value: THREE.Vector3 };
}

/**
 * The palettes and the material they feed, for one renderer.
 *
 * Holds the textures, turns them when the colour panel moves, and crossfades
 * between palettes when the slider changes, so a swap dissolves over a second
 * rather than cutting.
 */
export class InflatedLook {
  private textures: THREE.CanvasTexture[];
  private turnKey = '#reference';
  private palFrom = 0;
  private palTo = 0;
  private palMix = 1;

  constructor() {
    this.textures = PALETTES.map((stops) => paletteTexture(stops, { hue: 0, sat: 1 }));
  }

  /** A fresh set of uniforms for one object. */
  shared(): Shared {
    return {
      uPalA: { value: this.textures[0] },
      uPalB: { value: this.textures[0] },
      uPalMix: { value: 0 },
      uT: { value: 0 },
      uOff: { value: 0 },
      uWA: { value: 0 },
      uWB: { value: 0 },
      uWC: { value: 0 },
      uDepth: { value: 0.32 },
      uSpec: { value: 0.16 },
      uCenter: { value: new THREE.Vector3() },
    };
  }

  /** A surface in the style. `extra` carries the per-surface uniforms. */
  material(mode: number, common: Shared, extra: Record<string, { value: number }> = {}) {
    return new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      side: THREE.DoubleSide,
      uniforms: {
        ...common,
        uMode: { value: mode },
        uAng: { value: 0 },
        uWS: { value: 1 },
        ...extra,
      },
    });
  }

  /**
   * Brings the palettes up to date for this frame: turned to the colour
   * panel, and moving towards the palette the slider asks for. On the first
   * frame the slider's palette is taken as it is, with no fade from the
   * default — the saved settings arrive after the renderer is built.
   */
  update(colors: string[], palette: number, dt: number, first: boolean) {
    const key = colors[0] ?? '';
    if (key !== this.turnKey) {
      this.turnKey = key;
      const turn = turnFrom(colors);
      const old = this.textures;
      this.textures = PALETTES.map((stops) => paletteTexture(stops, turn));
      for (const texture of old) texture.dispose();
    }
    const wanted = Math.max(0, Math.min(PALETTES.length - 1, Math.round(palette)));
    if (first) {
      this.palFrom = this.palTo = wanted;
      this.palMix = 1;
    }
    if (wanted !== this.palTo) {
      // Carry on from wherever a previous swap had got to.
      this.palFrom = this.palMix < 0.5 ? this.palFrom : this.palTo;
      this.palTo = wanted;
      this.palMix = 0;
    }
    this.palMix = Math.min(1, this.palMix + dt);
  }

  /** Writes this frame's palette, shadow depth and highlight into an object's uniforms. */
  apply(shared: Shared, depth: number, spec: number) {
    shared.uPalA.value = this.textures[this.palFrom];
    shared.uPalB.value = this.textures[this.palTo];
    shared.uPalMix.value = this.palMix;
    shared.uDepth.value = depth;
    shared.uSpec.value = spec;
  }

  dispose() {
    for (const texture of this.textures) texture.dispose();
    this.textures = [];
  }
}

// ── the stage ────────────────────────────────────────────────────────────────

/**
 * The reel's camera lens for this screen.
 *
 * The reel is framed for 16:9. On a narrower screen the horizontal field of
 * view is held at what 16:9 would give, so whatever sits at the sides stays in
 * shot instead of being cut by the edges.
 */
export function frameCamera(camera: THREE.PerspectiveCamera, width: number, height: number) {
  const aspect = width / height;
  const baseFov = 30;
  const halfH = Math.tan(((baseFov / 2) * Math.PI) / 180);
  const fov = aspect < 16 / 9
    ? (2 * Math.atan((halfH * (16 / 9)) / aspect) * 180) / Math.PI
    : baseFov;
  if (camera.aspect !== aspect || camera.fov !== fov) {
    camera.aspect = aspect;
    camera.fov = fov;
    camera.updateProjectionMatrix();
  }
}

/**
 * The studio: grey, pale lavender, grey. `k` dims it to black, which is what
 * a motif wants when it is stacked over another — a grey screened over a
 * layer washes everything under it out.
 */
export function drawBackdrop(ctx: CanvasRenderingContext2D, width: number, height: number, k: number) {
  const amount = Math.max(0, Math.min(1, k));
  const shade = (hex: string) => {
    const n = parseInt(hex.slice(1), 16);
    const r = Math.round(((n >> 16) & 255) * amount);
    const g = Math.round(((n >> 8) & 255) * amount);
    const b = Math.round((n & 255) * amount);
    return `rgb(${r},${g},${b})`;
  };
  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 1;
  if (amount <= 0) {
    ctx.fillStyle = '#000';
  } else {
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0.0, shade('#8e94a2'));
    gradient.addColorStop(0.2, shade('#bfc3d0'));
    gradient.addColorStop(0.42, shade('#dde1ec'));
    gradient.addColorStop(0.68, shade('#d9dde9'));
    gradient.addColorStop(1.0, shade('#9ea2af'));
    ctx.fillStyle = gradient;
  }
  ctx.fillRect(0, 0, width, height);
}

/** The WebGL renderer every motif draws with, onto its own offscreen canvas. */
export function makeRenderer(surface: HTMLCanvasElement): THREE.WebGLRenderer {
  const renderer = new THREE.WebGLRenderer({
    canvas: surface,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(1);
  renderer.setClearColor(0x000000, 0);
  return renderer;
}

/** What a motif shows when this machine has no WebGL to give it. */
export function drawUnavailable(ctx: CanvasRenderingContext2D, width: number, height: number, name: string) {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font = '500 14px ui-monospace, monospace';
  ctx.textAlign = 'center';
  ctx.fillText(`${name} NEEDS WEBGL`, width / 2, height / 2);
}

// ── playing ──────────────────────────────────────────────────────────────────

/**
 * The hands and the music, read the same way for every motif.
 *
 * Each frame this works out how much real time passed (for the easing, so the
 * music reads the same at any frame rate) and how far the shared clock moved
 * (for the motion, so the finger count sets the tempo as on every visual).
 * Then it eases everything a motif might play on:
 *
 *   openness  0 for a fist, 1 for five fingers — a pose, on top of the tempo
 *   aim       where the hands are, -1 to 1 across and up
 *   spread    how far apart two hands are
 *   burst     a clap, jumping to 1 and falling away over about a second
 *   bump      a kick, jumping to its strength and gone within a fifth of a second
 *   bass, mid, high   each band, rising faster than it falls, so a passage
 *             lifts things and lets them down gently instead of twitching
 */
export class Playing {
  dt = 1 / 60;
  step = 0;
  openness: number;
  aim = { x: 0, y: 0 };
  spread = 0.4;
  burst = 0;
  bump = 0;
  bass = 0;
  mid = 0;
  high = 0;

  private lastClock: number | null = null;
  private lastFrame = 0;

  /** `rest` is how open the pose sits with no hands in view. */
  constructor(private readonly rest: number) {
    this.openness = rest;
  }

  read(handData: HandData, audioData: AudioData | undefined) {
    const now = performance.now();
    const dt = this.lastFrame ? Math.min(0.1, (now - this.lastFrame) / 1000) : 1 / 60;
    this.lastFrame = now;
    const clock = vjTime();
    this.step = this.lastClock === null ? 0 : Math.max(-0.2, Math.min(0.2, clock - this.lastClock));
    this.lastClock = clock;
    this.dt = dt;

    const hands = [handData.left, handData.right].filter(Boolean);
    let targetOpen = this.rest;
    if (hands.length) {
      const fingers = Math.max(...hands.map((h) =>
        h!.gesture === 'fist' ? 0 : h!.fingerCount ?? 3));
      targetOpen = Math.max(0, Math.min(1, fingers / 5));
    }
    this.openness += (targetOpen - this.openness) * (1 - Math.exp(-dt * 5));

    let tx = 0;
    let ty = 0;
    if (hands.length) {
      tx = (hands.reduce((s, h) => s + h!.position.x, 0) / hands.length - 0.5) * 2;
      ty = (0.5 - hands.reduce((s, h) => s + h!.position.y, 0) / hands.length) * 2;
    }
    const follow = 1 - Math.exp(-dt * 4);
    this.aim.x += (tx - this.aim.x) * follow;
    this.aim.y += (ty - this.aim.y) * follow;
    this.spread += ((handData.distanceBetweenHands ?? 0.4) - this.spread) * follow;

    const clap = handData.clapping ? (handData.clapIntensity ?? 1) : 0;
    this.burst = Math.max(this.burst * Math.exp(-dt * 2.2), clap);

    const ease = (env: number, to: number, up: number, down: number) =>
      env + (to - env) * (1 - Math.exp(-dt * (to > env ? up : down)));
    this.bass = ease(this.bass, audioData?.bass ?? 0, 6, 1.5);
    this.mid = ease(this.mid, audioData?.mid ?? 0, 4, 1);
    this.high = ease(this.high, audioData?.high ?? 0, 8, 2.5);
    this.bump *= Math.exp(-dt / 0.07);
    if (audioData?.beat) this.bump = Math.max(this.bump, audioData.beatIntensity || 1);
  }
}
