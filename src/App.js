import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from 'components/header/Header.jsx';
import Footer from 'components/footer/Footer.jsx';

import User from 'pages/userProfile/User';
import NotFound from 'pages/notFound/NotFound';
import Home from 'pages/home/Home.jsx';
import Login from 'pages/login/Login.jsx';
import Transaction from 'pages/transaction/Transaction.jsx';
import "style/index.scss";

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Header /> 
    
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />  
        <Route path="/user" element={<User />} /> 
        <Route path='/transactions' element={<Transaction />} />
        <Route path="/*" element={<NotFound />} /> 
      </Routes>
      <Footer color={isHome ? 'footer__home' : ''} /> 
    </>
  );
};

export default App;
