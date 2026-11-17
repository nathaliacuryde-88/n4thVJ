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
  /** The set's transition, in seconds; older saves have none and keep whatever is set. */
  fade?: number;
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
 *
 * Origem — a story to play when the music brings none of its own: from
 * nothing to the machine, in the order it happened (keys 1–9, 0, Q W E T Y):
 *
 *   1 Void      First Line, Network Cube                    keys 1–2
 *   2 Universe  Tonight's Sky, Galaxy, Aurora               keys 3–5
 *   3 Water     Plankton, Cell Division, Ink                keys 6–8
 *   4 Plants    Mycelium, Anemone, Nature World             keys 9, 0, Q
 *   5 Human     Constellation (her own outline), Ripple     keys W, E
 *   6 Code      Atlas, Elastic Net                          keys T, Y
 *   7 Machine   Machine Vision, and Standby to close on     keys U, F
 *
 * The set's order is the layer order, so what comes earlier in the story sits
 * over what comes later. Everything on black, in the sea palette, so
 * any two neighbours stack. It opens on the line alone.
 */
/**
 * A ready-made set that has been reworked since it was first handed over. A
 * newer one replaces her copy only if she has not touched it; a set she has
 * saved over is hers and is left alone.
 */
const REVISION: Record<string, number> = { Origem: 2 };

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
  {
    name: 'Origem',
    savedAt: 0,
    set: [
      'line', 'network-cube', 'tonight', 'swarm-galaxy', 'aurora',
      'swarm-plankton', 'cells', 'ink', 'mycelium', 'anemone', 'world',
      'constellation', 'ripple', 'atlas', 'elastic-net', 'machine', 'standby',
    ],
    params: {
      tonight: { 'view.ground': 0 },
      aurora: { 'sky.grain': 0.45 },
      'swarm-galaxy': { 'look.style': 2, 'look.trail': 0.1, 'look.backdrop': 0 },
      'swarm-plankton': { 'look.style': 1, 'look.backdrop': 0, 'look.palette': 2 },
      ink: { 'look.palette': 2, 'look.backdrop': 0 },
      anemone: { 'garden.backdrop': 0 },
      world: { 'colour.palette': 2 },
    },
    fx: {},
    looks: {},
    stack: {
      layers: [{ pattern: 'line', opacity: 1, motion: 1 }],
      selected: 0,
    },
  },
];

export function loadSavedSets(): SavedSet[] {
  const sets = readSavedSets();
  try {
    const given: string[] = JSON.parse(localStorage.getItem(BUILT_IN_KEY) || '[]');
    const mark = (b: SavedSet) => ((REVISION[b.name] ?? 1) > 1 ? `${b.name}@${REVISION[b.name]}` : b.name);
    const due = BUILT_IN.filter((b) => !given.includes(mark(b)));
    if (due.length) {
      // New ones are added; a reworked one takes the place of an untouched copy.
      const fresh = due.filter((b) => {
        const hers = sets.find((s) => s.name === b.name);
        return !hers || hers.savedAt === 0;
      });
      localStorage.setItem(BUILT_IN_KEY, JSON.stringify([...given, ...due.map(mark)]));
      if (fresh.length) {
        return [...sets.filter((s) => !fresh.some((b) => b.name === s.name)), ...fresh]
          .sort((a, b) => a.name.localeCompare(b.name));
      }
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
