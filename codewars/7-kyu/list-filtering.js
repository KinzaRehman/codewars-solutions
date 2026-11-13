/**
 * List Filtering
 * Codewars 7 kyu
 * Solved: 2026-10-03
 *
 * Filter a list to numbers only — remove all strings.
 *
 * Example: [1,2,'a','b'] → [1,2]
 *
 * Big O (optimized): Time O(n), space O(n) for the result.
 */

const filter_list = l => l.filter(x => typeof x === 'number');
