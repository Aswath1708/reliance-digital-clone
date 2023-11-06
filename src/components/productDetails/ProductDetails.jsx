import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import styles from "../../styles/ProductDetails.module.css";
import ImagesScrollingMenu from "./ImagesScrollingMenu";
import LoginModal from "../authentication/LoginModal";

const ProductDetails = () => {
  const brokenImageURL =
    "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
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
        headers: { projectID: "f104bi07c490" },
      })
      .then((res) => {
        // console.log(res.data.data);
        setProductDetails({ ...res.data.data });
        setMainImage(res.data.data.displayImage);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setTimeout(() => setIsLoading(false), 1000);
      });
  }, []);
  console.log("productDetails", productDetails);
  // console.log(mainImage);
  // console.log(productDetails.images);

  const setMainImageURL = (url) => {
    setMainImage(url);
  };

  const handleClick = () => {
    setShowLoginModal(true);
  };

  const hideLoginModal = (value) => {
    setShowLoginModal(value);
  };

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
              {/* <section>
                <p>Ratings:{productDetails.ratings}</p>
              </section> */}
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
      {showLoginModal && <LoginModal hideLoginModal={hideLoginModal} />}
    </>
  );
};

export default ProductDetails;
