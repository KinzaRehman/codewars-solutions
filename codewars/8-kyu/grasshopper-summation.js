/**
 * Grasshopper: Summation
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Sum all numbers from 1 to num.
 *
 * Example: summation(8) → 36
 *
 * Big O (optimized): Loop: O(n). Formula: O(1). The formula is the interview upgrade.
 */

const summation = n => n * (n + 1) / 2;
