/**
 * Square Every Digit
 * Codewars 7 kyu
 * Solved: 2026-10-29
 *
 * Square every digit of a number and concatenate the results.
 *
 * Example: 9119 → 811181  (9²=81, 1²=1, 1²=1, 9²=81)
 *
 * Big O (optimized): Time O(digits), space O(digits).
 */

const squareDigits = num => +[...String(num)].map(d => d * d).join('');
