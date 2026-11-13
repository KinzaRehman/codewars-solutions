/**
 * Fix String Case
 * Codewars 7 kyu
 * Solved: 2026
 *
 * Change a string to whichever case — lower or upper — needs the fewest changes. If equal, use lowercase.
 *
 * Example: 'coDe' → 'code'  |  'CODe' → 'CODE'
 *
 * Big O (optimized): Time O(n), space O(1).
 */

function solve(s) {
  const upper = [...s].filter(ch => ch === ch.toUpperCase() && ch !== ch.toLowerCase()).length;
  return upper > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}
