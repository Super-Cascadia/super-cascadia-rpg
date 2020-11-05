import React, { useEffect, useState, SyntheticEvent } from "react";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { toNumber, isEmpty } from "lodash";
import { toString } from "lodash";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loading from "../../components/Loading";
import fetchCharacterDataHook from "../../hooks/api/characters/fetchCharacterDataHook";
import { Character } from "@super-cascadia-rpg/api";
import updateCharacter from "../../api/characters/updateCharacter";
import { ObjectDetailEditPageWrapper } from "../../components/ObjectDetailEditPageWrapper";

function CharacterEditForm({
  character,
  handleFormChange,
}: {
  character: Character;
  handleFormChange: (event: React.SyntheticEvent) => void;
}) {
  const primaryClassString = toString(character.primaryClass);

  return (
    <>
      <Form.Group as={Row} controlId="formId">
        <Form.Label column sm="2">
          ID
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly as="input" value={toString(character.id)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="firstName">
        <Form.Label column sm="2">
          First Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            as="input"
            value={character.firstName}
            onChange={(e: SyntheticEvent) => handleFormChange(e)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="lastName">
        <Form.Label column sm="2">
          Last Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            as="input"
            value={character.lastName}
            onChange={(e: SyntheticEvent) => handleFormChange(e)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="description">
        <Form.Label column sm="2">
          Description
        </Form.Label>
        <Col sm="10">
          <Form.Control
            as="input"
            value={character.description}
            onChange={(e: SyntheticEvent) => handleFormChange(e)}
          />
        </Col>
      </Form.Group>

      <Form.Group
        as={Row}
        controlId="primaryClass"
        onChange={(e: SyntheticEvent) => handleFormChange(e)}
      >
        <Form.Label column sm="2">
          Primary Class
        </Form.Label>
        <Col sm="10">
          <Form.Control as="select" value={primaryClassString}>
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

export default function CharacterEdit() {
  const { id: characterId } = useParams<{ id: string }>();
  const id = toNumber(characterId);
  const [data, setData] = useState({ character: {} as Character });
  const { character } = data;

  const handleFormChange = (event: SyntheticEvent) => {
    const { id, value } = event?.target as HTMLInputElement;

    const newState = {
      ...data,
      character: {
        ...data.character,
        [id]: id === "primaryClass" ? parseInt(value, 10) : value,
      },
    };

    setData(newState);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();

    updateCharacter(data.character).then(() => {
      setData(data);
      fetchCharacterDataHook(id, setData);
    });
  };

  // @ts-ignore
  useEffect(fetchCharacterDataHook(id, setData), {});

  if (isEmpty(character)) {
    return <Loading />;
  }

  return (
    <ObjectDetailEditPageWrapper
      objectId={character.id}
      name={`${character.firstName} ${character.lastName}`}
      routeName={"characters"}
      handleSubmit={handleSubmit}
    >
      <CharacterEditForm
        character={character}
        handleFormChange={handleFormChange}
      />
    </ObjectDetailEditPageWrapper>
  );
}
