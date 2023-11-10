import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/footer/SocialMediaContainer.module.css";
import AppStoreCard from "./AppStoreCard";
import { getAppStoreCardText } from "../../utils/getAppStoreCardText";
import { getSocialMediaIcons } from "../../utils/getSocialMediaIcons";

const SocialMediaContainer = () => {
  const { socialMediaHeader, socialMediaIcons } = getSocialMediaIcons();
  const { appStoreHeader, appStoreCardText } = getAppStoreCardText();
  return (
    <div className={styles.socialMediaAndStoreLinks}>
      <section className={styles.socialMediaLinksContainer}>
        <h3>{socialMediaHeader}</h3>
        <div>
          {socialMediaIcons.map(({icon,link}, i) => (
            <a href={link}>
            <FontAwesomeIcon icon={icon} key={i}/>
            </a>
          ))}
        </div>
      </section>
      <section className={styles.storeLinksContainer}>
        <h3>{appStoreHeader}</h3>
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
