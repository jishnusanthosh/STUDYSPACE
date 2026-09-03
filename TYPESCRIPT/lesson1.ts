//infer types (implicit types)

// let username="jishnu"
// username=30

//defining types (explicit types)

// let username:string="jishnu"
// let num:number=100
// let bool:true
// let bool1:boolean=true
// let skills:string[]=['js','css','ts']
// let count:number[]=[1,2,3]
// let emptyarray:[]=[]

// let userdetails:{name:string; age:number}={name:"jishnu",age:30}

//interface

// interface Details {
//   name: string;
//   age: number;
//   salary: number;
//   getName:()=> void;
// }

// let userdetails: Details = { name: "jishnu", age: 30, salary: 10000 ,
//     getName() {
//         console.log(this.name);

//     },
// };
// let admindetails: Details = { name: "jishnu", age: 30, salary: 10000 };

//type

// type Details = {
//   name: string;
//   age: number;
//   salary: number;
//   getName: () => void;
// };

//  let userdetails: Details = { name: "jishnu", age: 30, salary: 10000 ,
//     getName() {
//         console.log(this.name);

//     },
// };

//union  |

// let skills :(string| number |boolean)[]=['js',20]

// //optional  ?

// type Details = {
//   name: string;
//   age: number;
//   salary: number;
//   getName?: () => void; //does not counter an error if not declare the function 
// };

// let userdetails: Details = { name: "jishnu", age: 30, salary: 100000 ,
// };


