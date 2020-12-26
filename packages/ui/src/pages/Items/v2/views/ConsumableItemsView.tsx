import React, { useEffect, useState } from "react";
import { BasicConsumableItem } from "@super-cascadia-rpg/api";
import { fetchAllConsumableItemsHook } from "../../../../hooks/api/items/v2/fetchItemHooks";
import Loading from "../../../../components/indicators/Loading";
import ItemsPageTable from "../components/table/ItemsPageTable";
import { TableColumns } from "../ItemsPage";
import BadgeCell from "../components/table/cells/BadgeCell";
import { FIELDS } from "../components/table/cells/TableRowColumn";

export type ConsumableItemsStateHook = [
  BasicConsumableItem[],
  (data: any) => void
];

export default function ConsumableItemsView() {
  const [data, setData]: ConsumableItemsStateHook = useState(
    {} as BasicConsumableItem[]
  );
  // @ts-ignore
  useEffect(fetchAllConsumableItemsHook(setData), []);

  if (!data) {
    return <Loading />;
  }

  const columns: TableColumns[] = [
    {
      fieldName: FIELDS.ID,
      title: "ID",
      renderer: BadgeCell,
    },
    {
      fieldName: FIELDS.NAME,
      title: "Name",
    },
    {
      fieldName: FIELDS.DESCRIPTION,
      title: "Description",
    },
    {
      fieldName: "consumable",
      title: "Consumable",
    },
    {
      fieldName: FIELDS.RECOVERS_HEALTH,
      title: "Recovers Health",
    },
    {
      fieldName: "healthRecoveryFactor",
      title: "Health Recovery Factor",
    },
    {
      fieldName: "recoversMana",
      title: "Recovers Mana",
    },
    {
      fieldName: "manaRecoveryFactor",
      title: "Mana Recovery Factor",
    },
  ];

  return <ItemsPageTable items={data} columns={columns} />;
}
