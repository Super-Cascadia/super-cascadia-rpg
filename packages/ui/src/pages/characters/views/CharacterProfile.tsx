import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { TextInput } from "../../../components/forms/TextInput";
import { SelectInput } from "../../../components/forms/SelectInput";
import { primaryClassOptions } from "../constants";
import { CharacterAttributesPanel } from "../components/CharacterAttributesPanel";
import React from "react";
import { CharacterWithAttributes } from "@super-cascadia-rpg/api";
import { toString } from "lodash";

export function CharacterViewForm({
  character,
  onRefresh,
}: {
  character: CharacterWithAttributes;
  onRefresh: () => void;
}) {
  return (
    <Form>
      <Card>
        <Card.Header>Profile</Card.Header>
        <Card.Body>
          <Form.Row>
            <TextInput
              label="First Name"
              id="firstName"
              readOnly
              defaultValue={character.firstName}
            />

            <TextInput
              label="Last Name"
              id="lastName"
              readOnly
              defaultValue={character.lastName}
            />
          </Form.Row>

          <Form.Row>
            <TextInput
              label="Description"
              id="description"
              inputDescription="a description of the character"
              readOnly
              defaultValue={character.description}
            />
          </Form.Row>

          <Form.Row>
            <SelectInput
              label="Primary Class"
              id="primaryClass"
              options={primaryClassOptions}
              readOnly
              defaultValue={toString(character.primaryClass)}
              inputDescription="The Primary class of the character. Determines key attributes and modifiers."
            />
          </Form.Row>
        </Card.Body>
      </Card>
      <br />
      <CharacterAttributesPanel
        id={character.id}
        onRefresh={onRefresh}
        characterAttributes={character.characterAttributes}
      />
    </Form>
  );
}
