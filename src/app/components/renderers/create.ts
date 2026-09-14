/**
 * Builds the renderer for a pattern.
 *
 * Its own module because two places need it: the VJ canvas, and the library's
 * previews, which run the same renderers small.
 */

import { ParticleRenderer } from './ParticleRenderer';
import { GeometricRenderer } from './GeometricRenderer';
import { WaveRenderer } from './WaveRenderer';
import { GlitchRenderer } from './GlitchRenderer';
import { TechnicalHandRenderer } from './TechnicalHandRenderer';
import { LottieInspiredRenderer } from './LottieInspiredRenderer';
import { ChromaticRenderer } from './ChromaticRenderer';
import { HalftoneRenderer } from './HalftoneRenderer';
import { MatrixGridRenderer } from './MatrixGridRenderer';
import { LineFieldRenderer } from './LineFieldRenderer';
import { DistortedCameraRenderer } from './DistortedCameraRenderer';
import { CyberStreamRenderer } from './CyberStreamRenderer';
import { FaceCloudRenderer } from './FaceCloudRenderer';
import { FaceRenderer } from './FaceRenderer';
import { MorphingSphereRenderer } from './MorphingSphereRenderer';
import { CubeWallRenderer } from './CubeWallRenderer';
import { SmokeHandRenderer } from './SmokeHandRenderer';
import { ThickLineRenderer } from './ThickLineRenderer';
import { FlowFieldRenderer } from './FlowFieldRenderer';
import { LiquidChromeRenderer } from './LiquidChromeRenderer';
import { LottieClassicRenderer } from './LottieClassicRenderer';
import { NetworkCubeRenderer } from './NetworkCubeRenderer';
import { ElasticNetRenderer } from './ElasticNetRenderer';
import { DigitalBlockRenderer } from './DigitalBlockRenderer';
import { RippleRenderer } from './RippleRenderer';
import { AudioData, HandData, VisualPattern } from '../../App';
import { ParamValues } from '../../params/types';

export type ColorMode = 'black' | 'contrast' | 'grayscale';

/**
 * What VJCanvas needs from a renderer. Every renderer draws into the same 2D
 * context; the three.js ones keep an offscreen WebGL canvas and blit it across.
 */
export interface VJRenderer {
  render(
    handData: HandData,
    colors: string[],
    audioData?: AudioData,
    colorMode?: ColorMode,
  ): void;
  /** Releases GPU resources. Only the renderers that hold any implement it. */
  destroy?(): void;
  /** Applies slider overrides. Only the renderers with a param registry entry implement it. */
  setParams?(values: ParamValues): void;
  setVideoElement?(video: HTMLVideoElement): void;
  setSmokeHandModel?(model: 'torus' | 'hand'): void;
}

/** Build the renderer for a pattern. Unknown patterns fall back to Geometric. */
export function createRenderer(
  pattern: VisualPattern,
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  videoElement: HTMLVideoElement | null,
): VJRenderer {
  
  let renderer: VJRenderer;
  switch (pattern) {
    case 'geometric':
      renderer = new GeometricRenderer(canvas, ctx);
      break;
    case 'particles':
      renderer = new ParticleRenderer(canvas, ctx);
      break;
    case 'waves':
      renderer = new WaveRenderer(canvas, ctx);
      break;
    case 'glitch':
      renderer = new GlitchRenderer(canvas, ctx);
      break;
    case 'technical':
      renderer = new TechnicalHandRenderer(canvas, ctx);
      break;
    case 'lottie':
      renderer = new LottieInspiredRenderer(canvas, ctx);
      break;
    case 'lottie-classic':
      renderer = new LottieClassicRenderer(canvas, ctx);
      break;
    case 'linefield':
      renderer = new LineFieldRenderer(canvas, ctx);
      break;
    case 'thicklines':
      renderer = new ThickLineRenderer(canvas, ctx);
      break;
    case 'flowfield':
      renderer = new FlowFieldRenderer(canvas, ctx);
      break;
    case 'liquidchrome':
      renderer = new LiquidChromeRenderer(canvas, ctx);
      break;
    case 'chromatic':
      renderer = new ChromaticRenderer(canvas, ctx);
      break;
    case 'halftone':
      renderer = new HalftoneRenderer(canvas, ctx);
      break;
    case 'matrix':
      renderer = new MatrixGridRenderer(canvas, ctx);
      break;
    case 'distortedcamera':
      renderer = new DistortedCameraRenderer(canvas, ctx);
      // Set video element for camera feed
      if (videoElement) {
        renderer.setVideoElement?.(videoElement);
      }
      break;
    case 'cyberstream':
      renderer = new CyberStreamRenderer(canvas, ctx);
      break;
    case 'facecloud':
      renderer = new FaceCloudRenderer(canvas, ctx);
      break;
    case 'face':
      renderer = new FaceRenderer(canvas, ctx);
      break;
    case 'morphing':
      renderer = new MorphingSphereRenderer(canvas, ctx);
      break;
    case 'cubewall':
      renderer = new CubeWallRenderer(canvas, ctx);
      break;
    case 'smokehand-torus':
      renderer = new SmokeHandRenderer(canvas, ctx);
      break;
    case 'smokehand-hand':
      renderer = new SmokeHandRenderer(canvas, ctx);
      // The two are one renderer with a different model; picking it at
      // construction is what makes them two entries in the library.
      renderer.setSmokeHandModel?.('hand');
      break;
    case 'network-cube':
      renderer = new NetworkCubeRenderer(canvas, ctx);
      break;
    case 'elastic-net':
      renderer = new ElasticNetRenderer(canvas, ctx);
      break;
    case 'ripple':
      renderer = new RippleRenderer(canvas, ctx);
      break;
    case 'digitalblocks':
      renderer = new DigitalBlockRenderer(canvas, ctx);
      break;
    default:
      // Fallback to geometric if pattern is invalid
      renderer = new GeometricRenderer(canvas, ctx);
      break;
  }

  return renderer;
}

