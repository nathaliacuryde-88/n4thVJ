import { AudioData, Hand, HandData } from '../../App';
import { TextConfig } from '../../config/TextRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { alphaHex } from './alpha';
import { timeScale, vjTime } from '../../motion/clock';

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
  /** How open the hands are, 0 to 1, eased. Drives the twist. */
  private openness = 0.25;
  /** Strength of the ring the last onset launched, decaying. */
  private ringEnergy = 0;
  /** Where that ring has travelled to, 0 at the centre. */
  private ringPhase = 0;

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

    const time = vjTime();
    const bass = audioData?.bass ?? 0;

    const points = this.handPoints(handData);
    if (points.length > 0) {
      const mx = points.reduce((s, p) => s + p.x, 0) / points.length;
      const my = points.reduce((s, p) => s + p.y, 0) / points.length;
      // Quicker than it was: at 0.08 the field lagged far enough behind the
      // hand that the two did not read as connected.
      this.aim.x += (mx - this.aim.x) * 0.16;
      this.aim.y += (my - this.aim.y) * 0.16;
    }

    /*
     * How open the hands are, which is what the twist rides on.
     *
     * Taken from the finger count rather than from the gesture label, so it
     * moves through the middle instead of snapping between fist and open —
     * one finger and five have to look different, and so do two and four.
     */
    const hands = [handData.left, handData.right].filter(Boolean);
    const fingers = hands.length
      ? Math.max(...hands.map((h) => h!.fingerCount ?? 2))
      : 2;
    this.openness += ((fingers - 1) / 4 - this.openness) * 0.1;

    /*
     * The ring, launched by onsets.
     *
     * Energy jumps on a beat and decays; the phase travels outward all the
     * time, so the band moves away from the centre rather than pulsing in
     * place. Riding `onset` as well as `beat` means it still breathes on
     * music with no hard transients instead of going dead.
     */
    const hit = Math.max(
      audioData?.beat ? audioData.beatIntensity : 0,
      (audioData?.onset ?? 0) * 0.8,
      handData.clapping ? (handData.clapIntensity ?? 1) : 0,
    );
    this.ringEnergy = Math.max(this.ringEnergy * 0.94, hit);
    if (hit > this.ringEnergy * 0.98) this.ringPhase = 0;
    this.ringPhase = (this.ringPhase + 0.012 * timeScale()) % 1;

    const swell = 1 + bass * cfg.audio.bassScale;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';

    this.radial(width, height, swell, time, colors);
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

  /**
   * The field, and the only mode left.
   *
   * Four others were built to match the references and this is the one that
   * worked, so the rest are gone rather than sitting in a menu as decoys.
   *
   * Three things move it, and each has to be legible as itself:
   *
   *   THE MUSIC pushes a ring out of the centre on every onset. Before this
   *   the field breathed on a free-running sine — it looked reactive without
   *   ever having heard anything, which is worse than sitting still.
   *
   *   THE HAND carries the field with it. It used to move the centre that
   *   cells are pushed away FROM, so reaching right flung the left side
   *   further left and the whole thing read as inverted. The field follows
   *   the hand now, and the distortion travels with it.
   *
   *   THE FINGERS twist it. Tempo is already global, so counting fingers had
   *   no visible effect here beyond speed; a twist that opens as the hand
   *   opens makes one finger and five plainly different shapes.
   */
  private radial(
    width: number, height: number, swell: number,
    time: number, colors: string[],
  ) {
    const { cfg } = this;
    const { cols, rows, dx, dy } = this.spacing(width, height, time);
    const size = this.fitSize(this.text, dx * cfg.type.fit) * swell;

    // Where the hand is, as a direct offset: the field goes where she does.
    const reach = cfg.motion.handInfluence;
    const cx = 0.5 + (this.aim.x - 0.5) * reach;
    const cy = 0.5 + (this.aim.y - 0.5) * reach;

    const twist = cfg.radial.twist * this.openness;
    const strength = cfg.radial.strength * (1 + this.ringEnergy * 0.8);

    let index = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++, index++) {
        const u = (col + 0.5) / cols;
        const v = (row + 0.5) / rows;
        const ox = u - cx;
        const oy = v - cy;
        const radius = Math.hypot(ox, oy);
        const dist = Math.min(1, radius * 1.42);

        // The ring: a band of extra push travelling outward from the middle,
        // launched by the last onset. Cells it passes are thrown out and
        // settle back once it has gone by.
        const wave = Math.cos((radius - this.ringPhase) * cfg.radial.ringDensity * Math.PI * 2);
        const ring = this.ringEnergy * cfg.radial.ring * Math.max(0, wave);

        const push = 1 + Math.pow(dist, cfg.radial.power) * strength + ring;

        // Twist grows with distance, so the middle stays readable and the
        // outside spirals — which is where an opening hand shows most.
        const angle = Math.atan2(oy, ox) + twist * dist;
        const spun = radius * push;
        const x = (cx + Math.cos(angle) * spun) * width;
        const y = (cy + Math.sin(angle) * spun) * height;
        if (x < -dx || x > width + dx || y < -dy || y > height + dy) continue;

        this.stamp(x, y, size, this.colorFor(index, time, colors));
      }
    }
  }
}
