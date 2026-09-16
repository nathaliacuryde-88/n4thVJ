import { useEffect, useRef, useState } from 'react';
import { AnalyserState, analyse, createState } from '../audio/analyse';

interface AudioAnalyzerProps {
  onAudioData: (data: ReturnType<typeof analyse>) => void;
  /**
   * The live microphone stream, or null once it is torn down.
   *
   * Recording borrows this track rather than opening the microphone again:
   * a second getUserMedia would prompt for permission a second time, in the
   * middle of a set.
   */
  onStream?: (stream: MediaStream | null) => void;
  enabled: boolean;
  sensitivity: number; // 0-1, how responsive to audio
}

export function AudioAnalyzer({ onAudioData, onStream, enabled, sensitivity }: AudioAnalyzerProps) {
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyzerRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  
  /** Envelopes, flux history and the last beat — all of it lives here. */
  const stateRef = useRef<AnalyserState>(createState());
  
  const [error, setError] = useState<string | null>(null);

  // Held in a ref so a new callback identity cannot tear the microphone down.
  const streamOut = useRef(onStream);
  streamOut.current = onStream;

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
        streamOut.current?.(null);
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
      onAudioData({ bass: 0, lowMid: 0, mid: 0, high: 0, overall: 0, beat: false, beatIntensity: 0, onset: 0 });
      
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
        streamOut.current?.(stream);

        const audioContext = new AudioContext();
        audioContextRef.current = audioContext;

        const analyzer = audioContext.createAnalyser();
        analyzer.fftSize = 2048;
            // Less smoothing than before: 0.8 averages a transient away, and a
        // transient is exactly what an onset detector is looking for.
        analyzer.smoothingTimeConstant = 0.55;
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
      const analyser = analyzerRef.current;
      const data = dataArrayRef.current;
      const context = audioContextRef.current;
      if (!analyser || !data || !context) return;

      analyser.getByteFrequencyData(data);
      onAudioData(
        analyse(data, context.sampleRate, stateRef.current, sensitivityRef.current, Date.now()),
      );

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
