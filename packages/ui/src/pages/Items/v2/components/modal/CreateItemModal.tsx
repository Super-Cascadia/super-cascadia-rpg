import React from "react";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as yup from "yup";
import BasicModal from "../../../../../components/modal/BasicModal";
import { CreateItemForm } from "../form/CreateItemForm";

const schema = yup.object({
  name: yup.string(),
  description: yup.string(),
  salvageable: yup.boolean(),
  baseMonetaryValue: yup.number(),
  consumable: yup.boolean(),
  recoversHealth: yup.boolean(),
  healthRecoveryFactor: yup.string(),
  recoversMana: yup.boolean(),
  manaRecoveryFactor: yup.string(),
  recoversStamina: yup.boolean(),
  staminaRecoveryFactor: yup.string(),
});

interface Props {
  show: boolean;
  handleClose: () => void;
}

export default function CreateItemModal({ show, handleClose }: Props) {
  const handleSubmitSuccess = (actions: FormikHelpers<any>) => () => {
    actions.resetForm({
      values: {},
    });
    handleClose();
  };

  const handleSubmit = (values: FormikValues, actions: FormikHelpers<any>) => {
    console.log(values);

    // actions.setSubmitting(true);
    //
    // const itemObject = {
    //   ...values,
    // } as BasicConsumableItem;
    //
    // updateConsumableItem(itemObject.id, itemObject).then(
    //   handleSubmitSuccess(actions)
    // );
  };

  const handleChange = (values: FormikValues, actions: FormikHelpers<any>) => {
    console.log(values);
  };

  const initialFormState = {
    name: "",
    description: "",
    salvageable: false,
    baseMonetaryValue: 0,
    consumable: false,
    recoversHealth: false,
    healthRecoveryFactor: "",
    recoversMana: false,
    manaRecoveryFactor: "",
    recoversStamina: false,
    staminaRecoveryFactor: "",
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={initialFormState}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => {
        console.log("values", values);

        return (
          <BasicModal
            title={"Create New Item"}
            submitButtonLabel="Create"
            show={show}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          >
            <CreateItemForm
              handleChange={handleChange}
              values={values}
              touched={touched}
              errors={errors}
            />
          </BasicModal>
        );
      }}
    </Formik>
  );
}
