// console.log("time starting .");

// setTimeout(() => {
//     console.log("3 second finished");

// }, 3000);

// console.log("timer scheduled");

// function greet(name, callback) {
//   console.log(name);
//   callback(name);
// }
// function mesasge(name) {
//   console.log("hello", name);
// }
// greet("jishnu", mesasge);


// function downloadfile(callback) {
//     console.log("downloading... file");
    
//     setTimeout(() => {
//         console.log("dwonload completed");
//         callback()
        
//     }, 2000);
// }

// function processingfile() {
//     console.log("processing file");
    
// }
// downloadfile(processingfile)

// function loginuser(username,callback) {
//     console.log("loggin in "+username + " ...");
//     setTimeout(() => {
//         console.log("login successful");
//         callback(username)
        
//     }, 2000);
// }
// function showdashboard(username) {
//     console.log("welcome to dashboard " + username + " !");
    
// }
// loginuser("ali",showdashboard)


function placeorder(item,callback) {
    console.log("placing orer for" + item + "...");
    setTimeout(() => {
        console.log("order placed");
        callback(item)
    }, 2000);
    


}

function shiporder(item,callback) {
    console.log("shipping" + item + "..")

    setTimeout(() => {
        console.log("order shippped");
        callback(item)
        
    }, 2000);
    
}

function deliverOrder(item) {
    console.log(item +"dellvered to your door");
    
}

placeorder("laptop ",function(item)
{

    shiporder(item,function(item)
    {
        deliverOrder(item)
    })
})