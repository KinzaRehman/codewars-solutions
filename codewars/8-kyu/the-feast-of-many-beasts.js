/**
 * The Feast of Many Beasts
 * Codewars 8 kyu
 * Solved: 2026-10-27
 *
 * A dish is allowed if it starts and ends with the same letters as the beast's name.
 *
 * Example: ('great blue heron','garlic naan') → true
 *
 * Big O (optimized): Time O(1).
 */

const feast = (b, d) => b[0] === d[0] && b.at(-1) === d.at(-1);
