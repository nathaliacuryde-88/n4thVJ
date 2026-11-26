import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { MorphingSphereConfig } from '../../config/MorphingSphereRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { disposeThree } from './disposeThree';
import { Playing } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * MORPHING SPHERE
 * ═══════════════════════════════════════════════════════════════════════════
 * A wire sphere at the middle of the frame. At rest it is round; the music
 * swells it into a few soft lobes that travel over it, and it turns about
 * its own centre, faster as the music fills.
 *
 * Its shape comes from a smooth field over the sphere (three slow waves at
 * angles to one another), so however far it is pushed it stays a body with
 * rounded lobes, never a burst of spikes.
 *
 * THE HANDS: a pinch or a fist pulls it out of shape, an open hand lets it
 * round off again; it leans a little towards the hand but keeps to the
 * middle. A clap bursts it outward, and it gathers.
 *
 * THE MUSIC: bass swells the lobes, each kick sends a pulse through it,
 * melody and a fuller passage spin it faster, a build-up draws it out and the
 * drop bursts it.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof MorphingSphereConfig;

export class MorphingSphereRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = MorphingSphereConfig;
  private playing = new Playing(0.6);

  private surface = document.createElement('canvas');
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(50, 16 / 9, 0.1, 100);
  private renderer: THREE.WebGLRenderer;
  private group = new THREE.Group();
  /** The sphere's corners, each once, and the edges between them as pairs of corners. */
  private corners: Float32Array = new Float32Array(0);
  private edges: Uint32Array = new Uint32Array(0);
  private shaped: Float32Array = new Float32Array(0);
  private points: THREE.Points | null = null;
  private lines: THREE.LineSegments | null = null;
  private builtDetail = -1;
  private wire: THREE.LineBasicMaterial;
  private dots: THREE.PointsMaterial;
  private dust: THREE.Points;

  private time = 0;
  private flow = 0;
  private spin = 0;
  private pull = 0;
  private swell = 0;
  private pulse = 0;
  private burst = 0;
  private lastDrop = 0;
  /** The kick's dent: how deep, and from which side (a unit vector, turned with the shape). */
  private dent = 0;
  private dentDir = new THREE.Vector3(1, 0, 0);
  private lastSquash = 0;
  private at = new THREE.Vector2();

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.renderer = new THREE.WebGLRenderer({ canvas: this.surface, antialias: true, alpha: false });
    this.renderer.setPixelRatio(1);
    this.renderer.setClearColor(0x000000, 1);
    this.camera.position.set(0, 0, 7.5);
    this.camera.lookAt(0, 0, 0);
    this.scene.add(this.group);

    this.wire = new THREE.LineBasicMaterial({ color: 0x66ccff, transparent: true, opacity: 0.85 });
    this.dots = new THREE.PointsMaterial({ color: 0x66ccff, size: 0.09, transparent: true, opacity: 1, depthWrite: false });

    // Made at the most there can be; the slider shows the first however-many.
    const count = 6000;
    const dust = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 14;
      const a = Math.random() * Math.PI * 2;
      const c = Math.random() * 2 - 1;
      const s = Math.sqrt(1 - c * c);
      // Always behind the sphere, never near the camera, where a point turns into a square.
      dust.set([r * s * Math.cos(a), r * c, -Math.abs(r * s * Math.sin(a)) - 3], i * 3);
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dust, 3));
    this.dust = new THREE.Points(dustGeometry, new THREE.PointsMaterial({ color: 0xffffff, size: 0.03, transparent: true, opacity: 0.5, depthWrite: false }));
    this.scene.add(this.dust);
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(MorphingSphereConfig, values);
  }

  /**
   * The sphere at this detail, as its corners and its edges: drawn as points,
   * and as lines that grow out of each corner towards its neighbours.
   */
  private build(detail: number) {
    if (this.points) {
      this.group.remove(this.points, this.lines!);
      this.points.geometry.dispose();
      this.lines!.geometry.dispose();
    }
    const source = new THREE.IcosahedronGeometry(1, detail);
    const flat = source.attributes.position.array as Float32Array;
    // The geometry repeats a corner for every face it touches: one of each.
    const index = new Map<string, number>();
    const corners: number[] = [];
    const which: number[] = [];
    for (let i = 0; i < flat.length; i += 3) {
      const key = `${flat[i].toFixed(4)},${flat[i + 1].toFixed(4)},${flat[i + 2].toFixed(4)}`;
      let at = index.get(key);
      if (at === undefined) {
        at = corners.length / 3;
        index.set(key, at);
        corners.push(flat[i], flat[i + 1], flat[i + 2]);
      }
      which.push(at);
    }
    const seen = new Set<number>();
    const edges: number[] = [];
    const n = corners.length / 3;
    for (let f = 0; f < which.length; f += 3) {
      for (const [a, b] of [[which[f], which[f + 1]], [which[f + 1], which[f + 2]], [which[f + 2], which[f]]]) {
        const key = a < b ? a * n + b : b * n + a;
        if (seen.has(key)) continue;
        seen.add(key);
        edges.push(a, b);
      }
    }
    source.dispose();
    this.corners = Float32Array.from(corners);
    this.shaped = new Float32Array(corners.length);
    this.edges = Uint32Array.from(edges);
    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute('position', new THREE.BufferAttribute(this.shaped, 3));
    // Each edge is two half-lines, one from each end, that meet in the middle when full.
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(edges.length * 2 * 3), 3));
    this.points = new THREE.Points(pointGeometry, this.dots);
    this.lines = new THREE.LineSegments(lineGeometry, this.wire);
    this.points.frustumCulled = false;
    this.lines.frustumCulled = false;
    this.group.add(this.lines, this.points);
    this.builtDetail = detail;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { canvas, ctx, cfg } = this;
    const W = canvas.width;
    const H = canvas.height;
    if (!W || !H) return;
    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    const step = Math.max(0, play.step);
    const ease = (rate: number) => 1 - Math.exp(-dt * rate);
    this.time += step;

    const detail = Math.max(2, Math.min(6, Math.round(cfg.shape.detail)));
    if (detail !== this.builtDetail) this.build(detail);

    // ── how far out of the round ─────────────────────────────────────────
    const hands = [handData.left, handData.right];
    const real = !handData.synthetic && hands.some(Boolean);
    const squeeze = real ? Math.max(play.fist, play.pinch) : 0;
    this.pull += (squeeze * cfg.hands.shape - this.pull) * ease(4);
    this.swell += (play.bass * cfg.sound.bass - this.swell) * ease(5);
    const kick = Math.max(play.kick, play.bump) * cfg.sound.beat;
    this.pulse = Math.max(this.pulse * Math.exp(-dt * 6), Math.min(1, kick));
    if (play.clapped && cfg.hands.clap > 0) this.burst = Math.max(this.burst, play.clapStrength * cfg.hands.clap);
    if (play.drop > 0.5 && this.lastDrop <= 0.5) this.burst = Math.max(this.burst, 0.9 * cfg.sound.drop);
    // A kick squashes it: one side pressed in towards the middle — pressed
    // quickly, released softly — each time from somewhere else.
    const hit = Math.max(play.kick, play.bump);
    if (cfg.sound.squash > 0 && hit > 0.45 && this.lastSquash <= 0.45) {
      this.dent = Math.max(this.dent, Math.min(1, hit) * cfg.sound.squash);
      this.dentDir.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    }
    this.lastSquash = hit;
    this.dent *= Math.exp(-dt * 2.6);
    this.lastDrop = play.drop;
    this.burst *= Math.exp(-dt * 2.2);
    const amount = cfg.shape.morph + 0.35 * this.swell + 0.5 * this.pull + 0.25 * play.build;

    // ── the shape: three slow waves over the sphere, always rounded ──────
    this.flow += step * 0.35 * cfg.motion.flow * (1 + this.swell);
    const f = 1.1 * Math.max(0.3, cfg.shape.lobes);
    const t = this.flow;
    const o = this.corners;
    const arr = this.shaped;
    let meanR = 0;
    for (let i = 0; i < o.length; i += 3) {
      const x = o[i], y = o[i + 1], z = o[i + 2];
      const n = Math.sin(x * f * 1.7 + t) * 0.5
        + Math.sin(y * f * 2.1 - t * 0.8 + 1.3) * 0.35
        + Math.sin((x + z) * f * 1.4 + t * 1.3 + 2.1) * 0.3
        + Math.sin((y - z) * f * 2.6 - t * 0.6) * 0.15 * (0.5 + this.pull);
      const facing = Math.max(0, x * this.dentDir.x + y * this.dentDir.y + z * this.dentDir.z);
      const r = 1 + n * amount + this.pulse * 0.08 * (0.6 + 0.4 * Math.sin(y * 3 + t)) + this.burst * 0.6 * (0.7 + 0.3 * n)
        - this.dent * 0.35 * facing * facing;
      arr[i] = x * r; arr[i + 1] = y * r; arr[i + 2] = z * r;
      meanR += Math.max(0, r);
    }
    // Steady: however far it is drawn out of the round, its mean size held,
    // so the morph reads as a change of shape and never as growing or shrinking.
    if (cfg.shape.steady > 0) {
      const mean = meanR / Math.max(1, o.length / 3);
      const k = 1 + ((1 / Math.max(0.3, mean)) - 1) * Math.min(1, cfg.shape.steady);
      for (let i = 0; i < arr.length; i++) arr[i] *= k;
    }
    (this.points!.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

    // The lines: from points alone (Style 0) growing out of each corner
    // until they meet their neighbours' in a full outline (Style 2).
    const st = Math.max(0, Math.min(2, cfg.shape.style));
    const reach = 0.5 * Math.min(1, st / 2);
    const linePos = this.lines!.geometry.attributes.position as THREE.BufferAttribute;
    const L = linePos.array as Float32Array;
    const e = this.edges;
    for (let k = 0, w = 0; k < e.length; k += 2) {
      const a = e[k] * 3, b = e[k + 1] * 3;
      const ax = arr[a], ay = arr[a + 1], az = arr[a + 2];
      const bx = arr[b], by = arr[b + 1], bz = arr[b + 2];
      L[w++] = ax; L[w++] = ay; L[w++] = az;
      L[w++] = ax + (bx - ax) * reach; L[w++] = ay + (by - ay) * reach; L[w++] = az + (bz - az) * reach;
      L[w++] = bx; L[w++] = by; L[w++] = bz;
      L[w++] = bx + (ax - bx) * reach; L[w++] = by + (ay - by) * reach; L[w++] = bz + (az - bz) * reach;
    }
    linePos.needsUpdate = true;
    this.lines!.visible = reach > 0.004;

    // ── turning about its centre, leaning a little to the hand ───────────
    this.spin += step * 0.35 * cfg.motion.spin * (1 + cfg.sound.spin * (0.8 * play.mid + 0.6 * play.energy));
    this.group.rotation.set(0.35 + Math.sin(this.time * 0.13) * 0.25, this.spin, Math.sin(this.time * 0.09) * 0.2);
    const follow = real ? cfg.hands.follow : cfg.hands.follow * 0.3;
    this.at.x += (play.aim.x * 2.2 * follow - this.at.x) * ease(2);
    this.at.y += (play.aim.y * 1.3 * follow - this.at.y) * ease(2);
    this.group.position.set(this.at.x, this.at.y, 0);
    this.group.scale.setScalar(1.6 * Math.max(0.2, cfg.shape.size) * (1 + 0.05 * this.pulse));

    // ── look ─────────────────────────────────────────────────────────────
    // The points are always there, a touch smaller once the outline has grown in.
    const outline = Math.min(1, st / 2);
    const c = new THREE.Color(colors[0] ?? '#66ccff');
    const c2 = new THREE.Color(colors[1] ?? colors[0] ?? '#3300ff');
    const lit = c.clone().lerp(new THREE.Color(1, 1, 1), 0.25 + 0.4 * this.pulse);
    this.wire.color.copy(lit);
    this.dots.color.copy(lit.clone().lerp(c2, 0.3));
    this.dots.size = (0.08 + 0.05 * this.pulse) * (1 - 0.35 * outline);
    this.dots.opacity = 1;
    this.wire.opacity = 0.55 + 0.4 * Math.min(1, this.swell + this.pulse);
    const dustMat = this.dust.material as THREE.PointsMaterial;
    dustMat.opacity = Math.max(0, Math.min(1, cfg.motion.dust));
    const shown = Math.max(0, Math.min(6000, Math.round(cfg.motion.points)));
    this.dust.geometry.setDrawRange(0, shown);
    this.dust.visible = cfg.motion.dust > 0.01 && shown > 0;
    this.dust.rotation.y = -this.time * 0.03;

    if (this.surface.width !== W || this.surface.height !== H) {
      this.renderer.setSize(W, H, false);
    }
    this.camera.aspect = W / H;
    this.camera.updateProjectionMatrix();
    this.renderer.render(this.scene, this.camera);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.drawImage(this.surface, 0, 0, W, H);
  }

  destroy() {
    disposeThree(this.scene, this.renderer);
  }
}
