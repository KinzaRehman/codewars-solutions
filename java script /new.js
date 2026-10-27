
/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */ 
function accum(s) {
	// your code
   let splitting = s.split("")
  // console.log(splitting)
let initialString = []
for (let i = 0 ; i <s.length; i++){
let firstup = splitting[i].toUpperCase()
let repeatString = splitting[i].toLowerCase().repeat(i)

initialString.push(firstup + repeatString)
}
  return initialString.join("-")

  }
/* p we take in a string 

r: we're going to return the length of the string with each letter based on the placerepeated 
for instance 

E: accum('ABCDe') -> A-Bb-Ccc-Dddd 
pseudocode

function accum(s) {
we have to do a loop 
let splitting = s.split("")
let initialString = []
for (let i = 0 ; i <s.length; i++){
let repeatString = splitting[i].repeat

}

}

*/