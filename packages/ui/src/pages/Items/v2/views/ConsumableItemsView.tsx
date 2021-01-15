import React, { useEffect, useState } from "react";
import { BasicConsumableItem } from "@super-cascadia-rpg/api";
import { fetchAllConsumableItemsHook } from "../../../../hooks/api/items/v2/fetchItemHooks";
import Loading from "../../../../components/indicators/Loading";
import ItemsPageTable from "../components/table/ItemsPageTable";
import { getItems } from "../components/util/items";
import { consumableItemsTableColumns } from "../config/consumableTableColumns.config";

export type ConsumableItemsStateHook = [
  BasicConsumableItem[],
  (data: any) => void
];

export default function ConsumableItemsView() {
  const [items, setItems]: ConsumableItemsStateHook = useState(
    {} as BasicConsumableItem[]
  );
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [showEditItemModal, setEditItemModalViz] = useState<boolean>(false);
  const [showDeleteItemModal, setDeleteItemModalViz] = useState<boolean>(false);
  // @ts-ignore
  useEffect(fetchAllConsumableItemsHook(setItems), []);

  const handleOpenEditModal = (id: number) => {
    setSelectedItem(id);
    setEditItemModalViz(true);
  };

  const handleOpenDeleteModal = (id: number) => {
    setSelectedItem(id);
    setDeleteItemModalViz(true);
  };

  if (!items) {
    return <Loading />;
  }

  const itemsWithRenderers = getItems<BasicConsumableItem>(
    items,
    consumableItemsTableColumns
  );

  return (
    <ItemsPageTable
      columns={consumableItemsTableColumns}
      itemsRendered={itemsWithRenderers}
      handleShowDeleteModal={handleOpenDeleteModal}
      handleShowEditModal={handleOpenEditModal}
    />
  );
}
