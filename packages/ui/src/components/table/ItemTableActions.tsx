import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import { IconAsset } from "@super-cascadia-rpg/api/src/db/entity/assets/icons/IconAsset";
import { BasicItem } from "@super-cascadia-rpg/api";

interface Props {
  id: number;
  handleShowDeleteModal: (id: number) => void;
  handleShowEditModal: (id: number) => void;
}

export default function ItemTableActions({
  handleShowDeleteModal,
  handleShowEditModal,
  id,
}: Props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
        Actions
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {handleShowEditModal && (
          <Dropdown.Item onClick={() => handleShowEditModal(id)}>
            Edit
          </Dropdown.Item>
        )}
        {handleShowDeleteModal && (
          <Dropdown.Item onClick={() => handleShowDeleteModal(id)}>
            Delete
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}
