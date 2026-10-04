import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { WatercolourConfig } from '../../config/WatercolourRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { InflatedLook, LOOP, MotifHost, Playing, drawUnavailable, makeRenderer } from './inflated/style';
import { DROPS, Drop, SkyLayer, WATERCOLOUR } from './sky/SkyLayer';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * WATERCOLOUR SKY
 * ═══════════════════════════════════════════════════════════════════════════
 * Washes of pigment glazed over paper in the nature family's palettes (see
 * sky/SkyLayer.ts), drifting slowly, made to sit softly behind the flowers,
 * butterflies and the rest.
 *
 * The hands: the fingers set how fast the washes drift through the shared
 * clock; a hand pushes the wet paint aside as if blowing on it; a clap
 * splashes fresh drops where the hand is. The music: kicks drop paint that
 * blooms open across the paper, bass swells the washes, melody moves the
 * colour along.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof WatercolourConfig;

export class WatercolourRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = WatercolourConfig;
  private readonly host: MotifHost | null;
  private surface = document.createElement('canvas');
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene;
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2);
  private look: InflatedLook;
  readonly sky: SkyLayer;
  private playing = new Playing(0.6);
  private failed = false;
  private started = false;
  private time = 0;
  private colourTime = 0;
  private wind = new THREE.Vector2();
  private handOn = 0;
  private drops: Drop[] = [];
  private seed = 0;
  private lastBeat = false;
  private lastClap = false;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, host: MotifHost | null = null) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.host = host;
    this.scene = host ? host.scene : new THREE.Scene();
    this.look = host ? host.look : new InflatedLook();
    this.sky = new SkyLayer(WATERCOLOUR, this.look);
    this.scene.add(this.sky.mesh);
    if (!host) {
      try {
        this.renderer = makeRenderer(this.surface);
      } catch (error) {
        console.error('Watercolour Sky could not start:', error);
        this.failed = true;
      }
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(WatercolourConfig, values);
  }

  destroy() {
    this.scene.remove(this.sky.mesh);
    this.sky.dispose();
    if (!this.host) this.look.dispose();
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
      drawUnavailable(this.ctx, width, height, 'WATERCOLOUR');
      return;
    }
    this.update(handData, colors, audioData, width, height);
    if (this.surface.width !== width || this.surface.height !== height) renderer.setSize(width, height, false);
    renderer.render(this.scene, this.camera);
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.globalAlpha = 1;
    this.ctx.drawImage(this.surface, 0, 0, width, height);
  }

  /** One frame of the sky: its uniforms written, nothing drawn. */
  update(handData: HandData, colors: string[], audioData: AudioData | undefined, width: number, height: number) {
    const { cfg, sky } = this;
    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    const step = Math.max(0, play.step);
    const first = !this.started;
    this.started = true;
    if (!this.host) this.look.update(colors, cfg.colour.palette, dt, first);
    this.time += step;
    this.colourTime += (step * cfg.colour.speed * (1 + play.mid * cfg.sound.mid * 1.2)) / LOOP;
    // The washes drift along on a slow breeze that wanders.
    const drift = cfg.paint.drift * 0.05;
    this.wind.x += step * drift * (1 + 0.4 * Math.sin(this.time * 0.07));
    this.wind.y += step * drift * 0.3 * Math.sin(this.time * 0.05 + 1.3);
    const handed = handData.left || handData.right ? 1 : 0;
    this.handOn += (handed - this.handOn) * (1 - Math.exp(-dt * 3));
    const aspect = width / height;
    const hx = ((play.aim.x + 1) / 2) * aspect;
    const hy = 0.5 + play.aim.y / 2;

    // Drops: a kick may drop fresh paint somewhere; a clap splashes a few
    // where the hand is. Each blooms open and slowly fades into the paper.
    for (const d of this.drops) d.age += dt;
    this.drops = this.drops.filter((d) => d.age < 30);
    const beat = !!audioData?.beat;
    if (beat && !this.lastBeat && Math.random() < cfg.paint.drops * cfg.sound.beat * 0.6) {
      this.addDrop(Math.random() * aspect, 0.15 + Math.random() * 0.75);
    }
    this.lastBeat = beat;
    const clap = !!handData.clapping && cfg.hands.clap > 0;
    if (clap && !this.lastClap) {
      const n = Math.max(1, Math.round(3 * Math.min(1.5, cfg.hands.clap)));
      for (let i = 0; i < n; i++) {
        this.addDrop((handed ? hx : aspect / 2) + (Math.random() - 0.5) * 0.4, (handed ? hy : 0.5) + (Math.random() - 0.5) * 0.3);
      }
    }
    this.lastClap = clap;

    sky.set('uTime', this.time);
    (sky.uniforms.uRes.value as THREE.Vector2).set(width, height);
    (sky.uniforms.uWind.value as THREE.Vector2).copy(this.wind);
    (sky.uniforms.uHand.value as THREE.Vector3).set(hx, hy, this.handOn * cfg.hands.push);
    sky.set('uWet', cfg.paint.wet);
    sky.set('uSwell', play.bass * cfg.sound.bass);
    sky.set('uPaper', cfg.paint.paper);
    sky.set('uWashes', Math.max(1, Math.min(3, Math.round(cfg.paint.washes))));
    sky.colour(this.look, this.colourTime, cfg.colour.offset);
    sky.setDrops(this.drops);
  }

  private addDrop(x: number, y: number) {
    this.drops.push({ x, y, age: 0, seed: (this.seed++ * 0.137) % 1 });
    if (this.drops.length > DROPS) this.drops.shift();
  }
}
