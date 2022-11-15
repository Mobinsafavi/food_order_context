import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  const ctx = useContext(CartContext);
  return (
    <button
      className={`${styles.wrapper} btn btn-outline-secondary`}
      onClick={props.onClick}
    >
      <CartIcon />
      <span className="font-1">{ctx.items.reduce((count, item) => {return count + item.amount}, 0)}</span>
    </button>
  );
};

export default CartButton;
