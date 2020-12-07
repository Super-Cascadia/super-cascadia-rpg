import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import { CreateIconAssetForm } from "../form/CreateIconAssetForm";
import CharacterEditForm from "../../../characters/components/form/CharacterEditForm";

interface Props {
  show: boolean;
  handleClose: () => void;
}

export default function CreateIconAssetModal({ show, handleClose }: Props) {
  function handleUpdateSuccess(actions: FormikHelpers<any>) {
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

    // updateCharacterEquipment(
    //   characterId,
    //   values.inventoryId,
    //   equipmentLocation
    // ).then(handleUpdateSuccess(actions));
  };

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

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={initialFormState}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => {
        console.log("values", values);

        return (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Create New Icon</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col sm={12}>
                  <Form onSubmit={handleSubmit} noValidate>
                    <CreateIconAssetForm
                      handleChange={handleChange}
                      values={values}
                      touched={touched}
                      errors={errors}
                    />
                  </Form>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleSubmit()}>
                Cancel
              </Button>
              <Button variant="success" onClick={() => handleSubmit()}>
                Create Icon
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }}
    </Formik>
  );
}
