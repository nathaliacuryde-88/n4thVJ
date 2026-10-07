/**
 * Slap: a head in the middle of the frame that an open hand can slap — it
 * dents where it is hit, wobbles, flushes red, flies off spinning, bounces
 * round the edges of the frame and comes back to the middle to face you.
 */
export const SlapConfig = {
  head: {
    /** How big the head is in the frame. */
    size: 1,
    /** How much it keeps when it bounces off an edge: 0 thuds, 1 rebounds hard. */
    bounce: 0.75,
    /** How soon and how fast it comes back to the middle. */
    back: 1,
    /** How much the face dents and wobbles where it is hit. */
    squash: 1,
    /** How red it flushes when slapped. */
    blush: 1,
  },

  hands: {
    /** How hard a slap sends it. */
    slap: 1,
    /** How fast an open hand has to be moving to slap. Lower slaps more easily. */
    speed: 1,
    /** A clap slaps it from a random side, hard. */
    clap: 1,
    /** Draws your hand on screen as a glove: 0 hides it. */
    show: 1,
  },

  sound: {
    /** Each kick knocks it a little. */
    beat: 1,
    /** Bass makes it bob. */
    bass: 1,
  },
};
