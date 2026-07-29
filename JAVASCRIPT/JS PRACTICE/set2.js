//Q1. Write a program that takes a sentence as a string and counts how many words
//are in it.

// let sentence='Write a program'
// sentence = sentence.trim();
// let words = sentence.split(" ");
// let WordCount=words.length
// console.log(WordCount);

//Q2. Given a number n, print a multiplication table for it from 1 to 10 in the format:
//'3 x 1 = 3'.
// let n=3;
// for (let i = 1; i <=10; i++) {
//     console.log(`${n}x${i}=${n*i}`);
// }

//Q3. Take a string and reverse it without using any built-in reverse method. Print
//the reversed string.

// let str='wold'
//   let arr=[];
//  for (let i = str.length-1; i>=0; i--) {
//     arr.push(str.charAt(i));
//  }
//  let reverse=arr.join("");
//  console.log(reverse);

//Q4. Check whether a given word is a palindrome (reads the same forwards and
///backwards). Print 'Yes' or 'No'.

// let num = 1234;
// let str = num.toString();

// let reverse = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
// }

// console.log(Number(reverse));

//Q5. Given a string of mixed uppercase and lowercase letters, count how many
//uppercase letters are in it.

// let str='Hello GUYS WELCOME to vscode'
// let count=0;
// for (let i = 0; i <=str.length-1; i++) {
//     if (str[i] === str[i].toUpperCase()& str[i] !== str[i].toLowerCase()) {
//         count++
//     }

// }
// console.log(count);

//Q6. Print a pattern like a right-angled triangle using '*'. For n=4 it should print 4
//rows: 1 star, 2 stars, 3 stars, 4 stars.

// let n = 5;

// for (let i = 0; i <= n; i++) {
//   let str = "";
//   for (let j = 0; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

//Q7. Find the largest and smallest number among these: 42, 7, 95, 13, 67, 28. Do
//NOT use Math.min or Math.max — use a loop.

// let arr = [42, 7, 95, 23, 67, 39];

// let largest = arr[0];
// let smallest = arr[0];

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] > largest) {
//         largest = arr[i];
//     }

//     if (arr[i] < smallest) {
//         smallest = arr[i];
//     }

// }

// console.log("Largest:", largest);
// console.log("Smallest:", smallest);

//Q8. Given a number, check if it's a prime number. Print 'Prime' or 'Not Prime'.

// let n = 13;

// let isPrime = true;

// if (n < 2) {
//     isPrime = false;
// } else {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if (isPrime) {
//     console.log("Prime");
// } else {
//     console.log("Not Prime");
// }

// Q9. Take a sentence and replace every occurrence of the word 'bad' with 'good'.
// Print the updated sentence.

// let str='bad code bad website'
// str=str.replaceAll('bad','good')
// console.log(str);
//Q10. Print the sum of all digits in a number. For example, for 1234, the answer is
//1+2+3+4 = 10.

// let num=1234;

// num=num.toString()

// console.log(num);

// console.log(typeof(num));
// let sum=0;

// for (let i = 0; i <num.length; i++) {
//     sum=sum+Number(num[i])
// }
// console.log(sum);

