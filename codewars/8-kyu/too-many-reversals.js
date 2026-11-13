/**
 * Too Many Reversals
 * Codewars 8 kyu
 * Solved: 2026
 *
 * A wrestling string ends with the victor's name — return it.
 *
 * Example: 'X hit a reversal to Y' → 'Y'
 *
 * Big O (optimized): Time O(n), space O(n). The last word is the winner.
 */

const whoWon = s => s.split(' ').at(-1);
