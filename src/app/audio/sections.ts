/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE SHAPE OF THE MUSIC
 * ═══════════════════════════════════════════════════════════════════════════
 * The bands and the beat say what the music is doing this instant. This says
 * where it is in its arc — things a dancer feels and a level meter cannot
 * show:
 *
 *   HITS      the kick, the snare or clap, and the hats, each on its own, so
 *             a visual can give them different jobs
 *   ENERGY    how full the music is over the last few seconds, against the
 *             last minute: a breakdown reads low, the peak of a track high
 *   BUILD     rises while the kick is out and something is climbing — a
 *             riser, a snare roll — the held breath before a drop
 *   DROP      jumps when the bass comes back after being away, and falls
 *             off over a second or two
 *   BRIGHT    where the weight of the sound sits, dark to bright
 *
 * Everything is measured against the music's own recent past, never against a
 * fixed loudness, so it means the same in a quiet room and a loud one.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** How long a single hit takes to arrive in full, in ms. */
const GATHER_MS = 40;

/** One kind of hit: its own onset detector over one slice of the spectrum. */
export class Hits {
  private history: number[] = [];
  private last = 0;
  pulse = 0;

  constructor(
    /** Nothing counts as a second hit within this of the last, in ms. */
    private readonly refractory: number,
    /** How long the pulse takes to fall away, in seconds. */
    private readonly decay: number,
  ) {}

  private threshold = 0;
  private recent: { at: number; rise: number; heard: number }[] = [];
  private peak = 0;
  private flux = 0;

  /**
   * One frame of this band's rise. Returns how far it stands above its own
   * recent normal — above 1 is a candidate hit — for `settle` to compare.
   *
   * `flux` is the rise in plain loudness, not decibels. In decibels a soft
   * bass note coming out of silence rises as far as a kick does, and being
   * first by an eighth it was taken for the kick and shut the real one out.
   * `audible` is the same rise in decibels, used only to tell a hit from the
   * flicker of an empty band.
   */
  measure(rise: number, heard: number, now: number, sensitivity: number): number {
    /*
     * A hit arrives over a few frames, not one — the analyser's window slides
     * onto it — and how it splits between them is luck. Judged a frame at a
     * time, an even split looked like two half-hits and neither counted. So
     * what is judged is the rise over the last few hundredths of a second.
     */
    this.recent.push({ at: now, rise, heard });
    while (this.recent.length && now - this.recent[0].at > GATHER_MS) this.recent.shift();
    let flux = 0;
    let audible = 0;
    for (const r of this.recent) { flux += r.rise; audible += r.heard; }
    this.history.push(flux);
    if (this.history.length > 90) this.history.shift();
    const n = this.history.length;
    let average = 0;
    for (const f of this.history) average += f;
    average /= n;
    let variance = 0;
    for (const f of this.history) variance += (f - average) ** 2;
    const spread = Math.sqrt(variance / n);
    this.threshold = average + spread * 1.9 * (1.5 - sensitivity);
    this.flux = flux;

    /*
     * And it has to be in the same league as this band's own recent hardest
     * hits. A band hears its neighbours' drums faintly — the hats' band gets
     * the tail of every snare — and those echoes clear the threshold above
     * easily; what they cannot do is match the band's real instrument.
     */
    this.peak = Math.max(flux, this.peak * 0.9985);

    const candidate =
      n >= 20 &&
      flux > this.threshold &&
      flux > this.peak * 0.5 &&
      audible > 1.2 * (1.3 - sensitivity * 0.8) &&
      now - this.last > this.refractory;
    return candidate ? flux / Math.max(1e-9, this.threshold) : 0;
  }

  /** Takes or lets go of the candidate, and moves the pulse on a frame. */
  commit(hit: boolean, now: number, dt: number): void {
    if (hit) this.last = now;
    const strength = this.peak > 0 ? Math.min(1, this.flux / this.peak) : 0;
    this.pulse = Math.max(this.pulse * Math.exp(-dt / this.decay), hit ? Math.max(0.4, strength) : 0);
  }
}

/**
 * One frame for the three kinds of hit together.
 *
 * A drum is not tidy: a kick has a click that reaches the snare's band, and a
 * snare's noise reaches the hats'. Heard separately, every kick would also
 * count as a snare. So when more than one band jumps in the same frame, the
 * hit belongs to the band that jumped furthest above its own normal, and to
 * any other that came close — a kick and a clap landing together are both
 * real — but not to one that merely caught the edge of it.
 */
export function settleHits(
  bands: { hits: Hits; flux: number; audible: number }[],
  now: number,
  dt: number,
  sensitivity: number,
): void {
  const ratios = bands.map((b) => b.hits.measure(b.flux, b.audible, now, sensitivity));
  const top = Math.max(...ratios);
  bands.forEach((b, i) => b.hits.commit(ratios[i] > 0 && ratios[i] >= top * 0.7, now, dt));
}

/** A level's loudest and quietest over about the last minute. */
class Range {
  ceiling = -100;
  floor = 0;
  private seen = false;

  constructor(private readonly minSpan: number) {}

  /** Moves the range and returns where `value` sits in it, 0–1. */
  place(value: number, dt: number): number {
    if (!this.seen) {
      this.seen = true;
      this.ceiling = value;
      this.floor = value;
    }
    const ease = (tau: number) => 1 - Math.exp(-dt / tau);
    this.ceiling += (value - this.ceiling) * ease(value > this.ceiling ? 0.5 : 60);
    this.floor += (value - this.floor) * ease(value < this.floor ? 2 : 60);
    // Steady loud music pulls the two together; that is "full", not "undefined".
    const floor = Math.min(this.floor, this.ceiling - this.minSpan);
    return Math.min(1, Math.max(0, (value - floor) / (this.ceiling - floor)));
  }
}

export interface SectionState {
  overall: Range;
  bass: Range;
  overallSlow: number;
  bassMid: number;
  highFast: number;
  highSlow: number;
  /** Seconds the bass has been away while music carried on. */
  out: number;
  /** Times of recent onsets, for how dense the hits are. */
  onsets: number[];
  energy: number;
  build: number;
  drop: number;
  bright: number;
  /** Seconds listened to so far. */
  heard: number;
}

export function createSections(): SectionState {
  return {
    overall: new Range(14),
    bass: new Range(14),
    overallSlow: 0,
    bassMid: 0,
    highFast: 0,
    highSlow: 0,
    out: 0,
    onsets: [],
    energy: 0,
    build: 0,
    drop: 0,
    bright: 0.5,
    heard: 0,
  };
}

export interface SectionInput {
  /** Loudness of everything and of the bass alone, in decibels. */
  overall: number;
  bass: number;
  /** The top of the spectrum, as a mean on the analyser's byte scale. */
  high: number;
  /** Spectral centroid in hertz, or 0 when there is nothing to weigh. */
  centroid: number;
  /** Whether an onset landed this frame. */
  onset: boolean;
}

/** Decibels below which nothing is counted as music. */
const QUIET_DB = -75;
/** Seconds of listening before the arc is judged at all. */
const WARM_UP = 2.5;

/** One frame; mutates the state and leaves the readings on it. */
export function trackSections(s: SectionState, input: SectionInput, now: number, dt: number): void {
  const ease = (tau: number) => 1 - Math.exp(-dt / tau);
  /*
   * Loudness is averaged as power and only then read in decibels. Averaging
   * the decibels themselves puts a kick drum — a tall spike with silence
   * between — some fifteen below where it sounds, and far below its own peak,
   * which read as "the bass has gone" all the way through a steady groove.
   */
  const power = (db: number) => Math.pow(10, db / 10);
  const db = (p: number) => (p > 1e-10 ? 10 * Math.log10(p) : -100);
  s.overallSlow += (power(input.overall) - s.overallSlow) * ease(2);
  s.bassMid += (power(input.bass) - s.bassMid) * ease(0.5);
  s.highFast += (input.high - s.highFast) * ease(1);
  s.drop *= Math.exp(-dt / 1.2);

  // The first seconds only settle the averages: a range seeded from whatever
  // instant the microphone opened on would be wrong for the next minute.
  s.heard += dt;
  if (s.heard < WARM_UP) {
    s.highSlow = s.highFast;
    s.energy = 0.5;
    return;
  }
  s.highSlow += (input.high - s.highSlow) * ease(8);

  // Below this the microphone is hearing the room, not music.
  const audible = db(s.overallSlow) > QUIET_DB;
  s.energy = audible ? s.overall.place(db(s.overallSlow), dt) : 0;
  const presence = s.bass.place(db(s.bassMid), dt);
  const hadBass = s.bass.ceiling > QUIET_DB;

  if (input.onset) s.onsets.push(now);
  while (s.onsets.length && now - s.onsets[0] > 2000) s.onsets.shift();

  let dropped = false;
  if (hadBass && presence < 0.4) {
    s.out = Math.min(30, s.out + dt);
  } else if (presence > 0.65) {
    if (s.out >= 2) {
      s.drop = Math.max(s.drop, Math.min(1, 0.55 + s.out / 14));
      dropped = true;
    }
    s.out = 0;
  }

  // A build is the bass being away while something climbs: the top of the
  // spectrum rising against its own recent level, or the hits getting denser.
  const riser = Math.min(1, Math.max(0, (s.highFast - s.highSlow) / 18));
  const roll = Math.min(1, Math.max(0, (s.onsets.length / 2 - 3) / 5));
  const away = Math.min(1, s.out / 6);
  const target = audible && s.out > 0 ? away * away * (3 - 2 * away) * Math.max(0.1, riser, roll) : 0;
  s.build += (target - s.build) * ease(dropped || target < s.build ? 0.25 : 0.7);

  if (input.centroid > 0) {
    // 300 Hz reads as dark, 5 kHz as bright, evenly by octave between.
    const place = Math.min(1, Math.max(0, Math.log2(input.centroid / 300) / Math.log2(5000 / 300)));
    s.bright += (place - s.bright) * ease(1.5);
  }
}
