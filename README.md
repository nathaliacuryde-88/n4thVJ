# n4thVJ — Interactive VJ Experiment Page

A browser VJ instrument: 25 visualisers you drive with your hands in front
of a webcam, or with whatever the microphone is hearing. Everything runs locally
in the page — the camera and audio streams never leave the machine.

### → **https://nathaliacuryde-88.github.io/n4thVJ/**

Allow the camera when the browser asks — hand tracking is what most of the
renderers react to.

Reconstructed from the Figma Make export of
[boat-stable-82790887.figma.site](https://boat-stable-82790887.figma.site).
Every push to the development branch redeploys the page.

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # production bundle into dist/
npm run preview    # serve that bundle
npm run typecheck  # tsc, app + vite config
```

The page asks for the camera on load — hand tracking is what most of the
renderers react to. Deny it and everything still runs; the hand-driven patterns
just sit still. Chrome or Edge give the best results (MediaPipe uses the GPU
delegate there).

## Controls

| | |
|---|---|
| **1–9, 0, Q W E T Y** | Tap: switch the selected layer to that visual of the set. Hold: add it as a layer, or take it off |
| **← / →** | Previous / next visual of the set |
| **L** | Select the next layer |
| **[ / ]** | Selected layer's fader −/+ |
| **− / =** | Selected layer's hands drive −/+ |
| **↑ / ↓** | Saturation ±5 |
| **H** | Auto colour on/off |
| **Ctrl / Alt / Cmd** | Colour mode: 2 colours / black & white / 1 colour |
| **Z / Shift+Z** | More / fewer objects (dice, flowers, rows…), or zoom in / out where nothing counts |
| **X** | All effects on/off |
| **K / N** | Kaleido / Noise on/off |
| **D** | Blackout |
| **B / Shift+B** | Tap tempo / clear it |
| **, / .** | Tempo −/+ 0.5 BPM |
| **P** | Auto-pilot |
| **A** | Audio drives the visuals instead of the hands (microphone on/off) |
| **I** | Auto-motion on/off |
| **C** | Camera preview on/off |
| **R / S** | Record / where the recording's sound comes from |
| **O** | Projector window (**F** or double-click in it for fullscreen) |
| **Esc** | Back to the library |
| **Right-click** | Hide or show the whole UI |

The panel on the left has two tabs. **SHAPE** holds the current renderer's own
parameters; **FX** holds the post chain that runs on the finished frame —
feedback, noise displacement, chromatic aberration, kaleidoscope, quantize and
bloom, described in [`docs/POST_PIPELINE.md`](docs/POST_PIPELINE.md). Every
effect defaults to off, and with all of them off the frame goes straight to
screen untouched.

Each FX stage is a layer: the dot beside its name bypasses it without losing its
settings, and **Mix** is its opacity, so effects can be eased in rather than
snapped on. Changing visual is a crossfade between two live renderers, not a
cut — its length is the **Transition** layer.
Tweaks are kept per renderer and survive a reload; click a parameter's label to
reset it, or the arrow in the panel header to reset the tab. Geometric, Particles
and Waves have SHAPE parameters so far —
[`docs/ADDING_PARAMETERS.md`](docs/ADDING_PARAMETERS.md) covers adding the rest.

Four buttons sit bottom-left, labelled: **CAM** shows the camera preview, **MIC**
drives the visuals from the microphone, **AUTO** is auto-motion, and **FX**
bypasses the whole post chain.

**AUTO** matters more than it sounds. Several visuals only draw where a hand is,
so with nothing tracked they sit black. With auto-motion on — the default — they
are driven by a slow synthetic figure instead, which keeps them alive in a dark
room where tracking drops. Real hands take over the moment they appear.

**FX** lights up whenever the chain is altering the image. Its settings persist
across reloads, so this is how you tell at a glance that a look from an earlier
session is still on, and how you take it off without losing it.

Gestures: an open hand is followed, a pinch slows things down, five fingers
speed them up, and bringing both hands together triggers the explosion.
[`docs/HAND_GESTURES.md`](docs/HAND_GESTURES.md) has the full vocabulary.

Hue, saturation and colour mode are remembered across reloads; the renderer
always opens on Geometric.

## The three families

**2D** draws with canvas primitives — lines, arcs, fills. **3D** runs three.js
scenes and blits them across.

**TD** is the newest and works differently: a signal chain rather than a
drawing. Something builds a field over time, and that field is then used to
distort something else. **Water Ripple** is the first — a soft blob is stamped
where your hands are, fed through a feedback loop with decay and spread to build
a greyscale height field, and the camera image is bent by the slope of it, with
a white gloss riding the ridge. Follow the patch it came from in
[`references/water-ripple-effect`](references/water-ripple-effect).

It wants the camera. Without one it draws the height field alone, which still
reads as something, and with auto-motion on it runs by itself.

## Layout

```
src/
  main.tsx                     entry
  app/
    App.tsx                    state, keyboard, audio→hand mapping; owns HandData/AudioData
    components/
      VJCanvas.tsx             one <canvas>, one renderer instance, one rAF loop
      Controls.tsx             pattern picker, camera/mic buttons, hand readout
      ColorController.tsx      hue slider → the palette every renderer draws with
      ParamPanel.tsx           sliders, generated from the parameter registry
      CameraFeed.tsx           getUserMedia + the preview thumbnail
      HandTracker.tsx          MediaPipe hand landmarks → HandData
      AudioAnalyzer.tsx        Web Audio FFT → bass/mid/high + beat detection
      renderers/               one class per visual; render(handData, colors, audio, colorMode)
    pipeline/                  the GPU post chain: feedback, displace, RGB split, bloom…
    config/                    tunable parameters, and the canonical key map
    params/                    the runtime parameter layer: which numbers get a slider
docs/                          feature, gesture, performance and parameter guides
references/                    screenshots of effects to build, one folder per topic
experiments/                   standalone one-off sketches, not part of the app
```

Adding a renderer means: a class in `renderers/`, a `case` in `VJCanvas.tsx`, a
member of the `VisualPattern` union in `App.tsx`, and an entry in
`config/RendererCategories.ts` — which is what drives both the button row and
the keyboard.

Renderers that hold GPU resources implement `destroy()`; `VJCanvas` calls it on
every pattern switch. A three.js renderer that skips this leaks its WebGL
context, and browsers only allow a handful at a time.

## External dependencies at runtime

MediaPipe Tasks Vision is imported from jsDelivr at runtime rather than bundled,
and four model/mesh files are fetched from Google and from
[NPC-88/3dfiles](https://github.com/NPC-88/3dfiles) (pinned by commit). Face Mesh,
Smoke Hand needs network access the first time it is opened;
everything else works offline. See [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md).
