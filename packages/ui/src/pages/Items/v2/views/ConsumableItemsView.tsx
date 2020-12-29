import React, { useEffect, useState } from "react";
import { BasicConsumableItem } from "@super-cascadia-rpg/api";
import { fetchAllConsumableItemsHook } from "../../../../hooks/api/items/v2/fetchItemHooks";
import Loading from "../../../../components/indicators/Loading";
import ItemsPageTable from "../components/table/ItemsPageTable";
import { consumableItemsTableColumns } from "../config/tableColumns.config";

export type ConsumableItemsStateHook = [
  BasicConsumableItem[],
  (data: any) => void
];

export default function ConsumableItemsView() {
  const [items, setItems]: ConsumableItemsStateHook = useState(
    {} as BasicConsumableItem[]
  );
  // @ts-ignore
  useEffect(fetchAllConsumableItemsHook(setItems), []);

  if (!items) {
    return <Loading />;
  }

  return <ItemsPageTable items={items} columns={consumableItemsTableColumns} />;
}
