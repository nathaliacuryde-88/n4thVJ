import { AudioData, HandData } from '../../App';
import { MyceliumConfig } from '../../config/MyceliumRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { Playing } from './inflated/style';
import { beatPosition } from '../../motion/tempo';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * MYCELIUM
 * ═══════════════════════════════════════════════════════════════════════════
 * Threads that grow: each has a tip that advances, wanders, and now and then
 * forks, leaving a line behind it. Roots, mycelium, veins, rivers seen from
 * above — the shape that anything takes when it has to reach everywhere from
 * somewhere.
 *
 * IT IS ALWAYS GROWING AND ALWAYS FADING. A thread lasts under a minute and
 * then thins away, so the picture never fills up and never repeats: the
 * network on screen is always the last minute of growth.
 *
 * THE HAND IS WHAT IT GROWS TOWARDS. Tips bend towards a hand in view; an
 * open palm makes them eager, a fist stops the growth and lets it wither.
 * A clap seeds a burst of new threads where the hand is.
 *
 * THE MUSIC TRAVELS THROUGH IT. Each kick starts a pulse of light at every
 * root, running out along the threads to the tips — the network carrying a
 * signal — and makes tips fork. Bass thickens the threads; a fuller passage
 * grows faster; the drop seeds the middle.
 *
 * Every thread is kept as a list of short segments and the whole network is
 * redrawn each frame, which is what lets it fade exactly and lets a pulse
 * light the right part of it.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof MyceliumConfig;

const MAX_SEGMENTS = 14000;
const MAX_TIPS = 220;
/** Seconds a thread lasts at Lasting 1. */
const LIFE = 42;
/** Brightness steps and width steps the segments are sorted into, to draw them in few strokes. */
const SHADES = 6;
const WIDTHS = 4;

interface Tip {
  x: number; y: number;       // in frame heights, so a resize does not move it
  angle: number;
  /** How many forks from its root. */
  depth: number;
  /** Distance along the thread from its root, in frame heights. */
  along: number;
  /** How far it may still grow. */
  left: number;
  seed: number;
}

function rgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [parseInt(full.slice(0, 2), 16) || 0, parseInt(full.slice(2, 4), 16) || 0, parseInt(full.slice(4, 6), 16) || 0];
}

export class MyceliumRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = MyceliumConfig;
  private playing = new Playing(0.6);
  private tips: Tip[] = [];
  /** Segments in a ring: x1, y1, x2, y2, along, depth, born. */
  private segs = new Float32Array(MAX_SEGMENTS * 7);
  private head = 0;
  private count = 0;
  private time = 0;
  private real = 0;
  private pulses: { at: number; strength: number }[] = [];
  private lastKick = 0;
  private lastDrop = 0;
  private fork = 0;
  /** The push of the last beat, falling away until the next: what the tips grow on. */
  private surge = 0;
  private lastBeatNo = -1;
  private lastBeatAt = 0;
  private beatsSeen = 0;
  private lastSnare = 0;
  private hand = { x: 0.5, y: 0.5, on: 0 };
  private aspect = 16 / 9;
  private paths: Path2D[] = [];

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(MyceliumConfig, values);
  }

  /** A new root: from an edge, growing in; or from a point, growing out. */
  private seed(at?: { x: number; y: number }, fan = 1) {
    const a = this.aspect;
    for (let i = 0; i < fan && this.tips.length < MAX_TIPS; i++) {
      let x: number, y: number, angle: number;
      if (at) {
        x = at.x; y = at.y;
        angle = (i / fan) * Math.PI * 2 + Math.random() * 0.6;
      } else {
        const side = Math.random();
        if (side < 0.55) { x = Math.random() * a; y = 1.02; angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.9; }
        else if (side < 0.775) { x = -0.02; y = 0.2 + Math.random() * 0.7; angle = (Math.random() - 0.5) * 0.9; }
        else { x = a + 0.02; y = 0.2 + Math.random() * 0.7; angle = Math.PI + (Math.random() - 0.5) * 0.9; }
      }
      this.tips.push({ x, y, angle, depth: 0, along: 0, left: 0.9 + Math.random() * 0.9, seed: Math.random() * 1000 });
    }
  }

  private add(x1: number, y1: number, x2: number, y2: number, along: number, depth: number) {
    const k = this.head * 7;
    const s = this.segs;
    s[k] = x1; s[k + 1] = y1; s[k + 2] = x2; s[k + 3] = y2; s[k + 4] = along; s[k + 5] = depth; s[k + 6] = this.time;
    this.head = (this.head + 1) % MAX_SEGMENTS;
    this.count = Math.min(MAX_SEGMENTS, this.count + 1);
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { canvas, ctx, cfg } = this;
    const W = canvas.width;
    const H = canvas.height;
    if (!W || !H) return;
    this.aspect = W / H;
    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    const step = Math.min(0.08, Math.max(0, play.step));
    this.time += step;
    this.real += dt;
    const ease = (rate: number) => 1 - Math.exp(-dt * rate);

    // ── the hand ─────────────────────────────────────────────────────────
    const hands = [handData.left, handData.right].filter(Boolean);
    const real = hands.length > 0 && !handData.synthetic;
    if (hands.length) {
      const x = hands.reduce((s, h) => s + h!.position.x, 0) / hands.length;
      const y = hands.reduce((s, h) => s + h!.position.y, 0) / hands.length;
      this.hand.x += (x * this.aspect - this.hand.x) * ease(8);
      this.hand.y += (y - this.hand.y) * ease(8);
    }
    // A hand that is really there is followed closely; the stand-in only suggests a way.
    this.hand.on += ((hands.length ? cfg.hands.reach * (real ? 1 : 0.35) : 0) - this.hand.on) * ease(3);
    // A fist stops the growth; an open palm hurries it.
    const eager = real ? 0.05 + 1.5 * (1 - play.fist) : 1;

    // ── the music ────────────────────────────────────────────────────────
    // The beat: from the tempo when there is one (heard or tapped), so it
    // lands on time even where the kick is buried; otherwise from the kicks.
    const kick = Math.max(play.kick, play.bump) * cfg.sound.beat;
    const kicked = kick > 0.45 && this.lastKick <= 0.45;
    this.lastKick = kick;
    const at = beatPosition();
    let beat = false;
    if (at) {
      beat = at.beat !== this.lastBeatNo && this.real - this.lastBeatAt > 0.22;
      this.lastBeatNo = at.beat;
    } else {
      beat = kicked;
    }
    const live = !!audioData?.live;
    // In step when the music has a beat to be in step with.
    const rhythmic = (live || at !== null) && cfg.sound.lock > 0.01;
    if (beat && rhythmic) {
      this.lastBeatAt = this.real;
      this.beatsSeen++;
      this.surge = Math.max(this.surge, Math.min(1.2, 0.75 + 0.35 * Math.max(kick, 0.6)));
      this.pulses.push({ at: 0, strength: Math.min(1.2, Math.max(0.7, kick)) * cfg.sound.beat });
      if (this.pulses.length > 4) this.pulses.shift();
      // The first beat of each bar: the roots fork together.
      const downbeat = at ? ((at.beat % 4) + 4) % 4 === 0 : this.beatsSeen % 4 === 1;
      if (downbeat) this.fork = 0.2;
    } else if (kicked && !rhythmic) {
      this.pulses.push({ at: 0, strength: Math.min(1.2, kick) });
      if (this.pulses.length > 4) this.pulses.shift();
      this.fork = 0.18;
    }
    this.surge *= Math.exp(-dt * 7);
    // The snare: every growing end kinks at once.
    const snared = play.snare > 0.5 && this.lastSnare <= 0.5 && rhythmic;
    this.lastSnare = play.snare;
    if (snared) for (const tip of this.tips) tip.angle += (Math.random() < 0.5 ? -1 : 1) * (0.25 + Math.random() * 0.35);
    this.fork = Math.max(0, this.fork - dt);
    for (const p of this.pulses) p.at += dt * 1.1;
    this.pulses = this.pulses.filter((p) => p.at < 3.2);
    if (play.clapped) {
      this.seed(hands.length ? { x: this.hand.x, y: this.hand.y } : { x: this.aspect / 2, y: 0.5 }, Math.round(7 * cfg.hands.clap));
      this.pulses.push({ at: 0, strength: 1.2 });
    }
    if (play.drop > 0.5 && this.lastDrop <= 0.5) this.seed({ x: this.aspect / 2, y: 0.5 }, 9);
    this.lastDrop = play.drop;

    // ── grow ─────────────────────────────────────────────────────────────
    const life = LIFE * Math.max(0.2, cfg.growth.lasting);
    const pace = 0.085 * cfg.growth.speed * eager * (0.7 + 0.7 * play.energy) * (1 + 0.5 * play.build);
    // In step, the roots lunge forward on each beat and nearly stop before the
    // next; the slider blends between that and an even flow.
    const lock = Math.max(0, Math.min(1, cfg.sound.lock));
    const gait = rhythmic ? 1 - lock + lock * (0.08 + 2.7 * this.surge) : 1;
    const advance = pace * step * gait;
    // Never empty: a few roots are always on their way in.
    const wanted = Math.round(5 + 6 * play.energy + 8 * play.build);
    if (this.tips.length < wanted && eager > 0.3) this.seed();

    if (advance > 0) {
      const born: Tip[] = [];
      for (const tip of this.tips) {
        const length = advance * (1 - 0.08 * Math.min(6, tip.depth));
        // A root does not sweep: it runs nearly straight and kinks, finely and
        // often, the finer the further out it is. Then it bends towards the hand.
        tip.angle += (Math.sin(tip.along * 47 + tip.seed) * 1.5 + Math.sin(tip.along * 113 + tip.seed * 1.7) * 1.1
          + (Math.random() - 0.5) * 5) * length * (3.2 + 0.9 * tip.depth) * cfg.growth.wander;
        if (this.hand.on > 0.02) {
          const to = Math.atan2(this.hand.y - tip.y, this.hand.x - tip.x);
          let turn = to - tip.angle;
          while (turn > Math.PI) turn -= Math.PI * 2;
          while (turn < -Math.PI) turn += Math.PI * 2;
          const near = 1 / (0.35 + Math.hypot(this.hand.x - tip.x, this.hand.y - tip.y));
          // The main roots go to the hand; the fine ones spread as they please.
          tip.angle += turn * Math.min(1, length * 9 * this.hand.on * near / (1 + tip.depth * 0.9));
        }
        const nx = tip.x + Math.cos(tip.angle) * length;
        const ny = tip.y + Math.sin(tip.angle) * length;
        this.add(tip.x, tip.y, nx, ny, tip.along, tip.depth);
        tip.x = nx; tip.y = ny;
        tip.along += length;
        tip.left -= length;

        // Forking: now and then, and readily just after a kick.
        const chance = length * (11 + (this.fork > 0 ? 30 : 0)) * cfg.growth.branching / (1 + tip.depth * 0.5);
        if (Math.random() < chance && this.tips.length + born.length < MAX_TIPS && tip.depth < 7) {
          const side = Math.random() < 0.5 ? -1 : 1;
          born.push({
            x: tip.x, y: tip.y,
            angle: tip.angle + side * (0.55 + Math.random() * 0.75),
            depth: tip.depth + 1, along: tip.along,
            left: tip.left * (0.45 + Math.random() * 0.4), seed: Math.random() * 1000,
          });
          // The parent gives way a little, as a real fork does.
          tip.angle -= side * 0.14;
        }
      }
      this.tips.push(...born);
      this.tips = this.tips.filter((t) => t.left > 0 && t.x > -0.1 && t.x < this.aspect + 0.1 && t.y > -0.1 && t.y < 1.1);
    }

    // ── draw ─────────────────────────────────────────────────────────────
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);

    const paths = this.paths;
    for (let i = 0; i < SHADES * WIDTHS; i++) paths[i] = new Path2D();
    const s = this.segs;
    const now = this.time;
    for (let n = 0; n < this.count; n++) {
      const k = n * 7;
      const age = now - s[k + 6];
      if (age > life) continue;
      // Full strength for most of its life, then thinning away.
      let light = Math.min(1, (life - age) / (life * 0.35)) * Math.min(1, age * 6 + 0.25);
      for (const p of this.pulses) {
        const d = s[k + 4] - p.at;
        if (d > -0.16 && d < 0.05) light += Math.exp(-(d * d) / 0.003) * p.strength * 1.3;
      }
      const shade = Math.min(SHADES - 1, Math.floor(Math.min(1.999, light) / 2 * SHADES));
      if (light < 0.04) continue;
      const width = Math.min(WIDTHS - 1, Math.round(s[k + 5]));
      const path = paths[shade * WIDTHS + width];
      path.moveTo(s[k] * H, s[k + 1] * H);
      path.lineTo(s[k + 2] * H, s[k + 3] * H);
    }

    const [r1, g1, b1] = rgb(colors[2] ?? '#e8e4d4');
    const [r2, g2, b2] = rgb(colors[0] ?? '#55ccbb');
    const unit = (H / 720) * cfg.growth.weight * (1 + 0.5 * play.bass * cfg.sound.bass);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalCompositeOperation = 'lighter';
    for (let shade = 0; shade < SHADES; shade++) {
      const level = (shade + 0.5) / SHADES * 2;
      for (let width = 0; width < WIDTHS; width++) {
        const path = paths[shade * WIDTHS + width];
        // Pale at the root, the panel's colour out at the fine ends.
        const f = width / (WIDTHS - 1);
        const lift = Math.max(0, level - 1);
        const r = Math.round(Math.min(255, 255 * 0.86 + (r1 + (r2 - r1) * f - 255 * 0.86) * (0.35 + 0.65 * f) + 80 * lift));
        const g = Math.round(Math.min(255, 255 * 0.86 + (g1 + (g2 - g1) * f - 255 * 0.86) * (0.35 + 0.65 * f) + 80 * lift));
        const b = Math.round(Math.min(255, 255 * 0.86 + (b1 + (b2 - b1) * f - 255 * 0.86) * (0.35 + 0.65 * f) + 80 * lift));
        ctx.strokeStyle = `rgb(${r},${g},${b})`;
        const w = [3.4, 2.2, 1.4, 0.9][width] * unit;
        if (level > 1) {
          // Where a pulse is passing, a halo round the thread.
          ctx.globalAlpha = Math.min(1, 0.22 * lift * 2);
          ctx.lineWidth = w + 7 * unit;
          ctx.stroke(path);
        }
        ctx.globalAlpha = Math.min(1, level * 0.9);
        ctx.lineWidth = w;
        ctx.stroke(path);
      }
    }
    // The growing ends, as points of light.
    ctx.fillStyle = '#fff';
    for (const tip of this.tips) {
      // They flash with each beat.
      ctx.globalAlpha = Math.min(1, 0.6 + 0.5 * this.surge);
      ctx.beginPath();
      ctx.arc(tip.x * H, tip.y * H, Math.max(1, (2.4 - tip.depth * 0.22) * unit * (1 + 0.9 * this.surge)), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }
}
