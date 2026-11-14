import { AudioData, HandData } from '../../App';
import { ConstellationConfig } from '../../config/ConstellationRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { presence, presenceAt, wantPresence } from '../../hands/presence';
import { Playing } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CONSTELLATION
 * ═══════════════════════════════════════════════════════════════════════════
 * A sky of stars in which the ones that happen to lie where she is standing
 * light up, and are joined with fine lines as constellations are — so her
 * figure is in the sky the way a hunter or a bear is: not drawn, but found
 * among the stars that were already there.
 *
 * WHERE SHE IS comes from the camera, as an outline of the person worked out
 * beside the hand tracking (hands/presence.ts). The stars themselves never
 * move to follow her; she moves across them, and different ones light.
 *
 * HER HANDS are drawn exactly, star by star at each joint, because the hand
 * tracker knows them to the knuckle. They are the brightest part of the
 * figure, and they work even when the outline does not.
 *
 * A CLAP scatters the figure's stars out into the sky, and they find their
 * way back. Each kick swells them; the hats set odd ones glinting; the bass
 * brightens the lines; a build-up draws more of the sky into the figure.
 *
 * With no camera there is no figure to find, so a slow shape of its own
 * drifts through the stars instead.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof ConstellationConfig;

/** The grid the stars are scattered over, at Stars 1. */
const COLUMNS = 84;
const ROWS = 47;
/** The joints of a hand, as pairs, for the lines between its stars. */
const BONES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12],
  [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [17, 18], [18, 19], [19, 20], [0, 17],
];

interface Star {
  x: number; y: number;        // 0 to 1 across and down
  size: number;
  phase: number;
  /** How lit it is as part of the figure, eased. */
  lit: number;
  /** Thrown out of place by a clap, and coming back. */
  dx: number; dy: number; vx: number; vy: number;
  /** Which neighbours it may be joined to: right, down, down-right, down-left. */
  links: number;
  rank: number;
}

function rgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [parseInt(full.slice(0, 2), 16) || 0, parseInt(full.slice(2, 4), 16) || 0, parseInt(full.slice(4, 6), 16) || 0];
}

export class ConstellationRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = ConstellationConfig;
  private playing = new Playing(0.6);
  private stars: Star[] = [];
  private glow = document.createElement('canvas');
  private tinted = document.createElement('canvas');
  private tintKey = '';
  private release: () => void;
  private real = 0;
  private swell = 0;
  private lastDrop = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.release = wantPresence();

    // The same sky every time: a grid, each star pushed off its crossing.
    let seed = 0x9e3779b1;
    const random = () => { seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5; return ((seed >>> 0) % 100000) / 100000; };
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLUMNS; c++) {
        this.stars.push({
          x: (c + 0.15 + random() * 0.7) / COLUMNS,
          y: (r + 0.15 + random() * 0.7) / ROWS,
          size: 0.45 + Math.pow(random(), 2.2) * 1.5,
          phase: random() * Math.PI * 2,
          lit: 0, dx: 0, dy: 0, vx: 0, vy: 0,
          // About half of the possible joins exist, so it reads as constellations and not a net.
          links: (random() < 0.5 ? 1 : 0) | (random() < 0.5 ? 2 : 0) | (random() < 0.22 ? 4 : 0) | (random() < 0.22 ? 8 : 0),
          rank: random(),
        });
      }
    }

    this.glow.width = this.glow.height = 64;
    const g = this.glow.getContext('2d')!;
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.12, 'rgba(240,244,255,0.9)');
    grad.addColorStop(0.35, 'rgba(190,205,255,0.28)');
    grad.addColorStop(1, 'rgba(150,170,255,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(ConstellationConfig, values);
  }

  destroy() {
    this.release();
  }

  /** The star's glow in the panel's colour, for the stars of the figure. */
  private tint(hex: string) {
    if (hex === this.tintKey) return;
    this.tintKey = hex;
    const [r, g, b] = rgb(hex);
    this.tinted.width = this.tinted.height = 64;
    const t = this.tinted.getContext('2d')!;
    t.clearRect(0, 0, 64, 64);
    const grad = t.createRadialGradient(32, 32, 0, 32, 32, 32);
    const pale = (v: number) => Math.round(v + (255 - v) * 0.55);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.14, `rgba(${pale(r)},${pale(g)},${pale(b)},0.95)`);
    grad.addColorStop(0.4, `rgba(${r},${g},${b},0.34)`);
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
    t.fillStyle = grad;
    t.fillRect(0, 0, 64, 64);
  }

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { canvas, ctx, cfg } = this;
    const W = canvas.width;
    const H = canvas.height;
    if (!W || !H) return;
    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    this.real += dt;
    const ease = (rate: number) => 1 - Math.exp(-dt * rate);
    this.tint(colors[0] ?? '#8fb4ff');

    const kick = Math.max(play.kick, play.bump) * cfg.sound.beat;
    this.swell = Math.max(this.swell * Math.exp(-dt * 5), kick);
    const scatter = (play.clapped ? play.clapStrength * cfg.hands.clap : 0)
      || (play.drop > 0.5 && this.lastDrop <= 0.5 ? 0.8 : 0);
    this.lastDrop = play.drop;

    // ── who is there ─────────────────────────────────────────────────────
    const mask = presence();
    const t = this.real;
    // A build-up draws more of the sky into the figure: a lower bar to be lit.
    const bar = 0.5 - 0.22 * play.build;
    const shown = Math.max(0.05, Math.min(1, cfg.sky.stars));
    const stars = this.stars;
    for (const star of stars) {
      if (star.rank > shown) continue;
      let there: number;
      if (mask) {
        there = presenceAt(mask, star.x, star.y);
      } else {
        // Nobody to find: a slow shape of its own, so the sky is not empty of figures.
        const cx = 0.5 + 0.22 * Math.sin(t * 0.13);
        const cy = 0.5 + 0.12 * Math.sin(t * 0.19 + 1);
        const dx = (star.x - cx) * (W / H);
        const dy = star.y - cy;
        const angle = Math.atan2(dy, dx);
        const radius = 0.2 + 0.07 * Math.sin(angle * 3 + t * 0.3) + 0.04 * Math.sin(angle * 5 - t * 0.21);
        there = Math.hypot(dx, dy) < radius ? 1 : 0;
      }
      const want = there > bar ? Math.min(1, (there - bar) / 0.25) : 0;
      star.lit += (want - star.lit) * ease(want > star.lit ? 9 : 3.5);

      if (scatter > 0 && star.lit > 0.2) {
        const a = star.phase * 7 + t;
        const push = (0.08 + 0.25 * star.rank) * scatter;
        star.vx += Math.cos(a) * push * 3;
        star.vy += Math.sin(a) * push * 3;
      }
      // Back to its place, as on a spring that does not overshoot much.
      star.vx += (-star.dx * 14 - star.vx * 5) * dt;
      star.vy += (-star.dy * 14 - star.vy * 5) * dt;
      star.dx += star.vx * dt;
      star.dy += star.vy * dt;
    }

    // ── draw ─────────────────────────────────────────────────────────────
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';
    const unit = (H / 720) * cfg.sky.size;
    const px = (s: Star) => (s.x + s.dx / (W / H)) * W;
    const py = (s: Star) => (s.y + s.dy) * H;

    // The lines of the figure: between neighbours that are both lit.
    const lineLight = cfg.sky.lines * (0.5 + 0.6 * play.bass);
    if (lineLight > 0.01) {
      const [r, g, b] = rgb(colors[0] ?? '#8fb4ff');
      const pale = (v: number) => Math.round(v + (255 - v) * 0.6);
      ctx.strokeStyle = `rgb(${pale(r)},${pale(g)},${pale(b)})`;
      ctx.lineWidth = Math.max(0.6, 0.9 * unit);
      ctx.lineCap = 'round';
      const strong = new Path2D();
      const faint = new Path2D();
      const join = (a: Star, b2: Star | undefined) => {
        if (!b2 || b2.rank > shown) return;
        const both = Math.min(a.lit, b2.lit);
        if (both < 0.25) return;
        const path = both > 0.7 ? strong : faint;
        path.moveTo(px(a), py(a));
        path.lineTo(px(b2), py(b2));
      };
      for (let r2 = 0; r2 < ROWS; r2++) {
        for (let c = 0; c < COLUMNS; c++) {
          const star = stars[r2 * COLUMNS + c];
          if (star.rank > shown || star.lit < 0.25) continue;
          if (star.links & 1 && c + 1 < COLUMNS) join(star, stars[r2 * COLUMNS + c + 1]);
          if (star.links & 2 && r2 + 1 < ROWS) join(star, stars[(r2 + 1) * COLUMNS + c]);
          if (star.links & 4 && r2 + 1 < ROWS && c + 1 < COLUMNS) join(star, stars[(r2 + 1) * COLUMNS + c + 1]);
          if (star.links & 8 && r2 + 1 < ROWS && c > 0) join(star, stars[(r2 + 1) * COLUMNS + c - 1]);
        }
      }
      ctx.globalAlpha = Math.min(1, 0.22 * lineLight);
      ctx.stroke(faint);
      ctx.globalAlpha = Math.min(1, 0.5 * lineLight);
      ctx.stroke(strong);
    }

    // The stars: the sky dim, the figure bright and in the panel's colour.
    const glint = play.hat * cfg.sound.twinkle;
    const beat = Math.floor(t * 9);
    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      if (star.rank > shown) continue;
      const twinkle = 0.7 + 0.3 * Math.sin(t * (0.8 + star.rank * 2.2) + star.phase);
      const field = cfg.sky.field * 0.5 * twinkle * (0.5 + star.size * 0.4);
      const figure = star.lit * (0.75 + 0.5 * this.swell) * twinkle;
      let light = field + figure;
      // On each hat a different few glint.
      if (glint > 0.05 && ((i * 2654435761 + beat * 40503) >>> 0) % 31 === 0) light += glint * 0.9;
      if (light < 0.02) continue;
      const size = star.size * unit * (3.2 + star.lit * (5.5 + 5 * this.swell));
      ctx.globalAlpha = Math.min(1, light);
      ctx.drawImage(star.lit > 0.3 ? this.tinted : this.glow, px(star) - size, py(star) - size, size * 2, size * 2);
    }

    // The hands, joint by joint.
    const strength = cfg.hands.hands;
    if (strength > 0.01) {
      for (const hand of [handData.left, handData.right]) {
        const points = hand?.landmarks;
        if (!points || points.length < 21) continue;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = Math.max(0.8, 1.2 * unit);
        ctx.globalAlpha = Math.min(1, 0.55 * strength);
        ctx.beginPath();
        for (const [a, b2] of BONES) {
          ctx.moveTo(points[a].x * W, points[a].y * H);
          ctx.lineTo(points[b2].x * W, points[b2].y * H);
        }
        ctx.stroke();
        for (let i = 0; i < 21; i++) {
          const tip = i % 4 === 0 && i > 0;
          const size = unit * (tip ? 11 : 7) * (1 + 0.5 * this.swell);
          ctx.globalAlpha = Math.min(1, strength);
          ctx.drawImage(this.tinted, points[i].x * W - size, points[i].y * H - size, size * 2, size * 2);
        }
      }
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }
}
