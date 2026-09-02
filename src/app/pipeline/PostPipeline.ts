import { PipelineConfig } from '../config/PipelineConfig';
import { ParamValues, withOverrides } from '../params/types';
import {
  bindTexture,
  createProgram,
  createTarget,
  deleteTarget,
  drawFullscreen,
  RenderTarget,
  resizeTarget,
} from './gl';
import {
  BLEND,
  BLOOM_BLUR,
  BLOOM_BRIGHT,
  BLOOM_COMPOSITE,
  COPY,
  DISPLACE,
  FEEDBACK,
  KALEIDO,
  QUANTIZE,
  RGB_SPLIT,
} from './shaders';

type Cfg = typeof PipelineConfig;

/** A stage runs only if it is switched on, has opacity, and is doing something. */
function stageLive(stage: { enabled: number; mix: number }, doingSomething: boolean): boolean {
  return stage.enabled >= 0.5 && stage.mix > 0 && doingSomething;
}

/**
 * Whether the chain would alter the image at all. Exported so the UI can show
 * it without re-deriving the rules.
 */
export function fxActive(values: ParamValues): boolean {
  const c = withOverrides(PipelineConfig, values);
  if (c.master.enabled < 0.5) return false;
  return (
    stageLive(c.feedback, c.feedback.amount > 0) ||
    stageLive(c.displace, c.displace.amount > 0) ||
    stageLive(c.rgbSplit, c.rgbSplit.amount > 0) ||
    stageLive(c.kaleido, c.kaleido.segments >= 2) ||
    stageLive(c.quantize, c.quantize.pixel > 1 || c.quantize.levels >= 2) ||
    stageLive(c.bloom, c.bloom.amount > 0)
  );
}

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * POST PIPELINE
 * ═══════════════════════════════════════════════════════════════════════════
 * The renderers draw into an offscreen 2D canvas. That canvas is uploaded as a
 * texture and pushed through a chain of fullscreen fragment shaders, ping-
 * ponging between two render targets, before being presented.
 *
 * Feedback is what makes this more than a filter stack: the *output* of the
 * whole chain is kept and sampled by the next frame, so the effects compound
 * on their own history rather than being re-applied to a fresh image.
 *
 *   source ─▶ feedback ─▶ displace ─▶ rgb split ─▶ kaleido ─▶ quantize ─▶ bloom
 *                 ▲                                                        │
 *                 └──────────────── kept for next frame ◀──────────────────┘
 *
 * With every effect at its default the chain is empty, and the source is
 * blitted straight to the screen — identical output, no GPU cost.
 * ═══════════════════════════════════════════════════════════════════════════
 */
export class PostPipeline {
  private gl: WebGL2RenderingContext;
  private cfg: Cfg = PipelineConfig;

  private programs: Record<string, WebGLProgram> = {};
  private sourceTexture: WebGLTexture;
  /** The outgoing visual during a crossfade. */
  private previousTexture: WebGLTexture;
  /** Where the two visuals are blended before the chain sees them. */
  private blendTarget: RenderTarget;

  /** Ping-pong pair for the chain. */
  private targets: [RenderTarget, RenderTarget];
  /** Holds the previous frame's finished output. */
  private feedback: RenderTarget;
  /** Half-resolution pair for the bloom blur. */
  private bloomTargets: [RenderTarget, RenderTarget];

  private width = 1;
  private height = 1;
  private ping = 0;
  /** Cleared when the chain goes idle, so feedback restarts from black. */
  private feedbackPrimed = false;

  constructor(canvas: HTMLCanvasElement) {
    const gl = canvas.getContext('webgl2', {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance',
    });
    if (!gl) throw new Error('WebGL2 is not available');
    this.gl = gl;

    this.programs = {
      copy: createProgram(gl, COPY),
      feedback: createProgram(gl, FEEDBACK),
      displace: createProgram(gl, DISPLACE),
      rgbSplit: createProgram(gl, RGB_SPLIT),
      kaleido: createProgram(gl, KALEIDO),
      quantize: createProgram(gl, QUANTIZE),
      blend: createProgram(gl, BLEND),
      bloomBright: createProgram(gl, BLOOM_BRIGHT),
      bloomBlur: createProgram(gl, BLOOM_BLUR),
      bloomComposite: createProgram(gl, BLOOM_COMPOSITE),
    };

    this.sourceTexture = gl.createTexture()!;
    this.previousTexture = gl.createTexture()!;
    for (const texture of [this.sourceTexture, this.previousTexture]) {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    }

    this.blendTarget = createTarget(gl, 1, 1);
    this.targets = [createTarget(gl, 1, 1), createTarget(gl, 1, 1)];
    this.feedback = createTarget(gl, 1, 1);
    this.bloomTargets = [createTarget(gl, 1, 1), createTarget(gl, 1, 1)];
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(PipelineConfig, values);
  }

  private live(stage: { enabled: number; mix: number }, doingSomething: boolean): boolean {
    return this.cfg.master.enabled >= 0.5 && stageLive(stage, doingSomething);
  }

  /** True when at least one stage is live. */
  private get active(): boolean {
    const c = this.cfg;
    if (c.master.enabled < 0.5) return false;
    return (
      this.live(c.feedback, c.feedback.amount > 0) ||
      this.live(c.displace, c.displace.amount > 0) ||
      this.live(c.rgbSplit, c.rgbSplit.amount > 0) ||
      this.live(c.kaleido, c.kaleido.segments >= 2) ||
      this.live(c.quantize, c.quantize.pixel > 1 || c.quantize.levels >= 2) ||
      this.live(c.bloom, c.bloom.amount > 0)
    );
  }

  private resize(width: number, height: number) {
    if (this.width === width && this.height === height) return;
    const gl = this.gl;
    this.width = width;
    this.height = height;
    resizeTarget(gl, this.targets[0], width, height);
    resizeTarget(gl, this.targets[1], width, height);
    resizeTarget(gl, this.feedback, width, height);
    resizeTarget(gl, this.blendTarget, width, height);
    resizeTarget(gl, this.bloomTargets[0], Math.max(1, width >> 1), Math.max(1, height >> 1));
    resizeTarget(gl, this.bloomTargets[1], Math.max(1, width >> 1), Math.max(1, height >> 1));
    // The history is a different size now; anything kept would stretch.
    this.feedbackPrimed = false;
  }

  /** Select a program and set the uniforms every shader declares. */
  private use(name: string, width = this.width, height = this.height, time = 0): WebGLProgram {
    const gl = this.gl;
    const program = this.programs[name];
    gl.useProgram(program);
    gl.uniform2f(gl.getUniformLocation(program, 'uResolution'), width, height);
    gl.uniform1f(gl.getUniformLocation(program, 'uTime'), time);
    return program;
  }

  private next(): RenderTarget {
    this.ping ^= 1;
    return this.targets[this.ping];
  }

  /**
   * Push one frame through the chain and present it.
   *
   * `previous`, when given, is the outgoing visual of a crossfade and `fade`
   * is how far across we are (0 = all previous, 1 = all source). The two are
   * blended *before* the chain, so feedback and the rest treat the transition
   * as one continuous image rather than seeing a cut.
   *
   * `time` is seconds; it only drives the displacement field.
   */
  render(source: HTMLCanvasElement, time: number, previous?: HTMLCanvasElement | null, fade = 1) {
    const gl = this.gl;
    const width = source.width;
    const height = source.height;
    if (width === 0 || height === 0) return;

    const canvas = gl.canvas as HTMLCanvasElement;
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    this.resize(width, height);

    gl.bindTexture(gl.TEXTURE_2D, this.sourceTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);

    // Blend the outgoing visual in first, so everything downstream — feedback
    // included — sees one continuous image instead of a cut.
    let incoming: WebGLTexture = this.sourceTexture;
    if (previous && fade < 1 && previous.width === width && previous.height === height) {
      gl.bindTexture(gl.TEXTURE_2D, this.previousTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, previous);

      const program = this.use('blend');
      bindTexture(gl, program, 'uTex', this.previousTexture, 0);
      bindTexture(gl, program, 'uNext', this.sourceTexture, 1);
      gl.uniform1f(gl.getUniformLocation(program, 'uMix'), fade);
      drawFullscreen(gl, this.blendTarget, width, height);
      incoming = this.blendTarget.texture;
    }

    // Nothing switched on: straight to screen, no targets touched.
    if (!this.active) {
      if (this.feedbackPrimed) this.feedbackPrimed = false;
      const program = this.use('copy');
      bindTexture(gl, program, 'uTex', incoming, 0);
      drawFullscreen(gl, null, width, height);
      return;
    }

    const c = this.cfg;
    let current: WebGLTexture = incoming;
    let target: RenderTarget;

    if (this.live(c.feedback, c.feedback.amount > 0)) {
      const program = this.use('feedback');
      bindTexture(gl, program, 'uTex', current, 0);
      bindTexture(gl, program, 'uFeedback', this.feedback.texture, 1);
      gl.uniform1f(gl.getUniformLocation(program, 'uAmount'), this.feedbackPrimed ? c.feedback.amount : 0);
      gl.uniform1f(gl.getUniformLocation(program, 'uZoom'), c.feedback.zoom);
      gl.uniform1f(gl.getUniformLocation(program, 'uRotate'), c.feedback.rotate);
      gl.uniform2f(gl.getUniformLocation(program, 'uOffset'), c.feedback.offsetX, c.feedback.offsetY);
      gl.uniform1f(gl.getUniformLocation(program, 'uHueShift'), c.feedback.hueShift);
      gl.uniform1f(gl.getUniformLocation(program, 'uMix'), c.feedback.mix);
      target = this.next();
      drawFullscreen(gl, target, width, height);
      current = target.texture;
    }

    if (this.live(c.displace, c.displace.amount > 0)) {
      const program = this.use('displace', width, height, time);
      bindTexture(gl, program, 'uTex', current, 0);
      gl.uniform1f(gl.getUniformLocation(program, 'uAmount'), c.displace.amount);
      gl.uniform1f(gl.getUniformLocation(program, 'uScale'), c.displace.scale);
      gl.uniform1f(gl.getUniformLocation(program, 'uSpeed'), c.displace.speed);
      gl.uniform1f(gl.getUniformLocation(program, 'uMix'), c.displace.mix);
      target = this.next();
      drawFullscreen(gl, target, width, height);
      current = target.texture;
    }

    if (this.live(c.rgbSplit, c.rgbSplit.amount > 0)) {
      const program = this.use('rgbSplit');
      bindTexture(gl, program, 'uTex', current, 0);
      gl.uniform1f(gl.getUniformLocation(program, 'uAmount'), c.rgbSplit.amount);
      gl.uniform1f(gl.getUniformLocation(program, 'uMix'), c.rgbSplit.mix);
      target = this.next();
      drawFullscreen(gl, target, width, height);
      current = target.texture;
    }

    if (this.live(c.kaleido, c.kaleido.segments >= 2)) {
      const program = this.use('kaleido');
      bindTexture(gl, program, 'uTex', current, 0);
      gl.uniform1f(gl.getUniformLocation(program, 'uSegments'), Math.round(c.kaleido.segments));
      gl.uniform1f(gl.getUniformLocation(program, 'uSpin'), c.kaleido.spin);
      gl.uniform1f(gl.getUniformLocation(program, 'uMix'), c.kaleido.mix);
      target = this.next();
      drawFullscreen(gl, target, width, height);
      current = target.texture;
    }

    if (this.live(c.quantize, c.quantize.pixel > 1 || c.quantize.levels >= 2)) {
      const program = this.use('quantize');
      bindTexture(gl, program, 'uTex', current, 0);
      gl.uniform1f(gl.getUniformLocation(program, 'uPixel'), c.quantize.pixel);
      gl.uniform1f(gl.getUniformLocation(program, 'uLevels'), c.quantize.levels);
      gl.uniform1f(gl.getUniformLocation(program, 'uMix'), c.quantize.mix);
      target = this.next();
      drawFullscreen(gl, target, width, height);
      current = target.texture;
    }

    if (this.live(c.bloom, c.bloom.amount > 0)) {
      current = this.renderBloom(current, width, height);
    }

    // Keep this frame's output for the next one to sample, then present it.
    const copy = this.use('copy');
    bindTexture(gl, copy, 'uTex', current, 0);
    drawFullscreen(gl, this.feedback, width, height);
    this.feedbackPrimed = true;

    bindTexture(gl, copy, 'uTex', current, 0);
    drawFullscreen(gl, null, width, height);
  }

  /** Bright pass and blur at half resolution, composited back at full. */
  private renderBloom(source: WebGLTexture, width: number, height: number): WebGLTexture {
    const gl = this.gl;
    const half = this.bloomTargets;
    const hw = half[0].width;
    const hh = half[0].height;

    let program = this.use('bloomBright', hw, hh);
    bindTexture(gl, program, 'uTex', source, 0);
    gl.uniform1f(gl.getUniformLocation(program, 'uThreshold'), this.cfg.bloom.threshold);
    drawFullscreen(gl, half[0], hw, hh);

    program = this.use('bloomBlur', hw, hh);
    bindTexture(gl, program, 'uTex', half[0].texture, 0);
    gl.uniform2f(gl.getUniformLocation(program, 'uDirection'), 1, 0);
    drawFullscreen(gl, half[1], hw, hh);

    program = this.use('bloomBlur', hw, hh);
    bindTexture(gl, program, 'uTex', half[1].texture, 0);
    gl.uniform2f(gl.getUniformLocation(program, 'uDirection'), 0, 1);
    drawFullscreen(gl, half[0], hw, hh);

    program = this.use('bloomComposite');
    bindTexture(gl, program, 'uTex', source, 0);
    bindTexture(gl, program, 'uBloom', half[0].texture, 1);
    gl.uniform1f(gl.getUniformLocation(program, 'uAmount'), this.cfg.bloom.amount);
    gl.uniform1f(gl.getUniformLocation(program, 'uMix'), this.cfg.bloom.mix);
    const target = this.next();
    drawFullscreen(gl, target, width, height);
    return target.texture;
  }

  destroy() {
    const gl = this.gl;
    for (const program of Object.values(this.programs)) gl.deleteProgram(program);
    gl.deleteTexture(this.sourceTexture);
    gl.deleteTexture(this.previousTexture);
    deleteTarget(gl, this.blendTarget);
    deleteTarget(gl, this.targets[0]);
    deleteTarget(gl, this.targets[1]);
    deleteTarget(gl, this.feedback);
    deleteTarget(gl, this.bloomTargets[0]);
    deleteTarget(gl, this.bloomTargets[1]);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
  }
}
