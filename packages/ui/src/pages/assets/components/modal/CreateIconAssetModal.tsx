import React from "react";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as yup from "yup";
import { CreateIconAssetForm } from "../form/CreateIconAssetForm";
import { createIconAsset } from "../../../../api/assets/icons/getIconAssets";
import { IconAsset } from "@super-cascadia-rpg/api/build/src/db/entity/assets/icons/IconAsset";
import BasicModal from "../../../../components/modal/BasicModal";

const initialFormState = {
  name: "",
  description: "",
  assetPath: "",
  height: "",
  width: "",
};

const schema = yup.object({
  name: yup.string(),
  description: yup.string(),
  assetPath: yup.string(),
  height: yup.number(),
  width: yup.number(),
});

interface Props {
  show: boolean;
  handleClose: () => void;
}

export default function CreateIconAssetModal({ show, handleClose }: Props) {
  function handleSubmitSuccess(actions: FormikHelpers<any>) {
    return () => {
      actions.resetForm({
        values: {},
      });
      handleClose();
    };
  }

  const handleSubmit = (values: FormikValues, actions: FormikHelpers<any>) => {
    console.log(values);

    actions.setSubmitting(true);

    const iconAssetObject = {
      ...values,
    } as IconAsset;

    createIconAsset(iconAssetObject).then(handleSubmitSuccess(actions));
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
            title="Create Icon"
            submitButtonLabel="Create Icon"
            show={show}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          >
            <CreateIconAssetForm
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
