/**
 * Regular Ball Super Ball
 * Codewars 8 kyu
 * Solved: 2026-11-04
 *
 * Ball class: ballType is 'super' if created with 'super', else 'regular'.
 *
 * Example: new Ball().ballType → 'regular'
 *
 * Big O (optimized): Time O(1), space O(1).
 */

class Ball { constructor(t) { this.ballType = t || 'regular'; } }
