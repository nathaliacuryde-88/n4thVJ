import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { AudioData, HandData, Hand } from '../../App';
import { SlapConfig } from '../../config/SlapRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { Playing, drawUnavailable, makeRenderer } from './inflated/style';
import headUrl from '../../assets/head.glb?url';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SLAP
 * ═══════════════════════════════════════════════════════════════════════════
 * A head in the middle of the frame, and an open hand that can slap it.
 *
 * An open hand moving fast through the head is a slap: the head takes the
 * hand's direction and speed, dents where the hand landed, wobbles like
 * jelly, flushes red, and flies off spinning. It bounces round the edges of
 * the frame, and once it has been left alone a moment a spring brings it
 * back to the middle and turns it to face you again.
 *
 * The rules every visual follows: the finger count sets the tempo (how fast
 * it all plays) through the shared clock, and a clap is explosive — it slaps
 * the head from a random side, hard. The music: each kick knocks it a
 * little, the bass makes it bob. Your hand can be drawn on screen as a
 * glove, so on the projection it reads as a slap.
 *
 * The model is "Jair Bolsonaro" by lexferreira89 (Sketchfab), CC-BY-4.0 —
 * see ATTRIBUTIONS.md.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof SlapConfig;

interface HeadModel {
  /** The pieces (face, hair), centred and scaled to stand two units tall. */
  parts: { geometry: THREE.BufferGeometry; material: THREE.Material }[];
}

let pending: Promise<HeadModel> | null = null;

/** Loads the head once, for every Slap renderer. */
function loadHead(): Promise<HeadModel> {
  if (!pending) {
    pending = new GLTFLoader().loadAsync(headUrl).then((gltf) => {
      gltf.scene.updateMatrixWorld(true);
      const parts: HeadModel['parts'] = [];
      const box = new THREE.Box3();
      gltf.scene.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (!mesh.isMesh) return;
        const geometry = mesh.geometry.clone();
        geometry.applyMatrix4(mesh.matrixWorld);
        geometry.computeBoundingBox();
        box.union(geometry.boundingBox!);
        parts.push({ geometry, material: mesh.material as THREE.Material });
      });
      const centre = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const scale = 2 / Math.max(size.y, 1e-6);
      for (const p of parts) {
        p.geometry.translate(-centre.x, -centre.y, -centre.z);
        p.geometry.scale(scale, scale, scale);
        smoothSeams(p.geometry);
      }
      return { parts };
    });
    pending.catch(() => { pending = null; });
  }
  return pending;
}

const HEAD_RADIUS = 1;
const FOV = 35;
const DISTANCE = 14;

export class SlapRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = SlapConfig;
  private surface = document.createElement('canvas');
  private renderer: THREE.WebGLRenderer | null = null;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(FOV, 16 / 9, 0.1, 100);
  private head = new THREE.Group();
  private body = new THREE.Group();
  private meshes: { mesh: THREE.Mesh; rest: Float32Array; dented: boolean }[] = [];
  private materials: THREE.MeshStandardMaterial[] = [];
  private playing = new Playing(0.6);
  private failed = false;
  private ready = false;

  // Where it is and how it moves: position in the plane of the frame, in
  // scene units; its turn, and how fast it is turning.
  private pos = new THREE.Vector2();
  private vel = new THREE.Vector2();
  private spin = new THREE.Vector3();
  private sinceSlap = 99;
  // The hit: where on the head (its own space), how deep, and the wobble.
  private dentAt = new THREE.Vector3(1, 0, 0);
  private dent = 0;
  private dentAge = 0;
  private wobble = 0;
  private wobbleVel = 0;
  private blush = 0;
  private time = 0;
  // Each hand's last place in the scene, to know how fast it moved.
  private lastHand: Record<'left' | 'right', THREE.Vector2 | null> = { left: null, right: null };
  private wasClapping = false;
  private lastBeat = false;
  private halfW = 1;
  private halfH = 1;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    try {
      this.renderer = makeRenderer(this.surface);
    } catch (error) {
      console.error('Slap could not start:', error);
      this.failed = true;
      return;
    }
    this.camera.position.set(0, 0, DISTANCE);
    this.camera.lookAt(0, 0, 0);
    this.scene.add(new THREE.HemisphereLight(0xfff4ea, 0x2a2238, 1.1));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(-4, 5, 8);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0x9fd8ff, 1.2);
    rim.position.set(5, 2, -6);
    this.scene.add(rim);
    this.head.add(this.body);
    this.scene.add(this.head);
    loadHead()
      .then((model) => this.build(model))
      .catch((error) => {
        console.error('The head model did not load:', error);
        this.failed = true;
      });
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(SlapConfig, values);
  }

  isReady() {
    return this.ready || this.failed;
  }

  destroy() {
    for (const { mesh } of this.meshes) mesh.geometry.dispose();
    for (const m of this.materials) m.dispose();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer = null;
  }

  private build(model: HeadModel) {
    for (const part of model.parts) {
      // Its own copy of the shape, so denting one head does not dent another.
      const geometry = part.geometry.clone();
      const material = (part.material as THREE.MeshStandardMaterial).clone();
      material.emissive = new THREE.Color(0xff1e3c);
      material.emissiveIntensity = 0;
      const mesh = new THREE.Mesh(geometry, material);
      this.body.add(mesh);
      this.meshes.push({ mesh, rest: Float32Array.from(geometry.attributes.position.array as Float32Array), dented: false });
      this.materials.push(material);
    }
    this.ready = true;
  }

  render(handData: HandData, _colors: string[], audioData?: AudioData) {
    const { ctx } = this;
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;
    const renderer = this.renderer;
    if (this.failed || !renderer) {
      drawUnavailable(ctx, width, height, 'SLAP');
      return;
    }
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);
    if (!this.ready) return;

    const play = this.playing;
    play.read(handData, audioData);
    // Physics on the clock — the finger count is slow motion or fast — but
    // never a huge step after a stall.
    const step = Math.min(0.05, Math.max(0, play.step));
    this.time += step;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.halfH = Math.tan(THREE.MathUtils.degToRad(FOV / 2)) * DISTANCE;
    this.halfW = this.halfH * this.camera.aspect;

    this.readHands(handData, play.dt);
    this.readMusic(audioData, play);
    this.simulate(step);
    this.place(play);

    if (this.surface.width !== width || this.surface.height !== height) renderer.setSize(width, height, false);
    renderer.render(this.scene, this.camera);
    ctx.drawImage(this.surface, 0, 0, width, height);

    // Only her real hands get a glove: the automatic drive's would hover there.
    if (this.cfg.hands.show > 0 && !handData.synthetic) this.drawHands(handData, width, height);
  }

  /** A hand's place on screen, in the scene's units at the head's depth. */
  private toScene(hand: Hand): THREE.Vector2 {
    return new THREE.Vector2((hand.position.x - 0.5) * 2 * this.halfW, (0.5 - hand.position.y) * 2 * this.halfH);
  }

  /** Its radius in the scene: at size 1 the head stands about half the frame's height. */
  private radius() {
    return HEAD_RADIUS * 2 * this.cfg.head.size;
  }

  /*
   * A slap: an open hand, moving fast, passing through the head. The head
   * takes the hand's direction; how hard depends on how fast it was moving.
   */
  private readHands(handData: HandData, dt: number) {
    const { cfg } = this;
    for (const side of ['left', 'right'] as const) {
      const hand = handData[side];
      if (!hand) { this.lastHand[side] = null; continue; }
      const at = this.toScene(hand);
      const before = this.lastHand[side];
      this.lastHand[side] = at;
      if (!before || dt <= 0) continue;
      const velocity = at.clone().sub(before).divideScalar(Math.max(dt, 1 / 120));
      const open = hand.gesture === 'open' || (hand.fingerCount ?? 0) >= 4;
      const centre = this.pos;
      const reach = this.radius() * 1.35;
      // Through the head this frame: the nearest point of the hand's path is inside it.
      const path = at.clone().sub(before);
      const t = path.lengthSq() > 0 ? Math.max(0, Math.min(1, centre.clone().sub(before).dot(path) / path.lengthSq())) : 1;
      const nearest = before.clone().add(path.multiplyScalar(t));
      const fast = velocity.length() > this.halfH * 1.6 * cfg.hands.speed;
      if (open && fast && nearest.distanceTo(centre) < reach && this.sinceSlap > 0.3) {
        this.slap(velocity, nearest);
      }
    }

    // A clap slaps from a random side, hard.
    const clapping = !!handData.clapping;
    // When the music stands in for her hands its "claps" are its kicks: those
    // slap softer, and no more than every couple of seconds.
    const standIn = !!handData.synthetic;
    if (clapping && !this.wasClapping && cfg.hands.clap > 0 && (!standIn || this.sinceSlap > 2)) {
      const a = Math.random() * Math.PI * 2;
      const dir = new THREE.Vector2(Math.cos(a), Math.sin(a) * 0.6);
      const strength = this.halfH * 3.2 * cfg.hands.clap * (handData.clapIntensity ?? 1) * (standIn ? 0.45 : 1);
      this.slap(dir.multiplyScalar(strength), this.pos.clone().sub(dir.clone().normalize().multiplyScalar(this.radius())));
    }
    this.wasClapping = clapping;
  }

  /** Hit: off it goes, spinning, dented where the hand landed, red. */
  private slap(handVelocity: THREE.Vector2, at: THREE.Vector2) {
    const { cfg } = this;
    const speed = handVelocity.length();
    const push = Math.min(this.halfH * 5, speed * 0.9) * cfg.hands.slap;
    const dir = handVelocity.clone().normalize();
    this.vel.addScaledVector(dir, push);
    // Struck off-centre, it turns: a slap across the face swings it round,
    // one from below tips it back.
    const hard = Math.min(1.5, speed / (this.halfH * 3));
    this.spin.y += dir.x * 9 * hard * cfg.hands.slap;
    this.spin.x += -dir.y * 6 * hard * cfg.hands.slap;
    this.spin.z += (Math.random() - 0.5) * 6 * hard;
    // The dent is where the hand came in from, in the head's own space.
    const from = new THREE.Vector3(at.x - this.pos.x, at.y - this.pos.y, 0.6).normalize();
    from.applyQuaternion(this.body.quaternion.clone().invert());
    this.dentAt.copy(from);
    this.dent = Math.min(1.2, 0.35 + hard * 0.6) * cfg.head.squash;
    this.dentAge = 0;
    this.wobbleVel += 6 * hard * cfg.head.squash;
    this.blush = Math.min(1, this.blush + 0.6 * hard + 0.3);
    this.sinceSlap = 0;
  }

  private readMusic(audioData: AudioData | undefined, play: Playing) {
    const beat = !!audioData?.beat;
    if (beat && !this.lastBeat && this.cfg.sound.beat > 0) {
      // A knock: a little nudge and a wobble, never a slap.
      const a = Math.random() * Math.PI * 2;
      this.vel.add(new THREE.Vector2(Math.cos(a), Math.sin(a)).multiplyScalar(this.halfH * 0.35 * this.cfg.sound.beat * (audioData!.beatIntensity || 1)));
      this.wobbleVel += 2 * this.cfg.sound.beat;
    }
    this.lastBeat = beat;
    void play;
  }

  private simulate(dt: number) {
    if (dt <= 0) return;
    const { cfg } = this;
    this.sinceSlap += dt;
    const r = this.radius();

    // Flying: a little air drag, so it slows rather than stops dead.
    this.vel.multiplyScalar(Math.exp(-dt * 0.6));
    this.pos.addScaledVector(this.vel, dt);

    // The edges of the frame: it bounces off them, and each hit wobbles it.
    const bounce = Math.max(0, Math.min(1, cfg.head.bounce));
    const limX = this.halfW - r * 0.9;
    const limY = this.halfH - r * 0.95;
    const hit = (v: number) => {
      this.wobbleVel += Math.min(4, Math.abs(v) / this.halfH) * cfg.head.squash;
      this.spin.z += (Math.random() - 0.5) * Math.abs(v) * 0.3;
    };
    if (this.pos.x > limX && this.vel.x > 0) { this.pos.x = limX; hit(this.vel.x); this.vel.x *= -bounce; }
    if (this.pos.x < -limX && this.vel.x < 0) { this.pos.x = -limX; hit(this.vel.x); this.vel.x *= -bounce; }
    if (this.pos.y > limY && this.vel.y > 0) { this.pos.y = limY; hit(this.vel.y); this.vel.y *= -bounce; }
    if (this.pos.y < -limY && this.vel.y < 0) { this.pos.y = -limY; hit(this.vel.y); this.vel.y *= -bounce; }

    // Home: left alone a moment, a spring draws it back to the middle.
    const back = Math.max(0.05, cfg.head.back);
    const pull = smooth(0.7 / back, 1.8 / back, this.sinceSlap);
    if (pull > 0) {
      const k = 9 * back * pull;
      const damping = 2 * Math.sqrt(k) * 0.9;
      this.vel.addScaledVector(this.pos, -k * dt);
      this.vel.multiplyScalar(Math.exp(-damping * dt * pull));
    }

    // Spin slows, and once home it turns back to face you.
    this.spin.multiplyScalar(Math.exp(-dt * (1.2 + pull * 3)));
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(this.spin.x * dt, this.spin.y * dt, this.spin.z * dt));
    this.body.quaternion.premultiply(q);
    if (pull > 0) this.body.quaternion.slerp(new THREE.Quaternion(), 1 - Math.exp(-dt * 3 * back * pull));

    // The wobble: a stiff, quickly-damped spring. The dent springs back out.
    this.wobbleVel += (-this.wobble * 160 - this.wobbleVel * 7) * dt;
    this.wobble += this.wobbleVel * dt;
    this.dentAge += dt;
    this.dent *= Math.exp(-dt * 2.2);
    this.blush *= Math.exp(-dt * 1.1);
  }

  private place(play: Playing) {
    const { cfg } = this;
    const r = this.radius();
    const bob = Math.sin(this.time * 1.3) * 0.08 * r + play.bass * cfg.sound.bass * 0.25 * r;
    this.head.position.set(this.pos.x, this.pos.y + bob * (1 - Math.min(1, this.vel.length() / this.halfH)), 0);
    // Idle, it looks about a little.
    const idle = smooth(1.2, 3, this.sinceSlap);
    this.head.rotation.set(Math.sin(this.time * 0.7) * 0.08 * idle, Math.sin(this.time * 0.45) * 0.25 * idle, 0);
    // Jelly: squash along one axis, stretch along the others.
    const w = Math.max(-0.45, Math.min(0.45, this.wobble * 0.12));
    this.head.scale.set(r * (1 + w), r * (1 - w), r * (1 + w * 0.5));

    // The dent: the face pushed in round where it was hit, quivering as it
    // springs back out.
    const depth = this.dent * (0.75 + 0.25 * Math.cos(this.dentAge * 28));
    for (const part of this.meshes) {
      const { mesh, rest } = part;
      const attr = mesh.geometry.attributes.position as THREE.BufferAttribute;
      const out = attr.array as Float32Array;
      if (depth < 0.002) {
        if (part.dented) {
          out.set(rest);
          attr.needsUpdate = true;
          part.dented = false;
        }
        continue;
      }
      const c = this.dentAt;
      const centre = new THREE.Vector3(c.x, c.y, c.z).multiplyScalar(HEAD_RADIUS);
      for (let i = 0; i < rest.length; i += 3) {
        const dx = rest[i] - centre.x;
        const dy = rest[i + 1] - centre.y;
        const dz = rest[i + 2] - centre.z;
        const fall = Math.exp(-(dx * dx + dy * dy + dz * dz) / 0.35);
        const push = depth * 0.45 * fall;
        out[i] = rest[i] - c.x * push;
        out[i + 1] = rest[i + 1] - c.y * push;
        out[i + 2] = rest[i + 2] - c.z * push;
      }
      attr.needsUpdate = true;
      // The model's own normals are kept: recomputed, they split along its
      // texture seam and drew a line down the middle of the face.
      part.dented = true;
    }

    for (const m of this.materials) m.emissiveIntensity = this.blush * 0.28 * cfg.head.blush;
  }

  /** Her hand on screen, as a soft white glove, so the slap reads from the back of the room. */
  private drawHands(handData: HandData, width: number, height: number) {
    const ctx = this.ctx;
    const alpha = Math.min(1, this.cfg.hands.show);
    for (const hand of [handData.left, handData.right]) {
      const lm = hand?.landmarks;
      if (!lm || lm.length < 21) continue;
      const P = (i: number) => [lm[i].x * width, lm[i].y * height] as const;
      const size = Math.hypot(P(0)[0] - P(9)[0], P(0)[1] - P(9)[1]);
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowColor = 'rgba(0,0,0,0.45)';
      ctx.shadowBlur = size * 0.25;
      ctx.fillStyle = ctx.strokeStyle = '#f6f1ea';
      // The palm.
      ctx.beginPath();
      for (const i of [0, 1, 5, 9, 13, 17]) {
        const [x, y] = P(i);
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.lineWidth = size * 0.35;
      ctx.fill();
      ctx.stroke();
      // The fingers.
      ctx.lineWidth = size * 0.26;
      for (const finger of [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20]]) {
        ctx.beginPath();
        finger.forEach((i, k) => {
          const [x, y] = P(i);
          if (k === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        });
        ctx.stroke();
      }
      ctx.restore();
    }
  }
}

/**
 * The face is two mirrored halves whose shared edge carries different
 * normals, which lit as a hard line down the middle of the face. Points that
 * sit in the same place get the average of their normals, so the halves
 * light as one surface; their texture coordinates are left alone.
 */
function smoothSeams(geometry: THREE.BufferGeometry) {
  const position = geometry.attributes.position;
  const normal = geometry.attributes.normal;
  if (!normal) return;
  const groups = new Map<string, number[]>();
  for (let i = 0; i < position.count; i++) {
    const key = `${position.getX(i).toFixed(4)},${position.getY(i).toFixed(4)},${position.getZ(i).toFixed(4)}`;
    const list = groups.get(key);
    if (list) list.push(i); else groups.set(key, [i]);
  }
  const n = new THREE.Vector3();
  for (const list of groups.values()) {
    if (list.length < 2) continue;
    n.set(0, 0, 0);
    for (const i of list) n.add(new THREE.Vector3(normal.getX(i), normal.getY(i), normal.getZ(i)));
    n.normalize();
    for (const i of list) normal.setXYZ(i, n.x, n.y, n.z);
  }
  normal.needsUpdate = true;
}

function smooth(a: number, b: number, x: number) {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}
