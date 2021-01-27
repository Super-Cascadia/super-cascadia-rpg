import { FIELDS } from "../../../config/fields.config";

export const CONSUMABLE_ITEM_FORM_CONFIG = [
  { id: FIELDS.NAME, label: "Name" },
  { id: FIELDS.DESCRIPTION, label: "Description" },
  { id: FIELDS.BASE_MONETARY_VALUE, label: "Base Monetary Value" },
  { id: FIELDS.SALVAGABLE, label: "Salvagable" },
  { id: FIELDS.CONSUMABLE, label: "Consumable" },
  // {
  //   fields: [FIELDS.RECOVERS_HEALTH, FIELDS.HEALTH_RECOVERY_FACTOR],
  // },
];
