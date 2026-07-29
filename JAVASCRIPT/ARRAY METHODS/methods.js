// let arr = [1,2,3];


// console.log(typeof arr);


//join

// let fruits = ["Apple","Banana","Orange"];

// // console.log(fruits.join("-"));

// console.log(fruits.isArray("Hello"));

// let arr = [1,2.,'hello'];

// console.log(Array.isArray(arr));

// console.log(Array.isArray("Hello"));

// console.log(arr.splice(1));


//filter 


const items=[
    {name:'bike', price : 10870},
    {name:'van', price : 600},
    {name:'car', price : 1000},
    {name:'booke', price : 1900},
    {name:'phone', price : 13400},
    {name:'tv', price : 18700},
    {name:'cpmputer', price : 18900},


]

// const filtred=items.filter((a)=>{
//     return a.price <=1000

// })

// console.log(filtred);

//filter create new array


//map method


// const itemsNames=items.map((item)=>{
//     return item.name
// })
// console.log(itemsNames);


//find 

// const found=items.find((item)=>{
//     return item.name==='bike'
// })



// console.log(found);


//foreach

// items.forEach((item)=>{
//     console.log(item.name);
    
// })

//some it retun true or false , means its exist or not in the array

// const haveItem=items.some((item)=>{
//     return item.price <=1000;
// })

// console.log(haveItem);


//every   
// it return true or false and it check the conditon for all element

// const haveItem=items.every((item)=>{
//     return item.price <=1000;
// })

// console.log(haveItem);


// const total=items.reduce((currentTotal,item)=>{
//     return item.price + currentTotal
// },0)

// console.log(total);


// let arr = [1,[2,[3]]];

// console.log(arr.flat(2));

// let arr = [1,2,3];

// let result = arr.flatMap(x=>[x,x*2]);

// console.log(result);
// let arr = [1,2,3,4];

// arr.fill(0);

// console.log(arr);

// let arr = [1,2,3,4,5];

// arr.copyWithin(0,3);

// console.log(arr);

// console.log(Array.isArray([1,2,3]));

// let str = "Hello";

// let arr = Array.from(str);

// console.log(arr);

// let arr = Array.of(10, 20, 30);

// console.log(arr);

