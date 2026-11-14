/**
 * ═══════════════════════════════════════════════════════════════════════════
 * KEEPING THE FRAME RATE
 * ═══════════════════════════════════════════════════════════════════════════
 * Three things that decide whether a heavy stack plays smoothly, none of
 * which a visual should have to think about.
 *
 * THE CAP. A 120 Hz laptop screen asks for 120 frames a second and gets them
 * if it can, which doubles the work of every layer for motion nobody in the
 * room can tell from 60 — and leaves no room for a third layer. Frames closer
 * together than a 60th of a second, give or take, are skipped.
 *
 * THE SCALE. When the stack is still too heavy to hold its rate, the layers
 * are drawn smaller and stretched to fit: a little softer, and smooth, rather
 * than sharp and stuttering. Shader visuals cost by the pixel, so 70% of the
 * size is half the work. It steps down quickly when frames are being missed
 * and back up slowly once there has been room to spare for a while, and after
 * a step up that did not hold it stays down for a minute rather than hunting.
 *
 * THE READING. How long each layer took to draw, for the status bar's gauge —
 * so "it is slow" comes with which layer is doing it. Drawing is handed to
 * the graphics card and returns at once, so timing the call alone says every
 * layer took a millisecond; while the gauge's panel is open each layer is
 * made to finish before the next begins, which is the only way to see what
 * it really cost. That waiting slows the frame a little, so it is done only
 * while someone is looking.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** Frames nearer than this to the last one drawn are skipped, in ms. */
const MIN_FRAME_MS = 13.5;

const STEPS = [1, 0.85, 0.7, 0.55];
/** Below this, eased, frames are being missed. */
const SLOW_FPS = 48;
/** Above this there is room to try a larger size again. */
const FAST_FPS = 57;
const DOWN_AFTER_MS = 2500;
const UP_AFTER_MS = 12000;
const HOLD_AFTER_FAILED_UP_MS = 60000;

export interface Reading {
  fps: number;
  /** The share of full size the layers are being drawn at: 1, 0.85, 0.7 or 0.55. */
  scale: number;
  /** Each layer's draw time in ms, eased, bottom layer first. */
  layers: { pattern: string; ms: number }[];
  /** Flattening the stack, effects included, and the finish. */
  composeMs: number;
}

const reading: Reading = { fps: 60, scale: 1, layers: [], composeMs: 0 };
let lastDrawn = 0;
let step = 0;
let slowSince = 0;
let fastSince = 0;
let steppedUpAt = -1e9;
let holdUntil = 0;
let auto = true;

/** Whether this animation frame should be drawn at all. */
export function shouldDraw(now: number): boolean {
  if (now - lastDrawn < MIN_FRAME_MS) return false;
  lastDrawn = now;
  return true;
}

/**
 * Notes one drawn frame, `delta` seconds after the last, and returns the
 * scale the layers should be drawn at.
 */
export function governFrame(now: number, delta: number): number {
  // Each frame counts for as long as it lasted, so one long frame among
  // short ones pulls the rate down as far as it really did.
  if (delta > 0.004 && delta < 2) reading.fps += (1 / delta - reading.fps) * (1 - Math.exp(-delta / 0.8));
  // A hidden tab draws once a second; that is not a slow machine.
  if (!auto || document.hidden || delta >= 2) {
    slowSince = fastSince = 0;
    return STEPS[step];
  }
  if (reading.fps < SLOW_FPS) {
    fastSince = 0;
    slowSince ||= now;
    if (now - slowSince > DOWN_AFTER_MS && step < STEPS.length - 1) {
      // A step up that could not be held: stay down for a while.
      if (now - steppedUpAt < 20000) holdUntil = now + HOLD_AFTER_FAILED_UP_MS;
      step++;
      slowSince = 0;
      // Start the average again, or the old slow frames trigger a second step.
      reading.fps = 60;
    }
  } else if (reading.fps > FAST_FPS) {
    slowSince = 0;
    fastSince ||= now;
    if (now - fastSince > UP_AFTER_MS && step > 0 && now > holdUntil) {
      step--;
      steppedUpAt = now;
      fastSince = 0;
    }
  } else {
    slowSince = fastSince = 0;
  }
  reading.scale = STEPS[step];
  return STEPS[step];
}

let measuring = false;
/** Whether each layer should be made to finish before it is timed. */
export function isMeasuring(): boolean {
  return measuring;
}
export function setMeasuring(on: boolean) {
  measuring = on;
  // Readings taken without waiting mean something else; start them again.
  reading.layers = [];
}

/** Notes how long one layer took this frame. */
export function noteLayer(index: number, pattern: string, ms: number) {
  const at = reading.layers[index];
  if (!at || at.pattern !== pattern) reading.layers[index] = { pattern, ms };
  else at.ms += (ms - at.ms) * 0.08;
}

export function noteLayerCount(count: number) {
  if (reading.layers.length > count) reading.layers.length = count;
}

export function noteCompose(ms: number) {
  reading.composeMs += (ms - reading.composeMs) * 0.08;
}

/** The latest reading. The same object each time: read it, do not keep it. */
export function frameReading(): Reading {
  return reading;
}
