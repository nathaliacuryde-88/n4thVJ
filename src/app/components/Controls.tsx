import { useRef } from 'react';
import { Hand, HandData, VisualPattern } from '../App';
import { HOLD_MS, Layer } from '../config/LayerConfig';
import { Video, VideoOff, Mic, MicOff, Orbit, Sparkles } from 'lucide-react';
import { ColorController } from './ColorController';
import { RENDERER_CATEGORIES } from '../config/RendererCategories';
import { slotKey } from '../config/setlist';

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
  /** The stack, bottom first. One entry is the ordinary single-visual case. */
  layers: Layer[];
  /** Index into `layers` of the one the sliders and colour controls act on. */
  selectedLayer: number;
  /** Hold: stack this pattern as another layer, or take it back off. */
  onPatternHold: (pattern: VisualPattern) => void;
  onLayerCycle: () => void;
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
  /** Tonight's visuals in key order, as chosen in the library. */
  set: VisualPattern[];
  onOpenLibrary: () => void;
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
  fxEnabled: boolean;
  fxActive: boolean;
  onFxToggle: () => void;
}

function ControlButton({
  label,
  active,
  warn,
  onClick,
  title,
  children,
}: {
  label: string;
  active: boolean;
  warn?: boolean;
  onClick: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button onClick={onClick} title={title} className="flex flex-col items-center gap-1 group/btn">
      <span
        className={`w-8 h-8 rounded-full transition-all flex items-center justify-center group-hover/btn:scale-105 group-active/btn:scale-95 ${
          active
            ? warn
              ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/40'
              : 'bg-white text-black shadow-lg shadow-white/40'
            : 'bg-white/10 text-white/60 group-hover/btn:bg-white/20 group-hover/btn:text-white'
        }`}
      >
        {children}
      </span>
      <span
        className={`text-[8px] tracking-widest transition-colors ${
          active ? 'text-white/80' : 'text-white/35'
        }`}
      >
        {label}
      </span>
    </button>
  );
}

export function Controls({
  currentPattern,
  onPatternChange,
  layers,
  selectedLayer,
  onPatternHold,
  onLayerCycle,
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
  set,
  onOpenLibrary,
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
  fxEnabled,
  fxActive,
  onFxToggle,
}: ControlsProps) {
  
  // Tap switches the selected layer, hold stacks — the same split, and the same
  // hold length, as the number keys.
  const holdRef = useRef<{ pattern: VisualPattern; timer: number; fired: boolean } | null>(null);

  const cancelHold = () => {
    if (!holdRef.current) return;
    clearTimeout(holdRef.current.timer);
    holdRef.current = null;
  };

  const startHold = (pattern: VisualPattern) => {
    cancelHold();
    holdRef.current = {
      pattern,
      fired: false,
      timer: window.setTimeout(() => {
        if (holdRef.current) holdRef.current.fired = true;
        onPatternHold(pattern);
      }, HOLD_MS),
    };
  };

  const endHold = (pattern: VisualPattern) => {
    const hold = holdRef.current;
    if (!hold || hold.pattern !== pattern) return;
    clearTimeout(hold.timer);
    holdRef.current = null;
    if (!hold.fired) onPatternChange(pattern);
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* TOP - VISUAL PATTERN SELECTOR (Similar to Color Bar) */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 font-mono">
          <div className="flex items-center gap-4">
            {/* Back to the library */}
            <button
              onClick={onOpenLibrary}
              title="Back to the library to change the set (Esc)"
              className="px-3 py-1 rounded text-[10px] tracking-wider text-white/40 transition-all hover:bg-white/10 hover:text-white/80"
            >
              SET
            </button>

            <div className="w-px h-6 bg-white/20" />

            {/* The set, on the keys the library gave it */}
            <div className="flex items-center gap-1.5">
              {set.map((pattern, index) => {
                const layerIndex = layers.findIndex((l) => l.pattern === pattern);
                const isSelected = layerIndex === selectedLayer;
                const isStacked = layerIndex !== -1 && !isSelected;
                return (
                  <button
                    key={pattern}
                    onPointerDown={() => startHold(pattern)}
                    onPointerUp={() => endHold(pattern)}
                    onPointerLeave={cancelHold}
                    className={`relative w-7 h-7 rounded-full transition-all flex items-center justify-center ${
                      isSelected
                        ? 'bg-white text-black shadow-lg shadow-white/50'
                        : isStacked
                          ? 'bg-white/25 text-white ring-1 ring-emerald-400/70'
                          : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white/90'
                    }`}
                    title={`${RENDERER_CATEGORIES[pattern].name} (${slotKey(index)})${
                      layerIndex !== -1 ? ` — layer ${layerIndex + 1}` : ''
                    } · hold to stack`}
                  >
                    <span className="text-xs">{slotKey(index)}</span>
                    {layerIndex !== -1 && layers.length > 1 && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 text-black text-[7px] leading-3 text-center">
                        {layerIndex + 1}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Which layer the sliders are pointed at. Only worth the space once
                there is more than one. */}
            {layers.length > 1 && (
              <>
                <div className="w-px h-6 bg-white/20" />
                <button
                  onClick={onLayerCycle}
                  title="The layer the sliders and colours act on (L) — fade it with [ and ]"
                  className="px-2 py-1 rounded text-[10px] whitespace-nowrap bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-all"
                >
                  L{selectedLayer + 1}/{layers.length}
                  <span className="text-emerald-300/60">
                    {' '}{Math.round((layers[selectedLayer]?.opacity ?? 1) * 100)}%
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* BOTTOM ROW — controls, colour bar, hand/audio readout                */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* One row, not three overlapping absolute elements. The colour bar used
          to span the full width on top of the buttons at either end and swallow
          their clicks, which on a narrow window made them unusable. */}
      <div className="absolute bottom-[25px] left-6 right-6 z-50 flex items-end gap-4 font-mono pointer-events-none">
        <div className="shrink-0 pointer-events-auto">
        {/* Icons alone were a guessing game — each one says what it is. */}
        <div className="bg-black/70 backdrop-blur-sm rounded-2xl py-2 px-3 border border-white/20 flex items-end gap-2.5 w-fit">
          <ControlButton
            label="CAM"
            active={showCamera}
            onClick={onCameraToggle}
            title="Show the camera preview (C)"
          >
            {showCamera ? <Video className="w-3.5 h-3.5" /> : <VideoOff className="w-3.5 h-3.5" />}
          </ControlButton>

          <ControlButton
            label="MIC"
            active={audioEnabled}
            onClick={onAudioToggle}
            title="Audio-reactive mode: drive the visuals from the microphone (A)"
          >
            {audioEnabled ? <Mic className="w-3.5 h-3.5" /> : <MicOff className="w-3.5 h-3.5" />}
          </ControlButton>

          <ControlButton
            label="AUTO"
            active={idleDrive}
            onClick={onIdleDriveToggle}
            title="Auto-motion: keep hand-driven visuals moving when no hands are tracked (I)"
          >
            <Orbit className="w-3.5 h-3.5" />
          </ControlButton>

          <div className="w-px h-8 bg-white/15 self-center" />

          <ControlButton
            label="FX"
            active={fxEnabled && fxActive}
            warn={fxEnabled && fxActive}
            onClick={onFxToggle}
            title={
              fxEnabled
                ? 'Post effects are on. Click to bypass the whole chain, keeping every setting (X)'
                : 'Post effects bypassed. Click to bring them back (X)'
            }
          >
            <Sparkles className="w-3.5 h-3.5" />
          </ControlButton>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* BOTTOM - MINIMALIST COLOR BAR */}
      {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="flex-1 min-w-0 flex justify-center pointer-events-none">
          <div className="bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 max-w-4xl w-full pointer-events-auto">
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
          <div className="shrink-0 bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/20 space-y-2 text-xs min-w-[200px] font-mono animate-in fade-in duration-300 pointer-events-auto">
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
          <div className="shrink-0 animate-in slide-in-from-right-5 fade-in duration-300 pointer-events-auto">
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
      </div>

    </>
  );
}