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

/*
Bob needs a fast way to calculate the volume of a rectangular cuboid with three values: the length, width and height of the cuboid.

Write a function to help Bob with this calculation. */
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
    return length * width * height
  }
}



/* A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
Return true if yes, false otherwise :) */ 

function hero(bullets, dragons){
//Get Coding!
  return bullets / 2 >= dragons
}


/* Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings. */ 














/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

Fundamentals8*/

function findShort(s) {
  let small = s.split(" ");

  let est = small.reduce((shortest, current) => {
    return current.length > shortest.length ? shortest : current;
  });

  return est.length;
}

/*Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/ 
function addBinary(a,b) {
  const sum = a + b ;
  return(sum.toString(2))

}
/*
create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly] */ 
function greet(name){
  //your code here
  return(`Hello, ${name} how are you doing today?`)
}



/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/
function findSmallestInt(arr) {
  //your code here
  return Math.min(...arr);
}

//parameters: it needs to take in a arr which is there and return the smalllest int
//rreturn: return smallest number 
//example: [10,20,20,30, 1,20,20] -> 1 
/*pseudo code: 
