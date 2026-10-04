/**
 * Aurora: curtains of light folding over a night sky, rays running up them.
 * Made to sit softly behind the nature family; the colour panel turns its
 * greens and violets round the wheel.
 */
export const AuroraConfig = {
  sky: {
    /** How many curtains, 1 to 4. */
    curtains: 3,
    /** How tall they reach. */
    height: 0.5,
    /** How bright they burn. */
    brightness: 1,
    /** The night behind them, with its stars. 0 is black, which stacks cleanly. */
    night: 1,
  },

  hands: {
    /** How much a curtain lifts and burns toward a hand. */
    follow: 1,
    /** How bright a clap flares. */
    clap: 1,
  },

  sound: {
    /** Each kick flares the curtains. */
    beat: 1,
    /** Bass brightens them and raises them. */
    bass: 1,
    /** Melody folds them faster. */
    mid: 1,
    /** Hats make the rays shiver. */
    high: 1,
  },
};
