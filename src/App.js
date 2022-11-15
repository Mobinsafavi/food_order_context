import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import MealsList from "./components/Meals/MealsList";
import CartProvider from "./store/CartProvider";

function App() {
  const [isShowen, setIsShowen] = useState(false);

  const showingCartHandler = () => {
    setIsShowen(true);
  };
  const hidingCartHandler = () => {
    setIsShowen(false);
  };

  return (
    <CartProvider>
      <div className="container position-relative">
        {isShowen && <Cart onHide={hidingCartHandler} />}
        <Header onShow={showingCartHandler} />
        <MealsList />
      </div>
    </CartProvider>
  );
}

export default App;
