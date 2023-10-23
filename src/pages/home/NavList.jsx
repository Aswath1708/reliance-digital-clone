import React from "react";
import styles from "../../styles/NavList.module.css"

const NavList = () => {
  return (
    <div className={styles.navList}>
      <ul>
        <li>OUR BRAND PROMISE</li>
        <li>EASY RETURN</li>
        <li>NEXT DAY DELIVERY</li>
        <li>SERVICE GUARANTEE</li>
        <li>UNMATCHED NETWORK</li>
        <li>
          <a href="#">Find a store</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
