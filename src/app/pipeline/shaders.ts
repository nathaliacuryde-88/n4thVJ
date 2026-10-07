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

/**
 * ATLAS — text-mode terrain.
 *
 * The frame is cut into cells the shape of a monospace character. Each cell
 * samples the picture at its centre and becomes one flat ink: the picture's
 * hue, snapped to a few steps, at the brightness of its terrace. That is the
 * blocky, posterised terrain. On top goes a character in a low-contrast shade
 * of the same ink — darker on bright cells, lighter on dark ones — chosen from
 * the stretch of the set that belongs to its terrace, so each level of the
 * picture reads as a region of its own kind of type.
 *
 * Moving by the tool's rules:
 *   uClock  the layer's own clock, so the finger count sets how often each
 *           cell reshuffles its character — the "new variation" of the
 *           original, made continuous;
 *   uBurst  a clap: every cell reshuffles at once, and every cell carries one;
 *   uPulse  the music's onset: a ring of reshuffling leaves the middle on each
 *           kick and spreads as it fades;
 *   uLevel  how loud the music is: louder, more cells carry a character.
 *
 * With uSequence set the strip is a word, spelled along the rows in order.
 */
export const ATLAS = `${COMMON}
uniform sampler2D uAtlas;
uniform float uCount;
uniform float uColumns;
uniform float uTerraces;
uniform float uClock;
uniform float uBurst;
uniform float uPulse;
uniform float uLevel;
uniform float uSequence;
uniform float uMix;

vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}

vec3 hsv2rgb(vec3 c) {
  vec3 p = abs(fract(c.xxx + vec3(0.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0);
  return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y);
}

void main() {
  // Character-shaped cells: a monospace glyph is about 0.6 as wide as tall.
  float cw = uResolution.x / max(8.0, uColumns);
  vec2 cellPx = vec2(cw, cw / 0.6);
  vec2 frag = vUv * uResolution;
  vec2 cell = floor(frag / cellPx);
  vec2 centre = (cell + 0.5) * cellPx / uResolution;
  vec3 src = texture(uTex, clamp(centre, 0.0, 1.0)).rgb;
  vec3 here = texture(uTex, vUv).rgb;

  // The terrain: one flat ink per cell, stepped into terraces.
  vec3 hsv = rgb2hsv(src);
  float t = max(2.0, floor(uTerraces + 0.5));
  float terrace = floor(clamp(hsv.z, 0.0, 0.999) * t);
  float height = terrace / (t - 1.0);
  vec3 inkHsv = vec3(floor(hsv.x * 12.0 + 0.5) / 12.0, floor(hsv.y * 3.0 + 0.5) / 3.0, height);
  vec3 ink = hsv2rgb(inkHsv);

  // A ring that leaves the middle on each kick and spreads as the onset fades.
  vec2 d = (centre - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
  float radius = (1.0 - uPulse) * 1.1;
  float wave = uPulse * exp(-pow((length(d) - radius) * 9.0, 2.0));

  // Each cell reshuffles on its own beat, so the grid churns rather than
  // flashing all at once — unless a clap or a kick makes it.
  float rate = 0.35 + 1.4 * hash(cell);
  float churn = clamp(uBurst + wave, 0.0, 1.0);
  float tick = floor(uClock * rate + hash(cell + 7.13) * 11.0)
             + floor(uClock * 24.0) * step(hash(cell + 3.7), churn);
  float roll = hash(cell + vec2(tick * 0.618, tick * 0.317));

  // How many cells carry a character: most of them, more as the music lifts.
  float density = clamp(0.55 + uLevel * 0.4 + uBurst, 0.0, 1.0);
  float carries = step(hash(cell * 1.31 + tick * 0.73), density);

  float n = max(1.0, uCount);
  float idx;
  if (uSequence > 0.5) {
    float cols = floor(uResolution.x / cellPx.x) + 1.0;
    idx = mod(cell.x + cell.y * cols, n);
  } else {
    // Each terrace has its own stretch of the set, half of it wide, so a
    // level of the picture reads as a region of one kind of character.
    float span = max(1.0, floor(n * 0.5));
    float start = floor(height * (n - span));
    idx = clamp(start + floor(roll * span), 0.0, n - 1.0);
    // The empty character only ever belongs to the darkest ground.
    if (idx < 0.5 && terrace > 0.5) idx = 1.0;
  }

  vec2 f = fract(frag / cellPx);
  float glyph = texture(uAtlas, vec2((idx + f.x) / n, f.y)).r * carries;

  // Low contrast, as in the original: the character is the cell's own ink,
  // pushed towards black on a bright cell and towards white on a dark one.
  float lum = dot(ink, vec3(0.299, 0.587, 0.114));
  vec3 type = lum > 0.42 ? ink * 0.38 : mix(ink, vec3(1.0), 0.32);
  vec3 col = mix(ink, type, glyph);

  fragColor = vec4(mix(here, col, uMix), 1.0);
}`;

/**
 * The frame memory both time stages read: the last frames, newest at uHead,
 * as layers of one texture array. `back` frames ago is layer (uHead - back),
 * wrapping round; never further back than has been written yet.
 */
const HISTORY = `
precision highp sampler2DArray;
uniform sampler2DArray uHist;
uniform float uHead;
uniform float uDepth;
uniform float uWritten;
float layerAt(float back) {
  back = clamp(back, 0.0, max(0.0, min(uDepth, uWritten) - 1.0));
  return mod(uHead - back + uDepth * 4.0, uDepth);
}
vec3 past(vec2 uv, float back) {
  float b0 = floor(back);
  vec3 a = texture(uHist, vec3(uv, layerAt(b0))).rgb;
  vec3 b = texture(uHist, vec3(uv, layerAt(b0 + 1.0))).rgb;
  return mix(a, b, back - b0);
}
`;

/**
 * REPEAT — the frame tiled into a grid, each tile a moment further back.
 *
 * The TouchDesigner Cache-into-Tile patch: with no delay it is a plain grid
 * of the same picture; with delay, a gesture walks across the tiles in the
 * chosen order — reading order, down the columns, out from the centre in
 * rings, or scattered — so the first tile and the last are in different
 * moments. Mirroring alternate tiles makes the seams fold into a pattern.
 */
export const REPEAT = `${COMMON}${HISTORY}
uniform float uGrid;
uniform float uStep;
uniform float uOrder;
uniform float uMirror;
uniform float uMix;

void main() {
  vec4 src = texture(uTex, vUv);
  float n = max(1.0, floor(uGrid + 0.5));
  vec2 g = vUv * n;
  vec2 cell = floor(g);
  vec2 f = fract(g);
  float row = n - 1.0 - cell.y;            // the top row first
  float k;
  if (uOrder < 0.5) k = row * n + cell.x;            // reading order
  else if (uOrder < 1.5) k = cell.x * n + row;       // down the columns
  else if (uOrder < 2.5) {                           // out from the centre, in rings
    vec2 c = abs(cell - (n - 1.0) * 0.5);
    k = floor(max(c.x, c.y) + 0.5);
  } else k = floor(hash(cell + 3.1) * n * n);        // scattered
  if (uMirror > 0.5) {
    if (mod(cell.x, 2.0) > 0.5) f.x = 1.0 - f.x;
    if (mod(cell.y, 2.0) > 0.5) f.y = 1.0 - f.y;
  }
  vec3 c = past(f, k * uStep);
  fragColor = vec4(mix(src.rgb, c, uMix), src.a);
}`;

/**
 * TIME — slit-scan: each part of the frame from a different moment.
 *
 * Time is laid across the picture as a gradient — down it, across it, out
 * from the middle, or in drifting patches — and each pixel shows the frame
 * from that far back, blended between neighbouring frames so it flows rather
 * than steps. Anything moving smears and stretches like something liquid.
 */
export const TIME = `${COMMON}${HISTORY}
uniform float uAmount;
uniform float uDirection;
uniform float uMix;

void main() {
  vec4 src = texture(uTex, vUv);
  float t;
  if (uDirection < 0.5) t = 1.0 - vUv.y;                       // top now, bottom past
  else if (uDirection < 1.5) t = vUv.x;                        // left now, right past
  else if (uDirection < 2.5) t = clamp(length(vUv - 0.5) * 1.414, 0.0, 1.0);  // centre now, edges past
  else t = valueNoise(vUv * 3.0 + vec2(uTime * 0.07, -uTime * 0.05));        // drifting patches
  vec3 c = past(vUv, t * uAmount * (uDepth - 1.0));
  fragColor = vec4(mix(src.rgb, c, uMix), src.a);
}`;
