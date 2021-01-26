import React from "react";
import { FormikErrors, FormikTouched } from "formik";
import { FIELDS } from "../../config/fields.config";
import { map, isString, get } from "lodash";
import { formControlMapping } from "./mapping/fieldControl.mapping";

export interface ConsumableItemFormValues {
  name: string;
  description: string;
  salvageable: boolean;
  consumable: boolean;
  baseMonetaryValue: number;
  recoversHealth: boolean;
  healthRecoveryFactor: string;
  recoversMana: boolean;
  manaRecoveryFactor: string;
  recoversStamina: boolean;
  staminaRecoveryFactor: string;
}

const formConfig = [
  FIELDS.NAME,
  FIELDS.DESCRIPTION,
  FIELDS.BASE_MONETARY_VALUE,
  FIELDS.SALVAGABLE,
  FIELDS.CONSUMABLE,
  {
    fields: [FIELDS.RECOVERS_HEALTH, FIELDS.HEALTH_RECOVERY_FACTOR],
  },
];

interface Props {
  handleChange: (event: React.SyntheticEvent) => void;
  values: ConsumableItemFormValues;
  touched: FormikTouched<ConsumableItemFormValues>;
  errors: FormikErrors<ConsumableItemFormValues>;
}

const useMapping = true;

function getMap(
  values: ConsumableItemFormValues,
  touched: FormikTouched<ConsumableItemFormValues>,
  errors: FormikErrors<ConsumableItemFormValues>,
  handleChange: (event: React.SyntheticEvent) => void
) {
  return map(formConfig, (config) => {
    if (isString(config)) {
      const fieldId: string = config as string;
      const control = get(formControlMapping, fieldId);
      const value = get(values, fieldId);
      const touchedState: boolean = get(touched, fieldId, false);
      const errorState: string = get(errors, fieldId);

      return control(
        fieldId,
        "foo",
        value,
        touchedState,
        errorState,
        handleChange
      );
    } else {
      return;
    }
  });
}

export function CreateConsumableItemForm({
  values,
  touched,
  errors,
  handleChange,
}: Props) {
  console.log("values", values);

  return <div>{getMap(values, touched, errors, handleChange)}</div>;
}
