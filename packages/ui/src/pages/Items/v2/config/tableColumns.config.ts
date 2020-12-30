import { TableColumn } from "../ItemsPage";
import {
  BadgeCell,
  BooleanBadgeCell,
  EffectFactorBadgeCell,
  IconCell,
  MonetaryValueCell,
} from "../components/table/cells/badgeCells";
import { FIELDS } from "./fields.config";

const ID_COLUMN = {
  fieldName: FIELDS.ID,
  title: "ID",
  renderer: BadgeCell,
};

const ICON_COLUMN = {
  fieldName: FIELDS.ICON,
  title: "Icon",
  renderer: IconCell,
};

const NAME_COLUMN = {
  fieldName: FIELDS.NAME,
  title: "Name",
};

const DESCRIPTION_COLUMN = {
  fieldName: FIELDS.DESCRIPTION,
  title: "Description",
};

const CONSUMABLE_COLUMN = {
  fieldName: FIELDS.CONSUMABLE,
  title: "Consumable",
  renderer: BooleanBadgeCell,
};

const SALVAGABLE_COLUMN = {
  fieldName: FIELDS.SALVAGABLE,
  title: "Salvagable",
  renderer: BooleanBadgeCell,
};

const BASE_MONETARY_VALUE_COLUMN = {
  fieldName: FIELDS.BASE_MONETARY_VALUE,
  title: "Base Monetary Value",
  renderer: MonetaryValueCell,
};

const EQUIPPABLE_COLUMN = {
  fieldName: FIELDS.EQUIPPABLE,
  title: "Equippable",
  renderer: BooleanBadgeCell,
};

const BREAKABLE_COLUMN = {
  fieldName: FIELDS.BREAKABLE,
  title: "Breakable",
  renderer: BooleanBadgeCell,
};

const BASE_DURABILITY_COLUMN = {
  fieldName: FIELDS.BASE_DURABILITY,
  title: "Base Durability",
};

const CURRENT_DURABILITY_COLUMN = {
  fieldName: FIELDS.CURRENT_DURABILITY,
  title: "Base Durability",
};

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

export const armorItemsTableColumns: TableColumn[] = [
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
