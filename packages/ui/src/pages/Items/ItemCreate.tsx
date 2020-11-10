import React, { SyntheticEvent, useState } from "react";
import { ItemType } from "@super-cascadia-rpg/api";
import createItem from "../../api/items/createItem";
import { useHistory } from "react-router-dom";
import { ObjectCreatePageWrapper } from "../../components/ObjectCreatePageWrapper";
import { TextInput } from "../../components/forms/TextInput";
import { SelectInput } from "../../components/forms/SelectInput";
import { itemTypeOptions } from "./constants";
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import Form from "react-bootstrap/Form";

const initialFormState = {
  type: ItemType.FOOD,
};

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  type: yup.string().required(),
});

function ItemCreateForm({
  handleFormChange,
  values,
  touched,
  errors,
}: {
  handleFormChange: (event: React.SyntheticEvent) => void;
  values: any;
  touched: any;
  errors: any;
}) {
  return (
    <>
      <TextInput
        label="Name"
        id="name"
        onChange={handleFormChange}
        value={values.name}
        inputDescription="The name of the item."
        touched={touched.name}
        errors={errors.name}
      />

      <TextInput
        label={"Description"}
        id={"description"}
        value={values.description}
        inputDescription="a description of the item"
        onChange={handleFormChange}
        touched={touched.description}
        errors={errors.description}
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

export default function ItemCreate() {
  const history = useHistory();

  const handleFormSubmit = (values: {}, actions: FormikHelpers<any>) => {
    createItem(values).then(() => {
      actions.setSubmitting(false);
      history.push("/items");
    });
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleFormSubmit}
      initialValues={initialFormState}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => {
        console.log(values, touched, errors, isValid);

        return (
          <Form onSubmit={handleSubmit} noValidate>
            <ObjectCreatePageWrapper name={"Create new Item"} isValid={isValid}>
              <ItemCreateForm
                handleFormChange={handleChange}
                values={values}
                touched={touched}
                errors={errors}
              />
            </ObjectCreatePageWrapper>
          </Form>
        );
      }}
    </Formik>
  );
}
