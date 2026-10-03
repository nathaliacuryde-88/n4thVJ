import { AudioData, HandData } from '../../App';
import { CrowdConfig } from '../../config/CrowdRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { Playing, hexToHsl, turnFrom } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CROWD
 * ═══════════════════════════════════════════════════════════════════════════
 * A crowd seen as heat, after playgrnd's Blurred Crowd. Head-and-shoulders
 * figures, blurred until they are only warmth, are summed into one field and
 * mapped through four inks in bands — ground, an outer halo, a middle band, a
 * core — so it reads like a thermal camera on a room. Over it, flocks of small
 * arrows stream along a swirling flow.
 *
 * By the tool's rules:
 *   - the finger count sets the tempo: how fast the crowd sways and the
 *     arrows drift and turn;
 *   - a hand is a source of heat in the crowd, and the arrows near it turn
 *     to face it;
 *   - spreading two hands makes the figures bigger;
 *   - a clap is "new variation": the crowd runs to new places;
 *   - each kick makes the crowd jump, not all at once, the way a room does;
 *     bass swells the heat; louder music brings out more arrows.
 *
 * The inks are the original's four, turned round the wheel by the layer's
 * colour panel. Its grain slider is left to the Noise effect; what stays is a
 * fine speckle in the field itself, which is how its bands blend into each
 * other in the original.
 * ═══════════════════════════════════════════════════════════════════════════
 */

const MAX_FIGURES = 60;
/** The original's inks. */
const BEIGE = '#c5c2b0';
const BLACK = '#141414';
const ORANGE = '#f2501e';
const BLUE = '#14a9f2';
/** Ground, outer halo, middle band, core — for each choice of ground. */
const ORDERS = [
  [BEIGE, ORANGE, BLUE, BLACK],
  [BLACK, BLUE, ORANGE, BEIGE],
  [ORANGE, BEIGE, BLUE, BLACK],
  [BLUE, BLACK, ORANGE, BEIGE],
];

const VERT = `#version 300 es
in vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }`;

const FRAG = `#version 300 es
precision highp float;
out vec4 fragColor;
uniform vec2 uSize;
uniform vec4 uFig[${MAX_FIGURES + 1}];
uniform int uCount;
uniform float uBlur, uHalo, uRim, uGain, uFrame;
uniform vec3 uInk[4];

/*
 * A silhouette blurred by a fixed amount: inside it the heat runs close to its
 * peak, and it falls away across its edge over the blur. The peak is the part
 * that matters — a figure much smaller than the blur never gets hot before it
 * has spread out, so small figures only reach the outer bands and only big
 * ones keep a core, as in the original.
 */
float blurred(float d, float r, float sig) {
  float peak = 1.0 - exp(-(r * r) / (2.0 * sig * sig));
  return peak / (1.0 + exp(d / (sig * 1.1)));
}

/** Rough signed distance to an ellipse. */
float ellipse(vec2 q, vec2 ab) {
  return (length(q / ab) - 1.0) * min(ab.x, ab.y);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uSize;
  uv.y = 1.0 - uv.y;
  vec2 p = uv * vec2(uSize.x / uSize.y, 1.0);
  // The blur, in frame heights: the same for every figure, whatever its size.
  float sig = 0.01 + uBlur * 0.06;

  // The heat: every figure a head and a pair of shoulders, joined softly.
  // Joined as overlapping glows do — each fills part of what the others leave —
  // so neighbours bridge into the tubes and loops of the original and a dense
  // cluster runs to a solid core rather than past it.
  float cold = 1.0;
  for (int i = 0; i < ${MAX_FIGURES + 1}; i++) {
    if (i >= uCount) break;
    vec4 f = uFig[i];
    float s = abs(f.z);
    float g;
    if (f.z < 0.0) {
      // A hand: round heat, not a person.
      g = blurred(length(p - f.xy) - 0.35 * s, 0.35 * s, sig);
    } else {
      // The head sits on the shoulders, so the two read as one bust.
      float gh = blurred(ellipse(p - vec2(f.x, f.y - 0.46 * s), vec2(0.34 * s, 0.38 * s)), 0.34 * s, sig);
      float gb = blurred(ellipse(p - vec2(f.x, f.y + 0.5 * s), vec2(0.8, 0.6) * s), 0.6 * s, sig);
      g = max(gh, gb);
    }
    cold *= 1.0 - min(1.0, g * f.w);
  }
  float h = min(1.0, (1.0 - cold) * uGain);

  // A fine speckle in the field, so the bands blend as they do in the original.
  float n = fract(sin(dot(gl_FragCoord.xy + uFrame * 7.31, vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
  h += n * 0.08;

  // Four inks in bands; the halo is how wide the bands are.
  // At a silhouette's own edge the heat is half its peak, so the core is the
  // figure itself and the halo bands spread out from it.
  float e3 = 0.5;
  float e2 = e3 - 0.08 - 0.16 * uHalo;
  float e1 = e2 - 0.06 - 0.14 * uHalo;
  float w = 0.015 + uBlur * 0.035;
  vec3 col = uInk[0];
  col = mix(col, uInk[1], smoothstep(e1 - w, e1 + w, h));
  col = mix(col, uInk[2], smoothstep(e2 - w, e2 + w, h));
  col = mix(col, uInk[3], smoothstep(e3 - w, e3 + w, h));

  // A darker edge where one band meets the next.
  float r = w * 1.6;
  float rim = exp(-pow((h - e1) / r, 2.0)) + exp(-pow((h - e2) / r, 2.0)) + exp(-pow((h - e3) / r, 2.0));
  col *= 1.0 - uRim * 0.55 * clamp(rim, 0.0, 1.0);

  fragColor = vec4(col, 1.0);
}`;

type Cfg = typeof CrowdConfig;

interface Figure {
  x: number;
  y: number;
  /** Size factor, so a crowd is not all one height. */
  k: number;
  phase: number;
  /** Whether, and how late, it jumps on a kick: 0 never. */
  jumps: number;
  delay: number;
}

/** A seeded random stream, so a variation is a place you can return to. */
function stream(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Where everyone stands. Spread over the whole frame rather than scattered at
 * random — at random a crowd bunches on one side and leaves the other empty,
 * where the original fills the frame. Each figure gets a place in an even
 * spread, jittered inside it so it never reads as a grid, and the places are
 * dealt in a shuffled order so any count fills the frame evenly.
 */
function crowdOf(seed: number, count: number, aspect: number): Figure[] {
  const r = stream(seed);
  const n = Math.max(1, count);
  const cols = Math.max(1, Math.round(Math.sqrt(n * aspect)));
  const rows = Math.max(1, Math.ceil(n / cols));
  const places = Array.from({ length: cols * rows }, (_, i) => i);
  for (let i = places.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [places[i], places[j]] = [places[j], places[i]];
  }
  return Array.from({ length: MAX_FIGURES }, (_, i) => {
    const place = places[i % places.length];
    const cx = place % cols;
    const cy = Math.floor(place / cols);
    return {
      x: (cx + 0.15 + r() * 0.7) / cols,
      y: (cy + 0.15 + r() * 0.7) / rows * 1.1,
      k: 0.65 + r() * 0.6, phase: r() * Math.PI * 2,
      jumps: r() < 0.65 ? 0.6 + r() * 0.6 : 0, delay: r() * 0.09,
    };
  });
}

/** Smooth value noise, for where the arrows flock and which way they point. */
function hash(x: number, y: number) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}
function noise(x: number, y: number) {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = x - ix, fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
  const a = hash(ix, iy), b = hash(ix + 1, iy), c = hash(ix, iy + 1), d = hash(ix + 1, iy + 1);
  return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
}

export class CrowdRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = CrowdConfig;

  private surface: HTMLCanvasElement;
  private gl: WebGL2RenderingContext | null = null;
  private program: WebGLProgram | null = null;
  private uniforms: Record<string, WebGLUniformLocation | null> = {};
  private failed = false;

  private playing = new Playing(0.6);
  private clock = 0;
  private frame = 0;
  private seed = 42519;
  private from: Figure[] = [];
  private to: Figure[] = [];
  /** The count and frame shape the crowd was laid out for. */
  private laidOut = '';
  private move = 1;
  private sinceKick = 10;
  private lastBeat = false;
  private wasClapping = false;
  private handHeat = 0;
  private inkKey = '';
  private inks = new Float32Array(12);
  private darkest = BLACK;
  private figs = new Float32Array((MAX_FIGURES + 1) * 4);

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.surface = document.createElement('canvas');
    this.init();
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(CrowdConfig, values);
  }

  private init() {
    const gl = this.surface.getContext('webgl2', { alpha: false, antialias: false });
    if (!gl) { this.failed = true; return; }
    this.gl = gl;
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Crowd shader:', gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) { this.failed = true; return; }
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Crowd link:', gl.getProgramInfoLog(program));
      this.failed = true;
      return;
    }
    this.program = program;
    gl.useProgram(program);
    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    for (const name of ['uSize', 'uFig', 'uCount', 'uBlur', 'uHalo', 'uRim', 'uGain', 'uFrame', 'uInk']) {
      this.uniforms[name] = gl.getUniformLocation(program, name);
    }
  }

  destroy() {
    const gl = this.gl;
    if (!gl) return;
    if (this.program) gl.deleteProgram(this.program);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    this.gl = null;
    this.program = null;
  }

  /** The inks for the chosen ground, turned to the layer's colour panel. */
  private follow(colors: string[]) {
    const order = Math.max(0, Math.min(3, Math.round(this.cfg.colour.order)));
    const key = `${colors[0] ?? ''}|${order}`;
    if (key === this.inkKey) return;
    this.inkKey = key;
    const turn = turnFrom(colors);
    ORDERS[order].forEach((hex, i) => {
      const [h, s, l] = hexToHsl(hex);
      const [r, g, b] = hslToRgb((((h + turn.hue) % 360) + 360) % 360, Math.min(1, s * turn.sat), l);
      this.inks.set([r, g, b], i * 3);
    });
    const [h, s, l] = hexToHsl(BLACK);
    const [r, g, b] = hslToRgb((((h + turn.hue) % 360) + 360) % 360, Math.min(1, s * turn.sat), l);
    this.darkest = `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})`;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { ctx, cfg } = this;
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;
    const gl = this.gl;
    if (this.failed || !gl || !this.program) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.font = '500 14px ui-monospace, monospace';
      ctx.textAlign = 'center';
      ctx.fillText('CROWD NEEDS WEBGL2', width / 2, height / 2);
      return;
    }

    const play = this.playing;
    play.read(handData, audioData);
    const { dt, step } = play;
    this.clock += step;
    this.frame++;
    const t = this.clock;

    // A clap: a new variation, the crowd running to its new places.
    const clapping = !!handData.clapping;
    if (clapping && !this.wasClapping && cfg.hands.clap > 0) {
      this.from = this.current();
      this.seed = (this.seed * 1103515245 + 12345) >>> 0;
      this.to = crowdOf(this.seed, this.count(), width / height);
      this.move = 0;
    }
    this.wasClapping = clapping;
    this.move = Math.min(1, this.move + dt / 0.7);

    // A kick: the crowd jumps.
    const beat = !!audioData?.beat;
    if (beat && !this.lastBeat && cfg.sound.beat > 0) this.sinceKick = 0;
    this.lastBeat = beat;
    this.sinceKick += dt;

    const present = handData.left || handData.right ? 1 : 0;
    this.handHeat += (present - this.handHeat) * (1 - Math.exp(-dt * 4));
    this.follow(colors);

    // ── the figures ─────────────────────────────────────────────────────────
    const aspect = width / height;
    const count = this.count();
    // Laid out again when the count or the frame's shape changes, so the
    // spread stays even; a clap's run to new places is left to finish.
    const layout = `${count}|${aspect.toFixed(2)}`;
    if (layout !== this.laidOut && this.move >= 1) {
      this.laidOut = layout;
      this.to = crowdOf(this.seed, count, aspect);
      if (!this.from.length) this.from = this.to;
    }
    const grow = Math.max(0.4, 1 + (play.spread - 0.4) * cfg.hands.grow * 1.2);
    const base = (0.18 + 0.3 * cfg.crowd.size) * Math.pow(count, -0.25) * grow;
    const wobble = cfg.crowd.wobble;
    const figures = this.current();
    const hx = ((play.aim.x + 1) / 2) * aspect;
    const hy = 0.5 - play.aim.y / 2;
    for (let i = 0; i < count; i++) {
      const f = figures[i];
      let s = base * f.k;
      let x = f.x * aspect + wobble * 0.025 * Math.sin(t * 1.3 + f.phase);
      let y = f.y + wobble * 0.014 * Math.sin(t * 1.9 + f.phase * 1.7);
      // One figure on its own stands at the bottom, as a portrait.
      if (count === 1) {
        s = (0.24 + 0.3 * cfg.crowd.size) * grow;
        x = 0.5 * aspect;
        y = 1.02 - s * 0.6;
      }
      // The crowd makes room round the hand, so its own heat stands clear.
      if (this.handHeat > 0.01 && cfg.hands.heat > 0) {
        const room = base * 2.6 * Math.min(1, cfg.hands.heat);
        const dx = x - hx;
        const dy = y - hy;
        const d = Math.hypot(dx, dy) || 1e-4;
        if (d < room) {
          const push = (room - d) * this.handHeat;
          x += (dx / d) * push;
          y += (dy / d) * push;
        }
      }
      const air = this.sinceKick - f.delay;
      if (f.jumps > 0 && air > 0 && air < 0.34) y -= Math.sin((Math.PI * air) / 0.34) * s * 0.45 * f.jumps * cfg.sound.beat;
      this.figs.set([x, y, s, 1], i * 4);
    }
    // The hand: round heat where it is.
    let n = count;
    if (this.handHeat > 0.01 && cfg.hands.heat > 0) {
      this.figs.set([hx, hy, -base * 1.6, this.handHeat * cfg.hands.heat * 1.3], n * 4);
      n++;
    }

    // ── the heat, at half size: it is a blur, so the detail is not there to lose
    const w = Math.max(2, Math.round(width * 0.5));
    const h = Math.max(2, Math.round(height * 0.5));
    if (this.surface.width !== w || this.surface.height !== h) {
      this.surface.width = w;
      this.surface.height = h;
    }
    const u = this.uniforms;
    gl.viewport(0, 0, w, h);
    gl.useProgram(this.program);
    gl.uniform2f(u.uSize, w, h);
    gl.uniform4fv(u.uFig, this.figs);
    gl.uniform1i(u.uCount, n);
    gl.uniform1f(u.uBlur, cfg.glow.blur);
    gl.uniform1f(u.uHalo, cfg.glow.halo);
    gl.uniform1f(u.uRim, cfg.glow.rim);
    gl.uniform1f(u.uGain, 1 + play.bass * cfg.sound.bass * 0.14);
    gl.uniform1f(u.uFrame, this.frame % 997);
    gl.uniform3fv(u.uInk, this.inks);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(this.surface, 0, 0, width, height);

    // ── the arrows, crisp at full size ───────────────────────────────────────
    this.arrows(width, height, t, hx / aspect, hy, audioData);
  }

  private count() {
    return Math.max(1, Math.min(MAX_FIGURES, Math.round(this.cfg.crowd.figures)));
  }

  /** The crowd as it stands: on its way from one variation to the next, or arrived. */
  private current(): Figure[] {
    if (this.move >= 1) return this.to;
    const e = 1 - Math.pow(1 - this.move, 3);
    return this.to.map((f, i) => {
      const a = this.from[i];
      return { ...f, x: a.x + (f.x - a.x) * e, y: a.y + (f.y - a.y) * e, k: a.k + (f.k - a.k) * e };
    });
  }

  /**
   * Flocks of small arrows, pointing along a slowly turning flow.
   *
   * Where they appear is a second, coarser noise, so they come in patches as
   * in the original. Each points one of eight ways, and drifts a little along
   * its own direction; near a hand they turn to face it.
   */
  private arrows(width: number, height: number, t: number, hx: number, hy: number, audioData?: AudioData) {
    const { ctx, cfg } = this;
    const loud = (audioData?.overall ?? 0) * cfg.sound.level;
    const amount = Math.min(1, cfg.arrows.amount + loud * 0.55);
    if (amount <= 0.01) return;
    const spacing = Math.max(16, width / 52);
    const length = spacing * (0.3 + 0.45 * cfg.arrows.size);
    const threshold = 1 - amount * 0.9;
    const seedX = (this.seed % 1000) * 0.37;
    const seedY = (this.seed % 777) * 0.53;
    const near = this.handHeat * cfg.hands.heat;

    ctx.save();
    ctx.strokeStyle = this.darkest;
    ctx.lineWidth = Math.max(1, length * 0.13);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    const cols = Math.ceil(width / spacing);
    const rows = Math.ceil(height / spacing);
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const jx = hash(i * 1.7 + 3.1, j * 2.3);
        const jy = hash(i * 2.9, j * 1.3 + 7.7);
        let x = (i + 0.2 + jx * 0.6) * spacing;
        let y = (j + 0.2 + jy * 0.6) * spacing;
        const u = x / width;
        const v = y / height;
        // Patches: a coarse noise, drifting slowly.
        const patch = noise(u * 3.2 + seedX + t * 0.04, v * 3.2 + seedY);
        if (patch < threshold) continue;
        // Even inside a flock, not every place is taken.
        if (hash(i * 5.3 + 1.1, j * 4.7 + 2.9) > 0.62) continue;
        // The flow: a slowly turning angle, snapped to eight directions.
        let angle = noise(u * 2.2 + seedY + 9.3, v * 2.2 + seedX + t * 0.05) * Math.PI * 4;
        if (near > 0.01) {
          const dx = hx - u;
          const dy = hy - v;
          const pull = near * Math.exp(-(dx * dx + dy * dy) * 9);
          if (pull > 0.35) angle = Math.atan2(dy * height, dx * width);
        }
        angle = Math.round(angle / (Math.PI / 4)) * (Math.PI / 4);
        const cx = Math.cos(angle);
        const cy = Math.sin(angle);
        // A small drift along its own way, so the flock streams.
        // Louder, and the flock surges further.
        const drift = Math.sin(t * 2.2 + jx * 6.28) * spacing * (0.18 + loud * 0.3);
        x += cx * drift;
        y += cy * drift;
        const tipX = x + (cx * length) / 2;
        const tipY = y + (cy * length) / 2;
        ctx.moveTo(x - (cx * length) / 2, y - (cy * length) / 2);
        ctx.lineTo(tipX, tipY);
        const head = length * 0.42;
        for (const side of [-1, 1]) {
          const a = angle + Math.PI + side * 0.6;
          ctx.moveTo(tipX, tipY);
          ctx.lineTo(tipX + Math.cos(a) * head, tipY + Math.sin(a) * head);
        }
      }
    }
    ctx.stroke();
    ctx.restore();
  }
}

/** HSL (degrees, 0–1, 0–1) to RGB 0–1. */
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  const [r, g, b] =
    h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x]
      : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return [r + m, g + m, b + m];
}
