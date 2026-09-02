# Feedback tunnel

What to take: use the image from the camera. The effect follow the hands and distort it as a water transparent effect. Should be used with the hand commands, but also in auto with music and later be also manipulated by this tool parameters.

---

## Reading of the network (Claude)

The screenshots show the TouchDesigner patch, and the node names give the whole
recipe. Caption credits the tutorial to @pi.frac.dev; the MediaPipe hand tracking
is the poster's own addition.

```
MediaPipe ─▶ hand_tracking2 ─▶ select/math2 ─▶ lag1 ─▶ null3
                                                        │  hand position, smoothed
                                                        ▼
circle1 ─▶ transform1 ─▶ null1 ─▶ ┌── feedback1 ──▶ level1 ─▶ transform ─▶ blur1
                                  ▲                                          │
                                  └──────────────────────────────────────────┘
                                             the height field

ramp1 ─▶ lookup ─▶ blur2 ─▶ slope1 ─▶ displace ◀─ videofilein1 / videoflip1
                                          │
                                          ▼  camera, pushed around by the slope
                                        comp1 ─▶ out
```

In words:

1. A **soft circle is drawn at the hand position** each frame — `lag` smooths the
   tracking so it glides rather than snaps.
2. That circle goes into a **feedback loop** with `level` (decay) and `blur`. The
   result is a greyscale **height field**: bright where the hand just was, fading
   and spreading over time. This is the trail.
3. `slope` turns that height into a **gradient**, i.e. which way the surface
   tilts at each pixel.
4. The **camera image is displaced** by that gradient — pixels get pushed along
   the slope, which is exactly how refraction through water behaves.
5. `ramp` + `lookup` colour-maps the height field, which is where the white
   glossy highlight on the ridge comes from.

The key insight is that the feedback buffer here is **not** the picture. It is a
separate greyscale height field that only ever holds the hand's trail, and the
camera is then bent by it. Our existing feedback stage folds the output back into
itself, which is a different effect entirely — this needs its own buffer.

Everything it needs already exists in this codebase: MediaPipe hand landmarks,
the camera video element, ping-ponged render targets, and a displacement shader.
What is missing is the height-field buffer and the slope-to-refraction step.
