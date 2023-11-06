import React from "react";
import styles from "../../styles/ProductCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ name, displayImage, price, _id, subCategory }) => {
  const brokenImageURL =
    "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

  // console.log(props);
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
