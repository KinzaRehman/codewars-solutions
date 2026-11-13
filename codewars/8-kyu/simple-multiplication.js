/**
 * Simple Multiplication
 * Codewars 8 kyu
 * Solved: 2026
 *
 * If n is even, ×8; if odd, ×9.
 *
 * Example: 2 → 16,  3 → 27
 *
 * Big O (optimized): Time O(1).
 */

const simpleMultiplication = n => n * (n % 2 === 0 ? 8 : 9);
