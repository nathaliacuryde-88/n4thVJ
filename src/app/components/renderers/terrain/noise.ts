/**
 * The one noise both the shaders and the camera read.
 *
 * The camera has to stay above the ground, so the height of the ground has
 * to be known here in script as well as on the graphics card — and the two
 * must agree, or the camera flies through a ridge that script thought was a
 * valley. A hash worked out with sines agrees with itself only on one
 * machine. A table of random numbers, handed to the shader as a texture and
 * read here by the same rule, is the same everywhere.
 */

export const NOISE_SIZE = 256;

/** The table: one byte per cell, the same on every run. */
export const NOISE_DATA: Uint8Array = (() => {
  const data = new Uint8Array(NOISE_SIZE * NOISE_SIZE);
  let s = 0x2f6e2b1;
  for (let i = 0; i < data.length; i++) {
    // xorshift: plain, and the same in every browser.
    s ^= s << 13; s ^= s >>> 17; s ^= s << 5;
    data[i] = (s >>> 0) & 255;
  }
  return data;
})();

const cell = (x: number, y: number) =>
  NOISE_DATA[((y % NOISE_SIZE + NOISE_SIZE) % NOISE_SIZE) * NOISE_SIZE + ((x % NOISE_SIZE + NOISE_SIZE) % NOISE_SIZE)] / 255;

/** Smooth noise, 0 to 1 — the script twin of `noise()` in the shaders. */
export function noise(x: number, y: number): number {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  let fx = x - ix;
  let fy = y - iy;
  fx = fx * fx * (3 - 2 * fx);
  fy = fy * fy * (3 - 2 * fy);
  const a = cell(ix, iy);
  const b = cell(ix + 1, iy);
  const c = cell(ix, iy + 1);
  const d = cell(ix + 1, iy + 1);
  return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
}

/**
 * The ground's height at a point — the script twin of `terrain()` in the
 * shaders, to the same few octaves the camera needs.
 */
export function terrainHeight(x: number, z: number, height: number, rugged: number, style: number, octaves = 5): number {
  let h = 0;
  let a = 1;
  let total = 0;
  let qx = x * 0.045;
  let qz = z * 0.045;
  for (let i = 0; i < octaves; i++) {
    const n = noise(qx, qz);
    const r = 1 - Math.abs(2 * n - 1);
    h += a * (n + (r * r - n) * rugged);
    total += a;
    a *= 0.45;
    const nx = 1.6 * qx - 1.2 * qz;
    qz = 1.2 * qx + 1.6 * qz;
    qx = nx;
  }
  h /= total;
  const broad = noise(x * 0.014 + 7, z * 0.014 + 7) - 0.5;
  // The sea: the same land, sunk until only its tops show as islands.
  if (style === 1) return (h - 0.62) * height * 6 + broad * height * 3;
  return (h - 0.45) * height * 7 + broad * height * 16;
}
