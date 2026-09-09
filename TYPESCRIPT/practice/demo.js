"use strict";
let dataAny = "hello";
console.log(dataAny.toUpperCase());
let dataUnknown = "hello";
console.log(typeof dataUnknown);
if (typeof dataUnknown === "string") {
    console.log(dataUnknown.toUpperCase());
}
