import React from "react";
import styles from "../../styles/footer/FooterLinkList.module.css";
import { toast } from "react-toastify";

const FooterLinkList = ({ header, footerLinkList }) => {
  const notify = () =>
    toast.warning("Under Construction!", { autoClose: 1000 });
  return (
    <ul className={styles.footerLinkList}>
      <h3>{header}</h3>
      {footerLinkList.map((link, i) => {
        return (
          <li key={i} onClick={notify}>
            {link}
          </li>
        );
      })}
    </ul>
  );
};

export default FooterLinkList;
