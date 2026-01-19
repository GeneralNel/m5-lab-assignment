import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({ totalQuantity }) {
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