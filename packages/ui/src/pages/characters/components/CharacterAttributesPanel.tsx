import Card from "react-bootstrap/Card";
import { CharacterAttributeInput } from "../../../components/forms/CharacterAttributeInput";
import React, { useState } from "react";
import { CharacterAttributes } from "@super-cascadia-rpg/api";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CharacterAttributesModal from "./CharacterAttributesModal";

export function CharacterAttributesForm({
  characterAttributes,
}: {
  characterAttributes: CharacterAttributes;
}) {
  return (
    <>
      <Form.Row>
        <CharacterAttributeInput
          id="strength"
          label="Strength"
          readOnly={true}
          defaultValue={characterAttributes.strength}
          description="The physical strength of your character."
        />

        <CharacterAttributeInput
          id="dexterity"
          label="Dexterity"
          readOnly={true}
          defaultValue={characterAttributes.dexterity}
          description="The reaction speed of your character."
        />
      </Form.Row>
      <Form.Row>
        <CharacterAttributeInput
          id="vitality"
          label="Vitality"
          readOnly={true}
          defaultValue={characterAttributes.vitality}
          description="The hardiness of your character."
        />

        <CharacterAttributeInput
          id="intelligence"
          label="Intelligence"
          readOnly={true}
          defaultValue={characterAttributes.intelligence}
          description="The intellect of your character."
        />
      </Form.Row>

      <Form.Row>
        <CharacterAttributeInput
          id="mind"
          label="Mind"
          readOnly={true}
          defaultValue={characterAttributes.mind}
          description="The strength of your character's resolve"
        />

        <CharacterAttributeInput
          id="piety"
          label="Piety"
          readOnly={true}
          defaultValue={characterAttributes.piety}
          description="The power of your character's faith in a higher power."
        />
      </Form.Row>
    </>
  );
}

export function CharacterAttributesPanel({
  characterAttributes,
}: {
  characterAttributes: CharacterAttributes;
}) {
  const [showAttributesModal, setModalViz] = useState<boolean>(false);

  return (
    <div>
      <Card>
        <Card.Header>
          <Row>
            <Col xs={11}>
              <h3>Attributes</h3>
            </Col>
            <Col xs={1} className="card-controls">
              <Button size="sm" onClick={() => setModalViz(true)}>
                Edit
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <CharacterAttributesForm characterAttributes={characterAttributes} />
        </Card.Body>
      </Card>
      <CharacterAttributesModal
        show={showAttributesModal}
        characterAttributes={characterAttributes}
        handleClose={() => setModalViz(false)}
      />
    </div>
  );
}
