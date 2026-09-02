# VJ Visual Renderers - Quick Parameter Guide

Where to tweak each visual effect. This covers the ten renderers with an extracted
parameter block; the rest hold their constants inline.

**The canonical key map is [`src/app/config/RendererCategories.ts`](../src/app/config/RendererCategories.ts)** —
keys are scoped to the 2D or 3D tab, so `1` means Geometric in 2D and Glitch Network in 3D.

---

## GEOMETRIC — 2D, key `1` · [`GeometricRenderer.ts`](../src/app/components/renderers/GeometricRenderer.ts)

**What it does:** Rotating geometric polygons following hands

**Key Parameters:**
- **Line 18: Trail Fade** `0.1` → Motion trail length (0.05-0.3, lower=longer)
- **Line 26: Clap Flash Duration** `0.8` → How long flash lasts (0.5-2.0)
- **Line 42-46: Speed Control** `0.01/1.0/2.0` → Slow/normal/fast speeds
- **Line 48: Polygon Complexity** `3-12` → Number of polygon sides
- **Line 68-69: Vibration Shake** `40` → Shake amount when clapping (20-100)
- **Line 89: Base Size** `100` → Polygon size (50-300)
- **Line 92: Layer Count** `5` → Number of overlapping polygons (3-10)
- **Line 93: Layer Growth** `0.3` → Size increase per layer (0.1-0.5)
- **Line 193: Outline Thickness** `2` → Polygon line width (1-5)

---

## PARTICLES — 2D, key `2` · [`ParticleRenderer.ts`](../src/app/components/renderers/ParticleRenderer.ts)

**What it does:** Massive soft particles that grow/shrink with hand gestures

**Key Parameters:**
- **Line 20: Particle Size** `200-400` → Base particle size (100-500)
- **Line 28: Growth Multiplier** `1.5` → How big particles get when hand open (1.2-3.0)
- **Line 43: Shrink Multiplier** `0.5` → How small when hand closed (0.1-0.5)
- **Line 53: Explosion Force** `20` → Clap explosion strength (10-50)
- **Line 67: Damping** `0.97` → How fast particles slow down (0.95-0.99)
- **Line 75: Trail Fade** `0.25` → Motion trail length (0.01-0.3)
- **Line 127-139: Emission Rates** `0.2/1/3` → Particles per frame (1/2/5 fingers)
- **Line 159: Glow Layers** `3` → Soft glow layers (1-5)
- **Line 181: Max Particles** `100` → Particle limit (50-300)
- **Line 191: Explosion Count** `50` → Clap explosion particles (20-100)

---

## WAVES — 2D, key `3` · [`WaveRenderer.ts`](../src/app/components/renderers/WaveRenderer.ts)

**What it does:** Flowing sine waves influenced by hand movements

**Key Parameters:**
- **Line 30-32: Wave Base** `amplitude:50, frequency:0.01` → Wave height/tightness
  - Amplitude: 20-200 (wave height)
  - Frequency: 0.005-0.05 (wave density)
- **Line 42-50: Speed Control** `0.05/1.0/2.0` → Slow/normal/fast
- **Line 104: Wave Count** `7/3` → Number of horizontal waves (3-15)
- **Line 160: Segments** `200` → Wave smoothness (100-400, higher=smoother)
- **Line 165-167: Wave Layers** → Three sine waves for complexity
  - Primary speed: `* 2` (1-5)
  - Secondary: `* 0.5` (0.3-0.7)
  - Tertiary: `* 0.3` (0.2-0.5)
- **Line 174-175: Hand Influence** `/200` → How far waves bend toward hands (100-500)
- **Line 193: Line Thickness** `3` → Wave line width (1-8)
- **Line 216: Focal Point Size** `20` → Glow at hand position (10-50)

---

## GLITCH NETWORK — 3D, key `1` · [`GlitchRenderer.ts`](../src/app/components/renderers/GlitchRenderer.ts)

**What it does:** Network of nodes orbiting hands with glitch effects

**Key Parameters:**
- **Line 40: Node Count** `40` → Number of network nodes (20-80)
- **Line 52: Node Size** `4-12` → Size range of nodes
- **Line 74: Connection Distance** `200` → How far nodes connect (100-400)
- **Line 74: Max Connections** `4` → Connections per node (2-8)
- **Line 162-167: Orbit Radius** `100` → Distance from hand (50-200)
- **Line 173: Orbit Layers** `50, 110, 170` → Three orbital rings
- **Line 187: Attraction Speed** `0.05` → How fast nodes follow (0.01-0.2)
- **Line 202: Vibration Jitter** `20` → Clap shake amount (20-80)
- **Line 366: Ring Pulse Size** `30, 10` → Hand indicator size
- **Line 413: Glitch Block Size** `20-100, 10-50` → Random glitch rectangles
- **Line 422: Explosion Blocks** `50` → Clap glitch count (20-100)
- **Line 440: Screen Glitch Shift** `20` → Pixel shift amount (10-50)

---

## TECHNICAL HAND TRACKER — 2D, key `4` · [`TechnicalHandRenderer.ts`](../src/app/components/renderers/TechnicalHandRenderer.ts)

**What it does:** Shows hand skeleton wireframes with technical overlay

**Key Parameters:**
- **Line 86: Trail Fade** `0.15` → Motion trail (0.05-0.4)
- **Line 115: Skeleton Line Width** `2` → Hand wireframe thickness (1-5)
- **Line 147: Joint Size** `3` → Hand joint circles (2-8)
- **Line 204: Info Panel Width** `250` → Technical readout panel (200-400)
- **Line 235-253: Grid Lines** → Background technical grid
  - Grid spacing: `50` (20-100)
  - Grid opacity: `0.1` (0.05-0.3)
- **Line 326: Data Update Rate** `3` → Info refresh speed (1-10)

---

## LOTTIE INSPIRED — 2D, key `5` · [`LottieInspiredRenderer.ts`](../src/app/components/renderers/LottieInspiredRenderer.ts)

**What it does:** Morphing organic shapes like Lottie animations

**Key Parameters:**
- **Line 17: Morph Speed** `0.003` → Shape change speed (0.001-0.01)
- **Line 87: Base Vertices** `8-12` → Blob complexity (5-20)
- **Line 88: Blob Size** `150-250` → Shape size range (100-400)
- **Line 129: Finger Speed Boost** `10x` → 5-finger multiplier (5-20)
- **Line 161: Morph Smoothness** `0.1` → Shape transition (0.05-0.3)
- **Line 230: Orbit Distance** `100-200` → Hand orbit radius (50-300)
- **Line 257: Glow Layers** `3` → Soft glow (2-5)
- **Line 287: Explosion Shapes** `15` → Clap burst count (10-30)

---

## LINE FIELD — 2D, key `6` · [`LineFieldRenderer.ts`](../src/app/components/renderers/LineFieldRenderer.ts)

**What it does:** Grid of lines bending toward hands like a force field

**Key Parameters:**
- **Line 36: Grid Density** `cols:30, rows:20` → Line count (10-50)
- **Line 69: Wave Amplitude** `50` → Line bend amount (20-150)
- **Line 70: Wave Frequency** `0.01` → Line wave tightness (0.005-0.05)
- **Line 90: Hand Influence** `300` → How far lines bend (150-600)
- **Line 91: Influence Strength** `100` → Bend intensity (50-200)
- **Line 124: Line Thickness** `2` → Line width (1-5)
- **Line 164: Focal Point Size** `40` → Hand glow (20-80)
- **Line 208: Particle Count** `20` → Clap explosion (10-50)

---

## CHROMATIC GLOW — 2D, key `7` · [`ChromaticRenderer.ts`](../src/app/components/renderers/ChromaticRenderer.ts)

**What it does:** Chromatic aberration effect with RGB channel separation

**Key Parameters:**
- **Line 20: Trail Fade** `0.08` → Motion blur length (0.02-0.3)
- **Line 44: Aberration Distance** `10-50` → RGB separation (5-100)
- **Line 62: Orb Count** `8` → Number of glowing orbs (4-20)
- **Line 83: Orb Size** `40-120` → Orb size range (30-200)
- **Line 115: Channel Offset** `offset * 0.8` → RGB split amount (0.5-2.0)
- **Line 143: Glow Layers** `5` → Orb glow softness (3-8)
- **Line 200: Scan Line Speed** `200` → Technical scanline movement
- **Line 230: Explosion Orbs** `30` → Clap burst count (15-60)

---

## HALFTONE MATRIX — 2D, key `8` · [`HalftoneRenderer.ts`](../src/app/components/renderers/HalftoneRenderer.ts)

**What it does:** Dot matrix/halftone pattern effect

**Key Parameters:**
- **Line 35: Dot Spacing** `15` → Grid density (10-30, lower=denser)
- **Line 54: Dot Size Multiplier** `0.8` → Max dot size (0.5-1.5)
- **Line 62: Wave Amplitude** `30` → Dot size wave (10-80)
- **Line 63: Wave Frequency** `0.02` → Wave tightness (0.01-0.1)
- **Line 77: Hand Influence** `200` → Dot growth radius (100-400)
- **Line 79: Influence Strength** `2.5` → Dot expansion (1.5-5.0)
- **Line 154: Focal Rings** `5` → Hand indicator rings (3-10)
- **Line 199: Explosion Particles** `100` → Clap dot burst (50-200)

---

## DIGITAL GRID — 2D, key `9` · [`MatrixGridRenderer.ts`](../src/app/components/renderers/MatrixGridRenderer.ts)

**What it does:** Matrix-style digital rain and grid

**Key Parameters:**
- **Line 37: Column Count** `60` → Rain columns (30-100)
- **Line 42: Drop Speed** `2-8` → How fast rain falls (1-15)
- **Line 43: Drop Length** `10-25` → Character trail (5-40)
- **Line 59: Spawn Rate** `0.03` → New rain frequency (0.01-0.1)
- **Line 91: Grid Size** `40` → Background grid spacing (20-80)
- **Line 110: Character Size** `16px` → Font size (12-24)
- **Line 145: Fade Rate** `drops 0.05` → Trail fade speed
- **Line 191: Ripple Size** `300` → Hand ripple radius (150-600)
- **Line 199: Ripple Rings** `5` → Ripple wave count (3-10)
- **Line 256: Explosion Drops** `50` → Clap burst (30-100)

---

## Global Hand Control System (All Renderers)

### Finger Count Speed Control
Used across most renderers:
- **1 finger** = `0.01x` - Almost frozen, slow-motion
- **2-4 fingers** = `1.0x` - Normal speed
- **5 fingers** = `2.0x` - Fast mode

### Clapping Effects
Triggers in all renderers:
- White flash
- Vibration/shake
- Explosion of particles/effects
- Screen glitch (in some)

### Hand Gestures
- **Open hand** - Objects follow/orbit/grow
- **Fist** - Objects shrink/calm down
- **Pinch** - Modifies specific parameters

---

## How to Adjust Parameters

1. **Find the renderer file** in `/components/renderers/`
2. **Locate the line number** from this guide
3. **Change the value** within the suggested range
4. **Save and test** - changes apply immediately
5. **Experiment!** - These are starting points

### Example:
Want bigger particles?
1. Open `/components/renderers/ParticleRenderer.ts`
2. Go to **Line 20**
3. Change `(200 + Math.random() * 200)` to `(300 + Math.random() * 300)`
4. Save - particles are now 50% bigger!

---

## Tips for Tweaking

- **Start small** - Change one value at a time
- **Use ranges** - Don't go wildly outside suggested ranges
- **Performance** - Higher particle counts/smoothness = slower
- **Balance** - Fast speed + high density can be overwhelming
- **Contrast** - Mix slow/fast, big/small for drama

---

**All renderers support the finger count speed control and clapping effects!**

Each one has been annotated with TWEAK comments showing you exactly where to adjust values.