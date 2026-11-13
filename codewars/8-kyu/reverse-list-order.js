/**
 * Reverse List Order
 * Codewars 8 kyu
 * Solved: 2026-11-10
 *
 * Return a list in reverse order, without mutating the original.
 *
 * Example: [1,2,3] → [3,2,1]
 *
 * Big O (optimized): Time O(n), space O(n). Copy first — .reverse() mutates.
 */

const reverseList = l => [...l].reverse();
