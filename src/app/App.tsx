import { useState, useEffect, useCallback } from 'react';
import { ParticleRenderer } from './components/renderers/ParticleRenderer';
import { GeometricRenderer } from './components/renderers/GeometricRenderer';
import { WaveRenderer } from './components/renderers/WaveRenderer';
import { GlitchRenderer } from './components/renderers/GlitchRenderer';
import { TechnicalHandRenderer } from './components/renderers/TechnicalHandRenderer';
import { LottieInspiredRenderer } from './components/renderers/LottieInspiredRenderer';
import { ChromaticRenderer } from './components/renderers/ChromaticRenderer';
import { HalftoneRenderer } from './components/renderers/HalftoneRenderer';
import { MatrixGridRenderer } from './components/renderers/MatrixGridRenderer';
import { LineFieldRenderer } from './components/renderers/LineFieldRenderer';
import { DistortedCameraRenderer } from './components/renderers/DistortedCameraRenderer';
import { CyberStreamRenderer } from './components/renderers/CyberStreamRenderer';
import { FaceCloudRenderer } from './components/renderers/FaceCloudRenderer';
import { FaceRenderer } from './components/renderers/FaceRenderer';
import { MorphingSphereRenderer } from './components/renderers/MorphingSphereRenderer';
import { CubeWallRenderer } from './components/renderers/CubeWallRenderer';
import { RoseRenderer } from './components/renderers/RoseRenderer';
import { SmokeHandRenderer } from './components/renderers/SmokeHandRenderer';
import { CameraFeed } from './components/CameraFeed';
import { Controls } from './components/Controls';
import { HandTracker } from './components/HandTracker';
import { PermissionRequest } from './components/PermissionRequest';
import { VJCanvas } from './components/VJCanvas';
import { AudioAnalyzer } from './components/AudioAnalyzer';
import { NetworkCubeRenderer } from './components/renderers/NetworkCubeRenderer';
import { ElasticNetRenderer } from './components/renderers/ElasticNetRenderer';
import { LiquidChromeRenderer } from './components/renderers/LiquidChromeRenderer';
import { ThickLineRenderer } from './components/renderers/ThickLineRenderer';
import { LottieClassicRenderer } from './components/renderers/LottieClassicRenderer';
import { FlowFieldRenderer } from './components/renderers/FlowFieldRenderer';
import { getRenderersByCategory } from './config/RendererCategories';

export type VisualPattern = 'geometric' | 'particles' | 'waves' | 'glitch' | 'technical' | 'lottie' | 'lottie-classic' | 'chromatic' | 'halftone' | 'matrix' | 'linefield' | 'distortedcamera' | 'cyberstream' | 'facecloud' | 'face' | 'morphing' | 'cubewall' | 'rose' | 'smokehand' | 'thicklines' | 'flowfield' | 'liquidchrome' | 'network-cube' | 'elastic-net' | 'digitalblocks';

export interface AudioData {
  bass: number; // 0-1, controls scale/blooming
  mid: number; // 0-1, controls speed/movement
  high: number; // 0-1, controls particle density
  overall: number; // 0-1, overall volume
  beat: boolean; // Beat detected
  beatIntensity: number; // 0-1, strength of beat
}

export interface HandData {
  left: {
    position: { x: number; y: number };
    gesture: 'open' | 'fist' | 'pinch' | 'none';
    pinchDistance?: number;
    velocity?: number; // Speed of hand movement (0-1+)
    holdDuration?: number; // How long current gesture has been held (seconds)
    fingerCount?: number; // Number of extended fingers (1-5) - controls speed multiplier
    landmarks?: Array<{ x: number; y: number; z: number }>; // MediaPipe hand landmarks (21 points)
  } | null;
  right: {
    position: { x: number; y: number };
    gesture: 'open' | 'fist' | 'pinch' | 'none';
    pinchDistance?: number;
    velocity?: number;
    holdDuration?: number;
    fingerCount?: number; // Number of extended fingers (1-5) - controls speed multiplier
    landmarks?: Array<{ x: number; y: number; z: number }>; // MediaPipe hand landmarks (21 points)
  } | null;
  distanceBetweenHands?: number;
  clapping?: boolean; // True when hands rapidly come together - triggers vibration + explosion
  clapIntensity?: number; // 0-1, how strong the clap was
  gestureTrail?: { x: number; y: number; hand: 'left' | 'right' }[]; // Last N positions
}

export default function App() {
  // Load saved settings from localStorage
  const [currentPattern, setCurrentPattern] = useState<VisualPattern>('geometric'); // Always start with Geometric (2D option 1)
  
  const [showCamera, setShowCamera] = useState(false); // Camera off by default
  const [showUI, setShowUI] = useState(true); // UI visibility toggle
  
  const [dominantColors, setDominantColors] = useState<string[]>(() => {
    const saved = localStorage.getItem('vj-colors');
    return saved ? JSON.parse(saved) : ['#6366f1', '#8b5cf6', '#d946ef', '#ec4899', '#f43f5e'];
  });
  
  // Color controller state (hue, saturation, mode)
  const [hue, setHue] = useState(245);
  const [saturation, setSaturation] = useState(100);
  const [colorMode, setColorMode] = useState<'black' | 'contrast' | 'grayscale'>('contrast');
  const [autoHueEnabled, setAutoHueEnabled] = useState(false);
  
  // Renderer filter state (2D/3D)
  const [rendererFilter, setRendererFilter] = useState<'2D' | '3D'>('2D');
  
  const [handData, setHandData] = useState<HandData>({ left: null, right: null });
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);
  const [showPermissionRequest, setShowPermissionRequest] = useState(false); // Skip intro, go directly to app

  // Audio reactive state
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [audioData, setAudioData] = useState<AudioData>({
    bass: 0,
    mid: 0,
    high: 0,
    overall: 0,
    beat: false,
    beatIntensity: 0
  });
  const [audioSensitivity, setAudioSensitivity] = useState(0.5); // 0-1
  const [audioControlSpeed, setAudioControlSpeed] = useState(true);
  const [audioControlDensity, setAudioControlDensity] = useState(true);
  const [audioTriggerBeats, setAudioTriggerBeats] = useState(true);
  const [audioTime, setAudioTime] = useState(0); // For smooth audio-driven animation

  // Smoke Hand renderer specific state
  const [smokeHandModel, setSmokeHandModel] = useState<'torus' | 'hand'>('torus');

  // Audio animation loop
  useEffect(() => {
    if (!audioEnabled) return;
    
    let animationFrame: number;
    const animate = () => {
      setAudioTime(Date.now() / 1000);
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [audioEnabled]);

  // Auto-hue rotation loop
  useEffect(() => {
    if (!autoHueEnabled) return;
    
    const interval = setInterval(() => {
      setHue(prev => (prev + 1) % 360);
    }, 50); // Update every 50ms for smooth rotation
    
    return () => clearInterval(interval);
  }, [autoHueEnabled]);

  // Convert audio data to hand data when audio is enabled
  const effectiveHandData: HandData = audioEnabled ? {
    left: {
      position: { 
        x: 0.3 + Math.sin(audioTime) * 0.2 * audioData.mid, 
        y: 0.5 + audioData.bass * 0.3 
      },
      gesture: audioData.overall > 0.3 ? 'open' : 'fist',
      fingerCount: audioControlSpeed ? Math.max(1, Math.ceil(audioData.mid * 5)) : 5,
      velocity: audioControlSpeed ? audioData.mid : 0.5,
    },
    right: {
      position: { 
        x: 0.7 - Math.sin(audioTime) * 0.2 * audioData.mid, 
        y: 0.5 + audioData.bass * 0.3 
      },
      gesture: audioData.overall > 0.3 ? 'open' : 'fist',
      fingerCount: audioControlSpeed ? Math.max(1, Math.ceil(audioData.mid * 5)) : 5,
      velocity: audioControlSpeed ? audioData.mid : 0.5,
    },
    clapping: audioTriggerBeats && audioData.beat,
    clapIntensity: audioData.beatIntensity,
    distanceBetweenHands: 0.4 - audioData.bass * 0.2,
  } : handData;

  // Save settings to localStorage when they change
  useEffect(() => {
    localStorage.setItem('vj-pattern', currentPattern);
    localStorage.setItem('vj-colors', JSON.stringify(dominantColors));
  }, [currentPattern, dominantColors]);

  // Cycle patterns helper
  const cyclePattern = useCallback((direction: 'next' | 'prev') => {
    const renderers = getRenderersByCategory(rendererFilter);
    // Sort logic to match UI (Keys: 1-9, 0, then chars)
    // We reuse the sort logic from Controls or just use index.
    // For simplicity, let's just use the array returned by getRenderersByCategory 
    // but we need a consistent order. The generic list order is fine.
    // Ideally we'd share the exact sort order, but let's just cycle through the raw filtered list.
    
    const currentIndex = renderers.findIndex(r => r.pattern === currentPattern);
    if (currentIndex === -1) {
      // If current pattern is not in current filter, jump to first
      if (renderers.length > 0) setCurrentPattern(renderers[0].pattern);
      return;
    }
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % renderers.length;
    } else {
      newIndex = (currentIndex - 1 + renderers.length) % renderers.length;
    }
    
    setCurrentPattern(renderers[newIndex].pattern);
  }, [currentPattern, rendererFilter]);

  // Keyboard shortcuts for pattern switching
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Global Camera Toggle (C)
      if (e.key.toLowerCase() === 'c') {
        setShowCamera(prev => !prev);
        return;
      }
      
      // Global Audio Toggle (A)
      if (e.key.toLowerCase() === 'a') {
        setAudioEnabled(prev => !prev);
        return;
      }
      
      // Global Flow Field (D)
      if (e.key.toLowerCase() === 'd') {
        setCurrentPattern('flowfield');
        return;
      }

      // 2D Mode Shortcuts
      if (rendererFilter === '2D') {
        // Number Keys
        switch(e.key) {
          case '1': setCurrentPattern('geometric'); break;
          case '2': setCurrentPattern('particles'); break;
          case '3': setCurrentPattern('waves'); break;
          case '4': setCurrentPattern('technical'); break;
          case '5': setCurrentPattern('lottie'); break;
          case '6': setCurrentPattern('linefield'); break;
          case '7': setCurrentPattern('chromatic'); break;
          case '8': setCurrentPattern('halftone'); break;
          case '9': setCurrentPattern('matrix'); break;
          case '0': setCurrentPattern('digitalblocks'); break;
          
          // Letters/Symbols
          case '-': setCurrentPattern('liquidchrome'); break;
          case '=': setCurrentPattern('thicklines'); break;
          case 'q': case 'Q': setCurrentPattern('lottie-classic'); break;
          case 'w': case 'W': setCurrentPattern('distortedcamera'); break;
        }
      }
      
      // 3D Mode Shortcuts
      if (rendererFilter === '3D') {
        // Number Keys
        switch(e.key) {
          case '1': setCurrentPattern('glitch'); break;
          case '2': setCurrentPattern('cyberstream'); break;
          case '3': /* Unassigned in list, kept generic? */ break; // Morphing moved to =
          case '4': setCurrentPattern('cubewall'); break;
          case '5': setCurrentPattern('facecloud'); break;
          case '6': setCurrentPattern('rose'); break;
          case '7': /* Unassigned, Face moved to - */ break;
          case '8': setCurrentPattern('smokehand'); break;
          case '9': setCurrentPattern('network-cube'); break;
          case '0': setCurrentPattern('elastic-net'); break;
          
          // Letters/Symbols
          case '-': setCurrentPattern('face'); break;
          case '=': setCurrentPattern('morphing'); break;
        }
      }
      
      // Arrow Key Controls (Pattern Cycling & Saturation)
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          cyclePattern('prev');
          break;
        case 'ArrowRight':
          e.preventDefault();
          cyclePattern('next');
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSaturation(prev => Math.min(100, prev + 5));
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSaturation(prev => Math.max(0, prev - 5));
          break;
      }
      
      // Color mode shortcuts
      if (e.key === 'Control') setColorMode('contrast');
      if (e.key === 'Alt') setColorMode('grayscale');
      if (e.key === 'Meta' || e.key === 'Fn') setColorMode('black');
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [rendererFilter, cyclePattern]);

  // Right-click to toggle UI visibility
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setShowUI(prev => !prev);
    };

    window.addEventListener('contextmenu', handleContextMenu);
    return () => window.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  // Auto-enable camera ONLY for Face Mesh pattern
  useEffect(() => {
    if (currentPattern === 'face' || currentPattern === 'smokehand') {
      setShowCamera(true);
    } else {
      // Optionally, you can auto-disable camera when switching away
      // setShowCamera(false);
    }
  }, [currentPattern]);

  const handlePermissionsGranted = () => {
    setShowPermissionRequest(false);
  };

  const handleSkipPermissions = () => {
    setShowPermissionRequest(false);
  };

  const handleRendererFilterChange = (filter: '2D' | '3D') => {
    setRendererFilter(filter);
    if (filter === '3D') {
      setCurrentPattern('glitch');
    }
  };

  // Filter audio data for renderers based on control flags
  const rendererAudioData: AudioData = {
    ...audioData,
    mid: audioControlSpeed ? audioData.mid : 0,
    high: audioControlDensity ? audioData.high : 0,
    beat: audioTriggerBeats ? audioData.beat : false,
    beatIntensity: audioTriggerBeats ? audioData.beatIntensity : 0,
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Permission Request Modal */}
      {showPermissionRequest && (
        <PermissionRequest
          onGrant={handlePermissionsGranted}
          onSkip={handleSkipPermissions}
        />
      )}

      {/* Main VJ Canvas */}
      <VJCanvas
        handData={effectiveHandData}
        dominantColors={dominantColors}
        pattern={currentPattern}
        videoElement={videoElement}
        smokeHandModel={smokeHandModel}
        audioData={rendererAudioData}
        colorMode={colorMode}
      />

      {/* Camera Feed - Always running for hand tracking, but only visible when showCamera is true */}
      <div className={`absolute top-4 right-4 ${showCamera ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <CameraFeed onVideoReady={setVideoElement} />
      </div>

      {/* Hidden processors */}
      {videoElement && currentPattern !== 'face' && (
        <HandTracker videoElement={videoElement} onHandData={setHandData} />
      )}

      {/* Audio Analyzer */}
      <AudioAnalyzer 
        enabled={audioEnabled} 
        sensitivity={audioSensitivity}
        onAudioData={setAudioData}
      />

      {/* Controls UI */}
      {showUI && (
        <Controls
          currentPattern={currentPattern}
          onPatternChange={setCurrentPattern}
          showCamera={showCamera}
          onCameraToggle={() => setShowCamera(!showCamera)}
          handData={handData}
          selectedColors={dominantColors}
          onColorsChange={setDominantColors}
          hue={hue}
          saturation={saturation}
          colorMode={colorMode}
          onHueChange={setHue}
          onSaturationChange={setSaturation}
          onColorModeChange={setColorMode}
          autoHueEnabled={autoHueEnabled}
          onAutoHueToggle={() => setAutoHueEnabled(prev => !prev)}
          rendererFilter={rendererFilter}
          onRendererFilterChange={handleRendererFilterChange}
          audioEnabled={audioEnabled}
          onAudioToggle={() => setAudioEnabled(!audioEnabled)}
          audioSensitivity={audioSensitivity}
          onAudioSensitivityChange={setAudioSensitivity}
          audioControlSpeed={audioControlSpeed}
          onAudioControlSpeedChange={setAudioControlSpeed}
          audioControlDensity={audioControlDensity}
          onAudioControlDensityChange={setAudioControlDensity}
          audioTriggerBeats={audioTriggerBeats}
          onAudioTriggerBeatsChange={setAudioTriggerBeats}
          smokeHandModel={smokeHandModel}
          onSmokeHandModelChange={setSmokeHandModel}
        />
      )}
    </div>
  );
}