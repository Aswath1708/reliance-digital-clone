import React from "react";
import styles from "../../styles/cart/CartCard.module.css";

const CartCard = () => {
  const arrayOfQuantity = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.cartCard}>
      <div className={styles.upperSection}>
        <div className={styles.imageAndQuantity}>
          <div className={styles.imageContainer}>
            <img
              src="https://m.media-amazon.com/images/I/61Az2uOUbqL.jpg"
              alt=""
            />
          </div>
          <div className={styles.quantityCheck}>
            <label htmlFor="quantity">Qty:</label>
            <select name="quantity" id="quantity">
              <option value="0" disabled>
                Select a Quantity
              </option>
              <option value="1" defaultValue={true}>
                1
              </option>
              {arrayOfQuantity.map((number, i) => {
                return (
                  <option value={number} key={i}>
                    {number}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className={styles.nameContainer}>
          <p>Lenovo Keyboard</p>
        </div>
        <div className={styles.priceContainer}>
          <p>20000</p>
        </div>
      </div>
      <div className={styles.buttonsSection}>
        <button>Remove</button>
        <button>Move to wishlist</button>
      </div>
    </div>
  );
};

export default CartCard;
