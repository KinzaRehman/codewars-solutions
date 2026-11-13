/**
 * Are You Playing Banjo?
 * Codewars 8 kyu
 * Solved: 2026-09-29
 *
 * If the name starts with R/r, they play banjo.
 *
 * Example: 'Ringo' → 'Ringo plays banjo'
 *
 * Big O (optimized): Time O(1).
 */

const areYouPlayingBanjo = n => n[0].toLowerCase() === 'r' ? `${n} plays banjo` : `${n} does not play banjo`;
