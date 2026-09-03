//How to turn a stroing into a number:
const stringToNumber = function(str){
  // put your code her
  return Number(str);
}

const Test = require('@codewars/test-compat');

describe( "stringToNumber", function(){
  it( "should work for the examples" , function(){
    Test.assertEquals(stringToNumber("1234"),1234)
    Test.assertEquals(stringToNumber("605"), 605)
    Test.assertEquals(stringToNumber("1405"),1405)
    Test.assertEquals(stringToNumber("-7"),  -7)
  });
});