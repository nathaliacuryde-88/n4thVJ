import { useSyncExternalStore } from 'react';

/**
 * A small still of each visual, taken from its library preview once it has
 * warmed up, so the set bar can show what a key plays rather than only its
 * number. Kept in localStorage so they are there before the library has run.
 */

const KEY = 'vj-thumbs';
let thumbs: Record<string, string> = (() => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
})();
const listeners = new Set<() => void>();
let saveTimer: number | null = null;

/** Takes a still from a canvas: small, as a JPEG, about 4 KB. */
export function captureThumb(pattern: string, canvas: HTMLCanvasElement) {
  try {
    const c = document.createElement('canvas');
    c.width = 160;
    c.height = 100;
    const g = c.getContext('2d');
    if (!g) return;
    g.drawImage(canvas, 0, 0, c.width, c.height);
    /*
     * Many visuals are mostly black — a few lines, a field of dots — and a
     * still of them at their own brightness was a black card. Lifted until
     * there is something to recognise, so each card reads as what it plays.
     */
    const d = g.getImageData(0, 0, c.width, c.height).data;
    let sum = 0, top = 0;
    for (let i = 0; i < d.length; i += 4) {
      const l = d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114;
      sum += l;
      if (l > top) top = l;
    }
    const mean = sum / (d.length / 4) / 255;
    // Nothing on it at all yet: keep whatever still it had.
    if (top < 8 && thumbs[pattern]) return;
    const lift = Math.max(1, Math.min(6, 0.28 / Math.max(0.01, mean), 255 / Math.max(1, top) * 1.6));
    if (lift > 1.05) {
      const copy = document.createElement('canvas');
      copy.width = c.width;
      copy.height = c.height;
      copy.getContext('2d')!.drawImage(c, 0, 0);
      g.clearRect(0, 0, c.width, c.height);
      g.filter = `brightness(${lift.toFixed(2)}) contrast(1.1)`;
      g.drawImage(copy, 0, 0);
      g.filter = 'none';
    }
    thumbs = { ...thumbs, [pattern]: c.toDataURL('image/jpeg', 0.7) };
    listeners.forEach((l) => l());
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = window.setTimeout(() => {
      try { localStorage.setItem(KEY, JSON.stringify(thumbs)); } catch { /* full or blocked */ }
    }, 1500);
  } catch {
    // A canvas that cannot be read (tainted by a file from elsewhere) keeps its old still.
  }
}

/** Every visual's still, as React state. */
export function useThumbs(): Record<string, string> {
  return useSyncExternalStore(
    (onChange) => {
      listeners.add(onChange);
      return () => { listeners.delete(onChange); };
    },
    () => thumbs,
  );
}
