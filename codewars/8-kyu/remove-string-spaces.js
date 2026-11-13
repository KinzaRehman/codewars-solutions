/**
 * Remove String Spaces
 * Codewars 8 kyu
 * Solved: 2026-10-27
 *
 * Remove all spaces from a string.
 *
 * Example: '8 j 8' → '8j8'
 *
 * Big O (optimized): Time O(n), space O(n). /\s/g also removes tabs.
 */

const noSpace = s => s.replace(/ /g, '');
