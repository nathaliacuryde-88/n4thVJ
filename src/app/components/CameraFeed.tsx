import { useEffect, useRef, useState } from 'react';
import { Camera, AlertCircle, RefreshCw } from 'lucide-react';

interface CameraFeedProps {
  onVideoReady: (video: HTMLVideoElement) => void;
}

export function CameraFeed({ onVideoReady }: CameraFeedProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  const startCamera = async () => {
    try {
      setIsLoading(true);
      setError('');
      
      // Check if getUserMedia is available
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera API not supported in this browser. Please use a modern browser like Chrome, Firefox, or Edge.');
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480, facingMode: 'user' },
        audio: false
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play();
          onVideoReady(videoRef.current!);
          setIsLoading(false);
        };
      }
    } catch (err) {
      // Don't log to console - error is displayed in UI
      setIsLoading(false);
      if (err instanceof Error) {
        if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
          setError('Camera permission denied. Please click the camera icon in your browser\'s address bar and allow camera access, then click Retry below.');
        } else if (err.name === 'NotFoundError') {
          setError('No camera found. Please connect a camera to your device.');
        } else if (err.name === 'NotReadableError') {
          setError('Camera is already in use by another application. Please close other apps using the camera and try again.');
        } else if (err.name === 'OverconstrainedError') {
          setError('Camera does not meet requirements. Trying with default settings...');
          // Retry with no constraints
          setTimeout(() => {
            retryWithDefaultSettings();
          }, 1000);
        } else {
          setError('Error: ' + err.message);
        }
      }
    }
  };

  const retryWithDefaultSettings = async () => {
    try {
      setIsLoading(true);
      setError('');
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play();
          onVideoReady(videoRef.current!);
          setIsLoading(false);
        };
      }
    } catch (err) {
      setIsLoading(false);
      setError('Unable to access camera with default settings.');
    }
  };

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    startCamera();
  };

  useEffect(() => {
    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [onVideoReady]);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="w-48 h-36 rounded-lg border-2 border-white/20 shadow-lg bg-black"
        style={{ transform: 'scaleX(-1)' }}
        playsInline
        muted
      />
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/95 rounded-lg p-3 gap-2">
          <AlertCircle className="w-6 h-6 text-red-400" />
          <p className="text-[10px] text-red-400 text-center leading-tight">{error}</p>
          <button
            onClick={handleRetry}
            className="mt-1 px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-[10px] text-white flex items-center gap-1 transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            Retry
          </button>
          <a
            href="https://support.google.com/chrome/answer/2693767"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] text-blue-400 hover:text-blue-300 underline"
          >
            How to enable camera
          </a>
        </div>
      )}
      {isLoading && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-lg gap-2">
          <Camera className="w-6 h-6 text-white/60 animate-pulse" />
          <p className="text-xs text-white/60">Loading camera...</p>
        </div>
      )}
    </div>
  );
}