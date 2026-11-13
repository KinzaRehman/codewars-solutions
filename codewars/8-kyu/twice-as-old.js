/**
 * Twice as Old
 * Codewars 8 kyu
 * Solved: 2026
 *
 * How many years ago / in the future was dad twice as old as son? Return the absolute difference.
 *
 * Example: dad 36, son 7 → 22
 *
 * Big O (optimized): Time O(1).
 */

const twiceAsOld = (d, s) => Math.abs(d - s * 2);
