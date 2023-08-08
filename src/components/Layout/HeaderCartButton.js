import React, { useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCardButton = (props) => {
  const [isBump, setIsBump] = useState(false);
  const cartCTX = useContext(CartContext);

  const numberOfCartItems = cartCTX.item.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const items = cartCTX.item;

  const classes = `${styles.button} ${isBump ? styles.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) return;

    setIsBump(true);
    const bumpTimeout = setTimeout(() => {
      setIsBump(false);
    }, 300);
    console.log("in timer");
    return () => {
      clearTimeout(bumpTimeout);
      console.log("In clear");
    };
  }, [items]);
  return (
    <button className={classes} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
