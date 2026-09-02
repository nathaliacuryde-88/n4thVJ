import type { HandData, AudioData } from '../../App';

// MediaPipe Face Landmarker types
interface FaceLandmarkerResult {
  faceLandmarks?: Array<Array<{ x: number; y: number; z: number }>>;
  faceBlendshapes?: Array<{
    categories: Array<{ categoryName: string; score: number }>;
  }>;
  facialTransformationMatrixes?: Array<{ data: number[] }>;
}

export class FaceRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private faceLandmarker: any = null;
  private isLoading = true;
  private lastVideoTime = -1;
  private results: FaceLandmarkerResult | undefined;
  private video: HTMLVideoElement | null = null;
  
  // State flags to prevent crash loops
  private hasFailed = false; 
  private isLocalInitializing = false; // Tracks if THIS instance is trying to init

  // Static singleton variables - prevents reloading WASM binaries multiple times
  private static filesetResolver: any = null;
  private static faceLandmarkerClass: any = null;
  private static drawingUtilsClass: any = null;
  private static isGlobalInitializing = false;
  
  // DrawingUtils instance
  private drawingUtils: any = null;
  
  private initAttempts = 0;
  private maxInitAttempts = 60; // Try for 60 seconds
  
  // Face mesh connections for tesselation
  private readonly FACE_TESSELATION = [
    [127, 34], [34, 139], [139, 127], [11, 0], [0, 37], [37, 11], [232, 231], [231, 120], [120, 232],
    [72, 37], [37, 39], [39, 72], [128, 121], [121, 47], [47, 128], [232, 121], [121, 128], [128, 232],
    [104, 69], [69, 67], [67, 104], [175, 171], [171, 148], [148, 175], [118, 50], [50, 101], [101, 118],
    [73, 39], [39, 40], [40, 73], [9, 151], [151, 108], [108, 9], [48, 115], [115, 131], [131, 48],
    [194, 204], [204, 211], [211, 194], [74, 40], [40, 185], [185, 74], [80, 42], [42, 183], [183, 80],
    [40, 92], [92, 186], [186, 40], [230, 229], [229, 118], [118, 230], [202, 212], [212, 214], [214, 202],
    [83, 18], [18, 17], [17, 83], [76, 61], [61, 146], [146, 76], [160, 29], [29, 30], [30, 160],
    [56, 157], [157, 173], [173, 56], [106, 204], [204, 194], [194, 106], [135, 214], [214, 192], [192, 135],
    [203, 165], [165, 98], [98, 203], [21, 71], [71, 68], [68, 21], [51, 45], [45, 4], [4, 51],
    [144, 24], [24, 23], [23, 144], [77, 146], [146, 91], [91, 77], [205, 50], [50, 187], [187, 205],
    [201, 200], [200, 18], [18, 201], [91, 106], [106, 182], [182, 91], [90, 91], [91, 181], [181, 90],
    [85, 84], [84, 17], [17, 85], [206, 203], [203, 36], [36, 206], [148, 171], [171, 140], [140, 148],
    [92, 40], [40, 39], [39, 92], [193, 189], [189, 244], [244, 193], [159, 158], [158, 28], [28, 159],
    [247, 246], [246, 161], [161, 247], [236, 3], [3, 196], [196, 236], [54, 68], [68, 104], [104, 54],
    [193, 168], [168, 8], [8, 193], [117, 228], [228, 31], [31, 117], [189, 193], [193, 55], [55, 189],
    [98, 97], [97, 99], [99, 98], [126, 47], [47, 100], [100, 126], [166, 79], [79, 218], [218, 166],
    [155, 154], [154, 26], [26, 155], [209, 129], [129, 49], [49, 209], [131, 29], [29, 52], [52, 131],
    [43, 106], [106, 204], [204, 43], [184, 74], [74, 185], [185, 184], [191, 80], [80, 183], [183, 191],
    [185, 40], [40, 186], [186, 185], [119, 230], [230, 118], [118, 119], [210, 202], [202, 214], [214, 210],
    [84, 83], [83, 17], [17, 84], [77, 76], [76, 146], [146, 77], [161, 160], [160, 30], [30, 161],
    [190, 56], [56, 173], [173, 190], [182, 106], [106, 194], [194, 182], [138, 135], [135, 192], [192, 138],
    [129, 203], [203, 98], [98, 129], [54, 21], [21, 68], [68, 54], [5, 51], [51, 4], [4, 5],
    [145, 144], [144, 23], [23, 145], [90, 77], [77, 91], [91, 90], [207, 205], [205, 187], [187, 207],
    [83, 201], [201, 18], [18, 83], [181, 91], [91, 182], [182, 181], [180, 90], [90, 181], [181, 180],
    [16, 85], [85, 17], [17, 16], [205, 206], [206, 36], [36, 205], [176, 148], [148, 140], [140, 176],
    [165, 92], [92, 39], [39, 165], [245, 193], [193, 244], [244, 245], [27, 159], [159, 28], [28, 27],
    [30, 247], [247, 161], [161, 30], [174, 236], [236, 196], [196, 174], [103, 54], [54, 104], [104, 103],
    [33, 168], [168, 8], [8, 33], [228, 117], [117, 31], [31, 228], [107, 189], [189, 55], [55, 107],
    [126, 217], [217, 1], [1, 126], [233, 79], [79, 218], [218, 233], [35, 154], [154, 26], [26, 35],
    [125, 129], [129, 49], [49, 125], [52, 131], [131, 29], [29, 52], [169, 106], [106, 43], [43, 169],
    [6, 74], [74, 184], [184, 6], [191, 80], [80, 183], [183, 191], [43, 106], [106, 204], [204, 43]
  ];

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    
    console.log('👤 FaceRenderer initialized');
    
    // Initialize MediaPipe
    this.initializeMediaPipe();
  }

  private async initializeMediaPipe() {
    // 1. Prevent overlapping initializations
    if (this.isLocalInitializing || this.hasFailed) return;
    
    this.isLocalInitializing = true;

    try {
      this.initAttempts++;
      
      this.video = document.querySelector('video') as HTMLVideoElement;
      
      if (!this.video || !this.video.srcObject) {
        this.isLocalInitializing = false; // Release lock so we can try again
        
        if (this.initAttempts < this.maxInitAttempts) {
          setTimeout(() => this.initializeMediaPipe(), 1000);
        } else {
          console.error('❌ Max retry attempts reached.');
          this.hasFailed = true;
          this.isLoading = false;
        }
        return;
      }

      // Check global lock
      if (FaceRenderer.isGlobalInitializing) {
        console.log('⏳ Waiting for global init...');
        this.isLocalInitializing = false;
        setTimeout(() => this.initializeMediaPipe(), 500);
        return;
      }

      // Load Modules (Singleton)
      if (!FaceRenderer.filesetResolver) {
        FaceRenderer.isGlobalInitializing = true;
        console.log('📦 Loading MediaPipe modules...');
        
        const vision = await import(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14'
        );
        
        FaceRenderer.faceLandmarkerClass = vision.FaceLandmarker;
        FaceRenderer.drawingUtilsClass = vision.DrawingUtils; // Import from same package!
        FaceRenderer.filesetResolver = await vision.FilesetResolver.forVisionTasks(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm'
        );
        
        console.log('🔧 WASM initialized');
        FaceRenderer.isGlobalInitializing = false;
      }

      const modelUrl = 'https://raw.githubusercontent.com/NPC-88/3dfiles/9d9b1c903c6397d41d71ad993f114bbce9fe5db6/face_landmarker.task';

      if (!this.faceLandmarker) {
        try {
          this.faceLandmarker = await FaceRenderer.faceLandmarkerClass.createFromOptions(
            FaceRenderer.filesetResolver,
            {
              baseOptions: {
                modelAssetPath: modelUrl,
                delegate: 'GPU'
              },
              outputFaceBlendshapes: false,
              outputFacialTransformationMatrixes: false,
              runningMode: 'VIDEO',
              numFaces: 1
            }
          );
          console.log('✅ Face tracking initialized (GPU)');
        } catch (gpuError) {
          console.warn('GPU failed, trying CPU...');
          this.faceLandmarker = await FaceRenderer.faceLandmarkerClass.createFromOptions(
            FaceRenderer.filesetResolver,
            {
              baseOptions: {
                modelAssetPath: modelUrl,
                delegate: 'CPU'
              },
              outputFaceBlendshapes: false,
              outputFacialTransformationMatrixes: false,
              runningMode: 'VIDEO',
              numFaces: 1
            }
          );
          console.log('✅ Face tracking initialized (CPU)');
        }
      }

      // Initialize DrawingUtils (already loaded as part of singleton)
      if (FaceRenderer.drawingUtilsClass) {
        this.drawingUtils = new FaceRenderer.drawingUtilsClass(this.ctx);
      }

      this.isLoading = false;
      this.isLocalInitializing = false;

    } catch (error) {
      console.error('❌ Failed to initialize MediaPipe:', error);
      this.hasFailed = true;
      this.isLoading = false;
      this.isLocalInitializing = false;
      FaceRenderer.isGlobalInitializing = false;
    }
  }

  public render(handData: HandData, colors: string[], audioData?: AudioData) {
    // Show failure message if initialization permanently failed
    if (this.hasFailed) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = '#ff4444';
      this.ctx.font = '18px monospace';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Initialization Failed', this.canvas.width / 2, this.canvas.height / 2);
      this.ctx.font = '14px monospace';
      this.ctx.fillStyle = '#ff8888';
      this.ctx.fillText('Refresh the page to try again', this.canvas.width / 2, this.canvas.height / 2 + 30);
      return;
    }

    if (this.isLoading) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = '#666666';
      this.ctx.font = '20px monospace';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Initializing Face Model...', this.canvas.width / 2, this.canvas.height / 2);
      this.ctx.font = '14px monospace';
      this.ctx.fillStyle = '#888888';
      this.ctx.fillText('Press Q to enable camera if needed', this.canvas.width / 2, this.canvas.height / 2 + 30);
      return;
    }

    // Nothing to detect with until the model, the video and the drawing utils
    // all exist. Bail out whatever the reason - the old code only returned when
    // it was also about to re-initialize, so an in-flight init fell through to
    // this.video.currentTime below and threw on a null video.
    if (!this.faceLandmarker || !this.video || !this.drawingUtils) {
      // Only trigger re-initialization if not already trying AND not failed.
      if (!this.isLocalInitializing && !this.hasFailed) {
        const videoElement = document.querySelector('video') as HTMLVideoElement;

        if (videoElement && videoElement.srcObject) {
          console.log('📹 Video found during render, triggering init once...');
          // This will only run once because isLocalInitializing will be set to true
          this.initializeMediaPipe();
        }
      }

      // Show waiting message
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = '#666666';
      this.ctx.font = '18px monospace';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Waiting for camera...', this.canvas.width / 2, this.canvas.height / 2);
      this.ctx.font = '14px monospace';
      this.ctx.fillStyle = '#888888';
      this.ctx.fillText('Press Q to enable camera', this.canvas.width / 2, this.canvas.height / 2 + 30);
      
      return;
    }

    // Detect face
    const startTimeMs = performance.now();
    
    if (this.lastVideoTime !== this.video.currentTime) {
      this.lastVideoTime = this.video.currentTime;
      try {
        this.results = this.faceLandmarker.detectForVideo(this.video, startTimeMs);
      } catch (error) {
        console.error('Face detection error:', error);
      }
    }

    // Save context state
    this.ctx.save();
    
    // Clear canvas with black background
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Calculate pulse for glow effect (exactly like the standalone code)
    const time = performance.now();
    const pulse = Math.abs(Math.sin(time * 0.002)); // Oscillates between 0.0 and 1.0 roughly every 2 seconds
    
    // Alpha: Base 0.1 + up to 0.6 based on pulse
    const alpha = 0.1 + (0.6 * pulse);
    // Glow Blur: Up to 15px blur based on pulse
    const blurAmount = 15 * pulse;

    // Get glow color from color controller
    const glowColor = colors[0] || '#00d2ff';

    if (this.results && this.results.faceLandmarks && this.results.faceLandmarks.length > 0) {
      for (const landmarks of this.results.faceLandmarks) {
        // Set Glow Styles (exactly like original code)
        this.ctx.shadowColor = glowColor;
        this.ctx.shadowBlur = blurAmount;

        // Use DrawingUtils to draw face mesh with FACE_LANDMARKS_TESSELATION
        this.drawingUtils.drawConnectors(
          landmarks,
          FaceRenderer.faceLandmarkerClass.FACE_LANDMARKS_TESSELATION,
          { color: `rgba(255, 255, 255, ${alpha})`, lineWidth: 1 }
        );

        // Reset glow for next frame
        this.ctx.shadowBlur = 0;
      }
    } else {
      this.ctx.fillStyle = '#666666';
      this.ctx.font = '16px monospace';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('No Face Detected', this.canvas.width / 2, this.canvas.height / 2);
      this.ctx.font = '12px monospace';
      this.ctx.fillStyle = '#888888';
      this.ctx.fillText('Position your face in front of the camera', this.canvas.width / 2, this.canvas.height / 2 + 25);
    }

    this.ctx.restore();
  }

  public resize(width: number, height: number) {
    // Canvas is already resized by the main app
  }

  public destroy() {
    // Only close the instance, do not destroy the static FilesetResolver
    if (this.faceLandmarker) {
      this.faceLandmarker.close();
      this.faceLandmarker = null;
    }
    console.log('👤 FaceRenderer destroyed');
  }
}