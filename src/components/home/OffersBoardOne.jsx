import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { getOffersBoardOne } from "../../utils/getOffersBoard";

const OffersBoardOne = () => {
  const ArrayOfLinks = getOffersBoardOne();

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={6000}
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
    >
      {ArrayOfLinks.map((url, i) => {
        return (
          <div key={i} style={{cursor:"pointer"}}>
            <img src={url} alt={`poster${i + 1}`} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default OffersBoardOne;
