import React from "react";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as yup from "yup";
import BasicModal from "../../../../../components/modal/BasicModal";
import { BasicConsumableItem } from "@super-cascadia-rpg/api/src/db/entity/items/v2/consumables/BasicConsumableItem";
import { EditItemForm } from "../form/EditItemForm";

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
  item: BasicConsumableItem;
  handleClose: () => void;
}

export default function EditItemModal({ item, show, handleClose }: Props) {
  const handleSubmitSuccess = (actions: FormikHelpers<any>) => () => {
    actions.resetForm({
      values: {},
    });
    handleClose();
  };

  const handleSubmit = (values: FormikValues, actions: FormikHelpers<any>) => {
    console.log(values);

    actions.setSubmitting(true);

    // const iconAssetObject = {
    //   ...values,
    // } as IconAsset;

    // updateIconAsset(iconAsset.id, iconAssetObject).then(
    handleSubmitSuccess(actions);
    // );
  };

  const initialFormState = {
    name: item.name,
    description: item.description,
    salvageable: item.salvagable,
    baseMonetaryValue: item.baseMonetaryValue,
    consumable: item.consumable,
    recoversHealth: item.recoversHealth,
    healthRecoveryFactor: item.healthRecoveryFactor,
    recoversMana: item.recoversMana,
    manaRecoveryFactor: item.manaRecoveryFactor,
    recoversStamina: item.recoversStamina,
    staminaRecoveryFactor: item.staminaRecoveryFactor,
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
            title={item.name}
            submitButtonLabel="Update"
            show={show}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          >
            <EditItemForm
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
