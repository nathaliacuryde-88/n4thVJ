import { StrictMode, useCallback, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import type { AudioData, Hand, HandData } from '@/App';
import { DustRenderer } from '@/components/renderers/DustRenderer';
import { FirstLineRenderer } from '@/components/renderers/FirstLineRenderer';
import { DandelionRenderer } from '@/components/renderers/DandelionRenderer';
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

type Visual = 'dust' | 'line' | 'dandelion';
const VISUALS: { id: Visual; name: string; note: string }[] = [
  { id: 'dust', name: 'Dust', note: 'a fist gathers it into a circle' },
  { id: 'line', name: 'Line', note: 'an open hand unfolds it' },
  { id: 'dandelion', name: 'Dandelion', note: 'the hand moves the wind' },
];
/** Each visual's look for the demo: its colours and a few settings. */
const LOOKS: Record<Visual, { colors: string[]; params: Record<string, number> }> = {
  dust: { colors: generateColors(0, 0, 'grayscale'), params: { 'look.glow': 1.6, 'field.size': 1.3 } },
  line: { colors: generateColors(268, 70, 'black'), params: { 'line.weight': 1.4 } },
  dandelion: { colors: generateColors(200, 60, 'black'), params: { 'field.count': 3 } },
};

/** "Amount": how many things each visual shows, from few to many. */
const AMOUNT: Record<Visual, { path: string; min: number; max: number; start: number }> = {
  dust: { path: 'field.count', min: 200, max: 5000, start: 0.3 },
  line: { path: 'line.count', min: 1, max: 40, start: 0.33 },
  dandelion: { path: 'field.count', min: 1, max: 12, start: 0.2 },
};

const TRACKS: { name: string; src: string }[] = [
  { name: 'Test track · 124 bpm', src: './tracks/test-124.mp3' },
];

type Renderer = {
  render: (h: HandData, c: string[], a?: AudioData) => void;
  setParams?: (v: Record<string, number>) => void;
  destroy?: () => void;
};
function build(v: Visual, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): Renderer {
  return v === 'dust' ? new DustRenderer(canvas, ctx)
    : v === 'line' ? new FirstLineRenderer(canvas, ctx)
      : new DandelionRenderer(canvas, ctx);
}
const paramsFor = (v: Visual, amount: number) => {
  const a = AMOUNT[v];
  return { ...LOOKS[v].params, [a.path]: Math.round(a.min + amount * (a.max - a.min)) };
};

/** Where the guide sits: next to the thing to act on, with its arrow towards it. */
function guideAt(sel: string): React.CSSProperties {
  const el = document.querySelector(sel);
  if (!el || sel === '.stage') return { top: '42%', left: '50%', transform: 'translate(-50%, -50%)' };
  const r = el.getBoundingClientRect();
  if (sel === '.fx') return { top: r.top + r.height / 2, left: r.left - 14, transform: 'translate(-100%, -50%)' };
  return { top: r.top - 16, left: r.left + r.width / 2, transform: 'translate(-50%, -100%)' };
}

const NONE: HandData = { left: null, right: null };
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
  const [visual, setVisual] = useState<Visual>('dust');
  const visualRef = useRef(visual);
  visualRef.current = visual;
  // The effects: a trail, the colour turned round, and how many things.
  const [trail, setTrail] = useState(0);
  const [hue, setHue] = useState(0);
  const [amounts, setAmounts] = useState<Record<Visual, number>>({ dust: AMOUNT.dust.start, line: AMOUNT.line.start, dandelion: AMOUNT.dandelion.start });
  const fxRef = useRef({ trail, hue, amounts });
  fxRef.current = { trail, hue, amounts };

  // ── the hand: the camera's, or the mouse ─────────────────────────────────
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const [camera, setCamera] = useState<'off' | 'asking' | 'on' | 'refused'>('off');
  const camHands = useRef<HandData>(NONE);
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
  const [guide, setGuide] = useState(true);
  const mark = useCallback((k: StepKey) => setDone((d) => (d.has(k) ? d : new Set(d).add(k))), []);
  useEffect(() => { if (playing !== null) mark('play'); }, [playing, mark]);
  const step = STEPS.find((s) => !done.has(s.key));

  // ── the loop ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    // The visual draws here; the stage takes it with the trail and the colour.
    const work = document.createElement('canvas');
    const wctx = work.getContext('2d')!;
    let current: { v: Visual; r: Renderer; amount: number } | null = null;
    let fade = 1;
    let last = performance.now();
    let raf = 0;
    const gesture = createGestureState();
    const size = () => {
      const k = Math.min(window.devicePixelRatio || 1, 1920 / Math.max(1, window.innerWidth));
      const w = Math.round(window.innerWidth * k), h = Math.round(window.innerHeight * k);
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
      if (work.width !== w || work.height !== h) { work.width = w; work.height = h; }
    };
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      size();
      const want = visualRef.current;
      if (!current || current.v !== want) {
        // Down to black, then the next one comes up.
        fade -= dt * 3;
        if (fade <= 0 || !current) {
          current?.r.destroy?.();
          current = { v: want, r: build(want, work, wctx), amount: -1 };
          fade = 0;
        }
      } else fade = Math.min(1, fade + dt * 1.2);

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
        sound = { ...analyse(an.data, an.ctx.sampleRate, an.state, 0.5, Date.now()), live: true };
      }

      advanceClock(dt, [gestureRate(hands, gesture, dt)]);
      useLayerClock(0);
      const fx = fxRef.current;
      const amount = fx.amounts[current.v];
      if (Math.abs(amount - current.amount) > 0.001) { current.r.setParams?.(paramsFor(current.v, amount)); current.amount = amount; }
      current.r.render(hands, LOOKS[current.v].colors, sound);
      // Onto the stage: what was there fades by the trail, the new frame over it, turned by the colour.
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1 - 0.94 * fx.trail;
      ctx.filter = fx.hue ? `hue-rotate(${fx.hue}deg)` : 'none';
      ctx.drawImage(work, 0, 0);
      ctx.filter = 'none';
      ctx.globalAlpha = 1;
      if (fade < 1) {
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1 - fade;
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
      }
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); current?.r.destroy?.(); };
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
  const onHands = useCallback((h: HandData) => {
    camHands.current = h;
    if (h.left || h.right) mark('hand');
    if ((h.left?.gesture === 'fist') || (h.right?.gesture === 'fist')) mark('fist');
    if (h.clapping) mark('clap');
  }, [mark]);

  const [page, setPage] = useState<PageName | null>(null);

  return (
    <>
      <canvas ref={canvasRef} className="stage" onPointerMove={onMove} onPointerDown={onDown} onPointerUp={onUp} onPointerLeave={() => { mouse.current.on = false; mouse.current.down = 0; }} />
      {video && <HandTracker videoElement={video} onHandData={onHands} />}

      <header className="top">
        <div className="brand">&lt;N4TH&gt;</div>
        <nav>
          {(['about', 'instrument', 'performances', 'contact'] as PageName[]).map((p) => (
            <button key={p} onClick={() => setPage(p)}>{p}</button>
          ))}
        </nav>
      </header>

      {guide && step && !page && (
        <div className="guide" style={guideAt(step.at)} data-at={step.at}>
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

      <aside className="fx" onPointerDown={() => mark('fx')}>
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
        <button className={`camera ${camera === 'on' ? 'on' : ''}`} onClick={camera === 'on' ? undefined : startCamera} title="Play with your hand through the camera">
          {camera === 'on' ? '● hand' : camera === 'refused' ? 'mouse' : 'camera'}
        </button>
      </footer>

      {page && <Pages page={page} onClose={() => setPage(null)} onGo={setPage} />}
    </>
  );
}

createRoot(document.getElementById('root')!).render(<StrictMode><Demo /></StrictMode>);
