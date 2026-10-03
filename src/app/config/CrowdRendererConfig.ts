/**
 * Crowd: a blurred crowd seen as heat — soft head-and-shoulders figures whose
 * warmth is mapped through four inks, with flocks of arrows streaming over
 * them. After playgrnd's Blurred Crowd.
 */
export const CrowdConfig = {
  crowd: {
    /** How many figures. */
    figures: 31,
    /** How big each one is, 0 to 1. */
    size: 0.45,
    /** How much they sway, 0 to 1. */
    wobble: 0.57,
  },

  glow: {
    /** How soft the figures are, 0 to 1. */
    blur: 0.49,
    /** How wide the coloured bands round each figure are, 0 to 1. */
    halo: 0.5,
    /** A darker edge where one band meets the next, 0 to 1. */
    rim: 0.3,
  },

  arrows: {
    /** How much of the frame the arrow flocks cover, 0 to 1. */
    amount: 0.42,
    /** How big each arrow is, 0 to 1. */
    size: 0.76,
  },

  colour: {
    /** Which ink is the ground: 0 beige, 1 black, 2 orange, 3 blue. */
    order: 0,
  },

  hands: {
    /** How much heat a hand brings into the crowd. */
    heat: 1,
    /** How far spreading two hands grows the figures. */
    grow: 1,
    /** A clap sends the crowd to new places. */
    clap: 1,
  },

  sound: {
    /** Each kick makes the crowd jump. */
    beat: 1,
    /** Bass swells the heat. */
    bass: 1,
    /** Louder music brings more arrows. */
    level: 1,
  },
};
