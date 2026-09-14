import { VisualPattern } from '../App';
import { Layer } from '../config/LayerConfig';
import { RENDERER_CATEGORIES } from '../config/RendererCategories';
import { slotKey } from '../config/setlist';

/**
 * The stack, as something you can actually see and reach.
 *
 * Selecting a layer is what points the sliders, the colours and the faders at
 * it — which was true before this existed but only discoverable by finding the
 * L key in a tooltip, so it read as though every control moved both layers at
 * once. The strip makes the selection visible, gives each layer its own fader
 * in reach, and names what the panel underneath is editing.
 */

interface LayerStripProps {
  layers: Layer[];
  selectedLayer: number;
  /** The key order, so a layer shows the number it answers to. */
  set: VisualPattern[];
  onSelect: (index: number) => void;
  onOpacityChange: (index: number, opacity: number) => void;
  onRemove: (index: number) => void;
}

export function LayerStrip({
  layers,
  selectedLayer,
  set,
  onSelect,
  onOpacityChange,
  onRemove,
}: LayerStripProps) {
  return (
    <div className="px-3 pt-2 pb-1">
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="text-[8px] uppercase tracking-widest text-white/35">Layers</span>
        <span className="text-[8px] text-white/25">L cycles · [ ] fade</span>
      </div>

      {/* Bottom of the stack last, so the list reads the way the image does. */}
      {layers.map((layer, index) => {
        const isSelected = index === selectedLayer;
        const key = set.indexOf(layer.pattern);
        return (
          <div
            key={`${layer.pattern}-${index}`}
            className={`mb-1 rounded px-1.5 py-1 transition-colors ${
              isSelected ? 'bg-white/[0.11]' : 'hover:bg-white/[0.05]'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => onSelect(index)}
                title={isSelected ? 'Editing this layer' : 'Edit this layer'}
                className="flex min-w-0 flex-1 items-center gap-1.5 text-left"
              >
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] ${
                    isSelected ? 'bg-white text-black' : 'bg-white/15 text-white/60'
                  }`}
                >
                  {key === -1 ? '·' : slotKey(key)}
                </span>
                <span
                  className={`truncate text-[9px] ${isSelected ? 'text-white' : 'text-white/55'}`}
                >
                  {RENDERER_CATEGORIES[layer.pattern].short}
                </span>
              </button>

              <span className="shrink-0 text-[8px] tabular-nums text-white/45">
                {Math.round(layer.opacity * 100)}%
              </span>

              {layers.length > 1 && (
                <button
                  onClick={() => onRemove(index)}
                  title="Take this layer off"
                  className="shrink-0 px-0.5 text-[10px] leading-none text-white/25 transition-colors hover:text-white/80"
                >
                  ×
                </button>
              )}
            </div>

            <input
              type="range"
              aria-label={`${RENDERER_CATEGORIES[layer.pattern].name} opacity`}
              className="vj-slider mt-1 h-1 w-full cursor-pointer appearance-none rounded-full focus:outline-none"
              min={0}
              max={1}
              step={0.01}
              value={layer.opacity}
              onChange={(e) => onOpacityChange(index, parseFloat(e.target.value))}
              onPointerDown={() => onSelect(index)}
              style={{
                background: `linear-gradient(to right, rgba(255,255,255,${
                  isSelected ? 0.85 : 0.4
                }) ${layer.opacity * 100}%, rgba(255,255,255,0.12) ${layer.opacity * 100}%)`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
