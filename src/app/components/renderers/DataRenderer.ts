import { AudioData, HandData } from '../../App';
import { DataConfig } from '../../config/DataRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { SPECTRUM_LABELS, spectrum } from '../../audio/spectrum';
import { currentBpm } from '../../motion/tempo';
import { CITY, Hourly, air, weather } from '../../data/daily';
import { moonAltitude, moonPhase, sunPosition, sunTimes } from '../../data/sky';
import { Playing, turnFrom } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DATA BLOOM
 * ═══════════════════════════════════════════════════════════════════════════
 * Real numbers of the day, drawn as a glowing heat map — violet at the edge,
 * blue, cyan, a pale yellow heart — over fine circles and spokes, each part
 * carrying its little number and its name. The data takes turns:
 *
 *   Sound    the music now, in twelve bands from the sub to the air, live
 *   Sky      the moon lit and its age, the sun's height and bearing,
 *            sunrise, sunset, the hours of light and of night — worked out
 *            here, so it needs no internet
 *   Weather  the city's day hour by hour: temperature, rain chance, wind,
 *            humidity, clouds — the hour now marked
 *   Air      the city's air hour by hour: the European index, PM2.5, PM10,
 *            nitrogen dioxide, ozone
 *
 * Weather and air are fetched now and then and kept (data/daily.ts): with
 * the Wi-Fi gone they show what was last fetched.
 *
 * Three shapes, as the reference has them: Bloom (petals round a heart),
 * Rings (an arc per value, round from the top) and Radar (a wedge per
 * value). They change with the data, and on a clap.
 *
 * The glow is the shapes drawn white, blurred, small, and read through a
 * colour ramp — a heat map, so where shapes meet the colour runs through
 * cyan and back to yellow. The colour panel turns the ramp round the wheel.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof DataConfig;

interface Item {
  label: string;
  value: string;
  /** How big it draws, 0 to 1. */
  norm: number;
}
interface View {
  id: string;
  title: string;
  subtitle: string;
  items: Item[];
  /** The item that is "now" — the hour, in the hourly views. */
  now?: number;
}

const BLOOM = 0;
const RINGS = 1;
const RADAR = 2;

/** The ramp, edge to heart: [position, hue, saturation, lightness]. */
const RAMP: [number, number, number, number][] = [
  [0.0, 285, 0.9, 0.0],
  [0.1, 285, 0.85, 0.32],
  [0.24, 278, 0.95, 0.66],
  [0.38, 232, 1, 0.6],
  [0.52, 192, 1, 0.55],
  [0.66, 160, 0.85, 0.72],
  [0.82, 62, 1, 0.82],
  [1.0, 55, 1, 0.95],
];

const LABEL_LIGHT = 'rgba(238, 232, 250, 0.92)';
const LABEL_DARK = '#4a1022';
const FONT = '"Helvetica Neue", Helvetica, Arial, sans-serif';

const WEATHER_METRICS = [
  { key: 'temperature_2m', title: 'Temperature', unit: '°', per: '°C by hour' },
  { key: 'precipitation_probability', title: 'Rain chance', unit: '%', per: '% by hour' },
  { key: 'wind_speed_10m', title: 'Wind', unit: '', per: 'km/h by hour' },
  { key: 'relative_humidity_2m', title: 'Humidity', unit: '%', per: '% by hour' },
  { key: 'cloud_cover', title: 'Clouds', unit: '%', per: '% by hour' },
];
const AIR_METRICS = [
  { key: 'european_aqi', title: 'Air quality', unit: '', per: 'European index by hour' },
  { key: 'pm2_5', title: 'PM2.5', unit: '', per: 'µg/m³ by hour' },
  { key: 'pm10', title: 'PM10', unit: '', per: 'µg/m³ by hour' },
  { key: 'nitrogen_dioxide', title: 'NO₂', unit: '', per: 'µg/m³ by hour' },
  { key: 'ozone', title: 'Ozone', unit: '', per: 'µg/m³ by hour' },
];
/** The least each scale reaches, so a clean day reads as small, not as full. */
const FLOOR: Record<string, number> = {
  precipitation_probability: 100, relative_humidity_2m: 100, cloud_cover: 100,
  wind_speed_10m: 30, european_aqi: 60, pm2_5: 25, pm10: 40, nitrogen_dioxide: 60, ozone: 120,
};

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const pad = (n: number) => String(n).padStart(2, '0');

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h = ((h % 360) + 360) % 360;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  const [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x]
    : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return [(r + m) * 255, (g + m) * 255, (b + m) * 255];
}

/** The hour and date in the city, whatever the computer's zone. */
function cityNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: CITY.zone, hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short', hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  return { hour: Number(get('hour')), minute: Number(get('minute')), date: `${get('day')} ${get('month')}` };
}

function clockOf(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', { timeZone: CITY.zone, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(date);
}

/**
 * The 24 hours as 12 two-hour rings: 24 rings are too fine to read. Each
 * ring is the pair's average, labelled by its first hour.
 */
function inPairs(view: View): View {
  const items: Item[] = [];
  for (let i = 0; i < view.items.length; i += 2) {
    const a = view.items[i];
    const b = view.items[i + 1] ?? a;
    const num = (s: string) => parseFloat(s);
    const unit = a.value.replace(/^-?[\d.]+/, '');
    const mean = (num(a.value) + num(b.value)) / 2;
    items.push({ label: a.label, value: `${Math.round(mean)}${unit}`, norm: (a.norm + b.norm) / 2 });
  }
  return { ...view, id: `${view.id}:2h`, items, now: view.now === undefined ? undefined : Math.floor(view.now / 2) };
}

export class DataRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = DataConfig;
  private playing = new Playing(0.6);

  // The glow: shapes drawn small and white, then read through the ramp.
  private mask = document.createElement('canvas');
  private maskCtx = this.mask.getContext('2d', { willReadFrequently: true })!;
  private tiny = document.createElement('canvas');
  private colour = document.createElement('canvas');
  private colourCtx = this.colour.getContext('2d')!;
  private canFilter = 'filter' in CanvasRenderingContext2D.prototype;
  private lut = new Uint32Array(256);
  private lutTurn = NaN;

  // What is up, and what is leaving.
  private auto = { source: 0, weather: 0, air: 0 };
  private viewId = 'sound';
  private shape = BLOOM;
  private leaving: { viewId: string; shape: number } | null = null;
  private fade = 1;
  private since = 0;
  private lastBurst = 0;
  private shown = new Map<string, Float32Array>();

  private time = 0;
  private spin = 0;
  private pulse = 0;
  private breath = 0;
  private handOn = 0;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.pickShape();
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(DataConfig, values);
    this.pickShape();
  }

  destroy() {
    this.shown.clear();
  }

  // ── the data ──────────────────────────────────────────────────────────────

  private soundView(): View {
    const bands = spectrum();
    const bpm = currentBpm();
    const items = SPECTRUM_LABELS.map((label, i) => {
      // No microphone: a slow idle swell so the shape still lives.
      const v = bands ? bands[i] : 0.25 + 0.2 * Math.sin(this.time * 0.6 + i * 0.9);
      return { label, value: String(Math.round(v * 100)), norm: 0.1 + 0.9 * clamp01(v) };
    });
    return {
      id: 'sound',
      title: 'Sound',
      subtitle: bands ? `live${bpm ? ` · ${Math.round(bpm)} BPM` : ''}` : 'turn the mic on',
      items,
    };
  }

  private skyView(): View {
    const now = new Date();
    const { lat, lng } = CITY;
    const moon = moonPhase(now);
    const sun = sunPosition(now, lat, lng);
    const times = sunTimes(now, lat, lng);
    const moonAlt = moonAltitude(now, lat, lng);
    const start = new Date(now.getFullYear(), 0, 0);
    const day = Math.floor((now.valueOf() - start.valueOf()) / 86400000);
    const minutesOf = (d: Date) => {
      const [h, m] = clockOf(d).split(':').map(Number);
      return h * 60 + m;
    };
    const light = times ? (times.set.valueOf() - times.rise.valueOf()) / 3600000 : sun.altitude > 0 ? 24 : 0;
    const items: Item[] = [
      { label: 'Moon lit', value: `${Math.round(moon.lit * 100)}%`, norm: moon.lit },
      { label: 'Moon age', value: `${(moon.phase * 29.53).toFixed(1)}d`, norm: moon.phase },
      { label: 'Moon height', value: `${Math.round(moonAlt)}°`, norm: (moonAlt + 90) / 180 },
      { label: 'Sun height', value: `${Math.round(sun.altitude)}°`, norm: (sun.altitude + 90) / 180 },
      { label: 'Sun bearing', value: `${Math.round(sun.bearing)}°`, norm: sun.bearing / 360 },
      { label: 'Sunrise', value: times ? clockOf(times.rise) : '—', norm: times ? minutesOf(times.rise) / 1440 : 0 },
      { label: 'Sunset', value: times ? clockOf(times.set) : '—', norm: times ? minutesOf(times.set) / 1440 : 0 },
      { label: 'Daylight', value: `${light.toFixed(1)}h`, norm: light / 24 },
      { label: 'Night', value: `${(24 - light).toFixed(1)}h`, norm: (24 - light) / 24 },
      { label: 'Day of year', value: String(day), norm: day / 366 },
    ].map((i) => ({ ...i, norm: 0.1 + 0.9 * clamp01(i.norm) }));
    return { id: 'sky', title: 'Sky', subtitle: `${CITY.name} · ${cityNow().date}`, items };
  }

  private hourlyView(kind: 'weather' | 'air', index: number): View | null {
    const data: Hourly | null = kind === 'weather' ? weather() : air();
    const metrics = kind === 'weather' ? WEATHER_METRICS : AIR_METRICS;
    const metric = metrics[index % metrics.length];
    const series = data?.series.find((s) => s.key === metric.key);
    if (!data || !series || series.values.length < 2) return null;
    const values = series.values;
    const lo = metric.key === 'temperature_2m' ? Math.min(...values) - 2 : 0;
    const hi = metric.key === 'temperature_2m' ? Math.max(...values) + 1 : Math.max(FLOOR[metric.key] ?? 1, ...values);
    const now = cityNow();
    const [y, m, d] = data.date.split('-').map(Number);
    const date = new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' });
    return {
      id: `${kind}:${metric.key}`,
      title: metric.title,
      subtitle: `${CITY.name} · ${metric.per} · ${date} · Open-Meteo`,
      items: values.map((v, h) => ({
        label: `${pad(h)}h`,
        value: `${Math.round(v)}${metric.unit}`,
        norm: 0.12 + 0.88 * clamp01((v - lo) / Math.max(0.001, hi - lo)),
      })),
      now: date === now.date ? now.hour : undefined,
    };
  }

  private viewFor(id: string): View {
    if (id === 'sky') return this.skyView();
    const [kind, key] = id.split(':');
    if (kind === 'weather' || kind === 'air') {
      const metrics = kind === 'weather' ? WEATHER_METRICS : AIR_METRICS;
      const view = this.hourlyView(kind, Math.max(0, metrics.findIndex((m) => m.key === key)));
      if (view) return view;
    }
    return this.soundView();
  }

  /** The next data to show, by the Source slider or in turn. */
  private nextViewId(): string {
    const source = Math.round(this.cfg.data.source);
    const pick = (s: number): string | null => {
      if (s === 1) return 'sound';
      if (s === 2) return 'sky';
      if (s === 3) {
        const v = this.hourlyView('weather', this.auto.weather++);
        return v?.id ?? null;
      }
      if (s === 4) {
        const v = this.hourlyView('air', this.auto.air++);
        return v?.id ?? null;
      }
      return null;
    };
    if (source > 0) return pick(source) ?? 'sound';
    for (let tries = 0; tries < 4; tries++) {
      this.auto.source = (this.auto.source % 4) + 1;
      const id = pick(this.auto.source);
      if (id) return id;
    }
    return 'sound';
  }

  private nextShape() {
    return (this.shape + 1) % 3;
  }

  private pickShape() {
    const fixed = Math.round(this.cfg.data.shape);
    if (fixed > 0 && fixed - 1 !== this.shape) this.change(this.viewId, fixed - 1);
  }

  private change(viewId: string, shape: number) {
    if (viewId === this.viewId && shape === this.shape) return;
    this.leaving = { viewId: this.viewId, shape: this.shape };
    this.viewId = viewId;
    this.shape = shape;
    this.fade = 0;
    this.since = 0;
  }

  // ── a frame ───────────────────────────────────────────────────────────────

  render(handData: HandData, colors: string[], audioData?: AudioData) {
    const { canvas, ctx, cfg } = this;
    const width = canvas.width;
    const height = canvas.height;
    if (width === 0 || height === 0) return;

    const play = this.playing;
    play.read(handData, audioData);
    const { dt } = play;
    const step = Math.max(0, play.step);
    this.time += step;
    this.spin += step * 0.06 * cfg.look.spin;
    this.pulse = Math.max(this.pulse * Math.exp(-dt * 7), play.bump * cfg.sound.beat);
    this.breath += (play.bass * cfg.sound.bass - this.breath) * (1 - Math.exp(-dt * 4));
    const handed = handData.left || handData.right ? 1 : 0;
    this.handOn += (handed - this.handOn) * (1 - Math.exp(-dt * 4));

    // Turns: new data every so often — on a kick when there is one — and a
    // clap changes the shape.
    const autoShape = Math.round(cfg.data.shape) === 0;
    this.since += dt;
    const every = Math.max(5, cfg.data.every);
    // A Data slider set to one source that is not up yet — just moved, or
    // its first download still on the way — goes to it as soon as it can.
    const wanted = ['', 'sound', 'sky', 'weather', 'air'][Math.round(cfg.data.source)] ?? '';
    const waiting = wanted !== '' && !this.viewId.startsWith(wanted) && this.since > 1;
    if (waiting || (this.since > every && (play.bump > 0.4 || this.since > every + 4))) {
      const next = this.nextViewId();
      this.change(next, autoShape ? this.nextShape() : this.shape);
      this.since = 0;
    }
    const burst = play.burst;
    if (cfg.hands.clap >= 0.5 && autoShape && burst > 0.6 && this.lastBurst <= 0.6 && this.fade > 0.6) {
      this.change(this.viewId, this.nextShape());
    }
    this.lastBurst = burst;
    this.fade = Math.min(1, this.fade + dt / 1.4);
    if (this.fade >= 1) this.leaving = null;

    const cx = width / 2;
    const cy = height / 2;
    const R = Math.min(width, height) * 0.4 * cfg.look.size * (1 + this.pulse * 0.035);

    const views: { view: View; shape: number; alpha: number; values: Float32Array; focus: number }[] = [];
    const ease = (t: number) => t * t * (3 - 2 * t);
    const parts = this.leaving
      ? [{ ...this.leaving, alpha: 1 - ease(this.fade) }, { viewId: this.viewId, shape: this.shape, alpha: ease(this.fade) }]
      : [{ viewId: this.viewId, shape: this.shape, alpha: 1 }];
    for (const part of parts) {
      let view = this.viewFor(part.viewId);
      if (part.shape === RINGS && view.items.length > 14) view = inPairs(view);
      const values = this.eased(view, dt);
      const focus = this.focusOf(view, part.shape, play.aim, height);
      views.push({ view, shape: part.shape, alpha: part.alpha, values, focus });
    }

    // The glow.
    this.drawGlow(views, width, height, cx, cy, R, colors);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(this.colour, 0, 0, width, height);

    // The fine lines and the little numbers.
    for (const v of views) this.drawGrid(v.view, v.shape, v.alpha, cx, cy, R);
    for (const v of views) this.drawLabels(v.view, v.shape, v.values, v.alpha, v.focus, cx, cy, R, height);
    this.drawTitle(views, cx, cy, height);
  }

  /** Each view's values, eased toward the data so they grow in and drift. */
  private eased(view: View, dt: number): Float32Array {
    let shown = this.shown.get(view.id);
    if (!shown || shown.length !== view.items.length) {
      shown = new Float32Array(view.items.length);
      this.shown.set(view.id, shown);
    }
    const k = 1 - Math.exp(-dt * (view.id === 'sound' ? 12 : 3));
    view.items.forEach((item, i) => { shown![i] += (item.norm - shown![i]) * k; });
    return shown;
  }

  private angleOf(i: number, n: number) {
    return -Math.PI / 2 + ((i + 0.5) / n) * Math.PI * 2 + this.spin;
  }

  /** Which item the hand is over, or -1. */
  private focusOf(view: View, shape: number, aim: { x: number; y: number }, height: number): number {
    const n = view.items.length;
    if (!n || this.handOn < 0.3 || this.cfg.hands.focus <= 0) return view.now ?? -1;
    if (shape === RINGS) {
      // Up the frame, out through the rings.
      const r = clamp01((aim.y + 1) / 2);
      return Math.min(n - 1, Math.floor((1 - r) * n));
    }
    if (Math.hypot(aim.x, aim.y) < 0.12) return view.now ?? -1;
    let a = Math.atan2(-aim.y * height, aim.x * height) - this.spin + Math.PI / 2;
    a = ((a % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    return Math.floor((a / (Math.PI * 2)) * n) % n;
  }

  /** How big an item draws: its value, the beat, and the hand. */
  private sizeOf(values: Float32Array, i: number, focus: number) {
    const wobble = 1 + 0.035 * Math.sin(this.time * 1.3 + i * 1.7);
    const grow = i === focus ? 0.12 * Math.max(0.5, this.cfg.hands.focus) : 0;
    return clamp01(values[i] * wobble + grow);
  }

  private ringGeometry(n: number, R: number) {
    const outer = R * 0.98;
    const inner = R * 0.4;
    const stepR = (outer - inner) / Math.max(1, n);
    return { outer, inner, stepR };
  }

  private drawShapes(g: CanvasRenderingContext2D, v: { view: View; shape: number; values: Float32Array; focus: number }, k: number, cx: number, cy: number, R: number) {
    const n = v.view.items.length;
    if (!n) return;
    g.fillStyle = '#fff';
    g.strokeStyle = '#fff';
    if (v.shape === BLOOM) {
      g.beginPath();
      g.arc(cx * k, cy * k, R * 0.32 * k, 0, Math.PI * 2);
      g.fill();
      const scale = Math.sqrt(12 / n);
      for (let i = 0; i < n; i++) {
        const s = this.sizeOf(v.values, i, v.focus);
        const a = this.angleOf(i, n);
        const d = R * (0.36 + 0.42 * s);
        const r = R * (0.08 + 0.17 * s) * scale;
        g.beginPath();
        g.arc((cx + Math.cos(a) * d) * k, (cy + Math.sin(a) * d) * k, r * k, 0, Math.PI * 2);
        g.fill();
      }
    } else if (v.shape === RINGS) {
      const { outer, stepR } = this.ringGeometry(n, R);
      g.lineCap = 'round';
      g.lineWidth = stepR * 0.7 * k;
      for (let i = 0; i < n; i++) {
        const s = this.sizeOf(v.values, i, v.focus);
        const r = outer - (i + 0.5) * stepR;
        g.beginPath();
        g.arc(cx * k, cy * k, r * k, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * 0.97 * s);
        g.stroke();
      }
    } else {
      const span = ((Math.PI * 2) / n) * 0.84;
      for (let i = 0; i < n; i++) {
        const s = this.sizeOf(v.values, i, v.focus);
        const a = this.angleOf(i, n);
        const r0 = R * 0.36;
        const r1 = R * (0.36 + 0.62 * s);
        g.beginPath();
        g.arc(cx * k, cy * k, r1 * k, a - span / 2, a + span / 2);
        g.arc(cx * k, cy * k, r0 * k, a + span / 2, a - span / 2, true);
        g.closePath();
        g.fill();
      }
    }
  }

  private drawGlow(
    views: { view: View; shape: number; alpha: number; values: Float32Array; focus: number }[],
    width: number, height: number, cx: number, cy: number, R: number, colors: string[],
  ) {
    const { mask, maskCtx: g, cfg } = this;
    const k = Math.min(1, 560 / width);
    const mw = Math.max(16, Math.round(width * k));
    const mh = Math.max(16, Math.round(height * k));
    if (mask.width !== mw || mask.height !== mh) {
      mask.width = mw;
      mask.height = mh;
      this.colour.width = mw;
      this.colour.height = mh;
    }
    g.globalCompositeOperation = 'source-over';
    g.globalAlpha = 1;
    g.filter = 'none';
    g.fillStyle = '#000';
    g.fillRect(0, 0, mw, mh);

    for (const v of views) {
      // How far it glows: a share of the chart, less for the thin rings.
      const n = Math.max(1, v.view.items.length);
      const base = v.shape === RINGS ? this.ringGeometry(n, R).stepR * 0.22 : R * (v.shape === BLOOM ? 0.055 : 0.05);
      const blur = base * cfg.look.glow * (1 + this.breath * 0.5) * k;
      g.globalAlpha = v.alpha;
      if (this.canFilter) {
        g.filter = `blur(${blur.toFixed(1)}px)`;
        this.drawShapes(g, v, k, cx, cy, R);
        g.filter = 'none';
      } else {
        // No canvas filter (Safari): draw it smaller still and let the
        // scaling soften it.
        const t = Math.max(0.1, Math.min(1, 2 / Math.max(1, blur)));
        const tiny = this.tiny;
        tiny.width = Math.max(8, Math.round(mw * t));
        tiny.height = Math.max(8, Math.round(mh * t));
        const tg = tiny.getContext('2d')!;
        tg.fillStyle = '#000';
        tg.fillRect(0, 0, tiny.width, tiny.height);
        this.drawShapes(tg, v, k * t, cx, cy, R);
        g.imageSmoothingEnabled = true;
        g.drawImage(tiny, 0, 0, mw, mh);
      }
    }
    g.globalAlpha = 1;

    // Read through the ramp.
    this.buildLut(colors);
    const image = g.getImageData(0, 0, mw, mh);
    const px = new Uint32Array(image.data.buffer);
    const lut = this.lut;
    for (let i = 0; i < px.length; i++) px[i] = lut[px[i] & 255];
    this.colourCtx.putImageData(image, 0, 0);
  }

  /** The ramp as 256 colours, turned by the colour panel. */
  private buildLut(colors: string[]) {
    const turn = turnFrom(colors);
    const key = turn.hue * 1000 + turn.sat;
    if (key === this.lutTurn) return;
    this.lutTurn = key;
    const little = new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44;
    for (let v = 0; v < 256; v++) {
      const t = v / 255;
      let j = 0;
      while (j < RAMP.length - 2 && RAMP[j + 1][0] < t) j++;
      const [p0, h0, s0, l0] = RAMP[j];
      const [p1, h1, s1, l1] = RAMP[j + 1];
      const f = clamp01((t - p0) / (p1 - p0));
      const [r, g, b] = hslToRgb(h0 + (h1 - h0) * f + turn.hue, Math.min(1, (s0 + (s1 - s0) * f) * turn.sat), l0 + (l1 - l0) * f);
      const R = Math.round(r) & 255;
      const G = Math.round(g) & 255;
      const B = Math.round(b) & 255;
      this.lut[v] = little ? ((255 << 24) | (B << 16) | (G << 8) | R) >>> 0 : ((R << 24) | (G << 16) | (B << 8) | 255) >>> 0;
    }
  }

  private drawGrid(view: View, shape: number, alpha: number, cx: number, cy: number, R: number) {
    const ctx = this.ctx;
    const a = this.cfg.look.grid * alpha;
    if (a <= 0.01) return;
    const n = view.items.length;
    ctx.save();
    ctx.strokeStyle = 'rgba(225, 215, 245, 1)';
    ctx.lineWidth = 1;
    ctx.globalAlpha = a * 0.7;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([1.5, 3.5]);
    ctx.globalAlpha = a * 0.55;
    if (shape === RINGS) {
      const { outer, stepR } = this.ringGeometry(n, R);
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, outer - (i + 0.5) * stepR, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.moveTo(cx - R, cy); ctx.lineTo(cx + R, cy);
      ctx.moveTo(cx, cy - R); ctx.lineTo(cx, cy + R);
      ctx.stroke();
    } else {
      for (const r of [0.36, 0.68]) {
        ctx.beginPath();
        ctx.arc(cx, cy, R * r, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.setLineDash([]);
      ctx.globalAlpha = a * 0.35;
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const ang = this.angleOf(i, n) - Math.PI / n;
        ctx.moveTo(cx + Math.cos(ang) * R * 0.36, cy + Math.sin(ang) * R * 0.36);
        ctx.lineTo(cx + Math.cos(ang) * R, cy + Math.sin(ang) * R);
      }
      ctx.stroke();
    }
    ctx.restore();
  }

  private drawLabels(view: View, shape: number, values: Float32Array, alpha: number, focus: number, cx: number, cy: number, R: number, height: number) {
    const ctx = this.ctx;
    const a = this.cfg.look.labels * alpha;
    const n = view.items.length;
    if (a <= 0.01 || !n) return;
    const fs = Math.max(8, height * 0.0125);
    ctx.save();
    ctx.textBaseline = 'middle';
    if (shape === RINGS) {
      const { outer, stepR } = this.ringGeometry(n, R);
      const size = Math.max(6, Math.min(fs, stepR * 0.9));
      ctx.textAlign = 'right';
      for (let i = 0; i < n; i++) {
        if (!this.labelled(view, i, focus, 3)) continue;
        const item = view.items[i];
        const y = cy - (outer - (i + 0.5) * stepR);
        const lit = i === focus;
        ctx.globalAlpha = a * (lit ? 1 : 0.8);
        ctx.fillStyle = LABEL_LIGHT;
        ctx.font = `${lit ? 600 : 400} ${size}px ${FONT}`;
        ctx.fillText(`${item.label}  ${item.value}`, cx - size * 0.6, y);
      }
    } else {
      ctx.textAlign = 'center';
      const scale = Math.sqrt(12 / n);
      for (let i = 0; i < n; i++) {
        if (shape === BLOOM && !this.labelled(view, i, focus, 2)) continue;
        const item = view.items[i];
        const ang = this.angleOf(i, n);
        const s = this.sizeOf(values, i, focus);
        const lit = i === focus;
        const size = fs * (n > 16 ? 0.85 : 1) * (lit ? 1.15 : 1);
        let d: number;
        if (shape === BLOOM) {
          d = R * (0.36 + 0.42 * s);
          ctx.fillStyle = LABEL_DARK;
          // Small petals cannot hold their label: it goes outside them.
          if (R * (0.08 + 0.17 * s) * scale < size * 1.6) {
            d += R * (0.08 + 0.17 * s) * scale + size * 1.4;
            ctx.fillStyle = LABEL_LIGHT;
          }
        } else {
          d = R * 1.1 + size;
          ctx.fillStyle = LABEL_LIGHT;
        }
        const x = cx + Math.cos(ang) * d;
        const y = cy + Math.sin(ang) * d;
        ctx.globalAlpha = a * (lit ? 1 : 0.85);
        ctx.font = `${lit ? 700 : 500} ${size}px ${FONT}`;
        ctx.fillText(item.value, x, y - size * 0.6);
        ctx.font = `${lit ? 600 : 400} ${size * 0.92}px ${FONT}`;
        ctx.fillText(item.label, x, y + size * 0.6);
      }
    }
    ctx.restore();
  }

  /** With many items, only every few carry a label — and the hour now, and the one under the hand. */
  private labelled(view: View, i: number, focus: number, every: number) {
    if (view.items.length <= 16) return true;
    return i % every === 0 || i === focus || i === view.now;
  }

  private drawTitle(views: { view: View; shape: number; alpha: number }[], cx: number, cy: number, height: number) {
    const ctx = this.ctx;
    const fs = Math.max(14, height * 0.034);
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (const { view, shape, alpha } of views) {
      // Over the bloom's bright heart the words are dark, as the reference has them.
      const dark = shape === BLOOM;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = dark ? LABEL_DARK : LABEL_LIGHT;
      ctx.font = `500 ${fs}px ${FONT}`;
      ctx.fillText(view.title, cx, cy - fs * 0.25);
      ctx.globalAlpha = alpha * 0.8;
      ctx.font = `400 ${Math.max(8, fs * 0.32)}px ${FONT}`;
      ctx.fillText(view.subtitle, cx, cy + fs * 0.55);
    }
    ctx.restore();
  }
}
