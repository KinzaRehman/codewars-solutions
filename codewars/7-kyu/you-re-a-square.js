/**
 * You're a Square!
 * Codewars 7 kyu
 * Solved: 2026
 *
 * Return true if n is a perfect square. Negative numbers are not squares.
 *
 * Example: 25 → true,  26 → false,  -1 → false
 *
 * Big O (optimized): Time O(1), space O(1).
 */

const isSquare = n => Number.isInteger(Math.sqrt(n));
