import * as THREE from 'three';
import { AudioData, HandData } from '../../App';
import { BlendConfig } from '../../config/BlendRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { Playing, drawUnavailable, makeRenderer, turnFrom } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * BLEND
 * ═══════════════════════════════════════════════════════════════════════════
 * A zigzag blob drawn as hundreds of thin outlines, the way an Illustrator
 * blend steps between a big soft shape and a small sharp one. At its heart
 * is a spine — a zigzag in space — and every outline is the same distance
 * from it, so they step out from the zigzag to the rim in rounded offsets.
 * The colour runs from the rim into the core and from top to bottom, and
 * the lines, finer than the eye can count, beat against each other into
 * moiré. The spine turns slowly, so the zigzag reads as a Z, an N, an S.
 *
 * The hands: the fingers set how fast it turns through the shared clock; the
 * blob drifts toward a hand and tips with it; a clap sends a ripple out
 * through the lines. The music: each kick sends a ripple, bass swells it,
 * melody makes it wobble, the hats make the lines shimmer. The colour panel
 * turns the whole colourway round the wheel.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof BlendConfig;

/** The colourways: ground, rim top, rim bottom, core top, core bottom. */
const COLOURWAYS: string[][] = [
  // Candy — pink ground, a red rim warming to pink below, lavender and gold inside.
  ['#f82483', '#e2302c', '#ff7aa8', '#c8a6dc', '#eab02e'],
  // Neon — grey ground, an orange rim, magenta over cyan inside.
  ['#bbbbbb', '#f35b49', '#ec8a52', '#fb10f5', '#2ec0ec'],
];

/** The most turns the spine can have. */
const MAX_SEGS = 5;

const VERT = /* glsl */ `
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

const FRAG = /* glsl */ `
precision highp float;
uniform vec2 uRes;
uniform float uTime, uLines, uSize, uWobble, uSoft, uPhase, uShimmer, uHue, uSat, uBlack;
uniform int uSegs;
uniform vec2 uCentre;
uniform vec2 uRing;          // how far out the ripple is (0 core, 1 rim), and how strong
uniform vec3 uPts[${MAX_SEGS + 1}];
uniform vec3 uGround, uRimTop, uRimBot, uCoreTop, uCoreBot;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
vec3 hueTurn(vec3 c, float degrees) {
  float a = radians(degrees);
  vec3 k = vec3(0.57735);
  return c * cos(a) + cross(k, c) * sin(a) + k * dot(k, c) * (1.0 - cos(a));
}
vec3 tone(vec3 c) {
  c = hueTurn(c, uHue);
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  return clamp(mix(vec3(l), c, uSat), 0.0, 1.0);
}
float segment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}
float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  p -= uCentre;
  // At size 1 the blob stands about nine tenths of the frame's height.
  p /= uSize * 0.52;

  // The outline wanders: a slow, soft warp of the space around the spine.
  float t = uTime;
  vec2 warp = vec2(noise(p * 1.6 + vec2(t * 0.13, 0.0)), noise(p * 1.6 + vec2(5.2, -t * 0.11))) - 0.5;
  vec2 q = p + warp * 0.22 * uWobble;

  float d = 1e3;
  for (int i = 0; i < ${MAX_SEGS}; i++) {
    if (i >= uSegs) break;
    d = smin(d, segment(q, uPts[i].xy, uPts[i + 1].xy), 0.12);
  }

  // 0 on the spine, 1 at the rim.
  float rim = 0.36;
  float f = d / rim;

  // Colour: rim to core, and top to bottom across both.
  float v = clamp(p.y * 0.75 + 0.5, 0.0, 1.0);
  vec3 rimC = mix(uRimBot, uRimTop, v);
  vec3 coreC = mix(uCoreBot, uCoreTop, smoothstep(0.15, 0.85, v));
  float k = smoothstep(0.05, 0.95, f);
  vec3 base = mix(coreC, rimC, pow(k, 0.8));
  // The neighbouring outline, a step further out: the stripes are the blend's
  // own steps, each a shade from the next.
  float k2 = smoothstep(0.05, 0.95, f + 0.16);
  vec3 next = mix(coreC, rimC, pow(k2, 0.8));

  // The lines. A ripple bunches them as it passes; the hats jitter them.
  float s = f * uLines - uPhase;
  s += uRing.y * 3.0 * exp(-pow((f - uRing.x) * 7.0, 2.0));
  s += uShimmer * 0.6 * (noise(p * 60.0 + t * 9.0) - 0.5);
  float tri = abs(fract(s) - 0.5) * 2.0;
  // Barely anti-aliased, on purpose: it is the aliasing of fine lines that
  // beats into moiré, and that is the look.
  float w = clamp(fwidth(s) * 0.35, 0.03, 0.3);
  float line = smoothstep(0.5 - w, 0.5 + w, tri);
  vec3 col = mix(base, next * 0.88, line * 0.85);

  vec3 ground = uBlack > 0.5 ? vec3(0.0) : uGround;
  // The rim feathers into the ground, the outermost lines last.
  float edge = 1.0 - smoothstep(1.0 - 0.45 * uSoft - 0.03, 1.0 + 0.05 * uSoft, f);
  float fringe = edge * mix(1.0, line, smoothstep(0.75, 1.0, f) * 0.6);
  col = mix(ground, col, fringe);

  gl_FragColor = vec4(tone(col), 1.0);
}`;

/** A hex colour as the shader writes it: straight sRGB, no linear conversion. */
function hexVec(hex: string): THREE.Vector3 {
  const n = parseInt(hex.slice(1), 16);
  return new THREE.Vector3(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
}

export class BlendRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = BlendConfig;
  private surface = document.createElement('canvas');
  private renderer: THREE.WebGLRenderer | null = null;
  private scene = new THREE.Scene();
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2);
  private uniforms: Record<string, THREE.IUniform>;
  private mesh: THREE.Mesh;
  private playing = new Playing(0.6);
  private failed = false;
  private time = 0;
  private turn = 0;
  private phase = 0;
  private swell = 0;
  private ring = { at: 2, strength: 0 };
  private centre = new THREE.Vector2();
  private tilt = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
    this.uniforms = {
      uRes: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uLines: { value: 70 },
      uSize: { value: 1 },
      uWobble: { value: 0.5 },
      uSoft: { value: 0.5 },
      uPhase: { value: 0 },
      uShimmer: { value: 0 },
      uHue: { value: 0 },
      uSat: { value: 1 },
      uBlack: { value: 0 },
      uSegs: { value: 3 },
      uCentre: { value: new THREE.Vector2() },
      uRing: { value: new THREE.Vector2(2, 0) },
      uPts: { value: Array.from({ length: MAX_SEGS + 1 }, () => new THREE.Vector3()) },
      uGround: { value: new THREE.Vector3() },
      uRimTop: { value: new THREE.Vector3() },
      uRimBot: { value: new THREE.Vector3() },
      uCoreTop: { value: new THREE.Vector3() },
      uCoreBot: { value: new THREE.Vector3() },
    };
    const material = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms: this.uniforms,
      depthTest: false,
      depthWrite: false,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.frustumCulled = false;
    this.scene.add(this.mesh);
    try {
      this.renderer = makeRenderer(this.surface);
    } catch (error) {
      console.error('Blend could not start:', error);
      this.failed = true;
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(BlendConfig, values);
  }

  destroy() {
    this.scene.remove(this.mesh);
    this.mesh.geometry.dispose();
    (this.mesh.material as THREE.Material).dispose();
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
      drawUnavailable(this.ctx, width, height, 'BLEND');
      return;
    }
    this.update(handData, colors, audioData, width, height);
    if (this.surface.width !== width || this.surface.height !== height) renderer.setSize(width, height, false);
    renderer.render(this.scene, this.camera);
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.globalAlpha = 1;
    this.ctx.drawImage(this.surface, 0, 0, width, height);
  }

  private update(handData: HandData, colors: string[], audioData: AudioData | undefined, width: number, height: number) {
    const { cfg, uniforms: u } = this;
    const b = cfg.blend;
    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    const step = Math.max(0, play.step);

    // The clock — the finger count's tempo — turns it and lets it wander;
    // melody wanders it further.
    this.time += step * (1 + play.mid * cfg.sound.mid * 1.2);
    this.turn += step * 0.35 * b.spin;
    // The lines drift slowly outward, like a blend being redrawn.
    this.phase += step * 0.25;

    // A ripple out through the lines: on the kick, and harder on a clap.
    const kick = audioData?.beat ? (audioData.beatIntensity || 1) * cfg.sound.beat : 0;
    const clap = play.burst > 0.85 ? play.burst * cfg.hands.clap * 1.6 : 0;
    const hit = Math.max(kick, clap);
    if (hit > 0.05 && (this.ring.at > 0.35 || hit > this.ring.strength)) {
      this.ring = { at: 0, strength: Math.min(2, hit) };
    }
    this.ring.at += dt * 1.4;
    this.ring.strength *= Math.exp(-dt * 1.6);

    // Bass swells it.
    this.swell += (play.bass * cfg.sound.bass * 0.18 - this.swell) * (1 - Math.exp(-dt * 6));

    // It drifts toward a hand and tips with it.
    const handed = handData.left || handData.right ? 1 : 0;
    const aspect = width / height;
    const follow = cfg.hands.follow * handed;
    const ease = 1 - Math.exp(-dt * 2.5);
    this.centre.x += (play.aim.x * 0.15 * aspect * follow - this.centre.x) * ease;
    this.centre.y += (play.aim.y * 0.1 * follow - this.centre.y) * ease;
    this.tilt += (play.aim.y * 0.6 * follow - this.tilt) * ease;

    // The spine: a zigzag in space, turned about the vertical and tipped.
    const segs = Math.max(2, Math.min(MAX_SEGS, Math.round(b.zigzag)));
    const ca = Math.cos(this.turn);
    const sa = Math.sin(this.turn);
    const ct = Math.cos(this.tilt);
    const st = Math.sin(this.tilt);
    const pts = u.uPts.value as THREE.Vector3[];
    for (let i = 0; i <= MAX_SEGS; i++) {
      const at = Math.min(i, segs) / segs;
      const side = i % 2 === 0 ? -1 : 1;
      const wander = b.wobble * 0.06;
      const x = side * 0.34 + Math.sin(this.time * 0.6 + i * 1.9) * wander;
      const y = 0.52 - at * 1.04 + Math.cos(this.time * 0.5 + i * 2.3) * wander;
      const z = side * -0.2 + (i % 3 - 1) * 0.12;
      // About the vertical, then tipped toward the hand.
      const rx = x * ca - z * sa;
      const rz = x * sa + z * ca;
      const ry = y * ct - rz * st;
      pts[i].set(rx, ry, 0);
    }

    const colourway = COLOURWAYS[Math.max(0, Math.min(COLOURWAYS.length - 1, Math.round(b.colourway)))];
    (u.uGround.value as THREE.Vector3).copy(hexVec(colourway[0]));
    (u.uRimTop.value as THREE.Vector3).copy(hexVec(colourway[1]));
    (u.uRimBot.value as THREE.Vector3).copy(hexVec(colourway[2]));
    (u.uCoreTop.value as THREE.Vector3).copy(hexVec(colourway[3]));
    (u.uCoreBot.value as THREE.Vector3).copy(hexVec(colourway[4]));
    const turn = turnFrom(colors);

    (u.uRes.value as THREE.Vector2).set(width, height);
    u.uTime.value = this.time;
    u.uLines.value = b.lines;
    u.uSize.value = Math.max(0.2, b.size * (1 + this.swell + play.openness * 0.06));
    u.uWobble.value = b.wobble * (1 + play.mid * cfg.sound.mid * 0.8);
    u.uSoft.value = b.softness;
    u.uPhase.value = this.phase;
    u.uShimmer.value = play.high * cfg.sound.high;
    u.uHue.value = turn.hue;
    u.uSat.value = Math.min(1.4, turn.sat);
    u.uBlack.value = b.ground >= 0.5 ? 1 : 0;
    u.uSegs.value = segs;
    (u.uCentre.value as THREE.Vector2).copy(this.centre);
    (u.uRing.value as THREE.Vector2).set(this.ring.at, this.ring.strength);
  }
}
