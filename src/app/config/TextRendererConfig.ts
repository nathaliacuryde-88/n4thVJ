/**
 * Kinetic type. The words come from the library; everything about how they move
 * is here.
 */
export const TextConfig = {
  type: {
    /** Cap height as a fraction of the canvas height. */
    size: 0.22,
    /** Canvas font weight. */
    weight: 700,
    /** Extra space between letters, in ems. */
    tracking: 0.02,
    /** 0 = filled letters, 1 = outlines only. */
    outline: 0,
    strokeWidth: 2,
  },
  echo: {
    /** Copies behind the front one. This is what makes it read as extruded. */
    count: 14,
    /** How far each copy steps, in fractions of the canvas height. */
    offset: 0.018,
    /** Size added per copy. Above 1 the echo grows away from you. */
    scaleStep: 1.012,
    /** Rotation added per copy, in radians. */
    twist: 0,
    /** Opacity of the front copy. */
    opacity: 0.9,
    /** Taken off each copy going back. */
    fade: 0.055,
  },
  motion: {
    /** How far the hands steer the direction the echo runs in. */
    handInfluence: 1,
    /** Drift with no hands, so it is never still. */
    driftSpeed: 0.35,
    driftAmount: 0.5,
    /** Hand spread scales the type. 0 = fixed size. */
    spreadScale: 0.6,
  },
  audio: {
    /** Bass swells the type. */
    bassScale: 0.35,
    /** A beat kicks the echo further out. */
    beatPush: 0.6,
  },
  trail: {
    /** Lower leaves longer smears. 1 = clear every frame. */
    fadeAlpha: 0.35,
  },
};
