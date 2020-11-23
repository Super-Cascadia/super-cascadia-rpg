import React from "react";
import { map } from "lodash";
import Form from "react-bootstrap/Form";
import { Item } from "@super-cascadia-rpg/api";
import { DEFAULT_OPTION_ID } from "./constants";

export default function ItemSelectControl({
  items,
  handleChange,
  selectedItem,
}: {
  items: Item[];
  selectedItem: string;
  handleChange: (event: React.SyntheticEvent) => void;
}) {
  const defaultOption = (
    <option value={DEFAULT_OPTION_ID} key="default">
      --
    </option>
  );

  const itemOptions = map(items, (item: Item) => {
    return (
      <option value={item.id} key={item.id}>
        {item.id} - {item.name}
      </option>
    );
  });

  const selectOptions = [defaultOption, ...itemOptions];

  return (
    <Form.Control
      as="select"
      custom
      onChange={handleChange}
      value={selectedItem}
      id="itemId"
    >
      {selectOptions}
    </Form.Control>
  );
}
