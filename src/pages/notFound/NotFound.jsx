import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
		<section className="notFound">
			<h1 className="notFound__nbre">404 ⛔</h1>
			<p className="notFound__content">Oups!  Cette page n'existe pas!</p>
			<NavLink className="notFound__link" to="/">
				Dirigez-vous  vers la page d'accueil
			</NavLink>
		</section>
	);

};
export default NotFound;
