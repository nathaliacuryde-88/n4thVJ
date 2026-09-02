import { useState, useEffect } from 'react';

interface ColorControllerProps {
  selectedColors: string[];
  onColorsChange: (colors: string[]) => void;
  hue: number;
  saturation: number;
  mode: 'black' | 'contrast' | 'grayscale';
  onHueChange: (hue: number) => void;
  onModeChange: (mode: 'black' | 'contrast' | 'grayscale') => void;
  autoHueEnabled: boolean;
  onAutoHueToggle: () => void;
}

export function ColorController({ 
  selectedColors, 
  onColorsChange,
  hue,
  saturation,
  mode,
  onHueChange,
  onModeChange,
  autoHueEnabled,
  onAutoHueToggle
}: ColorControllerProps) {
  // Convert HSL to hex
  const hslToHex = (h: number, s: number, l: number): string => {
    h = h / 360;
    s = s / 100;
    l = l / 100;

    let r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    const toHex = (x: number) => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  // Generate colors based on mode
  const generateColors = (h: number, sat: number, selectedMode: 'black' | 'contrast' | 'grayscale'): string[] => {
    if (selectedMode === 'grayscale') {
      // Black & White mode: pure black and white
      return ['#FFFFFF', '#000000', '#FFFFFF', '#000000'];
    }
    
    if (selectedMode === 'black') {
      // 1 Color mode - base color + white + shades for visibility
      const baseColor = hslToHex(h, sat, 50);        // Full saturation
      const lightShade = hslToHex(h, sat * 0.6, 70); // Lighter shade
      const darkShade = hslToHex(h, sat * 0.8, 35);  // Darker shade
      const white = '#FFFFFF';                        // Pure white
      
      return [baseColor, white, lightShade, darkShade];
    }
    
    // 'contrast' mode - 2 Colors
    const baseColor = hslToHex(h, sat, 50);
    const secondColor = hslToHex((h + 180) % 360, sat, 50); // Complementary color
    
    return [baseColor, secondColor, baseColor, secondColor];
  };

  // Update colors when hue, saturation, or mode changes
  useEffect(() => {
    const newColors = generateColors(hue, saturation, mode);
    onColorsChange(newColors);
  }, [hue, saturation, mode]);

  return (
    <div className="w-full flex items-center gap-4 px-6 font-mono">
      {/* Mode Selection Buttons */}
      <div className="flex gap-1">
        <button
          onClick={() => onModeChange('black')}
          className={`px-2 py-1 text-[10px] rounded transition-all ${
            mode === 'black'
              ? 'bg-white/20 text-white'
              : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60'
          }`}
          title="1 Color (Fn key)"
        >
          1C
        </button>
        <button
          onClick={() => onModeChange('contrast')}
          className={`px-2 py-1 text-[10px] rounded transition-all ${
            mode === 'contrast'
              ? 'bg-white/20 text-white'
              : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60'
          }`}
          title="2 Colors (Ctrl key)"
        >
          2C
        </button>
        <button
          onClick={() => onModeChange('grayscale')}
          className={`px-2 py-1 text-[10px] rounded transition-all ${
            mode === 'grayscale'
              ? 'bg-white/20 text-white'
              : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60'
          }`}
          title="Black & White (Option/Alt key)"
        >
          B/W
        </button>
      </div>

      {/* Hue Slider - Rainbow Gradient (only visible when not grayscale) */}
      {mode !== 'grayscale' && (
        <div className="flex-1 relative h-6">
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)'
            }}
          />
          <input
            type="range"
            min="0"
            max="360"
            value={hue}
            onChange={(e) => onHueChange(Number(e.target.value))}
            className="vj-slider-bare absolute inset-0 w-full appearance-none bg-transparent cursor-pointer"
          />
          {/* Custom handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow-lg pointer-events-none"
            style={{
              left: `calc(${(hue / 360) * 100}% - 10px)`,
              backgroundColor: hslToHex(hue, saturation, 50)
            }}
          />
        </div>
      )}

      {/* Auto Hue Button - Replaced Saturation Slider */}
      {mode !== 'grayscale' && (
        <button
          onClick={onAutoHueToggle}
          className={`px-3 py-1 text-[10px] rounded transition-all whitespace-nowrap ${
            autoHueEnabled
              ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-400/50'
              : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60'
          }`}
          title="Auto-rotate hue palette"
        >
          {autoHueEnabled ? '⟳ AUTO' : 'AUTO'}
        </button>
      )}
    </div>
  );
}