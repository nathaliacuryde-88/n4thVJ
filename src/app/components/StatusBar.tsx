import { useEffect, useRef, useState } from 'react';
import { Activity, Gauge, Plane, Wifi, WifiOff } from 'lucide-react';
import { useOffline } from '../offline/offline';
import { beatPosition, clearTempo, hasTapped, tap, toggleListening, useTempo } from '../motion/tempo';
import { KNOB_FX } from '../control/knobs';
import { frameReading, setMeasuring } from '../pipeline/governor';
import { RENDERER_CATEGORIES } from '../config/RendererCategories';
import { MidiTarget, NANO_LAYOUT, applyMap, describe, enableMidi, learn, nanoKontrol2Map, unbind, useMidi } from '../control/midi';

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
 *   OFFLINE    whether the set could run with no internet: a tick once
 *              everything is kept, and a warning while the Wi-Fi is gone
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
  const { bpm, source, listening } = useTempo();
  const midi = useMidi();
  const [midiOpen, setMidiOpen] = useState(false);
  const dot = useRef<HTMLSpanElement | null>(null);
  const progress = useRef<HTMLDivElement | null>(null);
  const [fps, setFps] = useState(60);
  /** The gauge's panel: what each layer costs, read twice a second while open. */
  const [healthOpen, setHealthOpen] = useState(false);
  useEffect(() => {
    setMeasuring(healthOpen);
    return () => setMeasuring(false);
  }, [healthOpen]);
  const [cost, setCost] = useState<{ scale: number; composeMs: number; layers: { pattern: string; ms: number }[] }>({ scale: 1, composeMs: 0, layers: [] });
  const offline = useOffline();

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
        // The rate the visuals are actually drawn at, not the screen's.
        const reading = frameReading();
        setFps(Math.round(reading.fps));
        setCost({ scale: reading.scale, composeMs: reading.composeMs, layers: reading.layers.map((l) => ({ ...l })) });
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
      <div className="flex items-center gap-0.5 rounded-full border border-white/20 bg-black/70 px-1.5 py-1 backdrop-blur-sm">
        {/* Tap tempo: the dot flashes on the beat; the number once there is one. */}
        <button
          onClick={(e) => {
            if (!e.shiftKey) tap();
            else if (hasTapped()) clearTempo();
            else toggleListening();
          }}
          title={
            source === 'tap'
              ? `Tempo ${bpm} BPM, tapped — tap on the beat to re-sync (B), shift-click to clear (Shift+B)`
              : source === 'heard'
                ? `Tempo ${bpm} BPM, heard in the music — tap on the beat to set your own (B), shift-click to stop listening (Shift+B)`
                : listening
                  ? 'Listening for the tempo. Or tap here on the beat, four times or more (B)'
                  : 'Tap tempo: tap here on the beat, four times or more (B). Shift-click to hear it from the music again'
          }
          className="flex h-6 min-w-6 items-center justify-center gap-1 rounded-full px-1.5 text-[10px] text-white/70 hover:bg-white/10"
        >
          <span ref={dot} className="h-1.5 w-1.5 rounded-full bg-white" style={{ opacity: 0.15 }} />
          {/* White when she tapped it, cyan when it was heard in the music. */}
          {bpm && <span className={`tabular-nums ${source === 'heard' ? 'text-cyan-300' : 'text-white'}`}>{bpm.toFixed(0)}</span>}
        </button>

        {/* Auto-pilot: the plane; its bars only while it flies. Right-click for longer. */}
        <div className="relative flex items-center">
          <button
            onClick={onPilotToggle}
            onContextMenu={(e) => { e.preventDefault(); onPilotBars(PILOT_BARS[(PILOT_BARS.indexOf(pilotBars) + 1) % PILOT_BARS.length]); }}
            title={`${pilotOn ? 'Auto-pilot is stepping through the set — click to stop' : 'Auto-pilot: step through the set on its own'} (P). Every ${pilotBars} bars — right-click for longer`}
            className={`flex h-6 items-center justify-center gap-1 rounded-full px-1.5 text-[10px] ${
              pilotOn ? 'bg-cyan-400 text-black' : 'text-white/55 hover:bg-white/10 hover:text-white/85'
            }`}
          >
            <Plane className="h-3.5 w-3.5" />
            {pilotOn && <span className="tabular-nums">{pilotBars}</span>}
          </button>
          {pilotOn && (
            <div className="absolute -bottom-1 left-1 right-1 h-[2px] overflow-hidden rounded bg-white/10">
              <div ref={progress} className="h-full bg-cyan-300" style={{ width: 0 }} />
            </div>
          )}
        </div>

        {/* Health: green smooth, amber heavy, red struggling. */}
        <button
          onClick={() => setHealthOpen((o) => !o)}
          className={`flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/10 ${health}`}
          title={`${fps} fps — ${fps >= 50 ? 'running smoothly' : fps >= 30 ? 'heavy: fewer layers, points or effects would help' : 'struggling: take a layer or an effect off'}${cost.scale < 1 ? `. Drawing at ${Math.round(cost.scale * 100)}% size to keep up` : ''}. Click to see what each layer costs`}
        >
          <Gauge className="h-3.5 w-3.5" />
          {/* A dot while the layers are being drawn smaller to hold the rate. */}
          {cost.scale < 1 && <span className="absolute -mt-4 ml-4 h-1 w-1 rounded-full bg-amber-300" />}
        </button>

        {/* Offline: green when the set could run with no internet. */}
        {offline.state !== 'unsupported' && (
          <span
            className={`flex h-6 w-6 items-center justify-center ${
              offline.state === 'ready' ? 'text-emerald-300' : offline.online ? 'text-white/35' : 'animate-pulse text-amber-300'
            }`}
            title={
              offline.state === 'ready'
                ? offline.online
                  ? 'Ready to run with no internet: everything is kept on this computer'
                  : 'No internet — running from the copy kept on this computer'
                : offline.online
                  ? 'Keeping a copy of everything for playing with no internet… (wait a moment with the camera on)'
                  : 'No internet, and the copy is not complete: do not reload'
            }
          >
            {offline.online ? <Wifi className="h-3.5 w-3.5" /> : <WifiOff className="h-3.5 w-3.5" />}
          </span>
        )}

        {/* MIDI: green when a controller is connected. */}
        <button
          onClick={() => { void enableMidi(); setMidiOpen((o) => !o); }}
          title={midi.enabled && midi.devices.length ? `MIDI: ${midi.devices.join(', ')} — click to map` : 'MIDI controller: click to connect and map its faders and pads'}
          className={`flex h-6 w-6 items-center justify-center rounded-full ${
            midi.enabled && midi.devices.length ? 'text-emerald-300 hover:bg-white/10' : 'text-white/55 hover:bg-white/10 hover:text-white/85'
          }`}
        >
          <Activity className="h-3.5 w-3.5" />
        </button>

        {(blackout || master < 1) && (
          <>
            <button
              onClick={onBlackout}
              title={blackout ? 'The output is black — click or D to bring it back' : `Master at ${Math.round(master * 100)}% — click or D for blackout`}
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

      {/* What each layer costs: the time it takes to draw, against the sixteen
          milliseconds a smooth frame has in all. */}
      {healthOpen && (
        <div className="mt-2 w-[220px] rounded-xl border border-white/20 bg-black/90 p-3 text-[10px] backdrop-blur-sm">
          <div className="mb-2 flex items-center justify-between">
            <span className="tracking-widest text-white/60">SPEED · {fps} FPS</span>
            <button onClick={() => setHealthOpen(false)} className="text-white/40 hover:text-white">×</button>
          </div>
          {cost.layers.map((layer, i) => (
            <div key={i} className="mb-1.5">
              <div className="flex justify-between text-white/70">
                <span className="truncate">{(RENDERER_CATEGORIES as Record<string, { name?: string }>)[layer.pattern]?.name ?? layer.pattern}</span>
                <span className="tabular-nums">{layer.ms.toFixed(1)} ms</span>
              </div>
              <div className="h-[3px] overflow-hidden rounded bg-white/10">
                <div
                  className={`h-full ${layer.ms > 10 ? 'bg-red-400' : layer.ms > 5 ? 'bg-amber-300' : 'bg-emerald-300'}`}
                  style={{ width: `${Math.min(100, (layer.ms / 16.7) * 100)}%` }}
                />
              </div>
            </div>
          ))}
          <div className="flex justify-between text-white/45">
            <span>Mixing and effects</span>
            <span className="tabular-nums">{cost.composeMs.toFixed(1)} ms</span>
          </div>
          <div className="mt-2 border-t border-white/10 pt-2 text-white/45">
            {cost.scale < 1
              ? `Drawing at ${Math.round(cost.scale * 100)}% size to stay smooth. It goes back up by itself.`
              : 'Drawing at full size. A smooth frame has 16 ms in all.'}
          </div>
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
            <span className="block text-[9px] opacity-60">layout: {NANO_LAYOUT}, faders 5–8 = hands</span>
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
