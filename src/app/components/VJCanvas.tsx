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
import { RoseRenderer } from './renderers/RoseRenderer';
import { SmokeHandRenderer } from './renderers/SmokeHandRenderer';
import { ThickLineRenderer } from './renderers/ThickLineRenderer';
import { FlowFieldRenderer } from './renderers/FlowFieldRenderer';
import { LiquidChromeRenderer } from './renderers/LiquidChromeRenderer';
import { LottieClassicRenderer } from './renderers/LottieClassicRenderer';
import { NetworkCubeRenderer } from './renderers/NetworkCubeRenderer';
import { ElasticNetRenderer } from './renderers/ElasticNetRenderer';
import { DigitalBlockRenderer } from './renderers/DigitalBlockRenderer';
import { AudioData } from '../App';

interface VJCanvasProps {
  handData: HandData;
  dominantColors: string[];
  pattern: VisualPattern;
  videoElement?: HTMLVideoElement | null; // Camera video element for holographic renderer
  smokeHandModel?: 'torus' | 'hand';
  audioData?: AudioData;
  colorMode?: 'black' | 'contrast' | 'grayscale';
}

export function VJCanvas({
  handData,
  dominantColors,
  pattern,
  videoElement,
  smokeHandModel,
  audioData,
  colorMode
}: VJCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  
  // Store latest handData and dominantColors in refs so animate loop can access them
  const handDataRef = useRef<HandData>(handData);
  const dominantColorsRef = useRef<string[]>(dominantColors);
  const videoElementRef = useRef<HTMLVideoElement | null>(videoElement);
  const smokeHandModelRef = useRef<'torus' | 'hand' | undefined>(smokeHandModel);
  const audioDataRef = useRef<AudioData | undefined>(audioData);
  const colorModeRef = useRef<'black' | 'contrast' | 'grayscale' | undefined>(colorMode);

  // Update refs whenever props change
  useEffect(() => {
    handDataRef.current = handData;
    dominantColorsRef.current = dominantColors;
    videoElementRef.current = videoElement;
    smokeHandModelRef.current = smokeHandModel;
    audioDataRef.current = audioData;
    colorModeRef.current = colorMode;
  }, [handData, dominantColors, videoElement, smokeHandModel, audioData, colorMode]);

  // Main render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create renderer based on pattern
    let renderer: any;
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
          renderer.setVideoElement(videoElement);
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
      case 'rose':
        renderer = new RoseRenderer(canvas, ctx);
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

    // Safety check
    if (!renderer) {
      console.error('Failed to create renderer for pattern:', pattern);
      return;
    }

    // Animation loop
    const animate = () => {
      // Update video element for holographic renderer if needed
      if (pattern === 'distortedcamera' && renderer && videoElementRef.current) {
        renderer.setVideoElement(videoElementRef.current);
      }
      
      // Update smoke hand model if needed
      if (pattern === 'smokehand' && renderer && smokeHandModelRef.current) {
        renderer.setSmokeHandModel(smokeHandModelRef.current);
      }
      
      renderer.render(
        handDataRef.current, 
        dominantColorsRef.current, 
        audioDataRef.current, 
        colorModeRef.current
      );
      
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
    };
  }, [pattern]); // Only recreate renderer when pattern changes

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
}