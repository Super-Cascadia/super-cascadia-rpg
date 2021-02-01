import React from "react";
import { FormikErrors, FormikTouched } from "formik";
import { map, get, mapKeys, Dictionary } from "lodash";
import { CONSUMABLE_ITEM_FORM_CONFIG } from "./config";
import { FIELDS } from "../../config/fields.config";

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

function getFormikState(id: string, formikState: FormikState) {
  const value = get(formikState.values, id);
  const touched: boolean = get(formikState.touched, id, false);
  const errors: string = get(formikState.errors, id);

  return { value, touched, errors };
}

interface FormikState {
  values: ConsumableItemFormValues;
  touched: FormikTouched<ConsumableItemFormValues>;
  errors: FormikErrors<ConsumableItemFormValues>;
}

export interface FormikFieldState {
  id: FIELDS;
  value: any;
  touched: boolean;
  errors: string;
}

function getFieldState(
  fields: FIELDS[],
  formikState: {
    touched: FormikTouched<ConsumableItemFormValues>;
    values: ConsumableItemFormValues;
    errors: FormikErrors<ConsumableItemFormValues>;
  }
) {
  const fieldsWithFormState: FormikFieldState[] = map(fields, (field) => {
    return {
      id: field,
      ...getFormikState(field, formikState),
    };
  });

  const fieldState: Dictionary<FormikFieldState> = mapKeys(
    fieldsWithFormState,
    (field) => field.id
  );

  return fieldState;
}

function getFormControls(
  values: ConsumableItemFormValues,
  touched: FormikTouched<ConsumableItemFormValues>,
  errors: FormikErrors<ConsumableItemFormValues>,
  handleChange: (event: React.SyntheticEvent) => void
) {
  return map(CONSUMABLE_ITEM_FORM_CONFIG, (config) => {
    const { id, label, fields, component } = config;
    const formikState = {
      values,
      touched,
      errors,
    };

    const fieldState = getFieldState(fields, formikState);

    return component(id, label, fieldState, handleChange);
  });
}

export function CreateConsumableItemForm({
  values,
  touched,
  errors,
  handleChange,
}: Props) {
  console.log("values", values);

  return <div>{getFormControls(values, touched, errors, handleChange)}</div>;
}
