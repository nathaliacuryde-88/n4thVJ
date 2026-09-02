/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE POST CHAIN
 * ═══════════════════════════════════════════════════════════════════════════
 * Fragment bodies for each stage. FRAGMENT_HEADER (see gl.ts) already declares
 * vUv, fragColor, uTex, uResolution and uTime.
 *
 * The renderers draw shapes; these operate on the finished frame as pixels,
 * which is the difference between a canvas animation and something that reads
 * as a signal chain.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** Value noise + a hue rotation, shared by several passes. */
const COMMON = `
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y);
}

vec3 hueRotate(vec3 c, float angle) {
  const vec3 k = vec3(0.57735);
  float cosA = cos(angle);
  return c * cosA + cross(k, c) * sin(angle) + k * dot(k, c) * (1.0 - cosA);
}
`;

/**
 * FEEDBACK — the centrepiece.
 *
 * Last frame's *output* is sampled through a transform and screened under the
 * new frame. Zoom above 1 pulls the history inward, so motion trails run out
 * towards the edges: the tunnel. Rotation spirals it, the offset drifts it, and
 * a per-generation hue shift is what makes the trail change colour as it ages.
 *
 * Screen blending rather than adding, so the centre never clips to white
 * however long the decay is.
 */
export const FEEDBACK = `${COMMON}
uniform sampler2D uFeedback;
uniform float uAmount;
uniform float uZoom;
uniform float uRotate;
uniform vec2  uOffset;
uniform float uHueShift;

void main() {
  vec3 src = texture(uTex, vUv).rgb;

  vec2 c = vUv - 0.5;
  c.x *= uResolution.x / uResolution.y;          // rotate in square space
  float s = sin(uRotate), co = cos(uRotate);
  c = mat2(co, -s, s, co) * c;
  c /= max(uZoom, 0.0001);
  c.x /= uResolution.x / uResolution.y;
  vec2 fuv = c + 0.5 + uOffset;

  vec3 fb = texture(uFeedback, clamp(fuv, 0.0, 1.0)).rgb * uAmount;
  fb = hueRotate(fb, uHueShift);

  fragColor = vec4(1.0 - (1.0 - src) * (1.0 - clamp(fb, 0.0, 1.0)), 1.0);
}`;

/**
 * DISPLACE — TouchDesigner's Displace TOP.
 * Pushes each pixel along a slowly drifting noise field. Small amounts read as
 * heat haze or wet glass; large amounts dissolve the image into the field.
 */
export const DISPLACE = `${COMMON}
uniform float uAmount;
uniform float uScale;
uniform float uSpeed;

void main() {
  float t = uTime * uSpeed;
  vec2 d = vec2(
    valueNoise(vUv * uScale + vec2(t, 0.0)),
    valueNoise(vUv * uScale + vec2(0.0, t) + 17.3)
  ) - 0.5;
  fragColor = texture(uTex, clamp(vUv + d * uAmount, 0.0, 1.0));
}`;

/**
 * RGB SPLIT — radial chromatic aberration.
 * Offset grows with distance from centre, the way a real lens misbehaves, so
 * the middle stays sharp and the edges fringe.
 */
export const RGB_SPLIT = `
uniform float uAmount;

void main() {
  vec2 dir = (vUv - 0.5) * uAmount;
  fragColor = vec4(
    texture(uTex, clamp(vUv + dir, 0.0, 1.0)).r,
    texture(uTex, vUv).g,
    texture(uTex, clamp(vUv - dir, 0.0, 1.0)).b,
    1.0);
}`;

/** KALEIDOSCOPE — fold the frame into mirrored wedges around the centre. */
export const KALEIDO = `
uniform float uSegments;
uniform float uSpin;

void main() {
  vec2 p = vUv - 0.5;
  p.x *= uResolution.x / uResolution.y;

  float a = atan(p.y, p.x) + uSpin;
  float r = length(p);

  float seg = 6.2831853 / uSegments;
  a = mod(a, seg);
  a = abs(a - seg * 0.5);                        // mirror each wedge

  vec2 q = vec2(cos(a), sin(a)) * r;
  q.x /= uResolution.x / uResolution.y;
  fragColor = texture(uTex, clamp(q + 0.5, 0.0, 1.0));
}`;

/**
 * QUANTIZE — pixelate and posterize.
 * The cheapest way to make something read as digital rather than drawn: throw
 * away spatial resolution, then throw away colour resolution.
 */
export const QUANTIZE = `
uniform float uPixel;
uniform float uLevels;

void main() {
  vec2 uv = vUv;
  if (uPixel > 1.0) {
    vec2 grid = uResolution / uPixel;
    uv = (floor(vUv * grid) + 0.5) / grid;
  }
  vec3 c = texture(uTex, uv).rgb;
  if (uLevels >= 2.0) {
    c = floor(c * uLevels + 0.5) / uLevels;
  }
  fragColor = vec4(c, 1.0);
}`;

/** BLOOM 1/3 — keep only what is brighter than the threshold. */
export const BLOOM_BRIGHT = `
uniform float uThreshold;

void main() {
  vec3 c = texture(uTex, vUv).rgb;
  float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float keep = smoothstep(uThreshold, uThreshold + 0.25, luma);
  fragColor = vec4(c * keep, 1.0);
}`;

/** BLOOM 2/3 — 9-tap gaussian along uDirection, run once per axis. */
export const BLOOM_BLUR = `
uniform vec2 uDirection;

void main() {
  vec2 texel = uDirection / uResolution;
  vec3 sum = texture(uTex, vUv).rgb * 0.2270270270;
  sum += texture(uTex, clamp(vUv + texel * 1.3846153846, 0.0, 1.0)).rgb * 0.3162162162;
  sum += texture(uTex, clamp(vUv - texel * 1.3846153846, 0.0, 1.0)).rgb * 0.3162162162;
  sum += texture(uTex, clamp(vUv + texel * 3.2307692308, 0.0, 1.0)).rgb * 0.0702702703;
  sum += texture(uTex, clamp(vUv - texel * 3.2307692308, 0.0, 1.0)).rgb * 0.0702702703;
  fragColor = vec4(sum, 1.0);
}`;

/** BLOOM 3/3 — add the blurred highlights back over the original. */
export const BLOOM_COMPOSITE = `
uniform sampler2D uBloom;
uniform float uAmount;

void main() {
  vec3 base = texture(uTex, vUv).rgb;
  vec3 glow = texture(uBloom, vUv).rgb * uAmount;
  fragColor = vec4(base + glow, 1.0);
}`;

/** Straight copy, used to fill the feedback buffer and to present to screen. */
export const COPY = `
void main() {
  fragColor = vec4(texture(uTex, vUv).rgb, 1.0);
}`;
