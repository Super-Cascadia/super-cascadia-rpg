import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import { IconAsset } from "@super-cascadia-rpg/api/src/db/entity/assets/icons/IconAsset";

interface Props {
  iconAsset: IconAsset;
  handleShowDeleteModal?: (item: IconAsset) => void;
  handleShowEditModal?: (item: IconAsset) => void;
}

export default function IconAssetTableActions({
  handleShowDeleteModal,
  handleShowEditModal,
  iconAsset,
}: Props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
        Actions
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {handleShowEditModal && (
          <Dropdown.Item
            href="#/action-3"
            onClick={() => handleShowEditModal(iconAsset)}
          >
            Edit
          </Dropdown.Item>
        )}
        {handleShowDeleteModal && (
          <Dropdown.Item
            href="#/action-3"
            onClick={() => handleShowDeleteModal(iconAsset)}
          >
            Delete
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}
