import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { AnemoneConfig } from '../../config/AnemoneRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { disposeThree } from './disposeThree';
import {
  CORE, InflatedLook, LOOP, Playing, Shared, TAU, TUBE,
  drawUnavailable, frameCamera, makeRenderer,
} from './inflated/style';
import { Tube } from './inflated/Tube';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ANEMONES
 * ═══════════════════════════════════════════════════════════════════════════
 * A garden of sea anemones, in the inflated family — the same palettes, the
 * same shader and styles as the flowers and the jellyfish (inflated/style.ts)
 * — so it stacks with them and reads as one world.
 *
 * Each anemone is a fat column, a mouth, and a crown of soft arms with a
 * bead at each tip. What it does is what a real one does:
 *
 *   AN OPEN PALM opens the crowns: the arms fan out and up and sway.
 *   A FIST folds them shut: the arms curl in over the mouth and draw back.
 *   Everything between is between — it follows the hand as it closes.
 *   THE ARMS LEAN towards wherever the hand is.
 *   A CLAP snaps every crown shut at once; they open again slowly.
 *
 * And the music: each kick sends a pulse of colour out along the arms and
 * swells the crown; the bass deepens the sway of the current; the hats
 * brighten the tips. The finger count sets the tempo, as everywhere.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof AnemoneConfig;

/** Arms in the outer ring and the inner one, and how each is cut up. */
const OUTER = 22;
const INNER = 12;
const LINKS = 5;
/** How open the crowns sit with no hand in view. */
const REST_OPEN = 0.8;

interface Spot { x: number; z: number; h: number; s: number; off: number; ph: number }
/** Where they stand, in the order they join as the count goes up. */
const SPOTS: Spot[] = [
  { x: -4.9, z: -0.6, h: -0.4, s: 1.0, off: 0.0, ph: 0.0 },
  { x: -2.3, z: 0.9, h: -1.5, s: 0.82, off: 0.37, ph: 1.7 },
  { x: 0.2, z: -0.4, h: 0.0, s: 1.12, off: 0.71, ph: 3.3 },
  { x: 2.7, z: 1.0, h: -1.3, s: 0.86, off: 0.18, ph: 4.6 },
  { x: 5.0, z: -0.5, h: -0.6, s: 0.96, off: 0.55, ph: 2.4 },
  { x: -3.7, z: -2.6, h: 0.7, s: 0.74, off: 0.86, ph: 5.3 },
  { x: 3.8, z: -2.4, h: 0.5, s: 0.76, off: 0.28, ph: 0.9 },
];
const SHOWN: number[][] = [
  [], [2], [1, 3], [0, 2, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5, 6],
];

interface Arm { tube: Tube; bead: THREE.Mesh; angle: number; inner: boolean; phase: number; length: number }
interface Anemone {
  spot: Spot;
  column: Tube;
  mouth: THREE.Mesh;
  arms: Arm[];
  shared: Shared;
  beadShared: Shared;
  columnShared: Shared;
  presence: number;
  /** This one's own openness, eased: they do not all move as one. */
  open: number;
}

export class AnemoneRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = AnemoneConfig;
  private surface = document.createElement('canvas');
  private renderer: THREE.WebGLRenderer | null = null;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(30, 16 / 9, 0.1, 100);
  private look: InflatedLook | null = null;
  private failed = false;
  private playing = new Playing(REST_OPEN);
  private garden: Anemone[] = [];
  private motionTime = 0;
  private colourTime = 0;
  private started = false;
  /** A clap's hold on the crowns: 1 just after it, easing back to 0. */
  private shut = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    try {
      this.init();
    } catch (error) {
      console.error('Anemones could not start:', error);
      this.failed = true;
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(AnemoneConfig, values);
  }

  private init() {
    this.renderer = makeRenderer(this.surface);
    const look = new InflatedLook();
    this.look = look;
    const beadGeo = new THREE.SphereGeometry(1, 20, 14);
    const mouthGeo = new THREE.SphereGeometry(1, 36, 24);

    for (const spot of SPOTS) {
      const shared = look.shared();
      const beadShared = look.shared();
      const columnShared = look.shared();
      // One material for all of an anemone's arms: they are coloured as one.
      const armMat = look.material(TUBE, shared, { uWS: { value: 1.1 } });
      const beadMat = look.material(CORE, beadShared);
      const column = new Tube(
        look.material(TUBE, columnShared, { uWS: { value: 0.35 } }),
        Array.from({ length: 4 }, () => new THREE.Vector3()), 24, 20,
      );
      this.scene.add(column.mesh);
      const mouth = new THREE.Mesh(mouthGeo, look.material(CORE, columnShared));
      this.scene.add(mouth);

      const arms: Arm[] = [];
      for (let i = 0; i < OUTER + INNER; i++) {
        const inner = i >= OUTER;
        const n = inner ? INNER : OUTER;
        const k = inner ? i - OUTER : i;
        const angle = (k / n) * TAU + (inner ? 0.2 : 0);
        const tube = new Tube(armMat, Array.from({ length: LINKS }, () => new THREE.Vector3()), 26, 8);
        const bead = new THREE.Mesh(beadGeo, beadMat);
        this.scene.add(tube.mesh, bead);
        arms.push({
          tube, bead, angle, inner,
          phase: (i * 2.399963) % TAU,
          length: (inner ? 0.62 : 1) * (0.86 + 0.28 * ((i * 0.618034) % 1)),
        });
      }
      this.garden.push({ spot, column, mouth, arms, shared, beadShared, columnShared, presence: 0, open: REST_OPEN });
    }
  }

  destroy() {
    this.look?.dispose();
    this.look = null;
    if (this.renderer) disposeThree(this.scene, this.renderer);
    this.renderer = null;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { ctx, cfg } = this;
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;
    const renderer = this.renderer;
    const look = this.look;
    if (this.failed || !renderer || !look) {
      drawUnavailable(ctx, width, height, 'ANEMONES');
      return;
    }

    const play = this.playing;
    play.read(handData, audioData);
    const { dt, step } = play;
    const bump = Math.max(play.kick, play.bump) * cfg.sound.beat;
    this.motionTime += step * cfg.garden.speed;
    // A kick moves the colour on along the arms, which reads as a pulse.
    this.colourTime += (step * cfg.colour.speed + dt * bump * 2.2) / LOOP;
    const t = this.motionTime;
    const wave = (k: number, ph: number) => Math.sin((TAU * k * t) / LOOP + ph);

    const first = !this.started;
    look.update(colors, cfg.colour.palette, dt, first, cfg.colour.style);
    const shown = new Set(SHOWN[Math.max(0, Math.min(7, Math.round(cfg.garden.count)))]);
    if (first) {
      this.started = true;
      this.garden.forEach((a, i) => { a.presence = shown.has(i) ? 1 : 0; });
    }

    // ── the hand ─────────────────────────────────────────────────────────
    const handed = !!(handData.left || handData.right);
    // The palm itself, continuously: open is open, a fist is shut.
    const asked = handed ? REST_OPEN + (1 - play.fist - REST_OPEN) * cfg.hands.open : REST_OPEN;
    if (play.clapped) this.shut = Math.min(1, cfg.hands.clap);
    // Synthetic hands clap on every beat; there the burst does the shutting, more gently.
    if (handData.synthetic) this.shut = Math.max(this.shut, play.burst * 0.5 * cfg.hands.clap);
    this.shut *= Math.exp(-dt * 0.9);
    const lean = cfg.hands.lean * (handed ? 1 : 0.35);
    const sway = cfg.garden.sway * (0.55 + 1.3 * play.bass * cfg.sound.bass);
    const spec = 0.16 * (1 + play.high * cfg.sound.high * 2.5);

    const up = new THREE.Vector3(0, 1, 0);
    const radial = new THREE.Vector3();
    const tangent = new THREE.Vector3();
    const top = new THREE.Vector3();

    this.garden.forEach((a, index) => {
      const target = shown.has(index) ? 1 : 0;
      a.presence += (target - a.presence) * (1 - Math.exp(-dt * 2.2));
      if (a.presence < 0.004 && target === 0) a.presence = 0;
      const visible = a.presence > 0.002;
      a.column.mesh.visible = visible;
      a.mouth.visible = visible;
      for (const arm of a.arms) { arm.tube.mesh.visible = visible; arm.bead.visible = visible; }
      if (!visible) return;

      const { spot } = a;
      const grow = 1 - Math.pow(1 - a.presence, 3);
      const s = spot.s * (0.25 + 0.75 * grow);
      // Each follows the hand at its own pace, so they open as a garden, not a machine.
      const want = Math.max(0, Math.min(1, asked * (1 - this.shut)));
      a.open += (want - a.open) * (1 - Math.exp(-dt * (want < a.open ? 9 : 2.2 + (index % 3) * 0.7)));
      const o = a.open;

      // The column: up from below the frame, leaning a little with the current.
      const bend = 0.18 * wave(1, spot.ph) * sway;
      top.set(spot.x + bend, -9 + (spot.h + 9) * grow + 0.06 * wave(2, spot.ph + 1) * sway, spot.z);
      const c = a.column.anchors;
      c[0].set(spot.x, -12, spot.z);
      c[1].set(spot.x, -6.5, spot.z);
      c[2].set(spot.x + bend * 0.4, (top.y - 6.5) * 0.5, spot.z);
      c[3].copy(top);
      a.column.update(0.5 * s, 1.35);
      // The mouth: a low dome, drawn down a little as the crown closes.
      a.mouth.position.copy(top).addScaledVector(up, 0.02 * s);
      a.mouth.scale.set(0.7 * s, (0.2 + 0.16 * o) * s * (1 + 0.25 * bump), 0.7 * s);

      const crown = 1 + 0.06 * bump;
      for (const arm of a.arms) {
        radial.set(Math.cos(arm.angle), 0, Math.sin(arm.angle));
        tangent.set(-radial.z, 0, radial.x);
        // Open, an arm leaves the column leaning out and goes on a little
        // further out with each link. Shut, it swells out and then curls
        // back in to meet the others over the mouth — a bud — and is drawn
        // in to two thirds of its length.
        const startLean = (arm.inner ? 0.24 : 0.72) * o + (arm.inner ? 0.5 : 0.82) * (1 - o);
        const curl = (arm.inner ? 0.04 : 0.09) * o - 0.46 * (1 - o);
        const length = arm.length * cfg.garden.reach * 2.7 * s * (0.62 + 0.38 * o) * crown;
        const link = length / (LINKS - 1);
        const p = arm.tube.anchors;
        p[0].copy(top).addScaledVector(radial, (arm.inner ? 0.28 : 0.52) * s).addScaledVector(up, -0.05 * s);
        for (let k = 1; k < LINKS; k++) {
          const angle = startLean + curl * k;
          const f = k / (LINKS - 1);
          p[k].copy(p[k - 1])
            .addScaledVector(radial, Math.sin(angle) * link)
            .addScaledVector(up, Math.cos(angle) * link);
          // The current: more at the tips, and less when it is shut tight.
          const loose = f * f * (0.25 + 0.75 * o) * sway;
          p[k].addScaledVector(tangent, Math.sin((TAU * t) / LOOP * 2 + arm.phase - k * 0.8) * 0.2 * s * loose);
          p[k].addScaledVector(radial, Math.sin((TAU * t) / LOOP * 1.3 + arm.phase * 1.7 - k * 0.6) * 0.12 * s * loose);
          // Towards the hand, the tips most.
          p[k].x += play.aim.x * lean * 0.75 * s * f * f * o;
          p[k].y += play.aim.y * lean * 0.45 * s * f * f * o;
        }
        arm.tube.update((arm.inner ? 0.1 : 0.135) * s * (1 + 0.2 * bump), 0.42);
        arm.bead.position.copy(p[LINKS - 1]);
        arm.bead.scale.setScalar((arm.inner ? 0.1 : 0.14) * s * (1 + 0.35 * play.high * cfg.sound.high + 0.25 * bump));
      }

      const uT = this.colourTime;
      a.shared.uT.value = uT;
      a.shared.uOff.value = spot.off + cfg.colour.offset;
      a.beadShared.uT.value = uT;
      a.beadShared.uOff.value = spot.off + 0.3 + cfg.colour.offset;
      a.columnShared.uT.value = uT * 0.5;
      a.columnShared.uOff.value = spot.off + 0.55 + cfg.colour.offset;
      look.apply(a.shared, cfg.colour.depth, spec);
      look.apply(a.beadShared, cfg.colour.depth, spec * 1.5);
      look.apply(a.columnShared, cfg.colour.depth, spec);
    });

    // ── the camera: the family's shot, carried with the hand ──────────────
    frameCamera(this.camera, width, height);
    const slideX = -play.aim.x * 1.2;
    const slideY = -play.aim.y * 0.7;
    const distance = Math.max(5, cfg.garden.distance * (1 - (play.spread - 0.4) * 0.5));
    this.camera.position.set(slideX, 0.5 + slideY, distance);
    this.camera.lookAt(slideX, 0.1 + slideY, 0);

    if (this.surface.width !== width || this.surface.height !== height) renderer.setSize(width, height, false);
    renderer.render(this.scene, this.camera);
    look.backdrop(ctx, width, height, cfg.garden.backdrop);
    ctx.drawImage(this.surface, 0, 0, width, height);
  }
}
