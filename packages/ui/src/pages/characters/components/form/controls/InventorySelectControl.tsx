import React from "react";
import { map } from "lodash";
import Form from "react-bootstrap/Form";
import { CharacterInventory, Item } from "@super-cascadia-rpg/api";
import { DEFAULT_OPTION_ID } from "./constants";

export default function InventorySelectControl({
  inventory,
  handleChange,
  selectedItem,
}: {
  inventory: CharacterInventory[];
  selectedItem: string;
  handleChange: (event: React.SyntheticEvent) => void;
}) {
  const defaultOption = (
    <option value={DEFAULT_OPTION_ID} key="default">
      --
    </option>
  );

  const inventoryOptions = map(
    inventory,
    (inventoryItem: CharacterInventory) => {
      return (
        <option value={inventoryItem.id} key={inventoryItem.id}>
          {inventoryItem.id} - {inventoryItem.item.name}
        </option>
      );
    }
  );

  const selectOptions = [defaultOption, ...inventoryOptions];

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
