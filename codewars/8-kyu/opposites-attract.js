/**
 * Opposites Attract
 * Codewars 8 kyu
 * Solved: 2026-10-09
 *
 * Love flowers: one even petals, one odd — return true if exactly one is even.
 *
 * Example: (1,4) → true,  (2,2) → false
 *
 * Big O (optimized): Time O(1). Different parity = one even, one odd.
 */

const lovefunc = (a, b) => a % 2 !== b % 2;
