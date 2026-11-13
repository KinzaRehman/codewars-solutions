/**
 * Third Angle of a Triangle
 * Codewars 8 kyu
 * Solved: 2026-10-02
 *
 * Given two angles, return the third.
 *
 * Example: (30,60) → 90
 *
 * Big O (optimized): Time O(1).
 */

const otherAngle = (a, b) => 180 - a - b;
