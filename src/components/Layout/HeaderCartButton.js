import React from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCardButton = (props) => {
  const cartCTX = useContext(CartContext);

  const numberOfCartItems = cartCTX.item.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
