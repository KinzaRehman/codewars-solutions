/**
 * Number of People in the Bus
 * Codewars 7 kyu
 * Solved: 2026-10-10
 *
 * Bus stops are [on, off] pairs. Return how many people are still on the bus.
 *
 * Example: [[10,0],[3,5],[5,8]] → 5
 *
 * Big O (optimized): Time O(n), space O(1).
 */

const number = busStops => busStops.reduce((total, [on, off]) => total + on - off, 0);
