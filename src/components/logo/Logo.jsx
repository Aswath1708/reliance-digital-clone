import React from "react";
import logo from "../../assets/logo/rd_logo.svg";
import { useNavigate } from "react-router-dom";

const Logo = ({ setSearchTerm }) => {
  const navigate = useNavigate();

  return (
    <img
      src={logo}
      alt="reliance-digital-logo"
      style={{
        width: "10rem",
        cursor: "pointer",
      }}
      onClick={() => {
        setSearchTerm(prevData => "");
        navigate("/");
      }}
    />
  );
};

export default Logo;
