import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/home/Home.jsx';
import Login from 'pages/login/Login.jsx';
import Header from 'components/header/Header.jsx';
import Footer from 'components/footer/Footer.jsx';
import User from 'pages/userProfile/User';
import NotFound from 'pages/notFound/NotFound';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
