import { useRef, useEffect } from 'react';
import { HandData, VisualPattern } from '../App';
import { ParticleRenderer } from './renderers/ParticleRenderer';
import { GeometricRenderer } from './renderers/GeometricRenderer';
import { WaveRenderer } from './renderers/WaveRenderer';
import { GlitchRenderer } from './renderers/GlitchRenderer';
import { TechnicalHandRenderer } from './renderers/TechnicalHandRenderer';
import { LottieInspiredRenderer } from './renderers/LottieInspiredRenderer';
import { ChromaticRenderer } from './renderers/ChromaticRenderer';
import { HalftoneRenderer } from './renderers/HalftoneRenderer';
import { MatrixGridRenderer } from './renderers/MatrixGridRenderer';
import { LineFieldRenderer } from './renderers/LineFieldRenderer';
import { DistortedCameraRenderer } from './renderers/DistortedCameraRenderer';
import { CyberStreamRenderer } from './renderers/CyberStreamRenderer';
import { FaceCloudRenderer } from './renderers/FaceCloudRenderer';
import { FaceRenderer } from './renderers/FaceRenderer';
import { MorphingSphereRenderer } from './renderers/MorphingSphereRenderer';
import { CubeWallRenderer } from './renderers/CubeWallRenderer';
import { SmokeHandRenderer } from './renderers/SmokeHandRenderer';
import { ThickLineRenderer } from './renderers/ThickLineRenderer';
import { FlowFieldRenderer } from './renderers/FlowFieldRenderer';
import { LiquidChromeRenderer } from './renderers/LiquidChromeRenderer';
import { LottieClassicRenderer } from './renderers/LottieClassicRenderer';
import { NetworkCubeRenderer } from './renderers/NetworkCubeRenderer';
import { ElasticNetRenderer } from './renderers/ElasticNetRenderer';
import { DigitalBlockRenderer } from './renderers/DigitalBlockRenderer';
import { AudioData } from '../App';
import { ParamValues, withOverrides } from '../params/types';
import { PostPipeline } from '../pipeline/PostPipeline';
import { PipelineConfig } from '../config/PipelineConfig';

type ColorMode = 'black' | 'contrast' | 'grayscale';

/**
 * What VJCanvas needs from a renderer. Every renderer draws into the same 2D
 * context; the three.js ones keep an offscreen WebGL canvas and blit it across.
 */
interface VJRenderer {
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
function createRenderer(
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
    case 'smokehand':
      renderer = new SmokeHandRenderer(canvas, ctx);
      break;
    case 'network-cube':
      renderer = new NetworkCubeRenderer(canvas, ctx);
      break;
    case 'elastic-net':
      renderer = new ElasticNetRenderer(canvas, ctx);
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

/** A renderer plus the canvas it draws into. */
interface Deck {
  renderer: VJRenderer;
  canvas: HTMLCanvasElement;
  pattern: VisualPattern;
}

/** The deck on its way out during a crossfade. */
interface FadingDeck extends Deck {
  fadeStart: number;
  duration: number;
}

interface VJCanvasProps {
  handData: HandData;
  dominantColors: string[];
  pattern: VisualPattern;
  videoElement?: HTMLVideoElement | null; // Camera video element for holographic renderer
  smokeHandModel?: 'torus' | 'hand';
  audioData?: AudioData;
  colorMode?: 'black' | 'contrast' | 'grayscale';
  /** Slider overrides for the current pattern. */
  params?: ParamValues;
  /** Slider overrides for the post pipeline (the FX tab). */
  fxParams?: ParamValues;
}

export function VJCanvas({
  handData,
  dominantColors,
  pattern,
  videoElement,
  smokeHandModel,
  audioData,
  colorMode,
  params,
  fxParams
}: VJCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const rendererRef = useRef<VJRenderer | null>(null);
  const pipelineRef = useRef<PostPipeline | null>(null);
  const deckRef = useRef<Deck | null>(null);
  const outgoingRef = useRef<FadingDeck | null>(null);
  
  // Store latest handData and dominantColors in refs so animate loop can access them
  const handDataRef = useRef<HandData>(handData);
  const dominantColorsRef = useRef<string[]>(dominantColors);
  const videoElementRef = useRef<HTMLVideoElement | null>(videoElement ?? null);
  const smokeHandModelRef = useRef<'torus' | 'hand' | undefined>(smokeHandModel);
  const audioDataRef = useRef<AudioData | undefined>(audioData);
  const colorModeRef = useRef<'black' | 'contrast' | 'grayscale' | undefined>(colorMode);
  const paramsRef = useRef<ParamValues | undefined>(params);
  const fxParamsRef = useRef<ParamValues | undefined>(fxParams);

  // Update refs whenever props change
  useEffect(() => {
    handDataRef.current = handData;
    dominantColorsRef.current = dominantColors;
    videoElementRef.current = videoElement ?? null;
    smokeHandModelRef.current = smokeHandModel;
    audioDataRef.current = audioData;
    colorModeRef.current = colorMode;
    paramsRef.current = params;
    fxParamsRef.current = fxParams;
  }, [handData, dominantColors, videoElement, smokeHandModel, audioData, colorMode, params, fxParams]);

  // Slider moves must not rebuild the renderer - that would reset its particles,
  // its trails and, for the three.js ones, its whole scene.
  useEffect(() => {
    rendererRef.current?.setParams?.(params ?? {});
  }, [params]);

  useEffect(() => {
    pipelineRef.current?.setParams(fxParams ?? {});
  }, [fxParams]);

  // The post pipeline owns the visible canvas and outlives every pattern switch,
  // so its WebGL context is created once rather than per renderer.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let pipeline: PostPipeline | null = null;
    try {
      pipeline = new PostPipeline(canvas);
      pipeline.setParams(fxParamsRef.current ?? {});
      pipelineRef.current = pipeline;
    } catch (error) {
      // No WebGL2: fall back to showing the renderers' own canvas directly.
      console.error('Post pipeline unavailable, falling back to direct output:', error);
      pipelineRef.current = null;
    }

    return () => {
      pipeline?.destroy();
      pipelineRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ═══════════════════════════════════════════════════════════════════════
  // DECKS
  // ═══════════════════════════════════════════════════════════════════════
  // A pattern change does not tear the old renderer down. It becomes the
  // outgoing deck and keeps drawing into its own canvas for the length of the
  // crossfade, so the transition is between two live visuals rather than a cut
  // or a fade from a frozen frame. Both decks run at once for that window.

  // One rAF loop for the lifetime of the component, driving whichever decks
  // exist. Rebuilding it per pattern is what forced the hard cut before.
  useEffect(() => {
    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      for (const deck of [deckRef.current, outgoingRef.current]) {
        if (deck) {
          deck.canvas.width = width;
          deck.canvas.height = height;
        }
      }
      const visible = canvasRef.current;
      if (visible && !pipelineRef.current) {
        visible.width = width;
        visible.height = height;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const drawDeck = (deck: Deck) => {
      if (deck.pattern === 'distortedcamera' && videoElementRef.current) {
        deck.renderer.setVideoElement?.(videoElementRef.current);
      }
      if (deck.pattern === 'smokehand' && smokeHandModelRef.current) {
        deck.renderer.setSmokeHandModel?.(smokeHandModelRef.current);
      }
      deck.renderer.render(
        handDataRef.current,
        dominantColorsRef.current,
        audioDataRef.current,
        colorModeRef.current,
      );
    };

    const animate = () => {
      const deck = deckRef.current;
      const outgoing = outgoingRef.current;

      if (deck) {
        drawDeck(deck);

        let fade = 1;
        if (outgoing) {
          const elapsed = (performance.now() - outgoing.fadeStart) / 1000;
          fade = outgoing.duration > 0 ? Math.min(1, elapsed / outgoing.duration) : 1;
          if (fade >= 1) {
            outgoing.renderer.destroy?.();
            outgoingRef.current = null;
          } else {
            drawDeck(outgoing);
          }
        }

        const pipeline = pipelineRef.current;
        if (pipeline) {
          pipeline.render(
            deck.canvas,
            performance.now() / 1000,
            fade < 1 && outgoingRef.current ? outgoingRef.current.canvas : null,
            fade,
          );
        } else {
          const visibleCtx = canvasRef.current?.getContext('2d');
          if (visibleCtx) {
            // No WebGL2 — no crossfade either, just the current deck.
            visibleCtx.drawImage(deck.canvas, 0, 0);
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      outgoingRef.current?.renderer.destroy?.();
      outgoingRef.current = null;
      deckRef.current?.renderer.destroy?.();
      deckRef.current = null;
      rendererRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Swap decks when the pattern changes.
  useEffect(() => {
    const previous = deckRef.current;
    if (previous?.pattern === pattern) return;

    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let renderer: VJRenderer;
    try {
      renderer = createRenderer(pattern, canvas, ctx, videoElementRef.current);
    } catch (error) {
      console.error('Failed to create renderer for pattern:', pattern, error);
      return;
    }
    renderer.setParams?.(paramsRef.current ?? {});

    deckRef.current = { renderer, canvas, pattern };
    rendererRef.current = renderer;

    if (previous) {
      // Only one deck can be fading at a time; a switch during a fade drops
      // whatever was already on its way out rather than stacking renderers.
      outgoingRef.current?.renderer.destroy?.();

      const cfg = withOverrides(PipelineConfig, fxParamsRef.current ?? {}).transition;
      const duration = cfg.enabled >= 0.5 ? cfg.duration : 0;
      if (duration > 0) {
        outgoingRef.current = { ...previous, fadeStart: performance.now(), duration };
      } else {
        previous.renderer.destroy?.();
        outgoingRef.current = null;
      }
    }
  }, [pattern]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
}