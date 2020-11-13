import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { SyntheticEvent } from "react";
import { CharacterAttributes } from "@super-cascadia-rpg/api";
import Form from "react-bootstrap/Form";
import { CharacterAttributeInput } from "../../../components/forms/CharacterAttributeInput";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as yup from "yup";
import updateCharacterAttributes from "../../../api/characterAttributes/updateCharacterAttributes";
import { toString } from "lodash";

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
    updateCharacterAttributes(
      characterAttributes.id,
      values as CharacterAttributes
    ).then(() => {
      actions.setSubmitting(true);
      actions.resetForm();
      handleClose();
    });
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
                <CharacterAttributeInput
                  id="strength"
                  label="Strength"
                  value={toString(values.strength)}
                  onChange={(e: SyntheticEvent) => handleChange(e)}
                  description="The physical strength of your character."
                />

                <CharacterAttributeInput
                  id="dexterity"
                  label="Dexterity"
                  value={toString(values.dexterity)}
                  onChange={(e: SyntheticEvent) => handleChange(e)}
                  description="The reaction speed of your character."
                />
                <CharacterAttributeInput
                  id="vitality"
                  label="Vitality"
                  value={toString(values.vitality)}
                  onChange={(e: SyntheticEvent) => handleChange(e)}
                  description="The hardiness of your character."
                />

                <CharacterAttributeInput
                  id="intelligence"
                  label="Intelligence"
                  value={toString(values.intelligence)}
                  onChange={(e: SyntheticEvent) => handleChange(e)}
                  description="The intellect of your character."
                />
                <CharacterAttributeInput
                  id="mind"
                  label="Mind"
                  value={toString(values.mind)}
                  onChange={(e: SyntheticEvent) => handleChange(e)}
                  description="The strength of your character's resolve"
                />

                <CharacterAttributeInput
                  id="piety"
                  label="Piety"
                  value={toString(values.piety)}
                  onChange={(e: SyntheticEvent) => handleChange(e)}
                  description="The power of your character's faith in a higher power."
                />
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleClose()}>
                Close
              </Button>
              <Button variant="primary" onClick={() => handleSubmit()}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }}
    </Formik>
  );
}
