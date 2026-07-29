//Activity 21: Function Returning Another Function
// function createGreeting() {
//     return function() {
//         return "Welcome";
//     };
// }

// let greet = createGreeting();

// console.log(greet());

//Activity 22: Nested Function

// function calculateBill(bill) {

//     function calculateTax() {
//         return bill * 0.18; 
//     }

//     let tax = calculateTax();
//     let finalAmount = bill + tax;

//     return finalAmount;
// }

// console.log(calculateBill(1000));



//Activity 23: Default Parameters

// function welcome(name = "Guest") {
//     return `Welcome ${name}`;
// }

// console.log(welcome());
// console.log(welcome("jishnu"));

//Activity 24: Anonymous Function

// const isDivisibleBy5 = function(num) {
//     if (num % 5 === 0) {
//         return "Divisible by 5";
//     } else {
//         return "Not Divisible by 5";
//     }
// };

// console.log(isDivisibleBy5(10));

//Activity 25: Callback Function

// function double(num) {
//     return num * 2;
// }

// function processNumber(num, callback) {
//     return callback(num);
// }

// console.log(processNumber(10, double));

//Activity 26: IIFE

// (function () {
//     console.log("Program Started");
// })();

// (() => {
//     console.log("Program Started");
// })();

//Activity 27: Function Composition
// function double(num) {
//     return num * 2;
// }

// function square(num) {
//     return num * num;
// }

// let result = square(double(5));

// console.log(result);

// function isStrongNumber(num) {
//     let original = num;
//     let sum = 0;

//     while (num > 0) {
//         let digit = num % 10;

//         // Calculate factorial of the digit
//         let factorial = 1;
//         for (let i = 1; i <= digit; i++) {
//             factorial *= i;
//         }

//         sum += factorial;
//         num = Math.floor(num / 10);
//     }

//     if (sum === original) {
//         return "Strong Number";
//     } else {
//         return "Not Strong Number";
//     }
// }

// console.log(isStrongNumber(145));
// console.log(isStrongNumber(123));
// console.log(isStrongNumber(2));



//Activity 29: Character Frequency Function
// function characterFrequency(word, letter) {
//     let count = 0;

//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(characterFrequency("MISSISSIPPI", "S"));
// console.log(characterFrequency("BANANA", "A"));
// console.log(characterFrequency("HELLO", "L"));

function analyzeSentence(sentence) {
    let words = 0;
    let vowels = 0;
    let characters = sentence.length;

    // Count words
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " " && (i === 0 || sentence[i - 1] === " ")) {
            words++;
        }

        // Count vowels
        let ch = sentence[i].toLowerCase();

        if (
            ch === "a" ||
            ch === "e" ||
            ch === "i" ||
            ch === "o" ||
            ch === "u"
        ) {
            vowels++;
        }
    }

    return {
        words: words,
        vowels: vowels,
        characters: characters
    };
}

let result = analyzeSentence("Hello World");

console.log("Words:", result.words);
console.log("Vowels:", result.vowels);
console.log("Characters:", result.characters);