/**
 * Big Type: your words, very large, in Strichpunkt Sans bold capitals,
 * dancing in one of four styles after the kinetic type of studios like DIA —
 * seen through vertical lines, smeared and stretched like a slit-scan poster,
 * boxed letter by letter and bouncing, or sheared and folded flat.
 */
export const BigTypeConfig = {
  type: {
    /** 0 Lines, 1 Stretch, 2 Blocks, 3 Shear. */
    style: 0,
    /** How big the words are; 1 fills the frame. */
    size: 1,
    /** How many times the words are stacked down the frame, 1 to 6. */
    repeat: 1,
    /** 0 Bold, 1 Black. */
    weight: 0,
    /** 0 ink on black, 1 black on paper, 2 black on colour. */
    colourway: 0,
    /** 1: every line its own size, filling the width, as the posters are. 0: one size for all. */
    justify: 1,
  },

  dance: {
    /** How much the letters move, 0 still. */
    amount: 1,
    /** Shear: 0 every letter on its own, 1 whole words together. */
    words: 0,
  },

  lines: {
    /** How many lines across the frame. */
    density: 0.5,
    /** How thick the lines grow inside the letters. */
    thickness: 0.8,
  },

  stretch: {
    /** How far the smears pull. */
    smear: 0.8,
    /** How many bands smear at once, 0 to 1. */
    bands: 0.5,
  },

  hands: {
    /** An open hand dances more, a fist holds the words still and clean. */
    open: 1,
    /** How much the hand is where things happen: thickest lines, biggest letter, the ripple's start. */
    focus: 1,
    /** How hard a clap bursts everything. */
    clap: 1,
  },

  sound: {
    /** Each kick: a hop, a new smear, a jump in size, a ripple. */
    beat: 1,
    /** Bass deepens every move. */
    bass: 1,
    /** Melody speeds the waves. */
    mid: 1,
    /** Hats shiver the edges. */
    high: 1,
  },
};
