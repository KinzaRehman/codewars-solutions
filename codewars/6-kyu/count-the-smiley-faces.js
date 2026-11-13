/**
 * Count the Smiley Faces!
 * Codewars 6 kyu
 * Solved: 2026
 *
 * Count valid smileys in an array. Eyes : or ;, optional nose - or ~, mouth ) or D. Nothing else allowed.
 *
 * Example: [':)', ';(', ';}', ':-D'] → 2
 *
 * Big O (optimized): Time O(n × len) — each face is at most 3 chars, so effectively O(n), space O(1).
 */

const countSmileys = arr => arr.filter(s => /^[;:][~-]?[)D]$/.test(s)).length;
