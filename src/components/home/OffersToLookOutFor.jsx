import React from "react";

import { useNavigate } from "react-router-dom";
import { getOffersToLookOutFor } from "../../utils/getOffersToLookOutFor";

const OffersToLookOutFor = () => {
  const arrayOfOffers = getOffersToLookOutFor();
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#fff", marginTop: "1%" }}>
      <p style={{ color: "#000", padding: "2% 2% 0", fontWeight: "700" }}>
        Offers to Look Out For
      </p>
      <div
        style={{
          display: "flex",
          padding: "1%",
          gap: "1%",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {arrayOfOffers.map(({ image, link }, index) => {
          return (
            <img
              src={image}
              alt={index + 1}
              key={index}
              onClick={() => {
                navigate(`/filter/${link}`);
              }}
              style={{ cursor: "pointer", margin: "1% 0" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OffersToLookOutFor;
