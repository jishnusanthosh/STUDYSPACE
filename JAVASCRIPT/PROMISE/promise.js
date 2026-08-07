// const mypromise=new Promise (function(res,rej){
//     setTimeout(function(){
//         res("task completed")
//     },2000)
// })

// mypromise.then(function(result){
//     console.log(result);

// })

// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout");
// },0);

// Promise.resolve().then(() => {
//     console.log("Promise");
// });

// console.log("End");

// const checkNumber=new Promise (function(res,rej){
//     let num=37;

//     if (num>10) {
//         res("number is big")
//     } else {
//         rej("number is small")
//     }
// })

// checkNumber.then(function(result){
//     console.log(result);

// })
// .catch(function(error){
//     console.log(error);

// })

// console.log("Start");

// setTimeout(() => {
//     console.log("Timer");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise");
// });

// console.log("End")

// let downloadfile=new Promise((res,rej)=>{
//     let downloadsuccess=true;

//     console.log("file downloading");

// setTimeout(() => {
//     if (downloadsuccess) {
//         res("file download completed")
//     } else {
//         rej("file download failed")
//     }
// }, 0);

// })

// downloadfile.then((value)=>{
//     console.log(value);

// }).catch((error)=>{
//     console.log(error);

// })

// function downloadfile(params) {
//   return new Promise((res, rej) => {
//     let downloadsuccess = true;

//     console.log("file downloading");

//     setTimeout(() => {
//       if (downloadsuccess) {
//         res("file download completed");
//       } else {
//         rej("file download failed");
//       }
//     }, 2000);
//   });
// }
// downloadfile()
// .then((value) => {
//   console.log(value);
// })
// .catch((error) => {
//   console.log(error);
// });

const promise = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Promise Done");
    }, 0);

});


promise.then((result) => {
    console.log(result);
});