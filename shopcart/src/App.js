import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import productsData from "./data";
import Navbar from "./navbar";
import DisplayProducts from "./displayProducts";

function App() {
  const [products, setProducts] = useState(productsData);
  const totalQuantity = products
    .map((product) => product.quantity)
    .reduce((total, qty) => total + qty, 0);
  return (
    <div className="App">
      <Navbar totalQuantity={totalQuantity} />
      <DisplayProducts products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
