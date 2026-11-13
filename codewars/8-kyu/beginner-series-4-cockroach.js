/**
 * Beginner Series #4: Cockroach
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Convert km/h to cm/s, floored.
 *
 * Example: 1.08 → 30
 *
 * Big O (optimized): Time O(1). 1 km/h = 100000 cm / 3600 s.
 */

const cockroachSpeed = s => Math.floor(s * 100000 / 3600);
