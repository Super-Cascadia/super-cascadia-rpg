import React, { useEffect, useState, SyntheticEvent } from "react";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import fetchItemDataHook from "../../hooks/api/items/fetchItemDataHook";
import { toNumber, isEmpty } from "lodash";
import { toString } from "lodash";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import updateItem from "../../api/items/updateItem";
import { Item } from "@super-cascadia-rpg/api";
import Loading from "../../components/Loading";
import { ObjectDetailEditPageWrapper } from "../../components/ObjectDetailEditPageWrapper";
import { TextInput } from "../../components/forms/TextInput";
import { itemTypeOptions } from "./constants";
import { SelectInput } from "../../components/forms/SelectInput";

function ItemEditForm({
  item,
  handleFormChange,
}: {
  item: Item;
  handleFormChange: (event: React.SyntheticEvent) => void;
}) {
  return (
    <>
      <TextInput label="ID" id="id" readOnly defaultValue={item.id} />

      <TextInput
        label="Name"
        id="name"
        value={item.name}
        onChange={handleFormChange}
        inputDescription="The name of the item."
      />

      <TextInput
        label={"Description"}
        id={"description"}
        inputDescription="a description of the item"
        value={item.description}
        onChange={handleFormChange}
      />

      <SelectInput
        onChange={handleFormChange}
        label="Item Type"
        id="type"
        options={itemTypeOptions}
        value={toString(item.type)}
        inputDescription="The classification of the item."
      />
    </>
  );
}

export default function ItemEdit() {
  const { id: itemId } = useParams<{ id: string }>();
  const id = toNumber(itemId);
  const [data, setData] = useState({ item: {} as Item });
  const { item } = data;

  const handleFormChange = (event: SyntheticEvent) => {
    const { id, value } = event?.target as HTMLInputElement;

    const newState = {
      ...data,
      item: {
        ...data.item,
        [id]: id === "type" ? parseInt(value, 10) : value,
      },
    };

    setData(newState);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();

    updateItem(data.item).then(() => {
      setData(data);
      fetchItemDataHook(id, setData);
    });
  };

  // @ts-ignore
  useEffect(fetchItemDataHook(id, setData), {});

  if (isEmpty(item)) {
    return <Loading />;
  }

  return (
    <ObjectDetailEditPageWrapper
      objectId={item.id}
      name={item.name}
      routeName={"items"}
      handleSubmit={handleSubmit}
    >
      <ItemEditForm item={item} handleFormChange={handleFormChange} />
    </ObjectDetailEditPageWrapper>
  );
}
