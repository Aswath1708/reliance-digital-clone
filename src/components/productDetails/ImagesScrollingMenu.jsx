import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/products/ImagesScrollingMenu.module.css";
import NextArrow from "./sliderarrows/NextArrow";
import PrevArrow from "./sliderarrows/PrevArrow";

const ImagesScrollingMenu = ({ images, callback,brokenImageURL }) => {
  const sliderProps = {
    accessibility: true,
    slidesToShow: 4,
    centerMode: false,
    swipe: true,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // console.log("images",images);
  return (
    <Slider {...sliderProps} className={styles.slider}>
      {images.map((url, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            {" "}
            <img
              src={url}
              alt="demo-images"
              onClick={(e) => {
                // console.log(e.target);
                callback(e.target.src);
              }}
              onError={(e)=>{
                e.target.src=brokenImageURL;
              }}
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default ImagesScrollingMenu;
