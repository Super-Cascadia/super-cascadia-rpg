import { BasicConsumableItem } from "@super-cascadia-rpg/api";
import { TableColumn } from "../../../ItemsPage";
import React from "react";
import { getColumnValueForRow } from "../../../mapping/fieldEntity.mapping";

export default function TableRowColumn({
  column,
  item,
}: {
  column: TableColumn;
  item: BasicConsumableItem;
}) {
  const value = getColumnValueForRow(item, column);
  const renderedValue = column.renderer ? column.renderer(value) : value;

  return <td>{renderedValue}</td>;
}
