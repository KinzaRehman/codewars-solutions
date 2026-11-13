/**
 * Beginner: Reduce but Grow
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Multiply all numbers in an array together.
 *
 * Example: [1,2,3,4] → 24
 *
 * Big O (optimized): Time O(n), space O(1). Start at 1, not 0.
 */

const grow = a => a.reduce((t, x) => t * x, 1);
