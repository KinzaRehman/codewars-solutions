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


/*aden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" */ 

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  {
    value: function toJadenCase() {
      return this
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
  }
);