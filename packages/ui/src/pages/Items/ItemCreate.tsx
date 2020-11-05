import React, { SyntheticEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import { ItemType } from "@super-cascadia-rpg/api";
import createItem from "../../api/items/createItem";
import { useHistory } from "react-router-dom";
import { ObjectCreatePageWrapper } from "../../components/ObjectCreatePageWrapper";

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
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleFormChange} />
        <Form.Text className="text-muted">The name of the item.</Form.Text>
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={handleFormChange} />
        <Form.Text className="text-muted">a description of the item</Form.Text>
      </Form.Group>

      <Form.Group controlId="type" onChange={handleFormChange}>
        <Form.Label>Item Type</Form.Label>
        <Form.Control as="select" custom>
          <option value={ItemType.FOOD}>Food</option>
          <option value={ItemType.WEAPON}>Weapon</option>
          <option value={ItemType.ACCESSORY}>Accessory</option>
          <option value={ItemType.KEY_ITEM}>Key Item</option>
          <option value={ItemType.ARMOR}>Armor</option>
        </Form.Control>
      </Form.Group>
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
