import React from "react";
import { login } from "data/dataApi.js";

import { useDispatch } from "react-redux";
import { getLoggedIn } from "redux/reducer/loginReducer.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(null);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/user");
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = await login(email, password);
        if (data.body) {
            setError(null);
            dispatch(getLoggedIn(data.body.token));
            navigate('/user');
        }
        else {
            setError(data.message.replace('Error: ',""));
        }
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Username</label>
                        <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <span className="error">{error}</span>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default Login;