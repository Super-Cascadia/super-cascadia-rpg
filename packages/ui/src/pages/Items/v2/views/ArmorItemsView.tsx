import React, { useEffect, useState } from "react";
import { BasicArmorItem } from "@super-cascadia-rpg/api";
import { fetchAllArmorItemsHook } from "../../../../hooks/api/items/v2/fetchItemHooks";
import Loading from "../../../../components/indicators/Loading";
import ItemsPageTable from "../components/table/ItemsPageTable";
import { weaponItemsTableColumns } from "../config/armorItemsTableColumns.config";
import { getItems } from "../components/util/items";

export type ArmorItemsStateHook = [BasicArmorItem[], (data: any) => void];

export default function ArmorItemsView() {
  const [items, setItems]: ArmorItemsStateHook = useState(
    {} as BasicArmorItem[]
  );
  // @ts-ignore
  useEffect(fetchAllArmorItemsHook(setItems), []);

  if (!items) {
    return <Loading />;
  }

  const itemsWithRenderers = getItems<BasicArmorItem>(
    items,
    weaponItemsTableColumns
  );

  return (
    <ItemsPageTable
      columns={weaponItemsTableColumns}
      itemsRendered={itemsWithRenderers}
    />
  );
}
