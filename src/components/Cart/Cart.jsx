import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartTotalAmount = cartCtx.totalAmount;

  const cartAddHandler = (item) => {
    cartCtx.addItem(item)
  };

  const cartRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };

  return (
    <Modal onClick={props.onHide}>
      <div className={styles.cartItems}>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              Name={item.name}
              Price={item.price}
              Amount={item.amount}
              onAdd={cartAddHandler.bind(null, item)}
              onRemove={cartRemoveHandler.bind(null, item.id)}
            />
          );
        })}
      </div>
      <div className="d-flex justify-content-between p-3 my-2">
        <div className="col-6">
          {" "}
          <div className="font-2 fw-bold">مبلغ نهایی ( قابل پرداخت )</div>
        </div>
        <div className="col-6">
          <div className="text-center">{cartTotalAmount}</div>
        </div>
      </div>
      <div className="p-2">
        <div className={styles.actionsContainer}>
          <button className={styles.deleteBtn}>سفارش</button>
          <button className={styles.cancelBtn} onClick={props.onHide}>
            بستن
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
