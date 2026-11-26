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
import { HorizonConfig } from '../config/HorizonRendererConfig';
import { TextConfig } from '../config/TextRendererConfig';
import { VideoConfig } from '../config/VideoRendererConfig';
import { MosaicConfig } from '../config/MosaicRendererConfig';
import { ChromeConfig } from '../config/ChromeRendererConfig';
import { BloomFieldConfig } from '../config/BloomFieldRendererConfig';
import { ButterfliesConfig } from '../config/ButterfliesRendererConfig';
import { DiceConfig } from '../config/DiceRendererConfig';
import { DandelionConfig } from '../config/DandelionRendererConfig';
import { JellyfishConfig } from '../config/JellyfishRendererConfig';
import { AuroraConfig } from '../config/AuroraRendererConfig';
import { BlendConfig } from '../config/BlendRendererConfig';
import { DreamConfig } from '../config/DreamRendererConfig';
import { DataConfig } from '../config/DataRendererConfig';
import { SmearConfig } from '../config/SmearRendererConfig';
import { TonightConfig } from '../config/TonightRendererConfig';
import { SwarmConfig } from '../config/SwarmRendererConfig';
import { TerrainConfig } from '../config/TerrainRendererConfig';
import { FluidConfig } from '../config/FluidRendererConfig';
import { AnemoneConfig } from '../config/AnemoneRendererConfig';
import { FirstLineConfig } from '../config/FirstLineRendererConfig';
import { MyceliumConfig } from '../config/MyceliumRendererConfig';
import { CellConfig } from '../config/CellRendererConfig';
import { StandbyConfig } from '../config/StandbyRendererConfig';
import { DustConfig } from '../config/DustRendererConfig';
import { NeuronConfig } from '../config/NeuronRendererConfig';
import { MorphingSphereConfig } from '../config/MorphingSphereRendererConfig';
import { ArrivalConfig } from '../config/ArrivalRendererConfig';
import { SmokeHandConfig } from '../config/SmokeHandRendererConfig';
import { BreathConfig } from '../config/BreathRendererConfig';
import { ConstellationConfig } from '../config/ConstellationRendererConfig';
import { MachineConfig } from '../config/MachineRendererConfig';
import { MacroConfig } from '../config/MacroRendererConfig';
import { WatercolourConfig } from '../config/WatercolourRendererConfig';
import { NatureWorldConfig } from '../config/NatureWorldRendererConfig';
import { BigTypeConfig } from '../config/BigTypeRendererConfig';
import { ParticleImageConfig } from '../config/ParticleImageRendererConfig';
import { AtlasConfig } from '../config/AtlasRendererConfig';
import { CrowdConfig } from '../config/CrowdRendererConfig';
import { ParamGroup } from './types';
import { CHARSET_NAMES, CHARSET_SAMPLES, CUSTOM } from '../config/charsets';

export interface RendererParams {
  /** The defaults object. Slider defaults are read from it by path. */
  config: object;
  groups: ParamGroup[];
}

/** The Macro visuals share one renderer and its sliders; only the wing has veins. */
function macroParams(veins: boolean): RendererParams {
  return {
    config: MacroConfig,
    groups: [
      {
        name: 'Macro',
        params: [
          { path: 'look.flow', label: 'Flow', min: 0, max: 3, step: 0.05 },
          { path: 'look.zoom', label: 'Closer', min: 0.5, max: 3, step: 0.05 },
          { path: 'look.detail', label: 'Detail', min: 0, max: 2, step: 0.05 },
          ...(veins ? [{ path: 'look.veins', label: 'Veins', min: 0, max: 1.5, step: 0.05 }] : []),
          { path: 'look.grain', label: 'Grain', min: 0, max: 1, step: 0.05 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.follow', label: 'Follows hand', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap light', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick pulse', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass breath', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  };
}

/** Mountain Flight and Sea Flight share one renderer; the sea has no water level to set. */
function flightParams(mountains: boolean): RendererParams {
  return {
    config: TerrainConfig,
    groups: [
      {
        name: 'Land',
        params: [
          { path: 'land.height', label: mountains ? 'Height' : 'Swell', min: 0.2, max: 2, step: 0.05 },
          { path: 'land.rugged', label: mountains ? 'Rugged' : 'Islands', min: 0, max: 1, step: 0.05, hint: mountains ? 'soft hills to sharp ridges' : undefined },
          ...(mountains ? [{ path: 'land.water', label: 'Water', min: 0, max: 1, step: 0.05 }] : []),
          { path: 'light.hour', label: 'Hour', min: 0, max: 1, step: 0.05, hint: 'night, blue hour, last sun' },
          { path: 'light.mist', label: 'Mist', min: 0, max: 3, step: 0.05 },
          { path: 'flight.speed', label: 'Speed', min: 0, max: 3, step: 0.05 },
          { path: 'flight.altitude', label: 'Altitude', min: 0.3, max: 4, step: 0.05 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.steer', label: 'Hand flies', min: 0, max: 1, step: 0.05 },
          { path: 'hands.clap', label: 'Clap light', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick ring', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: mountains ? 'Bass light' : 'Bass swell', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  };
}

/** The Swarm visuals share one renderer and its sliders; the labels say what each does with them. */
/** The breaths share an engine; only Breath can take its breath from the microphone. */
function breathParams(source: boolean, detail: [string, string]): RendererParams {
  return {
    config: BreathConfig,
    groups: [
      {
        name: 'Breath',
        params: [
          ...(source ? [{ path: 'breath.source', label: 'Source', min: 0, max: 1, step: 1, labels: ['Hand', 'Your breath'], hint: 'Your breath: blow at the microphone; needs MIC on' }] : []),
          { path: 'breath.pace', label: 'Pace', min: 0.2, max: 3, step: 0.05, hint: 'how slow it breathes on its own' },
          { path: 'breath.depth', label: 'Depth', min: 0, max: 1.5, step: 0.05 },
          { path: 'look.weight', label: 'Weight', min: 0.3, max: 3, step: 0.05 },
          { path: 'look.detail', label: detail[0], min: 0.2, max: 2, step: 0.05, hint: detail[1] },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.breathe', label: 'Palm breathes', min: 0, max: 1, step: 1, labels: ['Off', 'On'], hint: 'open palm breathes in, fist out' },
          { path: 'hands.clap', label: 'Clap breathes out', min: 0, max: 1, step: 1, labels: ['Off', 'On'] },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  };
}

function smokeParams(): RendererParams {
  return {
    config: SmokeHandConfig,
    groups: [{ name: 'Look', params: [{ path: 'look.zoom', label: 'Zoom', min: 0.3, max: 2.5, step: 0.05, hint: 'the figure smaller or closer' }] }],
  };
}

/** The three arrivals share an engine; each names the same few sliders for what they do there. */
function arrivalParams(
  cover: [string, string], speed: [string, string], reach: [string, string], clap: string, beat: string, styled = false, zoomed = false,
): RendererParams {
  return {
    config: ArrivalConfig,
    groups: [
      {
        name: 'Look',
        params: [
          ...(styled ? [{ path: 'look.style', label: 'Style', min: 0, max: 1, step: 1, labels: ['Vapour', 'Print'], hint: 'soft real cloud, or flat tones with clean edges' }] : []),
          ...(zoomed ? [{ path: 'look.zoom', label: 'Zoom', min: 0.3, max: 2.5, step: 0.05, hint: 'out: smaller clouds, more of the sky — still the whole frame' }] : []),
          { path: 'look.cover', label: cover[0], min: 0, max: 1, step: 0.05, hint: cover[1] },
          { path: 'look.bands', label: 'Tones', min: 2, max: 12, step: 1, hint: styled ? 'Print only: few is graphic, many is smooth' : 'few is graphic, many is smooth' },
          { path: 'look.grain', label: 'Grain', min: 0, max: 1, step: 0.05 },
          { path: 'motion.speed', label: speed[0], min: 0, max: 3, step: 0.05, hint: speed[1] },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.reach', label: reach[0], min: 0, max: 2, step: 0.05, hint: reach[1] },
          { path: 'hands.clap', label: clap, min: 0, max: 1, step: 1, labels: ['Off', 'On'] },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: beat, min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  };
}

function swarmParams(follow: string, beat: string, styled = true): RendererParams {
  return {
    config: SwarmConfig,
    groups: [
      {
        name: 'Swarm',
        params: [
          ...(styled ? [{ path: 'look.style', label: 'Style', min: 0, max: 2, step: 1, labels: ['Beads', 'Discs', 'Light'], hint: 'solid balls, flat cut paper, or points of light' }] : []),
          // Palette and backdrop belong to the solid styles; points of light take the colour bar and sit on black.
          ...(styled ? [{ path: 'look.palette', label: 'Palette', min: 0, max: 3, step: 1, labels: ['Reel', 'Ember', 'Lagoon', 'Ink'] }] : []),
          { path: 'look.count', label: 'Points', min: 0, max: 3, step: 1, labels: ['16k', '65k', '150k', '260k'], hint: 'fewer if it runs slowly' },
          { path: 'look.size', label: 'Size', min: 0.3, max: 3, step: 0.05 },
          { path: 'look.zoom', label: 'Zoom', min: 0.4, max: 2.5, step: 0.05, hint: 'closer or further: everything grows together' },
          ...(styled ? [] : [{ path: 'look.reach', label: 'Outer rings', min: 0.5, max: 3, step: 0.05, hint: 'how far the disc reaches: more and wider rings round the core' }]),
          ...(styled ? [] : [{ path: 'look.dive', label: 'Dive in', min: 0, max: 1, step: 0.01, hint: 'fly into the galaxy, down to the disc and in to the core (knob 5)' }]),
          ...(styled ? [{ path: 'look.backdrop', label: 'Backdrop', min: 0, max: 1, step: 0.05, hint: '0 = black, stacks cleanly' }] : []),
          { path: 'look.blur', label: 'Depth blur', min: 0, max: 3, step: 0.05, hint: styled ? 'Light style only' : undefined },
          { path: 'look.trail', label: 'Trail', min: 0, max: 1, step: 0.05, hint: styled ? 'Light style only' : undefined },
          { path: 'motion.flow', label: 'Flow', min: 0, max: 3, step: 0.05 },
          { path: 'motion.fold', label: 'Fold', min: 0, max: 3, step: 0.05 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.follow', label: follow, min: 0, max: 1, step: 0.05 },
          { path: 'hands.clap', label: 'Clap scatters', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: beat, min: 0, max: 2, step: 0.05 },
          { path: 'sound.sparkle', label: 'Hat sparkle', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  };
}

/**
 * The Dreamscape visuals share one renderer and one set of sliders: the
 * spray paint, the hands, the sound — and each its own scene's few.
 */
function dreamParams(own: ParamGroup | null): RendererParams {
  return {
    config: DreamConfig,
    groups: [
      {
        name: 'Dream',
        params: [
          { path: 'scene.speed', label: 'Speed', min: 0, max: 3, step: 0.05 },
          { path: 'scene.grain', label: 'Grain', min: 0, max: 2, step: 0.05, hint: 'the tooth of the spray paint' },
          { path: 'scene.sparkles', label: 'Sparkles', min: 0, max: 1, step: 0.05 },
        ],
      },
      ...(own ? [own] : []),
      {
        name: 'Hands',
        params: [
          { path: 'hands.follow', label: 'Follows hand', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap burst', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass glow', min: 0, max: 2, step: 0.05 },
          { path: 'sound.mid', label: 'Melody speed', min: 0, max: 2, step: 0.05 },
          { path: 'sound.high', label: 'Hat twinkle', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  };
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
          { path: 'size.zoom', label: 'Zoom', min: 0.2, max: 4, step: 0.05, hint: 'each particle and the cloud they make, smaller or larger' },
          { path: 'emission.openHandRate', label: 'Open hand', min: 0, max: 1, step: 0.01 },
          { path: 'emission.closedHandRate', label: 'Closed hand', min: 0, max: 1, step: 0.01 },
        ],
      },
      {
        name: 'Motion',
        params: [
          { path: 'controls.follow', label: 'Follow hand', min: 0, max: 3, step: 0.05, hint: 'open hand draws them after it; a fist calms them' },
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
          { path: 'explosion.flash', label: 'Flash', min: 0, max: 1, step: 0.05, hint: 'the whole-screen flash on a real clap · 0 = none' },
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
        name: 'Field',
        params: [
          { path: 'motion.handInfluence', label: 'Hands', min: 0, max: 3, step: 0.05, hint: 'how far the field follows' },
          { path: 'radial.strength', label: 'Warp', min: -2, max: 3, step: 0.05, hint: 'negative pinches' },
          { path: 'radial.twist', label: 'Twist', min: -3, max: 3, step: 0.05, hint: 'opens with the hand' },
          { path: 'radial.power', label: 'Bite', min: 0.4, max: 5, step: 0.1 },
          { path: 'trail.fadeAlpha', label: 'Trail', min: 0.02, max: 1, step: 0.01, hint: 'lower = longer' },
        ],
      },
      {
        name: 'Beat',
        params: [
          { path: 'radial.ring', label: 'Ring', min: 0, max: 2, step: 0.05, hint: 'thrown out on each onset' },
          { path: 'radial.ringDensity', label: 'Rings', min: 0.5, max: 8, step: 0.1 },
          { path: 'audio.bassScale', label: 'Bass swell', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Grid',
        params: [
          { path: 'grid.columns', label: 'Columns', min: 1, max: 40, step: 1 },
          { path: 'grid.rows', label: 'Rows', min: 1, max: 60, step: 1 },
          { path: 'grid.spread', label: 'Spread', min: 0.2, max: 3, step: 0.02 },
        ],
      },
      {
        name: 'Colour',
        params: [
          { path: 'color.step', label: 'Hue step', min: 0, max: 120, step: 1 },
          { path: 'color.cycleSpeed', label: 'Cycle', min: 0, max: 3, step: 0.05 },
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
          { path: 'slice.beatKick', label: 'Beat kick', min: 1, max: 2.5, step: 0.02, hint: '1 = none' },
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

  chrome: {
    config: ChromeConfig,
    groups: [
      {
        name: 'Form',
        params: [
          { path: 'form.lobes', label: 'Lobes', min: 1, max: 7, step: 1 },
          { path: 'form.spread', label: 'Spread', min: 0.2, max: 2.4, step: 0.05, hint: 'wider pulls tendrils out' },
          { path: 'form.size', label: 'Mass', min: 0.2, max: 1.2, step: 0.02 },
          { path: 'form.blend', label: 'Melt', min: 0.05, max: 1.4, step: 0.05, hint: 'higher closes the holes' },
          { path: 'form.ripple', label: 'Ripple', min: 0, max: 0.4, step: 0.005 },
          { path: 'form.rippleScale', label: 'Ripple scale', min: 0.5, max: 9, step: 0.1 },
        ],
      },
      {
        name: 'Motion',
        params: [
          { path: 'motion.drift', label: 'Drift', min: 0, max: 1.2, step: 0.01 },
          { path: 'motion.churn', label: 'Churn', min: 0, max: 2, step: 0.02 },
          { path: 'motion.spin', label: 'Spin', min: -0.6, max: 0.6, step: 0.01 },
        ],
      },
      {
        name: 'Chrome',
        params: [
          { path: 'material.dispersion', label: 'Rainbow', min: 0, max: 2.5, step: 0.05 },
          { path: 'material.split', label: 'Spread', min: 0, max: 0.3, step: 0.005, hint: 'width of the rainbow' },
          { path: 'material.rimTightness', label: 'Rim', min: 0.5, max: 8, step: 0.1, hint: 'higher = thinner band' },
          { path: 'material.silver', label: 'Silver', min: 0, max: 1.5, step: 0.02 },
          { path: 'material.facing', label: 'Face-on', min: 0, max: 0.6, step: 0.01, hint: 'low keeps the middles dark' },
          { path: 'material.polish', label: 'Polish', min: 4, max: 260, step: 2 },
        ],
      },
      {
        name: 'Light',
        params: [
          { path: 'light.keyX', label: 'Key X', min: -1, max: 1, step: 0.02 },
          { path: 'light.keyY', label: 'Key Y', min: -1, max: 1, step: 0.02 },
          { path: 'light.key', label: 'Key', min: 0, max: 3, step: 0.05 },
          { path: 'light.fill', label: 'Fill', min: 0, max: 1.5, step: 0.02 },
          { path: 'light.ambient', label: 'Ambient', min: 0, max: 0.3, step: 0.005 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.push', label: 'Hand push', min: 0, max: 2, step: 0.05 },
          { path: 'hands.spread', label: 'Hand spread', min: 0, max: 1.5, step: 0.05 },
          { path: 'hands.kick', label: 'Beat throw', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'look.gain', label: 'Exposure', min: 0.2, max: 2.5, step: 0.05 },
          { path: 'look.grain', label: 'Grain', min: 0, max: 0.2, step: 0.005 },
        ],
      },
    ],
  },

  bloom: {
    config: BloomFieldConfig,
    groups: [
      {
        name: 'Field',
        params: [
          { path: 'field.count', label: 'Flowers', min: 0, max: 7, step: 1, hint: 'on coming up they grow in one by one' },
          { path: 'field.zoom', label: 'Zoom', min: 0.4, max: 2.5, step: 0.05, hint: '1 = as framed; higher = closer' },
          { path: 'motion.amount', label: 'Sway', min: 0, max: 2.5, step: 0.05 },
          { path: 'motion.speed', label: 'Speed', min: 0, max: 3, step: 0.05 },
          { path: 'field.orbit', label: 'Orbit', min: 0, max: 1, step: 0.05, hint: 'slow camera swing' },
          { path: 'field.backdrop', label: 'Backdrop', min: 0, max: 1, step: 0.05, hint: '0 = black, stacks cleanly' },
          { path: 'field.return', label: 'Seeds return', min: 0.25, max: 4, step: 0.05, hint: 'how quickly loose seeds come home' },
        ],
      },
      {
        name: 'Colour',
        params: [
          { path: 'colour.speed', label: 'Flow', min: -3, max: 3, step: 0.05, hint: 'below 0 runs backwards' },
          { path: 'colour.offset', label: 'Shift', min: 0, max: 1, step: 0.01, hint: 'turn the palette by hand' },
          {
            path: 'colour.palette', label: 'Palette', min: 0, max: 3, step: 1,
            labels: ['Reel', 'Ember', 'Lagoon', 'Ink'],
          },
          { path: 'colour.style', label: 'Style', min: 0, max: 3, step: 1, labels: ['Inflated', 'Paper', 'Line', 'Print'] },
          { path: 'colour.depth', label: 'Shadow', min: 0, max: 0.8, step: 0.01, hint: 'more navy in the folds' },
        ],
      },
      {
        name: 'Pattern',
        params: [
          { path: 'pattern.sweep', label: 'Sweeps', min: 0, max: 2, step: 0.05 },
          { path: 'pattern.bands', label: 'Bands', min: 0, max: 2, step: 0.05 },
          { path: 'pattern.rings', label: 'Rings', min: 0, max: 2, step: 0.05 },
          { path: 'pattern.melt', label: 'Melt', min: 0, max: 1, step: 0.05, hint: '0 holds the mix where set' },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.bloom', label: 'Fingers open', min: 0, max: 1.5, step: 0.05 },
          { path: 'hands.orbit', label: 'Hand camera', min: 0, max: 2, step: 0.05 },
          { path: 'hands.dolly', label: 'Spread zoom', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap burst', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Beat bump', min: 0, max: 2, step: 0.02 },
          { path: 'sound.bass', label: 'Bass bob', min: 0, max: 2, step: 0.05 },
          { path: 'sound.mid', label: 'Melody flow', min: 0, max: 2, step: 0.05 },
          { path: 'sound.high', label: 'Hat sparkle', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },

  butterflies: {
    config: ButterfliesConfig,
    groups: [
      {
        name: 'Flight',
        params: [
          { path: 'flight.count', label: 'Butterflies', min: 0, max: 8, step: 1, hint: 'on coming up they fly in one by one' },
          { path: 'flight.zoom', label: 'Zoom', min: 0.4, max: 2.5, step: 0.05, hint: '1 = as framed; higher = closer' },
          { path: 'flight.size', label: 'Size', min: 0.4, max: 2, step: 0.05 },
          { path: 'flight.swing', label: 'Loops', min: 0, max: 2.5, step: 0.05, hint: '0 hovers in place' },
          { path: 'flight.speed', label: 'Speed', min: 0, max: 3, step: 0.05 },
          { path: 'flight.wingbeat', label: 'Wingbeat', min: 0.2, max: 3, step: 0.05 },
          { path: 'flight.backdrop', label: 'Backdrop', min: 0, max: 1, step: 0.05, hint: '0 = black, stacks cleanly' },
        ],
      },
      {
        name: 'Colour',
        params: [
          { path: 'colour.speed', label: 'Flow', min: -3, max: 3, step: 0.05, hint: 'below 0 runs backwards' },
          { path: 'colour.offset', label: 'Shift', min: 0, max: 1, step: 0.01, hint: 'turn the palette by hand' },
          {
            path: 'colour.palette', label: 'Palette', min: 0, max: 3, step: 1,
            labels: ['Reel', 'Ember', 'Lagoon', 'Ink'],
          },
          { path: 'colour.style', label: 'Style', min: 0, max: 3, step: 1, labels: ['Inflated', 'Paper', 'Line', 'Print'] },
          { path: 'colour.depth', label: 'Shadow', min: 0, max: 0.8, step: 0.01, hint: 'more navy in the folds' },
        ],
      },
      {
        name: 'Pattern',
        params: [
          { path: 'pattern.sweep', label: 'Sweeps', min: 0, max: 2, step: 0.05 },
          { path: 'pattern.bands', label: 'Bands', min: 0, max: 2, step: 0.05 },
          { path: 'pattern.rings', label: 'Eyespots', min: 0, max: 2, step: 0.05 },
          { path: 'pattern.melt', label: 'Melt', min: 0, max: 1, step: 0.05, hint: '0 holds the mix where set' },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.follow', label: 'Follow hand', min: 0, max: 1.5, step: 0.05 },
          { path: 'hands.stroke', label: 'Finger stroke', min: 0, max: 1.5, step: 0.05 },
          { path: 'hands.spread', label: 'Spread scatter', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap burst', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Beat flick', min: 0, max: 2, step: 0.02 },
          { path: 'sound.bass', label: 'Bass loops', min: 0, max: 2, step: 0.05 },
          { path: 'sound.mid', label: 'Melody flow', min: 0, max: 2, step: 0.05 },
          { path: 'sound.high', label: 'Hat flutter', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },

  particleimage: {
    config: ParticleImageConfig,
    groups: [
      {
        name: 'Points',
        params: [
          { path: 'points.count', label: 'Points', min: 0, max: 1, step: 0.01, hint: 'a few thousand to eighty thousand' },
          { path: 'points.size', label: 'Size', min: 0.3, max: 3, step: 0.05 },
          {
            path: 'points.keep', label: 'Keep', min: 0, max: 3, step: 1,
            labels: ['Subject', 'Dark parts', 'Light parts', 'All of it'],
          },
          { path: 'points.cutout', label: 'Cutout', min: 0, max: 0.95, step: 0.01, hint: 'higher keeps only what stands out' },
          { path: 'points.colour', label: 'Colours', min: 0, max: 2, step: 1, labels: ['Picture', 'Colour panel', 'White'] },
          { path: 'points.depth', label: 'Relief', min: 0, max: 2, step: 0.05, hint: 'the hand tilts it' },
        ],
      },
      {
        name: 'Motion',
        params: [
          { path: 'motion.hold', label: 'Hold', min: 0.1, max: 2, step: 0.05, hint: 'how tightly they keep the picture' },
          { path: 'motion.drift', label: 'Drift', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.scatter', label: 'Open scatters', min: 0, max: 1, step: 0.05, hint: 'a fist pulls it back together' },
          { path: 'hands.brush', label: 'Hand brushes', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap blows apart', min: 0, max: 2, step: 0.05 },
          { path: 'hands.zoom', label: 'Spread zooms', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick ripple', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass swell', min: 0, max: 2, step: 0.05 },
          { path: 'sound.mid', label: 'Melody drift', min: 0, max: 2, step: 0.05 },
          { path: 'sound.high', label: 'Hat twinkle', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },

  bigtype: {
    config: BigTypeConfig,
    groups: [
      {
        name: 'Type',
        params: [
          {
            path: 'type.style', label: 'Style', min: 0, max: 3, step: 1,
            labels: ['Lines', 'Stretch', 'Blocks', 'Shear'],
          },
          { path: 'type.size', label: 'Size', min: 0.3, max: 1.6, step: 0.01 },
          { path: 'type.repeat', label: 'Repeat', min: 1, max: 6, step: 1, hint: 'stack the words down the frame' },
          { path: 'type.justify', label: 'Fit', min: 0, max: 1, step: 1, labels: ['Even', 'Justified'] },
          { path: 'type.weight', label: 'Weight', min: 0, max: 1, step: 1, labels: ['Bold', 'Black'] },
          {
            path: 'type.colourway', label: 'Colours', min: 0, max: 2, step: 1,
            labels: ['Ink on black', 'Black on paper', 'Black on colour'],
          },
        ],
      },
      {
        name: 'Dance',
        params: [
          { path: 'dance.amount', label: 'Dance', min: 0, max: 2, step: 0.05, hint: '0 holds the words still' },
          { path: 'dance.words', label: 'Shear by', min: 0, max: 1, step: 1, labels: ['Letter', 'Word'] },
          { path: 'lines.density', label: 'Lines', min: 0, max: 1, step: 0.01, hint: 'Lines: how many' },
          { path: 'lines.thickness', label: 'Line weight', min: 0.2, max: 1.4, step: 0.01, hint: 'Lines: inside the letters' },
          { path: 'stretch.smear', label: 'Smear', min: 0, max: 1.5, step: 0.01, hint: 'Stretch: how far' },
          { path: 'stretch.bands', label: 'Bands', min: 0, max: 1, step: 0.01, hint: 'Stretch: how many at once' },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.open', label: 'Open = dance', min: 0, max: 1.5, step: 0.05, hint: 'a fist holds the words still' },
          { path: 'hands.focus', label: 'Hand focus', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap burst', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass', min: 0, max: 2, step: 0.05 },
          { path: 'sound.mid', label: 'Melody speed', min: 0, max: 2, step: 0.05 },
          { path: 'sound.high', label: 'Hat shiver', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },

  world: {
    config: NatureWorldConfig,
    groups: [
      {
        name: 'Colour',
        params: [
          { path: 'colour.speed', label: 'Flow', min: -3, max: 3, step: 0.05, hint: 'below 0 runs backwards' },
          { path: 'colour.offset', label: 'Shift', min: 0, max: 1, step: 0.01, hint: 'turn the palette by hand' },
          {
            path: 'colour.palette', label: 'Palette', min: 0, max: 3, step: 1,
            labels: ['Reel', 'Ember', 'Lagoon', 'Ink'],
          },
          { path: 'colour.style', label: 'Style', min: 0, max: 3, step: 1, labels: ['Inflated', 'Paper', 'Line', 'Print'] },
          { path: 'colour.depth', label: 'Shadow', min: 0, max: 0.8, step: 0.01 },
        ],
      },
      {
        name: 'World',
        params: [
          {
            path: 'world.sky', label: 'Sky', min: 0, max: 3, step: 1,
            labels: ['Studio', 'Watercolour', 'Aurora', 'Black'],
          },
          { path: 'world.flowers', label: 'Flowers', min: 0, max: 7, step: 1 },
          { path: 'world.butterflies', label: 'Butterflies', min: 0, max: 8, step: 1 },
          { path: 'world.dandelions', label: 'Dandelions', min: 0, max: 8, step: 1 },
          { path: 'world.jellyfish', label: 'Jellyfish', min: 0, max: 8, step: 1 },
          { path: 'world.seeds', label: 'Seeds flying', min: 0, max: 1, step: 0.01, hint: '0 = the heads stay whole' },
          { path: 'world.visits', label: 'Flower visits', min: 0, max: 1, step: 0.05, hint: 'how often butterflies land' },
        ],
      },
      {
        name: 'Sizes',
        params: [
          { path: 'sizes.flowers', label: 'Flowers', min: 0.3, max: 2, step: 0.05 },
          { path: 'sizes.butterflies', label: 'Butterflies', min: 0.3, max: 2.5, step: 0.05 },
          { path: 'sizes.dandelions', label: 'Dandelions', min: 0.3, max: 2, step: 0.05 },
          { path: 'sizes.jellyfish', label: 'Jellyfish', min: 0.3, max: 2.5, step: 0.05 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.camera', label: 'Hand moves world', min: 0, max: 2, step: 0.05 },
          { path: 'hands.follow', label: 'Follow hand', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap burst', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass', min: 0, max: 2, step: 0.05 },
          { path: 'sound.mid', label: 'Melody flow', min: 0, max: 2, step: 0.05 },
          { path: 'sound.high', label: 'Hats', min: 0, max: 2, step: 0.05 },
          { path: 'sound.wind', label: 'Music wind', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },

  aurora: {
    config: AuroraConfig,
    groups: [
      {
        name: 'Sky',
        params: [
          { path: 'sky.curtains', label: 'Curtains', min: 1, max: 4, step: 1 },
          { path: 'sky.height', label: 'Height', min: 0, max: 1.5, step: 0.05 },
          { path: 'sky.brightness', label: 'Brightness', min: 0, max: 2, step: 0.05 },
          { path: 'sky.night', label: 'Night', min: 0, max: 1, step: 0.05, hint: '0 = black, stacks cleanly' },
          { path: 'sky.grain', label: 'Grain', min: 0, max: 1, step: 0.05, hint: 'breaks the light into grain and dots, like a print' },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.follow', label: 'Lifts to hand', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap flare', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick flare', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass glow', min: 0, max: 2, step: 0.05 },
          { path: 'sound.mid', label: 'Melody folds', min: 0, max: 2, step: 0.05 },
          { path: 'sound.high', label: 'Hat shiver', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },

  'macro-ink': macroParams(true),
  'macro-petals': macroParams(false),
  'macro-filaments': macroParams(false),
  'macro-prism': macroParams(false),
  'macro-rings': macroParams(false),
  'macro-water': macroParams(false),
  'swarm-flock': swarmParams('Follows hand', 'Kick draws in'),
  'swarm-plankton': swarmParams('Hand stirs', 'Kick ring'),
  'swarm-galaxy': swarmParams('Hand tilts', 'Kick flare', false),
  line: {
    config: FirstLineConfig,
    groups: [
      {
        name: 'Line',
        params: [
          { path: 'line.count', label: 'Lines', min: 1, max: 40, step: 1, hint: 'how many it unfolds into' },
          { path: 'line.zoom', label: 'Zoom', min: 0.3, max: 2.5, step: 0.05, hint: 'the fan smaller or larger; the lines still cross the frame' },
          { path: 'line.weight', label: 'Weight', min: 0.3, max: 4, step: 0.05 },
          { path: 'line.wave', label: 'Wave', min: 0, max: 3, step: 0.05 },
          { path: 'line.speed', label: 'Speed', min: 0, max: 4, step: 0.05, hint: 'how fast the waves run along the lines · 0 = still' },
          { path: 'line.birth', label: 'Birth', min: 0, max: 3, step: 0.05, hint: 'how slowly the first line draws itself; 0 = already there' },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.open', label: 'Palm unfolds', min: 0, max: 1, step: 0.05, hint: 'open palm fans the lines out, fist gathers them' },
          { path: 'hands.pull', label: 'Hand plucks', min: 0, max: 1.2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap shiver', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick pulse', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass breath', min: 0, max: 2, step: 0.05 },
          { path: 'sound.grow', label: 'Music unfolds', min: 0, max: 1.5, step: 0.05 },
        ],
      },
    ],
  },
  mycelium: {
    config: MyceliumConfig,
    groups: [
      {
        name: 'Growth',
        params: [
          { path: 'growth.zoom', label: 'Zoom', min: 0.3, max: 2.5, step: 0.05, hint: 'out: smaller, finer roots, still to every edge' },
          { path: 'growth.speed', label: 'Speed', min: 0, max: 3, step: 0.05 },
          { path: 'growth.branching', label: 'Forking', min: 0, max: 3, step: 0.05 },
          { path: 'growth.lasting', label: 'Lasting', min: 0.2, max: 2.5, step: 0.05, hint: 'how long a thread stays' },
          { path: 'growth.weight', label: 'Weight', min: 0.3, max: 3, step: 0.05 },
          { path: 'growth.wander', label: 'Wander', min: 0, max: 3, step: 0.05 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.reach', label: 'Grows to hand', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap seeds', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick pulse', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass weight', min: 0, max: 2, step: 0.05 },
          { path: 'sound.lock', label: 'On the beat', min: 0, max: 1, step: 0.05, hint: '1 = grows in a lunge on each beat, forks on each bar; 0 = an even flow' },
        ],
      },
    ],
  },
  constellation: {
    config: ConstellationConfig,
    groups: [
      {
        name: 'Sky',
        params: [
          { path: 'sky.stars', label: 'Stars', min: 0.1, max: 1, step: 0.05 },
          { path: 'sky.field', label: 'Sky', min: 0, max: 1, step: 0.05, hint: 'the stars outside the figure; 0 = only the figure' },
          { path: 'sky.lines', label: 'Lines', min: 0, max: 1.5, step: 0.05 },
          { path: 'sky.size', label: 'Size', min: 0.4, max: 2.5, step: 0.05 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.clap', label: 'Clap scatters', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick swell', min: 0, max: 2, step: 0.05 },
          { path: 'sound.twinkle', label: 'Hat glint', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },
  machine: {
    config: MachineConfig,
    groups: [
      {
        name: 'Picture',
        params: [
          { path: 'picture.zoom', label: 'Zoom', min: 0.3, max: 2.5, step: 0.05, hint: 'out: smaller dots, more of them — still the whole frame' },
          { path: 'picture.detail', label: 'Detail', min: 0, max: 1, step: 0.05, hint: 'finer dots' },
          { path: 'picture.camera', label: 'Camera', min: 0, max: 1, step: 0.05, hint: '0 = only the reading, no picture' },
          { path: 'picture.dissolve', label: 'Dissolve', min: 0, max: 2, step: 0.05 },
          { path: 'reading.marks', label: 'Marks', min: 0, max: 1, step: 0.05, hint: 'boxes, joints, lines' },
          { path: 'reading.hand', label: 'Hand size', min: 0.3, max: 1.5, step: 0.05, hint: 'the drawn hand, about its palm · 1 = life size' },
          { path: 'reading.words', label: 'Words', min: 0, max: 1, step: 0.05, hint: 'what it says it sees and hears' },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.clap', label: 'Clap scatters', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick swell', min: 0, max: 2, step: 0.05 },
          { path: 'sound.arc', label: 'Build loosens', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },
  cells: {
    config: CellConfig,
    groups: [
      {
        name: 'Cells',
        params: [
          { path: 'look.style', label: 'Style', min: 0, max: 2, step: 1, labels: ['Glass', 'Paper', 'Line'], hint: 'rounded and translucent, flat cut shapes, or outlines only' },
          { path: 'look.palette', label: 'Palette', min: 0, max: 3, step: 1, labels: ['Reel', 'Ember', 'Lagoon', 'Ink'] },
          { path: 'cells.size', label: 'Size', min: 0.4, max: 2, step: 0.05 },
          { path: 'cells.crowd', label: 'Crowd', min: 2, max: 24, step: 1, hint: 'how many at once before the oldest make room' },
          { path: 'cells.pace', label: 'Pace', min: 0.2, max: 3, step: 0.05, hint: 'how often one divides without a beat' },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.gather', label: 'Follow hand', min: 0, max: 1, step: 0.05 },
          { path: 'hands.clap', label: 'Clap divides', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick divides', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass swell', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },
  'breath-pulse': breathParams(true, ['Lines', 'how many lines']),
  'breath-air': breathParams(false, ['Air', 'how much air']),
  'breath-leaf': breathParams(false, ['Branching', 'how finely it branches']),
  'smokehand-hand': smokeParams(),
  'smokehand-torus': smokeParams(),
  'arrival-clouds': arrivalParams(
    ['Cloud', 'how much of the sky is cloud'], ['Fall', 'how fast you fall'],
    ['Steer', 'the hand steers, and opens a hole to look down'], 'Clap tears', 'Kick pushes', true, true),
  'arrival-fog': arrivalParams(
    ['Thickness', 'how thick the fog is'], ['Return', 'how fast it drifts, and mists over where it was wiped'],
    ['Wipe', 'how wide the open hand wipes'], 'Clap clears', 'Kick breathes', false, true),
  'arrival-planet': arrivalParams(
    ['Clouds', 'how cloudy the planet is'], ['Approach', 'how quickly you come in and pull back'],
    ['Turn', 'how far the hand turns the planet'], 'Clap sunrise', 'Kick flares edge'),
  morphing: {
    config: MorphingSphereConfig,
    groups: [
      {
        name: 'Shape',
        params: [
          { path: 'shape.style', label: 'Style', min: 0, max: 2, step: 0.01, hint: '0 points only · lines grow out of each point · 2 full outline' },
          { path: 'shape.size', label: 'Size', min: 0.3, max: 2, step: 0.05 },
          { path: 'shape.morph', label: 'Morph', min: 0, max: 0.8, step: 0.01, hint: '0 = round at rest; the music adds more' },
          { path: 'shape.lobes', label: 'Lobes', min: 0.3, max: 3, step: 0.05, hint: 'low = a few big soft lobes' },
          { path: 'shape.detail', label: 'Detail', min: 2, max: 6, step: 1 },
        ],
      },
      {
        name: 'Motion',
        params: [
          { path: 'motion.spin', label: 'Spin', min: 0, max: 3, step: 0.05, hint: 'turning about its centre' },
          { path: 'motion.flow', label: 'Flow', min: 0, max: 3, step: 0.05, hint: 'how fast the shape moves on' },
          { path: 'motion.dust', label: 'Stars', min: 0, max: 1, step: 0.05 },
          { path: 'motion.points', label: 'Star count', min: 0, max: 6000, step: 100, hint: 'how many points behind the sphere' },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.shape', label: 'Fist pulls', min: 0, max: 2, step: 0.05, hint: 'pinch or fist pulls it out of shape; open rounds it' },
          { path: 'hands.follow', label: 'Follow hand', min: 0, max: 1, step: 0.05, hint: '0 = stays at the middle' },
          { path: 'hands.clap', label: 'Clap burst', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.bass', label: 'Bass swells', min: 0, max: 2, step: 0.05 },
          { path: 'sound.beat', label: 'Kick pulse', min: 0, max: 2, step: 0.05 },
          { path: 'sound.spin', label: 'Music spins', min: 0, max: 2, step: 0.05 },
          { path: 'sound.drop', label: 'Drop burst', min: 0, max: 2, step: 0.05, hint: 'the drop of a build blows it out once' },
        ],
      },
    ],
  },
  neurons: {
    config: NeuronConfig,
    groups: [
      {
        name: 'Network',
        params: [
          { path: 'network.cells', label: 'Cells', min: 4, max: 60, step: 1 },
          { path: 'network.size', label: 'Size', min: 0.3, max: 3, step: 0.05, hint: 'how big each cell is drawn; the network still fills the frame' },
          { path: 'network.links', label: 'Links', min: 1, max: 5, step: 0.1, hint: 'how many others each one reaches' },
          { path: 'network.branching', label: 'Branching', min: 0, max: 2, step: 0.05, hint: 'how finely the dendrites fork' },
          { path: 'network.spread', label: 'Spread', min: 0, max: 1.5, step: 0.05, hint: 'how far one firing runs on: low a single spark, high a cascade' },
          { path: 'network.rest', label: 'Rest', min: 0.45, max: 4, step: 0.05, hint: 'seconds before a cell can fire again — longer is calmer' },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.fire', label: 'Hand fires', min: 0, max: 2, step: 0.05 },
          { path: 'hands.chain', label: 'Palm chains', min: 0, max: 1.5, step: 0.05, hint: 'an open palm lets one firing run on through the rest' },
          { path: 'hands.hold', label: 'Fist holds', min: 0, max: 2, step: 0.05, hint: 'a fist charges the network; opening lets it go' },
          { path: 'hands.clap', label: 'Clap fires all', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick fires', min: 0, max: 2, step: 0.05, hint: '0 = the kick does nothing' },
          { path: 'sound.every', label: 'Every Nth kick', min: 1, max: 8, step: 1, hint: '1 for slow music · 4 or 8 for fast' },
          { path: 'sound.cells', label: 'Cells per kick', min: 1, max: 8, step: 1 },
          { path: 'sound.build', label: 'Build excites', min: 0, max: 2, step: 0.05, hint: 'a build-up makes it more excitable' },
          { path: 'sound.drop', label: 'Drop', min: 0, max: 2, step: 0.05, hint: 'the drop sets much of it off · 0 = quiet' },
        ],
      },
    ],
  },
  dust: {
    config: DustConfig,
    groups: [
      {
        name: 'Field',
        params: [
          { path: 'field.count', label: 'Grains', min: 100, max: 5000, step: 50 },
          { path: 'field.size', label: 'Size', min: 0.3, max: 4, step: 0.05 },
          { path: 'field.drift', label: 'Drift', min: 0, max: 4, step: 0.05, hint: 'how fast the current carries them' },
          { path: 'form.circle', label: 'Circle', min: 0, max: 1, step: 0.01, hint: 'gathers it into the circle the universe begins with' },
        ],
      },
      {
        name: 'Look',
        params: [
          { path: 'look.trail', label: 'Trail', min: 0, max: 1, step: 0.05 },
          { path: 'look.grain', label: 'Grain', min: 0, max: 1, step: 0.05 },
          { path: 'look.glow', label: 'Resting light', min: 0, max: 3, step: 0.05, hint: 'how much of the field shows between beats' },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.reach', label: 'Hand', min: 0, max: 2, step: 0.05, hint: 'open palm lights and parts it; fist gathers it into the circle' },
          { path: 'hands.clap', label: 'Clap lights all', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Beat lights', min: 0, max: 2, step: 0.05, hint: 'a wave, a scatter or a line — never the same twice' },
          { path: 'sound.sparks', label: 'Sparks', min: 0, max: 2, step: 0.05, hint: 'snare and hats' },
          { path: 'sound.bass', label: 'Bass breathes', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },
  standby: {
    config: StandbyConfig,
    groups: [
      {
        name: 'Field',
        params: [
          { path: 'grid.zoom', label: 'Zoom', min: 0.3, max: 2.5, step: 0.05, hint: 'out: smaller dots, more of them — still the whole frame' },
          { path: 'grid.detail', label: 'Detail', min: 0, max: 1, step: 0.05, hint: 'finer dots' },
          { path: 'grid.field', label: 'Field', min: 0, max: 1.5, step: 0.05, hint: '0 = only what the hand lights' },
          { path: 'grid.figure', label: 'Figure', min: 0, max: 1, step: 0.05, hint: 'your own outline, faintly, in the dots' },
          { path: 'grid.words', label: 'Words', min: 0, max: 1, step: 0.05 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.light', label: 'Light', min: 0.3, max: 2.5, step: 0.05, hint: 'how wide an open hand lights' },
          { path: 'hands.close', label: 'Fist closes', min: 0, max: 1, step: 0.05, hint: '1 = all the way to a point' },
          { path: 'hands.clap', label: 'Clap ring', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick ring', min: 0, max: 2, step: 0.05 },
          { path: 'sound.quiet', label: 'Quiet closes', min: 0, max: 1, step: 0.05, hint: 'as the music empties out, the picture folds' },
        ],
      },
    ],
  },
  anemone: {
    config: AnemoneConfig,
    groups: [
      {
        name: 'Garden',
        params: [
          { path: 'garden.count', label: 'Anemones', min: 0, max: 7, step: 1, hint: 'on coming up they grow in one by one' },
          { path: 'garden.zoom', label: 'Zoom', min: 0.4, max: 2.5, step: 0.05, hint: '1 = as framed; higher = closer' },
          { path: 'garden.reach', label: 'Arms', min: 0.4, max: 1.8, step: 0.05 },
          { path: 'garden.sway', label: 'Sway', min: 0, max: 2.5, step: 0.05 },
          { path: 'garden.speed', label: 'Speed', min: 0, max: 3, step: 0.05 },
          { path: 'garden.backdrop', label: 'Backdrop', min: 0, max: 1, step: 0.05, hint: '0 = black, stacks cleanly' },
        ],
      },
      {
        name: 'Colour',
        params: [
          { path: 'colour.speed', label: 'Flow', min: -3, max: 3, step: 0.05, hint: 'below 0 runs backwards' },
          { path: 'colour.offset', label: 'Shift', min: 0, max: 1, step: 0.01 },
          { path: 'colour.palette', label: 'Palette', min: 0, max: 3, step: 1, labels: ['Reel', 'Ember', 'Lagoon', 'Ink'] },
          { path: 'colour.style', label: 'Style', min: 0, max: 3, step: 1, labels: ['Inflated', 'Paper', 'Line', 'Print'] },
          { path: 'colour.depth', label: 'Shadow', min: 0, max: 0.8, step: 0.01 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.open', label: 'Palm opens', min: 0, max: 1.2, step: 0.05, hint: 'open palm opens, fist shuts' },
          { path: 'hands.lean', label: 'Lean to hand', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap shuts', min: 0, max: 1, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick pulse', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass sway', min: 0, max: 2, step: 0.05 },
          { path: 'sound.high', label: 'Hat tips', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },
  ink: {
    config: FluidConfig,
    groups: [
      {
        name: 'Look',
        params: [
          { path: 'look.style', label: 'Style', min: 0, max: 1, step: 1, labels: ['Marble', 'Soft'], hint: 'flat bands with hard edges, or glowing ink' },
          { path: 'look.palette', label: 'Palette', min: 0, max: 3, step: 1, labels: ['Reel', 'Ember', 'Lagoon', 'Ink'] },
          { path: 'look.bands', label: 'Bands', min: 0, max: 3, step: 0.05 },
          { path: 'look.backdrop', label: 'Backdrop', min: 0, max: 1, step: 0.05, hint: '0 = black, stacks cleanly' },
        ],
      },
      {
        name: 'Ink',
        params: [
          { path: 'ink.amount', label: 'Ink', min: 0, max: 3, step: 0.05 },
          { path: 'ink.lasting', label: 'Lasting', min: 0, max: 1, step: 0.05, hint: 'how long ink stays in the water' },
          { path: 'ink.width', label: 'Width', min: 0.3, max: 3, step: 0.05 },
          { path: 'water.flow', label: 'Flow', min: 0, max: 3, step: 0.05 },
          { path: 'water.curl', label: 'Curl', min: 0, max: 3, step: 0.05, hint: 'fine eddies' },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.paint', label: 'Hand paints', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap bursts', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick bloom', min: 0, max: 2, step: 0.05 },
          { path: 'sound.drops', label: 'Hat droplets', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },
  'flight-mountains': flightParams(true),
  'flight-sea': flightParams(false),
  tonight: {
    config: TonightConfig,
    groups: [
      {
        name: 'Sky',
        params: [
          { path: 'flight.dive', label: 'Dive', min: 0, max: 1.5, step: 0.05, hint: 'how far in the hand and the music take you; 0 = the sky stays flat' },
          { path: 'flight.speed', label: 'Speed', min: 0, max: 3, step: 0.05, hint: 'how fast the stars are flown through' },
          { path: 'view.look', label: 'Looking', min: 0, max: 4, step: 1, labels: ['South', 'East', 'North', 'West', 'Up'] },
          { path: 'view.width', label: 'Field', min: 60, max: 200, step: 5, hint: 'degrees of sky across the frame' },
          { path: 'view.drift', label: 'Drift', min: 0, max: 2, step: 0.05 },
          { path: 'view.ground', label: 'Ground', min: 0, max: 1, step: 1, labels: ['Black', 'Night'], hint: 'Black to layer it over another visual' },
          { path: 'time.speed', label: 'Time', min: 0, max: 30, step: 0.5, hint: 'minutes of sky per second' },
          { path: 'time.hours', label: 'Later', min: 0, max: 12, step: 0.5, hint: 'hours ahead of now' },
        ],
      },
      {
        name: 'Look',
        params: [
          { path: 'look.size', label: 'Stars', min: 0.4, max: 2.5, step: 0.05 },
          { path: 'look.lines', label: 'Lines', min: 0, max: 1, step: 0.05 },
          { path: 'look.labels', label: 'Names', min: 0, max: 1, step: 0.05 },
          { path: 'look.moon', label: 'Moon', min: 0.5, max: 3, step: 0.05 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.pan', label: 'Hand steers', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap jumps', min: 0, max: 1, step: 1, labels: ['Off', 'On'] },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick push', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass glow', min: 0, max: 2, step: 0.05 },
          { path: 'sound.high', label: 'Hat twinkle', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },
  smear: {
    config: SmearConfig,
    groups: [
      {
        name: 'Smear',
        params: [
          { path: 'smear.style', label: 'Style', min: 0, max: 3, step: 1, labels: ['Drip', 'Stretch', 'Bands', 'Melt'] },
          { path: 'smear.length', label: 'Length', min: 0.05, max: 1.5, step: 0.05 },
          { path: 'smear.bands', label: 'Bands', min: 1, max: 40, step: 1 },
          { path: 'smear.seams', label: 'Seams', min: 0, max: 1, step: 0.05, hint: 'how much the bands slip against each other' },
          { path: 'smear.grain', label: 'Grain', min: 0, max: 1, step: 0.05 },
        ],
      },
      {
        name: 'Source',
        params: [
          { path: 'source.kind', label: 'Smears', min: 0, max: 2, step: 1, labels: ['Shapes', 'Camera', 'Your clip'], hint: 'drop a clip or picture on the Smear card' },
          { path: 'source.palette', label: 'Ground', min: 0, max: 1, step: 1, labels: ['Paper', 'Ink'] },
          { path: 'source.count', label: 'Shapes', min: 2, max: 10, step: 1 },
          { path: 'source.size', label: 'Size', min: 0.4, max: 2.5, step: 0.05 },
          { path: 'source.drift', label: 'Drift', min: 0, max: 3, step: 0.05 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.follow', label: 'Hand drags', min: 0, max: 2, step: 0.05, hint: 'the bands under your hand smear longest' },
          { path: 'hands.clap', label: 'Clap reshuffle', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick stretch', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass drag', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },
  data: {
    config: DataConfig,
    groups: [
      {
        name: 'Data',
        params: [
          { path: 'data.shape', label: 'Shape', min: 0, max: 3, step: 1, labels: ['Auto', 'Bloom', 'Rings', 'Radar'], hint: 'Auto changes every so often and on a clap' },
          { path: 'data.every', label: 'Change every', min: 10, max: 300, step: 5, hint: 'Auto shape: seconds, then on the next kick' },
        ],
      },
      {
        name: 'Look',
        params: [
          { path: 'look.size', label: 'Size', min: 0.4, max: 1.4, step: 0.05 },
          { path: 'look.glow', label: 'Glow', min: 0.2, max: 2.5, step: 0.05 },
          { path: 'look.grid', label: 'Grid', min: 0, max: 1, step: 0.05 },
          { path: 'look.labels', label: 'Numbers', min: 0, max: 1, step: 0.05 },
          { path: 'look.spin', label: 'Spin', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.focus', label: 'Hand lights', min: 0, max: 2, step: 0.05, hint: 'the part under your hand grows' },
          { path: 'hands.clap', label: 'Clap changes shape', min: 0, max: 1, step: 1, labels: ['Off', 'On'] },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick pulse', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass glow', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },
  'dream-clouds': dreamParams({
    name: 'Clouds',
    params: [
      { path: 'clouds.amount', label: 'Clouds', min: 0.1, max: 1, step: 0.05 },
      { path: 'clouds.size', label: 'Size', min: 0.5, max: 2, step: 0.05 },
      { path: 'clouds.glow', label: 'Moonlight', min: 0, max: 1.5, step: 0.05 },
    ],
  }),
  'dream-hills': dreamParams({
    name: 'Hills',
    params: [
      { path: 'hills.mist', label: 'Mist', min: 0, max: 1, step: 0.05 },
      { path: 'hills.path', label: 'Path', min: 0, max: 1, step: 1, labels: ['Off', 'On'] },
    ],
  }),
  'dream-valley': dreamParams({
    name: 'Valley',
    params: [
      { path: 'valley.rainbow', label: 'Rainbow', min: 0, max: 1, step: 0.05 },
      { path: 'valley.river', label: 'River', min: 0, max: 1, step: 1, labels: ['Off', 'On'] },
    ],
  }),
  'dream-spray': dreamParams(null),
  'dream-sea': dreamParams({
    name: 'Sea',
    params: [
      { path: 'sea.swell', label: 'Swell', min: 0, max: 2.5, step: 0.05, hint: 'bass lifts it further, like a tide' },
      { path: 'clouds.glow', label: 'Moonlight', min: 0, max: 1.5, step: 0.05 },
    ],
  }),
  'dream-mountains': dreamParams({
    name: 'Mountains',
    params: [
      { path: 'mountains.ridges', label: 'Ridges', min: 2, max: 8, step: 1 },
      { path: 'mountains.mist', label: 'Mist', min: 0, max: 1.5, step: 0.05 },
      { path: 'clouds.glow', label: 'Moonlight', min: 0, max: 1.5, step: 0.05 },
    ],
  }),
  'dream-figure': dreamParams({
    name: 'Your picture',
    params: [
      { path: 'figure.size', label: 'Size', min: 0, max: 2.5, step: 0.05, hint: 'drop a picture on the Dream Picture card · 0 hides it' },
      { path: 'figure.height', label: 'Height', min: -1, max: 1, step: 0.05 },
      { path: 'figure.dissolve', label: 'Dissolve', min: 0, max: 1.5, step: 0.05 },
      { path: 'figure.cutout', label: 'Background', min: 0, max: 1, step: 1, labels: ['Keep', 'Remove'], hint: 'Remove cuts the subject out; a transparent PNG cuts cleanest' },
      { path: 'figure.palette', label: 'Colours', min: 0, max: 3, step: 1, labels: ['Clouds', 'Hills', 'Valley', 'Spray'], hint: 'sprayed in the colours of a Dreamscape scene' },
    ],
  }),

  blend: {
    config: BlendConfig,
    groups: [
      {
        name: 'Blend',
        params: [
          { path: 'blend.lines', label: 'Lines', min: 20, max: 300, step: 5, hint: 'finer beats into moiré' },
          { path: 'blend.size', label: 'Size', min: 0.3, max: 1.8, step: 0.05 },
          { path: 'blend.zigzag', label: 'Zigzag', min: 2, max: 5, step: 1 },
          { path: 'blend.wobble', label: 'Wobble', min: 0, max: 1.5, step: 0.05 },
          { path: 'blend.softness', label: 'Soft rim', min: 0, max: 1, step: 0.05 },
          { path: 'blend.spin', label: 'Spin', min: 0, max: 3, step: 0.05 },
          { path: 'blend.colourway', label: 'Colours', min: 0, max: 1, step: 1, labels: ['Candy', 'Neon'] },
          { path: 'blend.ground', label: 'Ground', min: 0, max: 1, step: 1, labels: ['Colour', 'Black'], hint: 'black stacks cleanly' },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.follow', label: 'Follows hand', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap ripple', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick ripple', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass swell', min: 0, max: 2, step: 0.05 },
          { path: 'sound.mid', label: 'Melody wobble', min: 0, max: 2, step: 0.05 },
          { path: 'sound.high', label: 'Hat shimmer', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },

  watercolour: {
    config: WatercolourConfig,
    groups: [
      {
        name: 'Colour',
        params: [
          { path: 'colour.speed', label: 'Flow', min: -3, max: 3, step: 0.05, hint: 'below 0 runs backwards' },
          { path: 'colour.offset', label: 'Shift', min: 0, max: 1, step: 0.01, hint: 'turn the palette by hand' },
          {
            path: 'colour.palette', label: 'Palette', min: 0, max: 3, step: 1,
            labels: ['Reel', 'Ember', 'Lagoon', 'Ink'],
          },
        ],
      },
      {
        name: 'Paint',
        params: [
          { path: 'paint.washes', label: 'Washes', min: 1, max: 3, step: 1 },
          { path: 'paint.wet', label: 'Wet', min: 0, max: 1, step: 0.01, hint: 'soft bleeding edges' },
          { path: 'paint.drift', label: 'Drift', min: 0, max: 3, step: 0.05 },
          { path: 'paint.drops', label: 'Drops', min: 0, max: 1, step: 0.01, hint: 'paint dropped on the kicks' },
          { path: 'paint.paper', label: 'Paper', min: 0, max: 1, step: 0.05, hint: '0 = glowing on black, stacks cleanly' },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.push', label: 'Hand pushes', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap splash', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick drops', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass swell', min: 0, max: 2, step: 0.05 },
          { path: 'sound.mid', label: 'Melody flow', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },

  jellyfish: {
    config: JellyfishConfig,
    groups: [
      {
        name: 'Swarm',
        params: [
          { path: 'swarm.count', label: 'Jellyfish', min: 0, max: 8, step: 1, hint: '0 = empty water; on coming up they arrive one by one from below' },
          { path: 'swarm.zoom', label: 'Zoom', min: 0.4, max: 2.5, step: 0.05, hint: '1 = as framed; higher = closer' },
          { path: 'swarm.height', label: 'Height', min: -1, max: 1, step: 0.05, hint: 'where they sit: below 0 lower, above 0 higher' },
          { path: 'swarm.size', label: 'Size', min: 0.4, max: 2, step: 0.05 },
          { path: 'swarm.drift', label: 'Drift', min: 0, max: 2.5, step: 0.05, hint: '0 holds each in place' },
          { path: 'swarm.pulse', label: 'Pulse', min: 0, max: 1.5, step: 0.05 },
          { path: 'swarm.tentacles', label: 'Tentacles', min: 0.3, max: 2, step: 0.05 },
          { path: 'swarm.backdrop', label: 'Backdrop', min: 0, max: 1, step: 0.05, hint: '0 = black, stacks cleanly' },
          { path: 'swarm.arrival', label: 'Arrival', min: 1, max: 20, step: 0.5, hint: 'seconds each takes to rise into view' },
        ],
      },
      {
        name: 'Colour',
        params: [
          { path: 'colour.speed', label: 'Flow', min: -3, max: 3, step: 0.05, hint: 'below 0 runs backwards' },
          { path: 'colour.offset', label: 'Shift', min: 0, max: 1, step: 0.01, hint: 'turn the palette by hand' },
          {
            path: 'colour.palette', label: 'Palette', min: 0, max: 3, step: 1,
            labels: ['Reel', 'Ember', 'Lagoon', 'Ink'],
          },
          { path: 'colour.style', label: 'Style', min: 0, max: 3, step: 1, labels: ['Inflated', 'Paper', 'Line', 'Print'] },
          { path: 'colour.depth', label: 'Shadow', min: 0, max: 0.8, step: 0.01 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.follow', label: 'Follow hand', min: 0, max: 1.5, step: 0.05 },
          { path: 'hands.spread', label: 'Spread scatter', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap jet', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Kick pulse', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass swell', min: 0, max: 2, step: 0.05 },
          { path: 'sound.mid', label: 'Melody flow', min: 0, max: 2, step: 0.05 },
          { path: 'sound.high', label: 'Hat ripple', min: 0, max: 2, step: 0.05 },
          { path: 'sound.flow', label: 'Music current', min: 0, max: 2.5, step: 0.05, hint: 'the music sways the swarm side to side, wider as it fills' },
          { path: 'sound.swell', label: 'Bass swell', min: 0, max: 2, step: 0.05, hint: 'a heavy bass hit swells the swarm apart; it drifts back together' },
        ],
      },
    ],
  },

  dandelion: {
    config: DandelionConfig,
    groups: [
      {
        name: 'Field',
        params: [
          { path: 'field.count', label: 'Dandelions', min: 0, max: 20, step: 1, hint: 'on coming up they grow in one by one' },
          { path: 'field.zoom', label: 'Zoom', min: 0.4, max: 2.5, step: 0.05, hint: '1 = as framed; higher = closer' },
          { path: 'field.sway', label: 'Sway', min: 0, max: 2, step: 0.05 },
          { path: 'field.bounce', label: 'Bounce', min: 0, max: 2, step: 0.05, hint: 'up and down; deeper with the music' },
          { path: 'field.drift', label: 'Seeds flying', min: 0, max: 1, step: 0.01, hint: '0 = the heads stay whole' },
          { path: 'field.backdrop', label: 'Backdrop', min: 0, max: 1, step: 0.05, hint: '0 = black, stacks cleanly' },
        ],
      },
      {
        name: 'Colour',
        params: [
          { path: 'colour.speed', label: 'Flow', min: -3, max: 3, step: 0.05, hint: 'below 0 runs backwards' },
          { path: 'colour.offset', label: 'Shift', min: 0, max: 1, step: 0.01, hint: 'turn the palette by hand' },
          {
            path: 'colour.palette', label: 'Palette', min: 0, max: 3, step: 1,
            labels: ['Reel', 'Ember', 'Lagoon', 'Ink'],
          },
          { path: 'colour.depth', label: 'Shadow', min: 0, max: 0.8, step: 0.01 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.wind', label: 'Wave = gust', min: 0, max: 2, step: 0.05 },
          { path: 'hands.release', label: 'Open lets go', min: 0, max: 1.5, step: 0.05, hint: 'a fist calls the seeds home' },
          { path: 'hands.follow', label: 'Seeds follow', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap blows', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.wind', label: 'Music wind', min: 0, max: 2, step: 0.05 },
          { path: 'sound.gust', label: 'Kick gust', min: 0, max: 2, step: 0.05 },
          { path: 'sound.mid', label: 'Melody flow', min: 0, max: 2, step: 0.05 },
          { path: 'sound.high', label: 'Hat shimmer', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },

  dice: {
    config: DiceConfig,
    groups: [
      {
        name: 'Dice',
        params: [
          { path: 'dice.count', label: 'Dice', min: 0, max: 8, step: 1, hint: 'on coming up they drop in one by one' },
          { path: 'dice.size', label: 'Size', min: 0.5, max: 2, step: 0.05 },
          { path: 'dice.bounce', label: 'Bounce', min: 0, max: 0.9, step: 0.01 },
          { path: 'dice.spin', label: 'Tumble', min: 0, max: 2.5, step: 0.05 },
          { path: 'dice.gravity', label: 'Weight', min: 0.2, max: 2, step: 0.05, hint: 'low = floaty' },
          { path: 'dice.hops', label: 'Idle hops', min: 0, max: 3, step: 0.1, hint: 'when nobody plays' },
        ],
      },
      {
        name: 'Glass',
        params: [
          { path: 'glass.clarity', label: 'Clarity', min: 0, max: 1, step: 0.02, hint: '0 = solid candy' },
          { path: 'glass.gloss', label: 'Gloss', min: 0, max: 1, step: 0.02 },
          { path: 'glass.glow', label: 'Glow', min: 0, max: 3, step: 0.05 },
          { path: 'glass.depth', label: 'Depth', min: 0.3, max: 3, step: 0.05, hint: 'deeper colour in thick glass' },
          { path: 'light.speed', label: 'Light travel', min: 0, max: 4, step: 0.05 },
          { path: 'light.brightness', label: 'Brightness', min: 0.4, max: 2.2, step: 0.05 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.grab', label: 'Fist grab', min: 0, max: 2, step: 0.05 },
          { path: 'hands.throw', label: 'Throw', min: 0, max: 2.5, step: 0.05 },
          { path: 'hands.swipe', label: 'Sweep knock', min: 0, max: 2.5, step: 0.05 },
          { path: 'hands.clap', label: 'Clap jump', min: 0, max: 2, step: 0.05 },
          { path: 'hands.dolly', label: 'Spread zoom', min: 0, max: 2, step: 0.05 },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Beat hop', min: 0, max: 2, step: 0.02 },
          { path: 'sound.bass', label: 'Bass glow', min: 0, max: 2, step: 0.05 },
          { path: 'sound.mid', label: 'Melody light', min: 0, max: 2, step: 0.05 },
          { path: 'sound.high', label: 'Hat sparkle', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },

  atlas: {
    config: AtlasConfig,
    groups: [
      {
        name: 'Terrain',
        params: [
          { path: 'type.size', label: 'Module size', min: 0, max: 1, step: 0.01, hint: '0 = the smallest characters' },
          { path: 'terrain.scale', label: 'Scale', min: 1, max: 16, step: 0.1, hint: 'hills of colour across the frame; Module size sets the characters' },
          { path: 'terrain.warp', label: 'Warp', min: 0, max: 1, step: 0.01 },
          { path: 'terrain.terraces', label: 'Terraces', min: 2, max: 16, step: 1 },
          { path: 'terrain.contrast', label: 'Contrast', min: 0, max: 1, step: 0.01 },
          { path: 'terrain.flow', label: 'Flow', min: 0, max: 4, step: 0.05, hint: 'how fast the land drifts' },
        ],
      },
      {
        name: 'Type',
        params: [
          {
            path: 'type.set', label: 'Character set', min: 0, max: CHARSET_NAMES.length - 1, step: 1,
            labels: CHARSET_NAMES, samples: CHARSET_SAMPLES, menu: true, customAt: CUSTOM,
          },
          { path: 'type.density', label: 'Density', min: 0, max: 1, step: 0.01, hint: 'the music adds more' },
          { path: 'type.variety', label: 'Variety', min: 0, max: 1, step: 0.01 },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.push', label: 'Hand raise', min: 0, max: 2, step: 0.05 },
          { path: 'hands.zoom', label: 'Spread zoom', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap variation', min: 0, max: 1, step: 1, labels: ['Off', 'On'] },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.move', label: 'Rhythm moves', min: 0, max: 2, step: 0.05, hint: 'each kick the colours and characters flow to new places, every fourth further' },
          { path: 'sound.bass', label: 'Bass lift', min: 0, max: 2, step: 0.05 },
          { path: 'sound.beat', label: 'Beat ring', min: 0, max: 2, step: 0.05 },
          { path: 'sound.level', label: 'Loud = more type', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },

  crowd: {
    config: CrowdConfig,
    groups: [
      {
        name: 'Crowd',
        params: [
          { path: 'crowd.figures', label: 'Figures', min: 1, max: 60, step: 1 },
          { path: 'crowd.size', label: 'Size', min: 0, max: 1, step: 0.01 },
          { path: 'crowd.wobble', label: 'Wobble', min: 0, max: 1, step: 0.01 },
        ],
      },
      {
        name: 'Glow',
        params: [
          { path: 'glow.blur', label: 'Blur', min: 0, max: 1, step: 0.01 },
          { path: 'glow.halo', label: 'Halo', min: 0, max: 1, step: 0.01, hint: 'how wide the bands are' },
          { path: 'glow.rim', label: 'Dark rim', min: 0, max: 1, step: 0.01 },
        ],
      },
      {
        name: 'Arrows',
        params: [
          { path: 'arrows.amount', label: 'Arrows', min: 0, max: 1, step: 0.01 },
          { path: 'arrows.size', label: 'Size', min: 0, max: 1, step: 0.01 },
        ],
      },
      {
        name: 'Colour',
        params: [
          {
            path: 'colour.order', label: 'Ground', min: 0, max: 3, step: 1,
            labels: ['Beige', 'Black', 'Orange', 'Blue'],
          },
        ],
      },
      {
        name: 'Hands',
        params: [
          { path: 'hands.heat', label: 'Hand heat', min: 0, max: 2, step: 0.05 },
          { path: 'hands.grow', label: 'Spread grows', min: 0, max: 2, step: 0.05 },
          { path: 'hands.clap', label: 'Clap variation', min: 0, max: 1, step: 1, labels: ['Off', 'On'] },
        ],
      },
      {
        name: 'Sound',
        params: [
          { path: 'sound.beat', label: 'Beat jump', min: 0, max: 2, step: 0.05 },
          { path: 'sound.bass', label: 'Bass heat', min: 0, max: 2, step: 0.05 },
          { path: 'sound.level', label: 'Loud = more arrows', min: 0, max: 2, step: 0.05 },
        ],
      },
    ],
  },

  mosaic: {
    config: MosaicConfig,
    groups: [
      {
        name: 'Mark',
        params: [
          {
            path: 'mode', label: 'Mode', min: 0, max: 3, step: 1,
            labels: ['Letters', 'Dots', 'Blocks', 'Bars'],
          },
          { path: 'grid.columns', label: 'Detail', min: 8, max: 140, step: 1, hint: 'cells across' },
          { path: 'grid.fill', label: 'Weight', min: 0.2, max: 1.8, step: 0.05 },
          { path: 'grid.cellAspect', label: 'Cell shape', min: 0.4, max: 2.5, step: 0.05, hint: 'above 1 = taller' },
          { path: 'grid.spreadDensity', label: 'Spread coarsens', min: 0, max: 1.5, step: 0.05 },
        ],
      },
      {
        name: 'Image',
        params: [
          { path: 'tone.contrast', label: 'Contrast', min: 0.2, max: 4, step: 0.05 },
          { path: 'tone.brightness', label: 'Brightness', min: -0.5, max: 0.5, step: 0.02 },
          { path: 'tone.floor', label: 'Cut', min: 0, max: 0.9, step: 0.01, hint: 'darker cells draw nothing' },
          { path: 'tone.invert', label: 'Invert', min: 0, max: 1, step: 1 },
        ],
      },
      {
        name: 'Letters',
        visibleWhen: { path: 'mode', equals: [0] },
        params: [
          {
            path: 'letters.set', label: 'Character set', min: 0, max: CHARSET_NAMES.length - 1, step: 1,
            labels: CHARSET_NAMES, samples: CHARSET_SAMPLES, menu: true, customAt: CUSTOM,
          },
          { path: 'letters.weight', label: 'Weight', min: 100, max: 900, step: 100 },
          { path: 'letters.outline', label: 'Hollow', min: 0, max: 1, step: 1 },
        ],
      },
      {
        name: 'Shape',
        visibleWhen: { path: 'mode', equals: [1, 2, 3] },
        params: [
          { path: 'shape.minimum', label: 'Floor', min: 0, max: 0.6, step: 0.01, hint: 'size of the faintest mark' },
          { path: 'shape.rotate', label: 'Turn', min: 0, max: 1, step: 0.02, hint: 'blocks towards diamonds' },
          { path: 'shape.anchor', label: 'From the floor', min: 0, max: 1, step: 1, hint: 'bars only' },
        ],
      },
      {
        name: 'Warp',
        params: [
          { path: 'warp.handPush', label: 'Hand push', min: 0, max: 0.3, step: 0.005 },
          { path: 'warp.ripple', label: 'Ripple', min: 0, max: 2, step: 0.05 },
          { path: 'warp.rippleSpeed', label: 'Ripple speed', min: 0, max: 4, step: 0.05 },
        ],
      },
      {
        name: 'Colour',
        params: [
          { path: 'colour.fromSource', label: 'Own colour', min: 0, max: 1, step: 0.02, hint: '0 = your palette' },
          { path: 'colour.spread', label: 'Palette run', min: 1, max: 40, step: 1 },
          { path: 'audio.bassScale', label: 'Bass swell', min: 0, max: 2, step: 0.05 },
          { path: 'audio.beatKick', label: 'Beat kick', min: 0, max: 1.5, step: 0.05 },
          { path: 'trail.fadeAlpha', label: 'Trail', min: 0.02, max: 1, step: 0.01, hint: 'lower = longer' },
        ],
      },
    ],
  },

  digitalblocks: {
    config: HorizonConfig,
    groups: [
      {
        name: 'Hands',
        params: [
          { path: 'chaos.range', label: 'Ceiling', min: 0.05, max: 1, step: 0.01, hint: 'how wild it can get' },
          { path: 'chaos.openness', label: 'Open hand', min: 0, max: 1, step: 0.02 },
          { path: 'chaos.velocity', label: 'Hand speed', min: 0, max: 1, step: 0.02 },
          { path: 'chaos.clap', label: 'Clap', min: 0, max: 1, step: 0.02 },
          { path: 'chaos.ease', label: 'Ease', min: 0.005, max: 0.3, step: 0.005, hint: 'lower = calmer' },
          { path: 'chaos.idle', label: 'Idle', min: 0, max: 0.5, step: 0.01 },
        ],
      },
      {
        name: 'Motion',
        params: [
          { path: 'speed.base', label: 'Drift', min: 0, max: 0.4, step: 0.005 },
          { path: 'speed.variation', label: 'Spread', min: 0, max: 0.5, step: 0.005 },
          { path: 'speed.chaos', label: 'Chaos speed', min: 0, max: 1.5, step: 0.02 },
        ],
      },
      {
        name: 'Grid',
        params: [
          { path: 'strips.base', label: 'Columns', min: 2, max: 60, step: 1 },
          { path: 'strips.chaos', label: 'Columns +', min: 0, max: 60, step: 1 },
          { path: 'strips.blocks', label: 'Blocks', min: 1, max: 40, step: 1 },
          { path: 'strips.blocksChaos', label: 'Blocks +', min: 0, max: 40, step: 1 },
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
/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE EFFECTS
 * ═══════════════════════════════════════════════════════════════════════════
 * At most three controls each, and no more.
 *
 * Every stage used to carry a Mix slider on top of its own parameters, which
 * meant two ways to say "less of this" and thirty-odd sliders on screen at
 * once. Mix is gone: each effect's first control IS its amount, and turning it
 * to zero is how it goes away. What is left is the shape of the effect rather
 * than its plumbing.
 *
 * Where a choice had to go, the more expressive one stayed. Feedback lost its
 * drift pair and kept the tunnel and the spiral; Fluted Glass lost its
 * orientation and stayed vertical, which is what the reference is.
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const PIPELINE_PARAMS: RendererParams = {
  config: PipelineConfig,
  groups: [
    {
      name: 'Feedback',
      stage: 'feedback',
      turnOn: { 'feedback.amount': 0.72, 'feedback.zoom': 1.02 },
      togglePath: 'feedback.enabled',
      params: [
        { path: 'feedback.amount', label: 'Trail', min: 0, max: 0.99, step: 0.01, hint: 'how long the image hangs on' },
        { needs: 'feedback.amount', path: 'feedback.zoom', label: 'Tunnel', min: 0.9, max: 1.1, step: 0.001, hint: 'above the middle pushes outward' },
        { needs: 'feedback.amount', path: 'feedback.rotate', label: 'Spiral', min: -0.05, max: 0.05, step: 0.0005 },
      ],
    },
    {
      name: 'Colour',
      stage: 'colour',
      // Switched on, it lifts the contrast; the hue stays where it is.
      turnOn: { 'colour.contrast': 1.3 },
      togglePath: 'colour.enabled',
      params: [
        { path: 'colour.hue', label: 'Hue', min: -3.14, max: 3.14, step: 0.01, hint: 'turns the whole frame' },
        { path: 'colour.saturation', label: 'Saturation', min: 0, max: 2, step: 0.01, hint: '1 = untouched' },
        { path: 'colour.contrast', label: 'Contrast', min: 0, max: 2.5, step: 0.01, hint: '1 = untouched; above 1 darker darks and brighter lights' },
      ],
    },
    {
      name: 'Displace',
      stage: 'displace',
      turnOn: { 'displace.amount': 0.08 },
      togglePath: 'displace.enabled',
      params: [
        { path: 'displace.amount', label: 'Warp', min: 0, max: 0.3, step: 0.002 },
        { path: 'displace.scale', label: 'Scale', min: 0.5, max: 40, step: 0.5 },
        { path: 'displace.speed', label: 'Speed', min: 0, max: 3, step: 0.02 },
      ],
    },
    {
      name: 'Chromatic',
      stage: 'rgbSplit',
      turnOn: { 'rgbSplit.amount': 0.022 },
      togglePath: 'rgbSplit.enabled',
      params: [
        { path: 'rgbSplit.amount', label: 'Split', min: 0, max: 0.1, step: 0.001 },
      ],
    },
    {
      name: 'Kaleido',
      stage: 'kaleido',
      turnOn: { 'kaleido.segments': 4 },
      togglePath: 'kaleido.enabled',
      params: [
        {
          path: 'kaleido.segments', label: 'Mirrors', min: 0, max: 4, step: 1,
          labels: ['Off', 'Off', '2', '3', '4'],
        },
        { needs: 'kaleido.segments', path: 'kaleido.spin', label: 'Angle', min: -3.14, max: 3.14, step: 0.01 },
      ],
    },
    {
      name: 'Pixelate',
      stage: 'pixelate',
      turnOn: { 'pixelate.pixel': 14 },
      togglePath: 'pixelate.enabled',
      params: [
        { path: 'pixelate.pixel', label: 'Block', min: 0, max: 64, step: 1, hint: '0 = off' },
        { path: 'pixelate.levels', label: 'Colours', min: 0, max: 16, step: 1, hint: 'steps per channel' },
      ],
    },
    {
      name: 'Noise',
      stage: 'noiseTile',
      turnOn: { 'noiseTile.size': 2 },
      togglePath: 'noiseTile.enabled',
      params: [
        { path: 'noiseTile.grain', label: 'Grain', min: 0, max: 1, step: 0.02, hint: 'coarse noise over the dither' },
      ],
    },
    {
      name: 'Echo',
      stage: 'echo',
      turnOn: { 'echo.count': 4 },
      togglePath: 'echo.enabled',
      params: [
        { path: 'echo.count', label: 'Echoes', min: 0, max: 6, step: 1, hint: '0 = off' },
        { needs: 'echo.count', path: 'echo.depth', label: 'Depth', min: 0.02, max: 0.6, step: 0.01 },
        { needs: 'echo.count', path: 'echo.speed', label: 'Travel', min: 0, max: 1.5, step: 0.01, hint: 'loops seamlessly' },
      ],
    },
    {
      name: 'Repeat',
      stage: 'repeat',
      turnOn: { 'repeat.grid': 3 },
      togglePath: 'repeat.enabled',
      params: [
        { path: 'repeat.grid', label: 'Grid', min: 0, max: 8, step: 1, labels: ['Off', 'Off', '2×2', '3×3', '4×4', '5×5', '6×6', '7×7', '8×8'] },
        { needs: 'repeat.grid', path: 'repeat.delay', label: 'Delay', min: 0, max: 1, step: 0.01, hint: '0 all in step · 1 the last tile under a second behind' },
        { needs: 'repeat.grid', path: 'repeat.order', label: 'Order', min: 0, max: 3, step: 1, labels: ['Reading', 'Columns', 'From centre', 'Scattered'] },
        { needs: 'repeat.grid', path: 'repeat.mirror', label: 'Mirror', min: 0, max: 1, step: 1, labels: ['Off', 'On'] },
      ],
    },
    {
      name: 'Time',
      stage: 'time',
      turnOn: { 'time.amount': 0.6 },
      togglePath: 'time.enabled',
      params: [
        { path: 'time.amount', label: 'Stretch', min: 0, max: 1, step: 0.01, hint: 'how far back the oldest part reaches · 0 = off' },
        { needs: 'time.amount', path: 'time.direction', label: 'Direction', min: 0, max: 3, step: 1, labels: ['Down', 'Across', 'From centre', 'Patches'] },
      ],
    },
    {
      name: 'Atlas',
      stage: 'atlas',
      turnOn: { 'atlas.columns': 90 },
      togglePath: 'atlas.enabled',
      params: [
        {
          path: 'atlas.set', label: 'Character set', min: 0, max: CHARSET_NAMES.length - 1, step: 1,
          labels: CHARSET_NAMES, samples: CHARSET_SAMPLES, menu: true, customAt: CUSTOM,
        },
        { path: 'atlas.columns', label: 'Columns', min: 0, max: 200, step: 1, hint: 'characters across · 0 = off' },
        { needs: 'atlas.columns', path: 'atlas.terraces', label: 'Terraces', min: 2, max: 12, step: 1, hint: 'levels of the terrain' },
      ],
    },
    {
      name: 'Fluted',
      stage: 'fluted',
      turnOn: { 'fluted.ribs': 26 },
      togglePath: 'fluted.enabled',
      params: [
        { path: 'fluted.ribs', label: 'Ribs', min: 0, max: 80, step: 1, hint: '0 = off' },
        { needs: 'fluted.ribs', path: 'fluted.bend', label: 'Bend', min: 0, max: 2, step: 0.02 },
        { needs: 'fluted.ribs', path: 'fluted.shine', label: 'Shine', min: 0, max: 1, step: 0.02 },
      ],
    },
  ],
};

// ── what the hands and the music do ─────────────────────────────────────────

/** Groups that are wholly about the hands or the music, by name. */
const PLAY_GROUP = /^(hands?|sound|audio|clap|beat|music|bridge & clap|hands & focus)\b/i;
/** Single sliders about them, wherever they sit: by path, or by a sound word in the label. */
const PLAY_PATH = /^(hands?|sound|audio|handInfluence|explosion|vibration|chaos|clap|beat)\./;
const PLAY_LABEL = /^(bass|kick|hat|hats|melody|beat|loud)\b|audio|music/i;

/**
 * A visual's sliders split in two: what it looks like, and how the hands and
 * the music move it.
 *
 * Mid-set those are different questions asked at different times — the look
 * is set before, the response is played during — and having them in one
 * column meant hunting for "Clap burst" between "Petals" and "Palette". The
 * split is worked out here from the registry rather than written per visual,
 * so every visual gets it, the older ones with their own group names
 * included: a group named for the hands or the sound goes over whole, and a
 * hand or sound slider sitting in some other group goes over on its own.
 */
export function splitPlay(entry: RendererParams): { look: RendererParams; play: RendererParams } {
  const look: ParamGroup[] = [];
  const play: ParamGroup[] = [];
  for (const group of entry.groups) {
    if (PLAY_GROUP.test(group.name)) {
      play.push(group);
      continue;
    }
    const moved = group.params.filter((p) => PLAY_PATH.test(p.path) || PLAY_LABEL.test(p.label));
    if (moved.length === 0) {
      look.push(group);
      continue;
    }
    const kept = group.params.filter((p) => !moved.includes(p));
    if (kept.length) look.push({ ...group, params: kept });
    play.push({ ...group, params: moved });
  }
  return { look: { config: entry.config, groups: look }, play: { config: entry.config, groups: play } };
}
