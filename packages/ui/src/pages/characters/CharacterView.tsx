import React, { useEffect, useState } from "react";
import ObjectDetailViewPageWrapper from "../../components/ObjectDetailViewPageWrapper";
import { useParams } from "react-router-dom";
import { isEmpty, toNumber, toString } from "lodash";
import { CharacterModel } from "@super-cascadia-rpg/api";
import Loading from "../../components/Loading";
import fetchCharacterDataHook from "../../hooks/api/characters/fetchCharacterDataHook";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TextInput } from "../../components/forms/TextInput";
import { SelectInput } from "../../components/forms/SelectInput";
import { primaryClassOptions } from "./constants";

interface characterEditState {
  character: CharacterModel;
}

type CharacterStateHook = [characterEditState, (data: any) => void];

function CharacterViewForm({ character }: { character: CharacterModel }) {
  return (
    <>
      <Form.Group as={Row} controlId="id">
        <Form.Label column sm="2">
          ID
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly defaultValue={character.id} />
        </Col>
      </Form.Group>

      <TextInput
        label="First Name"
        id="firstName"
        readOnly
        defaultValue={character.firstName}
      />

      <TextInput
        label={"Last Name"}
        id={"lastName"}
        readOnly
        defaultValue={character.lastName}
      />

      <TextInput
        label={"Description"}
        id={"description"}
        inputDescription={"a description of the character"}
        readOnly
        defaultValue={character.description}
      />

      <SelectInput
        label={"Primary Class"}
        id={"primaryClass"}
        options={primaryClassOptions}
        readOnly
        defaultValue={toString(character.primaryClass)}
        inputDescription={
          "The Primary class of the character. Determines key attributes and modifiers."
        }
      />
    </>
  );
}

export default function CharacterView() {
  const { id } = useParams();
  const [data, setData]: CharacterStateHook = useState({
    character: {} as CharacterModel,
  });

  const { character } = data;

  // @ts-ignore
  useEffect(fetchCharacterDataHook(id, setData), {});

  if (isEmpty(character)) {
    return <Loading />;
  }

  return (
    <ObjectDetailViewPageWrapper
      objectId={toNumber(id)}
      name={`${character.firstName} ${character.lastName}`}
      routeName={"characters"}
    >
      <CharacterViewForm character={character} />
    </ObjectDetailViewPageWrapper>
  );
}
