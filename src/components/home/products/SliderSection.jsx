import React from "react";
import ProductCard from "./ProductCard";
import "swiper/css/navigation";

const SliderSection = ({ productList }) => {
  return (
    <swiper-container
      navigation="true"
      slides-per-view="6"
      style={{ width: "90vw" }}
      space-between="10"
    >
      {productList
        .filter((data) => data.subCategory === "tv")
        .map((data, i) => {
          return (
            <swiper-slide key={i}>
              <ProductCard {...data} />
            </swiper-slide>
          );
        })}
    </swiper-container>
  );
};

export default SliderSection;
