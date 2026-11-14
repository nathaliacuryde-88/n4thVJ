import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { TerrainConfig } from '../../config/TerrainRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { Playing, drawUnavailable, makeRenderer, turnFrom } from './inflated/style';
import { NOISE_DATA, NOISE_SIZE, terrainHeight } from './terrain/noise';
import { SKY_FRAG, SKY_VERT, TERRAIN_FRAG, TERRAIN_VERT } from './terrain/shaders';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FLIGHT
 * ═══════════════════════════════════════════════════════════════════════════
 * Flying low over a landscape with no end, made to look like a place rather
 * than a drawing of one: a low sun and the long shadows it throws, snow on
 * what is high, mist lying in the valleys, far ridges going the colour of
 * the sky, water that mirrors all of it. Two visuals:
 *
 *   Mountain Flight   ridges, valleys and lakes
 *   Sea Flight        open water under a long swell, islands far off
 *
 * THE HAND FLIES IT. Left and right bank and turn; up and down climb and
 * sink; a hand pushed towards the camera flies faster; turning the hands
 * rolls the horizon. The finger count is the tempo, as everywhere.
 *
 * THE MUSIC MOVES THE LIGHT. Each kick sends a ring of light out over the
 * ground from under the camera — the land listening. The bass raises the
 * swell and brightens the peaks; the hats set stars and glitter twinkling;
 * a build-up brings light up along the horizon and the drop releases it.
 * In a breakdown the mist closes in; at full tilt the air clears.
 *
 * The ground's height is worked out twice, by the same rule: on the graphics
 * card to draw it (terrain/shaders.ts), and here to keep the camera above it
 * (terrain/noise.ts).
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof TerrainConfig;

const FOV = 55;
const NEAR = 0.35;
const FAR = 150;
/** The fan of ground: columns across, rows from near to far. */
const COLUMNS = 320;
const ROWS = 360;

export class TerrainRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = TerrainConfig;
  private surface = document.createElement('canvas');
  private renderer: THREE.WebGLRenderer | null = null;
  private failed = false;
  private readonly style: number;
  private playing = new Playing(0.6);

  private scene = new THREE.Scene();
  private skyScene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(FOV, 16 / 9, 0.05, 400);
  private flat = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private ground: THREE.ShaderMaterial;
  private sky: THREE.ShaderMaterial;
  private fan: THREE.BufferGeometry;
  private quad = new THREE.BufferGeometry();
  private noiseTexture: THREE.DataTexture;

  private eye = new THREE.Vector3(0, 3, 0);
  private heading = 0;
  private bank = 0;
  private pitch = -0.08;
  private climb = 0;
  private time = 0;
  private ring = 999;
  private ringAmp = 0;
  private lastKick = 0;
  private lastBurst = 0;
  private lastDrop = 0;
  private glow = 0;
  private mist = 1;
  private sun = new THREE.Vector3();
  private placed = false;

  /** `style`: 0 Mountain Flight, 1 Sea Flight. */
  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, style: number) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.style = style;

    const bytes = new Uint8Array(NOISE_SIZE * NOISE_SIZE * 4);
    for (let i = 0; i < NOISE_DATA.length; i++) {
      bytes[i * 4] = bytes[i * 4 + 1] = bytes[i * 4 + 2] = NOISE_DATA[i];
      bytes[i * 4 + 3] = 255;
    }
    this.noiseTexture = new THREE.DataTexture(bytes, NOISE_SIZE, NOISE_SIZE, THREE.RGBAFormat, THREE.UnsignedByteType);
    this.noiseTexture.wrapS = this.noiseTexture.wrapT = THREE.RepeatWrapping;
    this.noiseTexture.minFilter = this.noiseTexture.magFilter = THREE.LinearFilter;
    this.noiseTexture.generateMipmaps = false;
    this.noiseTexture.needsUpdate = true;

    const shared = {
      uNoise: { value: this.noiseTexture },
      uTime: { value: 0 },
      uSun: { value: this.sun },
      uHour: { value: 0.55 },
      uGlow: { value: 0 },
      uTwinkle: { value: 0 },
      uTurn: { value: 0 },
      uSat: { value: 1 },
    };
    this.ground = new THREE.ShaderMaterial({
      vertexShader: TERRAIN_VERT,
      fragmentShader: TERRAIN_FRAG,
      side: THREE.DoubleSide,
      uniforms: {
        ...shared,
        uHeight: { value: 1 }, uRugged: { value: 0.4 }, uStyle: { value: style },
        uWater: { value: 0 }, uSwell: { value: 0 },
        uEye: { value: this.eye }, uHeading: { value: 0 },
        uNear: { value: NEAR }, uFar: { value: FAR }, uFan: { value: 1 },
        uMist: { value: 1 }, uRing: { value: 999 }, uRingAmp: { value: 0 }, uBass: { value: 0 },
      },
    });
    this.sky = new THREE.ShaderMaterial({
      vertexShader: SKY_VERT,
      fragmentShader: SKY_FRAG,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        ...shared,
        uInverseView: { value: new THREE.Matrix4() },
        uInverseProjection: { value: new THREE.Matrix4() },
      },
    });

    // The fan: x across (-1..1), y from near (0) to far (1). The vertex
    // shader turns that into a place on the ground in front of the camera.
    const positions = new Float32Array((COLUMNS + 1) * (ROWS + 1) * 3);
    let at = 0;
    for (let r = 0; r <= ROWS; r++) {
      for (let c = 0; c <= COLUMNS; c++) {
        positions[at++] = (c / COLUMNS) * 2 - 1;
        positions[at++] = r / ROWS;
        positions[at++] = 0;
      }
    }
    const indices = new Uint32Array(COLUMNS * ROWS * 6);
    at = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLUMNS; c++) {
        const a = r * (COLUMNS + 1) + c;
        const b = a + 1;
        const d = a + COLUMNS + 1;
        const e = d + 1;
        indices.set([a, d, b, b, d, e], at);
        at += 6;
      }
    }
    this.fan = new THREE.BufferGeometry();
    this.fan.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.fan.setIndex(new THREE.BufferAttribute(indices, 1));
    const mesh = new THREE.Mesh(this.fan, this.ground);
    mesh.frustumCulled = false;
    this.scene.add(mesh);

    this.quad.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
    const skyMesh = new THREE.Mesh(this.quad, this.sky);
    skyMesh.frustumCulled = false;
    this.skyScene.add(skyMesh);

    try {
      const renderer = makeRenderer(this.surface);
      renderer.setClearColor(0x000000, 1);
      renderer.autoClear = false;
      this.renderer = renderer;
    } catch (error) {
      console.error('Flight could not start:', error);
      this.failed = true;
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(TerrainConfig, values);
  }

  destroy() {
    this.fan.dispose();
    this.quad.dispose();
    this.ground.dispose();
    this.sky.dispose();
    this.noiseTexture.dispose();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer = null;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;
    const renderer = this.renderer;
    if (this.failed || !renderer) {
      drawUnavailable(this.ctx, width, height, 'FLIGHT');
      return;
    }
    const { cfg, style } = this;
    const play = this.playing;
    play.read(handData, audioData);
    const frame = play.dt;
    const step = Math.max(0, play.step);
    this.time += step;
    const ease = (rate: number) => 1 - Math.exp(-frame * rate);
    const handed = handData.left || handData.right ? 1 : 0;
    const steer = cfg.hands.steer * handed;

    // ── the land as set ──────────────────────────────────────────────────
    const tall = cfg.land.height;
    const rugged = cfg.land.rugged;
    // Where the water stands: from a few tarns to most of the valleys.
    const water = style === 1 ? 0 : (cfg.land.water - 0.85) * tall * 9;
    const swell = style === 1 ? tall * (0.22 + 0.2 * play.energy + 0.4 * play.bass * cfg.sound.bass) : 0;

    // Begin somewhere worth being: low in a valley, facing along it.
    if (!this.placed) {
      this.placed = true;
      let lowest = Infinity;
      for (let i = 0; i < 240; i++) {
        const a = i * 2.399963;
        const r = 6 * Math.sqrt(i);
        const x = Math.cos(a) * r;
        const z = Math.sin(a) * r;
        const h = terrainHeight(x, z, tall, rugged, style, 3);
        // The lowest dry ground: a valley floor, not the middle of a lake.
        if (h < lowest && (style === 1 || h > water + 0.6)) { lowest = h; this.eye.set(x, h + 2, z); }
      }
      let easiest = Infinity;
      for (let k = 0; k < 16; k++) {
        const a = (k / 16) * Math.PI * 2;
        let sum = 0;
        for (const ahead of [6, 12, 20, 30]) sum += terrainHeight(this.eye.x + Math.sin(a) * ahead, this.eye.z - Math.cos(a) * ahead, tall, rugged, style, 3);
        if (sum < easiest) { easiest = sum; this.heading = a; }
      }
    }

    // ── flying ───────────────────────────────────────────────────────────
    // The hand banks; banking turns. A hand near the camera pushes on.
    // Left to itself it finds its own way: it leans towards whichever side
    // the ground ahead is lower, and so winds through the valleys like water.
    const lowerOn = (side: number) => {
      let sum = 0;
      for (const ahead of [7, 14]) {
        const a = this.heading + side * 0.5;
        // Water is level: over a lake there is no downhill to chase.
        sum += Math.max(water, terrainHeight(this.eye.x + Math.sin(a) * ahead, this.eye.z - Math.cos(a) * ahead, tall, rugged, style, 3));
      }
      return sum / 2;
    };
    const downhill = style === 0 ? Math.max(-1, Math.min(1, (lowerOn(-1) - lowerOn(1)) * 0.35)) : Math.sin(this.time * 0.07) * 0.25;
    const lean = play.aim.x * steer + downhill * (1 - 0.8 * steer);
    this.bank += (lean * 0.6 - this.bank) * ease(1.6);
    this.heading += this.bank * step * 0.55;
    const push = 1 + Math.max(0, (play.depth - 0.35) / 0.65) * 1.6 * steer;
    const speed = 3.2 * cfg.flight.speed * push;
    this.eye.x += Math.sin(this.heading) * speed * step;
    this.eye.z -= Math.cos(this.heading) * speed * step;

    // Above the ground under the camera and the ground coming, never through it.
    let floor = water + swell;
    for (const ahead of [0, 2.5, 6, 11]) {
      const x = this.eye.x + Math.sin(this.heading) * ahead;
      const z = this.eye.z - Math.cos(this.heading) * ahead;
      floor = Math.max(floor, terrainHeight(x, z, tall, rugged, style) - ahead * 0.09);
    }
    this.climb += (play.aim.y * steer - this.climb) * ease(2);
    const want = floor + (0.5 + 0.9 * (this.climb + 1)) * cfg.flight.altitude;
    // Up quickly when the ground comes up, down gently when it falls away.
    this.eye.y += (want - this.eye.y) * ease(want > this.eye.y ? 3.2 : 0.9);
    const least = floor + 0.3;
    if (this.eye.y < least) this.eye.y = least;
    this.pitch += (-0.07 - this.climb * 0.1 - this.pitch) * ease(2);

    this.camera.aspect = width / height;
    this.camera.position.copy(this.eye);
    const roll = -this.bank * 0.55 + play.turn * 0.5 * steer;
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(
      this.eye.x + Math.sin(this.heading) * Math.cos(this.pitch),
      this.eye.y + Math.sin(this.pitch),
      this.eye.z - Math.cos(this.heading) * Math.cos(this.pitch),
    );
    this.camera.rotateZ(roll);
    this.camera.updateProjectionMatrix();
    this.camera.updateMatrixWorld();

    // ── the light ────────────────────────────────────────────────────────
    const hour = Math.min(1, Math.max(0, cfg.light.hour));
    // The sun keeps its place in the world, low and a little off the nose,
    // so turning swings it across the frame and brings it behind.
    const elevation = 0.1 + 0.16 * hour + 0.12 * play.build;
    const azimuth = 0.55;
    this.sun.set(Math.sin(azimuth) * Math.cos(elevation), Math.sin(elevation), -Math.cos(azimuth) * Math.cos(elevation)).normalize();
    this.glow += (Math.max(play.build * 0.8, play.drop) - this.glow) * ease(play.drop > this.glow ? 12 : 2);
    // Mist closes in when the music thins and clears when it is full.
    this.mist += (cfg.light.mist * (1.45 - 0.75 * play.energy) - this.mist) * ease(0.6);

    // A ring of light on each kick; a clap or a drop sends a strong one.
    const kick = Math.max(play.kick, play.bump) * cfg.sound.beat;
    const clap = play.clapped ? cfg.hands.clap : 0;
    if (kick > 0.45 && this.lastKick <= 0.45 && (this.ring > 14 || this.ringAmp < 0.2)) { this.ring = 0; this.ringAmp = Math.min(1, kick); }
    if (clap > 0 || (play.drop > 0.5 && this.lastDrop <= 0.5)) { this.ring = 0; this.ringAmp = 2.2; }
    this.lastKick = kick;
    this.lastBurst = clap;
    this.lastDrop = play.drop;
    this.ring += frame * 26;
    this.ringAmp *= Math.exp(-frame * 0.9);

    const turn = turnFrom(colors);
    for (const material of [this.ground, this.sky]) {
      const u = material.uniforms;
      u.uTime.value = this.time;
      u.uHour.value = hour;
      u.uGlow.value = this.glow;
      u.uTwinkle.value = play.hat;
      u.uTurn.value = (turn.hue * Math.PI) / 180;
      u.uSat.value = Math.min(1.4, turn.sat);
    }
    const g = this.ground.uniforms;
    g.uHeight.value = tall;
    g.uRugged.value = rugged;
    g.uWater.value = water;
    g.uSwell.value = swell;
    g.uHeading.value = this.heading;
    // Wide enough for the corners of the frame, banked.
    const halfAcross = Math.atan(Math.tan((FOV / 2) * Math.PI / 180) * this.camera.aspect);
    g.uFan.value = Math.min(Math.PI * 0.6, halfAcross * 1.25 + Math.abs(roll) * 0.6 + 0.08);
    g.uNear.value = Math.max(0.2, (this.eye.y - floor) * 0.25);
    g.uMist.value = this.mist;
    g.uRing.value = this.ring;
    g.uRingAmp.value = this.ringAmp;
    g.uBass.value = play.bass * cfg.sound.bass;
    const s = this.sky.uniforms;
    (s.uInverseView.value as THREE.Matrix4).copy(this.camera.matrixWorld);
    (s.uInverseProjection.value as THREE.Matrix4).copy(this.camera.projectionMatrixInverse);

    if (this.surface.width !== width || this.surface.height !== height) renderer.setSize(width, height, false);
    renderer.clear();
    renderer.render(this.skyScene, this.flat);
    renderer.render(this.scene, this.camera);

    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.globalAlpha = 1;
    this.ctx.drawImage(this.surface, 0, 0, width, height);
  }
}
