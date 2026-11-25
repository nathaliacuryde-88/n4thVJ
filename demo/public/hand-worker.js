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

/* The model that finds the person rather than the hands: small, and loaded only if asked for. */
var PERSON = 'https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite';
/* The outline is worked out on a small copy of the frame and handed back smaller still. */
var SEGMENT_WIDTH = 256;
var MASK_WIDTH = 64;

/* The library comes as a CommonJS bundle: it fills in `exports`. */
self.exports = {};
var landmarker = null;
var files = null;
var segmenter = null;
var segmenterFailed = false;
var segmenterLoading = false;
var small = null;

/* Starts loading the person model; frames go without an outline until it is ready. */
function loadSegmenter() {
  if (segmenter || segmenterFailed || segmenterLoading || !files) return;
  segmenterLoading = true;
  self.exports.ImageSegmenter.createFromOptions(files, {
    baseOptions: { modelAssetPath: PERSON, delegate: 'GPU' },
    runningMode: 'VIDEO',
    outputConfidenceMasks: true,
    outputCategoryMask: false,
  }).then(function (made) {
    segmenter = made;
  }).catch(function (error) {
    segmenterFailed = true;
    self.postMessage({ type: 'note', reason: 'The person outline is unavailable: ' + String(error) });
  }).finally(function () {
    segmenterLoading = false;
  });
}

/* The person's outline in this frame as a small grid of bytes, or null. */
function outline(bitmap, time) {
  if (!segmenter) return null;
  var height = Math.max(2, Math.round(SEGMENT_WIDTH * bitmap.height / bitmap.width));
  if (!small || small.height !== height) small = new OffscreenCanvas(SEGMENT_WIDTH, height);
  small.getContext('2d').drawImage(bitmap, 0, 0, SEGMENT_WIDTH, height);
  var result = segmenter.segmentForVideo(small, time);
  var masks = result.confidenceMasks || [];
  // With two masks the first is the background; with one, it is the person.
  var mask = masks[masks.length - 1];
  if (!mask) return null;
  var values = mask.getAsFloat32Array();
  var from = { width: mask.width, height: mask.height };
  var outHeight = Math.max(2, Math.round(MASK_WIDTH * from.height / from.width));
  var out = new Uint8Array(MASK_WIDTH * outHeight);
  for (var y = 0; y < outHeight; y++) {
    var sy = Math.min(from.height - 1, Math.floor((y + 0.5) * from.height / outHeight));
    for (var x = 0; x < MASK_WIDTH; x++) {
      var sx = Math.min(from.width - 1, Math.floor((x + 0.5) * from.width / MASK_WIDTH));
      out[y * MASK_WIDTH + x] = Math.max(0, Math.min(255, Math.round(values[sy * from.width + sx] * 255)));
    }
  }
  for (var i = 0; i < masks.length; i++) masks[i].close();
  return { data: out, width: MASK_WIDTH, height: outHeight };
}

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
        files = await self.exports.FilesetResolver.forVisionTasks(BASE + '/wasm');
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
      var mask = null;
      if (message.mask) {
        loadSegmenter();
        try {
          mask = outline(bitmap, message.time);
        } catch (error) {
          // The hands matter more: an outline that fails is simply left out.
          segmenter = null;
          segmenterFailed = true;
          self.postMessage({ type: 'note', reason: 'The person outline stopped: ' + String(error) });
        }
      }
      self.postMessage({
        type: 'hands',
        time: message.time,
        landmarks: found.landmarks || [],
        handedness: (found.handedness || []).map(function (hand) {
          return [{ categoryName: hand[0] ? hand[0].categoryName : '' }];
        }),
        mask: mask,
      }, mask ? [mask.data.buffer] : []);
    } catch (error) {
      self.postMessage({ type: 'error', reason: String(error) });
    } finally {
      if (bitmap && bitmap.close) bitmap.close();
    }
  }
};
