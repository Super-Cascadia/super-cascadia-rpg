import Card from "react-bootstrap/Card";
import { CharacterAttributeInput } from "../../../components/forms/CharacterAttributeInput";
import React from "react";
import { CharacterAttributes } from "@super-cascadia-rpg/api";

export function CharacterAttributesPanel({
  characterAttributes,
}: {
  characterAttributes: CharacterAttributes;
}) {
  return (
    <Card>
      <Card.Header>Attributes</Card.Header>
      <Card.Body>
        <CharacterAttributeInput
          id="strength"
          label="Strength"
          defaultValue={characterAttributes.strength}
        />

        <CharacterAttributeInput
          id="dexterity"
          label="Dexterity"
          defaultValue={characterAttributes.dexterity}
        />

        <CharacterAttributeInput
          id="vitality"
          label="Vitality"
          defaultValue={characterAttributes.vitality}
        />

        <CharacterAttributeInput
          id="intelligence"
          label="Intelligence"
          defaultValue={characterAttributes.intelligence}
        />

        <CharacterAttributeInput
          id="mind"
          label="Mind"
          defaultValue={characterAttributes.mind}
        />

        <CharacterAttributeInput
          id="piety"
          label="Piety"
          defaultValue={characterAttributes.piety}
        />
      </Card.Body>
    </Card>
  );
}
