// primitive data types


// 1. number
// 2. string
// 3. boolean
// 4. undefined
// 5. null
// 6. symbol

// non primitive
// 1.object

let a = 'hello';
let b =a;

// console.log(a, b);
a = 'gello';
console.log(a, b);

let x = {job: 'develloper'};
let y = x;
// console.log(x, y);
x.job = 'full stack develloper';
console.log(x, y);

const isTrue='false'; 
if(!isTrue){
console.log('hello');
} else {
console.log('world'); }

function sum(p, q) {
    p + q;
   }
   const result = sum(2, 3);
   console.log(result);

   if ("2" === 2) {
    console.log("Inside if");
   } else {
    console.log("Inside else");
   }

   function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));
