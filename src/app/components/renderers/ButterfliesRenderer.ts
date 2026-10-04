import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { ButterfliesConfig } from '../../config/ButterfliesRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { disposeThree } from './disposeThree';
import {
  CORE, InflatedLook, LOBE, LOOP, MotifHost, Playing, Shared, TAU,
  drawBackdrop, drawUnavailable, frameCamera, makeRenderer,
} from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * BUTTERFLIES
 * ═══════════════════════════════════════════════════════════════════════════
 * An inflated flock in the Bloom Field style, flying loops on the studio
 * backdrop. The palette, shader, backdrop and camera are the shared inflated
 * style, so this stacks with Bloom Field as one world.
 *
 * Each wing is a fan of fat lobes from the body — the same balloon the flower
 * petals are made of — so the edge comes out scalloped and the colour sweeps
 * round the fan the way it sweeps round a flower head. The body is a string of
 * beads, the antennae end in balls like the flowers' stamens.
 *
 * The hands, by the same rule as every other visual:
 *   - the finger count sets the tempo (through the shared clock) and also the
 *     stroke: a fist glides on shallow beats, five fingers beats full and deep;
 *   - a clap bursts the flock outward, wings beating frantically, colour
 *     racing, then they gather again;
 *   - the flock follows a hand around the frame, each butterfly a little
 *     behind the one before so they trail like a flock rather than a block;
 *     spreading two hands scatters them apart.
 * And the music: each kick flicks the wings up and swells the bodies, bass
 * widens the loops, melody speeds the colour, and the hats quicken the
 * wingbeat into a flutter and brighten the highlights.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/**
 * How full the stroke sits with no hands in view: the preview's stroke.
 *
 * Stroke runs 0 (a fist) to 1 (five fingers), and the wing amplitude is
 * 0.4 + 0.92 × stroke — so 1, the approved preview, sits here.
 */
const REST_STROKE = 0.6 / 0.92;

type Cfg = typeof ButterfliesConfig;

/** A wing, as a fan: each lobe's angle from forward (degrees), length and width. */
const FORE: [number, number, number][] = [
  [26, 1.30, 0.36], [42, 1.46, 0.38], [58, 1.44, 0.38], [74, 1.24, 0.36],
];
const HIND: [number, number, number][] = [
  [106, 1.00, 0.42], [127, 1.06, 0.44], [149, 0.90, 0.40],
];

/**
 * The flock, in the order they join as the count goes up. The first five are
 * the approved preview.
 *
 * Each flies a loop that closes within twelve seconds. The phases were chosen
 * by search so that over the whole loop no two ever sit on top of each other
 * on screen — they pass, they do not merge into one blob.
 */
interface Flier {
  /** Centre of its loop, how far the loop swings, size, colour offset, phase, wingbeats per loop. */
  c: [number, number, number];
  a: [number, number, number];
  s: number;
  off: number;
  ph: number;
  beats: number;
}
const FLOCK: Flier[] = [
  { c: [-3.4, 1.0, -0.6], a: [2.0, 0.8, 1.0], s: 1.30, off: 0.00, ph: 3.56, beats: 22 },
  { c: [3.2, 1.4, 0.2], a: [2.2, 0.7, 0.8], s: 1.18, off: 0.37, ph: 4.07, beats: 26 },
  { c: [0.0, -1.5, 1.0], a: [3.0, 0.6, 0.6], s: 1.10, off: 0.71, ph: 0.17, beats: 24 },
  { c: [-4.4, -1.8, -2.4], a: [1.4, 0.9, 0.8], s: 0.95, off: 0.18, ph: 0.17, beats: 30 },
  { c: [4.6, -1.0, -2.8], a: [1.4, 1.0, 1.0], s: 0.98, off: 0.55, ph: 0.34, beats: 28 },
  { c: [0.6, 2.7, -3.8], a: [3.2, 0.5, 0.8], s: 0.80, off: 0.86, ph: 3.90, beats: 32 },
  { c: [-1.4, -0.4, -5.0], a: [2.6, 1.1, 0.8], s: 0.74, off: 0.28, ph: 0.22, beats: 34 },
  { c: [1.9, 0.3, 2.4], a: [1.4, 0.8, 0.5], s: 0.82, off: 0.63, ph: 0.40, beats: 27 },
];
/** Which of them fly at each count — a single one is the one that roams the middle. */
const SHOWN: number[][] = [
  [], [2], [0, 1], [0, 1, 2], [0, 1, 2, 3], [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5, 6], [0, 1, 2, 3, 4, 5, 6, 7],
];

interface Butterfly {
  spec: Flier;
  root: THREE.Group;
  fore: { hinge: THREE.Group; side: number }[];
  hind: { hinge: THREE.Group; side: number }[];
  thorax: THREE.Mesh;
  shared: Shared;
  /** 0 off-screen, 1 in the flock. Eased, so they fly in and away. */
  presence: number;
  /** Where its wings are in their beat, integrated so the speed can change smoothly. */
  phase: number;
  /** How far the hand has pulled it, eased at its own rate. */
  pull: THREE.Vector3;
  /** Which way it is flying, eased from how it actually moved. */
  heading: THREE.Vector3;
  bank: number;
  last: THREE.Vector3 | null;
  /** In a shared world: the flower it is visiting, how far it has settled on it (0 to 1), and for how long. */
  perch: number;
  settle: number;
  stay: number;
  /** Seconds until it next thinks of landing. */
  restless: number;
  /** Where it last sat, kept as it takes off again. */
  landing?: THREE.Vector3;
}

/** A place a butterfly can land, given by the host: a flower head's top. */
export interface Perch { at: THREE.Vector3; up: THREE.Vector3; size: number }

export class ButterfliesRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = ButterfliesConfig;

  private surface: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer | null = null;
  private readonly host: MotifHost | null;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  /** Everything of the flock, so a host can place it in its world. */
  readonly group = new THREE.Group();
  /**
   * In a shared world, where the flowers are: the host fills this each
   * frame, and now and then a butterfly flies down to one and settles there.
   */
  perches: Perch[] = [];
  /** How often they visit the flowers, 0 never to 1 often. Set by the host. */
  visiting = 0;
  private flock: Butterfly[] = [];
  private geometries: THREE.BufferGeometry[] = [];
  private failed = false;
  private look: InflatedLook | null = null;
  private playing = new Playing(REST_STROKE);

  private motionTime = 0;
  private colourTime = 0;
  /** Whether a hand is in view, eased — the flock gathers in to follow one. */
  private present = 0;
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
      console.error('Butterflies could not start:', error);
      this.failed = true;
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(ButterfliesConfig, values);
  }

  private init() {
    if (!this.host) this.renderer = makeRenderer(this.surface);
    const look = this.host ? this.host.look : new InflatedLook();
    this.look = look;
    this.scene.add(this.group);

    const lobeGeo = new THREE.SphereGeometry(1, 48, 32);
    const beadGeo = new THREE.SphereGeometry(1, 28, 20);
    const stalkGeo = new THREE.CylinderGeometry(1, 1, 1, 10, 1);
    this.geometries.push(lobeGeo, beadGeo, stalkGeo);

    for (const spec of FLOCK) {
      const common = look.shared();
      const root = new THREE.Group();
      const fore: Butterfly['fore'] = [];
      const hind: Butterfly['hind'] = [];

      // Forward is +z, its back is +y, the right wing reaches out along +x.
      for (const side of [1, -1]) {
        for (const [lobes, list, lift, z] of [
          [FORE, fore, 0.04, 0.1],
          [HIND, hind, -0.02, -0.14],
        ] as const) {
          const hinge = new THREE.Group(); // flaps about the body's long axis
          hinge.position.set(0.06 * side, lift, z);
          root.add(hinge);
          lobes.forEach(([deg, len, wid], i) => {
            const a = ((deg * Math.PI) / 180) * side;
            const pivot = new THREE.Group();
            pivot.rotation.y = a;
            const tilt = new THREE.Group();
            tilt.rotation.x = -0.12; // a slight cup, like the petals
            pivot.add(tilt);
            const lobe = new THREE.Mesh(lobeGeo, look.material(LOBE, common, { uAng: { value: a } }));
            lobe.scale.set(wid, 0.21, len * 0.55);
            // Small steps between neighbours so overlaps do not flicker.
            lobe.position.set(0, (i % 2) * 0.025, len * 0.5);
            tilt.add(lobe);
            hinge.add(pivot);
          });
          list.push({ hinge, side });
        }
      }

      // The body: beads, fattest at the thorax, tapering down the abdomen.
      const bodyMat = look.material(CORE, common);
      const bead = (y: number, z: number, sx: number, sy: number, sz: number) => {
        const m = new THREE.Mesh(beadGeo, bodyMat);
        m.position.set(0, y, z);
        m.scale.set(sx, sy, sz);
        root.add(m);
        return m;
      };
      const thorax = bead(0.06, 0.02, 0.2, 0.19, 0.3);
      bead(0.09, 0.38, 0.15, 0.14, 0.14); // head
      for (const [z, r] of [[-0.30, 0.15], [-0.52, 0.135], [-0.72, 0.115], [-0.9, 0.09], [-1.04, 0.065]]) {
        bead(0.04, z, r, r, r * 1.25);
      }
      // Antennae: thin stalks ending in a ball, the flower's stamens again.
      for (const side of [1, -1]) {
        const from = new THREE.Vector3(0.05 * side, 0.16, 0.46);
        const to = new THREE.Vector3(0.34 * side, 0.4, 1.12);
        const stalk = new THREE.Mesh(stalkGeo, bodyMat);
        stalk.position.copy(from).add(to).multiplyScalar(0.5);
        stalk.scale.set(0.02, from.distanceTo(to), 0.02);
        stalk.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), to.clone().sub(from).normalize());
        root.add(stalk);
        const tip = new THREE.Mesh(beadGeo, bodyMat);
        tip.position.copy(to);
        tip.scale.setScalar(0.065);
        root.add(tip);
      }

      this.group.add(root);
      this.flock.push({
        spec, root, fore, hind, thorax, shared: common,
        presence: 0, phase: spec.ph, pull: new THREE.Vector3(),
        heading: new THREE.Vector3(1, 0, 0), bank: 0, last: null,
        perch: -1, settle: 0, stay: 0, restless: 3 + spec.ph * 2,
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
      drawUnavailable(ctx, width, height, 'BUTTERFLIES');
      return;
    }
    frameCamera(this.camera, width, height);
    this.camera.position.set(0, 0.5, 15.5);
    this.camera.lookAt(0, 0.1, 0);
    this.update(handData, colors, audioData);

    if (this.surface.width !== width || this.surface.height !== height) {
      renderer.setSize(width, height, false);
    }
    renderer.render(this.scene, this.camera);

    drawBackdrop(ctx, width, height, cfg.flight.backdrop);
    ctx.drawImage(this.surface, 0, 0, width, height);
  }

  /**
   * A butterfly's visits to the flowers, in a shared world. Returns how far
   * it has settled on one (0 in the air, 1 sitting), and where it sits.
   */
  private visit(b: Butterfly, dt: number, burst: number, at: THREE.Vector3): number {
    const perches = this.perches;
    if (b.perch >= perches.length) b.perch = -1;
    b.restless -= dt;
    if (b.perch < 0 && b.restless <= 0) {
      b.restless = 3 + Math.random() * 5;
      if (this.visiting > 0 && perches.length && burst < 0.05 && Math.random() < this.visiting) {
        const taken = new Set(this.flock.map((o) => o.perch));
        const free = perches.map((_, i) => i).filter((i) => !taken.has(i));
        if (free.length) {
          b.perch = free[Math.floor(Math.random() * free.length)];
          b.stay = 4 + Math.random() * 6;
        }
      }
    }
    if (b.perch >= 0) {
      b.stay -= dt;
      if (b.stay <= 0 || burst > 0.25) {
        b.perch = -1;
        b.restless = 5 + Math.random() * 6;
      }
    }
    const to = b.perch >= 0 ? 1 : 0;
    // Down slowly, a glide in; off quicker, a flutter away.
    b.settle += (to - b.settle) * (1 - Math.exp(-dt * (to ? 0.8 : 1.5)));
    if (b.settle < 0.001) { b.settle = 0; return 0; }
    if (b.perch >= 0) {
      const perch = perches[b.perch];
      // Sat on the head's top, a little above it, in the flock's own frame.
      b.landing = (b.landing ?? new THREE.Vector3())
        .copy(perch.at).addScaledVector(perch.up, perch.size * 0.32);
      this.group.worldToLocal(b.landing);
    }
    if (!b.landing) return 0;
    at.copy(b.landing);
    return b.settle;
  }

  /**
   * One frame of the flock: everything moved and coloured, nothing drawn. A
   * host calls this with its camera already placed, then draws its scene.
   */
  update(handData: HandData, colors: string[], audioData?: AudioData) {
    const { cfg } = this;
    const look = this.look;
    if (!look || this.failed) return;

    // ── the hands and the music ─────────────────────────────────────────────
    const play = this.playing;
    play.read(handData, audioData);
    const { dt, step } = play;
    const burst = play.burst * cfg.hands.clap;
    const bump = play.bump * cfg.sound.beat;
    const handed = handData.left || handData.right ? 1 : 0;
    this.present += (handed - this.present) * (1 - Math.exp(-dt * 3));

    // ── clocks ───────────────────────────────────────────────────────────────
    this.motionTime += step * cfg.flight.speed;
    this.colourTime += (step * cfg.colour.speed * (1 + play.mid * cfg.sound.mid * 1.2)
      + dt * burst * 0.9) / LOOP;
    const t = this.motionTime;
    const uT = this.colourTime;
    const s = (k: number, ph: number) => Math.sin((TAU * k * t) / LOOP + ph);

    // ── palette ──────────────────────────────────────────────────────────────
    const shown = new Set(SHOWN[Math.max(0, Math.min(8, Math.round(cfg.flight.count)))]);
    const first = !this.started;
    if (!this.host) look.update(colors, cfg.colour.palette, dt, first);
    if (first) {
      this.started = true;
      this.flock.forEach((b, i) => { b.presence = shown.has(i) ? 1 : 0; });
    }

    // ── the flock ────────────────────────────────────────────────────────────
    const swing = cfg.flight.swing * (1 + play.bass * cfg.sound.bass * 1.2);
    // Spreading two hands opens the flock out; together, it gathers in.
    const scatter = Math.max(0.3, 1 + (play.spread - 0.4) * cfg.hands.spread * 1.6);
    // Following a hand, they also close up round it, so it reads as a flock
    // coming to the hand rather than the whole picture sliding over.
    // Only a little: closed up harder, they merge into one blob round the hand.
    const gather = 1 - 0.18 * this.present * Math.min(1, cfg.hands.follow);
    // Short of the edges, so a hand at the edge of the camera's view keeps the
    // flock in shot rather than dragging half of it out of frame.
    const hand = new THREE.Vector3(play.aim.x * 4.6, play.aim.y * 2.1, 0)
      .multiplyScalar(cfg.hands.follow);
    // Stroke: a fist glides, five fingers beat full and deep, a clap is frantic.
    const stroke = REST_STROKE + (play.openness - REST_STROKE) * cfg.hands.stroke;
    const amp = Math.max(0.15, 0.4 + 0.92 * stroke) + burst * 0.4;
    const flutter = cfg.flight.wingbeat * (1 + play.high * cfg.sound.high * 0.8);
    const spec = 0.16 * (1 + play.high * cfg.sound.high * 2.5);
    const size = cfg.flight.size;

    const p = new THREE.Vector3();
    const target = new THREE.Vector3();
    const fwd = new THREE.Vector3();
    const up = new THREE.Vector3();
    const right = new THREE.Vector3();
    const lean = new THREE.Vector3(0, 0.45, 1);
    const basis = new THREE.Matrix4();
    const centre = new THREE.Vector3();
    const perchAt = new THREE.Vector3();

    this.flock.forEach((b, index) => {
      const want = shown.has(index) ? 1 : 0;
      b.presence += (want - b.presence) * (1 - Math.exp(-dt * 1.6));
      if (b.presence < 0.004 && want === 0) b.presence = 0;
      const visible = b.presence > 0.002;
      b.root.visible = visible;
      if (!visible) { b.last = null; return; }

      const { spec: fl } = b;
      const w = (TAU * t) / LOOP;
      // Its loop, opened or gathered by the hands.
      p.set(
        fl.c[0] * scatter * gather + fl.a[0] * swing * Math.sin(w + fl.ph),
        fl.c[1] * scatter * gather + fl.a[1] * swing * Math.sin(2 * w + fl.ph * 1.7),
        fl.c[2] + fl.a[2] * swing * Math.cos(w + fl.ph * 0.6),
      );
      // Pulled towards the hand, each at its own lag so they trail.
      const lag = 1.2 + 2.2 * (1 - index / FLOCK.length);
      b.pull.lerp(hand, 1 - Math.exp(-dt * lag));
      p.add(b.pull);
      // A clap throws them outward from the middle of the frame.
      if (burst > 0.001) {
        target.set(p.x, p.y - 0.2, 0);
        if (target.lengthSq() < 0.01) target.set(index % 2 ? 1 : -1, 0.3, 0);
        p.addScaledVector(target.normalize(), burst * 3.2);
      }
      // Arriving from, or leaving to, the side of the frame it lives on.
      const away = 1 - Math.pow(1 - b.presence, 3);
      p.x = (fl.c[0] >= 0 ? 12 : -12) + (p.x - (fl.c[0] >= 0 ? 12 : -12)) * away;

      // In a shared world: now and then it flies down to a flower and
      // settles on it for a while, wings slowing, then takes off again. A
      // clap puts every one of them back in the air.
      const settled = this.visit(b, dt, burst, perchAt);
      if (settled > 0.001) p.lerp(perchAt, settled * settled * (3 - 2 * settled));

      // Wingbeat: integrated, so tempo and flutter change it without a jump.
      // Settled on a flower, the wings slow, and fold up together.
      b.phase += (step * TAU * (fl.beats / LOOP) * flutter + dt * burst * TAU * 3) * (1 - 0.75 * settled);
      const beat = b.phase;
      const flap = 0.425 + 0.725 * amp * (1 - 0.7 * settled) * Math.sin(beat) + 0.4 * bump + 0.55 * settled;

      // Which way it is flying, from how it actually travelled — taken before
      // the wingbeat's bob is added, or every beat would tip its nose up and
      // down, and a butterfly hovering in place would point at the sky.
      if (b.last) {
        fwd.subVectors(p, b.last);
        if (fwd.lengthSq() > 1e-8) {
          fwd.normalize();
          const before = b.heading.clone();
          // Settled, it keeps facing the way it landed.
          b.heading.lerp(fwd, (1 - Math.exp(-dt * 6)) * (1 - settled));
          // Lerping between near-opposite directions can pass through zero.
          if (b.heading.lengthSq() < 1e-6) b.heading.copy(fwd);
          b.heading.normalize();
          // Lean into the turn.
          const turning = before.cross(b.heading).z / Math.max(dt, 1e-3);
          const bankTo = THREE.MathUtils.clamp(turning * 0.25, -0.6, 0.6);
          b.bank += (bankTo - b.bank) * (1 - Math.exp(-dt * 4));
        }
      } else {
        // First sight: face along its loop.
        const ahead = (TAU * (t + 0.05)) / LOOP;
        b.heading.set(
          fl.a[0] * (Math.sin(ahead + fl.ph) - Math.sin(w + fl.ph)),
          fl.a[1] * (Math.sin(2 * ahead + fl.ph * 1.7) - Math.sin(2 * w + fl.ph * 1.7)),
          fl.a[2] * (Math.cos(ahead + fl.ph * 0.6) - Math.cos(w + fl.ph * 0.6)),
        );
        if (b.heading.lengthSq() < 1e-10) b.heading.set(1, 0, 0);
        b.heading.normalize();
      }
      b.last = (b.last ?? new THREE.Vector3()).copy(p);
      // The body rises on the downstroke.
      p.y += 0.09 * Math.cos(beat) * fl.s * size;

      // Its back towards the camera, nose along the heading.
      fwd.copy(b.heading);
      up.copy(lean).addScaledVector(fwd, -lean.dot(fwd));
      // Flying straight at the camera leaves no "towards the camera" to turn
      // its back to; fall back to plain up.
      if (up.lengthSq() < 1e-4) up.set(0, 1, 0).addScaledVector(fwd, -fwd.y);
      up.normalize();
      right.crossVectors(up, fwd).normalize();
      basis.makeBasis(right, up, fwd);
      b.root.quaternion.setFromRotationMatrix(basis);
      b.root.rotateZ(b.bank);
      b.root.rotateX(-0.12 + 0.08 * Math.sin(beat + 1.2)); // nods with the beat
      b.root.position.copy(p);
      b.root.scale.setScalar(fl.s * size * (1 + 0.04 * bump));

      for (const { hinge, side } of b.fore) hinge.rotation.z = -flap * side;
      for (const { hinge, side } of b.hind) {
        hinge.rotation.z = -(flap - 0.18 * Math.sin(beat - 0.5)) * side * 0.94;
      }

      // The colour pattern melts between sweeps, bands and rings.
      const melt = cfg.pattern.melt;
      const drift = (k: number) => 1 - melt + melt * (0.5 + 0.5 * s(1, fl.ph + k));
      const u = b.shared;
      u.uT.value = uT;
      u.uOff.value = fl.off + cfg.colour.offset;
      u.uWA.value = cfg.pattern.sweep * drift(0);
      u.uWB.value = cfg.pattern.bands * drift(2.1);
      u.uWC.value = cfg.pattern.rings * drift(4.2);
      look.apply(u, cfg.colour.depth, spec);
    });

    this.scene.updateMatrixWorld(true);
    this.camera.updateMatrixWorld(true);
    for (const b of this.flock) {
      if (!b.root.visible) continue;
      b.thorax.getWorldPosition(centre);
      centre.applyMatrix4(this.camera.matrixWorldInverse);
      b.shared.uCenter.value.copy(centre);
    }
  }
}
