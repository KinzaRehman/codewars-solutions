/**
 * Abbreviate a Two Word Name
 * Codewars 8 kyu
 * Solved: 2026-10-07
 *
 * Return initials with a dot: 'Sam Harris' → 'S.H'.
 *
 * Example: 'Sam Harris' → 'S.H'
 *
 * Big O (optimized): Time O(n), space O(n).
 */

const abbrevName = n => n.split(' ').map(w => w[0].toUpperCase()).join('.');
