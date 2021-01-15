import React, { useEffect, useState } from "react";
import { BasicWeaponItem } from "@super-cascadia-rpg/api";
import { fetchAllWeaponItemsHook } from "../../../../hooks/api/items/v2/fetchItemHooks";
import Loading from "../../../../components/indicators/Loading";
import ItemsPageTable from "../components/table/ItemsPageTable";
import { getItems } from "../components/util/items";
import { weaponItemsTableColumns } from "../config/weaponItemsTableColumns.config";

export type ConsumableItemsStateHook = [BasicWeaponItem[], (data: any) => void];

export default function WeaponItemsView() {
  const [items, setItems]: ConsumableItemsStateHook = useState(
    {} as BasicWeaponItem[]
  );
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [showEditItemModal, setEditItemModalViz] = useState<boolean>(false);
  const [showDeleteItemModal, setDeleteItemModalViz] = useState<boolean>(false);
  // @ts-ignore
  useEffect(fetchAllWeaponItemsHook(setItems), []);

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

  const itemsWithRenderers = getItems<BasicWeaponItem>(
    items,
    weaponItemsTableColumns
  );

  return (
    <ItemsPageTable
      columns={weaponItemsTableColumns}
      itemsRendered={itemsWithRenderers}
      handleShowDeleteModal={handleOpenDeleteModal}
      handleShowEditModal={handleOpenEditModal}
    />
  );
}
