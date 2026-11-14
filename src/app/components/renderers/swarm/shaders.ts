/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SWARM — THE SHADERS
 * ═══════════════════════════════════════════════════════════════════════════
 * Every point's position and velocity is one texel of a floating-point
 * texture. Each frame two passes move them — one works out the new velocity
 * from the forces on a point, one moves the point by it — entirely on the
 * graphics card, which is what lets a quarter of a million of them run.
 *
 * Then they are drawn as soft discs, added together into a wide-range buffer
 * that is faded a little each frame rather than cleared, so moving points
 * leave light behind them; and that buffer is brought down to the screen by a
 * curve that rolls off instead of clipping, so a dense knot of points glows
 * without burning to a flat white.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** A fullscreen triangle; `vUv` across it. */
export const QUAD_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

const COMMON = /* glsl */ `
precision highp float;
float hash(float n) { return fract(sin(n) * 43758.5453123); }
vec3 hash3(float n) { return vec3(hash(n), hash(n + 17.13), hash(n + 41.71)); }

// Currents: two swirling flows at different scales, bent through each other.
// Smooth everywhere and never still, so what follows them folds like smoke.
vec3 currents(vec3 p, float t) {
  vec3 q = p + 0.6 * vec3(sin(p.z * 0.7 + t * 0.31), sin(p.x * 0.9 + t * 0.27), sin(p.y * 0.8 - t * 0.23));
  vec3 v = vec3(sin(q.z) + cos(q.y), sin(q.x) + cos(q.z), sin(q.y) + cos(q.x));
  vec3 r = q.yzx * 2.1 + t * 0.4;
  v += 0.5 * vec3(sin(r.z) + cos(r.y), sin(r.x) + cos(r.z), sin(r.y) + cos(r.x));
  return v;
}`;

/** The new velocity of each point. */
export const VELOCITY_FRAG = /* glsl */ `${COMMON}
uniform sampler2D uPos;
uniform sampler2D uVel;
uniform float uDt;
uniform float uTime;
uniform float uStyle;
uniform float uFold;
uniform float uGather;   // 0 loose, 1 drawn tight (a pinch, a build-up)
uniform float uKick;     // this frame's kick, 0..1
uniform float uBurst;    // a clap or a drop, as an impulse on the one frame it lands
uniform float uSpin;
uniform vec3 uTargetA;
uniform vec3 uTargetB;
uniform float uSplit;    // 0 one flock, 1 two
uniform vec4 uHandA;     // xyz where, w how strongly it stirs
uniform vec4 uHandB;
uniform vec3 uHandVelA;
uniform vec3 uHandVelB;
uniform float uWave;     // radius of the ring of light crossing the water
uniform float uWaveAmp;
uniform float uPull;     // a fist draws the water in (positive), an open palm pushes it away
varying vec2 vUv;

vec3 stir(vec3 p, vec4 hand, vec3 handVel) {
  vec3 d = p - hand.xyz;
  // A column through the depth of the water, not a point: the hand has no depth to give.
  float f = hand.w * exp(-dot(d.xy, d.xy) / 0.55);
  vec3 inwards = -vec3(d.xy, 0.0) / (length(d.xy) + 0.15);
  return (handVel * 5.0 + vec3(-d.y, d.x, 0.0) * 2.4) * f
    + inwards * uPull * 5.0 * hand.w * exp(-dot(d.xy, d.xy) / 2.2);
}

void main() {
  vec4 P = texture2D(uPos, vUv);
  vec3 p = P.xyz;
  float seed = P.w;
  vec3 v = texture2D(uVel, vUv).xyz;
  vec3 acc = vec3(0.0);
  float drag = 1.6;

  if (uStyle < 0.5) {
    // ── A flock ──────────────────────────────────────────────────────────
    // Each bird has a place of its own in the flock and makes for it, so the
    // flock has a body rather than collapsing to a point or a shell. The
    // currents fold that body as it goes, and it turns about its own axis;
    // being a little slow to follow is what draws it out into ribbons.
    float side = step(0.5, fract(seed * 7.31));
    vec3 target = mix(uTargetA, mix(uTargetA, uTargetB, side), uSplit);
    vec3 place = (hash3(seed * 57.0) - 0.5) * vec3(2.2, 1.3, 1.7) * mix(1.0, 0.22, uGather);
    vec3 home = target + place;
    vec3 d = home - p;
    acc += d * mix(2.4, 7.0, uGather) * (0.6 + 0.8 * fract(seed * 13.7));
    acc += currents(p * 0.75, uTime) * 2.6 * uFold;
    acc += cross(vec3(0.0, 1.0, 0.0), target - p) * 0.8 * uSpin;
    acc += normalize(target - p + 1e-4) * uKick * 9.0;
    v += normalize(p - target + (hash3(seed * 91.0) - 0.5) * 0.6) * uBurst * (3.0 + 5.0 * hash(seed * 3.1));
    drag = 1.5;
  } else if (uStyle < 1.5) {
    // ── Plankton ─────────────────────────────────────────────────────────
    // Adrift in slow currents. The hand stirs the water; a kick sends a
    // ring outwards through it. What moves, lights — see the draw pass.
    acc += currents(p * 0.55, uTime * 0.6) * 0.28 * uFold;
    acc += stir(p, uHandA, uHandVelA) + stir(p, uHandB, uHandVelB);
    float r = length(p) + 1e-4;
    float ring = exp(-pow((r - uWave) / 0.4, 2.0));
    acc += (p / r) * ring * uWaveAmp * 7.0;
    v += normalize(p + (hash3(seed * 91.0) - 0.5)) * uBurst * (1.0 + 2.5 * hash(seed * 3.1));
    drag = 2.2;
  } else {
    // ── A galaxy ─────────────────────────────────────────────────────────
    // Each star is steered towards the speed of a circular orbit at its own
    // radius, held to that radius and to the plane of the disc.
    float r = length(p.xz) + 1e-3;
    vec3 radial = vec3(p.x, 0.0, p.z) / r;
    vec3 tangent = vec3(-radial.z, 0.0, radial.x);
    float home = mix(1.0, 0.55, uGather) * (0.1 + 2.4 * pow(fract(seed * 13.7), 1.15));
    // Turning as one body near the middle and ever more slowly further out,
    // as a real disc does. A speed that kept rising towards the centre asked
    // for an impossible turn there, and the core shook itself apart.
    float speed = uSpin * 2.6 * r / ((0.35 + r) * sqrt(0.3 + r));
    acc += (tangent * speed - v) * 2.2;
    // What a circle of that radius at that speed needs to stay a circle;
    // without it the inner stars are flung outwards and the core empties.
    acc -= radial * speed * speed / (r + 0.06);
    acc += radial * (home - r) * 1.4;
    // A thin disc with a round bulge at the middle. Heights bunch towards
    // the plane rather than filling a slab, or the core reads as a cylinder.
    float spreadY = (fract(seed * 91.7) + fract(seed * 37.3) + fract(seed * 59.9)) / 1.5 - 1.0;
    float height = spreadY * (0.05 + 0.13 * exp(-r * r * 5.0));
    acc.y += (height - p.y) * 7.0;
    acc += currents(p * 1.2, uTime) * 0.12 * uFold;
    acc += radial * uKick * 2.6;
    v += normalize(p + (hash3(seed * 91.0) - 0.5) * 0.8) * uBurst * (1.5 + 3.5 * hash(seed * 3.1));
    drag = 0.9;
  }

  v += acc * uDt;
  v *= exp(-drag * uDt);
  // Nothing may leave for ever: a point thrown too hard is slowed, not lost.
  float sp = length(v);
  if (sp > 14.0) v *= 14.0 / sp;
  gl_FragColor = vec4(v, 1.0);
}`;

/** Each point, moved by its velocity. */
export const POSITION_FRAG = /* glsl */ `${COMMON}
uniform sampler2D uPos;
uniform sampler2D uVel;
uniform float uDt;
uniform float uStyle;
varying vec2 vUv;
void main() {
  vec4 P = texture2D(uPos, vUv);
  vec3 p = P.xyz + texture2D(uVel, vUv).xyz * uDt;
  if (uStyle > 0.5 && uStyle < 1.5) {
    // The water has no edge: what drifts out one side comes in the other.
    vec3 box = vec3(5.2, 3.0, 2.6);
    p = mod(p + box, 2.0 * box) - box;
  }
  // A point that has somehow become not-a-number is put back at the middle.
  if (!(dot(p, p) < 1.0e6)) p = (hash3(P.w * 57.0) - 0.5) * 2.0;
  gl_FragColor = vec4(p, P.w);
}`;

/** Fills a buffer with a texture as it is; how the first positions get in. */
export const COPY_FRAG = /* glsl */ `
precision highp float;
uniform sampler2D uTex;
varying vec2 vUv;
void main() { gl_FragColor = texture2D(uTex, vUv); }`;

/** Draws each point where its texel says it is. */
export const POINT_VERT = /* glsl */ `
precision highp float;
uniform sampler2D uPos;
uniform sampler2D uVel;
uniform float uStyle;
uniform float uSize;
uniform float uBlur;
uniform float uFocus;
uniform float uPixels;   // the frame's height in pixels
uniform float uTime;
uniform float uSparkle;  // the hats, 0..1
uniform float uKick;
uniform float uBass;
uniform float uEnergy;
uniform float uLight;    // overall brightness, already scaled for how many points there are
uniform int uLook;       // 0 beads, 1 discs, 2 light
attribute vec2 ref;
varying vec3 vColor;
varying float vAlpha;
varying float vTone;     // where on the palette a bead sits

float hash(float n) { return fract(sin(n) * 43758.5453123); }

void main() {
  vec4 P = texture2D(uPos, ref);
  vec3 vel = texture2D(uVel, ref).xyz;
  float seed = P.w;
  float speed = length(vel);
  vec4 mv = modelViewMatrix * vec4(P.xyz, 1.0);
  gl_Position = projectionMatrix * mv;
  float dist = max(0.2, -mv.z);

  if (uLook < 2) {
    // ── beads ──────────────────────────────────────────────────────────
    // Solid, a few sizes, and in a handful of the palette's colours rather
    // than a spread of them — it should read as a design, not as noise.
    float size = uSize * (0.55 + 0.9 * hash(seed * 5.3)) * (1.0 + 0.2 * uBass + 0.25 * uKick);
    gl_PointSize = clamp(size * uPixels * 0.075 / dist, 2.0, 120.0);
    float group = floor(hash(seed * 7.7) * 5.0) / 5.0;
    float tone = group * 0.62;
    if (uStyle < 0.5) tone += clamp(speed * 0.03, 0.0, 0.12);
    else if (uStyle < 1.5) tone = group * 0.3 + clamp(speed * 0.5, 0.0, 0.45);
    else tone = group * 0.25 + length(P.xz) * 0.16;
    // On each hat a different few jump on along the palette.
    tone += step(0.95, hash(seed * 31.7 + floor(uTime * 9.0))) * uSparkle * 0.17;
    vTone = tone;
    vColor = vec3(0.0);
    vAlpha = 1.0;
    return;
  }
  vTone = 0.0;

  // Out of focus a point spreads into a larger, fainter disc — the same
  // light over more area — which is what gives the cloud its depth.
  float base = uSize * (0.6 + 0.8 * hash(seed * 5.3)) * (1.0 + 0.25 * uBass);
  float spread = abs(dist - uFocus) * 0.45 * uBlur;
  float px = (base + spread) * uPixels * 0.012 / dist;
  gl_PointSize = clamp(px, 1.0, 56.0);
  float light = (base * base) / ((base + spread) * (base + spread));
  // Under a pixel wide it cannot get smaller, so it gets dimmer instead.
  light *= min(1.0, px * px);

  vec3 color;
  float bright;
  if (uStyle < 0.5) {
    // Pale gold where the flock is slow, cool white-blue where it races.
    float t = clamp(speed * 0.22, 0.0, 1.0);
    color = mix(vec3(1.0, 0.82, 0.58), vec3(0.62, 0.84, 1.0), t);
    color = mix(color, vec3(1.0, 0.95, 0.9), 0.25 * hash(seed * 2.7));
    bright = 0.55 + 0.6 * t;
  } else if (uStyle < 1.5) {
    // What moves, lights: still water is almost dark, stirred water glows.
    float t = clamp(speed * 0.9, 0.0, 1.0);
    color = mix(vec3(0.1, 0.5, 0.8), vec3(0.45, 1.0, 0.86), t);
    // A slow twinkle of its own, so still water is dim rather than dead.
    float idle = 0.5 + 0.5 * sin(uTime * (0.6 + hash(seed * 9.1)) + seed * 40.0);
    bright = (0.22 + 0.5 * idle * idle + 3.0 * t * t + 0.25 * uEnergy) * 6.0;
  } else {
    // A warm core, blue arms: the arms are a pattern of brightness turning
    // more slowly than the stars that pass through it.
    float r = length(P.xz);
    float angle = atan(P.z, P.x);
    float arm = 0.5 + 0.5 * cos(2.0 * (angle + log(r + 0.25) * 1.25) - uTime * 0.35);
    arm = arm * arm;
    float core = exp(-r * 2.2);
    color = mix(vec3(0.5, 0.7, 1.0), vec3(1.0, 0.82, 0.58), clamp(core * 2.2, 0.0, 1.0));
    color = mix(color, vec3(1.0, 0.7, 0.8), 0.3 * step(0.9, hash(seed * 2.7)) * arm);
    bright = mix(0.2, 7.0, arm) * (0.45 + 0.55 * smoothstep(3.4, 0.5, r)) * (0.2 + 0.8 * smoothstep(0.0, 0.6, r))
      + core * (0.05 + 0.6 * uKick);
  }

  // Sparkle: on each hat a different few catch the light.
  float pick = step(0.965, hash(seed * 31.7 + floor(uTime * 9.0)));
  bright *= 1.0 + pick * uSparkle * 5.0;
  bright *= 1.0 + 0.5 * uKick;

  vColor = color;
  vAlpha = light * bright * uLight;
}`;

export const POINT_FRAG = /* glsl */ `
precision highp float;
uniform int uLook;
uniform sampler2D uPalA;
uniform sampler2D uPalB;
uniform float uPalMix;
uniform float uT;
varying vec3 vColor;
varying float vAlpha;
varying float vTone;
vec3 palette(float c) {
  vec2 at = vec2(fract(c), 0.5);
  return mix(texture2D(uPalA, at).rgb, texture2D(uPalB, at).rgb, uPalMix);
}
void main() {
  vec2 d = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(d, d);
  if (r2 > 1.0) discard;
  if (uLook == 2) {
    float disc = 1.0 - r2;
    gl_FragColor = vec4(vColor * vAlpha * disc * disc, 1.0);
    return;
  }
  // A ball, from a flat disc: the normal it would have at this point of it.
  vec3 N = vec3(d.x, -d.y, sqrt(1.0 - r2));
  vec3 L = normalize(vec3(0.3, 0.35, 0.9));
  float wrap = clamp(dot(N, L) * 0.5 + 0.5, 0.0, 1.0);
  float rim = 1.0 - N.z;
  float c = vTone + uT;
  vec3 col;
  if (uLook == 0) {
    // Shaded the family's way: forward through the palette, not darker.
    c += 0.32 * (1.0 - wrap) + 0.12 * smoothstep(0.55, 1.0, rim);
    col = palette(c);
    col *= 0.82 + 0.28 * wrap;
    col += vec3(1.0) * pow(max(dot(reflect(-L, N), vec3(0.0, 0.0, 1.0)), 0.0), 16.0) * 0.2;
    col = mix(col, col * col * 0.6, smoothstep(0.85, 1.0, rim) * 0.6);
  } else {
    // Cut paper: one flat colour, one step of shadow, an outline.
    col = palette((floor(c * 12.0) + 0.45) / 12.0);
    col *= mix(0.78, 1.0, step(0.42, wrap));
    col = mix(col, palette(0.53) * 0.6, smoothstep(0.62, 0.7, r2));
  }
  gl_FragColor = vec4(col, 1.0);
}`;

/** Brings the wide-range buffer down to the screen without clipping it. */
export const PRESENT_FRAG = /* glsl */ `
precision highp float;
uniform sampler2D uTex;
uniform float uTurn;   // radians round the colour wheel
uniform float uSat;
uniform float uExposure;
varying vec2 vUv;
vec3 turn(vec3 c, float a) {
  const mat3 toYiq = mat3(0.299, 0.596, 0.211, 0.587, -0.274, -0.523, 0.114, -0.322, 0.312);
  const mat3 toRgb = mat3(1.0, 1.0, 1.0, 0.956, -0.272, -1.106, 0.621, -0.647, 1.703);
  vec3 yiq = toYiq * c;
  float ca = cos(a), sa = sin(a);
  yiq.yz = mat2(ca, sa, -sa, ca) * yiq.yz;
  return toRgb * yiq;
}
void main() {
  vec3 c = texture2D(uTex, vUv).rgb * uExposure;
  // Rolls off towards white rather than hitting it.
  c = 1.0 - exp(-c);
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  c = mix(vec3(l), turn(c, uTurn), uSat);
  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}`;

/** Multiplies what is already in the buffer, so the last frames fade. */
export const FADE_FRAG = /* glsl */ `
precision highp float;
uniform float uKeep;
void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0 - uKeep); }`;
