import { AudioData, HandData } from '../../App';
import { MosaicConfig } from '../../config/MosaicRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { alphaHex } from './alpha';
import { vjTime } from '../../motion/clock';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * MOSAIC
 * ═══════════════════════════════════════════════════════════════════════════
 * Your footage, rebuilt out of type and shapes.
 *
 * The picture is never drawn. It is sampled down to a coarse grid — one pixel
 * per cell — and each cell is then redrawn as a single mark whose weight
 * follows that cell's brightness. A bright cell gets a fat glyph or a wide
 * dot, a dark one gets a thin mark or nothing at all, and the image appears
 * out of the density rather than out of the pixels.
 *
 * Four ways to lay the marks down:
 *
 *   Letters  a glyph per cell, chosen from a ramp that runs light to heavy —
 *            or from your own word, which makes the picture out of your name
 *   Dots     a circle per cell, radius on brightness. A print halftone.
 *   Blocks   a square per cell, turnable towards diamonds
 *   Bars     one vertical stroke per cell, like a line screen
 *
 * The sampling is the whole trick and it is cheap: one drawImage into a canvas
 * a few dozen pixels wide, then a single getImageData. The browser's own
 * downscale does the averaging, so a 4K clip costs the same as a thumbnail.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** Matches the rest of the interface: Tailwind's default mono stack. */
const FONT_STACK =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";

/** Light to heavy. Index into it with a cell's brightness. */
const RAMP = ' .:-=+*#%@';

/** Ceiling on cells per frame, so a slider cannot stall the loop. */
const MAX_CELLS = 6000;

type Cfg = typeof MosaicConfig;
type Kind = 'video' | 'image';

export class MosaicRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = MosaicConfig;

  private url: string | null = null;
  private kind: Kind = 'video';
  private video: HTMLVideoElement | null = null;
  private image: HTMLImageElement | null = null;
  private failed = false;

  /** The downscale target. One pixel per cell, reallocated when the grid moves. */
  private sampler: HTMLCanvasElement;
  private samplerCtx: CanvasRenderingContext2D | null;

  private text = 'N4TH';
  /** Smoothed hand centre, so tracking jitter does not shake the grid. */
  private aim = { x: 0.5, y: 0.5 };

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.sampler = document.createElement('canvas');
    // Read back often and never drawn to screen, so ask for the fast path.
    this.samplerCtx = this.sampler.getContext('2d', { willReadFrequently: true });
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(MosaicConfig, values);
  }

  setText(text: string) {
    this.text = text.trim() || 'N4TH';
  }

  /**
   * The source to rebuild. A still and a clip are both just something with a
   * width, a height and a current frame, so the only thing the kind decides is
   * which element to make.
   */
  setClipUrl(url: string | null, kind: Kind = 'video') {
    if (url === this.url && kind === this.kind) return;
    this.url = url;
    this.kind = kind;
    this.failed = false;
    this.video?.pause();
    this.video = null;
    this.image = null;
    if (!url) return;

    if (kind === 'image') {
      const image = new Image();
      image.onerror = () => { this.failed = true; };
      image.src = url;
      this.image = image;
      return;
    }

    const video = document.createElement('video');
    video.src = url;
    video.loop = true;
    video.muted = true;       // required for autoplay, and the sound is the DJ's
    video.playsInline = true;
    video.onerror = () => { this.failed = true; };
    video.play().catch(() => {
      // Autoplay refused; the first frame still samples once it has decoded.
    });
    this.video = video;
  }

  destroy() {
    this.video?.pause();
    this.video = null;
    this.image = null;
  }

  /** The element to sample, once it has enough decoded to be worth sampling. */
  private source(): { el: CanvasImageSource; w: number; h: number } | null {
    const { video, image } = this;
    if (video && video.readyState >= 2 && video.videoWidth > 0) {
      return { el: video, w: video.videoWidth, h: video.videoHeight };
    }
    if (image && image.complete && image.naturalWidth > 0) {
      return { el: image, w: image.naturalWidth, h: image.naturalHeight };
    }
    return null;
  }

  private notice(width: number, height: number, colors: string[]) {
    const { ctx } = this;
    ctx.fillStyle = `${colors[0] ?? '#ffffff'}66`;
    ctx.font = '500 14px ui-monospace, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(
      this.failed
        ? 'THAT FILE WOULD NOT OPEN'
        : this.url
          ? 'LOADING…'
          : 'NO FILE — UPLOAD ONE IN THE LIBRARY',
      width / 2,
      height / 2,
    );
  }

  private colorFor(index: number, r: number, g: number, b: number, colors: string[]): string {
    const { colour } = this.cfg;
    const step = Math.max(1, Math.round(colour.spread));
    const palette = colors[Math.floor(index / step) % Math.max(1, colors.length)] ?? '#ffffff';
    if (colour.fromSource <= 0) return palette;
    if (colour.fromSource >= 1) return `rgb(${r}, ${g}, ${b})`;

    // Mix in the source's own colour rather than swapping to it, so the
    // slider crossfades between her palette and the footage.
    const hex = palette.replace('#', '');
    const full = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
    const pr = parseInt(full.slice(0, 2), 16) || 0;
    const pg = parseInt(full.slice(2, 4), 16) || 0;
    const pb = parseInt(full.slice(4, 6), 16) || 0;
    const t = colour.fromSource;
    const mix = (a: number, b2: number) => Math.round(a + (b2 - a) * t);
    return `rgb(${mix(pr, r)}, ${mix(pg, g)}, ${mix(pb, b)})`;
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { ctx, cfg } = this;
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle =
      cfg.trail.fadeAlpha >= 1 ? '#000' : `#000000${alphaHex(cfg.trail.fadeAlpha * 255)}`;
    ctx.fillRect(0, 0, width, height);

    const source = this.source();
    if (!source) {
      this.notice(width, height, colors);
      return;
    }

    // ── where the hands are, smoothed ──────────────────────────────────────
    const hands = [handData.left, handData.right].filter(Boolean);
    if (hands.length > 0) {
      const mx = hands.reduce((s, h) => s + h!.position.x, 0) / hands.length;
      const my = hands.reduce((s, h) => s + h!.position.y, 0) / hands.length;
      this.aim.x += (mx - this.aim.x) * 0.08;
      this.aim.y += (my - this.aim.y) * 0.08;
    }

    // ── the grid ───────────────────────────────────────────────────────────
    // Spread coarsens it: hands apart is a blockier, more abstract picture.
    const spread = handData.distanceBetweenHands ?? 0.4;
    const density = 1 - (spread - 0.4) * cfg.grid.spreadDensity;
    let cols = Math.max(2, Math.round(cfg.grid.columns * Math.max(0.25, density)));
    const cellW = width / cols;
    const cellH = cellW * Math.max(0.2, cfg.grid.cellAspect);
    let rows = Math.max(2, Math.round(height / cellH));
    if (cols * rows > MAX_CELLS) {
      rows = Math.max(2, Math.floor(MAX_CELLS / cols));
      cols = Math.max(2, Math.min(cols, Math.floor(MAX_CELLS / rows)));
    }

    // ── sample ─────────────────────────────────────────────────────────────
    const sctx = this.samplerCtx;
    if (!sctx) return;
    if (this.sampler.width !== cols || this.sampler.height !== rows) {
      this.sampler.width = cols;
      this.sampler.height = rows;
    }
    // Cover rather than fit, so the grid is never part empty.
    const cover = Math.max(cols / source.w, rows / source.h);
    const drawW = source.w * cover;
    const drawH = source.h * cover;
    sctx.drawImage(source.el, (cols - drawW) / 2, (rows - drawH) / 2, drawW, drawH);
    let pixels: Uint8ClampedArray;
    try {
      pixels = sctx.getImageData(0, 0, cols, rows).data;
    } catch {
      // A cross-origin source taints the canvas and getImageData throws. The
      // uploads are object URLs so this should not happen, but a blank layer
      // mid-set with no explanation would be the worst way to find out.
      this.notice(width, height, colors);
      return;
    }

    // ── draw ───────────────────────────────────────────────────────────────
    const time = vjTime();
    const bass = audioData?.bass ?? 0;
    const kick = audioData?.beat ? cfg.audio.beatKick : 0;
    const swell = 1 + bass * cfg.audio.bassScale + kick;
    const mode = Math.round(cfg.mode);
    const word = this.text;

    const drawnW = width / cols;
    const drawnH = height / rows;
    const unit = Math.min(drawnW, drawnH) * cfg.grid.fill * swell;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';

    if (mode === 0) {
      // One measurement for the whole frame: monospace, so every glyph is the
      // same width and fitting one fits all.
      ctx.font = `${Math.round(cfg.letters.weight)} 100px ${FONT_STACK}`;
      const sample = ctx.measureText('M').width || 60;
      const size = Math.max(1, (drawnW * cfg.grid.fill * swell) / (sample / 100));
      ctx.font = `${Math.round(cfg.letters.weight)} ${size}px ${FONT_STACK}`;
      ctx.lineWidth = Math.max(0.5, size * 0.06);
    }

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const i = (row * cols + col) * 4;
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        // Rec. 709 luma: green carries most of what the eye reads as bright.
        let lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        lum = (lum - 0.5) * cfg.tone.contrast + 0.5 + cfg.tone.brightness;
        if (cfg.tone.invert >= 0.5) lum = 1 - lum;
        lum = Math.min(1, Math.max(0, lum));
        if (lum <= cfg.tone.floor) continue;

        // Rescale what survives the floor back across the full range, so the
        // floor opens the image up instead of just dimming it.
        const weight = (lum - cfg.tone.floor) / (1 - cfg.tone.floor);

        let x = (col + 0.5) * drawnW;
        let y = (row + 0.5) * drawnH;

        if (cfg.warp.handPush !== 0 && hands.length > 0) {
          // Cells lean away from the hand, harder the closer they are.
          const ddx = x / width - this.aim.x;
          const ddy = y / height - this.aim.y;
          const fall = Math.exp(-(ddx * ddx + ddy * ddy) * 8);
          x += ddx * fall * width * cfg.warp.handPush;
          y += ddy * fall * height * cfg.warp.handPush;
        }
        if (cfg.warp.ripple !== 0) {
          y += Math.sin(col * 0.35 + time * cfg.warp.rippleSpeed) *
            drawnH * cfg.warp.ripple;
        }

        const index = row * cols + col;
        const colour = this.colorFor(index, r, g, b, colors);

        switch (mode) {
          case 1: { // Dots
            const radius = (unit / 2) * Math.max(cfg.shape.minimum, weight);
            ctx.fillStyle = colour;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
            break;
          }
          case 2: { // Blocks
            const side = unit * Math.max(cfg.shape.minimum, weight);
            ctx.fillStyle = colour;
            if (cfg.shape.rotate !== 0) {
              ctx.save();
              ctx.translate(x, y);
              ctx.rotate(cfg.shape.rotate * Math.PI * 0.25);
              ctx.fillRect(-side / 2, -side / 2, side, side);
              ctx.restore();
            } else {
              ctx.fillRect(x - side / 2, y - side / 2, side, side);
            }
            break;
          }
          case 3: { // Bars
            const thickness = Math.max(1, drawnW * cfg.grid.fill * 0.6);
            const length = drawnH * cfg.grid.fill * swell *
              Math.max(cfg.shape.minimum, weight);
            const top = cfg.shape.anchor >= 0.5
              ? (row + 1) * drawnH - length + (y - (row + 0.5) * drawnH)
              : y - length / 2;
            ctx.fillStyle = colour;
            ctx.fillRect(x - thickness / 2, top, thickness, length);
            break;
          }
          default: { // Letters
            const glyph = cfg.letters.ramp >= 0.5
              ? word[index % word.length]
              : RAMP[Math.min(RAMP.length - 1, Math.round(weight * (RAMP.length - 1)))];
            if (!glyph || glyph === ' ') break;
            if (cfg.letters.outline >= 0.5) {
              ctx.strokeStyle = colour;
              ctx.strokeText(glyph, x, y);
            } else {
              // The word ramp has no light and heavy glyphs of its own, so the
              // brightness has to ride on the alpha instead.
              ctx.globalAlpha = cfg.letters.ramp >= 0.5 ? weight : 1;
              ctx.fillStyle = colour;
              ctx.fillText(glyph, x, y);
              ctx.globalAlpha = 1;
            }
            break;
          }
        }
      }
    }
  }
}
