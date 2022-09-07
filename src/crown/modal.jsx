import { useState } from "react";

const Modal = ({ children, isOpen, onOpen }) => {
  return (
    <div>
      <div onClick={() => onOpen(false)}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
