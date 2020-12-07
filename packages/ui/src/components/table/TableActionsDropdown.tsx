import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import { IconAsset } from "@super-cascadia-rpg/api/build/src/db/entity/assets/icons/IconAsset";

interface Props {
  inventoryItem: IconAsset;
  handleShowDeleteModal?: (item: IconAsset) => void;
}

export default function TableActionsDropdown({
  handleShowDeleteModal,
  inventoryItem,
}: Props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
        Actions
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">View</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Duplicate</Dropdown.Item>
        {handleShowDeleteModal && (
          <Dropdown.Item
            href="#/action-3"
            onClick={() => handleShowDeleteModal(inventoryItem)}
          >
            Delete
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}
