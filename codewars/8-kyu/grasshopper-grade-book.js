/**
 * Grasshopper: Grade Book
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Return a letter grade from the average of three scores.
 *
 * Example: (95,90,93) → 'A'
 *
 * Big O (optimized): Time O(1).
 */

const getGrade = (a,b,c) => { const s = (a+b+c)/3; return s >= 90 ? 'A' : s >= 80 ? 'B' : s >= 70 ? 'C' : s >= 60 ? 'D' : 'F'; };
