/**
 * Printer Errors
 * Codewars 7 kyu
 * Solved: 2026-10-06
 *
 * A printer uses letters a–m. Return the error rate as 'errors/total' — count of letters outside a–m over total length.
 *
 * Example: 'aaabbbbhaijjjm' → '0/14'  |  'aaaxbbbbyyhwawiwjjjwwm' → '8/22'
 *
 * Big O (optimized): Time O(n), space O(1).
 */

function printerError(s) {
  const errors = [...s].filter(ch => ch > 'm').length;
  return `${errors}/${s.length}`;
}
