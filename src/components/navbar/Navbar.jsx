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
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [field, setField] = useState("");
  const notify = () => toast("Under Construction",{type:"info",autoClose:2000});

  const fetchSearchedProducts = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={${field}:${searchTerm}}`
      )
      .then((res) => {
        console.log(res.data.data);
        // setSearchTerm()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="navBar">
      <img
        src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
        alt="reliance-digital-logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <form onSubmit={fetchSearchedProducts}>
        <input
          type="text"
          placeholder="Find your favourite products"
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <div className="list-container">
        <ul>
          <li className="list-item-one" onClick={notify}>Select your Pin Code
          </li>
          <ToastContainer/>
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
