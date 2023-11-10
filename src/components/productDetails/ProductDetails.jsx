import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import styles from "../../styles/products/ProductDetails.module.css";
import ImagesScrollingMenu from "./ImagesScrollingMenu";
import LoginModal from "../authentication/LoginModal";
import { getProjectId } from "../../utils/getProjectId";
import { getBrokenImageURL } from "../../utils/getBrokenImageURL";

const ProductDetails = () => {
  const brokenImageURL = getBrokenImageURL();
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({ images: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [mainImage, setMainImage] = useState(brokenImageURL);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    axios
      .get(`https://academics.newtonschool.co/api/v1/ecommerce/product/${id}`, {
        headers: { projectID: `${getProjectId()}` },
      })
      .then((res) => {
        setProductDetails({ ...res.data.data });
        setMainImage(res.data.data.displayImage);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setTimeout(() => setIsLoading(false), 1000);
      });
  }, []);
  console.log("productDetails", productDetails);

  const handleClick = () => setShowLoginModal(true);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.productDetails}>
          <div className={styles.imagesContainer}>
            <div className={styles.productImage}>
              <img
                src={mainImage}
                alt="main-Image"
                onError={(e) => (e.target.src = brokenImageURL)}
              />
            </div>
            {productDetails.images && (
              <ImagesScrollingMenu
                images={productDetails.images}
                callback={setMainImage}
                brokenImageURL={brokenImageURL}
              />
            )}
          </div>
          <div className={styles.productInformation}>
            <div className={styles.productName}>
              <p>{productDetails.name}</p>
            </div>
            <div className={styles.priceAndFeatures}>
              <div>
                <div className={styles.productFeatures}>
                  <h3>Key Features</h3>
                  <ul>
                    {productDetails.features &&
                      productDetails.features.slice(0, 5).map((feature, i) => {
                        return (
                          <li key={i}>
                            <p>{feature}</p>
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div className={styles.warrenty}>
                  <h3>Warrenty</h3>
                  <ul>
                    <li>
                      <p>1 year manufacturer warrenty</p>
                    </li>
                  </ul>
                </div>
                <div className={styles.warrenty}>
                  <h3>Return Policy</h3>
                  <ul>
                    <li>
                      <p>
                        For return eligibility. <a href="#">Read-T&C</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        All accessories, product & packaging need to be returned
                        in original condition.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className={styles.warrenty}>
                  <h3>
                    Got Feedback to share on this page?{" "}
                    <a href="#">report here</a>
                  </h3>
                </div>
              </div>
              <div className={styles.productPrice}>
                <p>
                  Offer Price: <span>&#8377;{productDetails.price}</span>
                </p>
                <p>
                  MRP:{" "}
                  <span>
                    &#8377;
                    {Math.round(
                      productDetails.price + (productDetails.price / 100) * 22
                    )}
                  </span>{" "}
                  (Inclusive of all taxes)
                </p>
                <p>
                  You Save: 22% (&#8377;
                  {Math.round((productDetails.price / 100) * 22)})
                </p>
                <h3>Free Shipping!</h3>
                <div className={styles.buttons}>
                  <button onClick={handleClick}>ADD TO CART</button>
                  <button onClick={handleClick}>BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} />}
    </>
  );
};

export default ProductDetails;
