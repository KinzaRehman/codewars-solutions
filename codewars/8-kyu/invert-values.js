/**
 * Invert Values
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Return the additive inverse of each number.
 *
 * Example: [1,-2,3] → [-1,2,-3]
 *
 * Big O (optimized): Time O(n), space O(n).
 */

const invert = a => a.map(x => -x);
