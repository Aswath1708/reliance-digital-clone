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
        padding: "1rem 3rem 1.5rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
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
