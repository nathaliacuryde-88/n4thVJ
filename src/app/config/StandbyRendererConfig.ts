/**
 * Standby: what is left when the machine stops naming things. A quiet field
 * of dots, a light where the hand is, and a fist that closes the picture
 * down to a line and then to a point.
 */
export const StandbyConfig = {
  grid: {
    /** How fine the dots are. */
    detail: 0.5,
    /** How bright the resting field is. 0: only what the hand lights. */
    field: 0.5,
    /** How much of her own outline stays in the dots, faintly. 0: none. */
    figure: 0.4,
    /** The one line of text in the corner. */
    words: 1,
    /** Zoom: the dots bigger and fewer, or smaller and more — always the whole frame. */
    zoom: 1,
  },

  hands: {
    /** How large the light of an open hand is. */
    light: 1,
    /** How far a fist closes the picture: 1 all the way to a point. */
    close: 1,
    /** A clap sends one ring across the whole field, and opens it again. */
    clap: 1,
  },

  sound: {
    /** Each kick: a faint ring from where the light is. */
    beat: 1,
    /** As the music empties out, the picture closes by itself. */
    quiet: 1,
  },
};
