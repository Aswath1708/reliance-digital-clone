import React from "react";
import Navbar from "../home/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/Login.module.css";
import CategoriesBar from "../home/CategoriesBar";
import NavList from "../home/NavList";

const Login = () => {
  const navigate = useNavigate();
  return (
      <div className={styles.loginFormAndPoster}>
        <div className={styles.posterContainer}>
          <img
            src="https://www.reliancedigital.in/akamai/images/web/LoginWebBanner.jpeg"
            alt="sales-poster"
          />
        </div>
        <div className={styles.formContainer}>
          <div>
            <header>Login / Register</header>
            <form>
              <input
                type="tel"
                name=""
                id=""
                placeholder="Enter Mail Address"
              />
              <button onClick={(e)=>{
                e.preventDefault();
                navigate("/register");
              }}>PROCEED</button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login;
