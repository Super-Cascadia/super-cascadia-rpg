import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { ReactElement } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

interface Props {
  title: string;
  submitButtonLabel: string;
  show: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  children: ReactElement;
}

export default function BasicModal({
  title,
  submitButtonLabel,
  show,
  handleClose,
  children,
  handleSubmit,
}: Props) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col sm={12}>
            <Form onSubmit={handleSubmit} noValidate>
              {children}
            </Form>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleSubmit()}>
          Cancel
        </Button>
        <Button variant="success" onClick={() => handleSubmit()}>
          {submitButtonLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
