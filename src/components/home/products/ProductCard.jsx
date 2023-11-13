import React from "react";
import styles from "../../../styles/products/ProductCard.module.css";
import { Link } from "react-router-dom";
import { getBrokenImageEvent } from "../../../utils/getBrokenImageEvent";

const ProductCard = ({ name, displayImage, price, _id }) => {
  const handleError = (e) => getBrokenImageEvent(e);
  return (
    <Link to={`/id/${_id}`} className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={displayImage} alt="product-image" onError={handleError} />
      </div>
      <div className={styles.productDetails}>
        <p className={styles.productName} title={name}>
          {name}
        </p>
        <p className={styles.priceDetails}>
          M.R.P: &#8377;<span>{price}</span>
        </p>
        <p className={styles.offersAvailable}>OFFERS AVAILABLE</p>
      </div>
    </Link>
  );
};

export default ProductCard;
