/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RUNTIME PARAMETERS
 * ═══════════════════════════════════════════════════════════════════════════
 * A renderer's tunable numbers live in a plain config object (see
 * src/app/config). This module lets a slider — or later a MIDI knob, or a
 * preset — override any of those numbers at runtime without the renderer
 * knowing where the value came from.
 *
 * A parameter is addressed by its dotted path into that config object, so
 * 'trail.fadeAlpha' means GeometricConfig.trail.fadeAlpha. The config stays
 * the single source of truth for defaults: nothing here restates them.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** One slider. `path` addresses a number inside the renderer's config object. */
export interface ParamSpec {
  path: string;
  label: string;
  min: number;
  max: number;
  step: number;
  /** Shown under the label. Usually lifted from the config file's own comment. */
  hint?: string;
}

/** Sliders that belong together, rendered as one titled block. */
export interface ParamGroup {
  name: string;
  params: ParamSpec[];
}

/** Overrides for one renderer, keyed by the same dotted paths. */
export type ParamValues = Record<string, number>;

/** Every renderer's overrides, keyed by VisualPattern. */
export type AllParamValues = Record<string, ParamValues>;

/** Read the number at a dotted path, or undefined if the path does not resolve. */
export function getByPath(source: unknown, path: string): number | undefined {
  let node: unknown = source;
  for (const key of path.split('.')) {
    if (typeof node !== 'object' || node === null) return undefined;
    node = (node as Record<string, unknown>)[key];
  }
  return typeof node === 'number' ? node : undefined;
}

/**
 * A deep copy of `defaults` with each override applied at its path.
 *
 * Called when a value changes, not per frame, so the copy is cheap. Paths that
 * do not resolve to an existing number are ignored — a stale override left in
 * localStorage by a renamed parameter must not invent a new config key.
 */
export function withOverrides<T>(defaults: T, values: ParamValues): T {
  const copy = structuredClone(defaults);
  for (const [path, value] of Object.entries(values)) {
    if (!Number.isFinite(value)) continue;
    if (getByPath(defaults, path) === undefined) continue;

    const keys = path.split('.');
    const leaf = keys.pop()!;
    let node: Record<string, unknown> = copy as Record<string, unknown>;
    for (const key of keys) node = node[key] as Record<string, unknown>;
    node[leaf] = value;
  }
  return copy;
}

/**
 * Coerce anything that came out of localStorage into overrides we can trust.
 *
 * A hand-edited or half-written entry must not be able to take the app down:
 * `withOverrides` already ignores unknown paths, but the slider UI would still
 * try to render whatever sits at a known one. Anything that is not a finite
 * number is dropped here, at the boundary, so everything downstream is typed
 * correctly and true.
 */
export function sanitizeAllParams(raw: unknown): AllParamValues {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) return {};

  const clean: AllParamValues = {};
  for (const [pattern, values] of Object.entries(raw)) {
    if (typeof values !== 'object' || values === null || Array.isArray(values)) continue;

    const kept: ParamValues = {};
    for (const [path, value] of Object.entries(values)) {
      if (typeof value === 'number' && Number.isFinite(value)) kept[path] = value;
    }
    if (Object.keys(kept).length > 0) clean[pattern] = kept;
  }
  return clean;
}
