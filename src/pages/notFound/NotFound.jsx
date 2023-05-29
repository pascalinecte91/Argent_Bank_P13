import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "components/navBar/Navbar";
import Footer from "components/footer/Footer";

const NotFound = () => {
  let navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className="notFound">
        <div className="notFound__number">404</div>
        <div className="notFound__content">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <div className="notFound__button"
          onClick={() => {
            navigate("/");
          }}
        >
          Retourner à la page d'accueil
        </div>

        <Footer />
      </section>
    </>
  );
};
export default NotFound;
