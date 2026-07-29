// 1. What are array iteration methods in JavaScript?
// forEach()
// map()
// filter()
// reduce()
// flatMap()
// every()
// some()


// 2. Why do we use array iteration methods instead of normal for loops?
// Because they

// make code shorter
// improve readability
// reduce bugs
// follow functional programming style
// avoid manual index management


// arr=[1,2,3,4,5]

// // for(let i=0;i<arr.length;i++){
// //    console.log(arr[i]);
// // }

// // arr.forEach(element => {
// //     ;console.log(element);
    
// // });

//3. What is the difference between for...of and for...in?

// const arr = ["A", "B", "C"];

// for (const element of arr) {
//     console.log(element);
    
// }

// for (const key in arr) {
//     console.log(key);
    
// }

//6. Can for...of be used with objects? Why or why not? NO

//Because normal objects are not iterable.
// const person = {
//     name:"John"
// };

// console.log(Object.keys(person));
// console.log(Object.values(person)
// )
// console.log(Object.entries(person));

// console.log(person.name);

//9. Does forEach() return a new array?

// const result = [1,2,3].forEach(x=>x*2);

// console.log(result);

// // undefined



// const fruits = ["Apple", "Banana"];

// for (const [index, fruit] of fruits) {
//     console.log(index, fruit);
// }

// const original = [1, 2, 3];
// const copy = [...original];

// console.log(copy);

// const a = [1, 2];
// const b = [3, 4];

// const result = [...a, ...b];

// console.log(result);

// const user = {
//     name: "John",
//     age: 25
// };




// // const newUser = {
// //     ...user
// // };

// // console.log(newUser);

// Spread Operator (Expands)

// const numbers = [10, 20, 30];

// console.log(numbers);

// console.log(...numbers);


// const arr1 = [1,2];
// const arr2 = [...arr1,3,4];

// console.log(arr2);


// const user = {
//     name:"John",
//     age:25
// };

// const newUser = {
//     ...user,
//     city:"Kochi",
//     name:"jihnu"

// };
// console.log(user);
// console.log(newUser);


// const letters = [..."Hello"];

// console.log(letters);




// function sum(...numbers) {
//     console.log(numbers);
// }

// sum(1, 2, 3, 4);

// const numbers = [10, 20, 30, 40];

// const [first,recond,third,fourth,fifth, ...remaining] = numbers;

// console.log(first);
// console.log(recond);
// console.log(third);

// console.log(remaining);

// console.log(numbers);

// const numbers = [10,20,30,40,50];

// const [,,,,...remaining] = numbers;
// console.log(remaining);




const frontend = ["HTML","CSS"];

const backend = ["Node","Express"];

const fullstack = [...frontend,...backend];

console.log(fullstack);