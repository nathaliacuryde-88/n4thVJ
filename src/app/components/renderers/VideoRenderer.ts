import { AudioData, HandData } from '../../App';
import { VideoConfig } from '../../config/VideoRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { alphaHex } from './alpha';
import { timeScale, vjTime } from '../../motion/clock';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CLIP
 * ═══════════════════════════════════════════════════════════════════════════
 * Your own footage, played as a visual rather than shown as a video.
 *
 * The frame is cut into horizontal bands and each band slides by a different
 * amount, so the picture shears rather than simply plays — which is what keeps
 * it a VJ layer instead of a screening. Hands push the image around and zoom
 * it; a beat throws the bands wider.
 *
 * The file is chosen in the library and held there. This only ever receives a
 * URL, so nothing about decoding or storage belongs in here.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof VideoConfig;

export class VideoRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = VideoConfig;
  private video: HTMLVideoElement | null = null;
  private url: string | null = null;
  private drift = { x: 0, y: 0 };

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(VideoConfig, values);
  }

  /** The clip to play. Called again with a different URL swaps the footage. */
  setClipUrl(url: string | null) {
    if (url === this.url) return;
    this.url = url;
    this.video?.pause();
    this.video = null;
    if (!url) return;

    const video = document.createElement('video');
    video.src = url;
    video.loop = true;
    video.muted = true;       // required for autoplay, and the sound is the DJ's
    video.playsInline = true;
    video.play().catch(() => {
      // Autoplay refused; the first frame still draws once it has decoded.
    });
    this.video = video;
  }


  /**
   * Footage follows the tempo too.
   *
   * Everything else takes its step from the shared clock, but a video plays at
   * whatever rate the decoder feels like — so one finger slowed the whole set
   * except the clip, which carried on regardless and fell out of step with
   * everything stacked around it. Clamped to the range browsers will actually
   * honour; beyond that they silently ignore it or mute the track.
   */
  private followTempo(video: HTMLVideoElement) {
    const wanted = Math.min(4, Math.max(0.25, timeScale()));
    if (Math.abs(video.playbackRate - wanted) > 0.02) {
      try {
        video.playbackRate = wanted;
      } catch {
        // Out of range for this browser; it keeps its own rate.
      }
    }
  }

  destroy() {
    this.video?.pause();
    this.video = null;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { ctx, cfg } = this;
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;

    if (cfg.trail.fadeAlpha >= 1) {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);
    } else {
      ctx.fillStyle = `#000000${alphaHex(cfg.trail.fadeAlpha * 255)}`;
      ctx.fillRect(0, 0, width, height);
    }

    const video = this.video;
    const ready = video && video.readyState >= 2 && video.videoWidth > 0;
    if (video) this.followTempo(video);
    if (!ready) {
      // Nothing decoded yet: say so rather than showing a black layer that
      // looks like a fault.
      ctx.fillStyle = `${colors[0] ?? '#ffffff'}66`;
      ctx.font = '500 14px ui-monospace, monospace';
      ctx.textAlign = 'center';
      ctx.fillText(
        this.url ? 'LOADING CLIP…' : 'NO CLIP — UPLOAD ONE IN THE LIBRARY',
        width / 2,
        height / 2,
      );
      return;
    }

    const hands = [handData.left, handData.right].filter(Boolean);
    let pushX = 0;
    let pushY = 0;
    if (hands.length > 0) {
      const mx = hands.reduce((s, h) => s + h!.position.x, 0) / hands.length;
      const my = hands.reduce((s, h) => s + h!.position.y, 0) / hands.length;
      pushX = (mx - 0.5) * 2;
      pushY = (my - 0.5) * 2;
    }
    this.drift.x += (pushX - this.drift.x) * 0.1;
    this.drift.y += (pushY - this.drift.y) * 0.1;

    const spread = handData.distanceBetweenHands ?? 0.4;
    const zoom = Math.max(
      0.05,
      cfg.frame.zoom * (1 + (spread - 0.4) * cfg.frame.spreadZoom),
    );

    // Cover the canvas, then zoom on top of that, so no letterboxing appears.
    const cover = Math.max(width / video.videoWidth, height / video.videoHeight);
    const drawW = video.videoWidth * cover * zoom;
    const drawH = video.videoHeight * cover * zoom;
    const originX = (width - drawW) / 2 + this.drift.x * width * cfg.frame.handDrift;
    const originY = (height - drawH) / 2 + this.drift.y * height * cfg.frame.handDrift;

    const t = vjTime();
    /*
     * Ridden rather than triggered.
     *
     * This read the beat flag, which is true for a single frame, so the bands
     * snapped to full width and back between one frame and the next — at any
     * setting, including the lowest. Onset carries the same pulse with a
     * decay, so the same slider now swells the shear instead of flicking it.
     */
    const pulse = Math.max(audioData?.onset ?? 0, audioData?.beat ? 1 : 0);
    const beat = 1 + (cfg.slice.beatKick - 1) * pulse;
    const bands = Math.max(1, Math.round(cfg.slice.count));
    const bandH = height / bands;

    ctx.save();
    if (cfg.frame.mirror >= 0.5) {
      ctx.translate(width, 0);
      ctx.scale(-1, 1);
    }

    for (let i = 0; i < bands; i++) {
      // Each band reads the same sine at a different phase, so the shear
      // travels through the frame rather than every band moving together.
      const phase = (i / bands) * Math.PI * 2;
      const slide =
        bands < 2
          ? 0
          : Math.sin(t * cfg.slice.speed + phase) *
            width * cfg.slice.offset * beat *
            (1 + Math.abs(this.drift.x));

      const y = i * bandH;
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, y, width, bandH + 1); // +1 hides seams from rounding
      ctx.clip();
      ctx.drawImage(video, originX + slide, originY, drawW, drawH);
      ctx.restore();
    }
    ctx.restore();

    if (cfg.look.tint > 0) {
      ctx.globalCompositeOperation = 'overlay';
      ctx.fillStyle = `${colors[0] ?? '#ffffff'}${alphaHex(cfg.look.tint * 255)}`;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';
    }
    if (cfg.look.gain > 1) {
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = Math.min(1, cfg.look.gain - 1);
      ctx.drawImage(this.canvas, 0, 0);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    }
  }
}
