/**
 * Unique In Order
 * Codewars 6 kyu
 * Solved: 2026-11-10
 *
 * Remove consecutive duplicates, keeping order. Works for strings and arrays.
 *
 * Example: 'AAAABBBCCDAABBB' → ['A','B','C','D','A','B']  |  [1,2,2,3,3] → [1,2,3]
 *
 * Big O (optimized): Time O(n), space O(n) for the result.
 */

const uniqueInOrder = it => [...it].filter((x, i, a) => i === 0 || x !== a[i - 1]);
