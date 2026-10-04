import { AudioData, HandData } from '../../App';
import { BigTypeConfig } from '../../config/BigTypeRendererConfig';
import { DEFAULT_TEXT } from '../../config/content';
import { ParamValues, withOverrides } from '../../params/types';
import boldUrl from '../../assets/StrichpunktSans-Bold.ttf?url';
import blackUrl from '../../assets/StrichpunktSans-Black.ttf?url';
import { Playing, TAU } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * BIG TYPE
 * ═══════════════════════════════════════════════════════════════════════════
 * The words typed for Kinetic Type, very large, in Strichpunkt Sans capitals,
 * dancing in one of four styles after the kinetic type of studios like DIA:
 *
 *   Lines    the words seen through vertical lines — hairlines everywhere,
 *            thickening inside the letters and in a soft halo round them, a
 *            ghost of each letter a beat behind — the letters bobbing
 *   Stretch  a poster of stacked rows, bands of it smeared like a slit scan:
 *            pulled sideways from a point, dragged down, waved into stairs
 *   Blocks   every letter in its own box, the boxes growing and shrinking
 *            in a wave along the words and jumping on the kick
 *   Shear    letters (or whole words) folding flat and slanting as if they
 *            turned in space, in ripples running through the words
 *
 * Lines and Stretch draw the words as a mask and a shader makes the picture
 * from it; Blocks and Shear draw every letter with its own transform.
 *
 * The hands, by the rule every visual follows: the finger count sets the
 * tempo through the shared clock — one finger slow, two medium, five fast —
 * and a clap bursts everything. On top: an open hand dances more and a fist
 * holds the words still and clean; and where the hand is, things happen —
 * the lines thicken there, the letter under it grows biggest, the stretch
 * pulls from it, the ripples start from it. The music: each kick hops, smears,
 * jumps or ripples; bass deepens every move, melody speeds the waves, the hats
 * shiver the edges.
 *
 * The typeface is bundled with the app, so it is there with no internet.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof BigTypeConfig;

const LINES = 0;
const STRETCH = 1;
const BLOCKS = 2;
const SHEAR = 3;

/** How many bands Stretch can smear. */
const MAX_BANDS = 16;

const FAMILY = 'Strichpunkt Sans';

// ── the typeface ─────────────────────────────────────────────────────────────

let fontsPending: Promise<void> | null = null;
let fontsReady = false;

function loadFonts(): Promise<void> {
  if (!fontsPending) {
    const faces = [
      new FontFace(FAMILY, `url(${boldUrl})`, { weight: '700' }),
      new FontFace(FAMILY, `url(${blackUrl})`, { weight: '900' }),
    ];
    fontsPending = Promise.all(faces.map((f) => f.load()))
      .then((loaded) => {
        for (const f of loaded) document.fonts.add(f);
        fontsReady = true;
      })
      .catch((error) => {
        console.error('Strichpunkt Sans failed to load:', error);
        fontsPending = null;
        fontsReady = true; // draw with the fallback rather than nothing
      });
  }
  return fontsPending;
}

// ── shaders ──────────────────────────────────────────────────────────────────

const VERT = `#version 300 es
in vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }`;

const FRAG = `#version 300 es
precision highp float;
uniform sampler2D uSharp;
uniform sampler2D uSoft;
uniform vec2 uRes;
uniform int uMode;
uniform vec3 uInk, uGround;
uniform float uPitch, uThick, uShiver, uTime;
uniform vec3 uHand;            // x, y in pixels, and how strongly
uniform vec4 uBand[${MAX_BANDS}];  // kind, amount, pivot x (px), phase
uniform int uBands;
uniform vec2 uSpan[${MAX_BANDS}];  // each band's top and height, px
out vec4 fragColor;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

float sharpAt(vec2 px) { return texture(uSharp, vec2(px.x / uRes.x, 1.0 - px.y / uRes.y)).r; }
float softAt(vec2 px) { return texture(uSoft, vec2(px.x / uRes.x, 1.0 - px.y / uRes.y)).r; }

void main() {
  // Pixels, top-left origin, the way the mask was drawn.
  vec2 px = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
  float ink = 0.0;

  if (uMode == 0) {
    // LINES: one vertical line per pitch; its thickness, row by row, is how
    // much letter and halo lies under its middle.
    float i = floor(px.x / uPitch);
    float cx = (i + 0.5) * uPitch;
    vec2 at = vec2(cx, px.y);
    float m = sharpAt(at);
    float s = softAt(at);
    float near = uHand.z * exp(-dot(at - uHand.xy, at - uHand.xy) / (uRes.y * uRes.y * 0.04));
    float w = uPitch * (0.06 + uThick * (0.62 * m + 0.38 * s) + 0.25 * near * (0.3 + s));
    w = max(w, 1.0);
    // The hats shiver each line sideways a hair.
    cx += (hash(vec2(i, floor(uTime * 24.0))) - 0.5) * uShiver * uPitch * 0.25;
    float d = abs(px.x - cx);
    ink = 1.0 - smoothstep(w * 0.5 - 0.6, w * 0.5 + 0.6, d);
  } else {
    // STRETCH: each band of rows pulled its own way, then read from the mask.
    // Each row of the words is a band; above and below them, nothing moves.
    vec4 band = vec4(0.0);
    float top = 0.0;
    float uBandH = 1.0;
    for (int i = 0; i < ${MAX_BANDS}; i++) {
      if (i >= uBands) break;
      vec2 sp = uSpan[i];
      if (px.y >= sp.x && px.y < sp.x + sp.y) { band = uBand[i]; top = sp.x; uBandH = sp.y; }
    }
    float kind = band.x;
    float a = band.y;
    float pivot = band.z;
    float y = px.y - top;
    vec2 at = px;
    if (kind > 0.5 && kind < 1.5) {
      // Pulled sideways: everything past the pivot is the pivot's column,
      // smeared out — then, as it eases off, stretched instead.
      float k = 1.0 + a * 14.0;
      at.x = px.x > pivot ? pivot + (px.x - pivot) / k : px.x;
    } else if (kind > 1.5 && kind < 2.5) {
      // Dragged tall: the middle of the row stretched over its whole height.
      float mid = top + uBandH * 0.55;
      at.y = mid + (px.y - mid) * (1.0 - a * 0.92);
    } else if (kind > 2.5 && kind < 3.5) {
      // Waved into stairs: rows stepped, each shifted along a wave.
      float step_ = max(2.0, uBandH * 0.04);
      float yq = floor(y / step_) * step_;
      at.x = px.x + sin(yq * 0.035 + band.w) * a * uRes.x * 0.12;
    } else if (kind > 3.5) {
      // Zebra: a deep wave and a hard pull together, letters into ribbons.
      float k = 1.0 + a * 9.0;
      float wave = sin(px.y * 0.05 + band.w + px.x * 0.004) * a * uBandH * 0.9;
      at.x = pivot + (px.x - pivot) / k + wave;
    }
    ink = sharpAt(at);
    ink += (hash(px + uTime) - 0.5) * uShiver * 0.12;
    ink = smoothstep(0.35, 0.65, ink);
  }

  vec3 col = mix(uGround, uInk, clamp(ink, 0.0, 1.0));
  fragColor = vec4(col, 1.0);
}`;

// ── layout ───────────────────────────────────────────────────────────────────

interface Letter {
  ch: string;
  /** Left edge and width within its line, in its row's font size. */
  x: number;
  w: number;
  /** Its row's font size, in pixels, and how far the row is stretched across. */
  size: number;
  sx: number;
  /** Left edge and width at 100px, unstretched. */
  x100: number;
  w100: number;
  /** Which line of the words, which copy of them, its place among all letters, and its word. */
  line: number;
  copy: number;
  k: number;
  word: number;
}

interface Band { kind: number; amount: number; target: number; pivot: number; phase: number; hold: number }

/** Splits the words into up to three lines, balanced by width. */
function linesOf(text: string, measure: (s: string) => number): string[] {
  const explicit = text.split(/\s*[/|\n]\s*/).filter(Boolean);
  if (explicit.length > 1) return explicit;
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= 1) return words.length ? words : [DEFAULT_TEXT];
  const n = Math.min(3, words.length);
  let best: string[] = [words.join(' ')];
  let bestW = Infinity;
  // Every way of cutting the words into n lines; there are few.
  const cut = (from: number, left: number, acc: string[]) => {
    if (left === 1) {
      const lines = [...acc, words.slice(from).join(' ')];
      const w = Math.max(...lines.map(measure));
      if (w < bestW) { bestW = w; best = lines; }
      return;
    }
    for (let i = from + 1; i <= words.length - left + 1; i++) cut(i, left - 1, [...acc, words.slice(from, i).join(' ')]);
  };
  cut(0, n, []);
  return best;
}

function hexRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [0, 2, 4].map((i) => (parseInt(full.slice(i, i + 2), 16) || 0) / 255) as [number, number, number];
}

export class BigTypeRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = BigTypeConfig;
  private text = DEFAULT_TEXT;
  private playing = new Playing(0.6);

  // The mask the shader styles read, sharp and soft.
  private sharp = document.createElement('canvas');
  private soft = document.createElement('canvas');
  private sharpCtx = this.sharp.getContext('2d')!;
  private softCtx = this.soft.getContext('2d')!;
  private surface = document.createElement('canvas');
  private gl: WebGL2RenderingContext | null = null;
  private program: WebGLProgram | null = null;
  private textures: WebGLTexture[] = [];
  private uniforms: Record<string, WebGLUniformLocation | null> = {};
  private failed = false;

  private time = 0;
  private waveTime = 0;
  private hop = 0;
  private lastBeat = false;
  private lastClap = false;
  private present = 0;
  private bands: Band[] = Array.from({ length: MAX_BANDS }, () => ({
    kind: 0, amount: 0, target: 0, pivot: 0, phase: 0, hold: 0,
  }));
  private bandClock = 0;
  /** Ripples running through Shear: when each started, and from where (0 to 1 across). */
  private ripples: { at: number; from: number }[] = [];
  private bandData = new Float32Array(MAX_BANDS * 4);
  /** Each band's top and height, in pixels: the row it smears. */
  private spanData = new Float32Array(MAX_BANDS * 2);

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    void loadFonts();
    this.initGL();
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(BigTypeConfig, values);
  }

  setText(text: string) {
    this.text = text;
  }

  /** The library waits for the typeface before it counts frames. */
  isReady() {
    return fontsReady;
  }

  private initGL() {
    const gl = this.surface.getContext('webgl2', { alpha: false, antialias: false, premultipliedAlpha: false });
    if (!gl) return;
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Big Type shader:', gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Big Type link:', gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);
    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    for (const name of ['uSharp', 'uSoft', 'uRes', 'uMode', 'uInk', 'uGround', 'uPitch', 'uThick', 'uShiver',
      'uTime', 'uHand', 'uBand', 'uBands', 'uSpan']) {
      this.uniforms[name] = gl.getUniformLocation(program, name);
    }
    for (let i = 0; i < 2; i++) {
      const tex = gl.createTexture()!;
      gl.activeTexture(gl.TEXTURE0 + i);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      this.textures.push(tex);
    }
    gl.uniform1i(this.uniforms.uSharp, 0);
    gl.uniform1i(this.uniforms.uSoft, 1);
    this.gl = gl;
    this.program = program;
  }

  destroy() {
    const gl = this.gl;
    if (!gl) return;
    for (const t of this.textures) gl.deleteTexture(t);
    if (this.program) gl.deleteProgram(this.program);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    this.gl = null;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { ctx, cfg } = this;
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;

    // ── the hands and the music ─────────────────────────────────────────────
    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    const step = Math.max(0, play.step);
    const handed = handData.left || handData.right ? 1 : 0;
    this.present += (handed - this.present) * (1 - Math.exp(-dt * 3));
    this.time += step;
    this.waveTime += step * (1 + play.mid * cfg.sound.mid * 0.8);
    const beat = !!audioData?.beat;
    const kicked = beat && !this.lastBeat && cfg.sound.beat > 0;
    this.lastBeat = beat;
    const clapping = !!handData.clapping && cfg.hands.clap > 0;
    const clapped = clapping && !this.lastClap;
    this.lastClap = clapping;
    const burst = play.burst * cfg.hands.clap;
    this.hop = Math.max(this.hop * Math.exp(-dt * 4), kicked ? (audioData?.beatIntensity || 1) * cfg.sound.beat : 0, burst);
    // An open hand dances more, a fist holds the words still. No hand: as set.
    const open = handed ? Math.max(0, Math.min(1.4, 0.15 + play.openness * 1.1)) : 1;
    const dance = cfg.dance.amount * (1 + (open - 1) * cfg.hands.open) * (1 + play.bass * cfg.sound.bass * 0.5);
    const shiver = play.high * cfg.sound.high;
    const hx = ((play.aim.x + 1) / 2) * width;
    const hy = (0.5 - play.aim.y / 2) * height;
    const focus = this.present * cfg.hands.focus;

    // ── colours ─────────────────────────────────────────────────────────────
    const c0 = colors[0] ?? '#ff1a4b';
    const c1 = colors[1] ?? '#ffffff';
    const way = Math.round(cfg.type.colourway);
    const [ground, ink, box, boxInk] = way === 1
      ? ['#ece1e5', '#111111', c0, '#111111']
      : way === 2
        ? [c1, '#111111', c0, '#111111']
        : ['#000000', c0, c0, '#000000'];

    // ── the words, laid out ─────────────────────────────────────────────────
    const weight = Math.round(cfg.type.weight) === 1 ? 900 : 700;
    const font = (px: number) => `${weight} ${px}px "${FAMILY}", "Arial Black", sans-serif`;
    const text = (this.text.trim() || DEFAULT_TEXT).toUpperCase();
    ctx.font = font(100);
    const lines = linesOf(text, (s) => ctx.measureText(s).width);
    const widest = Math.max(...lines.map((l) => ctx.measureText(l).width)) / 100;
    const capH = (ctx.measureText('H').actualBoundingBoxAscent || 72) / 100;
    const repeat = Math.max(1, Math.min(6, Math.round(cfg.type.repeat)));
    const leading = 1.0;
    const rows = lines.length * repeat;
    // As big as fits: the widest line across, every row down.
    const F = Math.min(
      (width * 0.92) / widest,
      (height * 0.9) / (rows * capH * (1 + 0.18 * leading)),
    ) * cfg.type.size;
    const rowH = F * capH * (1 + 0.18 * leading);
    const top = (height - rowH * rows) / 2;

    // Justified, as the posters are: the rows share the frame's height and
    // each is stretched across to fill the width — a short word wide and
    // heavy, a long one condensed. Otherwise every row is the one size, as set.
    const lineW100 = lines.map((l) => ctx.measureText(l).width);
    const justify = cfg.type.justify >= 0.5;
    const fullRow = (height * 0.94) / rows / (capH * (1 + 0.18 * leading));
    const sizes = Array.from({ length: rows }, () => (justify ? fullRow : F / cfg.type.size) * cfg.type.size);
    const stretch = sizes.map((f, r) => (justify
      ? Math.max(0.45, Math.min(3, (width * 0.94 * 100) / (lineW100[r % lines.length] * f / cfg.type.size)))
      : 1));
    const geo: { top: number; h: number; F: number }[] = [];
    {
      const total = sizes.reduce((a, f) => a + f * capH * (1 + 0.18 * leading), 0);
      let y = (height - total) / 2;
      for (const f of sizes) {
        const h = f * capH * (1 + 0.18 * leading);
        geo.push({ top: y, h, F: f });
        y += h;
      }
    }

    const letters: Letter[] = [];
    let k = 0;
    for (let c = 0; c < repeat; c++) {
      lines.forEach((line, l) => {
        const size = geo[c * lines.length + l].F;
        const sx = stretch[c * lines.length + l];
        let word = 0;
        for (let i = 0; i < line.length; i++) {
          const ch = line[i];
          if (ch === ' ') { word++; continue; }
          const x = ctx.measureText(line.slice(0, i)).width;
          const w = ctx.measureText(line.slice(0, i + 1)).width - x;
          letters.push({
            ch, x: (x * size * sx) / 100, w: (w * size * sx) / 100, size, sx, x100: x, w100: w,
            line: l, copy: c, k: k++, word: word + l * 10 + c * 100,
          });
        }
      });
    }
    const rowOf = (L: Letter) => L.copy * lines.length + L.line;
    const baseline = (L: Letter) => {
      const g = geo[rowOf(L)];
      return g.top + (g.h + g.F * capH) / 2;
    };
    const left = (L: Letter) => (width - (lineW100[L.line] * L.size * L.sx) / 100) / 2 + L.x;
    /** A letter drawn at its place, stretched as its row is, nudged by (dx, dy). */
    const glyph = (c2d: CanvasRenderingContext2D, L: Letter, dx = 0, dy = 0) => {
      c2d.font = font(L.size);
      c2d.save();
      c2d.translate(left(L) + dx, baseline(L) + dy);
      c2d.scale(L.sx, 1);
      c2d.fillText(L.ch, 0, 0);
      c2d.restore();
    };

    const style = Math.round(cfg.type.style);
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    if (style === BLOCKS) {
      // Blocks size every letter itself, so they start from one size.
      const even = letters.map((L) => ({ ...L, x: (L.x100 * F) / 100, w: (L.w100 * F) / 100, size: F, sx: 1 }));
      this.drawBlocks(even, lines, F, capH, rowH, top, repeat, dance, focus, hx, ground, box, boxInk, font, width);
    } else if (style === SHEAR) {
      this.drawShear(letters, capH, dance, focus, hx / width, kicked, clapped, burst, ground, ink, font,
        left, baseline, width, height);
    } else if (this.gl) {
      this.drawMasked(style, letters, geo, capH, dance, shiver, focus, hx, hy, kicked, clapped,
        ground, ink, font, left, baseline, width, height, dt, step, glyph);
    } else {
      ctx.fillStyle = ground;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = ink;
      for (const L of letters) glyph(ctx, L);
    }
    ctx.restore();
  }

  // ── Lines and Stretch: a mask, styled by the shader ────────────────────────

  private drawMasked(
    style: number, letters: Letter[], geo: { top: number; h: number; F: number }[], capH: number,
    dance: number, shiver: number, focus: number, hx: number, hy: number,
    kicked: boolean, clapped: boolean, ground: string, ink: string, font: (px: number) => string,
    left: (L: Letter) => number, baseline: (L: Letter) => number,
    width: number, height: number, dt: number, step: number,
    glyph: (c2d: CanvasRenderingContext2D, L: Letter, dx?: number, dy?: number) => void,
  ) {
    const gl = this.gl!;
    const { cfg } = this;
    // The mask at most 1280 wide: it is read through lines or smeared, so the
    // last detail is not there to lose.
    const scale = Math.min(1, 1280 / width);
    const mw = Math.max(2, Math.round(width * scale));
    const mh = Math.max(2, Math.round(height * scale));
    for (const c of [this.sharp, this.soft]) {
      if (c.width !== mw || c.height !== mh) { c.width = mw; c.height = mh; }
    }
    const sc = this.sharpCtx;
    sc.setTransform(scale, 0, 0, scale, 0, 0);
    sc.fillStyle = '#000';
    sc.fillRect(0, 0, width, height);
    sc.fillStyle = '#fff';
    const rows = geo.length;
    const t = this.waveTime;
    const so = this.softCtx;
    so.setTransform(1, 0, 0, 1, 0, 0);
    so.fillStyle = '#000';
    so.fillRect(0, 0, mw, mh);

    if (style === LINES) {
      // The letters bob, each a beat after the one before, and hop on the kick.
      const bob = (L: Letter, lag: number) => {
        const ph = TAU * (t - lag) * 0.5 - L.k * 0.7;
        const F = L.size;
        return {
          dx: dance * F * 0.03 * Math.sin(ph * 0.5 + L.line),
          dy: dance * F * 0.09 * Math.sin(ph) - this.hop * F * 0.16 * Math.max(0, Math.sin(L.k * 1.7 + 1)),
        };
      };
      for (const L of letters) {
        const m = bob(L, 0);
        glyph(sc, L, m.dx, m.dy);
      }
      // The halo, and a ghost of each letter a little behind it.
      const big = Math.max(...geo.map((g) => g.F));
      so.filter = `blur(${Math.max(2, big * scale * 0.06)}px)`;
      so.drawImage(this.sharp, 0, 0);
      so.filter = 'none';
      so.setTransform(scale, 0, 0, scale, 0, 0);
      so.globalAlpha = 0.55;
      so.fillStyle = '#fff';
      for (const L of letters) {
        const m = bob(L, 0.35);
        glyph(so, L, m.dx + L.size * 0.12 * dance, m.dy);
      }
      so.globalAlpha = 1;
    } else {
      // Stretch: the poster stands still; the bands do the dancing.
      for (const L of letters) glyph(sc, L);
      // Where each row's letters stand, so a pull always starts inside one:
      // on its left stem, which almost every capital has solid — the middle
      // of an N or an O is empty, and a pull from there smears out nothing.
      const perCopy = letters.reduce((m, o) => Math.max(m, o.line), 0) + 1;
      const inside = geo.map((_, r) => letters
        .filter((L) => L.copy * perCopy + L.line === r)
        .map((L) => left(L) + L.w * 0.14));
      this.stepBands(rows, kicked, clapped, focus, hx, width, dt, step, inside);
    }

    // ── to the GPU ──────────────────────────────────────────────────────────
    if (this.surface.width !== width || this.surface.height !== height) {
      this.surface.width = width;
      this.surface.height = height;
    }
    gl.viewport(0, 0, width, height);
    gl.useProgram(this.program);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.textures[0]);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.sharp);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.textures[1]);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.soft);
    const u = this.uniforms;
    gl.uniform2f(u.uRes, width, height);
    gl.uniform1i(u.uMode, style === LINES ? 0 : 1);
    gl.uniform3fv(u.uInk, hexRgb(ink));
    gl.uniform3fv(u.uGround, hexRgb(ground));
    const pitch = Math.max(4, (width / (40 + 110 * cfg.lines.density)));
    gl.uniform1f(u.uPitch, pitch);
    gl.uniform1f(u.uThick, cfg.lines.thickness);
    gl.uniform1f(u.uShiver, shiver);
    gl.uniform1f(u.uTime, this.time);
    gl.uniform3f(u.uHand, hx, hy, focus);
    for (let i = 0; i < MAX_BANDS; i++) {
      const b = this.bands[i];
      const at = i * 4;
      if (i < rows) {
        this.bandData[at] = b.kind;
        this.bandData[at + 1] = b.amount * cfg.stretch.smear * Math.min(1.3, dance);
        this.bandData[at + 2] = b.pivot;
        this.bandData[at + 3] = b.phase;
        this.spanData[i * 2] = geo[i].top;
        this.spanData[i * 2 + 1] = geo[i].h;
      } else {
        this.bandData.fill(0, at, at + 4);
        this.spanData.fill(-1, i * 2, i * 2 + 2);
      }
    }
    gl.uniform4fv(u.uBand, this.bandData);
    gl.uniform2fv(u.uSpan, this.spanData);
    gl.uniform1i(u.uBands, Math.min(rows, MAX_BANDS));
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    this.ctx.drawImage(this.surface, 0, 0, width, height);
  }

  /**
   * Which bands of the poster smear, and how. A kick (or, with no music, a
   * steady beat on the clock) sets a few new bands going; each pulls for a
   * while, then lets go. A clap sets every band going at once.
   */
  private stepBands(rows: number, kicked: boolean, clapped: boolean, focus: number, hx: number,
    width: number, dt: number, step: number, inside: number[][]) {
    const { cfg } = this;
    const bands = this.bands;
    this.bandClock += step;
    let trigger = kicked;
    // No music: keep it moving on the clock, about every second and a half.
    if (this.bandClock > 1.5) { this.bandClock = 0; trigger = true; }
    if (kicked) this.bandClock = 0;
    const pick = (i: number, strong: number) => {
      const b = bands[i];
      b.kind = 1 + Math.floor(Math.random() * 4);
      b.target = (0.45 + Math.random() * 0.55) * strong;
      b.hold = 1 + Math.random() * 2.5;
      // The pull starts in the middle of a letter — the one nearest the hand,
      // with a hand up — or a gap would smear out to nothing.
      const centres = inside[i] ?? [];
      const want = focus > 0.2 ? hx : width * (0.15 + Math.random() * 0.7);
      b.pivot = centres.length
        ? centres.reduce((best, c) => (Math.abs(c - want) < Math.abs(best - want) ? c : best), centres[0])
        : want;
      b.phase = Math.random() * TAU;
    };
    if (clapped) {
      for (let i = 0; i < rows; i++) pick(i, 1.2);
    } else if (trigger) {
      const n = Math.max(1, Math.round(rows * cfg.stretch.bands * 0.5));
      for (let j = 0; j < n; j++) pick(Math.floor(Math.random() * rows), 1);
    }
    for (let i = 0; i < MAX_BANDS; i++) {
      const b = bands[i];
      b.hold -= dt;
      if (b.hold <= 0) b.target = 0;
      b.amount += (b.target - b.amount) * (1 - Math.exp(-dt * (b.target > b.amount ? 7 : 2.5)));
      b.phase += step * 1.5;
      if (b.amount < 0.002 && b.target === 0) b.kind = 0;
    }
  }

  // ── Blocks ─────────────────────────────────────────────────────────────────

  private drawBlocks(
    letters: Letter[], lines: string[], F: number, capH: number, rowH: number, top: number, repeat: number,
    dance: number, focus: number, hx: number, ground: string, box: string, boxInk: string,
    font: (px: number) => string, width: number,
  ) {
    const { ctx } = this;
    const t = this.waveTime;
    ctx.fillStyle = ground;
    ctx.fillRect(0, 0, width, this.canvas.height);
    // Each letter's size: a wave along the words, a jump on the kick, and
    // biggest under the hand.
    const sizeOf = (L: Letter, cx: number) => {
      let s = 1 + 0.42 * dance * Math.sin(TAU * t * 0.33 + L.k * 1.3 + L.line * 0.8)
        + 0.18 * dance * Math.sin(TAU * t * 0.71 + L.k * 2.9);
      s += this.hop * 0.5 * Math.max(0, Math.sin(L.k * 2.3 + Math.floor(t * 2)));
      s += focus * 0.7 * Math.exp(-((cx - hx) ** 2) / (width * width * 0.006));
      return Math.max(0.35, s);
    };
    const pad = F * 0.08;
    const rowsN = lines.length * repeat;
    // Laid out row by row; each row as wide as its boxes, centred, and the
    // rows stacked so their boxes meet.
    let y = top + rowH * 0.1;
    const rowsOut: { boxes: { L: Letter; s: number; w: number; h: number }[]; width: number; height: number }[] = [];
    for (let r = 0; r < rowsN; r++) {
      const line = r % lines.length;
      const copy = Math.floor(r / lines.length);
      const row = letters.filter((L) => L.line === line && L.copy === copy);
      const boxes = row.map((L) => {
        const s = sizeOf(L, (width - 0) * ((L.x + L.w / 2) / Math.max(1, row[row.length - 1].x + row[row.length - 1].w)));
        return { L, s, w: L.w * s + pad * 2 * s, h: F * capH * s + pad * 2 * s };
      });
      const total = boxes.reduce((a, b) => a + b.w, 0);
      const fit = Math.min(1, (width * 0.96) / total);
      for (const b of boxes) { b.w *= fit; b.h *= fit; b.s *= fit; }
      rowsOut.push({ boxes, width: total * fit, height: Math.max(...boxes.map((b) => b.h)) });
    }
    // Rows in pairs meeting on one line: the first hangs its boxes from the
    // bottom, standing on the line, the second from the top, hanging below
    // it. A row left over on its own sits centred.
    const bands: { rows: typeof rowsOut; height: number }[] = [];
    for (let r = 0; r < rowsOut.length; r += 2) {
      const pair = rowsOut.slice(r, r + 2);
      bands.push({ rows: pair, height: pair.reduce((a, row) => a + row.height, 0) });
    }
    const totalH = bands.reduce((a, b) => a + b.height, 0);
    y = (this.canvas.height - totalH) / 2;
    for (const band of bands) {
      const axis = band.rows.length === 2 ? y + band.rows[0].height : y + band.height / 2;
      band.rows.forEach((row, i) => {
        let x = (width - row.width) / 2;
        for (const b of row.boxes) {
          const by = band.rows.length === 1 ? axis - b.h / 2 : i === 0 ? axis - b.h : axis;
          ctx.fillStyle = box;
          ctx.fillRect(x, by, b.w, b.h);
          ctx.fillStyle = boxInk;
          ctx.font = font(F * b.s);
          ctx.textAlign = 'center';
          ctx.fillText(b.L.ch, x + b.w / 2, by + b.h - pad * b.s);
          x += b.w;
        }
      });
      y += band.height;
    }
    ctx.textAlign = 'left';
  }

  // ── Shear ──────────────────────────────────────────────────────────────────

  private drawShear(
    letters: Letter[], capH: number, dance: number, focus: number, hx: number,
    kicked: boolean, clapped: boolean, burst: number, ground: string, ink: string,
    font: (px: number) => string, left: (L: Letter) => number, baseline: (L: Letter) => number,
    width: number, height: number,
  ) {
    const { ctx, cfg } = this;
    const t = this.waveTime;
    ctx.fillStyle = ground;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = ink;
    const byWord = cfg.dance.words >= 0.5;

    // The rows, and the units in each that turn as one: letters, or words.
    const rows = new Map<string, Letter[]>();
    for (const L of letters) {
      const key = `${L.copy}|${L.line}`;
      if (!rows.has(key)) rows.set(key, []);
      rows.get(key)!.push(L);
    }
    const rowKeys = [...rows.keys()];
    // A kick turns one unit somewhere — the one under the hand, with a hand
    // up; a clap turns every one.
    if (kicked) {
      const r = Math.floor(Math.random() * rowKeys.length);
      this.ripples.push({ at: t, from: r + (focus > 0.2 ? hx : Math.random()) * 0.999 });
    }
    this.ripples = this.ripples.filter((r) => t - r.at < 1.2);

    rowKeys.forEach((key, r) => {
      const row = rows.get(key)!;
      // Units: runs of letters sharing a word, or each letter alone.
      const units: Letter[][] = [];
      for (const L of row) {
        const last = units[units.length - 1];
        if (byWord && last && last[0].word === L.word) last.push(L);
        else units.push([L]);
      }
      // Only one unit in a row turns at a time, and not in every row: on the
      // clock, each row's turn passes from unit to unit, out and back again.
      const rate = 0.42;
      const slot = Math.floor(t * rate + r * 0.37);
      const phase = t * rate + r * 0.37 - slot;
      const pickRow = hash01(slot * 7.1 + r * 3.3);
      const active = pickRow < 0.78 ? Math.floor(hash01(slot * 1.9 + r * 5.7) * units.length) : -1;
      const env = Math.pow(Math.sin(Math.PI * phase), 2);
      const turns = units.map((_, u) => {
        let phi = u === active ? env * 1.25 * Math.min(1.2, dance) : 0;
        for (const rip of this.ripples) {
          if (Math.floor(rip.from) !== r) continue;
          const which = Math.min(units.length - 1, Math.floor((rip.from % 1) * units.length));
          if (which !== u) continue;
          const age = t - rip.at;
          phi += 1.2 * Math.sin(Math.PI * Math.min(1, age / 1.1));
        }
        phi += burst * 1.15;
        return Math.min(1.3, phi);
      });

      // How much wider each turned unit has become — pulled wider, and
      // slanted across its height — so its neighbours make room for it.
      const F = row[0].size;
      const H = F * capH;
      const extra = units.map((unit, u) => {
        const phi = turns[u];
        const w0 = left(unit[unit.length - 1]) + unit[unit.length - 1].w - left(unit[0]);
        const flat = Math.max(0.24, Math.cos(phi));
        return w0 * Math.abs(Math.sin(phi)) * 1.5 + Math.abs(Math.sin(phi) * 2.2 * flat) * H;
      });
      const total = extra.reduce((a, b) => a + b, 0);
      const rowW = left(row[row.length - 1]) + row[row.length - 1].w - left(row[0]);
      // The whole row eased smaller if the turns would push it off the frame.
      const fit = Math.min(1, (width * 0.98) / (rowW + total));
      const midX = width / 2;
      let before = 0;
      units.forEach((unit, u) => {
        const phi = turns[u];
        const dir = (u + r) % 2 === 0 ? 1 : -1;
        // Turned, a piece stays readable: a long slanted band with some
        // height to it, as in the posters, rather than a hairline.
        const flat = Math.max(0.24, Math.cos(phi));
        const slant = -Math.sin(phi) * 2.2 * dir;
        const cx0 = (left(unit[0]) + left(unit[unit.length - 1]) + unit[unit.length - 1].w) / 2;
        // Its place: where it was, moved by the room the units before it took
        // and half its own, the row kept centred.
        const cx = midX + (cx0 + before + extra[u] / 2 - total / 2 - midX) * fit;
        before += extra[u];
        for (const L of unit) {
          const by = baseline(L) - H / 2;
          const wide = (1 + Math.abs(Math.sin(phi)) * 1.5) * L.sx * fit;
          ctx.font = font(L.size);
          ctx.save();
          ctx.translate(cx, by);
          // Flattened toward its middle line, slanted, pulled wider: a plane
          // turned away from the eye.
          ctx.transform(wide, 0, slant * flat * fit, flat * fit, 0, 0);
          ctx.fillText(L.ch, (left(L) - cx0) / L.sx, H / 2);
          ctx.restore();
        }
      });
    });
  }
}

/** A steady pseudo-random number in 0..1 for a seed. */
function hash01(n: number): number {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}
