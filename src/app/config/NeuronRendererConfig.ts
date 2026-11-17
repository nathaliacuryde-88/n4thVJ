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
    /** How much of a neuron each cell is drawn as: low, a node with a stub or two; high, a full tree of dendrites. */
    branching: 0,
    /** How far one firing runs on through the others: low, it stays a single spark; high, it cascades. */
    spread: 0.75,
    /** Seconds a cell rests after firing before it can fire again: longer is calmer. */
    rest: 0.8,
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
    /** How strongly a kick fires a cell; 0, the kick does nothing. */
    beat: 1,
    /** Fires on every Nth kick: 1 for slow music, 4 or 8 for fast techno. */
    every: 2,
    /** How many cells each of those kicks sets off. */
    cells: 1,
    /** A build-up makes the network more excitable. */
    build: 0.6,
    /** The drop sets much of it off at once; 0, the drop passes quietly. */
    drop: 0.6,
  },
};
