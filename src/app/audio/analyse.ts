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
  flux: number[];
  lastBeat: number;
  /** Decaying onset strength, so a visual has something continuous to ride. */
  onset: number;
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
}

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
  if (state.previous) {
    for (let i = 0; i < current.length; i++) {
      const rise = current[i] - (state.previous[i] ?? 0);
      if (rise > 0) flux += rise;
    }
    flux /= current.length;
  }
  state.previous = current;

  state.flux.push(flux);
  if (state.flux.length > FLUX_HISTORY) state.flux.shift();

  // A threshold that follows the music: the recent average plus a margin from
  // how much the flux has been varying. Loud busy music raises its own bar.
  const average = state.flux.reduce((a, b) => a + b, 0) / Math.max(1, state.flux.length);
  let variance = 0;
  for (const f of state.flux) variance += (f - average) ** 2;
  const spread = Math.sqrt(variance / Math.max(1, state.flux.length));
  const margin = FLUX_K * (1.4 - sensitivity * 0.8);
  const threshold = average + spread * margin;

  const enoughHistory = state.flux.length >= 20;
  const beat =
    enoughHistory &&
    flux > threshold &&
    flux > 0.35 &&
    now - state.lastBeat > REFRACTORY_MS;
  if (beat) state.lastBeat = now;

  // Continuous onset: jumps on a beat, falls away over about a third of a
  // second, so something can ride the pulse without flickering on a boolean.
  const strength = threshold > 0 ? Math.min(1, (flux - threshold) / (threshold + 0.6)) : 0;
  state.onset = Math.max(state.onset * 0.9, beat ? Math.max(0.35, strength) : 0);

  const gain = 0.55 + sensitivity * 0.9;
  const lift = (v: number) => Math.min(1, v * gain);

  return {
    bass: lift(levels.bass),
    lowMid: lift(levels.lowMid),
    mid: lift(levels.mid),
    high: lift(levels.high),
    overall: lift(overall),
    beat,
    beatIntensity: beat ? Math.min(1, Math.max(0.3, strength)) : 0,
    onset: state.onset,
  };
}
