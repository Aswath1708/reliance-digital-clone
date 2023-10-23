import React from "react";
import styles from "../../styles/ContactUs.module.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faGooglePlay,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ContactUs = () => {
  return (
    <div className={styles.contactUsPage}>
      <section>
        <div className={styles.bannerContainer}>
          <h1>WE WOULD LOVE TO HELP YOU</h1>
          <h3>REACH US AT:</h3>
        </div>
      </section>
      <div className={styles.contactDetailsContainer}>
        <div>
          <header>
            <FontAwesomeIcon icon={faPhone} />
            <h3>Call Us</h3>
          </header>
          <main>
            <h3>For E-Commerce Related Queries</h3>
            <dl>
              <dt>1800 889 1055</dt>
              <dl>&#40; 9:30 AM to 7:30 PM, 365 days &#41;</dl>
              <h3>For Store Related Queries</h3>
              <dt>1800-889-1044</dt>
              <dl>&#40; 9:00 AM to 9:00 PM, 365 days &#41;</dl>
            </dl>
          </main>
        </div>
        <div>
          <header>
            <FontAwesomeIcon icon={faWhatsapp} />
            <h3>WhatsApp Us</h3>
          </header>
          <main>
            <h3>We are now on WhatsApp</h3>
            <p>
              Send Hi! to<span>+91 7977912345</span>
            </p>
          </main>
        </div>
        <div>
          <header>
            <FontAwesomeIcon icon={faPhone} />
            <h3>Call Us</h3>
          </header>
          <main>
            <h3>For Enterprise Enquiries & Bulk Orders</h3>
            <ul>
              <li>+91 7022292600</li>
              <li>+91 9321909386</li>
              <li>+91 8433714853</li>
            </ul>
          </main>
        </div>
        <div>
          <header>
            <FontAwesomeIcon icon={faEnvelope} />
            <h3>Email Us</h3>
          </header>
          <main>
            <h3>
              <a href="#">reliancedigital@ril.com</a>
            </h3>
            <div className={styles.playStoreLinks}>
              <p>DOWNLOAD RESQ APPS ON MOBLIE</p>
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
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
