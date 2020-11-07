import React, { SyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { CharacterClassId } from "@super-cascadia-rpg/api/build/src/model/characterClass/characterClassModel";
import createCharacter from "../../api/characters/createCharacter";
import { ObjectCreatePageWrapper } from "../../components/ObjectCreatePageWrapper";
import { TextInput } from "../../components/forms/TextInput";
import { SelectInput } from "../../components/forms/SelectInput";
import { primaryClassOptions } from "./constants";

const initialFormState = {
  firstName: "",
  lastName: "",
  description: "",
  primaryClass: CharacterClassId.FREELANCER,
};

function CreateCharacterForm({
  handleFormChange,
}: {
  handleFormChange: (e: React.SyntheticEvent) => void;
}) {
  return (
    <>
      <TextInput
        onChange={handleFormChange}
        label={"First Name"}
        id={"firstName"}
      />

      <TextInput
        onChange={handleFormChange}
        label={"Last Name"}
        id={"lastName"}
      />

      <TextInput
        onChange={handleFormChange}
        label={"Description"}
        id={"description"}
        inputDescription={"a description of the character"}
      />

      <SelectInput
        onChange={handleFormChange}
        label={"Primary Class"}
        id={"primaryClass"}
        options={primaryClassOptions}
        inputDescription={
          "The Primary class of the character. Determines key attributes and modifiers."
        }
      />
    </>
  );
}

export default function CharacterCreate() {
  const [formState, updateFormState] = useState(initialFormState);
  const history = useHistory();

  const handleFormChange = (event: SyntheticEvent) => {
    const { id, value } = event?.target as HTMLInputElement;

    const newState = {
      ...formState,
      [id]: id === "primaryClass" ? parseInt(value, 10) : value,
    };

    updateFormState(newState);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();

    createCharacter(formState).then(() => {
      updateFormState(initialFormState);
      history.push("/characters");
    });
  };

  return (
    <ObjectCreatePageWrapper
      name={"Create new Character"}
      handleSubmit={handleSubmit}
    >
      <CreateCharacterForm handleFormChange={handleFormChange} />
    </ObjectCreatePageWrapper>
  );
}
