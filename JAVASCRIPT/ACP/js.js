//Activity 1: Print Numbers 1 to 10

//for loop

// for (let i = 0; i <=10; i++) {
//     console.log(i);
// }


// i=0;

// do {
//     console.log(i);
//     i++;
    
// } while (i<=10);


// let i=0;
// while (i<=10) {
//     console.log(i);
//     i++;
    
// }


//Activity 2: Print Numbers 10 to 1

// for (let i = 10; i >=1; i--) {
//     console.log(i);
// }

//ctivity 3: Print Even Numbers

// for (let i = 2; i <=20; i+=2) {
//     console.log(i);
       
// }

//Activity 4: Print Odd Numbers



// for (let i = 1; i <=20; i+=2) {
//     console.log(i);
       
// }

//Activity 5: Multiplication Table


// for (let i = 1; i <=10; i++) {
    
//     console.log(`7 x ${i}=${7*i}`);
    
    
// }

//Activity 6: Sum of Numbers

// let sum=0;
// for (let i = 0; i <=100; i++) {
//     sum=sum+i;   
// }
// console.log(sum);


//Activity 7: Count Digits

// let num=45678;
// let count=num.toString()
// console.log(count.length);

//Activity 8: Print Each Character

// let word = "JAVASCRIPT"; 
// for (let i = 0; i <=word.length; i++) {
//     console.log(word.charAt(i));
// }


//Activity 9: Count Characters

// let word = "HELLO";
// for (let i = 1; i <= word.length; i++) {
//     if (i===word.length) {
//         console.log(i);
//         break;
//     }
// }

//ctivity 10: Reverse Countdown

// for (let i = 20; i>=1; i--

// ) {
//     console.log(i);
      
// }

// Activity 11: Count Vowels

// let word="programming"
// let count=0;
// for (let i = 0; i < word.length; i++) {
//     if (word.includes("a","e","i","o","u")) {
//         count++
//     }
// }
// console.log(count);

// let word="programming"
// let count=0;
// for (let i = 0; i <=word.length; i++) {
//     if (word.includes("a,e,i,o,u",1)) {
//         count++
//     }
// }
// console.log(count);

// let word = "programming";
// let vowels = ["a", "e", "i", "o", "u"];
// let count = 0;

// for (let i = 0; i < word.length; i++) {
//     if (vowels.includes(word[i])) {
//         count++;
//     }
// }

// console.log(count);

//Activity 13: Reverse a String

// let word="hello";
// let rev=word.split('')
// console.log(rev);
// rev=rev.reverse()
// console.log(rev);
// rev=rev.join('')
// console.log(rev);


// Activity 14: Palindrome Checker

// let word="madam"

// let rev=word.split('').reverse().join('')
// if (word===rev) {
//     console.log(word +" is palidrome");
    
// }else{
//    console.log(word +" is not palidrome");
// }


//Activity 15: Count Specific Character


// let word = "banana";
// let count = 0;

// for (let i = 0; i < word.length; i++) {
//     if (word[i]==='a') {
//         count++;
//     }
// }

// console.log(count);


//Activity 16: Factorial
// let num=5;
// let result=1;
// for (let i = 1; i <=num ; i++) {
//     result*=i;
    
// }
// console.log(result);


//Activity 17: Sum of Digits


// let num = 1234;
// num=num.toString()
// console.log(num);
// console.log(typeof(num));
// num=num.split('')
// let sum=0;
// for (let i = 0; i <num.length ; i++) {
    
//    sum=sum+Number(num[i]);
   
// }
// console.log(sum);

//Activity 18: Count Even Digits
// let num = 284639;

// let count=0

// num=num.toString();

// for (let i = 0; i < num.length; i++) {
//     let digit=Number(num[i])
    
//     if (digit%2===0) {
//         count++
//     }
// }
// console.log(count);


//Activity 19: Print Pattern

// for (let i = 1; i <=5; i++) {
//     let n='';
//     for (let j = 1; j <=i; j++) {
//        n=n+"*"
//     }
//    console.log(n);
   
// }

//Activity 20: Print Number Pattern

// for (let i = 1; i <= 5; i++) {
//     let pattern = "";

//     for (let j = 1; j <= i; j++) {
//         pattern += j;
//     }

//     console.log(pattern);
// }

//TOUGH LEVEL


//priime number

//  let num=17;
//  if (num%2===0) {
//    console.log("Not Prime Number");
   
//  } else {
//     console.log("prime number");
//  }

//Activity 22: Print All Prime Numbers
//Display all prime numbers between 1 and 100.


// for (let i = 2; i <= 100; i++) {
//     let prime = true;

//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             prime = false;
//             break;
//         }
//     }

//     if (prime) {
//         console.log(i);
//     }
// }


//Activity 23: Armstrong Number Checker

// let num = 153;
// let sum = 0;

// for (let digit of num.toString()) {
//     sum += digit ** 3;
// }

// if (sum === num) {
//     console.log("Armstrong Number");
// } else {
//     console.log("Not Armstrong Number");
// }