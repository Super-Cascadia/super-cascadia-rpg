import { TableColumn } from "../ItemsPage";
import {
  BadgeCell,
  BooleanBadgeCell,
  EffectFactorBadgeCell,
  IconCell,
  MonetaryValueCell,
} from "../components/table/cells/badgeCells";
import { FIELDS } from "./fields.config";

export const consumableItemsTableColumns: TableColumn[] = [
  {
    fieldName: FIELDS.ID,
    title: "ID",
    renderer: BadgeCell,
  },
  {
    fieldName: FIELDS.ICON,
    title: "Icon",
    renderer: IconCell,
  },
  {
    fieldName: FIELDS.NAME,
    title: "Name",
  },
  {
    fieldName: FIELDS.DESCRIPTION,
    title: "Description",
  },
  {
    fieldName: FIELDS.CONSUMABLE,
    title: "Consumable",
    renderer: BooleanBadgeCell,
  },
  {
    fieldName: FIELDS.SALVAGABLE,
    title: "Salvagable",
    renderer: BooleanBadgeCell,
  },
  {
    fieldName: FIELDS.BASE_MONETARY_VALUE,
    title: "Base Monetary Value",
    renderer: MonetaryValueCell,
  },
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
