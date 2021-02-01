import React, { SyntheticEvent } from "react";
import { FormikFieldState } from "../CreateConsumableItemForm";
import { Dictionary } from "lodash";
import { TextInput } from "../../../../../../components/forms/TextInput";
import { SwitchInput } from "../../../../../../components/forms/SwitchInput";

export type IInput = (
  id: string,
  label: string,
  formikState: Dictionary<FormikFieldState>,
  handleChange: (event: React.SyntheticEvent) => void
) => JSX.Element;

export const StandardTextInput: IInput = (
  id: string,
  label: string,
  formikState: Dictionary<FormikFieldState>,
  handleChange: (event: React.SyntheticEvent) => void
) => {
  const { name } = formikState;

  return (
    <TextInput
      label={label}
      id={id}
      value={name.value}
      touched={name.touched}
      errors={name.errors}
      onChange={(e: SyntheticEvent) => handleChange(e)}
    />
  );
};

export const DescriptionTextInput: IInput = (
  id: string,
  label: string,
  formikState: Dictionary<FormikFieldState>,
  handleChange: (event: React.SyntheticEvent) => void
) => {
  const { description } = formikState;

  return (
    <TextInput
      label={label}
      id={id}
      value={description.value}
      touched={description.touched}
      errors={description.errors}
      onChange={(e: SyntheticEvent) => handleChange(e)}
    />
  );
};

export const BaseMonetaryValueInput: IInput = (
  id: string,
  label: string,
  formikState: Dictionary<FormikFieldState>,
  handleChange: (event: React.SyntheticEvent) => void
) => {
  const { baseMonetaryValue } = formikState;

  return (
    <TextInput
      label={label}
      id={id}
      value={baseMonetaryValue.value}
      touched={baseMonetaryValue.touched}
      errors={baseMonetaryValue.errors}
      onChange={(e: SyntheticEvent) => handleChange(e)}
    />
  );
};

export const SalvageableInput: IInput = (
  id: string,
  label: string,
  formikState: Dictionary<FormikFieldState>,
  handleChange: (event: React.SyntheticEvent) => void
) => {
  const { salvagable } = formikState;

  return (
    <SwitchInput
      label={label}
      id={id}
      value={salvagable.value}
      touched={salvagable.touched}
      errors={salvagable.errors}
      onChange={(e: SyntheticEvent) => handleChange(e)}
    />
  );
};

export const ConsumableInput: IInput = (
  id: string,
  label: string,
  formikState: Dictionary<FormikFieldState>,
  handleChange: (event: React.SyntheticEvent) => void
) => {
  const { consumable } = formikState;

  return (
    <SwitchInput
      label={label}
      id={id}
      value={consumable.value}
      touched={consumable.touched}
      errors={consumable.errors}
      onChange={(e: SyntheticEvent) => handleChange(e)}
    />
  );
};

export const RecoversHealthInput: IInput = (
  id: string,
  label: string,
  formikState: Dictionary<FormikFieldState>,
  handleChange: (event: React.SyntheticEvent) => void
) => {
  const { recoversHealth, healthRecoveryFactor } = formikState;

  return (
    <div>
      <SwitchInput
        label={label}
        id={id}
        value={recoversHealth.value}
        touched={recoversHealth.touched}
        errors={recoversHealth.errors}
        onChange={(e: SyntheticEvent) => handleChange(e)}
      />
      {recoversHealth.value === true && (
        <TextInput
          label={label}
          id={id}
          value={healthRecoveryFactor.value}
          touched={healthRecoveryFactor.touched}
          errors={healthRecoveryFactor.errors}
          onChange={(e: SyntheticEvent) => handleChange(e)}
        />
      )}
    </div>
  );
};
