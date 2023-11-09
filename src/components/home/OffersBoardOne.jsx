import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { getOffersBoardOne } from "../../utils/getOffersBoard";
import { useNavigate } from "react-router-dom";

const OffersBoardOne = () => {
  const ArrayOfLinks = getOffersBoardOne();
  const navigate = useNavigate();

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={6000}
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
    >
      {ArrayOfLinks.map((image, i) => {
        return (
          <div key={i} style={{cursor:"pointer"}} onClick={()=>navigate("/filter/appliances")}>
            <img src={image} alt={`poster${i + 1}`} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default OffersBoardOne;
