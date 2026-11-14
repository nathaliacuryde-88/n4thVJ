/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FLIGHT — THE SHADERS
 * ═══════════════════════════════════════════════════════════════════════════
 * The ground is a fan of triangles laid out in front of the camera — fine
 * near, coarse far, a few pixels each wherever they fall — lifted to the
 * height of a landscape that is worked out, not stored, so it has no edge.
 *
 * The triangles only give the shape. Everything that makes it read as a
 * place is done per pixel: the slope of the ground worked out again at a
 * finer grain than the triangles carry, light from a low sun with the long
 * shadows that throws, snow where it is high and level, mist that pools low
 * and thickens with distance until the far ridges are the colour of the sky
 * behind them, and water that mirrors that sky and the land standing in it.
 * ═══════════════════════════════════════════════════════════════════════════
 */

const SHARED = /* glsl */ `
precision highp float;
uniform sampler2D uNoise;
uniform float uHeight;
uniform float uRugged;
uniform float uStyle;
uniform float uWater;   // the height the water stands at
uniform float uTime;
uniform float uSwell;   // how high the sea runs

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return texture2D(uNoise, (i + f + 0.5) / 256.0).r;
}

// The ground. The same sum as terrainHeight() in noise.ts, which the camera reads.
float terrain(vec2 p, int octaves) {
  float h = 0.0;
  float a = 1.0;
  float total = 0.0;
  vec2 q = p * 0.045;
  for (int i = 0; i < 10; i++) {
    if (i >= octaves) break;
    float n = noise(q);
    float r = 1.0 - abs(2.0 * n - 1.0);
    h += a * mix(n, r * r, uRugged);
    total += a;
    a *= 0.45;
    q = mat2(1.6, 1.2, -1.2, 1.6) * q;
  }
  h /= total;
  // The lie of the land: whole massifs and the valleys between them.
  float broad = noise(p * 0.014 + 7.0) - 0.5;
  if (uStyle > 0.5) return (h - 0.62) * uHeight * 6.0 + broad * uHeight * 3.0;
  return (h - 0.45) * uHeight * 7.0 + broad * uHeight * 16.0;
}

// The swell: four long waves from different quarters. Returns the height and,
// in yz, the slope, so the light can find the wave faces.
vec3 swell(vec2 p, float t) {
  float h = 0.0;
  vec2 slope = vec2(0.0);
  vec2 dir = vec2(0.8, 0.6);
  float freq = 0.22;
  float amp = 1.0;
  for (int i = 0; i < 4; i++) {
    float phase = dot(p, dir) * freq + t * (0.9 + 0.35 * float(i));
    h += amp * sin(phase);
    slope += amp * cos(phase) * dir * freq;
    dir = mat2(0.6, 0.8, -0.8, 0.6) * dir;
    freq *= 1.7;
    amp *= 0.5;
  }
  return vec3(h, slope) * uSwell;
}
`;

export const TERRAIN_VERT = /* glsl */ `${SHARED}
uniform vec3 uEye;
uniform float uHeading;   // radians: which way the camera faces, about the vertical
uniform float uNear;
uniform float uFar;
uniform float uFan;       // half the angle the fan covers
varying vec3 vWorld;
varying float vGround;    // the ground's own height here, under any water

void main() {
  // position.x runs -1..1 across the fan, position.y 0..1 from near to far.
  float angle = uHeading + position.x * uFan;
  float dist = uNear * pow(uFar / uNear, position.y);
  vec2 p = uEye.xz + vec2(sin(angle), -cos(angle)) * dist;
  float h = terrain(p, 6);
  vGround = h;
  float y = h;
  if (h < uWater) y = uWater + (uStyle > 0.5 ? swell(p, uTime).x : 0.0);
  vWorld = vec3(p.x, y, p.y);
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}`;

const SKY = /* glsl */ `
uniform vec3 uSun;        // towards the sun or the moon
uniform float uHour;      // 0 night, 0.5 blue hour, 1 last sun
uniform float uGlow;      // the light swelling: a build-up, a drop
uniform float uTwinkle;   // the hats
uniform float uTurn;
uniform float uSat;

vec3 turnHue(vec3 c, float a) {
  const mat3 toYiq = mat3(0.299, 0.596, 0.211, 0.587, -0.274, -0.523, 0.114, -0.322, 0.312);
  const mat3 toRgb = mat3(1.0, 1.0, 1.0, 0.956, -0.272, -1.106, 0.621, -0.647, 1.703);
  vec3 yiq = toYiq * c;
  float ca = cos(a), sa = sin(a);
  yiq.yz = mat2(ca, sa, -sa, ca) * yiq.yz;
  return toRgb * yiq;
}

// The colour of the light itself: silver at night, peach at dusk. Never red.
vec3 sunColor() {
  return mix(vec3(0.62, 0.72, 0.95), vec3(1.0, 0.74, 0.5), smoothstep(0.25, 0.9, uHour));
}

// The sky in a direction. Used for the sky itself, for the haze the land
// fades into, and for what the water mirrors — which is why they agree.
vec3 sky(vec3 dir, float stars) {
  float up = clamp(dir.y, -0.1, 1.0);
  vec3 zenith = mix(vec3(0.004, 0.008, 0.03), vec3(0.02, 0.05, 0.17), uHour);
  vec3 horizon = mix(vec3(0.03, 0.05, 0.1), vec3(0.2, 0.25, 0.4), uHour);
  vec3 c = mix(horizon, zenith, pow(max(up, 0.0), 0.45));
  // The band of warm light along the horizon under the sun.
  float toward = max(dot(normalize(dir.xz + 1e-5), normalize(uSun.xz + 1e-5)), 0.0);
  float band = exp(-max(up, 0.0) * 7.0) * (0.25 + 0.75 * toward * toward);
  c += sunColor() * band * (0.08 + 0.75 * uHour) * (1.0 + 0.9 * uGlow);
  // The sun or moon, and the bloom around it.
  float d = max(dot(dir, uSun), 0.0);
  c += sunColor() * (pow(d, 3000.0) * 4.0 + pow(d, 120.0) * 0.35 + pow(d, 10.0) * 0.1) * (1.0 + uGlow);
  // Thin cloud low on the horizon, lit from below.
  if (dir.y > 0.0) {
    vec2 q = dir.xz / (dir.y + 0.12);
    float cloud = noise(q * 0.9 + uTime * 0.004) * 0.6 + noise(q * 2.3 - uTime * 0.006) * 0.4;
    cloud = smoothstep(0.52, 0.8, cloud) * exp(-dir.y * 3.5);
    c = mix(c, horizon * 0.8 + sunColor() * (0.12 + 0.3 * toward) * (0.3 + uHour), cloud * 0.7);
    // Stars, where the sky is dark enough for them.
    vec2 cellUv = q * 46.0;
    vec2 id = floor(cellUv);
    float seed = texture2D(uNoise, (id + 0.5) / 256.0).r;
    vec2 at = fract(cellUv) - 0.5 - (vec2(seed, fract(seed * 7.3)) - 0.5) * 0.7;
    float star = smoothstep(0.07, 0.0, length(at)) * step(0.82, seed);
    float twinkle = 0.6 + 0.4 * sin(uTime * (1.0 + seed * 3.0) + seed * 60.0) + uTwinkle * step(0.94, seed) * 2.0;
    c += stars * star * twinkle * (1.0 - cloud) * smoothstep(0.75, 0.2, uHour) * smoothstep(0.0, 0.25, dir.y) * vec3(0.9, 0.95, 1.0);
  }
  return c;
}

vec3 finish(vec3 c) {
  // A soft shoulder, so bright snow and the sun's glitter never clip flat.
  c = c / (1.0 + c * 0.55) * 1.75;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  c = mix(vec3(l), turnHue(c, uTurn), uSat);
  return clamp(c, 0.0, 1.0);
}
`;

export const TERRAIN_FRAG = /* glsl */ `${SHARED}${SKY}
uniform vec3 uEye;
uniform float uMist;
uniform float uRing;      // how far the ring of light has travelled
uniform float uRingAmp;
uniform float uBass;
varying vec3 vWorld;
varying float vGround;

void main() {
  vec3 toEye = uEye - vWorld;
  float dist = length(toEye);
  vec3 view = -toEye / dist;
  vec2 p = vWorld.xz;
  // Finer than the triangles near, no finer than a pixel far away.
  int octaves = dist < 12.0 ? 9 : dist < 30.0 ? 8 : dist < 60.0 ? 7 : 6;
  float ground = terrain(p, octaves);
  vec3 light = sunColor();
  vec3 color;

  if (ground < uWater) {
    // ── water ────────────────────────────────────────────────────────────
    vec2 slope = uStyle > 0.5 ? swell(p, uTime).yz : vec2(0.0);
    // Small ripples on top of whatever the water is doing.
    float e = 0.06;
    float rip = uStyle > 0.5 ? 1.1 : 0.3;
    vec2 q = p * 1.7 + vec2(uTime * 0.35, uTime * 0.22);
    float n0 = noise(q) + 0.5 * noise(q * 2.3 + 3.0);
    float nx = noise(q + vec2(e, 0.0)) + 0.5 * noise((q + vec2(e, 0.0)) * 2.3 + 3.0);
    float nz = noise(q + vec2(0.0, e)) + 0.5 * noise((q + vec2(0.0, e)) * 2.3 + 3.0);
    slope += vec2(nx - n0, nz - n0) / e * 0.05 * rip / (1.0 + dist * 0.04);
    vec3 normal = normalize(vec3(-slope.x, 1.0, -slope.y));
    vec3 mirrored = reflect(view, normal);
    mirrored.y = abs(mirrored.y);
    vec3 above = sky(mirrored, 0.6);
    // The land standing in the water: where the mirrored ray would meet a
    // slope, the water shows that slope's dark instead of the sky.
    float land = 0.0;
    vec2 along = normalize(mirrored.xz + 1e-5);
    for (int i = 1; i <= 3; i++) {
      float reach = float(i) * (1.2 + dist * 0.06);
      float rise = terrain(p + along * reach, 5) - uWater;
      land = max(land, smoothstep(0.0, 0.5, rise - mirrored.y / max(length(mirrored.xz), 1e-3) * reach));
    }
    above = mix(above, vec3(0.012, 0.02, 0.035) * (0.5 + uHour), land * 0.85);
    float fresnel = 0.03 + 0.97 * pow(1.0 - max(dot(-view, normal), 0.0), 5.0);
    // Shallow water over pale ground is lighter than the deep.
    float depth = uWater - ground;
    vec3 deep = mix(vec3(0.02, 0.09, 0.11), vec3(0.004, 0.018, 0.035), smoothstep(0.0, 0.8, depth)) * (0.35 + uHour);
    color = mix(deep, above, fresnel);
    // The sun's or moon's path across the water.
    float glint = pow(max(dot(mirrored, uSun), 0.0), 420.0);
    color += light * glint * 1.8 * (1.0 + uBass);
  } else {
    // ── land ─────────────────────────────────────────────────────────────
    float e = 0.02 + dist * 0.004;
    float hx = terrain(p + vec2(e, 0.0), octaves);
    float hz = terrain(p + vec2(0.0, e), octaves);
    vec3 normal = normalize(vec3(ground - hx, e, ground - hz));
    // The long shadows of a low sun: walk towards it and see if the land rises above the ray.
    float shade = 1.0;
    vec2 sunFlat = normalize(uSun.xz + 1e-5);
    float sunRise = uSun.y / max(length(uSun.xz), 1e-3);
    for (int i = 1; i <= 5; i++) {
      float reach = float(i) * float(i) * 0.45;
      float over = terrain(p + sunFlat * reach, 4) - (ground + sunRise * reach);
      shade = min(shade, 1.0 - smoothstep(0.0, 0.5 + 0.22 * reach, over));
    }
    float lit = max(dot(normal, uSun), 0.0) * shade;
    // Rock, with a little of its own variation; green low down by the
    // water; snow where it is high and not too steep.
    float mottle = noise(p * 0.8) * 0.6 + noise(p * 3.1) * 0.4;
    vec3 rock = mix(vec3(0.085, 0.09, 0.11), vec3(0.2, 0.17, 0.15), mottle);
    float above = ground - uWater;
    rock = mix(vec3(0.03, 0.07, 0.06), rock, smoothstep(0.1, 2.2, above + mottle * 0.8));
    // Snow only on the tops, measured against how tall this land stands.
    float snow = smoothstep(5.0, 8.5, (above + mottle * 1.6) / max(uHeight, 0.2)) * smoothstep(0.6, 0.85, normal.y);
    vec3 surface = mix(rock, vec3(0.78, 0.82, 0.9), snow);
    vec3 ambient = sky(normalize(vec3(normal.x, abs(normal.y) + 0.4, normal.z)), 0.0);
    // What the sky lends the shadows, taken most of the way to grey: a
    // shadow is dim, not blue paint.
    ambient = mix(vec3(dot(ambient, vec3(0.333))), ambient, 0.45);
    color = surface * (ambient * 1.5 + light * lit * (2.2 + 2.4 * uHour) * (1.0 + 0.3 * uBass));
    // Wet dark at the very edge of the water.
    color *= 0.55 + 0.45 * smoothstep(0.0, 0.12, above);
  }

  // The ring of light travelling out from under the camera.
  float ring = exp(-pow((length(p - uEye.xz) - uRing) / (0.6 + uRing * 0.05), 2.0)) * uRingAmp;
  color += (vec3(0.5, 0.7, 0.9) * 0.6 + light * 0.4) * ring * 0.5;

  // Air: haze with distance, and mist lying low. The far land takes the
  // colour of the sky behind it, which is what makes it look far.
  vec3 haze = sky(normalize(vec3(view.x, max(view.y, 0.0) * 0.4 + 0.03, view.z)), 0.0);
  float fog = 1.0 - exp(-dist * 0.011 * uMist);
  float low = exp(-max(vWorld.y - uWater, 0.0) * 1.3) * (1.0 - exp(-dist * 0.05 * uMist));
  color = mix(color, haze, clamp(fog + low * 0.38 * uMist, 0.0, 1.0));

  gl_FragColor = vec4(finish(color), 1.0);
}`;

/** The sky behind everything: one triangle, a ray per pixel. */
export const SKY_VERT = /* glsl */ `
varying vec2 vNdc;
void main() {
  vNdc = position.xy;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}`;

export const SKY_FRAG = /* glsl */ `
precision highp float;
uniform sampler2D uNoise;
uniform float uTime;
uniform mat4 uInverseView;
uniform mat4 uInverseProjection;
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return texture2D(uNoise, (i + f + 0.5) / 256.0).r;
}
${SKY}
varying vec2 vNdc;
void main() {
  vec4 eye = uInverseProjection * vec4(vNdc, 1.0, 1.0);
  vec3 dir = normalize((uInverseView * vec4(eye.xyz / eye.w, 0.0)).xyz);
  gl_FragColor = vec4(finish(sky(dir, 1.0)), 1.0);
}`;
