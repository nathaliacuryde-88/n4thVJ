/**
 * ═══════════════════════════════════════════════════════════════════════════
 * POST PIPELINE CONFIGURATION (the FX tab)
 * ═══════════════════════════════════════════════════════════════════════════
 * These apply to the finished frame, whichever renderer produced it.
 *
 * Every effect defaults to OFF, so with nothing touched the output is exactly
 * what the renderer drew — the pipeline detects that everything is at rest and
 * blits straight to screen without running a single pass.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const PipelineConfig = {
  /**
   * FEEDBACK — last frame's output, transformed and screened under this one.
   * The single biggest change in character available here.
   */
  feedback: {
    /**
     * How much of the previous frame survives.
     * 0 = off. 0.8 = long smear. Above ~0.97 the image never really clears.
     */
    amount: 0,

    /**
     * Scale applied to the history each frame.
     * >1 pushes trails outward (tunnel), <1 pulls them inward (collapse).
     * 1.0 = no scaling, so trails stay put and simply fade.
     */
    zoom: 1.0,

    /** Rotation of the history per frame, in radians. Spirals the trails. */
    rotate: 0,

    /** Drift of the history per frame, in screen widths. */
    offsetX: 0,
    offsetY: 0,

    /**
     * Hue rotation applied to the history each frame, in radians.
     * This is what makes a trail change colour as it ages.
     */
    hueShift: 0,
  },

  /** DISPLACE — push pixels along a drifting noise field. */
  displace: {
    /** 0 = off. Around 0.02 is heat haze; past 0.15 the image dissolves. */
    amount: 0,
    /** Noise frequency. Low = broad wobble, high = fine grain. */
    scale: 3,
    /** How fast the field drifts. */
    speed: 0.2,
  },

  /** RGB SPLIT — radial chromatic aberration, sharp centre, fringed edges. */
  rgbSplit: {
    /** 0 = off. 0.01 is a subtle edge; 0.05 is an obvious split. */
    amount: 0,
  },

  /** KALEIDOSCOPE — fold the frame into mirrored wedges. */
  kaleido: {
    /** Below 2 = off. */
    segments: 0,
    /** Rotation of the fold, in radians. */
    spin: 0,
  },

  /** QUANTIZE — throw away spatial then colour resolution. */
  quantize: {
    /** Block size in pixels. 1 or below = off. */
    pixel: 0,
    /** Colour steps per channel. Below 2 = off. 3-6 posterizes hard. */
    levels: 0,
  },

  /** BLOOM — bleed the highlights. */
  bloom: {
    /** 0 = off. */
    amount: 0,
    /** Luminance above which a pixel glows. */
    threshold: 0.6,
  },
};
