import { AudioData, HandData } from '../../App';
import { DustConfig } from '../../config/DustRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { Playing } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DUST
 * ═══════════════════════════════════════════════════════════════════════════
 * The first thing on screen: grains of light, black and white only, so few
 * and so fine the frame still reads as dark. They drift on a slow current
 * that changes its mind every few bars.
 *
 * THE MUSIC lights them, never the same way twice: one kick sends a soft wave
 * out from somewhere in the dark, the next scatters sparks through a patch,
 * another draws a faint line across. Snares and hats are single sparks. Bass
 * breathes the field out and in.
 *
 * THE HAND: an open palm lights the dust around it and parts it; a fist
 * gathers it into the circle the universe begins with (as the Circle slider
 * does, for the end of the scene). A clap lights all of it at once.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Event = { kind: 0 | 1 | 2; x: number; y: number; age: number; strength: number; angle: number; reach: number };

export class DustRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg = DustConfig;
  private playing = new Playing(0.6);
  private n = 0;
  private x = new Float32Array(0);
  private y = new Float32Array(0);
  private z = new Float32Array(0);
  private vx = new Float32Array(0);
  private vy = new Float32Array(0);
  private light = new Float32Array(0);
  private phase = new Float32Array(0);
  private time = 0;
  private events: Event[] = [];
  private lastKick = 0;
  private lastSnare = 0;
  private lastHat = 0;
  private kicks = 0;
  private flow = [Math.random() * 10, Math.random() * 10, Math.random() * 10];
  private flowTo = [...this.flow];
  private gather = 0;
  private breath = 0;
  private grain = document.createElement('canvas');
  private aspect = 16 / 9;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.grain.width = this.grain.height = 256;
    const g = this.grain.getContext('2d')!;
    const img = g.createImageData(256, 256);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.random() < 0.5 ? 0 : 255;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = Math.random() < 0.35 ? 255 : 0;
    }
    g.putImageData(img, 0, 0);
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(DustConfig, values);
  }

  private resize(count: number) {
    const keep = Math.min(this.n, count);
    const grow = (a: Float32Array) => { const b = new Float32Array(count); b.set(a.subarray(0, keep)); return b; };
    this.x = grow(this.x); this.y = grow(this.y); this.z = grow(this.z);
    this.vx = grow(this.vx); this.vy = grow(this.vy); this.light = grow(this.light); this.phase = grow(this.phase);
    for (let i = keep; i < count; i++) {
      this.x[i] = Math.random() * this.aspect;
      this.y[i] = Math.random();
      // Most far and faint, a few near.
      this.z[i] = 0.25 + 0.75 * Math.pow(Math.random(), 2.2);
      this.phase[i] = Math.random() * Math.PI * 2;
      this.light[i] = 0;
    }
    this.n = count;
  }

  /** The current: a slow field of angles that drifts to a new one every few bars. */
  private angleAt(x: number, y: number, t: number) {
    const [a, b, c] = this.flow;
    return Math.sin(x * 1.3 + a + t * 0.05) * 1.7 + Math.cos(y * 1.7 - b + t * 0.04) * 1.5 + Math.sin((x + y) * 0.8 + c) * 1.2;
  }

  render(handData: HandData, _colors: string[], audioData?: AudioData) {
    const { canvas, ctx, cfg } = this;
    const W = canvas.width;
    const H = canvas.height;
    if (!W || !H) return;
    this.aspect = W / H;
    const aspect = this.aspect;
    const play = this.playing;
    play.read(handData, audioData);
    const dt = Math.min(0.1, play.dt);
    const step = Math.min(0.08, Math.max(0, play.step));
    this.time += step;
    const count = Math.max(50, Math.min(6000, Math.round(cfg.field.count)));
    if (count !== this.n) this.resize(count);
    const live = !!audioData?.live;
    const ease = (rate: number) => 1 - Math.exp(-dt * rate);

    // ── the music: something different on every beat ─────────────────────
    const kick = Math.max(play.kick, play.bump) * cfg.sound.beat;
    if (kick > 0.45 && this.lastKick <= 0.45) {
      this.kicks += 1;
      const r = Math.random();
      const strength = (0.5 + 0.6 * Math.random()) * Math.min(1.4, kick);
      const kind: 0 | 1 | 2 = r < 0.5 ? 0 : r < 0.82 ? 1 : 2;
      this.events.push({ kind, x: Math.random() * aspect, y: 0.1 + 0.8 * Math.random(), age: 0, strength, angle: Math.random() * Math.PI, reach: 0.2 + 0.5 * Math.random() });
      // Every eight kicks or so the current changes its mind.
      if (this.kicks % (6 + Math.floor(Math.random() * 6)) === 0) this.flowTo = this.flowTo.map((v) => v + (Math.random() - 0.5) * 4);
    }
    this.lastKick = kick;
    const sparks = (n: number, bright: number) => {
      for (let k = 0; k < n; k++) {
        const i = Math.floor(Math.random() * this.n);
        this.light[i] = Math.max(this.light[i], bright);
      }
    };
    const snare = play.snare * cfg.sound.sparks;
    if (snare > 0.5 && this.lastSnare <= 0.5) sparks(Math.round(this.n * 0.012), 1.1);
    this.lastSnare = snare;
    const hat = play.hat * cfg.sound.sparks;
    if (hat > 0.5 && this.lastHat <= 0.5) sparks(Math.round(this.n * 0.004), 0.7);
    this.lastHat = hat;
    // With nothing playing, now and then a quiet wave of its own.
    // With the music on, as much as it is asked to (Quiet rings).
    if (Math.random() < dt * 0.35 * (live ? cfg.sound.quiet : 1)) {
      this.events.push({ kind: 0, x: Math.random() * aspect, y: Math.random(), age: 0, strength: 0.45, angle: 0, reach: 0.4 });
    }
    if (play.clapped && cfg.hands.clap > 0) {
      for (let i = 0; i < this.n; i++) {
        this.light[i] = Math.max(this.light[i], 1.2 * cfg.hands.clap);
        const dx = this.x[i] - aspect / 2, dy = this.y[i] - 0.5, d = Math.hypot(dx, dy) + 0.05;
        this.vx[i] += (dx / d) * 0.25 * cfg.hands.clap;
        this.vy[i] += (dy / d) * 0.25 * cfg.hands.clap;
      }
    }
    this.breath += (play.bass * cfg.sound.bass - this.breath) * ease(4);
    for (let k = 0; k < 3; k++) this.flow[k] += (this.flowTo[k] - this.flow[k]) * ease(0.3);

    // ── the hand ─────────────────────────────────────────────────────────
    const real = !handData.synthetic;
    const hands = real ? [handData.left, handData.right].filter((h): h is NonNullable<typeof h> => !!h) : [];
    const fist = hands.length ? play.fist : 0;
    const wantGather = Math.max(Math.min(1, cfg.form.circle), fist * Math.min(1, cfg.hands.reach));
    this.gather += (wantGather - this.gather) * ease(wantGather > this.gather ? 0.9 : 0.6);

    // ── move ─────────────────────────────────────────────────────────────
    const drift = 0.018 * cfg.field.drift;
    const t = this.time;
    const cx = aspect / 2, cy = 0.5;
    const ringR = 0.3;
    const spin = t * 0.04;
    const damp = Math.exp(-dt * 2.2);
    for (let i = 0; i < this.n; i++) {
      const z = this.z[i];
      const a = this.angleAt(this.x[i], this.y[i], t);
      let nx = this.x[i] + (Math.cos(a) * drift * z + this.vx[i]) * step;
      let ny = this.y[i] + (Math.sin(a) * drift * z + this.vy[i]) * step;
      // Bass: the field breathes out from the middle.
      nx += (nx - cx) * this.breath * 0.004 * z;
      ny += (ny - cy) * this.breath * 0.004 * z;
      // The open hand parts the dust and lights it.
      for (const h of hands) {
        const hx = h.position.x * aspect, hy = h.position.y;
        const dx = nx - hx, dy = ny - hy, d2 = dx * dx + dy * dy;
        const near = Math.exp(-d2 / 0.02) * (1 - fist) * cfg.hands.reach;
        if (near > 0.01) {
          const d = Math.sqrt(d2) + 0.01;
          nx += (dx / d) * near * 0.006;
          ny += (dy / d) * near * 0.006;
          this.light[i] = Math.max(this.light[i], near * 0.9);
        }
      }
      // The circle: each grain to its own place on the ring, the ring turning slowly.
      if (this.gather > 0.002) {
        const ang = this.phase[i] + spin;
        const r = ringR * (0.94 + 0.12 * ((i * 0.618) % 1)) * (1 + 0.06 * this.breath);
        const tx = cx + Math.cos(ang) * r, ty = cy + Math.sin(ang) * r;
        const pull = this.gather * this.gather * ease(1.6);
        nx += (tx - nx) * pull;
        ny += (ty - ny) * pull;
      }
      // Off one edge, back in at the other.
      if (nx < -0.02) nx += aspect + 0.04; else if (nx > aspect + 0.02) nx -= aspect + 0.04;
      if (ny < -0.02) ny += 1.04; else if (ny > 1.02) ny -= 1.04;
      this.x[i] = nx; this.y[i] = ny;
      this.vx[i] *= damp; this.vy[i] *= damp;
      this.light[i] *= Math.exp(-dt * (1.6 + 0.8 * Math.random()));
    }

    // The beats' shapes, passing through the field.
    for (const e of this.events) {
      e.age += dt;
      const front = e.age * 0.55;
      for (let i = 0; i < this.n; i++) {
        const dx = this.x[i] - e.x, dy = this.y[i] - e.y;
        let hit = 0;
        if (e.kind === 0) {
          // A wave: a thin ring going out.
          const d = Math.hypot(dx, dy) - front;
          hit = Math.exp(-(d * d) / 0.0012);
        } else if (e.kind === 1) {
          // A scatter: a patch flaring once, each grain on its own.
          if (e.age < dt * 1.5 && Math.hypot(dx, dy) < e.reach * 0.6 && Math.random() < 0.35) hit = 0.6 + Math.random() * 0.6;
        } else {
          // A line drawn across, sweeping a little.
          const ca = Math.cos(e.angle), sa = Math.sin(e.angle);
          const across = dx * -sa + dy * ca - (e.age - 0.6) * 0.08;
          hit = Math.exp(-(across * across) / 0.00025) * (Math.abs(dx * ca + dy * sa) < e.age * 1.4 ? 1 : 0);
        }
        if (hit > 0.02) this.light[i] = Math.max(this.light[i], 1.6 * hit * e.strength * (1 - e.age / 2.2));
      }
    }
    this.events = this.events.filter((e) => e.age < 2.2);

    // ── draw ─────────────────────────────────────────────────────────────
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1 - 0.92 * Math.max(0, Math.min(1, cfg.look.trail));
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    ctx.globalAlpha = 1;

    const LEVELS = 8;
    const paths: Path2D[] = [];
    for (let k = 0; k < LEVELS; k++) paths.push(new Path2D());
    const px = Math.max(0.6, (H / 720) * 1.6 * cfg.field.size);
    const rest = 0.2 * cfg.look.glow;
    for (let i = 0; i < this.n; i++) {
      const z = this.z[i];
      // A slow shimmer of its own, so the dark is never quite still.
      const tw = 0.6 + 0.4 * Math.sin(t * 0.7 + this.phase[i] * 5);
      const b = Math.min(1, (rest * tw + this.light[i]) * (0.35 + 0.65 * z) + 0.2 * this.gather * z);
      if (b < 0.03) continue;
      const level = Math.min(LEVELS - 1, Math.floor(b * LEVELS));
      const s = px * (0.5 + z) * (1 + 0.6 * Math.min(1, this.light[i]));
      paths[level].rect(this.x[i] * H - s / 2, this.y[i] * H - s / 2, s, s);
    }
    for (let k = 0; k < LEVELS; k++) {
      ctx.globalAlpha = (k + 0.5) / LEVELS;
      ctx.fillStyle = '#fff';
      ctx.fill(paths[k]);
    }

    // Film grain: fine, moving, barely there.
    if (cfg.look.grain > 0.01) {
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = 0.05 * cfg.look.grain;
      const ox = Math.floor(Math.random() * 256), oy = Math.floor(Math.random() * 256);
      const pattern = ctx.createPattern(this.grain, 'repeat');
      if (pattern) {
        ctx.save();
        ctx.translate(-ox, -oy);
        ctx.fillStyle = pattern;
        ctx.fillRect(ox, oy, W, H);
        ctx.restore();
      }
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }
}
