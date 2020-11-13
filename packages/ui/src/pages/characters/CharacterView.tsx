import React, { useEffect, useState } from "react";
import ObjectDetailViewPageWrapper from "../../components/ObjectDetailViewPageWrapper";
import { useParams } from "react-router-dom";
import { isEmpty, toNumber, toString } from "lodash";
import { CharacterWithAttributes } from "@super-cascadia-rpg/api";
import Loading from "../../components/Loading";
import fetchCharacterDataHook from "../../hooks/api/characters/fetchCharacterDataHook";
import { TextInput } from "../../components/forms/TextInput";
import { SelectInput } from "../../components/forms/SelectInput";
import { primaryClassOptions } from "./constants";
import Form from "react-bootstrap/Form";
import { CharacterAttributesPanel } from "./components/CharacterAttributesPanel";
import Card from "react-bootstrap/Card";
import { getCharacterById } from "@super-cascadia-rpg/api/build/src/db/selectors/characters";
import { getCharacter } from "../../api/characters/getCharacter";

interface CharacterEditState {
  character: CharacterWithAttributes;
}

type CharacterStateHook = [CharacterEditState, (data: any) => void];

function CharacterViewForm({
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
        onRefresh={onRefresh}
        characterAttributes={character.characterAttributes}
      />
    </Form>
  );
}

export default function CharacterView() {
  const { id } = useParams();
  const [data, setData]: CharacterStateHook = useState({
    character: {} as CharacterWithAttributes,
  });

  const { character } = data;

  useEffect(
    fetchCharacterDataHook(
      { id: toNumber(id), includeAttributes: true },
      setData
    ),
    // @ts-ignore
    {}
  );

  const reloadData = () => {
    getCharacter(toNumber(id), true).then((data) => {
      setData({
        character: data,
      });
    });
  };

  if (isEmpty(character)) {
    return <Loading />;
  }

  return (
    <ObjectDetailViewPageWrapper
      objectId={toNumber(id)}
      name={`${character.firstName} ${character.lastName}`}
      routeName={"characters"}
    >
      <CharacterViewForm character={character} onRefresh={reloadData} />
    </ObjectDetailViewPageWrapper>
  );
}
