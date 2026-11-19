import { useSyncExternalStore } from 'react';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * WHICH SOUND IT LISTENS TO
 * ═══════════════════════════════════════════════════════════════════════════
 * The audio inputs the computer has — the built-in microphone, a USB
 * interface carrying the DJ's mixer — and which one the visuals listen to.
 * The choice is kept for next time by the device's name as well as its id,
 * so the same interface is found again after a restart. If the chosen one
 * is missing (unplugged, not yet connected), it listens to the system's
 * default instead and says so, rather than going silent.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export interface InputDevice { id: string; label: string }

const KEY = 'vj-audio-input';
let chosen: { id: string; label: string } | null = (() => {
  try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch { return null; }
})();
let devices: InputDevice[] = [];
/** The device actually being heard right now, by name. */
let using: string | null = null;
/** Why it is not the chosen one, when it is not. */
let problem: string | null = null;

const listeners = new Set<() => void>();
let snapshot = make();
function make() { return { devices, chosen, using, problem }; }
function publish() { snapshot = make(); listeners.forEach((l) => l()); }

export async function refreshInputs() {
  try {
    const all = await navigator.mediaDevices.enumerateDevices();
    devices = all
      .filter((d) => d.kind === 'audioinput' && d.deviceId !== 'default' && d.deviceId !== 'communications')
      .map((d, i) => ({ id: d.deviceId, label: d.label || `Input ${i + 1}` }));
    // Ids can change between sessions; the name finds the same device again.
    if (chosen && !devices.some((d) => d.id === chosen!.id)) {
      const same = devices.find((d) => d.label === chosen!.label);
      if (same) { chosen = { id: same.id, label: same.label }; save(); }
    }
    publish();
  } catch { /* no device list: the default is used */ }
}

if (typeof navigator !== 'undefined' && navigator.mediaDevices?.addEventListener) {
  navigator.mediaDevices.addEventListener('devicechange', () => { void refreshInputs(); });
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(chosen)); } catch { /* blocked */ }
}

/** null: the system's default input. */
export function chooseInput(id: string | null) {
  const d = devices.find((x) => x.id === id);
  chosen = id && d ? { id, label: d.label } : null;
  save();
  publish();
}

/** The id to ask for, if one was chosen. */
export function chosenInputId(): string | null { return chosen?.id ?? null; }

export function reportInput(label: string | null, why: string | null) {
  using = label;
  problem = why;
  publish();
}

export function useAudioInput() {
  return useSyncExternalStore(
    (on) => { listeners.add(on); return () => { listeners.delete(on); }; },
    () => snapshot,
  );
}
