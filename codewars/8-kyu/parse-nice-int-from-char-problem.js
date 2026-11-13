/**
 * Parse Nice Int From Char Problem
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Get the age (first character) as a number from a string like '5 years old'.
 *
 * Example: '5 years old' → 5
 *
 * Big O (optimized): Time O(1). parseInt stops at the first non-digit.
 */

const getAge = s => parseInt(s);
