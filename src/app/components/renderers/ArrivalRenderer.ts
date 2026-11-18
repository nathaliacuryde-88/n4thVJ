import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { ArrivalConfig } from '../../config/ArrivalRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { Playing, drawUnavailable, makeRenderer, turnFrom } from './inflated/style';
import { CLOUDS_FRAG, FOG_FRAG, MASK_FRAG, PLANET_FRAG, QUAD_VERT } from './arrival/shaders';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ARRIVAL
 * ═══════════════════════════════════════════════════════════════════════════
 * Between the stars and the ground: three ways of arriving at the planet,
 * one engine (arrival/shaders.ts). All three cut the light into a few flat
 * tones with clean edges, and all can be broken into grain, so they read as
 * prints of weather rather than photographs of it.
 *
 * CLOUDS (0) — falling. Sheets of cloud lie one under another and you drop
 * through them: each opens out from the middle and rushes past the edges as
 * it reaches you. An open hand falls; a fist hovers in the cloud; the hand's
 * place steers, and opens a hole in the nearest sheets to look down through.
 * Each kick is a push down; a clap or the drop tears every sheet open.
 *
 * FOG (1) — a fog over everything, which the hand wipes away as a hand
 * wipes a misted window: the open palm wipes wide, a fist not at all, and
 * the wiped places mist over again, slowly. Wiped, it is black, so a visual
 * layered under it in Screen shows through there. The kick makes it breathe;
 * a clap or the drop clears it all at once, and it closes again.
 *
 * PLANET (2) — the planet from space, from a point in the dark to a horizon
 * across the frame, mostly night with a lit edge, its own aurora round the
 * pole. The open hand, and the hand brought near, take you closer; the fist
 * pulls back; the hand's place turns it. A clap is the sun coming up over
 * the edge. Each kick flares the edge; the music's fullness brings you in.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof ArrivalConfig;

export const ARRIVAL_CLOUDS = 0;
export const ARRIVAL_FOG = 1;
export const ARRIVAL_PLANET = 2;

const MASK_W = 192;

export class ArrivalRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = ArrivalConfig;
  private surface = document.createElement('canvas');
  private renderer: THREE.WebGLRenderer | null = null;
  private failed = false;
  private playing = new Playing(0.6);
  private scene = new THREE.Scene();
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private geometry = new THREE.BufferGeometry();
  private material: THREE.ShaderMaterial;
  private mesh: THREE.Mesh;
  private maskMaterial: THREE.ShaderMaterial | null = null;
  private masks: THREE.WebGLRenderTarget[] = [];
  private maskTurn = 0;

  private time = 0;
  private real = 0;
  private fall = 0;
  private speed = 0;
  private cam = new THREE.Vector2();
  private rip = 0;
  private pulse = 0;
  private near = 0.3;
  private spin = 0;
  private rise = 0;
  private drift = 0;
  private clear = 0;
  private hole = 0;
  private lastKick = 0;
  private lastDrop = 0;
  private was: ({ x: number; y: number } | null)[] = [null, null];

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, private readonly mode: number) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
    const common = () => ({
      uRes: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uHue: { value: 0 },
      uBands: { value: 5 },
      uCover: { value: 0.6 },
      uPulse: { value: 0 },
      uBass: { value: 0 },
      uZoom: { value: 1 },
      uGrain: { value: new THREE.Vector2() },
    });
    const frag = mode === ARRIVAL_FOG ? FOG_FRAG : mode === ARRIVAL_PLANET ? PLANET_FRAG : CLOUDS_FRAG;
    const extra: Record<string, THREE.IUniform> = mode === ARRIVAL_FOG
      ? { uMask: { value: null }, uDrift: { value: 0 } }
      : mode === ARRIVAL_PLANET
        ? { uNear: { value: 0.3 }, uSpin: { value: 0 }, uRise: { value: 0 }, uTilt: { value: new THREE.Vector2() } }
        : { uFall: { value: 0 }, uCam: { value: new THREE.Vector2() }, uHole: { value: new THREE.Vector3() }, uRip: { value: 0 }, uStyle: { value: 0 } };
    this.material = new THREE.ShaderMaterial({
      vertexShader: QUAD_VERT, fragmentShader: frag, uniforms: { ...common(), ...extra }, depthTest: false, depthWrite: false,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.frustumCulled = false;
    this.scene.add(this.mesh);
    if (mode === ARRIVAL_FOG) {
      this.maskMaterial = new THREE.ShaderMaterial({
        vertexShader: QUAD_VERT,
        fragmentShader: MASK_FRAG,
        uniforms: {
          uPrev: { value: null }, uFrom: { value: new THREE.Vector4() }, uTo: { value: new THREE.Vector4() },
          uRadius: { value: new THREE.Vector2() }, uAspect: { value: 16 / 9 }, uReturn: { value: 0 }, uClear: { value: 0 },
        },
        depthTest: false, depthWrite: false,
      });
    }
    try {
      this.renderer = makeRenderer(this.surface);
      this.renderer.setClearColor(0x000000, 1);
    } catch (error) {
      console.error('Arrival could not start:', error);
      this.failed = true;
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(ArrivalConfig, values);
  }

  destroy() {
    for (const m of this.masks) m.dispose();
    this.masks = [];
    this.geometry.dispose();
    this.material.dispose();
    this.maskMaterial?.dispose();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer = null;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { canvas, ctx, cfg } = this;
    const W = canvas.width;
    const H = canvas.height;
    if (!W || !H) return;
    const renderer = this.renderer;
    if (this.failed || !renderer) {
      drawUnavailable(ctx, W, H, 'ARRIVAL');
      return;
    }
    const aspect = W / H;
    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    const step = Math.min(0.08, Math.max(0, play.step));
    const ease = (rate: number) => 1 - Math.exp(-dt * rate);
    this.time += step;
    this.real += dt;
    const hands = [handData.left, handData.right];
    const real = !handData.synthetic && hands.some(Boolean);
    const live = !!audioData?.live;
    const kick = Math.max(play.kick, play.bump) * cfg.sound.beat;
    const kicked = kick > 0.45 && this.lastKick <= 0.45;
    this.lastKick = kick;
    const dropped = play.drop > 0.5 && this.lastDrop <= 0.5;
    this.lastDrop = play.drop;
    const clapped = play.clapped && cfg.hands.clap > 0;
    this.pulse = Math.max(this.pulse * Math.exp(-dt * 5), Math.min(1, kick));
    const tempo = Math.min(4, step / Math.max(dt, 1e-3));

    const u = this.material.uniforms;
    (u.uRes.value as THREE.Vector2).set(W, H);
    u.uTime.value = this.time;
    u.uHue.value = turnFrom(colors).hue;
    u.uBands.value = Math.max(2, Math.min(12, cfg.look.bands));
    u.uCover.value = Math.max(0, Math.min(1, cfg.look.cover));
    u.uPulse.value = this.pulse;
    u.uBass.value = play.bass * cfg.sound.bass;
    u.uZoom.value = Math.max(0.2, cfg.look.zoom);
    (u.uGrain.value as THREE.Vector2).set(Math.max(0, Math.min(1, cfg.look.grain)), Math.floor(this.real * 12) % 997);

    if (this.mode === ARRIVAL_CLOUDS) {
      // How fast you fall: an open hand falls, a fist hovers; or the music's fullness.
      let want = 0.35;
      if (real) want = 0.06 + 1.1 * (1 - play.fist);
      else if (live) want = 0.2 + 0.7 * play.energy + 1.2 * play.build;
      want *= cfg.motion.speed;
      this.speed += (want - this.speed) * ease(2);
      if (kicked) this.speed += 0.5 * cfg.motion.speed;
      if (clapped || dropped) { this.rip = 1; this.speed += 1.2; }
      this.rip = Math.max(0, this.rip - dt * 0.7);
      this.fall += this.speed * dt * Math.max(0.3, tempo) * 0.5;
      // Steering: the hand's place moves you across the clouds.
      this.cam.x += play.aim.x * 0.5 * cfg.hands.reach * dt;
      this.cam.y += play.aim.y * 0.35 * cfg.hands.reach * dt;
      this.hole += ((real ? (1 - play.fist) * Math.min(1, cfg.hands.reach) : 0) - this.hole) * ease(4);
      u.uFall.value = this.fall;
      (u.uCam.value as THREE.Vector2).copy(this.cam);
      (u.uHole.value as THREE.Vector3).set(play.aim.x * aspect / 2, play.aim.y / 2, this.hole);
      u.uRip.value = this.rip;
      u.uStyle.value = cfg.look.style >= 0.5 ? 1 : 0;
    } else if (this.mode === ARRIVAL_PLANET) {
      let want = 0.15 + 0.55 * (0.5 + 0.5 * Math.sin(this.real * 0.05 - 1.5));
      if (real) want = Math.min(1, 0.1 + 0.55 * (1 - play.fist) + Math.max(0, play.depth - 0.3) * 1.3);
      else if (live) want = Math.min(1, 0.12 + 0.45 * play.energy + 0.35 * play.build + 0.4 * play.drop);
      this.near += (want - this.near) * ease(0.6 * Math.max(0.1, cfg.motion.speed));
      this.spin += step * 0.05 + play.aim.x * 0.4 * cfg.hands.reach * dt;
      if (clapped || dropped) this.rise = 1;
      this.rise = Math.max(0, this.rise - dt * 0.35);
      u.uNear.value = this.near;
      u.uSpin.value = this.spin;
      u.uRise.value = this.rise * this.rise * (3 - 2 * this.rise);
      (u.uTilt.value as THREE.Vector2).set(0, 0.35 + play.aim.y * 0.35 * cfg.hands.reach);
    } else {
      this.drift += step * 0.06 * cfg.motion.speed;
      u.uDrift.value = this.drift;
      this.fog(renderer, handData, aspect, dt, clapped || dropped);
    }

    if (this.surface.width !== W || this.surface.height !== H) renderer.setSize(W, H, false);
    renderer.setRenderTarget(null);
    renderer.render(this.scene, this.camera);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.drawImage(this.surface, 0, 0, W, H);
  }

  /** The wiped places: last frame's, misting over, with this frame's strokes on top. */
  private fog(renderer: THREE.WebGLRenderer, handData: HandData, aspect: number, dt: number, clear: boolean) {
    const { cfg } = this;
    const material = this.maskMaterial!;
    const h = Math.max(2, Math.round(MASK_W / aspect));
    if (!this.masks.length || this.masks[0].height !== h) {
      for (const m of this.masks) m.dispose();
      this.masks = [0, 1].map(() => new THREE.WebGLRenderTarget(MASK_W, h, {
        minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false,
      }));
    }
    const mu = material.uniforms;
    const from = mu.uFrom.value as THREE.Vector4;
    const to = mu.uTo.value as THREE.Vector4;
    const radius = mu.uRadius.value as THREE.Vector2;
    const hands = [handData.left, handData.right];
    const synthetic = !!handData.synthetic;
    hands.forEach((hand, k) => {
      if (!hand) { this.was[k] = null; radius.setComponent(k, 0); return; }
      const x = hand.position.x * aspect;
      const y = hand.position.y;
      const prev = this.was[k] ?? { x, y };
      const open = hand.openness ?? (hand.gesture === 'fist' ? 0 : 1);
      // An open palm wipes wide; a closed hand not at all. The stand-in hand wipes gently.
      const r = Math.max(0, (open - 0.25) / 0.75) * (0.06 + 0.12 * open) * cfg.hands.reach * (synthetic ? 0.5 : 1);
      from.setComponent(k * 2, prev.x); from.setComponent(k * 2 + 1, prev.y);
      to.setComponent(k * 2, x); to.setComponent(k * 2 + 1, y);
      radius.setComponent(k, r);
      this.was[k] = { x, y };
    });
    if (clear) this.clear = 1;
    mu.uClear.value = this.clear;
    this.clear = 0;
    // It mists over in about eight seconds at Speed 1.
    mu.uReturn.value = dt * 0.12 * Math.max(0.05, cfg.motion.speed);
    mu.uAspect.value = aspect;
    const read = this.masks[this.maskTurn];
    const write = this.masks[1 - this.maskTurn];
    mu.uPrev.value = read.texture;
    this.mesh.material = material;
    renderer.setRenderTarget(write);
    renderer.render(this.scene, this.camera);
    renderer.setRenderTarget(null);
    this.mesh.material = this.material;
    this.maskTurn = 1 - this.maskTurn;
    this.material.uniforms.uMask.value = write.texture;
  }
}
