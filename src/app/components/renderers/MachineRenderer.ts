import { AudioData, Hand, HandData } from '../../App';
import { MachineConfig } from '../../config/MachineRendererConfig';
import { ParamValues, withOverrides } from '../../params/types';
import { presence, presenceAt, wantPresence } from '../../hands/presence';
import { spectrum } from '../../audio/spectrum';
import { currentBpm } from '../../motion/tempo';
import { Playing } from './inflated/style';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * MACHINE VISION
 * ═══════════════════════════════════════════════════════════════════════════
 * What the tool itself sees and hears, shown as it has it.
 *
 * Every other visual uses the camera and the microphone and hides the fact.
 * This one shows the workings: the camera's picture reduced to a field of
 * dots, the person picked out of it, a box round them, each hand found and
 * its twenty-one joints numbered and joined, and beside it in plain words
 * what the machine has concluded — one person, two hands, five fingers,
 * open; a hundred and twenty-four beats a minute; a kick, now.
 *
 * It is the end of the arc: the human, looked at by what the human made.
 *
 * THE PICTURE COMES APART. A build-up loosens the dots from their places, a
 * drop or a clap throws them into a cloud, and they find their way back —
 * the picture is only ever a reading, and a reading can dissolve.
 *
 * With the camera off there is no picture, and it shows only what it hears.
 * ═══════════════════════════════════════════════════════════════════════════
 */

type Cfg = typeof MachineConfig;

const BONES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12],
  [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [17, 18], [18, 19], [19, 20], [0, 17],
];
const TIPS = [4, 8, 12, 16, 20];

function rgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [parseInt(full.slice(0, 2), 16) || 0, parseInt(full.slice(2, 4), 16) || 0, parseInt(full.slice(4, 6), 16) || 0];
}

/** A box with soft corners. */
function softBox(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

export class MachineRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cfg: Cfg = MachineConfig;
  private playing = new Playing(0.6);
  private video: HTMLVideoElement | null = null;
  private sample = document.createElement('canvas');
  private sampleCtx: CanvasRenderingContext2D | null;
  private release: () => void;
  private real = 0;
  /** How far the picture has come apart, 0 whole to 1 and more a cloud. */
  private apart = 0;
  private swell = 0;
  private lastDrop = 0;
  private pulse = { kick: 0, snare: 0, hat: 0 };

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.sampleCtx = this.sample.getContext('2d', { willReadFrequently: true });
    this.release = wantPresence();
  }

  setParams(values: ParamValues) {
    this.cfg = withOverrides(MachineConfig, values);
  }

  setVideoElement(video: HTMLVideoElement) {
    this.video = video;
  }

  destroy() {
    this.release();
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
    const t = this.real;
    const unit = H / 720;

    const kick = Math.max(play.kick, play.bump) * cfg.sound.beat;
    this.swell = Math.max(this.swell * Math.exp(-dt * 6), kick);
    if (play.clapped) this.apart = Math.max(this.apart, 1.3 * play.clapStrength * cfg.hands.clap);
    if (play.drop > 0.5 && this.lastDrop <= 0.5) this.apart = Math.max(this.apart, 1.1 * cfg.sound.arc);
    this.lastDrop = play.drop;
    // It settles back on its own, but a build-up holds it loose.
    const loose = play.build * 0.45 * cfg.sound.arc;
    this.apart += (loose - this.apart) * (1 - Math.exp(-dt * (this.apart > loose ? 1.3 : 3)));
    const apart = this.apart * cfg.picture.dissolve;
    for (const key of ['kick', 'snare', 'hat'] as const) {
      this.pulse[key] = Math.max(this.pulse[key] * Math.exp(-dt * 7), audioData?.[key] ?? 0);
    }

    // ── read the camera ──────────────────────────────────────────────────
    const columns = Math.round(48 + 80 * Math.min(1, Math.max(0, cfg.picture.detail)));
    const rows = Math.max(8, Math.round(columns * H / W));
    const cell = W / columns;
    let pixels: Uint8ClampedArray | null = null;
    const video = this.video;
    const s = this.sampleCtx;
    if (s && video && video.readyState >= 2 && video.videoWidth > 0 && cfg.picture.camera > 0) {
      if (this.sample.width !== columns || this.sample.height !== rows) {
        this.sample.width = columns;
        this.sample.height = rows;
      }
      try {
        // Mirrored, as the hands are: her right is on the right.
        s.setTransform(-1, 0, 0, 1, columns, 0);
        s.drawImage(video, 0, 0, columns, rows);
        s.setTransform(1, 0, 0, 1, 0, 0);
        pixels = s.getImageData(0, 0, columns, rows).data;
      } catch {
        pixels = null;
      }
    }
    const mask = presence();

    // ── the picture, in dots ─────────────────────────────────────────────
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);

    const person = new Path2D();
    const ground = new Path2D();
    const scan = (t * 0.11) % 1.2 - 0.1;
    let found = 0;
    let sure = 0;
    let left = 1, right = 0, top = 1, bottom = 0;
    for (let r = 0; r < rows; r++) {
      const v = (r + 0.5) / rows;
      for (let c = 0; c < columns; c++) {
        const u = (c + 0.5) / columns;
        const there = mask ? presenceAt(mask, u, v) : 0;
        if (there > 0.5) {
          found++;
          sure += there;
          if (u < left) left = u;
          if (u > right) right = u;
          if (v < top) top = v;
          if (v > bottom) bottom = v;
        }
        let light: number;
        if (pixels) {
          const k = (r * columns + c) * 4;
          light = (pixels[k] * 0.299 + pixels[k + 1] * 0.587 + pixels[k + 2] * 0.114) / 255;
        } else {
          // No picture: the person alone, or a slow field so it is not blank.
          light = mask ? there * 0.8 : 0.25 + 0.25 * Math.sin(u * 9 + t * 0.4) * Math.sin(v * 7 - t * 0.3);
        }
        // The band that passes down the frame, reading it.
        const read = Math.exp(-Math.pow((v - scan) / 0.03, 2)) * 0.35;
        const size = cell * 0.5 * Math.min(1, (0.1 + 0.9 * Math.pow(light, 0.8)) * cfg.picture.camera + read) * (1 + 0.3 * this.swell);
        if (size < 0.35) continue;
        let x = u * W;
        let y = v * H;
        if (apart > 0.005) {
          // Each dot has its own way out, and its own hurry.
          const h1 = Math.sin(c * 127.1 + r * 311.7) * 43758.5453;
          const h2 = Math.sin(c * 269.5 + r * 183.3) * 43758.5453;
          const angle = (h1 - Math.floor(h1)) * Math.PI * 2 + t * 0.3;
          const far = (0.5 + (h2 - Math.floor(h2)) * 5) * cell * apart * 2.2;
          x += Math.cos(angle) * far;
          y += Math.sin(angle) * far;
        }
        const path = there > 0.5 ? person : ground;
        path.moveTo(x + size, y);
        path.arc(x, y, size, 0, Math.PI * 2);
      }
    }
    // Every colour from the colour bar: the room in its second colour, the
    // person and everything read off them in its first.
    const [cr, cg, cb] = rgb(colors[0] ?? '#7fd8ff');
    const [sr, sg, sb] = rgb(colors[1] ?? colors[0] ?? '#9aa0b0');
    const pale = (v: number, k: number) => Math.round(v + (255 - v) * k);
    ctx.fillStyle = `rgb(${pale(sr, 0.25)},${pale(sg, 0.25)},${pale(sb, 0.25)})`;
    ctx.globalAlpha = 0.45;
    ctx.fill(ground);
    ctx.fillStyle = `rgb(${pale(cr, 0.12)},${pale(cg, 0.12)},${pale(cb, 0.12)})`;
    ctx.globalAlpha = 0.95;
    ctx.fill(person);

    // ── what it has made of it ───────────────────────────────────────────
    const marks = cfg.reading.marks;
    const words = cfg.reading.words;
    const ink = `rgb(${pale(cr, 0.45)},${pale(cg, 0.45)},${pale(cb, 0.45)})`;
    const bright = `rgb(${pale(cr, 0.7)},${pale(cg, 0.7)},${pale(cb, 0.7)})`;
    const font = Math.max(9, Math.round(11 * unit));
    ctx.font = `500 ${font}px ui-monospace, SFMono-Regular, Menlo, monospace`;
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    const label = (text: string, x: number, y: number) => {
      const w = ctx.measureText(text).width + 10 * unit;
      const h = font + 7 * unit;
      const lx = Math.max(4, Math.min(W - w - 4, x));
      const ly = Math.max(4, Math.min(H - h - 4, y));
      ctx.globalAlpha = 0.85 * words;
      ctx.fillStyle = '#000';
      softBox(ctx, lx, ly, w, h, 5 * unit);
      ctx.fill();
      ctx.fillStyle = ink;
      ctx.fillText(text, lx + 5 * unit, ly + h / 2 + 0.5);
    };

    const persons = found > rows * columns * 0.01 ? 1 : 0;
    if (persons && marks > 0.01) {
      const pad = 0.012;
      ctx.globalAlpha = 0.7 * marks;
      ctx.strokeStyle = ink;
      ctx.lineWidth = Math.max(1, 1.4 * unit);
      softBox(ctx, (left - pad) * W, (top - pad) * H, (right - left + pad * 2) * W, (bottom - top + pad * 2) * H, 14 * unit);
      ctx.stroke();
      if (words > 0.01) label(`person  ${(sure / found).toFixed(2)}`, (left - pad) * W, (top - pad) * H - font - 12 * unit);
    }

    const describe = (hand: Hand) =>
      `${hand.fingerCount ?? 0} finger${hand.fingerCount === 1 ? '' : 's'} · ${hand.gesture === 'none' ? 'half open' : hand.gesture} · ${(hand.openness ?? 0).toFixed(2)}`;
    const hands: [string, Hand | null][] = [['left hand', handData.left], ['right hand', handData.right]];
    let seenHands = 0;
    for (const [name, hand] of hands) {
      // Only hands that are really there: the stand-in figure is never drawn as one.
      const points = handData.synthetic ? undefined : hand?.landmarks;
      if (!hand || !points || points.length < 21) continue;
      seenHands++;
      if (marks <= 0.01) continue;
      let x0 = 1, x1 = 0, y0 = 1, y1 = 0;
      for (const p of points) {
        if (p.x < x0) x0 = p.x;
        if (p.x > x1) x1 = p.x;
        if (p.y < y0) y0 = p.y;
        if (p.y > y1) y1 = p.y;
      }
      ctx.strokeStyle = bright;
      ctx.lineWidth = Math.max(1, 1.5 * unit);
      ctx.globalAlpha = 0.8 * marks;
      ctx.beginPath();
      for (const [a, b] of BONES) {
        ctx.moveTo(points[a].x * W, points[a].y * H);
        ctx.lineTo(points[b].x * W, points[b].y * H);
      }
      ctx.stroke();
      ctx.fillStyle = bright;
      ctx.beginPath();
      for (const p of points) {
        ctx.moveTo(p.x * W + 3 * unit, p.y * H);
        ctx.arc(p.x * W, p.y * H, 3 * unit, 0, Math.PI * 2);
      }
      ctx.fill();
      const pad = 0.02;
      ctx.strokeStyle = ink;
      ctx.globalAlpha = 0.75 * marks;
      softBox(ctx, (x0 - pad) * W, (y0 - pad) * H, (x1 - x0 + pad * 2) * W, (y1 - y0 + pad * 2) * H, 12 * unit);
      ctx.stroke();
      if (words > 0.01) {
        // The fingertips by their numbers, as the model counts them.
        ctx.fillStyle = ink;
        ctx.globalAlpha = 0.8 * words;
        for (const i of TIPS) ctx.fillText(String(i), points[i].x * W + 6 * unit, points[i].y * H - 7 * unit);
        label(`${name}  ${describe(hand)}`, (x0 - pad) * W, (y1 + pad) * H + 6 * unit);
      }
    }
    if (handData.left && handData.right && marks > 0.01 && !handData.synthetic) {
      const a = handData.left.position;
      const b = handData.right.position;
      ctx.globalAlpha = 0.45 * marks;
      ctx.strokeStyle = ink;
      ctx.setLineDash([4 * unit, 6 * unit]);
      ctx.beginPath();
      ctx.moveTo(a.x * W, a.y * H);
      ctx.lineTo(b.x * W, b.y * H);
      ctx.stroke();
      ctx.setLineDash([]);
      if (words > 0.01) label(`${(handData.distanceBetweenHands ?? 0).toFixed(2)} apart${handData.clapping ? ' · clap' : ''}`, (a.x + b.x) / 2 * W - 40 * unit, (a.y + b.y) / 2 * H - font);
    }

    // What it sees and hears, in words, in the corner.
    if (words > 0.01) {
      const bpm = currentBpm();
      const live = !!audioData?.live;
      const lines = [
        `SEES   ${persons ? '1 person' : pixels ? 'no person' : 'no camera'} · ${seenHands} hand${seenHands === 1 ? '' : 's'}`,
        live
          ? `HEARS  ${bpm ? Math.round(bpm) + ' bpm' : 'no tempo yet'} · energy ${play.energy.toFixed(2)} · ${play.build > 0.3 ? 'building' : play.drop > 0.3 ? 'drop' : 'steady'}`
          : 'HEARS  microphone off',
      ];
      const x = 22 * unit;
      const lineHeight = font + 8 * unit;
      let y = H - 30 * unit - lines.length * lineHeight - (live ? 34 * unit : 0);
      for (const line of lines) {
        label(line, x, y);
        y += lineHeight;
      }
      if (live) {
        // The three drums it tells apart, and the spectrum it hears them in.
        const names: ['kick' | 'snare' | 'hat', string][] = [['kick', 'KICK'], ['snare', 'SNARE'], ['hat', 'HAT']];
        let dx = x + 5 * unit;
        for (const [key, name] of names) {
          ctx.globalAlpha = (0.3 + 0.7 * Math.min(1, this.pulse[key] * 1.5)) * words;
          ctx.fillStyle = ink;
          ctx.beginPath();
          ctx.arc(dx + 4 * unit, y + 12 * unit, 4 * unit * (1 + this.pulse[key]), 0, Math.PI * 2);
          ctx.fill();
          ctx.fillText(name, dx + 13 * unit, y + 12.5 * unit);
          dx += ctx.measureText(name).width + 30 * unit;
        }
        const bands = spectrum();
        if (bands) {
          ctx.globalAlpha = 0.7 * words;
          for (let i = 0; i < bands.length; i++) {
            const h = Math.max(1.5 * unit, bands[i] * 20 * unit);
            softBox(ctx, dx + 14 * unit + i * 7 * unit, y + 22 * unit - h, 4.5 * unit, h, 2 * unit);
            ctx.fill();
          }
        }
      }
    }
    ctx.globalAlpha = 1;
  }
}
