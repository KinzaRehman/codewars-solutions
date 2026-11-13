/**
 * Build Tower
 * Codewars 6 kyu
 * Solved: 2026-11-10
 *
 * Build a tower of n floors: each floor is '*' centred, floor i has 2i−1 stars, padded with spaces.
 *
 * Example: n = 3  →  ['  *  ', ' *** ', '*****']
 *
 * Big O (optimized): Time O(n²) — total characters in the tower, space O(n²) for the output.
 */

function towerBuilder(n) {
  return Array.from({length: n}, (_, i) =>
    ' '.repeat(n - 1 - i) + '*'.repeat(2 * i + 1) + ' '.repeat(n - 1 - i));
}
