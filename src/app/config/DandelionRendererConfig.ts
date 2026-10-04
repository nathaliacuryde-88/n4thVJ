/**
 * Dandelion: Nath's dandelion model in the Bloom Field palettes — the stem,
 * bracts and seed bodies as modelled, the hairs as painted strokes — swaying
 * as if the music were the wind, its seeds drifting off and floating home.
 */
export const DandelionConfig = {
  colour: {
    /** Palette cycles per twelve-second loop. Negative runs it backwards. */
    speed: 1,
    /** Where on the palette the whole field sits. A manual hue-cycle. */
    offset: 0,
    /** Which palette: the Bloom Field four. Swaps crossfade. */
    palette: 0,
    /** How far the shadows travel forward through the palette. */
    depth: 0.32,
  },

  field: {
    /** Dandelions, 1 to 20. They grow in and sink away when this changes. */
    count: 3,
    /** How much they sway and wave, 0 to 2. */
    sway: 1,
    /** How much they bounce up and down — deeper with the music, a hop on each kick. */
    bounce: 1,
    /**
     * How many seeds fly: the master for every way a seed leaves — its own
     * drift, the music's wind, the kicks, a clap, an open hand. At 0 the
     * heads stay whole.
     */
    drift: 0.2,
    /** The grey studio behind them. 0 is black, which stacks cleanly. */
    backdrop: 1,
  },

  hands: {
    /** How hard waving a hand blows — a gust in the direction of the wave. */
    wind: 1,
    /** An open hand lets the seeds go; a fist calls them home. */
    release: 1,
    /** How strongly loose seeds swirl after the hand. */
    follow: 1,
    /** How hard a clap blows every seed off at once. */
    clap: 1,
  },

  sound: {
    /** Loudness is the wind: the field leans and sways, seeds lift off. */
    wind: 1,
    /** Each kick is a gust that bows the stems and blows a few seeds away. */
    gust: 1,
    /** Melody speeds the colour. */
    mid: 1,
    /** Hats and air make the hairs shimmer. */
    high: 1,
  },
};
