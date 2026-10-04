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
