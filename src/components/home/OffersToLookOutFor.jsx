import React from "react";
import poster1 from "../../assets/offerstolookoutfor/Latest-Range-of-tablets.avif";
import poster2 from "../../assets/offerstolookoutfor/Latest-Televisions.avif";
import poster3 from "../../assets/offerstolookoutfor/Red-Blue-Diwali-Theme-Banner-Tecno-POP-7-Pro.avif";
import poster4 from "../../assets/offerstolookoutfor/Ultimate-Party-Specker.avif";

const OffersToLookOutFor = () => {
  return (
    <div style={{ backgroundColor: "#fff", marginTop: "1%" }}>
      <p style={{ color: "#000", padding: "2% 2% 0", fontWeight: "700" }}>
        Offers to Look Out For
      </p>
      <div
        style={{
          display: "flex",
          padding: "2% 1%",
          gap: "1%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <img src={poster1} alt="1" />
        <img src={poster2} alt="2" />
        <img src={poster3} alt="3" />
        <img src={poster4} alt="4" />
      </div>
    </div>
  );
};

export default OffersToLookOutFor;
