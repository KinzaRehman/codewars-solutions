/**
 * Will You Make It?
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Can you reach the pump? distance ≤ mpg × fuel.
 *
 * Example: (50, 25, 2) → true
 *
 * Big O (optimized): Time O(1).
 */

const zeroFuel = (d, mpg, fuel) => d <= mpg * fuel;
