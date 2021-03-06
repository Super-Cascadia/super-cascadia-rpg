import { TableColumn } from "../ItemsPage";
import { FIELDS } from "./fields.config";
import {
  BooleanBadgeCell,
  EffectFactorBadgeCell,
  WeaponTypeCell,
} from "../components/table/cells/tableCells";
import {
  BASE_DURABILITY_COLUMN,
  BASE_MONETARY_VALUE_COLUMN,
  BREAKABLE_COLUMN,
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
  SALVAGABLE_COLUMN,
  BASE_MONETARY_VALUE_COLUMN,
  EQUIPPABLE_COLUMN,
  BREAKABLE_COLUMN,
  BASE_DURABILITY_COLUMN,
  CURRENT_DURABILITY_COLUMN,
  {
    fieldName: FIELDS.WEAPON_STRENGTH,
    title: "Weapon Strength",
    renderer: EffectFactorBadgeCell,
  },
  {
    fieldName: FIELDS.WEAPON_TYPE,
    title: "Weapon Type",
    renderer: WeaponTypeCell,
  },
  {
    fieldName: FIELDS.TWO_HANDED,
    title: "Two Handed",
    renderer: BooleanBadgeCell,
  },
];
