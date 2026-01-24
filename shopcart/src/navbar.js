import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./home";
import Cart from "./cart";
import Login from "./login";

function Navbar({ totalQuantity, products, setProducts, updateQuantity }) {
    return (
        <div>
            <div className="app-header">
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <h1>Shop 2 React</h1>
                </Link>
                <div className="cart-info">
                    <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
                        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                        <p>{totalQuantity} items</p>
                    </Link>
                </div>
            </div>

            <Routes>
                <Route
                    path="/"
                    element={<Home products={products} setProducts={setProducts} updateQuantity={updateQuantity} />}
                />
                <Route
                    path="/cart"
                    element={<Cart cartItems={products.filter(product => product.quantity > 0)} />}
                />
                <Route
                    path="/login"
                    element={<Login/>}
                />
            </Routes>
        </div>
    );
}

export default Navbar;