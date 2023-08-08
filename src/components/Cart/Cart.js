import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCTX = useContext(CartContext);
  const hasItems = cartCTX.item.length > 0;

  const addItemHandler = (item) => {
    cartCTX.addItem(item);
  };

  const removeItemHandler = (id) => {
    cartCTX.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCTX.item.map((item) => (
        <CartItem
          key={item.id}
          meal={item}
          onAddItem={addItemHandler}
          onRemoveItem={removeItemHandler}
        />
      ))}
    </ul>
  );

  const closeModalHandler = () => {
    props.onModalClose(false);
  };

  return (
    <Modal onClick={closeModalHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${cartCTX.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeModalHandler}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
