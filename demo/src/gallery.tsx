import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Performances as a strip: the takes from the night in a row, horizontal and
 * upright mixed. The one in the middle is large, lifted and playing with its
 * sound; the others sit smaller and lower, alternating, a little behind it.
 * Moved by dragging, the wheel, the arrows or a swipe, and by the ruler under
 * it; it glides and settles on a take, with a short tick on phones that can.
 */

type Take = { id: string; name: string; tall: boolean };
// In the order of the night: as they come in her set (Origem, slots 1–23).
const TAKES: Take[] = [
  { id: 'w3', name: 'Dust', tall: false },     // 1
  { id: 't3', name: 'Sphere', tall: true },    // 4
  { id: 'w2', name: 'Line', tall: false },     // 6
  { id: 'w5', name: 'Bloom', tall: false },    // 12
  { id: 'w1', name: 'Atlas', tall: false },    // 21
  { id: 't2', name: 'Machine', tall: true },   // 22
  { id: 't1', name: 'Standby', tall: true },   // 23
];
const pad = (n: number) => String(n).padStart(2, '0');
const clock = (s: number) => `${pad(Math.floor(s / 60))}:${pad(Math.floor(s % 60))}`;

export function Gallery() {
  const [pos, setPos] = useState(0); // where the strip is, in takes (fractional while moving)
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState({ at: 0, of: 20 });
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  const vids = useRef<(HTMLVideoElement | null)[]>([]);
  const motion = useRef({ pos: 0, vel: 0, target: 0, dragging: false, lastX: 0, lastT: 0, raf: 0, downX: 0, downOn: -1 });

  useEffect(() => {
    const r = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);

  // The glide: towards the target take, eased like a spring, never a jump.
  const run = useCallback(() => {
    const m = motion.current;
    cancelAnimationFrame(m.raf);
    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!m.dragging) {
        const k = 90, c = 19; // stiffness, damping
        m.vel += ((m.target - m.pos) * k - m.vel * c) * dt;
        m.pos += m.vel * dt;
      }
      setPos(m.pos);
      if (m.dragging || Math.abs(m.target - m.pos) > 0.0008 || Math.abs(m.vel) > 0.002) m.raf = requestAnimationFrame(step);
      else { m.pos = m.target; setPos(m.pos); }
    };
    m.raf = requestAnimationFrame(step);
  }, []);

  const go = useCallback((i: number) => {
    const m = motion.current;
    m.target = Math.max(0, Math.min(TAKES.length - 1, Math.round(i)));
    run();
  }, [run]);

  // The take that is landed on: it plays with its sound, the rest are still.
  useEffect(() => {
    const now = Math.round(pos);
    if (now !== active) {
      setActive(now);
      try { navigator.vibrate?.(8); } catch { /* not on this phone */ }
    }
  }, [pos, active]);
  useEffect(() => {
    vids.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.muted = muted;
        v.play().catch(() => { v.muted = true; setMuted(true); v.play().catch(() => {}); });
      } else { v.pause(); v.muted = true; }
    });
  }, [active, muted]);

  // Keys, the wheel.
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(motion.current.target + 1);
      if (e.key === 'ArrowLeft') go(motion.current.target - 1);
      if (e.key === ' ') { const v = vids.current[active]; if (v) { e.preventDefault(); if (v.paused) void v.play(); else v.pause(); } }
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [go, active]);
  const wheelAt = useRef(0);
  const onWheel = (e: React.WheelEvent) => {
    const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(d) < 8 || performance.now() - wheelAt.current < 380) return;
    wheelAt.current = performance.now();
    go(motion.current.target + Math.sign(d));
  };

  // Dragging and swiping: the strip follows the finger, then settles where it was thrown.
  const spacing = Math.min(size.w * (size.w < 720 ? 0.56 : 0.29), 460);
  const onDown = (e: React.PointerEvent) => {
    const m = motion.current;
    m.dragging = true; m.lastX = e.clientX; m.lastT = performance.now(); m.vel = 0;
    m.downX = e.clientX;
    m.downOn = Number((e.target as Element).closest('[data-i]')?.getAttribute('data-i') ?? -1);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    run();
  };
  const onMove = (e: React.PointerEvent) => {
    const m = motion.current;
    if (!m.dragging) return;
    const now = performance.now();
    const dx = (e.clientX - m.lastX) / spacing;
    m.pos = Math.max(-0.4, Math.min(TAKES.length - 0.6, m.pos - dx));
    m.vel = -dx / Math.max(0.008, (now - m.lastT) / 1000);
    m.lastX = e.clientX; m.lastT = now;
  };
  const onUp = (e: React.PointerEvent) => {
    const m = motion.current;
    if (!m.dragging) return;
    m.dragging = false;
    // A tap (no drag) on a take goes to it; a throw settles where it carries.
    if (Math.abs(e.clientX - m.downX) < 6 && m.downOn >= 0) m.target = m.downOn;
    else m.target = Math.max(0, Math.min(TAKES.length - 1, Math.round(m.pos + m.vel * 0.18)));
    run();
  };

  // The ruler: drag along it to scrub through the takes.
  const ruler = useRef<HTMLDivElement>(null);
  const scrub = (e: React.PointerEvent) => {
    const r = ruler.current?.getBoundingClientRect();
    if (!r) return;
    go(((e.clientX - r.left) / r.width) * (TAKES.length - 1));
  };

  const phone = size.w < 720;
  const wideW = Math.min(size.w * (phone ? 0.86 : 0.48), 760);
  const wideH = (wideW * 9) / 16;
  const tallH = Math.min(size.h * (phone ? 0.5 : 0.56), phone ? 460 : 520);
  const tallW = (tallH * 9) / 16;
  const take = TAKES[active];

  return (
    <div className="gal" onWheel={onWheel}>
      <p className="gal-sub">NISCHE AT KULTUR BUNKER — STUTTGART, NOV 2026 — {TAKES.length} TAKES</p>

      <div className="gal-stage" onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
        {TAKES.map((t, i) => {
          const d = i - pos;
          const a = Math.min(1, Math.abs(d));
          const w = t.tall ? tallW : wideW;
          const h = t.tall ? tallH : wideH;
          const scale = 1 - 0.42 * a;
          // Lifted in the middle; the others lower, alternating, a little behind it.
          const drop = (i % 2 ? 0.16 : 0.07) * size.h * a;
          const x = d * spacing;
          return (
            <div
              key={t.id}
              className={`gal-card ${i === active ? 'on' : ''}`}
              style={{
                width: w, height: h,
                transform: `translate(-50%, -50%) translate(${x}px, ${drop - (1 - a) * 14}px) scale(${scale})`,
                zIndex: 100 - Math.round(Math.abs(d) * 10),
                opacity: Math.max(0, 1 - 0.5 * a - 0.25 * Math.max(0, Math.abs(d) - 1)),
              }}
              data-i={i}
              role="group" aria-label={`${pad(i + 1)} ${t.name}`}
            >
              <video
                ref={(el) => { vids.current[i] = el; }}
                src={`/media/${t.id}.mp4`}
                poster={`/media/${t.id}.jpg`}
                loop playsInline preload={Math.abs(d) < 1.5 ? 'auto' : 'metadata'}
                disablePictureInPicture disableRemotePlayback muted
                onTimeUpdate={(e) => { if (i === active) setTime({ at: e.currentTarget.currentTime, of: e.currentTarget.duration || 20 }); }}
              />
              {i === active && (
                <span className="gal-hud">
                  <span className="lime">▶ {t.name.toUpperCase()}</span>
                  <span>{clock(time.at)} / {clock(time.of)}</span>
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="gal-ruler-wrap">
        <div className="gal-names">
          {TAKES.map((t, i) => (
            <button key={t.id} type="button" className={i === active ? 'on' : ''} onClick={() => go(i)}>
              {pad(i + 1)}<span className="nm"> {t.name.toUpperCase()}</span>
            </button>
          ))}
        </div>
        <div className="gal-ruler" ref={ruler} onPointerDown={(e) => { (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); scrub(e); }} onPointerMove={(e) => { if (e.buttons) scrub(e); }}>
          <span className="gal-mark" style={{ left: `${(Math.max(0, Math.min(TAKES.length - 1, pos)) / (TAKES.length - 1)) * 100}%` }} />
        </div>
      </div>

      <div className="gal-foot">
        <span>{take.tall ? '9:16' : '16:9'} · {clock(time.of)} · {pad(active + 1)} / {pad(TAKES.length)}</span>
        <span className="gal-btns">
          <button type="button" onClick={() => setMuted((m) => !m)} aria-label={muted ? 'Sound on' : 'Sound off'}>{muted ? '♪ OFF' : '♪ ON'}</button>
          <button type="button" onClick={() => go(motion.current.target - 1)} aria-label="Previous">←</button>
          <button type="button" onClick={() => go(motion.current.target + 1)} aria-label="Next">→</button>
        </span>
      </div>
    </div>
  );
}
