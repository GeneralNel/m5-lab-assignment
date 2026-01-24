import { ListGroup, Row, Col, Image, Button } from 'react-bootstrap';

function Cart({ cartItems }) {
    return (
        <div className="container mt-4 pb-5" style={{ maxWidth: '800px' }}>
            <h2 className="mb-4">Your Cart Items</h2>
            <ListGroup variant="flush">
                {cartItems.map((item) => (
                    <ListGroup.Item key={item.id} className="py-3">
                        <Row className="align-items-center">
                            <Col xs={3} md={2}>
                                <Image src={item.image} alt={item.name} fluid />
                            </Col>
                            <Col>
                                <h6 className="mb-0">{item.desc}</h6>
                                <small className="text-muted">Quantity: {item.quantity}</small>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <Button
                disabled={cartItems.length === 0}
                variant="primary"
                className="mt-4"
                onClick={() => alert('Proceeding to checkout...')}
            >
                Check Out
            </Button>
        </div>
    );
}

export default Cart;