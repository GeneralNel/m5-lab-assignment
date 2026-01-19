import React, { useState } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
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
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                                onClick={() => handleShow(product)}
                            />
                        </Col>
                        <Col xs="auto" className="d-flex align-items-center gap-2">
                            <FontAwesomeIcon icon={faPlusSquare} className="icon" onClick={() => updateQuantity(product.id, 1)} />
                            <FontAwesomeIcon icon={faMinusSquare} className="icon" onClick={() => updateQuantity(product.id, -1)} />
                            <input type="number" value={product.quantity} readOnly className="quantity-input" />
                            <span>Qty</span>
                        </Col>
                    </Row>
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