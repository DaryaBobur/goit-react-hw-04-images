import PropTypes from 'prop-types';

import { useEffect } from "react";
import { createPortal } from "react-dom"
import { Overlay, ModalWindow } from "./ModalStyled";

const modalRoot = document.getElementById('modal-root');

const Modal = ({ onClose, children }) => {

  useEffect(() => {
    document.addEventListener("keydown", closeModal);

    return () => {
      document.removeEventListener("keydown", closeModal);
    };
  })

  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      onClose();
    }
  }

  return createPortal(
    <Overlay onClick={closeModal} >
      <ModalWindow> 
        {children}
      </ModalWindow>
    </Overlay>,
    modalRoot
  )
}

Modal.propTypes = {
  onClose: PropTypes.func,
  closeModal: PropTypes.func,
  children: PropTypes.node,
  target: PropTypes.string,
  currentTarget: PropTypes.string,
  code: PropTypes.string,
}

export default Modal;