import type { Look, VisualPattern } from '../App';
import type { Layer } from './LayerConfig';
import type { AllParamValues } from '../params/types';
import { RENDERER_CATEGORIES } from './RendererCategories';

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
        // Anything renamed or removed since it was saved drops out quietly.
        set: s.set.filter((p) => p in RENDERER_CATEGORIES),
        params: s.params ?? {},
        fx: s.fx ?? {},
        looks: s.looks ?? {},
        stack: s.stack ?? null,
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
