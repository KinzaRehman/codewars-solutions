/**
 * Highest and Lowest
 * Codewars 7 kyu
 * Solved: 2026-10-21
 *
 * Given a space-separated string of numbers, return 'highest lowest'.
 *
 * Example: '1 2 3 4 5' → '5 1'
 *
 * Big O (optimized): Time O(n), space O(n) for the split array.
 */

function highAndLow(numbers) {
  const nums = numbers.split(' ').map(Number);
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}
