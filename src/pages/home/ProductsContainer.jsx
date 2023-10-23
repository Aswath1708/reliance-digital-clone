import React, { useEffect } from "react";
import ProductCard from "../../components/home/ProductCard";

const ProductsContainer = () => {
  const fetchProducts = () => {
    fetch(
      "https://academics.newtonschool.co/api/v1/ecommerce/electronics/products",
      { headers: { "projectID": "f104bi07c490" } }
    )
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err)=>{
        console.log(err);
      })
  };

  useEffect(()=>fetchProducts(), [])
  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default ProductsContainer;
