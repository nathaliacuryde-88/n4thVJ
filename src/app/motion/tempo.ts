import { useSyncExternalStore } from 'react';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * TAP TEMPO
 * ═══════════════════════════════════════════════════════════════════════════
 * She taps B on the beat; from four taps on, the tool knows the tempo and
 * where the beat falls, and keeps it.
 *
 * While a tempo is set, the visuals' kick comes from it rather than from the
 * detector: every beat lands exactly on the grid — no doubled kicks on a
 * busy hi-hat, no missed ones in a breakdown — and it keeps going with the
 * microphone off, or through a quiet passage. The levels (bass, mids, highs)
 * still come from the music. Auto-pilot counts its bars on it too.
 *
 * Taps more than two seconds apart start a new count; a tap on its own in
 * time with the running tempo re-anchors the beat to it, so a drifting grid
 * is pulled back by one tap on the one. Shift+B clears it.
 *
 * HEARD TEMPO. With nothing tapped, the tempo the analyser hears in the music
 * (audio/beatTracker) sets the same grid, once it is sure of it. A tap always
 * wins over it — she knows where the one is and the tracker can only guess
 * between half and double time. Shift+B with nothing tapped turns the
 * listening off, and on again.
 * ═══════════════════════════════════════════════════════════════════════════
 */

const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

let taps: number[] = [];
let bpm: number | null = null;
/** When a beat fell, in performance.now() milliseconds. */
let anchor = 0;
/** The last whole beat handed out, so each beat is handed out once. */
let lastBeat = -1;

/** The tempo as heard in the music, used while nothing is tapped. */
let heardBpm: number | null = null;
let heardAnchor = 0;
let listening = (() => {
  try { return localStorage.getItem('vj-tempo-listen') !== 'off'; } catch { return true; }
})();

export type TempoSource = 'tap' | 'heard' | null;
interface TempoSnapshot { bpm: number | null; source: TempoSource; listening: boolean }
let snapshot: TempoSnapshot = { bpm: null, source: null, listening };

/** The tempo in force: hers if she tapped one, the music's otherwise. */
function inForce(): { bpm: number; anchor: number; source: 'tap' | 'heard' } | null {
  if (bpm !== null) return { bpm, anchor, source: 'tap' };
  if (listening && heardBpm !== null) return { bpm: heardBpm, anchor: heardAnchor, source: 'heard' };
  return null;
}

function publish() {
  const now = inForce();
  // The heard tempo wavers by fractions; only a change she could read is news.
  const shown = now ? Math.round(now.bpm * (now.source === 'tap' ? 10 : 1)) / (now.source === 'tap' ? 10 : 1) : null;
  if (shown === snapshot.bpm && (now?.source ?? null) === snapshot.source && listening === snapshot.listening) return;
  snapshot = { bpm: shown, source: now?.source ?? null, listening };
  emit();
}

/**
 * Called by the analyser with what the tracker hears, or null when it hears
 * no tempo. The grid moves with it only while nothing is tapped.
 */
export function hearTempo(heard: { bpm: number; anchor: number } | null) {
  const was = heardBpm;
  heardBpm = heard ? heard.bpm : null;
  heardAnchor = heard ? heard.anchor : 0;
  // A grid appearing where there was none starts handing out beats from now.
  if (bpm === null && (was === null) !== (heardBpm === null)) lastBeat = -1;
  publish();
}

/** Turns listening for the tempo on or off; returns the new state. */
export function toggleListening(): boolean {
  listening = !listening;
  try { localStorage.setItem('vj-tempo-listen', listening ? 'on' : 'off'); } catch { /* private window */ }
  lastBeat = -1;
  publish();
  return listening;
}

export function tempoSource(): TempoSource {
  return inForce()?.source ?? null;
}

/** One tap on the beat. */
export function tap(now = performance.now()) {
  if (taps.length && now - taps[taps.length - 1] > 2000) taps = [];
  taps.push(now);
  if (taps.length > 8) taps.shift();
  if (taps.length >= 4) {
    const gaps = taps.slice(1).map((t, i) => t - taps[i]);
    // The median, so one fumbled tap does not throw the tempo.
    const sorted = [...gaps].sort((a, b) => a - b);
    const period = sorted[Math.floor(sorted.length / 2)];
    bpm = Math.round((60000 / period) * 10) / 10;
  }
  anchor = now;
  // The tap itself is a beat: handed out on the next frame.
  lastBeat = -1;
  publish();
}

/** Forgets the tempo; the detector's kicks drive the visuals again. */
export function clearTempo() {
  taps = [];
  bpm = null;
  lastBeat = -1;
  publish();
}

/** Nudges the tempo a little, for a grid that is drifting. */
export function nudgeTempo(delta: number) {
  if (bpm === null) return;
  bpm = Math.max(40, Math.min(240, Math.round((bpm + delta) * 10) / 10));
  publish();
}

export function currentBpm(): number | null {
  return inForce()?.bpm ?? null;
}

/** Whether she has tapped a tempo of her own. */
export function hasTapped(): boolean {
  return bpm !== null;
}

/** How many whole beats since the anchor, and how far into the current one (0–1). */
export function beatPosition(now = performance.now()): { beat: number; phase: number } | null {
  const tempo = inForce();
  if (!tempo) return null;
  const period = 60000 / tempo.bpm;
  const x = (now - tempo.anchor) / period;
  const beat = Math.floor(x);
  return { beat, phase: x - beat };
}

/**
 * Called once a frame by the drawing loop: whether a beat landed since the
 * last call, and a pulse that jumps on it and falls away.
 */
let pulse = 0;
let lastTick = 0;
let lastPhase = 0;
let lastBeatAt = 0;
export function tickTempo(now = performance.now()): { beat: boolean; pulse: number } | null {
  const at = beatPosition(now);
  const dt = lastTick ? Math.min(0.1, (now - lastTick) / 1000) : 0;
  lastTick = now;
  if (!at) return null;
  /*
   * The heard grid is corrected as the music goes, and its anchor moves each
   * time, so the beat count is not a steady ladder the way a tapped one is.
   * A beat is the phase wrapping round instead — and never two within a
   * third of a beat, so a correction cannot hand the same beat out twice.
   */
  let beat: boolean;
  if (inForce()!.source === 'heard') {
    const period = 60000 / inForce()!.bpm;
    beat = (lastBeat === -1 || at.phase < lastPhase - 0.5) && now - lastBeatAt > period * 0.34;
    if (beat) { lastBeat = at.beat; lastBeatAt = now; }
    lastPhase = at.phase;
  } else {
    beat = at.beat > lastBeat;
    if (beat) { lastBeat = at.beat; lastBeatAt = now; }
  }
  pulse = beat ? 1 : pulse * Math.exp(-dt / 0.12);
  return { beat, pulse };
}

/** The tempo as React state. */
export function useTempo(): TempoSnapshot {
  return useSyncExternalStore(
    (onChange) => {
      listeners.add(onChange);
      return () => { listeners.delete(onChange); };
    },
    () => snapshot,
  );
}
