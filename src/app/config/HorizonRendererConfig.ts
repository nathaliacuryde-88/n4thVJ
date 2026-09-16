/**
 * Digital Horizon.
 *
 * Its "chaos" used to jump between fixed levels per gesture, and an open hand
 * — which is what the idle drive shows, and what a tracked hand mostly reads as
 * — went straight to near the top of the range. So it ran flat out almost all
 * the time, with hard steps between states whenever tracking flickered. Chaos
 * is now a continuous reading of how open and how fast the hand is, eased in
 * slowly, and everything it feeds is scaled from here.
 */
export const HorizonConfig = {
  chaos: {
    /** Where it sits with nothing tracked. */
    idle: 0.06,
    /** Ceiling reachable by hand. Below 1 keeps the top end off the table. */
    range: 0.45,
    /** How much an open hand contributes, against a closed one. */
    openness: 0.6,
    /** How much hand speed contributes. */
    velocity: 0.4,
    /** A clap's kick, on top of whatever the hand is doing. */
    clap: 0.5,
    /** Bass, when no hands are tracked. */
    audio: 0.3,
    /** Follow rate towards the target. Lower is more sluggish, and calmer. */
    ease: 0.03,
  },
  strips: {
    /** Columns with chaos at zero. */
    base: 10,
    /** Columns added at full chaos. */
    chaos: 20,
    /** Blocks down a column, and what chaos adds. */
    blocks: 5,
    blocksChaos: 15,
  },
  speed: {
    /** Drift with chaos at zero. */
    base: 0.05,
    /** Spread of drift between columns. */
    variation: 0.1,
    /** Added at full chaos. This is the one that made it frantic. */
    chaos: 0.35,
  },
};
