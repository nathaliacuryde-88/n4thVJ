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
/** The names of the ready-made sets already handed over, so a deleted one stays deleted. */
const BUILT_IN_KEY = 'vj-builtin-sets';

/**
 * Ready-made sets, for practice. Each is added to her saved sets once; from
 * then on it is hers to change, rename or delete.
 *
 * Listening Field — for the night with Carmen: an hour in five movements,
 * the visuals in the order the arc wants them (keys 1–9, 0, Q W E T Y):
 *
 *   1 Arrival    Tonight's Sky, Aurora                     keys 1–2
 *   2 Cycle      Dream Sea, Dandelion, Jellyfish            keys 3–5
 *   3 Letting go Macro Filaments, Ink Wing, Smear, Prism    keys 6–9
 *   4 Release    Macro Petals, Bloom Field, Data Bloom      keys 0, Q, W
 *   5 Return     Watercolour Sky, Dream Clouds, Nature World keys E, T, Y
 *
 * Tuned to layer: the sky on black so it sits over anything in Screen, the
 * Smear in Ink and Melt, Data Bloom on the room's sound. No sharp edges, no
 * bright red. It opens with the stars over a dimmed aurora.
 */
const BUILT_IN: SavedSet[] = [
  {
    name: 'Listening Field',
    savedAt: 0,
    set: [
      'tonight', 'aurora', 'dream-sea', 'dandelion', 'jellyfish',
      'macro-filaments', 'macro-ink', 'smear', 'macro-prism', 'macro-petals',
      'bloom', 'data', 'watercolour', 'dream-clouds', 'world',
    ],
    params: {
      tonight: { 'view.ground': 0, 'time.speed': 1, 'look.lines': 0.6, 'look.labels': 0.45 },
      smear: { 'smear.style': 3, 'source.palette': 1, 'smear.length': 0.8 },
      data: { 'data.source': 1, 'data.shape': 1 },
      'macro-ink': { 'look.flow': 0.7 },
      'macro-filaments': { 'look.flow': 0.6 },
      'macro-petals': { 'look.flow': 0.8 },
      'dream-sea': { 'scene.speed': 0.8 },
      'dream-clouds': { 'scene.speed': 0.6, 'scene.sparkles': 0.2 },
    },
    fx: {},
    looks: {},
    stack: {
      layers: [
        { pattern: 'aurora', opacity: 0.55, motion: 1 },
        { pattern: 'tonight', opacity: 1, motion: 1, blend: 'screen' },
      ],
      selected: 1,
    },
  },
];

export function loadSavedSets(): SavedSet[] {
  const sets = readSavedSets();
  try {
    const given: string[] = JSON.parse(localStorage.getItem(BUILT_IN_KEY) || '[]');
    const fresh = BUILT_IN.filter((b) => !given.includes(b.name) && !sets.some((s) => s.name === b.name));
    if (fresh.length) {
      localStorage.setItem(BUILT_IN_KEY, JSON.stringify([...given, ...fresh.map((b) => b.name)]));
      return [...sets, ...fresh].sort((a, b) => a.name.localeCompare(b.name));
    }
  } catch {
    // Storage blocked: no ready-made sets this time.
  }
  return sets;
}

function readSavedSets(): SavedSet[] {
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
