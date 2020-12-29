import { BasicConsumableItem } from "@super-cascadia-rpg/api";
import { TableColumn } from "../../../ItemsPage";
import React from "react";

export enum FIELDS {
  NAME = "name",
  ID = "id",
  ICON = "iconAsset",
  DESCRIPTION = "description",
  CONSUMABLE = "consumable",
  RECOVERS_HEALTH = "recoversHealth",
  HEALTH_RECOVERY_FACTOR = "healthRecoveryFactor",
  RECOVERS_MANA = "recoversMana",
  MANA_RECOVERY_FACTOR = "manaRecoveryFactor",
  RECOVERS_STAMINA = "recoversStamina",
  STAMINA_RECOVERY_FACTOR = "staminaRecoveryFactor",
}

function getColumnValueForRow(item: BasicConsumableItem, column: TableColumn) {
  switch (column.fieldName) {
    case FIELDS.ID:
      return item.id;
    case FIELDS.ICON:
      return item.iconAsset?.assetPath;
    case FIELDS.NAME:
      return item.name;
    case FIELDS.DESCRIPTION:
      return item.description;
    case FIELDS.RECOVERS_HEALTH:
      return item.recoversHealth;
    case FIELDS.RECOVERS_MANA:
      return item.recoversMana;
    case FIELDS.CONSUMABLE:
      return item.consumable;
    case FIELDS.HEALTH_RECOVERY_FACTOR:
      return item.healthRecoveryFactor;
    case FIELDS.MANA_RECOVERY_FACTOR:
      return item.manaRecoveryFactor;
    case FIELDS.RECOVERS_STAMINA:
      return item.recoversStamina;
    case FIELDS.STAMINA_RECOVERY_FACTOR:
      return item.staminaRecoveryFactor;
    default:
      return null;
  }
}

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
