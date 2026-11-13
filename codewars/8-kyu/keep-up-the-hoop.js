/**
 * Keep Up the Hoop
 * Codewars 8 kyu
 * Solved: 2026
 *
 * If n ≥ 10 return 'Great, now move on to tricks', else 'Keep at it until you get it'.
 *
 * Example: 11 → 'Great, now move on to tricks'
 *
 * Big O (optimized): Time O(1).
 */

const hoopCount = n => n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it';
