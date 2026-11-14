/**
 * Swarm: a few hundred thousand points moved on the graphics card. A flock
 * that follows the hand, plankton that light where the water is stirred, a
 * galaxy that turns. Each on its own card.
 */
export const SwarmConfig = {
  look: {
    /** How many points: 0 16 thousand, 1 65 thousand, 2 150 thousand, 3 260 thousand. */
    count: 1,
    /** How large each point is drawn. */
    size: 1,
    /** How soft what is out of focus becomes. */
    blur: 1,
    /** How long the light lingers behind a moving point. */
    trail: 0.5,
  },

  motion: {
    /** How fast it all moves; the finger count still sets the tempo. */
    flow: 1,
    /** How much the currents fold it. */
    fold: 1,
  },

  hands: {
    /** The flock follows the hand; the water is stirred by it; the galaxy tilts. */
    follow: 1,
    /** A clap scatters everything. */
    clap: 1,
  },

  sound: {
    /** Each kick: the flock draws in, a wave of light crosses the water, the core flares. */
    beat: 1,
    /** The hats: points catching the light. */
    sparkle: 1,
  },
};
