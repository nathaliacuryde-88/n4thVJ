import { AudioData, HandData } from '../../App';
import { NeuronConfig } from '../../config/NeuronRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { Playing } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * NEURONS
 * ═══════════════════════════════════════════════════════════════════════════
 * The roots' branching, again, inside a body: a few nerve cells, each with
 * its tree of dendrites and one long axon that ends in fine branches on the
 * next cells. It is still until something fires it.
 *
 * A CELL FIRES and its body flashes, its dendrites light, and a signal runs
 * down each of its axons. Where the signal arrives it gives the next cell a
 * charge; a cell charged enough fires in its turn. How readily the charge is
 * passed on decides whether one firing stays one or sets off a cascade.
 *
 * THE HAND is what fires it. The cell under a hand is stimulated as long as
 * the hand rests there, and any cell the hand sweeps over fires as it passes.
 * An open palm makes the network excitable, so one firing runs on through
 * the rest; a fist is the opposite. HOLDING A FIST charges the network up —
 * the cells glow, nothing fires — and opening the hand lets it all go at
 * once. A hand that leaves the frame is not an opening: the charge it was
 * holding slowly fades. A clap fires every cell.
 *
 * THE MUSIC: each kick fires a cell (the one nearest the hand, if there is
 * one), a build-up makes the network more and more excitable, and the drop
 * sets the whole of it off. Signals run on the shared clock, so the finger
 * count sets how fast they travel.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof NeuronConfig;

interface Axon {
  from: number;
  to: number;
  /** Points along it, in frame heights: x, y, x, y… */
  points: Float32Array;
  /** How far along each point is. */
  along: Float32Array;
  length: number;
  /** The same link run the other way: not drawn again. */
  back?: boolean;
}

interface Cell {
  x: number; y: number;
  size: number;
  /** Charge towards firing. */
  charge: number;
  /** When it last fired, in seconds of real time; and its flash, fading. */
  firedAt: number;
  flash: number;
  /** Held charge under a fist: drawn as a glow, let go on opening. */
  held: number;
  /** The dendrites, as polylines in frame heights. */
  dendrites: number[][];
  axons: number[];
}

interface Signal { axon: number; at: number; strength: number }

/** Signals' speed, in frame heights per beat of the clock. */
const SPEED = 0.55;
/** How long a cell rests after firing before it can fire again, in seconds. */
const REST = 0.45;

function rgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [parseInt(full.slice(0, 2), 16) || 0, parseInt(full.slice(2, 4), 16) || 0, parseInt(full.slice(4, 6), 16) || 0];
}

export class NeuronRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = NeuronConfig;
  private playing = new Playing(0.6);
  private cells: Cell[] = [];
  private axons: Axon[] = [];
  private signals: Signal[] = [];
  private builtFor = '';
  /** The network at rest, drawn once for this size and colour. */
  private still = document.createElement('canvas');
  private stillKey = '';
  private glow = document.createElement('canvas');
  private glowKey = '';
  private real = 0;
  private lastKick = 0;
  private lastDrop = 0;
  private storm = 0;
  private holding = false;
  /** Where each hand was last frame, to fire the cells it sweeps over. */
  private was: ({ x: number; y: number } | null)[] = [null, null];

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(NeuronConfig, values);
  }

  /** Lays the network out: cells spread evenly, each reaching its nearest. */
  private build(aspect: number) {
    const cfg = this.cfg;
    const count = Math.max(4, Math.min(60, Math.round(cfg.network.cells)));
    let seed = 11;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const cells: Cell[] = [];
    // Thrown at random, but never too near another: the best of a few tries each.
    const gap = Math.sqrt((aspect * 0.8) / count) * 0.62;
    for (let i = 0; i < count; i++) {
      let best = { x: 0, y: 0, d: -1 };
      for (let k = 0; k < 18; k++) {
        const x = aspect * (0.07 + 0.86 * rnd());
        const y = 0.09 + 0.82 * rnd();
        let d = Infinity;
        for (const c of cells) d = Math.min(d, Math.hypot(c.x - x, c.y - y));
        if (d > best.d) best = { x, y, d };
        if (d > gap) break;
      }
      cells.push({ x: best.x, y: best.y, size: 0.008 + 0.006 * rnd(), charge: 0, firedAt: -10, flash: 0, held: 0, dendrites: [], axons: [] });
    }

    // Dendrites: kept few and short, so the cells read as nodes rather than
    // drawings of neurons. Branching brings them back: more, longer, forking.
    const b = Math.max(0, cfg.network.branching);
    const depth = b >= 1.4 ? 3 : b >= 0.8 ? 2 : 1;
    for (const c of cells) {
      const stems = Math.round(b * 3 + rnd() * b * 2);
      const grow = (x: number, y: number, angle: number, length: number, level: number) => {
        const line = [x, y];
        let px = x, py = y, a = angle;
        const steps = 5;
        for (let s = 0; s < steps; s++) {
          a += (rnd() - 0.5) * 0.5;
          px += Math.cos(a) * length / steps;
          py += Math.sin(a) * length / steps;
          line.push(px, py);
        }
        c.dendrites.push(line);
        if (level < depth) {
          const fork = 0.35 + rnd() * 0.35;
          grow(px, py, a - fork, length * 0.62, level + 1);
          grow(px, py, a + fork, length * 0.62, level + 1);
        }
      };
      for (let s = 0; s < stems; s++) {
        const angle = (s / stems) * Math.PI * 2 + rnd() * 0.8;
        grow(c.x + Math.cos(angle) * c.size, c.y + Math.sin(angle) * c.size, angle, (0.018 + rnd() * 0.02) * (0.6 + 0.5 * Math.min(2, b)), 1);
      }
    }

    // Axons: to the nearest few, each a long soft curve.
    const axons: Axon[] = [];
    const per = Math.max(1, cfg.network.links);
    // Which pairs are joined, either way round: one axon between two cells is enough to read.
    const joined = new Set<string>();
    const pair = (a: number, b: number) => (a < b ? `${a}:${b}` : `${b}:${a}`);
    const links: [number, number][] = [];
    cells.forEach((c, i) => {
      const order = cells.map((o, j) => ({ j, d: j === i ? Infinity : Math.hypot(o.x - c.x, o.y - c.y) }))
        .sort((a, b) => a.d - b.d);
      const n = Math.floor(per) + (rnd() < per - Math.floor(per) ? 1 : 0);
      let made = 0;
      for (let k = 0; made < n && k < order.length - 1; k++) {
        if (joined.has(pair(i, order[k].j))) continue;
        joined.add(pair(i, order[k].j));
        links.push([i, order[k].j]);
        made++;
      }
    });
    // One network, not islands: each island joined to the nearest cell outside it.
    const group = cells.map((_, i) => i);
    const root = (i: number): number => (group[i] === i ? i : (group[i] = root(group[i])));
    for (const [a, b] of links) group[root(a)] = root(b);
    for (let guard = 0; guard < count; guard++) {
      const first = root(0);
      let best: [number, number] | null = null;
      let bestD = Infinity;
      cells.forEach((a, i) => {
        if (root(i) !== first) return;
        cells.forEach((b, j) => {
          if (root(j) === first) return;
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < bestD) { bestD = d; best = [i, j]; }
        });
      });
      if (!best) break;
      const [a, b] = best as [number, number];
      links.push(rnd() < 0.5 ? [a, b] : [b, a]);
      group[root(a)] = root(b);
    }
    for (const [i, j] of links) {
      const c = cells[i];
      {
        const t = cells[j];
        const dx = t.x - c.x;
        const dy = t.y - c.y;
        const len = Math.hypot(dx, dy);
        const bend = (rnd() - 0.5) * 0.7 * len;
        const nx = -dy / len;
        const ny = dx / len;
        const mx = c.x + dx * 0.5 + nx * bend;
        const my = c.y + dy * 0.5 + ny * bend;
        const steps = 28;
        const points = new Float32Array((steps + 1) * 2);
        const along = new Float32Array(steps + 1);
        let total = 0;
        for (let s = 0; s <= steps; s++) {
          const u = s / steps;
          // Leaving the body and arriving short of the next one: the synapse is a gap.
          const v = 0.04 + u * 0.88;
          const x = (1 - v) * (1 - v) * c.x + 2 * (1 - v) * v * mx + v * v * t.x;
          const y = (1 - v) * (1 - v) * c.y + 2 * (1 - v) * v * my + v * v * t.y;
          if (s > 0) total += Math.hypot(x - points[s * 2 - 2], y - points[s * 2 - 1]);
          points[s * 2] = x;
          points[s * 2 + 1] = y;
          along[s] = total;
        }
        c.axons.push(axons.length);
        axons.push({ from: i, to: j, points, along, length: total });
      }
    }
    // A signal arriving at a cell also goes back the other way along the
    // axon's partner if there is none: each link is traversed both ways.
    for (const a of [...axons]) {
      const back = new Float32Array(a.points.length);
      const n = a.along.length;
      for (let s = 0; s < n; s++) {
        back[s * 2] = a.points[(n - 1 - s) * 2];
        back[s * 2 + 1] = a.points[(n - 1 - s) * 2 + 1];
      }
      const along = new Float32Array(n);
      for (let s = 0; s < n; s++) along[s] = a.length - a.along[n - 1 - s];
      cells[a.to].axons.push(axons.length);
      axons.push({ from: a.to, to: a.from, points: back, along, length: a.length, back: true });
    }
    this.cells = cells;
    this.axons = axons;
    this.signals = [];
    this.stillKey = '';
  }

  /** The network at rest: faint, so the firing is what is seen. */
  private drawStill(W: number, H: number, colour: string) {
    const key = `${W}x${H}:${colour}:${this.builtFor}`;
    if (key === this.stillKey) return;
    this.stillKey = key;
    this.still.width = W;
    this.still.height = H;
    const g = this.still.getContext('2d')!;
    g.clearRect(0, 0, W, H);
    const [r, gg, b] = rgb(colour);
    const pale = (v: number, k: number) => Math.round(v + (255 - v) * k);
    const unit = H / 720;
    g.lineCap = 'round';
    g.lineJoin = 'round';
    g.strokeStyle = `rgb(${pale(r, 0.45)},${pale(gg, 0.45)},${pale(b, 0.45)})`;
    // The axons.
    g.globalAlpha = 0.2;
    g.lineWidth = Math.max(0.8, 1.3 * unit);
    g.beginPath();
    for (const a of this.axons) {
      if (a.back) continue;
      g.moveTo(a.points[0] * H, a.points[1] * H);
      for (let s = 1; s < a.along.length; s++) g.lineTo(a.points[s * 2] * H, a.points[s * 2 + 1] * H);
      // Its end: a few fine branches onto the next cell.
      // (Only at the end it was drawn towards; the way back ends in the body's own dendrites.)
      const n = a.along.length - 1;
      const ex = a.points[n * 2], ey = a.points[n * 2 + 1];
      const ang = Math.atan2(ey - a.points[n * 2 - 1], ex - a.points[n * 2 - 2]);
      // Only when Branching asks for the drawn look; at the default the axon simply ends.
      if (this.cfg.network.branching >= 0.8) {
        for (const turn of [-0.6, 0, 0.6]) {
          g.moveTo(ex * H, ey * H);
          g.lineTo((ex + Math.cos(ang + turn) * 0.012) * H, (ey + Math.sin(ang + turn) * 0.012) * H);
        }
      }
    }
    g.stroke();
    // The dendrites, finer.
    g.globalAlpha = 0.3;
    g.lineWidth = Math.max(0.6, 1 * unit);
    g.beginPath();
    for (const c of this.cells) {
      for (const line of c.dendrites) {
        g.moveTo(line[0] * H, line[1] * H);
        for (let i = 2; i < line.length; i += 2) g.lineTo(line[i] * H, line[i + 1] * H);
      }
    }
    g.stroke();
    // The bodies: a ring and a darker middle.
    g.globalAlpha = 0.55;
    g.lineWidth = Math.max(1, 1.5 * unit);
    for (const c of this.cells) {
      g.beginPath();
      g.arc(c.x * H, c.y * H, c.size * H, 0, Math.PI * 2);
      g.stroke();
    }
    g.globalAlpha = 1;
  }

  private tint(hex: string) {
    if (hex === this.glowKey) return;
    this.glowKey = hex;
    const [r, g, b] = rgb(hex);
    this.glow.width = this.glow.height = 64;
    const c = this.glow.getContext('2d')!;
    c.clearRect(0, 0, 64, 64);
    const grad = c.createRadialGradient(32, 32, 0, 32, 32, 32);
    const pale = (v: number) => Math.round(v + (255 - v) * 0.7);
    const mid = (v: number) => Math.round(v + (255 - v) * 0.3);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.14, `rgba(${pale(r)},${pale(g)},${pale(b)},0.95)`);
    grad.addColorStop(0.4, `rgba(${mid(r)},${mid(g)},${mid(b)},0.35)`);
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
    c.fillStyle = grad;
    c.fillRect(0, 0, 64, 64);
  }

  /** `from`: the cell whose signal set this one off, which it does not answer. `force`: even if resting. */
  private fire(i: number, strength = 1, from = -1, force = false) {
    const c = this.cells[i];
    if (!c || (!force && this.real - c.firedAt < REST)) return;
    c.firedAt = this.real;
    c.flash = Math.min(1.4, Math.max(c.flash, strength));
    c.charge = 0;
    for (const a of c.axons) if (this.axons[a].to !== from) this.signals.push({ axon: a, at: 0, strength });
    if (this.signals.length > 400) this.signals.splice(0, this.signals.length - 400);
  }

  private nearest(x: number, y: number, within = Infinity): number {
    let best = -1;
    let bestD = within;
    this.cells.forEach((c, i) => {
      const d = Math.hypot(c.x - x, c.y - y);
      if (d < bestD) { bestD = d; best = i; }
    });
    return best;
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
    this.real += dt;

    const shape = `${aspect.toFixed(3)}:${Math.round(cfg.network.cells)}:${cfg.network.links.toFixed(2)}:${cfg.network.branching.toFixed(2)}`;
    if (shape !== this.builtFor) {
      this.builtFor = shape;
      this.build(aspect);
    }
    const cells = this.cells;

    // ── how excitable the network is ─────────────────────────────────────
    const hands = [handData.left, handData.right];
    const real = !handData.synthetic && hands.some(Boolean);
    const open = real ? 1 - play.fist : 0.5;
    this.storm = Math.max(0, this.storm - dt);
    // How much of a charge an arriving signal passes on: low, one firing
    // stays one; high, it runs on through the rest.
    const passOn = Math.min(1.3,
      0.32 + 0.55 * open * cfg.hands.chain + 0.5 * play.build * cfg.sound.build + (this.storm > 0 ? 0.6 : 0));

    // ── the fist: holding the charge in ──────────────────────────────────
    const hold = cfg.hands.hold > 0.01;
    if (real && hold) {
      if (!this.holding && play.fist > 0.65) this.holding = true;
      else if (this.holding && play.fist < 0.3) {
        // Opened: everything it was holding goes at once.
        this.holding = false;
        cells.forEach((c, i) => { if (c.held > 0.15) this.fire(i, 0.6 + c.held * 0.8); c.held = 0; });
      }
    } else if (this.holding && !real) {
      // The hand has gone, not opened: the charge is let fade.
      this.holding = false;
    }
    let focus = -1;
    for (const [k, hand] of hands.entries()) {
      if (!hand) { this.was[k] = null; continue; }
      const x = hand.position.x * aspect;
      const y = hand.position.y;
      if (this.holding) {
        cells.forEach((c) => {
          const near = Math.exp(-Math.hypot(c.x - x, c.y - y) / 0.35);
          c.held = Math.min(1, c.held + dt * (0.25 + 0.9 * near) * cfg.hands.hold);
        });
      } else if (cfg.hands.fire > 0.01) {
        // The cell under the hand, stimulated while it rests there.
        const under = this.nearest(x, y, 0.16);
        if (under >= 0) {
          cells[under].charge += dt * 1.0 * cfg.hands.fire * (real ? 1 : 0.4);
          if (cells[under].charge >= 1) this.fire(under, 0.9);
          if (focus < 0) focus = under;
        }
        // Any cell the hand sweeps over, as it passes.
        const from = this.was[k];
        if (from && real) {
          const moved = Math.hypot(x - from.x, y - from.y);
          if (moved > 0.01) {
            cells.forEach((c, i) => {
              const t = Math.max(0, Math.min(1, ((c.x - from.x) * (x - from.x) + (c.y - from.y) * (y - from.y)) / (moved * moved)));
              const d = Math.hypot(c.x - (from.x + (x - from.x) * t), c.y - (from.y + (y - from.y) * t));
              if (d < 0.045) this.fire(i, 0.8 * cfg.hands.fire);
            });
          }
        }
      }
      this.was[k] = { x, y };
    }
    for (const c of cells) if (!this.holding) c.held = Math.max(0, c.held - dt * 0.5);

    if (play.clapped && cfg.hands.clap > 0) cells.forEach((_, i) => this.fire(i, Math.max(1.1, play.clapStrength * cfg.hands.clap * 1.3), -1, true));

    // ── the music ────────────────────────────────────────────────────────
    const kick = Math.max(play.kick, play.bump) * cfg.sound.beat;
    if (kick > 0.45 && this.lastKick <= 0.45 && !this.holding) {
      const pick = focus >= 0 && Math.random() < 0.7 ? focus : Math.floor(Math.random() * cells.length);
      this.fire(pick, Math.min(1.2, 0.7 + 0.4 * kick));
    }
    this.lastKick = kick;
    if (play.drop > 0.5 && this.lastDrop <= 0.5 && cfg.sound.build > 0) {
      this.storm = 2.2;
      cells.forEach((_, i) => { if (Math.random() < 0.5) this.fire(i, 1.1); });
    }
    this.lastDrop = play.drop;
    // Left alone with no hand and no music, a cell fires now and then.
    if (!real && !audioData?.live && Math.random() < dt * 1.2) this.fire(Math.floor(Math.random() * cells.length), 0.7);

    // ── the signals ──────────────────────────────────────────────────────
    const travel = step * SPEED;
    const arrived: Signal[] = [];
    for (const s of this.signals) {
      s.at += travel;
      if (s.at >= this.axons[s.axon].length) arrived.push(s);
    }
    if (arrived.length) {
      this.signals = this.signals.filter((s) => s.at < this.axons[s.axon].length);
      for (const s of arrived) {
        const to = this.axons[s.axon].to;
        const c = cells[to];
        c.flash = Math.max(c.flash, 0.25 * s.strength);
        if (this.holding) { c.held = Math.min(1, c.held + 0.2); continue; }
        c.charge += passOn * s.strength;
        // Each hop a little weaker, so a cascade runs its course and dies away.
        if (c.charge >= 1 && s.strength > 0.3) this.fire(to, s.strength * 0.86, this.axons[s.axon].from);
      }
    }
    for (const c of cells) {
      c.charge = Math.max(0, c.charge - dt * 1.3);
      c.flash *= Math.exp(-dt * 3.2);
    }

    // ── draw ─────────────────────────────────────────────────────────────
    const colour = colors[0] ?? '#7fd8ff';
    this.tint(colour);
    this.drawStill(W, H, colors[2] ?? '#cfe6ff');
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    ctx.drawImage(this.still, 0, 0, W, H);

    const unit = H / 720;
    const [r, g, b] = rgb(colour);
    const pale = (v: number, k: number) => Math.round(v + (255 - v) * k);
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // The dendrites of a cell that has just fired, lit.
    for (const c of cells) {
      if (c.flash < 0.05) continue;
      ctx.globalAlpha = Math.min(1, c.flash * 0.75);
      ctx.strokeStyle = `rgb(${pale(r, 0.55)},${pale(g, 0.55)},${pale(b, 0.55)})`;
      ctx.lineWidth = Math.max(1, 1.6 * unit);
      ctx.beginPath();
      for (const line of c.dendrites) {
        ctx.moveTo(line[0] * H, line[1] * H);
        for (let i = 2; i < line.length; i += 2) ctx.lineTo(line[i] * H, line[i + 1] * H);
      }
      ctx.stroke();
    }

    // The signals: a bright head with a short tail, running down the axon.
    const tail = 0.09;
    ctx.strokeStyle = `rgb(${pale(r, 0.75)},${pale(g, 0.75)},${pale(b, 0.75)})`;
    for (const s of this.signals) {
      const a = this.axons[s.axon];
      const from = Math.max(0, s.at - tail);
      ctx.globalAlpha = Math.min(1, 0.85 * s.strength);
      ctx.lineWidth = Math.max(1.5, 3 * unit);
      ctx.beginPath();
      let started = false;
      let hx = 0, hy = 0;
      for (let k = 0; k < a.along.length; k++) {
        const d = a.along[k];
        if (d < from) continue;
        if (d > s.at) break;
        const x = a.points[k * 2] * H;
        const y = a.points[k * 2 + 1] * H;
        if (!started) { ctx.moveTo(x, y); started = true; } else ctx.lineTo(x, y);
        hx = x; hy = y;
      }
      if (started) {
        ctx.stroke();
        const size = 14 * unit * (0.7 + 0.5 * s.strength);
        ctx.drawImage(this.glow, hx - size, hy - size, size * 2, size * 2);
      }
    }

    // The bodies: a flash when they fire, a steady glow while a fist holds them.
    for (const c of cells) {
      const light = c.flash + c.held * 0.6 + Math.min(0.4, c.charge * 0.3);
      if (light < 0.03) continue;
      const size = (c.size * 3.5 + 0.06 * Math.min(1, c.flash) + 0.03 * c.held) * H;
      ctx.globalAlpha = Math.min(1, light);
      ctx.drawImage(this.glow, c.x * H - size, c.y * H - size, size * 2, size * 2);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }
}
