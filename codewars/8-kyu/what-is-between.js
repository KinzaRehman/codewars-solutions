/**
 * What Is Between?
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Return all integers between a and b inclusive.
 *
 * Example: (1,4) → [1,2,3,4]
 *
 * Big O (optimized): Time O(n), space O(n).
 */

const between = (a, b) => Array.from({length: b - a + 1}, (_, i) => a + i);
