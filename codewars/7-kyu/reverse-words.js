/**
 * Reverse Words
 * Codewars 7 kyu
 * Solved: 2026
 *
 * Reverse each word in a string, keeping word order and spaces.
 *
 * Example: 'This is an example!' → 'sihT si na !elpmaxe'
 *
 * Big O (optimized): Time O(n), space O(n).
 */

const reverseWords = str => str.split(' ').map(w => [...w].reverse().join('')).join(' ');
