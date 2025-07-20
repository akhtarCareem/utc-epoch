/** Pad a number with a leading zero when needed. */
const pad = (n: number) => n.toString().padStart(2, "0");

/** Format a Date as "YYYY-MM-DD HH:MM:SS" in UTC. */
export function formatUTC(date: Date): string {
  return (
    `${date.getUTCFullYear()}-` +
    `${pad(date.getUTCMonth() + 1)}-` +
    `${pad(date.getUTCDate())} ` +
    `${pad(date.getUTCHours())}:` +
    `${pad(date.getUTCMinutes())}:` +
    `${pad(date.getUTCSeconds())}`
  );
}

/** Parse strings like "2025-07-12 20:00:00" (or with /) as UTC. */
export function parseUtc(str: string): Date | null {
  const m = str.match(/^(\d{4})[-/](\d{2})[-/](\d{2})\s+(\d{2}):(\d{2}):(\d{2})$/);
  if (m) {
    const [, y, mo, d, h, mi, s] = m.map(Number);
    return new Date(Date.UTC(y, mo - 1, d, h, mi, s));
  }

  // Fallback: ISO with a trailing Z so JS treats it as UTC.
  const isoGuess = str.endsWith("Z") || /[+-]\d\d:?\d\d$/.test(str) ? str : str + "Z";
  const d = new Date(isoGuess);
  return isNaN(d.getTime()) ? null : d;
}

/** Quick numeric check. */
export const isNumeric = (txt: string) => /^-?\d+(\.\d+)?$/.test(txt.trim());

/** Convert seconds or milliseconds to a Date (UTC). */
export function epochToDate(num: number): Date | null {
  if (!Number.isFinite(num)) return null;
  const ms = num < 1_000_000_000_000 ? num * 1000 : num;
  const d = new Date(ms);
  return isNaN(d.getTime()) ? null : d;
}
