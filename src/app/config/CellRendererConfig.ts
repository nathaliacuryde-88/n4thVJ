/**
 * Cell Division: one cell, then two, then four. Each one lengthens, narrows
 * at the waist and comes apart into two, in time with the music.
 */
export const CellConfig = {
  look: {
    /** 0 Glass: rounded and translucent. 1 Paper: flat cut shapes. 2 Line: outlines only. */
    style: 0,
    /** Which palette: the Bloom Field four. Swaps crossfade. */
    palette: 2,
  },

  cells: {
    /** How large the cells are. */
    size: 1,
    /** How many there may be at once before the oldest make room. */
    crowd: 16,
    /** How often one divides when there is no beat to divide on. */
    pace: 1,
  },

  hands: {
    /** The cells keep to the hand; a fist presses them together. */
    gather: 1,
    /** A clap divides every cell at once. */
    clap: 1,
  },

  sound: {
    /** The kick: cells divide on it, and all of them swell. */
    beat: 1,
    /** Bass makes them fuller. */
    bass: 1,
  },
};
