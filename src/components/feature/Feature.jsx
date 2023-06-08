import dataMockedFeature from "data/dataMockedFeature.js";
import React from "react";

/**
 * Composant représentant les fonctionnalités.
 * @returns {JSX.Element} Élément JSX représentant le composant.
 */
const Feature = () => {
  return (
    // Parcours le tableau dataMockedFeature pour générer un élément pour chaque objet
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
