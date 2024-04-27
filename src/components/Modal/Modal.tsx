// ModalComponent.js
import React, { Children } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

const customStyles = {
  backgroundColor: "#121212",

  content: {
    top: "40%",
    width: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-40%, -50%)",
    fontFamily: "Roboto, sans-serif",
    borderRadius: "1.5rem",
    background: "rgba(0, 0, 0, 0.9)",
  },
};

Modal.setAppElement("#root");
interface ModalProps {
  isOpen: boolean;
  closeModal?: () => void;
  children: React.ReactNode;
}

export default function ModalComponent({
  isOpen,
  closeModal,
  children,
}: ModalProps) {
  let subtitle: HTMLHeadingElement | null;

  function afterOpenModal() {
    if (subtitle) {
      subtitle.style.color = "#f00";
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      className="modal-content"
      overlayClassName="react-modal"
    >
      <button type="button" onClick={closeModal} className="modal-close">
        <IoClose className="icon-close" />
      </button>
      {children}
    </Modal>
  );
}
