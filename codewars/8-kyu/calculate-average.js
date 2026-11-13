/**
 * Calculate Average
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Return the average of an array, or 0 if empty.
 *
 * Example: [1,2,3,4] → 2.5
 *
 * Big O (optimized): Time O(n), space O(1). Guard the empty array — division by zero.
 */

const findAverage = a => a.length ? a.reduce((t,x) => t+x, 0) / a.length : 0;
