/**
 * The layer stack's shared shape and constants.
 *
 * These live here rather than in App because Controls needs them too, and
 * App imports Controls — reaching back the other way for a runtime value
 * would make the two modules circular.
 */

import { VisualPattern } from '../App';
import { ColorMode } from './palette';

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
  hue: number;
  saturation: number;
  colorMode: ColorMode;
}

/**
 * Visuals that can be stacked at once. Three is enough to build a look and
 * still tell the parts apart; past that the blend just reads as white.
 */
export const MAX_LAYERS = 3;

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
