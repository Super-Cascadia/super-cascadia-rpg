import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
import { CharacterAttributes } from "@super-cascadia-rpg/api";
import Form from "react-bootstrap/Form";
import { CharacterAttributeInput } from "../../../components/forms/CharacterAttributeInput";

interface Props {
  show: boolean;
  characterAttributes: CharacterAttributes;
  handleClose: () => void;
}

export default function CharacterAttributesModal({
  show,
  handleClose,
  characterAttributes,
}: Props) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Character Attributes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <CharacterAttributeInput
            id="strength"
            label="Strength"
            defaultValue={characterAttributes.strength}
            description="The physical strength of your character."
          />

          <CharacterAttributeInput
            id="dexterity"
            label="Dexterity"
            defaultValue={characterAttributes.dexterity}
            description="The reaction speed of your character."
          />
          <CharacterAttributeInput
            id="vitality"
            label="Vitality"
            defaultValue={characterAttributes.vitality}
            description="The hardiness of your character."
          />

          <CharacterAttributeInput
            id="intelligence"
            label="Intelligence"
            defaultValue={characterAttributes.intelligence}
            description="The intellect of your character."
          />
          <CharacterAttributeInput
            id="mind"
            label="Mind"
            defaultValue={characterAttributes.mind}
            description="The strength of your character's resolve"
          />

          <CharacterAttributeInput
            id="piety"
            label="Piety"
            defaultValue={characterAttributes.piety}
            description="The power of your character's faith in a higher power."
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleClose()}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
