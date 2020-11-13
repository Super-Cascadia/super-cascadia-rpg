import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
import { CharacterAttributes } from "@super-cascadia-rpg/api";
import Form from "react-bootstrap/Form";
import { CharacterAttributeInput } from "../../../components/forms/CharacterAttributeInput";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as yup from "yup";

interface Props {
  show: boolean;
  characterAttributes: CharacterAttributes;
  handleClose: () => void;
}

export default function CharacterAttributesModal({
  show,
  handleClose,
  characterAttributes,
}: Props) {
  const handleSubmit = (values: FormikValues, actions: FormikHelpers<any>) => {
    actions.setSubmitting(true);
  };

  const initialFormState = {
    strength: characterAttributes.strength,
    dexterity: characterAttributes.dexterity,
    vitality: characterAttributes.vitality,
    intelligence: characterAttributes.intelligence,
    mind: characterAttributes.mind,
    piety: characterAttributes.piety,
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
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Character Attributes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          validationSchema={schema}
          onSubmit={handleSubmit}
          initialValues={initialFormState}
        >
          {({ handleSubmit, dirty, handleChange, values, touched, errors }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <CharacterAttributeInput
                  id="strength"
                  label="Strength"
                  defaultValue={values.strength}
                  handleChange={handleChange}
                  description="The physical strength of your character."
                />

                <CharacterAttributeInput
                  id="dexterity"
                  label="Dexterity"
                  defaultValue={values.dexterity}
                  handleChange={handleChange}
                  description="The reaction speed of your character."
                />
                <CharacterAttributeInput
                  id="vitality"
                  label="Vitality"
                  defaultValue={values.vitality}
                  handleChange={handleChange}
                  description="The hardiness of your character."
                />

                <CharacterAttributeInput
                  id="intelligence"
                  label="Intelligence"
                  defaultValue={values.intelligence}
                  handleChange={handleChange}
                  description="The intellect of your character."
                />
                <CharacterAttributeInput
                  id="mind"
                  label="Mind"
                  defaultValue={values.mind}
                  handleChange={handleChange}
                  description="The strength of your character's resolve"
                />

                <CharacterAttributeInput
                  id="piety"
                  label="Piety"
                  defaultValue={values.piety}
                  handleChange={handleChange}
                  description="The power of your character's faith in a higher power."
                />
              </Form>
            );
          }}
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleClose()}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
