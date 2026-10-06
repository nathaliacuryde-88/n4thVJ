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
/** A continuous target's current value, 0–1, for soft takeover. */
type Reader = (target: string) => number | undefined;

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
let reader: Reader | null = null;
/** Each control's last value, so a CC used as a button presses once per crossing. */
const lastValue = new Map<string, number>();
/** What each continuous target was last set to from here, to tell whether it is still in step. */
const sent = new Map<string, number>();
/** What each continuous target read at its last message. */
const seen = new Map<string, number>();
/** A fader waiting to pick up, and where it has to go. */
let pickup: { target: string; at: number; from: number } | null = null;

const listeners = new Set<() => void>();
let snapshot = make();
function make() {
  return { enabled: access !== null, devices, learning, problem, map, lastSeen, pickup };
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
  const known = lastValue.get(key);
  const previous = known ?? 0;
  lastValue.set(key, value);
  if (key.startsWith('cc')) {
    // Sent as a value; a button target reads it as a press when it crosses half way up.
    if (takesOver(target, value / 127, known === undefined ? undefined : known / 127)) handler(target, value / 127);
    if (previous < 64 && value >= 64) handler(`${target}#press`, 1);
  } else if (!isNoteOff) {
    handler(target, value / 127);
    handler(`${target}#press`, 1);
  }
}

/**
 * Soft takeover.
 *
 * A fader's physical position and the value it controls drift apart — a set
 * loads, a slider is dragged with the mouse — and the first touch would then
 * snap the value to wherever the fader sits: a layer at full jumping to black
 * mid-set. So a fader out of step does nothing until it reaches the value,
 * and from there it has it.
 */
function takesOver(target: string, value: number, before: number | undefined): boolean {
  const current = reader?.(target);
  if (current === undefined) return true;
  const last = sent.get(target);
  const was = seen.get(target);
  seen.set(target, current);
  /*
   * In step while the value is the one this fader last gave — or has not
   * caught up with it yet (fast moves arrive between renders). Anything else
   * moved it: the mouse, a key, a set loading.
   */
  const inStep = last !== undefined
    && (Math.abs(last - current) < 0.02 || (was !== undefined && Math.abs(was - current) < 0.005));
  const reached = Math.abs(value - current) < 0.04
    || (before !== undefined && (before - current) * (value - current) < 0);
  if (!inStep && !reached) {
    sent.delete(target);
    if (pickup?.target !== target || Math.abs(pickup.from - value) > 0.02) {
      pickup = { target, at: current, from: value };
      publish();
    }
    return false;
  }
  sent.set(target, value);
  if (pickup?.target === target) {
    pickup = null;
    publish();
  }
  return true;
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

/** How the soft takeover reads where each continuous target is now. */
export function setMidiReader(next: Reader | null) {
  reader = next;
}

/** Replaces every mapping at once — a controller's preset. */
export function applyMap(next: Record<string, string>) {
  map = { ...next };
  learning = null;
  sent.clear();
  seen.clear();
  save();
  publish();
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

/**
 * The Korg nanoKONTROL2 in its factory CC mode. The eight strips:
 *
 *   faders 1–4   layer faders            faders 5–8  each layer's hands drive
 *   knobs 1–8    effect amounts on the selected layer — Feedback, Colour,
 *                Displace, Chromatic, Pixelate, Echo, Atlas, Fluted
 *                (all the way down is off)
 *   S 1–8        visuals 1–8             M 1–7       visuals 9–15
 *   R 1–4        select layer 1–4        R 5–6       Kaleido, Noise on/off
 *   R 7          auto-pilot              R 8         blackout
 *
 * and the transport:
 *
 *   TRACK ◀ ▶    previous / next visual   CYCLE       auto colour
 *   ◀◀ ▶▶        fewer / more objects — or zoom out / in, where nothing counts
 *   MARKER SET   tap tempo                MARKER ◀ ▶  tempo −/+
 *   STOP         all effects on/off       PLAY        hands ↔ audio
 *   REC          record
 */
export function nanoKontrol2Map(knobFx: string[]): Record<string, string> {
  const cc = (n: number) => `cc:0:${n}`;
  const out: Record<string, string> = {};
  for (let i = 0; i < 4; i++) {
    out[`layer${i + 1}`] = cc(i);
    out[`motion${i + 1}`] = cc(4 + i);
    out[`select${i + 1}`] = cc(64 + i);
  }
  knobFx.slice(0, 8).forEach((name, i) => { out[`knob:${name}`] = cc(16 + i); });
  for (let i = 0; i < 8; i++) out[`slot${i + 1}`] = cc(32 + i);
  for (let i = 0; i < 7; i++) out[`slot${i + 9}`] = cc(48 + i);
  Object.assign(out, {
    'fx:Kaleido': cc(68), 'fx:Noise': cc(69), pilot: cc(70), blackout: cc(71),
    prev: cc(58), next: cc(59), autohue: cc(46),
    'count.down': cc(43), 'count.up': cc(44),
    tap: cc(60), 'tempo.down': cc(61), 'tempo.up': cc(62),
    fx: cc(42), mode: cc(41), record: cc(45),
  });
  return out;
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
