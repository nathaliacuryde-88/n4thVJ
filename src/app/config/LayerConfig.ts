/**
 * The layer stack's shared shape and constants.
 *
 * These live here rather than in App because Controls needs them too, and
 * App imports Controls — reaching back the other way for a runtime value
 * would make the two modules circular.
 */

import { VisualPattern } from '../App';

/**
 * One position in the stack.
 *
 * Everything that makes a layer look the way it does lives here, so two layers
 * can run the same kind of settings at different values — the fader and the
 * palette included. Only the shape sliders are still keyed by pattern, since
 * those belong to the renderer rather than to the slot it is playing in.
 */
export interface Layer {
  pattern: VisualPattern;
  /** 0-1, the layer's own fader. */
  opacity: number;
  /**
   * How hard the hands drive this layer. 1 is neutral.
   *
   * Per layer rather than per set, so a stack can hold one visual drifting
   * under another she is playing hard. Zero hands it over to the automatic
   * drive instead of freezing it — a fader at zero on something still on
   * screen has to mean "not mine to play" rather than "stop".
   */
  motion: number;
  /** How the layer meets the ones under it. Screen when unset. */
  blend?: BlendMode;
}

/**
 * How a layer combines with what is under it — the canvas's own operations.
 *
 *   Screen      brightens, never darker: the soft default
 *   Add         light adds up and burns toward white
 *   Lighten     keeps whichever is brighter: black drops out, like a luma key
 *   Multiply    darkens: the layer stains what is under it
 *   Difference  inverts where they overlap: hard, graphic
 *   Overlay     contrast: lights lighter, darks darker
 *   Normal      covers, at its fader
 */
export const BLEND_MODES = ['screen', 'add', 'lighten', 'multiply', 'difference', 'overlay', 'normal'] as const;
export type BlendMode = (typeof BLEND_MODES)[number];

export const BLEND_LABEL: Record<BlendMode, string> = {
  screen: 'Screen', add: 'Add', lighten: 'Lighten', multiply: 'Multiply',
  difference: 'Difference', overlay: 'Overlay', normal: 'Normal',
};

/** Short enough to sit beside a layer's name in the strip. */
export const BLEND_SHORT: Record<BlendMode, string> = {
  screen: 'Scrn', add: 'Add', lighten: 'Ltn', multiply: 'Mult',
  difference: 'Diff', overlay: 'Ovl', normal: 'Norm',
};

export const BLEND_OP: Record<BlendMode, GlobalCompositeOperation> = {
  screen: 'screen', add: 'lighter', lighten: 'lighten', multiply: 'multiply',
  difference: 'difference', overlay: 'overlay', normal: 'source-over',
};

export function nextBlend(mode: BlendMode | undefined, step = 1): BlendMode {
  const i = BLEND_MODES.indexOf(mode ?? 'screen');
  return BLEND_MODES[(i + step + BLEND_MODES.length) % BLEND_MODES.length];
}

/**
 * Visuals that can be stacked at once. Four: a background, two motifs and a
 * typographic layer over them, which is about as much as still reads as parts.
 */
export const MAX_LAYERS = 4;

/** How long a number has to be held before it stacks rather than switches. */
export const HOLD_MS = 400;

/**
 * What a layer comes in at when you stack it.
 *
 * Not 1: a dense visual like Halftone covers the whole frame, and screened over
 * the base at full strength it erases everything under it rather than mixing
 * with it. Three quarters leaves the base readable, and ] pushes it up from
 * there when the layer is sparse enough to take it.
 */
export const STACKED_OPACITY = 0.75;
