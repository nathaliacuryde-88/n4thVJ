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

/**
 * 28 steps in an hour: 3:00 to open; 8+9 and 11 alone only half a minute
 * each, on the way through; 2:30 at the fullest (8+9+10) and for Machine;
 * 3:00 to close; 2:08 for the rest — 58:56, a minute to spare.
 */
export const DEFAULT_SCRIPT = `1 3:00
1+2 2:08
2+3 2:08
3+4 2:08
5 2:08
5+6 2:08
6+7 2:08
7+8 2:08
8 2:08
8+9 0:30
8+9+10 2:30
10+11 2:08
11 0:30
11+12 2:08
12+13 2:08
13+14 2:08
13+15 2:08
15 2:08
16 2:08
16+17 2:08
17 2:08
18 2:08
18+19 2:08
19+21 2:08
20+21 2:08
22 2:30
22+23 2:08
23 3:00`;

/** The roteiro before this one: replaced too, if never edited. */
const SECOND_SCRIPT = `1 3:00
1+2 2:05
2+3 2:05
3+4 2:05
5 2:05
5+6 2:05
6+7 2:05
7+8 2:05
8 2:05
8+9 2:05
8+9+10 2:30
10+11 2:05
11+12 2:05
12+13 2:05
13+14 2:05
13+15 2:05
15 2:05
16 2:05
16+17 2:05
17 2:05
18 2:05
18+19 2:05
19+21 2:05
20+21 2:05
22 2:30
22+23 2:05
23 3:00`;

/** The first roteiro, before 7 stopped standing alone: replaced if never edited. */
const FIRST_SCRIPT = `1 3:00
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
    const kept = all[setName ?? '_'];
    return kept === undefined || kept === FIRST_SCRIPT || kept === SECOND_SCRIPT ? DEFAULT_SCRIPT : kept;
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
