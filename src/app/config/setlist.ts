/**
 * The set: which visuals are on the keyboard tonight, and in what order.
 *
 * The library picks them; the VJ page plays them. Slot order *is* the key
 * order: the number row first (1 to 9, then 0), and past ten the letters that
 * are not already a shortcut — Q W E T Y U along the top row (R records, I and
 * O and P are taken), then F J V M. That is every key there is: past the
 * twentieth a visual has no key, and is played from its card in the bar.
 */

import { VisualPattern } from '../App';
import { currentPattern } from './RendererCategories';

/** How many visuals have a key of their own. A set can hold any number; past these, they are played by clicking. */
export const KEYED = 20;

/** The keys past the number row, in order. */
const LETTERS = ['Q', 'W', 'E', 'T', 'Y', 'U', 'F', 'J', 'V', 'M'];

const STORAGE_KEY = 'vj-setlist';

/** The key a slot answers to; '' past the keyed ones. */
export function slotKey(index: number): string {
  if (index >= KEYED) return '';
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


export function loadSetList(): VisualPattern[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return STARTER;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return STARTER;
    // Drop anything renamed or removed since this was saved, and any duplicate
    // a hand-edited value might carry, rather than letting it reach a renderer.
    const clean = parsed
      .map(currentPattern)
      .filter((p): p is VisualPattern => p !== null)
      .filter((p, i, a) => a.indexOf(p) === i);
    return clean;
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
