/**
 * Corner Circle
 * Codewars 6 kyu
 * Solved: 2026
 *
 * A circle radius r sits in a right-angled corner. What is the radius of the smaller circle tucked in the corner, tangent to both walls and the big circle? Round to 2 decimal places.
 *
 * Example: r = 1  →  0.17
 *
 * Big O (optimized): Time O(1), space O(1).
 */

const cornerCircle = r => Math.round(r * (3 - 2 * Math.sqrt(2)) * 100) / 100;
