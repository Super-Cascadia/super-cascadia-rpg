import React, { SyntheticEvent, useState } from "react";
import { ItemType } from "@super-cascadia-rpg/api";
import createItem from "../../api/items/createItem";
import { useHistory } from "react-router-dom";
import { ObjectCreatePageWrapper } from "../../components/ObjectCreatePageWrapper";
import { TextInput } from "../../components/forms/TextInput";
import { SelectInput } from "../../components/forms/SelectInput";
import { itemTypeOptions } from "./constants";

const initialFormState = {
  name: "",
  description: "",
  type: ItemType.FOOD,
};

function ItemCreateForm({
  handleFormChange,
}: {
  handleFormChange: (event: React.SyntheticEvent) => void;
}) {
  return (
    <>
      <TextInput
        label="Name"
        id="name"
        onChange={handleFormChange}
        inputDescription="The name of the item."
      />

      <TextInput
        label={"Description"}
        id={"description"}
        inputDescription="a description of the item"
        onChange={handleFormChange}
      />

      <SelectInput
        onChange={handleFormChange}
        label="Item Type"
        id="type"
        options={itemTypeOptions}
        inputDescription="The classification of the item."
      />
    </>
  );
}

export default function ItemCreate() {
  const [formState, updateFormState] = useState(initialFormState);
  const history = useHistory();

  const handleFormChange = (event: SyntheticEvent) => {
    const { id, value } = event?.target as HTMLInputElement;

    const newState = {
      ...formState,
      [id]: id === "type" ? parseInt(value, 10) : value,
    };

    updateFormState(newState);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();

    createItem(formState).then(() => {
      updateFormState(initialFormState);
      history.push("/items");
    });
  };

  return (
    <ObjectCreatePageWrapper
      name={"Create new Item"}
      handleSubmit={handleSubmit}
    >
      <ItemCreateForm handleFormChange={handleFormChange} />
    </ObjectCreatePageWrapper>
  );
}
