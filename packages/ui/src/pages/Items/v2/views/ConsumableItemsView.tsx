import React, { useEffect, useState } from "react";
import { BasicConsumableItem } from "@super-cascadia-rpg/api";
import { fetchAllConsumableItemsHook } from "../../../../hooks/api/items/v2/fetchItemHooks";
import Loading from "../../../../components/indicators/Loading";
import ItemsPageTable from "../components/table/ItemsPageTable";
import { TableColumn } from "../ItemsPage";
import { FIELDS } from "../components/table/cells/TableRowColumn";
import {
  BadgeCell,
  BooleanBadgeCell,
  EffectFactorBadgeCell,
  IconCell,
} from "../components/table/cells/badgeCells";

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

  const columns: TableColumn[] = [
    {
      fieldName: FIELDS.ID,
      title: "ID",
      renderer: BadgeCell,
    },
    {
      fieldName: FIELDS.ICON,
      title: "Icon",
      renderer: IconCell,
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
      fieldName: FIELDS.CONSUMABLE,
      title: "Consumable",
      renderer: BooleanBadgeCell,
    },
    {
      fieldName: FIELDS.RECOVERS_HEALTH,
      title: "Recovers Health",
      renderer: BooleanBadgeCell,
    },
    {
      fieldName: FIELDS.HEALTH_RECOVERY_FACTOR,
      title: "Health Recovery Factor",
      renderer: EffectFactorBadgeCell,
    },
    {
      fieldName: FIELDS.RECOVERS_MANA,
      title: "Recovers Mana",
      renderer: BooleanBadgeCell,
    },
    {
      fieldName: FIELDS.MANA_RECOVERY_FACTOR,
      title: "Mana Recovery Factor",
      renderer: EffectFactorBadgeCell,
    },
    {
      fieldName: FIELDS.RECOVERS_STAMINA,
      title: "Recovers Stamina",
      renderer: BooleanBadgeCell,
    },
    {
      fieldName: FIELDS.STAMINA_RECOVERY_FACTOR,
      title: "Stamina Recovery Factor",
      renderer: EffectFactorBadgeCell,
    },
  ];

  return <ItemsPageTable items={data} columns={columns} />;
}
