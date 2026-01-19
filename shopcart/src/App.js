import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import productsData from "./products";
import Navbar from "./navbar";
import DisplayProducts from "./displayProducts";
import Cart from "./cart";

function App() {
  const [products, setProducts] = useState(productsData);
  const totalQuantity = products
    .map((product) => product.quantity)
    .reduce((total, qty) => total + qty, 0);
  const updateQuantity = (id, diff) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const newQty = product.quantity + diff;
        if (newQty >= 0) {
          return { ...product, quantity: newQty };
        }
        return product;
      }
      return product;
    });
    setProducts(updatedProducts);
  }
  return (
    <div className="App">
      <Navbar totalQuantity={totalQuantity} />
      <Cart cartItems={products.filter(product => product.quantity >= 0)} />
      {/* <DisplayProducts products={products} setProducts={setProducts} updateQuantity={updateQuantity} /> */}
    </div>
  );
}

export default App;
