/**
 * Switch It Up!
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Convert a number 0–9 to its English word.
 *
 * Example: 3 → 'Three'
 *
 * Big O (optimized): Time O(1). An array as a lookup table.
 */

const switchItUp = n => ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'][n];
