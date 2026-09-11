// structions

// Output

// The greatest common divisor (gcd) of two non-negative integers `a` and `b` is, well, their greatest common divisor. For instance, `gcd(6,4)=2` and `gcd(100,17)=1`. Note that in these cases the gcd can be expressed as a linear combination with integer coefficients of the given two numbers a and b:

// - `2=gcd(6,4)=1⋅6+(−1)⋅4` --> with coefficients 1 and -1
// - `1=gcd(100,17)=8⋅100+(−47)⋅17` --> with coefficients 8 and -47.

// More generally, given any two non-negative integers `a` and `b`, their gcd can always be expressed as a linear combination of `a` and `b` using integer coefficients. In other words, there exist integer numbers `x` and `y` such that: `gcd(a,b)=x⋅a+y⋅b`. Note that the coefficients `x` and `y` are not determined uniquely.

// Your goal is to write the function gcd\_coeff that accepts two non-negative integers `a` and `b` and returns a tuple `(x,y)` of integer coefficients `x` and `y` expressing `gcd(a,b)` as `x⋅a+y⋅b`. You may assume that `a≥b` is always satisfied.

// Note: Testing will involve randomly chosen integers of large magnitude, so efficiency is of importance.
/*
 * Input:  two non-negative integers a and b, satisfying a >= b.
 * Output: an array of two integers [x, y], satisfying gcd(a, b) = x*a + y*b.
 */

function gcdCoeff(a, b) {
  let oldR = a;
  let r = b; 
  
  let oldX = 1;
  let x = 0;
  
  let oldY = 0;
  let y = 1;
  
  while (r!== 0) {
    const quotient = Math.floor(oldR/ r); 
    [oldR, r] = [r, oldR - quotient * r];
    [oldX, x] = [x, oldX- quotient * x];
    [oldY, y] = [y, oldY - quotient * y];
  }
   
    return [oldX, oldY];
}
