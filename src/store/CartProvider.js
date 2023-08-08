import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = [...state.items];
    const indexElement = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (indexElement !== -1) {
      const specificItem = updatedItems[indexElement];
      specificItem.amount += action.item.amount;
      console.log(specificItem);
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    let updatedItems = [...state.items];
    const indexElement = state.items.findIndex((item) => item.id === action.id);
    if (updatedItems[indexElement].amount === 1) {
      updatedItems = updatedItems.filter((item) => item.id !== action.id);
    } else {
      updatedItems[indexElement].amount -= 1;
    }
    const newTotalAmount = state.totalAmount - state.items[indexElement].price;
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    item: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
