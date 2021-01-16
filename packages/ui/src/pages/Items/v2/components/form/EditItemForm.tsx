import React, { SyntheticEvent } from "react";
import { FormikErrors, FormikTouched, FormikValues } from "formik";
import Form from "react-bootstrap/Form";
import { TextInput } from "../../../../../components/forms/TextInput";
import { SwitchInput } from "../../../../../components/forms/SwitchInput";

interface Values {
  name: string;
  description: string;
  salvageable: boolean;
  consumable: boolean;
  recoversHealth: boolean;
  healthRecoveryFactor: string;
  recoversMana: boolean;
  manaRecoveryFactor: string;
  recoversStamina: boolean;
  staminaRecoveryFactor: string;
}

export function EditItemForm({
  values,
  touched,
  errors,
  handleChange,
}: {
  handleChange: (event: React.SyntheticEvent) => void;
  values: FormikValues;
  touched: FormikTouched<Values>;
  errors: FormikErrors<Values>;
}) {
  console.log("values", values);

  return (
    <div>
      <Form.Row>
        <TextInput
          label="Name"
          id="name"
          value={values.name}
          touched={touched.name}
          errors={errors.name}
          onChange={(e: SyntheticEvent) => handleChange(e)}
        />
      </Form.Row>
      <Form.Row>
        <TextInput
          label="Description"
          id="description"
          value={values.description}
          touched={touched.description}
          errors={errors.description}
          onChange={(e: SyntheticEvent) => handleChange(e)}
        />
      </Form.Row>
      <Form.Row>
        <TextInput
          label="Base Monetary Value"
          id="baseMonetaryValue"
          value={values.description}
          touched={touched.description}
          errors={errors.description}
          onChange={(e: SyntheticEvent) => handleChange(e)}
        />
      </Form.Row>
      <hr />
      <Form.Row>
        <SwitchInput
          id="salvageable"
          label="Salvageable?"
          checked={values.salvageable}
        />
      </Form.Row>
      <hr />
      <Form.Row>
        <SwitchInput
          id="consumable"
          label="Consumable?"
          checked={values.consumable}
        />
      </Form.Row>
      <hr />
      <Form.Row>
        <SwitchInput
          id="recoversHealth"
          label="Recovers Health?"
          checked={values.recoversHealth}
        />
      </Form.Row>
      <hr />
      <Form.Row>
        <SwitchInput
          id="recoversMana"
          label="Recovers Mana?"
          checked={values.recoversMana}
        />
      </Form.Row>
      <hr />
      <Form.Row>
        <SwitchInput
          id="recoversStamina"
          label="Recovers Stamina?"
          checked={values.recoversStamina}
        />
      </Form.Row>
    </div>
  );
}
