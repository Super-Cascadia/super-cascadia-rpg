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
import { getCharacterTypeById } from "../../util/characterClass";

interface characterEditState {
  character: CharacterModel;
}

type CharacterStateHook = [characterEditState, (data: any) => void];

function CharacterViewForm({ character }: { character: CharacterModel }) {
  const classTypeName = getCharacterTypeById(character.primaryClass);

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

      <Form.Group as={Row} controlId="firstName">
        <Form.Label column sm="2">
          First Name
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly defaultValue={character.firstName} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="lastName">
        <Form.Label column sm="2">
          Last Name
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly defaultValue={character.lastName} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="description">
        <Form.Label column sm="2">
          Description
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly value={character.description} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="primaryClass">
        <Form.Label column sm="2">
          Primary Class
        </Form.Label>
        <Col sm="10">
          <Form.Control
            as="select"
            readOnly
            value={toString(character.primaryClass)}
          >
            <option value={0}>Freelancer</option>
            <option value={1}>Rogue</option>
            <option value={2}>Warrior</option>
            <option value={3}>Mage</option>
            <option value={4}>Druid</option>
            <option value={5}>Sorcerer</option>
          </Form.Control>
        </Col>
      </Form.Group>
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
