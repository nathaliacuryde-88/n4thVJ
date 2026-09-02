/**
 * A two-digit hex alpha suffix for `#rrggbb` colour strings, clamped to 00–ff.
 *
 * Canvas throws on a malformed colour, and `Math.floor(-0.55 * 255).toString(16)`
 * is `'-8c'` — so `'#8b5cf6' + '-8c'` takes down `addColorStop`, and with it the
 * whole animation loop. Renderers compute alpha by subtracting a per-layer fade
 * from a base opacity, which goes negative as soon as there are enough layers,
 * and that became reachable the moment those numbers got sliders.
 *
 * Takes a 0–255 value, since that is what the call sites already compute.
 */
export function alphaHex(value: number): string {
  if (!Number.isFinite(value)) return '00';
  const byte = Math.round(Math.min(255, Math.max(0, value)));
  return byte.toString(16).padStart(2, '0');
}
