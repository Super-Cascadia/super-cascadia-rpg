import { FIELDS } from "../../../config/fields.config";
import React, { SyntheticEvent } from "react";
import { TextInput } from "../../../../../../components/forms/TextInput";
import { SwitchInput } from "../../../../../../components/forms/SwitchInput";

const standardTextInput: IInput = (
  id: string,
  label: string,
  value: string,
  touched: boolean,
  errors: string,
  handleChange: (event: React.SyntheticEvent) => void
) => {
  return (
    <TextInput
      label="Name"
      id="name"
      value={value}
      touched={touched}
      errors={errors}
      onChange={(e: SyntheticEvent) => handleChange(e)}
    />
  );
};

const standardSwitchInput: IInput = (
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

export type IInput = (
  id: string,
  label: string,
  value: any,
  touched: boolean,
  errors: string,
  handleChange: (event: React.SyntheticEvent) => void
) => JSX.Element;

// export type FormControlMapping = Dictionary<ISwitchInput | ITextInput>;
// export type Control = ISwitchInput | ITextInput;

export const formControlMapping: {
  [index: string]: IInput;
} = {
  [FIELDS.NAME]: standardTextInput,
  [FIELDS.DESCRIPTION]: standardTextInput,
  [FIELDS.BASE_MONETARY_VALUE]: standardTextInput,
  [FIELDS.SALVAGABLE]: standardSwitchInput,
  [FIELDS.CONSUMABLE]: standardSwitchInput,
  [FIELDS.RECOVERS_HEALTH]: standardSwitchInput,
  [FIELDS.HEALTH_RECOVERY_FACTOR]: standardTextInput,
  [FIELDS.RECOVERS_MANA]: standardSwitchInput,
  [FIELDS.MANA_RECOVERY_FACTOR]: standardTextInput,
  [FIELDS.RECOVERS_STAMINA]: standardSwitchInput,
  [FIELDS.STAMINA_RECOVERY_FACTOR]: standardTextInput,
};
