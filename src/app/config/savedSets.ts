import type { Look, VisualPattern } from '../App';
import type { Layer } from './LayerConfig';
import type { AllParamValues } from '../params/types';
import { currentPattern } from './RendererCategories';

/**
 * Sets she has saved by name: the visuals and their key order, and for each
 * of them everything she dialled in — its sliders, its effects, its colours —
 * plus the stack she had up. Loading one puts all of it back, so a set that
 * worked in rehearsal is one click away on the night.
 */
export interface SavedSet {
  name: string;
  savedAt: number;
  set: VisualPattern[];
  params: AllParamValues;
  fx: AllParamValues;
  looks: Record<string, Look>;
  stack: { layers: Layer[]; selected: number } | null;
}

const KEY = 'vj-saved-sets';

export function loadSavedSets(): SavedSet[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((s): s is SavedSet => typeof s === 'object' && s !== null && typeof s.name === 'string' && Array.isArray(s.set))
      .map((s) => ({
        ...s,
        // Anything renamed since it was saved is called by its new name;
        // anything removed drops out quietly.
        set: s.set.map(currentPattern).filter((p): p is VisualPattern => p !== null)
          .filter((p, i, a) => a.indexOf(p) === i),
        params: s.params ?? {},
        fx: s.fx ?? {},
        looks: s.looks ?? {},
        stack: s.stack
          ? {
              ...s.stack,
              layers: s.stack.layers
                .map((l) => ({ ...l, pattern: currentPattern(l.pattern) }))
                .filter((l): l is Layer => l.pattern !== null),
            }
          : null,
      }));
  } catch {
    return [];
  }
}

export function storeSavedSets(sets: SavedSet[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(sets));
  } catch {
    // Storage full or blocked: the save lasts this session only.
  }
}

/** Only what belongs to the set's own visuals. */
export function pick<T>(all: Record<string, T>, set: VisualPattern[]): Record<string, T> {
  const out: Record<string, T> = {};
  for (const p of set) if (all[p] !== undefined) out[p] = all[p];
  return out;
}
