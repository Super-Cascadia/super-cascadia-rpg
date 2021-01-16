import React, { useEffect, useState } from "react";
import { BasicConsumableItem } from "@super-cascadia-rpg/api";
import { fetchAllConsumableItemsHook } from "../../../../hooks/api/items/v2/fetchItemHooks";
import Loading from "../../../../components/indicators/Loading";
import ItemsPageTable from "../components/table/ItemsPageTable";
import { getItems } from "../components/util/items";
import { consumableItemsTableColumns } from "../config/consumableTableColumns.config";
import EditItemModal from "../components/modal/EditItemModal";
import { find } from "lodash";

export type ConsumableItemsStateHook = [
  BasicConsumableItem[],
  (data: any) => void
];

export default function ConsumableItemsView() {
  const [items, setItems]: ConsumableItemsStateHook = useState(
    {} as BasicConsumableItem[]
  );
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [showEditItemModal, setEditItemModalViz] = useState<boolean>(false);
  const [showDeleteItemModal, setDeleteItemModalViz] = useState<boolean>(false);
  // @ts-ignore
  useEffect(fetchAllConsumableItemsHook(setItems), []);

  const handleOpenEditModal = (id: number) => {
    setSelectedItemId(id);
    setEditItemModalViz(true);
  };

  const handleCloseEditItemModal = () => {
    setEditItemModalViz(true);
  };

  const handleOpenDeleteModal = (id: number) => {
    setSelectedItemId(id);
    setDeleteItemModalViz(true);
  };

  if (!items) {
    return <Loading />;
  }

  const selectedItem = find(items, (item) => item.id === selectedItemId);

  const itemsWithRenderers = getItems<BasicConsumableItem>(
    items,
    consumableItemsTableColumns
  );

  return (
    <div>
      <ItemsPageTable
        columns={consumableItemsTableColumns}
        itemsRendered={itemsWithRenderers}
        handleShowDeleteModal={handleOpenDeleteModal}
        handleShowEditModal={handleOpenEditModal}
      />
      {showEditItemModal && selectedItem && (
        <EditItemModal
          show={showEditItemModal}
          item={selectedItem}
          handleClose={handleCloseEditItemModal}
        />
      )}
    </div>
  );
}
