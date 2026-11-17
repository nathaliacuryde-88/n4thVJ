/**
 * Morphing Sphere: a wire sphere at the middle of the frame that stays round
 * at rest and swells into soft lobes with the music, turning about its centre.
 */
export const MorphingSphereConfig = {
  shape: {
    /** How big it is in the frame. */
    size: 1,
    /** How far it leaves the round, at rest, before the music adds more. */
    morph: 0.12,
    /** How broad its lobes are: low few big soft lobes, high many small ones. */
    lobes: 1,
    /** How finely the wire is drawn, 2 to 6. */
    detail: 4,
    /** A slide through the styles: 0 Wire, 1 Glass, 2 Points; in between, one dissolves into the next. */
    style: 0,
  },

  motion: {
    /** How fast it turns about its own centre; the finger count still sets the tempo. */
    spin: 1,
    /** How fast its shape moves on. */
    flow: 1,
    /** The dust of stars round it. */
    dust: 0.5,
  },

  hands: {
    /** A pinch or a fist pulls it out of shape; an open hand lets it round off. */
    shape: 1,
    /** How far it drifts towards the hand. 0 keeps it at the middle. */
    follow: 0.25,
    /** A clap bursts it out, and it gathers again. */
    clap: 1,
  },

  sound: {
    /** Bass swells it into lobes. */
    bass: 1,
    /** Each kick: a pulse through it. */
    beat: 1,
    /** Melody and fullness spin it faster. */
    spin: 1,
  },
};
