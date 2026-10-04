/**
 * Jellyfish Drift: inflated jellyfish in the Bloom Field style — a bell of fat
 * lobes like a flower turned upside down, trailing tentacles — swimming by
 * pulses through the frame.
 */
export const JellyfishConfig = {
  colour: {
    /** Palette cycles per twelve-second loop. Negative runs it backwards. */
    speed: 1,
    /** Where on the palette the whole swarm sits. A manual hue-cycle. */
    offset: 0,
    /** Which palette: the Bloom Field four. Swaps crossfade. */
    palette: 0,
    /** How far the shadows travel forward through the palette. */
    depth: 0.32,
  },

  swarm: {
    /** Jellyfish, 1 to 8. They drift in and away when this changes. */
    count: 4,
    /** How big they are. */
    size: 1,
    /** How far each wanders round its patch of water. */
    drift: 1,
    /** How hard each pulse squeezes the bell. */
    pulse: 1,
    /** How long the tentacles trail. */
    tentacles: 1,
    /** The grey studio behind them. 0 is black, which stacks cleanly. */
    backdrop: 1,
  },

  hands: {
    /** How far the swarm drifts after a hand. */
    follow: 1,
    /** How far spreading two hands scatters them. */
    spread: 1,
    /** How hard a clap makes every bell jet away. */
    clap: 1,
  },

  sound: {
    /** Each kick is a pulse: the bells squeeze and jet. */
    beat: 1,
    /** Bass swells the bells and deepens the drift. */
    bass: 1,
    /** Melody speeds the colour. */
    mid: 1,
    /** Hats and air ripple the tentacles and brighten the highlights. */
    high: 1,
  },
};
