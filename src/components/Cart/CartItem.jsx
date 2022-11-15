import React from "react";

const CartItem = (props) => {
  return (
    <div className="p-3">
      <div className="font-3 fw-bold ">{props.Name}</div>
      <div className="font-2 d-flex justify-content-between">
        <span className="col-6 mt-auto">{props.Price}</span>
        <div className="col-6">
          <div className="col-12 d-flex justify-content-center mt-2">
            <button className="col-2 btn btn-primary btn-sm p-0" onClick={props.onAdd}>+</button>
            <div className="col-3 d-flex justify-content-center align-items-end">{props.Amount}</div>
            <button className="col-2 btn btn-primary btn-sm p-0" onClick={props.onRemove}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;