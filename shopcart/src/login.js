import React, { useState, useContext } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function Login() {
    const { isLoggedIn, setIsLoggedIn, setUserData, setUserPicture } = useContext(AuthContext);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');
    const responseFacebook = (response) => {
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
            setUserData(response);
            setUserPicture(response.picture.data.url);
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }

    return (
        <div className="Container">
            {!isLoggedIn &&
                <Card style={{ width: '800px' }} className="mt-5 mx-auto">
                    <Card.Header className="pb-4">
                        <h1>Sign In</h1>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <React.Fragment>
                                <h4>Please login using one of following:</h4>
                                <LoginForm />
                                <FacebookLogin
                                    appId="1429260018842475"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    scope="public_profile,user_friends"
                                    callback={responseFacebook}
                                    icon="fa-facebook" />,
                            </React.Fragment>
                        </Card.Text>
                    </Card.Body>
                </Card>
            }
            {isLoggedIn && <Navigate to="/checkout" replace={true} />}
        </div>
    );
}

function LoginForm() {
    return (
        <form className="border mt-3 mb-5 p-3 bg-white">
            <label className="m-2">Name:</label>
            <input type="text" name="name" placeholder="Your name" />
            <label className="m-2">Email:</label>
            <input type="email" name="email" placeholder="Your Email" />
            <input type="submit" value="Login" className="btn bg-success text-white my-3" />
        </form>
    )
}

export default Login;
