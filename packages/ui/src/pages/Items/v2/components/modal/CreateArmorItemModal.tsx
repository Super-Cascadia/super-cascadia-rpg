import React from "react";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as yup from "yup";
import BasicModal from "../../../../../components/modal/BasicModal";
import { useLocation } from "react-router-dom";
import { last } from "lodash";
import { CreateArmorItemForm } from "../form/CreateArmorItemForm";

const schema = yup.object({
  name: yup.string(),
  description: yup.string(),
  salvageable: yup.boolean(),
  baseMonetaryValue: yup.number(),
});

interface Props {
  show: boolean;
  handleClose: () => void;
}

export default function CreateArmorItemModal({ show, handleClose }: Props) {
  let { pathname } = useLocation();
  const itemType = last(pathname.split("/"));
  console.log("useLocation", pathname, itemType);

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
            <CreateArmorItemForm
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
