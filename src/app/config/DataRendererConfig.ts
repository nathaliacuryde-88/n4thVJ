/**
 * Data Bloom: the numbers of the day — the music now, the sky, the weather
 * and the air of the city hour by hour — drawn as glowing heat-map charts,
 * with their little numbers.
 */
export const DataConfig = {
  data: {
    /** 0 Auto (takes turns), 1 Sound, 2 Sky, 3 Weather, 4 Air. */
    source: 0,
    /** Seconds before Auto moves to the next data. */
    every: 40,
    /** 0 Auto (changes with the data, and on a clap), 1 Bloom, 2 Rings, 3 Radar. */
    shape: 0,
  },

  look: {
    /** How big the chart is in the frame. */
    size: 1,
    /** How far the colour glows out of the shapes. */
    glow: 1,
    /** The fine circles and spokes. */
    grid: 0.6,
    /** The little numbers and their names. */
    labels: 1,
    /** How fast it turns; the finger count still sets the tempo. */
    spin: 0.3,
  },

  hands: {
    /** The part of the chart under the hand grows and lights up. */
    focus: 1,
    /** A clap changes the shape: 0 off, 1 on. */
    clap: 1,
  },

  sound: {
    /** Each kick pulses the chart. */
    beat: 1,
    /** Bass breathes the glow. */
    bass: 1,
  },
};
