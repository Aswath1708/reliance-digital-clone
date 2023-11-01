import React from "react";

const NextArrow = ({ className, onClick }) => {
  return (
    <div
      className={className}
      style={{
        display: "block",
        backgroundColor: "#333",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

export default NextArrow;
