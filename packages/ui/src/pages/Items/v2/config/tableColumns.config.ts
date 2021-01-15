import {
  ActionsCell,
  BadgeCell,
  BooleanBadgeCell,
  EffectFactorBadgeCell,
  IconCell,
  TextCell,
  MonetaryValueCell,
} from "../components/table/cells/badgeCells";
import { FIELDS } from "./fields.config";

export const ID_COLUMN = {
  fieldName: FIELDS.ID,
  title: "ID",
  renderer: BadgeCell,
};

export const ICON_COLUMN = {
  fieldName: FIELDS.ICON,
  title: "Icon",
  renderer: IconCell,
};

export const NAME_COLUMN = {
  fieldName: FIELDS.NAME,
  title: "Name",
  renderer: TextCell,
};

export const DESCRIPTION_COLUMN = {
  fieldName: FIELDS.DESCRIPTION,
  title: "Description",
  renderer: TextCell,
};

export const CONSUMABLE_COLUMN = {
  fieldName: FIELDS.CONSUMABLE,
  title: "Consumable",
  renderer: BooleanBadgeCell,
};

export const SALVAGABLE_COLUMN = {
  fieldName: FIELDS.SALVAGABLE,
  title: "Salvagable",
  renderer: BooleanBadgeCell,
};

export const BASE_MONETARY_VALUE_COLUMN = {
  fieldName: FIELDS.BASE_MONETARY_VALUE,
  title: "Base Monetary Value",
  renderer: MonetaryValueCell,
};

export const EQUIPPABLE_COLUMN = {
  fieldName: FIELDS.EQUIPPABLE,
  title: "Equippable",
  renderer: BooleanBadgeCell,
};

export const BREAKABLE_COLUMN = {
  fieldName: FIELDS.BREAKABLE,
  title: "Breakable",
  renderer: BooleanBadgeCell,
};

export const BASE_DURABILITY_COLUMN = {
  fieldName: FIELDS.BASE_DURABILITY,
  title: "Base Durability",
  renderer: EffectFactorBadgeCell,
};

export const CURRENT_DURABILITY_COLUMN = {
  fieldName: FIELDS.CURRENT_DURABILITY,
  title: "Base Durability",
  renderer: EffectFactorBadgeCell,
};

export const ACTIONS_COLUMN = {
  title: "Actions",
  fieldName: "actions",
};
