/**
 * Constellation: whoever stands in front of the camera, drawn as stars. The
 * same sky as the opening of the set, but this time the figure in it is her.
 */
export const ConstellationConfig = {
  sky: {
    /** How many stars there are in all: 0 few, 1 a full sky. */
    stars: 0.6,
    /** How bright the stars outside the figure are. 0: only the figure. */
    field: 0.35,
    /** How strongly the lines between the figure's stars are drawn. */
    lines: 0.8,
    /** How large the stars are. */
    size: 1,
  },

  hands: {
    /** The hands are drawn star by star, joint to joint. */
    hands: 1,
    /** A clap scatters the figure into the sky; it gathers again. */
    clap: 1,
  },

  sound: {
    /** Each kick: the figure's stars swell. */
    beat: 1,
    /** The hats: stars glinting. */
    twinkle: 1,
  },
};
