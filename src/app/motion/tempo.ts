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
let snapshot: { bpm: number | null } = { bpm: null };

function publish() {
  snapshot = { bpm };
  emit();
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
  publish();
}

/** Nudges the tempo a little, for a grid that is drifting. */
export function nudgeTempo(delta: number) {
  if (bpm === null) return;
  bpm = Math.max(40, Math.min(240, Math.round((bpm + delta) * 10) / 10));
  publish();
}

export function currentBpm(): number | null {
  return bpm;
}

/** How many whole beats since the anchor, and how far into the current one (0–1). */
export function beatPosition(now = performance.now()): { beat: number; phase: number } | null {
  if (bpm === null) return null;
  const period = 60000 / bpm;
  const x = (now - anchor) / period;
  const beat = Math.floor(x);
  return { beat, phase: x - beat };
}

/**
 * Called once a frame by the drawing loop: whether a beat landed since the
 * last call, and a pulse that jumps on it and falls away.
 */
let pulse = 0;
let lastTick = 0;
export function tickTempo(now = performance.now()): { beat: boolean; pulse: number } | null {
  const at = beatPosition(now);
  const dt = lastTick ? Math.min(0.1, (now - lastTick) / 1000) : 0;
  lastTick = now;
  if (!at) return null;
  const beat = at.beat > lastBeat;
  if (beat) lastBeat = at.beat;
  pulse = beat ? 1 : pulse * Math.exp(-dt / 0.12);
  return { beat, pulse };
}

/** The tempo as React state. */
export function useTempo(): { bpm: number | null } {
  return useSyncExternalStore(
    (onChange) => {
      listeners.add(onChange);
      return () => { listeners.delete(onChange); };
    },
    () => snapshot,
  );
}
