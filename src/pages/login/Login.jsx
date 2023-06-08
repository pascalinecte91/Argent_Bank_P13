import React, { useState, useEffect } from "react";
import { login } from "data/dataApi.js";
import { useDispatch } from "react-redux";
import { getLoggedIn } from "redux/reducer/loginReducer.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: null, password: null });

  useEffect(() => {
    if (localStorage.getItem("token")) {

      navigate("/user");
    }
  }, [navigate]);

  const handleLogin = async () => {
    const data = await login(email, password);
    console.log(data);
    if (data.body) {
      // Stocker le jeton dans localStorage
      localStorage.setItem("token", data.body.token);
      setErrors({ email: null, password: null });
      dispatch(getLoggedIn(data.body.token));
      navigate('/user');
    } else {
      const errorMessage = data.message.replace('Error: ', '');
      if (errorMessage.includes('email')) {
        setErrors({ email: errorMessage, password: null });
      } else if (errorMessage.includes('password')) {
        setErrors({ email: null, password: errorMessage });
      } else {
        setErrors({ email: errorMessage, password: null });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="form">
      <i className="fa fa-user-circle form__icon "></i>
      <h1 className="form__title">Sign In</h1>
      <form onSubmit={handleSubmit} id="signInForm">
        <div>
          <label className="form__label" htmlFor="userName"> Email </label>
          <input className="form__input" type="text" placeholder="banby@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email} />
          {errors.email && <p className="form__error">{errors.email}</p>}
        </div>
        <div>
          <label className="form__label" htmlFor="password"> Password </label>
          <input className="form__input" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          {errors.password && <p className="form__error">{errors.password}</p>}
        </div>
        <div className="form__remember">
          <input type="checkbox" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <p className="userNotFound"></p>
        <div className="form__signIn">
          <input className="form__input" type="submit" value="SignIn " />
        </div>
      </form>
    </div>
  );
};

export default Login;