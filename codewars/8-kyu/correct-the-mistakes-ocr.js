/**
 * Correct the Mistakes (OCR)
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Fix misread characters: 5→S, 0→O, 1→I.
 *
 * Example: 'L0ND0N' → 'LONDON'
 *
 * Big O (optimized): Time O(n), space O(n).
 */

const correct = s => s.replace(/5/g,'S').replace(/0/g,'O').replace(/1/g,'I');
