import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const Darkbg = () => {
    return <div className={styles.darkBG} onClick={props.onClick}></div>;
  };

  const ModalBox = () => {
    return <div className={`${styles.modal} col-11`}>{props.children}</div>;
  };

  const modalPlace = document.getElementById("modal");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Darkbg onClick={props.onClick}></Darkbg>, modalPlace)}
      {ReactDOM.createPortal(<ModalBox></ModalBox>, modalPlace)}
    </React.Fragment>
  );
};

export default Modal;
