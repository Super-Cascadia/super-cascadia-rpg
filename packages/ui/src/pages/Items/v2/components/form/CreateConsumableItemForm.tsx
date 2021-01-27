import React from "react";
import { FormikErrors, FormikTouched } from "formik";
import { map, isString, get } from "lodash";
import { FORM_CONTROL_MAPPING } from "./mapping/fieldControl.mapping";
import { CONSUMABLE_ITEM_FORM_CONFIG } from "./config";

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

interface Props {
  handleChange: (event: React.SyntheticEvent) => void;
  values: ConsumableItemFormValues;
  touched: FormikTouched<ConsumableItemFormValues>;
  errors: FormikErrors<ConsumableItemFormValues>;
}

function getMap(
  values: ConsumableItemFormValues,
  touched: FormikTouched<ConsumableItemFormValues>,
  errors: FormikErrors<ConsumableItemFormValues>,
  handleChange: (event: React.SyntheticEvent) => void
) {
  return map(CONSUMABLE_ITEM_FORM_CONFIG, (config) => {
    const { id, label } = config;
    const Control = get(FORM_CONTROL_MAPPING, id);
    const value = get(values, id);
    const touchedState: boolean = get(touched, id, false);
    const errorState: string = get(errors, id);

    return Control(id, label, value, touchedState, errorState, handleChange);
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
