import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.meals.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meals.name}</h3>
        <div className={styles.description}>{props.meals.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.meals.id} />
      </div>
    </li>
  );
};

export default MealItem;
