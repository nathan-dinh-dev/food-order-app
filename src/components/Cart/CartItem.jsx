import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const addItemHandler = () => {
    props.onAddItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: 1,
      price: props.meal.price,
    });
  };

  const removeItemHandler = () => {
    props.onRemoveItem(props.meal.id);
  };

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.meal.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{`$${props.meal.price}`}</span>
          <span className={styles.amount}>{`x${props.meal.amount}`}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={removeItemHandler}>-</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
