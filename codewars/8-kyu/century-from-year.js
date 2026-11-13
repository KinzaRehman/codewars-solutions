/**
 * Century From Year
 * Codewars 8 kyu
 * Solved: 2026-10-19
 *
 * Return the century of a year.
 *
 * Example: 1705 → 18,  1900 → 19
 *
 * Big O (optimized): Time O(1). 1900 is the 19th century — ceil, not floor+1.
 */

const century = y => Math.ceil(y / 100);
