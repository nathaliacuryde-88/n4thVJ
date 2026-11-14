/**
 * First Line: out of nothing, a point; out of the point, a line; out of the
 * line, many. The beginning of the arc, and where it can end.
 */
export const FirstLineConfig = {
  line: {
    /** How many lines there are once it has fully unfolded. */
    count: 14,
    /** How heavy each line is drawn. */
    weight: 1,
    /** How much the lines wave. */
    wave: 1,
    /** How long the first line takes to draw itself. 0: it is already there. */
    birth: 1,
  },

  hands: {
    /** An open palm unfolds the lines; a fist gathers them back into one. */
    open: 1,
    /** The lines are drawn towards the hand, as a string is plucked. */
    pull: 1,
    /** A clap makes every line shiver. */
    clap: 1,
  },

  sound: {
    /** Each kick sends a pulse out along the lines from the middle. */
    beat: 1,
    /** Bass: the lines breathe. */
    bass: 1,
    /** As the music fills, the line unfolds on its own. */
    grow: 1,
  },
};
