import { useEffect, useRef } from 'react';

// Extend Window interface for MediaPipe globals
declare global {
  interface Window {
    FaceMesh: any;
  }
}

export interface FaceData {
  headRotation: number; // Yaw angle in degrees (-180 to 180)
  smile: number; // 0-1, how much smiling
  mouthOpen: number; // 0-1, how much mouth is open
  eyesClosed: number; // 0-1, how much eyes are closed
  position: { x: number; y: number }; // Normalized 0-1
  detected: boolean;
}

interface FaceTrackerProps {
  videoElement: HTMLVideoElement;
  onFaceData: (data: FaceData) => void;
}

export function FaceTracker({ videoElement, onFaceData }: FaceTrackerProps) {
  const faceMeshRef = useRef<any>(null);
  const animationFrameRef = useRef<number>();
  const isInitializedRef = useRef(false);

  useEffect(() => {
    let mounted = true;

    const initFaceTracking = async () => {
      if (isInitializedRef.current) return;
      
      try {
        console.log('🎭 Initializing MediaPipe Face Mesh...');

        // Load MediaPipe Face Mesh from CDN
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.4.1633559619/face_mesh.js';
        script.async = true;

        await new Promise<void>((resolve, reject) => {
          script.onload = () => resolve();
          script.onerror = (error) => {
            console.error('Failed to load Face Mesh script:', error);
            reject(error);
          };
          document.head.appendChild(script);
        });

        if (!mounted) return;

        // @ts-ignore - MediaPipe is loaded globally
        const FaceMesh = window.FaceMesh;

        if (!FaceMesh) {
          console.error('❌ MediaPipe FaceMesh not loaded from CDN');
          return;
        }

        console.log('✅ MediaPipe Face Mesh library loaded');

        const faceMesh = new FaceMesh({
          locateFile: (file: string) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.4.1633559619/${file}`;
          }
        });

        faceMesh.setOptions({
          maxNumFaces: 1,
          refineLandmarks: true,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5
        });

        faceMesh.onResults((results: any) => {
          if (!mounted) return;
          processResults(results);
        });

        faceMeshRef.current = faceMesh;
        isInitializedRef.current = true;

        console.log('✅ Face tracking initialized successfully');

        // Start processing video frames
        const processFrame = async () => {
          if (!mounted || !faceMeshRef.current) return;
          
          if (videoElement.readyState === videoElement.HAVE_ENOUGH_DATA) {
            await faceMeshRef.current.send({ image: videoElement });
          }
          
          animationFrameRef.current = requestAnimationFrame(processFrame);
        };

        processFrame();

      } catch (error) {
        console.error('❌ Failed to initialize face tracking:', error);
      }
    };

    const processResults = (results: any) => {
      if (!results.multiFaceLandmarks || results.multiFaceLandmarks.length === 0) {
        onFaceData({
          headRotation: 0,
          smile: 0,
          mouthOpen: 0,
          eyesClosed: 0,
          position: { x: 0.5, y: 0.5 },
          detected: false
        });
        return;
      }

      const landmarks = results.multiFaceLandmarks[0];

      // Calculate head rotation (yaw) using face landmarks
      const headRotation = calculateHeadRotation(landmarks);

      // Calculate smile (mouth corners up)
      const smile = calculateSmile(landmarks);

      // Calculate mouth open
      const mouthOpen = calculateMouthOpen(landmarks);

      // Calculate eyes closed
      const eyesClosed = calculateEyesClosed(landmarks);

      // Get face center position
      const noseTip = landmarks[1]; // Nose tip landmark
      const position = { x: noseTip.x, y: noseTip.y };

      onFaceData({
        headRotation,
        smile,
        mouthOpen,
        eyesClosed,
        position,
        detected: true
      });
    };

    if (videoElement && videoElement.readyState >= 2) {
      initFaceTracking();
    } else if (videoElement) {
      // Wait for video to be ready
      const handleLoadedData = () => {
        initFaceTracking();
      };
      videoElement.addEventListener('loadeddata', handleLoadedData);
      return () => {
        videoElement.removeEventListener('loadeddata', handleLoadedData);
      };
    }

    return () => {
      mounted = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [videoElement, onFaceData]);

  return null;
}

// Calculate head rotation (yaw) in degrees
function calculateHeadRotation(landmarks: any[]): number {
  // Use key facial landmarks to estimate yaw
  const noseTip = landmarks[1];
  const leftEye = landmarks[33];
  const rightEye = landmarks[263];
  const leftMouth = landmarks[61];
  const rightMouth = landmarks[291];

  // Calculate horizontal distances
  const eyeWidth = Math.abs(rightEye.x - leftEye.x);
  const mouthWidth = Math.abs(rightMouth.x - leftMouth.x);
  
  // Calculate nose position relative to eye center
  const eyeCenterX = (leftEye.x + rightEye.x) / 2;
  const noseOffset = noseTip.x - eyeCenterX;
  
  // Estimate yaw angle based on nose offset relative to eye width
  // Negative = turned left, Positive = turned right
  const yawRadians = (noseOffset / eyeWidth) * 1.2; // Amplify for better range
  const yawDegrees = yawRadians * (180 / Math.PI) * 2; // Convert to degrees
  
  // Clamp to reasonable range
  return Math.max(-90, Math.min(90, yawDegrees));
}

// Calculate smile intensity (0-1)
function calculateSmile(landmarks: any[]): number {
  // Mouth corners
  const leftMouth = landmarks[61];
  const rightMouth = landmarks[291];
  const topLip = landmarks[0];
  const bottomLip = landmarks[17];

  // Calculate mouth corner height relative to mouth center
  const mouthCenterY = (topLip.y + bottomLip.y) / 2;
  const leftCornerLift = mouthCenterY - leftMouth.y;
  const rightCornerLift = mouthCenterY - rightMouth.y;
  const avgLift = (leftCornerLift + rightCornerLift) / 2;

  // Normalize to 0-1 range
  const smile = Math.max(0, Math.min(1, avgLift * 20));
  return smile;
}

// Calculate mouth open amount (0-1)
function calculateMouthOpen(landmarks: any[]): number {
  // Upper and lower lip centers
  const upperLip = landmarks[13];
  const lowerLip = landmarks[14];
  
  // Calculate vertical distance
  const mouthHeight = Math.abs(lowerLip.y - upperLip.y);
  
  // Normalize to 0-1 range (typical max opening is about 0.05 in normalized coords)
  const openAmount = Math.max(0, Math.min(1, mouthHeight / 0.05));
  return openAmount;
}

// Calculate eyes closed amount (0-1)
function calculateEyesClosed(landmarks: any[]): number {
  // Left eye landmarks
  const leftEyeTop = landmarks[159];
  const leftEyeBottom = landmarks[145];
  const leftEyeHeight = Math.abs(leftEyeBottom.y - leftEyeTop.y);

  // Right eye landmarks
  const rightEyeTop = landmarks[386];
  const rightEyeBottom = landmarks[374];
  const rightEyeHeight = Math.abs(rightEyeBottom.y - rightEyeTop.y);

  // Average eye opening
  const avgEyeHeight = (leftEyeHeight + rightEyeHeight) / 2;

  // Typical open eye height is about 0.015-0.02 in normalized coords
  // Calculate how closed they are (inverted)
  const eyesClosed = 1 - Math.max(0, Math.min(1, avgEyeHeight / 0.02));
  
  return eyesClosed;
}
