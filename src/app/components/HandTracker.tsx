import { useEffect, useRef } from 'react';
import { HandData } from '../App';
import { HandReader, Seen } from '../hands/track';
import { presenceWanted, publishPresence } from '../hands/presence';

interface HandTrackerProps {
  videoElement: HTMLVideoElement;
  onHandData: (data: HandData) => void;
}

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FINDING THE HANDS
 * ═══════════════════════════════════════════════════════════════════════════
 * Runs the hand model on each camera frame and hands what it finds to the
 * reader (hands/track.ts), which steadies it and turns it into gestures.
 *
 * TWO WAYS TO RUN IT. In a worker, where the model's wait on the graphics
 * card does not hold up the drawing of the visuals (public/hand-worker.js) —
 * that is tried first. Or on the page itself, as it always ran. If the worker
 * cannot start, takes too long, or goes quiet, tracking moves to the page
 * and carries on: slower is better than no hands.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** How long the worker has to get ready, and how long it may go without answering, in ms. */
const WORKER_START_MS = 25000;
const WORKER_SILENCE_MS = 5000;
/** The first frame also builds the model's programs on the graphics card, so it is given longer. */
const WORKER_FIRST_FRAME_MS = 20000;
/** The person outline is a second model: loading it and its first run both hold the worker, once. */
const WORKER_OUTLINE_MS = 60000;
/** The camera frame is handed over at this width: the model works far smaller still. */
const FRAME_WIDTH = 640;

const MODEL = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';
const LIBRARY = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14';

export function HandTracker({ videoElement, onHandData }: HandTrackerProps) {
  /** Steadies, settles and reads what the model sees (hands/track.ts). */
  const readerRef = useRef(new HandReader());

  useEffect(() => {
    let mounted = true;
    let raf = 0;
    let lastVideoTime = -1;
    let worker: Worker | null = null;
    let landmarker: { detectForVideo: (v: HTMLVideoElement, t: number) => Seen; close: () => void } | null = null;
    /** Timers for the worker's start and for its silences. */
    let startTimer = 0;
    let waitingSince = 0;

    const aspect = () =>
      videoElement.videoWidth && videoElement.videoHeight ? videoElement.videoWidth / videoElement.videoHeight : 16 / 9;
    const report = (seen: Seen, at: number) => {
      if (mounted) onHandData(readerRef.current.next(seen, at, aspect()));
    };

    // ── on the page ────────────────────────────────────────────────────────
    const runOnPage = async () => {
      if (!mounted || landmarker) return;
      try {
        const vision = await import(/* @vite-ignore */ LIBRARY);
        const files = await vision.FilesetResolver.forVisionTasks(`${LIBRARY}/wasm`);
        const made = await vision.HandLandmarker.createFromOptions(files, {
          baseOptions: { modelAssetPath: MODEL, delegate: 'GPU' },
          runningMode: 'VIDEO',
          numHands: 2,
          // A fist is a harder shape for the model than an open palm; at 0.7
          // it was often not found at all.
          minHandDetectionConfidence: 0.5,
          minHandPresenceConfidence: 0.5,
          minTrackingConfidence: 0.5,
        });
        if (!mounted) {
          made.close();
          return;
        }
        landmarker = made;
        console.log('✋ Hand tracking is running on the page.');
        const loop = () => {
          if (!mounted || !landmarker) return;
          raf = requestAnimationFrame(loop);
          if (videoElement.currentTime === lastVideoTime) return;
          lastVideoTime = videoElement.currentTime;
          try {
            const now = performance.now();
            report(landmarker.detectForVideo(videoElement, now), now);
          } catch (error) {
            console.error('Hand detection error:', error);
          }
        };
        loop();
      } catch (error) {
        console.error('Hand tracking could not start:', error);
      }
    };

    // ── in a worker ────────────────────────────────────────────────────────
    const leaveWorker = (why: string) => {
      if (!worker) return;
      console.warn(`Hand tracking is moving to the page: ${why}`);
      window.clearTimeout(startTimer);
      cancelAnimationFrame(raf);
      worker.terminate();
      worker = null;
      void runOnPage();
    };

    const runInWorker = () => {
      if (typeof Worker === 'undefined' || typeof createImageBitmap !== 'function' || typeof OffscreenCanvas === 'undefined') {
        void runOnPage();
        return;
      }
      try {
        worker = new Worker(`${import.meta.env.BASE_URL}hand-worker.js`);
      } catch {
        void runOnPage();
        return;
      }
      let ready = false;
      let busy = false;
      let answered = false;
      let complained = false;
      /** Whether an outline has been asked for and none has come back yet: its first one is slow too. */
      let outlinePending = false;
      let outlineSeen = false;
      startTimer = window.setTimeout(() => { if (!ready) leaveWorker('it took too long to start'); }, WORKER_START_MS);

      const loop = () => {
        if (!mounted || !worker) return;
        raf = requestAnimationFrame(loop);
        if (busy) {
          if (performance.now() - waitingSince > (outlinePending ? WORKER_OUTLINE_MS : answered ? WORKER_SILENCE_MS : WORKER_FIRST_FRAME_MS)) leaveWorker('the worker stopped answering');
          return;
        }
        if (videoElement.currentTime === lastVideoTime || videoElement.readyState < 2) return;
        lastVideoTime = videoElement.currentTime;
        busy = true;
        waitingSince = performance.now();
        const time = waitingSince;
        const width = Math.min(FRAME_WIDTH, videoElement.videoWidth || FRAME_WIDTH);
        createImageBitmap(videoElement, {
          resizeWidth: width,
          resizeHeight: Math.max(1, Math.round(width / aspect())),
          resizeQuality: 'low',
        }).then((bitmap) => {
          if (!worker) {
            bitmap.close();
            return;
          }
          // The person's outline too, but only while a visual is using it.
          const mask = presenceWanted();
          if (mask && !outlineSeen) outlinePending = true;
          worker.postMessage({ type: 'frame', bitmap, time, mask }, [bitmap]);
        }).catch(() => { busy = false; });
      };

      worker.onmessage = (event: MessageEvent) => {
        const message = event.data;
        if (message.type === 'ready') {
          ready = true;
          window.clearTimeout(startTimer);
          console.log('✋ Hand tracking is running in a worker.');
          loop();
        } else if (message.type === 'hands') {
          busy = false;
          answered = true;
          if (message.mask) {
            outlineSeen = true;
            outlinePending = false;
            publishPresence(message.mask.data, message.mask.width, message.mask.height);
          }
          report({ landmarks: message.landmarks, handedness: message.handedness }, message.time);
        } else if (message.type === 'note') {
          // The outline is not coming; stop allowing extra time for it.
          outlineSeen = true;
          outlinePending = false;
          console.warn(message.reason);
        } else if (message.type === 'failed') {
          leaveWorker(message.reason);
        } else if (message.type === 'error') {
          // One bad frame is let go; a worker that fails on its very first is no use.
          busy = false;
          if (!complained) {
            complained = true;
            console.warn('Hand tracking worker:', message.reason);
          }
          if (!answered) leaveWorker(message.reason);
        }
      };
      worker.onerror = (event) => leaveWorker(event.message || 'the worker failed');
      worker.postMessage({ type: 'init' });
    };

    // Wait for the camera to have a picture, then begin.
    const begin = () => {
      if (!mounted) return;
      if (videoElement.readyState >= 2) runInWorker();
      else window.setTimeout(begin, 100);
    };
    begin();

    return () => {
      mounted = false;
      window.clearTimeout(startTimer);
      cancelAnimationFrame(raf);
      worker?.terminate();
      worker = null;
      try {
        landmarker?.close();
      } catch (error) {
        console.warn('Error closing hand landmarker:', error);
      }
      landmarker = null;
    };
  }, [videoElement, onHandData]);

  return null;
}
