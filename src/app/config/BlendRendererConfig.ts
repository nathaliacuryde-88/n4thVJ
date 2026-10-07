/**
 * Blend: a zigzag blob drawn as hundreds of thin outlines stepping in from a
 * soft rim to its core, the way an Illustrator blend steps between two
 * shapes — the fine lines beating against each other into moiré. The zigzag
 * turns slowly in space, so it reads as a Z, an N, an S. Made to sit behind
 * other visuals.
 */
export const BlendConfig = {
  blend: {
    /** How many outlines from rim to core. Finer, and they beat into moiré. */
    lines: 48,
    /** How big the blob is in the frame. */
    size: 1,
    /** Turns of the zigzag at its heart, 2 to 5. */
    zigzag: 3,
    /** How much the outline breathes and wanders. */
    wobble: 0.5,
    /** How soft the rim fades into the ground. */
    softness: 0.3,
    /** How fast it turns. The finger count still sets the tempo. */
    spin: 1,
    /** 0 Candy (pink ground, red rim, lavender and gold core), 1 Neon (grey ground, orange rim, magenta and cyan core). */
    colourway: 0,
    /** 0 the colourway's own ground, 1 black — which stacks cleanly. */
    ground: 0,
  },

  hands: {
    /** How far the blob drifts toward a hand, and tips with it. */
    follow: 1,
    /** How hard a clap sends a ripple out through the lines. */
    clap: 1,
  },

  sound: {
    /** Each kick sends a ripple out through the lines. */
    beat: 1,
    /** Bass swells the blob. */
    bass: 1,
    /** Melody makes it wobble more. */
    mid: 1,
    /** Hats make the lines shimmer. */
    high: 1,
  },
};
