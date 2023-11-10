import React from "react";
import styles from "../../styles/footer/Disclaimer.module.css";
import { getDisclaimerText } from "../../utils/getDisclaimerText";

const Disclaimer = () => {
  const { header, disclaimer, copyrights } = getDisclaimerText();

  return (
    <div className={styles.disclaimer}>
      <h3>{header}</h3>
      <p>{disclaimer}</p>
      <p>{copyrights}</p>
    </div>
  );
};

export default Disclaimer;
