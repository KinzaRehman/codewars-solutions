/**
 * Swap Values
 * Codewars 8 kyu
 * Solved: 2026-10-07
 *
 * Swap the two values in an array, in place.
 *
 * Example: [1,2] → [2,1]
 *
 * Big O (optimized): Time O(1), space O(1). Destructuring swap — no temp variable.
 */

const swapValues = a => { [a[0], a[1]] = [a[1], a[0]]; return a; };
