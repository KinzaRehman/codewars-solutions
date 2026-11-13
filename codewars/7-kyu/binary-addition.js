/**
 * Binary Addition
 * Codewars 7 kyu
 * Solved: 2026-09-30
 *
 * Add two numbers and return their sum as a binary string.
 *
 * Example: 1 + 1 → '10'  |  5 + 9 → '1110'
 *
 * Big O (optimized): Time O(log n) for the digits, space O(log n).
 */

const addBinary = (a, b) => (a + b).toString(2);
