import React from "react";

/**
 * Composant représentant le pied de page.
 * @param {string} color - La couleur du pied de page.
 * @returns {JSX.Element} Élément JSX représentant le composant.
 */
const Footer = ({ color }) => {
  // Obtient l'année actuelle
  const currentYear = new Date().getFullYear();

  return (
    <section className={`footer ${color}`}>
      <p className="footer__content">Copyright {currentYear} Argent Bank</p>
    </section>
  );
};

export default Footer;
