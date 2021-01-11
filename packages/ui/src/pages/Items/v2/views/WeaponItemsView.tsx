import React, { useEffect, useState } from "react";
import { BasicWeaponItem } from "@super-cascadia-rpg/api";
import { fetchAllWeaponItemsHook } from "../../../../hooks/api/items/v2/fetchItemHooks";
import Loading from "../../../../components/indicators/Loading";
import ItemsPageTable from "../components/table/ItemsPageTable";
import { getItems } from "../components/util/items";
import { weaponItemsTableColumns } from "../config/armorItemsTableColumns.config";

export type ConsumableItemsStateHook = [BasicWeaponItem[], (data: any) => void];

export default function WeaponItemsView() {
  const [items, setItems]: ConsumableItemsStateHook = useState(
    {} as BasicWeaponItem[]
  );
  // @ts-ignore
  useEffect(fetchAllWeaponItemsHook(setItems), []);

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
    />
  );
}
