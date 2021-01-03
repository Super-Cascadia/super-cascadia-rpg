import React, { useEffect, useState } from "react";
import { BasicConsumableItem } from "@super-cascadia-rpg/api";
import { fetchAllConsumableItemsHook } from "../../../../hooks/api/items/v2/fetchItemHooks";
import Loading from "../../../../components/indicators/Loading";
import ItemsPageTable from "../components/table/ItemsPageTable";
import { consumableItemsTableColumns } from "../config/tableColumns.config";
import { map, mapKeys, Dictionary } from "lodash";
import { TableColumn, TableColumnRendered } from "../ItemsPage";

export type ConsumableItemsStateHook = [
  BasicConsumableItem[],
  (data: any) => void
];

function getRenderedFieldValues(
  item: BasicConsumableItem,
  tableColumnKeys: Dictionary<TableColumn>
) {
  return map(
    item,
    (value, key: string): TableColumnRendered => {
      const tableColumnDefinition = tableColumnKeys[key];
      const renderedValue = tableColumnDefinition?.renderer
        ? tableColumnDefinition.renderer(value)
        : null;

      return {
        key,
        renderedValue,
      };
    }
  );
}

function getItems(
  items: BasicConsumableItem[],
  columns: TableColumn[]
): TableColumnRendered[][] {
  const tableColumnKeys = mapKeys(columns, (column) => column.fieldName);

  return map(items, (item: BasicConsumableItem): TableColumnRendered[] => {
    return getRenderedFieldValues(item, tableColumnKeys);
  });
}

export default function ConsumableItemsView() {
  const [items, setItems]: ConsumableItemsStateHook = useState(
    {} as BasicConsumableItem[]
  );
  // @ts-ignore
  useEffect(fetchAllConsumableItemsHook(setItems), []);

  if (!items) {
    return <Loading />;
  }

  const itemsWithRenderers = getItems(items, consumableItemsTableColumns);

  console.log("itemsWithRenderers", itemsWithRenderers);

  return <ItemsPageTable items={items} columns={consumableItemsTableColumns} />;
}
