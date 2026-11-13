/**
 * Double Char
 * Codewars 8 kyu
 * Solved: 2026-11-01
 *
 * Return a string with each character doubled.
 *
 * Example: 'String' → 'SSttrriinngg'
 *
 * Big O (optimized): Time O(n), space O(n).
 */

const doubleChar = s => [...s].map(ch => ch + ch).join('');
