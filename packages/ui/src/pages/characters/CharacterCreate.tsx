import React, { SyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { CharacterClassId } from "@super-cascadia-rpg/api/build/src/model/characterClass/characterClassModel";
import createCharacter from "../../api/characters/createCharacter";
import { ObjectCreatePageWrapper } from "../../components/ObjectCreatePageWrapper";
import { TextInput } from "../../components/forms/TextInput";
import { SelectInput } from "../../components/forms/SelectInput";
import { primaryClassOptions } from "./constants";
import {
  Formik,
  FormikErrors,
  FormikHelpers,
  FormikTouched,
  FormikValues,
} from "formik";
import * as yup from "yup";
import Form from "react-bootstrap/Form";

interface Values {
  firstName: string;
  lastName: string;
  description: string;
  primaryClass: number;
}

function CreateCharacterForm({
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
        label="First Name"
        id="firstName"
        onChange={handleFormChange}
        value={values.firstName}
        touched={touched.firstName}
        errors={errors.firstName}
      />

      <TextInput
        label="Last Name"
        id="lastName"
        onChange={handleFormChange}
        value={values.lastName}
        touched={touched.lastName}
        errors={errors.lastName}
      />

      <TextInput
        label="Description"
        id="description"
        inputDescription="a description of the character"
        onChange={handleFormChange}
        value={values.description}
        touched={touched.description}
        errors={errors.description}
      />

      <SelectInput
        label="Primary Class"
        id="primaryClass"
        inputDescription="The Primary class of the character. Determines key attributes and modifiers."
        onChange={handleFormChange}
        options={primaryClassOptions}
        value={values.primaryClass}
      />
    </>
  );
}

export default function CharacterCreate() {
  const history = useHistory();

  const handleSubmit = (values: FormikValues, actions: FormikHelpers<any>) => {
    createCharacter(values).then(() => {
      actions.setSubmitting(false);
      history.push("/characters");
    });
  };

  const initialFormState = {
    firstName: "",
    lastName: "",
    description: "",
    primaryClass: CharacterClassId.FREELANCER,
  };

  const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    description: yup.string().required(),
    primaryClass: yup.string().required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={initialFormState}
    >
      {({ handleSubmit, handleChange, values, touched, dirty, errors }) => {
        return (
          <Form onSubmit={handleSubmit} noValidate>
            <ObjectCreatePageWrapper
              name={"Create new CharacterWithAttributes"}
              dirty={dirty}
            >
              <CreateCharacterForm
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
