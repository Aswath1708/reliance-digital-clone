import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/footer/AppStoreCard.module.css";

const AppStoreCard = ({ icon, getOn, appName }) => {
  return (
    <section className={styles.appStoreCard}>
      <FontAwesomeIcon icon={icon} />
      <div>
        <p>{getOn}</p>
        <h3>{appName}</h3>
      </div>
    </section>
  );
};

export default AppStoreCard;
