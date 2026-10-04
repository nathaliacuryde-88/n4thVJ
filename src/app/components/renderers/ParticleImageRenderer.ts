import { AudioData, HandData } from '../../App';
import { ParticleImageConfig } from '../../config/ParticleImageRendererConfig';
import { DEFAULT_TEXT } from '../../config/content';
import { timeScale } from '../../motion/clock';
import { ParamValues, withOverrides } from '../../params/types';
import { Playing, TAU } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PARTICLE IMAGE
 * ═══════════════════════════════════════════════════════════════════════════
 * Any picture, dropped in, rebuilt out of thousands of points — no modelling.
 *
 * A still is read once: the part of it worth keeping (the subject standing
 * out from its background, or the dark parts, or the light, or all of it) is
 * where the points belong, each taking the colour of the pixel it stands on.
 * Drop in another and the same points fly over and become that instead. A
 * video plays as a screen of points: each holds its place and takes on the
 * colour under it frame by frame, appearing where the footage has something
 * and fading where it has nothing. With no file at all, the picture is made
 * from your words.
 *
 * The points are flown on the CPU (a few tens of thousands, a handful of
 * sums each) and drawn as soft round sprites on the GPU, lighter ones a
 * little nearer the eye so a hand can tilt the picture into relief.
 *
 * The hands, by the rule every visual follows: the finger count sets the
 * tempo through the shared clock — one finger slow, two medium, five fast —
 * and a clap blows every point apart before they find their way back. On top:
 * an open hand loosens the picture into drifting dust and a fist pulls it
 * back together; a moving hand brushes the points aside like wind through
 * sand; spreading two hands zooms in. The music: each kick sends a ripple out
 * through the points, bass swells them, melody speeds their drift, the hats
 * make them twinkle.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof ParticleImageConfig;
type Kind = 'video' | 'image';

const MIN_POINTS = 6000;
const MAX_POINTS = 80000;
/** How many pixels across the picture is read at — finer than the points need. */
const READ = 360;

const VERT = `#version 300 es
in vec2 aPos;
in vec4 aColour;   // rgb, and how much it is there (video points fade)
in float aSeed;
uniform vec2 uRes;
uniform float uSize, uSwell, uTwinkle, uTime, uDepth;
uniform vec2 uTilt;
out vec4 vColour;
void main() {
  // Lighter points sit nearer: a hand tilting the picture shows the relief.
  float lum = dot(aColour.rgb, vec3(0.299, 0.587, 0.114));
  vec2 p = aPos + uTilt * (lum - 0.5) * uDepth;
  vec2 clip = p / uRes * 2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
  float tw = 1.0 + uTwinkle * 0.8 * sin(uTime * 9.0 + aSeed * 60.0);
  gl_PointSize = max(1.0, uSize * (0.75 + 0.5 * lum) * uSwell * tw) * aColour.a;
  vColour = vec4(aColour.rgb, aColour.a);
}`;

const FRAG = `#version 300 es
precision highp float;
in vec4 vColour;
out vec4 fragColor;
void main() {
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d);
  float a = smoothstep(0.5, 0.28, r) * vColour.a;
  if (a < 0.01) discard;
  fragColor = vec4(vColour.rgb, a);
}`;

export class ParticleImageRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = ParticleImageConfig;
  private playing = new Playing(0.5);
  private surface = document.createElement('canvas');
  private gl: WebGL2RenderingContext | null = null;
  private program: WebGLProgram | null = null;
  private buffers: { pos: WebGLBuffer; colour: WebGLBuffer; seed: WebGLBuffer } | null = null;
  private uniforms: Record<string, WebGLUniformLocation | null> = {};
  private failed = false;

  // The source.
  private url: string | null = null;
  private kind: Kind = 'image';
  private image: HTMLImageElement | null = null;
  private video: HTMLVideoElement | null = null;
  private text = DEFAULT_TEXT;
  private wordsPicture: { words: string; canvas: HTMLCanvasElement } | null = null;
  private read = document.createElement('canvas');
  private readCtx = this.read.getContext('2d', { willReadFrequently: true })!;
  /** What the points were last laid out from, so a change lays them out again. */
  private layoutKey = '';

  // The points.
  private n = 0;
  private pos = new Float32Array(0);
  private vel = new Float32Array(0);
  private home = new Float32Array(0);
  private colour = new Float32Array(0);
  private seed = new Float32Array(0);
  /** For video: which pixel of the read each point stands on. */
  private pixel = new Int32Array(0);
  private colourDirty = true;

  private time = 0;
  private hop = 0;
  private lastBeat = false;
  private lastClap = false;
  private present = 0;
  private lastHand = { x: 0, y: 0 };
  private handVel = { x: 0, y: 0 };
  private zoom = 1;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.initGL();
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(ParticleImageConfig, values);
  }

  setText(text: string) {
    this.text = text;
  }

  setClipUrl(url: string | null, kind: Kind = 'image') {
    if (url === this.url && kind === this.kind) return;
    this.url = url;
    this.kind = kind;
    this.video?.pause();
    this.video = null;
    this.image = null;
    if (!url) return;
    if (kind === 'image') {
      const image = new Image();
      image.src = url;
      this.image = image;
      return;
    }
    const video = document.createElement('video');
    video.src = url;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.play().catch(() => {});
    this.video = video;
  }

  private initGL() {
    const gl = this.surface.getContext('webgl2', { alpha: false, antialias: false, premultipliedAlpha: false });
    if (!gl) { this.failed = true; return; }
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Particle Image shader:', gl.getShaderInfoLog(shader));
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
      console.error('Particle Image link:', gl.getProgramInfoLog(program));
      this.failed = true;
      return;
    }
    gl.useProgram(program);
    const make = (name: string, size: number) => {
      const buffer = gl.createBuffer()!;
      const loc = gl.getAttribLocation(program, name);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0);
      return buffer;
    };
    this.buffers = { pos: make('aPos', 2), colour: make('aColour', 4), seed: make('aSeed', 1) };
    for (const name of ['uRes', 'uSize', 'uSwell', 'uTwinkle', 'uTime', 'uDepth', 'uTilt']) {
      this.uniforms[name] = gl.getUniformLocation(program, name);
    }
    this.gl = gl;
    this.program = program;
  }

  destroy() {
    this.video?.pause();
    this.video = null;
    const gl = this.gl;
    if (!gl) return;
    if (this.program) gl.deleteProgram(this.program);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    this.gl = null;
  }

  // ── the picture ────────────────────────────────────────────────────────────

  /** What to read the picture from, once it can be read. */
  private source(): { el: CanvasImageSource; w: number; h: number; key: string } | null {
    const { video, image } = this;
    if (video) {
      const wanted = Math.min(4, Math.max(0.25, timeScale()));
      if (Math.abs(video.playbackRate - wanted) > 0.02) {
        try { video.playbackRate = wanted; } catch { /* the browser keeps its own rate */ }
      }
      if (video.readyState >= 2 && video.videoWidth > 0) {
        return { el: video, w: video.videoWidth, h: video.videoHeight, key: `v|${this.url}` };
      }
      return null;
    }
    if (image && image.complete && image.naturalWidth > 0) {
      return { el: image, w: image.naturalWidth, h: image.naturalHeight, key: `i|${this.url}` };
    }
    // Nothing dropped in: the words, white on black — drawn once per wording.
    const words = (this.text.trim() || DEFAULT_TEXT).toUpperCase();
    if (this.wordsPicture?.words === words) {
      const c = this.wordsPicture.canvas;
      return { el: c, w: c.width, h: c.height, key: `t|${words}` };
    }
    const c = document.createElement('canvas');
    c.width = 1200;
    c.height = 600;
    const g = c.getContext('2d')!;
    g.fillStyle = '#000';
    g.fillRect(0, 0, c.width, c.height);
    g.fillStyle = '#fff';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    let px = 360;
    g.font = `900 ${px}px "Strichpunkt Sans", "Arial Black", sans-serif`;
    const w = g.measureText(words).width;
    px = Math.min(px, (px * c.width * 0.92) / Math.max(1, w));
    g.font = `900 ${px}px "Strichpunkt Sans", "Arial Black", sans-serif`;
    g.fillText(words, c.width / 2, c.height / 2);
    this.wordsPicture = { words, canvas: c };
    return { el: c, w: c.width, h: c.height, key: `t|${words}` };
  }

  /**
   * Reads the picture small and works out, pixel by pixel, how much of it
   * to keep: what stands out from the colour round its edges, or the dark,
   * or the light, or everything.
   */
  private readPicture(src: { el: CanvasImageSource; w: number; h: number }) {
    const { cfg } = this;
    const scale = READ / Math.max(src.w, src.h);
    const rw = Math.max(2, Math.round(src.w * scale));
    const rh = Math.max(2, Math.round(src.h * scale));
    if (this.read.width !== rw || this.read.height !== rh) {
      this.read.width = rw;
      this.read.height = rh;
    }
    const g = this.readCtx;
    g.clearRect(0, 0, rw, rh);
    g.drawImage(src.el, 0, 0, rw, rh);
    const data = g.getImageData(0, 0, rw, rh).data;
    // The background, as the edges show it: for each pixel, the colour at the
    // two side edges on its row and the top and bottom edges in its column.
    // One average would fail a studio backdrop, light in the middle and dark
    // at the top and bottom; this follows it.
    const at = (x: number, y: number) => (y * rw + x) * 4;
    const away = (i: number, j: number) =>
      Math.hypot(data[i] - data[j], data[i + 1] - data[j + 1], data[i + 2] - data[j + 2]);
    const keep = Math.round(cfg.points.keep);
    const cut = cfg.points.cutout;
    const weight = new Float32Array(rw * rh);
    for (let p = 0; p < rw * rh; p++) {
      const i = p * 4;
      const r = data[i], gg = data[i + 1], b = data[i + 2], a = data[i + 3] / 255;
      const lum = (0.299 * r + 0.587 * gg + 0.114 * b) / 255;
      let w: number;
      if (keep === 1) w = 1 - lum;
      else if (keep === 2) w = lum;
      else if (keep === 3) w = 1;
      else {
        const x = p % rw;
        const y = (p / rw) | 0;
        const d = Math.min(away(i, at(0, y)), away(i, at(rw - 1, y)), away(i, at(x, 0)), away(i, at(x, rh - 1)));
        w = Math.min(1, d / 255 / 0.6);
      }
      // Below the cutout, nothing; above it, more the further above.
      w = keep === 3 ? a : Math.max(0, (w - cut * 0.9) / Math.max(0.05, 1 - cut * 0.9)) * a;
      weight[p] = w;
    }
    return { data, weight, rw, rh };
  }

  /** Where the read picture sits in the frame: as big as fits, centred. */
  private fit(rw: number, rh: number, width: number, height: number) {
    const s = Math.min((width * 0.9) / rw, (height * 0.9) / rh);
    return { s, ox: (width - rw * s) / 2, oy: (height - rh * s) / 2 };
  }

  /** Sizes the arrays for a new count, keeping the points that already exist where they are. */
  private resize(n: number, width: number, height: number) {
    if (n === this.n) return;
    const grow = (a: Float32Array, k: number) => {
      const b = new Float32Array(n * k);
      b.set(a.subarray(0, Math.min(a.length, n * k)));
      return b;
    };
    const old = this.n;
    this.pos = grow(this.pos, 2);
    this.vel = grow(this.vel, 2);
    this.home = grow(this.home, 2);
    this.colour = grow(this.colour, 4);
    this.seed = grow(this.seed, 1);
    this.pixel = new Int32Array(n);
    for (let i = old; i < n; i++) {
      // New points arrive from all over the frame.
      this.pos[i * 2] = Math.random() * width;
      this.pos[i * 2 + 1] = Math.random() * height;
      this.seed[i] = Math.random();
    }
    this.n = n;
    this.layoutKey = '';
    const gl = this.gl;
    if (gl && this.buffers) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.seed);
      gl.bufferData(gl.ARRAY_BUFFER, this.seed, gl.STATIC_DRAW);
    }
  }

  /** A still: points where the picture is worth keeping, each in its pixel's colour. */
  private layoutStill(src: { el: CanvasImageSource; w: number; h: number }, width: number, height: number) {
    const { data, weight, rw, rh } = this.readPicture(src);
    const { s, ox, oy } = this.fit(rw, rh, width, height);
    // Pick pixels in proportion to how much each is kept.
    const cdf = new Float32Array(rw * rh);
    let total = 0;
    for (let p = 0; p < rw * rh; p++) { total += weight[p]; cdf[p] = total; }
    for (let i = 0; i < this.n; i++) {
      let p: number;
      if (total <= 0) {
        p = Math.floor(Math.random() * rw * rh);
      } else {
        const r = Math.random() * total;
        let lo = 0; let hi = rw * rh - 1;
        while (lo < hi) { const mid = (lo + hi) >> 1; if (cdf[mid] < r) lo = mid + 1; else hi = mid; }
        p = lo;
      }
      const x = p % rw;
      const y = (p / rw) | 0;
      this.home[i * 2] = ox + (x + Math.random()) * s;
      this.home[i * 2 + 1] = oy + (y + Math.random()) * s;
      const c = p * 4;
      this.colour[i * 4] = data[c] / 255;
      this.colour[i * 4 + 1] = data[c + 1] / 255;
      this.colour[i * 4 + 2] = data[c + 2] / 255;
      this.colour[i * 4 + 3] = total <= 0 ? 0 : 1;
    }
    this.colourDirty = true;
  }

  /** Footage: the points spread evenly over the frame, each standing on a pixel. */
  private layoutVideo(rw: number, rh: number, width: number, height: number) {
    const { s, ox, oy } = this.fit(rw, rh, width, height);
    for (let i = 0; i < this.n; i++) {
      const x = Math.random() * rw;
      const y = Math.random() * rh;
      this.pixel[i] = Math.min(rh - 1, y | 0) * rw + Math.min(rw - 1, x | 0);
      this.home[i * 2] = ox + x * s;
      this.home[i * 2 + 1] = oy + y * s;
    }
  }

  /** Footage, each frame: every point takes the colour under it, fading where nothing is kept. */
  private colourVideo(src: { el: CanvasImageSource; w: number; h: number }) {
    const { data, weight } = this.readPicture(src);
    for (let i = 0; i < this.n; i++) {
      const p = this.pixel[i];
      const c = p * 4;
      this.colour[i * 4] = data[c] / 255;
      this.colour[i * 4 + 1] = data[c + 1] / 255;
      this.colour[i * 4 + 2] = data[c + 2] / 255;
      this.colour[i * 4 + 3] = Math.min(1, weight[p] * 1.5);
    }
    this.colourDirty = true;
  }

  // ── a frame ────────────────────────────────────────────────────────────────

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { ctx, cfg } = this;
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;
    const gl = this.gl;
    if (this.failed || !gl || !this.buffers) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);
      return;
    }

    // ── the hands and the music ─────────────────────────────────────────────
    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    const h = Math.min(0.05, Math.max(0, play.step));
    const handed = handData.left || handData.right ? 1 : 0;
    this.present += (handed - this.present) * (1 - Math.exp(-dt * 3));
    this.time += play.step * (1 + play.mid * cfg.sound.mid);
    const beat = !!audioData?.beat;
    const kicked = beat && !this.lastBeat && cfg.sound.beat > 0;
    this.lastBeat = beat;
    const clapping = !!handData.clapping && cfg.hands.clap > 0;
    const clapped = clapping && !this.lastClap;
    this.lastClap = clapping;
    if (kicked) this.hop = Math.max(this.hop, (audioData?.beatIntensity || 1) * cfg.sound.beat);
    // An open hand loosens, a fist re-forms; no hand, as set.
    const loose = handed
      ? Math.max(0, Math.min(1, (play.openness - 0.35) / 0.65)) * cfg.hands.scatter
      : 0;
    const zoomTo = Math.max(0.5, Math.min(2.5, 1 + (play.spread - 0.4) * cfg.hands.zoom * 2 * this.present));
    this.zoom += (zoomTo - this.zoom) * (1 - Math.exp(-dt * 3));

    // ── the picture, and the points it wants ────────────────────────────────
    const n = Math.round(MIN_POINTS + (MAX_POINTS - MIN_POINTS) * Math.max(0, Math.min(1, cfg.points.count)));
    this.resize(n, width, height);
    const src = this.source();
    if (src) {
      const key = `${src.key}|${n}|${width}x${height}|${Math.round(cfg.points.keep)}|${cfg.points.cutout.toFixed(2)}`;
      if (this.video) {
        if (key !== this.layoutKey) {
          this.layoutKey = key;
          const scale = READ / Math.max(src.w, src.h);
          this.layoutVideo(Math.max(2, Math.round(src.w * scale)), Math.max(2, Math.round(src.h * scale)), width, height);
        }
        this.colourVideo(src);
      } else if (key !== this.layoutKey) {
        this.layoutKey = key;
        this.layoutStill(src, width, height);
      }
    }

    // ── the points, flown ───────────────────────────────────────────────────
    const hx = ((play.aim.x + 1) / 2) * width;
    const hy = (0.5 - play.aim.y / 2) * height;
    if (dt > 0) {
      this.handVel.x += ((hx - this.lastHand.x) / dt - this.handVel.x) * (1 - Math.exp(-dt * 8));
      this.handVel.y += ((hy - this.lastHand.y) / dt - this.handVel.y) * (1 - Math.exp(-dt * 8));
    }
    this.lastHand = { x: hx, y: hy };
    const cx = width / 2;
    const cy = height / 2;
    const unit = height / 720;
    // Loosened, the picture still reads: the points drift wide on the curl
    // but keep a pull back to their places.
    const k = 7 * cfg.motion.hold * (1 - 0.78 * loose);
    const damp = Math.exp(-h * (3.2 - 1.2 * loose));
    const flow = (cfg.motion.drift * 30 + loose * 120) * unit;
    const brushR = height * 0.16;
    // The brush is wind: a still hand makes only a small dent, a moving one
    // sweeps the points aside.
    const speed = Math.hypot(this.handVel.x, this.handVel.y);
    const brush = cfg.hands.brush * this.present * (0.2 + 0.8 * Math.min(1, speed / (height * 0.8)));
    const blast = clapped ? 1400 * cfg.hands.clap * unit : 0;
    const ripple = this.hop;
    const t = this.time;
    const zoom = this.zoom;
    const { pos, vel, home, seed } = this;
    for (let i = 0; i < n; i++) {
      const ix = i * 2;
      const iy = ix + 1;
      let x = pos[ix];
      let y = pos[iy];
      let vx = vel[ix];
      let vy = vel[iy];
      if (h > 0 || clapped) {
        const tx = cx + (home[ix] - cx) * zoom;
        const ty = cy + (home[iy] - cy) * zoom;
        const sd = seed[i] * TAU;
        // Back toward its place in the picture.
        let ax = (tx - x) * k;
        let ay = (ty - y) * k;
        // A curling drift, stronger as the picture loosens.
        ax += Math.sin(y * 0.006 + t * 0.9 + sd) * flow;
        ay += Math.cos(x * 0.006 - t * 0.7 + sd * 1.3) * flow;
        // The hand brushes them aside, and drags them the way it moves.
        if (brush > 0.01) {
          const dx = x - hx;
          const dy = y - hy;
          const d2 = dx * dx + dy * dy;
          if (d2 < brushR * brushR * 4) {
            const f = Math.exp(-d2 / (brushR * brushR)) * brush;
            const d = Math.sqrt(d2) + 1;
            ax += (dx / d) * f * 2600 * unit + this.handVel.x * f * 3;
            ay += (dy / d) * f * 2600 * unit + this.handVel.y * f * 3;
          }
        }
        vx = (vx + ax * h) * damp;
        vy = (vy + ay * h) * damp;
        if (blast > 0) {
          const dx = x - cx;
          const dy = y - cy;
          const d = Math.hypot(dx, dy) + 1;
          const kick = blast * (0.4 + seed[i]);
          vx += (dx / d) * kick + (Math.random() - 0.5) * kick * 0.6;
          vy += (dy / d) * kick + (Math.random() - 0.5) * kick * 0.6;
        }
        x += vx * h;
        y += vy * h;
      }
      pos[ix] = x;
      pos[iy] = y;
      vel[ix] = vx;
      vel[iy] = vy;
    }
    // A kick: a ripple out from the middle, a push that fades as it travels.
    if (ripple > 0.02 && kicked) {
      for (let i = 0; i < n; i++) {
        const ix = i * 2;
        const dx = pos[ix] - cx;
        const dy = pos[ix + 1] - cy;
        const d = Math.hypot(dx, dy) + 1;
        const f = ripple * 160 * unit * Math.exp(-d / (height * 0.45));
        vel[ix] += (dx / d) * f;
        vel[ix + 1] += (dy / d) * f;
      }
    }
    this.hop *= Math.exp(-dt * 6);

    // ── the colours ─────────────────────────────────────────────────────────
    const mode = Math.round(cfg.points.colour);
    if (this.colourDirty || mode !== 0) {
      let colours = this.colour;
      if (mode !== 0) {
        // The colour panel's two colours, light to dark; or white.
        const a = rgbOf(colors[0] ?? '#ffffff');
        const b = rgbOf(colors[1] ?? '#ffffff');
        colours = new Float32Array(this.colour);
        for (let i = 0; i < n; i++) {
          const c = i * 4;
          const lum = 0.299 * colours[c] + 0.587 * colours[c + 1] + 0.114 * colours[c + 2];
          if (mode === 2) {
            colours[c] = colours[c + 1] = colours[c + 2] = 0.55 + 0.45 * lum;
          } else {
            colours[c] = a[0] + (b[0] - a[0]) * lum;
            colours[c + 1] = a[1] + (b[1] - a[1]) * lum;
            colours[c + 2] = a[2] + (b[2] - a[2]) * lum;
          }
        }
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.colour);
      gl.bufferData(gl.ARRAY_BUFFER, colours, gl.DYNAMIC_DRAW);
      this.colourDirty = false;
    }

    // ── draw ────────────────────────────────────────────────────────────────
    if (this.surface.width !== width || this.surface.height !== height) {
      this.surface.width = width;
      this.surface.height = height;
    }
    gl.viewport(0, 0, width, height);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.useProgram(this.program);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.pos);
    gl.bufferData(gl.ARRAY_BUFFER, this.pos, gl.DYNAMIC_DRAW);
    const u = this.uniforms;
    gl.uniform2f(u.uRes, width, height);
    // Fewer points, bigger ones, so the picture stays filled.
    const base = Math.sqrt((width * height * 0.35) / n) * 0.9 * cfg.points.size;
    gl.uniform1f(u.uSize, Math.max(1, base));
    gl.uniform1f(u.uSwell, 1 + play.bass * cfg.sound.bass * 0.6 + this.hop * 0.3);
    gl.uniform1f(u.uTwinkle, play.high * cfg.sound.high);
    gl.uniform1f(u.uTime, this.time);
    gl.uniform1f(u.uDepth, cfg.points.depth * height * 0.12);
    gl.uniform2f(u.uTilt, play.aim.x * this.present, -play.aim.y * this.present);
    gl.drawArrays(gl.POINTS, 0, n);

    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.drawImage(this.surface, 0, 0, width, height);
  }
}

function rgbOf(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [0, 2, 4].map((i) => (parseInt(full.slice(i, i + 2), 16) || 0) / 255) as [number, number, number];
}
