import { useEffect, useRef, useState } from 'react';
import { AudioData } from '../App';

interface AudioAnalyzerProps {
  onAudioData: (data: AudioData) => void;
  enabled: boolean;
  sensitivity: number; // 0-1, how responsive to audio
}

export function AudioAnalyzer({ onAudioData, enabled, sensitivity }: AudioAnalyzerProps) {
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyzerRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  
  // Beat detection state
  const beatHistoryRef = useRef<number[]>([]);
  const lastBeatTimeRef = useRef<number>(0);
  
  const [error, setError] = useState<string | null>(null);

  // Read inside the analyse loop rather than closed over, so that dragging the
  // GAIN slider no longer tears the microphone down and re-prompts for
  // permission on every step.
  const sensitivityRef = useRef(sensitivity);
  sensitivityRef.current = sensitivity;

  useEffect(() => {
    // getUserMedia is in flight across an await; if the effect is torn down
    // meanwhile, the resolved stream must be stopped rather than stored, or the
    // microphone indicator stays lit with nothing listening.
    let cancelled = false;

    const teardown = () => {
      cancelled = true;
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
      const context = audioContextRef.current;
      audioContextRef.current = null;
      // close() on an already-closed context rejects; the old code closed the
      // same context from both the effect body and its cleanup.
      if (context && context.state !== 'closed') {
        void context.close();
      }
      analyzerRef.current = null;
      dataArrayRef.current = null;
    };

    if (!enabled) {
      teardown();
      
      // Send empty audio data
      onAudioData({
        bass: 0,
        mid: 0,
        high: 0,
        overall: 0,
        beat: false,
        beatIntensity: 0
      });
      
      return;
    }

    // Initialize audio
    const initAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        if (cancelled) {
          stream.getTracks().forEach(track => track.stop());
          return;
        }
        streamRef.current = stream;

        const audioContext = new AudioContext();
        audioContextRef.current = audioContext;

        const analyzer = audioContext.createAnalyser();
        analyzer.fftSize = 2048;
        analyzer.smoothingTimeConstant = 0.8;
        analyzerRef.current = analyzer;

        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyzer);

        const bufferLength = analyzer.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        dataArrayRef.current = dataArray;

        setError(null);
        analyze();
      } catch (err) {
        if (cancelled) return;
        setError('Microphone access denied');
        console.error('Audio initialization error:', err);
      }
    };

    const analyze = () => {
      if (!analyzerRef.current || !dataArrayRef.current) return;

      analyzerRef.current.getByteFrequencyData(dataArrayRef.current);
      
      const dataArray = dataArrayRef.current;
      const bufferLength = dataArray.length;
      
      // Calculate frequency bands
      // Bass: 20-250Hz (bins 0-24 at 44.1kHz sample rate)
      // Mid: 250Hz-4kHz (bins 24-384)
      // High: 4kHz+ (bins 384+)
      
      const bassEnd = Math.floor(bufferLength * 0.12); // ~250Hz
      const midEnd = Math.floor(bufferLength * 0.4); // ~4kHz
      
      let bassSum = 0;
      let midSum = 0;
      let highSum = 0;
      let overallSum = 0;
      
      for (let i = 0; i < bufferLength; i++) {
        const value = dataArray[i];
        overallSum += value;
        
        if (i < bassEnd) {
          bassSum += value;
        } else if (i < midEnd) {
          midSum += value;
        } else {
          highSum += value;
        }
      }
      
      // Normalize to 0-1 range and apply sensitivity
      const sensitivity = sensitivityRef.current;
      const bass = Math.min(1, (bassSum / (bassEnd * 255)) * (1 + sensitivity));
      const mid = Math.min(1, (midSum / ((midEnd - bassEnd) * 255)) * (1 + sensitivity));
      const high = Math.min(1, (highSum / ((bufferLength - midEnd) * 255)) * (1 + sensitivity));
      const overall = Math.min(1, (overallSum / (bufferLength * 255)) * (1 + sensitivity));
      
      // Beat detection using bass energy
      const currentTime = Date.now();
      const beatThreshold = 0.6 * sensitivity; // Adjustable beat sensitivity
      
      beatHistoryRef.current.push(bass);
      if (beatHistoryRef.current.length > 10) {
        beatHistoryRef.current.shift();
      }
      
      const averageBass = beatHistoryRef.current.reduce((a, b) => a + b, 0) / beatHistoryRef.current.length;
      const beatDetected = bass > averageBass * 1.5 && 
                          bass > beatThreshold && 
                          currentTime - lastBeatTimeRef.current > 300; // Min 300ms between beats
      
      if (beatDetected) {
        lastBeatTimeRef.current = currentTime;
      }
      
      const beatIntensity = beatDetected ? Math.min(1, (bass - averageBass) / averageBass) : 0;
      
      onAudioData({
        bass,
        mid,
        high,
        overall,
        beat: beatDetected,
        beatIntensity
      });
      
      animationFrameRef.current = requestAnimationFrame(analyze);
    };

    initAudio();

    return teardown;
  }, [enabled, onAudioData]);

  if (error) {
    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500/20 border border-red-500 px-4 py-2 rounded">
        <p className="text-red-500 font-mono">{error}</p>
      </div>
    );
  }

  return null;
}
