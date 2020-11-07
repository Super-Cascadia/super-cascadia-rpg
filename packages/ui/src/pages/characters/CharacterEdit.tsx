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
import { TextInput } from "../../components/forms/TextInput";
import { primaryClassOptions } from "./constants";
import { SelectInput } from "../../components/forms/SelectInput";

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
      <TextInput
        label="ID"
        id="id"
        readOnly
        defaultValue={toString(character.id)}
      />

      <TextInput
        label="First Name"
        id="firstName"
        value={character.firstName}
        onChange={(e: SyntheticEvent) => handleFormChange(e)}
      />

      <TextInput
        label={"Last Name"}
        id={"lastName"}
        value={character.lastName}
        onChange={(e: SyntheticEvent) => handleFormChange(e)}
      />

      <TextInput
        label={"Description"}
        id={"description"}
        inputDescription={"a description of the character"}
        value={character.description}
        onChange={(e: SyntheticEvent) => handleFormChange(e)}
      />

      <SelectInput
        label={"Primary Class"}
        id={"primaryClass"}
        options={primaryClassOptions}
        value={primaryClassString}
        onChange={(e: SyntheticEvent) => handleFormChange(e)}
        inputDescription={
          "The Primary class of the character. Determines key attributes and modifiers."
        }
      />
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
