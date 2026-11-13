/**
 * Is It a Palindrome?
 * Codewars 8 kyu
 * Solved: 2026
 *
 * Return true if a string reads the same forwards and backwards, case-insensitive.
 *
 * Example: 'Abba' → true
 *
 * Big O (optimized): Time O(n), space O(n). Two-pointer version is O(1) space.
 */

const isPalindrome = s => { s = s.toLowerCase(); return s === [...s].reverse().join(''); };
