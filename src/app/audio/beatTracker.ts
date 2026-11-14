/**
 * ═══════════════════════════════════════════════════════════════════════════
 * HEARING THE TEMPO
 * ═══════════════════════════════════════════════════════════════════════════
 * Tap tempo needs a free hand and four beats of attention. This listens
 * instead: from how the music's onsets repeat it works out the tempo and where
 * the beat falls, and hands that to the same grid a tap would set.
 *
 * HOW. The onset strength of every analysed frame is laid onto an even
 * 100-per-second line covering the last twelve seconds. A tempo is a lag at
 * which that line resembles itself, so the lags from 60 to 180 BPM are scored
 * by autocorrelation. Half and double time both resemble themselves too; of
 * those that score well, the one nearest the middle of the range is taken,
 * the way a dancer would settle it. The lag is then sharpened by sliding a
 * comb of evenly spaced teeth over the line at slightly different spacings:
 * the spacing that collects the most onset is the beat period.
 *
 * WHERE THE BEAT FALLS is asked of a second line. The first counts a rise in
 * decibels, which is right for finding what repeats — a quiet hat counts as
 * much as a kick — and wrong for finding the one, for the same reason: an
 * off-beat bass note would win as often as the kick. The second line counts
 * the rise in plain loudness, where the heaviest hit of the bar stands far
 * above the rest, and the comb's offset is read from that.
 *
 * WHEN IT SPEAKS. Only once several estimates in a row agree. A wrong grid is
 * worse than none — the visuals would pulse confidently off the music — so
 * until then, and whenever the estimates stop agreeing, it reports nothing
 * and the onset detector drives the visuals as before. Once locked it holds
 * through a breakdown, where there is no kick to hear but the tempo has not
 * gone anywhere, and lets go after a long silence.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** Samples per second of the even onset line. */
const RATE = 100;
/** Seconds of history a tempo is drawn from. */
const WINDOW_S = 12;
const SIZE = RATE * WINDOW_S;

const MIN_BPM = 60;
const MAX_BPM = 180;
/** The tempo the half/double question leans towards. */
const PREFERRED_BPM = 118;

/** Below this the line does not repeat enough to call it a tempo. */
const MIN_LIKENESS = 0.12;

/** The least onset, summed over the window, worth looking for a tempo in. */
const MIN_ONSET = 20;

/** Frames further apart than this, on average, are too few to hear a tempo in. */
const MAX_GAP_MS = 110;

/** Milliseconds between estimates. */
const ESTIMATE_EVERY = 500;
/** Estimates kept to judge agreement — four seconds' worth. */
const RECENT = 8;
/** How close two estimates must be to count as the same tempo. */
const AGREE = 0.03;
/** Estimates out of RECENT that must agree before a tempo is reported. */
const TO_LOCK = 6;
/** Milliseconds a lock survives with nothing confirming it. */
const HOLD_MS = 30000;
/**
 * How far the analysed onset trails the sound itself, in milliseconds: half
 * the analyser's window, roughly. The grid is moved earlier by this much so
 * the visuals land on the beat rather than just behind it.
 */
const LATENCY_MS = 25;

export interface HeardTempo {
  bpm: number;
  /** When a beat fell, in the same clock `push` was given. */
  anchor: number;
  /** 0–1: how much the recent estimates agree. */
  confidence: number;
}

export class BeatTracker {
  private readonly line = new Float32Array(SIZE);
  /** The same span in plain loudness, for placing the beat. */
  private readonly weight = new Float32Array(SIZE);
  private lastWeight = 0;
  /** Time, in ms, of the newest sample on the line. */
  private head = 0;
  private started = false;
  private lastValue = 0;
  private lastEstimate = 0;
  private lastPush = 0;
  /** Milliseconds between frames, eased. */
  private gap = 16;
  private recent: number[] = [];

  private period = 0;
  private anchor = 0;
  private lockedAt = 0;
  private confirmedAt = 0;
  private confidence = 0;
  /** How alike the onset line was to itself at the best lag, last estimate. */
  likeness = 0;
  onsetEnergy = 0;
  /** Estimates in a row that put the beat far from where the grid has it. */
  private offGrid = 0;

  /**
   * One analysed frame: when, how much onset it carried (in decibels risen),
   * and how hard it hit (in plain loudness risen).
   */
  push(now: number, onset: number, punch = onset): void {
    const step = 1000 / RATE;
    if (!this.started || now - this.head > 2000 || now < this.head) {
      // A gap long enough to lose the thread: start the line again.
      this.line.fill(0);
      this.weight.fill(0);
      this.head = now;
      this.started = true;
      this.lastValue = onset;
      this.lastWeight = punch;
      this.recent = [];
      this.lastPush = now;
      this.gap = 16;
      return;
    }
    // How far apart the frames are coming, eased: a machine that is
    // struggling analyses too rarely to hear a rhythm in.
    this.gap += (now - this.lastPush - this.gap) * 0.05;
    this.lastPush = now;

    // Fill every even sample between the last frame and this one.
    const from = this.head;
    const span = now - from;
    let filled = 0;
    while (this.head + step <= now) {
      this.head += step;
      const t = span > 0 ? (this.head - from) / span : 1;
      this.line.copyWithin(0, 1);
      this.line[SIZE - 1] = this.lastValue + (onset - this.lastValue) * t;
      this.weight.copyWithin(0, 1);
      this.weight[SIZE - 1] = this.lastWeight + (punch - this.lastWeight) * t;
      filled++;
    }
    if (filled) {
      this.lastValue = onset;
      this.lastWeight = punch;
    } else {
      this.lastValue = Math.max(this.lastValue, onset);
      this.lastWeight = Math.max(this.lastWeight, punch);
    }

    if (now - this.lastEstimate >= ESTIMATE_EVERY) {
      this.lastEstimate = now;
      this.estimate(now);
    }
  }

  /** The tempo as heard, or null while there is not one worth trusting. */
  read(now: number): HeardTempo | null {
    if (!this.period) return null;
    if (now - this.confirmedAt > HOLD_MS) {
      this.period = 0;
      return null;
    }
    return { bpm: 60000 / this.period, anchor: this.anchor, confidence: this.confidence };
  }

  reset(): void {
    this.started = false;
    this.period = 0;
    this.recent = [];
  }

  /**
   * A line with its slow level taken out, so a loud passage does not score as
   * rhythm: each sample against the half-second around it, rises only.
   */
  private flatten(line: Float32Array): { env: Float32Array; energy: number } {
    const env = new Float32Array(SIZE);
    const half = RATE / 4;
    let running = 0;
    for (let i = 0; i < half && i < SIZE; i++) running += line[i];
    let count = Math.min(half, SIZE);
    let energy = 0;
    for (let i = 0; i < SIZE; i++) {
      const add = i + half;
      const drop = i - half - 1;
      if (add < SIZE) { running += line[add]; count++; }
      if (drop >= 0) { running -= line[drop]; count--; }
      const v = line[i] - running / count;
      env[i] = v > 0 ? v : 0;
      energy += env[i] * env[i];
    }
    return { env, energy };
  }

  private estimate(now: number): void {
    /*
     * Too few frames to trust. Onsets a tenth of a second apart or more land
     * between the analysed moments as often as on them, and what repeats in
     * the line is then the frame rate as much as the music — which produced
     * a steady, confident, wrong tempo. Better to say nothing: the lock
     * already held coasts on its own period, and a new one waits.
     */
    if (this.gap > MAX_GAP_MS) {
      this.note(0, now);
      return;
    }
    const { env, energy } = this.flatten(this.line);
    this.onsetEnergy = energy;
    // Under this the line is the flicker of a held note, not onsets.
    if (energy < MIN_ONSET) {
      this.note(0, now);
      return;
    }

    // Which lag does the line repeat at?
    const minLag = Math.floor((60 / MAX_BPM) * RATE);
    const maxLag = Math.ceil((60 / MIN_BPM) * RATE);
    const acf = new Float32Array(maxLag * 2 + 2);
    for (let lag = minLag; lag < acf.length; lag++) {
      let sum = 0;
      for (let i = lag; i < SIZE; i++) sum += env[i] * env[i - lag];
      acf[lag] = sum / (SIZE - lag);
    }
    // A true beat period also repeats at twice itself; the gap between a kick
    // and a hat does not. That separates a beat from what sits between beats.
    const score = (lag: number) => acf[lag] + 0.5 * (acf[lag * 2] ?? 0);
    let best = 0;
    let bestScore = 0;
    let total = 0;
    for (let lag = minLag; lag <= maxLag; lag++) {
      const sc = score(lag);
      total += sc;
      if (sc > bestScore) { bestScore = sc; best = lag; }
    }
    const average = total / (maxLag - minLag + 1);
    /*
     * How alike the line is to itself a beat later, 0 to 1. One loud moment —
     * a track starting, a door — repeats at no lag at all and scores near
     * zero here, however far its best lag stands above the others.
     */
    let self = 0;
    for (let i = 0; i < SIZE; i++) self += env[i] * env[i];
    this.likeness = best ? acf[best] / (self / SIZE) : 0;
    if (!best || bestScore < average * 1.6 || this.likeness < MIN_LIKENESS) {
      this.note(0, now);
      return;
    }

    // Half and double time: of those nearly as good, the one a dancer would
    // count — nearest the middle of the range.
    const octaves = (lag: number) => Math.abs(Math.log2((60 * RATE) / lag / PREFERRED_BPM));
    let chosen = best;
    for (const around of [best / 2, best * 2]) {
      // The peak near the half or the double, not the exact arithmetic lag.
      let peak = 0;
      let peakScore = 0;
      for (let lag = Math.round(around) - 2; lag <= Math.round(around) + 2; lag++) {
        if (lag < minLag || lag > maxLag) continue;
        if (score(lag) > peakScore) { peakScore = score(lag); peak = lag; }
      }
      if (peak && peakScore >= bestScore * 0.55 && octaves(peak) < octaves(chosen)) chosen = peak;
    }

    // Sharpen: the spacing of a comb that collects the most onset.
    const sampler = (line: Float32Array) => (x: number) => {
      if (x < 0 || x >= SIZE - 1) return 0;
      const i = Math.floor(x);
      return line[i] + (line[i + 1] - line[i]) * (x - i);
    };
    const comb = (sample: (x: number) => number, p: number, o: number) => {
      let sum = 0;
      let teeth = 0;
      for (let x = SIZE - 1 - o; x >= 0; x -= p) { sum += sample(x); teeth++; }
      return sum / teeth;
    };
    const onRise = sampler(env);
    let period = chosen;
    let offset = 0;
    let combBest = -1;
    for (let p = chosen * 0.97; p <= chosen * 1.03; p += chosen * 0.001) {
      for (let o = 0; o < p; o += 1) {
        const sc = comb(onRise, p, o);
        if (sc > combBest) { combBest = sc; period = p; offset = o; }
      }
    }

    // And where the beat falls: the offset that collects the most weight.
    const heavy = this.flatten(this.weight);
    if (heavy.energy > 0) {
      const onWeight = sampler(heavy.env);
      let weightBest = -1;
      for (let o = 0; o < period; o += 0.5) {
        const sc = comb(onWeight, period, o);
        if (sc > weightBest) { weightBest = sc; offset = o; }
      }
    }

    const periodMs = (period / RATE) * 1000;
    const beatAt = this.head - (offset / RATE) * 1000 - LATENCY_MS;
    this.note(periodMs, now, beatAt);
  }

  /** Takes one estimate (0 for "nothing heard") and decides what to report. */
  private note(periodMs: number, now: number, beatAt = 0): void {
    this.recent.push(periodMs);
    if (this.recent.length > RECENT) this.recent.shift();
    if (!periodMs) return;

    const agreeing = this.recent.filter((p) => p && Math.abs(p - periodMs) / periodMs < AGREE);
    const confidence = agreeing.length / RECENT;

    if (!this.period) {
      if (agreeing.length < TO_LOCK) return;
      this.period = median(agreeing);
      this.anchor = beatAt;
      this.lockedAt = now;
      this.confirmedAt = now;
      this.confidence = confidence;
      this.offGrid = 0;
      return;
    }

    const sameTempo = Math.abs(periodMs - this.period) / this.period < AGREE;
    if (sameTempo) {
      this.confirmedAt = now;
      this.confidence = confidence;
      // Ease the period, and pull the grid towards where the beat was heard
      // rather than jumping to it: one odd estimate should not move the beat.
      this.period += (median(agreeing) - this.period) * 0.2;
      // Bring the anchor up to the present first, so the correction is small.
      const beats = Math.round((beatAt - this.anchor) / this.period);
      const expected = this.anchor + beats * this.period;
      const error = beatAt - expected;
      if (Math.abs(error) > this.period * 0.2) {
        // Far off: only believed once it keeps saying so.
        this.offGrid++;
        if (this.offGrid >= 3) { this.anchor = beatAt; this.offGrid = 0; }
        else this.anchor = expected;
      } else {
        this.offGrid = 0;
        this.anchor = expected + error * 0.3;
      }
    } else if (agreeing.length >= TO_LOCK) {
      // The music has changed tempo and the new one has held: follow it.
      this.period = median(agreeing);
      this.anchor = beatAt;
      this.confirmedAt = now;
      this.confidence = confidence;
      this.offGrid = 0;
    }
  }
}

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = sorted.length >> 1;
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
