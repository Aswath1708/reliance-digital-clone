import React from "react";
import styles from "../../styles/NavList.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBellConcierge,
  faLocationDot,
  faRightLeft,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

const NavList = () => {
  return (
    <div className={styles.navList}>
      <ul>
        <li>OUR BRAND PROMISE</li>
        <li>
          <FontAwesomeIcon icon={faRightLeft} /> EASY RETURN
        </li>
        <li>
          <FontAwesomeIcon icon={faTruckFast} /> NEXT DAY DELIVERY
        </li>
        <li>
          <FontAwesomeIcon icon={faBellConcierge} /> SERVICE GUARANTEE
        </li>
        <li>UNMATCHED NETWORK</li>
        <li>
          <Link to={"/findastore"}>
            <FontAwesomeIcon icon={faLocationDot} /> Find a store
          </Link>
        </li>
        <li>
          <Link to={"/contactus"}>Contact us</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
