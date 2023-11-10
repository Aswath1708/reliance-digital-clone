import React from "react";
import ProductsContainer from "../home/products/ProductsContainer";
import OffersBoard from "./OffersBoard";
import OffersToLookOutFor from "./OffersToLookOutFor";
import banner from "../../assets/banner/New-user-banner.avif";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <OffersBoard />
      <OffersToLookOutFor />
      <ProductsContainer />
      <img
        src={banner}
        alt="banner"
        style={{ width: "100%", margin: "1% 0 0", cursor: "pointer" }}
        onClick={() => navigate("/filter/appliances")}
      />
    </div>
  );
};

export default Home;
