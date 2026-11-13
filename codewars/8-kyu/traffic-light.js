/**
 * Traffic Light
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Given the current light, return the next: green→yellow→red→green.
 *
 * Example: 'green' → 'yellow'
 *
 * Big O (optimized): Time O(1), space O(1). A lookup object beats if/else chains.
 */

const updateLight = c => ({green:'yellow', yellow:'red', red:'green'})[c];
