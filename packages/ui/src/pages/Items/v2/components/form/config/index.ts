import { FIELDS } from "../../../config/fields.config";

export const CONSUMABLE_ITEM_FORM_CONFIG = [
  { id: FIELDS.NAME, label: "Name", fields: [FIELDS.NAME] },
  {
    id: FIELDS.DESCRIPTION,
    label: "Description",
    fields: [FIELDS.DESCRIPTION],
  },
  {
    id: FIELDS.BASE_MONETARY_VALUE,
    label: "Base Monetary Value",
    fields: [FIELDS.BASE_MONETARY_VALUE],
  },
  { id: FIELDS.SALVAGABLE, label: "Salvagable", fields: [FIELDS.SALVAGABLE] },
  { id: FIELDS.CONSUMABLE, label: "Consumable", fields: [FIELDS.CONSUMABLE] },
  // {
  //   fields: [FIELDS.RECOVERS_HEALTH, FIELDS.HEALTH_RECOVERY_FACTOR],
  // },
];
