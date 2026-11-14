/**
 * Ink: coloured ink in water, simulated as a real fluid. The hands paint it
 * in and drag it about; the music drops it in and stirs it.
 */
export const FluidConfig = {
  ink: {
    /** How much ink each stroke and each kick lets go. */
    amount: 1,
    /** How long ink stays before it thins away. */
    lasting: 0.6,
    /** How wide a stroke is. */
    width: 1,
  },

  water: {
    /** How fast the water moves; the finger count still sets the tempo. */
    flow: 1,
    /** How much it curls into fine eddies. */
    curl: 1,
  },

  hands: {
    /** The hand paints where it is and drags the water with it. */
    paint: 1,
    /** A clap bursts ink out from the middle. */
    clap: 1,
  },

  sound: {
    /** Each kick: a bloom of ink opens somewhere. */
    beat: 1,
    /** The hats: fine droplets. */
    drops: 1,
  },
};
