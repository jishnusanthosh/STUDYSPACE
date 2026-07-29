// //BEGINNER LEVEL
// //Activity 1: Simple Function

// function greet(){
//     console.log('Hello Wprld');
// }
// greet()

// //Activity 2: Function with Parameter

// function greetUser(name){
//     console.log("hello "+name);
    
// }
// greetUser("jishnu")


//Activity 3: Addition Function

// function add(a,b) {
//     sum=a+b
//     console.log(sum);
    
// }
// add(5,4)

//Activity 4: Return a Value

// function square(n) {
//   return retult=n*n

// }
// square(5)
// console.log(retult);

//Activity 5: Even or Odd


// function checkOddEven(num) {
//   let result;
//     if (num%2===0) {
//         result='even number'
//     } else {
//         result='odd number'
//     }
//      return result;
// }
// checkOddEven(6)
// console.log(result);

//Activity 6: Largest Number
 


// function findLargest(a,b) {
//     let largest;
//     if (a>b) {
//         largest=a
//     } else {
//         largest=b
//     }
//     return largest
// }
// console.log(findLargest(4,6)
// );

//Activity 7: String Length Counter

// function countCharacters(word) {
//     let count = 0;

//     for (let char of word) {
//         count++;
//     }

//     return count;
// }

// console.log(countCharacters("hello"));   

//Activity 8: Multiplication Table Function


// function printTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} x ${i} = ${num * i}`);
//     }
// }

// printTable(5);
 

//Activity 9: Reverse String Function
// function reverseWord(word) {
//     let reversed = "";

//     for (let i = word.length - 1; i >= 0; i--) {
//         reversed += word[i];
//     }

//     return reversed;
// }

// console.log(reverseWord("HELLO"));

//Activity 10: Vowel Counter

// function countVowels(word) {
//     let count = 0;

//     for (let i = 0; i < word.length; i++) {
//         let ch = word[i].toLowerCase();

//         if (
//             ch === "a" ||
//             ch === "e" ||
//             ch === "i" ||
//             ch === "o" ||
//             ch === "u"
//         ) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("HELLO"));      

// function countVowels(word) {
//     let vowels = "aeiou";
//     let count = 0;

//     for (let i = 0; i < word.length; i++) {
//         if (vowels.includes(word[i].toLowerCase())) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("HELLO"));