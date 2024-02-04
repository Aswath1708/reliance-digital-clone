import React from "react";
import logo from "../../assets/logo/rd_logo.svg";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/navbar/Logo.module.css'

const Logo = ({ setSearchTerm }) => {
  const navigate = useNavigate();

  return (
    <img
      src={logo}
      alt="reliance-digital-logo"
      className={styles.logo}
      onClick={() => {
        setSearchTerm(prevData => "");
        navigate("/");
      }}
    />
  );
};

export default Logo;
