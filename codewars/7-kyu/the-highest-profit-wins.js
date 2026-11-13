/**
 * The Highest Profit Wins!
 * Codewars 7 kyu
 * Solved: 2026
 *
 * Given prices, return [min, max].
 *
 * Example: [1,2,3,4,5] → [1,5]
 *
 * Big O (optimized): Time O(n), space O(1) extra. Sorting would be O(n log n).
 */

const minMax = arr => [Math.min(...arr), Math.max(...arr)];
