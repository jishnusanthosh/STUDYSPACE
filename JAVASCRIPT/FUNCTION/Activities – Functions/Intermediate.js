
//Activity 11: Function Expression



// const cube = function(num) {
//     return num ** 3;
// };

// console.log(cube(3));

//Activity 12: Arrow Function
// const areaOfRectangle = (length, width) => {
//     return length * width;
// };

// console.log(areaOfRectangle(10, 5));

//Activity 13: Palindrome Checker
// function isPalindrome(word) {
//     let reversed = "";

//     for (let i = word.length - 1; i >= 0; i--) {
//         reversed += word[i];
//     }

//     if (word === reversed) {
//         return "Palindrome";
//     } else {
//         return "Not Palindrome";
//     }
// }

// console.log(isPalindrome("MADAM"));
// console.log(isPalindrome("HELLO"));

// Activity 14: Grade Calculator
// function calculateGrade(mark) {
//     if (mark >= 90) {
//         return "A";
//     } else if (mark >= 75) {
//         return "B";
//     } else if (mark >= 50) {
//         return "C";
//     } else {
//         return "Fail";
//     }
// }

// console.log(calculateGrade(95));
// console.log(calculateGrade(80));
// console.log(calculateGrade(65));
// console.log(calculateGrade(40));

//Activity 15: Prime Number Function
// function isPrime(num) {
//     if (num < 2) {
//         return "Not Prime";
//     }

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return "Not Prime";
//         }
//     }

//     return "Prime";
// }

// console.log(isPrime(7));
// console.log(isPrime(10));
// console.log(isPrime(13));
// console.log(isPrime(1));

//Activity 16: Factorial Function
// function factorial(num) {
//     let result = 1;

//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }

//     return result;
// }

// console.log(factorial(5));


//Activity 17: Count Specific Character

// function countCharacter(word, character) {
//     let count = 0;

//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === character) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countCharacter("banana", "a"));

//Activity 18: Password Strength Checker

// function checkPassword(password) {
//     if (password.length < 6) {
//         return "Weak";
//     } else if (password.length <= 10) {
//         return "Medium";
//     } else {
//         return "Strong";
//     }
// }

// console.log(checkPassword("abc"));
// console.log(checkPassword("abcdef"));
// console.log(checkPassword("javascript123"));

//Activity 19: Number Sign Checker

// function checkSign(num) {
//     if (num > 0) {
//         return "Positive";
//     } else if (num < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// }

// console.log(checkSign(10));
// console.log(checkSign(-5));
// console.log(checkSign(0));

//Activity 20: Armstrong Number Function


// function isArmstrong(num) {
//     let str = num.toString();
//     let sum = 0;

//     for (let digit of str) {
//         sum += Number(digit) ** str.length;
//     }

//     return sum === num ? "Armstrong" : "Not Armstrong";
// }

// console.log(isArmstrong(153));
// console.log(isArmstrong(9474));
// console.log(isArmstrong(100));