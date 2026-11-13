/**
 * Sum of Positive
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Sum only the positive numbers in an array.
 *
 * Example: [1,-4,7,12] → 20
 *
 * Big O (optimized): Time O(n), space O(n) for the filtered array.
 */

const positiveSum = a => a.filter(x => x > 0).reduce((t,x) => t+x, 0);
