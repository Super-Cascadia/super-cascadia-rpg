import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { CharacterAttributes } from "@super-cascadia-rpg/api";
import Form from "react-bootstrap/Form";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as yup from "yup";
import updateCharacterAttributes from "../../../../api/characters/attributes/updateCharacterAttributes";
import { isEmpty, toNumber } from "lodash";
import { CharacterAttributesStateHook } from "../../../../hooks/store/characterStateHooks";
import fetchCharacterAttributesDataHook from "../../../../hooks/api/characters/fetchCharacterAttributesDataHook";
import Loading from "../../../../components/Loading";
import { getCharacterAttributes } from "../../../../api/characters/attributes/getCharacterAttributes";
import { CharacterAttributesForm } from "../form/CharacterAttributesForm";

interface Props {
  show: boolean;
  characterAttributes: CharacterAttributes;
  handleClose: () => void;
  id: number;
}

export default function CharacterAttributesModal({
  show,
  handleClose,
  id,
}: Props) {
  const [data, setData]: CharacterAttributesStateHook = useState({
    characterAttributes: {} as CharacterAttributes,
  });
  const { characterAttributes } = data;

  useEffect(
    fetchCharacterAttributesDataHook(toNumber(id), setData),
    // @ts-ignore
    {}
  );

  const handleSubmit = (values: FormikValues, actions: FormikHelpers<any>) => {
    updateCharacterAttributes(
      characterAttributes.id,
      values as CharacterAttributes
    ).then((response) => {
      getCharacterAttributes(id).then((updatedAttributes) => {
        actions.setSubmitting(true);
        actions.resetForm({
          values: updatedAttributes,
        });
        handleClose();
      });
    });
  };

  if (isEmpty(characterAttributes)) {
    return <Loading />;
  }

  const initialFormState = {
    strength: data.characterAttributes.strength,
    dexterity: data.characterAttributes.dexterity,
    vitality: data.characterAttributes.vitality,
    intelligence: data.characterAttributes.intelligence,
    mind: data.characterAttributes.mind,
    piety: data.characterAttributes.piety,
  };

  const schema = yup.object({
    strength: yup.number().required(),
    dexterity: yup.number().required(),
    vitality: yup.number().required(),
    intelligence: yup.number().required(),
    mind: yup.number().required(),
    piety: yup.number().required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={initialFormState}
    >
      {({ handleSubmit, dirty, handleChange, values, touched, errors }) => {
        return (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Character Attributes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <CharacterAttributesForm
                  values={values}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors}
                />
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleSubmit()}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => handleSubmit()}
                disabled={!dirty}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }}
    </Formik>
  );
}
