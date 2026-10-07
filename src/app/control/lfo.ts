import { useSyncExternalStore } from 'react';
import { beatPosition } from '../motion/tempo';
import type { RendererParams } from '../params/registry';
import { getByPath, ParamValues } from '../params/types';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * MODULATION — LFOs
 * ═══════════════════════════════════════════════════════════════════════════
 * Any slider can be set moving on its own: a wave rides on top of where she
 * left it, so the slider stays put and the visual swings around it.
 *
 *   shape  sine, triangle, ramp, square, or drift (a smooth random wander)
 *   rate   in beats — one cycle every ¼ beat up to every 16 — locked to the
 *          tapped tempo when there is one, at 120 BPM when there is not
 *   depth  how far it swings, as a share of the slider's whole range
 *
 * Kept per visual (and separately for its effects), like everything else
 * about a visual, and remembered.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SHAPES = ['sine', 'triangle', 'ramp', 'square', 'drift'] as const;
export type Shape = (typeof SHAPES)[number];
export const SHAPE_LABEL: Record<Shape, string> = {
  sine: '∿', triangle: '⋀', ramp: '⟋', square: '⊓', drift: '≈',
};
export const RATES = [0.25, 0.5, 1, 2, 4, 8, 16];

export interface Lfo {
  shape: Shape;
  /** Beats per cycle. */
  beats: number;
  /** Share of the slider's range it swings, either side of where it sits: 0–1. */
  depth: number;
}

/** 'p' for a visual's own sliders, 'fx' for its effects. */
export type Scope = 'p' | 'fx';
type All = Record<string, Record<string, Lfo>>;

const KEY = 'vj-lfo';
let all: All = (() => {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) || '{}') as unknown;
    return parsed && typeof parsed === 'object' ? (parsed as All) : {};
  } catch {
    return {};
  }
})();
const listeners = new Set<() => void>();

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(all)); } catch { /* blocked */ }
  listeners.forEach((l) => l());
}

export function lfosFor(scope: Scope, pattern: string): Record<string, Lfo> | undefined {
  const mine = all[`${scope}:${pattern}`];
  return mine && Object.keys(mine).length ? mine : undefined;
}

export function setLfo(scope: Scope, pattern: string, path: string, lfo: Lfo | null) {
  const key = `${scope}:${pattern}`;
  const { [path]: _gone, ...rest } = all[key] ?? {};
  all = { ...all, [key]: lfo ? { ...rest, [path]: lfo } : rest };
  save();
}

/** Every LFO, as React state. */
export function useLfos(): All {
  return useSyncExternalStore(
    (onChange) => {
      listeners.add(onChange);
      return () => { listeners.delete(onChange); };
    },
    () => all,
  );
}

/** Where in the beat it is: the tapped grid if there is one, else 120 BPM on the wall clock. */
function beatsNow(now: number): number {
  const at = beatPosition(now);
  return at ? at.beat + at.phase : now / 500;
}

function hash(n: number): number {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/** The wave, -1 to 1, at a point in its cycle. */
function wave(shape: Shape, cycle: number): number {
  const f = cycle - Math.floor(cycle);
  switch (shape) {
    case 'sine': return Math.sin(f * Math.PI * 2);
    case 'triangle': return 1 - 4 * Math.abs(f - 0.5);
    case 'ramp': return f * 2 - 1;
    case 'square': return f < 0.5 ? 1 : -1;
    case 'drift': {
      // A new random height each cycle, eased into from the last.
      const i = Math.floor(cycle);
      const a = hash(i) * 2 - 1;
      const b = hash(i + 1) * 2 - 1;
      const s = f * f * (3 - 2 * f);
      return a + (b - a) * s;
    }
  }
}

/**
 * The values with their LFOs applied: each swung around where it sits, kept
 * inside its slider's range, whole-stepped sliders kept whole.
 */
export function modulate(
  values: ParamValues,
  entry: RendererParams | undefined,
  lfos: Record<string, Lfo>,
  now = performance.now(),
): ParamValues {
  if (!entry) return values;
  const beats = beatsNow(now);
  const out: ParamValues = { ...values };
  for (const group of entry.groups) {
    for (const spec of group.params) {
      const lfo = lfos[spec.path];
      if (!lfo || lfo.depth <= 0) continue;
      const base = (values[spec.path] ?? getByPath(entry.config, spec.path) ?? spec.min) as number;
      const swing = (spec.max - spec.min) * 0.5 * lfo.depth * wave(lfo.shape, beats / Math.max(0.0625, lfo.beats));
      let v = Math.min(spec.max, Math.max(spec.min, base + swing));
      if (spec.step >= 1) v = Math.round(v);
      out[spec.path] = v;
    }
  }
  return out;
}
