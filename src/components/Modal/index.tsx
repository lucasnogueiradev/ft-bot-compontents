import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { Button, ButtonTransaction, Form } from "./NewModal";

import React from "react";

interface NewtransactionProps {
  isOpen: boolean;
  OnRequestClose?: () => void;
  onOpen?: () => void;
  children?: React.ReactNode;
}

function newModal({ isOpen, OnRequestClose, children }: NewtransactionProps) {
  const [type, SetType] = useState("");
  const [title, SetTitle] = useState("");
  const [amount, SetAmount] = useState(Number);
  const [category, SetCategory] = useState("");

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={OnRequestClose}
        className="modal-content"
        overlayClassName="react-modal"
      >
        <button type="button" onClick={OnRequestClose}>
          <img src="close.svg" alt="fechar modal" />
        </button>
        {children}
      </Modal>
    </>
  );
}

export default newModal;
