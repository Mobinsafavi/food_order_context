import React from "react";
import HeaderPoster from "./HeaderPoster";
import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <React.Fragment>
      <Navbar onClick={props.onShow}></Navbar>
      <HeaderPoster></HeaderPoster>
    </React.Fragment>
  );
};

export default Header;
