import React, { useEffect, useState } from "react";
import { BasicConsumableItem } from "@super-cascadia-rpg/api";
import { fetchAllWeaponItemsHook } from "../../../../hooks/api/items/v2/fetchItemHooks";
import Loading from "../../../../components/indicators/Loading";
import ItemsPageTable from "../components/table/ItemsPageTable";
import { TableColumns } from "../ItemsPage";

export type ConsumableItemsStateHook = [
  BasicConsumableItem[],
  (data: any) => void
];

export default function WeaponItemsView() {
  const [data, setData]: ConsumableItemsStateHook = useState(
    {} as BasicConsumableItem[]
  );
  // @ts-ignore
  useEffect(fetchAllWeaponItemsHook(setData), []);

  if (!data) {
    return <Loading />;
  }

  const columns: TableColumns[] = [
    {
      fieldName: "id",
      title: "ID",
    },
    {
      fieldName: "consumable",
      title: "Consumable",
    },
  ];

  return <ItemsPageTable items={data} columns={columns} />;
}
