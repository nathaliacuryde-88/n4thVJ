/**
 * The music as twelve bands, low to high, for visuals that draw the spectrum
 * itself rather than the four summaries in AudioData.
 *
 * The analyser publishes each frame; a visual reads the latest. Each band is
 * scaled by its own recent loudest, so a quiet top end still moves as much as
 * a heavy bottom one — the shape shows the balance, not just the bass.
 */

/** Band edges, log-spaced from the sub to the air. */
const EDGES = [30, 55, 90, 150, 250, 400, 650, 1000, 1700, 2800, 4600, 7500, 14000];
/** Each band's label: its centre, as a VJ would say it. */
export const SPECTRUM_LABELS = ['40 Hz', '70 Hz', '120 Hz', '190 Hz', '320 Hz', '510 Hz', '800 Hz', '1.3 kHz', '2.2 kHz', '3.6 kHz', '5.9 kHz', '10 kHz'];

const levels = new Float32Array(EDGES.length - 1);
const peaks = new Float32Array(EDGES.length - 1).fill(0.2);
let at = 0;

/** Called by the analyser with the byte spectrum it just read. */
export function publishSpectrum(data: Uint8Array, sampleRate: number, gain = 1) {
  const binHz = sampleRate / 2 / data.length;
  for (let b = 0; b < levels.length; b++) {
    const from = Math.max(1, Math.floor(EDGES[b] / binHz));
    const to = Math.max(from + 1, Math.min(data.length, Math.ceil(EDGES[b + 1] / binHz)));
    let sum = 0;
    for (let i = from; i < to; i++) sum += data[i];
    const raw = Math.min(1, (sum / (to - from) / 255) * gain);
    peaks[b] = Math.max(raw, peaks[b] * 0.997, 0.08);
    levels[b] = raw / peaks[b];
  }
  at = performance.now();
}

/** The latest bands, 0 to 1 — or null when no microphone has spoken lately. */
export function spectrum(): Float32Array | null {
  return performance.now() - at < 500 ? levels : null;
}
