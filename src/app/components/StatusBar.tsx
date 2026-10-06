import { useEffect, useRef, useState } from 'react';
import { Activity, Gauge, Plane } from 'lucide-react';
import { beatPosition, clearTempo, tap, useTempo } from '../motion/tempo';
import { KNOB_FX } from '../control/knobs';
import { MidiTarget, applyMap, describe, enableMidi, learn, nanoKontrol2Map, unbind, useMidi } from '../control/midi';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE STATUS BAR
 * ═══════════════════════════════════════════════════════════════════════════
 * Top left, small, the things that run the set over time rather than the
 * look of one visual:
 *
 *   TAP        the tempo — tap on the beat (or B); the dot flashes on it
 *   AUTOPILOT  steps through the set every so many bars while she rests
 *   FPS        how the machine is coping; amber, then red, when a stack is
 *              heavier than it can draw smoothly
 *   MIDI       a hardware controller, and what each of its controls does
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const PILOT_BARS = [4, 8, 16, 32, 64];

export function StatusBar({
  pilotOn,
  pilotBars,
  pilotSince,
  onPilotToggle,
  onPilotBars,
  midiTargets,
  master,
  blackout,
  onBlackout,
  notice,
}: {
  pilotOn: boolean;
  pilotBars: number;
  /** When the current visual came up under auto-pilot, performance.now() ms. */
  pilotSince: number;
  onPilotToggle: () => void;
  onPilotBars: (bars: number) => void;
  midiTargets: MidiTarget[];
  master: number;
  blackout: boolean;
  onBlackout: () => void;
  /** A change made from the controller, said for a moment. */
  notice?: string | null;
}) {
  const { bpm } = useTempo();
  const midi = useMidi();
  const [midiOpen, setMidiOpen] = useState(false);
  const dot = useRef<HTMLSpanElement | null>(null);
  const progress = useRef<HTMLDivElement | null>(null);
  const [fps, setFps] = useState(60);

  // One loop for the beat dot, the auto-pilot's progress and the frame rate —
  // written straight to the DOM, so the bar does not re-render every frame.
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    let acc = 0;
    let frames = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const now = performance.now();
      acc += now - last;
      frames++;
      last = now;
      if (acc > 500) {
        setFps(Math.round((frames * 1000) / acc));
        acc = 0;
        frames = 0;
      }
      const at = beatPosition(now);
      if (dot.current) {
        const on = at ? Math.max(0, 1 - at.phase * 4) : 0;
        dot.current.style.opacity = String(0.15 + 0.85 * on);
        dot.current.style.background = at && at.beat % 4 === 0 ? '#67e8f9' : '#ffffff';
      }
      if (progress.current) {
        const bar = bpm ? (4 * 60000) / bpm : 2000;
        const p = pilotOn ? Math.min(1, (now - pilotSince) / (bar * pilotBars)) : 0;
        progress.current.style.width = `${p * 100}%`;
      }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [bpm, pilotOn, pilotSince, pilotBars]);

  const isNano = midi.devices.some((d) => /nanokontrol\s*2/i.test(d));
  const pickupLabel = midi.pickup ? midiTargets.find((t) => t.id === midi.pickup!.target)?.label : null;

  const health = fps >= 50 ? 'text-emerald-300' : fps >= 30 ? 'text-amber-300' : 'text-red-400';
  const groups = [...new Set(midiTargets.map((t) => t.group))];

  return (
    <div className="absolute left-6 top-4 z-[55] font-mono">
      <div className="flex items-center gap-1 rounded-full border border-white/20 bg-black/70 px-2 py-1.5 backdrop-blur-sm">
        {/* Tap tempo */}
        <button
          onClick={(e) => (e.shiftKey ? clearTempo() : tap())}
          title={bpm ? `Tempo ${bpm} BPM — tap on the beat to re-sync (B), shift-click to clear (Shift+B)` : 'Tap on the beat, four times or more, to set the tempo (B)'}
          className="flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] tracking-wider text-white/70 hover:bg-white/10"
        >
          <span ref={dot} className="h-1.5 w-1.5 rounded-full bg-white" style={{ opacity: 0.15 }} />
          {bpm ? <span className="tabular-nums text-white">{bpm.toFixed(0)}</span> : 'TAP'}
          {bpm && <span className="text-white/40">BPM</span>}
        </button>

        <div className="h-4 w-px bg-white/15" />

        {/* Auto-pilot */}
        <div className="relative flex items-center">
          <button
            onClick={onPilotToggle}
            title={pilotOn ? 'Auto-pilot is stepping through the set — click to stop (P)' : 'Auto-pilot: step through the set on its own (P)'}
            className={`flex items-center gap-1 rounded-full px-2 py-1 text-[10px] tracking-wider ${
              pilotOn ? 'bg-cyan-400 text-black' : 'text-white/55 hover:bg-white/10 hover:text-white/85'
            }`}
          >
            <Plane className="h-3 w-3" />
            AUTOPILOT
          </button>
          <button
            onClick={() => onPilotBars(PILOT_BARS[(PILOT_BARS.indexOf(pilotBars) + 1) % PILOT_BARS.length])}
            title={`Change visual every ${pilotBars} bars${bpm ? '' : ' (about 2 seconds a bar until a tempo is tapped)'} — click for longer`}
            className="rounded-full px-1.5 py-1 text-[10px] tabular-nums text-white/55 hover:bg-white/10 hover:text-white"
          >
            {pilotBars}b
          </button>
          {pilotOn && (
            <div className="absolute -bottom-1 left-2 right-2 h-[2px] overflow-hidden rounded bg-white/10">
              <div ref={progress} className="h-full bg-cyan-300" style={{ width: 0 }} />
            </div>
          )}
        </div>

        <div className="h-4 w-px bg-white/15" />

        {/* Health */}
        <span
          className={`flex items-center gap-1 px-1.5 text-[10px] tabular-nums ${health}`}
          title={fps >= 50 ? 'Running smoothly' : fps >= 30 ? 'Heavy — fewer layers, points or effects would help' : 'Struggling — take a layer or an effect off'}
        >
          <Gauge className="h-3 w-3" />
          {fps}
        </span>

        <div className="h-4 w-px bg-white/15" />

        {/* MIDI */}
        <button
          onClick={() => { void enableMidi(); setMidiOpen((o) => !o); }}
          title="A MIDI controller: map its faders and pads to the controls"
          className={`flex items-center gap-1 rounded-full px-2 py-1 text-[10px] tracking-wider ${
            midi.enabled && midi.devices.length ? 'text-emerald-300 hover:bg-white/10' : 'text-white/55 hover:bg-white/10 hover:text-white/85'
          }`}
        >
          <Activity className="h-3 w-3" />
          MIDI
        </button>

        {(blackout || master < 1) && (
          <>
            <div className="h-4 w-px bg-white/15" />
            <button
              onClick={onBlackout}
              title={blackout ? 'The output is black — click to bring it back' : `Master at ${Math.round(master * 100)}% — click for blackout`}
              className={`rounded-full px-2 py-1 text-[10px] tracking-wider ${
                blackout ? 'animate-pulse bg-red-500 text-white' : 'text-amber-300 hover:bg-white/10'
              }`}
            >
              {blackout ? 'BLACKOUT' : `MASTER ${Math.round(master * 100)}%`}
            </button>
          </>
        )}
      </div>

      {notice && (
        <div className="mt-2 w-fit rounded-full border border-white/25 bg-black/80 px-3 py-1 text-[10px] tracking-wider text-white">
          {notice}
        </div>
      )}

      {/* A fader out of step with its value, waiting to be brought to it. */}
      {midi.pickup && pickupLabel && (
        <div className="mt-2 w-fit rounded-full border border-amber-300/40 bg-black/80 px-3 py-1 text-[10px] text-amber-200">
          {pickupLabel}: move it {midi.pickup.from < midi.pickup.at ? 'up' : 'down'} to {Math.round(midi.pickup.at * 100)}% to pick up
        </div>
      )}

      {midiOpen && (
        <div className="mt-2 max-h-[70vh] w-[300px] overflow-y-auto rounded-xl border border-white/20 bg-black/90 p-3 text-[10px] backdrop-blur-sm">
          <div className="mb-2 flex items-center justify-between">
            <span className="tracking-widest text-white/60">MIDI</span>
            <button onClick={() => { learn(null); setMidiOpen(false); }} className="text-white/40 hover:text-white">×</button>
          </div>
          <div className="mb-3 text-white/45">
            {midi.problem ?? (midi.devices.length ? `Listening to ${midi.devices.join(', ')}` : 'Waiting for the browser…')}
            {midi.lastSeen && <span className="ml-1 text-white/30">· last: {describe(midi.lastSeen)}</span>}
          </div>
          <button
            onClick={() => applyMap(nanoKontrol2Map(KNOB_FX.map((k) => k.name)))}
            title="Map everything at once for a Korg nanoKONTROL2 in its factory setting"
            className={`mb-2 w-full rounded-lg px-2 py-1.5 text-left text-[10px] tracking-wider ${
              isNano ? 'bg-cyan-400 text-black hover:bg-cyan-300' : 'bg-white/10 text-white/75 hover:bg-white/20'
            }`}
          >
            NANOKONTROL2 PRESET{isNano ? ' — detected, click to map all' : ''}
          </button>
          <div className="mb-2 text-white/35">
            Or press LEARN, then move the fader or hit the pad you want on it.
          </div>
          {groups.map((group) => (
            <div key={group} className="mb-2">
              <div className="mb-1 text-[8px] uppercase tracking-widest text-white/35">{group}</div>
              {midiTargets.filter((t) => t.group === group).map((t) => {
                const bound = midi.map[t.id];
                const isLearning = midi.learning === t.id;
                return (
                  <div key={t.id} className="flex items-center gap-2 py-0.5">
                    <span className="min-w-0 flex-1 truncate text-white/75">{t.label}</span>
                    <span className={`w-[70px] truncate text-right ${bound ? 'text-cyan-300' : 'text-white/25'}`}>{describe(bound)}</span>
                    <button
                      onClick={() => learn(t.id)}
                      className={`rounded px-1.5 py-0.5 text-[9px] ${isLearning ? 'animate-pulse bg-amber-300 text-black' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
                    >
                      {isLearning ? 'MOVE IT' : 'LEARN'}
                    </button>
                    {bound && (
                      <button onClick={() => unbind(t.id)} title="Clear" className="text-white/30 hover:text-white">×</button>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
