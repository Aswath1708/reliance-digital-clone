import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/authentication/Login.module.css";


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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/register");
            }}
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Mail Address"
              required
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter Password"
              required
            />
            <button>PROCEED</button>
          </form>
          <section>
            <p>Not a Registered User?</p>
            <Link to="/register">SIGN UP</Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
