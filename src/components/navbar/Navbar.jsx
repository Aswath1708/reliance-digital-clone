import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/navbar/NavBar.module.css";
import NavLinks from "./NavLinks";
import Logo from "../logo/Logo";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searchterm/${searchTerm}`);
  };

  return (
    <div className={styles.navBar}>
      <div>
      <FontAwesomeIcon icon={faBars}/>
      <Logo setSearchTerm={setSearchTerm} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Find your favourite products"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          required
        />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <NavLinks />
    </div>
  );
};

export default Navbar;
