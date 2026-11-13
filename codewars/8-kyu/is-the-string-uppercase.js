/**
 * Is the String Uppercase?
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Return true if the string has no lowercase letters.
 *
 * Example: 'HELLO' → true,  'Hello' → false
 *
 * Big O (optimized): Time O(n), space O(1).
 */

String.prototype.isUpperCase = function() { return this.toString() === this.toUpperCase(); };
