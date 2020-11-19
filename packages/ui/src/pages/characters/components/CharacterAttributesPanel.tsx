import Card from "react-bootstrap/Card";
import { CharacterAttributeInput } from "../../../components/forms/CharacterAttributeInput";
import React, { useState } from "react";
import { CharacterAttributes } from "@super-cascadia-rpg/api";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CharacterAttributesModal from "./modal/CharacterAttributesModal";
import { toString } from "lodash";

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
          value={toString(characterAttributes.strength)}
          description="The physical strength of your character."
        />

        <CharacterAttributeInput
          id="dexterity"
          label="Dexterity"
          readOnly={true}
          value={toString(characterAttributes.dexterity)}
          description="The reaction speed of your character."
        />
      </Form.Row>
      <Form.Row>
        <CharacterAttributeInput
          id="vitality"
          label="Vitality"
          readOnly={true}
          value={toString(characterAttributes.vitality)}
          description="The hardiness of your character."
        />

        <CharacterAttributeInput
          id="intelligence"
          label="Intelligence"
          readOnly={true}
          value={toString(characterAttributes.intelligence)}
          description="The intellect of your character."
        />
      </Form.Row>

      <Form.Row>
        <CharacterAttributeInput
          id="mind"
          label="Mind"
          readOnly={true}
          value={toString(characterAttributes.mind)}
          description="The strength of your character's resolve"
        />

        <CharacterAttributeInput
          id="piety"
          label="Piety"
          readOnly={true}
          value={toString(characterAttributes.piety)}
          description="The power of your character's faith in a higher power."
        />
      </Form.Row>
    </>
  );
}

interface Props {
  characterAttributes: CharacterAttributes;
  onRefresh: () => void;
  id: number;
}

export function CharacterAttributesPanel({
  characterAttributes,
  onRefresh,
  id,
}: Props) {
  const [showAttributesModal, setModalViz] = useState<boolean>(false);

  const handleClose = () => {
    setModalViz(false);
    onRefresh();
  };

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
      {showAttributesModal && (
        <CharacterAttributesModal
          id={id}
          show={showAttributesModal}
          characterAttributes={characterAttributes}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}
