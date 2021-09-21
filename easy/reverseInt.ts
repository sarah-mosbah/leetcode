/*
Given a signed 32-bit integer x,
return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
*/

function reverse(x: number): number {
    const num =  (x < 0 ? -1 : 1) * +("" + Math.abs(x)).split('').reverse().join('');
    if (num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) {
        return 0
    }
   
   return num;   
};

