/**
 * Basic Mathematical Operations
 * Codewars 8 kyu
 * Solved: 2026-10-18
 *
 * Do +, −, *, / on two values given an operator string.
 *
 * Example: ('+', 4, 7) → 11
 *
 * Big O (optimized): Time O(1). A lookup object beats a switch here.
 */

const basicOp = (op, a, b) => ({'+': a+b, '-': a-b, '*': a*b, '/': a/b})[op];
