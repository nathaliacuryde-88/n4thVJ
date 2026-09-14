import { AudioData, HandData } from '../../App';
import { RippleConfig } from '../../config/RippleRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import {
  bindTexture,
  createProgram,
  createTarget,
  deleteTarget,
  drawFullscreen,
  RenderTarget,
  resizeTarget,
} from '../../pipeline/gl';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * WATER RIPPLE (TD, key 1)
 * ═══════════════════════════════════════════════════════════════════════════
 * The first of the TD family: a signal chain rather than a drawing. Follows the
 * TouchDesigner patch in references/water-ripple-effect.
 *
 *   hands ─▶ stamp ─┐
 *                   ▼
 *              ┌─ height field ─┐        greyscale, decays and spreads
 *              └──── feedback ◀─┘
 *                   │
 *                   ▼  slope
 *   camera ─────▶ refract + gloss ─▶ out
 *
 * The important difference from the post-chain's feedback stage: that one folds
 * the finished picture back into itself. This keeps a *separate* greyscale
 * buffer holding only where the hands have been, and bends the camera by its
 * gradient. The picture itself never enters the loop.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** Up to two hands, each contributing a palm and four fingertips. */
const MAX_STAMPS = 10;

const FIELD = `
uniform sampler2D uField;
uniform vec3 uStamps[${MAX_STAMPS}];   // x, y, radius
uniform int uStampCount;
uniform float uDecay;
uniform float uSpread;
uniform float uStrength;

void main() {
  vec2 texel = uSpread / uResolution;

  // Blur and decay what is already there: the trail spreading and fading.
  float h = texture(uField, vUv).r * 0.4;
  h += texture(uField, vUv + vec2( texel.x, 0.0)).r * 0.15;
  h += texture(uField, vUv + vec2(-texel.x, 0.0)).r * 0.15;
  h += texture(uField, vUv + vec2(0.0,  texel.y)).r * 0.15;
  h += texture(uField, vUv + vec2(0.0, -texel.y)).r * 0.15;
  h *= uDecay;

  // Stamp the hands in. Aspect-corrected so a blob is round, not an ellipse.
  float aspect = uResolution.x / uResolution.y;
  for (int i = 0; i < ${MAX_STAMPS}; i++) {
    if (i >= uStampCount) break;
    vec3 stamp = uStamps[i];
    vec2 d = vUv - stamp.xy;
    d.x *= aspect;
    float falloff = 1.0 - smoothstep(0.0, stamp.z, length(d));
    h += falloff * falloff * uStrength;
  }

  fragColor = vec4(clamp(h, 0.0, 1.0), 0.0, 0.0, 1.0);
}`;

const REFRACT = `
uniform sampler2D uField;
uniform sampler2D uVideo;
uniform vec3 uColor;
uniform float uHasVideo;
uniform float uRefract;
uniform float uDispersion;
uniform float uGloss;
uniform float uSharpness;
uniform float uTint;
uniform float uFieldBrightness;

/** Height at a point, so the gradient can be taken by central difference. */
float height(vec2 uv) {
  return texture(uField, clamp(uv, 0.0, 1.0)).r;
}

void main() {
  vec2 texel = 1.0 / uResolution;

  // Slope of the height field: which way the surface tilts here. This is what
  // TouchDesigner's slope TOP produces, and what does all the work below.
  vec2 slope = vec2(
    height(vUv + vec2(texel.x, 0.0)) - height(vUv - vec2(texel.x, 0.0)),
    height(vUv + vec2(0.0, texel.y)) - height(vUv - vec2(0.0, texel.y))
  );

  float h = height(vUv);

  // Push the image along the slope — how light bends crossing a curved surface.
  vec2 offset = slope * uRefract;

  vec3 image;
  if (uHasVideo > 0.5) {
    // Mirrored, so moving your hand right moves the ripple right.
    vec2 uv = vec2(1.0 - vUv.x, vUv.y);
    vec2 push = vec2(-offset.x, offset.y);
    // Each channel bends slightly differently: thick glass, not clean water.
    float spread = 1.0 + uDispersion;
    image = vec3(
      texture(uVideo, clamp(uv + push * spread, 0.0, 1.0)).r,
      texture(uVideo, clamp(uv + push, 0.0, 1.0)).g,
      texture(uVideo, clamp(uv + push / spread, 0.0, 1.0)).b
    );
  } else {
    // No camera: show the field itself so there is still something to look at.
    image = uColor * h * uFieldBrightness;
  }

  // Gloss on the ridge. Steep slope facing the light reads as a highlight.
  float lit = clamp(dot(normalize(vec3(slope * 40.0, 1.0)), normalize(vec3(-0.6, 0.6, 0.8))), 0.0, 1.0);
  float spec = pow(lit, uSharpness) * smoothstep(0.02, 0.25, h) * uGloss;

  fragColor = vec4(image + mix(vec3(1.0), uColor, uTint) * spec, 1.0);
}`;

type Cfg = typeof RippleConfig;

export class RippleRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private glCanvas: HTMLCanvasElement;
  private gl: WebGL2RenderingContext;
  private cfg: Cfg = RippleConfig;

  private fieldProgram: WebGLProgram;
  private refractProgram: WebGLProgram;
  /** Ping-pong pair holding the height field between frames. */
  private fields: [RenderTarget, RenderTarget];
  private ping = 0;

  private videoTexture: WebGLTexture;
  private video: HTMLVideoElement | null = null;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.glCanvas = document.createElement('canvas');
    this.glCanvas.width = canvas.width;
    this.glCanvas.height = canvas.height;

    const gl = this.glCanvas.getContext('webgl2', {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
    });
    if (!gl) throw new Error('WebGL2 is not available');
    this.gl = gl;

    this.fieldProgram = createProgram(gl, FIELD);
    this.refractProgram = createProgram(gl, REFRACT);
    this.fields = [
      createTarget(gl, canvas.width, canvas.height),
      createTarget(gl, canvas.width, canvas.height),
    ];

    this.videoTexture = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, this.videoTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(RippleConfig, values);
  }

  setVideoElement(video: HTMLVideoElement) {
    this.video = video;
  }

  /** Palm plus fingertips for each visible hand, as x/y/radius in clip space. */
  private collectStamps(handData: HandData, audioData?: AudioData): number[] {
    const swell = 1 + (audioData?.bass ?? 0) * this.cfg.stamp.audioSwell;
    const radius = this.cfg.stamp.radius * swell;
    const stamps: number[] = [];

    for (const hand of [handData.left, handData.right]) {
      if (!hand || stamps.length / 3 >= MAX_STAMPS) continue;

      stamps.push(hand.position.x, 1 - hand.position.y, radius);

      const tips = hand.landmarks;
      if (tips && this.cfg.stamp.fingerScale > 0) {
        for (const index of [8, 12, 16, 20]) {
          if (stamps.length / 3 >= MAX_STAMPS) break;
          const tip = tips[index];
          if (!tip) continue;
          stamps.push(tip.x, 1 - tip.y, radius * this.cfg.stamp.fingerScale);
        }
      }
    }
    return stamps;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const gl = this.gl;
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;

    if (this.glCanvas.width !== width || this.glCanvas.height !== height) {
      this.glCanvas.width = width;
      this.glCanvas.height = height;
      resizeTarget(gl, this.fields[0], width, height);
      resizeTarget(gl, this.fields[1], width, height);
    }

    // ── the height field ────────────────────────────────────────────────────
    const source = this.fields[this.ping];
    this.ping ^= 1;
    const target = this.fields[this.ping];

    const stamps = this.collectStamps(handData, audioData);
    const beat = audioData?.beat ? 1 + (audioData.beatIntensity ?? 0) : 1;

    gl.useProgram(this.fieldProgram);
    gl.uniform2f(gl.getUniformLocation(this.fieldProgram, 'uResolution'), width, height);
    bindTexture(gl, this.fieldProgram, 'uField', source.texture, 0);
    gl.uniform1i(gl.getUniformLocation(this.fieldProgram, 'uStampCount'), stamps.length / 3);
    if (stamps.length > 0) {
      gl.uniform3fv(gl.getUniformLocation(this.fieldProgram, 'uStamps'), stamps);
    }
    gl.uniform1f(gl.getUniformLocation(this.fieldProgram, 'uDecay'), this.cfg.field.decay);
    gl.uniform1f(gl.getUniformLocation(this.fieldProgram, 'uSpread'), this.cfg.field.spread);
    gl.uniform1f(gl.getUniformLocation(this.fieldProgram, 'uStrength'), this.cfg.stamp.strength * beat);
    drawFullscreen(gl, target, width, height);

    // ── refract the camera through it ───────────────────────────────────────
    const ready = this.video && this.video.readyState >= 2 && this.video.videoWidth > 0;
    if (ready) {
      gl.bindTexture(gl.TEXTURE_2D, this.videoTexture);
      // Top row first out of the video, but v=0 is the bottom of the frame, so
      // without the flip the camera refracts through the ripple upside down.
      // The stamps already arrive flipped (1 - y) to match this space.
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.video!);
    }

    const tint = hexToRgb(colors[0] ?? '#ffffff');

    gl.useProgram(this.refractProgram);
    gl.uniform2f(gl.getUniformLocation(this.refractProgram, 'uResolution'), width, height);
    bindTexture(gl, this.refractProgram, 'uField', target.texture, 0);
    bindTexture(gl, this.refractProgram, 'uVideo', this.videoTexture, 1);
    gl.uniform1f(gl.getUniformLocation(this.refractProgram, 'uHasVideo'), ready ? 1 : 0);
    gl.uniform3f(gl.getUniformLocation(this.refractProgram, 'uColor'), tint[0], tint[1], tint[2]);
    gl.uniform1f(gl.getUniformLocation(this.refractProgram, 'uRefract'), this.cfg.refraction.amount);
    gl.uniform1f(gl.getUniformLocation(this.refractProgram, 'uDispersion'), this.cfg.refraction.dispersion);
    gl.uniform1f(gl.getUniformLocation(this.refractProgram, 'uGloss'), this.cfg.highlight.amount);
    gl.uniform1f(gl.getUniformLocation(this.refractProgram, 'uSharpness'), this.cfg.highlight.sharpness);
    gl.uniform1f(gl.getUniformLocation(this.refractProgram, 'uTint'), this.cfg.highlight.tint);
    gl.uniform1f(
      gl.getUniformLocation(this.refractProgram, 'uFieldBrightness'),
      this.cfg.fallback.fieldBrightness,
    );
    drawFullscreen(gl, null, width, height);

    // Into the shared 2D canvas, so the post chain sees it like everything else.
    this.ctx.clearRect(0, 0, width, height);
    this.ctx.drawImage(this.glCanvas, 0, 0, width, height);
  }

  destroy() {
    const gl = this.gl;
    gl.deleteProgram(this.fieldProgram);
    gl.deleteProgram(this.refractProgram);
    gl.deleteTexture(this.videoTexture);
    deleteTarget(gl, this.fields[0]);
    deleteTarget(gl, this.fields[1]);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
  }
}

function hexToRgb(hex: string): [number, number, number] {
  const value = hex.replace('#', '');
  if (value.length < 6) return [1, 1, 1];
  return [
    parseInt(value.slice(0, 2), 16) / 255,
    parseInt(value.slice(2, 4), 16) / 255,
    parseInt(value.slice(4, 6), 16) / 255,
  ];
}
