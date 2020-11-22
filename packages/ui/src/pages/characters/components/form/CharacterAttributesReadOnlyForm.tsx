import Form from "react-bootstrap/Form";
import { CharacterAttributeInput } from "../../../../components/forms/CharacterAttributeInput";
import { toString } from "lodash";
import React from "react";
import { CharacterAttributes } from "@super-cascadia-rpg/api";

export function CharacterAttributesForm({
  attributes,
}: {
  attributes: CharacterAttributes;
}) {
  return (
    <>
      <Form.Row>
        <CharacterAttributeInput
          id="strength"
          label="Strength"
          readOnly={true}
          value={toString(attributes.strength)}
          description="The physical strength of your character."
        />

        <CharacterAttributeInput
          id="dexterity"
          label="Dexterity"
          readOnly={true}
          value={toString(attributes.dexterity)}
          description="The reaction speed of your character."
        />
      </Form.Row>
      <Form.Row>
        <CharacterAttributeInput
          id="vitality"
          label="Vitality"
          readOnly={true}
          value={toString(attributes.vitality)}
          description="The hardiness of your character."
        />

        <CharacterAttributeInput
          id="intelligence"
          label="Intelligence"
          readOnly={true}
          value={toString(attributes.intelligence)}
          description="The intellect of your character."
        />
      </Form.Row>

      <Form.Row>
        <CharacterAttributeInput
          id="mind"
          label="Mind"
          readOnly={true}
          value={toString(attributes.mind)}
          description="The strength of your character's resolve"
        />

        <CharacterAttributeInput
          id="piety"
          label="Piety"
          readOnly={true}
          value={toString(attributes.piety)}
          description="The power of your character's faith in a higher power."
        />
      </Form.Row>
    </>
  );
}
