import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { CameraFeed } from './components/CameraFeed';
import { Controls } from './components/Controls';
import { HandTracker } from './components/HandTracker';
import { PermissionRequest } from './components/PermissionRequest';
import { VJCanvas } from './components/VJCanvas';
import { AudioAnalyzer } from './components/AudioAnalyzer';
import { Library } from './components/Library';
import { keySlot, loadSetList, saveSetList } from './config/setlist';
import { ParamPanel, ParamSection } from './components/ParamPanel';
import { LayerStrip } from './components/LayerStrip';
import { PIPELINE_PARAMS, RENDERER_PARAMS } from './params/registry';
import { AllParamValues, ParamValues, sanitizeAllParams } from './params/types';
import { HOLD_MS, Layer, MAX_LAYERS, STACKED_OPACITY } from './config/LayerConfig';
import { fxActive } from './pipeline/PostPipeline';
import { idleHands } from './hands/idle';
import { ColorMode, generateColors } from './config/palette';
import { clearClip, loadClip, loadText, saveClip, saveText } from './config/content';

export type VisualPattern = 'geometric' | 'particles' | 'waves' | 'glitch' | 'technical' | 'lottie' | 'lottie-classic' | 'chromatic' | 'halftone' | 'matrix' | 'linefield' | 'distortedcamera' | 'cyberstream' | 'facecloud' | 'face' | 'morphing' | 'cubewall' | 'smokehand-torus' | 'smokehand-hand' | 'thicklines' | 'flowfield' | 'liquidchrome' | 'network-cube' | 'elastic-net' | 'digitalblocks' | 'ripple' | 'text' | 'video';

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

/** The look a new layer starts from: whatever was last set on screen. */
function loadLook() {
  return {
    hue: loadSetting('vj-hue', 245, isNumberIn(0, 360)),
    saturation: loadSetting('vj-saturation', 100, isNumberIn(0, 100)),
    colorMode: loadSetting<ColorMode>('vj-color-mode', 'contrast', (v) =>
      v === 'black' || v === 'contrast' || v === 'grayscale'),
  };
}

export default function App() {
  /**
   * The stack, bottom first. One entry is the ordinary case and behaves exactly
   * as a single pattern did. Tapping a number replaces the selected layer;
   * holding one adds or removes a layer; L moves the selection through them, and
   * the selection is what the sliders and the colour controls act on.
   */
  const [layers, setLayers] = useState<Layer[]>(() => [
    { pattern: 'geometric', opacity: 1, ...loadLook() },
  ]);
  const [selectedLayer, setSelectedLayer] = useState(0);
  const currentPattern = (layers[selectedLayer] ?? layers[0]).pattern;

  /** Tap: swap the selected layer. A pattern already on the stack is selected, not duplicated. */
  const setCurrentPattern = useCallback((pattern: VisualPattern) => {
    const existing = layers.findIndex((l) => l.pattern === pattern);
    if (existing !== -1) {
      setSelectedLayer(existing);
      return;
    }
    setLayers((prev) => prev.map((l, i) => (i === selectedLayer ? { ...l, pattern } : l)));
  }, [layers, selectedLayer]);

  /** Hold: add the pattern as a new layer, or take it off if it is already up. */
  const toggleLayer = useCallback((pattern: VisualPattern) => {
    const existing = layers.findIndex((l) => l.pattern === pattern);
    if (existing !== -1) {
      if (layers.length === 1) return; // never leave the stack empty
      setLayers(layers.filter((_, i) => i !== existing));
      setSelectedLayer((s) => (s > existing ? s - 1 : Math.min(s, layers.length - 2)));
      return;
    }
    if (layers.length >= MAX_LAYERS) return;
    // A new layer starts from the look you last set, then diverges from there.
    const from = layers[selectedLayer] ?? layers[0];
    setLayers([...layers, {
      pattern, opacity: STACKED_OPACITY,
      hue: from.hue, saturation: from.saturation, colorMode: from.colorMode,
    }]);
  }, [layers, selectedLayer]);

  const cycleLayer = useCallback(() => {
    setSelectedLayer((s) => (s + 1) % layers.length);
  }, [layers.length]);

  const setLayerOpacity = useCallback((index: number, opacity: number) => {
    setLayers((prev) => prev.map((l, i) => (i === index ? { ...l, opacity } : l)));
  }, []);

  /** Take a layer off by position, rather than by which pattern it holds. */
  const removeLayer = useCallback((index: number) => {
    setLayers((prev) => (prev.length === 1 ? prev : prev.filter((_, i) => i !== index)));
    setSelectedLayer((sel) => (sel > index ? sel - 1 : Math.min(sel, layers.length - 2)));
  }, [layers.length]);

  /** The selected layer's fader, on [ and ]. */
  const nudgeLayerOpacity = useCallback((delta: number) => {
    setLayers((prev) => prev.map((l, i) => (
      i === selectedLayer
        ? { ...l, opacity: Math.min(1, Math.max(0, Math.round((l.opacity + delta) * 100) / 100)) }
        : l
    )));
  }, [selectedLayer]);


  const [showCamera, setShowCamera] = useState(false); // Camera off by default
  const [showUI, setShowUI] = useState(true); // UI visibility toggle
  
  /*
   * Colour belongs to a layer, not to the screen.
   *
   * The controls read and write whichever layer is selected, so two visuals can
   * run in different palettes at once — which is most of the point of stacking
   * them. Each setter takes a value or an updater, because the arrow keys and
   * the auto-hue loop both nudge relative to what is already there.
   */
  const selected = layers[selectedLayer] ?? layers[0];
  const { hue, saturation, colorMode } = selected;

  const editSelected = useCallback((patch: Partial<Layer>) => {
    setLayers((prev) => prev.map((l, i) => (i === selectedLayer ? { ...l, ...patch } : l)));
  }, [selectedLayer]);

  type Setter<T> = T | ((previous: T) => T);
  const resolve = <T,>(next: Setter<T>, previous: T): T =>
    typeof next === 'function' ? (next as (p: T) => T)(previous) : next;

  const setHue = useCallback((v: Setter<number>) => {
    setLayers((prev) => prev.map((l, i) => (i === selectedLayer ? { ...l, hue: resolve(v, l.hue) } : l)));
  }, [selectedLayer]);
  const setSaturation = useCallback((v: Setter<number>) => {
    setLayers((prev) => prev.map((l, i) => (
      i === selectedLayer ? { ...l, saturation: resolve(v, l.saturation) } : l)));
  }, [selectedLayer]);
  const setColorMode = useCallback((v: Setter<ColorMode>) => {
    setLayers((prev) => prev.map((l, i) => (
      i === selectedLayer ? { ...l, colorMode: resolve(v, l.colorMode) } : l)));
  }, [selectedLayer]);

  /** Every layer's palette, derived rather than stored. */
  const layerColors = useMemo(
    () => layers.map((l) => generateColors(l.hue, l.saturation, l.colorMode)),
    [layers],
  );
  const dominantColors = layerColors[selectedLayer] ?? layerColors[0];

  const [autoHueEnabled, setAutoHueEnabled] = useState(false);

  /*
   * What the content-driven visuals show. The words live in localStorage; the
   * clip is a Blob in IndexedDB, turned into an object URL here and revoked
   * when it is replaced, so a session does not leak one URL per upload.
   */
  const [text, setText] = useState(loadText);
  const [clipUrl, setClipUrl] = useState<string | null>(null);
  const [clipName, setClipName] = useState<string | null>(null);

  useEffect(() => { saveText(text); }, [text]);

  useEffect(() => {
    let url: string | null = null;
    let cancelled = false;
    loadClip().then((stored) => {
      if (cancelled || !stored) return;
      url = URL.createObjectURL(stored.file);
      setClipUrl(url);
      setClipName(stored.name);
    });
    return () => {
      cancelled = true;
      if (url) URL.revokeObjectURL(url);
    };
  }, []);

  /** A file picked in the library: store it, then play it. */
  const acceptClip = useCallback((file: File | null) => {
    setClipUrl((previous) => {
      if (previous) URL.revokeObjectURL(previous);
      return file ? URL.createObjectURL(file) : null;
    });
    setClipName(file ? file.name : null);
    // Storing is what makes it survive a reload; failing to store still leaves
    // the clip playing for this session, which is the part that matters now.
    if (file) saveClip(file, file.name).catch(() => {});
    else clearClip().catch(() => {});
  }, []);

  const content = useMemo(() => ({ text, clipUrl }), [text, clipUrl]);

  // Several renderers only draw where a hand is, so with no camera — or in a
  // dark room where tracking drops — they show nothing at all and every slider
  // looks broken. When nothing is tracked, drive them from a slow figure
  // instead. Real hands always take over the moment they appear.
  const [idleDrive, setIdleDrive] = useState(true);

  // Slider overrides, per renderer, so switching away and back keeps your tweaks.
  const [paramValues, setParamValues] = useState<AllParamValues>(() =>
    sanitizeAllParams(loadSetting<unknown>('vj-params', {}, () => true)),
  );

  const [fxParams, setFxParams] = useState<ParamValues>(() => {
    const stored = sanitizeAllParams(loadSetting<unknown>('vj-fx', {}, () => true));
    return stored.fx ?? {};
  });

  const setFxParam = useCallback((path: string, value: number) => {
    setFxParams((prev) => ({ ...prev, [path]: value }));
  }, []);

  // One switch over the whole chain, so a heavy look left over from an earlier
  // session is one click away from gone rather than a hunt through the panel.
  const fxEnabled = (fxParams['master.enabled'] ?? 1) >= 0.5;
  const toggleFx = useCallback(() => {
    setFxParams((prev) => ({ ...prev, 'master.enabled': (prev['master.enabled'] ?? 1) >= 0.5 ? 0 : 1 }));
  }, []);

  const resetFxParam = useCallback((path?: string) => {
    setFxParams((prev) => {
      if (path === undefined) return {};
      const { [path]: _removed, ...keep } = prev;
      return keep;
    });
  }, []);

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

  // The idle clock re-renders this component every frame, so the per-layer
  // slider values have to keep their identity — otherwise VJCanvas would push
  // params into every renderer sixty times a second.
  const layerParams = useMemo(
    () => layers.map((l) => paramValues[l.pattern]),
    [layers, paramValues],
  );
  
  /**
   * Tonight's visuals, in key order, as chosen in the library. Slot 0 answers to
   * 1 and the tenth to 0, so the row on screen is the row under your fingers.
   */
  const [set, setSet] = useState<VisualPattern[]>(loadSetList);
  const [view, setView] = useState<'library' | 'vj'>('library');
  
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

  const handsPresent = handData.left !== null || handData.right !== null;
  // Not in the library: this ticks state every frame, and the library re-renders
  // with it — which is enough to stop its previews building anything.
  const clockRunning = view === 'vj' && (audioEnabled || (idleDrive && !handsPresent));

  // Drives both the audio-to-hand mapping and the idle drive.
  useEffect(() => {
    if (!clockRunning) return;
    
    let animationFrame: number;
    const animate = () => {
      setAudioTime(Date.now() / 1000);
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [clockRunning]);

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
  } : handsPresent || !idleDrive ? handData : idleHands(audioTime);

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

  useEffect(() => {
    saveSetting('vj-fx', { fx: fxParams });
  }, [fxParams]);

  useEffect(() => {
    saveSetList(set);
  }, [set]);

  /**
   * Into the set. The stack starts on whatever is on key 1, and a stack left
   * over from a previous set is dropped rather than carried into a row that may
   * no longer contain it.
   */
  const startSet = useCallback(() => {
    if (set.length === 0) return;
    setLayers([{ pattern: set[0], opacity: 1, ...loadLook() }]);
    setSelectedLayer(0);
    setView('vj');
  }, [set]);

  /** Arrow keys walk the set, in the order it was built. */
  const cyclePattern = useCallback((direction: 'next' | 'prev') => {
    if (set.length === 0) return;
    const at = set.indexOf(currentPattern);
    const step = direction === 'next' ? 1 : -1;
    // Not on the set at all (it was edited under us): start at one end.
    const next = at === -1
      ? (direction === 'next' ? 0 : set.length - 1)
      : (at + step + set.length) % set.length;
    setCurrentPattern(set[next]);
  }, [currentPattern, set, setCurrentPattern]);

  /** The number currently held down, if any, while we wait to see if it is a hold. */
  const holdRef = useRef<{ key: string; timer: number; fired: boolean } | null>(null);

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
      
      // Master FX bypass (X)
      if (e.key.toLowerCase() === 'x') {
        toggleFx();
        return;
      }

      // Idle drive (I)
      if (e.key.toLowerCase() === 'i') {
        setIdleDrive(prev => !prev);
        return;
      }

      // Global Flow Field (D)
      if (e.key.toLowerCase() === 'd') {
        setCurrentPattern('flowfield');
        return;
      }

      // Back to the library (Escape)
      if (e.key === 'Escape') {
        setView('library');
        return;
      }

      // Move the selection through the stack (L), and fade it ([ and ])
      if (e.key.toLowerCase() === 'l') {
        cycleLayer();
        return;
      }
      if (e.key === '[') { nudgeLayerOpacity(-0.1); return; }
      if (e.key === ']') { nudgeLayerOpacity(0.1); return; }

      // The number row is the set, in the order the library put it in.
      const pattern = set[keySlot(e.key)];
      if (pattern) {
        // Tap switches, hold stacks. Which one it was is only known on release,
        // so the switch happens in keyup and this side just starts the clock.
        if (e.repeat || holdRef.current) return;
        holdRef.current = {
          key: e.key.toLowerCase(),
          fired: false,
          timer: window.setTimeout(() => {
            if (holdRef.current) holdRef.current.fired = true;
            toggleLayer(pattern);
          }, HOLD_MS),
        };
        return;
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

    const handleKeyUp = (e: KeyboardEvent) => {
      const hold = holdRef.current;
      if (!hold || hold.key !== e.key.toLowerCase()) return;
      clearTimeout(hold.timer);
      holdRef.current = null;
      if (hold.fired) return; // already stacked on the way down
      const pattern = set[keySlot(e.key)];
      if (pattern) setCurrentPattern(pattern);
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [set, cyclePattern, toggleFx, setCurrentPattern, toggleLayer, cycleLayer, nudgeLayerOpacity]);

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
    if (currentPattern === 'face' || currentPattern.startsWith('smokehand')) {
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

  // Filter audio data for renderers based on control flags
  const rendererAudioData: AudioData = {
    ...audioData,
    mid: audioControlSpeed ? audioData.mid : 0,
    high: audioControlDensity ? audioData.high : 0,
    beat: audioTriggerBeats ? audioData.beat : false,
    beatIntensity: audioTriggerBeats ? audioData.beatIntensity : 0,
  };

  if (view === 'library') {
    return (
      <Library
        set={set}
        onSetChange={setSet}
        onStart={startSet}
        text={text}
        onTextChange={setText}
        clipName={clipName}
        clipUrl={clipUrl}
        onClipChange={acceptClip}
      />
    );
  }

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
        layerColors={layerColors}
        layers={layers}
        videoElement={videoElement}
        audioData={rendererAudioData}
        layerParams={layerParams}
        content={content}
        fxParams={fxParams}
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

      {/* Shape (this renderer) and FX (the post chain) */}
      {showUI && (
        <ParamPanel
          header={
            <LayerStrip
              layers={layers}
              selectedLayer={selectedLayer}
              set={set}
              onSelect={setSelectedLayer}
              onOpacityChange={setLayerOpacity}
              onRemove={removeLayer}
            />
          }
          sections={[
            ...(RENDERER_PARAMS[currentPattern]
              ? [{
                  key: 'shape',
                  label: 'SHAPE',
                  entry: RENDERER_PARAMS[currentPattern]!,
                  values: paramValues[currentPattern] ?? {},
                  onChange: setParam,
                  onReset: resetParam,
                } satisfies ParamSection]
              : []),
            {
              key: 'fx',
              label: 'FX',
              entry: PIPELINE_PARAMS,
              values: fxParams,
              onChange: setFxParam,
              onReset: resetFxParam,
            },
          ]}
        />
      )}

      {/* Controls UI */}
      {showUI && (
        <Controls
          currentPattern={currentPattern}
          onPatternChange={setCurrentPattern}
          layers={layers}
          selectedLayer={selectedLayer}
          onPatternHold={toggleLayer}
          onLayerCycle={cycleLayer}
          showCamera={showCamera}
          onCameraToggle={() => setShowCamera(!showCamera)}
          handData={handData}
          selectedColors={dominantColors}
          colorMode={colorMode}
          hue={hue}
          saturation={saturation}
            onHueChange={setHue}
          onSaturationChange={setSaturation}
          onColorModeChange={setColorMode}
          autoHueEnabled={autoHueEnabled}
          onAutoHueToggle={() => setAutoHueEnabled(prev => !prev)}
          set={set}
          onOpenLibrary={() => setView('library')}
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
          idleDrive={idleDrive}
          onIdleDriveToggle={() => setIdleDrive(prev => !prev)}
          fxEnabled={fxEnabled}
          fxActive={fxActive(fxParams)}
          onFxToggle={toggleFx}
        />
      )}
    </div>
  );
}