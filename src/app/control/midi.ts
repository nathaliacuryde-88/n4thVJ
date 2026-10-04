import { useSyncExternalStore } from 'react';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * MIDI
 * ═══════════════════════════════════════════════════════════════════════════
 * A hardware controller — faders, knobs, pads — on the tool's controls,
 * because a fader under a finger is faster and surer mid-set than a slider
 * under a trackpad.
 *
 * Nothing is assumed about the controller: every one numbers its controls
 * differently. She picks a control in the MIDI panel, presses LEARN, and
 * moves the fader or hits the pad she wants on it; that is the mapping, kept
 * for next time. Faders and knobs (control changes) give a value; pads and
 * keys (notes), and a control change crossing half way, give a press.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** What a control does when it moves. Continuous targets take 0–1; the rest are presses. */
export interface MidiTarget {
  id: string;
  label: string;
  group: string;
  continuous: boolean;
}

type Handler = (target: string, value: number) => void;

const KEY = 'vj-midi-map';
let map: Record<string, string> = (() => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}') as Record<string, string>;
  } catch {
    return {};
  }
})();

let access: MIDIAccess | null = null;
let devices: string[] = [];
let learning: string | null = null;
let problem: string | null = null;
let lastSeen: string | null = null;
let handler: Handler | null = null;
/** Each control's last value, so a CC used as a button presses once per crossing. */
const lastValue = new Map<string, number>();

const listeners = new Set<() => void>();
let snapshot = make();
function make() {
  return { enabled: access !== null, devices, learning, problem, map, lastSeen };
}
function publish() {
  snapshot = make();
  listeners.forEach((l) => l());
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(map)); } catch { /* blocked */ }
}

/** A readable name for a control's key. */
export function describe(key: string | undefined): string {
  if (!key) return '—';
  const [kind, ch, num] = key.split(':');
  return `${kind === 'cc' ? 'CC' : 'Note'} ${num}${ch !== '0' ? ` · ch${Number(ch) + 1}` : ''}`;
}

function onMessage(event: MIDIMessageEvent) {
  const data = event.data;
  if (!data || data.length < 3) return;
  const status = data[0] & 0xf0;
  const channel = data[0] & 0x0f;
  const number = data[1];
  const value = data[2];
  let key: string;
  if (status === 0xb0) key = `cc:${channel}:${number}`;
  else if (status === 0x90 || status === 0x80) key = `note:${channel}:${number}`;
  else return;
  const isNoteOff = status === 0x80 || (status === 0x90 && value === 0);
  lastSeen = key;

  if (learning) {
    if (isNoteOff) return;
    // One control does one thing: taking it for this target frees it from any other.
    for (const [target, bound] of Object.entries(map)) if (bound === key) delete map[target];
    map = { ...map, [learning]: key };
    learning = null;
    save();
    publish();
    return;
  }

  const target = Object.keys(map).find((t) => map[t] === key);
  if (!target || !handler) { publish(); return; }
  const previous = lastValue.get(key) ?? 0;
  lastValue.set(key, value);
  if (key.startsWith('cc')) {
    // Sent as a value; a button target reads it as a press when it crosses half way up.
    handler(target, value / 127);
    if (previous < 64 && value >= 64) handler(`${target}#press`, 1);
  } else if (!isNoteOff) {
    handler(target, value / 127);
    handler(`${target}#press`, 1);
  }
}

/** Asks the browser for MIDI and listens to every input, now and as they are plugged in. */
export async function enableMidi(): Promise<void> {
  if (access) return;
  if (!('requestMIDIAccess' in navigator)) {
    problem = 'This browser has no MIDI — use Chrome or Edge.';
    publish();
    return;
  }
  try {
    access = await navigator.requestMIDIAccess();
    const attach = () => {
      devices = [];
      access!.inputs.forEach((input) => {
        input.onmidimessage = onMessage;
        devices.push(input.name || 'MIDI input');
      });
      problem = devices.length ? null : 'No controller found — plug one in.';
      publish();
    };
    access.onstatechange = attach;
    attach();
  } catch {
    problem = 'MIDI was refused by the browser.';
    publish();
  }
}

export function setMidiHandler(next: Handler | null) {
  handler = next;
}

/** Waits for the next control moved, to put it on this target. Same target again cancels. */
export function learn(target: string | null) {
  learning = learning === target ? null : target;
  publish();
}

export function unbind(target: string) {
  const { [target]: _gone, ...rest } = map;
  map = rest;
  save();
  publish();
}

export function useMidi() {
  return useSyncExternalStore(
    (onChange) => {
      listeners.add(onChange);
      return () => { listeners.delete(onChange); };
    },
    () => snapshot,
  );
}
