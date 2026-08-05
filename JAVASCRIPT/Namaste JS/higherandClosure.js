// const radius=[2,1,4,3]

// const calculateArea=function (radius) {
//     const output=[]
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI*radius[i]*radius[i])
        
//     }
//     return output
// }
// console.log(calculateArea(radius));

// function greet(name) {
//     console.log("hello" + name);
    
// }
// function processUser(callback) {  //higher orderfunction
//     callback("jishnu")
// }
// processUser(greet)


// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function calculator(a, b, operation) {  //higer order fucntio
//     return operation(a, b);
// }

// console.log(calculator(10, 20, add));  //passing the callback funciont to the higher order function
// console.log(calculator(10, 20, multiply));



// function outer() {

//     let count = 0;

//     function inner() {
//         count++;                      ///here the count in closure m
//         console.log(count);
//     }

//     return inner;
// }

// const counter = outer();

// counter();
// counter();
// counter();