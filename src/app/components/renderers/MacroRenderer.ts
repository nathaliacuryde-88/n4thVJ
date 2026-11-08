import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { MacroConfig } from '../../config/MacroRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { Playing, drawUnavailable, makeRenderer, turnFrom } from './inflated/style';
import { MACRO, VERT } from './macro/shaders';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * MACRO
 * ═══════════════════════════════════════════════════════════════════════════
 * Abstractions that read as film rather than illustration: the camera very
 * close to something living. Four, after references she brought:
 *
 *   Ink wing   ink bleeding through a butterfly's wing on wet paper — an
 *              orange rim, a feathered black band, a peach and cyan heart,
 *              an eye near the root, fine veins
 *   Petals     petals so close and out of focus they are mostly colour
 *   Filaments  fine filaments fanning into a dark slit, a void behind
 *   Prism      grey petals and leaves, a prism's rainbow sliding over them
 *
 * All of it domain-warped noise (macro/shaders.ts), so it flows like liquid.
 * The finger count sets the tempo; the wing's root and the slit follow the
 * hand; bass breathes, kicks pulse, a clap floods the prism. The colour
 * panel turns it round the wheel.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof MacroConfig;

export class MacroRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = MacroConfig;
  private surface = document.createElement('canvas');
  private renderer: THREE.WebGLRenderer | null = null;
  private failed = false;
  private scene = new THREE.Scene();
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2);
  private material: THREE.ShaderMaterial;
  private geometry: THREE.BufferGeometry;
  private playing = new Playing(0.6);
  private time = 0;
  private kick = 0;
  private breath = 0;
  private hand = new THREE.Vector3();

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
    this.material = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: MACRO,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uRes: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uReal: { value: 0 },
        uStyle: { value: 0 },
        uFlow: { value: 1 },
        uDetail: { value: 1 },
        uVeins: { value: 1 },
        uGrain: { value: 0.5 },
        uBass: { value: 0 },
        uKick: { value: 0 },
        uBurst: { value: 0 },
        uTurn: { value: 0 },
        uZoom: { value: 1 },
        uHand: { value: new THREE.Vector3() },
      },
    });
    const mesh = new THREE.Mesh(this.geometry, this.material);
    mesh.frustumCulled = false;
    this.scene.add(mesh);
    try {
      this.renderer = makeRenderer(this.surface);
    } catch (error) {
      console.error('Macro could not start:', error);
      this.failed = true;
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(MacroConfig, values);
  }

  destroy() {
    this.geometry.dispose();
    this.material.dispose();
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
      drawUnavailable(this.ctx, width, height, 'MACRO');
      return;
    }
    const { cfg } = this;
    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    this.time += Math.max(0, play.step) * 3;
    this.kick = Math.max(this.kick * Math.exp(-dt * 5), play.bump * cfg.sound.beat);
    this.breath += (play.bass * cfg.sound.bass - this.breath) * (1 - Math.exp(-dt * 3));
    const handed = handData.left || handData.right ? 1 : 0;
    const ease = 1 - Math.exp(-dt * 3);
    this.hand.x += ((play.aim.x + 1) / 2 - this.hand.x) * ease;
    this.hand.y += ((play.aim.y + 1) / 2 - this.hand.y) * ease;
    this.hand.z += (handed * cfg.hands.follow - this.hand.z) * ease;

    const u = this.material.uniforms;
    (u.uRes.value as THREE.Vector2).set(width, height);
    u.uTime.value = this.time;
    u.uReal.value = (performance.now() / 1000) % 1000;
    u.uStyle.value = Math.round(cfg.look.style);
    u.uFlow.value = cfg.look.flow;
    u.uDetail.value = cfg.look.detail;
    u.uVeins.value = cfg.look.veins;
    u.uGrain.value = cfg.look.grain;
    u.uZoom.value = cfg.look.zoom;
    u.uBass.value = this.breath;
    u.uKick.value = this.kick;
    u.uBurst.value = play.burst * cfg.hands.clap;
    u.uTurn.value = (turnFrom(colors).hue * Math.PI) / 180;
    (u.uHand.value as THREE.Vector3).copy(this.hand);

    if (this.surface.width !== width || this.surface.height !== height) renderer.setSize(width, height, false);
    renderer.render(this.scene, this.camera);
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.globalAlpha = 1;
    this.ctx.drawImage(this.surface, 0, 0, width, height);
  }
}
