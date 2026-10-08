/* PREP 

Parameters: 


Return 

Example 


Pseudo code 

*/ 

function fizzBuzz(num){
  for ( let i = 0; i<=num ;i++){
    if(i % 3 === 0 && i % 5 === 0){
console.log('fizzbuzz')

 }else if (i % 5 === 0){

  console.log('buzz')

 } else if (i % 3 === 0){

  console.log('fizz')

 } else {
  console.log(i)
 }
  }
}

fizzBuzz(15)