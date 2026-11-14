/**
 * ═══════════════════════════════════════════════════════════════════════════
 * INK — THE SHADERS
 * ═══════════════════════════════════════════════════════════════════════════
 * A fluid, solved on a grid on the graphics card, the way Jos Stam's "stable
 * fluids" set out: the water's velocity is carried along by itself; whatever
 * pushes on it is added; and then it is corrected so that water neither
 * piles up nor thins out anywhere, which is the step that makes a push here
 * turn into a swirl over there. Ink is a second, finer picture that is simply
 * carried by that velocity.
 *
 * One extra step puts back the small eddies the grid smooths away, which is
 * where ink gets its fine curling threads.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const QUAD_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

/** Carries a picture along the velocity, fading it a little. */
export const ADVECT_FRAG = /* glsl */ `
precision highp float;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 uScale;      // turns a velocity into a step across the picture
uniform float uDt;
uniform float uFade;
varying vec2 vUv;
void main() {
  vec2 from = vUv - uDt * texture2D(uVelocity, vUv).xy * uScale;
  gl_FragColor = texture2D(uSource, from) / (1.0 + uFade * uDt);
}`;

/** Pushes on the water at up to eight places, and stirs all of it gently. */
export const FORCE_FRAG = /* glsl */ `
precision highp float;
uniform sampler2D uVelocity;
uniform vec3 uPoint[8];   // where (xy, 0..1) and how wide (z)
uniform vec3 uPush[8];    // which way (xy) and how hard outwards from the middle of it (z)
uniform float uAspect;
uniform float uTime;
uniform float uStir;
uniform float uDt;
varying vec2 vUv;
void main() {
  vec2 v = texture2D(uVelocity, vUv).xy;
  for (int i = 0; i < 8; i++) {
    vec2 d = (vUv - uPoint[i].xy) * vec2(uAspect, 1.0);
    float g = exp(-dot(d, d) / (uPoint[i].z * uPoint[i].z));
    v += g * (uPush[i].xy + normalize(d + 1e-5) * uPush[i].z);
  }
  // Slow currents of the water's own, so the ink never just hangs.
  vec2 p = vUv * vec2(uAspect, 1.0);
  v += uDt * uStir * vec2(
    sin(p.y * 5.3 + uTime * 0.31) + 0.6 * sin(p.y * 11.0 - uTime * 0.47 + p.x * 3.0),
    cos(p.x * 4.7 - uTime * 0.27) + 0.6 * cos(p.x * 9.0 + uTime * 0.39 + p.y * 3.0));
  gl_FragColor = vec4(v, 0.0, 1.0);
}`;

/** Lets ink go at the same places. */
export const INK_FRAG = /* glsl */ `
precision highp float;
uniform sampler2D uDye;
uniform vec3 uPoint[8];
uniform vec3 uInk[8];
uniform float uAspect;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(uDye, vUv).rgb;
  for (int i = 0; i < 8; i++) {
    vec2 d = (vUv - uPoint[i].xy) * vec2(uAspect, 1.0);
    c += exp(-dot(d, d) / (uPoint[i].z * uPoint[i].z)) * uInk[i];
  }
  gl_FragColor = vec4(c, 1.0);
}`;

/** How much the water is turning at each point. */
export const CURL_FRAG = /* glsl */ `
precision highp float;
uniform sampler2D uVelocity;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  float l = texture2D(uVelocity, vUv - vec2(uTexel.x, 0.0)).y;
  float r = texture2D(uVelocity, vUv + vec2(uTexel.x, 0.0)).y;
  float b = texture2D(uVelocity, vUv - vec2(0.0, uTexel.y)).x;
  float t = texture2D(uVelocity, vUv + vec2(0.0, uTexel.y)).x;
  gl_FragColor = vec4(0.5 * (r - l - t + b), 0.0, 0.0, 1.0);
}`;

/** Feeds the small eddies, which the grid would otherwise smooth away. */
export const VORTICITY_FRAG = /* glsl */ `
precision highp float;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform vec2 uTexel;
uniform float uAmount;
uniform float uDt;
varying vec2 vUv;
void main() {
  float l = texture2D(uCurl, vUv - vec2(uTexel.x, 0.0)).x;
  float r = texture2D(uCurl, vUv + vec2(uTexel.x, 0.0)).x;
  float b = texture2D(uCurl, vUv - vec2(0.0, uTexel.y)).x;
  float t = texture2D(uCurl, vUv + vec2(0.0, uTexel.y)).x;
  float c = texture2D(uCurl, vUv).x;
  vec2 force = 0.5 * vec2(abs(t) - abs(b), abs(r) - abs(l));
  force = force / (length(force) + 1e-4) * uAmount * c;
  force.y *= -1.0;
  vec2 v = texture2D(uVelocity, vUv).xy + force * uDt;
  // Water has its limit: nothing races off the scale.
  gl_FragColor = vec4(clamp(v, -6.0, 6.0), 0.0, 1.0);
}`;

/** How much water is arriving at, or leaving, each point. */
export const DIVERGENCE_FRAG = /* glsl */ `
precision highp float;
uniform sampler2D uVelocity;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  vec2 c = texture2D(uVelocity, vUv).xy;
  float l = texture2D(uVelocity, vUv - vec2(uTexel.x, 0.0)).x;
  float r = texture2D(uVelocity, vUv + vec2(uTexel.x, 0.0)).x;
  float b = texture2D(uVelocity, vUv - vec2(0.0, uTexel.y)).y;
  float t = texture2D(uVelocity, vUv + vec2(0.0, uTexel.y)).y;
  // The edges are walls: what would flow through one is turned back.
  if (vUv.x - uTexel.x < 0.0) l = -c.x;
  if (vUv.x + uTexel.x > 1.0) r = -c.x;
  if (vUv.y - uTexel.y < 0.0) b = -c.y;
  if (vUv.y + uTexel.y > 1.0) t = -c.y;
  gl_FragColor = vec4(0.5 * (r - l + t - b), 0.0, 0.0, 1.0);
}`;

/** One step towards the pressure that would even that out. */
export const PRESSURE_FRAG = /* glsl */ `
precision highp float;
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  float l = texture2D(uPressure, vUv - vec2(uTexel.x, 0.0)).x;
  float r = texture2D(uPressure, vUv + vec2(uTexel.x, 0.0)).x;
  float b = texture2D(uPressure, vUv - vec2(0.0, uTexel.y)).x;
  float t = texture2D(uPressure, vUv + vec2(0.0, uTexel.y)).x;
  float d = texture2D(uDivergence, vUv).x;
  gl_FragColor = vec4((l + r + b + t - d) * 0.25, 0.0, 0.0, 1.0);
}`;

/** Takes the pressure's push out of the velocity: what is left neither piles up nor thins. */
export const GRADIENT_FRAG = /* glsl */ `
precision highp float;
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  float l = texture2D(uPressure, vUv - vec2(uTexel.x, 0.0)).x;
  float r = texture2D(uPressure, vUv + vec2(uTexel.x, 0.0)).x;
  float b = texture2D(uPressure, vUv - vec2(0.0, uTexel.y)).x;
  float t = texture2D(uPressure, vUv + vec2(0.0, uTexel.y)).x;
  vec2 v = texture2D(uVelocity, vUv).xy - 0.5 * vec2(r - l, t - b);
  gl_FragColor = vec4(v, 0.0, 1.0);
}`;

/** Scales a picture; how the pressure is carried, damped, from one frame to the next. */
export const SCALE_FRAG = /* glsl */ `
precision highp float;
uniform sampler2D uTex;
uniform float uBy;
varying vec2 vUv;
void main() { gl_FragColor = texture2D(uTex, vUv) * uBy; }`;

/**
 * The ink as marbling: flat colour in hard-edged bands.
 *
 * The ink is carried as two numbers, not a colour: how much of it there is,
 * and where on the palette it sits. So two inks meeting do not grey each
 * other out as mixed light does — they meet at a stop between them — and a
 * pool is cut into bands by how thick it is, each band one flat colour of
 * the palette, the way marbled paper or a slice of agate is.
 */
export const MARBLE_FRAG = /* glsl */ `
precision highp float;
uniform sampler2D uDye;
uniform sampler2D uPalA;
uniform sampler2D uPalB;
uniform float uPalMix;
uniform float uBands;
uniform float uT;
uniform vec3 uGround;
varying vec2 vUv;
vec3 palette(float c) {
  vec2 at = vec2(fract(c), 0.5);
  return mix(texture2D(uPalA, at).rgb, texture2D(uPalB, at).rgb, uPalMix);
}
void main() {
  vec3 dye = texture2D(uDye, vUv).rgb;
  float amount = dye.r;
  float tone = dye.g / max(amount, 1e-4);
  // Thicker ink sits further along the palette, a stop at a time.
  float b = (tone + uT) * 12.0 + log2(1.0 + amount * 6.0) * 2.2 * uBands;
  float w = fwidth(b) * 1.2;
  float stop = (floor(b) + smoothstep(1.0 - w, 1.0, fract(b)) + 0.45) / 12.0;
  vec3 col = palette(stop);
  // Where the ink ends, it ends: an edge, with a dark line along it.
  float e = fwidth(amount) * 1.5 + 1e-4;
  float inside = smoothstep(0.045 - e, 0.045 + e, amount);
  float line = inside * (1.0 - smoothstep(0.06, 0.06 + e * 2.0, amount));
  col = mix(col, palette(0.53) * 0.55, line);
  gl_FragColor = vec4(mix(uGround, col, inside), 1.0);
}`;

/** The ink as it is seen: light in the water, with the sheen of a surface. */
export const SHOW_FRAG = /* glsl */ `
precision highp float;
uniform sampler2D uDye;
uniform vec2 uTexel;
uniform float uTurn;
uniform float uSat;
uniform float uExposure;
varying vec2 vUv;
vec3 turnHue(vec3 c, float a) {
  const mat3 toYiq = mat3(0.299, 0.596, 0.211, 0.587, -0.274, -0.523, 0.114, -0.322, 0.312);
  const mat3 toRgb = mat3(1.0, 1.0, 1.0, 0.956, -0.272, -1.106, 0.621, -0.647, 1.703);
  vec3 yiq = toYiq * c;
  float ca = cos(a), sa = sin(a);
  yiq.yz = mat2(ca, sa, -sa, ca) * yiq.yz;
  return toRgb * yiq;
}
float weight(vec2 uv) { return dot(texture2D(uDye, uv).rgb, vec3(0.333)); }
void main() {
  vec3 ink = texture2D(uDye, vUv).rgb;
  // Where the ink is thick it stands a little proud; light it from one side.
  float dx = weight(vUv + vec2(uTexel.x, 0.0)) - weight(vUv - vec2(uTexel.x, 0.0));
  float dy = weight(vUv + vec2(0.0, uTexel.y)) - weight(vUv - vec2(0.0, uTexel.y));
  vec3 normal = normalize(vec3(-dx, -dy, 0.35));
  float sheen = pow(max(dot(normal, normalize(vec3(-0.4, 0.5, 0.75))), 0.0), 3.0);
  vec3 c = ink * uExposure * (0.75 + 0.5 * sheen);
  c = 1.0 - exp(-c);
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  c = mix(vec3(l), turnHue(c, uTurn), uSat);
  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}`;
