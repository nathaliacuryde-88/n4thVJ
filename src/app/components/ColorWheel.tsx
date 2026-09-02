import { useState } from 'react';
import { Palette } from 'lucide-react';

interface ColorWheelProps {
  selectedColors: string[];
  onColorsChange: (colors: string[]) => void;
}

export function ColorWheel({ selectedColors, onColorsChange }: ColorWheelProps) {
  const [isOpen, setIsOpen] = useState(false);

  const colorPresets = [
    { name: 'Purple Dream', colors: ['#6366f1', '#8b5cf6', '#d946ef', '#ec4899', '#f43f5e'] },
    { name: 'Ocean', colors: ['#0ea5e9', '#06b6d4', '#14b8a6', '#10b981', '#3b82f6'] },
    { name: 'Sunset', colors: ['#f59e0b', '#f97316', '#ef4444', '#ec4899', '#a855f7'] },
    { name: 'Forest', colors: ['#84cc16', '#22c55e', '#10b981', '#14b8a6', '#06b6d4'] },
    { name: 'Fire', colors: ['#fee2e2', '#fca5a5', '#f87171', '#ef4444', '#dc2626'] },
    { name: 'Neon', colors: ['#00ff00', '#00ffff', '#ff00ff', '#ffff00', '#ff0080'] },
    { name: 'Monochrome', colors: ['#6b7280', '#4b5563', '#374151', '#1f2937', '#111827'] },
    { name: 'Black & White', colors: ['#000000', '#FFFFFF'] },
    { name: 'Pastel', colors: ['#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899'] },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all border border-white/20"
      >
        <Palette className="w-5 h-5" />
        <span className="text-sm">Colors</span>
        <div className="flex gap-1 ml-2">
          {selectedColors.slice(0, 3).map((color, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border border-white/30"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 left-0 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-2xl z-50 min-w-[280px]">
          <div className="text-white/80 text-sm mb-3">Choose Color Palette</div>
          
          <div className="space-y-2 max-h-[400px] overflow-y-auto">
            {colorPresets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => {
                  onColorsChange(preset.colors);
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
              >
                <span className="text-white/90 text-sm">{preset.name}</span>
                <div className="flex gap-1">
                  {preset.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border border-white/20 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="text-white/60 text-xs">
              Selected colors will be used to create gradients in your visuals
            </div>
          </div>
        </div>
      )}
    </div>
  );
}