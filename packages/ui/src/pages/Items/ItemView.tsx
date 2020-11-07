import React, { useEffect, useState } from "react";
import { ItemModel } from "@super-cascadia-rpg/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import fetchItemDataHook from "../../hooks/api/items/fetchItemDataHook";
import { getItemTypeNameById } from "../../util/itemType";
import { isEmpty, toNumber, toString } from "lodash";
import Loading from "../../components/Loading";
import ObjectDetailViewPageWrapper from "../../components/ObjectDetailViewPageWrapper";
import { TextInput } from "../../components/forms/TextInput";
import { itemTypeOptions } from "./constants";
import { SelectInput } from "../../components/forms/SelectInput";

function ItemViewForm({ item }: { item: ItemModel }) {
  const itemTypeName = getItemTypeNameById(item?.type);

  return (
    <>
      <TextInput label="ID" id="id" readOnly defaultValue={item.id} />

      <TextInput
        label="Name"
        id="name"
        readOnly
        defaultValue={item.name}
        inputDescription="The name of the item."
      />

      <TextInput
        label={"Description"}
        id={"description"}
        inputDescription="a description of the item"
        readOnly
        value={item.description}
      />

      <SelectInput
        label="Item Type"
        id="type"
        options={itemTypeOptions}
        value={itemTypeName}
        inputDescription="The classification of the item."
      />
    </>
  );
}

interface ItemEditState {
  item: ItemModel;
}

type ItemsStateHook = [ItemEditState, (data: any) => void];

export default function ItemView() {
  const { id } = useParams();
  const [data, setData]: ItemsStateHook = useState({ item: {} as ItemModel });
  const { item } = data;

  // @ts-ignore
  useEffect(fetchItemDataHook(id, setData), {});

  if (isEmpty(item)) {
    return <Loading />;
  }

  return (
    <ObjectDetailViewPageWrapper
      objectId={toNumber(id)}
      name={item.name}
      routeName={"items"}
    >
      <ItemViewForm item={item} />
    </ObjectDetailViewPageWrapper>
  );
}
