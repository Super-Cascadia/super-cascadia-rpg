import { FIELDS } from "../../../config/fields.config";
import React, { SyntheticEvent } from "react";
import { TextInput } from "../../../../../../components/forms/TextInput";
import { SwitchInput } from "../../../../../../components/forms/SwitchInput";
import { Dictionary } from "lodash";
import { FormikFieldState } from "../CreateConsumableItemForm";

export type IInput = (
  id: string,
  label: string,
  formikState: Dictionary<FormikFieldState>,
  handleChange: (event: React.SyntheticEvent) => void
) => JSX.Element;

const StandardTextInput: IInput = (
  id: string,
  label: string,
  formikState: Dictionary<FormikFieldState>,
  handleChange: (event: React.SyntheticEvent) => void
) => {
  return (
    <TextInput
      label={label}
      id={id}
      value={value}
      touched={touched}
      errors={errors}
      onChange={(e: SyntheticEvent) => handleChange(e)}
    />
  );
};

const StandardSwitchInput: IInput = (
  id: string,
  label: string,
  value: boolean,
  touched: boolean,
  errors: string,
  handleChange: (event: React.SyntheticEvent) => void
) => {
  return (
    <SwitchInput
      id="recoversStamina"
      label="Recovers Stamina?"
      checked={value}
      onChange={(e: SyntheticEvent) => handleChange(e)}
    />
  );
};

interface IFormControlMapping {
  [index: string]: IInput;
}

export const FORM_CONTROL_MAPPING: IFormControlMapping = {
  [FIELDS.NAME]: StandardTextInput,
  [FIELDS.DESCRIPTION]: StandardTextInput,
  [FIELDS.BASE_MONETARY_VALUE]: StandardTextInput,
  [FIELDS.SALVAGABLE]: StandardSwitchInput,
  [FIELDS.CONSUMABLE]: StandardSwitchInput,
  [FIELDS.RECOVERS_HEALTH]: StandardSwitchInput,
  [FIELDS.HEALTH_RECOVERY_FACTOR]: StandardTextInput,
  [FIELDS.RECOVERS_MANA]: StandardSwitchInput,
  [FIELDS.MANA_RECOVERY_FACTOR]: StandardTextInput,
  [FIELDS.RECOVERS_STAMINA]: StandardSwitchInput,
  [FIELDS.STAMINA_RECOVERY_FACTOR]: StandardTextInput,
};
