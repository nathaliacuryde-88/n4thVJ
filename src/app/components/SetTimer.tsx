import { useEffect, useState } from 'react';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE SET'S CLOCK
 * ═══════════════════════════════════════════════════════════════════════════
 * A stopwatch for the night, in the top-right corner: started when the set
 * starts, it says how long she has been playing and how long is left of the
 * set's length.
 *
 * One click starts it and pauses it. Resetting is only offered while it is
 * paused, so a stray click mid-set cannot throw the count away. It survives
 * a reload: what it keeps is when it was started, not a running number.
 *
 * Never on the projector or in a recording — it is part of her screen only.
 * ═══════════════════════════════════════════════════════════════════════════
 */

interface Saved {
  /** When it was last started (ms since the epoch), or null while paused. */
  since: number | null;
  /** Time counted before that, in ms. */
  banked: number;
  /** The set's length in minutes; 0 for none. */
  length: number;
}

const KEY = 'vj-set-timer';
const LENGTHS = [60, 90, 120, 0, 30, 45];

function load(): Saved {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (raw && typeof raw.banked === 'number' && typeof raw.length === 'number') return raw;
  } catch {
    // Unreadable: start clean.
  }
  return { since: null, banked: 0, length: 60 };
}

function store(saved: Saved) {
  try {
    localStorage.setItem(KEY, JSON.stringify(saved));
  } catch {
    // Storage blocked: the clock still runs, it just will not survive a reload.
  }
}

function clock(ms: number): string {
  const total = Math.floor(Math.max(0, ms) / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

export function SetTimer({ underCamera }: { underCamera: boolean }) {
  const [saved, setSaved] = useState<Saved>(load);
  const [now, setNow] = useState(() => Date.now());
  const running = saved.since !== null;

  useEffect(() => { store(saved); }, [saved]);
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setNow(Date.now()), 250);
    return () => window.clearInterval(id);
  }, [running]);

  const elapsed = saved.banked + (saved.since !== null ? now - saved.since : 0);
  const lengthMs = saved.length * 60000;
  const left = lengthMs - elapsed;
  const over = saved.length > 0 && left < 0;
  const close = saved.length > 0 && !over && left < 5 * 60000;

  const toggle = () => {
    const t = Date.now();
    setNow(t);
    setSaved((s) => (s.since !== null
      ? { ...s, since: null, banked: s.banked + (t - s.since) }
      : { ...s, since: t }));
  };
  const reset = () => setSaved((s) => ({ ...s, since: null, banked: 0 }));
  const cycleLength = () => setSaved((s) => ({ ...s, length: LENGTHS[(LENGTHS.indexOf(s.length) + 1) % LENGTHS.length] ?? 60 }));

  return (
    <div
      className={`absolute right-4 z-50 flex items-center gap-1.5 font-mono transition-[top] ${
        underCamera ? 'top-[120px] right-6' : 'top-4'
      }`}
    >
      {!running && elapsed > 0 && (
        <button
          onClick={reset}
          title="Back to zero (only while paused)"
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/70 text-[12px] text-white/60 backdrop-blur-sm hover:bg-white/15 hover:text-white"
        >
          ↺
        </button>
      )}
      <div className={`flex items-center rounded-full border bg-black/70 backdrop-blur-sm ${
        running ? 'border-white/30' : 'border-white/20'
      }`}>
        <button
          onClick={toggle}
          title={running ? 'Pause the set clock' : elapsed > 0 ? 'Carry on' : 'Start the set clock'}
          className="flex items-center gap-2 py-1.5 pl-3 pr-2"
        >
          <span className={`h-2 w-2 rounded-full ${running ? 'animate-pulse bg-emerald-400' : elapsed > 0 ? 'bg-amber-300' : 'bg-white/30'}`} />
          <span className={`text-[15px] tabular-nums leading-none ${running ? 'text-white' : 'text-white/60'}`}>
            {elapsed > 0 || running ? clock(elapsed) : 'START'}
          </span>
        </button>
        <button
          onClick={cycleLength}
          title="The set's length: click to change. Shows what is left of it."
          className={`border-l border-white/15 py-1.5 pl-2 pr-3 text-[10px] tabular-nums leading-none ${
            over || close ? 'text-amber-300' : 'text-white/40 hover:text-white/70'
          }`}
        >
          {saved.length === 0
            ? 'no end'
            : over
              ? `+${clock(-left)}`
              : elapsed > 0 ? `-${clock(left)}` : `${saved.length} min`}
        </button>
      </div>
    </div>
  );
}
