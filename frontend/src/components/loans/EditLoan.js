import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from './Form'

function EditLoan(props, ref) {
    const [show, setShow] = useState(false);
    const [transaction, setTransaction] = useState({
        name: "",
        type: "LEND",
        reason: "",
        amount: "",
        transfer_date: ""
    });
      
    const showRef = useRef();
    useImperativeHandle(ref, () => ({
        showModal(transaction) {
            setTransaction(transaction);
            setShow(true);
        }
    }));

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Transaction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form transaction={transaction} closeModal={handleClose}/>
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={handleClose}>Close</button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default forwardRef(EditLoan);