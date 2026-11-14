/**
 * Anemones: a garden of sea anemones in the inflated family. Each is a crown
 * of soft arms that opens to an open palm and folds shut on a fist.
 */
export const AnemoneConfig = {
  colour: {
    /** Palette cycles per twelve-second loop. Negative runs it backwards. */
    speed: 1,
    /** Where on the palette the whole garden sits. */
    offset: 0,
    /** Which palette: the Bloom Field four. Swaps crossfade. */
    palette: 2,
    /** How it is drawn: 0 inflated, 1 cut paper, 2 a line drawing in light, 3 a two-ink print. */
    style: 0,
    /** How far the shadows travel forward through the palette. */
    depth: 0.32,
  },

  garden: {
    /** How many anemones. They grow in and sink away when this changes. */
    count: 5,
    /** How long the arms are. */
    reach: 1,
    /** How much they sway in the current. */
    sway: 1,
    /** How fast everything moves, on top of the hands' tempo. */
    speed: 1,
    /** Camera distance. Lower is closer. */
    distance: 15.5,
    /** What stands behind them. 0 is black, which stacks cleanly. */
    backdrop: 1,
  },

  hands: {
    /** An open palm opens the crowns; a fist folds them shut. */
    open: 1,
    /** The arms lean towards the hand. */
    lean: 1,
    /** A clap snaps every crown shut; they open again slowly. */
    clap: 1,
  },

  sound: {
    /** Each kick: a pulse of colour runs out along the arms, and the crown swells. */
    beat: 1,
    /** Bass deepens the sway. */
    bass: 1,
    /** Hats brighten the tips. */
    high: 1,
  },
};
