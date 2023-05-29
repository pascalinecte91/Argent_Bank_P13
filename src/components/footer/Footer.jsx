import React from 'react';

const Footer = () => {
  // Obtient l'année actuelle
  const currentYear = new Date().getFullYear();
  
  return (
    <section className="footer"> 
      <p className="footer__content">Copyright {currentYear} Argent Bank</p>
    </section>
  );
};

export default Footer;
