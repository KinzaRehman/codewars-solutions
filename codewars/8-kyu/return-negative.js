/**
 * Return Negative
 * Codewars 8 kyu
 * Solved: 2026-10-10
 *
 * Make a number negative (already-negative stays negative).
 *
 * Example: 1 → -1,  -5 → -5,  0 → 0
 *
 * Big O (optimized): Time O(1).
 */

const makeNegative = n => -Math.abs(n);
