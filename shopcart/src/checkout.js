import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router-dom';
import { Card, ListGroup, Row, Col, Image } from 'react-bootstrap';

function Checkout({ cartItems }) {
    const { isLoggedIn, userData, userPicture } = useContext(AuthContext);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace={true} />;
    }

    return (
        <React.Fragment>
            <Card className="mt-5 mx-auto" style={{ width: '800px' }}>
                <Card.Header className="pb-4">
                    <h1>Check Out</h1>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <img src={userPicture} alt={userData?.name} />
                        <h3 className="d-inline text-success mx-2">
                            Welcome back {userData?.name}!
                        </h3>
                        <p className="my-5">Time to checkout?</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default Checkout;