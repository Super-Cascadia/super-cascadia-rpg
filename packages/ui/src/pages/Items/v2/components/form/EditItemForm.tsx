import React, { SyntheticEvent } from "react";
import { FormikErrors, FormikTouched, FormikValues } from "formik";
import Form from "react-bootstrap/Form";
import { TextInput } from "../../../../../components/forms/TextInput";

interface Values {
  name: string;
  description: string;
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
    </div>
  );
}
