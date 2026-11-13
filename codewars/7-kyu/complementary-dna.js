/**
 * Complementary DNA
 * Codewars 7 kyu
 * Solved: 2026-11-12
 *
 * Return the complementary DNA strand: A↔T, C↔G.
 *
 * Example: 'ATTGC' → 'TAACG'
 *
 * Big O (optimized): Time O(n), space O(n) for the result.
 */

function DNAStrand(dna) {
  const pair = { A: 'T', T: 'A', C: 'G', G: 'C' };
  return [...dna].map(ch => pair[ch]).join('');
}
