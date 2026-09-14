import { AudioData, HandData } from '../../App';
import { TextConfig } from '../../config/TextRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { alphaHex } from './alpha';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * KINETIC TYPE
 * ═══════════════════════════════════════════════════════════════════════════
 * The words are set in the library; this decides how they move.
 *
 * One line of type drawn many times over — each copy stepped, scaled and faded
 * from the one in front — so the word reads as extruded into the screen rather
 * than sitting flat on it. Your hands steer the direction that extrusion runs
 * in, which is what turns a static word into something being pushed around.
 *
 *   hands ─▶ direction ─┐
 *                       ▼
 *   text ──▶ copy 1 .. copy N  ─▶ trail
 *                       ▲
 *   audio ──▶ scale ────┘
 *
 * Deliberately one typeface and one line: the whole point is the motion, and a
 * word that wraps or changes face stops reading as one object being moved.
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** Matches the UI, which is Tailwind's default mono stack. */
const FONT_STACK =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";

type Cfg = typeof TextConfig;

export class TextRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = TextConfig;
  private text = 'N4TH';
  /** Smoothed direction, so the echo swings rather than snapping. */
  private aim = { x: 0.35, y: -0.35 };

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(TextConfig, values);
  }

  /** The words, from the library. Empty falls back so the layer is never blank. */
  setText(text: string) {
    this.text = text.trim() || 'N4TH';
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { ctx, cfg } = this;
    const width = this.canvas.width;
    const height = this.canvas.height;
    if (width === 0 || height === 0) return;

    // Trail rather than clear, the way the other renderers fade.
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = `#000000${alphaHex(cfg.trail.fadeAlpha * 255)}`;
    ctx.fillRect(0, 0, width, height);

    const t = Date.now() / 1000;
    const hands = [handData.left, handData.right].filter(Boolean);

    // Where the echo runs. Hands steer it; with none it drifts on its own so
    // the type is never simply parked.
    let aimX = Math.cos(t * cfg.motion.driftSpeed) * cfg.motion.driftAmount;
    let aimY = Math.sin(t * cfg.motion.driftSpeed * 0.8) * cfg.motion.driftAmount;
    if (hands.length > 0) {
      const mx = hands.reduce((s, h) => s + h!.position.x, 0) / hands.length;
      const my = hands.reduce((s, h) => s + h!.position.y, 0) / hands.length;
      aimX = (mx - 0.5) * 2 * cfg.motion.handInfluence;
      aimY = (my - 0.5) * 2 * cfg.motion.handInfluence;
    }
    // Ease towards it, so a jump in tracking does not snap the whole word.
    this.aim.x += (aimX - this.aim.x) * 0.08;
    this.aim.y += (aimY - this.aim.y) * 0.08;

    const bass = audioData?.bass ?? 0;
    const beat = audioData?.beat ? cfg.audio.beatPush : 0;
    const spread = handData.distanceBetweenHands ?? 0.4;

    const scale =
      (1 + bass * cfg.audio.bassScale) *
      (1 + (spread - 0.4) * cfg.motion.spreadScale);
    const size = Math.max(4, height * cfg.type.size * scale);
    const step = height * cfg.echo.offset * (1 + beat);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';

    const count = Math.max(1, Math.round(cfg.echo.count));

    // Back to front, so the front copy lands on top of its own echo.
    for (let i = count - 1; i >= 0; i--) {
      const alpha = cfg.echo.opacity - i * cfg.echo.fade;
      if (alpha <= 0) continue;

      const copyScale = Math.pow(cfg.echo.scaleStep, i);
      const color = colors[i % Math.max(1, colors.length)] ?? '#ffffff';

      ctx.save();
      ctx.translate(
        width / 2 + this.aim.x * step * i,
        height / 2 + this.aim.y * step * i,
      );
      ctx.rotate(cfg.echo.twist * i);
      ctx.scale(copyScale, copyScale);

      ctx.font = `${Math.round(cfg.type.weight)} ${size}px ${FONT_STACK}`;
      // Not every engine supports tracking; where it is missing the type just
      // sets tighter rather than failing.
      try {
        ctx.letterSpacing = `${cfg.type.tracking}em`;
      } catch {
        /* older engine, no tracking */
      }

      if (cfg.type.outline >= 0.5) {
        ctx.strokeStyle = `${color}${alphaHex(alpha * 255)}`;
        ctx.lineWidth = Math.max(0.5, cfg.type.strokeWidth);
        ctx.strokeText(this.text, 0, 0);
      } else {
        ctx.fillStyle = `${color}${alphaHex(alpha * 255)}`;
        ctx.fillText(this.text, 0, 0);
      }
      ctx.restore();
    }
  }
}
