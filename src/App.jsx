import React, { useState } from "react";
import Header from "./components/Layout/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";
import Cart from "./components/Cart/Cart.jsx";
import CartProvider from "./store/CartProvider.jsx";
import "./App.css";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const setModal = (status) => {
    setCartIsShown(status);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onModalClose={setModal} />}
      <Header onModalOpen={setModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
