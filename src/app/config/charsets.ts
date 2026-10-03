import { useSyncExternalStore } from 'react';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CHARACTER SETS
 * ═══════════════════════════════════════════════════════════════════════════
 * The characters a typographic visual can build its image out of, shared by
 * every place that offers the choice — the Atlas effect and Mosaic's letters —
 * so a set means the same thing wherever it is picked.
 *
 * Each set runs from light to heavy. The order written here is only a
 * starting point: fonts differ from machine to machine, so each set is
 * re-sorted by how much ink its characters actually lay down in the font the
 * browser really uses, the first time it is asked for.
 *
 * Two are not fixed lists:
 *   Custom      the characters typed into the field under the menu, kept for
 *               the whole tool, the way Atlas does it;
 *   Your words  the text typed for Kinetic Type, spelled across the grid
 *               rather than sorted.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export interface CharSet {
  name: string;
  /** Light to heavy, starting with a space so the darkest areas can stay empty. */
  chars: string;
}

export const CHARSETS: CharSet[] = [
  { name: 'Standard', chars: ' .:-=+*#%@' },
  { name: 'Code', chars: ' -_=+<>/\\|[]{}' },
  { name: 'Detailed', chars: " .'`^\",:;Il!i><~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$" },
  { name: 'Blocks', chars: ' ░▒▓█' },
  { name: 'Dots', chars: ' ·∙•●' },
  { name: 'Braille', chars: ' ⠁⠃⠇⠏⠟⠿⡿⣿' },
  { name: 'Shapes', chars: ' ·+×◇○◆●■' },
  { name: 'Binary', chars: ' 01' },
  { name: 'Digits', chars: ' 1723450689' },
  // Full-width: far more fonts carry these than the narrow half-width forms,
  // which came out as boxes. They are squeezed into the cell when drawn.
  { name: 'Katakana', chars: ' ーィシツミハラワムメネホ' },
  { name: 'Your words', chars: '' },
  { name: 'Custom', chars: '' },
];

/** The index of "Your words", which spells the text rather than ramping. */
export const WORDS = CHARSETS.findIndex((s) => s.name === 'Your words');
/** The index of "Custom", which ramps the characters typed under the menu. */
export const CUSTOM = CHARSETS.findIndex((s) => s.name === 'Custom');

/** The names, for a menu. */
export const CHARSET_NAMES = CHARSETS.map((s) => s.name);

/** Up to eight characters spread across a set, so the menu shows what it looks like. */
function sample(chars: string): string {
  const all = Array.from(chars.trim());
  if (all.length <= 8) return all.join('');
  return Array.from({ length: 8 }, (_, i) => all[Math.round((i * (all.length - 1)) / 7)]).join('');
}

/** What each set looks like, for the menu. Custom shows whatever is typed. */
export const CHARSET_SAMPLES = CHARSETS.map((s, i) =>
  i === WORDS ? 'ABC' : i === CUSTOM ? '' : sample(s.chars));

/** The font every glyph is measured and drawn in. */
export const GLYPH_FONT = 'ui-monospace, SFMono-Regular, Menlo, "DejaVu Sans Mono", monospace';

// ── the custom characters ───────────────────────────────────────────────────

const CUSTOM_KEY = 'vj-custom-chars';
const CUSTOM_DEFAULT = '.:-=+*#%@';
let custom = (() => {
  try {
    return localStorage.getItem(CUSTOM_KEY) ?? CUSTOM_DEFAULT;
  } catch {
    return CUSTOM_DEFAULT;
  }
})();
const listeners = new Set<() => void>();

/** What is typed in "Your characters" — one string for the whole tool. */
export function getCustomChars(): string {
  return custom;
}

export function setCustomChars(text: string) {
  custom = text;
  try {
    localStorage.setItem(CUSTOM_KEY, text);
  } catch {
    // Storage blocked; it just will not survive a reload.
  }
  listeners.forEach((l) => l());
}

/** The custom characters as React state, kept in step everywhere they show. */
export function useCustomChars(): [string, (text: string) => void] {
  const value = useSyncExternalStore(
    (onChange) => {
      listeners.add(onChange);
      return () => { listeners.delete(onChange); };
    },
    getCustomChars,
  );
  return [value, setCustomChars];
}

// ── ramps ───────────────────────────────────────────────────────────────────

const sorted = new Map<string, string[]>();

/** The characters a set draws with, as written — the custom ones included. */
function charsOf(set: number): string {
  if (set === CUSTOM) return ' ' + (custom.replace(/\s/g, '') || CUSTOM_DEFAULT);
  if (set === WORDS) return CHARSETS[0].chars;
  return CHARSETS[set].chars;
}

/**
 * A set's characters, light to heavy, sorted by the ink each one really puts
 * down. Measured once per distinct set of characters and kept.
 */
export function rampFor(set: number): string[] {
  const index = Math.max(0, Math.min(CHARSETS.length - 1, Math.round(set)));
  const chars = charsOf(index);
  const cached = sorted.get(chars);
  if (cached) return cached;
  // Each character once, in the order written.
  const ramp = measure(Array.from(new Set(Array.from(chars))));
  sorted.set(chars, ramp);
  return ramp;
}

/** The text to spell for "Your words": its characters in order, spaces dropped. */
export function wordsFrom(text: string): string[] {
  const letters = Array.from(text.toUpperCase()).filter((c) => c.trim() !== '');
  return letters.length ? letters : ['N', '4', 'T', 'H'];
}

/** Sorts characters by how many pixels of ink each lays down. */
function measure(chars: string[]): string[] {
  if (typeof document === 'undefined') return chars;
  const size = 48;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return chars;
  ctx.font = `600 ${Math.round(size * 0.8)}px ${GLYPH_FONT}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const ink = (c: string) => {
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = '#fff';
    ctx.fillText(c, size / 2, size / 2);
    const data = ctx.getImageData(0, 0, size, size).data;
    let sum = 0;
    for (let i = 3; i < data.length; i += 4) sum += data[i];
    return sum;
  };
  const weighed = chars.map((c, order) => ({ c, ink: c === ' ' ? -1 : ink(c), order }));
  // Ties keep their written order, so a set that measures flat stays as written.
  weighed.sort((a, b) => a.ink - b.ink || a.order - b.order);
  return weighed.map((w) => w.c);
}
