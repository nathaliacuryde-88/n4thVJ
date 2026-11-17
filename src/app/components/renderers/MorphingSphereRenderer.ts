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
  private mesh: THREE.Mesh | null = null;
  private points: THREE.Points | null = null;
  private original: Float32Array = new Float32Array(0);
  private builtDetail = -1;
  private wire: THREE.MeshBasicMaterial;
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

    this.wire = new THREE.MeshBasicMaterial({ color: 0x66ccff, wireframe: true, transparent: true, opacity: 0.85 });
    this.dots = new THREE.PointsMaterial({ color: 0x66ccff, size: 0.09, transparent: true, opacity: 1, depthWrite: false });

    const count = 1400;
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

  /** The sphere at this detail: a wire mesh and the same points, sharing one geometry. */
  private build(detail: number) {
    if (this.mesh) {
      this.group.remove(this.mesh);
      this.group.remove(this.points!);
      this.mesh.geometry.dispose();
    }
    const geometry = new THREE.IcosahedronGeometry(1, detail);
    this.original = Float32Array.from(geometry.attributes.position.array as Float32Array);
    this.mesh = new THREE.Mesh(geometry, this.wire);
    this.points = new THREE.Points(geometry, this.dots);
    this.group.add(this.mesh, this.points);
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
    if (play.drop > 0.5 && this.lastDrop <= 0.5) this.burst = Math.max(this.burst, 0.9);
    this.lastDrop = play.drop;
    this.burst *= Math.exp(-dt * 2.2);
    const amount = cfg.shape.morph + 0.35 * this.swell + 0.5 * this.pull + 0.25 * play.build;

    // ── the shape: three slow waves over the sphere, always rounded ──────
    this.flow += step * 0.35 * cfg.motion.flow * (1 + this.swell);
    const f = 1.1 * Math.max(0.3, cfg.shape.lobes);
    const t = this.flow;
    const pos = this.mesh!.geometry.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    const o = this.original;
    for (let i = 0; i < o.length; i += 3) {
      const x = o[i], y = o[i + 1], z = o[i + 2];
      const n = Math.sin(x * f * 1.7 + t) * 0.5
        + Math.sin(y * f * 2.1 - t * 0.8 + 1.3) * 0.35
        + Math.sin((x + z) * f * 1.4 + t * 1.3 + 2.1) * 0.3
        + Math.sin((y - z) * f * 2.6 - t * 0.6) * 0.15 * (0.5 + this.pull);
      const r = 1 + n * amount + this.pulse * 0.08 * (0.6 + 0.4 * Math.sin(y * 3 + t)) + this.burst * 0.6 * (0.7 + 0.3 * n);
      arr[i] = x * r; arr[i + 1] = y * r; arr[i + 2] = z * r;
    }
    pos.needsUpdate = true;

    // ── turning about its centre, leaning a little to the hand ───────────
    this.spin += step * 0.35 * cfg.motion.spin * (1 + cfg.sound.spin * (0.8 * play.mid + 0.6 * play.energy));
    this.group.rotation.set(0.35 + Math.sin(this.time * 0.13) * 0.25, this.spin, Math.sin(this.time * 0.09) * 0.2);
    const follow = real ? cfg.hands.follow : cfg.hands.follow * 0.3;
    this.at.x += (play.aim.x * 2.2 * follow - this.at.x) * ease(2);
    this.at.y += (play.aim.y * 1.3 * follow - this.at.y) * ease(2);
    this.group.position.set(this.at.x, this.at.y, 0);
    this.group.scale.setScalar(1.6 * Math.max(0.2, cfg.shape.size) * (1 + 0.05 * this.pulse));

    // ── look ─────────────────────────────────────────────────────────────
    const asDots = Math.round(cfg.shape.style) === 1;
    this.mesh!.visible = !asDots;
    this.points!.visible = asDots;
    const c = new THREE.Color(colors[0] ?? '#66ccff');
    const c2 = new THREE.Color(colors[1] ?? colors[0] ?? '#3300ff');
    const lit = c.clone().lerp(new THREE.Color(1, 1, 1), 0.25 + 0.4 * this.pulse);
    this.wire.color.copy(lit);
    this.dots.color.copy(lit.clone().lerp(c2, 0.3));
    this.dots.size = 0.08 + 0.05 * this.pulse;
    this.wire.opacity = 0.55 + 0.4 * Math.min(1, this.swell + this.pulse);
    const dustMat = this.dust.material as THREE.PointsMaterial;
    dustMat.opacity = Math.max(0, Math.min(1, cfg.motion.dust));
    this.dust.visible = cfg.motion.dust > 0.01;
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
