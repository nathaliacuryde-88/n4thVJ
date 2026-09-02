/**
 * HandTracker and FaceRenderer pull MediaPipe straight off jsDelivr at runtime
 * rather than bundling it, so the browser fetches the WASM-backed vision tasks
 * on demand. TypeScript cannot resolve an https: specifier, so declare it.
 *
 * The shape is deliberately loose — it mirrors what the two call sites use.
 * Installing `@mediapipe/tasks-vision` as a dependency would give real types,
 * at the cost of bundling the runtime.
 */
declare module 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14' {
  export const FilesetResolver: {
    forVisionTasks(wasmPath: string): Promise<unknown>;
  };
  export const HandLandmarker: {
    createFromOptions(fileset: unknown, options: unknown): Promise<any>;
  };
  export const FaceLandmarker: {
    createFromOptions(fileset: unknown, options: unknown): Promise<any>;
    FACE_LANDMARKS_TESSELATION: unknown;
    FACE_LANDMARKS_CONTOURS: unknown;
    FACE_LANDMARKS_RIGHT_EYE: unknown;
    FACE_LANDMARKS_LEFT_EYE: unknown;
    FACE_LANDMARKS_FACE_OVAL: unknown;
    FACE_LANDMARKS_LIPS: unknown;
  };
  export const DrawingUtils: new (ctx: CanvasRenderingContext2D) => any;
}
