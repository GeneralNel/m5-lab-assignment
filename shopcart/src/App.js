import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import productsData from "./products";
import Navbar from "./navbar";
import { BrowserRouter as Router } from "react-router-dom";

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
    <Router>
      <div className="App">
        <Navbar
          totalQuantity={totalQuantity}
          products={products}
          setProducts={setProducts}
          updateQuantity={updateQuantity}
        />
      </div>
    </Router>
  );
}

export default App;
