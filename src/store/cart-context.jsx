import React from "react";

const CartContext = React.createContext({
  item: [],
  totalAmount: 0,
  currentUser: null,
  addItem: (item) => {},
  removeItem: (id) => {},
  setCurrentUser: () => {},
});

export default CartContext;
