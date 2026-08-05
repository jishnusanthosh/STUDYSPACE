const cart = ["phone", "tab", "laptop"];

// Create Order
const promise = createOrder(cart);

// Consume the Promise
promise
  .then(function (orderId) {
    console.log("Order ID:", orderId);

    // You can call the next Promise here
    // return proceedToPayment(orderId);
  })
  .then(function(){
    proceedToPayemnt(orderId)
  })
  .catch(function (err) {
    console.log("Error:", err.message);
  });


// Producer Function
function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    // Validate Cart
    if (!validateCart(cart)) {
      return reject(new Error("Cart is not valid"));
    }

    // Simulate API call / Database operation
    const orderId = "123";

    setTimeout(() => {
      resolve(orderId);
    }, 5000);
  });
}

function createOrder(cart) {
    
}
function proceedToPayemnt(orderId) {
    
}

// Validation Function
function validateCart(cart) {
  return cart.length > 0;
}