/**
 * Is It Even?
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Return true if a number is even. Floats are not even.
 *
 * Example: 2 → true,  2.5 → false
 *
 * Big O (optimized): Time O(1). Note: 2.5 % 2 = 0.5, so floats fail naturally.
 */

const testEven = n => n % 2 === 0;
