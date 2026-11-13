/**
 * Array.diff
 * Codewars 6 kyu
 * Solved: 2026-09-08
 *
 * Remove all values from a that are present in b, keeping order.
 *
 * Example: a = [1,2,2,3], b = [2]  →  [1,3]
 *
 * Big O (optimized): Brute: time O(n×m), space O(1). Optimized: time O(n+m), space O(m) for the Set.
 */

function arrayDiff(a, b) {
  const banned = new Set(b);
  return a.filter(x => !banned.has(x));
}
