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
uniform float uMix;

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

  vec3 wet = 1.0 - (1.0 - src) * (1.0 - clamp(fb, 0.0, 1.0));
  fragColor = vec4(mix(src, wet, uMix), 1.0);
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
uniform float uMix;

void main() {
  float t = uTime * uSpeed;
  vec2 d = vec2(
    valueNoise(vUv * uScale + vec2(t, 0.0)),
    valueNoise(vUv * uScale + vec2(0.0, t) + 17.3)
  ) - 0.5;
  vec3 wet = texture(uTex, clamp(vUv + d * uAmount, 0.0, 1.0)).rgb;
  fragColor = vec4(mix(texture(uTex, vUv).rgb, wet, uMix), 1.0);
}`;

/**
 * RGB SPLIT — radial chromatic aberration.
 * Offset grows with distance from centre, the way a real lens misbehaves, so
 * the middle stays sharp and the edges fringe.
 */
export const RGB_SPLIT = `
uniform float uAmount;
uniform float uMix;

void main() {
  vec2 dir = (vUv - 0.5) * uAmount;
  vec3 wet = vec3(
    texture(uTex, clamp(vUv + dir, 0.0, 1.0)).r,
    texture(uTex, vUv).g,
    texture(uTex, clamp(vUv - dir, 0.0, 1.0)).b);
  fragColor = vec4(mix(texture(uTex, vUv).rgb, wet, uMix), 1.0);
}`;

/** KALEIDOSCOPE — fold the frame into mirrored wedges around the centre. */
export const KALEIDO = `
uniform float uSegments;
uniform float uSpin;
uniform float uMix;

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
  vec3 wet = texture(uTex, clamp(q + 0.5, 0.0, 1.0)).rgb;
  fragColor = vec4(mix(texture(uTex, vUv).rgb, wet, uMix), 1.0);
}`;

/**
 * QUANTIZE — pixelate and posterize.
 * The cheapest way to make something read as digital rather than drawn: throw
 * away spatial resolution, then throw away colour resolution.
 */
export const PIXELATE = `
uniform float uPixel;
uniform float uLevels;
uniform float uMix;

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
  fragColor = vec4(mix(texture(uTex, vUv).rgb, c, uMix), 1.0);
}`;

/** BLOOM 1/3 — keep only what is brighter than the threshold. */
export const BLEND = `
uniform sampler2D uNext;
uniform float uMix;

void main() {
  fragColor = vec4(mix(texture(uTex, vUv).rgb, texture(uNext, vUv).rgb, uMix), 1.0);
}`;

/** Straight copy, used to fill the feedback buffer and to present to screen. */
export const COPY = `
void main() {
  fragColor = vec4(texture(uTex, vUv).rgb, 1.0);
}`;


/**
 * COLOUR — hue rotation and saturation over the whole frame.
 *
 * Its own stage because the only hue control used to live inside FEEDBACK,
 * which does not run until feedback Amount is above zero — so moving Hue drift
 * on its own did nothing at all, with no way to tell why from looking. That one
 * still ages the trail as it should; this one turns the picture.
 */
export const COLOUR = `${COMMON}
uniform float uHue;
uniform float uSaturation;
uniform float uMix;

void main() {
  vec3 src = texture(uTex, vUv).rgb;
  vec3 wet = hueRotate(src, uHue);
  float grey = dot(wet, vec3(0.299, 0.587, 0.114));
  wet = mix(vec3(grey), wet, uSaturation);
  fragColor = vec4(mix(src, clamp(wet, 0.0, 1.0), uMix), 1.0);
}`;

/**
 * NOISE TILE — dithering, the way a bad screen does it.
 *
 * The frame is snapped to a grid and each cell is pushed to one of a few
 * levels, with an ordered threshold matrix deciding which way each cell goes.
 * That matrix is the whole trick: thresholding every cell at the same value
 * gives flat banding, while varying it in a repeating 4x4 pattern makes the
 * error alternate cell to cell, and the eye reads the mixture as a tone that
 * is not there. It is what gives old screens and newsprint their texture.
 *
 * A little animated noise rides on the threshold so the pattern crawls, which
 * is the difference between a still texture and something that feels alive.
 */
export const NOISE_TILE = `${COMMON}
uniform float uSize;
uniform float uGrain;
uniform float uDrift;
uniform float uMix;

/** Ordered 4x4 threshold matrix, normalised to 0..1. */
float bayer(vec2 cell) {
  vec2 c = mod(floor(cell), 4.0);
  int index = int(c.x) + int(c.y) * 4;
  float m[16] = float[16](
     0.0,  8.0,  2.0, 10.0,
    12.0,  4.0, 14.0,  6.0,
     3.0, 11.0,  1.0,  9.0,
    15.0,  7.0, 13.0,  5.0);
  return (m[index] + 0.5) / 16.0;
}

void main() {
  vec2 px = max(vec2(1.0), vec2(uSize));
  vec2 cell = floor(vUv * uResolution / px);
  // Sample the middle of the cell, so every pixel in it agrees.
  vec2 uv = (cell + 0.5) * px / uResolution;
  vec4 src = texture(uTex, uv);

  // The threshold, plus noise that moves if drift is up.
  float threshold = bayer(cell);
  float wander = valueNoise(cell * 0.7 + vec2(uTime * uDrift * 3.0, 0.0));
  threshold = mix(threshold, wander, clamp(uGrain, 0.0, 1.0));

  // Three levels per channel: enough to keep the picture, few enough that the
  // dither has to do the work of the missing tones.
  vec3 scaled = src.rgb * 3.0;
  vec3 low = floor(scaled);
  vec3 frac = scaled - low;
  vec3 stepped = (low + step(vec3(threshold), frac)) / 3.0;

  fragColor = vec4(mix(src.rgb, clamp(stepped, 0.0, 1.0), uMix), src.a);
}`;

/**
 * INWARD ECHO — copies of the frame falling towards the centre.
 *
 * Each echo is the same image scaled up around the middle and faded, so the
 * stack reads as a tunnel receding inwards. The scales are spaced on a
 * logarithm rather than evenly, and the whole ladder is driven by the
 * fractional part of time — which is what makes it loop seamlessly: by the
 * moment each echo has travelled one full step, the next has arrived exactly
 * where it started, so there is no seam to see.
 */
export const INWARD_ECHO = `
uniform float uCount;
uniform float uDepth;
uniform float uFade;
uniform float uSpeed;
uniform float uMix;

void main() {
  vec4 src = texture(uTex, vUv);
  vec3 sum = src.rgb;
  float weight = 1.0;

  // The ladder slides by one whole step per cycle, so what leaves the front
  // is replaced by what arrives at the back and the loop has no seam.
  float phase = fract(uTime * uSpeed);
  int count = int(clamp(uCount, 0.0, 6.0));

  for (int i = 1; i <= 6; i++) {
    if (i > count) break;
    float rung = float(i) - phase;
    float scale = pow(1.0 + uDepth, rung);
    vec2 uv = (vUv - 0.5) * scale + 0.5;
    // An echo that has left the frame contributes nothing; without this the
    // edge pixels smear outward and the tunnel gains a border.
    float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
    float fade = pow(uFade, rung) * inside;
    sum += texture(uTex, uv).rgb * fade;
    weight += fade;
  }

  vec3 echoed = sum / max(0.001, weight);
  fragColor = vec4(mix(src.rgb, echoed, uMix), src.a);
}`;

/**
 * FLUTED GLASS — the frame seen through ribbed architectural glass.
 *
 * Each rib is a little cylindrical lens. Across its width the surface normal
 * sweeps from one edge to the other, so what you see through it is displaced
 * by an amount that depends on where in the rib you are looking — which is
 * why fluted glass repeats and offsets a scene into bands rather than
 * blurring it. The displacement therefore follows a triangle wave across each
 * rib, not a sine of the screen position: the discontinuity at every rib edge
 * is the effect.
 *
 * The highlight and shadow along those edges are what make it read as a
 * physical sheet rather than a pattern: glass catches light where it turns.
 */
export const FLUTED_GLASS = `
uniform float uRibs;
uniform float uBend;
uniform float uShine;
uniform float uVertical;
uniform float uMix;

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;

  // Which rib we are in, and where across it, in -1..1.
  float along = uVertical >= 0.5 ? uv.x * aspect : uv.y;
  float ribs = max(1.0, uRibs);
  float cell = along * ribs;
  float across = fract(cell) * 2.0 - 1.0;

  // A cylinder's surface turns fastest at its edges, so the displacement is
  // strongest there and zero at the crown.
  float bend = across * uBend * 0.1;
  vec2 shifted = uVertical >= 0.5
    ? vec2(uv.x + bend / aspect, uv.y)
    : vec2(uv.x, uv.y + bend);

  vec4 refracted = texture(uTex, clamp(shifted, 0.001, 0.999));

  // Light catches the turn: bright just off the crown, dark in the valley.
  float curve = across * across;
  float highlight = pow(1.0 - curve, 6.0) * uShine;
  float shadow = pow(curve, 2.0) * uShine * 0.55;
  vec3 glass = refracted.rgb * (1.0 - shadow) + highlight * 0.35;

  fragColor = vec4(mix(texture(uTex, uv).rgb, glass, uMix), refracted.a);
}`;
