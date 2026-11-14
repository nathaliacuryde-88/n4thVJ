/**
 * ═══════════════════════════════════════════════════════════════════════════
 * STEADY WHEN STILL, QUICK WHEN MOVING
 * ═══════════════════════════════════════════════════════════════════════════
 * Hand landmarks arrive with a tremor of a few thousandths of the frame even
 * when the hand is perfectly still, and anything drawn from them shivers. A
 * plain smoothing removes the shiver and adds lag in the same stroke, which
 * is the worse of the two for playing: the visual trails the hand.
 *
 * This is the One Euro filter (Casiez, Roussel and Vogel, 2012): a low-pass
 * whose cutoff rises with how fast the value is moving. Held still, it
 * smooths hard and the tremor goes. Moved, it opens up and follows almost
 * directly, where lag would be felt and the tremor is invisible anyway.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** Smoothing at rest, in hertz. Lower is steadier and slower to start. */
const MIN_CUTOFF = 1.4;
/** How much the cutoff opens per unit of speed (frame widths per second). */
const BETA = 14;
/** Cutoff for the speed estimate itself. */
const SPEED_CUTOFF = 1.2;

const alpha = (cutoff: number, dt: number) => {
  const tau = 1 / (2 * Math.PI * cutoff);
  return 1 / (1 + tau / dt);
};

export class OneEuro {
  private value: number | null = null;
  /** Smoothed rate of change, in units per second. */
  speed = 0;

  constructor(
    private readonly minCutoff = MIN_CUTOFF,
    private readonly beta = BETA,
  ) {}

  /** Takes a raw reading `dt` seconds after the last, and returns the steadied one. */
  next(raw: number, dt: number): number {
    if (this.value === null || dt <= 0) {
      this.value = raw;
      this.speed = 0;
      return raw;
    }
    const rate = (raw - this.value) / dt;
    this.speed += (rate - this.speed) * alpha(SPEED_CUTOFF, dt);
    const cutoff = this.minCutoff + this.beta * Math.abs(this.speed);
    this.value += (raw - this.value) * alpha(cutoff, dt);
    return this.value;
  }

  reset(): void {
    this.value = null;
    this.speed = 0;
  }
}

/**
 * The most common of the last few readings, for values that come in steps.
 *
 * A finger count flickers between four and five on the frames where a finger
 * is half way; taking the count that most of the recent frames agree on holds
 * it steady and costs a tenth of a second.
 */
export class Settled<T> {
  private recent: T[] = [];
  private held: T | null = null;

  constructor(private readonly size = 5) {}

  next(raw: T): T {
    this.recent.push(raw);
    if (this.recent.length > this.size) this.recent.shift();
    const counts = new Map<T, number>();
    let best = raw;
    let bestCount = 0;
    for (const v of this.recent) {
      const c = (counts.get(v) ?? 0) + 1;
      counts.set(v, c);
      // A tie goes to what is already held: no change without a majority.
      if (c > bestCount || (c === bestCount && v === this.held)) { best = v; bestCount = c; }
    }
    this.held = best;
    return best;
  }

  reset(): void {
    this.recent = [];
    this.held = null;
  }
}
