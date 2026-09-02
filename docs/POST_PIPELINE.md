# The post pipeline

The renderers draw shapes into a 2D canvas. That canvas never reaches the screen
directly — it is uploaded as a texture and pushed through a chain of fullscreen
fragment shaders on the GPU, and *that* is what you see.

This is the difference between a canvas animation and something that reads as a
signal chain. A renderer decides what shapes exist; the pipeline decides what
the frame becomes.

```
                            ┌──────────────────────────────────────┐
                            ▼                                      │
source canvas ─▶ feedback ─▶ displace ─▶ rgb split ─▶ kaleido ─▶ quantize ─▶ bloom ─▶ screen
   (2D)             ▲                                      │
                    └───────── previous frame's output ◀────┘
```

Every effect defaults to **off**. With the whole chain at rest the pipeline
detects it and blits the source straight to screen — one texture copy, no passes,
output identical to what the renderer drew.

## The master switch

**FX** in the corner bypasses the entire chain, and lights up whenever the chain
is altering the image at all. `X` does the same from the keyboard.

This matters because FX settings persist across reloads. Without it, arriving at
a page still wearing a heavy feedback smear set an hour earlier looks exactly
like the app being broken: every visual buried under the same wash, and switching
between them apparently doing nothing.

## Layers

Each stage is a layer, in the TouchDesigner sense:

- **The dot beside the stage name is its bypass.** Click it and the stage leaves
  the chain entirely — it stops costing anything — but every setting it holds is
  kept, greyed out, waiting. Click again and the look comes straight back.
- **Mix is that stage's opacity.** It blends between the stage's input and its
  output, so an effect can be eased in over a bar rather than snapped on.

A stage runs only when all three are true: switched on, mix above zero, and
actually doing something. Otherwise it is skipped, not run with a neutral value.

## Transitions

A pattern change is a crossfade, not a cut. The outgoing renderer keeps running
into its own canvas for the length of the fade and the two are blended *before*
the chain, so feedback and everything downstream see one continuous image
instead of a jump. **Crossfade** sets the length; bypassing the Transition layer
gives you hard cuts back.

Both renderers run for the duration, so a long fade between two heavy three.js
patterns is the expensive case. Switching again mid-fade drops whatever was
already on its way out rather than stacking decks.

## Feedback is the important one

The others are filters. Feedback is a loop: the **output of the entire chain** is
kept and sampled by the next frame, through a transform.

That single property is what produces most of the recognisable modern-VJ
vocabulary. The image builds on its own history instead of being redrawn:

| Want | Set |
|---|---|
| Long smear | Amount 0.9+, Zoom 1.0 |
| Tunnel running outward | Amount 0.9, Zoom slightly above 1 |
| Collapse inward | Amount 0.9, Zoom slightly below 1 |
| Spiral | add a little Rotate |
| Trails that change colour as they age | Hue drift, away from 0 |

Because the effects sit *inside* the loop, they compound: RGB split inside
feedback fringes a little more each generation, so the trail separates into
colour as it travels. That compounding is why the chain is ordered this way and
not applied as a flat stack.

**Amount above ~0.97** means the image effectively never clears. Useful
deliberately, alarming by accident.

The history is sampled with clamping at the edges, which is what gives feedback
its characteristic smeared border rather than a hard seam. Blending is `screen`
rather than `add`, so the centre never blows out to white however long the decay.

## The other stages

- **Displace** — pushes each pixel along a drifting value-noise field.
  TouchDesigner's Displace TOP. Small amounts read as heat haze or wet glass;
  past about 0.15 the image dissolves into the field. `Scale` sets the noise
  frequency, `Speed` how fast it drifts.
- **RGB split** — radial chromatic aberration. The offset grows with distance
  from the centre, the way a real lens misbehaves, so the middle stays sharp.
- **Kaleidoscope** — folds the frame into mirrored wedges. Below 2 segments it
  is off.
- **Quantize** — pixelate, then posterize. The cheapest way to make something
  read as digital rather than drawn: throw away spatial resolution, then colour
  resolution. Try it *inside* heavy feedback.
- **Bloom** — threshold, blur at half resolution, add back.

## Cost

One texture upload per frame plus one fullscreen pass per active effect (bloom
counts as four, three of them at half resolution). On a GPU these are cheap; on
software rendering they are not, and stacking the whole chain is noticeably
expensive. Check the frame rate on the machine you will actually perform on
before committing to a heavy chain.

Turning effects off genuinely removes their cost — the chain is rebuilt from the
current values every frame, and stages at their default are skipped, not run with
a neutral value.

## Adding an effect

1. Write the fragment body in [`src/app/pipeline/shaders.ts`](../src/app/pipeline/shaders.ts).
   `FRAGMENT_HEADER` already declares `vUv`, `fragColor`, `uTex`, `uResolution`
   and `uTime`, so you only declare your own uniforms. `COMMON` has value noise
   and a hue rotation.
2. Add its defaults to [`src/app/config/PipelineConfig.ts`](../src/app/config/PipelineConfig.ts),
   choosing them so the effect is **off** at rest.
3. Compile it in `PostPipeline`'s constructor, add a block to `render()` that
   runs only when the effect is doing something, and extend the `active` getter
   so an idle chain still costs nothing.
4. Add a group to `PIPELINE_PARAMS` in
   [`src/app/params/registry.ts`](../src/app/params/registry.ts). The sliders
   build themselves.

## A note on renderers

Anything a renderer draws must land in the 2D context it is handed. A renderer
that puts its own canvas in the DOM bypasses all of this and gets composited by
the browser instead — Digital Horizon and Smoke Hand used to, and now blit into
the shared context like the other three.js renderers do.
