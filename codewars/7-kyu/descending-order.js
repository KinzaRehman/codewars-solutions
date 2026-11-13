/**
 * Descending Order
 * Codewars 7 kyu
 * Solved: 2026-10-20
 *
 * Rearrange the digits of a non-negative integer into descending order.
 *
 * Example: 42145 → 54421
 *
 * Big O (optimized): Time O(d log d) for d digits, space O(d).
 */

const descendingOrder = n => +[...String(n)].sort((a, b) => b - a).join('');
