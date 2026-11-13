/**
 * Only Duplicates
 * Codewars 6 kyu
 * Solved: 2026-10-10
 *
 * Remove any characters that are unique from the string — keep only characters that appear more than once, in order.
 *
 * Example: 'abccdefee' → 'cceee'
 *
 * Big O (optimized): Brute: time O(n²), space O(1). Optimized: time O(n), space O(n).
 */

function onlyDuplicates(str) {
  const count = {};
  for (const ch of str) count[ch] = (count[ch] || 0) + 1;
  return [...str].filter(ch => count[ch] > 1).join('');
}
