import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DisplayProducts({ products, updateQuantity }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [showImage, setShowImage] = useState({});
    const handleShow = (product) => {
        setShow(true);
        setShowImage(product);
    }

    return (

        <div className="products-container">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <h3>{product.desc}</h3>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                        onClick={() => handleShow(product)}
                    />
                    <div>
                        <FontAwesomeIcon icon={faPlusSquare} className="icon" onClick={() => updateQuantity(product.id, 1)} />
                        <FontAwesomeIcon icon={faMinusSquare} className="icon" onClick={() => updateQuantity(product.id, -1)} />
                        <div className="quantity-display">
                            <input type="number" value={product.quantity} readOnly />
                            <span>Quantity</span>
                        </div>
                    </div>
                </div>
            ))}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{showImage.desc}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={showImage.image}
                        alt={showImage.name}
                        width="350"
                        className="mx-5"
                    />
                    <p><span className="text-dark">Ratings:</span> {showImage.ratings}/5</p>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default DisplayProducts;