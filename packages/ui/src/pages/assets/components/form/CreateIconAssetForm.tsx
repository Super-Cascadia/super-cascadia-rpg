import React, { SyntheticEvent } from "react";
import { FormikErrors, FormikTouched, FormikValues } from "formik";
import { TextInput } from "../../../../components/forms/TextInput";
import Form from "react-bootstrap/Form";

interface Values {
  name: string;
  description: string;
  assetPath: string;
  width: number;
  height: number;
}

export function CreateIconAssetForm({
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
      <Form.Row>
        <TextInput
          label="Asset Path"
          id="assetPath"
          value={values.assetPath}
          touched={touched.assetPath}
          errors={errors.assetPath}
          onChange={(e: SyntheticEvent) => handleChange(e)}
        />
      </Form.Row>
      <Form.Row>
        <TextInput
          label="Height"
          id="height"
          value={values.height}
          touched={touched.height}
          errors={errors.height}
          onChange={(e: SyntheticEvent) => handleChange(e)}
        />
        <TextInput
          label="Width"
          id="width"
          value={values.width}
          touched={touched.width}
          errors={errors.width}
          onChange={(e: SyntheticEvent) => handleChange(e)}
        />
      </Form.Row>
    </div>
  );
}
