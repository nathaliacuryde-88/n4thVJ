/**
 * Particle Image: any picture or video, dropped in, rebuilt out of thousands
 * of points that scatter and re-form with the hands. With nothing dropped in
 * yet, it makes the picture out of your words.
 */
export const ParticleImageConfig = {
  points: {
    /** How many points, 0 a few thousand to 1 about eighty thousand. */
    count: 0.5,
    /** How big each point is. */
    size: 1,
    /**
     * Which part of the picture becomes points: 0 the subject (whatever
     * stands out from the colour round the edges — a leaf on white, a drawing
     * on paper), 1 the dark parts, 2 the light parts, 3 all of it.
     */
    keep: 0,
    /** How strictly: higher keeps only what stands out most. */
    cutout: 0.35,
    /** 0 the picture's own colours, 1 the colour panel's, 2 white. */
    colour: 0,
    /** Relief: lighter parts come forward, and a hand tilts the picture to show it. */
    depth: 0.5,
  },

  motion: {
    /** How tightly the points hold the picture with nobody playing. */
    hold: 1,
    /** How much they drift and shimmer while holding it. */
    drift: 0.3,
  },

  hands: {
    /** An open hand loosens the picture into dust, a fist pulls it back together. */
    scatter: 1,
    /** How hard a moving hand brushes the points aside. */
    brush: 1,
    /** How hard a clap blows them apart. */
    clap: 1,
    /** How far spreading two hands zooms the picture. */
    zoom: 1,
  },

  sound: {
    /** Each kick sends a ripple out through the points. */
    beat: 1,
    /** Bass swells the points. */
    bass: 1,
    /** Melody speeds the drift. */
    mid: 1,
    /** Hats make the points twinkle. */
    high: 1,
  },
};
