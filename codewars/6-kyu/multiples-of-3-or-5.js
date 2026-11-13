/**
 * Multiples of 3 or 5
 * Codewars 6 kyu
 * Solved: 2026-10-07
 *
 * Return the sum of all multiples of 3 or 5 below n. If n is negative, return 0.
 *
 * Example: n = 10  →  23  (3+5+6+9)
 *
 * Big O (optimized): Loop: time O(n), space O(1). Formula: time O(1), space O(1).
 */

function solution(n) {
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 3; i < n; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;
  return sum;
}
// O(1) version: sumDiv(k) = k*m*(m+1)/2, answer = sumDiv(3)+sumDiv(5)-sumDiv(15)
