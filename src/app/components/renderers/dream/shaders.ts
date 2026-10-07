/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DREAMSCAPE — THE SHADERS
 * ═══════════════════════════════════════════════════════════════════════════
 * Four airbrushed scenes, each one full-frame fragment shader over a shared
 * look (COMMON):
 *
 *   grain     one value per grain of the screen, re-seeded a dozen times a
 *             second, so the picture has the living tooth of spray paint
 *   spray()   a gradient laid down as airbrush: the blend between two colours
 *             is jittered per grain, so a soft edge is a speckled one — the
 *             whole look of the references rests on this
 *   sparkles  four-pointed stars that twinkle
 *   figure    a picture she drops in, cut out and repainted in the scene's
 *             own colours, its edge dissolving into spray
 *
 * Every scene is drawn back to front, painter's style, in frame units: the
 * frame is one unit tall, the origin in its middle, y up.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const VERT = /* glsl */ `
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

export const COMMON = /* glsl */ `
precision highp float;
uniform vec2 uRes;
uniform float uTime, uReal, uSeed, uGrain, uSparkle, uTwinkle, uFlash, uPulse, uBass, uHue, uSat;
uniform vec3 uHand;            // x, y in frame units, and how present
uniform sampler2D uFig;        // r: its light, g: the cut-out, b: the cut-out's glow
uniform vec4 uFigRect;         // centre, and half size, in frame units
uniform vec4 uFigCrop;         // the part of the picture shown, in texture space
uniform vec4 uFigLum;          // its range of light: of the cut-out (xy), of the whole (zw)
uniform float uFigOn, uFigDissolve, uFigCut;
uniform vec3 uFigA, uFigB, uFigC, uFigD;   // its colours, shadow to light

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
             mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + 17.1; a *= 0.5; }
  return v;
}
float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}
float smax(float a, float b, float k) { return -smin(-a, -b, k); }
float segment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

/* The grain: one value per grain of the screen — about the size it is in the
   references at any resolution — re-seeded a dozen times a second. */
float grain(float salt) {
  float cell = max(1.0, floor(uRes.y / 760.0 + 0.5));
  vec2 g = floor(gl_FragCoord.xy / cell);
  return hash12(g * 1.37 + vec2(salt * 41.3 + uSeed * 7.13, uSeed * 3.71 - salt * 9.1));
}

/* The airbrush. A blend jittered per grain, most where it is changing most:
   flat colour stays clean, a soft edge turns to speckle. */
float sprayT(float t, float salt) {
  t = clamp(t, 0.0, 1.0);
  float spread = uGrain * (0.28 + 2.6 * t * (1.0 - t));
  return clamp(t + (grain(salt) - 0.5) * spread, 0.0, 1.0);
}
vec3 spray(vec3 a, vec3 b, float t) { return mix(a, b, sprayT(t, 0.0)); }

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

/* A four-pointed star: two crossed rays and a soft core. */
float star(vec2 d, float size) {
  d /= size;
  vec2 a = abs(d);
  float rays = exp(-a.x * 14.0 - a.y * 1.7) + exp(-a.y * 14.0 - a.x * 1.7);
  return rays * 0.85 + exp(-dot(d, d) * 12.0);
}
float sparkles(vec2 p, float density, float amount) {
  if (amount <= 0.0) return 0.0;
  vec2 cell = floor(p * density);
  float acc = 0.0;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 c = cell + vec2(float(i), float(j));
      if (hash12(c + 3.7) > amount) continue;
      vec2 at = (c + 0.15 + 0.7 * hash22(c)) / density;
      float size = mix(0.004, 0.02, pow(hash12(c + 9.1), 4.0)) * (1.0 + uFlash * 0.9);
      float rate = (1.2 + 2.5 * hash12(c + 1.1)) * (1.0 + uTwinkle * 1.5);
      float tw = 0.3 + 0.7 * (0.5 + 0.5 * sin(uReal * rate + hash12(c + 5.3) * 6.2832));
      acc += star(p - at, size) * tw;
    }
  }
  return acc;
}

/* Her picture, cut out and repainted in the scene's colours; the edge
   dissolves into spray, and a clap blows it apart for a moment. */
void drawFigure(vec2 p, inout vec3 col) {
  if (uFigOn < 0.5) return;
  vec2 q = (p - uFigRect.xy) / uFigRect.zw;
  if (abs(q.x) > 1.0 || abs(q.y) > 1.0) return;
  vec4 t = texture2D(uFig, mix(uFigCrop.xy, uFigCrop.zw, q * 0.5 + 0.5));
  bool cut = uFigCut > 0.5;
  // Cut out, or the whole picture with its edges dissolving.
  vec2 q4 = q * q * q * q;
  float m = cut ? t.g : smoothstep(1.0, 0.72, pow(q4.x + q4.y, 0.25));
  vec2 range = cut ? uFigLum.xy : uFigLum.zw;
  float light = clamp((t.r - range.x) / max(0.05, range.y - range.x), 0.0, 1.0);
  if (cut) col = mix(col, uFigD, t.b * 0.22 * (1.0 + uBass));
  float edge = m + (grain(5.0) - 0.5) * (0.3 + uFigDissolve * 1.8);
  float a = smoothstep(0.42, 0.58, edge);
  a *= 1.0 - uFigDissolve * 0.6 * step(0.45, grain(6.0));
  float s = sprayT(light, 6.0);
  vec3 c = s < 0.333 ? mix(uFigA, uFigB, s * 3.0)
         : s < 0.667 ? mix(uFigB, uFigC, s * 3.0 - 1.0)
         : mix(uFigC, uFigD, s * 3.0 - 2.0);
  col = mix(col, c, a);
}

/* What every scene ends with: its sparkles, a last breath of grain, and the
   colour panel's turn. */
vec4 finish(vec3 col, float sparkle) {
  col = mix(col, vec3(1.0), clamp(sparkle, 0.0, 1.0));
  col += (grain(7.0) - 0.5) * 0.09 * uGrain;
  return vec4(tone(col), 1.0);
}

vec2 frame() { return (gl_FragCoord.xy - 0.5 * uRes) / uRes.y; }
`;

// ── CLOUDS ──────────────────────────────────────────────────────────────────
/*
 * Cumulus on a blue sky, airbrushed: each puff a disc with a thin bright rim,
 * a band of blue just inside it and cream toward its heart; puffs drawn back
 * to front so every one keeps its outline inside the cloud. Flat bases, and
 * under them flat lozenges of cloud — the streamers — lit cream at their fat
 * end with a bright line along the top. Three depths drift past at their own
 * speeds; a soft teal moon lights them from wherever the hand is.
 */
export const CLOUDS = /* glsl */ `
${COMMON}
uniform float uDrift, uAmount, uCloudSize, uGlow;
uniform vec2 uSun, uPan;

const vec3 SKY = vec3(0.137, 0.471, 0.761);
const vec3 SKY_HI = vec3(0.32, 0.60, 0.85);
const vec3 SKY_LO = vec3(0.10, 0.37, 0.67);
const vec3 SHADE = vec3(0.12, 0.35, 0.61);
const vec3 PUFF = vec3(0.365, 0.651, 0.855);
const vec3 CREAM = vec3(0.98, 0.965, 0.86);
const vec3 STREAM = vec3(0.22, 0.525, 0.77);
const vec3 RIM = vec3(0.97, 0.99, 1.0);
const vec3 MOON = vec3(0.55, 0.82, 0.78);

vec2 gSun;   // the moon, in the drifting space of the layer being drawn
vec3 gFar;   // what far clouds sink toward: the sky here, airy and pale

vec3 bumpOf(int i, float seed) {
  // A crown, then shoulders, then low puffs in front: drawn in this order,
  // overlapping well, so each later puff lays its outline over the earlier.
  vec3 b;
  if (i == 0) b = vec3(0.02, 0.13, 0.18);
  else if (i == 1) b = vec3(-0.16, 0.08, 0.14);
  else if (i == 2) b = vec3(0.19, 0.075, 0.145);
  else if (i == 3) b = vec3(-0.30, 0.035, 0.10);
  else if (i == 4) b = vec3(0.33, 0.03, 0.105);
  else b = vec3(0.05, 0.0, 0.12);
  vec2 h = hash22(vec2(seed, float(i) * 7.3 + 1.0));
  b.x += (h.x - 0.5) * 0.08;
  b.y += (h.y - 0.5) * 0.05;
  b.z *= (0.82 + hash12(vec2(float(i) * 3.1 + 0.5, seed)) * 0.36) * (1.0 + uPulse * 0.06);
  return b;
}

void drawCloud(vec2 p, vec2 centre, float s, float seed, float haze, inout vec3 col) {
  vec2 q = (p - centre) / s;
  if (q.x < -0.8 || q.x > 0.8 || q.y < -0.22 || q.y > 0.5) return;
  float px = 1.2 / (uRes.y * s);
  float flip = hash12(vec2(seed, 1.7)) < 0.5 ? -1.0 : 1.0;
  q.x *= flip;
  vec2 sun = (gSun - centre) / s;
  sun.x *= flip;
  int count = 4 + int(hash12(vec2(seed, 2.9)) * 2.99);

  // Its shadow on what is behind, and a soft halo of light round it.
  float body = 1e3, low = 1e3;
  for (int i = 0; i < 6; i++) {
    if (i >= count) break;
    vec3 b = bumpOf(i, seed);
    body = min(body, length(q - b.xy) - b.z);
    low = min(low, length(q - b.xy - vec2(0.03, -0.08)) - b.z * 0.9);
  }
  body = max(body, -q.y);
  col = mix(col, SHADE, (1.0 - smoothstep(-0.05, 0.07, low)) * 0.35 * (1.0 - haze));
  col = mix(col, mix(col, RIM, 0.5), exp(-max(body, 0.0) / 0.03) * 0.2 * uGlow * (1.0 - haze * 0.6));

  // Streamers: one or two drawn-out drops just under the base, reaching out
  // past one side, lit cream at their round head, a bright line along the top.
  int ns = 1 + int(hash12(vec2(seed, 4.4)) * 1.99);
  for (int k = 0; k < 2; k++) {
    if (k >= ns) break;
    float fk = float(k);
    vec2 h = hash22(vec2(seed * 1.3, fk * 5.1 + 2.0));
    float y = -0.022 - fk * 0.05 - h.y * 0.01;
    float dir = (mod(fk + floor(h.x * 2.0), 2.0) < 1.0) ? 1.0 : -1.0;
    float a = 0.17 + hash12(vec2(fk + 0.3, seed * 0.7)) * 0.12;   // half length
    float xc = dir * (0.22 + h.x * 0.18);
    float r = 0.022 + h.y * 0.012;
    // A drawn-out drop: a thin tail swelling to a round head.
    vec2 tail = vec2(xc - dir * a, y), head = vec2(xc + dir * a * 0.8, y + r * 0.2);
    vec2 pa = q - tail, ba = head - tail;
    float hh = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    float d = length(pa - ba * hh) - mix(r * 0.4, r, pow(hh, 1.4));
    float cover = smoothstep(px, -px, d);
    if (cover <= 0.0) continue;
    float along = hh;
    float up = clamp((q.y - y + r) / (r * 2.0), 0.0, 1.0);
    vec3 c = spray(STREAM, CREAM, smoothstep(0.45, 1.0, along) * smoothstep(0.1, 0.8, up));
    float rim = smoothstep(-px * 3.0, 0.0, d) * step(y, q.y);
    c = mix(c, RIM, rim * (0.85 + uFlash * 0.3));
    col = mix(col, mix(c, gFar, haze), cover);
  }

  // The body: puffs back to front. Each is cream, with a thin bright rim on
  // its upper edge and a band of blue just inside the edge, widest on the
  // side away from the light — and the light inside the cloud, low in its
  // middle, washes even those bands toward cream.
  // Airbrushed unevenly, as by hand: one wash of noise for the whole cloud.
  float rough = body < 0.01 ? fbm(q * 7.0 + seed) - 0.5 : 0.0;
  for (int i = 0; i < 6; i++) {
    if (i >= count) break;
    vec3 b = bumpOf(i, seed);
    vec2 d2 = q - b.xy;
    float dist = length(d2) - b.z;
    float base = 0.006 * sin(q.x * 9.0 + seed);
    float cover = smoothstep(px, -px, dist) * smoothstep(base - px, base + px * 2.5, q.y);
    if (cover <= 0.0) continue;
    vec2 n = d2 / b.z;
    float e = -dist / b.z;
    vec2 L = normalize(sun - b.xy + vec2(1e-4));
    float facing = 0.5 + 0.5 * dot(n, L);
    float core = exp(-(q.x * q.x * 4.0 + (q.y - 0.07) * (q.y - 0.07) * 22.0));
    float band = max(0.03, mix(0.85, -0.1, facing));
    float t = smoothstep(0.0, band, e);
    t = clamp(t + core * 0.45 * (1.0 - t) + smoothstep(0.05, 0.0, q.y) * 0.35, 0.0, 1.0);
    t = clamp(t + rough * 0.35, 0.0, 1.0);
    vec3 c = spray(PUFF, CREAM, t);
    float rim = (1.0 - smoothstep(0.0, 0.028, e)) * smoothstep(-0.25, 0.55, 0.65 * n.y + 0.35 * dot(n, L));
    c = mix(c, RIM, rim * (0.9 + uFlash * 0.4));
    col = mix(col, mix(c, gFar, haze), cover);
  }
}

void main() {
  vec2 p = frame();
  vec3 col = mix(SKY, SKY_HI, smoothstep(0.0, 0.7, p.y) * 0.45);
  float n = fbm(p * 1.4 + vec2(uDrift * 0.15, 0.0));
  col = mix(col, SKY_HI, smoothstep(0.5, 0.85, n) * 0.4);
  col = mix(col, SKY_LO, smoothstep(0.45, 0.15, n) * 0.4);
  // The moon: a soft teal light the clouds are lit from.
  float m = length(p - uSun);
  col = mix(col, MOON, exp(-m * 4.5) * 0.65 * uGlow * (1.0 + uBass * 0.4));
  col = mix(col, vec3(0.9, 1.0, 0.96), exp(-m * 16.0) * 0.5 * uGlow);
  gFar = mix(col, PUFF, 0.55);

  for (int l = 0; l < 3; l++) {
    float fl = float(l);
    float s = uCloudSize * (0.5 + 0.3 * fl);
    float haze = (2.0 - fl) * 0.2;
    vec2 cellSize = vec2(1.05, 0.5) * s;
    vec2 shift = vec2(uDrift * (0.35 + 0.3 * fl), 0.0) + uPan * (0.25 + 0.3 * fl);
    vec2 pp = p + shift;
    gSun = uSun + shift;
    // Rows staggered, so the clouds do not stand in a grid; upper rows first,
    // so the lower clouds come in front of them.
    float row = floor(pp.y / cellSize.y);
    for (int j = 1; j >= -2; j--) {
      float cy = row + float(j);
      float stagger = hash12(vec2(cy, fl + 0.5)) * cellSize.x;
      float cx = floor((pp.x - stagger) / cellSize.x);
      for (int i = -1; i <= 1; i++) {
        vec2 c = vec2(cx + float(i), cy);
        float pick = hash12(c * 0.731 + fl * 37.1);
        if (pick > uAmount) continue;
        vec2 off = hash22(c * 1.71 + fl * 11.3);
        vec2 centre = (c + 0.5 + (off - 0.5) * vec2(0.6, 0.5)) * cellSize + vec2(stagger, 0.0);
        float size = s * (0.8 + hash12(c + 2.2) * 0.45);
        drawCloud(pp, centre, size, pick * 97.0 + fl * 13.0, haze, col);
      }
    }
    // Her picture floats among the clouds, in front of the far ones.
    if (l == 1) drawFigure(p, col);
  }

  float sp = sparkles(p, 5.0, uSparkle * 0.22) + sparkles(p, 13.0, 0.45) * exp(-m * 5.0) * uSparkle;
  gl_FragColor = finish(col, sp);
}`;

// ── HILLS ───────────────────────────────────────────────────────────────────
/*
 * Rolling hills seen from above, flown over: rows of rounded lobes, lime and
 * green or deep blue, each lit along its top and sinking into white mist
 * where it meets the row in front. A pale path winds up through the valleys,
 * each row parted round it. Rows come in from the haze at the top and pass
 * out of the bottom.
 */
export const HILLS = /* glsl */ `
${COMMON}
uniform float uFly, uSteer, uMist, uWave, uWaveAmp, uPathOn;

const vec3 LIME_HI = vec3(0.90, 0.95, 0.56);
const vec3 LIME = vec3(0.80, 0.88, 0.44);
const vec3 GREEN = vec3(0.19, 0.64, 0.30);
const vec3 DEEPG = vec3(0.02, 0.55, 0.32);
const vec3 BLUE_T = vec3(0.24, 0.52, 0.86);
const vec3 BLUE = vec3(0.03, 0.33, 0.74);
const vec3 DEEPB = vec3(0.04, 0.24, 0.62);
const vec3 MIST = vec3(0.85, 0.91, 0.97);
const vec3 PATH = vec3(0.70, 0.82, 0.96);

float pathX(float w) { return 0.22 * sin(w * 0.7 + 1.3) + 0.08 * sin(w * 1.6 + 0.4); }

/* A hill: a rounded mound rising from its row's foot — no walls, no
   terraces — falling away deep and round toward the path. */
float moundTop(float x, float id, float fm, float foot, float sc, float px, out float u, out float tint) {
  vec2 hh = hash22(vec2(id * 1.91 + 0.3, fm * 3.7 + 0.5));
  float cx = (-1.5 + fm * 0.43 + (hh.x - 0.5) * 0.32) * sc;
  float w = (0.2 + hh.y * 0.2) * sc;
  float tall = (0.2 + hash12(vec2(id * 1.3, fm + 0.7)) * 0.13) * sc * (1.0 + uPulse * 0.15);
  tint = hash12(vec2(id * 2.3, fm + 0.1));
  u = (x - cx) / w;
  if (u * u >= 1.0) return foot - 1.0;
  float top = foot + tall * pow(1.0 - u * u, 0.6);
  return top - 0.4 * sc * exp(-pow((x - px) / (0.11 * sc), 2.0)) * uPathOn;
}

void main() {
  vec2 p = frame();
  float fr = fract(uFly), fl = floor(uFly);
  // Under every row: the valley floor, misty, the path winding along it.
  vec3 col = MIST;
  bool hit = false;
  float prev = -10.0;
  for (int i = 0; i < 13; i++) {
    float k = float(i) - fr;
    float id = float(i) + fl;
    float sc = 1.0 / (1.0 + max(k, 0.0) * 0.09);
    float base = -0.66 + k * 0.15 - k * k * 0.003;
    base += uWaveAmp * 0.06 * exp(-pow(k - uWave, 2.0) * 0.6);
    float x = p.x + uSteer * sc;
    float px = pathX(id) * sc;
    // A row stands from its foot up; its hills overlap, each drawn over the last.
    float foot = base - 0.17 * sc;
    float rowTop = foot - 1.0;
    vec3 c = vec3(0.0);
    bool covered = false;
    for (int m = 0; m < 8; m++) {
      float u, tint;
      float top = moundTop(x, id, float(m), foot, sc, px, u, tint);
      rowTop = max(rowTop, top);
      if (p.y >= top || p.y <= foot) continue;
      covered = true;
      float d = (top - p.y) / sc;
      // Lit from the upper left: each hill's left flank in the light.
      float lit = smoothstep(0.5, -0.7, u);
      if (tint < 0.4) {
        c = spray(BLUE_T, BLUE, smoothstep(0.0, 0.05, d));
        c = spray(c, DEEPB, smoothstep(0.05, 0.16, d) * (1.0 - lit) * 0.7);
        c = mix(c, BLUE_T, lit * 0.3 * (1.0 - smoothstep(0.0, 0.1, d)));
      } else {
        c = spray(LIME_HI, LIME, smoothstep(0.0, 0.035, d));
        c = spray(c, GREEN, smoothstep(0.03, 0.12, d) * mix(1.0, 0.5, lit));
        c = spray(c, DEEPG, smoothstep(0.1, 0.2, d) * (1.0 - lit) * 0.7);
      }
    }
    if (covered) {
      // Each hill keeps its colour most of the way down, then dissolves into
      // the mist pooled at its foot — and just above the row in front.
      float rise = (p.y - foot) / sc;
      c = spray(c, MIST, smoothstep(0.1, 0.0, rise) * uMist);
      c = spray(c, MIST, exp(-max(0.0, (p.y - prev) / sc) / 0.03) * uMist * 0.85);
      // Far rows sink into the haze.
      col = mix(c, MIST, smoothstep(6.0, 11.0, k) * 0.7);
      hit = true;
      break;
    }
    prev = rowTop;
  }
  if (!hit) {
    // Down on the valley floor: the path, one continuous ribbon — pale blue,
    // white at its edges — found at the depth of the rows whose feet are here.
    float kf = (0.15 - sqrt(max(0.0, 0.0225 - 0.012 * (p.y + 0.66 + 0.1)))) / 0.006;
    float scf = 1.0 / (1.0 + max(kf, 0.0) * 0.09);
    float off = abs(p.x + uSteer * scf - pathX(kf + uFly) * scf) / scf;
    col = spray(MIST, PATH, (1.0 - smoothstep(0.02, 0.085, off)) * uPathOn);
    col = mix(col, vec3(0.97, 0.99, 1.0), exp(-pow((off - 0.085) / 0.02, 2.0)) * 0.6 * uPathOn);
  }
  drawFigure(p, col);
  // Fine light speckle, like the references' grain.
  float speck = step(1.0 - 0.012 * uGrain, grain(9.0));
  col = mix(col, vec3(1.0), speck * 0.55);
  gl_FragColor = finish(col, sparkles(p, 6.0, uSparkle * 0.25));
}`;

// ── VALLEY ──────────────────────────────────────────────────────────────────
/*
 * A rainbow over pastel mountains, a river winding down to us between soft
 * hills, sparkles everywhere. The rainbow is a stippled arc — violet out to
 * pink in — with thin white arcs across it; the mountains are faceted, their
 * left faces in the light, the right in olive shade, the colour shifting
 * pink to lilac to mint across them; the hills come in pastel patches with a
 * bright green line on their tops; the river is aqua with white banks and
 * glints flowing down it.
 */
export const VALLEY = /* glsl */ `
${COMMON}
uniform float uRainbow, uFlowRiver, uRiverOn, uBreath, uPanX;

const vec3 SKY_L = vec3(0.66, 0.58, 0.76);
const vec3 SKY_R = vec3(0.42, 0.50, 0.76);
const vec3 HAZE = vec3(0.97, 0.90, 0.94);
const float HORIZON = -0.1;

vec3 rainbow(float t) {
  // Outer to inner: violet, blue, green, yellow, orange, pink.
  vec3 c0 = vec3(0.56, 0.36, 0.80);
  vec3 c1 = vec3(0.45, 0.52, 0.86);
  vec3 c2 = vec3(0.55, 0.80, 0.55);
  vec3 c3 = vec3(0.96, 0.90, 0.40);
  vec3 c4 = vec3(0.96, 0.56, 0.22);
  vec3 c5 = vec3(0.97, 0.50, 0.76);
  float x = clamp(t, 0.0, 1.0) * 5.0;
  if (x < 1.0) return mix(c0, c1, x);
  if (x < 2.0) return mix(c1, c2, x - 1.0);
  if (x < 3.0) return mix(c2, c3, x - 2.0);
  if (x < 4.0) return mix(c3, c4, x - 3.0);
  return mix(c4, c5, x - 4.0);
}

/* A range: big peaks with smaller ones on their flanks, so the faces are
   creased. Which side of its peak a point is on says whether it is lit. */
float ridge(float x, float horizon, float seed, float scale, out float side, out float along) {
  float h = horizon - 1.0;
  side = 0.0;
  along = 1.0;
  for (int k = 0; k < 14; k++) {
    float fk = float(k);
    bool big = k < 6;
    vec2 r = hash22(vec2(seed, fk * 2.3 + 0.7));
    float cx = big ? -1.3 + fk * 0.52 + (r.x - 0.5) * 0.25 : -1.4 + (fk - 6.0) * 0.36 + (r.x - 0.5) * 0.3;
    float H = (big ? 0.12 + r.y * 0.16 : 0.05 + r.y * 0.07) * scale;
    float W = big ? 0.2 + hash12(vec2(fk + 0.2, seed)) * 0.12 : 0.08 + r.y * 0.06;
    float t = abs(x - cx) / W;
    float v = horizon + H * (1.0 - t);
    if (v > h) { h = v; side = sign(x - cx); along = t; }
  }
  return h + (noise(vec2(x * 30.0, seed)) - 0.5) * 0.005;
}

vec3 mountain(vec2 p, float top, float side, float along, float seed, float far) {
  // Iridescent: soft patches of pink, lilac, mint and gold drift across it.
  float n1 = fbm(p * 3.2 + seed);
  float n2 = fbm(p * 2.4 - seed * 1.7 + 4.0);
  vec3 c = mix(vec3(0.95, 0.70, 0.80), vec3(0.76, 0.68, 0.94), smoothstep(0.35, 0.65, n1));
  c = mix(c, vec3(0.62, 0.88, 0.76), smoothstep(0.52, 0.75, n2) * 0.85);
  c = mix(c, vec3(0.98, 0.90, 0.62), smoothstep(0.58, 0.8, 1.0 - n2) * 0.6);
  // Facets: the left face catches the light toward its ridge; the right falls
  // into olive shade, deepest under the ridge.
  if (side < 0.0) c = spray(c, vec3(1.0, 0.98, 0.94), (1.0 - along) * 0.55);
  else c = spray(c, vec3(0.58, 0.56, 0.44), (1.0 - along * 0.6) * 0.55);
  float edge = top - p.y;
  c = mix(c, vec3(1.0, 0.98, 0.92), (1.0 - smoothstep(0.0, 0.006, edge)) * 0.75);
  // The foot sinks into haze.
  c = spray(c, HAZE, smoothstep(0.04, 0.22, edge) * 0.5 * far);
  return c;
}

float riverX(float y) { return 0.02 + uPanX * 0.3 + 0.2 * sin(y * 8.0 + 0.4) * smoothstep(HORIZON, -0.6, y); }
float riverW(float y) { return mix(0.006, 0.2, smoothstep(HORIZON, -0.62, y)) * uRiverOn; }

vec3 riverCol(vec2 p) {
  float u = (p.x - riverX(p.y)) / max(riverW(p.y), 1e-3);
  vec3 c = mix(vec3(0.58, 0.90, 0.84), vec3(0.50, 0.66, 0.90), smoothstep(-0.25, -0.62, p.y) * 0.75);
  c = spray(c, vec3(0.94, 0.98, 1.0), smoothstep(0.45, 1.0, abs(u)) * 0.95);
  // Glints flowing down toward us.
  float g = noise(vec2(u * 2.5, (p.y + uFlowRiver) * 22.0));
  c = mix(c, vec3(1.0), smoothstep(0.7, 0.9, g) * 0.55);
  return c;
}

/* A hill of the valley: a soft mound, painted by depth below its top — a
   pale glow on top, lime, then olive, sinking into light haze at its foot. */
vec3 mound(vec2 p, float d, float u, float i, float tint) {
  float n = fbm(p * 4.0 + i * 3.1);
  vec3 top = mix(vec3(1.0, 0.92, 0.92), vec3(0.95, 0.98, 0.86), tint);
  vec3 body = mix(vec3(0.78, 0.84, 0.46), vec3(0.62, 0.83, 0.58), smoothstep(0.35, 0.7, n));
  vec3 deep = mix(vec3(0.48, 0.66, 0.34), vec3(0.36, 0.60, 0.42), tint);
  vec3 c = spray(top, body, smoothstep(0.0, 0.05, d));
  c = spray(c, deep, smoothstep(0.05, 0.14, d) * smoothstep(-0.6, 0.5, u));
  // Some tops carry a bright green line.
  c = mix(c, vec3(0.35, 0.82, 0.32), (1.0 - smoothstep(0.0, 0.005, d)) * step(0.5, tint) * 0.85);
  c = spray(c, vec3(0.98, 0.96, 0.97), smoothstep(0.18, 0.3, d) * 0.4);
  return c;
}

void main() {
  vec2 p = frame();
  // The sky: lilac on the left, blue on the right, pale toward the horizon.
  vec3 col = mix(SKY_L, SKY_R, smoothstep(-0.6, 0.6, p.x));
  col = mix(col, HAZE, smoothstep(0.3, -0.1, p.y) * 0.75);

  // The rainbow: bands kept clean, only their grain stippled.
  vec2 rc = vec2(0.02 + uPanX * 0.15, -0.06);
  float r = length(p - rc);
  float R0 = 0.52 * (1.0 + uBreath * 0.03);
  float t = (R0 - r) / 0.3;
  float tj = t + (grain(1.0) - 0.5) * 0.12 * uGrain;
  float arc = sprayT(smoothstep(-0.12, 0.06, t) * (1.0 - smoothstep(0.92, 1.35, t)), 2.0) * uRainbow;
  col = mix(col, rainbow(tj), arc * (0.88 + uFlash * 0.12));
  // Inside the bow, a pink glow down to the mountains.
  col = mix(col, vec3(0.98, 0.62, 0.78), smoothstep(0.9, 1.1, t) * (1.0 - smoothstep(1.1, 1.8, t)) * 0.35 * uRainbow);
  col = mix(col, vec3(1.0), uFlash * 0.2 * arc);
  // Thin white arcs crossing it.
  float a1 = abs(length(p - rc - vec2(-0.07, -0.03)) - 0.47);
  float a2 = abs(length(p - rc - vec2(0.05, 0.02)) - 0.36);
  col = mix(col, vec3(1.0), (exp(-a1 * 700.0) * 0.45 + exp(-a2 * 900.0) * 0.3) * smoothstep(-0.2, 0.15, p.y) * uRainbow);

  // Mountains: the far range, then the near.
  float side, along;
  float top1 = ridge(p.x + uPanX * 0.1, HORIZON + 0.05, 3.0, 1.2, side, along);
  if (p.y < top1) col = mountain(p, top1, side, along, 3.0, 0.7);
  float top2 = ridge(p.x + uPanX * 0.2, HORIZON - 0.02, 9.0, 0.6, side, along);
  if (p.y < top2) col = mountain(p, top2, side, along, 9.0, 1.0);
  // Below them, the valley floor: haze at the mountains' foot, pale meadow nearer.
  vec3 floorCol = mix(HAZE, vec3(0.74, 0.86, 0.60), smoothstep(HORIZON - 0.04, HORIZON - 0.2, p.y) * 0.9);
  col = spray(col, floorCol, smoothstep(HORIZON + 0.03, HORIZON - 0.07, p.y));

  // The river, from the mountains' foot down to us.
  float bankD = abs(p.x - riverX(p.y)) - riverW(p.y);
  if (p.y < HORIZON && bankD < 0.0) col = spray(riverCol(p), HAZE, smoothstep(HORIZON - 0.12, HORIZON, p.y) * 0.8);

  // Soft hills, front to back, each row's mounds overlapping, parted by the river.
  for (int i = 0; i < 6; i++) {
    float fi = float(i);
    float foot = -0.64 + fi * 0.095;
    float sc = 1.0 - fi * 0.13;
    float x = p.x + uPanX * (0.5 - fi * 0.1);
    bool covered = false;
    float hitD = 0.0, hitU = 0.0, hitTint = 0.0;
    for (int m = 0; m < 7; m++) {
      float fm = float(m);
      vec2 hh = hash22(vec2(fi * 3.3 + 1.0, fm * 2.9));
      float cx = -1.45 + fm * 0.5 + (hh.x - 0.5) * 0.35;
      float w = (0.3 + hh.y * 0.26) * sc;
      float tall = (0.15 + hash12(vec2(fm, fi + 0.5)) * 0.11) * sc * (1.0 + uPulse * 0.12);
      float u = (x - cx) / w;
      if (u * u >= 1.0) continue;
      // Round on top, easing out to gentle slopes at the ends — no walls.
      float au = abs(u);
      float top = foot + tall * mix(pow(1.0 - u * u, 0.5), 0.5 + 0.5 * cos(3.14159 * au), smoothstep(0.35, 1.0, au));
      if (p.y >= top || p.y <= foot - 0.02) continue;
      // Later mounds lie over earlier ones: remember the last that covers.
      covered = true;
      hitD = (top - p.y) / sc;
      hitU = u;
      hitTint = hash12(vec2(fi, fm + 0.3));
    }
    if (covered && bankD > 0.0) {
      vec3 c = mound(p, hitD, hitU, fi, hitTint);
      // Its foot melts into the meadow below.
      c = spray(c, vec3(0.76, 0.87, 0.62), smoothstep(foot + 0.04, foot - 0.02, p.y) * 0.75);
      // The banks glow white where the hills meet the water.
      col = spray(c, vec3(1.0), exp(-bankD * 40.0) * 0.85);
      break;
    }
  }

  drawFigure(p, col);
  // A little colour in the grain, as the reference has it.
  col += (vec3(grain(1.0), grain(2.0), grain(3.0)) - 0.5) * 0.045 * uGrain;
  float sp = sparkles(p, 6.5, uSparkle * 0.6) + sparkles(p + 0.13, 2.6, uSparkle * 0.5) * 1.6;
  gl_FragColor = finish(col, sp);
}`;

// ── SPRAY ───────────────────────────────────────────────────────────────────
/*
 * Bands of colour sprayed in arcs — blue-grey sky, red, orange, yellow,
 * green — their borders stippled, and in front her picture repainted in
 * pink and blue spray, its edges dissolving. With no picture, a stippled
 * moon stands in.
 */
export const SPRAY = /* glsl */ `
${COMMON}
uniform float uBreath, uRing, uRingAmp, uPanX;

vec3 band(float i) {
  if (i < 0.5) return vec3(0.42, 0.60, 0.69);
  if (i < 1.5) return vec3(0.98, 0.32, 0.22);
  if (i < 2.5) return vec3(0.97, 0.45, 0.20);
  if (i < 3.5) return vec3(0.89, 0.76, 0.21);
  if (i < 4.5) return vec3(0.35, 0.67, 0.43);
  return vec3(0.17, 0.52, 0.42);
}

void main() {
  vec2 p = frame();
  vec2 c = vec2(0.32 + uPanX * 0.2, -1.12);
  float r = length(p - c) * (1.0 - uBreath * 0.03);
  float b = (1.52 - r) / 0.17;
  b += (fbm(p * 1.8 + uTime * 0.03) - 0.5) * 0.9;
  b += uRingAmp * 0.8 * exp(-pow((r - uRing) * 7.0, 2.0));
  float jitter = (grain(4.0) - 0.5) * 1.15 * uGrain;
  vec3 col = band(clamp(floor(b + jitter + 0.5), 0.0, 5.0));

  if (uFigOn > 0.5) {
    drawFigure(p, col);
  } else {
    // A moon, sprayed: lit from the upper left, its rim dissolving.
    vec2 q = (p - uFigRect.xy) / (uFigRect.w * 0.75);
    float rr = length(q);
    if (rr < 1.2) {
      vec3 n = vec3(q, sqrt(max(0.0, 1.0 - rr * rr)));
      float lum = clamp(dot(n, normalize(vec3(-0.5, 0.6, 0.65))) * 0.85 + 0.2, 0.0, 1.0);
      float a = smoothstep(0.0, 0.35, (1.0 - rr) * 5.0 + (grain(5.0) - 0.5) * (1.2 + uFigDissolve * 3.0));
      float s = sprayT(lum, 6.0);
      vec3 m = s < 0.333 ? mix(uFigA, uFigB, s * 3.0)
             : s < 0.667 ? mix(uFigB, uFigC, s * 3.0 - 1.0)
             : mix(uFigC, uFigD, s * 3.0 - 2.0);
      col = mix(col, m, a);
    }
  }
  gl_FragColor = finish(col, sparkles(p, 5.0, uSparkle * 0.18));
}`;

export const SCENES = [CLOUDS, HILLS, VALLEY, SPRAY];
