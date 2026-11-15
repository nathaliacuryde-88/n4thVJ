/**
 * The three arrivals' pictures. Each is worked out pixel by pixel on one
 * triangle that covers the frame; the fog also keeps a small picture of
 * where the hand has wiped (MASK_FRAG), written each frame from the last.
 *
 * All three cut their light into a few flat tones with clean edges (band),
 * so they read as graphic rather than as photographs of weather, and all can
 * be broken into grain.
 */

export const QUAD_VERT = /* glsl */ `
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const COMMON = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform vec2 uRes;
uniform float uTime, uHue, uBands, uCover, uPulse, uBass;
uniform vec2 uGrain;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + 17.1; a *= 0.5; }
  return v;
}
vec3 hueTurn(vec3 c, float degrees) {
  float a = radians(degrees);
  vec3 k = vec3(0.57735);
  return c * cos(a) + cross(k, c) * sin(a) + k * dot(k, c) * (1.0 - cos(a));
}
// The night's colours, dark to pale: navy, slate teal, sea-glass, almost white.
vec3 tone(float t) {
  vec3 c = mix(vec3(0.015, 0.02, 0.05), vec3(0.09, 0.2, 0.3), smoothstep(0.0, 0.4, t));
  c = mix(c, vec3(0.4, 0.62, 0.68), smoothstep(0.35, 0.75, t));
  c = mix(c, vec3(0.88, 0.95, 0.97), smoothstep(0.7, 1.0, t));
  return max(hueTurn(c, uHue), 0.0);
}
// A value cut into flat steps, each edge a clean line one pixel wide.
float band(float v, float n) {
  float b = v * n;
  float w = fwidth(b) * 1.2 + 1e-4;
  return (floor(b) + smoothstep(1.0 - w, 1.0, fract(b))) / n;
}
vec3 grain(vec3 col) {
  if (uGrain.x <= 0.001) return col;
  vec2 speck = floor(gl_FragCoord.xy / max(1.0, uRes.y / 620.0));
  float n = hash(speck + uGrain.y * 7.13);
  float lum = dot(col, vec3(0.3, 0.59, 0.11));
  col *= 1.0 + (n - 0.5) * 1.5 * uGrain.x;
  float dots = smoothstep(n - 0.1, n + 0.1, lum * 1.7 + 0.12);
  return mix(col, col * dots * 1.3, uGrain.x * 0.75);
}
`;

/** Falling through sheets of cloud: each a flat cut shape, the near ones rushing out past the edges. */
export const CLOUDS_FRAG = /* glsl */ `
${COMMON}
uniform float uFall;
uniform vec2 uCam;
uniform vec3 uHole;   // where the hand opens the cloud, in frame units from the middle, and how much
uniform float uRip;

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  // Below the clouds: the dark of the night, a little lighter at the middle where you are headed.
  vec3 col = tone(0.04 + 0.05 * exp(-dot(p, p) * 3.0));
  float passed = floor(uFall);
  float within = fract(uFall);
  for (int k = 5; k >= 0; k--) {
    float fk = float(k);
    float d = fk + 1.0 - within;            // how far below you this sheet is
    float id = passed + fk;                  // which sheet it is, so each has its own shape
    vec2 q = p * d * 0.9 + uCam + vec2(id * 13.17, id * 7.31);
    // Big rounded masses with smaller puffs on their edges, and open sky between.
    vec2 warp = vec2(fbm(q * 0.7 + id), fbm(q * 0.7 - id + 5.2)) - 0.5;
    float shape = fbm(q * 0.8 + warp * 0.9 + vec2(uTime * 0.02, 0.0)) * 0.8 + fbm(q * 2.6 - id) * 0.2;
    float v = clamp((shape - (0.71 - uCover * 0.3)) / 0.2, 0.0, 1.0);
    // The hand opens the nearest sheets around it; a tear opens all of them from the middle out.
    float r = 0.06 + 0.22 * uHole.z;
    v *= 1.0 - uHole.z * smoothstep(r, r * 0.45, length(p - uHole.xy)) * step(fk, 2.5);
    float tear = 1.3 * uRip;
    v *= mix(1.0, smoothstep(tear * 0.7, tear, length(p)), step(0.01, uRip));
    float level = band(v, uBands);
    float edge = fwidth(v) * 1.5 + 1e-3;
    float a = smoothstep(0.0, edge, v - 0.02);
    // Nearer is brighter and passes out of sight just before it reaches you.
    float near = 1.0 - smoothstep(0.3, 5.5, d);
    a *= smoothstep(0.08, 0.55, d);
    // Far sheets lie in the dark; the near ones catch the light.
    vec3 sheet = tone(0.2 + near * 0.55 + 0.3 * level) * (1.0 + 0.25 * uPulse + 0.2 * uBass);
    // A thin darker line along each step, as a print's registration.
    float b = v * uBands;
    sheet *= 1.0 - 0.35 * (1.0 - smoothstep(0.0, fwidth(b) * 2.0 + 1e-4, fract(b))) * step(0.04, v);
    col = mix(col, sheet, a * (0.35 + 0.62 * near));
  }
  gl_FragColor = vec4(grain(col), 1.0);
}`;

/** Fog: two drifting layers, cut into tones, gone wherever the hand has wiped. */
export const FOG_FRAG = /* glsl */ `
${COMMON}
uniform sampler2D uMask;
uniform float uDrift;

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float f = 0.65 * fbm(p * 0.75 + vec2(uDrift, uDrift * 0.2)) + 0.35 * fbm(p * 1.9 - vec2(uDrift * 1.8, -uDrift * 0.4));
  float density = clamp((f - 0.5) * 1.6 + 0.2 + uCover * 0.8 + 0.15 * uPulse + 0.1 * uBass, 0.0, 1.0);
  float wiped = texture2D(uMask, vUv).r;
  density *= 1.0 - wiped;
  float level = band(density, uBands);
  // Pale, so that layered in Screen it hides what is under it.
  vec3 col = tone(0.55 + 0.43 * level);
  // Where it is wiped it is black, so a layer under it shows through: a clean edge.
  col *= smoothstep(0.1, 0.16, density);
  gl_FragColor = vec4(grain(col), 1.0);
}`;

/** Where the hand has wiped: last frame's, closing again, with this frame's strokes on top. */
export const MASK_FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D uPrev;
uniform vec4 uFrom;     // each hand's last place, x y, x y (in frame heights)
uniform vec4 uTo;       // and where it is now
uniform vec2 uRadius;   // each hand's wipe; 0 is no wipe
uniform float uAspect, uReturn, uClear;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float stroke(vec2 p, vec2 a, vec2 b, float r) {
  if (r <= 0.0) return 0.0;
  vec2 ab = b - a;
  float t = clamp(dot(p - a, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
  float d = length(p - a - ab * t);
  return smoothstep(r, r * 0.85, d);
}
void main() {
  float m = max(0.0, texture2D(uPrev, vUv).r - uReturn);
  vec2 p = vec2(vUv.x * uAspect, 1.0 - vUv.y);
  m = max(m, stroke(p, uFrom.xy, uTo.xy, uRadius.x));
  m = max(m, stroke(p, uFrom.zw, uTo.zw, uRadius.y));
  m = max(m, uClear);
  gl_FragColor = vec4(m, m, m, 1.0);
}`;

/** The planet: from a point in the dark to a horizon, with its own aurora at the pole. */
export const PLANET_FRAG = /* glsl */ `
${COMMON}
uniform float uNear, uSpin, uRise;
uniform vec2 uTilt;

float hash3(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float noise3(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), f.x), mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), f.x), f.y),
    mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), f.x), mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), f.x), f.y),
    f.z);
}
float fbm3(vec3 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise3(p); p = p * 2.02 + 11.3; a *= 0.5; }
  return v;
}
mat3 turnY(float a) { float c = cos(a), s = sin(a); return mat3(c, 0, -s, 0, 1, 0, s, 0, c); }
mat3 turnX(float a) { float c = cos(a), s = sin(a); return mat3(1, 0, 0, 0, c, s, 0, -s, c); }

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float near = uNear * uNear;
  float R = mix(0.16, 2.8, near);
  // Close up, the planet sinks so its edge is a horizon across the upper part of the frame.
  vec2 c = vec2(0.0, -mix(0.0, R - 0.18, smoothstep(0.25, 1.0, uNear)));
  vec2 q = (p - c) / R;
  float r = length(q);
  // The sun is behind and to one side, so what is seen is mostly night with a bright edge.
  vec3 L = normalize(mix(vec3(0.85, 0.4, -0.45), vec3(0.3, 0.55, 0.78), uRise));

  // Behind: a few stars.
  vec2 cell = floor(gl_FragCoord.xy / 3.0);
  float star = step(0.9975, hash(cell)) * (0.6 + 0.4 * sin(uTime * 1.7 + hash(cell + 2.0) * 30.0));
  vec3 col = vec3(0.7, 0.78, 0.95) * star * step(1.02, r);

  float pix = 1.5 / (uRes.y * R);
  if (r < 1.0) {
    vec3 n = vec3(q.x, q.y, sqrt(1.0 - r * r));
    vec3 s = turnY(uSpin) * turnX(uTilt.y) * n;
    float land = fbm3(s * 2.2 + 3.0);
    float isLand = smoothstep(0.52, 0.53, land);
    float cloud = fbm3(s * 4.0 + vec3(uTime * 0.01, 0.0, 0.0));
    float hasCloud = smoothstep(0.62 - uCover * 0.3, 0.64 - uCover * 0.3, cloud);
    float lit = band(clamp(dot(n, L) * 0.9 + 0.1, 0.0, 1.0), uBands);
    vec3 sea = hueTurn(vec3(0.03, 0.16, 0.24), uHue);
    vec3 ground = hueTurn(vec3(0.16, 0.24, 0.17), uHue);
    vec3 surface = mix(sea, ground, isLand);
    surface = mix(surface, tone(0.85), hasCloud * 0.85);
    vec3 day = surface * (0.25 + 1.4 * lit);
    vec3 night = surface * 0.05 + tone(0.06) * 0.6;
    col = mix(night, day, smoothstep(0.0, 0.02, lit));
    // Its aurora: a ring of light round the pole on the night side, seen once you are close.
    float lat = asin(clamp(s.y, -1.0, 1.0));
    float ring = exp(-pow((lat - 1.17) / 0.05, 2.0)) * (0.6 + 0.4 * noise3(s * 14.0 + uTime * 0.2));
    col += hueTurn(vec3(0.25, 1.0, 0.6), uHue) * ring * smoothstep(0.35, 0.8, uNear) * (1.0 - smoothstep(0.0, 0.3, lit)) * (0.7 + 0.6 * uPulse);
    // The limb: atmosphere seen edge-on, lit where the sun is.
    float limb = smoothstep(0.82, 1.0, r);
    col += tone(0.7) * limb * 0.35 * (0.3 + 0.7 * max(0.0, dot(normalize(q), normalize(L.xy))));
    col *= smoothstep(1.0, 1.0 - pix, r);
  }
  // The atmosphere outside the edge: a thin bright line on the sun's side, fading round.
  float side = 0.25 + 0.75 * max(0.0, dot(normalize(q + 1e-5), normalize(L.xy)));
  float air = exp(-max(r - 1.0, 0.0) / (0.025 + 0.02 * uBass)) * step(1.0 - pix, r);
  col += tone(0.8) * air * side * (0.9 + 0.8 * uPulse);
  // The sun, coming up over the edge.
  col += vec3(1.0, 0.95, 0.85) * uRise * exp(-length(q - normalize(L.xy) * 1.0) * 6.0) * 1.5;
  col = 1.0 - exp(-col * 1.4);
  gl_FragColor = vec4(grain(col), 1.0);
}`;
