import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/authentication/LoginModal.module.css";
import React from "react";

const LoginModal = ({ setShowLoginModal }) => {

  const handleClick = () =>{
    setShowLoginModal(false);
    document.body.style.overflowY="visible";
  }

  return (
    <div className={styles.loginModal}>
      <div className={styles.formContainer}>
        <header>
          <h3>Login / Register</h3>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={handleClick}
          />
        </header>
        <form>
          <input
            type="tel"
            name=""
            id=""
            placeholder="Enter Mobile Number"
            required
          />
          <button>PROCEED</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
