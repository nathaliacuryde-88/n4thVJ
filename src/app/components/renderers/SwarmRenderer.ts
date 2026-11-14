import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { SwarmConfig } from '../../config/SwarmRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { Playing, drawUnavailable, makeRenderer, turnFrom } from './inflated/style';
import {
  COPY_FRAG, FADE_FRAG, POINT_FRAG, POINT_VERT, POSITION_FRAG, PRESENT_FRAG, QUAD_VERT, VELOCITY_FRAG,
} from './swarm/shaders';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SWARM
 * ═══════════════════════════════════════════════════════════════════════════
 * A great many points of light with a life of their own, in three visuals
 * that share one engine and sit on separate cards so they can be layered:
 *
 *   Murmuration  a flock. It follows the hand; with two hands it parts into
 *                two flocks, one for each. A pinch draws it into a tight
 *                ball; a clap scatters it and it gathers again.
 *   Plankton     dark water full of plankton that light where they are
 *                stirred — a hand leaves a glowing wake — and a ring of
 *                light crosses the water on every kick.
 *   Galaxy       a disc of stars turning. The hand tilts it; the core
 *                flares on the kick; a clap throws the stars out and
 *                gravity brings them home.
 *
 * In all three: the finger count sets the tempo, as everywhere; a hand close
 * to the camera pushes in; turning the hands rolls the view; the hats make
 * points catch the light; a build-up draws everything together and the drop
 * lets it go.
 *
 * The points are moved on the graphics card (swarm/shaders.ts). That needs
 * floating-point render targets, which every desktop has had for years; a
 * machine without them shows the usual "needs WebGL" card instead.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof SwarmConfig;

/** The side of the square texture holding the points, by the Count setting. */
const SIDES = [128, 256, 384, 512];
/** How far the camera stands off with no hand near the lens, and with one right up to it. */
const FAR = 6.4;
const NEAR = 3.3;
/** The galaxy is looked at from nearer than the others: it is a flat thing. */
const STAND = [1, 1, 0.72];
const FOV = 45;

interface Sim {
  side: number;
  pos: [THREE.WebGLRenderTarget, THREE.WebGLRenderTarget];
  vel: [THREE.WebGLRenderTarget, THREE.WebGLRenderTarget];
  points: THREE.Points;
  geometry: THREE.BufferGeometry;
  /** Which of each pair holds the current state. */
  at: 0 | 1;
}

export class SwarmRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = SwarmConfig;
  private surface = document.createElement('canvas');
  private renderer: THREE.WebGLRenderer | null = null;
  private failed = false;
  private readonly style: number;
  private playing = new Playing(0.6);

  private quad = new THREE.BufferGeometry();
  private quadCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private simScene = new THREE.Scene();
  private simMesh: THREE.Mesh;
  private velocityMaterial: THREE.ShaderMaterial;
  private positionMaterial: THREE.ShaderMaterial;
  private copyMaterial: THREE.ShaderMaterial;
  private fadeMaterial: THREE.ShaderMaterial;
  private presentMaterial: THREE.ShaderMaterial;
  private pointMaterial: THREE.ShaderMaterial;

  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(FOV, 16 / 9, 0.1, 60);
  private accum: THREE.WebGLRenderTarget | null = null;
  private sim: Sim | null = null;
  private floatType: THREE.TextureDataType = THREE.FloatType;

  private time = 0;
  private wander = 0;
  private distance = FAR;
  private split = 0;
  private gather = 0;
  private targetA = new THREE.Vector3();
  private targetB = new THREE.Vector3();
  private handA = new THREE.Vector4();
  private handB = new THREE.Vector4();
  private handVelA = new THREE.Vector3();
  private handVelB = new THREE.Vector3();
  private lastDrop = 0;
  private lastKick = 0;
  private wave = 99;
  private waveAmp = 0;
  private view = new THREE.Vector2();

  /** `style`: 0 Murmuration, 1 Plankton, 2 Galaxy. */
  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, style: number) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.style = style;
    this.quad.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));

    const pass = (fragmentShader: string, uniforms: Record<string, THREE.IUniform>, extra: Partial<THREE.ShaderMaterialParameters> = {}) =>
      new THREE.ShaderMaterial({ vertexShader: QUAD_VERT, fragmentShader, uniforms, depthTest: false, depthWrite: false, ...extra });

    this.velocityMaterial = pass(VELOCITY_FRAG, {
      uPos: { value: null }, uVel: { value: null }, uDt: { value: 0 }, uTime: { value: 0 }, uStyle: { value: style },
      uFold: { value: 1 }, uGather: { value: 0 }, uKick: { value: 0 }, uBurst: { value: 0 }, uSpin: { value: 1 },
      uTargetA: { value: this.targetA }, uTargetB: { value: this.targetB }, uSplit: { value: 0 },
      uHandA: { value: this.handA }, uHandB: { value: this.handB },
      uHandVelA: { value: this.handVelA }, uHandVelB: { value: this.handVelB },
      uWave: { value: 99 }, uWaveAmp: { value: 0 }, uPull: { value: 0 },
    });
    this.positionMaterial = pass(POSITION_FRAG, {
      uPos: { value: null }, uVel: { value: null }, uDt: { value: 0 }, uStyle: { value: style },
    });
    this.copyMaterial = pass(COPY_FRAG, { uTex: { value: null } });
    this.fadeMaterial = pass(FADE_FRAG, { uKeep: { value: 0.9 } }, { transparent: true, blending: THREE.NormalBlending });
    this.presentMaterial = pass(PRESENT_FRAG, {
      uTex: { value: null }, uTurn: { value: 0 }, uSat: { value: 1 }, uExposure: { value: 1 },
    });
    this.pointMaterial = new THREE.ShaderMaterial({
      vertexShader: POINT_VERT,
      fragmentShader: POINT_FRAG,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uPos: { value: null }, uVel: { value: null }, uStyle: { value: style },
        uSize: { value: 1 }, uBlur: { value: 1 }, uFocus: { value: FAR }, uPixels: { value: 720 },
        uTime: { value: 0 }, uSparkle: { value: 0 }, uKick: { value: 0 }, uBass: { value: 0 },
        uEnergy: { value: 0.5 }, uLight: { value: 1 },
      },
    });
    this.simMesh = new THREE.Mesh(this.quad, this.copyMaterial);
    this.simMesh.frustumCulled = false;
    this.simScene.add(this.simMesh);

    try {
      const renderer = makeRenderer(this.surface);
      renderer.setClearColor(0x000000, 1);
      renderer.autoClear = false;
      // Points are kept as numbers, not colours: that needs float targets.
      if (!renderer.extensions.has('EXT_color_buffer_float')) {
        if (!renderer.extensions.has('EXT_color_buffer_half_float')) throw new Error('no floating-point render targets');
        this.floatType = THREE.HalfFloatType;
      }
      this.renderer = renderer;
    } catch (error) {
      console.error('Swarm could not start:', error);
      this.failed = true;
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(SwarmConfig, values);
  }

  destroy() {
    this.dropSim();
    this.accum?.dispose();
    this.quad.dispose();
    for (const m of [this.velocityMaterial, this.positionMaterial, this.copyMaterial, this.fadeMaterial, this.presentMaterial, this.pointMaterial]) m.dispose();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer = null;
  }

  private dropSim() {
    if (!this.sim) return;
    this.scene.remove(this.sim.points);
    this.sim.geometry.dispose();
    for (const t of [...this.sim.pos, ...this.sim.vel]) t.dispose();
    this.sim = null;
  }

  /** Builds the points and where they start, for one Count setting. */
  private buildSim(renderer: THREE.WebGLRenderer, side: number): Sim {
    const count = side * side;
    const start = new Float32Array(count * 4);
    for (let i = 0; i < count; i++) {
      let x = 0, y = 0, z = 0;
      if (this.style === 0) {
        // A ball about the middle.
        const r = 1.2 * Math.cbrt(Math.random());
        const a = Math.random() * Math.PI * 2;
        const c = Math.random() * 2 - 1;
        const s = Math.sqrt(1 - c * c);
        x = r * s * Math.cos(a); y = r * c; z = r * s * Math.sin(a);
      } else if (this.style === 1) {
        // All through the water.
        x = (Math.random() - 0.5) * 10.4; y = (Math.random() - 0.5) * 6; z = (Math.random() - 0.5) * 5.2;
      } else {
        // A disc.
        const r = 0.1 + 2.4 * Math.pow(Math.random(), 1.15);
        const a = Math.random() * Math.PI * 2;
        x = r * Math.cos(a); z = r * Math.sin(a); y = (Math.random() - 0.5) * 0.2;
      }
      start.set([x, y, z, Math.random()], i * 4);
    }
    const seedTexture = new THREE.DataTexture(start, side, side, THREE.RGBAFormat, THREE.FloatType);
    seedTexture.needsUpdate = true;

    const target = () => new THREE.WebGLRenderTarget(side, side, {
      type: this.floatType, format: THREE.RGBAFormat, depthBuffer: false,
      minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter,
    });
    const pos: Sim['pos'] = [target(), target()];
    const vel: Sim['vel'] = [target(), target()];
    this.simMesh.material = this.copyMaterial;
    this.copyMaterial.uniforms.uTex.value = seedTexture;
    for (const t of pos) { renderer.setRenderTarget(t); renderer.render(this.simScene, this.quadCamera); }
    for (const t of vel) { renderer.setRenderTarget(t); renderer.setClearColor(0x000000, 0); renderer.clear(); }
    renderer.setClearColor(0x000000, 1);
    renderer.setRenderTarget(null);
    seedTexture.dispose();

    const refs = new Float32Array(count * 2);
    for (let i = 0; i < count; i++) {
      refs[i * 2] = ((i % side) + 0.5) / side;
      refs[i * 2 + 1] = (Math.floor(i / side) + 0.5) / side;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    geometry.setAttribute('ref', new THREE.BufferAttribute(refs, 2));
    const points = new THREE.Points(geometry, this.pointMaterial);
    points.frustumCulled = false;
    this.scene.add(points);
    return { side, pos, vel, points, geometry, at: 0 };
  }

  /** Where on the plane through the middle a hand is, from where it is in the frame. */
  private handPoint(hand: { position: { x: number; y: number } }, out: THREE.Vector3) {
    const halfHeight = Math.tan((FOV / 2) * Math.PI / 180) * this.distance;
    out.set(
      (hand.position.x - 0.5) * 2 * halfHeight * this.camera.aspect * 0.85,
      (0.5 - hand.position.y) * 2 * halfHeight * 0.85,
      0,
    );
    return out;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;
    const renderer = this.renderer;
    if (this.failed || !renderer) {
      drawUnavailable(this.ctx, width, height, 'SWARM');
      return;
    }
    const { cfg, style } = this;
    const play = this.playing;
    play.read(handData, audioData);
    const frame = play.dt;
    // The simulation's own step: the shared clock's, so the fingers set its
    // speed, and never so long that a spring overshoots.
    const dt = Math.min(0.05, Math.max(0, play.step) * cfg.motion.flow);
    this.time += dt;
    this.wander += Math.max(0, play.step);
    const ease = (rate: number) => 1 - Math.exp(-frame * rate);

    const side = SIDES[Math.max(0, Math.min(SIDES.length - 1, Math.round(cfg.look.count)))];
    if (!this.sim || this.sim.side !== side) {
      this.dropSim();
      try {
        this.sim = this.buildSim(renderer, side);
      } catch (error) {
        console.error('Swarm could not build its points:', error);
        this.failed = true;
        return;
      }
    }
    const sim = this.sim;

    // ── the hands ────────────────────────────────────────────────────────
    const follow = cfg.hands.follow;
    this.distance += ((FAR + (NEAR - FAR) * Math.max(0, (play.depth - 0.35) / 0.65)) * STAND[style] - this.distance) * ease(2.5);
    const left = handData.left;
    const right = handData.right;
    const one = left ?? right;
    const handed = !!one && !handData.synthetic;
    const scratch = new THREE.Vector3();

    // With no hand to follow, the flock wanders a slow figure of its own.
    const w = this.wander * 0.22;
    const roam = new THREE.Vector3(Math.sin(w) * 1.9, Math.sin(w * 1.7 + 1.0) * 0.9, Math.cos(w * 0.8) * 0.8);
    const wantA = one && follow > 0 ? this.handPoint(one, scratch).lerp(roam, Math.max(0, 1 - follow)) : roam;
    this.targetA.lerp(wantA, ease(9));
    const both = left && right && follow > 0;
    if (both) this.targetB.lerp(this.handPoint(right!, scratch), ease(9));
    else this.targetB.lerp(this.targetA, ease(3));
    this.split += ((both ? 1 : 0) - this.split) * ease(4);

    // Plankton: where each hand stirs, and how fast it is moving.
    const stir = (hand: typeof left, at: THREE.Vector4, vel: THREE.Vector3) => {
      if (!hand || follow <= 0) {
        at.w += (0 - at.w) * ease(6);
        vel.multiplyScalar(Math.exp(-frame * 6));
        return;
      }
      const p = this.handPoint(hand, scratch);
      if (at.w > 0.05 && frame > 0) {
        const v = new THREE.Vector3(p.x - at.x, p.y - at.y, 0).divideScalar(frame);
        if (v.length() > 12) v.setLength(12);
        vel.lerp(v, ease(10));
      }
      at.set(p.x, p.y, 0, at.w + (follow - at.w) * ease(6));
    };
    stir(left, this.handA, this.handVelA);
    stir(right, this.handB, this.handVelB);

    // ── the music ────────────────────────────────────────────────────────
    const kick = Math.max(play.kick, play.bump) * cfg.sound.beat;
    // A fist draws everything in; an open palm lets it spread.
    this.gather += (Math.max(play.pinch, play.fist, play.build * 0.85) - this.gather) * ease(6);
    // A clap, or the drop, lands once: an impulse on the frame it arrives.
    let burst = 0;
    if (play.clapped) burst = Math.min(1.6, play.clapStrength * 1.4 * cfg.hands.clap);
    if (play.drop > 0.5 && this.lastDrop <= 0.5) burst = Math.max(burst, 0.8 * cfg.sound.beat);
    this.lastDrop = play.drop;
    // A ring of light sets out across the water on each kick.
    if (kick > 0.45 && this.lastKick <= 0.45) { this.wave = 0; this.waveAmp = Math.min(1.2, kick); }
    this.lastKick = kick;
    this.wave += dt * 3.4;
    this.waveAmp *= Math.exp(-dt * 0.9);

    // ── move the points ──────────────────────────────────────────────────
    const next = (1 - sim.at) as 0 | 1;
    if (dt > 0 || burst > 0) {
      const v = this.velocityMaterial.uniforms;
      v.uPos.value = sim.pos[sim.at].texture;
      v.uVel.value = sim.vel[sim.at].texture;
      v.uDt.value = dt;
      v.uTime.value = this.time;
      v.uFold.value = cfg.motion.fold * (0.7 + 0.6 * play.energy);
      v.uGather.value = this.gather;
      // The water is drawn in to a fist and pushed away by an open palm.
      v.uPull.value = handed ? play.fist * 1.6 - (1 - play.fist) * 0.5 : 0;
      v.uKick.value = kick;
      v.uBurst.value = burst;
      v.uSpin.value = 1 + 0.5 * play.energy + 0.8 * play.build;
      v.uSplit.value = this.split;
      v.uWave.value = this.wave;
      v.uWaveAmp.value = this.waveAmp;
      this.simMesh.material = this.velocityMaterial;
      renderer.setRenderTarget(sim.vel[next]);
      renderer.render(this.simScene, this.quadCamera);

      const p = this.positionMaterial.uniforms;
      p.uPos.value = sim.pos[sim.at].texture;
      p.uVel.value = sim.vel[next].texture;
      p.uDt.value = dt;
      this.simMesh.material = this.positionMaterial;
      renderer.setRenderTarget(sim.pos[next]);
      renderer.render(this.simScene, this.quadCamera);
      sim.at = next;
    }

    // ── the camera ───────────────────────────────────────────────────────
    this.camera.aspect = width / height;
    // The flock is led about the frame by the hand, so the camera stays put;
    // the water and the galaxy are looked around instead.
    const look = style === 0 ? 0.12 : 0.55;
    this.view.x += (play.aim.x * look * follow - this.view.x) * ease(2);
    this.view.y += (play.aim.y * look * follow - this.view.y) * ease(2);
    const azimuth = this.view.x + (style === 0 ? Math.sin(this.wander * 0.05) * 0.15 : this.wander * 0.03);
    const tilt = (style === 2 ? 0.5 : 0.05) + this.view.y * 0.8;
    this.camera.position.set(
      Math.sin(azimuth) * Math.cos(tilt) * this.distance,
      Math.sin(tilt) * this.distance,
      Math.cos(azimuth) * Math.cos(tilt) * this.distance,
    );
    this.camera.up.set(Math.sin(play.turn * 0.5), Math.cos(play.turn * 0.5), 0);
    this.camera.lookAt(0, 0, 0);
    this.camera.updateProjectionMatrix();

    // ── draw ─────────────────────────────────────────────────────────────
    if (this.surface.width !== width || this.surface.height !== height) renderer.setSize(width, height, false);
    if (!this.accum || this.accum.width !== width || this.accum.height !== height) {
      this.accum?.dispose();
      this.accum = new THREE.WebGLRenderTarget(width, height, {
        type: THREE.HalfFloatType, format: THREE.RGBAFormat, depthBuffer: false,
        minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
      });
      renderer.setRenderTarget(this.accum);
      renderer.clear();
    }
    // How much of the last frame's light is kept: none of it with Trail at
    // zero, about half a second's worth at full.
    const keep = Math.exp(-frame / (0.012 + cfg.look.trail * 0.5));
    const u = this.pointMaterial.uniforms;
    u.uPos.value = sim.pos[sim.at].texture;
    u.uVel.value = sim.vel[sim.at].texture;
    u.uSize.value = cfg.look.size;
    u.uBlur.value = cfg.look.blur;
    u.uFocus.value = this.distance;
    u.uPixels.value = height;
    u.uTime.value = this.time + this.wander;
    u.uSparkle.value = play.hat * cfg.sound.sparkle;
    u.uKick.value = kick;
    u.uBass.value = play.bass;
    u.uEnergy.value = play.energy;
    // The same light whatever the count, and whatever the trail: more
    // points are each fainter, and what lingers is added in smaller parts.
    u.uLight.value = 1.6 * Math.pow(65536 / (side * side), 0.85) * (1 - keep);

    renderer.setRenderTarget(this.accum);
    this.fadeMaterial.uniforms.uKeep.value = keep;
    this.simMesh.material = this.fadeMaterial;
    renderer.render(this.simScene, this.quadCamera);
    renderer.render(this.scene, this.camera);

    const turn = turnFrom(colors);
    const present = this.presentMaterial.uniforms;
    present.uTex.value = this.accum.texture;
    present.uTurn.value = (turn.hue * Math.PI) / 180;
    present.uSat.value = Math.min(1.4, turn.sat);
    present.uExposure.value = 1.15 + 0.5 * play.drop;
    this.simMesh.material = this.presentMaterial;
    renderer.setRenderTarget(null);
    renderer.render(this.simScene, this.quadCamera);

    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.globalAlpha = 1;
    this.ctx.drawImage(this.surface, 0, 0, width, height);
  }
}
