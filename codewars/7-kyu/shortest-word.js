/**
 * Shortest Word
 * Codewars 7 kyu
 * Solved: 2026-09-29
 *
 * Return the length of the shortest word in a string.
 *
 * Example: 'bitcoin take over the world' → 3 ('the')
 *
 * Big O (optimized): Time O(n), space O(n) for the split.
 */

const findShort = s => Math.min(...s.split(' ').map(w => w.length));
