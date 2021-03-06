import { FIELDS } from "../../../config/fields.config";
import {
  DescriptionTextInput,
  StandardTextInput,
  BaseMonetaryValueInput,
  SalvageableInput,
  ConsumableInput,
  RecoversHealthInput,
  RecoversManaInput,
  RecoversStaminaInput,
} from "../mapping/fieldControl.mapping";

export const CONSUMABLE_ITEM_FORM_CONFIG = [
  {
    id: FIELDS.NAME,
    label: "Name",
    fields: [FIELDS.NAME],
    component: StandardTextInput,
  },
  {
    id: FIELDS.DESCRIPTION,
    label: "Description",
    fields: [FIELDS.DESCRIPTION],
    component: DescriptionTextInput,
  },
  {
    id: FIELDS.BASE_MONETARY_VALUE,
    label: "Base Monetary Value",
    fields: [FIELDS.BASE_MONETARY_VALUE],
    component: BaseMonetaryValueInput,
  },
  {
    id: FIELDS.SALVAGABLE,
    label: "Salvagable?",
    fields: [FIELDS.SALVAGABLE],
    component: SalvageableInput,
  },
  {
    id: FIELDS.CONSUMABLE,
    label: "Consumable?",
    fields: [FIELDS.CONSUMABLE],
    component: ConsumableInput,
  },
  {
    id: FIELDS.RECOVERS_HEALTH,
    label: "Recovers Health?",
    fields: [FIELDS.RECOVERS_HEALTH, FIELDS.HEALTH_RECOVERY_FACTOR],
    component: RecoversHealthInput,
  },
  {
    id: FIELDS.RECOVERS_MANA,
    label: "Recovers Mana?",
    fields: [FIELDS.RECOVERS_MANA, FIELDS.MANA_RECOVERY_FACTOR],
    component: RecoversManaInput,
  },
  {
    id: FIELDS.RECOVERS_STAMINA,
    label: "Recovers Stamina?",
    fields: [FIELDS.RECOVERS_STAMINA, FIELDS.STAMINA_RECOVERY_FACTOR],
    component: RecoversStaminaInput,
  },
];
