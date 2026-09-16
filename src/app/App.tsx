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
import { FxPanel } from './components/FxPanel';
import { RENDERER_CATEGORIES } from './config/RendererCategories';
import { LayerStrip } from './components/LayerStrip';
import { PIPELINE_PARAMS, RENDERER_PARAMS } from './params/registry';
import { AllParamValues, ParamValues, sanitizeAllParams } from './params/types';
import { HOLD_MS, Layer, MAX_LAYERS, STACKED_OPACITY } from './config/LayerConfig';
import { fxActive } from './pipeline/PostPipeline';
import { idleHands, idleLandmarks } from './hands/idle';
import { MOTION_DEFAULT, MOTION_MAX, MOTION_MIN, shapeHands } from './hands/motion';
import { ColorMode, generateColors } from './config/palette';
import { Recorder, canRecord, save } from './record/Recorder';
import { SoundSource, nextSound, openTakeAudio } from './record/audio';
import { OutputWindow } from './output/OutputWindow';
import {
  Clips,
  clearClip,
  clipKindOf,
  loadClips,
  loadText,
  saveClip,
  saveText,
} from './config/content';

export type VisualPattern = 'geometric' | 'particles' | 'waves' | 'glitch' | 'technical' | 'lottie' | 'lottie-classic' | 'chromatic' | 'halftone' | 'matrix' | 'linefield' | 'distortedcamera' | 'cyberstream' | 'facecloud' | 'face' | 'morphing' | 'cubewall' | 'smokehand-torus' | 'smokehand-hand' | 'thicklines' | 'flowfield' | 'liquidchrome' | 'network-cube' | 'elastic-net' | 'digitalblocks' | 'ripple' | 'text' | 'video' | 'mosaic' | 'chrome';

export interface AudioData {
  /** Kick and sub, 20–160Hz. Scale, weight, push. */
  bass: number;
  /** Bassline and the body of a voice, 160–800Hz. */
  lowMid: number;
  /** Where melody lives, 800Hz–4kHz. Speed and movement. */
  mid: number;
  /** Hats, air, consonants, 4–12kHz. Density and detail. */
  high: number;
  /** Everything, 20Hz–12kHz. */
  overall: number;
  /** An onset landed this frame. */
  beat: boolean;
  /** How hard, 0-1. Zero on frames with no beat. */
  beatIntensity: number;
  /**
   * The pulse without the on/off edge: jumps on an onset and falls away over
   * about a third of a second. Anything that would stutter on a boolean —
   * a scale, a brightness, a speed — should ride this instead.
   */
  onset: number;
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
    /*
     * And it becomes the selected one.
     *
     * Colour, the sliders and now the effects all act on the selection, so
     * stacking a layer and leaving the controls pointed at the previous one
     * means the next thing you reach for quietly changes the wrong visual.
     * The layer you just brought up is the one you are working on.
     */
    setSelectedLayer(layers.length);
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

  /**
   * How hard the hands drive everything, across the whole set. Persisted,
   * because it is a decision about the room rather than about a visual.
   */
  const [motion, setMotion] = useState(() =>
    loadSetting('vj-motion', MOTION_DEFAULT, isNumberIn(MOTION_MIN, MOTION_MAX)),
  );
  useEffect(() => { saveSetting('vj-motion', motion); }, [motion]);
  const nudgeMotion = useCallback((delta: number) => {
    setMotion((m) => Math.min(MOTION_MAX, Math.max(MOTION_MIN,
      Math.round((m + delta) * 100) / 100)));
  }, []);

  /*
   * What the content-driven visuals show. The words live in localStorage; each
   * file is a Blob in IndexedDB, turned into an object URL here and revoked
   * when it is replaced, so a session does not leak one URL per upload.
   *
   * Keyed by visual, because they are not the same file. Footage chosen for
   * Clip should not turn up as Mosaic's source — they are different ideas and
   * she will want different material in each.
   */
  const [text, setText] = useState(loadText);
  const [clips, setClips] = useState<Clips>({});

  useEffect(() => { saveText(text); }, [text]);

  useEffect(() => {
    const urls: string[] = [];
    let cancelled = false;
    loadClips().then((stored) => {
      if (cancelled) return;
      const next: Clips = {};
      for (const [pattern, { file, name }] of Object.entries(stored)) {
        const url = URL.createObjectURL(file);
        urls.push(url);
        next[pattern] = { url, name, kind: clipKindOf(file) };
      }
      setClips(next);
    });
    return () => {
      cancelled = true;
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  /** A file picked in the library, for one visual. */
  const acceptClip = useCallback((pattern: VisualPattern, file: File | null) => {
    setClips((previous) => {
      const gone = previous[pattern];
      if (gone) URL.revokeObjectURL(gone.url);
      const next = { ...previous };
      if (file) {
        next[pattern] = {
          url: URL.createObjectURL(file),
          name: file.name,
          kind: clipKindOf(file),
        };
      } else {
        delete next[pattern];
      }
      return next;
    });
    // Storing is what makes it survive a reload; failing to store still leaves
    // the file playing for this session, which is the part that matters now.
    if (file) saveClip(pattern, file, file.name).catch(() => {});
    else clearClip(pattern).catch(() => {});
  }, []);

  const content = useMemo(() => ({ text, clips }), [text, clips]);

  /*
   * Recording the set.
   *
   * The recorder reads its sources through functions rather than being handed
   * them, so the camera coming up or the microphone being switched on lands in
   * the middle of a take instead of needing the take restarted.
   *
   * The camera is only offered while its preview is showing: what ends up in
   * the file should be what she is looking at, minus the controls.
   */
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const micStreamRef = useRef<MediaStream | null>(null);
  const cameraRef = useRef<HTMLVideoElement | null>(null);
  const showCameraRef = useRef(false);
  const [recording, setRecording] = useState(false);
  const [recordSeconds, setRecordSeconds] = useState(0);
  const recordable = useMemo(() => canRecord(), []);

  const recorderRef = useRef<Recorder | null>(null);
  if (!recorderRef.current && recordable) {
    recorderRef.current = new Recorder({
      canvas: () => canvasRef.current,
      camera: () => (showCameraRef.current ? cameraRef.current : null),
    });
  }

  /*
   * Where a take's sound comes from, remembered between sessions because it
   * is a property of how she works rather than of one recording.
   */
  const [sound, setSound] = useState<SoundSource>(() => {
    try {
      const saved = localStorage.getItem('vj-sound');
      return saved === 'music' || saved === 'off' || saved === 'mic' ? saved : 'mic';
    } catch {
      return 'mic';
    }
  });
  useEffect(() => {
    try { localStorage.setItem('vj-sound', sound); } catch { /* storage blocked */ }
  }, [sound]);

  /** Streams opened for the take, as opposed to borrowed from the analyser. */
  const takeAudioRef = useRef<MediaStream | null>(null);
  const [soundProblem, setSoundProblem] = useState<string | null>(null);

  const toggleRecording = useCallback(async () => {
    const recorder = recorderRef.current;
    if (!recorder) return;

    if (recorder.recording) {
      setRecording(false);
      const take = await recorder.stop();
      // Anything opened for this take is closed with it. The analyser's own
      // microphone is not ours to stop.
      for (const track of takeAudioRef.current?.getTracks() ?? []) track.stop();
      takeAudioRef.current = null;
      if (take) save(take);
      return;
    }

    setSoundProblem(null);
    const audio = await openTakeAudio(sound, micStreamRef.current);
    if (audio.problem) setSoundProblem(audio.problem);
    takeAudioRef.current = audio.owned ? audio.stream : null;
    recorder.start(audio.stream);
    setRecording(recorder.recording);
  }, [sound]);

  // A sound problem is worth reading, not worth blocking on: the take is
  // already rolling and a dialog mid-set would be worse than a silent file.
  useEffect(() => {
    if (!soundProblem) return;
    const id = setTimeout(() => setSoundProblem(null), 9000);
    return () => clearTimeout(id);
  }, [soundProblem]);

  /*
   * The projector.
   *
   * A second window showing the visuals and nothing else, so the controls can
   * stay on her screen while the wall gets only the work.
   */
  const [output, setOutput] = useState(false);
  const [outputProblem, setOutputProblem] = useState<string | null>(null);
  const outputRef = useRef<OutputWindow | null>(null);
  if (!outputRef.current) {
    outputRef.current = new OutputWindow(() => setOutput(false));
  }

  const toggleOutput = useCallback(() => {
    const out = outputRef.current;
    if (!out) return;
    if (out.open) {
      out.close();
      return;
    }
    const problem = out.show(canvasRef.current);
    setOutputProblem(problem);
    setOutput(out.open);
  }, []);

  useEffect(() => {
    if (!outputProblem) return;
    const id = setTimeout(() => setOutputProblem(null), 9000);
    return () => clearTimeout(id);
  }, [outputProblem]);

  // Closing the tab must not leave an orphaned window on the projector.
  useEffect(() => () => outputRef.current?.close(), []);

  // The counter, ticked once a second rather than every frame: it is a number
  // on a button, and the render loop has better things to do.
  useEffect(() => {
    if (!recording) {
      setRecordSeconds(0);
      return;
    }
    const id = setInterval(() => {
      setRecordSeconds(recorderRef.current?.elapsed ?? 0);
    }, 500);
    return () => clearInterval(id);
  }, [recording]);

  // A take must not outlive the page silently: stop it and keep what there is.
  useEffect(() => {
    const onLeave = () => {
      if (recorderRef.current?.recording) {
        recorderRef.current.stop().then((take) => take && save(take));
      }
    };
    window.addEventListener('pagehide', onLeave);
    return () => window.removeEventListener('pagehide', onLeave);
  }, []);


  // Several renderers only draw where a hand is, so with no camera — or in a
  // dark room where tracking drops — they show nothing at all and every slider
  // looks broken. When nothing is tracked, drive them from a slow figure
  // instead. Real hands always take over the moment they appear.
  const [idleDrive, setIdleDrive] = useState(true);

  // Slider overrides, per renderer, so switching away and back keeps your tweaks.
  const [paramValues, setParamValues] = useState<AllParamValues>(() =>
    sanitizeAllParams(loadSetting<unknown>('vj-params', {}, () => true)),
  );

  /*
   * Effects belong to a layer, not to the screen.
   *
   * There used to be one chain over the flattened stack, so kaleidoscoping the
   * type kaleidoscoped the footage underneath it as well — which is not what
   * anyone means by putting an effect on a layer. Each layer carries its own
   * settings and its own chain now, and the controls act on whichever layer is
   * selected, exactly as the colour and the sliders already do.
   */
  /** Which effect's controls are open. Held here so hiding the UI keeps it. */
  const [openFx, setOpenFx] = useState<string | null>(null);

  const [fxByLayer, setFxByLayer] = useState<AllParamValues>(() => {
    const stored = sanitizeAllParams(loadSetting<unknown>('vj-fx', {}, () => true));
    // Anything saved before this change was one set of effects for everything.
    // It becomes the first layer's, rather than being dropped on the floor.
    if (stored.fx && Object.keys(stored.fx).length > 0 && !stored['0']) {
      return { 0: stored.fx };
    }
    return stored;
  });

  /** The selected layer's effects, which is what the panel edits. */
  const fxParams = fxByLayer[String(selectedLayer)] ?? {};

  const setFxParam = useCallback((path: string, value: number) => {
    setFxByLayer((prev) => {
      const key = String(selectedLayer);
      return { ...prev, [key]: { ...(prev[key] ?? {}), [path]: value } };
    });
  }, [selectedLayer]);

  /** Every layer's effects, in layer order, for the canvas. */
  const layerFx = useMemo(
    () => layers.map((_, index) => fxByLayer[String(index)] ?? {}),
    [layers, fxByLayer],
  );

  // One switch over the whole chain, so a heavy look left over from an earlier
  // session is one click away from gone rather than a hunt through the panel.
  const fxEnabled = (fxParams['master.enabled'] ?? 1) >= 0.5;
  const toggleFx = useCallback(() => {
    setFxByLayer((prev) => {
      const key = String(selectedLayer);
      const mine = prev[key] ?? {};
      return {
        ...prev,
        [key]: { ...mine, 'master.enabled': (mine['master.enabled'] ?? 1) >= 0.5 ? 0 : 1 },
      };
    });
  }, [selectedLayer]);

  const resetFxParam = useCallback((path?: string) => {
    setFxByLayer((prev) => {
      const key = String(selectedLayer);
      if (path === undefined) return { ...prev, [key]: {} };
      const { [path]: _removed, ...keep } = prev[key] ?? {};
      return { ...prev, [key]: keep };
    });
  }, [selectedLayer]);

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

  // The recorder runs outside React, so what it reads has to be kept current.
  useEffect(() => {
    cameraRef.current = videoElement;
    showCameraRef.current = showCamera;
  }, [videoElement, showCamera]);


  const [showPermissionRequest, setShowPermissionRequest] = useState(false); // Skip intro, go directly to app

  // Audio reactive state
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [audioData, setAudioData] = useState<AudioData>({ bass: 0, lowMid: 0, mid: 0, high: 0, overall: 0, beat: false, beatIntensity: 0, onset: 0 });
  const [audioSensitivity, setAudioSensitivity] = useState(0.5); // 0-1
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

  /*
   * Audio standing in for hands.
   *
   * The gesture vocabulary is the same one her hands use — finger count is
   * speed, a clap is an explosion — so the music is mapped onto it rather than
   * onto some parallel set of rules. Brightness up top means more fingers;
   * an onset is a clap. That way every visual reacts to sound exactly as it
   * reacts to her, and nothing needs a second code path.
   */
  const effectiveHandData: HandData = audioEnabled ? {
    left: {
      position: {
        x: 0.3 + Math.sin(audioTime) * 0.2 * audioData.mid,
        y: 0.5 + audioData.bass * 0.3,
      },
      gesture: audioData.overall > 0.25 ? 'open' : 'fist',
      fingerCount: 1 + Math.round(Math.min(1, audioData.mid + audioData.high * 0.6) * 4),
      velocity: Math.min(1, audioData.mid * 0.7 + audioData.onset * 0.6),
      /*
       * Landmarks, not just a position.
       *
       * Several renderers draw from the fingertips rather than the palm, and
       * they check for the array before drawing anything at all — so without
       * it they came up completely black in audio-reactive mode. A visual that
       * is blank whenever the camera is off is not a visual she can put in a
       * set.
       */
      landmarks: idleLandmarks(
        0.3 + Math.sin(audioTime) * 0.2 * audioData.mid,
        0.5 + audioData.bass * 0.3,
        audioTime,
        0,
      ),
    },
    right: {
      position: {
        x: 0.7 - Math.sin(audioTime) * 0.2 * audioData.mid,
        y: 0.5 + audioData.bass * 0.3,
      },
      gesture: audioData.overall > 0.25 ? 'open' : 'fist',
      fingerCount: 1 + Math.round(Math.min(1, audioData.mid + audioData.high * 0.6) * 4),
      velocity: Math.min(1, audioData.mid * 0.7 + audioData.onset * 0.6),
      landmarks: idleLandmarks(
        0.7 - Math.sin(audioTime) * 0.2 * audioData.mid,
        0.5 + audioData.bass * 0.3,
        audioTime,
        Math.PI,
      ),
    },
    clapping: audioData.beat,
    clapIntensity: audioData.beatIntensity,
    // Hands close on the kick, so the low end squeezes the whole frame.
    distanceBetweenHands: 0.45 - audioData.bass * 0.3,
  } : handsPresent || !idleDrive ? handData : idleHands(audioTime);

  /*
   * The motion knob is applied here, once, rather than in each renderer — so
   * one control calms or drives the whole stack. It eases against its own last
   * output, which is what makes a low setting drift instead of snap.
   */
  const shapedRef = useRef<HandData | null>(null);
  const shapedHandData = shapeHands(effectiveHandData, shapedRef.current, motion);
  shapedRef.current = shapedHandData;

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
    saveSetting('vj-fx', fxByLayer);
  }, [fxByLayer]);

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
      
      // Start or stop a recording (R)
      if (e.key.toLowerCase() === 'r') {
        void toggleRecording();
        return;
      }

      // Where a take's sound comes from (S)
      if (e.key.toLowerCase() === 's') {
        setSound(nextSound);
        return;
      }

      // The projector window (O)
      if (e.key.toLowerCase() === 'o') {
        toggleOutput();
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
      if (e.key === '-') { nudgeMotion(-0.1); return; }
      if (e.key === '=' || e.key === '+') { nudgeMotion(0.1); return; }
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
  }, [set, cyclePattern, toggleFx, setCurrentPattern, toggleLayer, cycleLayer, nudgeLayerOpacity, nudgeMotion, toggleRecording, toggleOutput]);

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

  /*
   * The whole reading, always.
   *
   * There were four switches here — lows, mids, highs, beat — and each simply
   * zeroed a band. They were impossible to judge: muting the highs changes
   * nothing on a visual that never reads them, so the switch looked broken
   * rather than applied, and knowing which visual reads which band is not
   * something anyone should have to hold in their head mid-set.
   *
   * Every band goes through now and the routing is the visuals' business.
   * What is left is a gain and a meter: how hard to listen, and proof that it
   * is listening.
   */
  const rendererAudioData: AudioData = audioData;

  if (view === 'library') {
    return (
      <Library
        set={set}
        onSetChange={setSet}
        onStart={startSet}
        text={text}
        onTextChange={setText}
        clips={clips}
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
        handData={shapedHandData}
        layerColors={layerColors}
        layers={layers}
        videoElement={videoElement}
        audioData={rendererAudioData}
        layerParams={layerParams}
        content={content}
        motion={motion}
        layerFx={layerFx}
        onCanvasReady={(canvas) => {
          canvasRef.current = canvas;
          // The canvas is replaced rather than reused when the pipeline falls
          // back to 2D, and the projector's stream dies with the old one.
          outputRef.current?.attach(canvas);
        }}
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
        onStream={(stream) => { micStreamRef.current = stream; }}
      />

      {/* What this visual is — its own controls. Effects live opposite. */}
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
          sections={
            RENDERER_PARAMS[currentPattern]
              ? [{
                  key: 'shape',
                  label: 'SHAPE',
                  entry: RENDERER_PARAMS[currentPattern]!,
                  values: paramValues[currentPattern] ?? {},
                  onChange: setParam,
                  onReset: resetParam,
                } satisfies ParamSection]
              : []
          }
        />
      )}

      {/* What is being done to it — the selected layer's own chain. */}
      {showUI && (
        <FxPanel
          entry={PIPELINE_PARAMS}
          values={fxParams}
          onChange={setFxParam}
          onReset={resetFxParam}
          openName={openFx}
          onOpen={setOpenFx}
          layerLabel={
            layers.length > 1
              ? `L${selectedLayer + 1} ${RENDERER_CATEGORIES[currentPattern].short}`
              : RENDERER_CATEGORIES[currentPattern].short
          }
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
          audioLevels={rendererAudioData}
          motion={motion}
          onMotionChange={setMotion}
          idleDrive={idleDrive}
          onIdleDriveToggle={() => setIdleDrive(prev => !prev)}
          fxEnabled={fxEnabled}
          fxActive={fxActive(fxParams)}
          onFxToggle={toggleFx}
          canRecord={recordable}
          recording={recording}
          recordSeconds={recordSeconds}
          onRecordToggle={() => void toggleRecording()}
          sound={sound}
          onSoundCycle={() => setSound(nextSound)}
          output={output}
          onOutputToggle={toggleOutput}
        />
      )}

      {/*
        Anything that quietly did not happen — a refused microphone, a picker
        with no audio ticked, a blocked pop-up. Each one leaves a button
        looking as though it simply does nothing, so it says so instead. Above
        the controls, out of the way, and it clears itself.
      */}
      {(soundProblem || outputProblem) && (
        <div className="pointer-events-none absolute bottom-28 left-1/2 z-[60] w-[min(34rem,90vw)] -translate-x-1/2">
          <div className="rounded-xl border border-amber-300/30 bg-black/85 px-4 py-3 text-center font-mono text-[11px] leading-relaxed text-amber-200/90 backdrop-blur-sm">
            {soundProblem ?? outputProblem}
          </div>
        </div>
      )}
    </div>
  );
}