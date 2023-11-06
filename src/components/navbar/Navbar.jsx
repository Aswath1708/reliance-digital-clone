import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <div className="navBar">
      <img
        src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
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
          {/* <Link to={`/searchterm/${searchTerm}`}/> */}
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <div className="list-container">
        <ul>
          <li className="list-item-one" onClick={notify}>
            Select your Pin Code
          </li>
          <ToastContainer />
          <li
            className="list-item-two"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <FontAwesomeIcon icon={faCartShopping} />
            Cart
          </li>
          <li className="list-item-three">
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
