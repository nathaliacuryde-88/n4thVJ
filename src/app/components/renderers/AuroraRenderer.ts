import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { AuroraConfig } from '../../config/AuroraRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { MotifHost, Playing, drawUnavailable, makeRenderer, turnFrom } from './inflated/style';
import { AURORA, SkyLayer } from './sky/SkyLayer';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * AURORA
 * ═══════════════════════════════════════════════════════════════════════════
 * Curtains of light folding over a night sky (see sky/SkyLayer.ts), made to
 * sit softly behind the nature family.
 *
 * The hands: the fingers set the tempo of the folding through the shared
 * clock; a curtain lifts toward a hand and burns brighter round it; a clap
 * flares the whole sky. The music: each kick flares it, bass brightens and
 * raises the curtains, melody folds them faster, the hats make the rays
 * shiver. The colour panel turns the greens and violets round the wheel.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof AuroraConfig;

export class AuroraRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = AuroraConfig;
  private readonly host: MotifHost | null;
  private surface = document.createElement('canvas');
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene;
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2);
  readonly sky: SkyLayer;
  private playing = new Playing(0.6);
  private failed = false;
  private time = 0;
  private flare = 0;
  private handOn = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, host: MotifHost | null = null) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.host = host;
    this.scene = host ? host.scene : new THREE.Scene();
    this.sky = new SkyLayer(AURORA, null);
    this.scene.add(this.sky.mesh);
    if (!host) {
      try {
        this.renderer = makeRenderer(this.surface);
      } catch (error) {
        console.error('Aurora could not start:', error);
        this.failed = true;
      }
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(AuroraConfig, values);
  }

  destroy() {
    this.scene.remove(this.sky.mesh);
    this.sky.dispose();
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
      drawUnavailable(this.ctx, width, height, 'AURORA');
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
    this.time += step * (1 + play.mid * cfg.sound.mid * 1.5);
    this.flare = Math.max(this.flare * Math.exp(-dt * 2.5), play.bump * cfg.sound.beat * 0.6, play.burst * cfg.hands.clap);
    const handed = handData.left || handData.right ? 1 : 0;
    this.handOn += (handed - this.handOn) * (1 - Math.exp(-dt * 3));
    const aspect = width / height;

    sky.set('uTime', this.time);
    (sky.uniforms.uRes.value as THREE.Vector2).set(width, height);
    sky.set('uHue', turnFrom(colors).hue);
    sky.set('uCurtains', Math.max(1, Math.min(4, Math.round(cfg.sky.curtains))));
    sky.set('uHeight', cfg.sky.height + play.bass * cfg.sound.bass * 0.4);
    sky.set('uBright', cfg.sky.brightness * (0.85 + play.bass * cfg.sound.bass * 0.5));
    sky.set('uShimmer', play.high * cfg.sound.high);
    sky.set('uNight', cfg.sky.night);
    sky.set('uFlare', this.flare);
    (sky.uniforms.uHand.value as THREE.Vector3).set(
      ((play.aim.x + 1) / 2) * aspect, 0.5 + play.aim.y / 2, this.handOn * cfg.hands.follow);
  }
}
