/**
 * Mosaic: your footage or your photograph, rebuilt out of type and shapes.
 *
 * The source is sampled down to a coarse grid and every cell is redrawn as one
 * mark whose weight follows that cell's brightness. Nothing here is about the
 * picture — it is about how densely the marks are laid down.
 */
export const MosaicConfig = {
  /** 0 Letters · 1 Dots · 2 Blocks · 3 Bars. */
  mode: 0,

  grid: {
    /** Cells across. Everything else scales from this. */
    columns: 48,
    /** Cell aspect. 1 is square; type reads better a little taller. */
    cellAspect: 1.15,
    /** Scale on each mark inside its cell. Above 1 lets them touch. */
    fill: 0.95,
    /** Hand spread coarsens the grid. 0 = fixed. */
    spreadDensity: 0.35,
  },

  tone: {
    /** Lifts the whole image before anything is drawn. */
    brightness: 0,
    /** Pushes mid greys towards black and white. 1 = as shot. */
    contrast: 1.3,
    /** Cells darker than this draw nothing, which is what opens the image up. */
    floor: 0.08,
    /** 1 reads the image inverted, so the darks carry the marks. */
    invert: 0,
  },

  letters: {
    /** 0 a density ramp, 1 the word typed for Kinetic Type. */
    ramp: 0,
    /** Stroke weight of the glyphs. */
    weight: 600,
    /** 1 draws them hollow. */
    outline: 0,
  },

  shape: {
    /** Blocks only: turns the squares towards diamonds. */
    rotate: 0,
    /** Bars only: grows them from the bottom rather than the middle. */
    anchor: 0,
    /** Dots and blocks: a floor under the mark so faint cells still register. */
    minimum: 0.05,
  },

  warp: {
    /** How far the hands drag the grid. */
    handPush: 0.04,
    /** A slow wave through the cells, independent of the hands. */
    ripple: 0,
    /** Speed of that wave. */
    rippleSpeed: 0.6,
  },

  colour: {
    /** 0 the layer's palette, 1 the colour the footage actually is. */
    fromSource: 0,
    /** Cycles the palette across the grid rather than per mark. */
    spread: 1,
  },

  audio: {
    /** Bass grows every mark. */
    bassScale: 0.35,
    /** A beat punches them wider. */
    beatKick: 0.25,
  },

  trail: {
    /** Lower leaves the previous frames smearing underneath. 1 = clean. */
    fadeAlpha: 1,
  },
};
