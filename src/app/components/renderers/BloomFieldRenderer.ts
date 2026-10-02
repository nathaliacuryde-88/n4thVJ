import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { BloomFieldConfig } from '../../config/BloomFieldRendererConfig';
import { generateColors } from '../../config/palette';
import { ParamValues, withOverrides } from '../../params/types';
import { vjTime } from '../../motion/clock';
import { disposeThree } from './disposeThree';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * BLOOM FIELD
 * ═══════════════════════════════════════════════════════════════════════════
 * Five always-open, inflated flowers swaying on a studio backdrop, their colour
 * flowing round a looping palette.
 *
 * There are no lights in the scene. Every surface runs one shader, and the
 * trick in it is that shading does not darken: it moves the colour FORWARD
 * through the palette. A red petal's shadow is therefore not dark red but navy
 * and then blue, which is what gives the reel its balloon-like, inflated look.
 * The palette is cyclic and sampled with wrap-around, so the colour can flow
 * for ever without a seam.
 *
 * The hands, by the same rule as every other visual:
 *   - the finger count sets the tempo (through the shared clock) and also the
 *     pose: one finger closes the heads into cups, five opens them flat;
 *   - a clap throws every petal open and races the colour, then settles;
 *   - moving a hand swings the camera round the field; spreading two hands
 *     brings it in.
 * And the music: each kick fattens the heads for a fifth of a second, bass
 * deepens the bob, melody speeds the colour, and the hats lift the stamens and
 * the highlights. All of it eased, so the flowers sway with the music rather
 * than flinch at it.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** Seconds. Every motion is periodic in this, as in the reel. */
const LOOP = 12;
const N_PETALS = 13;
const TAU = Math.PI * 2;

/**
 * How open the heads sit with no hands in view: the reel's cup exactly.
 *
 * Openness runs 0 (a fist, cups closed) to 1 (five fingers, flat open), and
 * the petal tilt is -0.85 + 0.9 × openness — so the reel's -0.36 is here.
 */
const REST_OPEN = 0.49 / 0.9;

type Cfg = typeof BloomFieldConfig;
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

/**
 * The flowers, in the order they join the field as the count goes up.
 *
 * The first five are the reel's. A count below five takes the subset that
 * stays balanced rather than the first few, so three is left, centre and
 * right, not three bunched on the left.
 */
interface Flower {
  x: number; z: number; h: number; s: number;
  off: number; ph: number; roll: number;
}
const FLOWERS: Flower[] = [
  { x: -5.05, z: -0.8, h: 1.35, s: 0.86, off: 0.00, ph: 0.00, roll: 0.22 },
  { x: -2.5, z: 0.7, h: -0.55, s: 0.80, off: 0.37, ph: 1.70, roll: -0.10 },
  { x: 0.10, z: -0.3, h: 1.75, s: 0.94, off: 0.71, ph: 3.30, roll: 0.05 },
  { x: 2.65, z: 0.9, h: 0.25, s: 0.80, off: 0.18, ph: 4.60, roll: 0.12 },
  { x: 5.05, z: -0.5, h: 1.05, s: 0.88, off: 0.55, ph: 2.40, roll: -0.24 },
  // Two more, set back between the others.
  { x: -3.8, z: -2.6, h: 2.35, s: 0.72, off: 0.86, ph: 5.30, roll: -0.16 },
  { x: 3.85, z: -2.4, h: 2.15, s: 0.74, off: 0.28, ph: 0.90, roll: 0.18 },
];
const SHOWN: number[][] = [
  [], [2], [1, 3], [0, 2, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5, 6],
];

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
uniform int uMode;            // 0 petal, 1 stem, 2 core and stamens
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
    c += uWA * 0.5 * (1.0 + cos(uAng)) * 0.55   // half-ring sweeps
       + uWB * vW.y * 0.22                       // horizontal bands
       + uWC * vRad * 0.45;                      // concentric rings
  } else if (uMode == 1) {
    c += vUv.x * 0.85 * uWS;                     // bands flowing up the stem
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

// ── colour helpers ───────────────────────────────────────────────────────────

function hexToHsl(hex: string): [number, number, number] {
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
 * The reel's colours are the point of this visual, so the panel does not
 * replace them: it rotates every stop round the colour wheel by however far
 * the chosen hue is from the default, and scales their saturation the same
 * way. Untouched, the panel leaves the reel exactly as it is; turned, the
 * whole field shifts together and keeps its light-to-dark shape, which is what
 * the shading depends on. Grayscale takes the saturation out entirely.
 */
const REFERENCE = hexToHsl(generateColors(245, 100, 'contrast')[0]);

function turnFrom(colors: string[]): { hue: number; sat: number } {
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

// ── the stem ─────────────────────────────────────────────────────────────────

/**
 * A tube that is bent in place rather than rebuilt.
 *
 * The reel builds a new TubeGeometry for every stem on every frame. That is
 * fine for rendering out a clip, but live it hands the garbage collector five
 * full meshes a frame, and the pause when it collects lands in the middle of a
 * set. This keeps one buffer per stem and rewrites it, carrying the cross
 * section along the curve by parallel transport so the stem never twists.
 */
class Stem {
  readonly mesh: THREE.Mesh;
  readonly curve: THREE.CatmullRomCurve3;
  private readonly position: THREE.BufferAttribute;
  private readonly normal: THREE.BufferAttribute;
  private readonly points: THREE.Vector3[] = [];
  private readonly tangents: THREE.Vector3[] = [];

  constructor(
    material: THREE.Material,
    readonly anchors: THREE.Vector3[],
    private readonly length = 120,
    private readonly sides = 20,
  ) {
    this.curve = new THREE.CatmullRomCurve3(anchors, false, 'centripetal');
    const count = (length + 1) * (sides + 1);
    const geometry = new THREE.BufferGeometry();
    this.position = new THREE.BufferAttribute(new Float32Array(count * 3), 3);
    this.normal = new THREE.BufferAttribute(new Float32Array(count * 3), 3);
    this.position.setUsage(THREE.DynamicDrawUsage);
    this.normal.setUsage(THREE.DynamicDrawUsage);
    const uv = new Float32Array(count * 2);
    const index: number[] = [];
    for (let i = 0; i <= length; i++) {
      for (let j = 0; j <= sides; j++) {
        const k = i * (sides + 1) + j;
        uv[k * 2] = i / length;
        uv[k * 2 + 1] = j / sides;
        if (i < length && j < sides) {
          const a = k;
          const b = k + sides + 1;
          index.push(a, b, a + 1, b, b + 1, a + 1);
        }
      }
    }
    geometry.setAttribute('position', this.position);
    geometry.setAttribute('normal', this.normal);
    geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geometry.setIndex(index);
    for (let i = 0; i <= length; i++) {
      this.points.push(new THREE.Vector3());
      this.tangents.push(new THREE.Vector3());
    }
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.frustumCulled = false;
  }

  /** Re-bends the tube to the anchors as they stand now. */
  update(radius: number) {
    const { curve, points, tangents, length, sides } = this;
    curve.updateArcLengths();
    for (let i = 0; i <= length; i++) curve.getPointAt(i / length, points[i]);
    for (let i = 0; i <= length; i++) {
      const a = points[Math.max(0, i - 1)];
      const b = points[Math.min(length, i + 1)];
      tangents[i].subVectors(b, a).normalize();
    }

    const n = new THREE.Vector3();
    const bn = new THREE.Vector3();
    const dir = new THREE.Vector3();
    // Any normal to start with; after that, each one is the last carried
    // forward and straightened against the new tangent.
    const t0 = tangents[0];
    n.set(0, 0, 1).addScaledVector(t0, -t0.z);
    if (n.lengthSq() < 1e-6) n.set(1, 0, 0).addScaledVector(t0, -t0.x);
    n.normalize();

    const pos = this.position.array as Float32Array;
    const nor = this.normal.array as Float32Array;
    for (let i = 0; i <= length; i++) {
      const t = tangents[i];
      n.addScaledVector(t, -n.dot(t)).normalize();
      bn.crossVectors(t, n);
      const p = points[i];
      for (let j = 0; j <= sides; j++) {
        const a = (j / sides) * TAU;
        // Round the same way three.js's own tube goes, which is what makes
        // the triangles face outward. The other way round they face in, the
        // shader reads the stem as seen from inside, and it shades dark.
        dir.copy(n).multiplyScalar(-Math.cos(a)).addScaledVector(bn, Math.sin(a));
        const k = (i * (sides + 1) + j) * 3;
        pos[k] = p.x + dir.x * radius;
        pos[k + 1] = p.y + dir.y * radius;
        pos[k + 2] = p.z + dir.z * radius;
        nor[k] = dir.x;
        nor[k + 1] = dir.y;
        nor[k + 2] = dir.z;
      }
    }
    this.position.needsUpdate = true;
    this.normal.needsUpdate = true;
  }
}

// ── one flower ───────────────────────────────────────────────────────────────

interface Shared {
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

interface Bloom {
  spec: Flower;
  head: THREE.Group;
  ring: THREE.Group;
  tilts: THREE.Group[];
  petals: THREE.Mesh[];
  core: THREE.Mesh;
  stamens: THREE.Mesh[];
  stem: Stem;
  /** Head and petals share these, so a flower is one set of writes per frame. */
  shared: Shared;
  stemShared: Shared;
  /** 0 when it is out of the field, 1 when fully grown. Eased. */
  presence: number;
}

// ── the renderer ─────────────────────────────────────────────────────────────

export class BloomFieldRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = BloomFieldConfig;

  private surface: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer | null = null;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(30, 16 / 9, 0.1, 100);
  private flowers: Bloom[] = [];
  private geometries: THREE.BufferGeometry[] = [];
  private failed = false;

  /** The palettes as textures, rebuilt when the colour panel turns. */
  private textures: THREE.CanvasTexture[] = [];
  private turnKey = '';
  /** Crossfade between palettes: from, to, and how far. */
  private palFrom = 0;
  private palTo = 0;
  private palMix = 1;

  /** Motion and colour run on clocks of their own, so their speeds can change without a jump. */
  private lastClock: number | null = null;
  private lastFrame = 0;
  private motionTime = 0;
  private colourTime = 0;

  /**
   * Whether a frame has been drawn yet. The saved settings arrive after the
   * constructor, so the first frame takes them as they are — a set that opens
   * on three flowers and the third palette should not open by watching two
   * flowers sink and the colours fade across.
   */
  private started = false;

  /** Hands, eased. */
  private aim = { x: 0, y: 0 };
  private openness = REST_OPEN;
  private spread = 0.4;
  /** A clap's burst, falling away over about a second. */
  private burst = 0;

  /** The music, eased. */
  private bump = 0;
  private bassEnv = 0;
  private midEnv = 0;
  private highEnv = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.surface = document.createElement('canvas');
    try {
      this.init();
    } catch (error) {
      console.error('Bloom Field could not start:', error);
      this.failed = true;
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(BloomFieldConfig, values);
  }

  private init() {
    const renderer = new THREE.WebGLRenderer({
      canvas: this.surface,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(1);
    renderer.setClearColor(0x000000, 0);
    this.renderer = renderer;

    this.textures = PALETTES.map((stops) => paletteTexture(stops, { hue: 0, sat: 1 }));
    this.turnKey = '#reference';

    const petalGeo = new THREE.SphereGeometry(1, 56, 36);
    const coreGeo = new THREE.SphereGeometry(0.27, 40, 28);
    const stamenGeo = new THREE.SphereGeometry(1, 20, 14);
    this.geometries.push(petalGeo, coreGeo, stamenGeo);

    const shared = (): Shared => ({
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
    });
    const material = (mode: number, common: Shared, extra: Record<string, { value: number }> = {}) =>
      new THREE.ShaderMaterial({
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

    for (const spec of FLOWERS) {
      const common = shared();
      const stemCommon = shared();
      const head = new THREE.Group();
      const ring = new THREE.Group();
      head.add(ring);
      this.scene.add(head);

      const tilts: THREE.Group[] = [];
      const petals: THREE.Mesh[] = [];
      for (let i = 0; i < N_PETALS; i++) {
        const a = (i / N_PETALS) * TAU;
        const pivot = new THREE.Group();
        pivot.rotation.y = a;
        const tilt = new THREE.Group();
        tilt.rotation.x = -0.36;
        pivot.add(tilt);
        const petal = new THREE.Mesh(petalGeo, material(0, common, { uAng: { value: a } }));
        petal.scale.set(0.48, 0.36, 0.6);
        // Tiny steps between petals so overlaps do not flicker.
        petal.position.set(0, ((i * 5) % 3) * 0.035, 0.72);
        tilt.add(petal);
        ring.add(pivot);
        tilts.push(tilt);
        petals.push(petal);
      }

      const coreMat = material(2, common);
      const core = new THREE.Mesh(coreGeo, coreMat);
      core.position.y = 0.04;
      head.add(core);
      const stamens: THREE.Mesh[] = [];
      for (let k = 0; k < 7; k++) {
        const a = (k / 7) * TAU + 0.3;
        const stamen = new THREE.Mesh(stamenGeo, coreMat);
        stamen.scale.set(0.035, 0.13, 0.035);
        stamen.position.set(Math.cos(a) * 0.3, 0.16, Math.sin(a) * 0.3);
        stamen.rotation.set(Math.sin(a) * 0.35, 0, -Math.cos(a) * 0.35);
        head.add(stamen);
        stamens.push(stamen);
      }

      const anchors = Array.from({ length: 6 }, () => new THREE.Vector3());
      const stem = new Stem(material(1, stemCommon, { uWS: { value: 0.55 } }), anchors);
      this.scene.add(stem.mesh);

      this.flowers.push({
        spec, head, ring, tilts, petals, core, stamens, stem,
        shared: common, stemShared: stemCommon, presence: 0,
      });
    }

  }

  destroy() {
    for (const texture of this.textures) texture.dispose();
    this.textures = [];
    for (const geometry of this.geometries) geometry.dispose();
    if (this.renderer) disposeThree(this.scene, this.renderer);
    this.renderer = null;
  }

  /** The palettes again, turned to the layer's colour panel, when it moves. */
  private follow(colors: string[]) {
    const key = colors[0] ?? '';
    if (key === this.turnKey) return;
    this.turnKey = key;
    const turn = turnFrom(colors);
    const old = this.textures;
    this.textures = PALETTES.map((stops) => paletteTexture(stops, turn));
    for (const texture of old) texture.dispose();
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { ctx, cfg } = this;
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;

    const renderer = this.renderer;
    if (this.failed || !renderer) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.font = '500 14px ui-monospace, monospace';
      ctx.textAlign = 'center';
      ctx.fillText('BLOOM FIELD NEEDS WEBGL', width / 2, height / 2);
      return;
    }

    // ── time ─────────────────────────────────────────────────────────────────
    // Real seconds for the easing, so the music reads the same at any frame
    // rate; the shared clock for the motion, so the hands set its tempo.
    const now = performance.now();
    const dt = this.lastFrame ? Math.min(0.1, (now - this.lastFrame) / 1000) : 1 / 60;
    this.lastFrame = now;
    const clock = vjTime();
    const step = this.lastClock === null ? 0 : Math.max(-0.2, Math.min(0.2, clock - this.lastClock));
    this.lastClock = clock;

    // ── hands ────────────────────────────────────────────────────────────────
    const hands = [handData.left, handData.right].filter(Boolean);
    let targetOpen = REST_OPEN;
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
    const burst = this.burst * cfg.hands.clap;

    // ── music ────────────────────────────────────────────────────────────────
    // Each band followed by an envelope that rises faster than it falls, so a
    // passage lifts the field and lets it down gently instead of twitching.
    const ease = (env: number, to: number, up: number, down: number) =>
      env + (to - env) * (1 - Math.exp(-dt * (to > env ? up : down)));
    this.bassEnv = ease(this.bassEnv, audioData?.bass ?? 0, 6, 1.5);
    this.midEnv = ease(this.midEnv, audioData?.mid ?? 0, 4, 1);
    this.highEnv = ease(this.highEnv, audioData?.high ?? 0, 8, 2.5);
    // The kick: up at once, back over about a fifth of a second.
    this.bump *= Math.exp(-dt / 0.07);
    if (audioData?.beat) this.bump = Math.max(this.bump, audioData.beatIntensity || 1);
    const bump = this.bump * cfg.sound.beat;

    // ── clocks ───────────────────────────────────────────────────────────────
    this.motionTime += step * cfg.motion.speed;
    // The colour flows at its own rate, faster with the melody and racing
    // after a clap. Integrated, so a burst moves it on and never back.
    this.colourTime += (step * cfg.colour.speed * (1 + this.midEnv * cfg.sound.mid * 1.2)
      + dt * burst * 0.9) / LOOP;
    const t = this.motionTime;
    const uT = this.colourTime;
    const amount = cfg.motion.amount;
    const s = (k: number, ph: number) => Math.sin((TAU * k * t) / LOOP + ph);

    // ── palette ──────────────────────────────────────────────────────────────
    this.follow(colors);
    const wanted = Math.max(0, Math.min(PALETTES.length - 1, Math.round(cfg.colour.palette)));
    const shown = new Set(SHOWN[Math.max(0, Math.min(7, Math.round(cfg.field.count)))]);
    if (!this.started) {
      this.started = true;
      this.palFrom = this.palTo = wanted;
      this.palMix = 1;
      this.flowers.forEach((f, i) => { f.presence = shown.has(i) ? 1 : 0; });
    }
    if (wanted !== this.palTo) {
      // Carry on from wherever a previous swap had got to.
      this.palFrom = this.palMix < 0.5 ? this.palFrom : this.palTo;
      this.palTo = wanted;
      this.palMix = 0;
    }
    this.palMix = Math.min(1, this.palMix + dt);

    // ── the field ────────────────────────────────────────────────────────────
    const bassBob = 1 + this.bassEnv * cfg.sound.bass * 1.6;
    const tilt = -0.85 + 0.9 * (REST_OPEN + (this.openness - REST_OPEN) * cfg.hands.bloom)
      + burst * 0.75;
    const spec = 0.16 * (1 + this.highEnv * cfg.sound.high * 2.5);
    const stamenLift = 1 + this.highEnv * cfg.sound.high * 1.4;

    const up = new THREE.Vector3(0, 1, 0);
    const euler = new THREE.Euler();
    const centre = new THREE.Vector3();

    this.flowers.forEach((f, index) => {
      const target = shown.has(index) ? 1 : 0;
      f.presence += (target - f.presence) * (1 - Math.exp(-dt * 2.2));
      if (f.presence < 0.004 && target === 0) f.presence = 0;
      const visible = f.presence > 0.002;
      f.head.visible = visible;
      f.stem.mesh.visible = visible;
      if (!visible) return;

      const { spec: fl } = f;
      const ph = fl.ph;
      const grow = 1 - Math.pow(1 - f.presence, 3);

      // Soft motion: bob, drift, turn, tilt.
      const bob = (0.22 * s(1, ph) + 0.07 * s(2, ph * 1.3)) * amount * bassBob + burst * 0.35;
      const pitch = 0.78 + 0.16 * s(1, ph + 1.1) * amount;
      const roll = fl.roll + 0.2 * s(1, ph + 2.2) * amount;
      const yaw = 0.35 * s(1, ph + 0.4) * amount;
      const restY = fl.h + bob;
      const H = new THREE.Vector3(
        fl.x + 0.12 * s(1, ph + 0.8) * amount,
        -7 + (restY + 7) * grow,
        fl.z,
      );
      f.head.position.copy(H);
      euler.set(pitch, yaw, roll, 'YXZ');
      f.head.quaternion.setFromEuler(euler);
      const sc = fl.s * 1.42;
      f.head.scale.setScalar(sc * (1 + 0.015 * s(2, ph) * amount + 0.03 * bump + burst * 0.1)
        * (0.25 + 0.75 * grow));
      f.ring.rotation.y = 0.25 * s(1, ph + 3.0) * amount;

      for (const g of f.tilts) g.rotation.x = tilt;
      const squash = 0.36 * (1 + 0.15 * bump);
      for (const p of f.petals) p.scale.y = squash;
      for (const st of f.stamens) st.scale.y = 0.13 * stamenLift;

      // The colour pattern melts between sweeps, bands and rings.
      const melt = cfg.pattern.melt;
      const drift = (k: number) => 1 - melt + melt * (0.5 + 0.5 * s(1, ph + k));
      const u = f.shared;
      u.uT.value = uT;
      u.uOff.value = fl.off + cfg.colour.offset;
      u.uWA.value = cfg.pattern.sweep * drift(0);
      u.uWB.value = cfg.pattern.bands * drift(2.1);
      u.uWC.value = cfg.pattern.rings * drift(4.2);
      const v = f.stemShared;
      v.uT.value = uT;
      v.uOff.value = fl.off + 0.2 + cfg.colour.offset;
      for (const shared of [u, v]) {
        shared.uPalA.value = this.textures[this.palFrom];
        shared.uPalB.value = this.textures[this.palTo];
        shared.uPalMix.value = this.palMix;
        shared.uDepth.value = cfg.colour.depth;
        shared.uSpec.value = spec;
      }

      // The stem: from below the frame, into the head along its own axis.
      const axis = up.clone().applyQuaternion(f.head.quaternion);
      const scaled = sc * (0.25 + 0.75 * grow);
      const a = f.stem.anchors;
      const bottom = a[1].set(fl.x * 0.9 - 0.25 * Math.sign(fl.x || 1) * 0.3, -5.6, fl.z);
      // One more below that, so a closer camera never finds the stem's end.
      a[0].set(bottom.x, -12, fl.z);
      a[5].copy(H).addScaledVector(axis, -0.15 * scaled);
      const p3 = a[4].copy(H).addScaledVector(axis, -0.75 * scaled);
      const midY = (bottom.y + p3.y) * 0.5;
      a[2].set(fl.x - 0.35 + 0.18 * s(1, ph + 0.5) * amount, bottom.y + (midY - bottom.y) * 0.55, fl.z);
      a[3].set((fl.x + 0.3 + p3.x) * 0.5 + 0.1 * s(1, ph + 1.4) * amount, midY + (p3.y - midY) * 0.3, fl.z);
      f.stem.update(0.19 * fl.s * (0.4 + 0.6 * grow));
    });

    // ── camera ───────────────────────────────────────────────────────────────
    this.placeCamera(width, height);

    this.scene.updateMatrixWorld(true);
    this.camera.updateMatrixWorld(true);
    for (const f of this.flowers) {
      if (!f.head.visible) continue;
      f.core.getWorldPosition(centre);
      centre.applyMatrix4(this.camera.matrixWorldInverse);
      f.shared.uCenter.value.copy(centre);
    }

    if (this.surface.width !== width || this.surface.height !== height) {
      renderer.setSize(width, height, false);
    }
    renderer.render(this.scene, this.camera);

    // ── onto the layer ───────────────────────────────────────────────────────
    this.backdrop(width, height);
    ctx.drawImage(this.surface, 0, 0, width, height);
  }

  /**
   * Where the camera is: the reel's shot, swung by the orbit, carried with
   * the hand, and brought in by spreading two hands.
   *
   * The hand slides the whole field with it rather than orbiting round it.
   * An orbit pivots on the middle of the field, so the centre flower stays
   * put while the near ones go one way and the far ones the other — there is
   * no direction to it, and what reads is a camera that does not follow. So
   * the camera travels opposite to the hand, which carries the picture WITH
   * it: hand right, flowers right; hand up, flowers up. A small turn rides on
   * top so the move still has depth.
   *
   * The reel is framed for 16:9. On a narrower screen the horizontal field of
   * view is held at what 16:9 would give, so the outer flowers stay in shot
   * instead of being cut by the edges.
   */
  private placeCamera(width: number, height: number) {
    const { cfg, camera } = this;
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

    const t = this.motionTime;
    const reach = cfg.hands.orbit;
    const slideX = -this.aim.x * reach * 2.2;
    const slideY = -this.aim.y * reach * 1.3;
    const yaw = cfg.field.orbit * 0.42 * Math.sin((TAU * t) / (LOOP * 2))
      - this.aim.x * reach * 0.12;
    const distance = Math.max(5, cfg.field.distance
      * (1 - (this.spread - 0.4) * cfg.hands.dolly * 0.55));
    camera.position.set(
      slideX + Math.sin(yaw) * distance,
      0.5 + slideY,
      Math.cos(yaw) * distance,
    );
    camera.lookAt(slideX, 0.1 + slideY, 0);
  }

  /** The studio behind the flowers: grey, pale lavender, grey. Dims to black. */
  private backdrop(width: number, height: number) {
    const { ctx } = this;
    const k = Math.max(0, Math.min(1, this.cfg.field.backdrop));
    const shade = (hex: string) => {
      const n = parseInt(hex.slice(1), 16);
      const r = Math.round(((n >> 16) & 255) * k);
      const g = Math.round(((n >> 8) & 255) * k);
      const b = Math.round((n & 255) * k);
      return `rgb(${r},${g},${b})`;
    };
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    if (k <= 0) {
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
}
