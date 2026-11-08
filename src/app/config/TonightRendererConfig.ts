/**
 * Tonight's Sky: the real sky over Stuttgart — stars, constellations, the
 * moon in its phase, the planets — soft and glowing.
 */
export const TonightConfig = {
  time: {
    /** Minutes of sky per second; the finger count still sets the tempo. */
    speed: 2,
    /** Hours ahead of now: show the sky later tonight. */
    hours: 0,
  },

  view: {
    /** 0 South, 1 East, 2 North, 3 West, 4 Straight up. */
    look: 0,
    /** How much of the sky is in the frame, in degrees across. */
    width: 150,
    /** A slow turn of the view. */
    drift: 0.3,
    /** 1 the night sky and the hills; 0 black, to layer over another visual. */
    ground: 1,
  },

  look: {
    /** How big the stars glow. */
    size: 1,
    /** The constellation lines. */
    lines: 0.8,
    /** The names. */
    labels: 0.8,
    /** The moon's size. */
    moon: 1,
  },

  hands: {
    /** How far the hand pans the view. */
    pan: 1,
    /** A clap sends a shooting star. */
    clap: 1,
  },

  sound: {
    /** Each kick brightens the stars. */
    beat: 1,
    /** Bass breathes the glow. */
    bass: 1,
    /** Hats make them twinkle. */
    high: 1,
  },
};
