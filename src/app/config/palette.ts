/**
 * The palette a layer draws in, derived from a hue, a saturation and a mode.
 *
 * Its own module because each layer now carries its own three, and both the
 * colour controls and the canvas need to turn them into the same colours.
 */

export type ColorMode = 'black' | 'contrast' | 'grayscale';

export function hslToHex(h: number, s: number, l: number): string {
  const sat = s / 100;
  const light = l / 100;
  const c = (1 - Math.abs(2 * light - 1)) * sat;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = light - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  const toHex = (v: number) =>
    Math.round((v + m) * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/** The four colours a renderer is handed, in the order they expect them. */
export function generateColors(hue: number, saturation: number, mode: ColorMode): string[] {
  if (mode === 'grayscale') return ['#FFFFFF', '#000000', '#FFFFFF', '#000000'];

  if (mode === 'black') {
    // One colour: the hue, white, and two shades of it for depth.
    return [
      hslToHex(hue, saturation, 50),
      '#FFFFFF',
      hslToHex(hue, saturation * 0.6, 70),
      hslToHex(hue, saturation * 0.8, 35),
    ];
  }

  // Two colours: the hue and its complement.
  const base = hslToHex(hue, saturation, 50);
  const second = hslToHex((hue + 180) % 360, saturation, 50);
  return [base, second, base, second];
}
