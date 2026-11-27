import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { JellyfishConfig } from '../../config/JellyfishRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { disposeThree } from './disposeThree';
import {
  arrived,
  CORE, InflatedLook, LOBE, LOOP, MotifHost, Playing, Shared, TAU, TUBE,
  drawUnavailable, frameCamera, makeRenderer,
} from './inflated/style';
import { Tube } from './inflated/Tube';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * JELLYFISH DRIFT
 * ═══════════════════════════════════════════════════════════════════════════
 * Inflated jellyfish in the Bloom Field style. Each bell is a ring of fat
 * lobes hanging from a cap — the flower's petal ring turned upside down — so
 * it comes out scalloped, its colour sweeping round it as it sweeps round a
 * flower head. Tentacles and frilled arms are the flower's stems, thinned
 * and tapering, trailing behind as the bell swims.
 *
 * A jellyfish swims by pulses: the bell squeezes shut quickly, jets, and
 * opens again slowly as it glides and sinks. The pulses run on the shared
 * clock, so the fingers set how fast they swim — one finger slow, two
 * medium, five fast — and each kick is a pulse of its own, every bell
 * squeezing on the beat.
 *
 * The hands: the swarm drifts after a hand, each a little behind the next;
 * spreading two hands scatters them; a clap makes every bell jet away from
 * the middle at once, then drift back. The music: bass swells the bells and
 * deepens their drift, melody speeds the colour, and the hats ripple the
 * tentacles and brighten the highlights.
 *
 * It can also be hosted, as a part of Nature World: see MotifHost.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof JellyfishConfig;

/** Lobes round each bell. */
const LOBES = 9;
/** Tentacles round the rim, and frilled arms from the middle. */
const TENTACLES = 8;
const ARMS = 4;
/** Points along each, for the trailing chain. */
const LINKS = 9;

/**
 * The swarm, in the order they join as the count goes up. Each drifts round
 * its own patch of water: a centre, how far it wanders, its size, its colour,
 * its phase, and how many pulses it makes in a loop.
 */
interface Swimmer {
  c: [number, number, number];
  a: [number, number, number];
  s: number;
  off: number;
  ph: number;
  pulses: number;
}
const SWARM: Swimmer[] = [
  { c: [0.2, 0.9, 0], a: [1.6, 0.5, 0.8], s: 1.25, off: 0.0, ph: 0.0, pulses: 6 },
  { c: [-3.9, 1.5, -1.2], a: [1.2, 0.6, 0.8], s: 1.0, off: 0.37, ph: 2.1, pulses: 7 },
  { c: [4.1, 0.4, -0.8], a: [1.1, 0.7, 0.6], s: 1.05, off: 0.71, ph: 4.0, pulses: 5 },
  { c: [-2.0, -0.9, 1.2], a: [1.4, 0.4, 0.5], s: 0.8, off: 0.18, ph: 1.0, pulses: 8 },
  { c: [2.4, 2.4, -3.0], a: [1.3, 0.5, 0.8], s: 0.85, off: 0.55, ph: 3.2, pulses: 6 },
  { c: [-5.6, -0.4, -2.6], a: [0.9, 0.6, 0.6], s: 0.8, off: 0.86, ph: 5.0, pulses: 7 },
  { c: [5.8, 2.0, -4.0], a: [0.8, 0.5, 0.6], s: 0.7, off: 0.28, ph: 0.6, pulses: 9 },
  { c: [-0.6, 2.7, -5.0], a: [1.6, 0.4, 0.8], s: 0.7, off: 0.63, ph: 2.7, pulses: 8 },
];
/** Which of them swim at each count — one on its own takes the middle. */
const SHOWN: number[][] = [
  [], [0], [1, 2], [0, 1, 2], [0, 1, 2, 3], [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5, 6], [0, 1, 2, 3, 4, 5, 6, 7],
];

interface Strand {
  tube: Tube;
  /** Where it hangs from, in the jellyfish's own frame. */
  from: THREE.Vector3;
  /** Its place round the rim; null for an arm, which hangs from the middle. */
  angle: number | null;
  /** Its chain, in the swarm's frame. */
  links: THREE.Vector3[];
  /** How long each link is, and how thick the strand is at the bell. */
  link: number;
  radius: number;
  phase: number;
}

interface Jelly {
  spec: Swimmer;
  root: THREE.Group;
  tilts: THREE.Group[];
  lobes: THREE.Mesh[];
  cap: THREE.Mesh;
  strands: Strand[];
  shared: Shared;
  strandShared: Shared;
  presence: number;
  /** Where it is in its pulse, integrated so the tempo can change smoothly. */
  beat: number;
  /** How far its last pulses have carried it up its own axis, and how fast. */
  lift: number;
  rise: number;
  /** How far the hand has pulled it, eased at its own rate. */
  pull: THREE.Vector3;
  /** In water (swarm.water): where it is and how it is moving, carried by its own weight. */
  sp?: THREE.Vector3;
  sv?: THREE.Vector3;
  /** The bell as the hand holds it: 0 open, 1 closed — and where it was last frame. */
  grip?: number;
  gripWas?: number;
  /** Its swimming axis, eased. */
  up: THREE.Vector3;
  last: THREE.Vector3 | null;
  primed: boolean;
}

/** How far the lobes lean down from flat with the bell open, and squeezed. */
const REST_LEAN = 0.62;
const SQUEEZE_LEAN = 0.55;

/** Just inside the rim, at an angle round it, with the lobes leaning so far. */
function rim(a: number, lean: number, out = new THREE.Vector3()): THREE.Vector3 {
  const reach = 0.86;
  return out.set(Math.sin(a) * reach * Math.cos(lean), -reach * Math.sin(lean) + 0.04, Math.cos(a) * reach * Math.cos(lean));
}

/** Where a pulse is, 0 open to 1 squeezed: a quick squeeze, a slow release. */
function squeeze(phase: number): number {
  const p = ((phase / TAU) % 1 + 1) % 1;
  if (p < 0.22) return Math.sin((p / 0.22) * (Math.PI / 2));
  return 0.5 + 0.5 * Math.cos(((p - 0.22) / 0.78) * Math.PI);
}

export class JellyfishRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = JellyfishConfig;
  private readonly host: MotifHost | null;

  private surface: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private look: InflatedLook | null = null;
  /** Everything of the swarm, so a host can place it in its world. */
  readonly group = new THREE.Group();
  private swarm: Jelly[] = [];
  private geometries: THREE.BufferGeometry[] = [];
  private failed = false;
  private playing = new Playing(0.6);

  private motionTime = 0;
  /** The clock's pace, eased over seconds. */
  private pace = 1;
  /** How much the bells are the hand's rather than their own pulse. */
  private handHold = 0;
  private colourTime = 0;
  private started = false;
  /** Seconds since the visual came up: the swarm arrives one by one from below. */
  private since = 0;
  /** How far the music's current has carried the swarm, and how strongly it carries it now. */
  private current = 0;
  private carry = 0;
  /** The bands the bell and the tentacles hear, eased (sound.bell, sound.tentacles). */
  private bellE = 0;
  private tentE = 0;
  /** How far a heavy bass hit has swelled the swarm apart, and the bass it is measured against. */
  private swell = 0;
  private bassAvg = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, host: MotifHost | null = null) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.host = host;
    this.surface = document.createElement('canvas');
    this.scene = host ? host.scene : new THREE.Scene();
    this.camera = host ? host.camera : new THREE.PerspectiveCamera(30, 16 / 9, 0.1, 100);
    try {
      if (!host) this.renderer = makeRenderer(this.surface);
      this.look = host ? host.look : new InflatedLook();
      this.build(this.look);
    } catch (error) {
      console.error('Jellyfish could not start:', error);
      this.failed = true;
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(JellyfishConfig, values);
  }

  private build(look: InflatedLook) {
    const lobeGeo = new THREE.SphereGeometry(1, 44, 30);
    const capGeo = new THREE.SphereGeometry(1, 40, 26);
    this.geometries.push(lobeGeo, capGeo);
    this.scene.add(this.group);

    for (const spec of SWARM) {
      const common = look.shared();
      const strandCommon = look.shared();
      const root = new THREE.Group();
      this.group.add(root);

      // The bell: lobes hanging from the top, leaning out and down, like a
      // flower's petals turned to face the floor.
      const tilts: THREE.Group[] = [];
      const lobes: THREE.Mesh[] = [];
      for (let i = 0; i < LOBES; i++) {
        const a = (i / LOBES) * TAU;
        const pivot = new THREE.Group();
        pivot.rotation.y = a;
        const tilt = new THREE.Group();
        tilt.rotation.x = REST_LEAN;
        pivot.add(tilt);
        const lobe = new THREE.Mesh(lobeGeo, look.material(LOBE, common, { uAng: { value: a } }));
        lobe.scale.set(0.42, 0.18, 0.52);
        lobe.position.set(0, ((i * 5) % 3) * 0.02, 0.48);
        tilt.add(lobe);
        root.add(pivot);
        tilts.push(tilt);
        lobes.push(lobe);
      }
      const cap = new THREE.Mesh(capGeo, look.material(CORE, common));
      // The crown of the dome, sunk into the lobes so it reads as their top
      // rather than a lid on them.
      cap.scale.set(0.44, 0.26, 0.44);
      cap.position.y = -0.1;
      root.add(cap);

      // Tentacles from the rim, frilled arms from the middle: tubes, the
      // flower's stems again, thin and tapering.
      const strands: Strand[] = [];
      const strandMat = look.material(TUBE, strandCommon, { uWS: { value: 0.6 } });
      for (let k = 0; k < TENTACLES + ARMS; k++) {
        const arm = k >= TENTACLES;
        const a = arm ? ((k - TENTACLES) / ARMS) * TAU + 0.4 : (k / TENTACLES) * TAU + 0.2;
        // Tentacles hang from just inside the rim, wherever the squeeze has
        // put it (see rim()); the arms from the middle.
        const from = arm ? new THREE.Vector3(Math.sin(a) * 0.08, -0.25, Math.cos(a) * 0.08) : rim(a, REST_LEAN);
        const links = Array.from({ length: LINKS }, () => new THREE.Vector3());
        const tube = new Tube(strandMat, links, arm ? 48 : 64, arm ? 10 : 6);
        this.group.add(tube.mesh);
        strands.push({
          tube, from, links, angle: arm ? null : a,
          link: arm ? 0.2 : 0.42,
          radius: arm ? 0.085 : 0.028,
          phase: a * 1.7 + k,
        });
      }

      this.swarm.push({
        spec, root, tilts, lobes, cap, strands, shared: common, strandShared: strandCommon,
        presence: 0, beat: spec.ph, lift: 0, rise: 0, pull: new THREE.Vector3(),
        up: new THREE.Vector3(0, 1, 0), last: null, primed: false,
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
        if ((o as THREE.Mesh).isMesh) {
          (o as THREE.Mesh).geometry.dispose();
          ((o as THREE.Mesh).material as THREE.Material).dispose();
        }
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
      drawUnavailable(ctx, width, height, 'JELLYFISH');
      return;
    }
    frameCamera(this.camera, width, height);
    // Height: the camera tilts down or up, so the swarm sits lower or higher in the frame.
    const shift = -cfg.swarm.height * 4.5;
    this.camera.position.set(0, 0.5 + shift, 15.5 / Math.max(0.3, cfg.swarm.zoom));
    this.camera.lookAt(0, 0.1 + shift, 0);
    this.update(handData, colors, audioData);
    if (this.surface.width !== width || this.surface.height !== height) {
      renderer.setSize(width, height, false);
    }
    renderer.render(this.scene, this.camera);
    this.look.backdrop(ctx, width, height, cfg.swarm.backdrop);
    ctx.drawImage(this.surface, 0, 0, width, height);
  }

  /**
   * One frame of the swarm: everything moved and coloured, nothing drawn. A
   * host calls this with its camera already placed, then draws its scene.
   */
  update(handData: HandData, colors: string[], audioData?: AudioData) {
    const { cfg } = this;
    const look = this.look;
    if (!look || this.failed) return;
    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    /*
     * In the water, not on the beat. The shared clock speeds up and slows
     * down with the fingers — and with the music's stand-in hand, which
     * changes its count all the time — so its pace is eased over seconds here,
     * and slowed: a change of tempo is a change of tide, never a lurch. The
     * stand-in hand is not followed at all, nor its spread: only a real hand
     * moves the swarm. And a kick is a squeeze of the bell, not a leap.
     */
    this.pace += (Math.max(0, play.step) - this.pace) * (1 - Math.exp(-dt * 0.6));
    const step = this.pace * 0.6;
    const burst = play.burst * cfg.hands.clap;
    const bump = play.bump * cfg.sound.beat;
    const handed = !handData.synthetic && (handData.left || handData.right) ? 1 : 0;
    // With a real hand in view the bells are hers: a fist closes them, an open
    // palm opens them. Blended in and out, so a hand arriving takes over softly.
    this.handHold += (handed - this.handHold) * (1 - Math.exp(-dt * 3));

    this.motionTime += step;
    this.colourTime += (step * cfg.colour.speed * (1 + play.mid * cfg.sound.mid * 1.2)
      + dt * burst * 0.9) / LOOP;
    const t = this.motionTime;
    const w = (TAU * t) / LOOP;

    const count = Math.max(0, Math.min(8, Math.round(cfg.swarm.count)));
    const first = !this.started;
    if (!this.host) look.update(colors, cfg.colour.palette, dt, first, cfg.colour.style);
    // It opens on empty water: the first rises from below at once, and each
    // of the others a little after the one before, until the count is reached.
    // (Real time, so the finger count does not hold the arrival back.)
    this.since += dt;
    // Each a few seconds after the one before, so they come in one by one, unhurried.
    const shown = new Set(SHOWN[count].slice(0, arrived(this.since * 0.55 * (5 / Math.max(1, cfg.swarm.arrival)), count)));
    if (first) {
      this.started = true;
      this.swarm.forEach((j) => { j.presence = 0; });
    }

    /*
     * A heavy bass hit, against the bass of the last few seconds, swells the
     * swarm apart — quickly, but eased — and it drifts back over seconds.
     */
    const bassNow = audioData?.live ? audioData.bass : 0;
    const hitBy = Math.max(0, bassNow - this.bassAvg - 0.12);
    this.bassAvg += (bassNow - this.bassAvg) * (1 - Math.exp(-dt * 0.5));
    const swellTo = Math.min(1, hitBy * 2.2) * cfg.sound.swell;
    this.swell += (swellTo - this.swell) * (1 - Math.exp(-dt * (swellTo > this.swell ? 2.5 : 0.45)));
    const handScatter = handed ? Math.max(0.3, 1 + (play.spread - 0.4) * cfg.hands.spread * 1.6) : 1;
    const scatter = handScatter * (1 + this.swell * 0.9);
    const hand = new THREE.Vector3(play.aim.x * 4.6, play.aim.y * 2.1, 0)
      .multiplyScalar(cfg.hands.follow * handed);
    /*
     * Which part of the sound moves what (sound.bell, sound.tentacles): -1 as
     * designed (the bass for the bell, the hats for the tentacles), 0 all of
     * it, 1 the lows, 2 the mids, 3 the highs. The bell — its swell, its
     * squeeze, its wandering — follows one; the tentacles' ripple the other.
     */
    const band = (b: number, fallback: number) => {
      const r = Math.round(b);
      const a = audioData;
      if (r < 0 || !a) return fallback;
      return r === 1 ? Math.max(a.bass, a.lowMid * 0.6) : r === 2 ? a.mid : r === 3 ? a.high : a.overall;
    };
    const bellPick = Math.round(cfg.sound.bell ?? -1);
    this.bellE += (band(bellPick, play.bass) - this.bellE) * (1 - Math.exp(-dt * 3));
    const bellHears = bellPick < 0 ? play.bass : this.bellE;
    this.tentE += (band(cfg.sound.tentacles ?? -1, play.high) - this.tentE) * (1 - Math.exp(-dt * 6));
    const tentHears = Math.round(cfg.sound.tentacles ?? -1) < 0 ? play.high : this.tentE;
    const wander = cfg.swarm.drift * (1 + bellHears * cfg.sound.bass * 0.8);
    // The current: with music it runs faster and sways them further, slowly
    // easing in and out so a change in the music is a change of tide, not a jolt.
    const live = !!audioData?.live;
    const fullness = live ? 0.35 + 0.65 * play.energy + 0.4 * play.mid : 0.35;
    this.carry += (cfg.sound.flow * fullness - this.carry) * (1 - Math.exp(-dt * 0.35));
    // On the shared clock, so the finger count sets its pace as everywhere.
    this.current += step * (0.18 + 0.5 * this.carry);
    const spec = 0.16 * (1 + tentHears * cfg.sound.high * 2.5);
    const ripple = 1 + tentHears * cfg.sound.high * 1.5;
    const size = cfg.swarm.size;

    const p = new THREE.Vector3();
    const kickOff = new THREE.Vector3();
    const q = new THREE.Quaternion();
    const Y = new THREE.Vector3(0, 1, 0);
    const v = new THREE.Vector3();
    const side = new THREE.Vector3();
    const centre = new THREE.Vector3();

    this.swarm.forEach((j, index) => {
      const want = shown.has(index) ? 1 : 0;
      // At an even pace — about five seconds to rise in, three to sink away —
      // rather than a rush that slows: eased at both ends below.
      j.presence = want > j.presence ? Math.min(want, j.presence + dt / Math.max(1, cfg.swarm.arrival)) : Math.max(want, j.presence - dt / 3);
      if (j.presence < 0.004 && want === 0) j.presence = 0;
      const visible = j.presence > 0.002;
      j.root.visible = visible;
      for (const s of j.strands) s.tube.mesh.visible = visible;
      if (!visible) { j.last = null; j.primed = false; return; }
      const sw = j.spec;

      // The pulse: on the clock, quicker for a clap, and each kick a squeeze.
      j.beat += step * TAU * (sw.pulses / LOOP) + dt * burst * TAU * 1.5;
      const own = squeeze(j.beat);
      // The band the bell hears squeezes it too, as it swells and falls.
      const squeezed = Math.min(1.3, Math.max(own, bump * 0.7) + burst * 0.4 + (bellPick >= 0 ? this.bellE * 0.35 : 0));
      // The hand's bell: each follows the hand a moment behind the one before,
      // so the swarm closes and opens as a ripple rather than all at once.
      const grip = (j.grip ?? 0) + (play.fist - (j.grip ?? 0)) * (1 - Math.exp(-dt * (7 - index * 0.7)));
      const closing = Math.max(0, (grip - (j.gripWas ?? grip)) / Math.max(dt, 1e-3));
      j.gripWas = grip;
      j.grip = grip;
      const hold = this.handHold;
      const pulse = (squeezed * (1 - hold) + grip * hold) * cfg.swarm.pulse;
      // Its own slow pulses push it gently up its axis; a kick squeezes the
      // bell but barely moves it. Between, it glides and sinks. Held by the
      // hand, it is the closing that pushes — as a real one swims.
      const push = (Math.min(1.3, own + bump * 0.15 + burst * 0.4 + this.swell * 0.5) * (1 - hold) + Math.min(1.3, closing * 0.35) * hold) * cfg.swarm.pulse;
      // Still arriving, it glides in: its own pulses only take hold as it settles.
      const settled = j.presence * j.presence;
      j.rise += (push * 1.5 * settled - j.rise * 1.2) * dt;
      j.lift += (j.rise - j.lift * 0.35) * dt * 0.8;

      // Its patch of water, opened or gathered by the hands, followed by the
      // hand at its own lag so the swarm trails.
      p.set(
        sw.c[0] * scatter + sw.a[0] * wander * Math.sin(w + sw.ph),
        sw.c[1] * Math.min(1.4, scatter) + sw.a[1] * wander * Math.sin(2 * w + sw.ph * 1.7),
        sw.c[2] + sw.a[2] * wander * Math.cos(w + sw.ph * 0.6),
      );
      // Carried on the current, each a little behind the one before.
      const tide = this.current - index * 0.35;
      p.x += Math.sin(tide + sw.ph * 0.5) * 0.9 * this.carry;
      p.y += Math.sin(tide * 0.63 + sw.ph) * 0.3 * this.carry;
      p.z += Math.cos(tide * 0.8 + sw.ph * 1.3) * 0.5 * this.carry;
      const lag = 0.8 + 1.6 * (1 - index / SWARM.length);
      j.pull.lerp(hand, 1 - Math.exp(-dt * lag));
      p.add(j.pull);
      kickOff.set(0, 0, 0);
      // A clap jets them out from the middle.
      if (burst > 0.001) {
        v.set(p.x, p.y - 0.5, 0);
        if (v.lengthSq() < 0.01) v.set(index % 2 ? 1 : -1, 0.4, 0);
        kickOff.copy(v.normalize()).multiplyScalar(burst * 2.6);
        p.add(kickOff);
      }
      // Still arriving, it rises straight and calm: the drift, the current and
      // the hand only take hold of it as it settles in.
      {
        const pr0 = j.presence;
        const calm = 0.15 + 0.85 * pr0 * pr0 * pr0;
        const cx = sw.c[0] * scatter, cz = sw.c[2];
        p.x = cx + (p.x - cx) * calm;
        p.z = cz + (p.z - cz) * calm;
      }
      /*
       * Water: it does not go where the drift says, it is carried there — a
       * soft spring through heavy water, a little past and back — while its
       * own weight sinks it between pulses and each squeeze of the bell
       * drives it up. Floating, not placed.
       */
      const water = Math.max(0, cfg.swarm.water ?? 0);
      if (water > 0) {
        // The music's own throws — a heavy bass hit swelling the swarm apart, a
        // clap jetting them out — ride on top of the water, so they still land.
        kickOff.x += sw.c[0] * handScatter * this.swell * 0.9;
        kickOff.y += sw.c[1] * (Math.min(1.4, scatter) - Math.min(1.4, handScatter));
        p.sub(kickOff);
        if (!j.sp || !j.sv) { j.sp = p.clone(); j.sv = new THREE.Vector3(); }
        const k = 2.2 / (water * water), c = 1.9 / water;
        j.sv.x += ((p.x - j.sp.x) * k - j.sv.x * c) * dt;
        j.sv.y += ((p.y - j.sp.y) * k - j.sv.y * c) * dt;
        j.sv.z += ((p.z - j.sp.z) * k - j.sv.z * c) * dt;
        // Its weight, and the thrust of each closing of the bell.
        j.sv.y += (push * 2.4 - 0.7) * dt * Math.min(1, water);
        j.sp.addScaledVector(j.sv, dt);
        p.copy(j.sp).add(kickOff);
      }
      // Swimming up its own axis, which leans the way it drifts.
      if (j.last) {
        v.subVectors(p, j.last).divideScalar(Math.max(dt, 1e-3));
        // Carried by water it leans less: a gentle tilt into the drift, not a dive.
        const leanBy = 1 / (1 + 1.5 * water);
        const target = new THREE.Vector3(THREE.MathUtils.clamp(v.x * 0.12 * leanBy, -0.6, 0.6), 1, v.z * 0.08 * leanBy).normalize();
        j.up.lerp(target, 1 - Math.exp(-dt * 1.5)).normalize();
      }
      j.last = (j.last ?? new THREE.Vector3()).copy(p);
      p.addScaledVector(j.up, j.lift - 0.6);
      // Arriving from below, leaving downward.
      // Eased at both ends: it starts rising gently and settles gently.
      const pr = j.presence;
      const grow = pr * pr * pr * (pr * (pr * 6 - 15) + 10);
      p.y -= (1 - grow) * 7;
      // They swim a little lower in the frame, with room above them…
      p.y -= 0.9;
      const s = sw.s * size * (0.3 + 0.7 * grow) * (1 + bellHears * cfg.sound.bass * 0.08 + bump * 0.04);
      // …and never up through the top edge: a soft ceiling a bell's height
      // under it, so the heads stay whole however high they swim or drift.
      {
        const cam = this.camera.position;
        const half = Math.tan((this.camera.fov * Math.PI) / 360) * Math.max(1, cam.z - p.z);
        const top = cam.y + half - 1.5 * s;
        const soft = top - 0.8;
        if (p.y > soft) p.y = soft + 0.8 * (1 - Math.exp(-(p.y - soft) / 0.8));
      }
      j.root.position.copy(p);
      q.setFromUnitVectors(Y, j.up);
      j.root.quaternion.copy(q);
      j.root.rotateY(Math.sin(w + sw.ph) * 0.4 * j.presence);
      j.root.scale.setScalar(s);

      // The bell: open and wide at rest, squeezed tall and narrow.
      const lean = REST_LEAN + SQUEEZE_LEAN * pulse;
      for (const tl of j.tilts) tl.rotation.x = lean;
      for (const lobe of j.lobes) lobe.scale.y = 0.18 * (1 - 0.18 * pulse);
      j.cap.scale.set(0.44 * (1 - 0.2 * pulse), 0.26 * (1 + 0.08 * pulse), 0.44 * (1 - 0.2 * pulse));

      // The strands trail: each link hangs from the one before, pulled back
      // down the body's axis and waving sideways in a travelling ripple.
      j.root.updateMatrix();
      const trail = cfg.swarm.tentacles;
      const down = j.up.clone().negate();
      side.set(1, 0, 0).applyQuaternion(j.root.quaternion);
      for (const strand of j.strands) {
        const links = strand.links;
        if (strand.angle !== null) rim(strand.angle, lean, strand.from);
        const head = links[0].copy(strand.from).applyMatrix4(j.root.matrix);
        if (!j.primed) {
          for (let i = 1; i < LINKS; i++) links[i].copy(head).addScaledVector(down, strand.link * s * trail * i);
        }
        for (let i = 1; i < LINKS; i++) {
          const prev = links[i - 1];
          const link = links[i];
          v.subVectors(link, prev);
          if (v.lengthSq() < 1e-8) v.copy(down);
          v.normalize().lerp(down, 0.22 + 0.1 * pulse).normalize();
          const wave = Math.sin(strand.phase + w * 3 * ripple - i * 0.75) * 0.06 * ripple * (i / LINKS);
          v.addScaledVector(side, wave).normalize();
          link.copy(prev).addScaledVector(v, strand.link * s * trail);
        }
        strand.tube.update(strand.radius * s, 0.25);
      }
      j.primed = true;

      const u = j.shared;
      u.uT.value = this.colourTime;
      u.uOff.value = sw.off + cfg.colour.offset;
      u.uWA.value = 1;
      u.uWB.value = 0.6;
      u.uWC.value = 0.8 + 0.4 * Math.sin(w + sw.ph);
      const st = j.strandShared;
      st.uT.value = this.colourTime;
      st.uOff.value = sw.off + 0.15 + cfg.colour.offset;
      look.apply(u, cfg.colour.depth, spec);
      look.apply(st, cfg.colour.depth, spec);
    });

    // Where each bell's middle is, from the camera, for the inflated shading.
    this.scene.updateMatrixWorld(true);
    this.camera.updateMatrixWorld(true);
    for (const j of this.swarm) {
      if (!j.root.visible) continue;
      j.cap.getWorldPosition(centre);
      centre.applyMatrix4(this.camera.matrixWorldInverse);
      j.shared.uCenter.value.copy(centre);
    }
  }
}
