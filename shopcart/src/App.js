import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import productsData from "./data";
import Navbar from "./navbar";

function App() {
  const [products, setProducts] = useState(productsData);
  const totalQuantity = products
    .map((product) => product.quantity)
    .reduce((total, qty) => total + qty, 0);
  return (
    <div className="App">
      <Navbar totalQuantity={totalQuantity} />
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.desc}</h3>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div>
              <input type="number" value={product.quantity} readOnly />
              <span>Quantity</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
