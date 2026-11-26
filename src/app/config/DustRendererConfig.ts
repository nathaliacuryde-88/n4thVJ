/**
 * Dust: where the set begins. Very fine grains of light in black and white,
 * drifting slowly; the music lights them in a different way on every beat,
 * and at the end they can gather into the circle the universe opens with.
 */
export const DustConfig = {
  field: {
    /** How many grains. */
    count: 1400,
    /** How big each grain is drawn, and how close the field seems. */
    size: 1,
    /** How fast they drift; the finger count still sets the tempo. */
    drift: 1,
  },
  look: {
    /** How long a grain's light hangs on as it moves. 0: clean, every frame fresh. */
    trail: 0.35,
    /** A fine film grain over everything. */
    grain: 0.5,
    /** How bright the resting field is. */
    glow: 1,
  },
  form: {
    /** Gathered into the circle the universe begins with. 0: free; 1: all of it on the ring. */
    circle: 0,
  },
  hands: {
    /** An open palm lights the dust around it and parts it; a fist gathers it into the circle. */
    reach: 1,
    /** A clap lights every grain and throws it outward. */
    clap: 1,
  },
  sound: {
    /** How much the music lights it: each kick a wave, a scatter or a line, never the same twice. */
    beat: 1,
    /** The snare and the hats: single sparks here and there. */
    sparks: 1,
    /** Bass breathes the whole field out and in. */
    bass: 1,
    /** While the music is quiet, the field makes its own soft rings here and there, as it does in silence. 0: only in silence. */
    quiet: 0,
  },
};
