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
    /** How it is drawn: 0 inflated, 1 cut paper, 2 a line drawing in light, 3 a two-ink print. */
    style: 0,
    /** How far the shadows travel forward through the palette. */
    depth: 0.32,
  },

  swarm: {
    /** Jellyfish, 1 to 8. They drift in and away when this changes. */
    count: 4,
    /** Zoom: 1 as framed, above 1 closer, below 1 further away. */
    zoom: 1,
    /** Where they sit: below 0 lower in the frame, above 0 higher. */
    height: 0,
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
    /** Seconds each takes to rise into view; the gap between arrivals grows with it. */
    arrival: 5,
    /** Water: carried by a soft spring through heavy water, sinking between pulses and driven up by each. 0: placed directly. */
    water: 0,
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
    /** The music carries the swarm on a current, swaying it side to side, wider and faster as it fills. */
    flow: 1,
    /** A heavy bass hit swells the swarm apart, and it drifts slowly back together. 0: off. */
    swell: 0,
    /** Which part of the sound the bell hears (its swell, squeeze, wandering): -1 the bass, as designed; 0 all, 1 lows, 2 mids, 3 highs. */
    bell: -1,
    /** Which part of the sound ripples the tentacles: -1 the hats, as designed; 0 all, 1 lows, 2 mids, 3 highs. */
    tentacles: -1,
  },
};
