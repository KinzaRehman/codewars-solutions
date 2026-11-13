/**
 * Count by X
 * Codewars 8 kyu
 * Solved: 2026-11-05
 *
 * Return the first n multiples of x.
 *
 * Example: countBy(2,5) → [2,4,6,8,10]
 *
 * Big O (optimized): Time O(n), space O(n).
 */

const countBy = (x, n) => Array.from({length: n}, (_, i) => x * (i + 1));
