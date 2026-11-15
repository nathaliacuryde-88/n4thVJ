/**
 * Neurons: a small nervous system. The hand fires it; a signal runs down
 * each axon and over the gap to the next cell, which may fire in turn.
 */
export const NeuronConfig = {
  network: {
    /** How many cells. */
    cells: 22,
    /** How many others each one reaches. */
    links: 2.4,
    /** How finely the dendrites branch. */
    branching: 1,
  },

  hands: {
    /** The hand fires the cells it passes over and the one it rests on. */
    fire: 1,
    /** An open palm makes the network pass the signal on readily: one firing sets off the rest. */
    chain: 1,
    /** A fist holds the charge in and lets it go, all at once, when the hand opens. */
    hold: 1,
    /** A clap fires every cell. */
    clap: 1,
  },

  sound: {
    /** The kick fires a cell. */
    beat: 1,
    /** A build-up makes the network more excitable; the drop sets it all off. */
    build: 1,
  },
};
