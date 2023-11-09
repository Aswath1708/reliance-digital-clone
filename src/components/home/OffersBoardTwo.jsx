import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { getOffersBoardTwo } from "../../utils/getOffersBoard";

const OffersBoardTwo = () => {
  const ArrayOfLinks = getOffersBoardTwo();

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
    >
      {ArrayOfLinks.map((url, i) => {
        return (
          <div key={i} style={{cursor:"pointer"}}>
            <img src={url} alt="offer-poster" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default OffersBoardTwo;
