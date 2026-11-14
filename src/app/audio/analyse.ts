/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LISTENING TO THE MUSIC
 * ═══════════════════════════════════════════════════════════════════════════
 * Turning a spectrum into numbers a visual can move on, for whatever is
 * playing rather than for one genre.
 *
 * Three things decide whether this feels like anything on screen.
 *
 * WHERE THE BANDS ARE. They are cut in hertz, worked out from the sample rate,
 * rather than as fractions of the bin count. A fraction sounds harmless and is
 * not: at 44.1 kHz the first twelve per cent of the bins reach 2.6 kHz, so a
 * "bass" band taken that way is averaging the vocals and most of the snare
 * along with the kick, and a "high" band taken from forty per cent up starts
 * at 8.8 kHz, where most music has nothing but air. One band mushy, the other
 * flat.
 *
 * HOW LOUD IS LOUD. A club PA into a laptop microphone and a phone speaker
 * across the room differ by tens of decibels, and so do a mastered techno
 * track and a live jazz trio. Anything with a fixed threshold works in one
 * room and does nothing in the next. So each band carries its own slow
 * envelope of recent quiet and recent loud, and reports where it sits between
 * them. The output uses its full range in any room, at any volume, with no
 * gain to set by hand.
 *
 * WHAT COUNTS AS A BEAT. Bass energy alone is a techno detector: it finds a
 * four-to-the-floor kick and little else, and it misses brushed drums, an
 * upright bass, a guitar attack, anything where the transient is not in the
 * low end. This uses spectral flux — how much the whole spectrum jumped since
 * the last frame, counting rises only — against a threshold that follows the
 * recent flux rather than a constant. That is an onset detector, and onsets
 * are what a body hears as the beat whatever the instrument is.
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { Hits, SectionState, createSections, settleHits, trackSections } from './sections';

/** Band edges in hertz. Musical, not arithmetic. */
const BANDS = {
  /** Kick, sub, the floor of the room. */
  bass: [20, 160],
  /** Bassline, toms, the body of a voice. */
  lowMid: [160, 800],
  /** Where melody and most of a mix actually lives. */
  mid: [800, 4000],
  /** Hats, air, consonants. Above 12k is mostly nothing. */
  high: [4000, 12000],
} as const;

export type BandName = keyof typeof BANDS;
export const BAND_NAMES = Object.keys(BANDS) as BandName[];

/** How fast the quiet and loud envelopes follow, per frame at 60fps. */
const FLOOR_RISE = 0.002;
const FLOOR_FALL = 0.04;
const CEIL_RISE = 0.25;
const CEIL_FALL = 0.0016;
/** Below this gap the band is treated as silent rather than amplified noise. */
const MIN_SPAN = 6;

/** Frames of flux history the beat threshold is drawn from — about 1.5s. */
const FLUX_HISTORY = 90;
/**
 * Nothing can be a beat within this of the last one.
 *
 * 100ms let a single kick register twice — one hit on the attack and another
 * on its decay — which read as roughly double the beats actually played. At
 * 170ms (350 BPM) a drum hit cannot ring twice, and nothing musical is played
 * faster than that as a pulse.
 */
const REFRACTORY_MS = 170;
/** How far above the recent spread a flux peak has to stand. */
const FLUX_K = 1.9;

interface Envelope {
  floor: number;
  ceiling: number;
}

export interface AnalyserState {
  envelopes: Record<BandName, Envelope>;
  overall: Envelope;
  previous: Float32Array | null;
  /** The spectrum above where `previous` stops, for the hats. */
  above?: Uint8Array;
  flux: number[];
  lastBeat: number;
  /** Decaying onset strength, so a visual has something continuous to ride. */
  onset: number;
  /** The onset strength of the last frame, as the tempo tracker wants it. */
  rise: number;
  /** How hard the last frame hit, in plain loudness. */
  punch: number;
  lastNow: number;
  kick: Hits;
  snare: Hits;
  hat: Hits;
  sections: SectionState;
}

export function createState(): AnalyserState {
  const envelope = (): Envelope => ({ floor: 255, ceiling: 0 });
  return {
    envelopes: {
      bass: envelope(), lowMid: envelope(), mid: envelope(), high: envelope(),
    },
    overall: envelope(),
    previous: null,
    flux: [],
    lastBeat: 0,
    onset: 0,
    rise: 0,
    punch: 0,
    lastNow: 0,
    kick: new Hits(170, 0.16),
    snare: new Hits(170, 0.13),
    hat: new Hits(70, 0.06),
    sections: createSections(),
  };
}

export interface Reading {
  bass: number;
  lowMid: number;
  mid: number;
  high: number;
  overall: number;
  beat: boolean;
  beatIntensity: number;
  /** Onset strength, continuous and decaying. Beats without the on/off edge. */
  onset: number;
  /** The kick alone: jumps on it and falls away. */
  kick: number;
  /** The snare or clap alone. */
  snare: number;
  /** The hats alone: short and quick. */
  hat: number;
  /** How full the music is against its last minute. Low in a breakdown. */
  energy: number;
  /** Rises through a build-up, while the kick is out and something climbs. */
  build: number;
  /** Jumps when the bass comes back, and falls off over a second or two. */
  drop: number;
  /** Where the weight of the sound sits: 0 dark, 1 bright. */
  bright: number;
}

/**
 * The analyser's byte scale back as plain amplitude. A byte is decibels,
 * from -100 at 0 to -30 at 255, so equal steps are equal ratios.
 */
const LOUDNESS = new Float32Array(256);
for (let i = 0; i < 256; i++) LOUDNESS[i] = Math.pow(10, ((i / 255) * 70 - 100) / 20) * 1000;

/** The slices of the spectrum each kind of hit is listened for in, in hertz. */
const HIT_BANDS = { kick: [30, 150], snare: [1500, 5000], hat: [6000, 12000] } as const;

/**
 * Where `value` sits between the envelope's quiet and loud, after moving them.
 *
 * The floor rises slowly and falls quickly, the ceiling the other way round:
 * a sudden loud moment should count as loud immediately and stop counting as
 * loud only after the music has genuinely calmed down. The reverse — a fast
 * floor — would track the music so closely that everything read as average.
 */
function track(envelope: Envelope, value: number): number {
  envelope.floor += (value - envelope.floor) * (value > envelope.floor ? FLOOR_RISE : FLOOR_FALL);
  envelope.ceiling += (value - envelope.ceiling) * (value > envelope.ceiling ? CEIL_RISE : CEIL_FALL);
  const span = envelope.ceiling - envelope.floor;

  /*
   * A band that is not varying carries no rhythm, but it is not nothing
   * either: a held pad, a drone, a sustained chord. Returning zero for it
   * makes anything keyed to that band go dead in exactly the music that has
   * the least else going on. So below the span where a ratio means anything,
   * report how loud the band simply is instead.
   */
  if (span < MIN_SPAN) return Math.min(1, value / 190);
  return Math.min(1, Math.max(0, (value - envelope.floor) / span));
}

/** Mean of a bin range, guarding a range that rounds away to nothing. */
function mean(spectrum: Uint8Array, from: number, to: number): number {
  const start = Math.max(0, Math.min(spectrum.length - 1, from));
  const end = Math.max(start + 1, Math.min(spectrum.length, to));
  let sum = 0;
  for (let i = start; i < end; i++) sum += spectrum[i];
  return sum / (end - start);
}

/** How loud a bin range is in all, in decibels: power summed, not bytes averaged. */
function decibels(spectrum: Uint8Array, from: number, to: number): number {
  const start = Math.max(1, Math.min(spectrum.length - 1, from));
  const end = Math.max(start + 1, Math.min(spectrum.length, to));
  let power = 0;
  for (let i = start; i < end; i++) power += (LOUDNESS[spectrum[i]] / 1000) ** 2;
  return power > 0 ? Math.max(-100, 10 * Math.log10(power)) : -100;
}

/**
 * One frame.
 *
 * `sensitivity` is 0..1 and acts on the output, not the input: the envelopes
 * already handle how loud the room is, so this is how hard she wants the
 * visuals to move, which is a different question and hers to answer.
 */
export function analyse(
  spectrum: Uint8Array,
  sampleRate: number,
  state: AnalyserState,
  sensitivity: number,
  now: number,
): Reading {
  // Bin n covers n * (sampleRate / 2) / bins hertz.
  const perBin = sampleRate / 2 / spectrum.length;
  const bin = (hz: number) => Math.round(hz / perBin);

  const levels: Record<string, number> = {};
  for (const name of BAND_NAMES) {
    const [low, high] = BANDS[name];
    levels[name] = track(state.envelopes[name], mean(spectrum, bin(low), bin(high)));
  }
  const overall = track(state.overall, mean(spectrum, bin(20), bin(12000)));

  // ── onsets ───────────────────────────────────────────────────────────────
  // Only the top of the spectrum that carries musical information, and only
  // bins that got louder: a bin fading out is not the start of anything.
  const fluxTo = bin(10000);
  const current = new Float32Array(fluxTo);
  for (let i = 0; i < fluxTo && i < spectrum.length; i++) current[i] = spectrum[i];

  let flux = 0;
  // The same jump in plain loudness rather than decibels: there the heaviest
  // hit of the bar towers over the rest, which is what places the beat.
  let punch = 0;
  if (state.previous) {
    for (let i = 0; i < current.length; i++) {
      const before = state.previous[i] ?? 0;
      const rise = current[i] - before;
      if (rise > 0) {
        flux += rise;
        punch += LOUDNESS[current[i]] - LOUDNESS[before];
      }
    }
    flux /= current.length;
  }
  state.punch = punch;

  // The same rise, per kind of hit. The hats sit above where the main flux
  // stops, so they are read from the spectrum rather than from `current`.
  const dt = state.lastNow ? Math.min(0.1, Math.max(0.001, (now - state.lastNow) / 1000)) : 1 / 60;
  state.lastNow = now;
  const riseIn = (band: readonly [number, number]) => {
    const previous = state.previous;
    if (!previous) return { flux: 0, audible: 0 };
    const from = Math.max(1, bin(band[0]));
    const to = Math.min(spectrum.length, Math.max(from + 1, bin(band[1])));
    let loud = 0;
    let loudBefore = 0;
    let risen = 0;
    for (let i = from; i < to; i++) {
      const before = i < previous.length ? previous[i] : state.above?.[i - previous.length] ?? spectrum[i];
      loud += LOUDNESS[spectrum[i]];
      loudBefore += LOUDNESS[before];
      if (spectrum[i] > before) risen += spectrum[i] - before;
    }
    return { flux: Math.max(0, loud - loudBefore), audible: risen / (to - from) };
  };
  const kick = riseIn(HIT_BANDS.kick);
  settleHits(
    [
      { hits: state.kick, ...kick },
      { hits: state.snare, ...riseIn(HIT_BANDS.snare) },
      { hits: state.hat, ...riseIn(HIT_BANDS.hat) },
    ],
    now,
    dt,
    sensitivity,
  );
  // What the tempo is heard in: everything, with the low end counted twice,
  // since in most music that is where the pulse is stated most plainly.
  state.rise = flux + kick.audible * 0.5;

  state.previous = current;
  state.above = spectrum.slice(fluxTo);

  state.flux.push(flux);
  if (state.flux.length > FLUX_HISTORY) state.flux.shift();

  // A threshold that follows the music: the recent average plus a margin from
  // how much the flux has been varying. Loud busy music raises its own bar.
  const average = state.flux.reduce((a, b) => a + b, 0) / Math.max(1, state.flux.length);
  let variance = 0;
  for (const f of state.flux) variance += (f - average) ** 2;
  const spread = Math.sqrt(variance / Math.max(1, state.flux.length));
  const margin = FLUX_K * (1.5 - sensitivity * 1.0);
  const threshold = average + spread * margin;

  const enoughHistory = state.flux.length >= 20;
  const beat =
    enoughHistory &&
    flux > threshold &&
    flux > 0.35 * (1.3 - sensitivity * 0.8) &&
    now - state.lastBeat > REFRACTORY_MS;
  if (beat) state.lastBeat = now;

  // Continuous onset: jumps on a beat, falls away over about a third of a
  // second, so something can ride the pulse without flickering on a boolean.
  const strength = threshold > 0 ? Math.min(1, (flux - threshold) / (threshold + 0.6)) : 0;
  state.onset = Math.max(state.onset * 0.9, beat ? Math.max(0.35, strength) : 0);

  // ── the arc ──────────────────────────────────────────────────────────────
  let weight = 0;
  let weighted = 0;
  const centroidTo = Math.min(spectrum.length, bin(10000));
  for (let i = Math.max(1, bin(100)); i < centroidTo; i++) {
    const power = (spectrum[i] / 255) ** 2;
    weight += power;
    weighted += power * i * perBin;
  }
  trackSections(
    state.sections,
    {
      overall: decibels(spectrum, bin(20), bin(12000)),
      bass: decibels(spectrum, bin(30), bin(160)),
      high: mean(spectrum, bin(2000), bin(12000)),
      centroid: weight > 0.05 ? weighted / weight : 0,
      onset: beat,
    },
    now,
    dt,
  );

  /*
   * Gain is a curve, not just a multiplier. Turned up, it lifts the quiet
   * end far more than the loud — a soft passage, a sparse groove, a room
   * with the music low still moves things — while the loud end only reaches
   * the top sooner. Half way it is close to straight; at zero it calms
   * everything but the biggest moments.
   */
  const gain = 0.6 + sensitivity * 1.2;
  const curve = 1.5 - sensitivity;
  const lift = (v: number) => Math.min(1, gain * Math.pow(Math.max(0, v), curve));

  return {
    bass: lift(levels.bass),
    lowMid: lift(levels.lowMid),
    mid: lift(levels.mid),
    high: lift(levels.high),
    overall: lift(overall),
    beat,
    beatIntensity: beat ? Math.min(1, Math.max(0.3, strength)) : 0,
    onset: state.onset,
    kick: state.kick.pulse,
    snare: state.snare.pulse,
    hat: state.hat.pulse,
    energy: state.sections.energy,
    build: state.sections.build,
    drop: state.sections.drop,
    bright: state.sections.bright,
  };
}
