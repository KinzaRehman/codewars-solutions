/**
 * Common Substrings
 * Codewars 7 kyu
 * Solved: 2026-10-22
 *
 * Return true if the two strings share a substring longer than 1 character. Case-insensitive.
 *
 * Example: 'Something' / 'Home' → true ('me')  |  'Something' / 'Fun' → false
 *
 * Big O (optimized): Brute: time O(n²·m²), space O(n²). Optimized: time O(n·m), space O(1).
 */

function SubstringTest(s1, s2) {
  s1 = s1.toLowerCase(); s2 = s2.toLowerCase();
  for (let i = 0; i < s1.length - 1; i++) {
    if (s2.includes(s1.slice(i, i + 2))) return true;
  }
  return false;
}
