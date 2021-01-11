import { TableColumn } from "../ItemsPage";
import { FIELDS } from "./fields.config";
import {
  BooleanBadgeCell,
  EffectFactorBadgeCell,
} from "../components/table/cells/badgeCells";
import {
  BASE_MONETARY_VALUE_COLUMN,
  CONSUMABLE_COLUMN,
  DESCRIPTION_COLUMN,
  ICON_COLUMN,
  ID_COLUMN,
  NAME_COLUMN,
  SALVAGABLE_COLUMN,
} from "./tableColumns.config";

export const consumableItemsTableColumns: TableColumn[] = [
  ID_COLUMN,
  ICON_COLUMN,
  NAME_COLUMN,
  DESCRIPTION_COLUMN,
  CONSUMABLE_COLUMN,
  SALVAGABLE_COLUMN,
  BASE_MONETARY_VALUE_COLUMN,
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
