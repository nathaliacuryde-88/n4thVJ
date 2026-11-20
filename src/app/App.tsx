import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { CameraFeed } from './components/CameraFeed';
import { Controls } from './components/Controls';
import { HandTracker } from './components/HandTracker';
import { PermissionRequest } from './components/PermissionRequest';
import { VJCanvas } from './components/VJCanvas';
import { AudioAnalyzer } from './components/AudioAnalyzer';
import { Library } from './components/Library';
import { KEYED, keySlot, loadSetList, saveSetList, slotKey } from './config/setlist';
import { ParamPanel, ParamSection } from './components/ParamPanel';
import { FxPanel } from './components/FxPanel';
import { RENDERER_CATEGORIES, currentPattern as storedPattern } from './config/RendererCategories';
import { LayerStrip } from './components/LayerStrip';
import { PIPELINE_PARAMS, RENDERER_PARAMS, splitPlay } from './params/registry';
import { AllParamValues, ParamValues, sanitizeAllParams } from './params/types';
import { BLEND_LABEL, BLEND_MODES, HOLD_MS, Layer, MAX_LAYERS, STACKED_OPACITY, nextBlend } from './config/LayerConfig';
import { fxActive } from './pipeline/PostPipeline';
import { idleHands, idleLandmarks } from './hands/idle';
import { MOTION_DEFAULT, MOTION_MAX, MOTION_MIN, shapeHands } from './hands/motion';
import { ColorMode, generateColors } from './config/palette';
import { Recorder, canRecord, save } from './record/Recorder';
import { SoundSource, nextSound, openTakeAudio } from './record/audio';
import { OutputWindow } from './output/OutputWindow';
import { SavedSet, loadSavedSets, pick, storeSavedSets } from './config/savedSets';
import { StatusBar, PILOT_BARS } from './components/StatusBar';
import { SetTimer } from './components/SetTimer';
import { ScriptPanel } from './components/ScriptPanel';
import { loadScript, parseScript, saveScript } from './config/script';
import { beatPosition, clearTempo, currentBpm, hasTapped, nudgeTempo, tap, toggleListening } from './motion/tempo';
import { MidiTarget, setMidiHandler, setMidiReader } from './control/midi';
import { setLfo, useLfos } from './control/lfo';
/** The picture's own zoom, shown in a visual's panel as if it were one of its sliders. */
const PICTURE_ZOOM = '__zoom';
/** The page opened with ?cue: the cue-then-GO bar, to compare with plain taps. */
const CUE_TEST = typeof location !== 'undefined' && new URLSearchParams(location.search).has('cue');
import { COUNTS, KNOB_FX, KNOB_OFF, SIZES, ZOOM_MAX, ZOOM_MIN, ZOOM_STEP, knobPosition, knobValue } from './control/knobs';
import { stageDoing } from './pipeline/PostPipeline';
import { getByPath } from './params/types';
import { Hand, AudioLines } from 'lucide-react';
import {
  Clips,
  clearClip,
  clipKindOf,
  loadClips,
  loadText,
  saveClip,
  saveText,
} from './config/content';

export type VisualPattern = 'geometric' | 'particles' | 'waves' | 'glitch' | 'technical' | 'lottie' | 'lottie-classic' | 'chromatic' | 'halftone' | 'matrix' | 'linefield' | 'distortedcamera' | 'cyberstream' | 'facecloud' | 'face' | 'morphing' | 'cubewall' | 'smokehand-torus' | 'smokehand-hand' | 'thicklines' | 'flowfield' | 'liquidchrome' | 'network-cube' | 'elastic-net' | 'digitalblocks' | 'ripple' | 'text' | 'video' | 'mosaic' | 'chrome' | 'bloom' | 'butterflies' | 'dice' | 'atlas' | 'crowd' | 'dandelion' | 'jellyfish' | 'aurora' | 'watercolour' | 'world' | 'bigtype' | 'particleimage' | 'blend' | 'dream-clouds' | 'dream-hills' | 'dream-valley' | 'dream-spray' | 'dream-figure' | 'data' | 'smear' | 'tonight' | 'dream-sea' | 'dream-mountains' | 'macro-ink' | 'macro-petals' | 'macro-filaments' | 'macro-prism' | 'macro-rings' | 'macro-water' | 'swarm-flock' | 'swarm-plankton' | 'swarm-galaxy' | 'flight-mountains' | 'flight-sea' | 'ink' | 'anemone' | 'line' | 'mycelium' | 'constellation' | 'machine' | 'cells' | 'standby' | 'neurons' | 'arrival-clouds' | 'arrival-fog' | 'arrival-planet' | 'breath-pulse' | 'breath-air' | 'breath-leaf' | 'dust';

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
  /** The kick alone: jumps on it and falls away. */
  kick?: number;
  /** The snare or clap alone. */
  snare?: number;
  /** The hats alone: short and quick. */
  hat?: number;
  /** How full the music is against its last minute. Low in a breakdown. */
  energy?: number;
  /** Rises through a build-up, while the kick is out and something climbs. */
  build?: number;
  /** Jumps when the bass comes back, and falls off over a second or two. */
  drop?: number;
  /** Where the weight of the sound sits: 0 dark, 1 bright. */
  bright?: number;
  /** Whether a microphone is being listened to at all. */
  live?: boolean;
  /** How loud the microphone hears the room, plainly: 0 silence, 1 very loud. */
  input?: number;
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
  /** How pinched thumb and index are, 0 apart to 1 touching. */
  pinch?: number;
  /** How open the hand is, 0 a fist to 1 spread flat. Continuous, unlike the finger count. */
  openness?: number;
  /** How close to the camera, 0 at arm's length and beyond to 1 right up to the lens. */
  depth?: number;
  /** Which way the hand points, in radians: 0 up, positive clockwise as she sees it. */
  angle?: number;
}

export interface HandData {
  left: Hand | null;
  right: Hand | null;
  distanceBetweenHands?: number;
  /** The tilt of the line between the two hands, in radians: 0 level, positive with her right hand lower. */
  twist?: number;
  /** True when hands rapidly come together - triggers vibration + explosion. */
  clapping?: boolean;
  /** 0-1, how strong the clap was. */
  clapIntensity?: number;
  /** Last N positions. */
  gestureTrail?: { x: number; y: number; hand: 'left' | 'right' }[];
  /** Made up — the automatic drive, or the music standing in — not her real hands. */
  synthetic?: boolean;
}

/**
 * The stack in the set's order: what comes first in the set lies on top.
 *
 * A visual brought in that sits later in the set than the ones playing goes
 * underneath them; one that sits earlier goes over them. A layer whose visual
 * is not in the set (the set was edited under it) stays next to the one it
 * was beside.
 */
function inSetOrder(layers: Layer[], set: VisualPattern[]): Layer[] {
  let last = -1;
  return layers
    .map((layer, i) => {
      const at = set.indexOf(layer.pattern);
      if (at !== -1) last = at;
      return { layer, key: at !== -1 ? at : last + 0.5, i };
    })
    // Later in the set, further down the stack (index 0 is the bottom).
    .sort((a, b) => b.key - a.key || a.i - b.i)
    .map((k) => k.layer);
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

/** A visual's palette. */
export interface Look {
  hue: number;
  saturation: number;
  colorMode: ColorMode;
}

/** What a visual looks like before she has said otherwise. */
function defaultLook(): Look {
  return { hue: 245, saturation: 100, colorMode: 'contrast' };
}

/** Shared, so an unset visual's effects keep one identity across renders. */
const NO_FX: ParamValues = {};

export default function App() {
  /**
   * The stack, bottom first. One entry is the ordinary case and behaves exactly
   * as a single pattern did. Tapping a number replaces the selected layer;
   * holding one adds or removes a layer; L moves the selection through them, and
   * the selection is what the sliders and the colour controls act on.
   */
  /*
   * Starts from the stack she left, not a default: the stack is saved as it
   * changes, so a default here was written over the remembered one on load,
   * before going into the set could read it back — and a reload lost it.
   */
  const [layers, setLayers] = useState<Layer[]>(() => {
    const saved = loadSetting<{ layers: Layer[] } | null>(
      'vj-stack', null,
      (v) => typeof v === 'object' && v !== null && Array.isArray((v as { layers?: unknown }).layers),
    );
    const kept = (saved?.layers ?? [])
      .filter((l) => l && storedPattern(l.pattern) !== null && typeof l.opacity === 'number')
      .map((l) => ({ ...l, pattern: storedPattern(l.pattern)! }))
      .slice(0, MAX_LAYERS);
    return kept.length ? kept : [{ pattern: 'geometric', opacity: 1, motion: MOTION_DEFAULT }];
  });
  const [selectedLayer, setSelectedLayer] = useState(() => {
    const saved = loadSetting<{ selected?: number } | null>('vj-stack', null, (v) => typeof v === 'object' && v !== null);
    return typeof saved?.selected === 'number' ? saved.selected : 0;
  });
  const currentPattern = (layers[selectedLayer] ?? layers[0]).pattern;
  /**
   * A visual she is getting ready while another plays: its sliders, effects
   * and colours are what the panels edit, without it coming on screen. Null:
   * the panels edit the visual that is playing, as always.
   */
  const [preparing, setPreparing] = useState<VisualPattern | null>(null);
  // Preparing is switched off outside the cue for now: never left on, even from before.
  useEffect(() => { if (!CUE_TEST && preparing) setPreparing(null); }, [preparing]);
  const editPattern = (CUE_TEST ? preparing : null) ?? currentPattern;
  useEffect(() => {
    if (preparing && layers.some((l) => l.pattern === preparing)) setPreparing(null);
  }, [preparing, layers]);
  /** The set, for the callbacks declared before it is: kept current further down. */
  const setRef = useRef<VisualPattern[]>([]);

  /*
   * A visual's faders belong to the visual, not to the slot it played in.
   * Each time the stack changes, what every layer has is noted under its
   * visual; when that visual comes back — tapped onto a layer or stacked
   * again — it comes back at exactly the opacity, hands and blend it had,
   * instead of taking on whatever the slot or the default was.
   */
  type Faders = Pick<Layer, 'opacity' | 'motion' | 'blend'>;
  const fadersRef = useRef<Record<string, Faders>>(
    loadSetting<Record<string, Faders>>('vj-faders', {}, (v) => typeof v === 'object' && v !== null),
  );
  useEffect(() => {
    const next = { ...fadersRef.current };
    for (const l of layers) next[l.pattern] = { opacity: l.opacity, motion: l.motion, ...(l.blend ? { blend: l.blend } : {}) };
    fadersRef.current = next;
    saveSetting('vj-faders', next);
  }, [layers]);
  /** A layer for `pattern`: its remembered faders over `base`. */
  const withFaders = useCallback((base: Layer, pattern: VisualPattern): Layer => {
    const kept = fadersRef.current[pattern];
    if (!kept) return { ...base, pattern };
    const { blend: _drop, ...rest } = base;
    return { ...rest, pattern, opacity: kept.opacity, motion: kept.motion, ...(kept.blend ? { blend: kept.blend } : {}) };
  }, []);

  /*
   * THE CUE TEST — the page opened with ?cue, to compare with plain taps.
   *
   * Right-click (or ✎) cards to line them up as what comes next; each is
   * edited as it is cued, without coming on screen. GO (or Space) puts the
   * whole cue up at once, every visual at the faders it had last time, and
   * whatever else is up fades away over the set's transition.
   */
  const [cue, setCue] = useState<VisualPattern[]>([]);
  const cueTo = useCallback((pattern: VisualPattern) => {
    const onScreen = layers.some((l) => l.pattern === pattern);
    if (!cue.includes(pattern)) {
      if (cue.length >= MAX_LAYERS) return;
      setCue([...cue, pattern]);
      setPreparing(onScreen ? null : pattern);
    } else if (preparing === pattern || onScreen) {
      // A second right-click on the one being edited: out of the cue.
      setCue(cue.filter((p) => p !== pattern));
      setPreparing(null);
    } else {
      setPreparing(pattern);
    }
  }, [cue, layers, preparing]);
  const clearCue = useCallback(() => { setCue([]); setPreparing(null); }, []);

  /** Puts a changed stack in the set's order, and keeps the selection on `pattern`. */
  const arrange = useCallback((next: Layer[], pattern: VisualPattern) => {
    const ordered = inSetOrder(next, setRef.current);
    setLayers(ordered);
    setSelectedLayer(Math.max(0, ordered.findIndex((l) => l.pattern === pattern)));
  }, []);

  /*
   * Tap: go to this visual, alone.
   *
   * Everything else on the stack fades out over the set's transition while it
   * comes in, so moving on never means first remembering to take two or three
   * layers down one by one. It comes in at the faders it had last time (or, the
   * first time, the level of the layer it replaces). A visual already on the
   * stack keeps playing as it is while the others leave. Holding still adds
   * and removes layers; the layer list and L still pick which one to edit.
   */
  const lastTapRef = useRef<{ pattern: string; at: number } | null>(null);
  const setCurrentPattern = useCallback((pattern: VisualPattern, solo = false) => {
    if (layers.length === 1 && layers[0].pattern === pattern) return;
    const at = layers.findIndex((l) => l.pattern === pattern);
    /*
     * Already up with others: a tap picks it to edit and leaves the rest
     * playing; a second tap straight after keeps only it.
     */
    if (at !== -1 && !solo) {
      const now = performance.now();
      const last = lastTapRef.current;
      lastTapRef.current = { pattern, at: now };
      if (!(last && last.pattern === pattern && now - last.at < 450)) {
        setSelectedLayer(at);
        return;
      }
      lastTapRef.current = null;
    }
    const existing = layers.find((l) => l.pattern === pattern);
    setLayers([existing ?? withFaders(layers[selectedLayer] ?? layers[0], pattern)]);
    setSelectedLayer(0);
  }, [layers, selectedLayer, withFaders]);

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
    /*
     * It goes into the stack where the set puts it — under the visuals that
     * come after it in the set, over the ones before — and becomes the
     * selected one.
     *
     * Colour, the sliders and now the effects all act on the selection, so
     * stacking a layer and leaving the controls pointed at the previous one
     * means the next thing you reach for quietly changes the wrong visual.
     * The layer you just brought up is the one you are working on.
     */
    arrange([...layers, withFaders({ pattern, opacity: STACKED_OPACITY, motion: from.motion }, pattern)], pattern);
  }, [layers, selectedLayer, arrange, withFaders]);

  const goCue = useCallback(() => {
    if (!cue.length) return;
    const motion = (layers[selectedLayer] ?? layers[0]).motion;
    const next = inSetOrder(cue.map((p) => layers.find((l) => l.pattern === p)
      ?? withFaders({ pattern: p, opacity: -1, motion }, p)), setRef.current);
    // First time up with nothing remembered: the bottom one full, those over it at the stacked level.
    const filled = next.map((l, i) => (l.opacity < 0 ? { ...l, opacity: i === 0 ? 1 : STACKED_OPACITY } : l));
    setLayers(filled);
    setSelectedLayer(Math.max(0, filled.findIndex((l) => l.pattern === cue[cue.length - 1])));
    setCue([]);
    setPreparing(null);
  }, [cue, layers, selectedLayer, withFaders]);

  /*
   * THE ROTEIRO PLAYING ITSELF.
   *
   * Each step puts its visuals up together, as GO does: those already up stay
   * as they are, the others fade away over the set's transition, and each
   * comes in at the faders it had last time. When the step's time is up the
   * next one follows. The moment she changes what is on screen herself — a
   * card, a key, TRACK — it pauses and leaves it to her; ▶ (or PLAY) carries
   * on from the step it was on, with the time that step had left. Knobs and
   * faders do not pause it: shaping what is up is part of playing along.
   */
  const [scriptText, setScriptText] = useState(() => loadScript(null));
  const steps = useMemo(() => parseScript(scriptText), [scriptText]);
  const [run, setRun] = useState<{ state: 'off' | 'running' | 'paused'; step: number; endsAt: number; left: number }>(
    { state: 'off', step: 0, endsAt: 0, left: 0 },
  );
  const appliedRef = useRef<string | null>(null);
  const [scriptNow, setScriptNow] = useState(() => performance.now());
  const sig = (patterns: string[]) => [...patterns].sort().join('|');
  const stepPatterns = useCallback((i: number) => (steps[i]?.slots ?? [])
    .map((n) => setRef.current[n - 1]).filter((p): p is VisualPattern => !!p), [steps]);
  const applyStep = useCallback((i: number) => {
    const patterns = stepPatterns(i);
    if (!patterns.length) return;
    const motion = (layers[selectedLayer] ?? layers[0]).motion;
    const next = inSetOrder(patterns.map((p) => layers.find((l) => l.pattern === p)
      ?? withFaders({ pattern: p, opacity: -1, motion }, p)), setRef.current);
    const filled = next.map((l, k) => (l.opacity < 0 ? { ...l, opacity: k === 0 ? 1 : STACKED_OPACITY } : l));
    appliedRef.current = sig(filled.map((l) => l.pattern));
    setLayers(filled);
    setSelectedLayer(Math.max(0, filled.findIndex((l) => l.pattern === patterns[patterns.length - 1])));
  }, [stepPatterns, layers, selectedLayer, withFaders]);
  const startOrResume = useCallback(() => {
    if (!steps.length) return;
    const now = performance.now();
    if (run.state === 'running') {
      setRun({ ...run, state: 'paused', left: Math.max(0, run.endsAt - now) });
      return;
    }
    const step = run.state === 'paused' ? Math.min(run.step, steps.length - 1) : 0;
    const left = run.state === 'paused' && run.left > 0 ? run.left : steps[step].secs * 1000;
    applyStep(step);
    setRun({ state: 'running', step, endsAt: now + left, left });
  }, [steps, run, applyStep]);
  const stopScript = useCallback(() => { setRun({ state: 'off', step: 0, endsAt: 0, left: 0 }); appliedRef.current = null; }, []);
  const moveStep = useCallback((d: 1 | -1) => {
    if (!steps.length) return;
    const step = Math.max(0, Math.min(steps.length - 1, (run.state === 'off' ? (d > 0 ? -1 : 1) : run.step) + d));
    const now = performance.now();
    const left = steps[step].secs * 1000;
    applyStep(step);
    setRun((r) => ({ state: r.state === 'off' ? 'paused' : r.state, step, endsAt: now + left, left }));
  }, [steps, run, applyStep]);
  // The clock: the next step when this one's time is up.
  useEffect(() => {
    if (run.state !== 'running') return;
    const id = window.setInterval(() => {
      const now = performance.now();
      setScriptNow(now);
      if (now < run.endsAt) return;
      const step = run.step + 1;
      if (step >= steps.length) { setRun({ ...run, state: 'paused', left: 0 }); return; }
      applyStep(step);
      setRun({ state: 'running', step, endsAt: now + steps[step].secs * 1000, left: 0 });
    }, 250);
    return () => window.clearInterval(id);
  }, [run, steps, applyStep]);
  // She changed what is up herself: it is hers now.
  useEffect(() => {
    if (run.state !== 'running' || appliedRef.current === null) return;
    if (sig(layers.map((l) => l.pattern)) === appliedRef.current) return;
    setRun((r) => ({ ...r, state: 'paused', left: Math.max(0, r.endsAt - performance.now()) }));
    appliedRef.current = null;
  }, [layers, run.state]);
  const scriptRef = useRef(startOrResume);
  scriptRef.current = startOrResume;

  /*
   * The stack is remembered — which visuals are up, their faders and which one
   * the controls are on — so leaving for the library and coming back, or
   * reloading the page mid-rehearsal, picks up exactly where she was.
   */
  useEffect(() => {
    saveSetting('vj-stack', { layers, selected: selectedLayer });
  }, [layers, selectedLayer]);

  const cycleLayer = useCallback(() => {
    setSelectedLayer((s) => (s + 1) % layers.length);
  }, [layers.length]);

  const setLayerOpacity = useCallback((index: number, opacity: number) => {
    setLayers((prev) => prev.map((l, i) => (i === index ? { ...l, opacity } : l)));
  }, []);

  /** Take a layer off by position, rather than by which pattern it holds. */
  /** Moves a layer to another place in the stack; the selection follows the layer it was on. */
  const moveLayer = useCallback((from: number, to: number) => {
    if (from === to) return;
    setLayers((prev) => {
      if (from < 0 || from >= prev.length || to < 0 || to >= prev.length) return prev;
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
    setSelectedLayer((sel) => {
      if (sel === from) return to;
      if (from < sel && to >= sel) return sel - 1;
      if (from > sel && to <= sel) return sel + 1;
      return sel;
    });
  }, []);

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
   * Colour belongs to a visual.
   *
   * It lived on the layer, which made it per-layer — two stacked visuals could
   * run in different palettes, which is most of the point of stacking them —
   * but a layer is not a stable thing. It plays one visual and then another,
   * so switching handed the incoming visual whatever palette the outgoing one
   * had, and a colour she had chosen for something was gone the next time she
   * reached for it.
   *
   * Keyed by visual it is both at once, exactly as the shape sliders and the
   * effects are: a layer runs one pattern and the stack never runs the same
   * pattern twice, so per-visual is per-layer — and it is still there tomorrow.
   */
  const [looks, setLooks] = useState<Record<string, Look>>(() =>
    loadSetting<Record<string, Look>>('vj-looks', {}, (v) => typeof v === 'object' && v !== null),
  );
  useEffect(() => { saveSetting('vj-looks', looks); }, [looks]);

  /** What a visual looks like, falling back to the stored default. */
  const lookFor = useCallback(
    (pattern: string): Look => looks[pattern] ?? defaultLook(),
    [looks],
  );

  const { hue, saturation, colorMode } = lookFor(editPattern);

  type Setter<T> = T | ((previous: T) => T);
  const resolve = <T,>(next: Setter<T>, previous: T): T =>
    typeof next === 'function' ? (next as (p: T) => T)(previous) : next;

  /** Writes one field of the selected visual's look. */
  const editLook = useCallback(<K extends keyof Look>(key: K, v: Setter<Look[K]>) => {
    setLooks((prev) => {
      const mine = prev[editPattern] ?? defaultLook();
      return { ...prev, [editPattern]: { ...mine, [key]: resolve(v, mine[key]) } };
    });
  }, [editPattern]);

  const setHue = useCallback((v: Setter<number>) => editLook('hue', v), [editLook]);
  const setSaturation = useCallback((v: Setter<number>) => editLook('saturation', v), [editLook]);
  const setColorMode = useCallback((v: Setter<ColorMode>) => editLook('colorMode', v), [editLook]);

  /** Every layer's palette, derived from the visual it is playing. */
  const layerColors = useMemo(
    () => layers.map((l) => {
      const look = looks[l.pattern] ?? defaultLook();
      return generateColors(look.hue, look.saturation, look.colorMode);
    }),
    [layers, looks],
  );
  const liveColors = layerColors[selectedLayer] ?? layerColors[0];
  // Preparing, the colour bar shows the colours of the one being prepared.
  const dominantColors = useMemo(() => {
    if (!preparing) return liveColors;
    const look = looks[preparing] ?? defaultLook();
    return generateColors(look.hue, look.saturation, look.colorMode);
  }, [preparing, looks, liveColors]);

  const [autoHueEnabled, setAutoHueEnabled] = useState(false);

  /**
   * How hard the hands drive everything, across the whole set. Persisted,
   * because it is a decision about the room rather than about a visual.
   */
  /** The selected layer's own hands fader, which is what the knob shows. */
  const motion = (layers[selectedLayer] ?? layers[0]).motion;
  const setMotion = useCallback((next: number | ((m: number) => number)) => {
    setLayers((prev) => prev.map((l, i) => (
      i === selectedLayer
        ? { ...l, motion: typeof next === 'function' ? next(l.motion) : next }
        : l
    )));
  }, [selectedLayer]);
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
  /** The projector window's size in real pixels while it is open: the visuals are drawn at it. */
  const [outputSize, setOutputSize] = useState<{ width: number; height: number } | null>(null);
  if (!outputRef.current) {
    outputRef.current = new OutputWindow(() => setOutput(false), setOutputSize);
  }

  /** The finish over the whole output: 0 off, 1 soft, 2 deep (pipeline/Finish). */
  const [finish, setFinish] = useState<0 | 1 | 2>(() =>
    loadSetting('vj-finish', 0, (v) => v === 0 || v === 1 || v === 2) as 0 | 1 | 2,
  );
  useEffect(() => { saveSetting('vj-finish', finish); }, [finish]);
  /** How long one visual takes to cross into the next, in seconds, for the whole set. 0 cuts. */
  const [fade, setFade] = useState<number>(() =>
    loadSetting('vj-fade', 1, (v) => typeof v === 'number' && v >= 0 && v <= 30));
  useEffect(() => { saveSetting('vj-fade', fade); }, [fade]);

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
  const [idleDrive, setIdleDrive] = useState(() => loadSetting('vj-auto', true, (v) => typeof v === 'boolean'));
  useEffect(() => { saveSetting('vj-auto', idleDrive); }, [idleDrive]);

  // Slider overrides, per renderer, so switching away and back keeps your tweaks.
  const [paramValues, setParamValues] = useState<AllParamValues>(() =>
    sanitizeAllParams(loadSetting<unknown>('vj-params', {}, () => true)),
  );

  /*
   * Effects belong to a visual.
   *
   * They were keyed by layer position, which made them per-layer — the thing
   * that matters when two are stacked — but meant they were lost the moment a
   * layer played something else, and a visual came back bare every time. The
   * shape sliders were already keyed by pattern for exactly that reason.
   *
   * Keying effects the same way gives both at once: a layer runs one pattern
   * and the stack never runs the same pattern twice, so per-visual settings
   * are per-layer settings — and they are still there when she comes back to
   * it tomorrow.
   */
  const [fxByPattern, setFxByPattern] = useState<AllParamValues>(() =>
    sanitizeAllParams(loadSetting<unknown>('vj-fx', {}, () => true)),
  );

  /** The selected layer's visual's effects, which is what the panel edits. */
  const fxParams = fxByPattern[editPattern] ?? NO_FX;

  const setFxParam = useCallback((path: string, value: number) => {
    setFxByPattern((prev) => ({
      ...prev,
      [editPattern]: { ...(prev[editPattern] ?? {}), [path]: value },
    }));
  }, [editPattern]);

  // One switch over the whole chain, so a heavy look left over from an earlier
  // session is one click away from gone rather than a hunt through the panel.
  const fxEnabled = (fxParams['master.enabled'] ?? 1) >= 0.5;
  const toggleFx = useCallback(() => {
    setFxByPattern((prev) => {
      const mine = prev[editPattern] ?? {};
      return {
        ...prev,
        [editPattern]: {
          ...mine,
          'master.enabled': (mine['master.enabled'] ?? 1) >= 0.5 ? 0 : 1,
        },
      };
    });
  }, [editPattern]);

  /** Which effect's controls are open. Held here so hiding the UI keeps it. */
  const [openFx, setOpenFx] = useState<string | null>(null);

  const resetFxParam = useCallback((path?: string) => {
    setFxByPattern((prev) => {
      if (path === undefined) return { ...prev, [editPattern]: {} };
      const { [path]: _removed, ...keep } = prev[editPattern] ?? {};
      return { ...prev, [editPattern]: keep };
    });
  }, [editPattern]);

  const setParam = useCallback((path: string, value: number) => {
    setParamValues((prev) => ({
      ...prev,
      [editPattern]: { ...prev[editPattern], [path]: value },
    }));
  }, [editPattern]);

  /** One parameter back to its config default, or all of this renderer's. */
  const resetParam = useCallback((path?: string) => {
    setParamValues((prev) => {
      if (path === undefined) {
        const { [editPattern]: _dropped, ...rest } = prev;
        return rest;
      }
      const { [path]: _removed, ...keep } = prev[editPattern] ?? {};
      return { ...prev, [editPattern]: keep };
    });
  }, [editPattern]);

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
  setRef.current = set;
  const [view, setView] = useState<'library' | 'vj'>('library');

  /**
   * Dragging a card along the set bar: the keys follow the new order, and so
   * do the layers — whatever is now further left lies further up.
   */
  const reorderSet = useCallback((next: VisualPattern[]) => {
    setSet(next);
    const ordered = inSetOrder(layers, next);
    if (ordered.some((l, i) => l !== layers[i])) {
      setLayers(ordered);
      setSelectedLayer(Math.max(0, ordered.findIndex((l) => l.pattern === currentPattern)));
    }
  }, [layers, currentPattern]);

  /** Takes a visual out of the set from the bar itself; it also comes off the stack. */
  const removeFromSet = useCallback((pattern: VisualPattern) => {
    if (set.length <= 1) return; // a set is never left empty
    const at = set.indexOf(pattern);
    if (at === -1) return;
    const next = set.filter((p) => p !== pattern);
    setSet(next);
    const on = layers.findIndex((l) => l.pattern === pattern);
    if (on === -1) return;
    if (layers.length > 1) {
      const kept = layers.filter((_, i) => i !== on);
      setLayers(kept);
      setSelectedLayer((sel) => (sel > on ? sel - 1 : Math.min(sel, kept.length - 1)));
    } else {
      // The only thing playing: its neighbour in the set takes its place.
      const neighbour = next[Math.min(at, next.length - 1)];
      setLayers(layers.map((l) => withFaders(l, neighbour)));
    }
  }, [set, layers, withFaders]);
  
  const [handData, setHandData] = useState<HandData>({ left: null, right: null });
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);

  // The recorder runs outside React, so what it reads has to be kept current.
  useEffect(() => {
    cameraRef.current = videoElement;
    showCameraRef.current = showCamera;
  }, [videoElement, showCamera]);


  const [showPermissionRequest, setShowPermissionRequest] = useState(false); // Skip intro, go directly to app

  // Audio reactive state
  // Remembered: a set played to the room's sound should open listening to it.
  const [audioEnabled, setAudioEnabled] = useState(() => loadSetting('vj-mic', false, (v) => typeof v === 'boolean'));
  useEffect(() => { saveSetting('vj-mic', audioEnabled); }, [audioEnabled]);
  const [audioData, setAudioData] = useState<AudioData>({ bass: 0, lowMid: 0, mid: 0, high: 0, overall: 0, beat: false, beatIntensity: 0, onset: 0 });
  const [audioSensitivity, setAudioSensitivity] = useState(() => loadSetting('vj-gain', 0.5, isNumberIn(0, 1)));
  useEffect(() => { saveSetting('vj-gain', audioSensitivity); }, [audioSensitivity]);
  const [audioTime, setAudioTime] = useState(0); // For smooth audio-driven animation

  const handsPresent = handData.left !== null || handData.right !== null;
  /*
   * Who is playing: her hands, or the sound.
   *
   * With the microphone on there is nothing to switch. A hand in front of the
   * camera takes over at once; when it leaves, the sound takes over again —
   * but only after the hand has been gone for a moment, so reaching for a key
   * or losing the hand for a few frames does not flip the visuals back and
   * forth between two players.
   */
  const [handsDriving, setHandsDriving] = useState(false);
  useEffect(() => {
    if (handsPresent) {
      setHandsDriving(true);
      return;
    }
    const id = window.setTimeout(() => setHandsDriving(false), 1500);
    return () => window.clearTimeout(id);
  }, [handsPresent]);
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

  /** The slow figure a layer runs on when it is not being played. */
  const autoHands = useMemo(() => idleHands(audioTime), [audioTime]);

  /*
   * Audio standing in for hands.
   *
   * The gesture vocabulary is the same one her hands use — finger count is
   * speed, a clap is an explosion — so the music is mapped onto it rather than
   * onto some parallel set of rules. Brightness up top means more fingers;
   * an onset is a clap. That way every visual reacts to sound exactly as it
   * reacts to her, and nothing needs a second code path.
   *
   * Only while her hands are out of view. With the microphone on and a hand
   * in front of the camera, the hand plays — tempo, aim, the clap — and the
   * music still reaches every visual as music: its levels, its beat, its
   * kick and its arc. Hands and sound together, rather than one or the other.
   */
  const effectiveHandData: HandData = audioEnabled && !handsDriving ? {
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
    synthetic: true,
  } : handsPresent || handsDriving || !idleDrive ? handData : autoHands;

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
    saveSetting('vj-fx', fxByPattern);
  }, [fxByPattern]);

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
    /*
     * Back in, exactly as she left it.
     *
     * The stack she had — layers, faders, which one the controls were on —
     * comes back as long as its visuals are still in the set, and the effects
     * stay as they were, on or off. Rehearsing means going to the library and
     * back over and over; setting everything up again each time was the cost.
     * A visual taken out of the set in the meantime simply drops out of the
     * stack, and with nothing left it starts on key 1.
     */
    const saved = loadSetting<{ layers: Layer[]; selected: number } | null>(
      'vj-stack', null,
      (v) => typeof v === 'object' && v !== null && Array.isArray((v as { layers?: unknown }).layers),
    );
    const kept = (saved?.layers ?? [])
      .filter((l) => set.includes(l.pattern) && typeof l.opacity === 'number')
      .slice(0, MAX_LAYERS)
      .map((l) => ({
        pattern: l.pattern,
        opacity: l.opacity,
        motion: typeof l.motion === 'number' ? l.motion : MOTION_DEFAULT,
        ...(l.blend && (BLEND_MODES as readonly string[]).includes(l.blend) ? { blend: l.blend } : {}),
      }));
    if (kept.length) {
      setLayers(kept);
      const sel = saved?.layers[saved.selected]?.pattern;
      setSelectedLayer(Math.max(0, kept.findIndex((l) => l.pattern === sel)));
    } else {
      setLayers([{ pattern: set[0], opacity: 1, motion: MOTION_DEFAULT }]);
      setSelectedLayer(0);
    }
    setView('vj');
  }, [set]);

  // ── saved sets ──────────────────────────────────────────────────────────
  const [savedSets, setSavedSets] = useState<SavedSet[]>(loadSavedSets);
  useEffect(() => { storeSavedSets(savedSets); }, [savedSets]);
  /** The saved set she is working in, if any — what a quick save writes to. */
  const [setName, setSetName] = useState<string | null>(() =>
    loadSetting<string | null>('vj-set-name', null, (v) => typeof v === 'string' || v === null));
  // Each saved set has its own roteiro.
  useEffect(() => { setScriptText(loadScript(setName)); }, [setName]);
  useEffect(() => { saveSetting('vj-set-name', setName); }, [setName]);

  /** Saves the set as it stands — visuals, their sliders, effects, colours, stack — under a name. */
  const saveNamedSet = useCallback((name: string) => {
    const clean = name.trim();
    if (!clean || set.length === 0) return;
    const entry: SavedSet = {
      name: clean,
      savedAt: Date.now(),
      set,
      params: pick(paramValues, set),
      fx: pick(fxByPattern, set),
      looks: pick(looks, set),
      fade,
      faders: pick(fadersRef.current, set),
      stack: view === 'vj' ? { layers, selected: selectedLayer }
        : loadSetting('vj-stack', null, (v) => typeof v === 'object'),
    };
    setSavedSets((prev) => [...prev.filter((s) => s.name !== clean), entry]
      .sort((a, b) => a.name.localeCompare(b.name)));
    setSetName(clean);
  }, [set, paramValues, fxByPattern, looks, layers, selectedLayer, view, fade]);

  /** Puts a saved set back: the row, every visual's settings, and its stack. */
  const loadNamedSet = useCallback((name: string) => {
    const entry = savedSets.find((s) => s.name === name);
    if (!entry || entry.set.length === 0) return;
    const replace = <T,>(prev: Record<string, T>, saved: Record<string, T>) => {
      const next = { ...prev };
      for (const p of entry.set) {
        if (saved[p] !== undefined) next[p] = saved[p];
        else delete next[p];
      }
      return next;
    };
    setSet(entry.set);
    setParamValues((prev) => replace(prev, entry.params));
    setFxByPattern((prev) => replace(prev, entry.fx));
    setLooks((prev) => replace(prev, entry.looks));
    if (typeof entry.fade === 'number') setFade(entry.fade);
    if (entry.faders) fadersRef.current = { ...fadersRef.current, ...entry.faders };
    if (entry.stack) {
      saveSetting('vj-stack', entry.stack);
      if (view === 'vj') {
        const kept = entry.stack.layers.filter((l) => entry.set.includes(l.pattern)).slice(0, MAX_LAYERS);
        if (kept.length) {
          setLayers(kept);
          setSelectedLayer(Math.min(entry.stack.selected, kept.length - 1));
        }
      }
    }
    setSetName(entry.name);
  }, [savedSets, view]);

  const deleteNamedSet = useCallback((name: string) => {
    setSavedSets((prev) => prev.filter((s) => s.name !== name));
    setSetName((n) => (n === name ? null : n));
  }, []);

  /** Arrow keys walk the set, in the order it was built. */
  const cyclePattern = useCallback((direction: 'next' | 'prev') => {
    if (set.length === 0) return;
    const at = set.indexOf(currentPattern);
    const step = direction === 'next' ? 1 : -1;
    // Not on the set at all (it was edited under us): start at one end.
    const next = at === -1
      ? (direction === 'next' ? 0 : set.length - 1)
      : (at + step + set.length) % set.length;
    setCurrentPattern(set[next], true);
  }, [currentPattern, set, setCurrentPattern]);

  /*
   * Auto-pilot: while it is on, the selected layer moves to the next visual
   * of the set every so many bars — on the downbeat once a tempo is tapped,
   * every two seconds a bar until then. A visual she picks herself restarts
   * the count, so it never cuts away from something she has just chosen.
   * Visuals already up on another layer are stepped over.
   */
  const [pilotOn, setPilotOn] = useState(false);
  const [pilotBars, setPilotBars] = useState(() =>
    loadSetting('vj-pilot-bars', 16, (v) => PILOT_BARS.includes(v as number)),
  );
  useEffect(() => { saveSetting('vj-pilot-bars', pilotBars); }, [pilotBars]);
  const [pilotSince, setPilotSince] = useState(() => performance.now());
  useEffect(() => { setPilotSince(performance.now()); }, [currentPattern, pilotOn, pilotBars]);

  const pilotStep = useRef<() => void>(() => {});
  pilotStep.current = () => {
    if (set.length < 2) return;
    const at = set.indexOf(currentPattern);
    for (let k = 1; k < set.length; k++) {
      const next = set[(at + k + set.length) % set.length];
      if (layers.some((l) => l.pattern === next)) continue;
      arrange(layers.map((l, i) => (i === selectedLayer ? { ...l, pattern: next } : l)), next);
      return;
    }
  };

  useEffect(() => {
    if (!pilotOn || view !== 'vj') return;
    const id = window.setInterval(() => {
      const now = performance.now();
      const bpm = currentBpm();
      const bar = bpm ? (4 * 60000) / bpm : 2000;
      // Half a beat early counts, so the change can land on the one itself.
      if (now - pilotSince < bar * pilotBars - bar / 8) return;
      if (bpm) {
        const at = beatPosition(now);
        if (!at || ((at.beat % 4) + 4) % 4 !== 0 || at.phase > 0.5) return;
      }
      pilotStep.current();
      setPilotSince(now);
    }, 25);
    return () => window.clearInterval(id);
  }, [pilotOn, pilotBars, pilotSince, view]);

  /** One effect on or off on the selected visual, as its chip does it. */
  const toggleFxStage = useCallback((name: string) => {
    const group = PIPELINE_PARAMS.groups.find((g) => g.name === name);
    if (!group?.togglePath) return;
    setFxByPattern((prev) => {
      const mine = prev[editPattern] ?? {};
      const live = group.stage ? stageDoing(group.stage, mine) : (mine[group.togglePath!] ?? 0) >= 0.5;
      const next = { ...mine };
      if (live) {
        next[group.togglePath!] = 0;
      } else {
        next[group.togglePath!] = 1;
        for (const [path, v] of Object.entries(group.turnOn ?? {})) {
          const stored = mine[path];
          const off = (getByPath(PIPELINE_PARAMS.config, path) ?? 0) as number;
          next[path] = stored !== undefined && stored !== off ? stored : v;
        }
      }
      return { ...prev, [editPattern]: next };
    });
  }, [editPattern]);

  /*
   * The master fader and the blackout. Neither is remembered: a set always
   * opens with the picture up.
   */
  const [master, setMaster] = useState(1);
  const [blackout, setBlackout] = useState(false);

  /** How far each visual is zoomed, for the ones with nothing to count. */
  const [zooms, setZooms] = useState<Record<string, number>>(() =>
    loadSetting<Record<string, number>>('vj-zoom', {}, (v) => typeof v === 'object' && v !== null),
  );
  useEffect(() => { saveSetting('vj-zoom', zooms); }, [zooms]);
  /*
   * The picture zoom shrinks the whole frame onto black. A visual that has a
   * size of its own scales its things instead, so the flat zoom is not
   * applied to it — and one set before it had that, carries over once.
   */
  const pictureZooms = useMemo(
    () => Object.fromEntries(Object.entries(zooms).filter(([p]) => !SIZES[p])),
    [zooms],
  );
  useEffect(() => {
    const moved = Object.entries(zooms).filter(([p, z]) => SIZES[p] && z !== 1);
    if (!moved.length) return;
    setParamValues((prev) => {
      const next = { ...prev };
      for (const [p, z] of moved) {
        const path = SIZES[p];
        if (!path.endsWith('zoom') && !path.endsWith('size')) continue;
        if (next[p]?.[path] === undefined) next[p] = { ...(next[p] ?? {}), [path]: Math.round(z * 100) / 100 };
      }
      return next;
    });
    setZooms((prev) => Object.fromEntries(Object.entries(prev).filter(([p]) => !SIZES[p])));
    // Once, on load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** A word on screen for a moment, for a change made from the controller with nothing else showing it. */
  const [notice, setNotice] = useState<string | null>(null);
  const noticeTimer = useRef(0);
  const flash = useCallback((text: string) => {
    setNotice(text);
    window.clearTimeout(noticeTimer.current);
    noticeTimer.current = window.setTimeout(() => setNotice(null), 1400);
  }, []);

  // Say what size the projector is being drawn at, when that changes.
  useEffect(() => {
    if (outputSize) flash(`Projector · ${Math.min(1920, outputSize.width)} × ${Math.min(1080, outputSize.height)}`);
  }, [outputSize?.width, outputSize?.height, flash]);

  // Say the finish's new state when it changes, from the key or the button.
  const finishSaid = useRef(finish);
  useEffect(() => {
    if (finishSaid.current === finish) return;
    finishSaid.current = finish;
    flash(finish === 0 ? 'Glow off' : finish === 1 ? 'Glow · soft' : 'Glow · deep');
  }, [finish, flash]);

  /** One more or one fewer of what the selected visual shows — or, with nothing to count, a step of zoom. */
  const stepCount = useCallback((dir: 1 | -1) => {
    const counts = COUNTS[currentPattern];
    const entry = RENDERER_PARAMS[currentPattern];
    const name = RENDERER_CATEGORIES[currentPattern].short;
    if (counts && entry) {
      const specs = entry.groups.flatMap((g) => g.params);
      const mine = paramValues[currentPattern] ?? {};
      const now = counts.map(({ path }) => (mine[path] ?? getByPath(entry.config, path) ?? 0) as number);
      // Several together (the world): only the ones showing, so "more" does not
      // bring in something she had taken out — unless nothing is showing.
      const anyOn = now.some((v) => v > 0);
      const next: Record<string, number> = {};
      counts.forEach(({ path, step }, i) => {
        const spec = specs.find((p) => p.path === path);
        if (!spec) return;
        if (counts.length > 1 && anyOn && now[i] <= 0) return;
        const floor = counts.length > 1 ? Math.max(spec.min, Math.min(1, now[i])) : spec.min;
        const v = Math.round(Math.max(floor, Math.min(spec.max, now[i] + dir * step)) * 1000) / 1000;
        next[path] = v;
      });
      setParamValues((prev) => ({ ...prev, [currentPattern]: { ...(prev[currentPattern] ?? {}), ...next } }));
      const shown = Object.values(next)[0];
      const label = specs.find((p) => p.path === counts[0].path)?.label ?? 'Count';
      flash(counts.length > 1 ? `${name} · ${dir > 0 ? 'more' : 'fewer'}` : `${name} · ${label} ${Number.isInteger(shown) ? shown : Math.round(shown * 100) + '%'}`);
      return;
    }
    // Its own size, where it has one: a step of an eighth of the slider.
    const sizePath = SIZES[currentPattern];
    const sizeSpec = sizePath ? entry?.groups.flatMap((g) => g.params).find((p) => p.path === sizePath) : undefined;
    if (sizePath && sizeSpec && entry) {
      const now = (paramValues[currentPattern]?.[sizePath] ?? getByPath(entry.config, sizePath) ?? 1) as number;
      const v = Math.round(Math.max(sizeSpec.min, Math.min(sizeSpec.max, now + dir * (sizeSpec.max - sizeSpec.min) / 8)) * 100) / 100;
      setParamValues((prev) => ({ ...prev, [currentPattern]: { ...(prev[currentPattern] ?? {}), [sizePath]: v } }));
      flash(`${name} · ${sizeSpec.label} ${v}`);
      return;
    }
    const z = zooms[currentPattern] ?? 1;
    const nz = Math.round(Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, dir > 0 ? z * ZOOM_STEP : z / ZOOM_STEP)) * 100) / 100;
    // Back to exactly 1 when it passes through, so "as drawn" is reachable.
    const snapped = Math.abs(nz - 1) < 0.06 ? 1 : nz;
    setZooms((prev) => ({ ...prev, [currentPattern]: snapped }));
    flash(`${name} · Zoom ${Math.round(snapped * 100)}%`);
  }, [currentPattern, paramValues, zooms, flash]);

  /** An effect turned by a knob: down is off, up is on and that strong. */
  const turnFx = useCallback((fx: (typeof KNOB_FX)[number], v: number) => {
    const group = PIPELINE_PARAMS.groups.find((g) => g.name === fx.name);
    if (!group?.togglePath) return;
    setFxByPattern((prev) => {
      const mine = prev[currentPattern] ?? {};
      const next = { ...mine };
      if (v < KNOB_OFF) {
        next[group.togglePath!] = 0;
      } else {
        next[group.togglePath!] = 1;
        // Its other sliders as she left them, or the preset the first time.
        for (const [path, preset] of Object.entries(group.turnOn ?? {})) {
          if (path !== fx.path && mine[path] === undefined) next[path] = preset;
        }
        next[fx.path] = knobValue(fx, v);
      }
      return { ...prev, [currentPattern]: next };
    });
  }, [currentPattern]);

  /*
   * THE SET KNOBS — one turn, one idea, on whichever visual is selected:
   * how big it is, how many there are, and the feedback's tunnel and spiral;
   * and the sphere's points-to-outline, wherever the sphere is.
   */
  const specOf = (pattern: string, path: string) =>
    RENDERER_PARAMS[pattern as VisualPattern]?.groups.flatMap((g) => g.params).find((p) => p.path === path);
  const paramNow = (pattern: string, path: string) =>
    (paramValues[pattern]?.[path] ?? getByPath(RENDERER_PARAMS[pattern as VisualPattern]?.config ?? {}, path) ?? 0) as number;
  const snapTo = (v: number, step: number) => Math.round(Math.round(v / step) * step * 10000) / 10000;
  /** Picture zoom on a knob: even steps in or out, as drawn (1) a little under the middle. */
  const zoomAt = (v: number) => ZOOM_MIN * Math.pow(ZOOM_MAX / ZOOM_MIN, v);
  const zoomPos = (z: number) => Math.log(z / ZOOM_MIN) / Math.log(ZOOM_MAX / ZOOM_MIN);
  const TUNNEL = { min: 0.9, max: 1.1 };
  const SPIRAL = { min: -0.05, max: 0.05 };

  const turnSetKnob = (id: string, v: number) => {
    const pattern = currentPattern;
    const name = RENDERER_CATEGORIES[pattern].short;
    const write = (p: string, next: Record<string, number>) =>
      setParamValues((prev) => ({ ...prev, [p]: { ...(prev[p] ?? {}), ...next } }));
    if (id === 'size') {
      const path = SIZES[pattern];
      const spec = path ? specOf(pattern, path) : undefined;
      if (path && spec) {
        const x = snapTo(spec.min + v * (spec.max - spec.min), spec.step);
        write(pattern, { [path]: x });
        flash(`${name} · ${spec.label} ${x}`);
      } else {
        const z = zoomAt(v);
        const snapped = Math.abs(z - 1) < 0.04 ? 1 : Math.round(z * 100) / 100;
        setZooms((prev) => ({ ...prev, [pattern]: snapped }));
        flash(`${name} · Zoom ${Math.round(snapped * 100)}%`);
      }
    } else if (id === 'count') {
      const counts = COUNTS[pattern];
      if (!counts) { flash(`${name} · nothing to count`); return; }
      const next: Record<string, number> = {};
      for (const { path } of counts) {
        const spec = specOf(pattern, path);
        if (spec) next[path] = snapTo(spec.min + v * (spec.max - spec.min), spec.step);
      }
      write(pattern, next);
      const first = specOf(pattern, counts[0].path);
      const shown = next[counts[0].path];
      flash(`${name} · ${first?.label ?? 'Count'} ${Number.isInteger(shown) ? shown : Math.round(v * 100) + '%'}`);
    } else if (id === 'tunnel' || id === 'spiral') {
      const range = id === 'tunnel' ? TUNNEL : SPIRAL;
      const rest = id === 'tunnel' ? 1 : 0;
      // A notch either side of the middle is none at all.
      const x = Math.abs(v - 0.5) < 0.03 ? rest : Math.round((range.min + v * (range.max - range.min)) * 10000) / 10000;
      const path = id === 'tunnel' ? 'feedback.zoom' : 'feedback.rotate';
      setFxByPattern((prev) => ({ ...prev, [pattern]: { ...(prev[pattern] ?? {}), [path]: x } }));
      const on = (fxByPattern[pattern]?.['feedback.enabled'] ?? 0) >= 0.5 && (fxByPattern[pattern]?.['feedback.amount'] ?? 0) > 0;
      const label = id === 'tunnel' ? 'Tunnel' : 'Spiral';
      flash(on ? `${name} · ${label} ${x === rest ? 'none' : x > rest ? (id === 'tunnel' ? 'out' : 'right') : (id === 'tunnel' ? 'in' : 'left')}` : `${label} — turn Trail up to see it`);
    } else if (id === 'fall') {
      // The fall through the clouds and the dive into the stars, together:
      // whichever is up moves.
      write('arrival-clouds', { 'motion.speed': Math.round(v * 300) / 100 });
      write('tonight', { 'flight.dive': Math.round(v * 150) / 100 });
      write('swarm-galaxy', { 'look.dive': Math.round(v * 100) / 100 });
      const up = layers.map((l) => l.pattern);
      flash(currentPattern === 'swarm-galaxy' || (up.includes('swarm-galaxy') && !up.includes('arrival-clouds') && !up.includes('tonight'))
        ? `Galaxy · Dive in ${Math.round(v * 100)}%`
        : up.includes('tonight') && !up.includes('arrival-clouds') ? `Stars · Dive ${Math.round(v * 150) / 100}`
        : `Clouds · Fall ${Math.round(v * 300) / 100}`);
    } else if (id === 'sphere') {
      const x = Math.round(v * 200) / 100;
      write('morphing', { 'shape.style': x });
      flash(`Sphere · ${x < 0.05 ? 'points' : x > 1.95 ? 'outline' : 'growing lines'}`);
    }
  };
  const readSetKnob = (id: string): number | undefined => {
    const pattern = currentPattern;
    if (id === 'size') {
      const path = SIZES[pattern];
      const spec = path ? specOf(pattern, path) : undefined;
      if (path && spec) return (paramNow(pattern, path) - spec.min) / (spec.max - spec.min);
      return zoomPos(zooms[pattern] ?? 1);
    }
    if (id === 'count') {
      const path = COUNTS[pattern]?.[0]?.path;
      const spec = path ? specOf(pattern, path) : undefined;
      return path && spec ? (paramNow(pattern, path) - spec.min) / (spec.max - spec.min) : undefined;
    }
    if (id === 'tunnel') return ((fxByPattern[pattern]?.['feedback.zoom'] ?? 1) - TUNNEL.min) / (TUNNEL.max - TUNNEL.min);
    if (id === 'spiral') return ((fxByPattern[pattern]?.['feedback.rotate'] ?? 0) - SPIRAL.min) / (SPIRAL.max - SPIRAL.min);
    if (id === 'sphere') return paramNow('morphing', 'shape.style') / 2;
    if (id === 'fall') {
      const up = layers.map((l) => l.pattern);
      if (currentPattern === 'swarm-galaxy' || (up.includes('swarm-galaxy') && !up.includes('arrival-clouds') && !up.includes('tonight'))) return paramNow('swarm-galaxy', 'look.dive');
      return up.includes('tonight') && !up.includes('arrival-clouds')
        ? paramNow('tonight', 'flight.dive') / 1.5
        : paramNow('arrival-clouds', 'motion.speed') / 3;
    }
    return undefined;
  };

  const effectNames = useMemo(
    () => PIPELINE_PARAMS.groups.filter((g) => g.togglePath).map((g) => g.name),
    [],
  );

  /** Everything a MIDI control can be put on. */
  const midiTargets = useMemo<MidiTarget[]>(() => [
    ...Array.from({ length: MAX_LAYERS }, (_, i) => ({
      id: `layer${i + 1}`, label: `Layer ${i + 1} fader`, group: 'Layers', continuous: true,
    })),
    ...Array.from({ length: MAX_LAYERS }, (_, i) => ({
      id: `motion${i + 1}`, label: `Layer ${i + 1} hands drive`, group: 'Layers', continuous: true,
    })),
    ...Array.from({ length: MAX_LAYERS }, (_, i) => ({
      id: `select${i + 1}`, label: `Select layer ${i + 1}`, group: 'Layers', continuous: false,
    })),
    ...Array.from({ length: MAX_LAYERS - 1 }, (_, i) => ({
      id: `blend${i + 2}`, label: `Layer ${i + 2} blend mode`, group: 'Layers', continuous: false,
    })),
    { id: 'layer.prev', label: 'Select previous layer', group: 'Layers', continuous: false },
    { id: 'layer.next', label: 'Select next layer', group: 'Layers', continuous: false },
    { id: 'set:size', label: 'Size / zoom', group: 'Set knobs (selected visual)', continuous: true },
    { id: 'set:count', label: 'How many', group: 'Set knobs (selected visual)', continuous: true },
    { id: 'set:tunnel', label: 'Feedback tunnel (middle = none)', group: 'Set knobs (selected visual)', continuous: true },
    { id: 'set:spiral', label: 'Feedback spiral (middle = none)', group: 'Set knobs (selected visual)', continuous: true },
    { id: 'set:sphere', label: 'Sphere: points → outline', group: 'Set knobs (selected visual)', continuous: true },
    { id: 'set:fall', label: 'Clouds fall / Stars dive', group: 'Set knobs (selected visual)', continuous: true },
    { id: 'fadeTime', label: 'Transition length (FADE)', group: 'Tempo & set', continuous: true },
    ...KNOB_FX.map((fx) => ({
      id: `knob:${fx.name}`, label: `${fx.name} amount`, group: 'Effect knobs (selected layer)', continuous: true,
    })),
    { id: 'fx', label: 'All effects on/off', group: 'Effects on/off', continuous: false },
    ...effectNames.map((name) => ({
      id: `fx:${name}`, label: name, group: 'Effects on/off', continuous: false,
    })),
    { id: 'count.up', label: 'More objects / zoom in', group: 'Selected visual', continuous: false },
    { id: 'count.down', label: 'Fewer objects / zoom out', group: 'Selected visual', continuous: false },
    { id: 'hue', label: 'Hue', group: 'Selected visual', continuous: true },
    { id: 'saturation', label: 'Saturation', group: 'Selected visual', continuous: true },
    { id: 'autohue', label: 'Auto colour on/off', group: 'Selected visual', continuous: false },
    { id: 'mode', label: 'Hands ↔ audio', group: 'Drive', continuous: false },
    { id: 'gain', label: 'Audio gain', group: 'Drive', continuous: true },
    { id: 'hands', label: 'Hands drive (selected layer)', group: 'Drive', continuous: true },
    { id: 'tap', label: 'Tap tempo', group: 'Tempo & set', continuous: false },
    { id: 'tempo.down', label: 'Tempo −0.5', group: 'Tempo & set', continuous: false },
    { id: 'tempo.up', label: 'Tempo +0.5', group: 'Tempo & set', continuous: false },
    { id: 'pilot', label: 'Auto-pilot on/off', group: 'Tempo & set', continuous: false },
    { id: 'next', label: 'Next visual', group: 'Tempo & set', continuous: false },
    { id: 'script', label: 'Roteiro: start / pause / carry on', group: 'Tempo & set', continuous: false },
    { id: 'prev', label: 'Previous visual', group: 'Tempo & set', continuous: false },
    ...Array.from({ length: KEYED }, (_, i) => ({
      id: `slot${i + 1}`, label: `Visual ${slotKey(i)}`, group: 'Visuals', continuous: false,
    })),
    { id: 'master', label: 'Master', group: 'Output', continuous: true },
    { id: 'blackout', label: 'Blackout on/off', group: 'Output', continuous: false },
    { id: 'record', label: 'Record on/off', group: 'Output', continuous: false },
  ], [effectNames]);

  const motionToUnit = (m: number) => (m - MOTION_MIN) / (MOTION_MAX - MOTION_MIN);
  const unitToMotion = (v: number) => Math.round((MOTION_MIN + v * (MOTION_MAX - MOTION_MIN)) * 100) / 100;

  /** Where each effect knob was last turned to, for its whole-step values. */
  const knobSent = useRef<Record<string, number>>({});

  /** Pads held down, waiting to see whether they are a tap or a hold. */
  const midiHold = useRef<Record<string, { fired: boolean; timer: number }>>({});

  // What each control does, against the state of this render.
  const midiAct = useRef<(target: string, value: number) => void>(() => {});
  midiAct.current = (target, value) => {
    if (target.endsWith('#press')) {
      const id = target.slice(0, -6);
      if (id === 'tap') tap();
      else if (id === 'script') scriptRef.current();
      else if (id === 'tempo.down') nudgeTempo(-0.5);
      else if (id === 'tempo.up') nudgeTempo(0.5);
      else if (id === 'pilot') setPilotOn((p) => !p);
      else if (id === 'next' || id === 'prev') {
        cyclePattern(id);
        const at = set.indexOf(currentPattern);
        const to = set[at === -1 ? (id === 'next' ? 0 : set.length - 1) : (at + (id === 'next' ? 1 : -1) + set.length) % set.length];
        if (to) flash(RENDERER_CATEGORIES[to].name);
      }
      else if (id === 'layer.next' || id === 'layer.prev') {
        // Said on screen, so the step is seen even when the panel is hidden.
        if (layers.length < 2) { flash('Only one layer on'); return; }
        const to = (selectedLayer + (id === 'layer.next' ? 1 : -1) + layers.length) % layers.length;
        setSelectedLayer(to);
        flash(`Layer ${to + 1} · ${RENDERER_CATEGORIES[layers[to].pattern].short}`);
      }
      else if (id === 'blackout') setBlackout((b) => !b);
      else if (id === 'count.up') stepCount(1);
      else if (id === 'count.down') stepCount(-1);
      else if (id === 'autohue') {
        flash(autoHueEnabled ? 'Auto colour off' : 'Auto colour on');
        setAutoHueEnabled((a) => !a);
      }
      else if (id === 'mode') {
        flash(audioEnabled ? 'Hands drive' : 'Audio drives');
        setAudioEnabled((a) => !a);
      }
      else if (/^blend\d$/.test(id)) {
        const index = Number(id.slice(5)) - 1;
        const layer = layers[index];
        if (layer) {
          const blend = nextBlend(layer.blend);
          setLayers((prev) => prev.map((l, i) => (i === index ? { ...l, blend } : l)));
          flash(`Layer ${index + 1} · ${BLEND_LABEL[blend]}`);
        }
      }
      else if (id.startsWith('select')) {
        const index = Number(id.slice(6)) - 1;
        if (index < layers.length) setSelectedLayer(index);
      }
      else if (id === 'record') void toggleRecording();
      else if (id === 'fx') toggleFx();
      else if (id.startsWith('fx:')) toggleFxStage(id.slice(3));
      else if (id.startsWith('slot')) {
        // Like the number keys: tap switches, hold stacks.
        const pattern = set[Number(id.slice(4)) - 1];
        if (!pattern) return;
        clearTimeout(midiHold.current[id]?.timer);
        const hold = { fired: false, timer: 0 };
        hold.timer = window.setTimeout(() => { hold.fired = true; toggleLayer(pattern); }, HOLD_MS);
        midiHold.current[id] = hold;
      }
      return;
    }
    if (target.endsWith('#release')) {
      const id = target.slice(0, -8);
      const hold = midiHold.current[id];
      if (!hold) return;
      clearTimeout(hold.timer);
      delete midiHold.current[id];
      const pattern = set[Number(id.slice(4)) - 1];
      if (!hold.fired && pattern) setCurrentPattern(pattern);
      return;
    }
    const layer = /^layer(\d)$/.exec(target);
    const drive = /^motion(\d)$/.exec(target);
    if (layer) setLayerOpacity(Number(layer[1]) - 1, Math.round(value * 100) / 100);
    else if (drive) {
      const index = Number(drive[1]) - 1;
      setLayers((prev) => prev.map((l, i) => (i === index ? { ...l, motion: unitToMotion(value) } : l)));
    }
    else if (target === 'hands') setMotion(unitToMotion(value));
    else if (target === 'gain') setAudioSensitivity(Math.round(value * 100) / 100);
    else if (target === 'hue') setHue(Math.round(value * 359));
    else if (target === 'saturation') setSaturation(Math.round(value * 100));
    else if (target === 'master') setMaster(Math.round(value * 100) / 100);
    else if (target.startsWith('set:')) turnSetKnob(target.slice(4), value);
    else if (target === 'fadeTime') {
      // Finer at the short end, where most of the choosing is.
      const s = Math.round(value * value * 120) / 10;
      setFade(s);
      flash(s <= 0 ? 'Cut' : `Fade ${s}s`);
    }
    else if (target.startsWith('knob:')) {
      const fx = KNOB_FX.find((k) => k.name === target.slice(5));
      if (fx) { knobSent.current[target] = value; turnFx(fx, value); }
    }
  };

  // Where each continuous target stands now, so a fader out of step picks up
  // rather than jumps.
  const midiRead = useRef<(target: string) => number | undefined>(() => undefined);
  // Taken as of this render, so it agrees with the state the reader sees —
  // the ref itself runs ahead of the state while a knob is turning.
  const knobSentNow = { ...knobSent.current };
  midiRead.current = (target) => {
    const layer = /^layer(\d)$/.exec(target);
    if (layer) return layers[Number(layer[1]) - 1]?.opacity;
    const drive = /^motion(\d)$/.exec(target);
    if (drive) {
      const l = layers[Number(drive[1]) - 1];
      return l ? motionToUnit(l.motion) : undefined;
    }
    if (target === 'hands') return motionToUnit(motion);
    if (target === 'gain') return audioSensitivity;
    if (target === 'hue') return hue / 359;
    if (target === 'saturation') return saturation / 100;
    if (target === 'master') return master;
    if (target.startsWith('set:')) return readSetKnob(target.slice(4));
    if (target === 'fadeTime') return Math.sqrt(Math.max(0, Math.min(12, fade)) / 12);
    if (target.startsWith('knob:')) {
      const fx = KNOB_FX.find((k) => k.name === target.slice(5));
      const group = PIPELINE_PARAMS.groups.find((g) => g.name === fx?.name);
      if (!fx || !group?.togglePath) return undefined;
      const read = (path: string) => (fxParams[path] ?? getByPath(PIPELINE_PARAMS.config, path) ?? 0) as number;
      // Off: whatever the knob does next is meant — it turns the effect on there.
      if (read(group.togglePath) < 0.5) return undefined;
      // A knob on whole steps (Echo) sits between them: still where it was
      // turned to, as long as the value is still the one it gave.
      const sentAt = knobSentNow[target];
      if (sentAt !== undefined && sentAt >= KNOB_OFF && knobValue(fx, sentAt) === read(fx.path)) return sentAt;
      return knobPosition(fx, read(fx.path));
    }
    return undefined;
  };

  useEffect(() => {
    setMidiHandler((target, value) => midiAct.current(target, value));
    setMidiReader((target) => midiRead.current(target));
    return () => { setMidiHandler(null); setMidiReader(null); };
  }, []);

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

      // The finish over the whole output (G): off, soft, deep
      if (e.key.toLowerCase() === 'g') {
        setFinish((f) => ((f + 1) % 3) as 0 | 1 | 2);
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

      // Blackout (D) — the whole output to black and back, eased
      if (e.key.toLowerCase() === 'd') {
        setBlackout((b) => !b);
        return;
      }

      // Kaleido (K) and Noise (N) on the selected visual, as their chips do
      if (e.key.toLowerCase() === 'k' || e.key.toLowerCase() === 'n') {
        const [name, stage] = e.key.toLowerCase() === 'k' ? ['Kaleido', 'kaleido'] : ['Noise', 'noiseTile'];
        flash(`${name} ${stageDoing(stage, fxParams) ? 'off' : 'on'}`);
        toggleFxStage(name);
        return;
      }

      // More objects / zoom in (Z), fewer / zoom out (Shift+Z)
      if (e.key.toLowerCase() === 'z') {
        stepCount(e.shiftKey ? -1 : 1);
        return;
      }

      // Auto colour (H)
      if (e.key.toLowerCase() === 'h') {
        flash(autoHueEnabled ? 'Auto colour off' : 'Auto colour on');
        setAutoHueEnabled((a) => !a);
        return;
      }

      // Tempo nudge (, and .), for a grid drifting off the music
      if (e.key === ',' || e.key === '.') {
        nudgeTempo(e.key === ',' ? -0.5 : 0.5);
        const bpm = currentBpm();
        if (bpm) flash(`${bpm} BPM`);
        return;
      }

      // Tap tempo (B). Shift+B forgets a tapped tempo; with none tapped, it
      // turns hearing the tempo from the music off and on.
      if (e.key.toLowerCase() === 'b') {
        if (!e.shiftKey) tap();
        else if (hasTapped()) clearTempo();
        else flash(toggleListening() ? 'Tempo from the music' : 'Tempo by tap only');
        return;
      }

      // Auto-pilot (P)
      if (e.key.toLowerCase() === 'p') {
        setPilotOn((p) => !p);
        return;
      }

      // Back to the library (Escape)
      if (e.key === 'Escape') {
        setView('library');
        return;
      }

      // The cue test: Space puts the cue on screen.
      if (CUE_TEST && e.key === ' ' && cue.length) {
        e.preventDefault();
        goCue();
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
  }, [set, cue, goCue, cyclePattern, toggleFx, setCurrentPattern, toggleLayer, cycleLayer, nudgeLayerOpacity, nudgeMotion, toggleRecording, toggleOutput, flash, toggleFxStage, stepCount, fxParams, autoHueEnabled]);

  // Right-click to toggle UI visibility
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setShowUI(prev => !prev);
    };

    window.addEventListener('contextmenu', handleContextMenu);
    return () => window.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  // The camera preview only ever comes up when she asks for it — the CAM
  // button or C. It used to switch itself on for Face Mesh and Smoke Hand,
  // which put her own face on the wall in the middle of a set.

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

  /*
   * The panel's two tabs: what the visual looks like, and how the hands and
   * the music move it — split so the second is one click away mid-set rather
   * than buried among the look's sliders.
   */
  // Which sliders carry an LFO: read here so the panel shows them.
  const lfos = useLfos();
  const paramLfo = useMemo(() => ({
    get: (path: string) => lfos[`p:${editPattern}`]?.[path],
    set: (path: string, l: Parameters<typeof setLfo>[3]) => setLfo('p', editPattern, path, l),
  }), [lfos, editPattern]);
  const fxLfo = useMemo(() => ({
    get: (path: string) => lfos[`fx:${editPattern}`]?.[path],
    set: (path: string, l: Parameters<typeof setLfo>[3]) => setLfo('fx', editPattern, path, l),
  }), [lfos, editPattern]);

  const panelSections = useMemo<ParamSection[]>(() => {
    const entry = RENDERER_PARAMS[editPattern];
    if (!entry) return [];
    const split = splitPlay(entry);
    let look = split.look;
    const play = split.play;
    let values = paramValues[editPattern] ?? {};
    let onChange = setParam;
    let lfo = paramLfo;
    /*
     * Zoom under the count, for every visual that counts something. The ones
     * with a camera have a Zoom of their own; the rest get the picture's own
     * zoom here (the same one the arrows step for visuals with no count).
     */
    const counts = COUNTS[editPattern];
    const hasOwnZoom = entry.groups.some((g) => g.params.some((p) => p.path.endsWith('.zoom')));
    // A visual with a size of its own is never zoomed as a flat picture.
    if (counts && !hasOwnZoom && !SIZES[editPattern]) {
      const countPath = counts[0].path;
      look = {
        ...look,
        // The panel shows a slider only if the config has a value for it: 1, as drawn.
        config: { ...(look.config as object), [PICTURE_ZOOM]: 1 },
        groups: look.groups.map((g) => {
          const at = g.params.findIndex((p) => p.path === countPath);
          if (at === -1) return g;
          const params = [...g.params];
          params.splice(at + 1, 0, { path: PICTURE_ZOOM, label: 'Zoom', min: ZOOM_MIN, max: ZOOM_MAX, step: 0.05, hint: 'the whole picture, in or out' });
          return { ...g, params };
        }),
      };
      if (zooms[editPattern] !== undefined && zooms[editPattern] !== 1) values = { ...values, [PICTURE_ZOOM]: zooms[editPattern] };
      const pattern = editPattern;
      onChange = (path: string, value: number) => {
        if (path === PICTURE_ZOOM) setZooms((prev) => ({ ...prev, [pattern]: value }));
        else setParam(path, value);
      };
      lfo = {
        // The picture's zoom has no LFO of its own: asked for one, it answers as an unknown slider does.
        get: (path: string) => paramLfo.get(path === PICTURE_ZOOM ? '' : path),
        set: (path: string, l: Parameters<typeof setLfo>[3]) => { if (path !== PICTURE_ZOOM) paramLfo.set(path, l); },
      };
    }
    const pathsOf = (e: typeof look) => new Set(e.groups.flatMap((g) => g.params.map((p) => p.path)));
    const pattern = editPattern;
    const scoped = (paths: Set<string>) => (path?: string) => {
      const reset = (p: string) => {
        if (p === PICTURE_ZOOM) setZooms((prev) => ({ ...prev, [pattern]: 1 }));
        else resetParam(p);
      };
      if (path !== undefined) { reset(path); return; }
      for (const p of paths) reset(p);
    };
    return [
      { key: 'shape', label: 'SHAPE', entry: look, values, onChange, onReset: scoped(pathsOf(look)), lfo },
      {
        key: 'play',
        label: 'Hands & sound',
        icon: (
          <span className="flex items-center gap-0.5">
            <Hand className="h-3 w-3" />
            <AudioLines className="h-3 w-3" />
          </span>
        ),
        entry: play, values, onChange, onReset: scoped(pathsOf(play)), lfo },
    ];
  }, [editPattern, paramValues, setParam, resetParam, paramLfo, zooms]);

  if (view === 'library') {
    return (
      <Library
        set={set}
        onSetChange={setSet}
        savedSets={savedSets}
        setName={setName}
        onSaveSet={saveNamedSet}
        onLoadSet={loadNamedSet}
        onDeleteSet={deleteNamedSet}
        looks={looks}
        params={paramValues}
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
        motion={layers.map((l) => l.motion)}
        colorModes={layers.map((l) => lookFor(l.pattern).colorMode)}
        autoHandData={autoHands}
        autoDrive={idleDrive}
        master={blackout ? 0 : master}
        zoomByPattern={pictureZooms}
        finish={finish}
        fadeSeconds={fade}
        outputSize={outputSize}
        fxByPattern={fxByPattern}
        onCanvasReady={(canvas) => {
          canvasRef.current = canvas;
          // The canvas is replaced rather than reused when the pipeline falls
          // back to 2D, and the projector's stream dies with the old one.
          outputRef.current?.attach(canvas);
        }}
      />

      {/* Camera Feed - Always running for hand tracking, but only visible when showCamera is true */}
      {/* In a portrait window (a phone-shaped screen recording) the corner is 20%
          smaller and sits below the strip Instagram covers at the top. */}
      <div className={`absolute top-4 right-4 origin-top-right portrait:top-[calc(14vh-55px)] portrait:scale-80 ${showCamera ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
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
          showing={editPattern}
          header={
            <>
            {CUE_TEST && cue.length > 0 && (
              <div className="flex items-center gap-2 border-b border-cyan-300/30 bg-cyan-300/10 px-3 py-2">
                <span className="min-w-0 flex-1 text-[10px] leading-tight text-cyan-50/90">
                  NEXT <span className="font-semibold">{cue.map((p) => RENDERER_CATEGORIES[p].short).join(' + ')}</span>
                  <span className="block text-[9px] text-cyan-50/50">right-click to add · again to edit · again to drop</span>
                </span>
                <button onClick={goCue} title="Space" className="shrink-0 rounded bg-cyan-300 px-2 py-0.5 text-[9px] font-semibold text-black">GO</button>
              </div>
            )}
            {CUE_TEST && preparing && (
              <div className="flex items-center gap-2 border-b border-amber-300/30 bg-amber-300/10 px-3 py-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                <span className="min-w-0 flex-1 text-[10px] leading-tight text-amber-100/90">
                  PREPARING <span className="font-semibold">{RENDERER_CATEGORIES[preparing].name}</span>
                  <span className="block text-[9px] text-amber-100/50">not on screen · kept for when it plays</span>
                </span>
                <button
                  onClick={() => setPreparing(null)}
                  title="Back to the visual that is playing"
                  className="shrink-0 rounded bg-amber-300 px-2 py-0.5 text-[9px] font-semibold text-black"
                >
                  DONE
                </button>
              </div>
            )}
            <LayerStrip
              layers={layers}
              selectedLayer={selectedLayer}
              set={set}
              onSelect={setSelectedLayer}
              onOpacityChange={setLayerOpacity}
              onRemove={removeLayer}
              onMove={moveLayer}
              onBlendChange={(index, blend) =>
                setLayers((prev) => prev.map((l, i) => (i === index ? { ...l, blend } : l)))}
            />
            </>
          }
          sections={panelSections}
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
          lfo={fxLfo}
          layerLabel={
            preparing
              ? `${RENDERER_CATEGORIES[preparing].short} · preparing`
              : layers.length > 1
                ? `L${selectedLayer + 1} ${RENDERER_CATEGORIES[currentPattern].short}`
                : RENDERER_CATEGORIES[currentPattern].short
          }
        />
      )}

      {/* The set's clock, top right: started when the set starts. */}
      {showUI && <SetTimer underCamera={showCamera} />}
      {showUI && view === 'vj' && (
        <ScriptPanel
          underCamera={showCamera}
          steps={steps.length}
          step={run.step}
          label={stepPatterns(run.step).map((p) => RENDERER_CATEGORIES[p].short).join(' + ')}
          left={run.state === 'running' ? run.endsAt - scriptNow : run.left}
          state={run.state}
          onPlay={startOrResume}
          onStop={stopScript}
          onStep={moveStep}
          text={scriptText}
          onText={(t) => { setScriptText(t); saveScript(setName, t); }}
        />
      )}

      {/* Tempo, auto-pilot, health and MIDI: what runs the set over time. */}
      {showUI && (
        <StatusBar
          pilotOn={pilotOn}
          pilotBars={pilotBars}
          pilotSince={pilotSince}
          onPilotToggle={() => setPilotOn((p) => !p)}
          onPilotBars={setPilotBars}
          midiTargets={midiTargets}
          master={master}
          blackout={blackout}
          onBlackout={() => setBlackout((b) => !b)}
          notice={notice}
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
          onSetReorder={reorderSet}
          onSetRemove={removeFromSet}
          handsDriving={handsDriving}
          onOpenLibrary={() => setView('library')}
          setName={setName}
          onSaveSet={saveNamedSet}
          preparing={CUE_TEST ? preparing : null}
          onPrepare={CUE_TEST ? setPreparing : () => {}}
          {...(CUE_TEST ? { cue, onCue: cueTo, onGo: goCue, onCueClear: clearCue } : {})}
          fade={fade}
          onFadeChange={setFade}
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
          finish={finish}
          onFinishCycle={() => setFinish((f) => ((f + 1) % 3) as 0 | 1 | 2)}
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