/**
 * Remove First and Last Character
 * Codewars 8 kyu
 * Solved: 2026-11-01
 *
 * Remove the first and last characters of a string.
 *
 * Example: 'eloquent' → 'loquen'
 *
 * Big O (optimized): Time O(n), space O(n).
 */

const removeChar = s => s.slice(1, -1);
