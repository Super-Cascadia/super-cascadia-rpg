import React from "react";
import { map } from "lodash";
import Form from "react-bootstrap/Form";
import { CharacterInventory, Item } from "@super-cascadia-rpg/api";
import { DEFAULT_OPTION_ID } from "./constants";

export default function InventorySelectControl({
  inventory,
  handleChange,
  selectedInventoryId,
}: {
  inventory: CharacterInventory[];
  selectedInventoryId: string;
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

  console.log(selectOptions, selectedInventoryId);
  return (
    <Form.Control
      as="select"
      custom
      onChange={handleChange}
      value={selectedInventoryId}
      id="inventoryId"
    >
      {selectOptions}
    </Form.Control>
  );
}
