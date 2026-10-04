import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { BloomFieldConfig } from '../../config/BloomFieldRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { disposeThree } from './disposeThree';
import {
  CORE, InflatedLook, LOBE, LOOP, MotifHost, Playing, Shared, TAU, TUBE,
  drawBackdrop, drawUnavailable, frameCamera, makeRenderer,
} from './inflated/style';
import { Tube } from './inflated/Tube';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * BLOOM FIELD
 * ═══════════════════════════════════════════════════════════════════════════
 * Five always-open, inflated flowers swaying on a studio backdrop, their colour
 * flowing round a looping palette.
 *
 * The look — palette, shader, backdrop, camera — is the inflated style, shared
 * with every motif in the family (see inflated/style.ts), so this can be
 * stacked with the others and read as one world.
 *
 * The hands, by the same rule as every other visual:
 *   - the finger count sets the tempo (through the shared clock) and also the
 *     pose: one finger closes the heads into cups, five opens them flat;
 *   - a clap throws every petal open and races the colour, then settles;
 *   - moving a hand swings the camera round the field; spreading two hands
 *     brings it in.
 * And the music: each kick fattens the heads for a fifth of a second, bass
 * deepens the bob, melody speeds the colour, and the hats lift the stamens and
 * the highlights. All of it eased, so the flowers sway with the music rather
 * than flinch at it.
 * ═══════════════════════════════════════════════════════════════════════════
 */

const N_PETALS = 13;

/**
 * How open the heads sit with no hands in view: the reel's cup exactly.
 *
 * Openness runs 0 (a fist, cups closed) to 1 (five fingers, flat open), and
 * the petal tilt is -0.85 + 0.9 × openness — so the reel's -0.36 is here.
 */
const REST_OPEN = 0.49 / 0.9;

type Cfg = typeof BloomFieldConfig;

/**
 * The flowers, in the order they join the field as the count goes up.
 *
 * The first five are the reel's. A count below five takes the subset that
 * stays balanced rather than the first few, so three is left, centre and
 * right, not three bunched on the left.
 */
interface Flower {
  x: number; z: number; h: number; s: number;
  off: number; ph: number; roll: number;
}
const FLOWERS: Flower[] = [
  { x: -5.05, z: -0.8, h: 1.35, s: 0.86, off: 0.00, ph: 0.00, roll: 0.22 },
  { x: -2.5, z: 0.7, h: -0.55, s: 0.80, off: 0.37, ph: 1.70, roll: -0.10 },
  { x: 0.10, z: -0.3, h: 1.75, s: 0.94, off: 0.71, ph: 3.30, roll: 0.05 },
  { x: 2.65, z: 0.9, h: 0.25, s: 0.80, off: 0.18, ph: 4.60, roll: 0.12 },
  { x: 5.05, z: -0.5, h: 1.05, s: 0.88, off: 0.55, ph: 2.40, roll: -0.24 },
  // Two more, set back between the others.
  { x: -3.8, z: -2.6, h: 2.35, s: 0.72, off: 0.86, ph: 5.30, roll: -0.16 },
  { x: 3.85, z: -2.4, h: 2.15, s: 0.74, off: 0.28, ph: 0.90, roll: 0.18 },
];
const SHOWN: number[][] = [
  [], [2], [1, 3], [0, 2, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5, 6],
];

// ── one flower ───────────────────────────────────────────────────────────────

interface Bloom {
  spec: Flower;
  head: THREE.Group;
  ring: THREE.Group;
  tilts: THREE.Group[];
  petals: THREE.Mesh[];
  core: THREE.Mesh;
  stamens: THREE.Mesh[];
  stem: Tube;
  /** Head and petals share these, so a flower is one set of writes per frame. */
  shared: Shared;
  stemShared: Shared;
  /** 0 when it is out of the field, 1 when fully grown. Eased. */
  presence: number;
}

// ── the renderer ─────────────────────────────────────────────────────────────

export class BloomFieldRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = BloomFieldConfig;

  private surface: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer | null = null;
  private readonly host: MotifHost | null;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  /** Everything of the field, so a host can place it in its world. */
  readonly group = new THREE.Group();
  private flowers: Bloom[] = [];
  private geometries: THREE.BufferGeometry[] = [];
  private failed = false;
  private look: InflatedLook | null = null;
  private playing = new Playing(REST_OPEN);

  /** Motion and colour run on clocks of their own, so their speeds can change without a jump. */
  private motionTime = 0;
  private colourTime = 0;

  /**
   * Whether a frame has been drawn yet. The saved settings arrive after the
   * constructor, so the first frame takes them as they are — a set that opens
   * on three flowers and the third palette should not open by watching two
   * flowers sink and the colours fade across.
   */
  private started = false;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, host: MotifHost | null = null) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.host = host;
    this.scene = host ? host.scene : new THREE.Scene();
    this.camera = host ? host.camera : new THREE.PerspectiveCamera(30, 16 / 9, 0.1, 100);
    this.surface = document.createElement('canvas');
    try {
      this.init();
    } catch (error) {
      console.error('Bloom Field could not start:', error);
      this.failed = true;
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(BloomFieldConfig, values);
  }

  private init() {
    if (!this.host) this.renderer = makeRenderer(this.surface);
    const look = this.host ? this.host.look : new InflatedLook();
    this.look = look;
    this.scene.add(this.group);

    const petalGeo = new THREE.SphereGeometry(1, 56, 36);
    const coreGeo = new THREE.SphereGeometry(0.27, 40, 28);
    const stamenGeo = new THREE.SphereGeometry(1, 20, 14);
    this.geometries.push(petalGeo, coreGeo, stamenGeo);

    for (const spec of FLOWERS) {
      const common = look.shared();
      const stemCommon = look.shared();
      const head = new THREE.Group();
      const ring = new THREE.Group();
      head.add(ring);
      this.group.add(head);

      const tilts: THREE.Group[] = [];
      const petals: THREE.Mesh[] = [];
      for (let i = 0; i < N_PETALS; i++) {
        const a = (i / N_PETALS) * TAU;
        const pivot = new THREE.Group();
        pivot.rotation.y = a;
        const tilt = new THREE.Group();
        tilt.rotation.x = -0.36;
        pivot.add(tilt);
        const petal = new THREE.Mesh(petalGeo, look.material(LOBE, common, { uAng: { value: a } }));
        petal.scale.set(0.48, 0.36, 0.6);
        // Tiny steps between petals so overlaps do not flicker.
        petal.position.set(0, ((i * 5) % 3) * 0.035, 0.72);
        tilt.add(petal);
        ring.add(pivot);
        tilts.push(tilt);
        petals.push(petal);
      }

      const coreMat = look.material(CORE, common);
      const core = new THREE.Mesh(coreGeo, coreMat);
      core.position.y = 0.04;
      head.add(core);
      const stamens: THREE.Mesh[] = [];
      for (let k = 0; k < 7; k++) {
        const a = (k / 7) * TAU + 0.3;
        const stamen = new THREE.Mesh(stamenGeo, coreMat);
        stamen.scale.set(0.035, 0.13, 0.035);
        stamen.position.set(Math.cos(a) * 0.3, 0.16, Math.sin(a) * 0.3);
        stamen.rotation.set(Math.sin(a) * 0.35, 0, -Math.cos(a) * 0.35);
        head.add(stamen);
        stamens.push(stamen);
      }

      const anchors = Array.from({ length: 6 }, () => new THREE.Vector3());
      const stem = new Tube(look.material(TUBE, stemCommon, { uWS: { value: 0.55 } }), anchors);
      this.group.add(stem.mesh);

      this.flowers.push({
        spec, head, ring, tilts, petals, core, stamens, stem,
        shared: common, stemShared: stemCommon, presence: 0,
      });
    }

  }

  destroy() {
    if (!this.host) this.look?.dispose();
    this.look = null;
    for (const geometry of this.geometries) geometry.dispose();
    if (this.host) {
      this.scene.remove(this.group);
      this.group.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (mesh.isMesh) (mesh.material as THREE.Material).dispose();
      });
      for (const f of this.flowers) f.stem.mesh.geometry.dispose();
    } else if (this.renderer) {
      disposeThree(this.scene, this.renderer);
    }
    this.renderer = null;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { ctx, cfg } = this;
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;

    const renderer = this.renderer;
    if (this.failed || !renderer || !this.look) {
      drawUnavailable(ctx, width, height, 'BLOOM FIELD');
      return;
    }
    this.update(handData, colors, audioData, width, height);

    if (this.surface.width !== width || this.surface.height !== height) {
      renderer.setSize(width, height, false);
    }
    renderer.render(this.scene, this.camera);

    // ── onto the layer ───────────────────────────────────────────────────────
    drawBackdrop(ctx, width, height, cfg.field.backdrop);
    ctx.drawImage(this.surface, 0, 0, width, height);
  }

  /**
   * Where the open flowers are, for a butterfly to land on: the top of each
   * head, in world terms, and which way is up from it.
   */
  perches(): { at: THREE.Vector3; up: THREE.Vector3; size: number }[] {
    const out: { at: THREE.Vector3; up: THREE.Vector3; size: number }[] = [];
    for (const f of this.flowers) {
      if (!f.head.visible || f.presence < 0.9) continue;
      const at = new THREE.Vector3();
      f.core.getWorldPosition(at);
      const up = new THREE.Vector3(0, 1, 0).applyQuaternion(f.head.getWorldQuaternion(new THREE.Quaternion()));
      const scale = new THREE.Vector3();
      f.head.getWorldScale(scale);
      out.push({ at, up, size: scale.x });
    }
    return out;
  }

  /**
   * One frame of the field: everything moved and coloured, nothing drawn.
   * Standing alone it also places its own camera; hosted, the host has.
   */
  update(handData: HandData, colors: string[], audioData: AudioData | undefined, width: number, height: number) {
    const { cfg } = this;
    const look = this.look;
    if (!look || this.failed) return;

    // ── the hands and the music ─────────────────────────────────────────────
    const play = this.playing;
    play.read(handData, audioData);
    const { dt, step } = play;
    const burst = play.burst * cfg.hands.clap;
    const bump = play.bump * cfg.sound.beat;

    // ── clocks ───────────────────────────────────────────────────────────────
    this.motionTime += step * cfg.motion.speed;
    // The colour flows at its own rate, faster with the melody and racing
    // after a clap. Integrated, so a burst moves it on and never back.
    this.colourTime += (step * cfg.colour.speed * (1 + play.mid * cfg.sound.mid * 1.2)
      + dt * burst * 0.9) / LOOP;
    const t = this.motionTime;
    const uT = this.colourTime;
    const amount = cfg.motion.amount;
    const s = (k: number, ph: number) => Math.sin((TAU * k * t) / LOOP + ph);

    // ── palette ──────────────────────────────────────────────────────────────
    const shown = new Set(SHOWN[Math.max(0, Math.min(7, Math.round(cfg.field.count)))]);
    const first = !this.started;
    if (!this.host) look.update(colors, cfg.colour.palette, dt, first);
    if (first) {
      this.started = true;
      this.flowers.forEach((f, i) => { f.presence = shown.has(i) ? 1 : 0; });
    }

    // ── the field ────────────────────────────────────────────────────────────
    const bassBob = 1 + play.bass * cfg.sound.bass * 1.6;
    const tilt = -0.85 + 0.9 * (REST_OPEN + (play.openness - REST_OPEN) * cfg.hands.bloom)
      + burst * 0.75;
    const spec = 0.16 * (1 + play.high * cfg.sound.high * 2.5);
    const stamenLift = 1 + play.high * cfg.sound.high * 1.4;

    const up = new THREE.Vector3(0, 1, 0);
    const euler = new THREE.Euler();
    const centre = new THREE.Vector3();

    this.flowers.forEach((f, index) => {
      const target = shown.has(index) ? 1 : 0;
      f.presence += (target - f.presence) * (1 - Math.exp(-dt * 2.2));
      if (f.presence < 0.004 && target === 0) f.presence = 0;
      const visible = f.presence > 0.002;
      f.head.visible = visible;
      f.stem.mesh.visible = visible;
      if (!visible) return;

      const { spec: fl } = f;
      const ph = fl.ph;
      const grow = 1 - Math.pow(1 - f.presence, 3);

      // Soft motion: bob, drift, turn, tilt.
      const bob = (0.22 * s(1, ph) + 0.07 * s(2, ph * 1.3)) * amount * bassBob + burst * 0.35;
      const pitch = 0.78 + 0.16 * s(1, ph + 1.1) * amount;
      const roll = fl.roll + 0.2 * s(1, ph + 2.2) * amount;
      const yaw = 0.35 * s(1, ph + 0.4) * amount;
      const restY = fl.h + bob;
      const H = new THREE.Vector3(
        fl.x + 0.12 * s(1, ph + 0.8) * amount,
        -7 + (restY + 7) * grow,
        fl.z,
      );
      f.head.position.copy(H);
      euler.set(pitch, yaw, roll, 'YXZ');
      f.head.quaternion.setFromEuler(euler);
      const sc = fl.s * 1.42;
      f.head.scale.setScalar(sc * (1 + 0.015 * s(2, ph) * amount + 0.03 * bump + burst * 0.1)
        * (0.25 + 0.75 * grow));
      f.ring.rotation.y = 0.25 * s(1, ph + 3.0) * amount;

      for (const g of f.tilts) g.rotation.x = tilt;
      const squash = 0.36 * (1 + 0.15 * bump);
      for (const p of f.petals) p.scale.y = squash;
      for (const st of f.stamens) st.scale.y = 0.13 * stamenLift;

      // The colour pattern melts between sweeps, bands and rings.
      const melt = cfg.pattern.melt;
      const drift = (k: number) => 1 - melt + melt * (0.5 + 0.5 * s(1, ph + k));
      const u = f.shared;
      u.uT.value = uT;
      u.uOff.value = fl.off + cfg.colour.offset;
      u.uWA.value = cfg.pattern.sweep * drift(0);
      u.uWB.value = cfg.pattern.bands * drift(2.1);
      u.uWC.value = cfg.pattern.rings * drift(4.2);
      const v = f.stemShared;
      v.uT.value = uT;
      v.uOff.value = fl.off + 0.2 + cfg.colour.offset;
      look.apply(u, cfg.colour.depth, spec);
      look.apply(v, cfg.colour.depth, spec);

      // The stem: from below the frame, into the head along its own axis.
      const axis = up.clone().applyQuaternion(f.head.quaternion);
      const scaled = sc * (0.25 + 0.75 * grow);
      const a = f.stem.anchors;
      const bottom = a[1].set(fl.x * 0.9 - 0.25 * Math.sign(fl.x || 1) * 0.3, -5.6, fl.z);
      // One more below that, so a closer camera never finds the stem's end.
      a[0].set(bottom.x, -12, fl.z);
      a[5].copy(H).addScaledVector(axis, -0.15 * scaled);
      const p3 = a[4].copy(H).addScaledVector(axis, -0.75 * scaled);
      const midY = (bottom.y + p3.y) * 0.5;
      a[2].set(fl.x - 0.35 + 0.18 * s(1, ph + 0.5) * amount, bottom.y + (midY - bottom.y) * 0.55, fl.z);
      a[3].set((fl.x + 0.3 + p3.x) * 0.5 + 0.1 * s(1, ph + 1.4) * amount, midY + (p3.y - midY) * 0.3, fl.z);
      f.stem.update(0.19 * fl.s * (0.4 + 0.6 * grow));
    });

    // ── camera ───────────────────────────────────────────────────────────────
    if (!this.host) this.placeCamera(width, height);

    this.scene.updateMatrixWorld(true);
    this.camera.updateMatrixWorld(true);
    for (const f of this.flowers) {
      if (!f.head.visible) continue;
      f.core.getWorldPosition(centre);
      centre.applyMatrix4(this.camera.matrixWorldInverse);
      f.shared.uCenter.value.copy(centre);
    }
  }

  /**
   * Where the camera is: the reel's shot, swung by the orbit, carried with
   * the hand, and brought in by spreading two hands.
   *
   * The hand slides the whole field with it rather than orbiting round it.
   * An orbit pivots on the middle of the field, so the centre flower stays
   * put while the near ones go one way and the far ones the other — there is
   * no direction to it, and what reads is a camera that does not follow. So
   * the camera travels opposite to the hand, which carries the picture WITH
   * it: hand right, flowers right; hand up, flowers up. A small turn rides on
   * top so the move still has depth.
   *
   */
  private placeCamera(width: number, height: number) {
    const { cfg, camera } = this;
    const play = this.playing;
    frameCamera(camera, width, height);

    const t = this.motionTime;
    const reach = cfg.hands.orbit;
    const slideX = -play.aim.x * reach * 2.2;
    const slideY = -play.aim.y * reach * 1.3;
    const yaw = cfg.field.orbit * 0.42 * Math.sin((TAU * t) / (LOOP * 2))
      - play.aim.x * reach * 0.12;
    const distance = Math.max(5, cfg.field.distance
      * (1 - (play.spread - 0.4) * cfg.hands.dolly * 0.55));
    camera.position.set(
      slideX + Math.sin(yaw) * distance,
      0.5 + slideY,
      Math.cos(yaw) * distance,
    );
    camera.lookAt(slideX, 0.1 + slideY, 0);
  }
}
