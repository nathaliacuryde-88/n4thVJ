/**
 * ═══════════════════════════════════════════════════════════════════════════
 * WATER RIPPLE CONFIGURATION (TD, key 1)
 * ═══════════════════════════════════════════════════════════════════════════
 * See references/water-ripple-effect for the TouchDesigner patch this follows.
 *
 * The chain: a soft blob is stamped where the hands are, fed into a feedback
 * loop with decay and spread to build a greyscale height field, and the camera
 * image is then bent by the slope of that field.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const RippleConfig = {
  /** The blob stamped at each hand point every frame. */
  stamp: {
    /** Radius as a fraction of the screen height. */
    radius: 0.075,

    /** How much height each stamp adds. Higher piles up faster. */
    strength: 0.55,

    /**
     * Stamp the fingertips as well as the palm, at this fraction of the palm
     * radius. 0 leaves a single round blob per hand, as in the original patch.
     */
    fingerScale: 0.45,

    /** How much the bass swells the blob. 0 ignores audio. */
    audioSwell: 0.5,
  },

  /** The feedback loop that turns those stamps into a spreading trail. */
  field: {
    /**
     * Fraction of the height field surviving each frame.
     * 0.9 is a short wake, 0.99 a long slick that barely fades.
     */
    decay: 0.965,

    /** How far height bleeds outward per frame, in pixels. The spread. */
    spread: 1.6,
  },

  /** How the height field bends the camera image. */
  refraction: {
    /** Displacement at full slope, as a fraction of the screen. */
    amount: 0.09,

    /** Extra colour separation across the refraction. Reads as thick glass. */
    dispersion: 0.35,
  },

  /** The white gloss riding on the ridge of the trail. */
  highlight: {
    /** 0 = no gloss, just distortion. */
    amount: 0.9,

    /** Higher is a tighter, harder specular edge. */
    sharpness: 3.5,

    /** How much of the palette bleeds into the gloss instead of pure white. */
    tint: 0.35,
  },

  /** What sits underneath when there is no camera. */
  fallback: {
    /**
     * Brightness of the height field drawn on its own when no camera is
     * available, so the visual still reads rather than showing nothing.
     */
    fieldBrightness: 0.85,
  },
};
