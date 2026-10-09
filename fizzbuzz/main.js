/* PREP 

Parameters: if its a multple of 3 then Fizz
if * 5 then Buzz
if both 3 & 5 then FizzBuzz
it has to take a loop with a if else conditional conclusive of the regualr numbers that are
not multiples of 3 or 5 



Return: it should return Fizz if % 3 ===0 
Buzz % 5 === 0
fizzBuzz if both multuple of 3 and 5 % = 0 

Example:
fixxBuzz(16) -> 
[1, 2, "fizz",  4, "Buzz",  "Fizz",  7, 8, "Fizz",  "Buzz", 11, "Fizz", 13, 14, "FizzBuzz," 16 ]


Pseudo code : n is the parameter
function is fizzbuzz(n) { 

for (let i = x; i<= x; i++) {
if (i %3 && i % 5 === 0) {
return(fizzBuzz)}
}}

*/ 

function fizzBuzz(n) {

    const result = [] 
    for (let i = 1; i <= n; i++) { 

        if (i % 3 == 0 &&i % 5 === 0 ){
            result.push("FizzBuzz")
        } else if ( i % 5 === 0 ) {
            result.psuh("BUzz")
        } else if  (i % 3 === 0) {
            result.push("fizz")
        } else {
            result.push(i)
        }
    }
 return result
}

fizzBuzz(20);
fizzBuzz(30);