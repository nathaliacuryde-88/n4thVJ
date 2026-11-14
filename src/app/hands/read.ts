/**
 * ═══════════════════════════════════════════════════════════════════════════
 * READING A HAND
 * ═══════════════════════════════════════════════════════════════════════════
 * What a hand is doing, from its twenty-one landmarks, in terms that do not
 * depend on where it is, how far from the camera, or which way it points.
 *
 * Everything is measured against the hand's own size — the wrist to the base
 * of the middle finger — and in true proportions: landmarks arrive as
 * fractions of the frame's width and height separately, so on a 16:9 camera a
 * step sideways counts 1.78 times a step upwards unless that is undone first.
 * Without both, a pinch was a fixed distance on screen: easy to make at arm's
 * length, impossible close to the lens.
 *
 * A FINGER IS OUT when its tip is further from the wrist than its middle
 * knuckle is. That holds whichever way the hand points. The older count asked
 * whether the tip was above the knuckle on screen, and so read a hand held
 * sideways or pointing down as a fist.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export interface Point { x: number; y: number; z: number }

export interface Reading {
  /** Fingers out, 0 to 5. */
  fingers: number;
  /** Thumb to index tip, in hand sizes. Small is pinched. */
  pinchGap: number;
  /** How open the hand is, 0 a fist to 1 spread flat. */
  openness: number;
  /** The hand's size in the frame: small far away, large close to the lens. */
  size: number;
  /** Which way the hand points, in radians: 0 up, positive clockwise on screen. */
  angle: number;
}

/** Tip and middle knuckle of the index, middle, ring and little fingers. */
const FINGERS = [
  { tip: 8, pip: 6 },
  { tip: 12, pip: 10 },
  { tip: 16, pip: 14 },
  { tip: 20, pip: 18 },
] as const;

/**
 * `aspect` is the camera's width over height. Landmarks are as MediaPipe
 * gives them, or mirrored — it makes no difference to anything but `angle`,
 * whose sign follows the x axis given.
 */
export function readHand(landmarks: Point[], aspect: number): Reading | null {
  if (!landmarks || landmarks.length < 21) return null;
  const gap = (a: Point, b: Point) =>
    Math.hypot((a.x - b.x) * aspect, a.y - b.y, (a.z - b.z) * aspect);
  const flat = (a: Point, b: Point) => Math.hypot((a.x - b.x) * aspect, a.y - b.y);

  const wrist = landmarks[0];
  const palm = landmarks[9];
  const size = flat(wrist, palm);
  if (size < 1e-4) return null;

  let fingers = 0;
  let reach = 0;
  for (const f of FINGERS) {
    const tip = gap(landmarks[f.tip], wrist);
    const knuckle = gap(landmarks[f.pip], wrist);
    if (tip > knuckle * 1.12) fingers++;
    // A curled finger's tip sits about one hand size from the wrist; a
    // straight one about two.
    reach += Math.min(1, Math.max(0, (tip / size - 1.05) / 0.85));
  }
  // The thumb folds across the palm rather than curling: out when its tip is
  // further from the little finger's base than its own knuckle is.
  const across = landmarks[17];
  const thumbOut = gap(landmarks[4], across) > gap(landmarks[3], across) * 1.12;
  if (thumbOut) fingers++;

  return {
    fingers,
    pinchGap: gap(landmarks[4], landmarks[8]) / size,
    openness: reach / FINGERS.length,
    size,
    angle: Math.atan2((palm.x - wrist.x) * aspect, wrist.y - palm.y),
  };
}

/** Thumb and index closer than this, in hand sizes, is a pinch… */
export const PINCH_ON = 0.32;
/** …and it stays one until they are this far apart, so it does not chatter. */
export const PINCH_OFF = 0.5;
