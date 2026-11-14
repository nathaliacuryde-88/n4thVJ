import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { FluidConfig } from '../../config/FluidRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { InflatedLook, Playing, Shared, drawUnavailable, hexToHsl, makeRenderer, turnFrom } from './inflated/style';
import {
  ADVECT_FRAG, CURL_FRAG, DIVERGENCE_FRAG, FORCE_FRAG, GRADIENT_FRAG, INK_FRAG, MARBLE_FRAG, PRESSURE_FRAG,
  QUAD_VERT, SCALE_FRAG, SHOW_FRAG, VORTICITY_FRAG,
} from './fluid/shaders';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * INK
 * ═══════════════════════════════════════════════════════════════════════════
 * Coloured ink in dark water, behaving as ink in water does, because it is
 * worked out as a fluid rather than drawn (fluid/shaders.ts).
 *
 * THE HANDS PAINT. Each hand lets ink go where it is — one in the cool
 * colours, one in the warm — and drags the water along as it moves, so a
 * slow hand leaves a soft cloud and a fast one a long curling stroke. A
 * pinch makes the stroke fine and dense; a hand near the camera, broad.
 * Two hands meeting mix their colours. A clap bursts ink from the middle.
 *
 * THE MUSIC DROPS IT IN. Every kick opens a bloom of ink somewhere, pushing
 * the water out around it. The hats are fine droplets. The bass stirs the
 * whole tank; a fuller passage keeps more ink in the water and a breakdown
 * lets it clear. The drop is a burst from the middle in every colour.
 *
 * Left alone, two slow strokes wander it, so it is never an empty tank.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof FluidConfig;

/** Rows of the grid the water is solved on, and the most the ink is drawn at. */
const WATER_ROWS = 144;
const INK_ROWS = 640;
const PRESSURE_STEPS = 18;
const SOURCES = 8;

/** The inks, before the colour panel turns them: cool ones first, then warm. Never red. */
const INKS: [number, number, number][] = [
  [0.08, 0.72, 0.68], [0.16, 0.42, 1.0], [0.5, 0.36, 1.0],
  [1.0, 0.56, 0.36], [1.0, 0.78, 0.32], [0.86, 0.5, 0.9],
];

interface Pair { read: THREE.WebGLRenderTarget; write: THREE.WebGLRenderTarget }

export class FluidRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = FluidConfig;
  private surface = document.createElement('canvas');
  private renderer: THREE.WebGLRenderer | null = null;
  private failed = false;
  private playing = new Playing(0.6);

  private quad = new THREE.BufferGeometry();
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private scene = new THREE.Scene();
  private mesh: THREE.Mesh;
  private materials: Record<string, THREE.ShaderMaterial> = {};

  private velocity: Pair | null = null;
  private dye: Pair | null = null;
  private pressure: Pair | null = null;
  private curl: THREE.WebGLRenderTarget | null = null;
  private divergence: THREE.WebGLRenderTarget | null = null;
  private size = { w: 0, h: 0, inkW: 0, inkH: 0 };

  private points = Array.from({ length: SOURCES }, () => new THREE.Vector3(0.5, 0.5, 0.01));
  private pushes = Array.from({ length: SOURCES }, () => new THREE.Vector3());
  private inks = Array.from({ length: SOURCES }, () => new THREE.Vector3());

  private time = 0;
  private real = 0;
  private hands: ({ x: number; y: number } | null)[] = [null, null];
  private lastKick = 0;
  private lastHat = 0;
  private lastDrop = 0;
  private blooms = 0;
  /** The flower family's palettes, for the marbled look. */
  private look = new InflatedLook();
  private shared: Shared = this.look.shared();
  private started = false;
  private colourTime = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.quad.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
    const make = (fragmentShader: string, uniforms: Record<string, THREE.IUniform>) =>
      new THREE.ShaderMaterial({ vertexShader: QUAD_VERT, fragmentShader, uniforms, depthTest: false, depthWrite: false });
    const texel = () => ({ value: new THREE.Vector2() });
    this.materials = {
      advect: make(ADVECT_FRAG, { uVelocity: { value: null }, uSource: { value: null }, uScale: { value: new THREE.Vector2() }, uDt: { value: 0 }, uFade: { value: 0 } }),
      force: make(FORCE_FRAG, { uVelocity: { value: null }, uPoint: { value: this.points }, uPush: { value: this.pushes }, uAspect: { value: 1 }, uTime: { value: 0 }, uStir: { value: 0 }, uDt: { value: 0 } }),
      ink: make(INK_FRAG, { uDye: { value: null }, uPoint: { value: this.points }, uInk: { value: this.inks }, uAspect: { value: 1 } }),
      curl: make(CURL_FRAG, { uVelocity: { value: null }, uTexel: texel() }),
      vorticity: make(VORTICITY_FRAG, { uVelocity: { value: null }, uCurl: { value: null }, uTexel: texel(), uAmount: { value: 0 }, uDt: { value: 0 } }),
      divergence: make(DIVERGENCE_FRAG, { uVelocity: { value: null }, uTexel: texel() }),
      pressure: make(PRESSURE_FRAG, { uPressure: { value: null }, uDivergence: { value: null }, uTexel: texel() }),
      gradient: make(GRADIENT_FRAG, { uPressure: { value: null }, uVelocity: { value: null }, uTexel: texel() }),
      scale: make(SCALE_FRAG, { uTex: { value: null }, uBy: { value: 1 } }),
      marble: make(MARBLE_FRAG, {
        uDye: { value: null }, uPalA: this.shared.uPalA, uPalB: this.shared.uPalB, uPalMix: this.shared.uPalMix,
        uBands: { value: 1 }, uT: { value: 0 }, uGround: { value: new THREE.Vector3() },
      }),
      show: make(SHOW_FRAG, { uDye: { value: null }, uTexel: texel(), uTurn: { value: 0 }, uSat: { value: 1 }, uExposure: { value: 1 } }),
    };
    this.mesh = new THREE.Mesh(this.quad, this.materials.show);
    this.mesh.frustumCulled = false;
    this.scene.add(this.mesh);

    try {
      const renderer = makeRenderer(this.surface);
      renderer.setClearColor(0x000000, 1);
      renderer.autoClear = false;
      if (!renderer.extensions.has('EXT_color_buffer_float') && !renderer.extensions.has('EXT_color_buffer_half_float')) {
        throw new Error('no floating-point render targets');
      }
      this.renderer = renderer;
    } catch (error) {
      console.error('Ink could not start:', error);
      this.failed = true;
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(FluidConfig, values);
  }

  destroy() {
    this.look.dispose();
    this.dropTargets();
    this.quad.dispose();
    for (const m of Object.values(this.materials)) m.dispose();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer = null;
  }

  private dropTargets() {
    for (const pair of [this.velocity, this.dye, this.pressure]) { pair?.read.dispose(); pair?.write.dispose(); }
    this.curl?.dispose();
    this.divergence?.dispose();
    this.velocity = this.dye = this.pressure = null;
    this.curl = this.divergence = null;
  }

  private buildTargets(renderer: THREE.WebGLRenderer, width: number, height: number) {
    const aspect = width / height;
    const h = WATER_ROWS;
    const w = Math.max(2, Math.round(h * aspect));
    const inkH = Math.min(INK_ROWS, height);
    const inkW = Math.max(2, Math.round(inkH * aspect));
    this.dropTargets();
    const target = (tw: number, th: number) => {
      const t = new THREE.WebGLRenderTarget(tw, th, {
        type: THREE.HalfFloatType, format: THREE.RGBAFormat, depthBuffer: false,
        minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
        wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping,
      });
      renderer.setRenderTarget(t);
      renderer.clear();
      return t;
    };
    const pair = (tw: number, th: number): Pair => ({ read: target(tw, th), write: target(tw, th) });
    this.velocity = pair(w, h);
    this.pressure = pair(w, h);
    this.dye = pair(inkW, inkH);
    this.curl = target(w, h);
    this.divergence = target(w, h);
    renderer.setRenderTarget(null);
    this.size = { w, h, inkW, inkH };
    for (const name of ['curl', 'vorticity', 'divergence', 'pressure', 'gradient']) {
      (this.materials[name].uniforms.uTexel.value as THREE.Vector2).set(1 / w, 1 / h);
    }
    (this.materials.show.uniforms.uTexel.value as THREE.Vector2).set(1 / inkW, 1 / inkH);
  }

  /** Runs one pass into `to`. */
  private run(renderer: THREE.WebGLRenderer, material: THREE.ShaderMaterial, to: THREE.WebGLRenderTarget | null) {
    this.mesh.material = material;
    renderer.setRenderTarget(to);
    renderer.render(this.scene, this.camera);
  }

  private swap(pair: Pair) {
    const t = pair.read;
    pair.read = pair.write;
    pair.write = t;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;
    const renderer = this.renderer;
    if (this.failed || !renderer) {
      drawUnavailable(this.ctx, width, height, 'INK');
      return;
    }
    const { cfg } = this;
    const play = this.playing;
    play.read(handData, audioData);
    const frame = play.dt;
    const dt = Math.min(1 / 30, Math.max(0, play.step) * cfg.water.flow);
    this.time += dt;
    this.real += frame;
    const aspect = width / height;

    if (this.surface.width !== width || this.surface.height !== height) renderer.setSize(width, height, false);
    const wantW = Math.max(2, Math.round(WATER_ROWS * aspect));
    if (!this.velocity || this.size.w !== wantW || this.size.inkH !== Math.min(INK_ROWS, height)) {
      try {
        this.buildTargets(renderer, width, height);
      } catch (error) {
        console.error('Ink could not build its water:', error);
        this.failed = true;
        return;
      }
    }
    const velocity = this.velocity!;
    const dye = this.dye!;
    const pressure = this.pressure!;

    // ── what goes into the water this frame ──────────────────────────────
    for (let i = 0; i < SOURCES; i++) { this.points[i].set(0.5, 0.5, 0.01); this.pushes[i].set(0, 0, 0); this.inks[i].set(0, 0, 0); }
    const amount = cfg.ink.amount;
    const wide = cfg.ink.width;
    // Which ink, drifting slowly along the row and nudged by how bright the sound is.
    const shade = this.real * 0.05 + play.bright * 1.5;
    const marble = Math.round(cfg.look.style) === 0;
    const ink = (index: number, strength: number, into: THREE.Vector3) => {
      if (marble) {
        // As marbling: how much, and where on the palette — six inks spaced round it.
        const tone = (((index / INKS.length) % 1) + 1) % 1;
        into.set(strength, strength * tone, 0);
        return;
      }
      const at = ((index % INKS.length) + INKS.length) % INKS.length;
      const a = INKS[Math.floor(at)];
      const b = INKS[(Math.floor(at) + 1) % INKS.length];
      const f = at - Math.floor(at);
      into.set((a[0] + (b[0] - a[0]) * f) * strength, (a[1] + (b[1] - a[1]) * f) * strength, (a[2] + (b[2] - a[2]) * f) * strength);
    };

    // The hands: paint where they are, and drag the water as they go.
    const paint = cfg.hands.paint;
    const real = [handData.left, handData.right];
    const any = real[0] || real[1];
    for (let i = 0; i < 2; i++) {
      let at: { x: number; y: number } | null = null;
      let fine = 0;
      let near = 0.35;
      if (any) {
        const hand = real[i];
        if (hand && paint > 0) {
          at = { x: hand.position.x, y: 1 - hand.position.y };
          // A fist, like a pinch, paints fine and dense; an open palm, broad.
          fine = Math.max(hand.pinch ?? 0, hand.openness !== undefined ? Math.max(0, 1 - hand.openness * 1.6) : 0);
          near = hand.depth ?? 0.35;
        }
      } else {
        // Nobody painting: two slow strokes of its own.
        const t = this.real * 0.21 + i * 2.4;
        at = { x: 0.5 + 0.34 * Math.sin(t * (1 + i * 0.37) + i), y: 0.5 + 0.3 * Math.sin(t * 1.31 + 1.7 * i) };
      }
      const before = this.hands[i];
      this.hands[i] = at;
      if (!at) continue;
      const strength = any ? paint : 0.55;
      const radius = (0.022 + 0.05 * near) * wide * (1 - 0.55 * fine);
      this.points[i].set(at.x, at.y, radius);
      if (before && frame > 0) {
        const vx = ((at.x - before.x) * aspect) / frame;
        const vy = (at.y - before.y) / frame;
        const speed = Math.hypot(vx, vy);
        const limit = Math.min(1, 5 / (speed + 1e-4));
        // Enough each frame that the water under the hand soon moves with it.
        this.pushes[i].set(vx * limit * 0.22 * strength, vy * limit * 0.22 * strength, 0);
        // More ink the faster it moves, so a stroke is a stroke and a held hand a soft cloud.
        ink(i === 0 ? shade : shade + 3, (0.5 + Math.min(2.5, speed)) * frame * 5 * amount * strength * (1 + fine), this.inks[i]);
      }
    }

    // A kick: a bloom of ink somewhere along a slow wandering line.
    const kick = Math.max(play.kick, play.bump) * cfg.sound.beat;
    if (kick > 0.45 && this.lastKick <= 0.45) {
      this.blooms++;
      const t = this.blooms * 2.399963;
      const r = 0.12 + 0.24 * ((this.blooms * 0.618034) % 1);
      this.points[2].set(0.5 + (Math.cos(t) * r) / Math.max(1, aspect) * 1.6, 0.5 + Math.sin(t) * r, (0.05 + 0.03 * kick) * wide);
      this.pushes[2].set(0, 0, 0.35 * kick);
      ink(shade + this.blooms * 1.37, 0.55 * amount * Math.min(1.2, kick), this.inks[2]);
    }
    this.lastKick = kick;

    // The hats: fine droplets.
    const hat = play.hat * cfg.sound.drops;
    if (hat > 0.4 && this.lastHat <= 0.4) {
      for (const k of [3, 4]) {
        this.points[k].set(0.08 + 0.84 * Math.random(), 0.1 + 0.8 * Math.random(), 0.011 * wide);
        this.pushes[k].set(0, 0, 0.12);
        if (marble) ink(shade + 2 + k, 0.5 * hat * amount, this.inks[k]);
        else this.inks[k].set(0.5 * hat * amount, 0.55 * hat * amount, 0.6 * hat * amount);
      }
    }
    this.lastHat = hat;

    // A clap, or the drop: a burst from the middle, in two inks at once.
    const burst = (play.clapped ? Math.min(1.5, play.clapStrength * 1.3 * cfg.hands.clap) : 0) || (play.drop > 0.5 && this.lastDrop <= 0.5 ? cfg.sound.beat : 0);
    this.lastDrop = play.drop;
    if (burst > 0) {
      this.points[5].set(0.5, 0.5, 0.15 * wide);
      this.pushes[5].set(0, 0, 1.6 * burst);
      ink(shade + 1, 0.7 * amount * burst, this.inks[5]);
      this.points[6].set(0.5, 0.5, 0.07 * wide);
      ink(shade + 4, 0.9 * amount * burst, this.inks[6]);
    }

    // ── the water ────────────────────────────────────────────────────────
    const m = this.materials;
    const scale = m.advect.uniforms.uScale.value as THREE.Vector2;
    scale.set(1 / aspect, 1);

    // Carry the velocity along itself.
    m.advect.uniforms.uVelocity.value = velocity.read.texture;
    m.advect.uniforms.uSource.value = velocity.read.texture;
    m.advect.uniforms.uDt.value = dt;
    m.advect.uniforms.uFade.value = 0.3;
    this.run(renderer, m.advect, velocity.write);
    this.swap(velocity);

    // Push on it.
    m.force.uniforms.uVelocity.value = velocity.read.texture;
    m.force.uniforms.uAspect.value = aspect;
    m.force.uniforms.uTime.value = this.time;
    m.force.uniforms.uStir.value = 0.05 + 0.35 * play.bass + 0.1 * play.energy;
    m.force.uniforms.uDt.value = dt;
    this.run(renderer, m.force, velocity.write);
    this.swap(velocity);

    // Put back the small eddies.
    m.curl.uniforms.uVelocity.value = velocity.read.texture;
    this.run(renderer, m.curl, this.curl);
    m.vorticity.uniforms.uVelocity.value = velocity.read.texture;
    m.vorticity.uniforms.uCurl.value = this.curl!.texture;
    m.vorticity.uniforms.uAmount.value = 14 * cfg.water.curl * (0.7 + 0.6 * play.energy);
    m.vorticity.uniforms.uDt.value = dt;
    this.run(renderer, m.vorticity, velocity.write);
    this.swap(velocity);

    // Make it neither pile up nor thin out.
    m.divergence.uniforms.uVelocity.value = velocity.read.texture;
    this.run(renderer, m.divergence, this.divergence);
    m.scale.uniforms.uTex.value = pressure.read.texture;
    m.scale.uniforms.uBy.value = 0.8;
    this.run(renderer, m.scale, pressure.write);
    this.swap(pressure);
    m.pressure.uniforms.uDivergence.value = this.divergence!.texture;
    for (let i = 0; i < PRESSURE_STEPS; i++) {
      m.pressure.uniforms.uPressure.value = pressure.read.texture;
      this.run(renderer, m.pressure, pressure.write);
      this.swap(pressure);
    }
    m.gradient.uniforms.uPressure.value = pressure.read.texture;
    m.gradient.uniforms.uVelocity.value = velocity.read.texture;
    this.run(renderer, m.gradient, velocity.write);
    this.swap(velocity);

    // ── the ink ──────────────────────────────────────────────────────────
    m.ink.uniforms.uDye.value = dye.read.texture;
    m.ink.uniforms.uAspect.value = aspect;
    this.run(renderer, m.ink, dye.write);
    this.swap(dye);
    m.advect.uniforms.uVelocity.value = velocity.read.texture;
    m.advect.uniforms.uSource.value = dye.read.texture;
    // A full passage keeps its ink; a breakdown lets the water clear.
    m.advect.uniforms.uFade.value = (0.04 + (1 - cfg.ink.lasting) * 1.4) * (1.35 - 0.7 * play.energy);
    this.run(renderer, m.advect, dye.write);
    this.swap(dye);

    // ── show it ──────────────────────────────────────────────────────────
    const turn = turnFrom(colors);
    if (marble) {
      this.look.update(colors, cfg.look.palette, frame, !this.started);
      this.started = true;
      this.look.apply(this.shared, 0, 0);
      // The colours travel slowly round the palette, and a kick moves them on.
      this.colourTime += (dt * 0.25 + frame * kick * 0.6) / 12;
      m.marble.uniforms.uDye.value = dye.read.texture;
      m.marble.uniforms.uBands.value = cfg.look.bands;
      m.marble.uniforms.uT.value = this.colourTime;
      // The ground: black to stack, or up to the palette's own dark.
      const ground = m.marble.uniforms.uGround.value as THREE.Vector3;
      const k = Math.max(0, Math.min(1, cfg.look.backdrop));
      const [h, sat, l] = hexToHsl(['#1a0d33', '#2a0a0c', '#0b1430', '#070a1c'][Math.max(0, Math.min(3, Math.round(cfg.look.palette)))]);
      const c = new THREE.Color().setHSL((((h + turn.hue) % 360) + 360) % 360 / 360, Math.min(1, sat * turn.sat), l * 1.25);
      const rgb = c.getRGB({ r: 0, g: 0, b: 0 }, THREE.SRGBColorSpace);
      ground.set(rgb.r * k, rgb.g * k, rgb.b * k);
      this.run(renderer, m.marble, null);
    } else {
      m.show.uniforms.uDye.value = dye.read.texture;
      m.show.uniforms.uTurn.value = (turn.hue * Math.PI) / 180;
      m.show.uniforms.uSat.value = Math.min(1.4, turn.sat);
      m.show.uniforms.uExposure.value = 1.5 + 0.5 * play.drop;
      this.run(renderer, m.show, null);
    }

    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.globalAlpha = 1;
    this.ctx.drawImage(this.surface, 0, 0, width, height);
  }
}
