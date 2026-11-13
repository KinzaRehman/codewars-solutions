/**
 * Calculate BMI
 * Codewars 8 kyu
 * Solved: 2026-10-26
 *
 * Return 'Underweight' / 'Normal' / 'Overweight' / 'Obese' from weight and height.
 *
 * Example: bmi(80, 1.8) → 'Normal'
 *
 * Big O (optimized): Time O(1).
 */

const bmi = (w, h) => { const b = w / h ** 2; return b <= 18.5 ? 'Underweight' : b <= 25 ? 'Normal' : b <= 30 ? 'Overweight' : 'Obese'; };
