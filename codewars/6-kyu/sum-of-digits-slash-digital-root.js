/**
 * Sum of Digits / Digital Root
 * Codewars 6 kyu
 * Solved: 2026-10-10
 *
 * Return the digital root: repeatedly sum the digits until one digit remains.
 *
 * Example: 16 → 7  (1+6=7)  |  942 → 6  (9+4+2=15, 1+5=6)
 *
 * Big O (optimized): Loop: time O(digits × rounds), space O(digits). Formula: time O(1), space O(1).
 */

function digitalRoot(n) {
  while (n >= 10) n = [...String(n)].reduce((s, d) => s + +d, 0);
  return n;
}
// O(1): return n === 0 ? 0 : 1 + (n - 1) % 9;
