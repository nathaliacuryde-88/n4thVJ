import { useState } from 'react';
import { RotateCcw, SlidersHorizontal } from 'lucide-react';
import { VisualPattern } from '../App';
import { RENDERER_PARAMS } from '../params/registry';
import { getByPath, ParamSpec, ParamValues } from '../params/types';

interface ParamPanelProps {
  pattern: VisualPattern;
  values: ParamValues;
  onChange: (path: string, value: number) => void;
  onReset: (path?: string) => void;
}

/** Enough decimals to show the step, and no more. */
function format(value: number, step: number): string {
  const decimals = Math.max(0, Math.ceil(-Math.log10(step)));
  return value.toFixed(Math.min(decimals, 4));
}

function Slider({
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
  const fraction = ((value - spec.min) / (spec.max - spec.min)) * 100;

  return (
    <div className="group">
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
        <span className="text-white tabular-nums">{format(value, spec.step)}</span>
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
 * The sliders for whichever renderer is on screen. Built entirely from
 * RENDERER_PARAMS — this component knows nothing about any specific visual, so
 * exposing a new one is a registry entry rather than a UI change.
 */
export function ParamPanel({ pattern, values, onChange, onReset }: ParamPanelProps) {
  const [collapsed, setCollapsed] = useState(false);
  const entry = RENDERER_PARAMS[pattern];

  if (!entry) return null;

  const touched = entry.groups.some((g) =>
    g.params.some((p) => values[p.path] !== undefined),
  );

  return (
    <div className="absolute left-6 top-24 bottom-32 z-50 w-[168px] flex flex-col font-mono pointer-events-auto">
      <div className="bg-black/70 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col min-h-0">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
          <button
            onClick={() => setCollapsed((c) => !c)}
            className="flex items-center gap-2 flex-1 text-left text-white/80 hover:text-white transition-colors"
            title={collapsed ? 'Show parameters' : 'Hide parameters'}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold tracking-wider">SHAPE</span>
          </button>
          {touched && (
            <button
              onClick={() => onReset()}
              title="Reset every parameter for this visual"
              className="text-white/40 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          )}
        </div>

        {!collapsed && (
          <div className="overflow-y-auto px-3 py-2 min-h-0">
            {entry.groups.map((group) => (
              <div key={group.name} className="mb-3 last:mb-1">
                <div className="text-[8px] text-white/35 tracking-widest uppercase mb-1.5">
                  {group.name}
                </div>
                {group.params.map((spec) => {
                  const fallback = getByPath(entry.config, spec.path);
                  if (fallback === undefined) return null;
                  const value = values[spec.path] ?? fallback;
                  return (
                    <Slider
                      key={spec.path}
                      spec={spec}
                      value={value}
                      isDefault={values[spec.path] === undefined}
                      onChange={(v) => onChange(spec.path, v)}
                      onReset={() => onReset(spec.path)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
