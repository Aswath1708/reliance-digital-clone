import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="navBar">
      <div className="nav-div-one">
        <ul>
          <li className="list-item-one" onClick={()=>{navigate("/findastore")}}>Find a store</li>
          <li className="list-item-two">Buying guides</li>
          <li className="list-item-three" onClick={()=>{navigate("/contactus")}}>Contact us</li>
        </ul>
      </div>
      <div className="nav-div-two">
        <img
          src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
          alt="reliance-digital-logo" onClick={()=>{navigate("/")}}
        />
        <input type="text" placeholder="Find your favourite products" />
        <div className="list-container">
          <ul>
            <li className="list-item-one">Select your Pin Code</li>
            <li className="list-item-two" onClick={()=>{navigate("/cart")}}>
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
    </div>
  );
};

export default Navbar;
