import { StrictMode, useCallback, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import type { AudioData, Hand, HandData } from '@/App';
import { DustRenderer } from '@/components/renderers/DustRenderer';
import { FirstLineRenderer } from '@/components/renderers/FirstLineRenderer';
import { DandelionRenderer } from '@/components/renderers/DandelionRenderer';
import { JellyfishRenderer } from '@/components/renderers/JellyfishRenderer';
import { StandbyRenderer } from '@/components/renderers/StandbyRenderer';
import { MorphingSphereRenderer } from '@/components/renderers/MorphingSphereRenderer';
import { MacroRenderer } from '@/components/renderers/MacroRenderer';
import { HandTracker } from '@/components/HandTracker';
import { analyse, createState, AnalyserState } from '@/audio/analyse';
import { generateColors } from '@/config/palette';
import { advanceClock, useLayerClock } from '@/motion/clock';
import { createGestureState, gestureRate } from '@/hands/gesture';
import { THUMBS } from './thumbs';
import { Pages, PageName } from './pages';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE HAND PLAYS — the public demo
 * ═══════════════════════════════════════════════════════════════════════════
 * A small corner of the instrument to try: three of its visuals, a few
 * tracks, the hand through the camera — or the mouse, for anyone who does
 * not let the camera in. Only these three visuals are built into this site.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Visual = 'dust' | 'line' | 'dandelion' | 'jellyfish' | 'standby' | 'sphere';
const VISUALS: { id: Visual; name: string; note: string }[] = [
  { id: 'dust', name: 'Dust', note: 'a fist gathers it into a circle' },
  { id: 'sphere', name: 'Planet', note: 'a fist pulls it out of shape' },
  { id: 'line', name: 'Line', note: 'an open hand unfolds it' },
  { id: 'jellyfish', name: 'Jelly', note: 'a fist closes the bells' },
  { id: 'dandelion', name: 'Dandelion', note: 'the hand moves the wind' },
  { id: 'standby', name: 'Standby', note: 'a fist closes the picture to a point' },
];
/** Each visual's look for the demo: its colours and a few settings. */
const LOOKS: Record<Visual, { colors: string[]; params: Record<string, number> }> = {
  // Softer on the kick: the music moves it without big jolts.
  // Alive before the music is: more drift, more resting light, a longer trail, so the slow opening is never empty.
  dust: { colors: generateColors(0, 0, 'grayscale'), params: { 'look.glow': 2.2, 'field.size': 1.3, 'field.drift': 1.8, 'look.trail': 0.55, 'sound.beat': 0.35, 'sound.sparks': 1.5 } },
  line: {
    colors: generateColors(0, 0, 'grayscale'),
    params: {
      'line.zoom': 0.9, 'line.weight': 1.4, 'line.wave': 2.65, 'line.speed': 0.65, 'line.birth': 2.85,
      'hands.open': 1, 'hands.pull': 1, 'hands.clap': 1, 'sound.beat': 0.7, 'sound.bass': 2, 'sound.grow': 0.75,
    },
  },
  dandelion: {
    colors: generateColors(200, 60, 'black'),
    params: { 'field.sway': 1.9, 'field.bounce': 0.8, 'field.drift': 0.44, 'field.backdrop': 0, 'colour.speed': 2.5, 'colour.offset': 0, 'colour.palette': 0, 'colour.depth': 0.32 },
  },
  // All in blues (the Ink palette), carried further by the music, swelling apart on a heavy bass hit.
  jellyfish: { colors: generateColors(215, 70, 'black'), params: { 'swarm.backdrop': 0, 'swarm.height': 0.3, 'swarm.arrival': 11, 'colour.palette': 3, 'sound.flow': 1.7, 'swarm.drift': 1.3, 'sound.swell': 1.2, 'sound.beat': 0.6 } },
  standby: { colors: generateColors(0, 0, 'grayscale'), params: { 'sound.quiet': 0.4, 'grid.words': 0 } },
  sphere: {
    colors: generateColors(0, 0, 'grayscale'),
    params: { 'shape.style': 2, 'shape.size': 1.2, 'shape.morph': 0.32, 'shape.lobes': 1.05, 'shape.detail': 2, 'motion.spin': 0.4, 'motion.flow': 1, 'motion.dust': 1, 'sound.beat': 0 },
  },
};

/** Her Colour effect for a visual, as on her stage: hue (radians), saturation, contrast. */
const GRADE: Partial<Record<Visual, string>> = {
  dandelion: 'hue-rotate(2.59rad) saturate(0.95) contrast(1.28)',
};

/** The Ink Wing under the jellyfish, turned towards deep blue. */
const INK_COLORS = generateColors(110, 70, 'contrast');

/** "Amount": how many things each visual shows, from few to many. */
const AMOUNT: Record<Visual, { path: string; min: number; max: number; start: number }> = {
  dust: { path: 'field.count', min: 200, max: 5000, start: 0.6 },
  line: { path: 'line.count', min: 1, max: 40, start: 11 / 39 },
  dandelion: { path: 'field.count', min: 1, max: 12, start: 0.2 },
  jellyfish: { path: 'swarm.count', min: 1, max: 8, start: 0.43 },
  standby: { path: 'grid.detail', min: 0.2, max: 1, start: 0.38 },
  sphere: { path: 'motion.points', min: 0, max: 6000, start: 0.6 },
};

const TRACKS: { name: string; src: string }[] = [
  { name: 'Johannex · m4n4th', src: '/tracks/m4n4th.mp3' },
];

type Renderer = {
  render: (h: HandData, c: string[], a?: AudioData) => void;
  setParams?: (v: Record<string, number>) => void;
  setVideoElement?: (v: HTMLVideoElement) => void;
  destroy?: () => void;
};
/**
 * Jelly, as on her stage: the jellyfish (black and white, hard contrast) in
 * Screen over a dim Ink Wing turned towards blue. Each draws on a canvas of
 * its own; the amount and the jellyfish's settings go to the jellyfish.
 */
class JellyStack implements Renderer {
  private parts: { r: Renderer; c: HTMLCanvasElement; filter: string; alpha: number; blend: GlobalCompositeOperation; colors: string[] }[];
  constructor(private canvas: HTMLCanvasElement, private ctx: CanvasRenderingContext2D) {
    const make = () => { const c = document.createElement('canvas'); c.width = canvas.width; c.height = canvas.height; return c; };
    const ink = make(), jelly = make();
    const inkR = new MacroRenderer(ink, ink.getContext('2d')!, 0);
    inkR.setParams({ 'look.flow': 2.65, 'look.zoom': 2.85, 'look.detail': 2, 'look.veins': 1.35, 'look.grain': 0.3 });
    this.parts = [
      { r: inkR, c: ink, filter: 'hue-rotate(-0.2rad) contrast(1.3)', alpha: 0.45, blend: 'source-over', colors: INK_COLORS },
      { r: new JellyfishRenderer(jelly, jelly.getContext('2d')!), c: jelly, filter: 'hue-rotate(3.14rad) saturate(0) contrast(2.25)', alpha: 0.94, blend: 'screen', colors: LOOKS.jellyfish.colors },
    ];
  }
  setParams(v: Record<string, number>) { this.parts[1].r.setParams?.(v); }
  render(h: HandData, _c: string[], a?: AudioData) {
    const { canvas, ctx } = this;
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (const p of this.parts) {
      if (p.c.width !== canvas.width || p.c.height !== canvas.height) { p.c.width = canvas.width; p.c.height = canvas.height; }
      p.r.render(h, p.colors, a);
      ctx.globalAlpha = p.alpha;
      if (p.blend === 'screen') {
        // In front: the ink is first taken out where a jellyfish is (by its
        // brightness), then the jellyfish goes in — so the ink never shows through.
        ctx.filter = `${p.filter} invert(1)`;
        ctx.globalCompositeOperation = 'multiply';
        ctx.drawImage(p.c, 0, 0);
        ctx.globalCompositeOperation = 'lighter';
      } else ctx.globalCompositeOperation = p.blend;
      ctx.filter = p.filter;
      ctx.drawImage(p.c, 0, 0);
    }
    ctx.filter = 'none';
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }
  destroy() { for (const p of this.parts) p.r.destroy?.(); }
}

function build(v: Visual, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): Renderer {
  return v === 'dust' ? new DustRenderer(canvas, ctx)
    : v === 'line' ? new FirstLineRenderer(canvas, ctx)
      : v === 'jellyfish' ? new JellyStack(canvas, ctx)
        : v === 'standby' ? new StandbyRenderer(canvas, ctx)
          : v === 'sphere' ? new MorphingSphereRenderer(canvas, ctx)
          : new DandelionRenderer(canvas, ctx);
}
const paramsFor = (v: Visual, amount: number) => {
  const a = AMOUNT[v];
  const n = a.min + amount * (a.max - a.min);
  return { ...LOOKS[v].params, [a.path]: a.max > 2 ? Math.round(n) : n };
};

/** Where the guide sits: next to the thing to act on, with its arrow towards it. */
function guideAt(sel: string): React.CSSProperties {
  const el = document.querySelector(sel);
  if (!el || sel === '.stage') return { top: '42%', left: '50%', transform: 'translate(-50%, -50%)' };
  const r = el.getBoundingClientRect();
  // On a phone the bar is small: the guide sits above all of it, pointing down.
  if (window.innerWidth <= 720 && (sel === '.track' || sel === '.cards')) {
    const d = document.querySelector('.desk')?.getBoundingClientRect();
    const t = el.getBoundingClientRect();
    if (d) return { top: d.top - 16, left: Math.min(window.innerWidth - 150, Math.max(150, t.left + t.width / 2)), transform: 'translate(-50%, -100%)' };
  }
  if (sel === '.fx' && window.innerWidth <= 720) {
    const open = document.querySelector('.fx.open')?.getBoundingClientRect();
    if (open) return { top: open.top - 16, left: window.innerWidth / 2, transform: 'translate(-50%, -100%)' };
    const b = document.querySelector('.fxbtn')?.getBoundingClientRect();
    if (b) return { top: b.top - 16, left: Math.min(window.innerWidth - 150, Math.max(150, b.left + b.width / 2)), transform: 'translate(-50%, -100%)' };
  }
  if (sel === '.fx') return { top: r.top + r.height / 2, left: r.left - 14, transform: 'translate(-100%, -50%)' };
  return { top: r.top - 16, left: r.left + r.width / 2, transform: 'translate(-50%, -100%)' };
}

/** Which look the guide has, while one is chosen (?guide=1…5). */
const GUIDE_STYLE = Math.max(1, Math.min(5, Number(new URLSearchParams(location.search).get('guide')) || 2));

const NONE: HandData = { left: null, right: null };
/** How long each visual stays on Auto. */
const AUTO_SECONDS = 30;
const GESTURE_WORDS = ['5 fingers', '2 fingers', 'fist', 'pinch', 'clap'];
const SILENT: AudioData = { bass: 0, lowMid: 0, mid: 0, high: 0, overall: 0, beat: false, beatIntensity: 0, onset: 0 };

/** The mouse as a hand: where it points, held down a fist, a quick click a clap. */
function mouseHand(x: number, y: number, closed: number): Hand {
  return {
    position: { x, y },
    gesture: closed > 0.5 ? 'fist' : 'open',
    openness: 1 - closed,
    fingerCount: closed > 0.5 ? 0 : 3,
    velocity: 0,
  };
}

/** Each step points at where to act. */
const STEPS = [
  { key: 'play', at: '.track', text: 'Play a track — the visual moves with the music.' },
  { key: 'hand', at: '.stage', text: 'Raise your hand to the camera — or move the mouse.' },
  { key: 'fist', at: '.stage', text: 'Close your hand (or hold the mouse button) — then open it.' },
  { key: 'clap', at: '.stage', text: 'Clap (or click quickly).' },
  { key: 'fx', at: '.fx', text: 'Shape it: trail, colour, amount.' },
  { key: 'switch', at: '.cards', text: 'Try another visual.' },
] as const;
type StepKey = (typeof STEPS)[number]['key'];

function Demo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visual, setVisualRaw] = useState<Visual>('dust');
  // Auto: every half minute the next visual melts in. Choosing one by hand
  // starts the half minute again from there.
  const [auto, setAuto] = useState(true);
  const [autoFrom, setAutoFrom] = useState(0);
  const setVisual = (v: Visual) => { setVisualRaw(v); setAutoFrom((n) => n + 1); };
  useEffect(() => {
    if (!auto) return;
    const t = window.setInterval(() => {
      setVisualRaw((v) => VISUALS[(VISUALS.findIndex((x) => x.id === v) + 1) % VISUALS.length].id);
    }, AUTO_SECONDS * 1000);
    return () => window.clearInterval(t);
  }, [auto, autoFrom]);
  const visualRef = useRef(visual);
  visualRef.current = visual;
  // The effects: a trail, the colour turned round, and how many things.
  const [trail, setTrail] = useState(0);
  const [hue, setHue] = useState(0);
  const [amounts, setAmounts] = useState<Record<Visual, number>>(() => Object.fromEntries(VISUALS.map((v) => [v.id, AMOUNT[v.id].start])) as Record<Visual, number>);
  const [fxOpen, setFxOpen] = useState(false);
  const fxRef = useRef({ trail, hue, amounts });
  fxRef.current = { trail, hue, amounts };

  // ── the hand: the camera's, or the mouse ─────────────────────────────────
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const [camera, setCamera] = useState<'off' | 'asking' | 'on' | 'refused'>('off');
  const camHands = useRef<HandData>(NONE);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  videoRef.current = video;
  const mouse = useRef({ x: 0.5, y: 0.5, on: false, down: 0, closed: 0, clapAt: 0, moved: 0 });
  const startCamera = useCallback(async () => {
    setCamera('asking');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 360, facingMode: 'user' } });
      const v = document.createElement('video');
      v.muted = true; v.playsInline = true; v.srcObject = stream;
      await v.play();
      setVideo(v);
      setCamera('on');
    } catch {
      setCamera('refused');
    }
  }, []);

  // The camera is asked for at once: playing by hand is the point.
  useEffect(() => { void startCamera(); }, [startCamera]);

  // ── the music ─────────────────────────────────────────────────────────────
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState<number | null>(null);
  const analysis = useRef<{ ctx: AudioContext; analyser: AnalyserNode; data: Uint8Array; state: AnalyserState } | null>(null);
  const play = useCallback((i: number) => {
    let a = audioRef.current;
    if (!a) {
      a = new Audio();
      a.crossOrigin = 'anonymous';
      a.loop = true;
      audioRef.current = a;
      const ctx = new AudioContext();
      const source = ctx.createMediaElementSource(a);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = 0.55;
      source.connect(analyser);
      analyser.connect(ctx.destination);
      analysis.current = { ctx, analyser, data: new Uint8Array(analyser.frequencyBinCount), state: createState() };
    }
    void analysis.current?.ctx.resume();
    if (playing === i) { a.pause(); setPlaying(null); return; }
    a.src = TRACKS[i].src;
    void a.play();
    setPlaying(i);
  }, [playing]);

  // ── the guide ─────────────────────────────────────────────────────────────
  const [done, setDone] = useState<Set<StepKey>>(new Set());
  // The guide shows once: whoever has been through it (or closed it) is not shown it again.
  const [guide, setGuideRaw] = useState(() => { try { return !localStorage.getItem('n4th-guide-seen'); } catch { return true; } });
  const setGuide = (on: boolean) => { setGuideRaw(on); if (!on) { try { localStorage.setItem('n4th-guide-seen', '1'); } catch { /* private window */ } } };
  const mark = useCallback((k: StepKey) => setDone((d) => (d.has(k) ? d : new Set(d).add(k))), []);
  useEffect(() => { if (playing !== null) mark('play'); }, [playing, mark]);
  const step = STEPS.find((s) => !done.has(s.key));
  useEffect(() => { if (!step) { try { localStorage.setItem('n4th-guide-seen', '1'); } catch { /* private window */ } } }, [step]);

  // ── the loop ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    // The two visuals of a crossfade are mixed here; the stage takes the mix
    // with the trail. Each visual draws on a canvas of its own.
    const mix = document.createElement('canvas');
    const mctx = mix.getContext('2d')!;
    type Layer = { v: Visual; r: Renderer; amount: number; video?: HTMLVideoElement; work: HTMLCanvasElement; alpha: number };
    let current: Layer | null = null;
    let leaving: Layer | null = null;
    /** Seconds one visual takes to melt into the next. */
    const CROSSFADE = 2.5;
    let last = performance.now();
    let raf = 0;
    const gesture = createGestureState();
    let clapSeen = 0, lastSeen = '';
    const fit = (c: HTMLCanvasElement, w: number, h: number) => { if (c.width !== w || c.height !== h) { c.width = w; c.height = h; } };
    const size = () => {
      const k = Math.min(window.devicePixelRatio || 1, 1920 / Math.max(1, window.innerWidth));
      const w = Math.round(window.innerWidth * k), h = Math.round(window.innerHeight * k);
      fit(canvas, w, h); fit(mix, w, h);
      if (current) fit(current.work, w, h);
      if (leaving) fit(leaving.work, w, h);
    };
    const layer = (v: Visual): Layer => {
      const work = document.createElement('canvas');
      work.width = canvas.width; work.height = canvas.height;
      const r = build(v, work, work.getContext('2d')!);
      return { v, r, amount: -1, work, alpha: 0 };
    };
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      size();
      const want = visualRef.current;
      if (!current) { current = layer(want); current.alpha = 1; }
      else if (current.v !== want) {
        // The one on stage starts to leave; the new one comes up through it.
        leaving?.r.destroy?.();
        leaving = current;
        current = layer(want);
      }
      current.alpha = Math.min(1, current.alpha + dt / CROSSFADE);
      if (leaving) {
        leaving.alpha = Math.max(0, leaving.alpha - dt / CROSSFADE);
        if (leaving.alpha <= 0) { leaving.r.destroy?.(); leaving = null; }
      }
      // The camera may arrive after the visual did.
      for (const l of [current, leaving]) {
        if (l && videoRef.current && l.video !== videoRef.current) { l.r.setVideoElement?.(videoRef.current); l.video = videoRef.current; }
      }

      // The hands: the camera's if it sees one, else the mouse while it moves.
      const m = mouse.current;
      m.closed += ((m.down && now - m.down > 220 ? 1 : 0) - m.closed) * Math.min(1, dt * 10);
      let hands: HandData = camHands.current;
      if (!hands.left && !hands.right && m.on && now - m.moved < 4000) {
        hands = { left: mouseHand(m.x, m.y, m.closed), right: null, clapping: now - m.clapAt < 120, clapIntensity: 1 };
      }

      // The music.
      let sound: AudioData = SILENT;
      const an = analysis.current;
      if (an && audioRef.current && !audioRef.current.paused) {
        an.analyser.getByteFrequencyData(an.data);
        // Turned up: the quiet passages still move things, the loud ones only reach the top sooner.
        sound = { ...analyse(an.data, an.ctx.sampleRate, an.state, 0.8, Date.now()), live: true };
      }

      // Which gestures are seen now, for the words in the bar.
      const seenNow = new Set<string>();
      for (const h of [hands.left, hands.right]) {
        if (!h) continue;
        if (h.gesture === 'fist') seenNow.add('fist');
        else if (h.gesture === 'pinch') seenNow.add('pinch');
        else if (h.fingerCount === 2) seenNow.add('2 fingers');
        else if ((h.fingerCount ?? 0) >= 5 || (h.openness ?? 0) > 0.85) seenNow.add('5 fingers');
      }
      if (hands.clapping) clapSeen = now;
      if (now - clapSeen < 500) seenNow.add('clap');
      const key = [...seenNow].sort().join('|');
      if (key !== lastSeen) { lastSeen = key; setLit(seenNow); }

      advanceClock(dt, [gestureRate(hands, gesture, dt)]);
      useLayerClock(0);
      const fx = fxRef.current;

      // Each visual draws, and goes into the mix at its share of the crossfade.
      mctx.globalCompositeOperation = 'source-over';
      mctx.globalAlpha = 1;
      mctx.fillStyle = '#000';
      mctx.fillRect(0, 0, mix.width, mix.height);
      for (const l of [leaving, current]) {
        if (!l) continue;
        const amount = fx.amounts[l.v];
        if (Math.abs(amount - l.amount) > 0.001) { l.r.setParams?.(paramsFor(l.v, amount)); l.amount = amount; }
        l.r.render(hands, LOOKS[l.v].colors, sound);
        // Eased, so the melt starts and ends softly.
        const a = l.alpha * l.alpha * (3 - 2 * l.alpha);
        // Dust is black and white: it is tinted first, so the colour has something to turn.
        const turn = !fx.hue ? ''
          : l.v === 'dust' ? `sepia(1) saturate(5) hue-rotate(${fx.hue - 40}deg)`
            : `hue-rotate(${fx.hue}deg)`;
        mctx.filter = [GRADE[l.v], turn].filter(Boolean).join(' ') || 'none';
        mctx.globalAlpha = a;
        mctx.globalCompositeOperation = 'lighter';
        mctx.drawImage(l.work, 0, 0);
      }
      mctx.filter = 'none';
      mctx.globalCompositeOperation = 'source-over';
      mctx.globalAlpha = 1;

      // Onto the stage: what was there fades by the trail, the new frame over it.
      ctx.globalCompositeOperation = 'source-over';
      // The trail as how long what was there takes to fade: half of it gone
      // after up to a second and a half, growing evenly along the slider.
      const halfLife = fx.trail * fx.trail * 1.5;
      const keep = halfLife < 0.005 ? 0 : Math.exp((-dt * Math.LN2) / halfLife);
      // What was there fades towards black; the new frame goes over it at full
      // strength, keeping whichever is brighter — so the trail never dims the visual.
      ctx.globalAlpha = 1 - keep;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = keep > 0 ? 'lighten' : 'source-over';
      ctx.drawImage(mix, 0, 0);
      ctx.globalCompositeOperation = 'source-over';
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); current?.r.destroy?.(); leaving?.r.destroy?.(); };
  }, []);

  // ── the mouse ─────────────────────────────────────────────────────────────
  const onMove = (e: React.PointerEvent) => {
    const m = mouse.current;
    m.x = e.clientX / window.innerWidth; m.y = e.clientY / window.innerHeight;
    m.on = true; m.moved = performance.now();
    if (camera !== 'on') mark('hand');
  };
  const onDown = (e: React.PointerEvent) => { onMove(e); mouse.current.down = performance.now(); };
  const onUp = () => {
    const m = mouse.current;
    const held = performance.now() - m.down;
    if (m.down && held < 220) { m.clapAt = performance.now(); mark('clap'); }
    if (m.down && held > 400) mark('fist');
    m.down = 0;
  };
  const [seen, setSeen] = useState(false);
  const [lit, setLit] = useState<Set<string>>(new Set());
  const onHands = useCallback((h: HandData) => {
    camHands.current = h;
    setSeen(!!(h.left || h.right));
    if (h.left || h.right) mark('hand');
    if ((h.left?.gesture === 'fist') || (h.right?.gesture === 'fist')) mark('fist');
    if (h.clapping) mark('clap');
  }, [mark]);

  const [page, setPageRaw] = useState<PageName | null>(() => {
    const p = location.pathname.replace(/^\/+|\/+$/g, '') as PageName;
    return (['about', 'instrument', 'performances'] as string[]).includes(p) ? p : null;
  });
  const setPage = (p: PageName | null) => { setPageRaw(p); try { history.replaceState(null, '', '/' + (p ?? '')); } catch {} };

  return (
    <>
      <canvas ref={canvasRef} className="stage" onPointerMove={onMove} onPointerDown={onDown} onPointerUp={onUp} onPointerLeave={() => { mouse.current.on = false; mouse.current.down = 0; }} />
      {video && <HandTracker videoElement={video} onHandData={onHands} />}

      <header className="top">
        <div className="brand">&lt;N4TH&gt;</div>
        <nav>
          {(['about', 'instrument', 'performances'] as PageName[]).map((p) => (
            <button key={p} onClick={() => setPage(p)}>{p}</button>
          ))}
        </nav>
      </header>

      {guide && step && !page && !(fxOpen && window.innerWidth <= 720) && (
        <div className={`guide g${GUIDE_STYLE}`} style={guideAt(step.at)} data-at={step.at}>
          <span className="count">{STEPS.indexOf(step) + 1}/{STEPS.length}</span>
          <span>{step.text}</span>
          {step.key === 'hand' && camera !== 'on' && (
            <button className="cam" onClick={startCamera} disabled={camera === 'asking'}>
              {camera === 'refused' ? 'camera not allowed — the mouse plays' : camera === 'asking' ? '…' : 'allow camera'}
            </button>
          )}
          <button className="x" onClick={() => setGuide(false)} title="Hide the guide">×</button>
        </div>
      )}

      <aside className={`fx ${fxOpen ? 'open' : ''}`} onPointerDown={() => mark('fx')}>
        <div className="fxt">EFFECTS</div>
        <label>Trail<input type="range" min={0} max={1} step={0.01} value={trail} onChange={(e) => setTrail(+e.target.value)} /></label>
        <label>Colour<input type="range" min={0} max={360} step={1} value={hue} onChange={(e) => setHue(+e.target.value)} /></label>
        <label>Amount<input type="range" min={0} max={1} step={0.01} value={amounts[visual]} onChange={(e) => setAmounts((a) => ({ ...a, [visual]: +e.target.value }))} /></label>
      </aside>

      <footer className="desk">
        <div className="cards">
          {VISUALS.map((v, i) => (
            <button key={v.id} className={`card ${visual === v.id ? 'on' : ''}`} onClick={() => { setVisual(v.id); if (v.id !== 'dust') mark('switch'); }} title={v.note}>
              <img src={THUMBS[v.id]} alt="" />
              <span className="num">{i + 1}</span>
              <span className="name">{v.name}</span>
            </button>
          ))}
        </div>
        <div className="sep" />
        <div className="tracks">
          {TRACKS.map((t, i) => (
            <button key={t.src} className={`track ${playing === i ? 'on' : ''}`} onClick={() => play(i)}>
              <span>{playing === i ? '❚❚' : '▶'}</span> {t.name}
            </button>
          ))}
        </div>
        <div className="sep" />
        {/* On a phone the effects wait behind this, centred over the bar when opened. */}
        <button className={`autobtn ${auto ? 'on' : ''}`} onClick={() => setAuto((a) => !a)} title="Auto: the next visual every 30 seconds">auto</button>
        <button className={`fxbtn ${fxOpen ? 'on' : ''}`} onClick={() => { setFxOpen((o) => !o); mark('fx'); }}>FX</button>
        <button className={`camera ${camera === 'on' ? 'on' : ''}`} onClick={camera === 'on' ? undefined : startCamera} title="Play with your hand through the camera">
          {camera === 'on' ? <><span className={`dot ${seen ? 'seen' : ''}`}>●</span> hand</> : camera === 'refused' ? 'mouse' : 'camera'}
        </button>
        {/* What the machine reads of the hand, lit while it sees it. */}
        <div className="words">
          {GESTURE_WORDS.map((w) => <span key={w} className={lit.has(w) ? 'lit' : ''}>{w}</span>)}
        </div>
      </footer>

      {page && <Pages page={page} onClose={() => setPage(null)} onGo={setPage} />}
    </>
  );
}

createRoot(document.getElementById('root')!).render(<StrictMode><Demo /></StrictMode>);
