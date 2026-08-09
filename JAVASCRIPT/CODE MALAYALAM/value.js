// JAVASCRIPT FUNCTION ARGUMENTS
//
// JavaScript is PASS-BY-VALUE.
//
// 1. PRIMITIVE
//
// let a = 100;
// two(a);
//
// The value 100 is copied.
//
// one()                 two()
// a = 100               a = 100
//                       a = 101
//
// Output:
// two 101
// one 100
//
// Both `a` are separate variables.
//
//
// 2. OBJECT
//
// let a = { value: 100 };
// two(a);
//
// The reference value is copied.
//
// one.a ───────┐
//              ↓
//           { value: 100 }
//              ↑
//              │
// two.a ───────┘
//
// Both variables point to the SAME object.
//
// a.value = a.value + 1;
//
// modifies the shared object.
//
// Object becomes:
//
// { value: 101 }
//
// Therefore:
//
// two { value: 101 }
// one { value: 101 }
//
//
// IMPORTANT:
//
// JavaScript technically uses PASS-BY-VALUE.
//
// For objects:
// the VALUE being copied is a REFERENCE.
//
//
// MODIFY OBJECT:
//
// a.value = 200;
//
// → shared object changes
//
// REASSIGN VARIABLE:
//
// a = { value: 500 };
//
// → only that function's variable points
//   to the new object.
(function () {
    console.log("Hello");
})();