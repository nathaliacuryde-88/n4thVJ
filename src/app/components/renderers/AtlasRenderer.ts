import { AudioData, HandData } from '../../App';
import { AtlasConfig } from '../../config/AtlasRendererConfig';
import { glyphStrip, glyphsFor } from '../../config/charsets';
import { ParamValues, withOverrides } from '../../params/types';
import { Playing, hexToHsl, turnFrom } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ATLAS
 * ═══════════════════════════════════════════════════════════════════════════
 * Text-mode terrain that generates itself, after the original tool: a folded
 * noise landscape stepped into terraces, each terrace its own flat ink, every
 * cell carrying a character in a low-contrast shade of its ink. Each terrace
 * draws from its own stretch of the character set, so the levels of the land
 * read as regions of different type.
 *
 * The same look is also an effect, for putting other visuals through it; this
 * is the land on its own, for when the terrain itself is the visual.
 *
 * By the tool's rules:
 *   - the finger count sets the tempo: how fast the land drifts and how often
 *     each character reshuffles;
 *   - a hand raises the land under it, so the terraces part round it;
 *   - spreading two hands zooms in;
 *   - a clap is "new variation": the land dissolves into a fresh one and every
 *     character reshuffles at once;
 *   - bass lifts the land so the terraces roll; each kick sends a ring of
 *     reshuffling out from the middle; louder music puts more characters down.
 *
 * Inks are the original's eight, turned round the wheel by the layer's colour
 * panel — untouched, they are exactly the original's.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** The original's inks, ordered from the lowest land to the highest. */
const INKS = ['#141414', '#2a1a5e', '#5a3fd6', '#4a6bf0', '#9cb59a', '#5fd43a', '#9cc33a', '#a8a019'];

const VERT = `#version 300 es
in vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }`;

const FRAG = `#version 300 es
precision highp float;
out vec4 fragColor;

uniform vec2 uSize;
uniform sampler2D uAtlas;
uniform float uCount, uSequence;
uniform float uColumns, uScale, uWarp, uTerraces, uContrast, uDensity, uVariety;
uniform float uTime, uClock, uLift;
uniform vec2 uSeedA, uSeedB;
uniform float uSeedMix;
uniform vec3 uInks[8];
uniform float uBurst, uPulse, uLevel;
uniform vec3 uHand;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x),
             mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return v;
}

/** The land: noise folded back through itself by the warp. */
float land(vec2 p, vec2 seed) {
  p += seed;
  vec2 q = vec2(fbm(p + vec2(0.0, uTime * 0.05)), fbm(p + vec2(5.2, 1.3) - uTime * 0.04));
  return fbm(p + uWarp * 3.0 * q + uTime * 0.02);
}

void main() {
  // Cells counted from the top-left, as text is.
  vec2 fromTop = vec2(gl_FragCoord.x, uSize.y - gl_FragCoord.y);
  float cw = uSize.x / max(8.0, uColumns);
  vec2 cellPx = vec2(cw, cw / 0.6);
  vec2 cell = floor(fromTop / cellPx);
  vec2 uv = (cell + 0.5) * cellPx / uSize;
  vec2 aspect = vec2(uSize.x / uSize.y, 1.0);
  vec2 p = uv * aspect * uScale * 0.5;

  // A new variation dissolves in from the old one rather than cutting.
  float h = land(p, uSeedB);
  if (uSeedMix < 0.999) h = mix(land(p, uSeedA), h, uSeedMix);
  // Layered noise rarely strays far from the middle, which left the land all
  // mid-level inks; stretched, the lowest and highest terraces get real ground.
  h = (h - 0.5) * 1.5 + 0.5;

  // The hand raises the land under it.
  vec2 hd = (uv - uHand.xy) * aspect;
  h += uHand.z * 0.3 * exp(-dot(hd, hd) * 14.0);
  // Bass lifts the whole land, so the terraces roll across it.
  h += uLift;
  // Contrast pushes it towards its highest and lowest levels.
  h = clamp((h - 0.5) * (1.0 + uContrast * 2.5) + 0.5, 0.0, 0.999);

  float t = max(2.0, floor(uTerraces + 0.5));
  float terrace = floor(h * t);
  float height = terrace / (t - 1.0);
  // Eight inks spread over however many terraces there are.
  int ink = int(clamp(floor(height * 7.0 + 0.5), 0.0, 7.0));
  vec3 col = uInks[ink];

  // A ring that leaves the middle on each kick and spreads as the onset fades.
  float radius = (1.0 - uPulse) * 1.1;
  float wave = uPulse * exp(-pow((length((uv - 0.5) * aspect) - radius) * 9.0, 2.0));

  // Each cell reshuffles on its own beat — all at once on a clap.
  float rate = 0.35 + 1.4 * hash(cell);
  float churn = clamp(uBurst + wave, 0.0, 1.0);
  float tick = floor(uClock * rate + hash(cell + 7.13) * 11.0)
             + floor(uClock * 24.0) * step(hash(cell + 3.7), churn);
  float roll = hash(cell + vec2(tick * 0.618, tick * 0.317));
  float density = clamp(uDensity + uLevel * 0.35 + uBurst, 0.0, 1.0);
  float carries = step(hash(cell * 1.31 + tick * 0.73), density);

  float n = max(1.0, uCount);
  float idx;
  if (uSequence > 0.5) {
    float cols = floor(uSize.x / cellPx.x) + 1.0;
    idx = mod(cell.x + cell.y * cols, n);
  } else {
    // Each terrace its own stretch of the set; variety is how wide.
    float span = max(1.0, floor(n * clamp(uVariety, 0.05, 1.0)));
    float start = floor(height * (n - span));
    idx = clamp(start + floor(roll * span), 0.0, n - 1.0);
    if (idx < 0.5) idx = 1.0;
  }
  vec2 f = fract(fromTop / cellPx);
  float glyph = texture(uAtlas, vec2((idx + f.x) / n, f.y)).r * carries;

  // Low contrast: the ink pushed towards black on a bright cell, white on a dark one.
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  vec3 type = lum > 0.42 ? col * 0.38 : mix(col, vec3(1.0), 0.32);
  fragColor = vec4(mix(col, type, glyph), 1.0);
}`;

type Cfg = typeof AtlasConfig;

export class AtlasRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = AtlasConfig;

  private surface: HTMLCanvasElement;
  private gl: WebGL2RenderingContext | null = null;
  private program: WebGLProgram | null = null;
  private atlas: WebGLTexture | null = null;
  private atlasKey = '';
  private atlasCount = 1;
  private atlasSequence = false;
  private uniforms: Record<string, WebGLUniformLocation | null> = {};
  private failed = false;

  private playing = new Playing(0.6);
  private flowTime = 0;
  private clockTime = 0;
  private handStrength = 0;
  private wasClapping = false;
  private seedA = [0, 0];
  private seedB = [13.7, 41.3];
  private seedMix = 1;
  private inkKey = '';
  private inks = new Float32Array(24);
  private text = '';

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.surface = document.createElement('canvas');
    this.init();
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(AtlasConfig, values);
  }

  /** The Kinetic Type words, for the "Your words" set. */
  setText(text: string) {
    this.text = text;
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
        console.error('Atlas shader:', gl.getShaderInfoLog(shader));
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
      console.error('Atlas link:', gl.getProgramInfoLog(program));
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

    for (const name of [
      'uSize', 'uAtlas', 'uCount', 'uSequence', 'uColumns', 'uScale', 'uWarp', 'uTerraces',
      'uContrast', 'uDensity', 'uVariety', 'uTime', 'uClock', 'uLift', 'uSeedA', 'uSeedB',
      'uSeedMix', 'uInks', 'uBurst', 'uPulse', 'uLevel', 'uHand',
    ]) {
      this.uniforms[name] = gl.getUniformLocation(program, name);
    }
    this.atlas = gl.createTexture();
  }

  destroy() {
    const gl = this.gl;
    if (!gl) return;
    if (this.atlas) gl.deleteTexture(this.atlas);
    if (this.program) gl.deleteProgram(this.program);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    this.gl = null;
    this.program = null;
  }

  /** The original's inks, turned to the layer's colour panel. */
  private follow(colors: string[]) {
    const key = colors[0] ?? '';
    if (key === this.inkKey) return;
    this.inkKey = key;
    const turn = turnFrom(colors);
    INKS.forEach((hex, i) => {
      const [h, s, l] = hexToHsl(hex);
      const [r, g, b] = hslToRgb(((h + turn.hue) % 360 + 360) % 360, Math.min(1, s * turn.sat), l);
      this.inks.set([r, g, b], i * 3);
    });
  }

  /** The glyph strip for the chosen set, redrawn when the set or the cell size changes. */
  private glyphs(cellHeight: number) {
    const gl = this.gl!;
    const { glyphs, sequence, key: chars } = glyphsFor(this.cfg.type.set, this.text);
    const h = Math.max(16, Math.min(96, Math.round((cellHeight * 2) / 8) * 8));
    const key = `${chars}|${h}`;
    if (key === this.atlasKey) return;
    this.atlasKey = key;
    this.atlasCount = glyphs.length;
    this.atlasSequence = sequence;
    gl.bindTexture(gl.TEXTURE_2D, this.atlas);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, glyphStrip(glyphs, h));
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
      ctx.fillText('ATLAS NEEDS WEBGL2', width / 2, height / 2);
      return;
    }
    // Full resolution: characters are the point, and they do not survive scaling.
    if (this.surface.width !== width || this.surface.height !== height) {
      this.surface.width = width;
      this.surface.height = height;
    }

    const play = this.playing;
    play.read(handData, audioData);
    const { dt, step } = play;
    this.flowTime += step * cfg.terrain.flow;
    this.clockTime += step;

    // A hand raises the land; how strongly eases in and out with it.
    const present = handData.left || handData.right ? 1 : 0;
    this.handStrength += (present - this.handStrength) * (1 - Math.exp(-dt * 4));

    // A clap: a new variation, dissolving in over half a second.
    const clapping = !!handData.clapping;
    if (clapping && !this.wasClapping && cfg.hands.clap > 0) {
      this.seedA = this.seedMix >= 0.5 ? this.seedB : this.seedA;
      this.seedB = [Math.random() * 200, Math.random() * 200];
      this.seedMix = 0;
    }
    this.wasClapping = clapping;
    this.seedMix = Math.min(1, this.seedMix + dt / 0.5);

    this.follow(colors);
    const columns = Math.max(8, cfg.type.columns);
    this.glyphs(width / columns / 0.6);

    const u = this.uniforms;
    gl.viewport(0, 0, width, height);
    gl.useProgram(this.program);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.atlas);
    gl.uniform1i(u.uAtlas, 0);
    gl.uniform2f(u.uSize, width, height);
    gl.uniform1f(u.uCount, this.atlasCount);
    gl.uniform1f(u.uSequence, this.atlasSequence ? 1 : 0);
    gl.uniform1f(u.uColumns, columns);
    // Spreading two hands zooms in: fewer, bigger hills.
    const zoom = Math.max(0.3, 1 - (play.spread - 0.4) * cfg.hands.zoom * 0.9);
    gl.uniform1f(u.uScale, cfg.terrain.scale * zoom);
    gl.uniform1f(u.uWarp, cfg.terrain.warp);
    gl.uniform1f(u.uTerraces, cfg.terrain.terraces);
    gl.uniform1f(u.uContrast, cfg.terrain.contrast);
    gl.uniform1f(u.uDensity, cfg.type.density);
    gl.uniform1f(u.uVariety, cfg.type.variety);
    gl.uniform1f(u.uTime, this.flowTime);
    gl.uniform1f(u.uClock, this.clockTime);
    gl.uniform1f(u.uLift, play.bass * cfg.sound.bass * 0.18);
    gl.uniform2f(u.uSeedA, this.seedA[0], this.seedA[1]);
    gl.uniform2f(u.uSeedB, this.seedB[0], this.seedB[1]);
    gl.uniform1f(u.uSeedMix, this.seedMix);
    gl.uniform3fv(u.uInks, this.inks);
    gl.uniform1f(u.uBurst, play.burst * cfg.hands.clap);
    gl.uniform1f(u.uPulse, (audioData?.onset ?? 0) * cfg.sound.beat);
    gl.uniform1f(u.uLevel, (audioData?.overall ?? 0) * cfg.sound.level);
    gl.uniform3f(u.uHand, (play.aim.x + 1) / 2, 0.5 - play.aim.y / 2, this.handStrength * cfg.hands.push);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.drawImage(this.surface, 0, 0, width, height);
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
