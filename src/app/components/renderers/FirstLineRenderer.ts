import { AudioData, HandData } from '../../App';
import { FirstLineConfig } from '../../config/FirstLineRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { Playing } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * FIRST LINE
 * ═══════════════════════════════════════════════════════════════════════════
 * The emptiest visual in the library, on purpose: black, then a point, then
 * a line drawing itself out from that point to both edges. Everything after
 * comes out of that one line.
 *
 * IT UNFOLDS. The line is really many lines lying exactly on top of each
 * other. An open palm fans them apart; a fist gathers them back into one.
 * With no hand in view the music does it: the fuller the music, the further
 * they open, and in a breakdown they fold back towards a single line.
 *
 * THE HAND PLUCKS IT. Wherever the hand is, the lines are drawn towards it,
 * as a string is pulled to a finger — all of them to the one point, so the
 * hand is a knot in the field.
 *
 * THE MUSIC RUNS ALONG IT. Each kick sends a pulse out from the middle to
 * both ends. The bass makes the whole field breathe. A clap makes every line
 * shiver apart and settle.
 *
 * Soft curves only, light on black, so it layers under anything.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof FirstLineConfig;

/** Points along each line. */
const STEPS = 110;
/** Pulses that can be travelling at once. */
const PULSES = 5;

function rgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [parseInt(full.slice(0, 2), 16) || 0, parseInt(full.slice(2, 4), 16) || 0, parseInt(full.slice(4, 6), 16) || 0];
}

export class FirstLineRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = FirstLineConfig;
  private playing = new Playing(0.5);
  /** Seconds it has been alive, on the shared clock: how far the first line has drawn. */
  private age = 0;
  private time = 0;
  /** How far the lines are fanned apart, 0 one line to 1 fully open. Eased. */
  private unfold = 0;
  private breath = 0;
  private shiver = 0;
  private pulses: { at: number; strength: number }[] = [];
  private lastKick = 0;
  /** Where the hand is, eased, and how strongly it holds the lines. */
  private hand = { x: 0.5, y: 0.5, hold: 0 };
  private idle = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(FirstLineConfig, values);
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { canvas, ctx, cfg } = this;
    const W = canvas.width;
    const H = canvas.height;
    if (!W || !H) return;
    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    const step = Math.max(0, play.step);
    this.age += step;
    this.time += step;
    this.idle += dt;
    const ease = (rate: number) => 1 - Math.exp(-dt * rate);

    // ── what the hands and the music ask for ─────────────────────────────
    const hands = [handData.left, handData.right].filter(Boolean);
    const real = hands.length > 0 && !handData.synthetic;
    const live = !!audioData?.live;
    let want: number;
    if (real) want = (1 - play.fist) * cfg.hands.open;
    else if (live) want = (0.12 + 0.88 * play.energy) * cfg.sound.grow;
    // Left quite alone, it opens and closes slowly by itself.
    else want = 0.35 + 0.3 * Math.sin(this.idle * 0.21);
    this.unfold += (Math.min(1, Math.max(0, want)) - this.unfold) * ease(real ? 5 : 0.8);
    this.breath += (play.bass * cfg.sound.bass - this.breath) * ease(3);
    if (play.clapped) this.shiver = Math.min(1.4, play.clapStrength * 1.3 * cfg.hands.clap);
    this.shiver *= Math.exp(-dt * 2.4);

    const kick = Math.max(play.kick, play.bump) * cfg.sound.beat;
    if (kick > 0.45 && this.lastKick <= 0.45) {
      this.pulses.push({ at: 0, strength: Math.min(1.2, kick) });
      if (this.pulses.length > PULSES) this.pulses.shift();
    }
    this.lastKick = kick;
    for (const p of this.pulses) p.at += dt * 0.75;
    this.pulses = this.pulses.filter((p) => p.at < 0.75);

    if (hands.length) {
      const x = hands.reduce((s, h) => s + h!.position.x, 0) / hands.length;
      const y = hands.reduce((s, h) => s + h!.position.y, 0) / hands.length;
      this.hand.x += (x - this.hand.x) * ease(8);
      this.hand.y += (y - this.hand.y) * ease(8);
    }
    this.hand.hold += ((real ? cfg.hands.pull : 0) - this.hand.hold) * ease(4);

    // ── how much of the first line exists yet ────────────────────────────
    // A point for a breath, then it draws out to both edges.
    const birth = cfg.line.birth;
    const drawn = birth <= 0 ? 1 : Math.min(1, Math.max(0, (this.age - 1.6 * birth) / (5 * birth)));
    const reach = drawn * drawn * (3 - 2 * drawn);
    const point = birth <= 0 ? 0 : Math.max(0, 1 - this.age / (2.4 * birth));

    // ── draw ─────────────────────────────────────────────────────────────
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);

    const count = Math.max(1, Math.round(cfg.line.count));
    const [r1, g1, b1] = rgb(colors[0] ?? '#8899ff');
    const [r2, g2, b2] = rgb(colors[2] ?? colors[1] ?? '#ffffff');
    // Zoom: the fan, its waves and its weight, smaller or larger — the lines
    // still run from edge to edge.
    const z = Math.max(0.1, cfg.line.zoom);
    const Hz = H * z;
    const unit = (H / 720) * z;
    const spread = Hz * 0.74 * this.unfold * (1 + 0.12 * this.breath);
    const wave = cfg.line.wave;
    const t = this.time;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalCompositeOperation = 'lighter';

    // The point it starts from.
    if (point > 0.01) {
      const radius = (3 + 2.5 * Math.sin(this.idle * 2.2)) * unit * (1 + this.breath);
      ctx.globalAlpha = Math.min(1, point * 1.4);
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, Math.max(1, radius), 0, Math.PI * 2);
      ctx.fill();
    }

    if (reach > 0.002) {
      const from = 0.5 - 0.5 * reach;
      const to = 0.5 + 0.5 * reach;
      for (let i = 0; i < count; i++) {
        // -1 at the top line, 1 at the bottom one; a single line sits at 0.
        const place = count === 1 ? 0 : (i / (count - 1)) * 2 - 1;
        const phase = place * 2.6 * this.unfold;
        const tremble = this.shiver * Math.sin(i * 12.9898) * 43758.5453;
        const jolt = (tremble - Math.floor(tremble) - 0.5) * this.shiver * Hz * 0.09;

        ctx.beginPath();
        let prevX = 0;
        let prevY = 0;
        for (let s = 0; s <= STEPS; s++) {
          const u = from + (to - from) * (s / STEPS);
          // Held still at the edges, free in the middle.
          const free = Math.sin(Math.PI * u);
          let y = H / 2 + place * spread * 0.5;
          y += (Math.sin(u * 6.2 + t * 0.55 + phase) * 0.6 + Math.sin(u * 13.7 - t * 0.38 + phase * 1.7) * 0.25)
            * Hz * 0.035 * wave * free * (0.35 + 0.65 * this.unfold + this.breath * 0.6);
          y += jolt * free * Math.sin(u * 20 + i);
          // Each pulse is a bump leaving the middle for both ends.
          for (const p of this.pulses) {
            const d = Math.abs(u - 0.5) - p.at;
            y -= Math.exp(-(d * d) / 0.0016) * p.strength * Hz * 0.05 * (1 - p.at / 0.75) * (place === 0 ? 1 : Math.sign(place) * -1);
          }
          // Drawn to the hand, all of them to the one point.
          if (this.hand.hold > 0.01) {
            const dx = u - this.hand.x;
            const pullTo = Math.exp(-(dx * dx) / 0.022) * Math.min(1, this.hand.hold) * 0.85;
            y += (this.hand.y * H - y) * pullTo;
          }
          const x = u * W;
          if (s === 0) ctx.moveTo(x, y);
          else ctx.quadraticCurveTo(prevX, prevY, (prevX + x) / 2, (prevY + y) / 2);
          prevX = x;
          prevY = y;
        }
        ctx.lineTo(prevX, prevY);

        // White in the middle of the fan, the panel's colours towards its edges.
        const out = Math.abs(place) * this.unfold;
        const r = Math.round(255 + (r1 + (r2 - r1) * (place * 0.5 + 0.5) - 255) * out);
        const g = Math.round(255 + (g1 + (g2 - g1) * (place * 0.5 + 0.5) - 255) * out);
        const b = Math.round(255 + (b1 + (b2 - b1) * (place * 0.5 + 0.5) - 255) * out);
        // The same light whether it is one line or many: folded, they add up.
        const share = 1 / (1 + (count - 1) * (1 - this.unfold));
        const weight = cfg.line.weight * unit * (1 + 0.35 * kick);
        ctx.strokeStyle = `rgb(${r},${g},${b})`;
        ctx.globalAlpha = Math.min(1, 0.16 * share * 2.2);
        ctx.lineWidth = 7 * weight;
        ctx.stroke();
        ctx.globalAlpha = Math.min(1, 0.95 * Math.max(share, 0.3 + 0.7 * this.unfold));
        ctx.lineWidth = 1.5 * weight;
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }
}
