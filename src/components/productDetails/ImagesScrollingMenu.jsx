import React from "react";
import { getBrokenImageEvent } from "../../utils/getBrokenImageEvent";

const ImagesScrollingMenu = ({ images, callback}) => {

  const handleError = (e) => getBrokenImageEvent(e);
  return (
    <swiper-container
    slides-per-view="5"
    navigation="true"
    space-between="10"
    >
        {images.map((url, i) => {
        return (
          <swiper-slide key={i} style={{cursor:"pointer",padding:"10px"}}>
            <img
              src={url}
              alt="demo-images"
              style={{width:"100%"}}
              onClick={(e) => {callback(e.target.src)}}
              onError={handleError}
            />
            </swiper-slide>
        );
      })}
    </swiper-container>
  );
};

export default ImagesScrollingMenu;
