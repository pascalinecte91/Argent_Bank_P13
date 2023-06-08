import dataMockedFeature from "data/dataMockedFeature.js";
import React from "react";

const Feature = () => {
  // Rendu du composant
  return (
    // parcours le tableau dataMockedFeature pour generer un element pour chaque {objet}
    <section className="features">
      {dataMockedFeature.map((feature, index) => {
        return (
          <section className="features__key" key={index}>
            <img
              className="features__icon"
              src={feature.imgPath}
              alt={feature.alt}
            />
            <h3 className="features__title">{feature.title}</h3>

            <p>{feature.description}</p>
            <p></p>
          </section>
        );
      })}
    </section>
  );
};

export default Feature;
