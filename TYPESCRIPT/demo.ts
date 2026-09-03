let dataAny:any ="hello"
console.log(dataAny.toUpperCase());

let dataUnknown:unknown="hello"
console.log(typeof dataUnknown);

if (typeof dataUnknown==="string") {
 console.log(dataUnknown.toUpperCase());
 
    
}

