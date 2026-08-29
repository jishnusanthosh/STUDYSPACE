var a = 10;
let b = "20";
const c = 30;

console.log(a + b);1020 //concatination
console.log(b + c);2030 //concatination
console.log(a + c); 40

//This is called type coercion — JavaScript automatically converts one data type into another when necessary.

console.log(10 - "5"); //5
console.log(10 * "5"); //50
console.log(10 / "2"); //5
console.log(10 + "5"); //105    + can perform string concatenation


console.log(5 == "5"); //true
console.log(5 === "5"); //  false  checking the type aslo

console.log(0 == false); //true
console.log(0 === false); //false type int and boolean 

console.log(null == undefined);  //true
console.log(null === undefined); // false



Boolean(0);         // false     0 is a falsy value.
Boolean("0");       // true    This is a string, and the string is not empty.
Boolean("");        // false   An empty string is falsy.
Boolean(" ");       // true   This string contains a space, so it is not empty.
Boolean(null);      // false  Falsy.
Boolean(undefined); // false  Falsy.
Boolean([]);        // true   An empty array is still an object, and objects are truthy.
Boolean({});        // true   An empty object is still an object, so it is truthy.


let a = 10;
let b = "10";

if (a == b) {
    console.log("A"); //A
}

if (a === b) {
    console.log("B");  
}

if ("0") {
    console.log("C"); //C
}

if (0) {
    console.log("D"); 
}

if ([]) {
    console.log("E");//E
}



console.log(a); //undefined

var a = 10;

console.log(b); //reference error

let b = 20;

var x = 10;

{
    var x = 20;
    console.log(x);//20
}

console.log(x); //10


let y = 10;

{
    let y = 20;  
    console.log(y); //20
}

console.log(y); //10