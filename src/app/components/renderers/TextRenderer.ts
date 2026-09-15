import { AudioData, Hand, HandData } from '../../App';
import { TextConfig } from '../../config/TextRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { alphaHex } from './alpha';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * KINETIC TYPE
 * ═══════════════════════════════════════════════════════════════════════════
 * The word is the texture, not the subject.
 *
 * Every mode here repeats one short word across a field and then moves the
 * field — which is the thing the reference work has in common. What changes
 * between them is only where a cell ends up and whether it draws at all:
 *
 *   Mask     a hand-shaped field decides which cells draw, so the words
 *            carve out the silhouette rather than describing it
 *   Radial   distance from a centre displaces each cell, pinching the grid
 *            into an hourglass or bulging it outward
 *   Wave     each row slides on a sine of its own row index, so the field
 *            undulates down the frame
 *   Depth    the word repeats away to a vanishing point, size and tracking
 *            falling off with distance, and the whole run flies past
 *   Scatter  the letters leave the word and travel to their own targets,
 *            loose or wound onto a spiral
 *
 * Monospaced throughout, because the tiling only reads when the letters are
 * the same width — proportional type leaves the grid ragged and the shape
 * stops being legible.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** Matches the interface, which is Tailwind's default mono stack. */
const FONT_STACK =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";

/** Ceiling on cells per frame, so a slider cannot stall the loop. */
const MAX_CELLS = 1400;

type Cfg = typeof TextConfig;

export class TextRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = TextConfig;
  private text = 'N4TH';
  /** Smoothed hand centre, so tracking jitter does not shake the field. */
  private aim = { x: 0.5, y: 0.5 };
  /** Scatter targets, one per character, regenerated when the word changes. */
  private targets: { x: number; y: number; seed: number }[] = [];

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(TextConfig, values);
  }

  setText(text: string) {
    const next = text.trim() || 'N4TH';
    if (next === this.text) return;
    this.text = next;
    this.targets = [];
  }

  /** A stable pseudo-random in 0..1 — the same letter lands in the same place. */
  private static noise(seed: number): number {
    const x = Math.sin(seed * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  }

  private colorFor(index: number, time: number, colors: string[]): string {
    const { color } = this.cfg;
    if (color.rainbow >= 0.5) {
      const hue = (index * color.step + time * color.cycleSpeed * 60) % 360;
      return `hsl(${hue}, 100%, 62%)`;
    }
    return colors[index % Math.max(1, colors.length)] ?? '#ffffff';
  }

  /**
   * Draws the word at a point. Everything else only decides where that point
   * is, how big, and how faint.
   *
   * Alpha rides on globalAlpha rather than a hex suffix on the colour, because
   * the rainbow mode hands over `hsl(...)` and a suffix would make that a
   * string canvas refuses.
   */
  private stamp(
    x: number,
    y: number,
    size: number,
    color: string,
    alpha = 1,
    word = this.text,
    tracking = this.cfg.type.tracking,
  ) {
    const { ctx, cfg } = this;
    ctx.globalAlpha = Math.min(1, Math.max(0, alpha));
    ctx.font = `${Math.round(cfg.type.weight)} ${Math.max(1, size)}px ${FONT_STACK}`;
    try {
      ctx.letterSpacing = `${tracking}em`;
    } catch {
      /* older engine, no tracking */
    }
    if (cfg.type.outline >= 0.5) {
      ctx.strokeStyle = color;
      ctx.lineWidth = Math.max(0.5, cfg.type.strokeWidth);
      ctx.strokeText(word, x, y);
    } else {
      ctx.fillStyle = color;
      ctx.fillText(word, x, y);
    }
    ctx.globalAlpha = 1;
  }

  /**
   * The font size at which the word is exactly `target` wide.
   *
   * Measured rather than guessed: word length and tracking both change the
   * width, and the grid modes need the word to fit its cell whatever is typed.
   */
  private fitSize(word: string, target: number): number {
    const { ctx, cfg } = this;
    ctx.font = `${Math.round(cfg.type.weight)} 100px ${FONT_STACK}`;
    try {
      ctx.letterSpacing = `${cfg.type.tracking}em`;
    } catch {
      /* older engine, no tracking */
    }
    const width = ctx.measureText(word).width;
    if (!(width > 0)) return 10;
    return (target / width) * 100;
  }

  /** Palm and fingertips of every visible hand, in 0..1 space. */
  private handPoints(handData: HandData): { x: number; y: number }[] {
    const points: { x: number; y: number }[] = [];
    for (const hand of [handData.left, handData.right] as (Hand | null)[]) {
      if (!hand) continue;
      points.push(hand.position);
      const tips = hand.landmarks;
      if (!tips) continue;
      for (const index of [4, 8, 12, 16, 20]) {
        const tip = tips[index];
        if (tip) points.push({ x: tip.x, y: tip.y });
      }
    }
    return points;
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

    const time = Date.now() / 1000;
    const bass = audioData?.bass ?? 0;
    const kick = audioData?.beat ? cfg.audio.beatKick : 0;

    const points = this.handPoints(handData);
    if (points.length > 0) {
      const mx = points.reduce((s, p) => s + p.x, 0) / points.length;
      const my = points.reduce((s, p) => s + p.y, 0) / points.length;
      this.aim.x += (mx - this.aim.x) * 0.08;
      this.aim.y += (my - this.aim.y) * 0.08;
    }

    const swell = 1 + bass * cfg.audio.bassScale;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';

    switch (Math.round(cfg.mode)) {
      case 1: this.radial(width, height, swell, time, kick, colors); break;
      case 2: this.wave(width, height, swell, time, kick, colors); break;
      case 3: this.depth(width, height, swell, time, kick, colors); break;
      case 4: this.scatter(width, height, swell, time, kick, colors); break;
      default: this.mask(width, height, swell, time, points, colors); break;
    }
  }

  /** Spacing shared by the three grid modes, with its own slow breath. */
  private spacing(width: number, height: number, time: number) {
    const { cfg } = this;
    const breath =
      1 + Math.sin(time * cfg.grid.breatheSpeed) * cfg.grid.breathe;
    const cols = Math.max(1, Math.round(cfg.grid.columns));
    const rows = Math.max(1, Math.round(cfg.grid.rows));
    const scale = cfg.grid.spread * breath;
    return {
      cols,
      rows: Math.min(rows, Math.max(1, Math.floor(MAX_CELLS / cols))),
      dx: (width / cols) * scale,
      dy: (height / rows) * scale,
    };
  }

  // ── 1. text as pixel ──────────────────────────────────────────────────────
  private mask(
    width: number,
    height: number,
    swell: number,
    time: number,
    points: { x: number; y: number }[],
    colors: string[],
  ) {
    const { cfg } = this;
    const { cols, rows, dx, dy } = this.spacing(width, height, time);
    const size = this.fitSize(this.text, dx * cfg.type.fit) * swell;
    const reach = Math.max(0.01, cfg.mask.reach);
    const aspect = width / height;

    let index = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++, index++) {
        const u = (col + 0.5) / cols;
        const v = (row + 0.5) / rows;

        // The field the hands leave. Aspect-corrected so a hand reads round.
        let field = 0;
        for (const p of points) {
          const ddx = (u - p.x) * aspect;
          const ddy = v - p.y;
          field += Math.exp(-((ddx * ddx + ddy * ddy) / (reach * reach)));
        }

        // A soft edge dithers into a halftone rather than cutting hard.
        const edge = cfg.mask.softness * 0.5;
        const lit = edge <= 0
          ? (field > cfg.mask.threshold ? 1 : 0)
          : Math.min(1, Math.max(0,
              (field - (cfg.mask.threshold - edge)) / (edge * 2)));
        const shown = cfg.mask.invert >= 0.5 ? 1 - lit : lit;
        if (shown <= 0.02) continue;

        const x = (col + 0.5) * dx + (width - cols * dx) / 2;
        const y = (row + 0.5) * dy + (height - rows * dy) / 2;
        this.stamp(x, y, size, this.colorFor(index, time, colors), shown);
      }
    }
  }

  // ── 2. radial warp ────────────────────────────────────────────────────────
  private radial(
    width: number, height: number, swell: number,
    time: number, kick: number, colors: string[],
  ) {
    const { cfg } = this;
    const { cols, rows, dx, dy } = this.spacing(width, height, time);
    const size = this.fitSize(this.text, dx * cfg.type.fit) * swell;
    const strength =
      (cfg.radial.strength + kick) *
      (1 + Math.sin(time * cfg.radial.pulseSpeed) * cfg.radial.pulse);

    // The hands move the centre the distortion is measured from.
    const cx = 0.5 + (this.aim.x - 0.5) * cfg.motion.handInfluence;
    const cy = 0.5 + (this.aim.y - 0.5) * cfg.motion.handInfluence;

    let index = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++, index++) {
        const u = (col + 0.5) / cols;
        const v = (row + 0.5) / rows;
        const ox = u - cx;
        const oy = v - cy;
        const dist = Math.min(1, Math.hypot(ox, oy) * 1.42);

        // Distance drives how far the cell is pushed along its own radius.
        const push = 1 + Math.pow(dist, cfg.radial.power) * strength;
        const x = (cx + ox * push) * width;
        const y = (cy + oy * push) * height;
        if (x < -dx || x > width + dx || y < -dy || y > height + dy) continue;

        this.stamp(x, y, size, this.colorFor(index, time, colors));
      }
    }
  }

  // ── 3. sine displacement ──────────────────────────────────────────────────
  private wave(
    width: number, height: number, swell: number,
    time: number, kick: number, colors: string[],
  ) {
    const { cfg } = this;
    const { cols, rows, dx, dy } = this.spacing(width, height, time);
    const size = this.fitSize(this.text, dx * cfg.type.fit) * swell;
    const amplitude = width * cfg.wave.amplitude * (1 + kick);
    const steer = (this.aim.y - 0.5) * 2 * cfg.motion.handInfluence;

    let index = 0;
    for (let row = 0; row < rows; row++) {
      // Every cell in a row shares the row's phase: that is what makes it
      // read as one ribbon sliding rather than as noise.
      const phase = (row / Math.max(1, rows)) * cfg.wave.frequency * Math.PI * 2;
      const slide = Math.sin(phase + time * cfg.wave.speed + steer) * amplitude;
      const swell = 1 + Math.sin(phase + time * cfg.wave.speed) * cfg.wave.scaleWave;

      for (let col = 0; col < cols; col++, index++) {
        const x = (col + 0.5) * dx + (width - cols * dx) / 2 + slide;
        const y = (row + 0.5) * dy + (height - rows * dy) / 2;
        // Wrap rather than clip, so a row sliding off one edge returns at the
        // other and the field stays full.
        const wrapped = ((x % width) + width) % width;
        this.stamp(wrapped, y, size * swell, this.colorFor(index, time, colors));
      }
    }
  }

  // ── 4. vanishing point ────────────────────────────────────────────────────
  private depth(
    width: number, height: number, swell: number,
    time: number, kick: number, colors: string[],
  ) {
    const { cfg } = this;
    const size = height * cfg.depth.size * swell;
    const steps = Math.max(2, Math.round(cfg.depth.steps));
    const scroll = time * cfg.depth.speed;
    const horizon =
      height * (cfg.depth.horizon + (this.aim.y - 0.5) * cfg.motion.handInfluence * 0.3);

    for (let i = 0; i < steps; i++) {
      // Each row sits at a depth that scrolls; wrapping keeps the run endless.
      const z = ((i / steps + scroll) % 1 + 1) % 1;
      const eased = Math.pow(z, cfg.depth.curve);

      // Perspective division: near rows are large and far apart, far ones
      // small and stacked tight.
      const scale = eased * (1 + kick);
      const y = horizon + eased * (height - horizon) * 1.1;
      if (y > height + size || scale <= 0.001) continue;

      // Tracking opens up as a row comes forward, which is what sells the
      // depth — the near word is not just bigger, it is looser.
      this.stamp(
        width / 2,
        y,
        Math.max(1, size * scale),
        this.colorFor(i, time, colors),
        Math.min(1, 0.25 + eased),
        this.text,
        cfg.type.tracking + eased * cfg.depth.spread,
      );
    }
  }

  // ── 5. scattered letterforms ──────────────────────────────────────────────
  private scatter(
    width: number, height: number, swell: number,
    time: number, kick: number, colors: string[],
  ) {
    const { cfg } = this;
    const chars = [...this.text];
    if (chars.length === 0) return;

    if (this.targets.length !== chars.length) {
      this.targets = chars.map((_, i) => ({
        x: TextRenderer.noise(i * 3.7 + 1),
        y: TextRenderer.noise(i * 7.1 + 2),
        seed: TextRenderer.noise(i * 11.3 + 3),
      }));
    }

    const size = Math.max(2, height * cfg.scatter.size * swell);
    // Hands open and close the word: spread pulls the letters out to their
    // targets, so closing your hands reassembles it.
    const reach = Math.min(1, Math.max(0,
      cfg.scatter.amount + kick + (this.aim.x - 0.5) * cfg.motion.handInfluence));

    const advance = size * (0.62 + cfg.type.tracking);
    const lineWidth = advance * chars.length;

    chars.forEach((char, i) => {
      const target = this.targets[i];
      // Staggering the pull is what makes them leave one after another rather
      // than the whole word inflating at once.
      const delay = i * cfg.scatter.stagger * 0.1;
      const pull = Math.min(1, Math.max(0, reach - delay));

      const homeX = width / 2 - lineWidth / 2 + advance * (i + 0.5);
      const homeY = height / 2;

      let awayX: number;
      let awayY: number;
      if (cfg.scatter.spiral >= 0.5) {
        // Wound onto a spiral, so the word turns rather than simply flies apart.
        const angle = (i / chars.length) * Math.PI * 6 + time * cfg.scatter.drift;
        const radius = (0.1 + (i / chars.length) * 0.4) * Math.min(width, height);
        awayX = width / 2 + Math.cos(angle) * radius;
        awayY = height / 2 + Math.sin(angle) * radius;
      } else {
        const wander = time * cfg.scatter.drift + target.seed * Math.PI * 2;
        awayX = (0.08 + target.x * 0.84) * width + Math.cos(wander) * width * 0.05;
        awayY = (0.08 + target.y * 0.84) * height + Math.sin(wander) * height * 0.05;
      }

      this.stamp(
        homeX + (awayX - homeX) * pull,
        homeY + (awayY - homeY) * pull,
        size,
        this.colorFor(i, time, colors),
        1,
        char,
      );
    });
  }
}
