import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/authentication/Login.module.css";
import loginWebBanner from "../../assets/loginWebBanner/LoginWebBanner.avif";
import axios from "axios";
import { getProjectId } from "../../utils/getProjectId";
import { productListContext } from "../../App";
import { toast } from "react-toastify";

const Login = () => {
  const { JWTtoken } = useContext(productListContext);

  const eMailRef = useRef();
  const passWordRef = useRef();

  const [body, setBody] = useState({});
  const notifyError = () =>
    toast.error("Please SignUp first!", { autoClose: 2000 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBody({
      ...body,
      email: eMailRef.current.value,
      password: passWordRef.current.value,
      appType: "ecommerce",
    });
    if (!JWTtoken) {
      console.log(JWTtoken);
      notifyError();
    } else {
      loginAPICall();
    }
  };

  const loginAPICall = () => {
    axios
      .post("https://academics.newtonschool.co/api/v1/user/login", body, {
        header: {
          projectID: `${getProjectId()}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.loginFormAndPoster}>
      <div className={styles.posterContainer}>
        <img src={loginWebBanner} alt="sales-poster" />
      </div>
      <div className={styles.formContainer}>
        <div>
          <header>Login / Register</header>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name=""
              id="email"
              placeholder="Enter Mail Address"
              ref={eMailRef}
              required
            />
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter Password"
              ref={passWordRef}
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
