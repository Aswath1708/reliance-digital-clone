import React from "react";
import styles from "../../styles/footer/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faGooglePlay,
  faSquareFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Disclaimer from "./Disclaimer";

const Footer = () => {
  const footerLinkList1 = [
    "Smartphones",
    "Laptops",
    "DSLR Cameras",
    "Televisions",
    "Air Conditioners",
    "Refrigerators",
    "Kitchen Appliances",
    "Accessories",
    "Personal Care & Grooming",
  ];
  const footerLinkList2 = [
    "About Reliance Digital",
    "resQ Services",
    "Site Map",
    "Gift Cards",
    "Corporate Enquiries",
    "Contact Us",
  ];
  const footerLinkList3 = [
    "Product Reviews",
    "Buying Guides",
    "How Tos",
    "Featured Stories",
    "Events & Happenings",
    "Nearest Store",
  ];
  const footerLinkList4 = [
    "Terms of Use",
    "FAQs",
    "Cancellation and Return Policy",
    "Pricing and Payments Policy",
    "Shipping and Delivery Policy",
    "Privacy Policy",
    "E-waste Recycling Policy",
    "EMI and Additional Cashback T&C",
    "RelianceOne Loyalty Program T&C",
    "Caution Notice",
  ];

  return (
    <>
    <footer>
      <div className={styles.footerLinksContainer}>
        <ul>
          <h3>PRODUCT CATEGORIES</h3>
          {footerLinkList1.map((link, i) => {
            return <li key={i}>{link}</li>;
          })}
        </ul>
        <ul>
          <h3>SITE INFO</h3>
          {footerLinkList2.map((link, i) => {
            return <li key={i}>{link}</li>;
          })}
        </ul>
        <ul>
          <h3>RESOURCE CENTRE</h3>
          {footerLinkList3.map((link, i) => {
            return <li key={i}>{link}</li>;
          })}
        </ul>
        <ul>
          <h3>POLICIES</h3>
          {footerLinkList4.map((link, i) => {
            return <li key={i}>{link}</li>;
          })}
        </ul>
      </div>
      <div className={styles.socialMediaContainer}>
        <section>
          <h3>FOLLOW US</h3>
          <div>
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </section>
        <section>
          <h3>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h3>
          <div>
          <section>
            <FontAwesomeIcon icon={faGooglePlay} />
            <div>
              <p>GET IT ON</p>
              <h3>Google Play</h3>
            </div>
          </section>
          <section>
            <FontAwesomeIcon icon={faApple} />
            <div>
              <p>Download on the</p>
              <h3>App Store</h3>
            </div>
          </section>
          </div>
        </section>
      </div>
    </footer>
    <Disclaimer/>
    </>
  );
};

export default Footer;
