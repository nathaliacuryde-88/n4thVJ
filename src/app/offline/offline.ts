import { useEffect, useState } from 'react';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * OFFLINE
 * ═══════════════════════════════════════════════════════════════════════════
 * Registers the service worker (scripts/sw.template.js) that keeps a copy of
 * everything the VJ needs, and says whether a set could run with no internet
 * right now: the bundle, the page and the hand tracking all kept.
 *
 * Opened once online and left a moment, it is ready; from then on the Wi-Fi
 * can go — mid-set, or before the page is even opened.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export type OfflineState = 'unsupported' | 'preparing' | 'ready';

let state: OfflineState = 'serviceWorker' in navigator ? 'preparing' : 'unsupported';
const listeners = new Set<() => void>();
function set(next: OfflineState) {
  if (next === state) return;
  state = next;
  listeners.forEach((l) => l());
}

function ask() {
  navigator.serviceWorker.controller?.postMessage('offline-status');
}

export function registerOffline() {
  // The dev server rebuilds files under the same names; keeping copies there
  // would only serve stale code.
  if (!('serviceWorker' in navigator) || import.meta.env.DEV) return;
  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data?.type === 'offline-status') set(event.data.ready ? 'ready' : 'preparing');
  });
  // A new worker taking over has kept the new build: ask again.
  navigator.serviceWorker.addEventListener('controllerchange', ask);
  navigator.serviceWorker
    .register('./sw.js')
    .then(() => navigator.serviceWorker.ready)
    .then(() => {
      ask();
      // The hand tracking is kept as it loads, after the page: check again
      // until everything is there.
      const timer = setInterval(() => (state === 'ready' ? clearInterval(timer) : ask()), 3000);
    })
    .catch((error) => console.warn('Offline copy unavailable:', error));
}

/** Whether a set could run with no internet now, and whether there is internet. */
export function useOffline(): { state: OfflineState; online: boolean } {
  const [, tick] = useState(0);
  const [online, setOnline] = useState(navigator.onLine);
  useEffect(() => {
    const changed = () => tick((n) => n + 1);
    listeners.add(changed);
    const up = () => setOnline(true);
    const down = () => setOnline(false);
    window.addEventListener('online', up);
    window.addEventListener('offline', down);
    return () => {
      listeners.delete(changed);
      window.removeEventListener('online', up);
      window.removeEventListener('offline', down);
    };
  }, []);
  return { state, online };
}
