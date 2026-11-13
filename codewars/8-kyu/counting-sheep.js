/**
 * Counting Sheep
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Count the true values in an array.
 *
 * Example: [true,true,false,true] → 3
 *
 * Big O (optimized): Time O(n), space O(n) for the filtered array. Or reduce with +x.
 */

const countSheeps = a => a.filter(Boolean).length;
