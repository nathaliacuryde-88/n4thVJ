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
    /** From points to outline: 0 only the points, lines growing out of each towards its neighbours, 2 the full outline. Never filled faces. */
    style: 2,
    /** Holds its mean size whatever the morph does: 1 fully, 0 not at all. */
    steady: 0,
  },

  motion: {
    /** How fast it turns about its own centre; the finger count still sets the tempo. */
    spin: 1,
    /** How fast its shape moves on. */
    flow: 1,
    /** The dust of stars round it. */
    dust: 0.5,
    /** How many points of dust there are behind it. */
    points: 1400,
    /** Seconds over which a change of pace or of the bass is eased in, so it never lurches. 0: at once. */
    glide: 0,
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
    /** The drop of a build blows it out once. 0: it never jumps. */
    drop: 1,
    /** Each kick dents it: one side pulled in towards the middle, then let go. Never outward. 0: off. */
    squash: 0,
  },
};
