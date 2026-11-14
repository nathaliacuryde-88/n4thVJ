/**
 * Ink: coloured ink in water, simulated as a real fluid. The hands paint it
 * in and drag it about; the music drops it in and stirs it.
 */
export const FluidConfig = {
  look: {
    /** 0 Marble: flat bands of the palette with hard edges. 1 Soft: glowing ink, as it first was. */
    style: 0,
    /** Which palette: the Bloom Field four. Swaps crossfade. */
    palette: 0,
    /** How many bands of colour a pool of ink is cut into. */
    bands: 1,
    /** The ground behind the ink. 0 is black, which stacks cleanly. */
    backdrop: 0,
  },

  ink: {
    /** How much ink each stroke and each kick lets go. */
    amount: 1,
    /** How long ink stays before it thins away. */
    lasting: 0.55,
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
