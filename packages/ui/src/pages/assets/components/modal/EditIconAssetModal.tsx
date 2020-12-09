import React from "react";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as yup from "yup";
import { CreateIconAssetForm } from "../form/CreateIconAssetForm";
import { updateIconAsset } from "../../../../api/assets/icons/getIconAssets";
import { IconAsset } from "@super-cascadia-rpg/api/build/src/db/entity/assets/icons/IconAsset";
import BasicModal from "../../../../components/modal/BasicModal";

const schema = yup.object({
  name: yup.string(),
  description: yup.string(),
  assetPath: yup.string(),
  height: yup.number(),
  width: yup.number(),
});

interface Props {
  show: boolean;
  iconAsset: IconAsset;
  handleClose: () => void;
}

export default function EditIconAssetModal({
  show,
  handleClose,
  iconAsset,
}: Props) {
  const handleSubmitSuccess = (actions: FormikHelpers<any>) => () => {
    actions.resetForm({
      values: {},
    });
    handleClose();
  };

  const handleSubmit = (values: FormikValues, actions: FormikHelpers<any>) => {
    console.log(values);

    actions.setSubmitting(true);

    const iconAssetObject = {
      ...values,
    } as IconAsset;

    updateIconAsset(iconAssetObject).then(handleSubmitSuccess(actions));
  };

  const initialFormState = {
    name: iconAsset.name,
    description: iconAsset.description,
    assetPath: iconAsset.assetPath,
    height: iconAsset.height,
    width: iconAsset.width,
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
            title={iconAsset.name}
            submitButtonLabel="Update"
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
