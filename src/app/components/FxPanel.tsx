import { Power, RotateCcw } from 'lucide-react';
import { RendererParams } from '../params/registry';
import { getByPath, ParamGroup, ParamValues } from '../params/types';
import { Slider } from './ParamPanel';
import { stageDoing } from '../pipeline/PostPipeline';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE EFFECTS PANEL
 * ═══════════════════════════════════════════════════════════════════════════
 * Nine effects, and never more than three sliders on screen.
 *
 * They used to live in a tab behind the renderer's own controls, every stage
 * stacked one under another with its parameters open — around thirty sliders
 * in a column, most of them doing nothing at the time. Two problems in one:
 * finding an effect meant scrolling past the others, and nothing on screen
 * said which of them were actually running.
 *
 * So the effects are a grid of names, and only the one you pick opens. The
 * grid is the map — a lit dot means that effect is doing something right now,
 * which is the question you have mid-set — and the open effect is the detail.
 * Choosing is separated from adjusting, and at most three things can be
 * adjusted at once.
 *
 * It sits opposite the renderer's controls rather than behind them, because
 * the two answer different questions — what this visual is, and what is being
 * done to it — and during a set you want both at a glance.
 *
 * ONE CLICK, NOT THREE
 * Switching an effect on used to mean clicking its name, then finding the
 * slider, then dragging it off zero — three actions and a few seconds, in the
 * middle of a set. A chip is now a switch:
 *
 *   off            → click turns it on, at a setting you can see, and opens it
 *   on and open    → click turns it off
 *   on but closed  → click opens it, and leaves it on
 *
 * So the common thing is one click, and adjusting something already running
 * never risks switching it off.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** Whether a stage is switched on and set to do something. */
function stageState(group: ParamGroup, entry: RendererParams, values: ParamValues) {
  const read = (path: string) =>
    (values[path] ?? getByPath(entry.config, path) ?? 0) as number;
  const on = group.togglePath ? read(group.togglePath) >= 0.5 : true;
  // Asked of the pipeline rather than worked out here, so the dot cannot drift
  // from what the chain actually runs.
  const live = group.stage ? stageDoing(group.stage, values) : false;
  const touched = group.params.some((p) => values[p.path] !== undefined);
  return { on, live, touched };
}

export function FxPanel({
  entry,
  values,
  onChange,
  onReset,
  /** Which layer these belong to, since every layer has its own. */
  layerLabel,
  openName,
  onOpen,
}: {
  entry: RendererParams;
  values: ParamValues;
  onChange: (path: string, value: number) => void;
  onReset: (path?: string) => void;
  layerLabel: string;
  /**
   * Which effect is open, held outside this component.
   *
   * It used to be local state, and hiding the interface for a moment — which
   * is a thing you do constantly mid-set — unmounted the panel and forgot it.
   * Coming back to a closed panel after every look at the visual is not what
   * anyone wants from a control surface.
   */
  openName: string | null;
  onOpen: (name: string | null) => void;
}) {
  const groups = entry.groups;
  const open = groups.find((g) => g.name === openName) ?? null;

  const masterOn = (values['master.enabled'] ?? 1) >= 0.5;
  const anyTouched = groups.some((g) => g.params.some((p) => values[p.path] !== undefined));

  return (
    <div className="absolute right-6 top-24 z-50 w-[178px] font-mono pointer-events-auto">
      <div className="bg-black/70 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col">
        {/* Whose effects these are. With one chain per layer this is not a
            detail — it is the difference between dressing the type and
            dressing the footage behind it. */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
          <button
            onClick={() => onChange('master.enabled', masterOn ? 0 : 1)}
            title={masterOn ? 'Bypass every effect on this layer (X)' : 'Bring the effects back (X)'}
            className={`shrink-0 transition-colors ${
              masterOn ? 'text-cyan-300 hover:text-cyan-200' : 'text-white/25 hover:text-white/60'
            }`}
          >
            <Power className="w-3.5 h-3.5" />
          </button>
          <span className="flex-1 min-w-0 truncate text-[9px] tracking-widest text-white/55">
            FX · {layerLabel}
          </span>
          {anyTouched && (
            <button
              onClick={() => onReset()}
              title="Clear every effect on this layer"
              className="shrink-0 text-white/40 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* The map. */}
        <div className={`grid grid-cols-2 gap-1 p-2 ${masterOn ? '' : 'opacity-35'}`}>
          {groups.map((group) => {
            const { on, live, touched } = stageState(group, entry, values);
            const isOpen = group.name === open?.name;
            return (
              <button
                key={group.name}
                onClick={() => {
                  if (!live) {
                    // Switch it on at something visible, and show its controls.
                    if (group.togglePath) onChange(group.togglePath, 1);
                    for (const [path, v] of Object.entries(group.turnOn ?? {})) {
                      onChange(path, v);
                    }
                    onOpen(group.name);
                    return;
                  }
                  if (!isOpen) {
                    onOpen(group.name);
                    return;
                  }
                  // Running and open: this click puts it away. Back to the
                  // config's own value, which for every effect is its off.
                  for (const path of Object.keys(group.turnOn ?? {})) {
                    onChange(path, (getByPath(entry.config, path) ?? 0) as number);
                  }
                  onOpen(null);
                }}
                title={
                  live
                    ? isOpen
                      ? `${group.name} — running. Click to switch it off`
                      : `${group.name} — running. Click to show its controls`
                    : `${group.name} — click to switch it on`
                }
                className={`flex items-center gap-1 rounded px-1.5 py-1 text-left text-[8.5px] leading-tight tracking-wide transition-all ${
                  isOpen
                    ? 'bg-white text-black'
                    : live
                      ? 'bg-white/15 text-white'
                      : 'text-white/40 hover:bg-white/10 hover:text-white/70'
                }`}
              >
                <span
                  className={`w-1 h-1 shrink-0 rounded-full ${
                    live ? (isOpen ? 'bg-black' : 'bg-cyan-300') : isOpen ? 'bg-black/30' : 'bg-white/20'
                  }`}
                />
                <span className="min-w-0 truncate">{group.name}</span>
                {touched && !isOpen && <span className="text-cyan-300">·</span>}
              </button>
            );
          })}
        </div>

        {/* The detail: at most three sliders, and only for what is open. */}
        {open && (
          <div className={`border-t border-white/10 px-3 py-2 ${masterOn ? '' : 'opacity-35'}`}>
            {open.togglePath && (
              <button
                onClick={() =>
                  onChange(
                    open.togglePath!,
                    stageState(open, entry, values).on ? 0 : 1,
                  )
                }
                className="flex items-center gap-1.5 w-full mb-2 group/head"
                title={stageState(open, entry, values).on
                  ? `Bypass ${open.name}` : `Enable ${open.name}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    stageState(open, entry, values).on ? 'bg-cyan-300' : 'bg-white/20'
                  }`}
                />
                <span className="text-[8px] tracking-widest uppercase text-white/55 group-hover/head:text-white/80">
                  {stageState(open, entry, values).on ? 'on' : 'bypassed'}
                </span>
              </button>
            )}

            <div className={stageState(open, entry, values).on ? '' : 'opacity-35 pointer-events-none'}>
              {open.params.map((spec) => {
                const fallback = getByPath(entry.config, spec.path);
                if (fallback === undefined) return null;
                const needed = spec.needs
                  ? values[spec.needs] ?? getByPath(entry.config, spec.needs) ?? 0
                  : 1;
                return (
                  <Slider
                    key={spec.path}
                    spec={spec}
                    inert={!((needed as number) > 0)}
                    value={values[spec.path] ?? fallback}
                    isDefault={values[spec.path] === undefined}
                    onChange={(v) => onChange(spec.path, v)}
                    onReset={() => onReset(spec.path)}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
