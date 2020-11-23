import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
import { CharacterInventory } from "@super-cascadia-rpg/api";
import Row from "react-bootstrap/Row";
import EquipmentLocation from "../EquipmentLocation";
import Col from "react-bootstrap/Col";

interface Props {
  show: boolean;
  handleClose: (item?: CharacterInventory) => void;
  selectedItem: CharacterInventory;
  equipmentLocation: string;
}

export default function ChangeEquipmentModal({
  show,
  handleClose,
  selectedItem,
  equipmentLocation,
}: Props) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Change Equipment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <p>Choose a new item.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Current Item</h3>
            <EquipmentLocation
              headerTitle={equipmentLocation}
              image="icon506.png"
              item={selectedItem}
            />
          </Col>
          <Col>
            <h3>New Item</h3>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Cancel
        </Button>
        <Button variant="success" onClick={() => handleClose(selectedItem)}>
          Change Item
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
