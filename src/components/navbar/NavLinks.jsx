import React from "react";
import { ToastContainer, toast } from "react-toastify";
import styles from "../../styles/navbar/NavLinks.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const NavLinks = () => {
  const navigate = useNavigate();

  const notify = () => toast.info("Under Construction", { autoClose: 2000 });

  return (
    <div className={styles.listContainer}>
      <ul>
        <li className={styles.listItemOne} onClick={notify}>
          Select your Pin Code
        </li>
        <ToastContainer />
        <li
          className={styles.listItemTwo}
          onClick={() => {
            navigate("/cart");
          }}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          Cart
        </li>
        <li className={styles.listItemThree}>
          <Link to="/login">
            <FontAwesomeIcon icon={faUser} />
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
