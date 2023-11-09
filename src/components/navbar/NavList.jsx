import React from "react";
import styles from "../../styles/navbar/NavList.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getNavList } from "../../utils/getNavList";

const NavList = () => {
  const arrayOfServices = getNavList();

  return (
    <div className={styles.navList}>
      <ul>
        {arrayOfServices.slice(0, 5).map(({ text, icon }, i) => {
          return (
            <li key={i}>
              {icon && <FontAwesomeIcon icon={icon} />}
              {text}
            </li>
          );
        })}

        {arrayOfServices.slice(-2).map(({ text, icon, link }, i) => {
          return (
            <li key={i}>
              <Link to={`/${link}`}>
                {icon && <FontAwesomeIcon icon={icon} />}
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavList;
