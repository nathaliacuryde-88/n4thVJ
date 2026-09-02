import { useEffect, useRef } from 'react';
import { HandData } from '../App';

interface HandTrackerProps {
  videoElement: HTMLVideoElement;
  onHandData: (data: HandData) => void;
}

// Store previous hand states for velocity and hold duration tracking
interface HandHistory {
  position: { x: number; y: number };
  gesture: string;
  timestamp: number;
}

const TRAIL_LENGTH = 30; // Number of positions to remember
const PROXIMITY_THRESHOLD = 0.15; // Distance threshold for "hands together" explosion trigger
const VELOCITY_THRESHOLD = 0.02; // Minimum movement speed to count as active

export function HandTracker({ videoElement, onHandData }: HandTrackerProps) {
  const handLandmarkerRef = useRef<any>(null);
  const isInitializedRef = useRef(false);
  const lastVideoTimeRef = useRef(-1);
  const animationFrameRef = useRef<number | null>(null);
  
  // History tracking
  const leftHistoryRef = useRef<HandHistory[]>([]);
  const rightHistoryRef = useRef<HandHistory[]>([]);
  const gestureStartTimeRef = useRef<{ left?: number; right?: number }>({});
  const trailRef = useRef<{ x: number; y: number; hand: 'left' | 'right' }[]>([]);
  const prevDistanceRef = useRef<number | null>(null);

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
          minHandDetectionConfidence: 0.7,
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
      const currentTime = Date.now();
      const handData: HandData = {
        left: null,
        right: null
      };

      if (results.landmarks && results.handedness && results.landmarks.length > 0) {
        results.handedness.forEach((hand: any, index: number) => {
          const landmarks = results.landmarks[index];
          const handLabel = hand[0].categoryName.toLowerCase(); // 'left' or 'right'
          
          // Get palm center (landmark 9 is middle of palm)
          const palmCenter = landmarks[9];
          const position = { 
            x: 1 - palmCenter.x, // Mirror for natural interaction
            y: palmCenter.y 
          };
          
          // Detect gesture and finger count
          const gesture = detectGesture(landmarks);
          const fingerCount = countFingers(landmarks);
          
          // Calculate velocity
          const history = handLabel === 'left' ? rightHistoryRef.current : leftHistoryRef.current;
          let velocity = 0;
          
          if (history.length > 0) {
            const prev = history[history.length - 1];
            const dx = position.x - prev.position.x;
            const dy = position.y - prev.position.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const timeDiff = (currentTime - prev.timestamp) / 1000; // Convert to seconds
            velocity = timeDiff > 0 ? dist / timeDiff : 0;
            velocity = Math.min(velocity * 2, 3); // Scale and cap velocity
          }
          
          // Calculate hold duration
          const gestureKey = handLabel === 'left' ? 'right' : 'left';
          const prevGesture = history.length > 0 ? history[history.length - 1].gesture : null;
          
          if (prevGesture !== gesture) {
            // Gesture changed, reset timer
            gestureStartTimeRef.current[gestureKey as 'left' | 'right'] = currentTime;
          }
          
          const gestureStartTime = gestureStartTimeRef.current[gestureKey as 'left' | 'right'] || currentTime;
          const holdDuration = (currentTime - gestureStartTime) / 1000; // In seconds
          
          // Update history
          history.push({
            position,
            gesture,
            timestamp: currentTime
          });
          
          // Keep only recent history
          if (history.length > 10) {
            history.shift();
          }
          
          // Add to trail
          trailRef.current.push({
            x: position.x,
            y: position.y,
            hand: gestureKey as 'left' | 'right'
          });
          
          const handInfo = {
            position,
            gesture,
            pinchDistance: gesture === 'pinch' ? calculatePinchDistance(landmarks) : undefined,
            velocity,
            holdDuration,
            fingerCount,
            landmarks: landmarks.map((lm: any) => ({
              x: 1 - lm.x, // Mirror x coordinate
              y: lm.y,
              z: lm.z
            }))
          };

          // MediaPipe uses camera perspective, so we need to swap left/right
          if (handLabel === 'left') {
            handData.right = handInfo;
          } else {
            handData.left = handInfo;
          }
        });

        // Calculate distance between hands
        if (handData.left && handData.right) {
          const dx = handData.left.position.x - handData.right.position.x;
          const dy = handData.left.position.y - handData.right.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          handData.distanceBetweenHands = distance;
          
          // Simple proximity detection: hands close together = explosion trigger
          if (distance < PROXIMITY_THRESHOLD) {
            handData.clapping = true;
            handData.clapIntensity = 1.0 - (distance / PROXIMITY_THRESHOLD);
          }
        } else {
          prevDistanceRef.current = null;
        }
      }

      // Keep trail limited
      if (trailRef.current.length > TRAIL_LENGTH) {
        trailRef.current = trailRef.current.slice(-TRAIL_LENGTH);
      }
      
      // Add trail to hand data
      handData.gestureTrail = [...trailRef.current];

      onHandData(handData);
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

// Count extended fingers (0-5) - Works with both PALM and BACK of hand facing camera
function countFingers(landmarks: any[]): number {
  if (!landmarks || landmarks.length < 21) return 0;
  
  const wrist = landmarks[0];
  const palm = landmarks[9]; // Middle of palm
  
  // ═══════════════════════════════════════════════════════════════════════════
  // IMPROVED FINGER DETECTION - Works with PALM or BACK of hand
  // ═══════════════════════════════════════════════════════════════════════════
  // Strategy: Check if fingertips are "above" their base knuckles (MCP joints)
  // This works regardless of hand orientation because vertical is always vertical
  // ═══════════════════════════════════════════════════════════════════════════
  
  let extendedFingers = 0;
  
  // ───────────────────────────────────────────────────────────────────────────
  // THUMB (special case - horizontal movement)
  // ───────────────────────────────────────────────────────────────────────────
  const thumbTip = landmarks[4];
  const thumbIP = landmarks[3];
  const thumbMCP = landmarks[2];
  const thumbCMC = landmarks[1];
  
  // For thumb, check horizontal distance from base (works for both orientations)
  const thumbTipDist = Math.sqrt(
    Math.pow(thumbTip.x - thumbCMC.x, 2) + 
    Math.pow(thumbTip.y - thumbCMC.y, 2)
  );
  const thumbMCPDist = Math.sqrt(
    Math.pow(thumbMCP.x - thumbCMC.x, 2) + 
    Math.pow(thumbMCP.y - thumbCMC.y, 2)
  );
  
  // Thumb is extended if tip is farther from base than MCP joint
  if (thumbTipDist > thumbMCPDist * 1.2) {
    extendedFingers++;
  }
  
  // ───────────────────────────────────────────────────────────────────────────
  // OTHER FINGERS (Index, Middle, Ring, Pinky) - Vertical check
  // ───────────────────────────────────────────────────────────────────────────
  const fingerData = [
    { tip: 8, pip: 6, mcp: 5 },   // Index finger
    { tip: 12, pip: 10, mcp: 9 }, // Middle finger (NOTE: mcp is 9, which is palm center)
    { tip: 16, pip: 14, mcp: 13 }, // Ring finger
    { tip: 20, pip: 18, mcp: 17 }  // Pinky finger
  ];
  
  // Detect hand orientation using wrist and middle finger base
  const middleMCP = landmarks[9];
  const handVector = {
    y: middleMCP.y - wrist.y, // Positive if hand points down, negative if up
    z: middleMCP.z - wrist.z  // Z depth
  };
  
  for (const finger of fingerData) {
    const tip = landmarks[finger.tip];
    const pip = landmarks[finger.pip];
    const mcp = landmarks[finger.mcp];
    
    // ═══════════════════════════════════════════════════════════════════════
    // METHOD 1: Vertical position check (works for most cases)
    // ═══════════════════════════════════════════════════════════════════════
    // If tip is ABOVE (smaller Y) the MCP joint, finger is likely extended
    const verticalExtension = tip.y < mcp.y - 0.02; // 0.02 threshold for noise
    
    // ═══════════════════════════════════════════════════════════════════════
    // METHOD 2: Distance check (backup method)
    // ═══════════════════════════════════════════════════════════════════════
    const tipToWrist = Math.sqrt(
      Math.pow(tip.x - wrist.x, 2) + 
      Math.pow(tip.y - wrist.y, 2) + 
      Math.pow(tip.z - wrist.z, 2)
    );
    const pipToWrist = Math.sqrt(
      Math.pow(pip.x - wrist.x, 2) + 
      Math.pow(pip.y - wrist.y, 2) + 
      Math.pow(pip.z - wrist.z, 2)
    );
    const distanceExtension = tipToWrist > pipToWrist * 1.05;
    
    // ═══════════════════════════════════════════════════════════════════════
    // METHOD 3: Straightness check (tip-pip-mcp angle)
    // ═══════════════════════════════════════════════════════════════════════
    const pipToMCP = {
      x: mcp.x - pip.x,
      y: mcp.y - pip.y,
      z: mcp.z - pip.z
    };
    const pipToTip = {
      x: tip.x - pip.x,
      y: tip.y - pip.y,
      z: tip.z - pip.z
    };
    
    // Normalize vectors
    const lenPipMCP = Math.sqrt(pipToMCP.x ** 2 + pipToMCP.y ** 2 + pipToMCP.z ** 2);
    const lenPipTip = Math.sqrt(pipToTip.x ** 2 + pipToTip.y ** 2 + pipToTip.z ** 2);
    
    if (lenPipMCP > 0 && lenPipTip > 0) {
      const dotProduct = (
        (pipToMCP.x / lenPipMCP) * (pipToTip.x / lenPipTip) +
        (pipToMCP.y / lenPipMCP) * (pipToTip.y / lenPipTip) +
        (pipToMCP.z / lenPipMCP) * (pipToTip.z / lenPipTip)
      );
      
      // If dot product is negative, finger is straight (pointing opposite direction)
      const straightnessExtension = dotProduct < -0.3;
      
      // ═════════════════════════════════════════════════════════════════════
      // COMBINE ALL METHODS - Finger is extended if ANY method confirms it
      // ═════════════════════════════════════════════════════════════════════
      if (verticalExtension || distanceExtension || straightnessExtension) {
        extendedFingers++;
      }
    } else {
      // Fallback to vertical check only
      if (verticalExtension || distanceExtension) {
        extendedFingers++;
      }
    }
  }
  
  return extendedFingers;
}

function detectGesture(landmarks: any[]): 'open' | 'fist' | 'pinch' | 'none' {
  if (!landmarks || landmarks.length < 21) return 'none';
  
  const palm = landmarks[9]; // Middle of palm
  const thumbTip = landmarks[4];
  const indexTip = landmarks[8];
  const middleTip = landmarks[12];
  const ringTip = landmarks[16];
  const pinkyTip = landmarks[20];
  
  // Finger PIP joints (middle joints)
  const indexPIP = landmarks[6];
  const middlePIP = landmarks[10];
  const ringPIP = landmarks[14];
  const pinkyPIP = landmarks[18];

  // Check for pinch (thumb and index close together)
  const thumbIndexDist = Math.sqrt(
    Math.pow(thumbTip.x - indexTip.x, 2) + 
    Math.pow(thumbTip.y - indexTip.y, 2) +
    Math.pow(thumbTip.z - indexTip.z, 2)
  );

  if (thumbIndexDist < 0.06) {
    return 'pinch';
  }

  // Check if fingers are extended using 3D distance from palm
  const indexTipDist = Math.sqrt(
    Math.pow(indexTip.x - palm.x, 2) + 
    Math.pow(indexTip.y - palm.y, 2) + 
    Math.pow(indexTip.z - palm.z, 2)
  );
  const indexPIPDist = Math.sqrt(
    Math.pow(indexPIP.x - palm.x, 2) + 
    Math.pow(indexPIP.y - palm.y, 2) + 
    Math.pow(indexPIP.z - palm.z, 2)
  );
  const indexExtended = indexTipDist > indexPIPDist * 1.1;
  
  const middleTipDist = Math.sqrt(
    Math.pow(middleTip.x - palm.x, 2) + 
    Math.pow(middleTip.y - palm.y, 2) + 
    Math.pow(middleTip.z - palm.z, 2)
  );
  const middlePIPDist = Math.sqrt(
    Math.pow(middlePIP.x - palm.x, 2) + 
    Math.pow(middlePIP.y - palm.y, 2) + 
    Math.pow(middlePIP.z - palm.z, 2)
  );
  const middleExtended = middleTipDist > middlePIPDist * 1.1;
  
  const ringTipDist = Math.sqrt(
    Math.pow(ringTip.x - palm.x, 2) + 
    Math.pow(ringTip.y - palm.y, 2) + 
    Math.pow(ringTip.z - palm.z, 2)
  );
  const ringPIPDist = Math.sqrt(
    Math.pow(ringPIP.x - palm.x, 2) + 
    Math.pow(ringPIP.y - palm.y, 2) + 
    Math.pow(ringPIP.z - palm.z, 2)
  );
  const ringExtended = ringTipDist > ringPIPDist * 1.1;
  
  const pinkyTipDist = Math.sqrt(
    Math.pow(pinkyTip.x - palm.x, 2) + 
    Math.pow(pinkyTip.y - palm.y, 2) + 
    Math.pow(pinkyTip.z - palm.z, 2)
  );
  const pinkyPIPDist = Math.sqrt(
    Math.pow(pinkyPIP.x - palm.x, 2) + 
    Math.pow(pinkyPIP.y - palm.y, 2) + 
    Math.pow(pinkyPIP.z - palm.z, 2)
  );
  const pinkyExtended = pinkyTipDist > pinkyPIPDist * 1.1;

  const extendedCount = [indexExtended, middleExtended, ringExtended, pinkyExtended].filter(Boolean).length;

  if (extendedCount >= 3) {
    return 'open';
  } else if (extendedCount <= 1) {
    return 'fist';
  }

  return 'none';
}

function calculatePinchDistance(landmarks: any[]): number {
  const thumbTip = landmarks[4];
  const indexTip = landmarks[8];
  
  return Math.sqrt(
    Math.pow(thumbTip.x - indexTip.x, 2) + 
    Math.pow(thumbTip.y - indexTip.y, 2) +
    Math.pow(thumbTip.z - indexTip.z, 2)
  );
}
