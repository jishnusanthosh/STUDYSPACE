// var b=2;
// function square(num) {
//     var ans =num * num;
//     return ans;
// }
// var square2=square(b)
// var square4=square(4)
// console.log(square2);
// console.log(square4);

// 'use strict'

// function a() {
//     console.log(b);

// }
// b=10;
// a();

// // function a(params) {
// //     //lexical eviroment of a nd c
// //     var b=10
// //     c()
// //     function c(params) {
// //         //lexical envirormnebt of c
// //         console.log(b);

// //     }

// // }
// // a()

// function outer() {
//     let count = 0;

//     function inner() {
//         console.log(count);
//     }

//     return inner;
// }

// const myFunction = outer();

// myFunction();

// function counter() {

//     let count = 0;

//     return function () {
//         count++;
//         console.log(count);
//     }

// }

// const increment = counter();

// increment();
// increment();
// increment();

//  function x(params) {
//     var a=7;
//     y()
//  }

// function x(params) {
//    var i=1;
//    setTimeout(() => {
//       console.log(i);

//    }, 2000);

// }
// x()

// let x=20;
// let s=40;

// x++;
// ++s;
// console.log(x);
// console.log(s);

// let z = 20;

// console.log(z++);
// console.log(z);

// let x = 20;

// console.log(++x);
// console.log(x);

// //function statement & function declaration

// function a(params) {
//     console.log(" a called");

// }
// a()
// // function expressein

// let b =function (params) {
//     console.log("b called");

// }
// b()

// //named function expression

// let c=function c(params) {
//     console.log("c called");

// }
// c()

//FIRST CLASS FUNCTION

// const array = [10, 12, 18, 20, 11]; //retun 30

// function fn(params) {
//     let a;
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i + 1] + array[i + 2]) {
//        a= array[i + 1] + array[i + 2];
//     }
//       return a;
//   }

// }
// console.log(fn(array));


// let x=10;
// if (function fn(){
//     x=x-typeof(fn)
// }) {
    
// }
// console.log(x);


// let x=[10,20,40]
// let y=[10,20,40]
// let z=y;

// console.log(typeof[x]);
// console.log(typeof[y]);
// console.log(typeof[z]);

// console.log(x==y);
// console.log(z==y);
// console.log(z==x);


// var a={name:'jishnu'}
// var b={name:'jishnu'}
// console.log(a==b);
// let a = [1, 2];
// let b = [1, 2];
// let c = a;

// console.log(a == b);   // false
// console.log(a === b);  // false

// console.log(a == c);   // true
// console.log(a === c);  // true

