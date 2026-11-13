/**
 * Fake Binary
 * Codewars 8 kyu
 * Solved: 2026-10-23
 *
 * Replace digits <5 with 0, digits ≥5 with 1.
 *
 * Example: '45385593107843568' → '01011110001100111'
 *
 * Big O (optimized): Time O(n), space O(n).
 */

const fakeBin = s => [...s].map(d => d < 5 ? '0' : '1').join('');
