/**
 * Bloom Field: five inflated flowers on a studio backdrop, their colour
 * flowing round a looping palette.
 *
 * The defaults reproduce the reference reel exactly when nobody is playing and
 * the room is silent. Everything the hands and the music do is added on top.
 */
export const BloomFieldConfig = {
  colour: {
    /** Palette cycles per twelve-second loop. Negative runs it backwards. */
    speed: 1,
    /** Where on the palette the whole field sits. A manual hue-cycle. */
    offset: 0,
    /** Which palette: 0 the reel's, then three others. Swaps crossfade. */
    palette: 0,
    /**
     * How far the shadows travel forward through the palette rather than
     * just darkening. Higher pushes more navy and blue into the folds — the
     * inflated look depends on this.
     */
    depth: 0.32,
  },

  pattern: {
    /** Half-ring sweeps round each head. */
    sweep: 1,
    /** Horizontal bands across the field. */
    bands: 1,
    /** Concentric rings out along each petal. */
    rings: 1,
    /**
     * How much the three drift on their own. At 1 each head melts between
     * sweeps, bands and rings as in the reel; at 0 they hold where set.
     */
    melt: 1,
  },

  motion: {
    /** Scales every sway, bob and turn. 0 holds the flowers still. */
    amount: 1,
    /** How fast the motion runs, on top of the hands' tempo. */
    speed: 1,
  },

  field: {
    /** Flowers in the field. They grow in and sink away when this changes. */
    count: 5,
    /** Slow camera orbit, 0 for a locked-off shot. */
    orbit: 0,
    /** Camera distance. Lower is closer. */
    distance: 15.5,
    /** The grey studio behind them. 0 is black, which stacks cleanly. */
    backdrop: 1,
  },

  hands: {
    /** How far moving a hand swings the camera round the field. */
    orbit: 1,
    /** How far spreading two hands brings the camera in. */
    dolly: 1,
    /** How much the finger count opens and closes the heads. */
    bloom: 1,
    /** How hard a clap throws the petals open. */
    clap: 1,
  },

  sound: {
    /** Each kick briefly fattens the heads and squashes the petals. */
    beat: 1,
    /** Bass deepens the bob. */
    bass: 1,
    /** Melody speeds the colour. */
    mid: 1,
    /** Hats and air brighten the highlights and lift the stamens. */
    high: 1,
  },
};
