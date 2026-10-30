
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  return (
    <div className="section cart-section">
      <h2>My Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
