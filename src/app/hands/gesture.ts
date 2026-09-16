/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ONE FINGER SLOW, FIVE FAST, A CLAP EXPLODES
 * ═══════════════════════════════════════════════════════════════════════════
 * The gesture vocabulary, in one place, applied to every visual.
 *
 * Twenty-two of thirty-one renderers read the finger count and did something
 * of their own with it; the other nine ignored it entirely, so the same hand
 * meant one thing on Geometric and nothing at all on Ripple. Fixing that
 * renderer by renderer would mean thirty-one different interpretations of
 * "fast", which is how it got inconsistent in the first place.
 *
 * So the rule lives here and is applied where tempo already lives: the shared
 * clock. Every visual takes its step from that clock, including the ones that
 * have never heard of a finger, so the gesture reaches all of them and means
 * the same thing in each. Renderers that also read the hands still do — that
 * is character on top of tempo, and it is worth keeping.
 *
 * A clap is different in kind rather than degree: not a faster tempo but a
 * burst, so it spikes and falls away over about a second rather than holding.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** Tempo for each finger count, 1 to 5. Index 0 is a closed fist. */
const BY_FINGERS = [0.35, 0.45, 0.8, 1.15, 1.5, 1.9];

/** Where a clap takes the rate, before it decays. */
const CLAP_RATE = 3.6;
/** How fast a clap falls back, per second. */
const CLAP_DECAY = 2.2;
/** How fast the rate follows a change in the hands, per second. */
const FOLLOW = 6;

export interface GestureState {
  rate: number;
  clap: number;
}

export function createGestureState(): GestureState {
  return { rate: 1, clap: 0 };
}

interface HandLike {
  fingerCount?: number;
  gesture?: string;
  velocity?: number;
}

interface HandsLike {
  left: HandLike | null;
  right: HandLike | null;
  clapping?: boolean;
  clapIntensity?: number;
}

/** The tempo a hand is asking for, or null when it is not saying. */
function askedFor(hand: HandLike | null): number | null {
  if (!hand) return null;
  if (hand.gesture === 'fist') return BY_FINGERS[0];
  const fingers = hand.fingerCount;
  if (fingers === undefined) return null;
  return BY_FINGERS[Math.min(5, Math.max(1, Math.round(fingers)))];
}

/**
 * The multiplier the whole set should run at this frame.
 *
 * Eased rather than jumped: hand tracking flickers between four and five
 * fingers constantly, and following that exactly makes the set stutter in a
 * way that reads as a fault rather than as playing.
 */
export function gestureRate(hands: HandsLike, state: GestureState, seconds: number): number {
  const asks = [askedFor(hands.left), askedFor(hands.right)].filter(
    (v): v is number => v !== null,
  );
  // Two hands disagreeing: take the faster. Reaching for speed with one hand
  // should not be cancelled by the other resting.
  const target = asks.length ? Math.max(...asks) : 1;

  const follow = Math.min(1, seconds * FOLLOW);
  state.rate += (target - state.rate) * follow;

  if (hands.clapping) {
    state.clap = Math.max(state.clap, CLAP_RATE * Math.max(0.5, hands.clapIntensity ?? 1));
  }
  state.clap = Math.max(0, state.clap - state.clap * CLAP_DECAY * seconds);

  return state.rate + state.clap;
}
