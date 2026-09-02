import { Hand, HandData, VisualPattern } from '../App';
import { Video, VideoOff, Mic, MicOff, Infinity as InfinityIcon } from 'lucide-react';
import { ColorController } from './ColorController';
import { getRenderersByCategory } from '../config/RendererCategories';

/**
 * The one-word gesture readout for a hand, or null when there is nothing to
 * say (no finger count and not pinching).
 */
function fingerLabel(hand: Hand): string | null {
  if (hand.gesture === 'pinch') return 'PINCH';
  if (hand.fingerCount === undefined) return null;
  if (hand.fingerCount === 2) return 'MED';
  if (hand.fingerCount >= 5) return 'FAST';
  return `${hand.fingerCount}F`;
}

function HandStatus({ label, hand }: { label: string; hand: Hand }) {
  const status = fingerLabel(hand);
  return (
    <div>
      <div className="text-white/90">{label}</div>
      {status && <div className="text-cyan-400">{status}</div>}
    </div>
  );
}

interface ControlsProps {
  currentPattern: VisualPattern;
  onPatternChange: (pattern: VisualPattern) => void;
  showCamera: boolean;
  onCameraToggle: () => void;
  handData: HandData;
  selectedColors: string[];
  onColorsChange: (colors: string[]) => void;
  hue: number;
  saturation: number;
  colorMode: 'black' | 'contrast' | 'grayscale';
  onHueChange: (hue: number) => void;
  onSaturationChange: (saturation: number) => void;
  onColorModeChange: (mode: 'black' | 'contrast' | 'grayscale') => void;
  autoHueEnabled: boolean;
  onAutoHueToggle: () => void;
  rendererFilter: '2D' | '3D';
  onRendererFilterChange: (filter: '2D' | '3D') => void;
  audioEnabled: boolean;
  onAudioToggle: () => void;
  audioSensitivity: number;
  onAudioSensitivityChange: (sensitivity: number) => void;
  audioControlSpeed: boolean;
  onAudioControlSpeedChange: (enabled: boolean) => void;
  audioControlDensity: boolean;
  onAudioControlDensityChange: (enabled: boolean) => void;
  audioTriggerBeats: boolean;
  onAudioTriggerBeatsChange: (enabled: boolean) => void;
  idleDrive: boolean;
  onIdleDriveToggle: () => void;
  smokeHandModel?: 'torus' | 'hand';
  onSmokeHandModelChange?: (model: 'torus' | 'hand') => void;
}

export function Controls({
  currentPattern,
  onPatternChange,
  showCamera,
  onCameraToggle,
  handData,
  selectedColors,
  onColorsChange,
  hue,
  saturation,
  colorMode,
  onHueChange,
  onSaturationChange,
  onColorModeChange,
  autoHueEnabled,
  onAutoHueToggle,
  rendererFilter,
  onRendererFilterChange,
  audioEnabled,
  onAudioToggle,
  audioSensitivity,
  onAudioSensitivityChange,
  audioControlSpeed,
  onAudioControlSpeedChange,
  audioControlDensity,
  onAudioControlDensityChange,
  audioTriggerBeats,
  onAudioTriggerBeatsChange,
  idleDrive,
  onIdleDriveToggle,
  smokeHandModel,
  onSmokeHandModelChange
}: ControlsProps) {
  
  // Use the canonical list from RENDERER_CATEGORIES to ensure correct key mappings
  const allRenderers = getRenderersByCategory(rendererFilter);
  
  // Sort patterns: Number keys first (1-9, 0), then others
  // This is purely for display order
  const sortedPatterns = allRenderers.sort((a, b) => {
    const isNumA = !isNaN(parseInt(a.key));
    const isNumB = !isNaN(parseInt(b.key));
    if (isNumA && isNumB) {
        // Special case for 0 to be last of numbers
        if (a.key === '0') return 1;
        if (b.key === '0') return -1;
        return parseInt(a.key) - parseInt(b.key);
    }
    if (isNumA) return -1;
    if (isNumB) return 1;
    return a.key.localeCompare(b.key);
  });

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* TOP LEFT - SMOKE HAND MODEL SELECTOR (Only visible for Smoke Hand pattern) */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {currentPattern === 'smokehand' && onSmokeHandModelChange && (
        <div className="absolute top-4 left-4 z-50">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg p-2 border border-cyan-500/30 font-mono">
            <div className="flex gap-2">
              <button
                onClick={() => onSmokeHandModelChange('torus')}
                className={`px-4 py-2 rounded text-xs transition-all ${ 
                  smokeHandModel === 'torus'
                    ? 'bg-cyan-500 text-black'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                Torus
              </button>
              <button
                onClick={() => onSmokeHandModelChange('hand')}
                className={`px-4 py-2 rounded text-xs transition-all ${ 
                  smokeHandModel === 'hand'
                    ? 'bg-cyan-500 text-black'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                Hand
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* TOP - VISUAL PATTERN SELECTOR (Similar to Color Bar) */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 font-mono">
          <div className="flex items-center gap-4">
            {/* 2D/3D Filter Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onRendererFilterChange('2D')}
                className={`px-3 py-1 rounded text-[10px] transition-all ${
                  rendererFilter === '2D'
                    ? 'bg-cyan-500/30 text-cyan-300'
                    : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60'
                }`}
              >
                2D
              </button>
              <button
                onClick={() => onRendererFilterChange('3D')}
                className={`px-3 py-1 rounded text-[10px] transition-all ${
                  rendererFilter === '3D'
                    ? 'bg-purple-500/30 text-purple-300'
                    : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60'
                }`}
              >
                3D
              </button>
            </div>

            {/* Separator */}
            <div className="w-px h-6 bg-white/20" />

            {/* Pattern Buttons */}
            <div className="flex items-center gap-1.5">
              {sortedPatterns.map((p) => {
                return (
                  <button
                    key={p.pattern}
                    onClick={() => onPatternChange(p.pattern)}
                    className={`w-7 h-7 rounded-full transition-all flex items-center justify-center ${
                      currentPattern === p.pattern
                        ? 'bg-white text-black shadow-lg shadow-white/50'
                        : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white/90'
                    }`}
                    title={`${p.name} (${p.key})`}
                  >
                    <span className="text-xs">{p.key}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* BOTTOM LEFT - CAMERA + RECORDING CONTROLS */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="absolute left-6 bottom-[25px] font-mono z-50 flex flex-col gap-4 pointer-events-auto">
        {/* Camera & Recording Controls Buttons */}
        <div className="bg-black/70 backdrop-blur-sm rounded-full py-2 px-3 border border-white/20 flex items-center gap-2 w-fit h-[50px]">
          <button
            onClick={onCameraToggle}
            className={`w-8 h-8 rounded-full transition-all cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95 ${ 
              showCamera
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
            title="Toggle Camera View (C)"
          >
            {showCamera ? <Video className="w-3.5 h-3.5" /> : <VideoOff className="w-3.5 h-3.5" />}
          </button>
          
          <button
            onClick={onAudioToggle}
            className={`w-8 h-8 rounded-full transition-all cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95 ${ 
              audioEnabled
                ? 'bg-white text-black shadow-lg shadow-white/50'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
            title="Toggle Audio Reactive Mode (A)"
          >
            {audioEnabled ? <Mic className="w-3.5 h-3.5" /> : <MicOff className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={onIdleDriveToggle}
            className={`w-8 h-8 rounded-full transition-all cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95 ${ 
              idleDrive
                ? 'bg-white text-black shadow-lg shadow-white/50'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
            title="Idle drive: keep hand-driven visuals moving when no hands are tracked (I)"
          >
            <InfinityIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* BOTTOM - MINIMALIST COLOR BAR */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <div className="absolute bottom-[25px] left-0 right-0 flex justify-center z-50 pointer-events-none">
        <div className="bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 max-w-4xl w-full mx-4 pointer-events-auto">
          <ColorController 
            selectedColors={selectedColors} 
            onColorsChange={onColorsChange}
            hue={hue}
            saturation={saturation}
            mode={colorMode}
            onHueChange={onHueChange}
            onModeChange={onColorModeChange}
            autoHueEnabled={autoHueEnabled}
            onAutoHueToggle={onAutoHueToggle}
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* BOTTOM RIGHT - HAND TRACKING STATUS OR AUDIO CONTROLS */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      
      {/* Hand Status - Hidden when audio enabled */}
      {!audioEnabled && (
          <div className="absolute bottom-[25px] right-6 z-50 bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/20 space-y-2 text-xs min-w-[200px] font-mono animate-in fade-in duration-300">
          <div className="text-white/80 mb-2">HAND</div>
          <div className="space-y-1">
              {handData.left && <HandStatus label="L HAND" hand={handData.left} />}
              {handData.right && <HandStatus label="R HAND" hand={handData.right} />}
              {handData.clapping && (
              <div className="text-red-500 text-base animate-bounce">
                  CLAP!
              </div>
              )}
              {!handData.left && !handData.right && (
              <div className="text-white/50">NO HANDS</div>
              )}
          </div>
          <div className="text-white/50 text-[10px] mt-2 pt-2 border-t border-white/20">
              OPEN=FOLLOW<br/>
              PINCH=SLOW 2F=MED 5F=FAST<br/>
              CLAP=EXPLODE
          </div>
          </div>
      )}

      {/* Audio Controls - Visible when audio enabled - Vertical Rectangle Style */}
      {audioEnabled && (
          <div className="absolute bottom-[25px] right-6 z-50 animate-in slide-in-from-right-5 fade-in duration-300">
              <div className="bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 font-mono flex flex-col gap-4 w-[160px]">
                  
                  {/* Header */}
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                      <Mic className="w-3.5 h-3.5 text-white/90 animate-pulse" />
                      <span className="text-[10px] font-bold text-white/80 tracking-wider">AUDIO</span>
                  </div>

                  {/* Sensitivity Slider */}
                  <div className="space-y-1 group">
                      <div className="flex justify-between text-[9px] text-white/50 font-medium">
                          <span className="group-hover:text-white/80 transition-colors">GAIN</span>
                          <span className="text-white">{Math.round(audioSensitivity * 100)}%</span>
                      </div>
                      <div className="relative h-4 flex items-center">
                          <input
                              type="range"
                              min="0"
                              max="1"
                              step="0.01"
                              value={audioSensitivity}
                              onChange={(e) => onAudioSensitivityChange(parseFloat(e.target.value))}
                              className="vj-slider w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer focus:outline-none"
                              style={{
                                  backgroundImage: `linear-gradient(to right, white 0%, white ${audioSensitivity * 100}%, rgba(255,255,255,0.2) ${audioSensitivity * 100}%)`
                              }}
                          />
                      </div>
                  </div>

                  {/* Toggles */}
                  <div className="flex flex-col gap-1.5">
                      <button
                          onClick={() => onAudioControlSpeedChange(!audioControlSpeed)}
                          className={`flex justify-between items-center px-2 py-1.5 rounded-md text-[9px] font-bold transition-all border ${
                              audioControlSpeed 
                                  ? 'bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' 
                                  : 'bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white'
                          }`}
                      >
                          <span>SPEED</span>
                          <div className={`w-1.5 h-1.5 rounded-full ${audioControlSpeed ? 'bg-black' : 'bg-white/30'}`} />
                      </button>
                      <button
                          onClick={() => onAudioControlDensityChange(!audioControlDensity)}
                          className={`flex justify-between items-center px-2 py-1.5 rounded-md text-[9px] font-bold transition-all border ${
                              audioControlDensity 
                                  ? 'bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' 
                                  : 'bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white'
                          }`}
                      >
                          <span>DENSITY</span>
                          <div className={`w-1.5 h-1.5 rounded-full ${audioControlDensity ? 'bg-black' : 'bg-white/30'}`} />
                      </button>
                      <button
                          onClick={() => onAudioTriggerBeatsChange(!audioTriggerBeats)}
                          className={`flex justify-between items-center px-2 py-1.5 rounded-md text-[9px] font-bold transition-all border ${
                              audioTriggerBeats 
                                  ? 'bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' 
                                  : 'bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white'
                          }`}
                      >
                          <span>BEATS</span>
                          <div className={`w-1.5 h-1.5 rounded-full ${audioTriggerBeats ? 'bg-black' : 'bg-white/30'}`} />
                      </button>
                  </div>
              </div>
          </div>
      )}
    </>
  );
}