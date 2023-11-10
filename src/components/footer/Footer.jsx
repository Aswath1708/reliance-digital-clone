import React from "react";
import { getFooterLinkList } from "../../utils/getFooterLinkList";
import SocialMediaContainer from "./SocialMediaContainer";
import FooterLinkList from "./FooterLinkList";

const Footer = () => {
  const footerLinkList = getFooterLinkList();

  return (
    <footer
      style={{
        backgroundColor: "#003380",
        padding:"0 0 25px 40px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap:"wrap",
          padding:"0 16px"
        }}
      >
        {footerLinkList.map((data, i) => (
          <FooterLinkList key={i} {...data} />
        ))}
      </div>
      <SocialMediaContainer />
    </footer>
  );
};

export default Footer;
