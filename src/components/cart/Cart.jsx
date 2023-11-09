import React from "react";
import CartCard from "./CartCard";
import styles from "../../styles/cart/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cardContainer}>
        <p>My Cart</p>
        <CartCard />
      </div>
      <div className={styles.checkOutSection}>
        <h3>CHECKOUT</h3>

      </div>
    </div>
  );
};

export default Cart;
