//https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript

function greet() {
  return "hello world!";
}

/*Write a function that takes in a string and an object/hash/dict/Dictionary.

The keys of the dictionary indicate which characters to remove, and the value associated to a key specifies how many instances of this character to remove, in order of appearance in the string from left to right.

Return the filtered string.

Examples
// remove from 'this is a string' the first 1 't' and the first 2 i's.
"this is a string", {'t':1, 'i':2} ==> "hs s a string"


// there are no x's or i's, so nothing gets removed
"hello world", {'x':5, 'i':2} ==> "hello world"

// we don't have 50 a's, so just remove it till we hit end of string.
"apples and bananas", {'a':50, 'n':1} ==> "pples d bnns"
StringsFundamentals8/
*/
function remove(str, what) {
  //code me
 console.log(what)
  //first detemrine which characters to remove console.log(what) 
  const counting = { ...what}
  let result = ""
  for (const char of str) { 
  if (counting[char] && counting[char] > 0) {
    counting[char]--;
  } else { 
    result += char
  }
  }
 return result;
}
