import React, { useEffect, useState } from "react";
import { BasicArmorItem } from "@super-cascadia-rpg/api";
import { fetchAllArmorItemsHook } from "../../../../hooks/api/items/v2/fetchItemHooks";
import Loading from "../../../../components/indicators/Loading";
import ItemsPageTable from "../components/table/ItemsPageTable";
import { getItems } from "../components/util/items";
import { armorItemsTableColumns } from "../config/armorItemsTableColumns.config";

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
    armorItemsTableColumns
  );

  return (
    <ItemsPageTable
      columns={armorItemsTableColumns}
      itemsRendered={itemsWithRenderers}
    />
  );
}
