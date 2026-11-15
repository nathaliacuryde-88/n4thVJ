import { AudioData, HandData } from '../../App';
import { BreathConfig } from '../../config/BreathRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { Playing } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * BREATH
 * ═══════════════════════════════════════════════════════════════════════════
 * The plants breathe out what we breathe in. Three pictures of it, sharing
 * one breath: how full the lungs are, from empty to full and back.
 *
 * WHAT BREATHES IT. An open palm breathes in and a fist breathes out, as
 * slowly or as fast as the hand opens and closes. With no hand it breathes
 * on its own, slowly, on the shared clock, so the finger count still sets
 * its pace. Pulse can instead take your own breath: blown at the microphone,
 * the louder the fuller. A clap is one deep breath out; each kick a ripple.
 *
 * PULSE (0) — a body of lines, one inside the next, that fills and empties.
 * At the bottom of each breath out the outermost lines let go and travel
 * out as rings, the breath leaving.
 *
 * AIR (1) — leaves along the bottom give off air, small and pale, which
 * rises. Breathing in draws it into the lungs above, whose branches light as
 * it arrives; breathing out lets it go again, changed in colour, and it
 * drifts back down to the leaves, which take it in and give it off again.
 *
 * LEAF TO LUNG (2) — the one drawing in two places at once. A leaf's veins
 * and a lung's airways are the same branching, and here they are the same
 * branches: the leaf unfolds into a pair of lungs, which breathe, and folds
 * back. An open hand is the lung and a fist the leaf; left alone it turns
 * slowly from one to the other with the music's build. Each kick runs a
 * pulse down the branches.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof BreathConfig;

export const BREATH_PULSE = 0;
export const BREATH_AIR = 1;
export const BREATH_LEAF = 2;

/** The branching: a binary tree, stored as a heap. */
const DEPTH = 7;
const NODES = (1 << (DEPTH + 1)) - 1;
const FIRST_TIP = (1 << DEPTH) - 1;
const OUTLINE = 64;

interface Mote { x: number; y: number; vx: number; vy: number; inside: number; used: boolean; seed: number }
interface Ring { r: number; life: number }

function rgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [parseInt(full.slice(0, 2), 16) || 0, parseInt(full.slice(2, 4), 16) || 0, parseInt(full.slice(4, 6), 16) || 0];
}
const css = (c: number[], a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${a})`;
const mixc = (a: number[], b: number[], t: number) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

/** Leaf greens and the soft lilac of the lung: never red. */
const LEAF = [64, 150, 120];
const LUNG = [196, 178, 226];
const OXYGEN = [170, 236, 220];
const SPENT = [178, 160, 230];

export class BreathRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = BreathConfig;
  private playing = new Playing(0.6);
  private time = 0;
  private real = 0;
  /** How full: 0 empty, 1 full. */
  private fill = 0.5;
  private lastFill = 0.5;
  private forced = 0;
  private rings: Ring[] = [];
  private lowest = 1;
  private lastKick = 0;
  private pulses: number[] = [];
  /** Leaf (0) to lung (1). */
  private morph = 0;
  private flip = 0;
  private motes: Mote[] = [];
  private glow = new Float32Array(NODES);
  private xs = new Float32Array(NODES);
  private ys = new Float32Array(NODES);
  private depthOf = new Uint8Array(NODES);
  private seeds = new Float32Array(NODES);
  /** The microphone, made into a breath: its quiet and loud remembered. */
  private floor = 1;
  private ceiling = 0;
  private blown = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, private readonly mode: number) {
    this.canvas = canvas;
    this.ctx = ctx;
    for (let i = 0; i < NODES; i++) {
      this.depthOf[i] = Math.floor(Math.log2(i + 1));
      this.seeds[i] = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1;
    }
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(BreathConfig, values);
  }

  // ── the breath ─────────────────────────────────────────────────────────

  private breathe(handData: HandData, audioData: AudioData | undefined, dt: number) {
    const { cfg, playing: play } = this;
    const hands = [handData.left, handData.right];
    const real = !handData.synthetic && hands.some(Boolean);
    const pace = Math.max(0.1, cfg.breath.pace);
    // On its own: in and out over about six seconds at the default tempo.
    let want = 0.5 - 0.5 * Math.cos((this.time / 6) * Math.PI * 2 / pace);
    let rate = 3;
    if (this.mode === BREATH_PULSE && cfg.breath.source >= 0.5 && audioData?.live) {
      const level = audioData.input ?? audioData.overall ?? 0;
      // What counts as quiet and as loud, learned as it goes.
      this.floor = level < this.floor ? level : this.floor + (level - this.floor) * Math.min(1, dt * 0.05);
      this.ceiling = level > this.ceiling ? level : this.ceiling + (level - this.ceiling) * Math.min(1, dt * 0.08);
      const norm = Math.max(0, Math.min(1, (level - this.floor) / Math.max(0.05, this.ceiling - this.floor)));
      this.blown += (norm - this.blown) * (1 - Math.exp(-dt * (norm > this.blown ? 3 : 1.2)));
      want = this.blown;
      rate = 6;
    } else if (real && cfg.hands.breathe > 0.01 && this.mode !== BREATH_LEAF) {
      // (Leaf to Lung keeps the hand for the unfolding; its lungs breathe on the clock.)
      want = 1 - play.fist;
      rate = 5;
    }
    if (play.clapped && cfg.hands.clap > 0) this.forced = 1.2;
    this.forced = Math.max(0, this.forced - dt);
    if (this.forced > 0) want = 0;
    const depth = Math.max(0, Math.min(1.5, cfg.breath.depth));
    want = 0.5 + (want - 0.5) * depth;
    this.lastFill = this.fill;
    this.fill += (want - this.fill) * (1 - Math.exp(-dt * rate));
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { canvas, ctx, cfg } = this;
    const W = canvas.width;
    const H = canvas.height;
    if (!W || !H) return;
    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    const step = Math.min(0.08, Math.max(0, play.step));
    this.time += step;
    this.real += dt;
    this.breathe(handData, audioData, dt);
    const kick = Math.max(play.kick, play.bump) * cfg.sound.beat;
    const kicked = kick > 0.45 && this.lastKick <= 0.45;
    this.lastKick = kick;

    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    if (this.mode === BREATH_PULSE) this.pulse(W, H, colors, dt, kicked, kick);
    else if (this.mode === BREATH_AIR) this.air(W, H, dt, kicked);
    else this.leaf(W, H, handData, dt, kicked);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }

  // ── pulse ──────────────────────────────────────────────────────────────

  private pulse(W: number, H: number, colors: string[], dt: number, kicked: boolean, kick: number) {
    const { ctx, cfg } = this;
    const cx = W / 2;
    const cy = H / 2;
    const R = H * 0.42;
    const unit = H / 720;
    const count = Math.max(4, Math.round(12 * cfg.look.detail));
    const f = this.fill;
    const t = this.time;
    // At the bottom of a breath out, the outer lines let go as rings.
    this.lowest = Math.min(this.lowest, f);
    if (f > this.lastFill && this.lowest < 0.35 && f - this.lowest > 0.03) {
      this.rings.push({ r: 0.5 + 0.5 * this.lowest, life: 1 });
      this.lowest = 1;
    }
    if (f < this.lastFill) this.lowest = Math.min(this.lowest, f);
    if (kicked) this.rings.push({ r: 0.55 + 0.45 * f, life: 0.45 + 0.3 * Math.min(1, kick) });
    for (const ring of this.rings) { ring.r += dt * 0.32; ring.life -= dt * 0.45; }
    this.rings = this.rings.filter((ring) => ring.life > 0 && ring.r < 2.6);

    const [r0, g0, b0] = rgb(colors[0] ?? '#7fd8ff');
    const tint = [r0, g0, b0];
    const pale = mixc(tint, [255, 255, 255], 0.75);
    const soft = mixc(tint, [255, 255, 255], 0.35);
    const shape = (radius: number, i: number) => {
      ctx.beginPath();
      for (let k = 0; k <= 96; k++) {
        const a = (k / 96) * Math.PI * 2;
        // Wider than tall, like a chest; each line its own slight wander.
        const wob = 1 + 0.045 * Math.sin(a * 3 + t * 0.6 + i * 0.4) + 0.03 * Math.sin(a * 5 - t * 0.8 + i);
        const x = cx + Math.cos(a) * radius * 1.18 * wob;
        const y = cy + Math.sin(a) * radius * 0.92 * wob;
        if (k === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.closePath();
    };
    for (let i = 1; i <= count; i++) {
      const u = i / count;
      // The outer lines move most: the breath comes from the edge in.
      const radius = R * u * (0.42 + 0.58 * f * (0.35 + 0.65 * u));
      ctx.strokeStyle = css(mixc(soft, pale, u));
      ctx.globalAlpha = 0.25 + 0.65 * u;
      ctx.lineWidth = Math.max(0.8, (0.8 + 1.4 * u) * unit * cfg.look.weight);
      shape(radius, i);
      ctx.stroke();
    }
    for (const ring of this.rings) {
      ctx.strokeStyle = css(pale);
      ctx.globalAlpha = Math.max(0, ring.life) * 0.7;
      ctx.lineWidth = Math.max(0.8, 1.6 * unit * cfg.look.weight);
      shape(R * ring.r, 0);
      ctx.stroke();
    }
  }

  // ── the branching shared by air and leaf ───────────────────────────────

  /** Lays the branches out, from a leaf's veins (m 0) to a lung's airways (m 1). */
  private lay(m: number, cx: number, top: number, S: number, breath: number) {
    const { xs, ys } = this;
    const spread = 0.85 + 0.3 * breath * m;
    const grow = 0.92 + 0.14 * breath * m;
    const dirs = new Float32Array(NODES);
    const lens = new Float32Array(NODES);
    /** On the leaf, whether a branch is the midrib itself. */
    const midrib = new Uint8Array(NODES);
    midrib[0] = 1;
    xs[0] = cx; ys[0] = top;
    dirs[0] = Math.PI / 2;
    lens[0] = S * (0.1 + 0.08 * m);
    // The first segment: the stalk, or the windpipe.
    for (let i = 0; i < NODES; i++) {
      if (i > 0) {
        const parent = (i - 1) >> 1;
        const first = i === parent * 2 + 1;
        const d = this.depthOf[parent];
        // Leaf: one child carries the midrib or the vein straight on, the
        // other leaves it at a wide angle, the sides alternating. Lung: both
        // part evenly.
        const side = (d + parent) % 2 === 0 ? 1 : -1;
        midrib[i] = midrib[parent] && first ? 1 : 0;
        // The midrib runs nearly straight and hardly shortens; a vein leaves it
        // at a wide angle and bends towards the tip; veins' own branches are short.
        const leafTurn = first ? (midrib[parent] ? side * 0.03 : side * 0.12) : -side * (midrib[parent] ? 0.95 : 0.7);
        // (The stalk itself gives off no vein: its side branch stays a stub inside the blade.)
        const leafLen = first ? (midrib[parent] ? 0.95 : 0.86) : parent === 0 ? 0.2 : (midrib[parent] ? 0.95 : 0.42);
        // The airways part evenly, less widely the finer they get.
        const lungTurn = (first ? -1 : 1) * (parent === 0 ? 0.62 : (0.5 * Math.pow(0.9, d) + 0.05 * this.seeds[i])) * spread;
        const lungLen = parent === 0 ? 0.55 : 0.82 + 0.06 * this.seeds[i];
        let dir = dirs[parent] + leafTurn + (lungTurn - leafTurn) * m;
        // Airways keep heading down and out, each to its own side: they never
        // curl back up, nor cross into the other lung.
        let lobe = i;
        while (lobe > 2) lobe = (lobe - 1) >> 1;
        // (Node 1 turns towards smaller angles: it is the lung on the right.)
        const lo = lobe === 1 ? Math.PI / 2 - 0.85 : Math.PI / 2 - 0.05;
        const hi = lobe === 1 ? Math.PI / 2 + 0.05 : Math.PI / 2 + 0.85;
        const held = i <= 2 ? dir : Math.max(lo, Math.min(hi, dir));
        dir += (held - dir) * m;
        dirs[i] = dir;
        lens[i] = lens[parent] * (leafLen + (lungLen - leafLen) * m) * grow;
        xs[i] = xs[parent] + Math.cos(dirs[parent]) * lens[parent];
        ys[i] = ys[parent] + Math.sin(dirs[parent]) * lens[parent];
      }
    }
    // The ends of the last branches.
    const ends = new Float32Array(NODES * 2);
    for (let i = 0; i < NODES; i++) {
      ends[i * 2] = xs[i] + Math.cos(dirs[i]) * lens[i];
      ends[i * 2 + 1] = ys[i] + Math.sin(dirs[i]) * lens[i];
    }
    return ends;
  }

  private drawBranches(ends: Float32Array, unit: number, colour: number[], bright: number[], weight: number, pulses: number[]) {
    const { ctx, xs, ys, depthOf, glow } = this;
    for (let d = 0; d <= DEPTH; d++) {
      const width = Math.max(0.7, (5.5 * Math.pow(1 - d / (DEPTH + 1.5), 1.6)) * unit * weight);
      const plain = new Path2D();
      const lit = new Path2D();
      for (let i = (1 << d) - 1; i < (1 << (d + 1)) - 1; i++) {
        let on = glow[i];
        for (const p of pulses) on = Math.max(on, Math.exp(-Math.pow(depthOf[i] - p, 2) / 0.5));
        const path = on > 0.35 ? lit : plain;
        path.moveTo(xs[i], ys[i]);
        path.lineTo(ends[i * 2], ends[i * 2 + 1]);
      }
      ctx.lineWidth = width;
      ctx.strokeStyle = css(colour);
      ctx.globalAlpha = 0.9;
      ctx.stroke(plain);
      ctx.strokeStyle = css(bright);
      ctx.globalAlpha = 1;
      ctx.stroke(lit);
    }
  }

  private runPulses(dt: number, kicked: boolean) {
    if (kicked) this.pulses.push(-0.5);
    this.pulses = this.pulses.map((p) => p + dt * 6).filter((p) => p < DEPTH + 2);
  }

  // ── air ────────────────────────────────────────────────────────────────

  private air(W: number, H: number, dt: number, kicked: boolean) {
    const { ctx, cfg } = this;
    const unit = H / 720;
    const S = H * 0.95;
    const cx = W / 2;
    const top = H * 0.04;
    const ends = this.lay(1, cx, top, S, this.fill);
    this.runPulses(dt, kicked);
    const inhaling = this.fill - this.lastFill;

    // The leaves along the bottom, swaying.
    const leafCount = Math.max(5, Math.round(W / (H * 0.16)));
    const leafAt: { x: number; y: number }[] = [];
    for (let i = 0; i < leafCount; i++) {
      const x = ((i + 0.5) / leafCount) * W;
      const sway = Math.sin(this.time * 0.7 + i * 1.7) * 0.12;
      const len = H * (0.13 + 0.05 * Math.sin(i * 2.3));
      const tilt = -Math.PI / 2 + sway + (i % 2 ? 0.25 : -0.25);
      const bx = x;
      const by = H * 1.01;
      const tx = bx + Math.cos(tilt) * len;
      const ty = by + Math.sin(tilt) * len;
      leafAt.push({ x: (bx + tx) / 2, y: (by + ty) / 2 });
      const nx = -Math.sin(tilt) * len * 0.26;
      const ny = Math.cos(tilt) * len * 0.26;
      const mx = (bx + tx) / 2;
      const my = (by + ty) / 2;
      ctx.globalAlpha = 1;
      ctx.fillStyle = css(mixc(LEAF, [0, 0, 0], 0.45));
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.quadraticCurveTo(mx + nx, my + ny, tx, ty);
      ctx.quadraticCurveTo(mx - nx, my - ny, bx, by);
      ctx.fill();
      ctx.strokeStyle = css(LEAF);
      ctx.lineWidth = Math.max(0.8, 1.4 * unit);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(tx, ty);
      ctx.stroke();
    }

    // The air: given off by the leaves, drawn into the lungs, let go again.
    const want = Math.round(420 * Math.max(0.2, cfg.look.detail));
    while (this.motes.length < want) {
      const leaf = leafAt[Math.floor(Math.random() * leafAt.length)];
      this.motes.push({ x: leaf.x + (Math.random() - 0.5) * H * 0.05, y: leaf.y, vx: 0, vy: -0.02 * H, inside: 0, used: false, seed: Math.random() });
    }
    if (this.motes.length > want) this.motes.length = want;
    const tipsFrom = FIRST_TIP;
    this.glow.fill(0);
    const gathered = new Float32Array(NODES);
    for (const m of this.motes) {
      if (m.inside > 0) {
        // In the lungs: held while breathing in, let go when breathing out.
        if (inhaling < -0.0005 || this.forced > 0) {
          m.inside = 0;
          m.used = true;
          const out = Math.random() * Math.PI * 2;
          m.vx = Math.cos(out) * H * 0.15;
          m.vy = Math.sin(out) * H * 0.08 + H * 0.05;
        } else {
          gathered[m.inside] += 1;
          continue;
        }
      }
      const swirl = Math.sin(m.y / H * 9 + this.time * 0.8 + m.seed * 20) * H * 0.02;
      if (!m.used) {
        // Fresh air rises; while breathing in, it is drawn to the nearest airway's end.
        m.vy += (-H * 0.025 - m.vy) * dt * 0.8;
        if (inhaling > 0.0003) {
          let best = -1;
          let bestD = Infinity;
          for (let i = tipsFrom; i < NODES; i += 3) {
            const d = Math.hypot(ends[i * 2] - m.x, ends[i * 2 + 1] - m.y);
            if (d < bestD) { bestD = d; best = i; }
          }
          if (best >= 0) {
            const pull = Math.min(1, inhaling * 60) * H * 1.6;
            m.vx += ((ends[best * 2] - m.x) / Math.max(bestD, 1)) * pull * dt;
            m.vy += ((ends[best * 2 + 1] - m.y) / Math.max(bestD, 1)) * pull * dt;
            if (bestD < H * 0.02) { m.inside = best; m.vx = 0; m.vy = 0; continue; }
          }
        }
      } else {
        // Spent air sinks back towards the leaves; there it is taken in and given off fresh.
        m.vy += (H * 0.03 - m.vy) * dt * 0.6;
        if (m.y > H * 0.9) { m.used = false; m.vy = -H * 0.02; }
      }
      m.vx += (swirl - m.vx) * dt * 0.8;
      m.x += m.vx * dt;
      m.y += m.vy * dt;
      if (m.y < -H * 0.05 || m.x < -W * 0.05 || m.x > W * 1.05) {
        const leaf = leafAt[Math.floor(Math.random() * leafAt.length)];
        m.x = leaf.x; m.y = leaf.y; m.vx = 0; m.vy = -0.02 * H; m.used = false;
      }
    }
    // The airways light from the ends where the air has arrived, back up to the windpipe.
    for (let i = NODES - 1; i > 0; i--) {
      const g = Math.min(1, gathered[i] / 3);
      this.glow[i] = Math.max(this.glow[i], g);
      const parent = (i - 1) >> 1;
      this.glow[parent] = Math.max(this.glow[parent], this.glow[i] * 0.85);
    }
    this.drawBranches(ends, unit, mixc(LUNG, [0, 0, 0], 0.4), mixc(OXYGEN, [255, 255, 255], 0.3), cfg.look.weight, this.pulses);

    const size = Math.max(1.2, 2.2 * unit);
    ctx.globalCompositeOperation = 'lighter';
    const fresh = new Path2D();
    const spent = new Path2D();
    for (const m of this.motes) {
      if (m.inside) continue;
      const p = m.used ? spent : fresh;
      p.moveTo(m.x + size, m.y);
      p.arc(m.x, m.y, size * (0.7 + 0.6 * m.seed), 0, Math.PI * 2);
    }
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = css(OXYGEN);
    ctx.fill(fresh);
    ctx.fillStyle = css(SPENT);
    ctx.fill(spent);
    ctx.globalCompositeOperation = 'source-over';
  }

  // ── leaf to lung ───────────────────────────────────────────────────────

  private leaf(W: number, H: number, handData: HandData, dt: number, kicked: boolean) {
    const { ctx, cfg, playing: play } = this;
    const hands = [handData.left, handData.right];
    const real = !handData.synthetic && hands.some(Boolean);
    let want: number;
    if (real) want = 1 - play.fist;
    else want = Math.min(1, Math.max(0, 0.5 - 0.5 * Math.cos(this.time * 0.09) + 0.5 * play.build));
    if (play.clapped && cfg.hands.clap > 0) this.flip = this.morph > 0.5 ? -1 : 1;
    if (this.flip !== 0) {
      want = this.flip > 0 ? 1 : 0;
      if (Math.abs(this.morph - want) < 0.03) this.flip = 0;
    }
    this.morph += (want - this.morph) * (1 - Math.exp(-dt * (real ? 2.5 : 1.2)));
    const m = this.morph * this.morph * (3 - 2 * this.morph);
    const breath = this.fill;
    this.runPulses(dt, kicked);

    const unit = H / 720;
    const S = H * 0.86;
    const cx = W / 2;
    const top = H * 0.05;
    // Fewer levels at low detail: the finest ends simply are not drawn.
    const ends = this.lay(m, cx, top + S * 0.02, S, breath);

    // The outline: a leaf's blade, or a pair of lungs, each side its own shape.
    for (const side of [-1, 1]) {
      const pts: number[] = [];
      for (let k = 0; k < OUTLINE; k++) {
        let lx: number, ly: number, ux: number, uy: number;
        const outer = k < 40;
        const u = outer ? k / 39 : (k - 40) / (OUTLINE - 41);
        // Leaf: down the outside edge to the tip, back up the midrib.
        const L = S * 0.8;
        const stalk = top + S * 0.08;
        if (outer) {
          lx = cx + side * S * 0.25 * Math.pow(Math.sin(Math.PI * u), 0.75) * (1 - 0.35 * u);
          ly = stalk + u * L;
        } else {
          lx = cx;
          ly = stalk + (1 - u) * L;
        }
        // Lung: from its top round the outside and the base, back up the inner side.
        const rx = S * 0.17 * (0.9 + 0.16 * breath);
        const ry = S * 0.3 * (0.94 + 0.08 * breath);
        const lcx = cx + side * S * 0.19;
        const lcy = top + S * 0.47;
        if (outer) {
          // The top narrow and rounded, the base broad.
          const a = -Math.PI / 2 + u * (Math.PI + 1.15);
          const narrow = Math.sin(a) < 0 ? 0.75 + 0.25 * (1 + Math.sin(a)) : 1;
          ux = lcx + side * Math.cos(a) * rx * narrow;
          uy = lcy + Math.sin(a) * ry * (Math.sin(a) < 0 ? 0.9 : 1);
        } else {
          // The inner side, curving in a little where the heart sits.
          const a = -Math.PI / 2 + (Math.PI + 1.15);
          const sx = lcx + side * Math.cos(a) * rx;
          const sy = lcy + Math.sin(a) * ry;
          const ex = lcx - side * rx * 0.05;
          const ey = lcy - ry * 0.9;
          ux = sx + (ex - sx) * u + side * rx * 0.1 * Math.sin(Math.PI * u);
          uy = sy + (ey - sy) * u;
        }
        pts.push(lx + (ux - lx) * m, ly + (uy - ly) * m);
      }
      ctx.beginPath();
      for (let k = 0; k < OUTLINE; k++) {
        if (k === 0) ctx.moveTo(pts[0], pts[1]); else ctx.lineTo(pts[k * 2], pts[k * 2 + 1]);
      }
      ctx.closePath();
      const body = mixc(LEAF, LUNG, m);
      ctx.globalAlpha = 0.16 + 0.08 * breath * m;
      ctx.fillStyle = css(body);
      ctx.fill();
      ctx.globalAlpha = 0.75;
      ctx.strokeStyle = css(mixc(body, [255, 255, 255], 0.35));
      ctx.lineWidth = Math.max(1, 1.8 * unit * cfg.look.weight);
      ctx.stroke();
    }
    this.glow.fill(0);
    const vein = mixc(mixc(LEAF, LUNG, m), [255, 255, 255], 0.4);
    const bright = mixc(mixc(OXYGEN, LUNG, m), [255, 255, 255], 0.55);
    // Detail decides how many of the finest levels are drawn.
    const shown = Math.max(3, Math.min(DEPTH, Math.round(4 + 3 * cfg.look.detail)));
    if (shown < DEPTH) for (let i = (1 << (shown + 1)) - 1; i < NODES; i++) ends[i * 2] = this.xs[i], ends[i * 2 + 1] = this.ys[i];
    this.drawBranches(ends, unit, vein, bright, cfg.look.weight, this.pulses);
  }
}
