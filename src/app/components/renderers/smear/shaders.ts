/**
 * Smear, in two passes: the source — soft shapes of colour, the camera or a
 * clip — drawn small into a texture; then every pixel of the frame gathers
 * colour along a direction from it, band by band, and lies on the paper.
 */

export const VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

const NOISE = /* glsl */ `
float hash11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash21(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash21(i), hash21(i + vec2(1, 0)), u.x), mix(hash21(i + vec2(0, 1)), hash21(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p *= 2.03; a *= 0.5; } return s; }
vec3 hueTurn(vec3 c, float turn) {
  // Rotate round the grey axis: the colour panel's turn.
  const vec3 k = vec3(0.57735);
  float ca = cos(turn), sa = sin(turn);
  return c * ca + cross(k, c) * sa + k * dot(k, c) * (1.0 - ca);
}
`;

/** The source: shapes of colour on the paper, the camera, or her clip. */
export const SOURCE = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform vec2 uRes;
uniform float uTime, uKind, uCount, uSize, uBreath, uTurn, uInk;
uniform sampler2D uTex;
uniform vec2 uTexAspect;   // the texture's aspect, and whether to mirror (camera)
uniform vec3 uPaper;
uniform vec3 uCols[8];
${NOISE}

void main() {
  vec2 uv = vUv;
  float aspect = uRes.x / uRes.y;
  vec3 col;
  if (uKind < 0.5) {
    col = uPaper;
    for (int i = 0; i < 10; i++) {
      float fi = float(i);
      if (fi >= uCount) break;
      // Each shape wanders on its own slow path, mostly in the upper part,
      // where the drips start from.
      vec2 c = vec2(
        0.5 + 0.42 * sin(uTime * (0.11 + 0.05 * hash11(fi * 3.1)) + fi * 2.4),
        0.66 + 0.3 * cos(uTime * (0.09 + 0.04 * hash11(fi * 7.7)) + fi * 1.7)
      );
      float r = (0.11 + 0.13 * hash11(fi * 5.3)) * uSize * (1.0 + uBreath * 0.25);
      vec2 d = (uv - c) * vec2(aspect, 1.0);
      // Not quite round: a slow wobble in the outline.
      float wob = (fbm(d * 3.0 + fi * 4.0 + uTime * 0.05) - 0.5) * 0.6 * r;
      float m = smoothstep(r + 0.06, r * 0.35, length(d) + wob);
      vec3 shape = uCols[int(mod(fi, 8.0))];
      col = mix(col, shape, m * 0.95);
    }
    col = hueTurn(col, uTurn);
  } else {
    // Cover the frame with the texture, keeping its shape.
    vec2 t = uv - 0.5;
    float ta = abs(uTexAspect.x);
    if (aspect > ta) t.y *= ta / aspect; else t.x *= aspect / ta;
    t += 0.5;
    if (uTexAspect.y > 0.5) t.x = 1.0 - t.x;
    col = texture2D(uTex, t).rgb;
    // A little softer and closer to the paper, so it smears like the shapes.
    col = mix(col, uPaper, 0.08);
  }
  gl_FragColor = vec4(col, 1.0);
}`;

/** The smear: each pixel gathers colour along its band's direction. */
export const SMEAR = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D uSrc;
uniform vec2 uRes;
uniform float uTime, uStyle, uLength, uBands, uSeams, uGrain, uSeed, uKick, uBurst, uReal;
uniform vec3 uHand;        // x, y (0..1), how present
uniform vec3 uPaper;
uniform float uInk;
${NOISE}

const int TAPS = 40;

void main() {
  vec2 uv = vUv;
  // Bands of uneven width: the columns are cut where a slow noise says.
  float xw = uv.x + (vnoise(vec2(uv.x * 2.5, uSeed)) - 0.5) * 0.12;
  float band = floor(xw * uBands);
  float h = hash11(band * 1.37 + uSeed * 9.1);
  float h2 = hash11(band * 4.11 + uSeed * 3.7);

  // How long this band drags: its own share, the bass and the kick, and
  // longest under the hand.
  float near = uHand.z * exp(-pow((uv.x - uHand.x) * 6.0, 2.0));
  float len = uLength * mix(0.25, 1.0, h) * (1.0 + uKick * 0.6 + uBurst * 1.2) * (1.0 + near * 1.5);

  // The seams: each band slips a little sideways, and a little in time.
  vec2 at = uv + vec2((h2 - 0.5) * 0.035 * uSeams, 0.0);
  at.y += (h - 0.5) * 0.04 * uSeams;

  vec2 dir = vec2(0.0, 1.0);                       // Drip: colour comes from above
  if (uStyle > 2.5) {
    // Melt: the drag bends along a slow flow.
    float a = (fbm(uv * 1.6 + uTime * 0.04) - 0.5) * 2.4;
    dir = vec2(sin(a), cos(a));
  } else if (uStyle > 1.5) {
    // Bands: shorter drags, the bands shifting further.
    len *= 0.45;
    at.x += (h - 0.5) * 0.06 * uSeams;
  }

  vec3 acc = vec3(0.0);
  float wsum = 0.0;
  if (uStyle > 0.5 && uStyle < 1.5) {
    // Stretch: above the band's edge the picture as it is; below it, the
    // edge row pulled down and fading into the paper.
    float edge = 0.35 + 0.45 * hash11(band * 2.9 + floor(uSeed)) ;
    edge = mix(edge, uHand.y, near * 0.8);
    if (at.y > edge) {
      for (int i = 0; i < 8; i++) {
        float k = float(i) / 7.0;
        acc += texture2D(uSrc, at + vec2(0.0, (k - 0.5) * 0.01)).rgb;
      }
      acc /= 8.0;
    } else {
      float d = (edge - at.y) / max(0.05, len);
      vec3 row = vec3(0.0);
      for (int i = 0; i < 8; i++) {
        float k = float(i) / 7.0;
        row += texture2D(uSrc, vec2(at.x + (k - 0.5) * 0.006, edge + k * 0.015)).rgb;
      }
      row /= 8.0;
      acc = mix(row, uPaper, smoothstep(0.0, 1.0, d) * 0.85);
    }
    wsum = 1.0;
  } else {
    for (int i = 0; i < TAPS; i++) {
      float k = float(i) / float(TAPS - 1);
      // Closer colour counts more: a streak that thins as it runs.
      float w = 1.0 - k * 0.75;
      vec2 p = at + dir * k * len;
      // A hair of sideways spread, so the streaks are soft, not lines.
      p.x += (hash11(float(i) + band) - 0.5) * 0.004;
      vec3 c = texture2D(uSrc, p).rgb;
      // Colour outweighs the bare ground, so a streak keeps its colour as
      // it runs instead of washing out into the paper.
      w *= 0.15 + 3.0 * length(c - uPaper);
      acc += c * w;
      wsum += w;
    }
  }
  vec3 col = wsum > 0.001 ? acc / wsum : uPaper;

  // A hairline at each seam, the way a scan leaves one.
  float seam = smoothstep(0.0, 0.0015, abs(fract(xw * uBands) - 0.0015));
  col = mix(col * 0.94, col, mix(1.0, seam, uSeams * 0.6));

  // The paper's tooth.
  float g = hash21(gl_FragCoord.xy + floor(uReal * 24.0) * 13.0) - 0.5;
  col += g * 0.06 * uGrain;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;
