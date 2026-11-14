/**
 * ═══════════════════════════════════════════════════════════════════════════
 * WHERE THE PERSON IS
 * ═══════════════════════════════════════════════════════════════════════════
 * A small picture of who is in front of the camera: for each cell of a coarse
 * grid, how sure the model is that a person is there. The hands say where two
 * hands are; this says where the whole body is — its outline, which is what a
 * visual needs to draw a figure rather than a pair of hands.
 *
 * It is worked out in the hand-tracking worker, from the same camera frames,
 * and only while some visual on screen has asked for it: it is a second model
 * to run, and nothing should pay for it that does not use it.
 *
 * Mirrored like the hands, so what is on her right is on the right.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export interface Presence {
  /** Row by row, 0 nobody to 255 certainly somebody. */
  data: Uint8Array;
  width: number;
  height: number;
}

let latest: Presence | null = null;
let at = 0;
let wanted = 0;

/** A visual asks for the outline while it is up; call what this returns when it leaves. */
export function wantPresence(): () => void {
  wanted++;
  let released = false;
  return () => {
    if (released) return;
    released = true;
    wanted = Math.max(0, wanted - 1);
  };
}

/** Whether anything on screen is using the outline right now. */
export function presenceWanted(): boolean {
  return wanted > 0;
}

/** Called by the tracker with a mask as the camera saw it; kept mirrored. */
export function publishPresence(data: Uint8Array, width: number, height: number) {
  if (data.length < width * height) return;
  const mirrored = new Uint8Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) mirrored[y * width + x] = data[y * width + (width - 1 - x)];
  }
  latest = { data: mirrored, width, height };
  at = performance.now();
}

/** How long an outline stands in for the next one: a slow machine sends them seconds apart. */
const KEPT_MS = 4000;

/** The latest outline, or null when there has been none for a while. */
export function presence(): Presence | null {
  return latest && performance.now() - at < KEPT_MS ? latest : null;
}

/** How sure the model is that a person is at this point of the frame, 0 to 1. `x`, `y` are 0 to 1. */
export function presenceAt(mask: Presence, x: number, y: number): number {
  const fx = Math.min(mask.width - 1.001, Math.max(0, x * (mask.width - 1)));
  const fy = Math.min(mask.height - 1.001, Math.max(0, y * (mask.height - 1)));
  const ix = Math.floor(fx);
  const iy = Math.floor(fy);
  const tx = fx - ix;
  const ty = fy - iy;
  const i = iy * mask.width + ix;
  const a = mask.data[i];
  const b = mask.data[i + 1];
  const c = mask.data[i + mask.width];
  const d = mask.data[i + mask.width + 1];
  return (a + (b - a) * tx + (c - a) * ty + (a - b - c + d) * tx * ty) / 255;
}
