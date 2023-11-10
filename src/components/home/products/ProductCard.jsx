import React from "react";
import styles from "../../../styles/products/ProductCard.module.css";
import { Link } from "react-router-dom";
import { getBrokenImageURL } from "../../../utils/getBrokenImageURL";

const ProductCard = ({ name, displayImage, price, _id}) => {
  const brokenImageURL = getBrokenImageURL();
  return (
    <Link to={`/id/${_id}`} className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img
          onError={(e) => (e.target.src = brokenImageURL)}
          src={displayImage}
          alt="product-image"
        />
      </div>
      <div className={styles.productDetails}>
        <p className={styles.productName}>{name}</p>
        <p className={styles.priceDetails}>
          M.R.P: &#8377;<span>{price}</span>
        </p>
        <p className={styles.offersAvailable}>OFFERS AVAILABLE</p>
      </div>
    </Link>
  );
};

export default ProductCard;
