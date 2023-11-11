import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/footer/AppStoreCard.module.css";

const AppStoreCard = ({ icon, getOn, appName, link }) => {
  return (
    <a href={link} className={styles.appStoreCard}>
      <FontAwesomeIcon icon={icon} />
      <div>
        <p>{getOn}</p>
        <h3>{appName}</h3>
      </div>
    </a>
  );
};

export default AppStoreCard;
