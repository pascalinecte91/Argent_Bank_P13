import React from "react";
import Feature from "components/feature/Feature.jsx";
import Banner from "components/banner/Banner.jsx";

const Home = () => {
  return (
    <div className="home__container">
      <Banner />
      <Feature />
    </div>
  );
};

export default Home;