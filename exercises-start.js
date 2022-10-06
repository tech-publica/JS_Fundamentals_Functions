// EXERCISE:
// here's some code we are already kind of familiar with
let nums = [21, 4, 54, 9, 4, 47, 12, 49];
let max = nums[0];
for(let n of nums) {
   if(n > max) {
    max = n;
   }
}
console.log(max);

// in line we what we discussed we want to make it more general
// create a function that receives an array as a parameter
// and return the maximum integer in that array.
// in the array is null or empty the function must return null
// then comment out lines 3 to 8 and create the variable max
// initialising it with the retun of the call to the function,
// passing the array nums as argument
// REMEMBER: if you create the function as a function expression
// then it must be defined BEFORE being called.

