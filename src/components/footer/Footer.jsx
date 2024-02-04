import React from "react";
import { getFooterLinkList } from "../../utils/getFooterLinkList";
import SocialMediaContainer from "./SocialMediaContainer";
import FooterLinkList from "./FooterLinkList";
import styles from "../../styles/footer/Footer.module.css";

const Footer = () => {
  const footerLinkList = getFooterLinkList();

  return (
    <footer>
      <div>
        {footerLinkList.map((data, i) => (
          <FooterLinkList key={i} {...data} />
        ))}
      </div>
      <SocialMediaContainer />
    </footer>
  );
};

export default Footer;
