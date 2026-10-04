/**
 * The set: which visuals are on the keyboard tonight, and in what order.
 *
 * The library picks them; the VJ page plays them. Slot order *is* the key
 * order: the number row first (1 to 9, then 0), and past ten the letters just
 * under it — Q W E T Y. R is skipped because R records.
 */

import { VisualPattern } from '../App';
import { RENDERER_CATEGORIES } from './RendererCategories';

/** Fifteen: enough for an hour, a visual every four minutes or so. */
export const MAX_SET = 15;

/** The keys past the number row, in order. */
const LETTERS = ['Q', 'W', 'E', 'T', 'Y'];

const STORAGE_KEY = 'vj-setlist';

/** The key a slot answers to. */
export function slotKey(index: number): string {
  if (index >= 10) return LETTERS[index - 10] ?? '';
  return index === 9 ? '0' : String(index + 1);
}

/** The slot a key selects, or -1 if it is not one of ours. */
export function keySlot(key: string): number {
  if (key === '0') return 9;
  if (key >= '1' && key <= '9') return Number(key) - 1;
  const letter = LETTERS.indexOf(key.toUpperCase());
  return letter === -1 ? -1 : 10 + letter;
}

/** Enough to play with on a first visit, spread across the three families. */
const STARTER: VisualPattern[] = [
  'geometric', 'waves', 'particles', 'halftone', 'ripple', 'flowfield',
];

function isPattern(value: unknown): value is VisualPattern {
  return typeof value === 'string' && value in RENDERER_CATEGORIES;
}

export function loadSetList(): VisualPattern[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return STARTER;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return STARTER;
    // Drop anything renamed or removed since this was saved, and any duplicate
    // a hand-edited value might carry, rather than letting it reach a renderer.
    const clean = parsed.filter(isPattern).filter((p, i, a) => a.indexOf(p) === i);
    return clean.slice(0, MAX_SET);
  } catch {
    return STARTER;
  }
}

export function saveSetList(set: VisualPattern[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(set));
  } catch {
    // Storage blocked; the set just will not survive a reload.
  }
}
