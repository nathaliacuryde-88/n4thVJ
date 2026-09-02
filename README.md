# n4thVJ — Interactive VJ Experiment Page

A browser VJ instrument: 25 canvas visualisers you drive with your hands in front
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
| **2D / 3D** | Two banks of renderers. Keys are scoped to the open bank. |
| **1‑9, 0, -, =, Q, W, D** | Jump to a renderer. The button row shows the key for each. |
| **← / →** | Previous / next renderer in the open bank |
| **↑ / ↓** | Saturation ±5 |
| **C** | Camera preview on/off |
| **A** | Audio-reactive mode on/off |
| **Ctrl / Alt / Cmd** | Colour mode: 2 colours / black & white / 1 colour |
| **Right-click** | Hide or show the whole UI |

The **SHAPE** panel on the left holds the current renderer's own parameters.
Tweaks are kept per renderer and survive a reload; click a parameter's label to
reset it, or the arrow in the panel header to reset that renderer. Geometric,
Particles and Waves are wired up so far —
[`docs/ADDING_PARAMETERS.md`](docs/ADDING_PARAMETERS.md) covers adding the rest.

Gestures: an open hand is followed, a pinch slows things down, five fingers
speed them up, and bringing both hands together triggers the explosion.
[`docs/HAND_GESTURES.md`](docs/HAND_GESTURES.md) has the full vocabulary.

Hue, saturation and colour mode are remembered across reloads; the renderer
always opens on Geometric.

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
    config/                    tunable parameters, and the canonical key map
    params/                    the runtime parameter layer: which numbers get a slider
docs/                          feature, gesture, performance and parameter guides
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
3D Plants and Smoke Hand need network access the first time they are opened;
everything else works offline. See [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md).
