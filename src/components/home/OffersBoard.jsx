import React from "react";
import OffersBoardOne from "../../components/home/OffersBoardOne";
import OffersBoardTwo from "../../components/home/OffersBoardTwo";

const OffersBoard = () => {
  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      gap:"1vh",
      marginTop:"1vh"    
    }}>
      <OffersBoardOne />
      <OffersBoardTwo />
    </div>
  );
};

export default OffersBoard;
