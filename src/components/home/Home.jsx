import React from "react";
import ProductsContainer from "./ProductsContainer";
import OffersBoard from "./OffersBoard";
import OffersToLookOutFor from "./OffersToLookOutFor";
import banner from "../../assets/banner/New-user-banner.avif";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <OffersBoard />
      <OffersToLookOutFor />
      <ProductsContainer />
      <img
        src={banner}
        alt="banner"
        style={{ width: "100%", margin: "1% 0 0" }}
      />
    </div>
  );
};

export default Home;
