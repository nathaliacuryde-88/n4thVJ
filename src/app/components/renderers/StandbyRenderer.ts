import { AudioData, HandData } from '../../App';
import { StandbyConfig } from '../../config/StandbyRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { presence, presenceAt, wantPresence } from '../../hands/presence';
import { Playing } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * STANDBY
 * ═══════════════════════════════════════════════════════════════════════════
 * The end of the story. Machine Vision put a box round everything and wrote
 * down what it was; here the boxes and the words are gone, and what is left
 * is the same field of dots, at rest. It is the quiet one.
 *
 * THE HAND IS A LIGHT in the field. Open, it is wide and soft, and the dots
 * under it grow; closing, the light draws in, until a fist is one bright
 * point. It leaves a short wake as it moves. Two hands are two lights with a
 * line of dots between them.
 *
 * A FIST CLOSES THE PICTURE, the way an old screen went off: the whole field
 * folds down onto one line through the hand, and the line draws in to a
 * point. Opening the hand opens it again — the point becomes a line, the
 * line a field. The set began with a point that became a line; it can end
 * with one.
 *
 * A CLAP is one ring across the whole field, and it opens the picture if it
 * was closed. The music is kept small: a faint ring on the kick, a breath of
 * the dots with the bass, and when the music empties out the picture begins
 * to close by itself.
 *
 * Her own outline can stay in the dots, faintly (Figure): not boxed, not
 * named, only there.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof StandbyConfig;

/** How many steps of brightness the dots are drawn in. */
const LEVELS = 8;

interface Light { x: number; y: number; reach: number; power: number }
interface Ring { x: number; y: number; at: number; strength: number }

function rgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [parseInt(full.slice(0, 2), 16) || 0, parseInt(full.slice(2, 4), 16) || 0, parseInt(full.slice(4, 6), 16) || 0];
}

export class StandbyRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = StandbyConfig;
  private playing = new Playing(0.6);
  private lit = new Float32Array(0);
  private columns = 0;
  private rows = 0;
  private time = 0;
  private real = 0;
  /** 0 the open field, 1 closed to a point. */
  private closed = 0;
  private focus = { x: 0.89, y: 0.5 };
  private rings: Ring[] = [];
  private lastKick = 0;
  private breath = 0;
  private release: (() => void) | null = null;
  private glow = document.createElement('canvas');
  private glowKey = '';

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(StandbyConfig, values);
  }

  destroy() {
    this.release?.();
    this.release = null;
  }

  /** The point everything closes to, in the panel's colour. */
  private tint(hex: string) {
    if (hex === this.glowKey) return;
    this.glowKey = hex;
    const [r, g, b] = rgb(hex);
    this.glow.width = this.glow.height = 96;
    const c = this.glow.getContext('2d')!;
    c.clearRect(0, 0, 96, 96);
    const grad = c.createRadialGradient(48, 48, 0, 48, 48, 48);
    const pale = (v: number) => Math.round(v + (255 - v) * 0.6);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.1, `rgba(${pale(r)},${pale(g)},${pale(b)},0.9)`);
    grad.addColorStop(0.35, `rgba(${r},${g},${b},0.25)`);
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
    c.fillStyle = grad;
    c.fillRect(0, 0, 96, 96);
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { canvas, ctx, cfg } = this;
    const W = canvas.width;
    const H = canvas.height;
    if (!W || !H) return;
    const aspect = W / H;
    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    const step = Math.min(0.08, Math.max(0, play.step));
    this.time += step;
    this.real += dt;
    const ease = (rate: number) => 1 - Math.exp(-dt * rate);
    this.tint(colors[0] ?? '#8fb4ff');

    // Her outline is a second model to run: asked for only while it is shown.
    if (cfg.grid.figure > 0.01 && !this.release) this.release = wantPresence();
    if (cfg.grid.figure <= 0.01 && this.release) { this.release(); this.release = null; }

    // ── the grid ─────────────────────────────────────────────────────────
    // Zoomed out, more dots and smaller, still filling the frame; in, fewer and bigger.
    const rows = Math.round(Math.max(8, Math.min(150, (22 + 34 * Math.max(0, Math.min(1, cfg.grid.detail))) / Math.max(0.2, cfg.grid.zoom))));
    const columns = Math.round(rows * aspect);
    if (rows !== this.rows || columns !== this.columns) {
      this.rows = rows;
      this.columns = columns;
      this.lit = new Float32Array(rows * columns);
    }
    const cell = 1 / rows;

    // ── the hands: lights ────────────────────────────────────────────────
    const hands = [handData.left, handData.right].filter(Boolean);
    const real = hands.length > 0 && !handData.synthetic;
    let lights: Light[] = hands.map((hand) => {
      const open = hand!.openness ?? (hand!.gesture === 'fist' ? 0 : 1);
      const near = hand!.depth ?? 0.35;
      return {
        x: hand!.position.x * aspect,
        y: hand!.position.y,
        reach: (0.04 + 0.19 * open * open) * cfg.hands.light * (0.8 + 0.6 * near),
        power: 0.85 + 0.5 * near,
      };
    });
    if (lights.length && !real) {
      // Nobody there: one small light wanders the field, so it is not still.
      lights = [{
        x: lights.reduce((s, l) => s + l.x, 0) / lights.length,
        y: lights.reduce((s, l) => s + l.y, 0) / lights.length,
        reach: 0.13 * cfg.hands.light,
        power: 0.7,
      }];
    }
    if (lights.length) {
      const x = lights.reduce((s, l) => s + l.x, 0) / lights.length;
      const y = lights.reduce((s, l) => s + l.y, 0) / lights.length;
      this.focus.x += (x - this.focus.x) * ease(6);
      this.focus.y += (y - this.focus.y) * ease(6);
    } else {
      this.focus.x += (aspect / 2 - this.focus.x) * ease(0.8);
      this.focus.y += (0.5 - this.focus.y) * ease(0.8);
    }

    // ── closing ──────────────────────────────────────────────────────────
    // Her fist closes it. With no hand in view it is the music: as it empties
    // out, the picture begins to fold.
    const live = !!audioData?.live;
    let want = 0;
    if (real) want = play.fist * cfg.hands.close;
    else if (live) want = Math.max(0, Math.min(0.8, (0.3 - play.energy) * 3.2)) * cfg.sound.quiet;
    this.closed += (Math.min(1, want) - this.closed) * ease(want > this.closed ? 1.7 : 2.6);
    if (play.clapped && cfg.hands.clap > 0) {
      this.rings.push({ x: this.focus.x, y: this.focus.y, at: 0, strength: play.clapStrength * cfg.hands.clap });
      this.closed *= 0.25;
    }
    const smooth = (a: number, b: number, v: number) => {
      const k = Math.max(0, Math.min(1, (v - a) / (b - a)));
      return k * k * (3 - 2 * k);
    };
    // First down to a line, then the line in to a point.
    const flat = smooth(0.04, 0.62, this.closed);
    const narrow = smooth(0.55, 1, this.closed);

    // ── the music, small ─────────────────────────────────────────────────
    const kick = Math.max(play.kick, play.bump) * cfg.sound.beat;
    if (kick > 0.45 && this.lastKick <= 0.45) {
      this.rings.push({ x: this.focus.x, y: this.focus.y, at: 0, strength: 0.16 + 0.14 * Math.min(1, kick) });
      if (this.rings.length > 6) this.rings.shift();
    }
    this.lastKick = kick;
    for (const ring of this.rings) ring.at += dt;
    this.rings = this.rings.filter((ring) => ring.at < 2.6);
    this.breath += (play.bass - this.breath) * ease(3);

    // ── how lit each dot is ──────────────────────────────────────────────
    const mask = this.release ? presence() : null;
    const figure = cfg.grid.figure;
    const field = cfg.grid.field;
    const t = this.time;
    const lit = this.lit;
    const up = ease(16);
    const down = ease(2.4);
    const a = lights[0];
    const b = lights[1];
    let abx = 0, aby = 0, abLen = 0;
    if (a && b) {
      abx = b.x - a.x; aby = b.y - a.y;
      abLen = abx * abx + aby * aby;
    }
    for (let r = 0; r < rows; r++) {
      const y = (r + 0.5) * cell;
      for (let c = 0; c < columns; c++) {
        const x = (c + 0.5) * cell;
        // At rest: faint, with one long slow wave passing through.
        let v = field * (0.16 + 0.07 * Math.sin(x * 2.1 + y * 1.3 - t * 0.5) + 0.04 * Math.sin(x * 0.9 - y * 2.7 + t * 0.31));
        if (mask && figure > 0.01) v += presenceAt(mask, x / aspect, y) * 0.34 * figure;
        for (const light of lights) {
          const dx = x - light.x;
          const dy = y - light.y;
          v += light.power * Math.exp(-(dx * dx + dy * dy) / (light.reach * light.reach));
        }
        if (abLen > 1e-5) {
          // The line between two hands.
          const along = Math.max(0, Math.min(1, ((x - a.x) * abx + (y - a.y) * aby) / abLen));
          const off = Math.hypot(x - (a.x + abx * along), y - (a.y + aby * along));
          v += 0.55 * Math.exp(-(off * off) / (cell * cell * 0.5));
        }
        for (const ring of this.rings) {
          const d = Math.hypot(x - ring.x, y - ring.y) - ring.at * 0.85;
          if (d > -0.09 && d < 0.09) v += ring.strength * Math.exp(-(d * d) / 0.0011) * (1 - ring.at / 2.6);
        }
        const i = r * columns + c;
        lit[i] += (v - lit[i]) * (v > lit[i] ? up : down);
      }
    }

    // ── draw ─────────────────────────────────────────────────────────────
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);

    const paths: Path2D[] = [];
    for (let i = 0; i < LEVELS; i++) paths.push(new Path2D());
    const pitch = cell * H;
    const swell = 1 + 0.18 * this.breath;
    const fx = this.focus.x;
    const fy = this.focus.y;
    for (let r = 0; r < rows; r++) {
      // Folded onto a line, the rows lie on one another: one in three is drawn.
      if (flat > 0.97 && r % 3 !== 0) continue;
      const y0 = (r + 0.5) * cell;
      const y = (fy + (y0 - fy) * (1 - flat)) * H;
      for (let c = 0; c < columns; c++) {
        const value = lit[r * columns + c];
        if (value < 0.03) continue;
        const x0 = (c + 0.5) * cell;
        const x = (fx + (x0 - fx) * (1 - narrow)) * H;
        const level = Math.min(LEVELS - 1, Math.floor(Math.min(0.999, value) * LEVELS));
        const size = pitch * Math.min(0.5, 0.07 + 0.4 * Math.min(1, value)) * swell * (1 - 0.45 * flat);
        const path = paths[level];
        path.moveTo(x + size, y);
        path.arc(x, y, size, 0, Math.PI * 2);
      }
    }
    const [cr, cg, cb] = rgb(colors[0] ?? '#8fb4ff');
    // Folded together the dots add up; each is drawn fainter so the line stays a line.
    const thin = 1 - 0.82 * flat;
    for (let level = 0; level < LEVELS; level++) {
      const k = level / (LEVELS - 1);
      // The resting dots a cool grey; the lit ones the panel's colour, paling to white.
      const mix = (grey: number, tone: number) => {
        const lifted = tone + (255 - tone) * Math.min(1, 0.35 + Math.max(0, k * 1.6 - 0.6));
        return Math.round(grey + (lifted - grey) * Math.min(1, k * 1.4));
      };
      ctx.fillStyle = `rgb(${mix(150, cr)},${mix(156, cg)},${mix(170, cb)})`;
      ctx.globalAlpha = Math.min(1, (0.3 + 0.7 * k) * thin);
      ctx.fill(paths[level]);
    }

    // The point it closes to.
    if (narrow > 0.02) {
      const size = pitch * (2.4 + 5 * narrow) * (1 + 0.25 * this.breath);
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = Math.min(1, narrow * 1.2);
      ctx.drawImage(this.glow, fx * H - size, fy * H - size, size * 2, size * 2);
      ctx.globalCompositeOperation = 'source-over';
    }

    // One line of words, and a cursor.
    if (cfg.grid.words > 0.01) {
      const unit = H / 720;
      const font = Math.max(9, Math.round(11 * unit));
      ctx.font = `500 ${font}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.textBaseline = 'alphabetic';
      ctx.textAlign = 'left';
      let line: string;
      if (this.closed > 0.9) line = 'standby';
      else if (this.closed > 0.25) line = 'closing';
      else if (real) line = lights.length > 1 ? 'two hands' : 'one hand';
      else line = live ? 'listening' : 'waiting';
      const pale = (v: number) => Math.round(v + (255 - v) * 0.7);
      ctx.fillStyle = `rgb(${pale(cr)},${pale(cg)},${pale(cb)})`;
      ctx.globalAlpha = 0.6 * cfg.grid.words;
      const x = 20 * unit;
      const y = H - 20 * unit;
      ctx.fillText(line, x, y);
      if (Math.floor(this.real * 1.6) % 2 === 0) {
        const w = ctx.measureText(line).width;
        ctx.fillRect(x + w + 5 * unit, y - font * 0.82, font * 0.55, font);
      }
    }
    ctx.globalAlpha = 1;
  }
}
