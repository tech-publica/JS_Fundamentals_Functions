// EXERCISE Solution:
let nums = [21, 4, 54, 9, 4, 47, 12, 49];
// let max = nums[0];
// for(let n of nums) {
//    if(n > max) {
//     max = n;
//    }
// }
let max = findMax(nums);
console.log(max);

function findMax(arr) {
   if(!arr || arr.length == 0) {
    return null;
   } 
   let max = nums[0];
    for(let n of nums) {
        if(n > max) {
        max = n;
        }
    } 
    return max;
}