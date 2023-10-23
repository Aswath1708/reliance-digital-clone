import React from "react";
import styles from "../../styles/SignUp.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpFormContainer}>
        <header>
          <h3>Register New Account</h3>
        </header>
        <main>
          <form>
            <input type="text" name="" id="" placeholder="First Name*" />
            <input type="text" name="" id="" placeholder="Last Name*" />
            <input type="email" name="" id="" placeholder="Email Address*" />
            <p>
              Your email address will be used to send order invoice, order
              updates etc.
            </p>
            <button>VERIFY EMAIL</button>
            <input type="tel" name="" id="" placeholder="Mobile Number*" />
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
