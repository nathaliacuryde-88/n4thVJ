/**
 * Kinetic type. The words come from the library; this is how they move.
 *
 * Five movements, picked with Mode. They share the type and the grid, and each
 * has its own group — the groups for the other four do nothing while a mode is
 * selected, so leave them be and reach for the one you are in.
 */
export const TextConfig = {
  /**
   * 0 Mask — the grid is carved by your hands, so the words draw the silhouette
   * 1 Radial — the grid is pinched or bulged from a centre
   * 2 Wave — each row slides on a sine, so the field undulates
   * 3 Depth — the word repeats away to a vanishing point and flies through
   * 4 Scatter — the letters leave the word and spread across the frame
   */
  mode: 0,

  type: {
    /**
     * How much of its grid cell the word fills, across.
     *
     * The size is derived from this rather than set outright, because the
     * tiling only reads when a word fits its cell — a long word at a fixed
     * size overruns its neighbours and the shape underneath disappears. At 1
     * the words touch; below that they sit apart on the grid.
     */
    fit: 0.82,
    weight: 700,
    /** Space between letters, in ems. The references live on this. */
    tracking: 0.08,
    outline: 0,
    strokeWidth: 1.5,
  },

  grid: {
    columns: 14,
    rows: 26,
    /** Scales the spacing without changing the type. Breathes the whole field. */
    spread: 1,
    /** How far the spacing swings on its own. */
    breathe: 0,
    breatheSpeed: 0.4,
  },

  mask: {
    /** How far each hand point reaches, as a fraction of the frame. */
    reach: 0.18,
    /** Above this the cell shows. Lower fills more of the frame. */
    threshold: 0.5,
    /** Softens the edge of the silhouette into a dither rather than a hard cut. */
    softness: 0.25,
    /** Swaps inside for outside. */
    invert: 0,
  },

  radial: {
    /** Positive bulges out of the centre, negative pinches into it. */
    strength: 0.6,
    /** Above 1 the distortion bites at the edges; below, near the middle. */
    power: 2,
    /**
     * How far a ring travels outward on each onset.
     *
     * This replaced a free-running sine. The field used to breathe on its own
     * clock, which looked like it was reacting to the music without ever
     * having heard any — the worst of both, since it neither sat still nor
     * hit anything. A ring leaving the centre on each onset is the same
     * gesture, actually locked to what is playing.
     */
    ring: 0.55,
    /** How many rings are visible at once. Higher is a tighter ripple. */
    ringDensity: 3.2,
    /** How the field twists. Finger count moves this, so gestures read. */
    twist: 0.5,
  },

  wave: {
    /** How far a row slides, as a fraction of the width. */
    amplitude: 0.12,
    /** Waves down the height of the frame. */
    frequency: 1.5,
    speed: 1,
    /** A second wave on the size, so rows swell as they slide. */
    scaleWave: 0,
  },

  depth: {
    /** How fast the field flies past. Negative runs the other way. */
    speed: 0.35,
    /** How much tracking opens up as a row comes towards you. */
    spread: 1.4,
    /** Bends the falloff — higher stacks the far rows tighter. */
    curve: 1.6,
    /** Size of the nearest row, as a fraction of the height. */
    size: 0.1,
    /**
     * Where the vanishing point sits, down the frame. High up leaves the run
     * filling the frame; at the middle the top half is empty sky.
     */
    horizon: 0.12,
    /** Rows in the run. */
    steps: 18,
  },

  scatter: {
    /** 0 leaves the word readable, 1 throws it right across the frame. */
    amount: 0.6,
    /** Winds the targets onto a spiral rather than scattering them loose. */
    spiral: 0,
    /** Delay between one letter leaving and the next. */
    stagger: 0.35,
    /** Speed the letters wander at once they are out. */
    drift: 0.5,
    size: 0.12,
  },

  color: {
    /** Above 0.5 ignores the palette and cycles hues, one per element. */
    rainbow: 0,
    /** Hue step between neighbouring elements. */
    step: 37,
    /** How fast the whole cycle rotates. */
    cycleSpeed: 0.3,
  },

  motion: {
    /** How far the hands steer whichever mode is running. */
    handInfluence: 1,
  },

  audio: {
    /** Bass swells the type. */
    bassScale: 0.3,
    /** A beat kicks the movement of whichever mode is running. */
    beatKick: 0.5,
  },

  trail: {
    /** Lower leaves longer smears. 1 = clear every frame. */
    fadeAlpha: 1,
  },
};
