import React, { useState } from "react";
import Button from "../../../node_modules/react-bootstrap/Button";
import Modal from "../../../node_modules/react-bootstrap/Modal";
import styles from "./modal.module.css";
const ModalPart = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <Button
        className="mt-4 border-0"
        style={{
          display: "flex",
          padding: "5px 5px 0 5px",
          backgroundColor: "transparent",
          color: "black",
        }}
        /* مشخص میکند که از چه سایزی به پایین فول اسکرین شودhandleshowپارامتر داخل فانکشن */ 
        onClick={() => handleShow('lg-down')}
      >
        <span className={`material-symbols-outlined pe-2 py-2 rounded-2 ${styles['filter-icon']}`}>tune</span>
        <p className="py-2">فیلتر</p>
      </Button>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton className="px-5">
          <Modal.Title>فیلتر محصولات</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalPart;
