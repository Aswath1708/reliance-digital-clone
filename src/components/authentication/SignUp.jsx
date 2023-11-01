import React, { useRef, useState } from "react";
import styles from "../../styles/SignUp.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [eMailError, setEmailError] = useState("");

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const eMailRef = useRef();

  const verifyNameAndEmail = (e) => {
    e.preventDefault();
    const eMailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const firstNameRegEx = /^[A-Za-z]{3,}$/;
    const lastNameRegEx = /^[A-Za-z]{1,}$/;

    if (!firstNameRegEx.test(firstNameRef.current.value)) {
      setFirstNameError(
        "First Name should be of atleast 3 letters length with no special characters!"
      );
    } else {
      setFirstNameError("");
    }

    if (!lastNameRegEx.test(lastNameRef.current.value)) {
      setLastNameError(
        "Last Name should atleast contain 1 letter with no special characters!"
      );
    } else {
      setLastNameError("");
    }

    if (!eMailRegEx.test(eMailRef.current.value)) {
      setEmailError("Please Enter a valid mail address!");
    } else {
      setEmailError("");
    }
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
              id=""
              placeholder="First Name*"
              ref={firstNameRef}
              required
            />
            {firstNameError && <p className={styles.error}>{firstNameError}</p>}
            <input
              type="text"
              name=""
              id=""
              placeholder="Last Name*"
              ref={lastNameRef}
              required
            />
            {lastNameError && <p className={styles.error}>{lastNameError}</p>}
            <input
              type="email"
              name=""
              id=""
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
          <form>
            <input
              type="tel"
              name=""
              id=""
              placeholder="Mobile Number*"
              required
            />
            <p>
              Your mobile number will be used to avail benefits such as Jio Mart
              Cashback and ROne Loyality Points and receive quick notifications.
            </p>
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
