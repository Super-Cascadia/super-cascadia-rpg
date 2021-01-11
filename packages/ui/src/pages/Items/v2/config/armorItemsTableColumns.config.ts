import { TableColumn } from "../ItemsPage";
import { FIELDS } from "./fields.config";
import { EffectFactorBadgeCell } from "../components/table/cells/badgeCells";
import {
  BASE_DURABILITY_COLUMN,
  BASE_MONETARY_VALUE_COLUMN,
  BREAKABLE_COLUMN,
  CONSUMABLE_COLUMN,
  CURRENT_DURABILITY_COLUMN,
  DESCRIPTION_COLUMN,
  EQUIPPABLE_COLUMN,
  ICON_COLUMN,
  ID_COLUMN,
  NAME_COLUMN,
  SALVAGABLE_COLUMN,
} from "./tableColumns.config";

export const weaponItemsTableColumns: TableColumn[] = [
  ID_COLUMN,
  ICON_COLUMN,
  NAME_COLUMN,
  DESCRIPTION_COLUMN,
  CONSUMABLE_COLUMN,
  SALVAGABLE_COLUMN,
  BASE_MONETARY_VALUE_COLUMN,
  EQUIPPABLE_COLUMN,
  BREAKABLE_COLUMN,
  BASE_DURABILITY_COLUMN,
  CURRENT_DURABILITY_COLUMN,
  {
    fieldName: FIELDS.ARMOR_STRENGTH,
    title: "Armor Strength",
    renderer: EffectFactorBadgeCell,
  },
  {
    fieldName: FIELDS.ARMOR_LOCATION,
    title: "Armor Location",
    renderer: EffectFactorBadgeCell,
  },
];
