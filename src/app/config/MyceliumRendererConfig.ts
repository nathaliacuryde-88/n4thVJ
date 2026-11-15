/**
 * Mycelium: roots and threads that grow as the music plays, branch, and
 * carry light along themselves. The interconnection, drawn.
 */
export const MyceliumConfig = {
  growth: {
    /** How fast the tips advance; the finger count still sets the tempo. */
    speed: 1,
    /** How readily a tip forks. */
    branching: 1,
    /** How long a thread stays before it fades, so the network keeps renewing. */
    lasting: 1,
    /** How heavy the threads are drawn. */
    weight: 1,
    /** How much the threads wander rather than run straight. */
    wander: 1,
  },

  hands: {
    /** The tips grow towards the hand. */
    reach: 1,
    /** A clap seeds new growth where the hand is. */
    clap: 1,
  },

  sound: {
    /** Each kick: a pulse of light runs out from the roots, and tips fork. */
    beat: 1,
    /** Bass thickens the threads. */
    bass: 1,
    /** How strictly the roots grow on the beat: 0 an even flow, 1 a lunge on each beat and a fork on each bar. */
    lock: 0.85,
  },
};
