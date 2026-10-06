/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ONE TURN, ONE THING
 * ═══════════════════════════════════════════════════════════════════════════
 * What a controller's single knob or pair of buttons means, for things that
 * in the browser are a whole panel of sliders.
 *
 * An effect on a knob: all the way down is off; turning it up switches the
 * effect on and opens it to that strength. Each effect is turned by the one
 * slider that reads as "how much" of it — the trail of Feedback, the warp of
 * Displace, the block size of Pixelate — and its other sliders keep what she
 * set in the panel, or the visible preset the first time.
 *
 * "More" and "fewer": how many things are on screen, for the visuals made of
 * things — dice, flowers, butterflies, rows of words. The rest zoom instead.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export interface KnobFx {
  /** The effect's name, as in the effects panel. */
  name: string;
  path: string;
  /** The value at the first notch up, and at full turn. */
  from: number;
  to: number;
  whole?: boolean;
}

/** The effects that go on knobs, in knob order. Kaleido and Noise stay buttons. */
export const KNOB_FX: KnobFx[] = [
  { name: 'Feedback', path: 'feedback.amount', from: 0.3, to: 0.97 },
  { name: 'Colour', path: 'colour.hue', from: 0.1, to: 3.14 },
  { name: 'Displace', path: 'displace.amount', from: 0.01, to: 0.3 },
  { name: 'Chromatic', path: 'rgbSplit.amount', from: 0.004, to: 0.1 },
  { name: 'Pixelate', path: 'pixelate.pixel', from: 3, to: 64, whole: true },
  { name: 'Echo', path: 'echo.count', from: 1, to: 6, whole: true },
  // Fewer columns are bigger characters: up is chunkier.
  { name: 'Atlas', path: 'atlas.columns', from: 200, to: 24, whole: true },
  { name: 'Fluted', path: 'fluted.bend', from: 0.1, to: 2 },
];

/** Below this a knob counts as all the way down: off. */
export const KNOB_OFF = 0.02;

export function knobValue(fx: KnobFx, v: number): number {
  const t = (v - KNOB_OFF) / (1 - KNOB_OFF);
  const x = fx.from + Math.max(0, Math.min(1, t)) * (fx.to - fx.from);
  return fx.whole ? Math.round(x) : Math.round(x * 1000) / 1000;
}

/** Where a knob would sit for a value: the inverse, for soft takeover. */
export function knobPosition(fx: KnobFx, value: number): number {
  const t = (value - fx.from) / (fx.to - fx.from);
  return KNOB_OFF + Math.max(0, Math.min(1, t)) * (1 - KNOB_OFF);
}

/**
 * The sliders that say how many things a visual shows, and how far one press
 * moves them. Several at once (the shared world) move together.
 */
export const COUNTS: Record<string, { path: string; step: number }[]> = {
  geometric: [{ path: 'layers.count', step: 1 }],
  particles: [{ path: 'limits.maxParticles', step: 25 }],
  text: [{ path: 'grid.rows', step: 2 }],
  bloom: [{ path: 'field.count', step: 1 }],
  butterflies: [{ path: 'flight.count', step: 1 }],
  particleimage: [{ path: 'points.count', step: 0.1 }],
  bigtype: [{ path: 'type.repeat', step: 1 }],
  world: [
    { path: 'world.flowers', step: 1 },
    { path: 'world.butterflies', step: 1 },
    { path: 'world.dandelions', step: 1 },
    { path: 'world.jellyfish', step: 1 },
  ],
  jellyfish: [{ path: 'swarm.count', step: 1 }],
  dandelion: [{ path: 'field.count', step: 1 }],
  dice: [{ path: 'dice.count', step: 1 }],
  atlas: [{ path: 'type.density', step: 0.1 }],
  crowd: [{ path: 'crowd.figures', step: 4 }],
  waves: [
    { path: 'waveCount.active', step: 2 },
    { path: 'waveCount.idle', step: 2 },
  ],
};

export const ZOOM_MIN = 0.5;
export const ZOOM_MAX = 3;
export const ZOOM_STEP = 1.12;
