/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE CLOCK EVERY VISUAL RUNS ON
 * ═══════════════════════════════════════════════════════════════════════════
 * One rate, so one control changes the tempo of the whole set.
 *
 * Damping the hand data alone was not enough, and measuring said so: three
 * layers stacked moved almost exactly as much at the calmest setting as at the
 * wildest. Almost none of what you see is actually hand-driven — nearly every
 * renderer advances its own time by a fixed step per frame and animates from
 * that, so the hands modulate a motion whose speed they never set.
 *
 * So the knob scales time itself. Renderers take their step from `timeScale()`
 * and their wall clock from `vjTime()`, and both slow down or speed up
 * together. At 1 the step is 0.016 and the clock tracks real seconds, which is
 * what every renderer was written against.
 * ═══════════════════════════════════════════════════════════════════════════
 */

let rate = 1;
let elapsed = 0;

/**
 * Advances the clock. Called once per frame by the canvas, before anything
 * draws — never by a renderer, or each one would push time along again and the
 * set would run at a speed that depended on how many layers were up.
 */
export function advanceClock(seconds: number, motion: number) {
  rate = motion;
  elapsed += seconds * motion;
}

/** Multiplier for a renderer's own per-frame step. */
export function timeScale(): number {
  return rate;
}

/** Seconds elapsed on the scaled clock, for renderers that want a wall time. */
export function vjTime(): number {
  return elapsed;
}
