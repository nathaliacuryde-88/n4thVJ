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
import { ParamValues } from '../params/types';
import { PostPipeline } from '../pipeline/PostPipeline';

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
  /** Renderers draw here; the pipeline reads it and presents to the visible canvas. */
  const sourceCanvasRef = useRef<HTMLCanvasElement | null>(null);
  if (sourceCanvasRef.current === null && typeof document !== 'undefined') {
    sourceCanvasRef.current = document.createElement('canvas');
  }
  
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

  // Main render loop
  useEffect(() => {
    const canvas = sourceCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size. The pipeline sizes the visible canvas itself from the
    // source; the fallback path has to be kept in step here.
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const visible = canvasRef.current;
      if (visible && !pipelineRef.current) {
        visible.width = canvas.width;
        visible.height = canvas.height;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create renderer based on pattern
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

    renderer.setParams?.(paramsRef.current ?? {});
    rendererRef.current = renderer;

    const visibleCtx = pipelineRef.current ? null : canvasRef.current?.getContext('2d') ?? null;

    // Safety check
    if (!renderer) {
      console.error('Failed to create renderer for pattern:', pattern);
      return;
    }

    // Animation loop
    const animate = () => {
      // Update video element for holographic renderer if needed
      if (pattern === 'distortedcamera' && videoElementRef.current) {
        renderer.setVideoElement?.(videoElementRef.current);
      }
      
      // Update smoke hand model if needed
      if (pattern === 'smokehand' && smokeHandModelRef.current) {
        renderer.setSmokeHandModel?.(smokeHandModelRef.current);
      }
      
      renderer.render(
        handDataRef.current, 
        dominantColorsRef.current, 
        audioDataRef.current, 
        colorModeRef.current
      );

      const pipeline = pipelineRef.current;
      if (pipeline) {
        pipeline.render(canvas, performance.now() / 1000);
      } else if (visibleCtx) {
        // No WebGL2 — copy the frame across untouched.
        visibleCtx.drawImage(canvas, 0, 0);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (renderer && renderer.destroy) {
        renderer.destroy();
      }
      if (rendererRef.current === renderer) rendererRef.current = null;
    };
  }, [pattern]); // Only recreate renderer when pattern changes

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
}