import React from 'react'
import Slider from "react-slick";
import NextArrow from "../../productDetails/sliderarrows/NextArrow";
import PrevArrow from "../../productDetails/sliderarrows/PrevArrow";
import styles from "../../../styles/products/SliderSection.module.css";
import ProductCard from "./ProductCard";


const SliderSection = ({productList}) => {

    const sliderProps = {
        accessibility: true,
        slidesToShow: 5,
        centerMode: false,
        swipe: true,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

  return (
    <Slider {...sliderProps} className={styles.sliderSection}>
    {productList
      .filter((data) => data.subCategory === "tv")
      .map((data, i) => {
        return <ProductCard key={i} {...data} />;
      })}
  </Slider>
  )
}

export default SliderSection