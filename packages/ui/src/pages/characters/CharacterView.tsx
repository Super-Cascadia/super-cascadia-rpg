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
import { CharacterAttributeInput } from "../../components/forms/CharacterAttributeInput";

interface CharacterEditState {
  character: CharacterWithAttributes;
}

type CharacterStateHook = [CharacterEditState, (data: any) => void];

function CharacterViewForm({
  character,
}: {
  character: CharacterWithAttributes;
}) {
  return (
    <>
      <TextInput label="ID" id="id" readOnly defaultValue={character.id} />

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

      <TextInput
        label="Description"
        id="description"
        inputDescription="a description of the character"
        readOnly
        defaultValue={character.description}
      />

      <SelectInput
        label="Primary Class"
        id="primaryClass"
        options={primaryClassOptions}
        readOnly
        defaultValue={toString(character.primaryClass)}
        inputDescription="The Primary class of the character. Determines key attributes and modifiers."
      />

      <CharacterAttributeInput
        id="strength"
        label="Strength"
        defaultValue={character.characterAttributes.strength}
      />

      <CharacterAttributeInput
        id="dexterity"
        label="Dexterity"
        defaultValue={character.characterAttributes.dexterity}
      />

      <CharacterAttributeInput
        id="vitality"
        label="Vitality"
        defaultValue={character.characterAttributes.vitality}
      />

      <CharacterAttributeInput
        id="intelligence"
        label="Intelligence"
        defaultValue={character.characterAttributes.intelligence}
      />

      <CharacterAttributeInput
        id="mind"
        label="Mind"
        defaultValue={character.characterAttributes.mind}
      />

      <CharacterAttributeInput
        id="piety"
        label="Piety"
        defaultValue={character.characterAttributes.piety}
      />
    </>
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
