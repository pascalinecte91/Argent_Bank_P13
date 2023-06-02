import React from "react";
import bankTree from "assets/bank-tree.jpeg";

const Banner = () => {
  return (
    <section className="banner">
      <img src={bankTree} alt="arbre" />
      <aside>
        <p className="banner__text">No fees.</p>
        <p className="banner__text">No minimum deposit.</p>
        <p className="banner__text">High interest rates.</p>
        <p>Open a savings account with</p>
        <p>Argent Bank today!</p>
      </aside>
    </section>
  );
};

export default Banner;
