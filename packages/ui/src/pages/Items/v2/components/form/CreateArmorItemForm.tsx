import React, { SyntheticEvent } from "react";
import { FormikErrors, FormikTouched } from "formik";
import Form from "react-bootstrap/Form";
import { TextInput } from "../../../../../components/forms/TextInput";
import { SwitchInput } from "../../../../../components/forms/SwitchInput";

interface Values {
  name: string;
  description: string;
  salvageable: boolean;
  baseMonetaryValue: number;
}

interface Props {
  handleChange: (event: React.SyntheticEvent) => void;
  values: Values;
  touched: FormikTouched<Values>;
  errors: FormikErrors<Values>;
}

export function CreateArmorItemForm({
  values,
  touched,
  errors,
  handleChange,
}: Props) {
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
          value={values.baseMonetaryValue.toString()}
          touched={touched.baseMonetaryValue}
          errors={errors.baseMonetaryValue}
          onChange={(e: SyntheticEvent) => handleChange(e)}
        />
      </Form.Row>
      <hr />
      <Form.Row>
        <SwitchInput
          id="salvageable"
          label="Salvageable?"
          checked={values.salvageable}
          onChange={(e: SyntheticEvent) => handleChange(e)}
        />
      </Form.Row>
    </div>
  );
}
