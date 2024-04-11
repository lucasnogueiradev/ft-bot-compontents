// ModalComponent.js
import React, { Children } from "react";
import Modal from "react-modal";

const customStyles = {
  backgroundColor: "#121212",

  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "Roboto, sans-serif",
    borderRadius: "8px",
    background: "#121212",
    backgroundColor: "#727272",
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
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={closeModal}>x</button>
      {children}
    </Modal>
  );
}
