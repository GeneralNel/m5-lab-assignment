import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([{
    id: 1,
    name: "Cologne",
    image: "./products/cologne.jpg",
    desc: "Unisex Cologne",
    quantity: 0,
  }]);

  return (
    <div className="App">
      <h1>Shop</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <h4>{product.desc}</h4>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
}

export default App;
