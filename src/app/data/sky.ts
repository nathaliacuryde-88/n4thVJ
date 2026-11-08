/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE SKY, WORKED OUT
 * ═══════════════════════════════════════════════════════════════════════════
 * Where the sun and moon are, when the sun rises and sets, how much of the
 * moon is lit — computed here from the date and a place, so it needs no
 * internet at all. The formulas are those of Vladimir Agafonkin's SunCalc
 * (BSD), after the astronomy of Jean Meeus; good to a minute or so.
 * ═══════════════════════════════════════════════════════════════════════════
 */

const RAD = Math.PI / 180;
const DAY_MS = 86400000;
const J1970 = 2440588;
const J2000 = 2451545;
const OBLIQUITY = RAD * 23.4397;

const toJulian = (date: Date) => date.valueOf() / DAY_MS - 0.5 + J1970;
const fromJulian = (j: number) => new Date((j + 0.5 - J1970) * DAY_MS);
const toDays = (date: Date) => toJulian(date) - J2000;

const rightAscension = (l: number, b: number) =>
  Math.atan2(Math.sin(l) * Math.cos(OBLIQUITY) - Math.tan(b) * Math.sin(OBLIQUITY), Math.cos(l));
const declination = (l: number, b: number) =>
  Math.asin(Math.sin(b) * Math.cos(OBLIQUITY) + Math.cos(b) * Math.sin(OBLIQUITY) * Math.sin(l));
const azimuth = (h: number, phi: number, dec: number) =>
  Math.atan2(Math.sin(h), Math.cos(h) * Math.sin(phi) - Math.tan(dec) * Math.cos(phi));
const altitude = (h: number, phi: number, dec: number) =>
  Math.asin(Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.cos(h));
const siderealTime = (d: number, lw: number) => RAD * (280.16 + 360.9856235 * d) - lw;

const solarMeanAnomaly = (d: number) => RAD * (357.5291 + 0.98560028 * d);
function eclipticLongitude(m: number) {
  const c = RAD * (1.9148 * Math.sin(m) + 0.02 * Math.sin(2 * m) + 0.0003 * Math.sin(3 * m));
  return m + c + RAD * 102.9372 + Math.PI;
}
function sunCoords(d: number) {
  const l = eclipticLongitude(solarMeanAnomaly(d));
  return { dec: declination(l, 0), ra: rightAscension(l, 0) };
}
function moonCoords(d: number) {
  const l = RAD * (218.316 + 13.176396 * d);
  const m = RAD * (134.963 + 13.064993 * d);
  const f = RAD * (93.272 + 13.22935 * d);
  const lon = l + RAD * 6.289 * Math.sin(m);
  const lat = RAD * 5.128 * Math.sin(f);
  return { ra: rightAscension(lon, lat), dec: declination(lon, lat), dist: 385001 - 20905 * Math.cos(m) };
}

/** The sun's height above the horizon and its compass bearing, in degrees. */
export function sunPosition(date: Date, lat: number, lng: number) {
  const lw = RAD * -lng;
  const phi = RAD * lat;
  const d = toDays(date);
  const c = sunCoords(d);
  const h = siderealTime(d, lw) - c.ra;
  return { altitude: altitude(h, phi, c.dec) / RAD, bearing: (azimuth(h, phi, c.dec) / RAD + 180) % 360 };
}

/** The moon's height above the horizon, in degrees. */
export function moonAltitude(date: Date, lat: number, lng: number) {
  const lw = RAD * -lng;
  const phi = RAD * lat;
  const d = toDays(date);
  const c = moonCoords(d);
  return altitude(siderealTime(d, lw) - c.ra, phi, c.dec) / RAD;
}

/** Sunrise and sunset on the day of `date`, or null in a polar day or night. */
export function sunTimes(date: Date, lat: number, lng: number): { rise: Date; set: Date } | null {
  const J0 = 0.0009;
  const lw = RAD * -lng;
  const phi = RAD * lat;
  const d = toDays(date);
  const n = Math.round(d - J0 - lw / (2 * Math.PI));
  const ds = J0 + lw / (2 * Math.PI) + n;
  const m = solarMeanAnomaly(ds);
  const l = eclipticLongitude(m);
  const dec = declination(l, 0);
  const transit = (a: number) => J2000 + a + 0.0053 * Math.sin(m) - 0.0069 * Math.sin(2 * l);
  const noon = transit(ds);
  const cosW = (Math.sin(-0.833 * RAD) - Math.sin(phi) * Math.sin(dec)) / (Math.cos(phi) * Math.cos(dec));
  if (cosW < -1 || cosW > 1) return null;
  const w = Math.acos(cosW);
  const set = transit(J0 + (w + lw) / (2 * Math.PI) + n);
  return { rise: fromJulian(noon - (set - noon)), set: fromJulian(set) };
}

/** How much of the moon is lit (0 to 1), and where it is in its month (0 new, 0.5 full). */
export function moonPhase(date: Date) {
  const d = toDays(date);
  const s = sunCoords(d);
  const m = moonCoords(d);
  const sunDist = 149598000;
  const phi = Math.acos(Math.sin(s.dec) * Math.sin(m.dec) + Math.cos(s.dec) * Math.cos(m.dec) * Math.cos(s.ra - m.ra));
  const inc = Math.atan2(sunDist * Math.sin(phi), m.dist - sunDist * Math.cos(phi));
  const angle = Math.atan2(
    Math.cos(s.dec) * Math.sin(s.ra - m.ra),
    Math.sin(s.dec) * Math.cos(m.dec) - Math.cos(s.dec) * Math.sin(m.dec) * Math.cos(s.ra - m.ra),
  );
  return { lit: (1 + Math.cos(inc)) / 2, phase: 0.5 + (0.5 * inc * (angle < 0 ? -1 : 1)) / Math.PI };
}

/** The moon's right ascension and declination, in degrees. */
export function moonRaDec(date: Date): { ra: number; dec: number } {
  const c = moonCoords(toDays(date));
  return { ra: ((c.ra / RAD) % 360 + 360) % 360, dec: c.dec / RAD };
}

/**
 * Local sidereal time, in degrees: which right ascension is on the meridian.
 */
export function siderealDegrees(date: Date, lng: number): number {
  const d = toDays(date);
  return (((280.16 + 360.9856235 * d + lng) % 360) + 360) % 360;
}

/** Height above the horizon and compass bearing, in degrees, of a point on the sky. */
export function horizontal(raDeg: number, decDeg: number, lstDeg: number, lat: number) {
  const h = (lstDeg - raDeg) * RAD;
  const dec = decDeg * RAD;
  const phi = lat * RAD;
  return {
    altitude: altitude(h, phi, dec) / RAD,
    bearing: (azimuth(h, phi, dec) / RAD + 180 + 360) % 360,
  };
}

// ── the planets ───────────────────────────────────────────────────────────────
/*
 * Keplerian elements and their rates per century (E. M. Standish, JPL,
 * valid 1800–2050): a (au), e, I, L, longitude of perihelion, longitude of
 * the ascending node (degrees). Good to a fraction of a degree: plenty for
 * a sky drawn soft.
 */
const ELEMENTS: Record<string, number[][]> = {
  Mercury: [[0.38709927, 0.20563593, 7.00497902, 252.2503235, 77.45779628, 48.33076593], [0.00000037, 0.00001906, -0.00594749, 149472.67411175, 0.16047689, -0.12534081]],
  Venus: [[0.72333566, 0.00677672, 3.39467605, 181.9790995, 131.60246718, 76.67984255], [0.0000039, -0.00004107, -0.0007889, 58517.81538729, 0.00268329, -0.27769418]],
  Earth: [[1.00000261, 0.01671123, -0.00001531, 100.46457166, 102.93768193, 0], [0.00000562, -0.00004392, -0.01294668, 35999.37244981, 0.32327364, 0]],
  Mars: [[1.52371034, 0.0933941, 1.84969142, -4.55343205, -23.94362959, 49.55953891], [0.00001847, 0.00007882, -0.00813131, 19140.30268499, 0.44441088, -0.29257343]],
  Jupiter: [[5.202887, 0.04838624, 1.30439695, 34.39644051, 14.72847983, 100.47390909], [-0.00011607, -0.00013253, -0.00183714, 3034.74612775, 0.21252668, 0.20469106]],
  Saturn: [[9.53667594, 0.05386179, 2.48599187, 49.95424423, 92.59887831, 113.66242448], [-0.0012506, -0.00050991, 0.00193609, 1222.49362201, -0.41897216, -0.28867794]],
};

function helio(name: string, T: number): [number, number, number] {
  const [base, rate] = ELEMENTS[name];
  const [a, e, I, L, peri, node] = base.map((v, i) => v + rate[i] * T);
  const w = peri - node;
  let M = (((L - peri) % 360) + 540) % 360 - 180;
  M *= RAD;
  let E = M + e * Math.sin(M);
  for (let i = 0; i < 6; i++) E -= (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
  const x = a * (Math.cos(E) - e);
  const y = a * Math.sqrt(1 - e * e) * Math.sin(E);
  const [cw, sw, cn, sn, ci, si] = [Math.cos(w * RAD), Math.sin(w * RAD), Math.cos(node * RAD), Math.sin(node * RAD), Math.cos(I * RAD), Math.sin(I * RAD)];
  return [
    (cw * cn - sw * sn * ci) * x + (-sw * cn - cw * sn * ci) * y,
    (cw * sn + sw * cn * ci) * x + (-sw * sn + cw * cn * ci) * y,
    sw * si * x + cw * si * y,
  ];
}

/** Where the bright planets are on the sky: right ascension and declination, in degrees. */
export function planets(date: Date): { name: string; ra: number; dec: number }[] {
  const T = (toJulian(date) - J2000) / 36525;
  const earth = helio('Earth', T);
  const eps = 23.43928 * RAD;
  return ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn'].map((name) => {
    const p = helio(name, T);
    const [x, y, z] = [p[0] - earth[0], p[1] - earth[1], p[2] - earth[2]];
    const xe = x;
    const ye = y * Math.cos(eps) - z * Math.sin(eps);
    const ze = y * Math.sin(eps) + z * Math.cos(eps);
    return {
      name,
      ra: ((Math.atan2(ye, xe) / RAD) % 360 + 360) % 360,
      dec: Math.atan2(ze, Math.hypot(xe, ye)) / RAD,
    };
  });
}
