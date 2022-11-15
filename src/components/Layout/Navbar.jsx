import React from "react";
import CartButton from "./CartButton";

const Navbar = (props) => {
  return (
    <div className="row d-flex rounded-bottom p-2">
      <div className="col-6  d-flex justify-content-start align-items-center text-muted fw-bold">ایران فست فود</div>
      <div className="col-6 d-flex justify-content-end">
        <CartButton onClick={props.onClick}></CartButton>
      </div>
    </div>
  );
};

export default Navbar;
