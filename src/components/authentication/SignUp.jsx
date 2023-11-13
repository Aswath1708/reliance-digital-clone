import React, { useContext, useRef, useState } from "react";
import styles from "../../styles/authentication/SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getEmailRegEx,
  getFirstNameRegEx,
  getLastNameRegEx,
  getPassWordRegEx,
} from "../../utils/getRegEx";
import axios from "axios";
import { getProjectId } from "../../utils/getProjectId";
import { productListContext } from "../../App";

const SignUp = () => {
  const { setJWTtoken,JWTtoken } = useContext(productListContext);
  const navigate = useNavigate();
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [eMailError, setEmailError] = useState("");
  const [passwordError, setPassWordError] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [body, setBody] = useState({});

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const eMailRef = useRef();
  const passWordRef = useRef();

  const notifySuccess = () =>
    toast.success("Email Verified!", { autoClose: 2000 });

  const notifyWarning = () =>
    toast.warn("Please Verify your Mail Address!", { autoClose: 2000 });

  const notifyError = (message) => toast.error(message, { autoClose: 2000 });

  const passWordRegEx = getPassWordRegEx();

  const verifyNameAndEmail = (e) => {
    e.preventDefault();
    const eMailRegEx = getEmailRegEx();
    const firstNameRegEx = getFirstNameRegEx();
    const lastNameRegEx = getLastNameRegEx();

    setBody({
      ...body,
      name: firstNameRef.current.value,
      email: eMailRef.current.value,
      password: passWordRef.current.value,
      appType: "ecommerce",
    });

    if (!firstNameRegEx.test(firstNameRef.current.value)) {
      setFirstNameError(
        "First Name should be of atleast 3 letters length with no special characters!"
      );
    } else {
      setFirstNameError("");
      if (!lastNameRegEx.test(lastNameRef.current.value)) {
        setLastNameError(
          "Last Name should atleast contain 1 letter with no special characters!"
        );
      } else {
        setLastNameError("");
        if (!eMailRegEx.test(eMailRef.current.value)) {
          setEmailError("Please Enter a valid mail address!");
        } else {
          setEmailError("");
          notifySuccess();
          setDisabledButton(false);
        }
      }
    }
  };

  const handleProceedClick = (e) => {
    e.preventDefault();
    if (disabledButton) {
      notifyWarning();
    } else {
      if (!passWordRegEx.test(passWordRef.current.value)) {
        setPassWordError(
          "Password must be minimum eight characters, at least one letter and one number!"
        );
      } else {
        setPassWordError("");
        signUpAPICall();
        console.log(JWTtoken);
      }
    }
  };

  const signUpAPICall = () => {
    axios
      .post("https://academics.newtonschool.co/api/v1/user/signup", body, {
        headers: {
          projectID: `${getProjectId()}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setJWTtoken(res.data.token);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        notifyError(err.response.data.message);
      });
  };

  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpFormContainer}>
        <header>
          <h3>Register New Account</h3>
        </header>
        <main>
          <form onSubmit={verifyNameAndEmail}>
            <input
              type="text"
              name=""
              id="firstname"
              placeholder="First Name*"
              ref={firstNameRef}
              required
            />
            {firstNameError && <p className={styles.error}>{firstNameError}</p>}
            <input
              type="text"
              name=""
              id="lastname"
              placeholder="Last Name*"
              ref={lastNameRef}
              required
            />
            {lastNameError && <p className={styles.error}>{lastNameError}</p>}
            <input
              type="email"
              name=""
              id="email"
              placeholder="Email Address*"
              ref={eMailRef}
              required
            />
            {eMailError ? (
              <p className={styles.error}>{eMailError}</p>
            ) : (
              <p>
                Your email address will be used to send order invoice, order
                updates etc.
              </p>
            )}

            <button>VERIFY EMAIL</button>
          </form>
          <form onSubmit={handleProceedClick}>
            <input
              type="password"
              name=""
              id="password"
              placeholder="Password*"
              ref={passWordRef}
              required
            />
            {passwordError && <p className={styles.error}>{passwordError}</p>}
            <button>PROCEED</button>
          </form>
        </main>
        <section>
          <p>Already Registered?</p>
          <Link to="/login">LOGIN</Link>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
