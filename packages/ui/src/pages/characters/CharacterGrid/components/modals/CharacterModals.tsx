import {CharacterModel} from "@super-cascadia-rpg/api";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

interface Props {
  show: boolean;
  selectedCharacter: CharacterModel;
  handleClose: (id?: number) => void;
}

export function DeleteCharacterModal({ show, handleClose, selectedCharacter }: Props) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Delete the {selectedCharacter.firstName} {selectedCharacter.lastName} ({selectedCharacter.id})
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Please confirm that you would like to delete this Character. This action is
        permanent.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose(undefined)}>
          Close
        </Button>
        <Button variant="danger" onClick={() => handleClose(selectedCharacter.id)}>
          Delete Character
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function DuplicateCharacterModal({ show, handleClose, selectedCharacter }: Props) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Duplicate {selectedCharacter.firstName} {selectedCharacter.lastName} ({selectedCharacter.id}) ?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Please confirm that you would like to duplicate this Character.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose(undefined)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleClose(selectedCharacter.id)}>
          Duplicate Character
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
