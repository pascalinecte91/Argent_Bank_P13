import React from 'react';

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
