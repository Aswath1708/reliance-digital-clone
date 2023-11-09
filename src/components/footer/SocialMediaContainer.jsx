import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faGooglePlay,
  faSquareFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../styles/footer/SocialMediaContainer.module.css";

const SocialMediaContainer = () => {
  return (
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
  );
};

export default SocialMediaContainer;
