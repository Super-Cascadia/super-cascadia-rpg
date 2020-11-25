import React from "react";
import { ItemType } from "@super-cascadia-rpg/api";
import createItem from "../../api/items/createItem";
import { useHistory } from "react-router-dom";
import { ObjectCreatePageWrapper } from "../../components/ObjectCreatePageWrapper";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import ItemCreateForm from "./components/forms/ItemCreateForm";

export default function ItemCreate() {
  const history = useHistory();

  const handleFormSubmit = (
    values: FormikValues,
    actions: FormikHelpers<any>
  ) => {
    createItem(values).then(() => {
      actions.setSubmitting(false);
      history.push("/items");
    });
  };

  const initialFormState = {
    name: "",
    description: "",
    type: ItemType.FOOD,
    icon: "",
  };

  const schema = yup.object({
    name: yup.string().min(1).required(),
    description: yup.string().min(1).required(),
    type: yup.string().required(),
    icon: yup.string().min(1).required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleFormSubmit}
      initialValues={initialFormState}
    >
      {({ handleSubmit, handleChange, values, touched, dirty, errors }) => {
        return (
          <Form onSubmit={handleSubmit} noValidate>
            <ObjectCreatePageWrapper name={"Create new Item"} dirty={dirty}>
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
