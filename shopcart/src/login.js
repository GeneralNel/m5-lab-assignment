import React from "react";
import { Card } from "react-bootstrap";

function Login() {
    return (
        <Card className="container mt-4" style={{ maxWidth: '400px' }}>
            <h2 className="mb-4">Sign In</h2>
            <p className="mb-4">Please login using one of the following:</p>
            <Card className="mb-4 p-4">
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="username" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Your Email Address" />
                    </div>
                    <button type="submit" className="btn btn-success">Login</button>
                </form>
            </Card>
            
        </Card>
    );
}

export default Login;