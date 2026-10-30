import ProductList from "./components/productList";
import Cart from "./components/cart";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>shopping cart</h1>
      </header>

      <main>
        <ProductList />
        <Cart />
      </main>
    </div>
  );
}

export default App;
