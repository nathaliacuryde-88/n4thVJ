import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { JellyfishConfig } from '../../config/JellyfishRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { disposeThree } from './disposeThree';
import {
  CORE, InflatedLook, LOBE, LOOP, MotifHost, Playing, Shared, TAU, TUBE,
  drawBackdrop, drawUnavailable, frameCamera, makeRenderer,
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
  private colourTime = 0;
  private started = false;

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
    this.camera.position.set(0, 0.5, 15.5);
    this.camera.lookAt(0, 0.1, 0);
    this.update(handData, colors, audioData);
    if (this.surface.width !== width || this.surface.height !== height) {
      renderer.setSize(width, height, false);
    }
    renderer.render(this.scene, this.camera);
    drawBackdrop(ctx, width, height, cfg.swarm.backdrop);
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
    const step = Math.max(0, play.step);
    const burst = play.burst * cfg.hands.clap;
    const bump = play.bump * cfg.sound.beat;
    const handed = handData.left || handData.right ? 1 : 0;

    this.motionTime += step;
    this.colourTime += (step * cfg.colour.speed * (1 + play.mid * cfg.sound.mid * 1.2)
      + dt * burst * 0.9) / LOOP;
    const t = this.motionTime;
    const w = (TAU * t) / LOOP;

    const count = Math.max(0, Math.min(8, Math.round(cfg.swarm.count)));
    const shown = new Set(SHOWN[count]);
    const first = !this.started;
    if (!this.host) look.update(colors, cfg.colour.palette, dt, first);
    if (first) {
      this.started = true;
      this.swarm.forEach((j, i) => { j.presence = shown.has(i) ? 1 : 0; });
    }

    const scatter = Math.max(0.3, 1 + (play.spread - 0.4) * cfg.hands.spread * 1.6);
    const hand = new THREE.Vector3(play.aim.x * 4.6, play.aim.y * 2.1, 0)
      .multiplyScalar(cfg.hands.follow * handed);
    const wander = cfg.swarm.drift * (1 + play.bass * cfg.sound.bass * 0.8);
    const spec = 0.16 * (1 + play.high * cfg.sound.high * 2.5);
    const ripple = 1 + play.high * cfg.sound.high * 1.5;
    const size = cfg.swarm.size;

    const p = new THREE.Vector3();
    const q = new THREE.Quaternion();
    const Y = new THREE.Vector3(0, 1, 0);
    const v = new THREE.Vector3();
    const side = new THREE.Vector3();
    const centre = new THREE.Vector3();

    this.swarm.forEach((j, index) => {
      const want = shown.has(index) ? 1 : 0;
      j.presence += (want - j.presence) * (1 - Math.exp(-dt * 1.4));
      if (j.presence < 0.004 && want === 0) j.presence = 0;
      const visible = j.presence > 0.002;
      j.root.visible = visible;
      for (const s of j.strands) s.tube.mesh.visible = visible;
      if (!visible) { j.last = null; j.primed = false; return; }
      const sw = j.spec;

      // The pulse: on the clock, quicker for a clap, and each kick a squeeze.
      j.beat += step * TAU * (sw.pulses / LOOP) + dt * burst * TAU * 1.5;
      const squeezed = Math.min(1.3, Math.max(squeeze(j.beat), bump * 1.1) + burst * 0.4);
      const pulse = squeezed * cfg.swarm.pulse;
      // Each squeeze pushes it up its own axis; between, it glides and sinks.
      j.rise += (pulse * 2.4 - j.rise * 1.6) * dt;
      j.lift += (j.rise - j.lift * 0.35) * dt;

      // Its patch of water, opened or gathered by the hands, followed by the
      // hand at its own lag so the swarm trails.
      p.set(
        sw.c[0] * scatter + sw.a[0] * wander * Math.sin(w + sw.ph),
        sw.c[1] * Math.min(1.4, scatter) + sw.a[1] * wander * Math.sin(2 * w + sw.ph * 1.7),
        sw.c[2] + sw.a[2] * wander * Math.cos(w + sw.ph * 0.6),
      );
      const lag = 0.8 + 1.6 * (1 - index / SWARM.length);
      j.pull.lerp(hand, 1 - Math.exp(-dt * lag));
      p.add(j.pull);
      // A clap jets them out from the middle.
      if (burst > 0.001) {
        v.set(p.x, p.y - 0.5, 0);
        if (v.lengthSq() < 0.01) v.set(index % 2 ? 1 : -1, 0.4, 0);
        p.addScaledVector(v.normalize(), burst * 2.6);
      }
      // Swimming up its own axis, which leans the way it drifts.
      if (j.last) {
        v.subVectors(p, j.last).divideScalar(Math.max(dt, 1e-3));
        const target = new THREE.Vector3(v.x * 0.12, 1, v.z * 0.08).normalize();
        j.up.lerp(target, 1 - Math.exp(-dt * 1.5)).normalize();
      }
      j.last = (j.last ?? new THREE.Vector3()).copy(p);
      p.addScaledVector(j.up, j.lift - 0.6);
      // Arriving from below, leaving downward.
      const grow = 1 - Math.pow(1 - j.presence, 3);
      p.y -= (1 - grow) * 7;

      const s = sw.s * size * (0.3 + 0.7 * grow) * (1 + play.bass * cfg.sound.bass * 0.08 + bump * 0.04);
      j.root.position.copy(p);
      q.setFromUnitVectors(Y, j.up);
      j.root.quaternion.copy(q);
      j.root.rotateY(Math.sin(w + sw.ph) * 0.4);
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
