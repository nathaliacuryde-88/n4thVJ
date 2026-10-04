import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { DandelionConfig } from '../../config/DandelionRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { disposeThree } from './disposeThree';
import { DandelionModel, loadDandelion } from './dandelion/model';
import {
  InflatedLook, LOOP, MotifHost, Playing, Shared, TAU,
  drawBackdrop, drawUnavailable, frameCamera, makeRenderer,
} from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DANDELION
 * ═══════════════════════════════════════════════════════════════════════════
 * Nath's dandelion model, in the Bloom Field family's palettes but not its
 * balloons: the stem, bracts and seed bodies keep the shapes they were
 * modelled with, and the hairs are drawn as fine painted strokes, coloured
 * along their length by the same flowing palette, over a paper grain.
 *
 * The music is the wind. The louder it plays, the further the field leans and
 * sways and the more seeds lift off; each kick is a gust that bows the stems
 * and blows a few away — as many as the Seeds flying slider allows. Loose
 * seeds turn upright like little parachutes and wander the whole frame on a
 * slow, curling breeze, each drifting from one spot to the next for a flight
 * of several seconds, then glide home to the very spot on the head they left.
 *
 * The hands, by the rule every visual follows:
 *   - the finger count sets the tempo through the shared clock — one finger
 *     slow, two medium, five fast;
 *   - a clap blows every seed off at once, and they float back;
 * and on top of that:
 *   - an open hand lets the seeds go, a fist calls them all home;
 *   - loose seeds swirl after the hand, like fluff caught in its wake, and
 *     spreading two hands opens the swirl wider;
 *   - waving a hand is a gust, blowing the way the hand moved.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof DandelionConfig;

/** The most dandelions in the field. */
const MAX = 20;

/** Seconds a kick or a clap holds a seed off the head before it heads home. */
const KICK_HOLD = [1.4, 3.2];
const CLAP_HOLD = [2.6, 4.6];

// ── shaders ──────────────────────────────────────────────────────────────────

/**
 * Shared by every part: the palette, the paper, and how a seed and the stem
 * move. Positions arrive in the model's own units (head radius 1, head at the
 * origin, the stem down to uFoot).
 */
const COMMON = /* glsl */ `
uniform sampler2D uPalA;
uniform sampler2D uPalB;
uniform float uPalMix;
uniform float uT, uOff, uDepth, uSpec, uShimmer, uTime;
uniform vec2 uViewport;
uniform vec3 uBend;
uniform vec2 uWave;
uniform float uWavePhase;
uniform float uFoot, uRow;
uniform sampler2D uSeeds;

vec3 palette(float c) {
  vec2 at = vec2(fract(c), 0.5);
  return mix(texture(uPalA, at).rgb, texture(uPalB, at).rgb, uPalMix);
}

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}

/*
 * The paper: a soft, blotchy wash a few strokes wide that nudges the colour
 * along the palette, as watercolour pools, and a fine grain over it. Both sit
 * still on the screen, so things move under the paper rather than with it.
 */
float wash(vec2 fc) {
  vec2 p = fc / (uViewport.y * 0.035);
  return vnoise(p) * 0.6 + vnoise(p * 2.7 + 13.1) * 0.4 - 0.5;
}
vec3 grain(vec3 col, vec2 fc) {
  return col + (hash(fc) - 0.5) * 0.07;
}

vec3 qrot(vec4 q, vec3 v) { return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v); }

/*
 * The stem bends like a rod held at its foot — none there, all of it at the
 * head — and a wave runs up it on top, like a whip, so it dances rather than
 * only leaning. All in the model's units, along h: 0 at the foot, 1 at the head.
 */
const float WAVE_K = 4.5;
vec3 stemDisp(float h) {
  return vec3(uBend.x, 0.0, uBend.z) * h * h
    + vec3(uWave.x, 0.0, uWave.y) * h * sin(WAVE_K * h - uWavePhase);
}
vec3 bendStem(vec3 p) {
  float h = clamp((p.y - uFoot) / -uFoot, 0.0, 1.0);
  return p + stemDisp(h);
}
/* The head rides the top of the stem, tipped to the stem's slope there. */
mat3 headTilt() {
  vec2 slope = 2.0 * uBend.xz
    + uWave * (sin(WAVE_K - uWavePhase) + WAVE_K * cos(WAVE_K - uWavePhase));
  vec3 up = normalize(vec3(slope.x / -uFoot, 1.0, slope.y / -uFoot));
  vec3 ax = vec3(up.z, 0.0, -up.x);
  float s = length(ax);
  if (s < 1e-5) return mat3(1.0);
  ax /= s;
  float c = up.y;
  float t = 1.0 - c;
  return mat3(
    t * ax.x * ax.x + c,        t * ax.x * ax.y + s * ax.z, t * ax.x * ax.z - s * ax.y,
    t * ax.x * ax.y - s * ax.z, t * ax.y * ax.y + c,        t * ax.y * ax.z + s * ax.x,
    t * ax.x * ax.z + s * ax.y, t * ax.y * ax.z - s * ax.x, t * ax.z * ax.z + c);
}
vec3 bendHead(vec3 p) { return headTilt() * p + stemDisp(1.0); }

/*
 * A seed: turned about where it joins the head, carried off by its flight,
 * and — as far as it is still at home — riding the head as the stem sways.
 * The flight is a texture of two texels a seed: offset and how much it is
 * still attached, then its turn as a quaternion.
 */
vec4 seedOffset;
vec4 seedTurn;
void readSeed(float seed) {
  seedOffset = texelFetch(uSeeds, ivec2(int(seed) * 2, int(uRow)), 0);
  seedTurn = texelFetch(uSeeds, ivec2(int(seed) * 2 + 1, int(uRow)), 0);
}
vec3 seedPoint(vec3 p, vec3 pivot) {
  vec3 q = pivot + qrot(seedTurn, p - pivot) + seedOffset.xyz;
  return mix(q, bendHead(q), seedOffset.w);
}
`;

/** Stem, base and bracts. */
const BODY_VERT = /* glsl */ `
${COMMON}
attribute float aRigid;
varying vec3 vN;
varying vec3 vPos;
varying float vTone;
varying float vLift;
void main() {
  vec3 p;
  vec3 n = normal;
  if (aRigid > 0.5) {
    p = bendHead(position);
    n = headTilt() * normal;
  } else {
    p = bendStem(position);
  }
  // Where on the palette each part sits: the stem runs on down from the
  // bottom of the head's gradient, the base and bracts just under it.
  float along = clamp((position.y - uFoot) / -uFoot, 0.0, 1.0);
  vTone = aRigid > 0.5 ? 0.02 : 0.03 - (1.0 - along) * 0.2;
  vLift = 0.0;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vPos = mv.xyz;
  vN = normalize(normalMatrix * n);
  gl_Position = projectionMatrix * mv;
}`;

const SURFACE_FRAG = /* glsl */ `
${COMMON}
varying vec3 vN;
varying vec3 vPos;
varying float vTone;
varying float vLift;
void main() {
  vec3 N = normalize(vN);
  if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(-vPos);
  vec3 L = normalize(vec3(0.3, 0.45, 0.85));
  float wrap = clamp(dot(N, L) * 0.5 + 0.5, 0.0, 1.0);
  float rim = 1.0 - clamp(dot(N, V), 0.0, 1.0);
  float c = uOff + uT + vTone;
  // Shade by moving on through the palette rather than darkening, but only a
  // little: flat colour with soft turns, a painting rather than a balloon.
  c += uDepth * 0.7 * (1.0 - wrap) + 0.08 * smoothstep(0.6, 1.0, rim);
  c += wash(gl_FragCoord.xy) * 0.12;
  vec3 col = palette(c);
  col *= 0.88 + 0.16 * wrap;
  col = 1.0 - (1.0 - col) * (1.0 - vLift);
  col += pow(max(dot(reflect(-L, N), V), 0.0), 12.0) * uSpec * 0.6;
  gl_FragColor = vec4(grain(col, gl_FragCoord.xy), 1.0);
}`;

/** The seed bodies: the same surface, flown with their seeds. */
const ACHENE_VERT = /* glsl */ `
${COMMON}
attribute float aSeed;
attribute vec3 aPivot;
varying vec3 vN;
varying vec3 vPos;
varying float vTone;
varying float vLift;
void main() {
  readSeed(aSeed);
  vec3 p = seedPoint(position, aPivot);
  vec3 n = qrot(seedTurn, normal);
  if (seedOffset.w > 0.5) n = headTilt() * n;
  // Lifted to the hairs' pastel, so a flying seed reads as fluff with a
  // seed, not a seed with some fluff.
  vTone = 0.1;
  vLift = 0.45;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vPos = mv.xyz;
  vN = normalize(normalMatrix * n);
  gl_Position = projectionMatrix * mv;
}`;

/**
 * The beaks and hairs: each segment a quad, widened across the screen to a
 * fixed stroke width so they stay drawn lines at any distance.
 */
const STROKE_VERT = /* glsl */ `
${COMMON}
attribute vec3 aB;
attribute vec3 aPivot;
attribute vec2 aCorner;
attribute float aSeed;
attribute float aT;
uniform float uWidth;
varying float vT;
varying float vSide;
varying vec2 vHome;
varying float vFree;
void main() {
  readSeed(aSeed);
  vec4 ca = projectionMatrix * modelViewMatrix * vec4(seedPoint(position, aPivot), 1.0);
  vec4 cb = projectionMatrix * modelViewMatrix * vec4(seedPoint(aB, aPivot), 1.0);
  vec2 half_ = uViewport * 0.5;
  vec2 sa = ca.xy / ca.w * half_;
  vec2 sb = cb.xy / cb.w * half_;
  vec2 d = sb - sa;
  float len = length(d);
  d = len > 1e-4 ? d / len : vec2(1.0, 0.0);
  vec2 across = vec2(-d.y, d.x);
  vec4 c = aCorner.x > 0.5 ? cb : ca;
  // Beaks a touch heavier; hairs taper to their tips.
  float w = uWidth * (aT < 0.0 ? 1.25 : mix(1.0, 0.5, aT));
  // Half a pixel past each end, so the joins between segments close.
  vec2 push = across * aCorner.y * w * 0.5 + d * (aCorner.x > 0.5 ? 0.5 : -0.5);
  c.xy += push / half_ * c.w;
  gl_Position = c;
  vT = aT;
  vSide = aCorner.y;
  // Where on the head it lives, so a seed keeps its colour as it flies.
  vHome = position.xy;
  vFree = 1.0 - seedOffset.w;
}`;

const STROKE_FRAG = /* glsl */ `
${COMMON}
varying float vT;
varying float vSide;
varying vec2 vHome;
varying float vFree;
void main() {
  float t = max(vT, 0.0);
  // Bands across the head, as on the flowers, with a little more along each
  // hair: one gradient over the whole ball rather than confetti.
  float c = uOff + uT + 0.25 + vHome.y * 0.2 + vHome.x * 0.06 + vT * 0.1;
  c += wash(gl_FragCoord.xy) * 0.16;
  vec3 col = palette(c);
  // Paler toward the tips, the way light catches fluff.
  // Lifted toward pastel, the dark stops most, so a head reads as fluff
  // even while the palette passes through its navy.
  col = 1.0 - (1.0 - col) * (0.8 - 0.3 * t);
  // The hats: a glint running out along the hairs.
  float glint = pow(0.5 + 0.5 * sin(t * 9.0 - uTime * 7.0 + vHome.x * 20.0 + vHome.y * 13.0), 6.0);
  col += glint * uShimmer * 0.35 * t;
  float edge = 1.0 - smoothstep(0.35, 1.0, abs(vSide));
  float alpha = edge * mix(0.95, 0.5, t);
  gl_FragColor = vec4(grain(col, gl_FragCoord.xy), alpha);
}`;

// ── the field ────────────────────────────────────────────────────────────────

/** The van der Corput sequence: each prefix spread as evenly as a prefix can be. */
function corput(n: number, base: number): number {
  let q = 0;
  let bk = 1 / base;
  while (n > 0) {
    q += (n % base) * bk;
    n = Math.floor(n / base);
    bk /= base;
  }
  return q;
}
function hash1(n: number): number {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/** A place in the field: across, depth, wanted height, size, turn, and its own sway. */
interface Slot { x: number; z: number; y: number; k: number; yaw: number; ph: number; off: number }
const SLOTS: Slot[] = Array.from({ length: MAX }, (_, i) => ({
  x: i === 0 ? 0 : corput(i + 1, 2) * 2 - 1,
  z: i === 0 ? 0 : -4.6 + corput(i, 3) * 6,
  y: i === 0 ? 0.3 : -0.4 + corput(i, 5) * 1.9,
  k: i === 0 ? 1 : 0.85 + hash1(i) * 0.3,
  yaw: hash1(i + 40) * TAU,
  ph: hash1(i + 80) * TAU,
  off: (i * 0.137) % 1,
}));

interface Flower {
  root: THREE.Group;
  shared: Shared;
  u: {
    uBend: { value: THREE.Vector3 };
    uWave: { value: THREE.Vector2 };
    uWavePhase: { value: number };
    uRow: { value: number };
    uShimmer: { value: number };
  };
  presence: number;
  /** Where it stands, eased, so a change of count rearranges by gliding. */
  at: THREE.Vector3;
  size: number;
  placed: boolean;
  /** Its sway, as a bend of the head in world units, eased. */
  bend: THREE.Vector2;
}

export class DandelionRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = DandelionConfig;

  private surface: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer | null = null;
  private readonly host: MotifHost | null;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  /** Everything of the field, so a host can place it in its world. */
  readonly group = new THREE.Group();
  /**
   * How far back the field stands. A host sets it to put the dandelions
   * behind whatever is in front; the stems still reach below the frame.
   */
  depth = 0;
  private look: InflatedLook | null = null;
  private playing = new Playing(0.5);
  private failed = false;
  private model: DandelionModel | null = null;
  private flowers: Flower[] = [];
  private materials: THREE.ShaderMaterial[] = [];
  private started = false;

  // The seeds' flight, every seed of every dandelion.
  private seedTex: THREE.DataTexture | null = null;
  private seedData = new Float32Array(0);
  private off = new Float32Array(0);    // offset from home, world units, xyz
  private vel = new Float32Array(0);
  private turn = new Float32Array(0);   // quaternion, model space
  private hold = new Float32Array(0);   // seconds a kick or clap keeps it off
  private away = new Uint8Array(0);
  private thresh = new Float32Array(0); // how easily it lets go
  private flight = new Float32Array(0); // seconds of flight left once it has let go
  private dest = new Float32Array(0);   // where in the frame it is drifting to, world xyz
  private phase = new Float32Array(0);

  private motionTime = 0;
  private colourTime = 0;
  private gust = 0;
  private lastBeat = false;
  private lastClap = false;
  /** A kick's hop, jumping to 1 and settling over a third of a second. */
  private hop = 0;
  private dance = 0;
  private sinceClap = 99;
  private lastAim = { x: 0, y: 0 };
  private swipe = new THREE.Vector2();
  private present = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, host: MotifHost | null = null) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.host = host;
    this.scene = host ? host.scene : new THREE.Scene();
    this.camera = host ? host.camera : new THREE.PerspectiveCamera(30, 16 / 9, 0.1, 200);
    this.surface = document.createElement('canvas');
    try {
      if (!host) this.renderer = makeRenderer(this.surface);
      this.look = host ? host.look : new InflatedLook();
    } catch (error) {
      console.error('Dandelion could not start:', error);
      this.failed = true;
      return;
    }
    loadDandelion()
      .then((model) => { if (this.look) this.build(model); })
      .catch((error) => {
        console.error('Dandelion model failed to load:', error);
        this.failed = true;
      });
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(DandelionConfig, values);
  }

  /** The library waits for the model before it counts frames. */
  isReady() {
    return this.model !== null || this.failed;
  }

  private build(model: DandelionModel) {
    const look = this.look!;
    const seeds = model.seeds;
    const n = seeds * MAX;
    this.seedData = new Float32Array(seeds * 2 * MAX * 4);
    this.seedTex = new THREE.DataTexture(this.seedData, seeds * 2, MAX, THREE.RGBAFormat, THREE.FloatType);
    this.seedTex.magFilter = THREE.NearestFilter;
    this.seedTex.minFilter = THREE.NearestFilter;
    this.seedTex.needsUpdate = true;
    this.off = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    this.turn = new Float32Array(n * 4);
    for (let i = 0; i < n; i++) this.turn[i * 4 + 3] = 1;
    this.hold = new Float32Array(n);
    this.away = new Uint8Array(n);
    this.thresh = new Float32Array(n);
    this.flight = new Float32Array(n);
    this.dest = new Float32Array(n * 3);
    this.phase = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      this.thresh[i] = 0.12 + hash1(i * 3.7 + 1) * 1.0;
      this.phase[i] = hash1(i * 1.3 + 7) * TAU;
    }

    const viewport = { value: new THREE.Vector2(1, 1) };
    const time = { value: 0 };
    const foot = { value: model.foot };
    const seedsU = { value: this.seedTex };
    const width = { value: 1.5 };
    this.strokeWidth = width;
    this.viewport = viewport;
    this.time = time;

    for (let i = 0; i < MAX; i++) {
      const shared = look.shared();
      const u = {
        uBend: { value: new THREE.Vector3() },
        uWave: { value: new THREE.Vector2() },
        uWavePhase: { value: 0 },
        uRow: { value: i },
        uShimmer: { value: 0 },
      };
      const uniforms = {
        ...shared, ...u,
        uViewport: viewport, uTime: time, uFoot: foot, uSeeds: seedsU,
      };
      const make = (vertexShader: string, fragmentShader: string, extra: object = {}) => {
        const m = new THREE.ShaderMaterial({
          vertexShader, fragmentShader, uniforms: { ...uniforms, ...extra }, side: THREE.DoubleSide,
        });
        this.materials.push(m);
        return m;
      };
      const root = new THREE.Group();
      root.add(new THREE.Mesh(model.body, make(BODY_VERT, SURFACE_FRAG)));
      root.add(new THREE.Mesh(model.achenes, make(ACHENE_VERT, SURFACE_FRAG)));
      const strokeMat = make(STROKE_VERT, STROKE_FRAG, { uWidth: width });
      strokeMat.transparent = true;
      strokeMat.depthWrite = false;
      root.add(new THREE.Mesh(model.strokes, strokeMat));
      for (const child of root.children) child.frustumCulled = false;
      root.visible = false;
      this.group.add(root);
      this.flowers.push({
        root, shared, u, presence: 0, at: new THREE.Vector3(), size: 1, placed: false,
        bend: new THREE.Vector2(),
      });
    }
    this.scene.add(this.group);
    this.model = model;
  }

  /** Somewhere in the frame for a loose seed to drift to. */
  private pickDestination(j: number, tanHalf: number, aspect: number) {
    const z = -4 + Math.random() * 6;
    const halfH = (15.5 - z) * tanHalf;
    this.dest[j * 3] = (Math.random() * 2 - 1) * halfH * aspect * 0.92;
    this.dest[j * 3 + 1] = 0.1 + (Math.random() * 1.75 - 0.85) * halfH;
    this.dest[j * 3 + 2] = z;
  }

  private strokeWidth: { value: number } | null = null;
  private viewport: { value: THREE.Vector2 } | null = null;
  private time: { value: number } | null = null;

  destroy() {
    if (!this.host) this.look?.dispose();
    this.look = null;
    this.seedTex?.dispose();
    for (const m of this.materials) m.dispose();
    // The geometry is shared by every Dandelion renderer; take it out of the
    // scene first so disposing this one's renderer does not free it for all.
    for (const f of this.flowers) f.root.clear();
    this.scene.remove(this.group);
    if (this.renderer) disposeThree(this.scene, this.renderer);
    this.renderer = null;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { ctx, cfg } = this;
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;
    const renderer = this.renderer;
    if (this.failed || !renderer || !this.look) {
      drawUnavailable(ctx, width, height, 'DANDELION');
      return;
    }
    drawBackdrop(ctx, width, height, cfg.field.backdrop);
    if (!this.model) return;
    frameCamera(this.camera, width, height);
    this.camera.position.set(0, 0.5, 15.5);
    this.camera.lookAt(0, 0.1, 0);
    this.update(handData, colors, audioData, width, height);
    if (this.surface.width !== width || this.surface.height !== height) {
      renderer.setSize(width, height, false);
    }
    renderer.render(this.scene, this.camera);
    ctx.drawImage(this.surface, 0, 0, width, height);
  }

  /**
   * One frame of the field: everything moved and coloured, nothing drawn. A
   * host calls this with its camera already placed, then draws its scene.
   */
  update(handData: HandData, colors: string[], audioData: AudioData | undefined, width: number, height: number) {
    const { cfg } = this;
    const look = this.look;
    const model = this.model;
    if (!look || !model || this.failed) return;

    // ── the hands and the music ─────────────────────────────────────────────
    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    const step = Math.max(0, play.step);
    const handed = handData.left || handData.right ? 1 : 0;
    this.present += (handed - this.present) * (1 - Math.exp(-dt * 3));
    const level = Math.min(1, (audioData?.overall ?? 0) * 1.4) * cfg.sound.wind;

    this.motionTime += step;
    this.colourTime += (step * cfg.colour.speed * (1 + play.mid * cfg.sound.mid * 1.2)
      + dt * play.burst * cfg.hands.clap * 0.9) / LOOP;
    const t = this.motionTime;

    // A kick: a gust that bows the stems and takes a few seeds.
    const beat = !!audioData?.beat;
    const beatRise = beat && !this.lastBeat;
    const kicked = beatRise && cfg.sound.gust > 0;
    this.hop = Math.max(this.hop * Math.exp(-dt * 5), beatRise ? (audioData?.beatIntensity || 1) : 0);
    // The dance runs on the shared clock, so the fingers set its tempo too.
    this.dance += step;
    this.lastBeat = beat;
    if (kicked) this.gust = Math.max(this.gust, (audioData?.beatIntensity || 1) * cfg.sound.gust);
    this.gust *= Math.exp(-dt * 2.5);
    // A clap: every seed blown off at once.
    const clapping = !!handData.clapping && cfg.hands.clap > 0;
    const clapped = clapping && !this.lastClap;
    this.lastClap = clapping;
    // The first clap after a rest blows every seed off. Claps close behind it
    // take only a share — or a run of them (the automatic hands clap on
    // every kick) would keep every head bare.
    this.sinceClap += dt;
    const clapShare = Math.min(1, this.sinceClap / 4) ** 3;
    if (clapped) this.sinceClap = 0;

    // A wave of the hand: how fast the hand moved, as a gust that way.
    const ax = play.aim.x - this.lastAim.x;
    const ay = play.aim.y - this.lastAim.y;
    this.lastAim = { x: play.aim.x, y: play.aim.y };
    const sx = handed ? (ax / Math.max(dt, 1e-3)) : 0;
    const sy = handed ? (ay / Math.max(dt, 1e-3)) : 0;
    this.swipe.x += (sx - this.swipe.x) * (1 - Math.exp(-dt * 6));
    this.swipe.y += (sy - this.swipe.y) * (1 - Math.exp(-dt * 6));

    // The wind: a breeze that wanders round the right, swelling with the
    // music, plus whatever the hand and the kick add.
    const heading = 0.5 * Math.sin(t * 0.11) + 0.25 * Math.sin(t * 0.27 + 1.3);
    const breeze = 0.25 + level * 1.6 + this.gust * 1.2;
    const wind = new THREE.Vector3(Math.cos(heading) * breeze, 0.15 * Math.sin(t * 0.19), Math.sin(heading) * breeze * 0.4);
    wind.x += THREE.MathUtils.clamp(this.swipe.x, -4, 4) * 1.6 * cfg.hands.wind;
    wind.y += THREE.MathUtils.clamp(this.swipe.y, -4, 4) * 1.0 * cfg.hands.wind;

    // An open hand lets go, a fist gathers in. Three fingers — and no hand at
    // all — is neither, so a hand held up to play the tempo does not strip
    // the heads bare.
    const hold = handed
      ? THREE.MathUtils.clamp((play.openness - 0.6) / 0.4, -1, 1) * cfg.hands.release : 0;
    // How many fly is the Seeds flying slider: it scales everything that
    // lets seeds go by itself — their own drift, the music's wind, the kicks —
    // so at 0 they leave only for a clap or an open hand. However loud the
    // room, the wind alone leaves a third of each head: a bare head is for a clap.
    // It is the master for every way a seed leaves — a clap and an open hand
    // too — so at 0 the heads stay whole whatever plays. A full field has many
    // more seeds, so each head gives up fewer as the count goes up.
    const amount = cfg.field.drift;
    const master = Math.min(1, amount * 2);
    const crowd = Math.sqrt(Math.min(1, 3 / Math.max(1, Math.round(cfg.field.count))));
    const loose = Math.min(0.72, crowd * (amount * (0.25 + level * 0.45) + hold * 0.3 * this.present * master));
    const clapTake = clapShare * Math.min(1, cfg.hands.clap) * master * crowd;
    const jitter = Math.min(1, loose * 5);
    const gathering = handed && play.openness < 0.15 && cfg.hands.release > 0;

    // ── palette and camera ──────────────────────────────────────────────────
    const first = !this.started;
    if (!this.host) look.update(colors, cfg.colour.palette, dt, first);
    const tanHalf = Math.tan(((this.camera.fov / 2) * Math.PI) / 180);
    const aspect = width / height;

    // ── the field ───────────────────────────────────────────────────────────
    const count = Math.max(1, Math.min(MAX, Math.round(cfg.field.count)));
    // Sizes fall as the field fills, so twenty still fit.
    const size = 2.2 * Math.pow(count, -0.42);
    let meanX = 0;
    for (let i = 0; i < count; i++) meanX += SLOTS[i].x;
    meanX /= count;
    let spanX = 0;
    for (let i = 0; i < count; i++) spanX = Math.max(spanX, Math.abs(SLOTS[i].x - meanX));
    const hand = new THREE.Vector3(play.aim.x * 5.2, 0.1 + play.aim.y * 3.0, 2);
    const swirl = 1.2 * Math.max(0.4, 1 + (play.spread - 0.4) * 1.6);

    const seeds = model.seeds;
    const want = new THREE.Vector3();
    const q = new THREE.Quaternion();
    const q2 = new THREE.Quaternion();
    const upright = new THREE.Quaternion();
    const axis = new THREE.Vector3();
    const Y = new THREE.Vector3(0, 1, 0);
    const X = new THREE.Vector3(1, 0, 0);
    const data = this.seedData;

    this.flowers.forEach((f, i) => {
      const slot = SLOTS[i];
      const shown = i < count;
      f.presence += ((shown ? 1 : 0) - f.presence) * (1 - Math.exp(-dt * 1.4));
      if (first) f.presence = shown ? 1 : 0;
      if (!shown && f.presence < 0.004) f.presence = 0;
      f.root.visible = f.presence > 0.002;
      if (!f.root.visible) {
        f.placed = false;
        // Gone: its seeds go home with it, so it comes back whole.
        this.off.fill(0, i * seeds * 3, (i + 1) * seeds * 3);
        this.vel.fill(0, i * seeds * 3, (i + 1) * seeds * 3);
        this.away.fill(0, i * seeds, (i + 1) * seeds);
        this.flight.fill(0, i * seeds, (i + 1) * seeds);
        return;
      }

      // Where it stands for this many: spread across, kept centred, the stem's
      // foot always below the frame.
      const r = size * slot.k;
      const z = (count === 1 ? 0 : slot.z) + this.depth;
      const halfW = (15.5 - z) * tanHalf * aspect;
      const x = count === 1 ? 0 : ((slot.x - meanX) / Math.max(0.5, spanX)) * halfW * (0.66 + 0.24 * Math.min(1, (count - 1) / 12));
      const bottom = 0.1 - (15.5 - z) * tanHalf;
      const top = 0.1 + (15.5 - z) * tanHalf;
      let y = count === 1 ? slot.y : slot.y * Math.min(1, 0.5 + count * 0.1);
      y = Math.min(y, bottom - model.foot * r - 0.4, top - r * 1.5);
      want.set(x, y, z);
      if (!f.placed) { f.at.copy(want); f.size = r; f.placed = true; }
      f.at.lerp(want, 1 - Math.exp(-dt * 1.2));
      f.size += (r - f.size) * (1 - Math.exp(-dt * 1.2));
      // Growing in, it rises from below; going, it sinks away.
      const grow = 1 - Math.pow(1 - f.presence, 3);
      f.root.position.set(f.at.x, f.at.y - (1 - grow) * (-model.foot) * f.size * 0.8, f.at.z);
      f.root.rotation.y = slot.yaw;
      f.root.scale.setScalar(f.size * (0.6 + 0.4 * grow));
      const s = f.root.scale.x;
      const cosY = Math.cos(slot.yaw);
      const sinY = Math.sin(slot.yaw);

      // Its dance. A sway that travels across the field, so neighbours lean
      // one after another; a wave running up the stem like a whip; a bounce
      // up and down that the music deepens and each kick turns into a hop.
      // All wider in a louder room, leaning with the wind, bowed by a gust.
      const d = this.dance;
      const across = f.at.x * 0.35;
      const sway = cfg.field.sway * (0.3 + level * 0.8);
      const bx = sway * (0.7 * Math.sin((TAU * d) / 4.2 - across + slot.ph * 0.3)
        + 0.3 * Math.sin((TAU * d) / 1.9 + slot.ph * 1.7))
        + wind.x * 0.22 + this.gust * 0.5;
      const bz = sway * 0.5 * Math.sin((TAU * d) / 5.6 + slot.ph * 2.3) + wind.z * 0.22;
      f.bend.x += (bx - f.bend.x) * (1 - Math.exp(-dt * 3));
      f.bend.y += (bz - f.bend.y) * (1 - Math.exp(-dt * 3));
      // World bend, in head radii, into the dandelion's own turned frame.
      const wx = f.bend.x;
      const wz = f.bend.y;
      f.u.uBend.value.set((wx * cosY - wz * sinY), 0, (wx * sinY + wz * cosY));
      const wave = cfg.field.sway * (0.12 + level * 0.3);
      f.u.uWave.value.set(wave * cosY, wave * sinY);
      f.u.uWavePhase.value = (TAU * d) / 1.6 - across * 2 + slot.ph;
      const bounce = cfg.field.bounce * f.size * (
        (0.08 + level * 0.22) * Math.sin((TAU * d) / 1.2 - across + slot.ph)
        + 0.3 * this.hop * (0.6 + 0.4 * hash1(i + 7)));
      f.root.position.y += bounce;
      f.u.uShimmer.value = play.high * cfg.sound.high * 2;

      // ── its seeds ─────────────────────────────────────────────────────────
      const headX = f.root.position.x + wx * s;
      const headY = f.root.position.y;
      const headZ = f.root.position.z + wz * s;
      for (let k = 0; k < seeds; k++) {
        const j = i * seeds + k;
        const o = j * 3;
        if (clapped && hash1(j * 1.37 + t * 7.3) < clapTake) {
          this.hold[j] = CLAP_HOLD[0] + hash1(j + t) * (CLAP_HOLD[1] - CLAP_HOLD[0]);
        } else if (kicked && hash1(j * 0.71 + t * 13.1) < 0.008 * cfg.sound.gust * amount * crowd) {
          this.hold[j] = KICK_HOLD[0] + hash1(j + t * 3.1) * (KICK_HOLD[1] - KICK_HOLD[0]);
        }
        this.hold[j] = Math.max(0, this.hold[j] - dt);
        const wander = 0.06 * jitter * Math.sin(t * 0.37 + this.phase[j]);
        if (gathering) this.flight[j] = 0;
        // Once off, a seed makes a proper flight before it thinks of home.
        const free = !gathering && (this.hold[j] > 0 || this.flight[j] > 0 || loose + wander > this.thresh[j]);

        // The way the seed points, in world terms (the model is only turned about y).
        const px = model.pivot[k * 3];
        const py = model.pivot[k * 3 + 1];
        const pz = model.pivot[k * 3 + 2];
        const axX = model.axis[k * 3];
        const axY = model.axis[k * 3 + 1];
        const axZ = model.axis[k * 3 + 2];
        const awx = axX * cosY + axZ * sinY;
        const awz = -axX * sinY + axZ * cosY;

        if (free && !this.away[j]) {
          // Lifting off: a little pop outward along the way it points, a
          // flight of its own length, and somewhere in the frame to drift to.
          this.flight[j] = 6 + Math.random() * 6;
          this.pickDestination(j, tanHalf, aspect);
          const pop = 0.4 + (clapped && this.hold[j] > 0 ? 3.2 * cfg.hands.clap * clapShare : 0);
          this.vel[o] += awx * pop;
          this.vel[o + 1] += axY * pop + 0.2;
          this.vel[o + 2] += awz * pop;
        }
        this.away[j] = free ? 1 : 0;

        let ox = this.off[o];
        let oy = this.off[o + 1];
        let oz = this.off[o + 2];
        let vx = this.vel[o];
        let vy = this.vel[o + 1];
        let vz = this.vel[o + 2];
        if (step > 0 || free) {
          const h = Math.max(step, 0);
          // Where it is in the world, near enough.
          const wx0 = headX + (px * cosY + pz * sinY) * s + ox;
          const wy0 = headY + py * s + oy;
          const wz0 = headZ + (-px * sinY + pz * cosY) * s + oz;
          // The breeze curls.
          const fx = Math.sin(wy0 * 0.9 + t * 0.7 + this.phase[j]) * 0.6;
          const fy = Math.sin(wx0 * 0.7 - t * 0.5 + this.phase[j] * 0.5) * 0.45;
          const fz = Math.sin(wz0 * 0.8 + wx0 * 0.5 + t * 0.6) * 0.4;
          if (free) {
            this.flight[j] = Math.max(0, this.flight[j] - h);
            // Drifting softly towards its spot in the frame; there, it picks
            // another, so the loose seeds spread over the whole picture
            // rather than hanging round the head they came from.
            const d3 = j * 3;
            let tx = this.dest[d3] - wx0;
            let ty = this.dest[d3 + 1] - wy0;
            let tz = this.dest[d3 + 2] - wz0;
            const td = Math.hypot(tx, ty, tz);
            if (td < 0.8) this.pickDestination(j, tanHalf, aspect);
            const cruise = (1.2 + 0.9 * hash1(j * 2.9)) * Math.min(1, td / 2);
            tx = (tx / Math.max(td, 1e-3)) * cruise;
            ty = (ty / Math.max(td, 1e-3)) * cruise;
            tz = (tz / Math.max(td, 1e-3)) * cruise;
            let axx = (tx - vx) * 0.7 + wind.x * 0.3 + fx * 0.8;
            let ayy = (ty - vy) * 0.7 + wind.y * 0.3 + fy * 0.8 + 0.05;
            let azz = (tz - vz) * 0.7 + wind.z * 0.3 + fz * 0.6;
            // After the hand: drawn towards it, then round it.
            if (this.present > 0.01 && cfg.hands.follow > 0) {
              const dx = hand.x - wx0;
              const dy = hand.y - wy0;
              const dz = hand.z - wz0;
              const dist = Math.hypot(dx, dy, dz) + 1e-3;
              const pull = this.present * cfg.hands.follow * Math.min(1, dist / swirl - 0.6);
              axx += (dx / dist) * pull * 2.2 - (dy / dist) * this.present * cfg.hands.follow * 1.4;
              ayy += (dy / dist) * pull * 2.2 + (dx / dist) * this.present * cfg.hands.follow * 1.4;
              azz += (dz / dist) * pull * 1.2;
            }
            // Kept in the picture: eased back from the edges of the frame.
            const halfH = (15.5 - wz0) * tanHalf;
            const halfW = halfH * aspect;
            const overX = Math.abs(wx0) - halfW * 1.02;
            if (overX > 0) axx -= Math.sign(wx0) * overX * 1.5;
            const overY = Math.abs(wy0 - 0.1) - halfH * 1.02;
            if (overY > 0) ayy -= Math.sign(wy0 - 0.1) * overY * 1.5;
            if (wz0 > 6) azz -= (wz0 - 6) * 1.5;
            if (wz0 < -8) azz += (-8 - wz0) * 1.5;
            vx += axx * h * 1.6;
            vy += ayy * h * 1.6;
            vz += azz * h * 1.6;
            const drag = Math.exp(-h * 0.5);
            vx *= drag;
            vy *= drag;
            vz *= drag;
          } else {
            // Home: a gentle glide back, still caught by the breeze on the way.
            const dist = Math.hypot(ox, oy, oz);
            const speed = Math.min(1.8, dist * 0.9) / Math.max(dist, 1e-4);
            const tx = -ox * speed + fx * Math.min(1, dist) * 0.6;
            const ty = -oy * speed + fy * Math.min(1, dist) * 0.6;
            const tz = -oz * speed + fz * Math.min(1, dist) * 0.6;
            const ease = 1 - Math.exp(-h * 2.4);
            vx += (tx - vx) * ease;
            vy += (ty - vy) * ease;
            vz += (tz - vz) * ease;
            if (dist < 0.004 && Math.hypot(vx, vy, vz) < 0.02) {
              ox = oy = oz = vx = vy = vz = 0;
            }
          }
          ox += vx * h;
          oy += vy * h;
          oz += vz * h;
        }
        this.off[o] = ox;
        this.off[o + 1] = oy;
        this.off[o + 2] = oz;
        this.vel[o] = vx;
        this.vel[o + 1] = vy;
        this.vel[o + 2] = vz;

        // Turned: upright as a little parachute while it flies, hairs to the
        // sky, slowly spinning and rocking; settled back as it lands.
        const d = Math.hypot(ox, oy, oz) / s;
        const flying = Math.min(1, d / 0.8);
        const tq = this.turn.subarray(j * 4, j * 4 + 4);
        q.set(tq[0], tq[1], tq[2], tq[3]);
        if (flying > 0.001) {
          axis.set(axX, axY, axZ);
          upright.setFromUnitVectors(axis, Y);
          const spin = t * 0.6 + this.phase[j];
          q2.setFromAxisAngle(Y, spin);
          upright.premultiply(q2);
          q2.setFromAxisAngle(X, 0.3 * Math.sin(t * 1.3 + this.phase[j] * 2));
          upright.premultiply(q2);
          q2.identity().slerp(upright, flying);
          q.slerp(q2, 1 - Math.exp(-dt * 3));
        } else {
          q.slerp(q2.identity(), 1 - Math.exp(-dt * 6));
        }
        tq[0] = q.x; tq[1] = q.y; tq[2] = q.z; tq[3] = q.w;

        // Into the texture, in the dandelion's own units and frame.
        const at = (i * seeds * 2 + k * 2) * 4;
        const mx = (ox * cosY - oz * sinY) / s;
        const mz = (ox * sinY + oz * cosY) / s;
        data[at] = mx;
        data[at + 1] = oy / s;
        data[at + 2] = mz;
        data[at + 3] = 1 - Math.min(1, d / 0.6);
        data[at + 4] = q.x;
        data[at + 5] = q.y;
        data[at + 6] = q.z;
        data[at + 7] = q.w;
      }

      // ── its colour ────────────────────────────────────────────────────────
      const sh = f.shared;
      sh.uT.value = this.colourTime;
      sh.uOff.value = slot.off + cfg.colour.offset;
      look.apply(sh, cfg.colour.depth, 0.16 * (1 + play.high * cfg.sound.high * 2));
    });
    this.started = true;
    this.seedTex!.needsUpdate = true;
    this.viewport!.value.set(width, height);
    this.time!.value = t;
    this.strokeWidth!.value = Math.max(1, height / 620);
  }
}
