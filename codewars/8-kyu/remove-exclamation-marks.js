/**
 * Remove Exclamation Marks
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Remove all '!' from a string.
 *
 * Example: 'Hello World!' → 'Hello World'
 *
 * Big O (optimized): Time O(n), space O(n).
 */

const removeExclamationMarks = s => s.replace(/!/g, '');
