import React from "react";
import {
  getFooterLinkList1,
  getFooterLinkList2,
  getFooterLinkList3,
  getFooterLinkList4,
} from "../../utils/getFooterLinkList";
import SocialMediaContainer from "./SocialMediaContainer";
import FooterLinkList from "./FooterLinkList";

const Footer = () => {
  const footerLinkList1 = getFooterLinkList1();
  const footerLinkList2 = getFooterLinkList2();
  const footerLinkList3 = getFooterLinkList3();
  const footerLinkList4 = getFooterLinkList4();

  const footerLinkList = [
    footerLinkList1,
    footerLinkList2,
    footerLinkList3,
    footerLinkList4,
  ];

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
