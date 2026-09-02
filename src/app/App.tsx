import { useState, useEffect, useCallback } from 'react';
import { CameraFeed } from './components/CameraFeed';
import { Controls } from './components/Controls';
import { HandTracker } from './components/HandTracker';
import { PermissionRequest } from './components/PermissionRequest';
import { VJCanvas } from './components/VJCanvas';
import { AudioAnalyzer } from './components/AudioAnalyzer';
import { getPatternCategory, getRenderersByCategory } from './config/RendererCategories';
import { ParamPanel } from './components/ParamPanel';
import { AllParamValues, sanitizeAllParams } from './params/types';

export type VisualPattern = 'geometric' | 'particles' | 'waves' | 'glitch' | 'technical' | 'lottie' | 'lottie-classic' | 'chromatic' | 'halftone' | 'matrix' | 'linefield' | 'distortedcamera' | 'cyberstream' | 'facecloud' | 'face' | 'morphing' | 'cubewall' | 'rose' | 'smokehand' | 'thicklines' | 'flowfield' | 'liquidchrome' | 'network-cube' | 'elastic-net' | 'digitalblocks';

export interface AudioData {
  bass: number; // 0-1, controls scale/blooming
  mid: number; // 0-1, controls speed/movement
  high: number; // 0-1, controls particle density
  overall: number; // 0-1, overall volume
  beat: boolean; // Beat detected
  beatIntensity: number; // 0-1, strength of beat
}

/** One tracked hand, as produced by {@link HandTracker} from MediaPipe landmarks. */
export interface Hand {
  position: { x: number; y: number };
  gesture: 'open' | 'fist' | 'pinch' | 'none';
  pinchDistance?: number;
  /** Speed of hand movement (0-1+). */
  velocity?: number;
  /** How long the current gesture has been held, in seconds. */
  holdDuration?: number;
  /** Number of extended fingers (1-5) - controls speed multiplier. */
  fingerCount?: number;
  /** MediaPipe hand landmarks (21 points). */
  landmarks?: Array<{ x: number; y: number; z: number }>;
}

export interface HandData {
  left: Hand | null;
  right: Hand | null;
  distanceBetweenHands?: number;
  /** True when hands rapidly come together - triggers vibration + explosion. */
  clapping?: boolean;
  /** 0-1, how strong the clap was. */
  clapIntensity?: number;
  /** Last N positions. */
  gestureTrail?: { x: number; y: number; hand: 'left' | 'right' }[];
}

type ColorMode = 'black' | 'contrast' | 'grayscale';

/**
 * localStorage throws outright in some privacy modes, so every access is
 * guarded and a bad stored value falls back to the default rather than
 * taking the whole app down at startup.
 */
function loadSetting<T>(key: string, fallback: T, isValid: (value: unknown) => boolean): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    const parsed = JSON.parse(raw);
    return isValid(parsed) ? (parsed as T) : fallback;
  } catch {
    return fallback;
  }
}

function saveSetting(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full or blocked - the session just will not be remembered.
  }
}

const isNumberIn = (min: number, max: number) => (v: unknown) =>
  typeof v === 'number' && Number.isFinite(v) && v >= min && v <= max;

export default function App() {
  const [currentPattern, setCurrentPattern] = useState<VisualPattern>('geometric'); // Always start with Geometric (2D option 1)
  
  const [showCamera, setShowCamera] = useState(false); // Camera off by default
  const [showUI, setShowUI] = useState(true); // UI visibility toggle
  
  // Derived from hue/saturation/colorMode by ColorController on every change,
  // so it is that triple - not this palette - that gets persisted below.
  const [dominantColors, setDominantColors] = useState<string[]>([
    '#6366f1', '#8b5cf6', '#d946ef', '#ec4899', '#f43f5e',
  ]);
  
  // Color controller state (hue, saturation, mode)
  const [hue, setHue] = useState(() => loadSetting('vj-hue', 245, isNumberIn(0, 360)));
  const [saturation, setSaturation] = useState(() =>
    loadSetting('vj-saturation', 100, isNumberIn(0, 100)),
  );
  const [colorMode, setColorMode] = useState<ColorMode>(() =>
    loadSetting<ColorMode>('vj-color-mode', 'contrast', (v) =>
      v === 'black' || v === 'contrast' || v === 'grayscale',
    ),
  );
  const [autoHueEnabled, setAutoHueEnabled] = useState(false);

  // Slider overrides, per renderer, so switching away and back keeps your tweaks.
  const [paramValues, setParamValues] = useState<AllParamValues>(() =>
    sanitizeAllParams(loadSetting<unknown>('vj-params', {}, () => true)),
  );

  const setParam = useCallback((path: string, value: number) => {
    setParamValues((prev) => ({
      ...prev,
      [currentPattern]: { ...prev[currentPattern], [path]: value },
    }));
  }, [currentPattern]);

  /** One parameter back to its config default, or all of this renderer's. */
  const resetParam = useCallback((path?: string) => {
    setParamValues((prev) => {
      if (path === undefined) {
        const { [currentPattern]: _dropped, ...rest } = prev;
        return rest;
      }
      const { [path]: _removed, ...keep } = prev[currentPattern] ?? {};
      return { ...prev, [currentPattern]: keep };
    });
  }, [currentPattern]);
  
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

  // Remember the palette across reloads. The previous version stored the
  // derived colours instead, which ColorController overwrote from its defaults
  // on mount before anything could read them back.
  useEffect(() => {
    saveSetting('vj-hue', hue);
    saveSetting('vj-saturation', saturation);
    saveSetting('vj-color-mode', colorMode);
  }, [hue, saturation, colorMode]);

  useEffect(() => {
    saveSetting('vj-params', paramValues);
  }, [paramValues]);

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
      // Colour mode rides on the modifier keys themselves, so read those first.
      if (e.key === 'Control') { setColorMode('contrast'); return; }
      if (e.key === 'Alt') { setColorMode('grayscale'); return; }
      if (e.key === 'Meta') { setColorMode('black'); return; }

      // Leave the browser's own chords alone: Cmd/Ctrl+C used to toggle the
      // camera instead of copying, and Cmd/Ctrl+A switched on the microphone
      // instead of selecting all.
      if (e.ctrlKey || e.metaKey || e.altKey) return;

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
    // Only jump if the pattern on screen does not belong to the tab being
    // opened. Switching to 2D used to leave a 3D pattern running with no
    // button lit, and switching to 3D always slammed back to Glitch.
    if (getPatternCategory(currentPattern) !== filter) {
      const first = getRenderersByCategory(filter)[0];
      if (first) setCurrentPattern(first.pattern);
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
        params={paramValues[currentPattern]}
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

      {/* Per-renderer shape controls */}
      {showUI && (
        <ParamPanel
          pattern={currentPattern}
          values={paramValues[currentPattern] ?? {}}
          onChange={setParam}
          onReset={resetParam}
        />
      )}

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