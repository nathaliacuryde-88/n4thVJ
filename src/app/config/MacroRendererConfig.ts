/**
 * Macro: close, photographic abstractions made live — ink bleeding through a
 * butterfly's wing, petals out of focus, filaments into a dark slit, grey
 * petals under a prism's light. Liquid, organic, never ruled.
 */
export const MacroConfig = {
  look: {
    /** 0 Ink wing, 1 Petals, 2 Filaments, 3 Prism. */
    style: 0,
    /** How fast it all flows; the finger count still sets the tempo. */
    flow: 1,
    /** How close we are. */
    zoom: 1,
    /** Fine detail: feathered ink, freckles, filaments, grooves. */
    detail: 1,
    /** The veins in the wing. */
    veins: 1,
    /** Film grain. */
    grain: 0.5,
  },

  hands: {
    /** The wing's root, the slit, follow the hand. */
    follow: 1,
    /** A clap floods the prism's light. */
    clap: 1,
  },

  sound: {
    /** Each kick: the eye widens, the slit opens, the ink pulses. */
    beat: 1,
    /** Bass: the wing breathes, petals soften, the slit opens. */
    bass: 1,
  },
};
