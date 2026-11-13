/**
 * Fizz Buzz
 * Codewars 7 kyu
 * Solved: 2026-10-07
 *
 * Return an array 1..n where multiples of 3 become 'Fizz', multiples of 5 become 'Buzz', multiples of both become 'FizzBuzz'.
 *
 * Example: n = 5  →  [1, 2, 'Fizz', 4, 'Buzz']
 *
 * Big O (optimized): Time O(n), space O(n) for the output.
 */

function fizzbuzz(n) {
  return Array.from({length: n}, (_, i) => {
    const x = i + 1;
    return (x % 3 === 0 ? 'Fizz' : '') + (x % 5 === 0 ? 'Buzz' : '') || x;
  });
}
