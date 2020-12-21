import React from "react";
import { ItemModel } from "@super-cascadia-rpg/api";
import { DeleteItemModal, DuplicateItemModal } from "./ItemModals";

interface Props {
  selectedItem: ItemModel | undefined;
  handleCloseDeleteModal: (id?: number) => void;
  showDeleteItemModal: boolean;
  handleCloseDuplicateModal: (id?: number) => void;
  showDuplicateItemModal: boolean;
}

function ItemGridModals({
  selectedItem,
  handleCloseDeleteModal,
  showDeleteItemModal,
  handleCloseDuplicateModal,
  showDuplicateItemModal,
}: Props) {
  return (
    <>
      {selectedItem ? (
        <DeleteItemModal
          handleClose={handleCloseDeleteModal}
          selectedItem={selectedItem}
          show={showDeleteItemModal}
        />
      ) : null}
      {selectedItem ? (
        <DuplicateItemModal
          handleClose={handleCloseDuplicateModal}
          selectedItem={selectedItem}
          show={showDuplicateItemModal}
        />
      ) : null}
    </>
  );
}

export default ItemGridModals;
