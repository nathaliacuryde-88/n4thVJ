import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { DreamConfig } from '../../config/DreamRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { Playing, drawUnavailable, makeRenderer, turnFrom } from './inflated/style';
import { SCENES, VERT } from './dream/shaders';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DREAMSCAPE
 * ═══════════════════════════════════════════════════════════════════════════
 * Airbrushed, grainy, a little mystic: illustration in the manner of spray
 * paint and risograph, drawn live (see dream/shaders.ts). Four scenes:
 *
 *   Clouds   cumulus with flat bases and streamers, lit by a teal moon
 *   Hills    rows of rolling hills flown over, mist in the valleys, a path
 *   Valley   a rainbow over pastel mountains, a river winding down to us
 *   Spray    rainbow arcs sprayed in bands, a stippled figure in front
 *
 * And her own picture: drop one on the card in the library — a horse, a
 * drawing, a figure, a transparent PNG best of all — and it is cut out and
 * repainted in whichever scene is up, in that scene's colours, its edge
 * dissolving into spray. Among the clouds it floats; in the hills it stands
 * on the path; in the Spray scene it is the subject.
 *
 * The hands: the finger count sets the tempo through the shared clock; the
 * moon, the path and the picture turn toward a hand; a clap bursts — the
 * sparkles flare, a wave rolls up the hills, the picture blows apart into
 * spray and gathers again. The music: each kick makes the clouds breathe,
 * the hills bounce and a ring run out through the arcs; bass makes the light
 * glow and the rainbow breathe; melody speeds the drift; the hats make the
 * sparkles twinkle. The colour panel turns the whole palette round the wheel.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof DreamConfig;

/** Each scene's colours for her picture, shadow to light. */
const FIGURE_COLOURS: string[][] = [
  ['#3f86c8', '#7fb6e2', '#e9eedf', '#fffbe8'], // clouds: a cloud spirit
  ['#0a3f9e', '#2d7fcc', '#bfdc68', '#f2f8d8'], // hills
  ['#7a6cb8', '#d9a6c8', '#a8dcc4', '#fff6e6'], // valley: pastel
  ['#123e8c', '#248ba7', '#eab4aa', '#fbe8e0'], // spray: pink and blue
];

/** Where her picture stands in each scene, and how tall (half height, frame units). */
const FIGURE_PLACE: { x: number; y: number; h: number }[] = [
  { x: 0.2, y: 0.06, h: 0.2 },
  { x: 0, y: -0.2, h: 0.15 },
  { x: 0, y: -0.04, h: 0.17 },
  { x: -0.04, y: 0, h: 0.4 },
];

/** The whole picture, in texture space. */
const WHOLE = new THREE.Vector4(0, 0, 1, 1);

/** A hex colour as the shader writes it: straight sRGB. */
function rgb(hex: string): THREE.Vector3 {
  const n = parseInt(hex.slice(1), 16);
  return new THREE.Vector3(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
}

export class DreamRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = DreamConfig;
  private surface = document.createElement('canvas');
  private renderer: THREE.WebGLRenderer | null = null;
  private scene = new THREE.Scene();
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2);
  private mesh: THREE.Mesh;
  private uniforms: Record<string, THREE.IUniform>;
  /** One material per scene, built the first time the scene is shown. */
  private materials: (THREE.ShaderMaterial | null)[] = SCENES.map(() => null);
  private playing = new Playing(0.6);
  private failed = false;

  // Her picture.
  private url: string | null = null;
  private image: HTMLImageElement | null = null;
  private figure: THREE.Texture | null = null;
  /** The whole picture's shape, and the cut-out's: its box and its range of light. */
  private figureAspect = 1;
  private cutAspect = 1;
  private cutBox = new THREE.Vector4(0, 0, 1, 1);
  private lumRange = new THREE.Vector4(0, 1, 0, 1);
  private blank: THREE.DataTexture;

  // Motion.
  private time = 0;
  private drift = 0;
  private fly = 0;
  private flow = 0;
  private pulse = 0;
  private breath = 0;
  private wave = 30;
  private waveAmp = 0;
  private ring = 3;
  private ringAmp = 0;
  private lastBurst = 0;
  private sun = new THREE.Vector2(0.3, 0.22);
  private aim = new THREE.Vector2();
  private handOn = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.blank = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1);
    this.blank.needsUpdate = true;
    this.uniforms = {
      uRes: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uReal: { value: 0 },
      uSeed: { value: 0 },
      uGrain: { value: 1 },
      uSparkle: { value: 0.5 },
      uTwinkle: { value: 0 },
      uFlash: { value: 0 },
      uPulse: { value: 0 },
      uBass: { value: 0 },
      uHue: { value: 0 },
      uSat: { value: 1 },
      uHand: { value: new THREE.Vector3() },
      uFig: { value: this.blank },
      uFigRect: { value: new THREE.Vector4(0, 0, 0.2, 0.2) },
      uFigCrop: { value: new THREE.Vector4(0, 0, 1, 1) },
      uFigLum: { value: new THREE.Vector4(0, 1, 0, 1) },
      uFigCut: { value: 1 },
      uFigOn: { value: 0 },
      uFigDissolve: { value: 0 },
      uFigA: { value: new THREE.Vector3() },
      uFigB: { value: new THREE.Vector3() },
      uFigC: { value: new THREE.Vector3() },
      uFigD: { value: new THREE.Vector3() },
      // Clouds
      uDrift: { value: 0 },
      uAmount: { value: 0.65 },
      uCloudSize: { value: 1 },
      uGlow: { value: 0.8 },
      uSun: { value: new THREE.Vector2(0.3, 0.22) },
      uPan: { value: new THREE.Vector2() },
      // Hills
      uFly: { value: 0 },
      uSteer: { value: 0 },
      uMist: { value: 0.85 },
      uWave: { value: 30 },
      uWaveAmp: { value: 0 },
      uPathOn: { value: 1 },
      // Valley
      uRainbow: { value: 1 },
      uFlowRiver: { value: 0 },
      uRiverOn: { value: 1 },
      uBreath: { value: 0 },
      uPanX: { value: 0 },
      // Spray
      uRing: { value: 3 },
      uRingAmp: { value: 0 },
    };
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
    this.mesh = new THREE.Mesh(geometry, this.materialFor(0));
    this.mesh.frustumCulled = false;
    this.scene.add(this.mesh);
    try {
      this.renderer = makeRenderer(this.surface);
    } catch (error) {
      console.error('Dreamscape could not start:', error);
      this.failed = true;
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(DreamConfig, values);
  }

  /** Her picture, from the library card. Stills only: a video is not a figure. */
  setClipUrl(url: string | null, kind: 'video' | 'image' = 'image') {
    if (url === this.url) return;
    this.url = url;
    this.image = null;
    this.figure?.dispose();
    this.figure = null;
    if (!url || kind !== 'image') return;
    const image = new Image();
    image.onload = () => {
      if (this.image !== image) return;
      try {
        this.buildFigure(image);
      } catch (error) {
        console.error('Dreamscape could not read the picture:', error);
      }
    };
    image.src = url;
    this.image = image;
  }

  destroy() {
    this.scene.remove(this.mesh);
    this.mesh.geometry.dispose();
    for (const m of this.materials) m?.dispose();
    this.figure?.dispose();
    this.blank.dispose();
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
      drawUnavailable(this.ctx, width, height, 'DREAMSCAPE');
      return;
    }
    this.update(handData, colors, audioData, width, height);
    if (this.surface.width !== width || this.surface.height !== height) renderer.setSize(width, height, false);
    renderer.render(this.scene, this.camera);
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.globalAlpha = 1;
    this.ctx.drawImage(this.surface, 0, 0, width, height);
  }

  private materialFor(kind: number): THREE.ShaderMaterial {
    let m = this.materials[kind];
    if (!m) {
      m = new THREE.ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: SCENES[kind],
        uniforms: this.uniforms,
        depthTest: false,
        depthWrite: false,
      });
      this.materials[kind] = m;
    }
    return m;
  }

  private update(handData: HandData, colors: string[], audioData: AudioData | undefined, width: number, height: number) {
    const { cfg, uniforms: u } = this;
    const kind = Math.max(0, Math.min(SCENES.length - 1, Math.round(cfg.scene.kind)));
    this.mesh.material = this.materialFor(kind);

    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    const step = Math.max(0, play.step);
    const aspect = width / height;
    const speed = cfg.scene.speed;
    const melody = 1 + play.mid * cfg.sound.mid * 0.8;

    // The clock — the finger count's tempo — moves everything, the melody more.
    this.time += step;
    this.drift += step * 0.035 * speed * melody;
    this.fly += step * 0.45 * speed * melody;
    this.flow += step * 0.09 * speed * melody;

    // The kick: a breath through the clouds, a bounce through the hills, a ring through the arcs.
    const kick = audioData?.beat ? (audioData.beatIntensity || 1) * cfg.sound.beat : 0;
    this.pulse = Math.max(this.pulse * Math.exp(-dt * 6), kick);
    if (kick > 0.2 && this.ring > 1.3) {
      this.ring = 0.55;
      this.ringAmp = Math.min(1.5, kick);
    }
    this.ring += dt * 1.1;
    this.ringAmp *= Math.exp(-dt * 1.2);

    // A clap: a wave rolls up the hills from the front.
    const burst = play.burst * cfg.hands.clap;
    if (burst > 0.6 && this.lastBurst <= 0.6) {
      this.wave = -0.5;
      this.waveAmp = Math.min(1.6, burst);
    }
    this.lastBurst = burst;
    this.wave += dt * 9;
    this.waveAmp *= Math.exp(-dt * 0.5);

    this.breath += (play.bass * cfg.sound.bass - this.breath) * (1 - Math.exp(-dt * 5));
    const flash = Math.max(burst, this.pulse * 0.35);

    // The hand: the moon follows it, the path steers to it, the picture leans to it.
    const handed = handData.left || handData.right ? 1 : 0;
    this.handOn += (handed - this.handOn) * (1 - Math.exp(-dt * 3));
    const follow = cfg.hands.follow * this.handOn;
    const ease = 1 - Math.exp(-dt * 2.5);
    this.aim.x += (play.aim.x * follow - this.aim.x) * ease;
    this.aim.y += (play.aim.y * follow - this.aim.y) * ease;
    const real = performance.now() / 1000;
    const restX = 0.3 * aspect + Math.sin(real * 0.05) * 0.05;
    const restY = 0.22 + Math.cos(real * 0.04) * 0.03;
    const sunX = handed ? play.aim.x * 0.45 * aspect : restX;
    const sunY = handed ? 0.05 + play.aim.y * 0.35 : restY;
    this.sun.x += (sunX - this.sun.x) * (1 - Math.exp(-dt * 1.5 * Math.max(0.2, cfg.hands.follow)));
    this.sun.y += (sunY - this.sun.y) * (1 - Math.exp(-dt * 1.5 * Math.max(0.2, cfg.hands.follow)));

    (u.uRes.value as THREE.Vector2).set(width, height);
    u.uTime.value = this.time;
    u.uReal.value = real % 1000;
    u.uSeed.value = Math.floor(real * 12) % 113;
    u.uGrain.value = cfg.scene.grain;
    u.uSparkle.value = Math.min(1, cfg.scene.sparkles * (1 + flash * 0.9));
    u.uTwinkle.value = play.high * cfg.sound.high;
    u.uFlash.value = flash;
    u.uPulse.value = this.pulse;
    u.uBass.value = this.breath;
    const turn = turnFrom(colors);
    u.uHue.value = turn.hue;
    u.uSat.value = Math.min(1.4, turn.sat);
    (u.uHand.value as THREE.Vector3).set(this.aim.x, this.aim.y, this.handOn);

    // Clouds
    u.uDrift.value = this.drift;
    u.uAmount.value = cfg.clouds.amount;
    u.uCloudSize.value = cfg.clouds.size;
    u.uGlow.value = cfg.clouds.glow * (1 + this.breath * 0.4);
    (u.uSun.value as THREE.Vector2).copy(this.sun);
    (u.uPan.value as THREE.Vector2).set(this.aim.x * 0.08, this.aim.y * 0.04);
    // Hills
    u.uFly.value = this.fly;
    u.uSteer.value = this.aim.x * 0.25;
    u.uMist.value = cfg.hills.mist * (1 + this.breath * 0.15);
    u.uWave.value = this.wave;
    u.uWaveAmp.value = this.waveAmp;
    u.uPathOn.value = cfg.hills.path >= 0.5 ? 1 : 0;
    // Valley
    u.uRainbow.value = cfg.valley.rainbow;
    u.uFlowRiver.value = this.flow;
    u.uRiverOn.value = cfg.valley.river >= 0.5 ? 1 : 0;
    u.uBreath.value = this.breath;
    u.uPanX.value = this.aim.x * 0.15;
    // Spray
    u.uRing.value = this.ring;
    u.uRingAmp.value = this.ringAmp;

    // Her picture, in this scene's place and colours.
    const place = FIGURE_PLACE[kind];
    const colours = FIGURE_COLOURS[kind];
    const h = place.h * cfg.figure.size;
    const bob = Math.sin(this.time * 0.7) * 0.012;
    const cx = (place.x + (kind === 0 ? 0.1 * (aspect - 1) : 0)) + this.aim.x * 0.12;
    const cy = place.y + cfg.figure.height * 0.3 + bob + this.aim.y * 0.06;
    const cut = cfg.figure.cutout >= 0.5;
    const shape = cut ? this.cutAspect : this.figureAspect;
    (u.uFigRect.value as THREE.Vector4).set(cx, cy, h * shape, h);
    (u.uFigCrop.value as THREE.Vector4).copy(cut ? this.cutBox : WHOLE);
    (u.uFigLum.value as THREE.Vector4).copy(this.lumRange);
    u.uFigCut.value = cut ? 1 : 0;
    u.uFigOn.value = this.figure && h > 0.001 ? 1 : 0;
    u.uFig.value = this.figure ?? this.blank;
    u.uFigDissolve.value = Math.min(1.5, cfg.figure.dissolve * 0.6 + burst * 0.9);
    (u.uFigA.value as THREE.Vector3).copy(rgb(colours[0]));
    (u.uFigB.value as THREE.Vector3).copy(rgb(colours[1]));
    (u.uFigC.value as THREE.Vector3).copy(rgb(colours[2]));
    (u.uFigD.value as THREE.Vector3).copy(rgb(colours[3]));
  }

  /**
   * Her picture, read once: what stands out from its background — its own
   * transparency if it has any, otherwise what differs from the colour round
   * its edges — and where that sits. Packed as three channels over the whole
   * picture: its light (red), the cut-out (green), and a wide soft glow of the
   * cut-out (blue); with the cut-out's box, and the range of light inside it
   * and across the whole, so either can use the full palette.
   */
  private buildFigure(image: HTMLImageElement) {
    const MAX = 512;
    const scale = MAX / Math.max(image.naturalWidth, image.naturalHeight);
    const w = Math.max(2, Math.round(image.naturalWidth * scale));
    const h = Math.max(2, Math.round(image.naturalHeight * scale));
    const read = document.createElement('canvas');
    read.width = w;
    read.height = h;
    const g = read.getContext('2d', { willReadFrequently: true })!;
    g.drawImage(image, 0, 0, w, h);
    const src = g.getImageData(0, 0, w, h).data;

    let transparent = false;
    for (let i = 3; i < src.length; i += 4) {
      if (src[i] < 245) { transparent = true; break; }
    }
    const at = (x: number, y: number) => (y * w + x) * 4;
    const away = (i: number, j: number) =>
      Math.hypot(src[i] - src[j], src[i + 1] - src[j + 1], src[i + 2] - src[j + 2]) / 255;
    const mask = new Float32Array(w * h);
    const lum = new Float32Array(w * h);
    let x0 = w, y0 = h, x1 = 0, y1 = 0;
    for (let p = 0; p < w * h; p++) {
      const i = p * 4;
      lum[p] = (0.299 * src[i] + 0.587 * src[i + 1] + 0.114 * src[i + 2]) / 255;
      let m: number;
      if (transparent) {
        m = src[i + 3] / 255;
      } else {
        const x = p % w;
        const y = (p / w) | 0;
        const d = Math.min(away(i, at(0, y)), away(i, at(w - 1, y)), away(i, at(x, 0)), away(i, at(x, h - 1)));
        const t = Math.min(1, Math.max(0, (d / 0.6 - 0.22) / 0.2));
        m = t * t * (3 - 2 * t);
      }
      mask[p] = m;
      if (m > 0.4) {
        const x = p % w;
        const y = (p / w) | 0;
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
    }
    if (x1 <= x0 || y1 <= y0) { x0 = 0; y0 = 0; x1 = w - 1; y1 = h - 1; }
    // A little room round the subject for the glow and the dissolving edge.
    const margin = Math.round(Math.max(x1 - x0, y1 - y0) * 0.08);
    x0 = Math.max(0, x0 - margin);
    y0 = Math.max(0, y0 - margin);
    x1 = Math.min(w - 1, x1 + margin);
    y1 = Math.min(h - 1, y1 + margin);

    // The range of light — within the cut-out, and across the whole picture.
    const range = (inside: (p: number) => boolean): [number, number] => {
      const hist = new Uint32Array(256);
      let count = 0;
      for (let p = 0; p < w * h; p++) {
        if (!inside(p)) continue;
        hist[Math.min(255, Math.round(lum[p] * 255))]++;
        count++;
      }
      if (count < 50) return [0, 1];
      let lo = 0;
      let hi = 1;
      let acc = 0;
      for (let v = 0; v < 256; v++) { acc += hist[v]; if (acc >= count * 0.03) { lo = v / 255; break; } }
      acc = 0;
      for (let v = 255; v >= 0; v--) { acc += hist[v]; if (acc >= count * 0.03) { hi = v / 255; break; } }
      if (hi - lo < 0.1) { lo = Math.max(0, lo - 0.05); hi = Math.min(1, hi + 0.05); }
      return [lo, hi];
    };
    const [cutLo, cutHi] = range((p) => mask[p] > 0.5);
    const [allLo, allHi] = range(() => true);

    // The cut-out alone, to blur for the edge and the glow.
    const cutCanvas = document.createElement('canvas');
    cutCanvas.width = w;
    cutCanvas.height = h;
    const cg = cutCanvas.getContext('2d')!;
    const cutData = cg.createImageData(w, h);
    for (let p = 0; p < w * h; p++) {
      cutData.data[p * 4] = 255;
      cutData.data[p * 4 + 1] = 255;
      cutData.data[p * 4 + 2] = 255;
      cutData.data[p * 4 + 3] = Math.round(mask[p] * 255);
    }
    cg.putImageData(cutData, 0, 0);
    const blurred = (radius: number) => {
      const c = document.createElement('canvas');
      c.width = w;
      c.height = h;
      const bg = c.getContext('2d', { willReadFrequently: true })!;
      bg.filter = `blur(${radius}px)`;
      bg.drawImage(cutCanvas, 0, 0);
      return bg.getImageData(0, 0, w, h).data;
    };
    const span = Math.max(x1 - x0, y1 - y0);
    const edge = blurred(Math.max(1, span / 260));
    const glow = blurred(Math.max(4, span / 18));

    const out = document.createElement('canvas');
    out.width = w;
    out.height = h;
    const og = out.getContext('2d')!;
    const packed = og.createImageData(w, h);
    for (let p = 0; p < w * h; p++) {
      const o = p * 4;
      packed.data[o] = Math.round(lum[p] * 255);
      packed.data[o + 1] = edge[o + 3];
      packed.data[o + 2] = glow[o + 3];
      packed.data[o + 3] = 255;
    }
    og.putImageData(packed, 0, 0);

    const texture = new THREE.CanvasTexture(out);
    texture.colorSpace = THREE.NoColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;
    this.figure?.dispose();
    this.figure = texture;
    this.figureAspect = w / h;
    this.cutAspect = (x1 - x0 + 1) / (y1 - y0 + 1);
    // The texture's rows run bottom up.
    this.cutBox.set(x0 / w, 1 - (y1 + 1) / h, (x1 + 1) / w, 1 - y0 / h);
    this.lumRange.set(cutLo, cutHi, allLo, allHi);
  }
}
