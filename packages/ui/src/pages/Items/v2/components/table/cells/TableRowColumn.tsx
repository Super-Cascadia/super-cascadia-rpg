import { BasicConsumableItem } from "@super-cascadia-rpg/api";
import { TableColumns } from "../../../ItemsPage";
import React from "react";

export enum FIELDS {
  RECOVERS_HEALTH = "recoversHealth",
  NAME = "name",
  ID = "id",
  DESCRIPTION = "description",
}

function extractValue(item: BasicConsumableItem, column: TableColumns) {
  switch (column.fieldName) {
    case FIELDS.ID:
      return item.id;
    case FIELDS.NAME:
      return item.name;
    case FIELDS.DESCRIPTION:
      return item.description;
    case FIELDS.RECOVERS_HEALTH:
      return item.recoversHealth;
    default:
      return null;
  }
}

export default function TableRowColumn({
  column,
  item,
}: {
  column: TableColumns;
  item: BasicConsumableItem;
}) {
  const value = extractValue(item, column);
  const renderedValue = column.renderer ? column.renderer(value) : value;

  return <td>{renderedValue}</td>;
}
