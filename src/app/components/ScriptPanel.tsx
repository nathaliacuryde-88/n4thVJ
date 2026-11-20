import { useState } from 'react';
import { clock } from '../config/script';

/**
 * The roteiro's strip, under the set's clock: where it is, what is up, how
 * long is left of the step, and play / pause, back, on, edit, stop.
 */
export function ScriptPanel({
  underCamera, steps, step, label, left, state, onPlay, onStop, onStep, text, onText,
}: {
  underCamera: boolean;
  steps: number;
  step: number;
  label: string;
  left: number;
  state: 'off' | 'running' | 'paused';
  onPlay: () => void;
  onStop: () => void;
  onStep: (d: 1 | -1) => void;
  text: string;
  onText: (t: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(text);
  const btn = 'flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-[11px] text-white/70 hover:bg-white/15 hover:text-white';
  return (
    <div className={`absolute right-4 z-50 flex flex-col items-end gap-1 font-mono ${underCamera ? 'top-[160px] right-6' : 'top-[56px]'}`}>
      {/* Narrow and stacked, so it never runs in under the set bar on a laptop screen. */}
      <div className={`flex w-[172px] flex-col gap-0.5 rounded-xl border bg-black/70 px-2 py-1.5 backdrop-blur-sm ${
        state === 'running' ? 'border-emerald-400/50' : state === 'paused' ? 'border-amber-300/60' : 'border-white/20'}`}>
        <div className="flex items-center justify-between px-1 text-[9px]">
          <span className="tracking-widest text-white/45">ROTEIRO</span>
          {state !== 'off' && <span className="tabular-nums text-white/50">{step + 1}/{steps}</span>}
          {state !== 'off' && (
            <span className={`text-[11px] tabular-nums ${state === 'paused' ? 'text-amber-300' : 'text-emerald-300'}`}>{clock(left)}</span>
          )}
        </div>
        {state !== 'off' && <div className="truncate px-1 text-[10px] text-white/85" title={label}>{label}</div>}
        <div className="flex items-center justify-between">
        <button onClick={() => onStep(-1)} title="Previous step" className={btn}>‹</button>
        <button
          onClick={onPlay}
          title={state === 'running' ? 'Pause the roteiro' : state === 'paused' ? 'Carry on from this step (PLAY on the controller)' : 'Start the roteiro from step 1 (PLAY on the controller)'}
          className={`${btn} ${state === 'running' ? 'text-emerald-300' : 'text-white'}`}
        >
          {state === 'running' ? '❚❚' : '▶'}
        </button>
        <button onClick={() => onStep(1)} title="Next step" className={btn}>›</button>
        {state !== 'off' && <button onClick={onStop} title="Stop the roteiro" className={btn}>■</button>}
        <button onClick={() => { setDraft(text); setEditing((e) => !e); }} title="Edit the roteiro" className={btn}>✎</button>
        </div>
      </div>
      {state === 'paused' && (
        <div className="w-[172px] rounded-lg bg-amber-300/90 px-2 py-0.5 text-center text-[9px] font-semibold leading-snug tracking-wider text-black">
          PAUSED — YOU HAVE IT<br />▶ TO CARRY ON
        </div>
      )}
      {editing && (
        <div className="w-[260px] rounded-xl border border-white/20 bg-black/90 p-3 backdrop-blur-sm">
          <div className="mb-1 text-[9px] leading-snug text-white/50">
            One step per line: the visuals by their number in the bar, joined with +, and how long (m:ss). No time = 2:00.
          </div>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.stopPropagation()}
            rows={14}
            className="w-full resize-y rounded bg-white/10 p-2 text-[11px] leading-snug text-white outline-none"
          />
          <div className="mt-2 flex justify-end gap-2">
            <button onClick={() => setEditing(false)} className="rounded px-2 py-1 text-[10px] text-white/60 hover:text-white">Cancel</button>
            <button onClick={() => { onText(draft); setEditing(false); }} className="rounded bg-white px-2 py-1 text-[10px] font-semibold text-black">Save</button>
          </div>
        </div>
      )}
    </div>
  );
}
