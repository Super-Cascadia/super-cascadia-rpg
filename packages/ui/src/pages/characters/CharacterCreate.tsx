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
        onChange={handleFormChange}
        label="First Name"
        id={"firstName"}
        value={values.firstName}
        touched={touched.firstName}
        errors={errors.firstName}
      />

      <TextInput
        onChange={handleFormChange}
        label="Last Name"
        id="lastName"
        value={values.lastName}
        touched={touched.lastName}
        errors={errors.lastName}
      />

      <TextInput
        onChange={handleFormChange}
        label="Description"
        id="description"
        value={values.description}
        touched={touched.description}
        errors={errors.description}
        inputDescription="a description of the character"
      />

      <SelectInput
        onChange={handleFormChange}
        label="Primary Class"
        id="primaryClass"
        options={primaryClassOptions}
        value={values.primaryClass}
        inputDescription="The Primary class of the character. Determines key attributes and modifiers."
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
      {({ handleSubmit, handleChange, values, touched, isValid, errors }) => {
        return (
          <Form onSubmit={handleSubmit} noValidate>
            <ObjectCreatePageWrapper
              name={"Create new Character"}
              isValid={isValid}
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
