/**
 * Reversed Words
 * Codewars 8 kyu
 * Solved: 2026-10-27
 *
 * Reverse the order of words in a string.
 *
 * Example: 'hello world!' → 'world! hello'
 *
 * Big O (optimized): Time O(n), space O(n). Different from Reverse Words (7 kyu) — that one reverses letters inside each word.
 */

const reverseWords = s => s.split(' ').reverse().join(' ');
