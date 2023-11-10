import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../styles/footer/SocialMediaContainer.module.css";
import AppStoreCard from "./AppStoreCard";
import { getAppStoreCardText } from "../../utils/getAppStoreCardText";

const SocialMediaContainer = () => {
  const socialMediaIcons = [faSquareFacebook, faTwitter, faYoutube];
  const appStoreCardText = getAppStoreCardText();
  return (
    <div className={styles.socialMediaAndStoreLinks}>
      <section className={styles.socialMediaLinksContainer}>
        <h3>FOLLOW US</h3>
        <div>
          {socialMediaIcons.map((icon, i) => (
            <FontAwesomeIcon icon={icon} key={i} />
          ))}
        </div>
      </section>
      <section className={styles.storeLinksContainer}>
        <h3>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h3>
        <div>
          {appStoreCardText.map((card, i) => {
            return <AppStoreCard key={i} {...card} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default SocialMediaContainer;
