/**
 * Find the Unique Number
 * Codewars 6 kyu
 * Solved: 2026
 *
 * All numbers in the array are equal except one. Find it.
 *
 * Example: [1,1,1,2,1,1] → 2  |  [0,0,0.55,0,0] → 0.55
 *
 * Big O (optimized): Time O(n), space O(1).
 */

function findUniq(arr) {
  const majority = arr[0] === arr[1] ? arr[0] : (arr[0] === arr[2] ? arr[0] : arr[1]);
  return arr.find(x => x !== majority);
}
