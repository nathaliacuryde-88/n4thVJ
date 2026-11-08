/**
 * Macro: close-up, photographic abstractions — ink bleeding through a wing,
 * petals out of focus, filaments running into a dark void, grey petals with
 * a prism's light across them. One fragment shader; each style a function.
 * Everything is domain-warped noise: liquid, never ruled.
 */

export const VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

export const MACRO = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform vec2 uRes;
uniform float uTime, uReal, uStyle, uFlow, uDetail, uVeins, uGrain, uBass, uKick, uBurst, uTurn, uZoom;
uniform vec3 uHand;

float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float s = 0.0, a = 0.5;
  mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = r * p * 2.02 + 3.1; a *= 0.5; }
  return s;
}
/* Domain warping: noise fed through itself — the liquid in everything. */
vec2 warp(vec2 p, float t) {
  vec2 q = vec2(fbm(p + vec2(0.0, t * 0.11)), fbm(p + vec2(5.2, 1.3) - t * 0.09));
  vec2 r = vec2(fbm(p + 3.0 * q + vec2(1.7, 9.2) + t * 0.05), fbm(p + 3.0 * q + vec2(8.3, 2.8) - t * 0.04));
  return r;
}
vec3 hueTurn(vec3 c, float a) {
  const vec3 k = vec3(0.57735);
  return c * cos(a) + cross(k, c) * sin(a) + k * dot(k, c) * (1.0 - cos(a));
}
vec3 spectrum(float x) {
  return clamp(abs(fract(x + vec3(0.0, 0.33, 0.67)) * 6.0 - 3.0) - 1.0, 0.0, 1.0);
}

// ── INK WING ────────────────────────────────────────────────────────────────
/* A wing of ink spreading on wet paper: an orange rim, a black band bleeding
   inward with feathered edges, a peach and cyan heart, an eye near its root,
   fine dark veins. It breathes and the ink keeps travelling. */
vec3 inkWing(vec2 p, float t) {
  vec3 paper = vec3(0.87, 0.86, 0.84);
  vec3 haze = vec3(0.58, 0.64, 0.92);
  vec2 root = vec2(-0.05, -0.62) + uHand.z * (uHand.xy - vec2(0.5)) * vec2(0.3, 0.2);
  vec2 d = p - root;
  float ang = atan(d.y, d.x);
  float r = length(d);
  vec2 w = warp(p * 1.2, t);
  // The wing: one big lobe, its edge wandering slowly.
  float reach = (1.05 + 0.14 * sin(ang * 2.0 + t * 0.07) + 0.3 * (w.x - 0.5)) * (1.0 + uBass * 0.08 + uKick * 0.04);
  float lobe = smoothstep(0.1, 1.2, ang) * smoothstep(2.9, 1.9, ang);
  reach *= mix(0.3, 1.0, lobe);
  float inside = reach - r;
  vec3 col = mix(paper, haze, smoothstep(0.45, 0.0, abs(inside)) * 0.6);
  float s = clamp(inside / reach, 0.0, 1.0);              // 0 at the rim, 1 at the root
  // Ink travels outward in hairs: streaks along the radius.
  float hairs = fbm(vec2(ang * 26.0, r * 3.0 - t * 0.05) + w * 2.0);
  float feather = (hairs - 0.5) * 0.16 * uDetail + (w.y - 0.5) * 0.22;
  vec3 orange = vec3(0.98, 0.38, 0.12);
  vec3 peach = vec3(1.0, 0.64, 0.58);
  vec3 cyan = vec3(0.42, 0.82, 0.88);
  vec3 ink = vec3(0.025, 0.02, 0.03);
  vec3 heart = mix(peach, cyan, smoothstep(0.3, 0.8, w.x + (s - 0.65) * 0.9));
  heart = mix(heart, vec3(0.95, 0.85, 0.82), smoothstep(0.75, 0.95, w.y) * 0.5);
  vec3 c = mix(orange, heart, smoothstep(0.36, 0.58, s + feather));
  float band = smoothstep(0.1, 0.28, s + feather) * (1.0 - smoothstep(0.36, 0.6, s + feather * 1.5));
  c = mix(c, ink, band * 0.97);
  // The eye near the root, soft as if photographed: navy, a blue iris with a
  // rainbow sheen at its edge, black, a cyan halo.
  vec2 eyeC = root + vec2(0.05, 0.32);
  float e = length((p - eyeC) * vec2(1.0, 1.3)) + (w.x - 0.5) * 0.04;
  float er = 0.11 * (1.0 + uKick * 0.15);
  c = mix(c, vec3(0.55, 0.86, 0.92), smoothstep(er * 2.1, er * 1.3, e) * 0.8);
  c = mix(c, ink, smoothstep(er * 1.35, er * 1.05, e));
  vec3 iris = mix(vec3(0.2, 0.42, 0.85), vec3(0.03, 0.06, 0.22), smoothstep(er * 0.95, er * 0.25, e));
  c = mix(c, iris, smoothstep(er * 1.02, er * 0.85, e));
  c += spectrum(e * 9.0 + w.y) * 0.18 * smoothstep(0.03, 0.0, abs(e - er * 0.98));
  // Fine veins, faint, curving with the flow.
  float va = ang * 7.0 + (w.y - 0.5) * 1.2 + r * 0.6;
  float vein = 1.0 - smoothstep(0.0, 0.02, abs(fract(va) - 0.5));
  c = mix(c, vec3(0.15, 0.07, 0.06), vein * 0.35 * uVeins * smoothstep(0.15, 0.5, r) * (1.0 - band));
  // Volume: the paper and the pigment lie in soft folds.
  float h = fbm(p * 2.5 + w * 1.5);
  float shade = 0.92 + 0.16 * (h - 0.5) * 2.0;
  c *= shade;
  // A wet edge catching the light, and the colour bleeding just past it.
  c = mix(c, vec3(1.0, 0.75, 0.5), smoothstep(0.03, 0.0, abs(s - 0.005)) * 0.4);
  col = mix(col, c, smoothstep(-0.03, 0.02, inside));
  return col;
}

// ── PETALS ──────────────────────────────────────────────────────────────────
/* Petals out of focus, so close they are mostly colour: layer over layer,
   the near ones blurred wide, pink to peach to cream, freckled orange. */
vec3 petals(vec2 p, float t) {
  vec2 w = warp(p * 0.7, t * 0.6);
  vec3 col = mix(vec3(0.08, 0.42, 0.52), vec3(0.93, 0.42, 0.6), smoothstep(0.25, 0.75, w.x));
  col = mix(col, vec3(0.03, 0.09, 0.12), smoothstep(0.6, 0.9, w.y) * 0.7);
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    float depth = fi / 4.0;                       // 0 far, 1 nearest and softest
    vec2 c = vec2(sin(t * 0.03 * (1.0 + fi * 0.3) + fi * 2.1) * 0.6, cos(t * 0.025 * (1.0 + fi * 0.2) + fi * 1.3) * 0.35);
    float a = fi * 1.25 + 0.4 + t * 0.015 + (w.x - 0.5) * 0.5;
    vec2 q = mat2(cos(a), -sin(a), sin(a), cos(a)) * (p - c);
    float len = 0.6 + 0.25 * hash(vec2(fi, 3.0));
    float along = q.y / len;                     // -1 base, 1 tip
    float halfw = 0.42 * (0.5 + 0.5 * hash(vec2(fi, 9.0))) * sqrt(max(0.0, 1.0 - along * along)) * (0.45 + 0.55 * (along * 0.5 + 0.5));
    halfw *= 1.0 + (fbm(q * 2.0 + fi) - 0.5) * 0.35;
    float sd = abs(q.x) - halfw;
    float soft = mix(0.015, 0.2, depth * depth) * (1.0 + uBass * 0.4);
    float m = smoothstep(soft, -soft, sd) * smoothstep(1.05, 0.85, abs(along)) * smoothstep(0.0, 0.03, halfw) * mix(0.75, 0.92, depth);
    float t01 = clamp(along * 0.5 + 0.5, 0.0, 1.0);
    vec3 tip = mix(vec3(0.98, 0.52, 0.62), vec3(1.0, 0.6, 0.32), hash(vec2(fi, 7.0)));
    vec3 pc = mix(vec3(1.0, 0.95, 0.9), tip, smoothstep(0.15, 0.95, t01 + (w.y - 0.5) * 0.3));
    // Light through the petal: brighter at its middle, faint lines along it.
    pc *= 0.9 + 0.12 * (1.0 - abs(q.x) / max(halfw, 0.01));
    // Freckles toward the base: round, scattered, soft with depth.
    vec2 cell = floor(q * 28.0);
    vec2 loc = fract(q * 28.0) - 0.5 - (vec2(hash(cell), hash(cell + 3.1)) - 0.5) * 0.5;
    float dot1 = smoothstep(0.24 + depth * 0.2, 0.08, length(loc)) * step(0.8, hash(cell + fi));
    float fr = dot1 * smoothstep(0.75, 0.1, t01) * (1.0 - depth * 0.8);
    pc = mix(pc, vec3(0.8, 0.32, 0.12), fr * 0.8 * uDetail);
    col = mix(col, pc, m);
  }
  return col;
}

// ── FILAMENTS ───────────────────────────────────────────────────────────────
/* Thousands of fine filaments fanning into a narrow dark slit, cream to
   orange to navy, a void behind — like the gills of a mushroom seen close. */
vec3 filaments(vec2 p, float t) {
  vec2 c = vec2(0.25, -0.22) + uHand.z * (uHand.xy - vec2(0.5)) * 0.2;
  vec2 d = p - c;
  vec2 w = warp(p * 1.0, t * 0.6);
  float r = length(d);
  // The lines curl as they leave the slit, and drift with a slow flow.
  float ang = atan(d.y, d.x) + 0.35 * r + (w.x - 0.5) * 0.18;
  float n = 300.0 * (0.5 + uDetail * 0.5);
  float fine = 0.5 + 0.5 * sin(ang * n);
  float coarse = 0.5 + 0.5 * sin(ang * n * 0.13 + w.y * 4.0);
  float lines = mix(fine, coarse, 0.35);
  vec3 cream = vec3(0.96, 0.93, 0.88);
  vec3 orange = vec3(0.96, 0.56, 0.3);
  vec3 lilac = vec3(0.82, 0.8, 0.92);
  vec3 navy = vec3(0.03, 0.05, 0.12);
  float k = smoothstep(-0.6, 0.9, -p.y * 0.9 + p.x * 0.2 + (w.x - 0.5) * 0.6);
  vec3 col = mix(cream, orange, k);
  col = mix(col, lilac, smoothstep(0.55, 0.85, w.y) * 0.45);
  // The void: dark, sweeping round behind the slit to the right.
  float voidField = (d.x - 0.04) - 0.5 * d.y * d.y + (w.y - 0.5) * 0.12;
  float dark = smoothstep(-0.02, 0.08, voidField) * smoothstep(0.9, 0.0, d.y + 0.2 - d.x * 0.3);
  col = mix(col, navy, dark);
  // On the dark side the filaments glow orange near the slit and fade.
  vec3 glowC = mix(vec3(1.0, 0.62, 0.3), navy, smoothstep(0.05, 0.6, r));
  col = mix(col, glowC, dark * smoothstep(0.65, 0.0, r) * 0.85);
  float contrast = mix(0.18, 0.45, dark);
  col *= 1.0 - contrast * 0.5 + contrast * lines * smoothstep(0.015, 0.15, r);
  // A blue line along the edge of the void.
  col = mix(col, vec3(0.25, 0.4, 0.75), smoothstep(0.02, 0.0, abs(voidField - 0.03)) * 0.35 * (1.0 - smoothstep(0.0, 0.9, r)));
  // The slit, opening on the bass.
  float slit = length(d * vec2(3.2, 0.95)) - 0.04 * (1.0 + uBass * 0.8 + uKick * 0.5);
  col = mix(col, vec3(0.3, 0.12, 0.04), smoothstep(0.012, -0.012, slit));
  col = mix(col, vec3(1.0, 0.78, 0.5), smoothstep(0.015, 0.0, abs(slit)) * 0.55);
  return col;
}

// ── PRISM ───────────────────────────────────────────────────────────────────
/* Grey: dark petals and leaves against pale light, soft with depth, and a
   prism's rainbow sliding across them. */
vec3 prism(vec2 p, float t) {
  vec2 w = warp(p * 0.9, t * 0.5);
  vec3 col = vec3(0.84, 0.83, 0.82) - (fbm(p * 1.3 + w) - 0.5) * 0.18;
  // Leaves far behind, out of focus.
  float far = smoothstep(0.5, 0.66, fbm(p * 1.1 + vec2(t * 0.01, 0.0) + w * 0.7));
  col = mix(col, vec3(0.45), far * 0.6);
  // The near petals: dark, rounded, their edges soft but clear.
  float near = fbm(p * 0.8 + w * 1.1 - vec2(0.0, t * 0.012));
  float m = smoothstep(0.49, 0.545, near);
  vec3 dark = vec3(0.07) + (fbm(p * 4.0 + w) - 0.5) * 0.06;
  // Their surface: a sheen along the curve of each petal.
  float sheen = smoothstep(0.55, 0.75, near) * (0.5 + 0.5 * sin(near * 40.0 + w.x * 3.0));
  dark += vec3(0.18) * sheen * 0.5;
  col = mix(col, dark, m);
  // The prism: a soft band of spectrum sliding over, brightest on the petals.
  float x = (p.x * 0.7 + p.y * 0.6) - t * 0.035 - uKick * 0.04;
  float band = exp(-pow((fract(x * 0.45) - 0.5) * 5.0, 2.0)) * (0.55 + uBass * 0.4 + uBurst * 0.7);
  vec3 rainbow = spectrum(x * 2.5 + near * 1.5);
  col += rainbow * band * (0.22 + m * (0.5 + sheen * 0.5));
  return col;
}

// ── RINGS ───────────────────────────────────────────────────────────────────
/* Rings spreading through sand: soft concentric bands from a centre off the
   frame, a grain of coloured specks over everything, and a smear of strong
   colour dragged along the rings as if something passed through them. */
vec3 rings(vec2 p, float t) {
  vec2 c = vec2(-0.75, -0.62) + uHand.z * (uHand.xy - vec2(0.5)) * 0.3;
  vec2 d = p - c;
  float r = length(d);
  float ang = atan(d.y, d.x);
  vec2 w = warp(p * 1.3, t * 0.4);
  float wob = (w.x - 0.5) * 0.06;
  // The rings: travelling outward at the clock's pace, deeper with the bass.
  float phase = (r + wob) * 26.0 - t * 1.2 - uKick * 1.5;
  float ring = 0.5 + 0.5 * sin(phase);
  vec3 cream = vec3(0.95, 0.86, 0.72);
  vec3 pink = vec3(0.93, 0.66, 0.6);
  vec3 ochre = vec3(0.86, 0.55, 0.28);
  vec3 col = mix(cream, pink, smoothstep(0.2, 1.2, ang + 0.3 + (w.y - 0.5)));
  float fade = 1.0 - smoothstep(0.3, 2.4, r);
  col = mix(col, ochre * 0.88, smoothstep(0.45, 1.0, ring) * (0.6 + uBass * 0.25) * fade);
  col = mix(col, vec3(0.98, 0.9, 0.82), smoothstep(0.5, 0.0, ring) * 0.35 * fade);
  // The smear: strokes of colour along the rings, each a sliver in radius
  // and long in angle, dragged as by a hand going round.
  float centre = 0.95 + 0.15 * sin(t * 0.05);
  for (int i = 0; i < 7; i++) {
    float fi = float(i);
    float rr = centre + (hash(vec2(fi, 1.0)) - 0.5) * 0.42;
    float aa = 0.62 + (hash(vec2(fi, 2.0)) - 0.5) * 0.28 + sin(t * 0.07 + fi) * 0.04;
    float spread = 0.16 + 0.12 * hash(vec2(fi, 3.0));
    float thick = 0.018 + 0.02 * hash(vec2(fi, 4.0));
    float m = exp(-pow((r - rr) / thick, 2.0)) * exp(-pow((ang - aa) / spread, 2.0));
    vec3 sc = fi < 2.0 ? vec3(0.82, 0.06, 0.05) : fi < 4.0 ? vec3(0.93, 0.68, 0.08) : fi < 5.0 ? vec3(0.08, 0.32, 0.1) : vec3(0.85, 0.35, 0.08);
    col = mix(col, sc, clamp(m * 1.3, 0.0, 0.95));
  }
  // A wider soft haze of orange round the smear.
  float haze = exp(-pow((r - centre) / 0.35, 2.0)) * exp(-pow((ang - 0.62) / 0.4, 2.0));
  col = mix(col, vec3(0.88, 0.42, 0.12), haze * 0.45);
  // Sand: specks of colour, each grain its own.
  vec2 g = floor(gl_FragCoord.xy / max(1.0, uRes.y / 700.0));
  float h1 = hash(g + floor(uReal * 3.0) * 0.0);
  float h2 = hash(g * 1.7 + 3.1);
  vec3 speck = h2 < 0.33 ? vec3(0.95, 0.4, 0.35) : h2 < 0.66 ? vec3(0.98, 0.9, 0.7) : vec3(0.6, 0.45, 0.25);
  col = mix(col, speck, step(0.55, h1) * 0.35 * uDetail);
  return col;
}

// ── WATER ───────────────────────────────────────────────────────────────────
/* Light reflected on moving water: a bright band broken by ripples into
   cells and wobbling ribbons, dark lines running through it, the water
   between grey-green, a dark shore above. */
vec3 water(vec2 p, float t) {
  // The water from above: small waves crossing, moving at the clock's pace.
  vec2 q = p * vec2(1.0, 1.25);
  float wave = fbm(q * 3.0 + vec2(t * 0.15, t * 0.08))
             + 0.6 * fbm(q * 6.0 - vec2(t * 0.11, -t * 0.17))
             + 0.25 * sin(q.x * 9.0 + q.y * 4.0 - t * 0.9);
  // A lit wall or sky reflected as bands; the waves bend them into wobbling
  // ribbons that break into blobs and rings.
  float fine = fbm(q * 11.0 + vec2(-t * 0.3, t * 0.2));
  float bend = (wave - 0.9) * (0.2 + uBass * 0.08) + (fine - 0.5) * 0.05;
  float stripes = sin((p.y + bend) * 62.0 + (p.x + bend * 0.5) * 8.0);
  // Where the light falls: a wide diagonal, the rest grey water, a dark
  // bank across the top corner.
  float diag = p.y - p.x * 0.45 + (wave - 0.9) * 0.15;
  float lightZone = smoothstep(0.32, 0.12, diag) * smoothstep(-0.75, -0.45, diag);
  float bank = smoothstep(0.18, 0.34, diag);
  vec3 waterC = vec3(0.4, 0.41, 0.38) + (wave - 0.9) * 0.12 + stripes * 0.02;
  vec3 col = mix(waterC, vec3(0.13, 0.1, 0.06) + (wave - 0.9) * 0.08, bank);
  // The ribbons: a bright rim, a deeper red inside, a dark hole where a crest
  // turns away.
  float rib = smoothstep(0.35, 0.6, stripes);
  float core = smoothstep(0.8, 0.95, stripes);
  vec3 bright = vec3(1.0, 0.26, 0.1) * (1.0 + uKick * 0.2);
  vec3 deep = vec3(0.6, 0.08, 0.05);
  vec3 lit = mix(bright, deep, core * 0.75);
  col = mix(col, lit, rib * lightZone * (0.92 + uBurst * 0.08));
  // Fainter ribbons trailing out of the light.
  col = mix(col, bright * 0.75, rib * smoothstep(0.55, 0.25, abs(diag + 0.1)) * (1.0 - lightZone) * 0.35);
  // Glints of warm light in the dark water by the bank.
  col += vec3(0.9, 0.72, 0.3) * smoothstep(0.9, 0.98, stripes) * bank * smoothstep(1.1, 1.3, wave) * 0.6;
  return col;
}

void main() {
  vec2 p = (vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0) / uZoom;
  float t = uTime * uFlow;
  vec3 col;
  if (uStyle < 0.5) col = inkWing(p, t);
  else if (uStyle < 1.5) col = petals(p, t);
  else if (uStyle < 2.5) col = filaments(p, t);
  else if (uStyle < 3.5) col = prism(p, t);
  else if (uStyle < 4.5) col = rings(p, t);
  else col = water(p, t);
  col = hueTurn(col, uTurn);
  // Film: a soft vignette and a fine moving grain.
  float v = smoothstep(1.3, 0.35, length((vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0)));
  col *= mix(0.8, 1.0, v);
  col += (hash(gl_FragCoord.xy + floor(uReal * 24.0) * 7.0) - 0.5) * 0.05 * uGrain;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;
