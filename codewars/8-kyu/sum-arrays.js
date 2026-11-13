/**
 * Sum Arrays
 * Codewars 8 kyu
 * Solved: 2026-11-02
 *
 * Sum all numbers in an array.
 *
 * Example: [1,5.2,4,0,-1] → 9.2
 *
 * Big O (optimized): Time O(n), space O(1).
 */

const sum = a => a.reduce((t, x) => t + x, 0);
