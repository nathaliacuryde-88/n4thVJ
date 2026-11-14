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
 * The real sky over Stuttgart, worked out here from the date and time — the
 * bright stars and their constellations, the Milky Way, the moon in its true
 * phase, the planets where they are. No internet: it is all arithmetic
 * (data/sky.ts, data/stars.ts).
 *
 * IT HAS DEPTH. Seen from the ground the sky is a flat ceiling; it is not
 * one. Every star here is at its own distance, so the view can leave the
 * ground and go in among them: the near ones swing out and past, the far ones
 * hardly move, and a constellation comes apart as it is flown through,
 * because it was only ever a shape from where we stand. Past them there is
 * the open field, which goes on for as long as the flight does. Coming home,
 * every star is back exactly where tonight's sky has it.
 *
 * THE HAND FLIES IT. An open hand is already a little way in, enough that
 * moving it shifts the near stars against the far ones. Pushing the hand
 * towards the camera pushes into the sky. A fist brings it home. The hand's
 * place turns the view. A clap is a jump forward, and a shooting star.
 *
 * THE MUSIC FLIES IT TOO. Each kick is a push forward and a brightening; the
 * fuller the music the further in and the faster; a build-up accelerates
 * until the stars draw out into streaks; the drop goes all the way in. The
 * hats make the stars twinkle and bass breathes their glow. The finger count
 * sets the tempo of it all, as on every visual, and the colour panel turns
 * the night's blue.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof TonightConfig;
type Pt = { x: number; y: number; alt: number; near: number; ahead: number };

const RAD = Math.PI / 180;
const LOOKS = [180, 90, 0, 270];
/** How far in the deepest dive goes, in the same units as the stars' distances. */
const DIVE = 3.6;
/** The open field beyond the constellations: how deep one lap of it is, and how wide. */
const FIELD_DEPTH = 9;
const FIELD_WIDE = 3.4;

function seeded(seed: number) {
  let s = seed;
  return () => ((s = (s * 16807) % 2147483647) / 2147483647);
}

/** Faint stars: the same handful every night, scattered evenly over the sphere. [ra hours, dec, magnitude, distance] */
const FAINT: [number, number, number, number][] = (() => {
  const rnd = seeded(7);
  return Array.from({ length: 900 }, () =>
    [rnd() * 24, Math.asin(rnd() * 2 - 1) / RAD, 3.8 + rnd() * 2.4, 2.2 + rnd() * 6.5] as [number, number, number, number]);
})();

/** A point of the Milky Way's plane, given along it and off it, as right ascension (hours) and declination. */
function galactic(l: number, b: number): [number, number] {
  const pole = 27.12825 * RAD;
  const node = (122.93192 - l) * RAD;
  const lat = b * RAD;
  const sinDec = Math.sin(lat) * Math.sin(pole) + Math.cos(lat) * Math.cos(pole) * Math.cos(node);
  const ra = 192.85948 + Math.atan2(Math.cos(lat) * Math.sin(node), Math.sin(lat) * Math.cos(pole) - Math.cos(lat) * Math.sin(pole) * Math.cos(node)) / RAD;
  return [(((ra % 360) + 360) % 360) / 15, Math.asin(Math.max(-1, Math.min(1, sinDec))) / RAD];
}

/** The Milky Way: fine dust along the galaxy's plane, thicker towards its middle, and far off. */
const MILKY: { dust: [number, number, number, number][]; haze: [number, number, number, number][] } = (() => {
  const rnd = seeded(31);
  const bell = () => Math.sqrt(-2 * Math.log(Math.max(1e-6, rnd()))) * Math.cos(Math.PI * 2 * rnd());
  const point = (spread: number): [number, number, number, number] => {
    const l = rnd() < 0.55 ? bell() * 55 : rnd() * 360;
    const thick = 4.5 + 6 * Math.exp(-Math.pow((((l + 180) % 360 + 360) % 360 - 180) / 45, 2));
    const [ra, dec] = galactic(l, bell() * thick * spread);
    return [ra, dec, rnd(), 6 + rnd() * 7];
  };
  return {
    dust: Array.from({ length: 1500 }, () => point(1)),
    haze: Array.from({ length: 80 }, () => point(0.6)),
  };
})();

/** The open field: points in a long box the view flies down, over and over. */
const FIELD: [number, number, number, number][] = (() => {
  const rnd = seeded(113);
  return Array.from({ length: 650 }, () =>
    [(rnd() * 2 - 1) * FIELD_WIDE, (rnd() * 2 - 1) * FIELD_WIDE, rnd() * FIELD_DEPTH, rnd()] as [number, number, number, number]);
})();

/** Each named star's distance: the bright ones nearer, and no two alike. */
const DISTANCE = new Map(STARS.map(([name, , , mag], i) => {
  const h = Math.abs(Math.sin(i * 12.9898 + 4.1) * 43758.5453) % 1;
  return [name, Math.max(1.3, 1.5 + mag * 0.55 + h * 3.4)];
}));

function sprite(inner: string, mid: string, outer: string) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 64;
  const g = canvas.getContext('2d')!;
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.12, `rgba(${inner},0.9)`);
  grad.addColorStop(0.35, `rgba(${mid},0.28)`);
  grad.addColorStop(1, `rgba(${outer},0)`);
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return canvas;
}

export class TonightRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = TonightConfig;
  private playing = new Playing(0.6);
  /** One soft dot in three temperatures, drawn once and stamped for every star. */
  private glows: HTMLCanvasElement[];

  private offset = 0;
  private pan = 0;
  private real = 0;
  private pulse = 0;
  private breath = 0;
  private lastDrop = 0;
  /** How far in the view is, 0 on the ground to 1 at the deepest. */
  private dive = 0;
  /** The push of a kick or a clap, on top of the dive, dying away. */
  private surge = 0;
  /** How far the open field has been flown, and how fast it is going. */
  private flow = 0;
  private speed = 0;
  private side = { x: 0, y: 0 };
  private tilt = 0;
  private shooting: { t: number; x: number; y: number; dx: number; dy: number } | null = null;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.glows = [
      sprite('235,242,255', '170,195,255', '120,150,255'),
      sprite('250,250,255', '215,222,255', '170,180,255'),
      sprite('255,240,222', '255,205,170', '255,170,150'),
    ];
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
    const ease = (rate: number) => 1 - Math.exp(-dt * rate);
    // How fast the finger count has the clock running, beside real time.
    const tempo = Math.min(4, step / Math.max(dt, 1e-3));

    // Sky time: now, run on by the speed (minutes of sky per second).
    this.offset += step * cfg.time.speed * 60000;
    const when = new Date(Date.now() + cfg.time.hours * 3600000 + this.offset);
    this.pan += step * cfg.view.drift * 2;
    const kick = Math.max(play.kick, play.bump) * cfg.sound.beat;
    this.pulse = Math.max(this.pulse * Math.exp(-dt * 4), Math.min(1.2, kick));
    this.breath += (play.bass * cfg.sound.bass - this.breath) * ease(3);

    // ── how far in ───────────────────────────────────────────────────────
    const hands = [handData.left, handData.right].filter(Boolean);
    const real = hands.length > 0 && !handData.synthetic;
    const live = !!audioData?.live;
    const depth = cfg.flight.dive;
    let want: number;
    if (real) {
      // Open, a little way in; pushed towards the camera, all the way; a fist, home.
      want = (1 - play.fist) * Math.min(1, 0.3 + Math.max(0, play.depth - 0.3) * 2.1);
    } else if (live) {
      want = Math.min(1, 0.1 + 0.5 * play.energy + 0.5 * play.build + 0.7 * play.drop);
    } else {
      want = 0.3 + 0.22 * Math.sin(this.real * 0.13);
    }
    this.dive += (want - this.dive) * ease(want > this.dive ? 1.1 : 1.7);
    this.surge = Math.max(this.surge * Math.exp(-dt * 3.2), Math.min(1, kick) * 0.07);
    if (play.clapped && cfg.hands.clap > 0) {
      this.surge = 0.5;
      this.speed += 5;
      const a = Math.random() * Math.PI * 0.5 + Math.PI * 0.75;
      this.shooting = { t: 0, x: W * (0.2 + Math.random() * 0.6), y: H * (0.1 + Math.random() * 0.25), dx: Math.cos(a), dy: -Math.sin(a) * 0.5 + 0.35 };
    }
    if (play.drop > 0.5 && this.lastDrop <= 0.5) {
      this.surge = Math.max(this.surge, 0.4);
      this.speed += 4;
    }
    this.lastDrop = play.drop;
    const inNow = Math.max(0, Math.min(1.25, this.dive + this.surge)) * depth;
    const d = inNow * DIVE;
    // The open field: flown at a cruising speed the music sets, and shoved by each kick.
    const cruise = (0.25 + 0.9 * (live ? play.energy : 0.35) + 1.8 * play.build) * cfg.flight.speed * tempo
      * (real ? 0.25 + 1.2 * (1 - play.fist) : 1);
    this.speed += (cruise - this.speed) * ease(2.2);
    this.speed += Math.min(1, kick) * 9 * dt * cfg.flight.speed;
    this.flow += this.speed * dt;
    // Moving the hand moves the view sideways, which is what shows the depth.
    this.side.x += (play.aim.x * 0.5 * cfg.hands.pan * Math.min(1, inNow * 2.5) - this.side.x) * ease(3);
    this.side.y += (play.aim.y * 0.35 * cfg.hands.pan * Math.min(1, inNow * 2.5) - this.side.y) * ease(3);
    this.tilt += (play.aim.y * 12 * cfg.hands.pan - this.tilt) * ease(3);

    // ── the view: which way, how wide, turned by the hand ────────────────
    const look = Math.round(cfg.view.look);
    const zenith = look === 4;
    const az0 = (LOOKS[look] ?? 180) + this.pan + play.aim.x * 40 * cfg.hands.pan;
    const alt0 = zenith ? 90 : 32 + this.tilt;
    const fov = cfg.view.width;
    const R = (W / 2) / (2 * Math.tan((fov / 2) * RAD / 2));
    const cx = W / 2;
    const cy = zenith ? H / 2 : H * 0.42;
    const sa0 = Math.sin(alt0 * RAD);
    const ca0 = Math.cos(alt0 * RAD);
    const ox = this.side.x;
    const oy = this.side.y;
    /** A point seen from where the view now is: straight ahead is +z. */
    const seen = (x: number, y: number, z: number, alt: number, distance: number): Pt | null => {
      const len = Math.hypot(x, y, z) || 1e-6;
      const ahead = z / len;
      if (ahead < -0.25) return null;
      const k = 2 / (1 + ahead);
      return { x: cx + k * (x / len) * R, y: cy - k * (y / len) * R, alt, near: distance / len, ahead };
    };
    const project = (alt: number, az: number, distance: number): Pt | null => {
      const a = alt * RAD;
      const dz = (az - az0) * RAD;
      const vx = Math.cos(a) * Math.sin(dz);
      const vy = Math.sin(a);
      const vz = Math.cos(a) * Math.cos(dz);
      return seen(vx * distance - ox, (vy * ca0 - vz * sa0) * distance - oy, (vz * ca0 + vy * sa0) * distance - d, alt, distance);
    };
    const lst = siderealDegrees(when, CITY.lng);
    const place = (raDeg: number, dec: number, distance: number) => {
      const h = horizontal(raDeg, dec, lst, CITY.lat);
      return project(h.altitude, h.bearing, distance);
    };

    // ── the night ────────────────────────────────────────────────────────
    const turn = turnFrom(colors).hue;
    const sun = sunPosition(when, CITY.lat, CITY.lng).altitude;
    const dusk = Math.max(0, Math.min(1, (sun + 18) / 18));
    const hue = 225 + turn;
    // Leaving the ground, the horizon and its light are left behind too.
    const grounded = Math.max(0, 1 - inNow * 2.2);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    if (cfg.view.ground >= 0.5) {
      const sky = ctx.createLinearGradient(0, 0, 0, H);
      sky.addColorStop(0, `hsl(${hue + 10} 60% ${4 + dusk * 14}%)`);
      sky.addColorStop(0.7, `hsl(${hue} 55% ${9 + dusk * 22}%)`);
      sky.addColorStop(1, `hsl(${hue - 10} 45% ${14 + dusk * 25}%)`);
      ctx.fillStyle = sky;
      ctx.globalAlpha = 0.35 + 0.65 * grounded;
      ctx.fillRect(0, 0, W, H);
      ctx.globalAlpha = 1;
    }

    const unit = H / 1080;
    const night = 1 - dusk * 0.7;
    const low = (alt: number) => 1 - grounded * (1 - Math.min(1, Math.max(0, (alt + 2) / 14)));
    ctx.globalCompositeOperation = 'lighter';

    // The Milky Way: a haze, and the dust in it.
    for (const [ra, dec, tone, far] of MILKY.haze) {
      const p = place(ra * 15, dec, far);
      if (!p) continue;
      const size = (70 + 90 * tone) * unit * Math.min(3, p.near);
      ctx.globalAlpha = 0.045 * night * low(p.alt) * (1 + this.breath * 0.6);
      ctx.drawImage(this.glows[tone > 0.7 ? 2 : 0], p.x - size, p.y - size, size * 2, size * 2);
    }
    ctx.fillStyle = `hsl(${hue - 5} 45% 86%)`;
    const dustLight = night * (0.8 + 0.4 * this.pulse);
    for (const [ra, dec, tone, far] of MILKY.dust) {
      const p = place(ra * 15, dec, far);
      if (!p || p.x < 0 || p.x > W || p.y < 0 || p.y > H) continue;
      const size = Math.max(1, (0.9 + tone * 1.3) * unit * Math.min(3, p.near));
      ctx.globalAlpha = Math.min(1, (0.16 + 0.34 * tone) * dustLight * low(p.alt));
      ctx.fillRect(p.x - size / 2, p.y - size / 2, size, size);
    }

    // The open field, past the constellations: only there once the view is in.
    const open = Math.max(0, Math.min(1, (inNow - 0.1) / 0.45));
    if (open > 0.01) {
      // Only a real hurry draws the stars out; at a cruise they are points.
      const back = Math.min(0.6, Math.max(0, this.speed - 1.5) * 0.06);
      // The field turns with the hand as the sky does.
      const yaw = play.aim.x * 24 * cfg.hands.pan * RAD;
      const cosYaw = Math.cos(yaw);
      const sinYaw = Math.sin(yaw);
      const ahead = (x: number, y: number, z: number) => seen(x * cosYaw - z * sinYaw - ox, y - oy, x * sinYaw + z * cosYaw, 90, 1);
      const dots: [number, number, number, number][] = [];
      ctx.lineCap = 'round';
      ctx.strokeStyle = `hsl(${hue - 10} 60% 88%)`;
      for (const [fx, fy, fz, tone] of FIELD) {
        const z = ((((fz - this.flow) % FIELD_DEPTH) + FIELD_DEPTH) % FIELD_DEPTH) - 0.3;
        const p = ahead(fx, fy, z);
        if (!p || p.x < -40 || p.x > W + 40 || p.y < -40 || p.y > H + 40) continue;
        const range = Math.hypot(fx, fy, z);
        // Out of the dark at the far end, and gone as it passes.
        const light = Math.min(1, (FIELD_DEPTH - 0.3 - z) / 2.5) * Math.min(1, Math.max(0, (p.ahead + 0.25) * 3)) * open * night;
        const size = Math.max(0.9, Math.min(8, (0.9 + tone * 1.6) / Math.max(0.35, range)) * 3.6) * unit * cfg.look.size;
        const q = back > 0.02 ? ahead(fx, fy, z + back) : null;
        if (q && Math.hypot(q.x - p.x, q.y - p.y) > size * 1.5) {
          // Fast enough to be seen moving: drawn out along its path.
          ctx.globalAlpha = Math.min(1, light * (0.35 + 0.5 * tone));
          ctx.lineWidth = Math.max(1, size * 0.7);
          ctx.beginPath();
          ctx.moveTo(q.x, q.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
        dots.push([p.x, p.y, size, light * (0.4 + 0.6 * tone)]);
      }
      for (const [x, y, size, light] of dots) {
        ctx.globalAlpha = Math.min(1, light * (1 + this.pulse * 0.5));
        ctx.drawImage(this.glows[1], x - size * 2, y - size * 2, size * 4, size * 4);
      }
    }

    // Constellation lines, under the stars. Flown through, they stretch and let go.
    const pts = new Map<string, Pt | null>();
    for (const [name, ra, dec] of STARS) pts.set(name, place(ra * 15, dec, DISTANCE.get(name) ?? 2));
    if (cfg.look.lines > 0) {
      ctx.globalCompositeOperation = 'source-over';
      ctx.lineWidth = Math.max(1, H / 760);
      ctx.lineCap = 'round';
      ctx.globalAlpha = 1;
      ctx.strokeStyle = `hsla(${hue} 80% 80% / ${0.32 * cfg.look.lines * (1 - 0.3 * Math.min(1, inNow))})`;
      ctx.beginPath();
      for (const c of LINES) {
        for (const chain of c.chains) {
          for (let i = 0; i < chain.length - 1; i++) {
            const a = pts.get(chain[i]);
            const b = pts.get(chain[i + 1]);
            if (!a || !b || a.ahead < 0.2 || b.ahead < 0.2) continue;
            if (grounded > 0.5 && (a.alt < -2 || b.alt < -2)) continue;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
          }
        }
      }
      ctx.stroke();
      ctx.globalCompositeOperation = 'lighter';
    }

    // The stars: faint ones first, then the named ones, twinkling. Nearer is larger.
    const twinkle = 0.15 + play.high * cfg.sound.high * 0.35;
    const bright = 1 + this.pulse * 0.5 + this.breath * 0.3;
    const stamp = (p: Pt, mag: number, seed: number) => {
      if (grounded > 0.5 && p.alt < -1) return;
      const near = Math.min(4.5, Math.pow(p.near, 1.15));
      const size = Math.max(3, (9 - mag * 1.9) * cfg.look.size) * unit * (1 + this.breath * 0.15) * near;
      if (p.x < -size * 2 || p.x > W + size * 2 || p.y < -size * 2 || p.y > H + size * 2) return;
      const tw = 1 - twinkle + twinkle * Math.sin(this.real * (2 + (seed % 5)) + seed);
      const leaving = Math.min(1, Math.max(0, (p.ahead + 0.25) * 2.5));
      ctx.globalAlpha = Math.min(1, Math.max(0.05, (1.15 - mag * 0.2)) * low(p.alt) * tw * bright * night * Math.min(1.6, 0.6 + 0.4 * p.near) * leaving);
      const kind = Math.floor(Math.abs(seed) * 7.3) % 10;
      const glow = this.glows[kind < 6 ? 0 : kind < 8 ? 1 : 2];
      ctx.drawImage(glow, p.x - size * 2, p.y - size * 2, size * 4, size * 4);
      // The bright ones have a hard heart to them, so they read as points and not as mist.
      const heart = mag < 2.6 ? 0.8 : 0.5;
      ctx.drawImage(glow, p.x - size * heart, p.y - size * heart, size * heart * 2, size * heart * 2);
    };
    FAINT.forEach(([ra, dec, mag, far], i) => {
      const p = place(ra * 15, dec, far);
      if (p) stamp(p, mag, i);
    });
    STARS.forEach(([name, , , mag], i) => {
      const p = pts.get(name);
      if (p) stamp(p, mag, i * 3.7);
    });

    // The planets: steady, a touch warmer, named. Close by: soon passed.
    const planetPts = planets(when).map((pl) => ({ ...pl, p: place(pl.ra, pl.dec, 1.2) }));
    for (const { p } of planetPts) {
      if (!p || (grounded > 0.5 && p.alt < -1)) continue;
      const size = 10 * cfg.look.size * unit * (1 + this.breath * 0.2) * Math.min(4, p.near);
      ctx.globalAlpha = 0.95 * (1 - dusk * 0.5) * Math.min(1, Math.max(0, (p.ahead + 0.25) * 2.5));
      ctx.drawImage(this.glows[2], p.x - size * 2, p.y - size * 2, size * 4, size * 4);
    }

    // The moon, in its phase: a ball, lit from one side. The nearest thing there is.
    const m = moonRaDec(when);
    const mp = place(m.ra, m.dec, 0.8);
    const phase = moonPhase(when);
    ctx.globalCompositeOperation = 'source-over';
    const moonR = H * 0.028 * cfg.look.moon * (mp ? Math.min(5, mp.near) : 1);
    if (mp && mp.ahead > 0.1 && (grounded < 0.5 || mp.alt > -2) && mp.x > -moonR * 8 && mp.x < W + moonR * 8) {
      const r = moonR;
      const waxing = phase.phase < 0.5;
      const lit = waxing ? 1 : -1;
      const halo = ctx.createRadialGradient(mp.x, mp.y, r * 0.5, mp.x, mp.y, r * 7);
      halo.addColorStop(0, `hsla(${hue - 20} 60% 85% / ${0.35 * phase.lit})`);
      halo.addColorStop(1, `hsla(${hue - 20} 60% 85% / 0)`);
      ctx.globalAlpha = 1;
      ctx.fillStyle = halo;
      ctx.fillRect(mp.x - r * 7, mp.y - r * 7, r * 14, r * 14);
      // Brightest where the sun is on it, falling away round the curve.
      const ball = ctx.createRadialGradient(mp.x + lit * r * 0.45, mp.y - r * 0.2, r * 0.05, mp.x, mp.y, r * 1.05);
      ball.addColorStop(0, '#fbfbfe');
      ball.addColorStop(0.55, '#d9dde9');
      ball.addColorStop(1, '#8f97ad');
      ctx.fillStyle = ball;
      ctx.beginPath();
      ctx.arc(mp.x, mp.y, r, 0, Math.PI * 2);
      ctx.fill();
      // The dark side: the same disc, slid off as the moon fills — lit on
      // the right while it waxes, on the left as it wanes.
      ctx.save();
      ctx.beginPath();
      ctx.arc(mp.x, mp.y, r * 1.02, 0, Math.PI * 2);
      ctx.clip();
      const shade = ctx.createRadialGradient(mp.x - lit * 2 * r * phase.lit, mp.y, r * 0.8, mp.x - lit * 2 * r * phase.lit, mp.y, r * 1.12);
      shade.addColorStop(0, `hsla(${hue} 50% 6% / 0.92)`);
      shade.addColorStop(1, `hsla(${hue} 50% 6% / 0)`);
      ctx.fillStyle = shade;
      ctx.fillRect(mp.x - r * 4, mp.y - r * 2, r * 8, r * 4);
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
      ctx.globalAlpha = 1;
      ctx.strokeStyle = grad;
      ctx.lineWidth = 3 * unit;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(head.x, head.y);
      ctx.lineTo(head.x - s.dx * len, head.y - s.dy * len);
      ctx.stroke();
      if (a <= 0) this.shooting = null;
    }

    // The ground: soft rounded hills along the horizon, dark — and left below on the way in.
    if (!zenith && cfg.view.ground >= 0.5 && grounded > 0.01) {
      const sink = (1 - grounded) * H * 0.6;
      ctx.globalAlpha = 1;
      ctx.fillStyle = `hsl(${hue} 40% 4%)`;
      ctx.beginPath();
      ctx.moveTo(0, H + sink);
      for (let i = 0; i <= 48; i++) {
        const t = i / 48;
        const az = az0 - fov * 0.55 + t * fov * 1.1;
        const hill = 1.2 + 1.4 * Math.sin(az * 0.07) + 0.9 * Math.sin(az * 0.19 + 1.3);
        const a = hill * RAD;
        const dz = (az - az0) * RAD;
        const p = seen(Math.cos(a) * Math.sin(dz), Math.sin(a) * ca0 - Math.cos(a) * Math.cos(dz) * sa0,
          Math.cos(a) * Math.cos(dz) * ca0 + Math.sin(a) * sa0, hill, 1);
        if (p) ctx.lineTo(p.x, p.y + sink);
      }
      ctx.lineTo(W, H + sink);
      ctx.closePath();
      ctx.fill();
    }

    // Names, small; they belong to the view from the ground, and stay there.
    const named = cfg.look.labels * Math.max(0, 1 - inNow * 2.6);
    if (named > 0.01) {
      ctx.globalAlpha = 0.55 * named;
      ctx.fillStyle = `hsl(${hue} 60% 86%)`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const fs = Math.max(9, H * 0.0125);
      ctx.font = `400 ${fs}px "Helvetica Neue", Helvetica, Arial, sans-serif`;
      for (const c of LINES) {
        const ps = c.chains.flat().map((n) => pts.get(n)).filter((p): p is Pt => !!p && p.alt > 3 && p.ahead > 0.2);
        if (ps.length < 2) continue;
        const x = ps.reduce((s, p) => s + p.x, 0) / ps.length;
        const y = ps.reduce((s, p) => s + p.y, 0) / ps.length;
        ctx.fillText(c.name, x, y + fs * 1.6);
      }
      ctx.globalAlpha = 0.75 * named;
      for (const { name, p } of planetPts) {
        if (p && p.alt > 1 && p.ahead > 0.2) ctx.fillText(name, p.x, p.y + fs * 1.8);
      }
      if (mp && mp.alt > 1 && mp.ahead > 0.2) ctx.fillText(`Moon · ${Math.round(phase.lit * 100)}%`, mp.x, mp.y + moonR + fs * 1.6);
      // Where and when, in a corner.
      const stamped = new Intl.DateTimeFormat('en-GB', { timeZone: CITY.zone, weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(when);
      ctx.globalAlpha = 0.5 * named;
      ctx.textAlign = 'left';
      ctx.fillText(`${CITY.name} · ${stamped} · looking ${zenith ? 'up' : ['south', 'east', 'north', 'west'][look]}`, fs * 2, H - fs * 2);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }
}
