import { AudioData, HandData } from '../../App';
import { TonightConfig } from '../../config/TonightRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { CITY } from '../../data/daily';
import { horizontal, moonPhase, moonRaDec, planets, siderealDegrees, sunPosition } from '../../data/sky';
import { LINES, STARS } from '../../data/stars';
import { Playing, turnFrom } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * TONIGHT'S SKY
 * ═══════════════════════════════════════════════════════════════════════════
 * The real sky over Stuttgart, worked out here from the date and time —
 * the bright stars and their constellations, the moon in its true phase,
 * the planets where they are — drawn soft and glowing over a dark ground.
 * No internet: it is all arithmetic (data/sky.ts, data/stars.ts).
 *
 * Time runs a little faster than the clock, so the sky is seen to turn; the
 * finger count sets how fast, as on every visual. The view looks south, east,
 * north or west, or straight up; the hand pans it. A clap sends a shooting
 * star across; each kick brightens the stars; the hats make them twinkle;
 * bass breathes the glow. The colour panel turns the night's blue.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof TonightConfig;
type Pt = { x: number; y: number; alt: number };

const RAD = Math.PI / 180;
const LOOKS = [180, 90, 0, 270];
const BY_NAME = new Map(STARS.map((s) => [s[0], s]));

/** Faint stars: the same handful every night, scattered evenly over the sphere. */
const FAINT: [number, number, number][] = (() => {
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  return Array.from({ length: 900 }, () => [rnd() * 24, Math.asin(rnd() * 2 - 1) / RAD, 3.8 + rnd() * 2.4] as [number, number, number]);
})();

export class TonightRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = TonightConfig;
  private playing = new Playing(0.6);
  private glow: HTMLCanvasElement;

  private offset = 0;
  private pan = 0;
  private real = 0;
  private pulse = 0;
  private breath = 0;
  private lastBurst = 0;
  private shooting: { t: number; x: number; y: number; dx: number; dy: number } | null = null;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    // One soft dot, drawn once and stamped for every star.
    this.glow = document.createElement('canvas');
    this.glow.width = this.glow.height = 64;
    const g = this.glow.getContext('2d')!;
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.12, 'rgba(235,242,255,0.9)');
    grad.addColorStop(0.35, 'rgba(170,195,255,0.28)');
    grad.addColorStop(1, 'rgba(120,150,255,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(TonightConfig, values);
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
    this.real += dt;

    // Sky time: now, run on by the speed (minutes of sky per second).
    this.offset += step * cfg.time.speed * 60000;
    const when = new Date(Date.now() + cfg.time.hours * 3600000 + this.offset);
    this.pan += step * cfg.view.drift * 2;
    this.pulse = Math.max(this.pulse * Math.exp(-dt * 4), play.bump * cfg.sound.beat);
    this.breath += (play.bass * cfg.sound.bass - this.breath) * (1 - Math.exp(-dt * 3));
    const burst = play.burst * cfg.hands.clap;
    if (burst > 0.6 && this.lastBurst <= 0.6) {
      const a = Math.random() * Math.PI * 0.5 + Math.PI * 0.75;
      this.shooting = { t: 0, x: W * (0.2 + Math.random() * 0.6), y: H * (0.1 + Math.random() * 0.25), dx: Math.cos(a), dy: -Math.sin(a) * 0.5 + 0.35 };
    }
    this.lastBurst = burst;

    // The view: which way, how wide, panned by the hand.
    const look = Math.round(cfg.view.look);
    const zenith = look === 4;
    const az0 = (LOOKS[look] ?? 180) + this.pan + play.aim.x * 40 * cfg.hands.pan;
    const alt0 = zenith ? 90 : 32;
    const fov = cfg.view.width;
    const R = (W / 2) / (2 * Math.tan((fov / 2) * RAD / 2));
    const cx = W / 2;
    const cy = zenith ? H / 2 : H * 0.42;
    const sa0 = Math.sin(alt0 * RAD);
    const ca0 = Math.cos(alt0 * RAD);
    const project = (alt: number, az: number): Pt | null => {
      const a = alt * RAD;
      const dz = (az - az0) * RAD;
      const cosc = sa0 * Math.sin(a) + ca0 * Math.cos(a) * Math.cos(dz);
      if (cosc < -0.2) return null;
      const k = 2 / (1 + cosc);
      return {
        x: cx + k * Math.cos(a) * Math.sin(dz) * R * (zenith ? 1 : 1),
        y: cy - k * (ca0 * Math.sin(a) - sa0 * Math.cos(a) * Math.cos(dz)) * R,
        alt,
      };
    };
    const lst = siderealDegrees(when, CITY.lng);
    const place = (raDeg: number, dec: number) => {
      const h = horizontal(raDeg, dec, lst, CITY.lat);
      return project(h.altitude, h.bearing);
    };

    // The night: deep blue, lighter toward the horizon, turned by the panel.
    const turn = turnFrom(colors).hue;
    const sun = sunPosition(when, CITY.lat, CITY.lng).altitude;
    const dusk = Math.max(0, Math.min(1, (sun + 18) / 18));
    const hue = 225 + turn;
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    if (cfg.view.ground >= 0.5) {
      const sky = ctx.createLinearGradient(0, 0, 0, H);
      sky.addColorStop(0, `hsl(${hue + 10} 60% ${4 + dusk * 14}%)`);
      sky.addColorStop(0.7, `hsl(${hue} 55% ${9 + dusk * 22}%)`);
      sky.addColorStop(1, `hsl(${hue - 10} 45% ${14 + dusk * 25}%)`);
      ctx.fillStyle = sky;
    } else {
      ctx.fillStyle = '#000';
    }
    ctx.fillRect(0, 0, W, H);

    // Constellation lines, under the stars.
    const pts = new Map<string, Pt | null>();
    for (const [name, ra, dec] of STARS) pts.set(name, place(ra * 15, dec));
    if (cfg.look.lines > 0) {
      ctx.lineWidth = Math.max(1, H / 900);
      ctx.lineCap = 'round';
      ctx.strokeStyle = `hsla(${hue} 80% 80% / ${0.22 * cfg.look.lines})`;
      ctx.beginPath();
      for (const c of LINES) {
        for (const chain of c.chains) {
          for (let i = 0; i < chain.length - 1; i++) {
            const a = pts.get(chain[i]);
            const b = pts.get(chain[i + 1]);
            if (!a || !b || a.alt < -2 || b.alt < -2) continue;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
          }
        }
      }
      ctx.stroke();
    }

    // The stars: faint ones first, then the named ones, twinkling.
    const twinkle = 0.15 + play.high * cfg.sound.high * 0.35;
    const bright = 1 + this.pulse * 0.5 + this.breath * 0.3;
    const unit = H / 1080;
    ctx.globalCompositeOperation = 'lighter';
    const stamp = (p: Pt, mag: number, seed: number) => {
      if (p.alt < -1) return;
      const extinction = Math.min(1, Math.max(0.15, (p.alt + 2) / 14));
      const size = Math.max(3, (9 - mag * 1.9) * cfg.look.size) * unit * (1 + this.breath * 0.15);
      const tw = 1 - twinkle + twinkle * Math.sin(this.real * (2 + (seed % 5)) + seed);
      ctx.globalAlpha = Math.min(1, Math.max(0.05, (1.15 - mag * 0.2)) * extinction * tw * bright * (1 - dusk * 0.7));
      ctx.drawImage(this.glow, p.x - size * 2, p.y - size * 2, size * 4, size * 4);
    };
    FAINT.forEach(([ra, dec, mag], i) => {
      const p = place(ra * 15, dec);
      if (p) stamp(p, mag, i);
    });
    STARS.forEach(([name, , , mag], i) => {
      const p = pts.get(name);
      if (p) stamp(p, mag, i * 3.7);
    });

    // The planets: steady, a touch warmer, named.
    const planetPts = planets(when).map((pl) => ({ ...pl, p: place(pl.ra, pl.dec) }));
    for (const { p } of planetPts) {
      if (!p || p.alt < -1) continue;
      const size = 10 * cfg.look.size * unit * (1 + this.breath * 0.2);
      ctx.globalAlpha = 0.95 * (1 - dusk * 0.5);
      ctx.drawImage(this.glow, p.x - size * 2, p.y - size * 2, size * 4, size * 4);
    }

    // The moon, in its phase.
    const m = moonRaDec(when);
    const mp = place(m.ra, m.dec);
    const phase = moonPhase(when);
    ctx.globalCompositeOperation = 'source-over';
    if (mp && mp.alt > -2) {
      const r = H * 0.028 * cfg.look.moon;
      const halo = ctx.createRadialGradient(mp.x, mp.y, r * 0.5, mp.x, mp.y, r * 7);
      halo.addColorStop(0, `hsla(${hue - 20} 60% 85% / ${0.35 * phase.lit})`);
      halo.addColorStop(1, `hsla(${hue - 20} 60% 85% / 0)`);
      ctx.globalAlpha = 1;
      ctx.fillStyle = halo;
      ctx.fillRect(mp.x - r * 7, mp.y - r * 7, r * 14, r * 14);
      // The lit part: a disc, with the dark side laid over it.
      ctx.fillStyle = '#eef0f8';
      ctx.beginPath();
      ctx.arc(mp.x, mp.y, r, 0, Math.PI * 2);
      ctx.fill();
      // The dark side: the same disc, slid off as the moon fills — lit on
      // the right while it waxes, on the left as it wanes.
      const waxing = phase.phase < 0.5;
      ctx.save();
      ctx.beginPath();
      ctx.arc(mp.x, mp.y, r * 1.02, 0, Math.PI * 2);
      ctx.clip();
      ctx.fillStyle = `hsla(${hue} 50% 8% / 0.88)`;
      ctx.beginPath();
      ctx.arc(mp.x + (waxing ? -1 : 1) * 2 * r * phase.lit, mp.y, r * 1.02, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // A shooting star on a clap: a soft streak, rounded, never a blade.
    if (this.shooting) {
      const s = this.shooting;
      s.t += dt;
      const len = W * 0.18;
      const head = { x: s.x + s.dx * s.t * W * 0.5, y: s.y + s.dy * s.t * W * 0.5 };
      const a = Math.max(0, 1 - s.t / 1.1);
      const grad = ctx.createLinearGradient(head.x, head.y, head.x - s.dx * len, head.y - s.dy * len);
      grad.addColorStop(0, `rgba(240,245,255,${0.85 * a})`);
      grad.addColorStop(1, 'rgba(240,245,255,0)');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 3 * unit;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(head.x, head.y);
      ctx.lineTo(head.x - s.dx * len, head.y - s.dy * len);
      ctx.stroke();
      if (a <= 0) this.shooting = null;
    }

    // The ground: soft rounded hills along the horizon, dark.
    if (!zenith && cfg.view.ground >= 0.5) {
      ctx.globalAlpha = 1;
      ctx.fillStyle = `hsl(${hue} 40% 4%)`;
      ctx.beginPath();
      ctx.moveTo(0, H);
      for (let i = 0; i <= 48; i++) {
        const t = i / 48;
        const az = az0 - fov * 0.55 + t * fov * 1.1;
        const hill = 1.2 + 1.4 * Math.sin(az * 0.07) + 0.9 * Math.sin(az * 0.19 + 1.3);
        const p = project(hill, az);
        if (p) ctx.lineTo(p.x, p.y);
      }
      ctx.lineTo(W, H);
      ctx.closePath();
      ctx.fill();
    }

    // Names, small.
    if (cfg.look.labels > 0) {
      ctx.globalAlpha = 0.55 * cfg.look.labels;
      ctx.fillStyle = `hsl(${hue} 60% 86%)`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const fs = Math.max(9, H * 0.0125);
      ctx.font = `400 ${fs}px "Helvetica Neue", Helvetica, Arial, sans-serif`;
      for (const c of LINES) {
        const ps = c.chains.flat().map((n) => pts.get(n)).filter((p): p is Pt => !!p && p.alt > 3);
        if (ps.length < 2) continue;
        const x = ps.reduce((s, p) => s + p.x, 0) / ps.length;
        const y = ps.reduce((s, p) => s + p.y, 0) / ps.length;
        ctx.fillText(c.name, x, y + fs * 1.6);
      }
      ctx.globalAlpha = 0.75 * cfg.look.labels;
      for (const { name, p } of planetPts) {
        if (p && p.alt > 1) ctx.fillText(name, p.x, p.y + fs * 1.8);
      }
      if (mp && mp.alt > 1) ctx.fillText(`Moon · ${Math.round(phase.lit * 100)}%`, mp.x, mp.y + H * 0.028 * cfg.look.moon + fs * 1.6);
      // Where and when, in a corner.
      const stamp = new Intl.DateTimeFormat('en-GB', { timeZone: CITY.zone, weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(when);
      ctx.globalAlpha = 0.5 * cfg.look.labels;
      ctx.textAlign = 'left';
      ctx.fillText(`${CITY.name} · ${stamp} · looking ${zenith ? 'up' : ['south', 'east', 'north', 'west'][look]}`, fs * 2, H - fs * 2);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }
}
