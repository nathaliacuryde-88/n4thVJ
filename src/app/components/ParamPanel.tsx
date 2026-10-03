import { useEffect, useRef, useState } from 'react';
import { ChevronDown, RotateCcw, SlidersHorizontal } from 'lucide-react';
import { RendererParams } from '../params/registry';
import { getByPath, ParamSpec, ParamValues } from '../params/types';
import { useCustomChars } from '../config/charsets';

/** One tab: a set of sliders with its own values and handlers. */
export interface ParamSection {
  key: string;
  label: string;
  entry: RendererParams;
  values: ParamValues;
  onChange: (path: string, value: number) => void;
  onReset: (path?: string) => void;
}

/** Enough decimals to show the step, and no more. */
function format(value: number, step: number): string {
  const decimals = Math.max(0, Math.ceil(-Math.log10(step)));
  return value.toFixed(Math.min(decimals, 4));
}

/** The glyph samples' font: the same monospace the visuals draw them in. */
const SAMPLE_FONT = 'ui-monospace, SFMono-Regular, Menlo, "DejaVu Sans Mono", monospace';

/**
 * A choice picked by how it looks.
 *
 * Closed, it is a plain box with the choice's name and a chevron, as in
 * Atlas. Open, every option shows its name and a sample of what it draws,
 * so a character set is chosen by its characters rather than by reading
 * names. The list opens in place, pushing the controls below it down,
 * rather than floating: the panels scroll, and a floating list inside a
 * scrolling panel gets cut off at its edge.
 *
 * Where an option is "Custom", choosing it opens a field for typing your own.
 */
function ChoiceMenu({
  spec,
  value,
  isDefault,
  onChange,
  onReset,
}: {
  spec: ParamSpec;
  value: number;
  isDefault: boolean;
  onChange: (value: number) => void;
  onReset: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useCustomChars();
  const box = useRef<HTMLDivElement | null>(null);
  const labels = spec.labels ?? [];
  const current = Math.max(0, Math.min(labels.length - 1, Math.round(value)));
  const sampleOf = (i: number) => (i === spec.customAt ? custom.trim() : spec.samples?.[i] ?? '');

  // Closes on a click anywhere else, or Escape.
  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) setOpen(false);
    };
    const escape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', away);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', away);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);

  return (
    <div ref={box} className="mb-2">
      <button
        onClick={onReset}
        title={isDefault ? spec.hint ?? spec.path : `${spec.path} — click to reset`}
        className={`text-left text-[8.5px] uppercase tracking-[0.18em] transition-colors ${
          isDefault ? 'text-white/50 hover:text-white/70' : 'text-cyan-300 hover:text-cyan-200'
        }`}
      >
        {spec.label}
        {!isDefault && <span className="ml-1 opacity-60">•</span>}
      </button>
      <button
        onClick={() => setOpen((o) => !o)}
        title={`${spec.label}: ${labels[current]} — click to choose`}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`mt-1 flex w-full items-center justify-between rounded-md border px-2.5 py-1.5 text-left transition-colors ${
          open ? 'border-white/70 bg-white/10' : 'border-white/30 hover:border-white/60'
        }`}
      >
        <span className="min-w-0 truncate text-[9.5px] font-semibold uppercase tracking-[0.16em] text-white">
          {labels[current]}
        </span>
        <ChevronDown className={`h-3 w-3 shrink-0 text-white/70 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          // Brought into view as it opens: the panels scroll, and a list that
          // opens below the fold looks like a menu that did nothing.
          ref={(el) => el?.scrollIntoView({ block: 'nearest' })}
          className="mt-1 max-h-48 overflow-y-auto rounded-md border border-white/20 bg-black/85 py-0.5"
          role="listbox"
        >
          {labels.map((name, i) => (
            <button
              key={name}
              role="option"
              aria-selected={i === current}
              onClick={() => {
                onChange(i);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-2.5 py-[3px] text-left transition-colors ${
                i === current ? 'bg-white text-black' : 'text-white/75 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="w-[62px] shrink-0 truncate text-[8.5px] uppercase tracking-[0.12em]">{name}</span>
              <span className="min-w-0 flex-1 truncate text-[11px] leading-none" style={{ fontFamily: SAMPLE_FONT }}>
                {sampleOf(i)}
              </span>
            </button>
          ))}
        </div>
      )}
      {spec.customAt !== undefined && current === spec.customAt && (
        <label className="mt-2 block">
          <span className="text-[8.5px] uppercase tracking-[0.18em] text-white/50">Your characters</span>
          <input
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            // Typing digits or letters here must not switch visuals or effects.
            onKeyDown={(e) => e.stopPropagation()}
            onKeyUp={(e) => e.stopPropagation()}
            spellCheck={false}
            placeholder=".:-=+*#%@"
            className="mt-1 w-full border-b border-white/30 bg-transparent pb-1 text-[12px] text-white outline-none focus:border-white/70"
            style={{ fontFamily: SAMPLE_FONT }}
          />
        </label>
      )}
    </div>
  );
}

export function Slider({
  spec,
  value,
  isDefault,
  inert,
  onChange,
  onReset,
}: {
  spec: ParamSpec;
  value: number;
  isDefault: boolean;
  /** True when what this needs is switched off, so it currently does nothing. */
  inert?: boolean;
  onChange: (value: number) => void;
  onReset: () => void;
}) {
  if (spec.menu && spec.labels) {
    return <ChoiceMenu spec={spec} value={value} isDefault={isDefault} onChange={onChange} onReset={onReset} />;
  }
  const fraction = ((value - spec.min) / (spec.max - spec.min)) * 100;

  return (
    <div className={`group ${inert ? 'opacity-40' : ''}`} title={inert ? `Does nothing until ${spec.needs} is above zero` : undefined}>
      <div className="flex justify-between items-baseline text-[9px] leading-tight">
        <button
          onClick={onReset}
          title={isDefault ? spec.hint ?? spec.path : `${spec.path} — click to reset`}
          className={`text-left transition-colors ${
            isDefault ? 'text-white/50 hover:text-white/70' : 'text-cyan-300 hover:text-cyan-200'
          }`}
        >
          {spec.label}
          {!isDefault && <span className="ml-1 opacity-60">•</span>}
        </button>
        <span className={`text-white ${spec.labels ? '' : 'tabular-nums'}`}>
          {spec.labels?.[Math.round(value)] ?? format(value, spec.step)}
        </span>
      </div>
      <input
        type="range"
        className="vj-slider w-full h-1 mt-1 mb-2 rounded-full appearance-none cursor-pointer focus:outline-none"
        min={spec.min}
        max={spec.max}
        step={spec.step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) ${fraction}%, rgba(255,255,255,0.2) ${fraction}%)`,
        }}
      />
    </div>
  );
}

/**
 * The slider panel. Built entirely from the sections it is handed, so it knows
 * nothing about any specific visual or effect — exposing something new is a
 * registry entry rather than a change here.
 */
export function ParamPanel({
  sections,
  header,
}: {
  sections: ParamSection[];
  /** Rendered above the tabs — the layer strip, which scopes everything below it. */
  header?: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeKey, setActiveKey] = useState(sections[0]?.key);

  const available = sections.filter((s) => s.entry.groups.length > 0);
  if (available.length === 0) return null;

  const active = available.find((s) => s.key === activeKey) ?? available[0];
  const touched = active.entry.groups.some((g) =>
    g.params.some((p) => active.values[p.path] !== undefined),
  );

  return (
    <div className="absolute left-6 top-24 bottom-32 z-50 w-[168px] flex flex-col font-mono pointer-events-auto">
      <div className="bg-black/70 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col min-h-0">
        {header && <div className="border-b border-white/10">{header}</div>}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
          <button
            onClick={() => setCollapsed((c) => !c)}
            className="text-white/60 hover:text-white transition-colors shrink-0"
            title={collapsed ? 'Show parameters' : 'Hide parameters'}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>

          <div className="flex gap-1 flex-1 min-w-0">
            {available.map((section) => {
              const dirty = section.entry.groups.some((g) =>
                g.params.some((p) => section.values[p.path] !== undefined),
              );
              return (
                <button
                  key={section.key}
                  onClick={() => {
                    setActiveKey(section.key);
                    setCollapsed(false);
                  }}
                  className={`px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider transition-all ${
                    section.key === active.key
                      ? 'bg-white/20 text-white'
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {section.label}
                  {dirty && <span className="ml-1 text-cyan-300">•</span>}
                </button>
              );
            })}
          </div>

          {touched && (
            <button
              onClick={() => active.onReset()}
              title={`Reset every ${active.label} parameter`}
              className="text-white/40 hover:text-white transition-colors shrink-0"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          )}
        </div>

        {!collapsed && (
          <div className="overflow-y-auto px-3 py-2 min-h-0">
            {active.entry.groups.map((group) => {
              // A group tied to a mode only appears while that mode is running.
              if (group.visibleWhen) {
                const current =
                  active.values[group.visibleWhen.path] ??
                  getByPath(active.entry.config, group.visibleWhen.path) ??
                  0;
                if (!group.visibleWhen.equals.includes(Math.round(current as number))) return null;
              }

              const toggleValue = group.togglePath
                ? active.values[group.togglePath] ??
                  getByPath(active.entry.config, group.togglePath) ??
                  1
                : 1;
              const on = toggleValue >= 0.5;

              return (
              <div key={group.name} className="mb-3 last:mb-1">
                {group.togglePath ? (
                  <button
                    onClick={() => active.onChange(group.togglePath!, on ? 0 : 1)}
                    title={on ? `Bypass ${group.name}` : `Enable ${group.name}`}
                    className="flex items-center gap-1.5 w-full mb-1.5 group/head"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        on ? 'bg-cyan-300' : 'bg-white/20'
                      }`}
                    />
                    <span
                      className={`text-[8px] tracking-widest uppercase transition-colors ${
                        on ? 'text-white/55 group-hover/head:text-white/80' : 'text-white/25'
                      }`}
                    >
                      {group.name}
                    </span>
                  </button>
                ) : (
                  <div className="text-[8px] text-white/35 tracking-widest uppercase mb-1.5">
                    {group.name}
                  </div>
                )}
                <div className={on ? '' : 'opacity-35 pointer-events-none'}>
                {group.params.map((spec) => {
                  const fallback = getByPath(active.entry.config, spec.path);
                  if (fallback === undefined) return null;
                  const value = active.values[spec.path] ?? fallback;
                  const needed = spec.needs
                    ? active.values[spec.needs] ?? getByPath(active.entry.config, spec.needs) ?? 0
                    : 1;
                  return (
                    <Slider
                      key={spec.path}
                      spec={spec}
                      inert={!((needed as number) > 0)}
                      value={value}
                      isDefault={active.values[spec.path] === undefined}
                      onChange={(v) => active.onChange(spec.path, v)}
                      onReset={() => active.onReset(spec.path)}
                    />
                  );
                })}
                </div>
              </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
