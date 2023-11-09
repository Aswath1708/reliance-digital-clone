import React from "react";
import styles from "../../styles/footer/FooterLinkList.module.css";

const FooterLinkList = ({ header, footerLinkList }) => {
  return (
    <ul className={styles.footerLinkList}>
      <h3>{header}</h3>
      {footerLinkList.map((link, i) => {
        return <li key={i}>{link}</li>;
      })}
    </ul>
  );
};

export default FooterLinkList;
