/**
 * Find Max and Min of a List
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Return [min, max] — wait, this kata returns max then min? No: return [min, max] as minMax? Actually it returns the minimum and maximum: use Math.min/max.
 *
 * Example: [4,6,2,1,9] → min 1, max 9
 *
 * Big O (optimized): Time O(n), space O(1) extra.
 */

const minMax = a => [Math.min(...a), Math.max(...a)];
