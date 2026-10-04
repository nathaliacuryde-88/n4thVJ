/**
 * Watercolour Sky: washes of pigment on paper in the nature family's
 * palettes, edges darker where the paint pooled, drops blooming open on the
 * kick. Made to sit softly behind the flowers, butterflies and the rest.
 */
export const WatercolourConfig = {
  colour: {
    /** Palette cycles per twelve-second loop. Negative runs it backwards. */
    speed: 0.4,
    /** Where on the palette the washes sit. */
    offset: 0.75,
    /** Which palette: the Bloom Field four. Swaps crossfade. */
    palette: 0,
  },

  paint: {
    /** How many washes are glazed over each other, 1 to 3. */
    washes: 3,
    /** How wet: soft, bleeding edges at 1, crisp ones at 0. */
    wet: 0.5,
    /** How fast the washes drift across. */
    drift: 1,
    /** How many drops bloom on the kicks. */
    drops: 0.5,
    /** The paper. 0 swaps it for black, the paint glowing on it — stacks over other layers. */
    paper: 1,
  },

  hands: {
    /** How hard a hand pushes the wet paint aside. */
    push: 1,
    /** A clap splashes drops where the hand is. */
    clap: 1,
  },

  sound: {
    /** Each kick can drop fresh paint. */
    beat: 1,
    /** Bass swells the washes. */
    bass: 1,
    /** Melody moves the colour along. */
    mid: 1,
  },
};
