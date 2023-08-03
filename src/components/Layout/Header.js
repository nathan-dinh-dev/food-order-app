import styles from "./Header.module.css";
import React from "react";
import mealsImg from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCartButton";
import foodImg from "../../assets/food.jpg";
import { useState } from "react";

const Header = (props) => {
  const modalHandler = () => {
    props.onModalOpen(true);
  };

  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>REACTMEALS</h1>
        <HeaderCardButton onClick={modalHandler}>Cart</HeaderCardButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={foodImg} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
