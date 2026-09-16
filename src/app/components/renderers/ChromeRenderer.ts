import { AudioData, HandData } from '../../App';
import { ChromeConfig } from '../../config/ChromeRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { vjTime } from '../../motion/clock';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CHROME
 * ═══════════════════════════════════════════════════════════════════════════
 * Liquid metal on black, splitting light at its edges.
 *
 * A raymarched signed distance field rather than a mesh: the form is a handful
 * of metaballs folded together with a smooth minimum, so lobes merge and part
 * and leave holes between them without any geometry being built or torn down.
 * A displaced icosphere cannot open a hole; this can.
 *
 * The rainbow is not a texture and not a palette. It is the R, G and B
 * reflections being traced at slightly different angles — the same reason an
 * oil film or a soap bubble is coloured — so the spectrum appears where the
 * surface turns away from the eye and nowhere else. Face-on it is dark silver;
 * at a grazing ridge it fans into pink, teal and gold. That means the colour
 * follows the curvature by itself instead of being painted on, which is what
 * separates this from a gradient map.
 *
 * It runs in its own WebGL context and is blitted across, the way the three.js
 * renderers are, because a fragment shader is the only sane way to raymarch
 * and the rest of the app draws in 2D.
 * ═══════════════════════════════════════════════════════════════════════════
 */

const VERT = `#version 300 es
in vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }`;

const FRAG = `#version 300 es
precision highp float;
out vec4 fragColor;

uniform vec2  uSize;
uniform float uTime;
uniform float uLobes, uSpread, uSize2, uBlend, uRipple, uRippleScale;
uniform float uDrift, uChurn, uSpin;
uniform float uDispersion, uRimTight, uSplit, uSilver, uFacing, uPolish;
uniform vec2  uKey;
uniform float uKeyGain, uFill, uAmbient;
uniform vec2  uPush;
uniform float uKick, uGrain, uGain, uHue;

// ── noise ────────────────────────────────────────────────────────────────────
vec3 hash3(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float noise(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(dot(hash3(i + vec3(0,0,0)), f - vec3(0,0,0)),
                     dot(hash3(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
                 mix(dot(hash3(i + vec3(0,1,0)), f - vec3(0,1,0)),
                     dot(hash3(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
             mix(mix(dot(hash3(i + vec3(0,0,1)), f - vec3(0,0,1)),
                     dot(hash3(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
                 mix(dot(hash3(i + vec3(0,1,1)), f - vec3(0,1,1)),
                     dot(hash3(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y), u.z);
}

// Polynomial smooth minimum: the join that makes two balls one surface with a
// neck rather than two balls touching.
float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

// ── the form ─────────────────────────────────────────────────────────────────
float map(vec3 p) {
  p.xz *= rot(uTime * uSpin);
  p.xy += uPush;

  float d = 1e9;
  for (int i = 0; i < 7; i++) {
    if (float(i) >= uLobes) break;
    float f = float(i);
    // Each lobe on its own slow orbit, at a rate that does not divide into the
    // others, so the arrangement never settles into a repeat.
    float t = uTime * uDrift;
    vec3 c = vec3(
      sin(t * (0.7 + f * 0.13) + f * 2.4),
      cos(t * (0.6 + f * 0.17) + f * 1.7),
      sin(t * (0.5 + f * 0.11) + f * 3.1)
    ) * uSpread;
    float r = uSize2 * (0.72 + 0.4 * sin(f * 1.9 + t));
    /*
     * Stretched, not round.
     *
     * Spheres merge into a bunch of grapes. The reference is drapery — tall
     * folds that fall and pinch — so each lobe is squashed vertically before
     * the distance is taken, which turns the same metaball into a hanging
     * sheet and the joins between them into ribbons rather than necks.
     */
    vec3 q = (p - c) * vec3(1.0, 0.62, 1.0);
    d = smin(d, length(q) - r, uBlend);
  }

  // The ripple is what stops it reading as a pile of spheres.
  d += noise(p * uRippleScale + vec3(0.0, 0.0, uTime * uChurn)) * uRipple;
  d += noise(p * uRippleScale * 2.7 + vec3(uTime * uChurn * 0.6)) * uRipple * 0.35;
  return d;
}

/**
 * How enclosed a point is, from a few taps along its own normal.
 *
 * This is what puts the black in the folds. Without it every crevice is lit
 * as brightly as every ridge, and the form reads as a soft pale lump instead
 * of as metal — the deep inky concaves in the reference are occlusion, not
 * shading.
 */
float occlusion(vec3 p, vec3 n) {
  float sum = 0.0;
  float weight = 1.0;
  for (int i = 1; i <= 5; i++) {
    float step = 0.035 * float(i);
    sum += (step - map(p + n * step)) * weight;
    weight *= 0.65;
  }
  return clamp(1.0 - 2.2 * sum, 0.0, 1.0);
}

vec3 normalAt(vec3 p) {
  vec2 e = vec2(0.0015, 0.0);
  return normalize(vec3(
    map(p + e.xyy) - map(p - e.xyy),
    map(p + e.yxy) - map(p - e.yxy),
    map(p + e.yyx) - map(p - e.yyx)));
}

float march(vec3 ro, vec3 rd, out bool hit) {
  float t = 0.0;
  hit = false;
  for (int i = 0; i < 96; i++) {
    vec3 p = ro + rd * t;
    float d = map(p);
    if (d < 0.0015 * t + 0.0009) { hit = true; break; }
    t += d * 0.82;          // understep: the noise makes the field non-exact
    if (t > 12.0) break;
  }
  return t;
}

/*
 * What a reflected ray finds.
 *
 * There is no environment map — the scene is a void and a couple of lights, so
 * the reflection is those lights and nothing else. That is deliberate: every
 * bit of colour then comes from the dispersion rather than from something the
 * shader was handed, which is what keeps it reading as spectral rather than
 * as tinted.
 */
float env(vec3 dir, vec3 key) {
  float spec = pow(max(dot(dir, key), 0.0), uPolish) * uKeyGain;
  float broad = pow(max(dot(dir, key), 0.0), 3.0) * 0.5 * uKeyGain;
  vec3 fillDir = normalize(vec3(0.6, -0.5, 0.4));
  float back = pow(max(dot(dir, fillDir), 0.0), 9.0) * uFill;

  /*
   * A gradient for everything the two lights do not cover.
   *
   * Without it the only bright thing on the surface is a small specular dot
   * and the rest reads as flat grey — which is what the first version looked
   * like. Mirrors show their surroundings, so a chrome surface in a void is
   * a grey blob no matter how good the material is. This is the cheapest
   * possible surrounding: brighter above, darker below, and it is what makes
   * the long sweeping highlights run along the folds.
   */
  /*
   * A gradient for everything the two lights do not cover.
   *
   * Mirrors show their surroundings, so a chrome surface in a pure void is a
   * grey blob however good the material is — that is what the first version
   * looked like. But the second version made this bright and even, and the
   * result was milky, like pearl. A room is not evenly lit: there is
   * something above and nothing below. Dark underneath is what gives chrome
   * its contrast.
   */
  /*
   * A studio, not a sky.
   *
   * An even gradient overhead lights roughly half of a convex form, and the
   * result is pale all over — twice now that has turned this into pearl. A
   * black room with one softbox above is what the reference actually is, and
   * it is the darkness between the reflections that makes the bright ones
   * read as mirror rather than as paint.
   */
  float box = smoothstep(0.45, 0.95, dir.y) * 0.62;
  float bounce = smoothstep(0.0, -0.8, dir.y) * 0.035;
  return spec + broad + back + box + bounce;
}

// Hue rotation, so the layer's colour control reaches a shader whose colour is
// generated rather than chosen.
vec3 turn(vec3 c, float a) {
  const vec3 k = vec3(0.57735);
  float ca = cos(a);
  return c * ca + cross(k, c) * sin(a) + k * dot(k, c) * (1.0 - ca);
}

void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - uSize) / min(uSize.x, uSize.y);
  vec3 ro = vec3(0.0, 0.0, 3.0);
  vec3 rd = normalize(vec3(uv, -1.3));

  bool hit;
  float t = march(ro, rd, hit);

  vec3 col = vec3(0.0);
  if (hit) {
    vec3 p = ro + rd * t;
    vec3 n = normalAt(p);
    vec3 key = normalize(vec3(uKey, 0.55));

    // Fresnel: how far round the surface has turned from the eye. Everything
    // spectral hangs off this, which is why the colour tracks the curvature.
    float fres = pow(1.0 - clamp(dot(n, -rd), 0.0, 1.0), uRimTight);

    // Three reflections at slightly different indices. The separation is the
    // rainbow — no LUT, no gradient, just red, green and blue bouncing off at
    // angles that differ by a fraction of a degree.
    float split = uSplit * (0.35 + fres) * uDispersion;
    vec3 r = reflect(rd, normalize(n + vec3( split,  split * 0.6, 0.0)));
    vec3 g = reflect(rd, normalize(n));
    vec3 b = reflect(rd, normalize(n - vec3( split,  split * 0.6, 0.0)));

    /*
     * A mirror is its reflection, multiplied — not a surface with a reflection
     * added on top.
     *
     * Adding them is what kept this pale through several attempts: the
     * environment landed at full strength wherever a normal happened to face
     * up, so no part of the form could ever be dark, however black the room
     * was. A metal's colour is the environment times its reflectance, and a
     * chrome-like metal reflects strongly at every angle — so the black in
     * the folds is not shading, it is a reflection of nothing.
     */
    /*
     * Where the colour concentrates.
     *
     * Two places: glancing angles, which the Fresnel term gives, and
     * curvature ridges. One extra tap along the normal estimates the second —
     * on a flat surface the field a short way out grows by exactly that
     * distance, and the shortfall is how sharply the surface is bending. A
     * tight pinch therefore picks up bands a broad swell does not, which is
     * what makes the iridescence follow the form instead of the outline.
     */
    float ridge = clamp((0.06 - map(p + n * 0.06)) * 9.0, 0.0, 1.0);

    /*
     * Thin-film interference. The mean is taken out so this can only tint:
     * added whole it brings its own grey, and enough of that turns the form
     * milky — which it did, twice.
     */
    float thickness = fres * 4.2 + ridge * 2.6 + (1.0 - abs(n.z)) * 0.7 + uTime * 0.18;
    vec3 film = 0.5 + 0.5 * cos(thickness * 1.7 + vec3(0.0, 2.09, 4.19));
    film -= dot(film, vec3(0.3333));

    vec3 reflection = vec3(env(r, key), env(g, key), env(b, key));
    vec3 tint = vec3(uSilver, uSilver * 1.02, uSilver * 1.12);
    col = reflection * tint;

    // Dispersion rides the reflection rather than sitting beside it: a rainbow
    // in an unlit fold would give the game away immediately.
    float lit = max(max(reflection.r, reflection.g), reflection.b);
    col += film * (0.1 + 2.2 * fres * fres + ridge * 1.1) * uDispersion
         * (0.35 + lit * 1.4);

    // A little extra rim, so the silhouette keeps its edge against the black.
    col += tint * fres * fres * uFacing * 6.0;

    col *= occlusion(p, n);
    col += uAmbient;

    // Distance keeps the far side of the form from competing with the near.
    col *= exp(-max(0.0, t - 3.0) * 0.16);
  }

  col = turn(col, uHue);
  col *= uGain;
  // A shoulder that only bites near the top, so highlights roll off without
  // the darks being lifted into grey along with them.
  col = col / (1.0 + col * 0.45);
  col = pow(max(col, 0.0), vec3(0.52));

  // Grain, which is most of what makes a render look photographed.
  float grain = fract(sin(dot(gl_FragCoord.xy + uTime, vec2(12.9898, 78.233))) * 43758.5453);
  col += (grain - 0.5) * uGrain;

  fragColor = vec4(max(col, 0.0), 1.0);
}`;

type Cfg = typeof ChromeConfig;

export class ChromeRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = ChromeConfig;

  private gl: WebGL2RenderingContext | null = null;
  private surface: HTMLCanvasElement;
  private program: WebGLProgram | null = null;
  private uniforms: Record<string, WebGLUniformLocation | null> = {};

  /** Smoothed hand aim, so tracking jitter does not shake the form. */
  private aim = { x: 0, y: 0 };
  /** Shock from a clap, decaying. Beats do not reach this. */
  private kick = 0;
  /** The music's weight, gathered slowly. What the form floats on. */
  private swell = 0;
  /** How open the hands are, 0 to 1, eased. Stretches and sharpens the form. */
  private openness = 0.25;
  private failed = false;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.surface = document.createElement('canvas');
    this.init();
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(ChromeConfig, values);
  }

  private init() {
    const gl = this.surface.getContext('webgl2', {
      alpha: false,
      antialias: false,
      powerPreference: 'high-performance',
    });
    if (!gl) { this.failed = true; return; }
    this.gl = gl;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Chrome shader:', gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) { this.failed = true; return; }

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Chrome link:', gl.getProgramInfoLog(program));
      this.failed = true;
      return;
    }
    this.program = program;
    gl.useProgram(program);

    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    for (const name of [
      'uSize', 'uTime', 'uLobes', 'uSpread', 'uSize2', 'uBlend', 'uRipple', 'uRippleScale',
      'uDrift', 'uChurn', 'uSpin', 'uDispersion', 'uRimTight', 'uSplit', 'uSilver',
      'uFacing', 'uPolish', 'uKey', 'uKeyGain', 'uFill', 'uAmbient', 'uPush', 'uKick',
      'uGrain', 'uGain', 'uHue',
    ]) {
      this.uniforms[name] = gl.getUniformLocation(program, name);
    }
  }

  destroy() {
    const gl = this.gl;
    if (!gl) return;
    if (this.program) gl.deleteProgram(this.program);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    this.gl = null;
    this.program = null;
  }

  /**
   * The hue the layer is asking for, taken from its palette.
   *
   * The colour here is generated by the physics rather than picked, so there
   * is nothing to swap — but a set where one control reaches every visual
   * except this one would be worse than the colour being approximate, so the
   * whole result is turned instead.
   */
  private hueFrom(colors: string[]): number {
    const hex = (colors[0] ?? '#8888ff').replace('#', '');
    const full = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
    const r = (parseInt(full.slice(0, 2), 16) || 0) / 255;
    const g = (parseInt(full.slice(2, 4), 16) || 0) / 255;
    const b = (parseInt(full.slice(4, 6), 16) || 0) / 255;
    // Against the shader's own cool silver, so a blue palette turns nothing.
    return Math.atan2(Math.sqrt(3) * (g - b), 2 * r - g - b) - 2.2;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { ctx, cfg } = this;
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;

    const gl = this.gl;
    if (this.failed || !gl || !this.program) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.font = '500 14px ui-monospace, monospace';
      ctx.textAlign = 'center';
      ctx.fillText('CHROME NEEDS WEBGL2', width / 2, height / 2);
      return;
    }

    // Half resolution: ninety-six raymarch steps per pixel is the whole cost
    // of this visual, and at a projector's size the difference is invisible
    // under the grain while the frame rate is not.
    const scale = 0.6;
    const w = Math.max(2, Math.round(width * scale));
    const h = Math.max(2, Math.round(height * scale));
    if (this.surface.width !== w || this.surface.height !== h) {
      this.surface.width = w;
      this.surface.height = h;
    }
    gl.viewport(0, 0, w, h);
    gl.useProgram(this.program);

    const hands = [handData.left, handData.right].filter(Boolean);
    const fingers = hands.length
      ? Math.max(...hands.map((h) => h!.fingerCount ?? 2))
      : 2;
    this.openness += ((fingers - 1) / 4 - this.openness) * 0.08;

    let targetX = 0;
    let targetY = 0;
    if (hands.length > 0) {
      const mx = hands.reduce((s, hand) => s + hand!.position.x, 0) / hands.length;
      const my = hands.reduce((s, hand) => s + hand!.position.y, 0) / hands.length;
      targetX = (mx - 0.5) * 2;
      targetY = (0.5 - my) * 2;
    }
    // Quicker than it was: at 0.06 the form arrived so long after the hand
    // that the two did not read as connected.
    this.aim.x += (targetX - this.aim.x) * 0.14;
    this.aim.y += (targetY - this.aim.y) * 0.14;

    /*
     * Floating, not beating.
     *
     * This used to jump on every beat, and a mirror that flinches on the kick
     * reads as a light flicking on and off rather than as metal. Molten metal
     * has mass: it does not respond to a transient at all, it responds to the
     * weight of the music over a second or two.
     *
     * So the onset is integrated rather than used. A loud passage raises the
     * swell over about a second and it falls away over several — the form
     * gathers and settles instead of twitching.
     */
    const weight = Math.min(1,
      (audioData?.bass ?? 0) * 0.8 + (audioData?.onset ?? 0) * 0.35);
    this.swell += (weight - this.swell) * (weight > this.swell ? 0.035 : 0.012);

    // A clap is the one thing that is meant to be a shock, and only a clap.
    const clap = handData.clapping ? (handData.clapIntensity ?? 1) : 0;
    this.kick = Math.max(this.kick * 0.94, clap);

    /*
     * The hand, read as a pose rather than as a position.
     *
     * Reaching across moved the form a little and every finger count looked
     * much the same, so the gestures did not read. An open hand now stretches
     * the lobes apart and sharpens the metal; a closed one gathers them into
     * a single heavy mass. That is a change of shape, not of speed, so it
     * survives the tempo already being global.
     */
    const spread = handData.distanceBetweenHands ?? 0.4;
    const u = this.uniforms;
    const f1 = (name: string, v: number) => gl.uniform1f(u[name], v);

    gl.uniform2f(u.uSize, w, h);
    f1('uTime', vjTime());
    f1('uLobes', Math.max(1, Math.min(7, Math.round(cfg.form.lobes))));
    // Spread is the hands: how far apart, and how open. Both stretch it.
    f1('uSpread', cfg.form.spread *
      (1 + (spread - 0.4) * cfg.hands.spread + (this.openness - 0.25) * 0.55) +
      this.kick * cfg.hands.kick * 0.35);
    // Mass swells with the music's weight, slowly.
    f1('uSize2', cfg.form.size * (1 + this.swell * 0.3));
    f1('uBlend', Math.max(0.05, cfg.form.blend));
    // A closed hand leaves the surface molten and rippling; an open one
    // draws it taut, so the same form reads as liquid or as polished.
    f1('uRipple', cfg.form.ripple *
      (1.35 - this.openness * 0.7 + this.kick * cfg.hands.kick * 1.6));
    f1('uRippleScale', cfg.form.rippleScale);
    // The lobes wander further when the music is carrying weight.
    f1('uDrift', cfg.motion.drift * (1 + this.swell * 0.5));
    f1('uChurn', cfg.motion.churn);
    f1('uSpin', cfg.motion.spin);
    f1('uDispersion', cfg.material.dispersion * (1 + this.swell * 0.4 + this.kick * 0.35));
    f1('uRimTight', Math.max(0.5, cfg.material.rimTightness));
    f1('uSplit', cfg.material.split);
    f1('uSilver', cfg.material.silver);
    f1('uFacing', cfg.material.facing);
    f1('uPolish', Math.max(2, cfg.material.polish));
    gl.uniform2f(u.uKey, cfg.light.keyX, cfg.light.keyY);
    f1('uKeyGain', cfg.light.key);
    f1('uFill', cfg.light.fill);
    f1('uAmbient', cfg.light.ambient);
    gl.uniform2f(u.uPush, this.aim.x * cfg.hands.push, this.aim.y * cfg.hands.push);
    f1('uKick', this.kick);
    f1('uGrain', cfg.look.grain);
    f1('uGain', cfg.look.gain);
    f1('uHue', this.hueFrom(colors));

    gl.drawArrays(gl.TRIANGLES, 0, 3);

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(this.surface, 0, 0, width, height);
  }
}
