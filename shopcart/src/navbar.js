import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

function Navbar(props) {
    const { totalQuantity } = props;
    return (
        <div className="app-header">
        <h1>Shop 2 React</h1>
        <div className="cart-info">
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          <p>{totalQuantity} items</p>
        </div>
      </div>
    );
}

export default Navbar;