/**
 * Jaden Casing Strings
 * Codewars 7 kyu
 * Solved: 2026-10-01
 *
 * Capitalize the first letter of every word, like Jaden Smith tweets.
 *
 * Example: 'How can mirrors be real' → 'How Can Mirrors Be Real'
 *
 * Big O (optimized): Time O(n), space O(n).
 */

const toJadenCase = str => str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
