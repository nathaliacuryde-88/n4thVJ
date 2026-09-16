/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE CLOCK EVERY VISUAL RUNS ON
 * ═══════════════════════════════════════════════════════════════════════════
 * Nearly every renderer advances its own time by a fixed step per frame and
 * animates from that, so the hands modulate a motion whose speed they never
 * set. Damping the hand data alone was measured and did almost nothing: three
 * layers stacked moved 8.8 at the calmest setting and 8.9 at the wildest. The
 * knob has to scale time itself, which is what this is.
 *
 * ONE CLOCK PER LAYER. It used to be a single rate for the whole set, so the
 * knob moved everything at once and a stack could not hold one visual drifting
 * under another racing. Each layer keeps its own rate and its own elapsed
 * time; the canvas selects a layer just before drawing its deck, and the
 * renderer reads whatever is current without knowing any of this happened.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** Per-layer rate and elapsed time, grown as layers appear. */
const rates: number[] = [1];
const elapsed: number[] = [0];
let current = 0;

/**
 * Advances every layer's clock by one frame.
 *
 * Called once per frame by the canvas, before anything draws — never by a
 * renderer, or each one would push time along again and the set would run at a
 * speed that depended on how many layers were up.
 */
export function advanceClock(seconds: number, layerRates: number[]) {
  for (let i = 0; i < layerRates.length; i++) {
    const rate = layerRates[i] ?? 1;
    rates[i] = rate;
    elapsed[i] = (elapsed[i] ?? 0) + seconds * rate;
  }
}

/** Points the readers below at one layer, for the length of its draw. */
export function useLayerClock(index: number) {
  current = index;
}

/** Multiplier for a renderer's own per-frame step. */
export function timeScale(): number {
  return rates[current] ?? 1;
}

/** Seconds elapsed on the scaled clock, for renderers that want a wall time. */
export function vjTime(): number {
  return elapsed[current] ?? 0;
}
