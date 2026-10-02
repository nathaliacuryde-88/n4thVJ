/**
 * Butterflies: an inflated flock in the Bloom Field style, flying loops on
 * the studio backdrop.
 *
 * With nobody playing and the room silent the defaults are the preview that
 * was approved: five butterflies on a twelve-second loop.
 */
export const ButterfliesConfig = {
  colour: {
    /** Palette cycles per twelve-second loop. Negative runs it backwards. */
    speed: 1,
    /** Where on the palette the whole flock sits. A manual hue-cycle. */
    offset: 0,
    /** Which palette: 0 the reel's, then three others. Swaps crossfade. */
    palette: 0,
    /** How far the shadows travel forward through the palette. */
    depth: 0.32,
  },

  pattern: {
    /** Sweeps across each wing, lobe by lobe. */
    sweep: 1,
    /** Horizontal bands across the flock. */
    bands: 1,
    /** Rings out along each lobe — they read as eyespots. */
    rings: 1,
    /** How much the three drift on their own. 0 holds them where set. */
    melt: 1,
  },

  flight: {
    /** Butterflies in the air. Newcomers fly in from the side; leavers fly off. */
    count: 5,
    /** Scales every butterfly. */
    size: 1,
    /** How wide the flight loops are. 0 hovers in place. */
    swing: 1,
    /** How fast they travel round their loops, on top of the hands' tempo. */
    speed: 1,
    /** How fast the wings beat, on top of the hands' tempo. */
    wingbeat: 1,
    /** The grey studio behind them. 0 is black, which stacks cleanly. */
    backdrop: 1,
  },

  hands: {
    /** How strongly the flock follows a hand around the frame. */
    follow: 1,
    /** How much the finger count changes the wing stroke. */
    stroke: 1,
    /** How far spreading two hands scatters the flock apart. */
    spread: 1,
    /** How hard a clap bursts the flock outward. */
    clap: 1,
  },

  sound: {
    /** Each kick flicks the wings up and swells the bodies. */
    beat: 1,
    /** Bass widens the flight loops. */
    bass: 1,
    /** Melody speeds the colour. */
    mid: 1,
    /** Hats quicken the wingbeat into a flutter and brighten the highlights. */
    high: 1,
  },
};
