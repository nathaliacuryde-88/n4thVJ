import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { SmearConfig } from '../../config/SmearRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { Playing, drawUnavailable, makeRenderer, turnFrom } from './inflated/style';
import { SMEAR, SOURCE, VERT } from './smear/shaders';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SMEAR
 * ═══════════════════════════════════════════════════════════════════════════
 * Neither geometric nor organic: soft shapes of colour dragged into long
 * vertical streaks, cut into bands of uneven width that slip a little
 * against each other — a long exposure, a slit scan with the faults left in.
 * After a still of a screen at a show: dark violets, plum, magenta and an
 * olive yellow running down a pale grey ground.
 *
 * Four ways to drag:
 *   Drip     each pixel gathers colour from above it: shapes run downwards
 *   Stretch  above each band's edge the picture as it is; below, the edge
 *            row pulled down and fading into the paper
 *   Bands    shorter drags, the bands shifting further against each other
 *   Melt     the drag bends along a slow flow, like paint running on glass
 *
 * What is smeared: shapes of colour (Paper, as the reference, or Ink on
 * black), the camera, or a clip or picture dropped on its card.
 *
 * The hands: the finger count sets the tempo; the bands under a hand drag
 * longest, and in Stretch the edge follows the hand's height; a clap
 * reshuffles the bands and throws the smear long. The music: bass lengthens
 * the drag, each kick stretches it for a moment. The colour panel turns the
 * shapes round the wheel.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof SmearConfig;

/** The reference's ground and shapes. */
const PAPER = { ground: '#e6e4ea', shapes: ['#2a2848', '#5b2e5e', '#7b62a8', '#c34a7c', '#b5ad4c', '#d6a3c6', '#33505a', '#43355e'] };
/** The same, luminous on black. */
const INK = { ground: '#08080c', shapes: ['#4b46a8', '#9a3e9e', '#b39cf0', '#ff6aa6', '#e2d86a', '#f3c4e6', '#4fa3b5', '#7a5fd0'] };

function rgb(hex: string): THREE.Vector3 {
  const n = parseInt(hex.slice(1), 16);
  return new THREE.Vector3(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
}

export class SmearRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = SmearConfig;
  private surface = document.createElement('canvas');
  private renderer: THREE.WebGLRenderer | null = null;
  private failed = false;
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2);
  private srcScene = new THREE.Scene();
  private smearScene = new THREE.Scene();
  private target: THREE.WebGLRenderTarget;
  private srcMat: THREE.ShaderMaterial;
  private smearMat: THREE.ShaderMaterial;
  private geometry: THREE.BufferGeometry;
  private playing = new Playing(0.6);
  private blank: THREE.DataTexture;

  // What is smeared, besides the shapes.
  private video: HTMLVideoElement | null = null;
  private videoTex: THREE.VideoTexture | null = null;
  private clipUrl: string | null = null;
  private clipEl: HTMLVideoElement | HTMLImageElement | null = null;
  private clipTex: THREE.Texture | null = null;

  private time = 0;
  private seed = 0;
  private kick = 0;
  private breath = 0;
  private lastBurst = 0;
  private hand = new THREE.Vector3();

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.blank = new THREE.DataTexture(new Uint8Array([128, 128, 128, 255]), 1, 1);
    this.blank.needsUpdate = true;
    this.target = new THREE.WebGLRenderTarget(4, 4, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      wrapS: THREE.ClampToEdgeWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
    });
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));

    this.srcMat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: SOURCE,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uRes: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uKind: { value: 0 },
        uCount: { value: 7 },
        uSize: { value: 1 },
        uBreath: { value: 0 },
        uTurn: { value: 0 },
        uInk: { value: 0 },
        uTex: { value: this.blank },
        uTexAspect: { value: new THREE.Vector2(1, 0) },
        uPaper: { value: rgb(PAPER.ground) },
        uCols: { value: PAPER.shapes.map(rgb) },
      },
    });
    this.smearMat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: SMEAR,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uSrc: { value: this.target.texture },
        uRes: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uReal: { value: 0 },
        uStyle: { value: 0 },
        uLength: { value: 0.7 },
        uBands: { value: 14 },
        uSeams: { value: 0.5 },
        uGrain: { value: 0.5 },
        uSeed: { value: 0 },
        uKick: { value: 0 },
        uBurst: { value: 0 },
        uHand: { value: new THREE.Vector3() },
        uPaper: { value: rgb(PAPER.ground) },
        uInk: { value: 0 },
      },
    });
    const src = new THREE.Mesh(this.geometry, this.srcMat);
    const smear = new THREE.Mesh(this.geometry, this.smearMat);
    src.frustumCulled = false;
    smear.frustumCulled = false;
    this.srcScene.add(src);
    this.smearScene.add(smear);
    try {
      this.renderer = makeRenderer(this.surface);
      this.renderer.setClearColor(0x000000, 1);
    } catch (error) {
      console.error('Smear could not start:', error);
      this.failed = true;
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(SmearConfig, values);
  }

  setVideoElement(video: HTMLVideoElement) {
    if (this.video === video) return;
    this.video = video;
    this.videoTex?.dispose();
    this.videoTex = new THREE.VideoTexture(video);
  }

  /** A clip or picture from the library card. */
  setClipUrl(url: string | null, kind: 'video' | 'image' = 'image') {
    if (url === this.clipUrl) return;
    this.clipUrl = url;
    this.clipTex?.dispose();
    this.clipTex = null;
    if (this.clipEl instanceof HTMLVideoElement) this.clipEl.pause();
    this.clipEl = null;
    if (!url) return;
    if (kind === 'video') {
      const v = document.createElement('video');
      v.src = url;
      v.muted = true;
      v.loop = true;
      v.playsInline = true;
      v.play().catch(() => {});
      this.clipEl = v;
      this.clipTex = new THREE.VideoTexture(v);
    } else {
      const img = new Image();
      img.onload = () => {
        if (this.clipEl !== img) return;
        const t = new THREE.Texture(img);
        t.needsUpdate = true;
        this.clipTex = t;
      };
      img.src = url;
      this.clipEl = img;
    }
  }

  destroy() {
    this.geometry.dispose();
    this.srcMat.dispose();
    this.smearMat.dispose();
    this.target.dispose();
    this.blank.dispose();
    this.videoTex?.dispose();
    this.clipTex?.dispose();
    if (this.clipEl instanceof HTMLVideoElement) this.clipEl.pause();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer = null;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;
    const renderer = this.renderer;
    if (this.failed || !renderer) {
      drawUnavailable(this.ctx, width, height, 'SMEAR');
      return;
    }
    const { cfg } = this;
    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    const step = Math.max(0, play.step);
    this.time += step * cfg.source.drift;

    // The kick stretches for a moment; a clap reshuffles the bands.
    this.kick = Math.max(this.kick * Math.exp(-dt * 5), play.bump * cfg.sound.beat);
    this.breath += (play.bass * cfg.sound.bass - this.breath) * (1 - Math.exp(-dt * 4));
    const burst = play.burst * cfg.hands.clap;
    if (burst > 0.6 && this.lastBurst <= 0.6) this.seed += 1;
    this.lastBurst = burst;
    // In Bands the cut moves on each kick, too.
    if (Math.round(cfg.smear.style) === 2 && play.bump > 0.6 && this.kick < play.bump + 0.01) this.seed += 0.37;

    const handed = handData.left || handData.right ? 1 : 0;
    const hx = (play.aim.x + 1) / 2;
    const hy = (play.aim.y + 1) / 2;
    const ease = 1 - Math.exp(-dt * 4);
    this.hand.x += (hx - this.hand.x) * ease;
    this.hand.y += (hy - this.hand.y) * ease;
    this.hand.z += (handed * cfg.hands.follow - this.hand.z) * ease;

    // The source, at half size: it is blurred anyway.
    const sw = Math.max(64, Math.round(width / 2));
    const sh = Math.max(64, Math.round(height / 2));
    if (this.target.width !== sw || this.target.height !== sh) this.target.setSize(sw, sh);

    const ink = Math.round(cfg.source.palette) === 1;
    const palette = ink ? INK : PAPER;
    const kind = Math.round(cfg.source.kind);
    const tex = kind === 1 ? this.videoTex : kind === 2 ? this.clipTex : null;
    const s = this.srcMat.uniforms;
    (s.uRes.value as THREE.Vector2).set(width, height);
    s.uTime.value = this.time;
    s.uKind.value = tex ? kind : 0;
    s.uCount.value = cfg.source.count;
    s.uSize.value = cfg.source.size;
    s.uBreath.value = this.breath;
    s.uTurn.value = (turnFrom(colors).hue * Math.PI) / 180;
    s.uTex.value = tex ?? this.blank;
    const el = kind === 1 ? this.video : this.clipEl;
    const aspect = el instanceof HTMLVideoElement
      ? (el.videoWidth || 16) / (el.videoHeight || 9)
      : el instanceof HTMLImageElement ? (el.naturalWidth || 1) / (el.naturalHeight || 1) : 1;
    (s.uTexAspect.value as THREE.Vector2).set(aspect, kind === 1 ? 1 : 0);
    (s.uPaper.value as THREE.Vector3).copy(rgb(palette.ground));
    s.uCols.value = palette.shapes.map(rgb);

    const m = this.smearMat.uniforms;
    (m.uRes.value as THREE.Vector2).set(width, height);
    m.uTime.value = this.time;
    m.uReal.value = (performance.now() / 1000) % 1000;
    m.uStyle.value = Math.round(cfg.smear.style);
    m.uLength.value = cfg.smear.length * (1 + this.breath * 0.5);
    m.uBands.value = Math.max(1, Math.round(cfg.smear.bands));
    m.uSeams.value = cfg.smear.seams;
    m.uGrain.value = cfg.smear.grain;
    m.uSeed.value = this.seed;
    m.uKick.value = this.kick;
    m.uBurst.value = burst;
    (m.uHand.value as THREE.Vector3).copy(this.hand);
    (m.uPaper.value as THREE.Vector3).copy(rgb(palette.ground));

    if (this.surface.width !== width || this.surface.height !== height) renderer.setSize(width, height, false);
    renderer.setRenderTarget(this.target);
    renderer.render(this.srcScene, this.camera);
    renderer.setRenderTarget(null);
    renderer.render(this.smearScene, this.camera);
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.globalAlpha = 1;
    this.ctx.drawImage(this.surface, 0, 0, width, height);
  }
}
