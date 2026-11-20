/**
 * ═══════════════════════════════════════════════════════════════════════════
 * THE ROTEIRO
 * ═══════════════════════════════════════════════════════════════════════════
 * The set as a list of steps, each a few of the set's visuals (by their
 * place in the bar: 1 is the first) held for so long:
 *
 *     1        3:00
 *     1+2
 *     8+9+10   2:30
 *
 * A step with no time holds for two minutes. Kept per saved set, as text,
 * so it is written and read the way she thinks of it.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export interface Step { slots: number[]; secs: number; line: string }

export const DEFAULT_SECS = 120;

export const DEFAULT_SCRIPT = `1 3:00
1+2
2+3
3+4
5
5+6
6+7
7
7+8
8
8+9
8+9+10 2:30
10+11
11+12
12+13
13+14
13+15
15
16
16+17
17
18
18+19
19+21
20+21
22 2:30
22+23
23 3:00`;

export function parseScript(text: string): Step[] {
  const steps: Step[] = [];
  for (const raw of text.split('\n')) {
    const line = raw.replace(/#.*/, '').trim();
    if (!line) continue;
    const m = /^(\d+(?:\s*\+\s*\d+)*)\s*(?:(\d+):(\d{1,2})|(\d+)\s*s?)?$/.exec(line);
    if (!m) continue;
    const slots = m[1].split('+').map((n) => Number(n.trim())).filter((n) => n > 0);
    const secs = m[2] !== undefined ? Number(m[2]) * 60 + Number(m[3]) : m[4] !== undefined ? Number(m[4]) : DEFAULT_SECS;
    if (slots.length) steps.push({ slots, secs: Math.max(5, secs), line });
  }
  return steps;
}

const KEY = 'vj-scripts';
export function loadScript(setName: string | null): string {
  try {
    const all = JSON.parse(localStorage.getItem(KEY) || '{}') as Record<string, string>;
    return all[setName ?? '_'] ?? DEFAULT_SCRIPT;
  } catch { return DEFAULT_SCRIPT; }
}
export function saveScript(setName: string | null, text: string) {
  try {
    const all = JSON.parse(localStorage.getItem(KEY) || '{}') as Record<string, string>;
    all[setName ?? '_'] = text;
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch { /* blocked */ }
}

export const clock = (ms: number) => {
  const s = Math.max(0, Math.round(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};
