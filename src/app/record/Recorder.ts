/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RECORDING A SET
 * ═══════════════════════════════════════════════════════════════════════════
 * A screen recording of this page is mostly this page: sliders, key strip,
 * colour bar, the lot. What a sample needs is the work — the visuals, and her
 * hands in front of them if the camera is up. Nothing else.
 *
 * So nothing is screen-captured. The visuals already live on a canvas, and the
 * camera is already a <video>; both are drawn into a canvas of this module's
 * own, and that canvas is what gets recorded. Every control stays in the DOM,
 * which means it cannot reach the file even in principle — there is no filter
 * to get wrong.
 *
 * Sound comes from the microphone track when audio-reactive mode is already
 * running. It is the same stream the analyser is using, so nothing new is
 * asked for and no second permission prompt appears; with the mic off the
 * recording is silent, which is the honest result rather than a failure.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** What a frame is made of. Read each time, because all of it can change mid-take. */
export interface RecordSources {
  /** The visible visuals canvas. */
  canvas: () => HTMLCanvasElement | null;
  /** The camera, when its preview is up. Null keeps it out of the recording. */
  camera: () => HTMLVideoElement | null;
  /** The microphone stream, when audio-reactive mode is on. */
  audio: () => MediaStream | null;
}

/**
 * Container and codec, best first.
 *
 * Safari records MP4 and cannot read VP9; Chrome and Firefox prefer WebM. The
 * first supported entry wins, so each browser writes something it can also
 * play back — a sample file that will not open is worse than none.
 */
const FORMATS = [
  'video/mp4;codecs=avc1.42E01E,mp4a.40.2',
  'video/mp4',
  'video/webm;codecs=vp9,opus',
  'video/webm;codecs=vp8,opus',
  'video/webm',
];

const FPS = 30;
/** Enough for a clean gradient at 1080p without a file too big to send. */
const BITRATE = 12_000_000;

function pickFormat(): string | undefined {
  if (typeof MediaRecorder === 'undefined') return undefined;
  for (const format of FORMATS) {
    if (MediaRecorder.isTypeSupported(format)) return format;
  }
  return undefined;
}

/** Whether this browser can record at all, for deciding to offer the button. */
export function canRecord(): boolean {
  return (
    typeof MediaRecorder !== 'undefined' &&
    typeof HTMLCanvasElement.prototype.captureStream === 'function' &&
    pickFormat() !== undefined
  );
}

export interface Recording {
  blob: Blob;
  /** Extension matching what was actually recorded, for the download name. */
  extension: string;
  seconds: number;
}

export class Recorder {
  private sources: RecordSources;
  private frame: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private recorder: MediaRecorder | null = null;
  private chunks: Blob[] = [];
  private raf = 0;
  private startedAt = 0;
  private format = '';

  constructor(sources: RecordSources) {
    this.sources = sources;
  }

  get recording(): boolean {
    return this.recorder !== null && this.recorder.state === 'recording';
  }

  /** Seconds since the take began, for the counter on the button. */
  get elapsed(): number {
    return this.startedAt ? (performance.now() - this.startedAt) / 1000 : 0;
  }

  start(): void {
    if (this.recording) return;
    const source = this.sources.canvas();
    const format = pickFormat();
    if (!source || !format) return;

    this.format = format;
    const frame = document.createElement('canvas');
    // Even dimensions: an odd width makes some H.264 encoders refuse outright.
    frame.width = Math.max(2, source.width - (source.width % 2));
    frame.height = Math.max(2, source.height - (source.height % 2));
    const ctx = frame.getContext('2d', { alpha: false });
    if (!ctx) return;
    this.frame = frame;
    this.ctx = ctx;

    const stream = frame.captureStream(FPS);
    const mic = this.sources.audio();
    // Only the audio track: the mic stream has no video, but taking it whole
    // would be a promise about that rather than a fact.
    if (mic) for (const track of mic.getAudioTracks()) stream.addTrack(track);

    const recorder = new MediaRecorder(stream, {
      mimeType: format,
      videoBitsPerSecond: BITRATE,
    });
    this.chunks = [];
    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) this.chunks.push(event.data);
    };
    // A second at a time, so a crash mid-set still leaves most of the take.
    recorder.start(1000);
    this.recorder = recorder;
    this.startedAt = performance.now();
    this.draw();
  }

  /** Ends the take and hands back the file. Null if nothing was captured. */
  stop(): Promise<Recording | null> {
    const recorder = this.recorder;
    if (!recorder || recorder.state === 'inactive') return Promise.resolve(null);

    const seconds = this.elapsed;
    return new Promise((resolve) => {
      recorder.onstop = () => {
        cancelAnimationFrame(this.raf);
        this.raf = 0;
        this.recorder = null;
        this.startedAt = 0;
        this.frame = null;
        this.ctx = null;

        const blob = new Blob(this.chunks, { type: this.format });
        this.chunks = [];
        resolve(
          blob.size > 0
            ? {
                blob,
                extension: this.format.startsWith('video/mp4') ? 'mp4' : 'webm',
                seconds,
              }
            : null,
        );
      };
      recorder.stop();
    });
  }

  /**
   * One frame of the recording.
   *
   * Driven by its own animation frame rather than hooked into the render loop,
   * so a take cannot change how the visuals behave — and if this ever throws,
   * the set carries on regardless.
   */
  private draw = () => {
    this.raf = requestAnimationFrame(this.draw);
    const { ctx, frame } = this;
    if (!ctx || !frame) return;

    const source = this.sources.canvas();
    if (!source) return;

    // The window can be resized mid-take. The file's dimensions are fixed at
    // the first frame, so the visuals are fitted into them rather than the
    // other way round.
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, frame.width, frame.height);
    const scale = Math.min(frame.width / source.width, frame.height / source.height);
    const w = source.width * scale;
    const h = source.height * scale;
    try {
      ctx.drawImage(source, (frame.width - w) / 2, (frame.height - h) / 2, w, h);
    } catch {
      return; // a canvas mid-resize has no readable frame; skip this one
    }

    const camera = this.sources.camera();
    if (camera && camera.readyState >= 2 && camera.videoWidth > 0) {
      this.drawCamera(ctx, frame, camera);
    }
  };

  /**
   * The camera, where the preview sits on screen: top right, same size, same
   * mirroring. What she lines her hands up against while playing is what ends
   * up in the file.
   */
  private drawCamera(
    ctx: CanvasRenderingContext2D,
    frame: HTMLCanvasElement,
    camera: HTMLVideoElement,
  ) {
    const margin = Math.round(frame.width * 0.014);
    const width = Math.round(frame.width * 0.17);
    const height = Math.round((width * camera.videoHeight) / camera.videoWidth);
    const x = frame.width - width - margin;
    const y = margin;
    const radius = Math.round(width * 0.06);

    ctx.save();
    ctx.beginPath();
    // roundRect is recent enough to be worth a fallback on older Safari.
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(x, y, width, height, radius);
    } else {
      ctx.rect(x, y, width, height);
    }
    ctx.clip();
    // Mirrored, the way the preview reads: raising her left hand raises the
    // hand on the left of the picture.
    ctx.translate(x + width, y);
    ctx.scale(-1, 1);
    ctx.drawImage(camera, 0, 0, width, height);
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = Math.max(1, frame.width * 0.001);
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(x, y, width, height, radius);
    } else {
      ctx.rect(x, y, width, height);
    }
    ctx.stroke();
    ctx.restore();
  }
}

/** Hands the finished take to the browser as a download. */
export function save(recording: Recording): void {
  // Down to the second: two takes a minute apart is normal, and a browser
  // silently renaming the second one to "(1)" is a poor way to find that out.
  const stamp = new Date()
    .toISOString()
    .slice(0, 19)
    .replace('T', '-')
    .replace(/:/g, '');
  const url = URL.createObjectURL(recording.blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `n4thvj-${stamp}.${recording.extension}`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  // Long enough for the download to have started; revoking immediately can
  // cancel it in some browsers.
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
}
