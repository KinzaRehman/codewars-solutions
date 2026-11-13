/**
 * Mumbling
 * Codewars 7 kyu
 * Solved: 2026-10-27
 *
 * Accumulate: 'abcd' → 'A-Bb-Ccc-Dddd' — repeat letter i (0-based) i+1 times, first uppercase, rest lowercase, joined with '-'.
 *
 * Example: 'abcd' → 'A-Bb-Ccc-Dddd'
 *
 * Big O (optimized): Time O(n²) — total output characters, space O(n²) for the result.
 */

function accum(s) {
  return [...s].map((ch, i) => (ch.toUpperCase() + ch.toLowerCase().repeat(i))).join('-');
}
