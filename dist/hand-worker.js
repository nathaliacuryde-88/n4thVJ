/*
 * ═══════════════════════════════════════════════════════════════════════════
 * HAND TRACKING, OFF THE MAIN THREAD
 * ═══════════════════════════════════════════════════════════════════════════
 * Finding the hands in a camera frame ends with reading the answer back from
 * the graphics card, and that read stops whatever thread asked for it until
 * the card has finished. On the page's own thread, that is the thread the
 * visuals are drawn from: every camera frame cost the visuals a pause.
 *
 * Here it is the worker that waits. The page hands it each camera frame and
 * gets the landmarks back when they are ready; in between, it goes on drawing.
 *
 * A plain script rather than a module: the hand model loads its own engine
 * with importScripts, which a module worker is not allowed to call.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/* global importScripts */
var BASE = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14';
var MODEL = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';

/* The library comes as a CommonJS bundle: it fills in `exports`. */
self.exports = {};
var landmarker = null;

self.onmessage = function (event) {
  var message = event.data;

  if (message.type === 'init') {
    (async function () {
      try {
        // Fetched and run from memory rather than imported by address: the
        // file is served as "application/node", which a browser will not run
        // as a script however plainly it is one.
        var source = await (await fetch(BASE + '/vision_bundle.cjs')).text();
        var address = URL.createObjectURL(new Blob([source], { type: 'text/javascript' }));
        try {
          importScripts(address);
        } finally {
          URL.revokeObjectURL(address);
        }
        var files = await self.exports.FilesetResolver.forVisionTasks(BASE + '/wasm');
        landmarker = await self.exports.HandLandmarker.createFromOptions(files, {
          baseOptions: { modelAssetPath: MODEL, delegate: 'GPU' },
          runningMode: 'VIDEO',
          numHands: 2,
          minHandDetectionConfidence: 0.5,
          minHandPresenceConfidence: 0.5,
          minTrackingConfidence: 0.5,
        });
        self.postMessage({ type: 'ready' });
      } catch (error) {
        self.postMessage({ type: 'failed', reason: String(error) });
      }
    })();
    return;
  }

  if (message.type === 'frame') {
    var bitmap = message.bitmap;
    try {
      if (!landmarker) throw new Error('not ready');
      var found = landmarker.detectForVideo(bitmap, message.time);
      self.postMessage({
        type: 'hands',
        time: message.time,
        landmarks: found.landmarks || [],
        handedness: (found.handedness || []).map(function (hand) {
          return [{ categoryName: hand[0] ? hand[0].categoryName : '' }];
        }),
      });
    } catch (error) {
      self.postMessage({ type: 'error', reason: String(error) });
    } finally {
      if (bitmap && bitmap.close) bitmap.close();
    }
  }
};
