import React from "react";
import styles from "../../styles/Footer.module.css";

const Disclaimer = () => {
  return (
    <div className={styles.disclaimer}>
      <h3>Disclaimer</h3>
      <p>
        Product prices, offers and availability are subject to change from time
        to time. All prices are inclusive of taxes. Product colours & images are
        only for illustration and they may not exactly match with the actual
        product. Product specs are subject to change & may vary from actual
        product. While every care is taken to avoid inaccuracies in content,
        these are provided as is, without warranty of any kind.
      </p>
      <p>&copy; 2023 Reliance Digital. All Rights Reserved.</p>
    </div>
  );
};

export default Disclaimer;
