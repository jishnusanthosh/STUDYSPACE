// Q1. Take a sentence and print each word with its first letter capitalized. For
// example, 'hello world' → 'Hello World'

// let str = "hello world";
// str = str.split(" ");

// for (let i = 0; i < str.length; i++) {
//     let first = str[i].charAt(0).toUpperCase();
//     let remaining = str[i].slice(1);
//     str[i] = first + remaining;
// }

// console.log(str.join(" "));


// Q2. Given a string, find and print the most frequently occurring character (ignore
// spaces).



// let str = "hello world";
// let count = {};
// let max = 0;
// let maxChar = "";

// // Count the frequency of each character
// for (let i = 0; i < str.length; i++) {
//   let character = str[i];

//   // Ignore spaces
//   if (character === " ") {
//     continue;
//   }

//   // Count the character
//   if (count[character]) {
//     count[character]++;
//   } else {
//     count[character] = 1;
//   }
// }

// // Find the most frequent character
// for (let key in count) {
//   if (count[key] > max) {
//     max = count[key];
//     maxChar = key;
//   }
// }

// console.log("Character Count:", count);
// console.log("Most Frequent Character:", maxChar);
// console.log("Frequency:", max);

//Q3. Check if two strings are anagrams of each other (contain the same letters).
//Print 'Yes' or 'No'.


// let str1 = "listen";
// let str2 = "silent";

// if (str1.length !== str2.length) {
//     console.log("No");
// } else {
//     let s1 = str1.split("").sort().join("");
//     let s2 = str2.split("").sort().join("");
    
//     if (s1 === s2) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
// }

//Print all prime numbers between 1 and 100 in a single line separated by
//commas.



// let result = "";

// for (let i = 2; i <= 100; i++) {
//     let isPrime = true;

//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         result += i + ", ";
//     }
// }

// result = result.slice(0, -2);

// console.log(result);

//Q5. Given a number, print its digits in reverse. For 4567 print '7654'. Do NOT
//convert to string — use arithmetic only


