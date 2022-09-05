import { useState } from "react";
import styled from "styled-components";
const ModalContainer = styled.div``;
const ModalBody = styled.div``;
const Modal = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Show modal</button>
      {showModal && (
        <ModalContainer onClick={() => setShowModal(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)}>X</button>
            {children}
          </ModalBody>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
