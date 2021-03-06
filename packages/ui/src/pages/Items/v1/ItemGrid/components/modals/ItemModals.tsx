import { ItemModel } from "@super-cascadia-rpg/api";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

interface Props {
  show: boolean;
  selectedItem: ItemModel;
  handleClose: (id?: number) => void;
}

export function DeleteItemModal({ show, handleClose, selectedItem }: Props) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Delete the {selectedItem.name} ({selectedItem.id})
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Please confirm that you would like to delete this item. This action is
        permanent.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose(undefined)}>
          Close
        </Button>
        <Button variant="danger" onClick={() => handleClose(selectedItem.id)}>
          Delete Item
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function DuplicateItemModal({ show, handleClose, selectedItem }: Props) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Duplicate {selectedItem.name} ({selectedItem.id}) ?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Please confirm that you would like to duplicate this item.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose(undefined)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleClose(selectedItem.id)}>
          Duplicate Item
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
