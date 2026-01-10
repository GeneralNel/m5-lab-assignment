import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { useState } from "react";
import productsData from "./data";

function App() {
  const [products, setProducts] = useState(productsData);

  return (
    <div className="App">
      <div className="app-header">
        <h1>Shop to React</h1>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h4>{product.desc}</h4>
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
