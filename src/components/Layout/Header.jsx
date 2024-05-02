import styles from "./Header.module.css";
import React, { useContext } from "react";
import HeaderCardButton from "./HeaderCartButton";
import foodImg from "../../assets/food.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const ctx = useContext(CartContext);

  const modalHandler = () => {
    props.onModalOpen(true);
  };

  const loginHandler = () => {
    ctx.setCurrentUser("Nathan");
  };

  const logoutHandler = () => {
    ctx.setCurrentUser(null);
  };
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles["header__brand"]}>
          <img src="./brand.png" alt="brand" />
          <h1>REACTMEALS</h1>
        </div>
        <div className={styles["header__actions"]}>
          {ctx.currentUser && (
            <HeaderCardButton onClick={modalHandler}>Cart</HeaderCardButton>
          )}
          {ctx.currentUser ? (
            <button className={styles["header__login"]} onClick={logoutHandler}>
              <span>Hi, {ctx.currentUser}</span>
            </button>
          ) : (
            <button className={styles["header__login"]} onClick={loginHandler}>
              <FontAwesomeIcon icon={faUser} />
              <span>LOG IN</span>
            </button>
          )}
        </div>
      </header>
      <div className={styles["main-image"]}>
        <img src={foodImg} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
