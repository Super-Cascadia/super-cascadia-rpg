import React from "react";
import { FormikErrors, FormikTouched, FormikValues } from "formik";
import { TextInput } from "../../../../components/forms/TextInput";
import { SelectInput } from "../../../../components/forms/SelectInput";
import { itemTypeOptions } from "../../constants";

export interface Values {
  name: string;
  type: number;
  description: string;
  icon: string;
}

export default function ItemCreateForm({
  handleFormChange,
  values,
  touched,
  errors,
}: {
  handleFormChange: (event: React.SyntheticEvent) => void;
  values: FormikValues;
  touched: FormikTouched<Values>;
  errors: FormikErrors<Values>;
}) {
  return (
    <>
      <TextInput
        label="Name"
        id="name"
        inputDescription="The name of the item."
        onChange={handleFormChange}
        value={values.name}
        touched={touched.name}
        errors={errors.name}
      />

      <TextInput
        label={"Description"}
        id="description"
        inputDescription="a description of the item"
        onChange={handleFormChange}
        value={values.description}
        touched={touched.description}
        errors={errors.description}
      />

      <TextInput
        label={"Icon"}
        id="icon"
        inputDescription="the icon of the item"
        onChange={handleFormChange}
        value={values.icon}
        touched={touched.icon}
        errors={errors.icon}
      />

      <SelectInput
        onChange={handleFormChange}
        label="Item Type"
        id="type"
        value={values.type}
        options={itemTypeOptions}
        inputDescription="The classification of the item."
      />
    </>
  );
}
