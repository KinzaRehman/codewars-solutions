// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.
function invert(array) {
   return (array.map (number => -number));
}


 

// /Very simple, given a number, find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34
function opposite(number) {

  return -number
}


/*Your function takes two arguments:

current father's age (years)
current age of his son (years)
Calculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

*/
function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
  
  
}

/*Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6" */ 
function findNeedle(haystack) {
  // your code here
  return "found the needle at position " + haystack.indexOf("needle")
}