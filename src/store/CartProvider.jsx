import React, { useReducer } from "react";
import cartContext from "../store/cart-context";

const initialCartState = { items: [], totalAmount: 0 };

const reducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let newTotalAmount;
    let UpdatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      UpdatedItems = [...state.items];
      UpdatedItems[existingCartItemIndex] = updatedItem;
      newTotalAmount = state.totalAmount + action.item.price;
    } else {
      UpdatedItems = state.items.concat(action.item);
      newTotalAmount =
        state.totalAmount + action.item.amount * action.item.price;
    }
    return { items: UpdatedItems, totalAmount: newTotalAmount };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;

    if (existingCartItem.amount === 1) {
      state.items.filter((item) => item.id !== existingCartItem.id);
    } else {
      const updatedItem = {...existingCartItem , amount : existingCartItem.amount -1}
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return { initialCartState };
};

const CartProvider = (props) => {
  const [cartState, dispatchCartItem] = useReducer(reducer, initialCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartItem({ type: "ADD", item: item });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartItem({ type: "REMOVE", id: id });
  };

  const CartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <cartContext.Provider value={CartContext}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
