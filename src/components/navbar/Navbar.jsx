import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from '../../styles/navbar/NavBar.module.css'
import logo from '../../assets/logo/rd_logo.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const notify = () =>
    toast("Under Construction", { type: "info", autoClose: 2000 });

  const handleSubmit = (e) =>{
      e.preventDefault();
      navigate(`/searchterm/${searchTerm}`);
  }

  return (
    <div className={styles.navBar}>
      <img
        src={logo}
        alt="reliance-digital-logo"
        onClick={() => {
          setSearchTerm(prevData=>"");
          navigate("/");
        }}
      />
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
      <div className={styles.listContainer}>
        <ul>
          <li className={styles.listItemOne} onClick={notify}>
            Select your Pin Code
          </li>
          <ToastContainer />
          <li
            className={styles.listItemTwo}
            onClick={() => {
              navigate("/cart");
            }}
          >
            <FontAwesomeIcon icon={faCartShopping} />
            Cart
          </li>
          <li className={styles.listItemThree}>
            <Link to="/login">
              <FontAwesomeIcon icon={faUser} />
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
