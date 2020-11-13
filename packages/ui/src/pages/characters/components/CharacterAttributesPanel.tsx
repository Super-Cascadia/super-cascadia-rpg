import Card from "react-bootstrap/Card";
import { CharacterAttributeInput } from "../../../components/forms/CharacterAttributeInput";
import React from "react";
import { CharacterAttributes } from "@super-cascadia-rpg/api";
import Form from "react-bootstrap/Form";

export function CharacterAttributesPanel({
  characterAttributes,
}: {
  characterAttributes: CharacterAttributes;
}) {
  return (
    <Card>
      <Card.Header>Attributes</Card.Header>
      <Card.Body>
        <Form.Row>
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
        </Form.Row>
        <Form.Row>
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
        </Form.Row>

        <Form.Row>
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
        </Form.Row>
      </Card.Body>
    </Card>
  );
}
