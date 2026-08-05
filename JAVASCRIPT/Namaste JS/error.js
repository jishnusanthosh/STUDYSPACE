// // try {
// //     let x=10
// //     let result=x+1
// //     console.log(result);

// // } catch (error) {
// //     console.log("somthing wrong"+error);

// // }

// // function division(a, c) {
// //   try {
// //     if (c===0) {
// //         throw "c cannot be 0";
// //     }
// //     let result = a / c;
 
// //   } catch (error) {
// //     console.log("wrong operand", +error);
// //   }
// // }

// // division(3, 0);



// try {
//     let a = 10;
//     let b = 0;

//     if (b == 0) {
//         throw "b can't be zero";
//     }

//     console.log(a / b);
   

// } catch (error) {
//     console.log("Wrong:", error);
   
// }
// finally{
//     console.log("divion completed");
    
// }
// try {
//   const jsonString = '{"name":"Alice"}';
//   const user = JSON.parse(jsonString);
//   console.log(user.name); // Alice

//   // This JSON is invalid: missing quote
//   const badJson = '{"name": Alice}';
//   JSON.parse(badJson);
// } catch (err) {
//   console.error("JSON parsing failed:", err.message);
// }

// function calculateArea(radius) {
//   if (radius <= 0) {
//     throw new Error("Radius must be positive");
//   }
//   return Math.PI * radius * radius;
// }

// try {
//   console.log(calculateArea(5)); // Works fine
//   console.log(calculateArea(-2)); // Throws
// } catch (err) {
//   console.error("Calculation failed:", err.message);
// }

// try {
//   console.log("Opening connection");
//   throw new Error("Connection failed");
// } catch (err) {
//   console.error("Error:", err.message);
// } finally {
//   console.log("Closing connection");
// }


try {
  setTimeout(() => {
    throw new Error("Oops");
  }, 3000);
} catch (err) {
  console.log("Caught:", err.message); // Never runs
}