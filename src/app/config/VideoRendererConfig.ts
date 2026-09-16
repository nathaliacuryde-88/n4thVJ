/**
 * The uploaded clip. The file comes from the library; this is what is done to
 * it once it is playing.
 */
export const VideoConfig = {
  frame: {
    /** Scale on top of filling the screen. */
    zoom: 1,
    /** Hand spread zooms. 0 = fixed. */
    spreadZoom: 0.5,
    /** How far the hands push the image around. */
    handDrift: 0.12,
    /** 1 mirrors horizontally, the way a camera preview reads. */
    mirror: 0,
  },
  slice: {
    /** Horizontal bands the frame is cut into. Below 2 leaves it whole. */
    count: 12,
    /** How far bands slide, as a fraction of the width. */
    offset: 0.06,
    /** Speed the slide pattern travels through the bands. */
    speed: 0.8,
    /** A beat throws the bands wider. */
    beatKick: 1.25,
  },
  look: {
    /** Tints the clip towards the layer's palette. */
    tint: 0,
    /** Multiplies brightness. */
    gain: 1,
  },
  trail: {
    /** Lower leaves the previous frames smearing underneath. 1 = clean. */
    fadeAlpha: 1,
  },
};
