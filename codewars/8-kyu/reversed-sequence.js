/**
 * Reversed Sequence
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Return [n, n−1, …, 1].
 *
 * Example: 5 → [5,4,3,2,1]
 *
 * Big O (optimized): Time O(n), space O(n).
 */

const reverseSeq = n => Array.from({length: n}, (_, i) => n - i);
