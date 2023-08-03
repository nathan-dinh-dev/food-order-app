import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const setModal = (status) => {
    setIsOpen(status);
  };

  return (
    <React.Fragment>
      {isOpen && <Cart onModalClose={setModal} />}
      <Header onModalOpen={setModal} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
