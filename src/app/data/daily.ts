/**
 * ═══════════════════════════════════════════════════════════════════════════
 * TODAY'S NUMBERS
 * ═══════════════════════════════════════════════════════════════════════════
 * The weather and the air of the city, hour by hour, from Open-Meteo — free,
 * no key — fetched at most every half hour and kept. The kept copy is what
 * is shown when the Wi-Fi is gone, so a set never loses its data mid-show;
 * only its date tells that it is older.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const CITY = { name: 'Stuttgart', lat: 48.78, lng: 9.18, zone: 'Europe/Berlin' };

/** One measure through the day: 24 hourly values. */
export interface Series {
  key: string;
  values: number[];
}
export interface Hourly {
  /** The day it is for, YYYY-MM-DD. */
  date: string;
  fetched: number;
  series: Series[];
}

const REFRESH = 30 * 60 * 1000;
const WEATHER =
  `https://api.open-meteo.com/v1/forecast?latitude=${CITY.lat}&longitude=${CITY.lng}` +
  `&hourly=temperature_2m,precipitation_probability,wind_speed_10m,relative_humidity_2m,cloud_cover` +
  `&forecast_days=1&timezone=${encodeURIComponent(CITY.zone)}`;
const AIR =
  `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${CITY.lat}&longitude=${CITY.lng}` +
  `&hourly=european_aqi,pm2_5,pm10,nitrogen_dioxide,ozone` +
  `&forecast_days=1&timezone=${encodeURIComponent(CITY.zone)}`;

function today(): string {
  // The city's own date, whatever the computer's zone.
  return new Intl.DateTimeFormat('en-CA', { timeZone: CITY.zone }).format(new Date());
}

function kept(key: string): Hourly | null {
  try {
    const v = JSON.parse(localStorage.getItem(key) || 'null') as Hourly | null;
    return v && Array.isArray(v.series) ? v : null;
  } catch {
    return null;
  }
}

async function fetchHourly(url: string): Promise<Hourly> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`${response.status}`);
    const json = (await response.json()) as { hourly: Record<string, (number | null)[]> & { time: string[] } };
    const { time, ...rest } = json.hourly;
    return {
      date: (time[0] ?? '').slice(0, 10),
      fetched: Date.now(),
      series: Object.entries(rest).map(([key, values]) => ({
        key,
        values: (values as (number | null)[]).slice(0, 24).map((v) => v ?? 0),
      })),
    };
  } finally {
    clearTimeout(timer);
  }
}

/** A source that is fetched now and then, kept, and read every frame. */
function source(storageKey: string, url: string) {
  let value = kept(storageKey);
  let pending: Promise<void> | null = null;
  let lastTry = 0;
  return () => {
    const stale = !value || value.date !== today() || Date.now() - value.fetched > REFRESH;
    // Not more than once a minute while it keeps failing.
    if (stale && !pending && Date.now() - lastTry > 60000) {
      lastTry = Date.now();
      pending = fetchHourly(url)
        .then((fresh) => {
          value = fresh;
          try { localStorage.setItem(storageKey, JSON.stringify(fresh)); } catch { /* full or blocked */ }
        })
        .catch(() => { /* offline: keep showing what is kept */ })
        .finally(() => { pending = null; });
    }
    return value;
  };
}

export const weather = source('vj-data-weather', WEATHER);
export const air = source('vj-data-air', AIR);
