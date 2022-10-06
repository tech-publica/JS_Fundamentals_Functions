
// let greet = function() { // function expression
//     console.log("hello JavaScript world!");
// }

function greet() {       // function declaration
    console.log("hello JavaScript world!");
}

greet();

const printSum= function(x, y) { // x,y are the parameters
    console.log(`the sum of ${x} and ${y} is ${x+y}`);
}
printSum(2,4);   // 2 and 4 are the function arguments
printSum(4,2);   // 4 and 2 are the function arguments
printSum(3,10);  // 3 and 10 are the function arguments
let z = 10;
let w = 20;
printSum(z, w);  // z and w are the function arguments
// the value of the arguments are copied into the parameters

let x1 = 0;
let x2 = 1;
function swap(x1, x2) {
    const temp = x1;
    x1 = x2;
    x2 = temp;
}
swap(x1,x2);
console.log(`x1 value is ${x1}, x2 value is ${x2}`);

const sum = function(n1, n2) {
    return n1 + n2;
}
let s = sum(12345 , 54321);
console.log(s);

function indexOf(array, value) {
    for(let i=0; i < array.length; i++) {
         if(array[i] === value) {
            return i;
         }
    }
    return -1;
}
const myArray = [0,10,20,30,40,50];
let pos = indexOf(myArray, 20);
console.log(pos);
pos = indexOf(myArray, 70)
console.log(pos);


const sumArrowFunction = (n1, n2) => {
   return n1 + n2;
}
const sumArrowFunctionOneLine = (n1, n2) => n1 + n2;
let h = sumArrowFunctionOneLine(10, 20);
console.log(h);


function avg(elements) {
    if (!elements || elements.length==0) {
        return null;
    }
    let sum = 0;
    for(e of elements) {
      sum += e;
  }
  return sum/elements.length;
}
console.log(avg([]));
console.log(avg([2,4,6,8]));

