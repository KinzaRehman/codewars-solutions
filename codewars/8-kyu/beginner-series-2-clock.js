/**
 * Beginner Series #2: Clock
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Milliseconds since midnight, given h, m, s.
 *
 * Example: (0,1,1) → 61000
 *
 * Big O (optimized): Time O(1).
 */

const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;
