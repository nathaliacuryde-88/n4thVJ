import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { CellConfig } from '../../config/CellRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { InflatedLook, Playing, Shared, drawUnavailable, makeRenderer } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CELL DIVISION
 * ═══════════════════════════════════════════════════════════════════════════
 * It starts as one cell. The nucleus draws apart into two, the body lengthens
 * after it, narrows at the waist, and there are two cells where there was
 * one — and then four, and eight, each generation a little smaller and a
 * shade further along the palette, so a family can be told by its colour.
 *
 * The shape of a dividing cell is not drawn as a shape: every cell is two
 * round lobes that start in the same place, and the picture is worked out,
 * pixel by pixel, as the two blended together. As they move apart the blend
 * is what makes the waist, and when it lets go there are two.
 *
 * THE HAND is where they live: the cluster follows it. An open palm lets them
 * loose — they stand apart, round, and divide readily; a fist presses them
 * into one tight body with flat walls between them, and nothing divides while
 * it is held. A clap divides every cell at once; when there is no room left
 * for that, it bursts them, and one is left to begin again.
 *
 * THE MUSIC sets the dividing: cells divide on the kick, more of them the
 * fuller the music and through a build-up; every kick swells them all, bass
 * fills them out, and the drop bursts the colony back to a single cell.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof CellConfig;

/** The most cells the picture can hold at once, the dying included. */
const SLOTS = 28;
/** How long a division takes, in beats of the clock. */
const DIVIDE = 1.5;
/** A daughter's radius beside its mother's: half the area each. */
const DAUGHTER = 0.72;

interface Cell {
  x: number; y: number; vx: number; vy: number;
  r: number;
  /** The line it divides along. */
  angle: number;
  /** 0 whole; rising to 1 while it divides. */
  split: number;
  dividing: boolean;
  /** Where on the palette, 0 to 1. */
  tone: number;
  age: number;
  /** 1 alive; falling to 0 once it is making room. */
  fade: number;
  dying: boolean;
  seed: number;
}

const VERT = /* glsl */ `
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const FRAG = /* glsl */ `
precision highp float;
#define SLOTS ${SLOTS}
uniform vec2 uRes;
uniform int uCount;
uniform vec4 uLobes[SLOTS];   // the two lobes of the body
uniform vec4 uCores[SLOTS];   // the two lobes of the nucleus
uniform vec4 uShape[SLOTS];   // lobe radius, body blend, nucleus radius, nucleus blend
uniform vec4 uTone[SLOTS];    // palette position, how present, seed, how far through dividing
uniform sampler2D uPalA;
uniform sampler2D uPalB;
uniform float uPalMix;
uniform float uStyle;
uniform float uPulse;
uniform float uShimmer;

vec3 palette(float c) {
  vec2 at = vec2(fract(c), 0.5);
  return mix(texture2D(uPalA, at).rgb, texture2D(uPalB, at).rgb, uPalMix);
}
// Two distances blended into one: where they are alike, the result dips
// below both, and that dip is the waist of a dividing cell.
float blend(float a, float b, float k) {
  float h = max(k - abs(a - b), 0.0) / max(k, 1e-5);
  return min(a, b) - h * h * k * 0.25;
}

void main() {
  vec2 p = gl_FragCoord.xy / uRes.y;
  float px = 1.0 / uRes.y;

  float d1 = 1e3, d2 = 1e3;
  float core = 1e3, radius = 0.1;
  vec4 tone = vec4(0.0);
  vec3 halo = vec3(0.0);
  for (int i = 0; i < SLOTS; i++) {
    if (i >= uCount) break;
    vec4 l = uLobes[i];
    vec4 s = uShape[i];
    float d = blend(length(p - l.xy), length(p - l.zw), s.y) - s.x;
    // Every cell gives a little of its light to the dark round it.
    halo += palette(uTone[i].x) * exp(-max(d, 0.0) / (0.04 + 0.04 * uPulse)) * uTone[i].y;
    if (d < d1) {
      d2 = d1; d1 = d;
      vec4 c = uCores[i];
      core = blend(length(p - c.xy), length(p - c.zw), s.w) - s.z;
      radius = s.x;
      tone = uTone[i];
    } else if (d < d2) {
      d2 = d;
    }
  }

  float inside = smoothstep(px, -px, d1);
  // How far in from the membrane: 0 at the edge, 1 at the middle.
  float t = clamp(-d1 / max(radius, 1e-4), 0.0, 1.0);
  float dome = sqrt(clamp(1.0 - (1.0 - t) * (1.0 - t), 0.0, 1.0));
  // Where two cells press on each other there is a wall between them.
  float wall = (1.0 - smoothstep(1.2 * px, 3.2 * px, d2 - d1)) * smoothstep(2.0 * px, -px, d2);
  float skin = 0.11 * radius + 1.5 * px;
  float membrane = inside * (1.0 - smoothstep(skin * 0.55, skin, -d1));
  float nucleus = smoothstep(px, -px, core);
  float nucleusEdge = nucleus * (1.0 - smoothstep(1.5 * px, 3.5 * px, -core));

  vec3 body = palette(tone.x);
  vec3 pale = palette(tone.x + 0.17);
  vec3 heart = palette(tone.x + 0.42);
  vec3 col;
  float alpha = inside;

  if (uStyle < 0.5) {
    // Glass: a rounded, translucent body, lit from the upper left.
    vec2 g = vec2(dFdx(d1), dFdy(d1));
    vec2 out2 = g / max(length(g), 1e-6);
    vec3 n = normalize(vec3(out2 * (1.0 - dome), dome + 0.08));
    vec3 light = normalize(vec3(-0.45, 0.6, 0.66));
    float lit = max(dot(n, light), 0.0);
    float shine = pow(max(dot(n, normalize(light + vec3(0.0, 0.0, 1.0))), 0.0), 46.0);
    // Thin at the middle, where it is seen through; dense at the rim.
    col = body * (0.2 + 0.5 * lit + 0.12 * dome);
    col += mix(body, pale, 0.6) * pow(1.0 - dome, 1.6) * (0.75 + 0.5 * uPulse + 0.4 * uShimmer);
    vec3 inner = heart * (0.45 + 0.55 * lit) + pale * 0.12;
    col = mix(col, inner, nucleus * 0.85);
    col += vec3(1.0) * shine * 0.55;
    col *= 1.0 - 0.75 * wall;
    vec3 lightOut = halo * 0.17 * (1.0 - inside);
    float a = inside * tone.y;
    gl_FragColor = vec4(col * a + lightOut, max(a, min(1.0, dot(lightOut, vec3(0.5)))));
    return;
  } else if (uStyle < 1.5) {
    // Paper: flat shapes, a pale rim, the nucleus a shape of another colour.
    col = mix(body, pale, membrane * 0.9);
    col = mix(col, heart, nucleus);
    col *= 1.0 + 0.12 * uPulse;
    col = mix(col, palette(0.53) * 0.35, wall);
  } else {
    // Line: only where things end.
    float line = inside * (1.0 - smoothstep(1.2 * px, 3.0 * px, -d1));
    col = body * 0.07 + pale * (line + wall) * (1.0 + 0.6 * uPulse) + mix(heart, pale, 0.45) * nucleusEdge * 1.3;
    col += pale * membrane * 0.12;
  }
  gl_FragColor = vec4(col * alpha * tone.y, alpha * tone.y);
}`;

export class CellRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = CellConfig;
  private surface = document.createElement('canvas');
  private renderer: THREE.WebGLRenderer | null = null;
  private failed = false;
  private playing = new Playing(0.6);
  private look = new InflatedLook();
  private shared: Shared = this.look.shared();
  private started = false;

  private scene = new THREE.Scene();
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private geometry = new THREE.BufferGeometry();
  private material: THREE.ShaderMaterial;
  private lobes = Array.from({ length: SLOTS }, () => new THREE.Vector4());
  private cores = Array.from({ length: SLOTS }, () => new THREE.Vector4());
  private shape = Array.from({ length: SLOTS }, () => new THREE.Vector4());
  private tone = Array.from({ length: SLOTS }, () => new THREE.Vector4());

  private cells: Cell[] = [];
  private aspect = 16 / 9;
  private centre = { x: 0.89, y: 0.5 };
  private pulse = 0;
  private swell = 0;
  private charge = 0;
  private since = 0;
  private lastKick = 0;
  private lastDrop = 0;
  private grip = 0.35;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
    this.material = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms: {
        uRes: { value: new THREE.Vector2(1, 1) },
        uCount: { value: 0 },
        uLobes: { value: this.lobes },
        uCores: { value: this.cores },
        uShape: { value: this.shape },
        uTone: { value: this.tone },
        uPalA: this.shared.uPalA,
        uPalB: this.shared.uPalB,
        uPalMix: this.shared.uPalMix,
        uStyle: { value: 0 },
        uPulse: { value: 0 },
        uShimmer: { value: 0 },
      },
      depthTest: false,
      depthWrite: false,
      transparent: true,
      blending: THREE.NoBlending,
    });
    const mesh = new THREE.Mesh(this.geometry, this.material);
    mesh.frustumCulled = false;
    this.scene.add(mesh);
    try {
      this.renderer = makeRenderer(this.surface);
    } catch (error) {
      console.error('Cell Division could not start:', error);
      this.failed = true;
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(CellConfig, values);
  }

  destroy() {
    this.look.dispose();
    this.geometry.dispose();
    this.material.dispose();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer = null;
  }

  private make(x: number, y: number, r: number, tone: number): Cell {
    return {
      x, y, vx: 0, vy: 0, r, angle: Math.random() * Math.PI, split: 0, dividing: false,
      tone: ((tone % 1) + 1) % 1, age: 0, fade: 1, dying: false, seed: Math.random(),
    };
  }

  /** How many there are, counting one that is dividing as the two it will be. */
  private living() {
    let n = 0;
    for (const c of this.cells) if (!c.dying) n += c.dividing ? 2 : 1;
    return n;
  }

  /** The cell most ready to divide, or null. */
  private ripest(): Cell | null {
    let best: Cell | null = null;
    for (const c of this.cells) {
      if (c.dying || c.dividing || c.age < 0.9) continue;
      if (!best || c.age > best.age) best = c;
    }
    return best;
  }

  /** One division, making room for it first if the frame is full. */
  private divide(limit: number) {
    if (this.living() >= limit || this.cells.length >= SLOTS - 1) {
      // The oldest that is not busy gives up its place.
      let oldest: Cell | null = null;
      for (const c of this.cells) {
        if (c.dying || c.dividing) continue;
        if (!oldest || c.age > oldest.age) oldest = c;
      }
      if (oldest && this.cells.filter((c) => !c.dying).length > 1) oldest.dying = true;
      if (this.cells.length >= SLOTS - 1) return;
    }
    const cell = this.ripest();
    if (!cell) return;
    cell.dividing = true;
    cell.split = 0;
    // Mostly across the line to the middle, so the colony grows outwards.
    const out = Math.atan2(cell.y - this.centre.y, cell.x - this.centre.x);
    cell.angle = out + (Math.random() - 0.5) * 1.6;
  }

  /** Every cell flung out and let go; one is left to begin again. */
  private burst(strength: number) {
    for (const c of this.cells) {
      const a = Math.atan2(c.y - this.centre.y, c.x - this.centre.x) + (Math.random() - 0.5) * 0.6;
      c.vx += Math.cos(a) * 1.5 * strength;
      c.vy += Math.sin(a) * 1.5 * strength;
      c.dying = true;
      c.dividing = false;
      c.split = 0;
    }
    const first = this.make(this.centre.x, this.centre.y, 0.02, Math.random());
    this.cells.push(first);
    if (this.cells.length > SLOTS) this.cells.splice(0, this.cells.length - SLOTS);
    this.since = 0;
    this.charge = 0;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { canvas, ctx, cfg } = this;
    const W = canvas.width;
    const H = canvas.height;
    if (!W || !H) return;
    const renderer = this.renderer;
    if (this.failed || !renderer) {
      drawUnavailable(ctx, W, H, 'CELL DIVISION');
      return;
    }
    this.aspect = W / H;
    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    const step = Math.min(0.06, Math.max(0, play.step));
    const ease = (rate: number) => 1 - Math.exp(-dt * rate);

    // ── the hand ─────────────────────────────────────────────────────────
    const hands = [handData.left, handData.right].filter(Boolean);
    const real = hands.length > 0 && !handData.synthetic;
    const follow = cfg.hands.gather;
    const tx = this.aspect / 2 + play.aim.x * this.aspect * 0.36 * Math.min(1, follow);
    const ty = 0.5 + play.aim.y * 0.32 * Math.min(1, follow);
    this.centre.x += (tx - this.centre.x) * ease(5);
    this.centre.y += (ty - this.centre.y) * ease(5);
    // A fist presses them together; an open palm lets them stand apart.
    this.grip += ((real ? play.fist : 0.35) - this.grip) * ease(6);
    const held = real && play.fist > 0.6;

    if (!this.cells.length) this.cells.push(this.make(this.centre.x, this.centre.y, 0.02, 0.05 + Math.random() * 0.2));

    // ── the music, and when to divide ────────────────────────────────────
    const limit = Math.max(2, Math.min(SLOTS - 4, Math.round(cfg.cells.crowd)));
    const kick = Math.max(play.kick, play.bump) * cfg.sound.beat;
    this.pulse = Math.max(this.pulse * Math.exp(-dt * 6), Math.min(1, kick));
    this.swell += (play.bass * cfg.sound.bass - this.swell) * ease(4);
    const live = !!audioData?.live;
    if (kick > 0.45 && this.lastKick <= 0.45 && !held) {
      this.charge += 0.3 + 0.5 * play.energy + 0.9 * play.build;
      this.since = 0;
    }
    this.lastKick = kick;
    // With no beat to divide on, they divide by the clock; an open palm hurries them.
    this.since += step;
    const every = (live ? 5 : 2.4) / Math.max(0.1, cfg.cells.pace) / (real ? 0.5 + 1.5 * (1 - play.fist) : 1);
    if (this.since > every && !held) {
      this.charge += 1;
      this.since = 0;
    }
    let turns = 0;
    while (this.charge >= 1 && turns < 3) {
      this.divide(limit);
      this.charge -= 1;
      turns++;
    }
    if (play.clapped && cfg.hands.clap > 0) {
      if (this.living() * 2 <= limit) {
        for (const c of this.cells) {
          if (c.dying || c.dividing) continue;
          c.dividing = true;
          c.split = 0;
          c.age = Math.max(c.age, 1);
          c.angle = Math.atan2(c.y - this.centre.y, c.x - this.centre.x) + (Math.random() - 0.5) * 1.6;
        }
        this.pulse = 1;
      } else {
        this.burst(play.clapStrength * cfg.hands.clap);
      }
    }
    if (play.drop > 0.5 && this.lastDrop <= 0.5 && this.cells.length > 3) this.burst(1);
    this.lastDrop = play.drop;

    // ── grow, divide, make room ──────────────────────────────────────────
    const count = Math.max(1, this.living());
    const base = 0.21 * cfg.cells.size / Math.pow(count, 0.4);
    const born: Cell[] = [];
    for (const c of this.cells) {
      c.age += step;
      if (c.dying) {
        c.fade = Math.max(0, c.fade - dt / 0.9);
        continue;
      }
      const want = base * (0.9 + 0.2 * c.seed) * (c.dividing ? 1.12 : 1);
      c.r += (want - c.r) * ease(c.r < want ? 1.6 : 0.9);
      if (c.dividing) {
        c.split += step / DIVIDE;
        if (c.split >= 1) {
          const half = c.r * DAUGHTER * 0.98;
          const ax = Math.cos(c.angle);
          const ay = Math.sin(c.angle);
          const one = this.make(c.x + ax * half, c.y + ay * half, c.r * DAUGHTER, c.tone + 0.045 + c.seed * 0.03);
          const two = this.make(c.x - ax * half, c.y - ay * half, c.r * DAUGHTER, c.tone - 0.03);
          one.vx = c.vx + ax * 0.04; one.vy = c.vy + ay * 0.04;
          two.vx = c.vx - ax * 0.04; two.vy = c.vy - ay * 0.04;
          born.push(one, two);
          c.fade = -1;
        }
      }
    }
    this.cells = this.cells.filter((c) => c.fade > 0);
    this.cells.push(...born);

    // ── where they sit: drawn to the hand, never through one another ─────
    const pack = 1.14 - 0.3 * this.grip;
    const pull = (0.7 + 2.6 * this.grip) * (0.4 + 0.6 * Math.min(1, follow + 0.4));
    const circles: { x: number; y: number; r: number; of: Cell }[] = [];
    const lobesOf = (c: Cell) => {
      const s = c.dividing ? c.split : 0;
      const half = c.r * DAUGHTER * 0.98 * smooth(0.2, 1, s);
      const r = c.r * (1 - (1 - DAUGHTER) * s) * (0.4 + 0.6 * c.fade);
      return { half, r, ax: Math.cos(c.angle), ay: Math.sin(c.angle) };
    };
    for (const c of this.cells) {
      if (!c.dying) {
        c.vx += (this.centre.x - c.x) * pull * step;
        c.vy += (this.centre.y - c.y) * pull * step;
        // Each drifts a little on its own.
        const a = c.seed * 40 + c.age * (0.3 + c.seed * 0.4);
        c.vx += Math.cos(a) * 0.03 * step;
        c.vy += Math.sin(a * 1.3) * 0.03 * step;
      }
      const damp = Math.exp(-step * (c.dying ? 1.2 : 3.2));
      c.vx *= damp; c.vy *= damp;
      c.x += c.vx * step; c.y += c.vy * step;
      if (c.dying) continue;
      const l = lobesOf(c);
      circles.push({ x: c.x + l.ax * l.half, y: c.y + l.ay * l.half, r: l.r, of: c });
      if (l.half > 0) circles.push({ x: c.x - l.ax * l.half, y: c.y - l.ay * l.half, r: l.r, of: c });
    }
    for (let pass = 0; pass < 2; pass++) {
      for (let i = 0; i < circles.length; i++) {
        for (let j = i + 1; j < circles.length; j++) {
          const a = circles[i];
          const b = circles[j];
          if (a.of === b.of) continue;
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy) || 1e-4;
          const over = (a.r + b.r) * pack - dist;
          if (over <= 0) continue;
          const push = over * 0.3;
          const nx = dx / dist;
          const ny = dy / dist;
          a.of.x -= nx * push; a.of.y -= ny * push; a.x -= nx * push; a.y -= ny * push;
          b.of.x += nx * push; b.of.y += ny * push; b.x += nx * push; b.y += ny * push;
        }
      }
    }

    // ── draw ─────────────────────────────────────────────────────────────
    const frame = Math.min(dt, 0.05);
    this.look.update(colors, cfg.look.palette, frame, !this.started);
    this.started = true;
    this.look.apply(this.shared, 0, 0);
    const size = 1 + 0.07 * this.pulse + 0.08 * this.swell;
    const n = Math.min(SLOTS, this.cells.length);
    for (let i = 0; i < n; i++) {
      const c = this.cells[i];
      const l = lobesOf(c);
      const s = c.dividing ? c.split : 0;
      const r = l.r * size;
      this.lobes[i].set(c.x + l.ax * l.half, c.y + l.ay * l.half, c.x - l.ax * l.half, c.y - l.ay * l.half);
      // The nucleus goes first: it is two before the body has begun to narrow.
      const coreHalf = c.r * DAUGHTER * 0.98 * smooth(0, 0.6, s);
      this.cores[i].set(c.x + l.ax * coreHalf, c.y + l.ay * coreHalf, c.x - l.ax * coreHalf, c.y - l.ay * coreHalf);
      const coreR = r * 0.36;
      // The blends are nothing at the start and the end, so a whole cell is a
      // plain circle and two daughters are two plain circles.
      const blend = r * 1.0 * Math.pow(Math.sin(Math.PI * s), 0.8);
      const coreBlend = coreR * 0.9 * Math.pow(Math.sin(Math.PI * Math.min(1, s / 0.6)), 0.8);
      this.shape[i].set(r, Math.max(1e-4, blend), coreR, Math.max(1e-4, coreBlend));
      this.tone[i].set(c.tone, Math.max(0, Math.min(1, c.fade)) * Math.min(1, c.age * 4 + 0.4), c.seed, s);
    }
    const u = this.material.uniforms;
    (u.uRes.value as THREE.Vector2).set(W, H);
    u.uCount.value = n;
    u.uStyle.value = Math.max(0, Math.min(2, Math.round(cfg.look.style)));
    u.uPulse.value = this.pulse;
    u.uShimmer.value = play.hat;

    if (this.surface.width !== W || this.surface.height !== H) renderer.setSize(W, H, false);
    renderer.render(this.scene, this.camera);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    ctx.drawImage(this.surface, 0, 0, W, H);
  }
}

function smooth(a: number, b: number, x: number) {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}
