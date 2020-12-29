import { TableColumn } from "../ItemsPage";
import { BasicConsumableItem } from "@super-cascadia-rpg/api";
import { FIELDS } from "../config/fields.config";

export function getColumnValueForRow(
  item: BasicConsumableItem,
  column: TableColumn
) {
  switch (column.fieldName) {
    case FIELDS.ID:
      return item.id;
    case FIELDS.ICON:
      return item.iconAsset?.assetPath;
    case FIELDS.NAME:
      return item.name;
    case FIELDS.DESCRIPTION:
      return item.description;
    case FIELDS.SALVAGABLE:
      return item.salvagable;
    case FIELDS.BASE_MONETARY_VALUE:
      return item.baseMonetaryValue;
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
