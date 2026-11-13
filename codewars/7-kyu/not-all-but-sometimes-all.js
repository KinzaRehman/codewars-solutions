/**
 * Not All But Sometimes All
 * Codewars 7 kyu
 * Solved: 2026
 *
 * Remove from a string the first N occurrences of each character listed in a dict {char: count}, left to right.
 *
 * Example: 'this is a string', {t:1, i:2} → 'hs s a string'
 *
 * Big O (optimized): Brute (replace loop): time O(n × total removals), space O(n). Optimized: time O(n), space O(k) for the dict.
 */

function remove(str, dict) {
  const left = {...dict};
  return [...str].filter(ch => {
    if (left[ch] > 0) { left[ch]--; return false; }
    return true;
  }).join('');
}
