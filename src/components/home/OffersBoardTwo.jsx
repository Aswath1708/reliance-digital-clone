import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { getOffersBoardTwo } from "../../utils/getOffersBoard";
import { useNavigate } from "react-router-dom";

const OffersBoardTwo = () => {
  const ArrayOfLinks = getOffersBoardTwo();
  const navigate = useNavigate();

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
    >
      {ArrayOfLinks.map(({image,link}, i) => {
        return (
          <div key={i} style={{cursor:"pointer"}} onClick={()=>navigate(`${link}`)}>
            <img src={image} alt="offer-poster" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default OffersBoardTwo;
