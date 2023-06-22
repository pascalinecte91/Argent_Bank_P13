import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { stayLogged } from "redux/reducer/loginReducer.js";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "components/header/Header.jsx";
import Footer from "components/footer/Footer.jsx";

import User from "pages/userProfile/UserProfile";
import NotFound from "pages/notFound/NotFound";
import Home from "pages/home/Home.jsx";
import Login from "pages/login/Login.jsx";
import Transaction from "pages/transaction/Transaction.jsx";

import "style/index.scss";

/**
 * Composant racine de l'application.
 * Gère la connexion de l'utilisateur et les routes de l'application.
 * @returns {JSX.Element} Élément JSX représentant le composant App.
 */
const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const dispatch = useDispatch();

  /**
   * useEffect : pour vérifier si l'utilisateur est déjà connecté.
   * stayLogged pour maintenir la connexion et ne pas obliger à l'utilisateur de
   * se reconnecter à chaque fois pour se diriger ailleurs
   */
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(localStorage.getItem("token"));
    if (token) {
      dispatch(stayLogged(token));
    }
  }, [dispatch]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer color={isHome ? "footer__home" : ""} />
    </>
  );
};

export default App;
