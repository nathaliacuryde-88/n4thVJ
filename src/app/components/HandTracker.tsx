import { useEffect, useRef } from 'react';
import { HandData } from '../App';
import { HandReader } from '../hands/track';

interface HandTrackerProps {
  videoElement: HTMLVideoElement;
  onHandData: (data: HandData) => void;
}

export function HandTracker({ videoElement, onHandData }: HandTrackerProps) {
  const handLandmarkerRef = useRef<any>(null);
  const isInitializedRef = useRef(false);
  const lastVideoTimeRef = useRef(-1);
  const animationFrameRef = useRef<number | null>(null);
  
  /** Steadies, settles and reads what the model sees (hands/track.ts). */
  const readerRef = useRef(new HandReader());

  useEffect(() => {
    let mounted = true;

    const initHandTracking = async () => {
      if (isInitializedRef.current) return;
      
      try {
        console.log('✋ Initializing MediaPipe Hand Landmarker (Tasks Vision API)...');
        
        // Import the SAME library as FaceRenderer - v0.10.14
        const vision = await import(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14'
        );
        
        const { HandLandmarker, FilesetResolver } = vision;

        // Initialize WASM (shared with FaceRenderer)
        const filesetResolver = await FilesetResolver.forVisionTasks(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm'
        );

        // Create HandLandmarker
        handLandmarkerRef.current = await HandLandmarker.createFromOptions(filesetResolver, {
          baseOptions: {
            modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task',
            delegate: 'GPU'
          },
          runningMode: 'VIDEO',
          numHands: 2, // Track both hands
          // A fist is a harder shape for the model than an open palm; at 0.7
          // it was often not found at all.
          minHandDetectionConfidence: 0.5,
          minHandPresenceConfidence: 0.5,
          minTrackingConfidence: 0.5
        });

        console.log('✅ Hand tracking initialized (Tasks Vision API)');
        isInitializedRef.current = true;

        if (mounted) {
          startDetectionLoop();
        }

      } catch (err) {
        console.error('❌ Error initializing hand tracking:', err);
      }
    };

    const startDetectionLoop = () => {
      const detectHands = () => {
        if (!mounted || !handLandmarkerRef.current || !videoElement) {
          return;
        }

        const currentTime = performance.now();

        // Only process if video has a new frame
        if (videoElement.currentTime !== lastVideoTimeRef.current) {
          lastVideoTimeRef.current = videoElement.currentTime;

          try {
            const results = handLandmarkerRef.current.detectForVideo(videoElement, currentTime);
            processResults(results);
          } catch (error) {
            console.error('Hand detection error:', error);
          }
        }

        animationFrameRef.current = requestAnimationFrame(detectHands);
      };

      detectHands();
    };

    const processResults = (results: any) => {
      const aspect = videoElement.videoWidth && videoElement.videoHeight
        ? videoElement.videoWidth / videoElement.videoHeight
        : 16 / 9;
      onHandData(readerRef.current.next(results, performance.now(), aspect));
    };

    // Wait for video to be ready, then initialize
    const checkVideoReady = () => {
      if (videoElement && videoElement.readyState >= 2) {
        initHandTracking();
      } else {
        setTimeout(checkVideoReady, 100);
      }
    };

    checkVideoReady();

    return () => {
      mounted = false;
      
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (handLandmarkerRef.current) {
        try {
          handLandmarkerRef.current.close();
          handLandmarkerRef.current = null;
        } catch (e) {
          console.warn('Error closing hand landmarker:', e);
        }
      }
      
      isInitializedRef.current = false;
    };
  }, [videoElement, onHandData]);

  return null;
}
