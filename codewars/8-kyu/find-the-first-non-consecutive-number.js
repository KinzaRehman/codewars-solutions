/**
 * Find the First Non-Consecutive Number
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Find the first element that isn't exactly 1 more than the previous. Return null if all are consecutive.
 *
 * Example: [1,2,3,4,6,7,8] → 6
 *
 * Big O (optimized): Time O(n), space O(1).
 */

const firstNonConsecutive = a => a.find((x, i) => i > 0 && x !== a[i-1] + 1) ?? null;
