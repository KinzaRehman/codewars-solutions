/**
 * Total Amount of Points
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Games are 'x:y'. Win = 3 pts, draw = 1, loss = 0. Total points.
 *
 * Example: ['3:1','2:2'] → 4
 *
 * Big O (optimized): Time O(n), space O(1).
 */

const points = g => g.reduce((t, s) => t + (s[0] > s[2] ? 3 : s[0] === s[2] ? 1 : 0), 0);
