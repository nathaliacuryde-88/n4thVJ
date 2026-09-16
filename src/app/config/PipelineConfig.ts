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
   * MASTER — one switch over the whole chain.
   *
   * Settings here persist across reloads, so it is entirely possible to arrive
   * at a page still wearing a heavy feedback smear set an hour ago and conclude
   * the thing is broken. This is the way out, and the FX button in the corner
   * lights up whenever the chain is altering the image at all.
   */
  master: {
    /** 0 bypasses every stage at once, keeping all of their settings. */
    enabled: 1,
  },

  /**
   * TRANSITION — how a pattern change reaches the screen.
   *
   * Both renderers run for the length of the fade, so a slow one costs two
   * renderers at once. That is fine between 2D patterns and worth watching
   * between two heavy three.js ones.
   */
  transition: {
    /** Bypass. 0 = hard cut, whatever the duration says. */
    enabled: 1,

    /** Seconds to cross from the outgoing visual to the incoming one. */
    duration: 1,
  },

  /**
   * FEEDBACK — last frame's output, transformed and screened under this one.
   * The single biggest change in character available here.
   */
  feedback: {
    /** Bypass. 0 keeps every setting but takes the stage out of the chain. */
    enabled: 1,

    /** Stage opacity: blends between this stage's input and its output. */
    mix: 1,

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
     * This is what makes a trail change colour as it ages — so like every
     * transform in this stage it needs an Amount above zero to show at all.
     * For turning the hue of the picture itself, use the Colour stage.
     */
    hueShift: 0,
  },

  /**
   * COLOUR — turn the hue of the whole frame, and pull the saturation.
   *
   * Separate from the feedback stage's own hue shift, which only ages the
   * trail and therefore does nothing until feedback has an Amount.
   */
  colour: {
    /** Bypass. 0 keeps every setting but takes the stage out of the chain. */
    enabled: 1,

    /** Stage opacity: blends between this stage's input and its output. */
    mix: 1,

    /** Hue rotation in radians. 0 = off. */
    hue: 0,
    /** 1 = untouched, 0 = grey, above 1 = pushed. */
    saturation: 1,
  },

  /** DISPLACE — push pixels along a drifting noise field. */
  displace: {
    /** Bypass. 0 keeps every setting but takes the stage out of the chain. */
    enabled: 1,

    /** Stage opacity: blends between this stage's input and its output. */
    mix: 1,

    /** 0 = off. Around 0.02 is heat haze; past 0.15 the image dissolves. */
    amount: 0,
    /** Noise frequency. Low = broad wobble, high = fine grain. */
    scale: 3,
    /** How fast the field drifts. */
    speed: 0.2,
  },

  /** RGB SPLIT — radial chromatic aberration, sharp centre, fringed edges. */
  rgbSplit: {
    /** Bypass. 0 keeps every setting but takes the stage out of the chain. */
    enabled: 1,

    /** Stage opacity: blends between this stage's input and its output. */
    mix: 1,

    /** 0 = off. 0.01 is a subtle edge; 0.05 is an obvious split. */
    amount: 0,
  },

  /** KALEIDOSCOPE — fold the frame into mirrored wedges. */
  kaleido: {
    /** Bypass. 0 keeps every setting but takes the stage out of the chain. */
    enabled: 1,

    /** Stage opacity: blends between this stage's input and its output. */
    mix: 1,

    /** Below 2 = off. */
    segments: 0,
    /** Rotation of the fold, in radians. */
    spin: 0,
  },

  /** PIXELATE — throw away spatial then colour resolution. */
  pixelate: {
    /** Bypass. 0 keeps every setting but takes the stage out of the chain. */
    enabled: 1,

    /** Stage opacity: blends between this stage's input and its output. */
    mix: 1,

    /** Block size in pixels. 1 or below = off. */
    pixel: 0,
    /** Colour steps per channel. Below 2 = off. 3-6 posterizes hard. */
    levels: 0,
  },

  /** NOISE TILE — dither the frame into a grid of tones that are not there. */
  noiseTile: {
    /** Bypass. 0 keeps every setting but takes the stage out of the chain. */
    enabled: 1,

    /** Stage opacity: blends between this stage's input and its output. */
    mix: 1,

    /**
     * Tile size in pixels. 1 or below = off.
     *
     * Fixed at 2 when the effect is switched on: larger tiles turn the dither
     * into a mosaic, which is Pixelate's job and a different effect entirely.
     * Two is where it still reads as texture.
     */
    size: 0,
    /** How much random noise rides on the dither pattern. 0 is a clean grid. */
    grain: 0.35,
    /** How fast the grain crawls. Fixed: it is texture, not a control. */
    drift: 0.4,
  },

  /** INWARD ECHO — copies of the frame falling towards the centre. */
  echo: {
    /** Bypass. 0 keeps every setting but takes the stage out of the chain. */
    enabled: 1,

    /** Stage opacity: blends between this stage's input and its output. */
    mix: 1,

    /** Copies behind the frame. 0 = off. */
    count: 0,
    /** How far apart they sit. Bigger is a deeper tunnel. */
    depth: 0.18,
    /** How much each copy keeps. Lower is a shorter trail. */
    fade: 0.68,
    /** How fast the tunnel travels. Loops seamlessly at any speed. */
    speed: 0.25,
  },

  /** FLUTED GLASS — the frame through ribbed architectural glass. */
  fluted: {
    /** Bypass. 0 keeps every setting but takes the stage out of the chain. */
    enabled: 1,

    /** Stage opacity: blends between this stage's input and its output. */
    mix: 1,

    /** Ribs across the frame. 0 = off. */
    ribs: 0,
    /** How hard each rib bends what is behind it. */
    bend: 0.5,
    /** Highlight and shadow along the rib edges. */
    shine: 0.35,
    /** 1 for vertical ribs, 0 for horizontal. */
    vertical: 1,
  },
};
