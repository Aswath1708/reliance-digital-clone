import React from "react";
import styles from "../../styles/FindAStore.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const FindAStore = () => {
  const arrayOfCardData = [
    {
      image:
        "https://www.reliancedigital.in/build/client/images/ril_digi_logo.jpg",
      heading: "Reliance Digital Stores",
      description:
        "Reliance Digital is present nation-wide with 550+ stores across 200+ cities. It houses over 300 international and national brands and over 5000 products at best prices. At Reliance Digital, the trained and well-informed staff at every store is always happy to advise customers about every detail on each product. Reliance Digital also provides after-sales service for all its products. Reliance resQ, the service arm of the retailer and India’s only ISO-9001 certified electronics service brand, is available for support through the week, and is fully geared to provide end-to-end solutions.",
    },
    {
      image: "https://www.reliancedigital.in/build/client/images/logo-jio.png",
      heading: "Jio Stores",
      description:
        "My Jio Store caters to India’s rapidly growing market for mobility and communication products by offering a wide range of mobile phones and accessories. It also acts as an interface for providing new Jio mobile connections, recharge services, and resolving the telecom arm's customer queries. The store offers a range of Jio-exclusive phones from leading brands and are available with attractive Jio mobile connection bundles. Customers can also shop for a wide range of electronics through its web catalogue and get them delivered & installed at their home. With its network of 1800+ stores across all major towns and cities of India, My Jio Store offers consumers the convenience of shopping in a neighbourhood store, even in the remotest pockets of India.",
    },
    {
      image: "https://www.reliancedigital.in/build/client/images/logo-resq.png",
      heading: "Reliance Digital Service Center",
      description:
        "Reliance resQ is India's first and only multi-product, multi-brand electronics and home appliances service provider. Reliance resQ Service Centers are authorized by leading brands and operate 7 days a week between 10:00 AM to 10:00 PM each day.",
    },
  ];

  return (
    <div className={styles.findAStoreContainer}>
      <div className={styles.formContainer}>
        <h2>
          Reliance Digital Store<span> & </span>Service Center{" "}<span>near you</span>{" "}
          <FontAwesomeIcon icon={faLocationDot} />
        </h2>
        <form>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Pincode / Town / Street"
          />
          <p>Or Use</p>
          <button>
            <FontAwesomeIcon icon={faCrosshairs} />{" "}
            SHOW STORES NEAR ME
          </button>
        </form>
      </div>
      <div className={styles.cardsContainer}>
        {arrayOfCardData.map(({ image, heading, description }, i) => {
          return (
            <div key={i}>
              <img src={image} alt={`image-${i + 1}`} />
              <h3>{heading}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FindAStore;
