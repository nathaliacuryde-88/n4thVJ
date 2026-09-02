# Giving a renderer sliders

The SHAPE panel builds itself from a registry. It contains no knowledge of any
particular visual, so exposing a new one is a data change, not a UI change.

A parameter is addressed by its **dotted path into the renderer's config
object** — `'layers.count'` means `GeometricConfig.layers.count`. The config
file stays the single source of truth for defaults; nothing else restates them.

Wired up today: **Geometric**, **Particles**, **Waves**.

## The three steps

### 1. Give the renderer a config object

If it already has one under [`src/app/config`](../src/app/config), skip this.

Otherwise lift its magic numbers into `src/app/config/<Name>RendererConfig.ts`,
grouped by what they do:

```ts
export const HalftoneConfig = {
  dots: {
    spacing: 12,
    maxRadius: 6,
  },
  motion: {
    driftSpeed: 0.4,
  },
};
```

Lift only what you would actually reach for. A number used once, that you would
never turn during a set, is better left where it is.

### 2. Read from a live copy

In the renderer, swap the direct config reads for a field, and accept overrides:

```ts
import { HalftoneConfig } from '../../config/HalftoneRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';

export class HalftoneRenderer {
  /** Live copy of HalftoneConfig, with any slider overrides applied. */
  private cfg = HalftoneConfig;

  setParams(values: ParamValues) {
    this.cfg = withOverrides(HalftoneConfig, values);
  }

  render(...) {
    const spacing = this.cfg.dots.spacing;   // not HalftoneConfig.dots.spacing
  }
}
```

`withOverrides` deep-copies the defaults and writes each override at its path.
It runs when a value changes, not per frame, and ignores paths that do not
resolve — so an override left behind by a renamed parameter is dropped rather
than inventing a config key.

**If the file holds a second class** (the way `ParticleRenderer.ts` holds
`Particle`), that class must be *handed* the live config rather than importing
the defaults, or it will silently keep using them:

```ts
type HalftoneCfg = typeof HalftoneConfig;

class Dot {
  update(cfg: HalftoneCfg) { … }
}
```

### 3. Add a registry entry

In [`src/app/params/registry.ts`](../src/app/params/registry.ts):

```ts
halftone: {
  config: HalftoneConfig,
  groups: [
    {
      name: 'Dots',
      params: [
        { path: 'dots.spacing',   label: 'Spacing', min: 2, max: 60, step: 1 },
        { path: 'dots.maxRadius', label: 'Size',    min: 0.5, max: 30, step: 0.5 },
      ],
    },
    {
      name: 'Motion',
      params: [
        { path: 'motion.driftSpeed', label: 'Drift', min: 0, max: 3, step: 0.05,
          hint: '0 = frozen' },
      ],
    },
  ],
},
```

The sliders appear. Nothing else to do.

## Choosing ranges

`min` and `max` are the **useful performing range**, not the range that avoids a
crash. Both ends should be somewhere you would actually stop — if the bottom
third of a slider is unusable, the slider is badly ranged.

Pick `step` so the value reads cleanly: the panel shows exactly enough decimals
to express the step, so `0.01` reads `0.35` and `1` reads `12`.

Keep groups to roughly 3–6 sliders. Order them the way you would reach for them.

## How values travel

```
ParamPanel  ──onChange──▶  App.paramValues[pattern]  ──props──▶  VJCanvas
                                    │                                 │
                              localStorage                   renderer.setParams()
```

Values are stored per renderer, so switching away and back keeps your tweaks,
and they survive a reload. Anything in storage that is not a finite number is
discarded on load — a corrupt entry must never take the app down mid-set.

Clicking a parameter's **label** resets that one; the arrow in the panel header
resets the whole renderer. A parameter that differs from its default is shown in
cyan with a dot, so you can always see what you have moved.

Because the panel writes into a plain `{ path: value }` record, a MIDI knob or a
preset can write into exactly the same place later without touching any renderer.
