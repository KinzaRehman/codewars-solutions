/**
 * A Needle in the Haystack
 * Codewars 8 kyu
 * Solved: 2026-09-29
 *
 * Find 'needle' and return 'found the needle at position {index}'.
 *
 * Example: ['hay','needle'] → 'found the needle at position 1'
 *
 * Big O (optimized): Time O(n), space O(1).
 */

const findNeedle = h => `found the needle at position ${h.indexOf('needle')}`;
