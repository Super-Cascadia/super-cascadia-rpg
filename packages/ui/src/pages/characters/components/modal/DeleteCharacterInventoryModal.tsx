import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
import { CharacterInventory } from "@super-cascadia-rpg/api";

interface Props {
  show: boolean;
  characterId: number;
  handleClose: (itemId?: number) => void;
  selectedItem: CharacterInventory;
}

export default function DeleteCharacterInventoryModal({
  show,
  handleClose,
  selectedItem,
}: Props) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Remove "{selectedItem.item.name}"</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Please confirm that you would like to delete this item. This action is
        permanent.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
        <Button variant="danger" onClick={() => handleClose(selectedItem.id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
