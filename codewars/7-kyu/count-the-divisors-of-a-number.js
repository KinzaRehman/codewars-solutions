/**
 * Count the Divisors of a Number
 * Codewars 7 kyu
 * Solved: 2026
 *
 * Count how many divisors n has.
 *
 * Example: n = 12 → 6  (1,2,3,4,6,12)  |  n = 30 → 8
 *
 * Big O (optimized): Brute: time O(n), space O(1). Optimized: time O(√n), space O(1).
 */

function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) count += (i * i === n ? 1 : 2);
  }
  return count;
}
