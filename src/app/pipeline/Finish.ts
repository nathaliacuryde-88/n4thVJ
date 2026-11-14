/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE FINISH
 * ═══════════════════════════════════════════════════════════════════════════
 * One last pass over the whole picture, after every layer has been laid down:
 * what a lens and a film stock would have done to it.
 *
 *   GLOW      light spills past the edges of whatever is bright, near and
 *             far, so highlights bloom instead of stopping dead at a pixel
 *   GRAIN     a fine moving grain, mostly in the mid-tones, which hides the
 *             banding in slow gradients and gives flat colour a surface
 *   VIGNETTE  the corners fall away a little, holding the eye in the frame
 *
 * It belongs to the output rather than to a visual: three layers stacked are
 * one picture by the time they reach the room, and this treats them as one.
 * The glow breathes with the music — a little more on each kick, a surge on a
 * drop — so even a still image is touched by the sound.
 *
 * Its own WebGL2 canvas, like the per-visual chains. The composite goes in as
 * a texture and the finished frame is copied to the visible canvas.
 * ═══════════════════════════════════════════════════════════════════════════
 */

import {
  bindTexture,
  createProgram,
  createTarget,
  deleteTarget,
  drawFullscreen,
  RenderTarget,
  resizeTarget,
} from './gl';

/** Off, soft, deep. */
export type FinishLevel = 0 | 1 | 2;

const LOOKS = [
  null,
  { glow: 0.5, grain: 0.03, vignette: 0.16 },
  { glow: 0.95, grain: 0.05, vignette: 0.3 },
] as const;

/** Keeps what is bright, with a soft knee, and shrinks it. */
const BRIGHT = `
void main() {
  vec3 c = texture(uTex, vUv).rgb;
  float l = max(c.r, max(c.g, c.b));
  // Only what is properly bright: a picture that is light all over should
  // not turn to fog.
  float keep = smoothstep(0.62, 1.0, l);
  fragColor = vec4(c * keep, 1.0);
}`;

/** One direction of a wide, smooth blur. */
const BLUR = `
uniform vec2 uStep;
void main() {
  vec3 c = texture(uTex, vUv).rgb * 0.227027;
  c += (texture(uTex, vUv + uStep * 1.3846).rgb + texture(uTex, vUv - uStep * 1.3846).rgb) * 0.316216;
  c += (texture(uTex, vUv + uStep * 3.2308).rgb + texture(uTex, vUv - uStep * 3.2308).rgb) * 0.070270;
  fragColor = vec4(c, 1.0);
}`;

const COMBINE = `
uniform sampler2D uNear;
uniform sampler2D uFar;
uniform float uGlow;
uniform float uGrain;
uniform float uVignette;
float hash(vec2 p) {
  p = fract(p * vec2(443.897, 441.423));
  p += dot(p, p.yx + 19.19);
  return fract((p.x + p.y) * p.x);
}
void main() {
  vec3 c = texture(uTex, vUv).rgb;
  vec3 glow = texture(uNear, vUv).rgb * 0.5 + texture(uFar, vUv).rgb * 0.6;
  // Screened on, so the glow lifts what is around a light without burning it out.
  glow = min(glow * uGlow, vec3(1.0));
  c = 1.0 - (1.0 - c) * (1.0 - glow);

  vec2 d = vUv - 0.5;
  d.x *= uResolution.x / uResolution.y;
  c *= 1.0 - uVignette * smoothstep(0.35, 1.05, length(d));

  // Grain: two samples a frame apart, strongest in the mid-tones, absent
  // from pure black so a dark stage stays dark.
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  float n = hash(gl_FragCoord.xy + fract(uTime) * 91.7) - 0.5;
  c += n * uGrain * (0.25 + 1.5 * l * (1.0 - l)) * step(0.004, l) * 2.0;
  fragColor = vec4(c, 1.0);
}`;

export class Finish {
  private gl: WebGL2RenderingContext;
  private source: WebGLTexture;
  private bright: WebGLProgram;
  private blur: WebGLProgram;
  private combine: WebGLProgram;
  /** Near glow at a quarter size, far glow at an eighth; two each to ping-pong. */
  private near: [RenderTarget, RenderTarget];
  private far: [RenderTarget, RenderTarget];
  /** The glow's swell on the music, eased so it breathes rather than flickers. */
  private swell = 0;

  constructor(private readonly canvas: HTMLCanvasElement) {
    const gl = canvas.getContext('webgl2', { alpha: false, antialias: false, powerPreference: 'high-performance' });
    if (!gl) throw new Error('WebGL2 unavailable');
    this.gl = gl;
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    this.source = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, this.source);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    this.bright = createProgram(gl, BRIGHT);
    this.blur = createProgram(gl, BLUR);
    this.combine = createProgram(gl, COMBINE);
    this.near = [createTarget(gl, 1, 1), createTarget(gl, 1, 1)];
    this.far = [createTarget(gl, 1, 1), createTarget(gl, 1, 1)];
  }

  /**
   * Finishes one frame of `source` onto this canvas.
   *
   * `pulse` is the music's kick or drop, 0 to 1; `seconds` is the frame's time.
   */
  render(source: HTMLCanvasElement, level: FinishLevel, pulse: number, seconds: number, dt: number) {
    const look = LOOKS[level];
    if (!look) return;
    const gl = this.gl;
    const width = source.width;
    const height = source.height;
    if (!width || !height) return;
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
    const nw = Math.max(1, width >> 2);
    const nh = Math.max(1, height >> 2);
    const fw = Math.max(1, width >> 3);
    const fh = Math.max(1, height >> 3);
    for (const t of this.near) resizeTarget(gl, t, nw, nh);
    for (const t of this.far) resizeTarget(gl, t, fw, fh);

    gl.bindTexture(gl.TEXTURE_2D, this.source);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);

    // What is bright, at a quarter size.
    gl.useProgram(this.bright);
    bindTexture(gl, this.bright, 'uTex', this.source, 0);
    drawFullscreen(gl, this.near[0], nw, nh);

    const blurPass = (from: RenderTarget, to: RenderTarget, sx: number, sy: number) => {
      bindTexture(gl, this.blur, 'uTex', from.texture, 0);
      gl.uniform2f(gl.getUniformLocation(this.blur, 'uStep'), sx, sy);
      drawFullscreen(gl, to, to.width, to.height);
    };
    gl.useProgram(this.blur);
    blurPass(this.near[0], this.near[1], 1 / nw, 0);
    blurPass(this.near[1], this.near[0], 0, 1 / nh);
    // The far glow starts from the near one, smaller and blurred twice over.
    blurPass(this.near[0], this.far[0], 1 / fw, 0);
    blurPass(this.far[0], this.far[1], 0, 1 / fh);
    blurPass(this.far[1], this.far[0], 1.6 / fw, 0);
    blurPass(this.far[0], this.far[1], 0, 1.6 / fh);

    // Up fast on a kick, down over a third of a second.
    const p = Number.isFinite(pulse) ? Math.min(1, Math.max(0, pulse)) : 0;
    this.swell += (p - this.swell) * (1 - Math.exp(-dt / (p > this.swell ? 0.03 : 0.3)));

    gl.useProgram(this.combine);
    bindTexture(gl, this.combine, 'uTex', this.source, 0);
    bindTexture(gl, this.combine, 'uNear', this.near[0].texture, 1);
    bindTexture(gl, this.combine, 'uFar', this.far[1].texture, 2);
    gl.uniform2f(gl.getUniformLocation(this.combine, 'uResolution'), width, height);
    gl.uniform1f(gl.getUniformLocation(this.combine, 'uTime'), seconds);
    gl.uniform1f(gl.getUniformLocation(this.combine, 'uGlow'), look.glow * (1 + 0.6 * this.swell));
    gl.uniform1f(gl.getUniformLocation(this.combine, 'uGrain'), look.grain);
    gl.uniform1f(gl.getUniformLocation(this.combine, 'uVignette'), look.vignette);
    drawFullscreen(gl, null, width, height);
  }

  /** Whether the context has been taken away; the caller falls back to the plain frame. */
  get lost(): boolean {
    return this.gl.isContextLost();
  }

  destroy() {
    const gl = this.gl;
    for (const t of [...this.near, ...this.far]) deleteTarget(gl, t);
    gl.deleteTexture(this.source);
    gl.deleteProgram(this.bright);
    gl.deleteProgram(this.blur);
    gl.deleteProgram(this.combine);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
  }
}
