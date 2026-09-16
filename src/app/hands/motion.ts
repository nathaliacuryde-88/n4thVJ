/**
 * ═══════════════════════════════════════════════════════════════════════════
 * HOW HARD THE HANDS DRIVE
 * ═══════════════════════════════════════════════════════════════════════════
 * One control over every visual at once.
 *
 * Each renderer reads the hands directly, so the only way to calm the whole set
 * down was to go and tune twenty-six of them — and three layers all reacting at
 * full strength is a wall of movement whatever any single one of them is doing.
 * Shaping the hand data once, before it reaches anything, means a single knob
 * takes the whole set from barely-moving to overdriven.
 *
 * Two things change together, because that is what "calmer" actually means:
 *
 *   how fast it follows   low motion eases towards the real hand over many
 *                         frames, so gestures arrive as drifts rather than jumps
 *   how far it travels    low motion pulls movement in towards the middle of
 *                         the frame, so the same gesture covers less ground
 *
 * At 1 both are identities and the data passes through untouched, so the
 * default is exactly what every renderer was written against.
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { Hand, HandData } from '../App';

/** Neutral: hands drive exactly as the renderers expect. */
export const MOTION_DEFAULT = 1;
export const MOTION_MIN = 0;
export const MOTION_MAX = 2;

/** Per-frame follow rate. 1 is instant, which is what 1 has to mean. */
function easing(motion: number): number {
  return Math.min(1, 0.06 + motion * 0.94);
}

/** Scale on how far movement strays from the middle. 1 at neutral. */
function reach(motion: number): number {
  return 0.55 + motion * 0.45;
}

function shapeHand(raw: Hand, previous: Hand | null, motion: number): Hand {
  const ease = easing(motion);
  const spread = reach(motion);

  // What came back last frame already has `spread` applied, so undo it before
  // easing — otherwise each frame eases towards a target in a different space
  // and the result creeps away from the hand.
  const prior = previous
    ? {
        x: 0.5 + (previous.position.x - 0.5) / spread,
        y: 0.5 + (previous.position.y - 0.5) / spread,
      }
    : raw.position;
  const x = prior.x + (raw.position.x - prior.x) * ease;
  const y = prior.y + (raw.position.y - prior.y) * ease;

  return {
    ...raw,
    position: {
      x: 0.5 + (x - 0.5) * spread,
      y: 0.5 + (y - 0.5) * spread,
    },
    // Speed is what most renderers turn into rate of change, so it has to
    // follow the knob or the picture stays frantic while the hand crawls.
    velocity: raw.velocity === undefined ? undefined : raw.velocity * motion,
    landmarks: raw.landmarks?.map((point) => ({
      ...point,
      x: 0.5 + (point.x - 0.5) * spread,
      y: 0.5 + (point.y - 0.5) * spread,
    })),
  };
}

/**
 * Applies the motion knob, easing from whatever was returned last frame.
 *
 * `previous` is the value this returned on the frame before; pass null on the
 * first frame. Easing against its own output is what makes low settings drift
 * instead of snapping.
 */
export function shapeHands(
  raw: HandData,
  previous: HandData | null,
  motion: number,
): HandData {
  if (motion === MOTION_DEFAULT) return raw;

  return {
    ...raw,
    left: raw.left ? shapeHand(raw.left, previous?.left ?? null, motion) : null,
    right: raw.right ? shapeHand(raw.right, previous?.right ?? null, motion) : null,
    clapIntensity:
      raw.clapIntensity === undefined ? undefined : raw.clapIntensity * motion,
    distanceBetweenHands:
      raw.distanceBetweenHands === undefined
        ? undefined
        : 0.4 + (raw.distanceBetweenHands - 0.4) * reach(motion),
  };
}
