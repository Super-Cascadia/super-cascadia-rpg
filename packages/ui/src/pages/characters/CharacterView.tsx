import React, { useEffect, useState } from "react";
import DetailPageWrapper from "../../components/DetailPageWrapper";
import { useParams } from "react-router-dom";
import { isEmpty, toNumber } from "lodash";
import {CharacterModel} from "@super-cascadia-rpg/api";
import Loading from "../../components/Loading";
import fetchCharacterDataHook from "../../hooks/api/characters/fetchCharacterDataHook";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface characterEditState {
  character: CharacterModel;
}

type CharacterStateHook = [characterEditState, (data: any) => void];

function CharacterViewForm({ character }: { character: CharacterModel }) {
  return (
      <>
        <Form.Group as={Row} controlId="formId">
          <Form.Label column sm="2">
            ID
          </Form.Label>
          <Col sm="10">
            <Form.Control readOnly defaultValue={character.id} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formName">
          <Form.Label column sm="2">
            First Name
          </Form.Label>
          <Col sm="10">
            <Form.Control readOnly defaultValue={character.firstName} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formName">
          <Form.Label column sm="2">
            Last Name
          </Form.Label>
          <Col sm="10">
            <Form.Control readOnly defaultValue={character.lastName} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formDescription">
          <Form.Label column sm="2">
            Description
          </Form.Label>
          <Col sm="10">
            <Form.Control readOnly value={character.description} />
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
    <DetailPageWrapper
      objectId={toNumber(id)}
      name={`${character.firstName} ${character.lastName}`}
      routeName={"characters"}
    >
      <CharacterViewForm character={character} />
    </DetailPageWrapper>
  );
}
