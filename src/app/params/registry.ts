/**
 * ═══════════════════════════════════════════════════════════════════════════
 * WHICH NUMBERS GET A SLIDER
 * ═══════════════════════════════════════════════════════════════════════════
 * Each entry names a renderer's config object and the parameters worth
 * reaching for mid-set. Defaults are NOT restated here — they are read from
 * the config object at the given path, so editing the config file stays the
 * way to change a default.
 *
 * To expose a renderer:
 *   1. Give it a config object under src/app/config (if it has none yet).
 *   2. In the renderer, read `this.cfg.x.y` instead of `TheConfig.x.y` and add
 *      `setParams(v) { this.cfg = withOverrides(TheConfig, v); }`.
 *   3. Add an entry below. The sliders build themselves.
 *
 * Ranges are the useful performing range, not the range that avoids a crash —
 * both ends should be somewhere you would actually stop.
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { VisualPattern } from '../App';
import { GeometricConfig } from '../config/GeometricRendererConfig';
import { ParticleConfig } from '../config/ParticleRendererConfig';
import { WaveConfig } from '../config/WaveRendererConfig';
import { PipelineConfig } from '../config/PipelineConfig';
import { RippleConfig } from '../config/RippleRendererConfig';
import { TextConfig } from '../config/TextRendererConfig';
import { VideoConfig } from '../config/VideoRendererConfig';
import { ParamGroup } from './types';

export interface RendererParams {
  /** The defaults object. Slider defaults are read from it by path. */
  config: object;
  groups: ParamGroup[];
}

export const RENDERER_PARAMS: Partial<Record<VisualPattern, RendererParams>> = {
  geometric: {
    config: GeometricConfig,
    groups: [
      {
        name: 'Shape',
        params: [
          { path: 'polygon.baseSize', label: 'Size', min: 20, max: 400, step: 5 },
          { path: 'polygon.strokeWidth', label: 'Stroke', min: 0.5, max: 20, step: 0.5 },
          { path: 'complexity.baseSides', label: 'Sides', min: 3, max: 12, step: 1, hint: 'with no hands' },
          { path: 'complexity.maxSides', label: 'Max sides', min: 3, max: 24, step: 1 },
        ],
      },
      {
        name: 'Layers',
        params: [
          { path: 'layers.count', label: 'Count', min: 1, max: 20, step: 1 },
          { path: 'layers.sizeGrowth', label: 'Growth', min: 0, max: 1.5, step: 0.01 },
          { path: 'layers.rotationOffset', label: 'Twist', min: 0, max: 2, step: 0.01 },
          { path: 'layers.baseOpacity', label: 'Opacity', min: 0, max: 1, step: 0.01 },
          { path: 'layers.opacityFade', label: 'Fade', min: 0, max: 0.3, step: 0.005 },
        ],
      },
      {
        name: 'Motion',
        params: [
          { path: 'trail.fadeAlpha', label: 'Trail', min: 0.02, max: 1, step: 0.01, hint: 'lower = longer' },
          { path: 'animation.baseRotationMultiplier', label: 'Spin', min: 0, max: 0.1, step: 0.001 },
        ],
      },
      {
        name: 'Bridge & clap',
        params: [
          { path: 'bridge.thickness', label: 'Bridge', min: 0, max: 30, step: 0.5 },
          { path: 'bridge.waveAmplitude', label: 'Bridge wave', min: 0, max: 150, step: 1 },
          { path: 'vibration.shakeAmountX', label: 'Shake X', min: 0, max: 200, step: 1 },
          { path: 'vibration.shakeAmountY', label: 'Shake Y', min: 0, max: 200, step: 1 },
          { path: 'vibration.flashDuration', label: 'Flash', min: 0, max: 3, step: 0.05 },
        ],
      },
    ],
  },

  particles: {
    config: ParticleConfig,
    groups: [
      {
        name: 'Emission',
        params: [
          { path: 'limits.maxParticles', label: 'Max', min: 5, max: 500, step: 5 },
          { path: 'emission.openHandRate', label: 'Open hand', min: 0, max: 1, step: 0.01 },
          { path: 'emission.closedHandRate', label: 'Closed hand', min: 0, max: 1, step: 0.01 },
          { path: 'controls.fadeOutRate', label: 'Fade out', min: 0.005, max: 0.5, step: 0.005 },
        ],
      },
      {
        name: 'Motion',
        params: [
          { path: 'physics.initialVelocity', label: 'Velocity', min: 0.5, max: 20, step: 0.5 },
          { path: 'physics.damping', label: 'Damping', min: 0.8, max: 1, step: 0.005, hint: '1 = never slows' },
          { path: 'trail.fadeAlpha', label: 'Trail', min: 0.02, max: 1, step: 0.01, hint: 'lower = longer' },
        ],
      },
      {
        name: 'Size',
        params: [
          { path: 'size.baseRange.0', label: 'Radius min', min: 2, max: 300, step: 2 },
          { path: 'size.baseRange.1', label: 'Radius max', min: 2, max: 400, step: 2 },
          { path: 'size.growthMultiplier', label: 'Grow', min: 0.2, max: 6, step: 0.1 },
          { path: 'size.shrinkMultiplier', label: 'Shrink', min: 0.05, max: 2, step: 0.05 },
          { path: 'size.transitionSpeed', label: 'Ease', min: 0.02, max: 1, step: 0.01 },
        ],
      },
      {
        name: 'Glow',
        params: [
          { path: 'glow.layers', label: 'Layers', min: 0, max: 8, step: 1 },
          { path: 'glow.expansion', label: 'Spread', min: 0, max: 2, step: 0.05 },
          { path: 'glow.layerFade', label: 'Fade', min: 0, max: 1, step: 0.01 },
        ],
      },
      {
        name: 'Clap',
        params: [
          { path: 'explosion.particleCount', label: 'Burst', min: 0, max: 300, step: 5 },
          { path: 'explosion.forceMultiplier', label: 'Force', min: 0, max: 50, step: 1 },
          { path: 'explosion.sizeMultiplier', label: 'Size', min: 0.2, max: 6, step: 0.1 },
        ],
      },
    ],
  },

  ripple: {
    config: RippleConfig,
    groups: [
      {
        name: 'Hand',
        params: [
          { path: 'stamp.radius', label: 'Size', min: 0.01, max: 0.3, step: 0.005 },
          { path: 'stamp.strength', label: 'Weight', min: 0.05, max: 1, step: 0.01 },
          { path: 'stamp.fingerScale', label: 'Fingers', min: 0, max: 1, step: 0.05, hint: '0 = palm only' },
          { path: 'stamp.audioSwell', label: 'Bass swell', min: 0, max: 3, step: 0.05 },
        ],
      },
      {
        name: 'Trail',
        params: [
          { path: 'field.decay', label: 'Length', min: 0.8, max: 0.998, step: 0.002, hint: 'higher = lingers' },
          { path: 'field.spread', label: 'Spread', min: 0.2, max: 8, step: 0.1 },
        ],
      },
      {
        name: 'Water',
        params: [
          { path: 'refraction.amount', label: 'Refraction', min: 0, max: 0.4, step: 0.005 },
          { path: 'refraction.dispersion', label: 'Dispersion', min: 0, max: 1.5, step: 0.05 },
        ],
      },
      {
        name: 'Gloss',
        params: [
          { path: 'highlight.amount', label: 'Amount', min: 0, max: 3, step: 0.05 },
          { path: 'highlight.sharpness', label: 'Sharpness', min: 0.5, max: 20, step: 0.5 },
          { path: 'highlight.tint', label: 'Tint', min: 0, max: 1, step: 0.05, hint: 'palette into the gloss' },
        ],
      },
    ],
  },

  text: {
    config: TextConfig,
    groups: [
      {
        name: 'Movement',
        params: [
          { path: 'mode', label: 'Mode', min: 0, max: 4, step: 1, hint: '0 mask 1 radial 2 wave 3 depth 4 scatter' },
          { path: 'motion.handInfluence', label: 'Hands', min: 0, max: 3, step: 0.05 },
          { path: 'trail.fadeAlpha', label: 'Trail', min: 0.02, max: 1, step: 0.01, hint: 'lower = longer' },
        ],
      },
      {
        name: 'Type',
        params: [
          { path: 'type.fit', label: 'Fit', min: 0.2, max: 1.6, step: 0.02, hint: 'word width in its cell' },
          { path: 'type.weight', label: 'Weight', min: 100, max: 900, step: 100 },
          { path: 'type.tracking', label: 'Tracking', min: -0.1, max: 1.2, step: 0.01 },
          { path: 'type.outline', label: 'Outline', min: 0, max: 1, step: 1, hint: 'filled or hollow' },
          { path: 'type.strokeWidth', label: 'Stroke', min: 0.5, max: 8, step: 0.5 },
        ],
      },
      {
        name: 'Grid',
        params: [
          { path: 'grid.columns', label: 'Columns', min: 1, max: 40, step: 1 },
          { path: 'grid.rows', label: 'Rows', min: 1, max: 60, step: 1 },
          { path: 'grid.spread', label: 'Spread', min: 0.2, max: 3, step: 0.02 },
          { path: 'grid.breathe', label: 'Breathe', min: 0, max: 1, step: 0.02 },
          { path: 'grid.breatheSpeed', label: 'Breath speed', min: 0, max: 3, step: 0.05 },
        ],
      },
      {
        name: 'Mask — mode 0',
        params: [
          { path: 'mask.reach', label: 'Reach', min: 0.02, max: 0.8, step: 0.01, hint: 'hand size' },
          { path: 'mask.threshold', label: 'Threshold', min: 0.02, max: 2, step: 0.02, hint: 'lower fills more' },
          { path: 'mask.softness', label: 'Softness', min: 0, max: 1, step: 0.02, hint: '0 = hard cut' },
          { path: 'mask.invert', label: 'Invert', min: 0, max: 1, step: 1 },
        ],
      },
      {
        name: 'Radial — mode 1',
        params: [
          { path: 'radial.strength', label: 'Warp', min: -2, max: 3, step: 0.05, hint: 'negative pinches' },
          { path: 'radial.power', label: 'Bite', min: 0.4, max: 5, step: 0.1 },
          { path: 'radial.pulse', label: 'Pulse', min: 0, max: 2, step: 0.05 },
          { path: 'radial.pulseSpeed', label: 'Pulse speed', min: 0, max: 3, step: 0.05 },
        ],
      },
      {
        name: 'Wave — mode 2',
        params: [
          { path: 'wave.amplitude', label: 'Amount', min: 0, max: 0.6, step: 0.01 },
          { path: 'wave.frequency', label: 'Waves', min: 0.2, max: 8, step: 0.1 },
          { path: 'wave.speed', label: 'Speed', min: -4, max: 4, step: 0.05 },
          { path: 'wave.scaleWave', label: 'Swell', min: 0, max: 1, step: 0.02 },
        ],
      },
      {
        name: 'Depth — mode 3',
        params: [
          { path: 'depth.speed', label: 'Fly', min: -2, max: 2, step: 0.02 },
          { path: 'depth.spread', label: 'Open', min: 0, max: 4, step: 0.05, hint: 'tracking with distance' },
          { path: 'depth.curve', label: 'Curve', min: 0.5, max: 4, step: 0.05 },
          { path: 'depth.steps', label: 'Rows', min: 2, max: 40, step: 1 },
          { path: 'depth.size', label: 'Size', min: 0.02, max: 0.5, step: 0.005 },
          { path: 'depth.horizon', label: 'Horizon', min: -0.2, max: 0.8, step: 0.01 },
        ],
      },
      {
        name: 'Scatter — mode 4',
        params: [
          { path: 'scatter.amount', label: 'Spread', min: 0, max: 1.5, step: 0.02, hint: '0 = readable' },
          { path: 'scatter.spiral', label: 'Spiral', min: 0, max: 1, step: 1 },
          { path: 'scatter.stagger', label: 'Stagger', min: 0, max: 2, step: 0.05 },
          { path: 'scatter.drift', label: 'Drift', min: 0, max: 3, step: 0.05 },
          { path: 'scatter.size', label: 'Letter size', min: 0.02, max: 0.5, step: 0.005 },
        ],
      },
      {
        name: 'Colour',
        params: [
          { path: 'color.rainbow', label: 'Rainbow', min: 0, max: 1, step: 1, hint: 'ignores the palette' },
          { path: 'color.step', label: 'Hue step', min: 0, max: 120, step: 1 },
          { path: 'color.cycleSpeed', label: 'Cycle', min: 0, max: 3, step: 0.05 },
        ],
      },
      {
        name: 'Audio',
        params: [
          { path: 'audio.bassScale', label: 'Bass swell', min: 0, max: 2, step: 0.05 },
          { path: 'audio.beatKick', label: 'Beat kick', min: 0, max: 3, step: 0.05 },
        ],
      },
    ],
  },

  video: {
    config: VideoConfig,
    groups: [
      {
        name: 'Frame',
        params: [
          { path: 'frame.zoom', label: 'Zoom', min: 0.2, max: 4, step: 0.05 },
          { path: 'frame.spreadZoom', label: 'Spread zoom', min: 0, max: 3, step: 0.05 },
          { path: 'frame.handDrift', label: 'Hand drift', min: 0, max: 0.6, step: 0.01 },
          { path: 'frame.mirror', label: 'Mirror', min: 0, max: 1, step: 1 },
        ],
      },
      {
        name: 'Slice',
        params: [
          { path: 'slice.count', label: 'Bands', min: 1, max: 60, step: 1, hint: '1 = whole frame' },
          { path: 'slice.offset', label: 'Shear', min: 0, max: 0.4, step: 0.005 },
          { path: 'slice.speed', label: 'Speed', min: 0, max: 5, step: 0.05 },
          { path: 'slice.beatKick', label: 'Beat kick', min: 1, max: 6, step: 0.1 },
        ],
      },
      {
        name: 'Look',
        params: [
          { path: 'look.tint', label: 'Tint', min: 0, max: 1, step: 0.02, hint: 'palette over the clip' },
          { path: 'look.gain', label: 'Gain', min: 1, max: 3, step: 0.05 },
          { path: 'trail.fadeAlpha', label: 'Trail', min: 0.02, max: 1, step: 0.01, hint: 'lower = longer' },
        ],
      },
    ],
  },

  waves: {
    config: WaveConfig,
    groups: [
      {
        name: 'Wave',
        params: [
          { path: 'waveCount.active', label: 'Count', min: 1, max: 24, step: 1, hint: 'hands present' },
          { path: 'waveCount.idle', label: 'Count idle', min: 1, max: 24, step: 1 },
          { path: 'wave.baseAmplitude', label: 'Amplitude', min: 0, max: 400, step: 5 },
          { path: 'wave.maxAmplitude', label: 'Max amp', min: 10, max: 800, step: 10 },
          { path: 'wave.baseFrequency', label: 'Frequency', min: 0.001, max: 0.1, step: 0.001 },
          { path: 'wave.maxFrequency', label: 'Max freq', min: 0.001, max: 0.2, step: 0.001 },
        ],
      },
      {
        name: 'Line',
        params: [
          { path: 'wave.segments', label: 'Segments', min: 20, max: 600, step: 10, hint: 'lower = angular' },
          { path: 'wave.lineThickness', label: 'Thickness', min: 0.5, max: 20, step: 0.5 },
          { path: 'visual.fillOpacity', label: 'Fill', min: 0, max: 255, step: 1 },
        ],
      },
      {
        name: 'Layers',
        params: [
          { path: 'layers.primarySpeed', label: 'Speed 1', min: 0, max: 10, step: 0.1 },
          { path: 'layers.secondarySpeed', label: 'Speed 2', min: 0, max: 10, step: 0.1 },
          { path: 'layers.tertiarySpeed', label: 'Speed 3', min: 0, max: 10, step: 0.1 },
          { path: 'layers.secondaryAmplitude', label: 'Amp 2', min: 0, max: 2, step: 0.01 },
          { path: 'layers.tertiaryAmplitude', label: 'Amp 3', min: 0, max: 2, step: 0.01 },
          { path: 'fingerCountSpeed.maxSpeed', label: 'Speed cap', min: 0.1, max: 10, step: 0.1 },
        ],
      },
      {
        name: 'Hands & focus',
        params: [
          { path: 'handInfluence.strength', label: 'Pull', min: 0, max: 3, step: 0.05 },
          { path: 'handInfluence.radius', label: 'Reach', min: 20, max: 800, step: 10 },
          { path: 'focalPoint.baseSize', label: 'Dot size', min: 0, max: 100, step: 1 },
          { path: 'focalPoint.pulseSpeed', label: 'Pulse', min: 0, max: 20, step: 0.5 },
          { path: 'focalPoint.pulseAmount', label: 'Pulse depth', min: 0, max: 1, step: 0.01 },
          { path: 'focalPoint.glowLayers', label: 'Dot glow', min: 0, max: 10, step: 1 },
        ],
      },
    ],
  },
};

/** Every slider a renderer exposes, flattened. */
export function paramSpecsFor(pattern: VisualPattern) {
  return RENDERER_PARAMS[pattern]?.groups.flatMap((g) => g.params) ?? [];
}

/**
 * The post pipeline's own sliders. Not keyed by pattern: these apply to the
 * finished frame whatever produced it, and every one defaults to off.
 */
export const PIPELINE_PARAMS: RendererParams = {
  config: PipelineConfig,
  groups: [
    {
      name: 'Transition',
      togglePath: 'transition.enabled',
      params: [
        { path: 'transition.duration', label: 'Crossfade', min: 0.05, max: 5, step: 0.05, hint: 'seconds between visuals' },
      ],
    },
    {
      name: 'Feedback',
      togglePath: 'feedback.enabled',
      params: [
        { path: 'feedback.mix', label: 'Mix', min: 0, max: 1, step: 0.01, hint: 'stage opacity' },
        { path: 'feedback.amount', label: 'Amount', min: 0, max: 0.99, step: 0.01, hint: '0 = off' },
        { path: 'feedback.zoom', label: 'Zoom', min: 0.9, max: 1.1, step: 0.001, hint: '>1 tunnels out' },
        { path: 'feedback.rotate', label: 'Rotate', min: -0.05, max: 0.05, step: 0.0005 },
        { path: 'feedback.offsetX', label: 'Drift X', min: -0.02, max: 0.02, step: 0.0005 },
        { path: 'feedback.offsetY', label: 'Drift Y', min: -0.02, max: 0.02, step: 0.0005 },
        { path: 'feedback.hueShift', label: 'Hue drift', min: -0.2, max: 0.2, step: 0.002 },
      ],
    },
    {
      name: 'Displace',
      togglePath: 'displace.enabled',
      params: [
        { path: 'displace.mix', label: 'Mix', min: 0, max: 1, step: 0.01, hint: 'stage opacity' },
        { path: 'displace.amount', label: 'Amount', min: 0, max: 0.3, step: 0.002 },
        { path: 'displace.scale', label: 'Scale', min: 0.5, max: 40, step: 0.5 },
        { path: 'displace.speed', label: 'Speed', min: 0, max: 3, step: 0.02 },
      ],
    },
    {
      name: 'Chromatic',
      togglePath: 'rgbSplit.enabled',
      params: [
        { path: 'rgbSplit.mix', label: 'Mix', min: 0, max: 1, step: 0.01, hint: 'stage opacity' },
        { path: 'rgbSplit.amount', label: 'RGB split', min: 0, max: 0.1, step: 0.001 },
      ],
    },
    {
      name: 'Kaleidoscope',
      togglePath: 'kaleido.enabled',
      params: [
        { path: 'kaleido.mix', label: 'Mix', min: 0, max: 1, step: 0.01, hint: 'stage opacity' },
        { path: 'kaleido.segments', label: 'Segments', min: 0, max: 24, step: 1, hint: '<2 = off' },
        { path: 'kaleido.spin', label: 'Spin', min: -3.14, max: 3.14, step: 0.01 },
      ],
    },
    {
      name: 'Quantize',
      togglePath: 'quantize.enabled',
      params: [
        { path: 'quantize.mix', label: 'Mix', min: 0, max: 1, step: 0.01, hint: 'stage opacity' },
        { path: 'quantize.pixel', label: 'Pixel size', min: 0, max: 64, step: 1, hint: '<=1 = off' },
        { path: 'quantize.levels', label: 'Colour steps', min: 0, max: 16, step: 1, hint: '<2 = off' },
      ],
    },
    {
      name: 'Bloom',
      togglePath: 'bloom.enabled',
      params: [
        { path: 'bloom.mix', label: 'Mix', min: 0, max: 1, step: 0.01, hint: 'stage opacity' },
        { path: 'bloom.amount', label: 'Amount', min: 0, max: 3, step: 0.05 },
        { path: 'bloom.threshold', label: 'Threshold', min: 0, max: 1, step: 0.01 },
      ],
    },
  ],
};
